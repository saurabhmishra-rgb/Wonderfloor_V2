// TileHoverPreview.jsx
import { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

/**
 * useTileHoverPreview
 * @param {number} delayMs - Hover delay time (default 2000ms)
 */
/* eslint-disable-next-line react-refresh/only-export-components */
export function useTileHoverPreview(delayMs = 2000) {
  const [previewProduct, setPreviewProduct] = useState(null);
  const timerRef = useRef(null);
    
  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => clearTimer, []);

  const handleMouseEnter = useCallback((product, enabled = true) => {
    if (!enabled) return;
    clearTimer();
    timerRef.current = setTimeout(() => {
      setPreviewProduct(product);
    }, delayMs);
  }, [delayMs]);

  const handleMouseLeave = useCallback(() => {
    clearTimer();
    setPreviewProduct(null);
  }, []);

  const getHoverHandlers = useCallback((product, enabled = true) => ({
    onMouseEnter: () => handleMouseEnter(product, enabled),
    onMouseLeave: handleMouseLeave,
  }), [handleMouseEnter, handleMouseLeave]);

  return { previewProduct, getHoverHandlers, closePreview: handleMouseLeave };
}

/**
 * TileHoverPreviewOverlay
 * Full-screen portal overlay — Premium Transparent Glassmorphism Style
 */
export function TileHoverPreviewOverlay({ previewProduct }) {
  if (!previewProduct) return null;

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none animate-fade-in px-4">

      {/* ── Full Screen Premium Glass Backdrop ── */}
      <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-xl transition-all duration-500" />

      {/* ── Centered Glassmorphic Card Container ── */}
      <div className="relative z-10 flex flex-col items-center gap-5 p-6 sm:p-8 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.6)] max-w-[95vw] sm:max-w-[500px] md:max-w-[580px] transition-transform duration-300">
        
        {/* Dynamic Aspect Ratio DB Image Layer */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/40 bg-black/10 flex items-center justify-center">
          <img
            src={previewProduct.img}
            alt={previewProduct.name}
            className="w-auto h-auto max-w-[260px] max-h-[260px] sm:max-w-[340px] sm:max-h-[340px] md:max-w-[460px] md:max-h-[460px] object-contain transition-transform duration-500"
          />
        </div>

        {/* Dynamic Meta Text Layer */}
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
