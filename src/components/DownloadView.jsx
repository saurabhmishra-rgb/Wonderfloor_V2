import React, { useState, useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import logoImg from '../assets/logo.png';

const DownloadView = ({ selectedProduct, currentSrc, compositeRef, onClose }) => {
  const [downloadableImage, setDownloadableImage] = useState(currentSrc);
  const printRef = useRef(null);
  const imageOnlyRef = useRef(null);
  const handleDownload = async (option) => {
    if (!currentSrc) return;

    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" &&
        navigator.maxTouchPoints > 1);

    let iosWindow = null;

    if (isIOS) {
      iosWindow = window.open("", "_blank");

      if (!iosWindow) {
        alert("Please allow popups.");
        return;
      }

      iosWindow.document.write(`
      <body style="
        margin:0;
        display:flex;
        align-items:center;
        justify-content:center;
        height:100vh;
        background:#fff;
        font-family:sans-serif;
      ">
        Processing image...
      </body>
    `);
    }

    try {
      let readyBaseImage = currentSrc;

      // Capture room image
      if (compositeRef?.current) {
        readyBaseImage = await htmlToImage.toPng(
          compositeRef.current,
          {
            pixelRatio: 2,
            cacheBust: true,
            useCORS: true,
            skipFonts: true,
            backgroundColor: "#ffffff",
          }
        );
      }

      setDownloadableImage(readyBaseImage);

      await new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(resolve);
        });
      });

      // Wait for image loading
      const targetRef =
        option === "image"
          ? imageOnlyRef.current
          : printRef.current;

      const imgs = targetRef.querySelectorAll("img");

      await Promise.all(
        [...imgs].map((img) => {
          if (img.complete) return Promise.resolve();

          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );

      // SAFARI FIX
      const canvas = await htmlToImage.toCanvas(
        targetRef,
        {
          pixelRatio: 2,
          cacheBust: true,
          useCORS: true,
          backgroundColor: "#ffffff",
        }
      );

      const dataUrl = canvas.toDataURL(
        "image/png",
        1
      );

      const fileName =
        option === "image"
          ? `Wonderfloor_Design_${Date.now()}.png`
          : `Wonderfloor_Specs_${Date.now()}.png`;

      if (isIOS && iosWindow) {
        iosWindow.document.body.innerHTML = `
        <div style="
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          height:100vh;
          padding:20px;
          text-align:center;
          font-family:sans-serif;
        ">
          <p>
            Long press image and tap
            "Save to Photos"
          </p>

          <img
            src="${dataUrl}"
            style="
              max-width:100%;
              max-height:80vh;
            "
          />
        </div>
      `;
      } else {
        const link =
          document.createElement("a");

        link.href = dataUrl;
        link.download = fileName;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
      }

      onClose?.();
    } catch (error) {
      console.error(error);

      if (iosWindow) {
        iosWindow.close();
      }

      alert(
        "Failed to generate image.\n" +
        error.message
      );
    }
  };

  // Ensure arrays display cleanly on the PDF spec sheet
  const displayUserIndustry = Array.isArray(selectedProduct.userIndustry)
    ? selectedProduct.userIndustry.join(', ')
    : selectedProduct.userIndustry;

  return (
    <>
      <button
        onClick={() => handleDownload('image')}
        className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 text-left transition-colors cursor-pointer border-b border-gray-100 w-full"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        Image
      </button>

      <button
        onClick={() => handleDownload('details')}
        className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 text-left transition-colors cursor-pointer w-full"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        Image & Product Details
      </button>

      {/* ---------------------------------------------------------------- */}
      {/* HIDDEN LAYOUT 1: JUST THE IMAGE + LOGO WATERMARK                 */}
      {/* ---------------------------------------------------------------- */}
      <div style={{
        position: "fixed",
        left: "-10000px",
        top: "0",
        width: "1000px",
        opacity: 1,
        pointerEvents: "none",
      }}>
        <div ref={imageOnlyRef} style={{ position: 'relative', display: 'inline-block' }}>

          <img
            src={downloadableImage}
            alt="Room Base"
            style={{ display: 'block', maxWidth: '1200px', height: 'auto' }}
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
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* HIDDEN LAYOUT 2: THE PRODUCT DETAILS PDF VIEW                      */}
      {/* ---------------------------------------------------------------- */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '1000px', zIndex: -9999, opacity: 0.01, pointerEvents: 'none' }}>
        <div ref={printRef} style={{ width: '1000px', padding: '40px', backgroundColor: '#ffffff', color: '#000000', fontFamily: 'sans-serif' }}>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <img src={logoImg} alt="Wonderfloor" style={{ height: '40px', objectFit: 'contain' }} />
          </div>

          <div style={{ position: 'relative', marginBottom: '32px' }}>
            <img
              src={downloadableImage}
              alt="Room Design"
              style={{ width: '100%', height: '600px', display: 'block', objectFit: 'cover', borderRadius: '8px', border: '1px solid #e5e7eb' }}
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

          <div style={{ display: 'flex', gap: '48px', paddingTop: '24px', borderTop: '2px solid #f3f4f6' }}>
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

                  { label: 'User Industry', value: displayUserIndustry },
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
