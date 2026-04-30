import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

const DownloadView = ({ selectedProduct, currentSrc, onClose }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const printRef = useRef(null);

  const handleDownload = async (option) => {
    if (!currentSrc) return;

    // Helper function for iOS download fallback
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
      if (onClose) onClose(); // Close the dropdown menu
    };

    try {
      if (option === 'image') {
        triggerDownload(currentSrc, `Wonderfloor_Design_${Date.now()}.jpg`);
      } else if (option === 'details') {
        if (!printRef.current) return;

        setIsProcessing(true);
        
        // Brief pause to ensure React has fully attached the DOM node
        await new Promise(resolve => setTimeout(resolve, 150));

        const canvas = await html2canvas(printRef.current, {
          scale: 2, // High resolution
          useCORS: true, 
          backgroundColor: '#ffffff',
          logging: false // Turn off console logs
        });

        const detailsDataUrl = canvas.toDataURL('image/jpeg', 0.9);
        triggerDownload(detailsDataUrl, `Wonderfloor_Specs_${Date.now()}.jpg`);
      }
    } catch (error) {
      console.error("Failed to generate download:", error);
      alert(`Download failed. If using an external image, it might be blocking the download due to security. Error: ${error.message}`);
      if (onClose) onClose();
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      {/* Dropdown Menu Buttons */}
      <button 
        onClick={() => handleDownload('image')} 
        className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 text-left transition-colors cursor-pointer border-b border-gray-100 w-full"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        Image
      </button>
      
      <button 
        onClick={() => handleDownload('details')} 
        disabled={isProcessing}
        className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 text-left transition-colors cursor-pointer w-full disabled:opacity-50"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        {isProcessing ? 'Generating...' : 'Image & Product Details'}
      </button>

      {/* 
        FIXED HIDDEN PRINT LAYOUT 
        Removed visibility:hidden. It is now absolutely positioned far off-screen
        so the browser paints it perfectly for html2canvas to capture.
      */}
      <div
        style={{
          position: 'absolute',
          top: '-9999px',
          left: '-9999px',
          width: '1000px',
          zIndex: -9999,
          pointerEvents: 'none'
        }}
      >
        <div 
          ref={printRef} 
          style={{ width: '1000px', padding: '40px', backgroundColor: '#ffffff', color: '#000000', fontFamily: 'sans-serif' }}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <img src="https://www.wonderfloor.co.in/assets/img/logo/logo.png" alt="Wonderfloor" style={{ height: '40px', objectFit: 'contain' }} crossOrigin="anonymous" />
          </div>

          {/* Main Room Image */}
          <img 
            src={currentSrc} 
            alt="Room Design" 
            style={{ width: '100%', height: '600px', objectFit: 'cover', borderRadius: '8px', marginBottom: '32px', border: '1px solid #e5e7eb' }} 
            crossOrigin="anonymous" 
          />

          {/* Divider / Sub-header */}
          <div style={{ borderTop: '2px solid #f3f4f6', paddingTop: '24px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src="https://www.wonderfloor.co.in/assets/img/logo/logo.png" alt="Wonderfloor" style={{ height: '24px', objectFit: 'contain' }} crossOrigin="anonymous" />
            <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: 500 }}>Powered by <strong style={{ color: '#000' }}>wonderfloor</strong></span>
          </div>

          {/* Details Section */}
          <div style={{ display: 'flex', gap: '48px' }}>
            {/* Left Side: Product Info */}
            <div style={{ width: '33.333%' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#111827', marginBottom: '20px', marginTop: 0 }}>Floors</h3>
              <div style={{ display: 'flex', gap: '16px' }}>
                <img src={selectedProduct.img} alt={selectedProduct.name} style={{ width: '80px', height: '80px', borderRadius: '4px', objectFit: 'cover', border: '1px solid #e5e7eb' }} crossOrigin="anonymous" />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '4px' }}>Wonderfloor</span>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: '#111827', lineHeight: 1.2 }}>{selectedProduct.name}</span>
                </div>
              </div>
            </div>

            {/* Right Side: Specifications Table */}
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