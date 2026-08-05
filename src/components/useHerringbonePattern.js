import { useState, useCallback } from 'react';

// ── Image URL ko base64 mein convert karta hai (SVG <image> tag ke andar embed karne ke liye) ──
async function fetchBase64(url) {
  const response = await fetch(url, { mode: 'cors' });
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/**
 * useHerringbonePattern
 * 2-tile herringbone weave manage karta hai — state, slot assignment, aur
 * baked texture ko live ThreeJS visualizer instance pe apply karna.
 */
export function useHerringbonePattern({
  activeBaseImage,
  visualizerInstance,
  selectedProduct,
  floorRotation,
  setErrorMsg,
  setIsProcessing,
}) {
  const [herringboneMode, setHerringboneMode] = useState(false);
  const [isHerringbonePanelOpen, setIsHerringbonePanelOpen] = useState(false);
  const [herringboneTile1, setHerringboneTile1] = useState(null);
  const [herringboneTile2, setHerringboneTile2] = useState(null);
  const [activeHerringboneSlot, setActiveHerringboneSlot] = useState(1);

  const applyHerringbonePattern = useCallback(async (tile1Url, tile2Url, angle = floorRotation) => {
    if (!activeBaseImage?.maskUrl || !visualizerInstance.current?.updateHerringboneTexture) return;
    setIsProcessing(true);
    try {
      await visualizerInstance.current.updateHerringboneTexture(tile1Url, tile2Url, -angle);
    } catch (e) {
      console.error('Herringbone apply failed:', e);
      setErrorMsg('Herringbone pattern laagne mein error aayi.');
    } finally {
      setIsProcessing(false);
    }
  }, [activeBaseImage, visualizerInstance, floorRotation, setErrorMsg, setIsProcessing]);

 const handleToggleHerringbone = useCallback(() => {
  if (!activeBaseImage?.maskUrl) {
    setErrorMsg('Herringbone sirf 3D rooms mein available hai.');
    return;
  }

  if (herringboneMode) {
    setHerringboneMode(false);
    setIsHerringbonePanelOpen(false);
    if (visualizerInstance.current?.updateTexture) {
      visualizerInstance.current.updateTexture(selectedProduct.img, floorRotation);
    }
    return;
  }

 
  setHerringboneMode(true);
  setIsHerringbonePanelOpen(true);
}, [activeBaseImage, herringboneMode, selectedProduct, floorRotation, visualizerInstance, setErrorMsg]);

  const handleHerringboneTileAssign = useCallback((product, slotOverride = null) => {
    const targetSlot = slotOverride ?? activeHerringboneSlot;

    if (targetSlot === 1) {
      setHerringboneTile1(product);
      applyHerringbonePattern(product.img, (herringboneTile2 || product).img);
    } else {
      setHerringboneTile2(product);
      applyHerringbonePattern((herringboneTile1 || product).img, product.img);
    }
  }, [activeHerringboneSlot, herringboneTile1, herringboneTile2, applyHerringbonePattern]);

  // Rotate button ke liye — herringbone mode mein weave ko rotate karke re-bake karta hai
  const rotateHerringbone = useCallback((nextAngle) => {
    applyHerringbonePattern(
      (herringboneTile1 || selectedProduct).img,
      (herringboneTile2 || selectedProduct).img,
      nextAngle
    );
  }, [herringboneTile1, herringboneTile2, selectedProduct, applyHerringbonePattern]);

  return {
    herringboneMode,
    isHerringbonePanelOpen,
    setIsHerringbonePanelOpen,
    herringboneTile1,
    herringboneTile2,
    activeHerringboneSlot,
    setActiveHerringboneSlot,
    handleToggleHerringbone,
    handleHerringboneTileAssign,
    rotateHerringbone,
  };
}
