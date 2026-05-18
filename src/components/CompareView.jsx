import React, { useState, useRef, useEffect } from 'react';

const CompareView = ({ 
  leftImage, 
  rightImage, 
  leftProduct, 
  rightProduct, 
  activeSide, 
  setActiveSide, 
  onClose 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate percentage based on mouse position within the container
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="absolute inset-0 z-40 bg-gray-200 flex flex-col h-full w-full">
      {/* Compare Toolbar */}
      <div className="h-[60px] bg-white border-b border-gray-200 flex justify-center items-center px-4 shadow-sm z-50 shrink-0 relative">
        <button 
          onClick={onClose} 
          className="absolute left-4 flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-100 px-3 py-2 rounded-md transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          Exit Compare
        </button>
        <span className="font-bold text-gray-800">Compare Products</span>
      </div>

      {/* Slider Area */}
      <div 
        ref={containerRef}
        className="flex-1 relative w-full overflow-hidden cursor-ew-resize select-none touch-none"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* Right Image (Background) */}
        <img 
          src={rightImage} 
          alt="Right side floor" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        />

        {/* Left Image (Foreground, clipped) */}
        <img 
          src={leftImage} 
          alt="Left side floor" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        />

        {/* Slider Handle line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          {/* Slider Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-md shadow-lg border border-gray-200 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2"><polyline points="15 18 21 12 15 6"></polyline><polyline points="9 18 3 12 9 6"></polyline></svg>
          </div>
        </div>
      </div>

      {/* Footer Controls for Compare Mode */}
      <div className="bg-white border-t border-gray-200 p-4 shrink-0 flex justify-center items-center gap-4 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
        <button 
          onClick={() => setActiveSide('left')}
          className={`flex-1 max-w-[200px] flex items-center p-2 border-2 rounded-lg transition-all ${activeSide === 'left' ? 'border-[#0b5e5e] bg-[#0b5e5e]/5' : 'border-gray-200 hover:border-gray-300'}`}
        >
          <img src={leftProduct?.img} className="w-10 h-10 rounded object-cover border border-gray-200" alt="Left" />
          <div className="ml-3 text-left overflow-hidden">
            <span className="block text-xs font-bold text-gray-500 uppercase">Left Side</span>
            <span className="block text-sm font-bold text-gray-900 truncate">{leftProduct?.name || 'Select Floor'}</span>
          </div>
        </button>

        <button 
          onClick={() => setActiveSide('right')}
          className={`flex-1 max-w-[200px] flex items-center p-2 border-2 rounded-lg transition-all ${activeSide === 'right' ? 'border-[#0b5e5e] bg-[#0b5e5e]/5' : 'border-gray-200 hover:border-gray-300'}`}
        >
          <img src={rightProduct?.img} className="w-10 h-10 rounded object-cover border border-gray-200" alt="Right" />
          <div className="ml-3 text-left overflow-hidden">
            <span className="block text-xs font-bold text-gray-500 uppercase">Right Side</span>
            <span className="block text-sm font-bold text-gray-900 truncate">{rightProduct?.name || 'Select Floor'}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CompareView;