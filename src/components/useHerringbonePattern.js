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

// ── 2 tiles ko herringbone weave mein bake karke ek seamless SVG data URL return karta hai ──

async function generateHerringboneDataURL(tex1Url, tex2Url) {
  const [base64_1, base64_2] = await Promise.all([fetchBase64(tex1Url), fetchBase64(tex2Url)]);

  const size = 1024;
  const nx = 4;
  const l = size / (nx * Math.SQRT2);

  const PLANK_WIDTH_MM = 101.6;
  const PLANK_LENGTH_MM = 457.2;
  const w = l / (PLANK_LENGTH_MM / PLANK_WIDTH_MM);

  const groutWidth = 0.5;
  const groutColor = '#020202';
  const g = groutWidth / 2;

  const boundI = Math.ceil((size / w) * 2);
  const boundJ = Math.ceil((size / l) * 2);

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
    <defs>
      <pattern id="tex1" patternUnits="userSpaceOnUse" width="${w}" height="${l}">
        <image href="${base64_1}" x="0" y="0" width="${w}" height="${l}" preserveAspectRatio="none"/>
      </pattern>
      <pattern id="tex2" patternUnits="userSpaceOnUse" width="${w}" height="${l}">
        <image href="${base64_2}" x="0" y="0" width="${w}" height="${l}" preserveAspectRatio="none"/>
      </pattern>
    </defs>
    <rect width="${size}" height="${size}" fill="${groutColor}"/>
    <g transform="translate(${size / 2}, ${size / 2}) rotate(45)">`;

  for (let i = -boundI; i <= boundI; i++) {
    for (let j = -boundJ; j <= boundJ; j++) {
      const x = (i * w) + (j * l);
      const y = (i * w) - (j * l);

      const fillV = (Math.abs(i + j) % 2 === 0) ? 'url(#tex1)' : 'url(#tex2)';
      const fillH = (Math.abs(i - j) % 2 === 0) ? 'url(#tex2)' : 'url(#tex1)';

      svg += `<rect x="${x + g}" y="${y + g}" width="${w - groutWidth}" height="${l - groutWidth}" fill="${fillV}"/>`;
      svg += `<rect x="${g}" y="${g}" width="${w - groutWidth}" height="${l - groutWidth}" fill="${fillH}" transform="translate(${x + w}, ${y + w}) rotate(-90)"/>`;
    }
  }
  svg += `</g></svg>`;

  return new Promise((resolve, reject) => {
    const img = new Image();
    const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL('image/jpeg', 0.95));
    };
    img.onerror = reject;
    img.src = url;
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
