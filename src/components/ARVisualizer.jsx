import React, { useState } from 'react';

const ARVisualizer = ({ closeModal, initialImage }) => {
  // --- Original Mock Data Restored ---
  const mockProducts = [
    { id: 1, name: 'Acton', size: '6cm x 36cm', img: 'https://www.wonderfloor.co.in/wd_admin/shades_images/37214658552107.jpg' },
    { id: 2, name: 'Holmes', size: '6cm x 36cm', img: 'https://www.wonderfloor.co.in/wd_admin/shades_images/96584713552114.jpg' },
    { id: 3, name: 'Cedar', size: '6cm x 36cm', img: 'https://www.wonderfloor.co.in/wd_admin/shades_images/16983742554306.jpg' },
    { id: 4, name: 'Faye', size: '6cm x 36cm', img: 'https://www.wonderfloor.co.in/wd_admin/shades_images/36812945557304.jpg' },
    { id: 5, name: 'Calla', size: '6cm x 136cm', img: 'https://www.wonderfloor.co.in/wd_admin/shades_images/64158972557305.jpg' },
    { id: 6, name: 'Tansy', size: '6cm x 36cm', img: 'https://www.wonderfloor.co.in/wd_admin/shades_images/21458679557306.jpg' },
    { id: 7, name: 'Poppy1', size: '6cm x 36cm', img: 'https://www.wonderfloor.co.in/wd_admin/shades_images/34527196557701.jpg' },
  ];

  // --- State ---
  const [selectedProduct, setSelectedProduct] = useState(mockProducts[0]);
  const [processedImage, setProcessedImage] = useState(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isProcessing, setIsProcessing] = useState(false);

  // --- API Logic ---
  const handleTileSelection = async (product) => {
    setSelectedProduct(product);

    if (!initialImage?.rawFile) return;

    setIsProcessing(true);
    const formData = new FormData();
    formData.append('roomImage', initialImage.rawFile);
    formData.append('tileName', product.name);

    try {
      const response = await fetch('http://localhost:5000/api/process-room', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        let finalUrl = data.processedUrl;
        if (!finalUrl && data.processedPath) {
          const filename = data.processedPath.split(/[\\/]/).pop();
          finalUrl = `http://localhost:5000/uploads/${filename}`;
        }
        if (finalUrl) {
          setProcessedImage(`${finalUrl}?t=${new Date().getTime()}`);
          setSliderPosition(50);
        }
      } else {
        console.error("AI Engine Error:", data.error);
      }
    } catch (error) {
      console.error("Network Error:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#f9fafb] flex flex-col md:flex-row z-50 overflow-hidden font-sans text-gray-800">
      
      {/* ================= LEFT SIDEBAR (Turns into Bottom Scroll on Mobile) ================= */}
      <div className="w-full md:w-[320px] bg-white border-t md:border-t-0 md:border-r border-gray-200 flex flex-col shadow-sm z-20 shrink-0 h-[170px] md:h-full order-2 md:order-1">
        
        {/* Logo Section (Hidden on mobile, moved to Top Action Bar) */}
        <div className="hidden md:flex p-5 justify-between items-center border-b border-gray-100">
          <img 
            src="https://www.wonderfloor.co.in/assets/img/logo/logo.png" 
            alt="Wonderfloor Logo" 
            className="h-8 max-w-[180px] object-contain" 
          />
          <button onClick={closeModal} className="text-gray-400 hover:text-red-500 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
        </div>

        {/* Categories Section (Hidden on small mobile to save space) */}
        <div className="hidden sm:block px-5 pt-4 pb-4">
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 border border-gray-300 rounded text-sm font-medium text-gray-700">
              <div className="w-4 h-4 bg-gray-500 rounded-full flex items-center justify-center text-white">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              Floors
            </button>
          </div>
        </div>

        {/* Search & Filters (Hidden on small mobile) */}
        <div className="hidden md:flex px-5 pb-4 gap-2">
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded text-gray-500 hover:bg-gray-50">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50 text-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
            1
          </button>
          <div className="flex border border-gray-300 rounded overflow-hidden">
            <button className="w-10 h-10 flex items-center justify-center bg-gray-700 text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>

        {/* Product List (Horizontal scroll on mobile, Vertical on desktop) */}
        <div className="flex-1 overflow-x-auto md:overflow-x-hidden md:overflow-y-auto px-4 py-3 md:px-5 md:pb-5 flex flex-row md:flex-col gap-3 custom-scrollbar items-center md:items-stretch">
          {mockProducts.map((prod) => (
            <div 
              key={prod.id} 
              onClick={() => handleTileSelection(prod)}
              className={`flex flex-col md:flex-row min-w-[130px] md:min-w-0 gap-2 md:gap-4 p-2 md:p-3 border rounded-lg cursor-pointer transition-all relative ${
                selectedProduct.name === prod.name ? 'border-[#0b5e5e] shadow-sm bg-[#0b5e5e]/5' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="relative shrink-0 w-full md:w-auto flex justify-center">
                <img src={prod.img} alt={prod.name} className="w-full md:w-20 h-20 md:h-20 object-cover rounded shadow-sm bg-gray-100" />
                <button className="absolute top-1 right-1 bg-black/30 hover:bg-black/50 p-1 rounded-full text-white backdrop-blur-sm transition-colors md:block">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
              </div>
              <div className="flex flex-col justify-center min-w-0 text-center md:text-left">
                <span className="text-[10px] md:text-[11px] text-gray-500 uppercase tracking-wide">Wonderfloor</span>
                <span className="font-bold text-sm text-gray-900 truncate mt-0.5">{prod.name}</span>
                <span className="text-xs text-gray-500 mt-1 hidden md:block">Size: {prod.size}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT MAIN AREA (Top on Mobile) ================= */}
      <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden relative order-1 md:order-2">
        
        {/* Top Action Bar */}
        <div className="h-[50px] md:h-[60px] bg-white border-b border-gray-200 flex justify-between items-center px-3 md:px-4 shadow-sm z-10 shrink-0 relative">
          
          {/* Left: Exit */}
          <button onClick={closeModal} className="flex items-center gap-1 md:gap-2 text-gray-600 hover:text-black text-sm font-medium px-2 md:border-r md:border-gray-200 md:pr-6 h-full transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            <span className="hidden sm:inline">Exit</span>
          </button>

          {/* Mobile Center Logo */}
          <img 
            src="https://www.wonderfloor.co.in/assets/img/logo/logo.png" 
            alt="Wonderfloor Logo" 
            className="h-6 md:hidden absolute left-1/2 -translate-x-1/2 object-contain" 
          />

          {/* Center Tools (Hidden on smaller screens) */}
          <div className="hidden lg:flex items-center gap-6 text-sm text-gray-600 font-medium">
            <button className="flex items-center gap-2 hover:text-black transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 3h5v5M4 20L20 4M21 16v5h-5M15 15l6 6M4 4l5 5"></path></svg> Compare</button>
            <button className="flex items-center gap-2 hover:text-black transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> Zoom</button>
            <button className="flex items-center gap-2 hover:text-black transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg> Share</button>
            <button className="flex items-center gap-2 hover:text-black transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Download</button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4 md:border-l md:border-gray-200 md:pl-6 h-full">
            <button className="bg-[#0b5e5e] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-medium hover:bg-[#084747] flex items-center gap-1.5 md:gap-2 shadow-sm transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-4 md:h-4"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              <span className="hidden sm:inline">Change Room</span>
            </button>
            <button className="text-gray-600 hover:text-black text-sm font-medium flex items-center gap-1 transition-colors px-2">
              <span className="hidden md:inline">Menu</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-4 md:h-4"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
            </button>
          </div>
        </div>

        {/* ================= IMAGE VIEWER AREA ================= */}
        <div className="flex-1 relative overflow-hidden flex items-center justify-center p-3 md:p-6 md:pb-2">
          
          {isProcessing && (
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm flex flex-col justify-center items-center z-40">
              <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-gray-200 border-t-[#0b5e5e] rounded-full animate-spin mb-4"></div>
              <p className="text-[#0b5e5e] font-bold text-sm md:text-lg drop-shadow-md">Applying Wonderfloor...</p>
            </div>
          )}

          <div className="relative w-full h-full flex items-center justify-center shadow-md bg-white rounded-md overflow-hidden border border-gray-200">
            
            {/* Base Image */}
            <img 
              src={processedImage || initialImage?.previewUrl || 'https://images.unsplash.com/photo-1595844730298-b960fa25fa48?auto=format&fit=crop&w=1200&q=80'} 
              alt="Room view" 
              className="w-full h-full object-contain pointer-events-none"
            />

            {/* Before/After Slider */}
            {processedImage && (
              <>
                <img 
                  src={initialImage?.previewUrl} 
                  alt="Original" 
                  className="absolute w-full h-full object-contain pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                />
                <div 
                  className="absolute top-0 bottom-0 w-[2px] bg-white flex items-center justify-center z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="w-10 h-10 md:w-8 md:h-8 bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)] flex items-center justify-center text-[#0b5e5e]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /><path d="M9 18l6-6-6-6" className="rotate-180 origin-center" /></svg>
                  </div>
                </div>
                <input 
                  type="range" min="0" max="100" value={sliderPosition}
                  onChange={(e) => setSliderPosition(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                />
              </>
            )}
          </div>
        </div>

        {/* ================= STATIC BOTTOM CONTROL BAR ================= */}
        <div className="h-[50px] md:h-[70px] bg-white border border-gray-200 px-4 md:px-6 mx-3 md:mx-6 mb-3 md:mb-6 mt-0 flex items-center justify-center md:justify-between rounded-md shadow-sm shrink-0 z-10">
          
          {/* Selected Product Info (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-4">
            <img src={selectedProduct.img} alt="Current" className="w-10 h-10 object-cover rounded shadow-sm border border-gray-200" />
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider">Wonderfloor</span>
              <span className="text-sm font-bold text-gray-900">{selectedProduct.name}</span>
            </div>
          </div>

          {/* Controls (Centered on mobile) */}
          <div className="flex w-full md:w-auto items-center justify-center md:justify-end gap-8 md:gap-6">
            <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
              <span className="text-sm font-medium">Reset</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><polyline points="3 3 3 8 8 8"></polyline></svg>
            </button>
            <div className="w-[1px] h-6 bg-gray-300"></div>
            <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
              <span className="text-sm font-medium">Rotate</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.5 2v6h-6M2.13 15.57a9 9 0 1 0 3.87-11.23l-3.5 3.5"></path></svg>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ARVisualizer;