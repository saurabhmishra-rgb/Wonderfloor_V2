import React, { useState } from 'react';

const ARVisualizer = ({ closeModal, initialImage }) => {
  const [selectedProduct, setSelectedProduct] = useState('Acton');
  const [processedImage, setProcessedImage] = useState(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleTileSelection = async (tileName) => {
    setSelectedProduct(tileName);

    if (!initialImage?.rawFile) {
      alert("Please upload a real photo from your computer to use the AI Engine!");
      return;
    }

    setIsProcessing(true);

    const formData = new FormData();
    formData.append('roomImage', initialImage.rawFile);
    formData.append('tileName', tileName);

    try {
      console.log(`AI Engine: Processing ${tileName}...`);
      
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
        alert(`AI Engine Error: ${data.error || "Processing failed."}`);
      }
      
    } catch (error) {
      console.error("Network Error:", error);
      alert("Connection failed! Make sure your backend (node server.js) is running.");
    } finally {
      setIsProcessing(false);
    }
  };

  const mockProducts = [
    { id: 1, name: 'Acton', size: '6cm x 36cm', img: 'https://www.wonderfloor.co.in/wd_admin/shades_images/37214658552107.jpg' },
    { id: 2, name: 'Holmes', size: '6cm x 36cm', img: 'https://www.wonderfloor.co.in/wd_admin/shades_images/96584713552114.jpg' },
    { id: 3, name: 'Cedar', size: '6cm x 36cm', img: 'https://www.wonderfloor.co.in/wd_admin/shades_images/16983742554306.jpg' },
    { id: 4, name: 'Faye', size: '6cm x 36cm', img: 'https://www.wonderfloor.co.in/wd_admin/shades_images/36812945557304.jpg' },
    { id: 5, name: 'Calla', size: '6cm x 136cm', img: 'https://www.wonderfloor.co.in/wd_admin/shades_images/64158972557305.jpg' },
    { id: 6, name: 'Tansy', size: '6cm x 36cm', img: 'https://www.wonderfloor.co.in/wd_admin/shades_images/21458679557306.jpg' },
    { id: 7, name: 'Poppy1', size: '6cm x 36cm', img: 'https://www.wonderfloor.co.in/wd_admin/shades_images/34527196557701.jpg' },
  ];

  return (
    // Flex-col for mobile (stacked), Flex-row for md and up (side-by-side)
    <div className="fixed inset-0 bg-[#f3f4f6] flex flex-col md:flex-row z-50 overflow-hidden font-sans">
      
      {/* MAIN CONTENT AREA - Ordered first on mobile so the image is at the top */}
      <div className="flex-1 flex flex-col h-[60vh] md:h-full relative bg-[#e5e5e5] order-1 md:order-2">
        <div className="h-14 bg-white border-b border-gray-200 flex justify-between items-center px-4 md:px-6 shadow-sm z-10">
          
          {/* Mobile Back Button (Hidden on Desktop) */}
          <button onClick={closeModal} className="md:hidden text-gray-500 hover:text-black flex items-center gap-2 font-medium text-sm transition-colors">
            ← Back
          </button>

          {/* Desktop Nav Actions */}
          <div className="hidden md:flex gap-6 text-sm text-gray-600 font-medium">
            <button className="flex items-center gap-2 hover:text-black">🔗 Share</button>
            <button className="flex items-center gap-2 hover:text-black">⬇️ Download</button>
            <button className="flex items-center gap-2 hover:text-black">✉️ Contact Us</button>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button className="bg-[#0b5e5e] text-white px-3 md:px-5 py-2 rounded text-xs md:text-sm font-bold hover:bg-[#084747] shadow-sm transition-colors">
              🛒 Carpet Tiles
            </button>
            <button className="border border-gray-300 px-3 md:px-4 py-2 rounded text-xs md:text-sm font-medium hover:bg-gray-50">Menu ⋮</button>
          </div>
        </div>

        {/* Image Viewer */}
        <div className="flex-1 overflow-hidden p-2 md:p-8 flex items-center justify-center relative select-none">
          {isProcessing && (
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex flex-col justify-center items-center z-40">
              <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-gray-200 border-t-[#0b5e5e] rounded-full animate-spin mb-4"></div>
              <p className="text-[#0b5e5e] font-bold text-base md:text-lg drop-shadow-md">Applying AI Engine...</p>
            </div>
          )}

          {/* IMAGE CONTAINER */}
          <div className="relative inline-block w-auto h-full max-h-full shadow-2xl rounded-sm overflow-hidden flex items-center justify-center">
            
            <img 
              src={processedImage || initialImage?.previewUrl || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'} 
              alt="Generated Room" 
              className="block w-auto h-full max-h-full object-contain pointer-events-none"
            />

            {processedImage && (
              <>
                <img 
                  src={initialImage?.previewUrl} 
                  alt="Original Room" 
                  className="absolute top-0 left-0 block w-full h-full object-contain pointer-events-none"
                  style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                />

                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white flex items-center justify-center pointer-events-none z-20"
                  style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0b5e5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                      <path d="M9 18l6-6-6-6" className="rotate-180 origin-center" />
                    </svg>
                  </div>
                </div>

                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                />
              </>
            )}
            
          </div>
        </div>
      </div>

      {/* LEFT SIDEBAR (Desktop) / BOTTOM DRAWER (Mobile) */}
      <div className="w-full md:w-[320px] md:max-w-[320px] h-[40vh] md:h-full bg-white border-t md:border-t-0 md:border-r border-gray-200 flex flex-col shadow-lg z-20 order-2 md:order-1">
        
        {/* Desktop Back Button (Hidden on Mobile) */}
        <div className="hidden md:flex p-4 border-b border-gray-200 justify-between items-center bg-white shrink-0">
          <button onClick={closeModal} className="text-gray-500 hover:text-black flex items-center gap-2 font-medium text-sm transition-colors">
            ← Back to Rooms
          </button>
        </div>

        <div className="flex-1 overflow-y-auto bg-white custom-scrollbar pb-6 md:pb-0">
          {mockProducts.map((prod) => (
            <div 
              key={prod.id} 
              onClick={() => handleTileSelection(prod.name)}
              className={`flex gap-4 p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedProduct === prod.name ? 'border-l-4 border-l-[#0b5e5e] bg-[#0b5e5e]/5' : 'border-l-4 border-l-transparent'
              }`}
            >
              <img src={prod.img} alt={prod.name} className="w-14 h-14 md:w-16 md:h-16 object-cover rounded shadow-sm shrink-0" />
              <div className="flex flex-col justify-center min-w-0">
                <span className="text-[10px] md:text-[11px] text-gray-500 uppercase tracking-wide truncate">Wonderfloor</span>
                <span className="font-bold text-sm text-gray-800 mt-0.5 truncate">{prod.name}</span>
                <span className="text-xs text-gray-400 mt-1">Size: {prod.size}</span>
                <span className="text-xs text-[#0b5e5e] mt-1 hover:underline cursor-pointer truncate">More product details →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ARVisualizer;