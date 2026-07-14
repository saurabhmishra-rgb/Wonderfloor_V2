// TileHoverPreview.jsx
import { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

export function useTileHoverPreview(delayMs = 2000) {
  const [previewProduct, setPreviewProduct] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 }); 
  
  const timerRef = useRef(null);
  const hintTimerRef = useRef(null);
  const isScrollingRef = useRef(false);
  const isManualRef = useRef(false); 

  const clearTimers = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
    timerRef.current = null;
    hintTimerRef.current = null;
  };


  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      isScrollingRef.current = true;
      clearTimers();
      setShowHint(false);
      if (!isManualRef.current) setPreviewProduct(null); 

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrollingRef.current = false;
      }, 200);
    };

    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => clearTimers, []);

  const handleMouseEnter = useCallback((product, enabled = true, e) => {
    if (!enabled || isScrollingRef.current) return; 
    clearTimers();

  
    if (e) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }

    hintTimerRef.current = setTimeout(() => {
      if (!isScrollingRef.current) setShowHint(true);
    }, 250);

    timerRef.current = setTimeout(() => {
      if (!isScrollingRef.current) {
        isManualRef.current = false; 
        setPreviewProduct(product);
        setShowHint(false); 
      }
    }, delayMs);
  }, [delayMs]);

 
  const handleMouseMove = useCallback((e) => {
    if (isScrollingRef.current) return;
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);


  const handleMouseLeave = useCallback(() => {
    if (isManualRef.current) return; 
    clearTimers();
    setPreviewProduct(null);
    setShowHint(false);
  }, []);

 
  const openPreview = useCallback((product) => {
    isManualRef.current = true;
    clearTimers();
    setShowHint(false);
    setPreviewProduct(product);
  }, []);


  const closePreview = useCallback(() => {
    isManualRef.current = false;
    clearTimers();
    setPreviewProduct(null);
    setShowHint(false);
  }, []);

  const getHoverHandlers = useCallback((product, enabled = true) => ({
    onMouseEnter: (e) => handleMouseEnter(product, enabled, e), 
    onMouseMove: handleMouseMove,                              
    onMouseLeave: handleMouseLeave,
  }), [handleMouseEnter, handleMouseMove, handleMouseLeave]);

  
  return { previewProduct, showHint, mousePos, getHoverHandlers, closePreview, openPreview };
}


export function TileHoverHintOverlay({ showHint, mousePos }) {
  if (!showHint) return null;

  return createPortal(
    
    <div 
      className="fixed z-[210] pointer-events-none px-4 w-max max-w-[92vw] transition-all duration-75 ease-out animate-fade-in"
      style={{
        top: `${mousePos.y + 18}px`,  
        left: `${mousePos.x + 14}px` 
      }}
    >
      <div className="flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/85 backdrop-blur-xl border border-orange-500/30 shadow-[0_15px_30px_rgba(0,0,0,0.15)]">
        
      
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500 shadow-[0_0_8px_rgba(234,88,12,0.8)]"></span>
        </span>

        <p className="text-orange-500 font-bold text-[11px] sm:text-xs tracking-wide select-none drop-shadow-[0_0.5px_1px_rgba(0,0,0,0.05)]">
          Keep your cursor still for 2 seconds to preview actual product tile
        </p>
      </div>
    </div>,
    document.body
  );
}


export function TileHoverPreviewOverlay({ previewProduct, onClose }) {
  if (!previewProduct) return null;

  return createPortal(
    
    <div className="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none animate-fade-in px-4">
      <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-xl transition-all duration-500" />

      <div
        className="relative z-10 flex flex-col items-center gap-5 p-6 sm:p-8 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.6)] max-w-[95vw] sm:max-w-[500px] md:max-w-[580px]">
       
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 md:hidden w-9 h-9 rounded-full bg-white/90 text-gray-800 flex items-center justify-center shadow-lg z-20 pointer-events-auto"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/40 bg-black/10 flex items-center justify-center">
          <img
            src={previewProduct.img}
            alt={previewProduct.name}
            className="w-auto h-auto max-w-[260px] max-h-[260px] sm:max-w-[340px] sm:max-h-[340px] md:max-w-[460px] md:max-h-[460px] object-contain"
          />
        </div>

        <div className="text-center mt-1">
          <p className="text-white font-extrabold text-base md:text-xl tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {previewProduct.name}
          </p>
          {previewProduct.size && (
            <span className="inline-block text-teal-300/90 text-xs md:text-sm font-semibold mt-1 px-3 py-0.5 rounded-full bg-teal-500/10 border border-teal-400/20 backdrop-blur-sm">
              {previewProduct.size}
            </span>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
