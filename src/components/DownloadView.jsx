import React, { useState, useRef, useEffect } from 'react';
import * as htmlToImage from 'html-to-image';
import logoImg from '../assets/logo.png'; 

const DownloadView = ({ selectedProduct, currentSrc, compositeRef, onClose }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [downloadableImage, setDownloadableImage] = useState(currentSrc);
  const printRef = useRef(null);
  const imageOnlyRef = useRef(null); 

  // Capture the live 3D layers if the visualizer is in WebGL mode
  useEffect(() => {
    if (compositeRef && compositeRef.current) {
      setIsProcessing(true);
      
      const node = compositeRef.current; 

      // Give the browser 500ms to finish rendering the images and 3D canvas
      setTimeout(() => {
        htmlToImage.toJpeg(node, {
          quality: 0.9,
          pixelRatio: 2, 
          skipFonts: true, 
          width: node.offsetWidth,  
          height: node.offsetHeight 
        }).then(dataUrl => {
          setDownloadableImage(dataUrl);
        }).catch(err => {
          console.error("Failed to capture 3D composite:", err);
          setDownloadableImage(currentSrc); 
        }).finally(() => {
          setIsProcessing(false);
        });
      }, 500); // Note: Added the missing 500ms here

    } else {
      setDownloadableImage(currentSrc);
    }
  }, [compositeRef, currentSrc]);

  const handleDownload = async (option) => {
    if (!downloadableImage) return;

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    
    const triggerDownload = (dataUrl, fileName) => {
      if (isIOS) {
        const newWindow = window.open();
        if (newWindow) {
          newWindow.document.write(`
            <body style="margin:0; background:#000; display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; color:white; font-family:sans-serif;">
              <p style="margin-bottom:20px;">Long-press the image below to "Save to Photos"</p>
              <img src="${dataUrl}" style="max-width:100%; max-height:80%; object-fit:contain;" />
            </body>
          `);
        } else {
          alert("Please allow pop-ups to download images on iOS.");
        }
      } else {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      if (onClose) onClose(); 
    };

    try {
      if (option === 'image') {
        if (!imageOnlyRef.current) return;
        setIsProcessing(true);

        // Safari needs a slightly longer timeout to register the off-screen DOM
        await new Promise(resolve => setTimeout(resolve, 300));

        // CAPTURE THE HIDDEN DIV WITH THE LOGO WATERMARK
        const finalImageDataUrl = await htmlToImage.toJpeg(imageOnlyRef.current, {
          quality: 1.0,
          pixelRatio: 1, // Set to 1 because downloadableImage is already high-res
          skipFonts: true
        });

        triggerDownload(finalImageDataUrl, `Wonderfloor_Design_${Date.now()}.jpg`);
        
      } else if (option === 'details') {
        if (!printRef.current) return;
        setIsProcessing(true);
        await new Promise(resolve => setTimeout(resolve, 300));

        const detailsDataUrl = await htmlToImage.toJpeg(printRef.current, {
          quality: 0.9,
          pixelRatio: 2,
          backgroundColor: '#ffffff',
          skipFonts: true
        });

        triggerDownload(detailsDataUrl, `Wonderfloor_Specs_${Date.now()}.jpg`);
      }
    } catch (error) {
      console.error("Failed to generate download:", error);
      alert(`Download failed. Error: ${error.message}`);
      if (onClose) onClose();
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => handleDownload('image')} 
        disabled={isProcessing}
        className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 text-left transition-colors cursor-pointer border-b border-gray-100 w-full disabled:opacity-50"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        {isProcessing && compositeRef ? 'Preparing...' : 'Image'}
      </button>
      
      <button 
        onClick={() => handleDownload('details')} 
        disabled={isProcessing}
        className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 text-left transition-colors cursor-pointer w-full disabled:opacity-50"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        {isProcessing && compositeRef ? 'Preparing...' : 'Image & Product Details'}
      </button>

      {/* ---------------------------------------------------------------- */}
      {/* HIDDEN LAYOUT 1: JUST THE IMAGE + LOGO WATERMARK                 */}
      {/* ---------------------------------------------------------------- */}
      {/* Fix: Replaced top: -9999px with position: fixed, opacity: 0 to stop Safari from culling */}
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: -9999, opacity: 0, pointerEvents: 'none' }}>
        <div ref={imageOnlyRef} style={{ position: 'relative', display: 'inline-block' }}>
          
          <img 
            src={downloadableImage} 
            alt="Room Base" 
            style={{ display: 'block', maxWidth: '1200px', height: 'auto' }} 
            // Fix: Removed crossOrigin="anonymous" to resolve Safari Data URI blackscreen bug
          />
          
          {/* The Logo Watermark - positioned at the bottom right */}
          <div style={{ position: 'absolute', bottom: '24px', right: '24px', zIndex: 10 }}>
            <img 
              src={logoImg} 
              alt="Wonderfloor" 
              style={{ 
                height: '40px', 
                objectFit: 'contain'
                // Fix: Removed background, padding, and border for transparency
              }} 
            />
          </div>

        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* HIDDEN LAYOUT 2: THE PRODUCT DETAILS PDF VIEW                      */}
      {/* ---------------------------------------------------------------- */}
      {/* Fix: Replaced top: -9999px with position: fixed, opacity: 0 to stop Safari from culling */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '1000px', zIndex: -9999, opacity: 0, pointerEvents: 'none' }}>
        <div ref={printRef} style={{ width: '1000px', padding: '40px', backgroundColor: '#ffffff', color: '#000000', fontFamily: 'sans-serif' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <img src={logoImg} alt="Wonderfloor" style={{ height: '40px', objectFit: 'contain' }} />
          </div>

          {/* Fix: Added relative positioning block to correctly house the logo overlay inside the details view */}
          <div style={{ position: 'relative', marginBottom: '32px' }}>
            <img 
              src={downloadableImage} 
              alt="Room Design" 
              style={{ width: '100%', height: '600px', display: 'block', objectFit: 'cover', borderRadius: '8px', border: '1px solid #e5e7eb' }} 
              // Fix: Removed crossOrigin="anonymous"
            />
            
            <div style={{ position: 'absolute', bottom: '24px', right: '24px', zIndex: 10 }}>
              <img 
                src={logoImg} 
                alt="Wonderfloor" 
                style={{ 
                  height: '40px', 
                  objectFit: 'contain'
                }} 
              />
            </div>
          </div>

          {/* LOGO REMOVED HERE - Changed justifyContent to flex-end to keep text on the right */}
          <div style={{ borderTop: '2px solid #f3f4f6', paddingTop: '24px', marginBottom: '32px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: 500 }}>Powered by <strong style={{ color: '#000' }}>wonderfloor</strong></span>
          </div>

          <div style={{ display: 'flex', gap: '48px' }}>
            <div style={{ width: '33.333%' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#111827', marginBottom: '20px', marginTop: 0 }}>Floors</h3>
              <div style={{ display: 'flex', gap: '16px' }}>
                <img src={selectedProduct.img} alt={selectedProduct.name} style={{ width: '80px', height: '80px', borderRadius: '4px', objectFit: 'cover', border: '1px solid #e5e7eb' }} />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '4px' }}>Wonderfloor</span>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: '#111827', lineHeight: 1.2 }}>{selectedProduct.name}</span>
                </div>
              </div>
            </div>

            <div style={{ width: '66.666%' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#111827', marginBottom: '20px', marginTop: 0 }}>Specifications</h3>
              <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #e5e7eb' }}>
                {[
                  { label: 'SKU', value: selectedProduct.sku || selectedProduct.name },
                  { label: 'Collection', value: selectedProduct.collection },
                  { label: 'Category', value: selectedProduct.category },
                  { label: 'Colour Family', value: selectedProduct.colour },
                  { label: 'Shade', value: selectedProduct.shade },
                  { label: 'Material', value: selectedProduct.materials },
                  { label: 'Size', value: selectedProduct.size },
                ].map((spec, index) => (
                  <div key={index} style={{ display: 'flex', padding: '12px 0', borderBottom: '1px solid #f3f4f6', alignItems: 'center' }}>
                    <span style={{ width: '50%', color: '#6b7280', fontWeight: 500, fontSize: '14px' }}>{spec.label}</span>
                    <span style={{ width: '50%', color: '#111827', fontWeight: 700, fontSize: '14px' }}>{spec.value || '-'}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadView;