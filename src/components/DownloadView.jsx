import React from 'react';
import logoSrc from '../assets/logo.png';

// ── Safari-safe image loader ───────────────────────────────────────────────
// Tries crossOrigin first (needed for canvas.toDataURL on remote URLs),
// then retries without it (needed for blob: and same-origin URLs).
const loadImg = (src) =>
  new Promise((resolve, reject) => {
    const attempt = (cors) => {
      const img = new Image();
      if (cors) img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () =>
        cors
          ? attempt(false) // retry without CORS header
          : reject(new Error(`Could not load image: ${src.slice(0, 60)}`));
      img.src = src;
    };
    // blob: and data: URLs are always same-origin — skip CORS
    attempt(!src.startsWith('data:') && !src.startsWith('blob:'));
  });

// ── Ensure we always have a data URL (Safari canvas.toDataURL requirement) ──
const toDataUrl = async (src) => {
  if (!src) return null;
  if (src.startsWith('data:')) return src;
  try {
    const img = await loadImg(src);
    const c = document.createElement('canvas');
    c.width = img.naturalWidth || 800;
    c.height = img.naturalHeight || 600;
    c.getContext('2d').drawImage(img, 0, 0);
    return c.toDataURL('image/jpeg', 0.92);
  } catch {
    return src; // last-resort fallback
  }
};

// ── Polyfill-safe rounded rect ─────────────────────────────────────────────
const tracePath = (ctx, x, y, w, h, r) => {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y,     x + w, y + r,     r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x,     y + h, x,     y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x,     y,     x + r, y,         r);
  ctx.closePath();
};

// ── Truncate text that overflows a max pixel width ─────────────────────────
const clampText = (ctx, text, maxW) => {
  const s = String(text || '-');
  if (ctx.measureText(s).width <= maxW) return s;
  let t = s;
  while (ctx.measureText(t + '…').width > maxW && t.length > 0) t = t.slice(0, -1);
  return t + '…';
};
// ── Wraps text into multiple lines that fit within maxWidth ────────────────
const wrapText = (ctx, text, maxWidth) => {
  const words = String(text || '-').split(' ');
  const lines = [];
  let current = '';
  words.forEach(word => {
    const testLine = current ? `${current} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = testLine;
    }
  });
  if (current) lines.push(current);
  return lines.length ? lines : ['-'];
};
// ── Build "Image only + watermark" on canvas ───────────────────────────────
const buildImageOnly = async (baseDataUrl) => {
  const [bg, logo] = await Promise.all([loadImg(baseDataUrl), loadImg(logoSrc)]);

  const c   = document.createElement('canvas');
  c.width   = bg.naturalWidth;
  c.height  = bg.naturalHeight;
  const ctx = c.getContext('2d');

  ctx.drawImage(bg, 0, 0, c.width, c.height);

  const lH  = Math.round(c.height * 0.06);
  const lW  = Math.round((logo.naturalWidth / logo.naturalHeight) * lH);
  const pad = Math.round(c.width * 0.025);
  ctx.drawImage(logo, c.width - lW - pad, c.height - lH - pad, lW, lH);

  return c.toDataURL('image/jpeg', 0.92);
};

// ── Safely parses stringified DB arrays like '["Grey", "White"]' into real arrays ──
const parseFieldToArray = (val) => {
  if (Array.isArray(val)) return val;
  if (!val) return [];
  if (typeof val === 'string') {
    const trimmed = val.trim();
    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      try {
        const parsed = JSON.parse(trimmed.replace(/'/g, '"'));
        if (Array.isArray(parsed)) return parsed.map(String);
      } catch (e) {
        return trimmed
          .replace(/^\[|\]$/g, '')
          .split(',')
          .map(s => s.replace(/["']/g, '').trim())
          .filter(Boolean);
      }
    }
    return [trimmed];
  }
  return [String(val)];
};

// ── Cleans up structural brackets/quotes and formats thickness evenly (e.g. "2.0 mm") ──
const normalizeThickness = (val) => {
  if (val === undefined || val === null) return '';
  let cleaned = String(val).replace(/[[\]"']/g, '').trim();
  const numericMatch = cleaned.match(/[\d.]+/);
  if (!numericMatch) return cleaned;
  return `${parseFloat(numericMatch[0]).toFixed(1)} mm`;
};

const formatDisplayValue = (val, isThickness = false) => {
  const arr = parseFieldToArray(val);
  if (isThickness) return arr.map(normalizeThickness).join(', ');
  return arr.join(', ') || '-';
};

// ── Build "Image + Product Details" on canvas ──────────────────────────────
// ── Build "Image + Product Details" on canvas ──────────────────────────────
const buildDetailsImage = async (baseDataUrl, product) => {
  const specs = [
    { label: 'SKU', value: product.sku || product.name },
    { label: 'Type Of Flooring', value: formatDisplayValue(product.style) },
    { label: 'Collection', value: product.collection || product.accordionCategory },
    { label: 'Colour', value: formatDisplayValue(product.colour) },
    { label: 'Shade', value: formatDisplayValue(product.shade) },
    { label: 'Thickness', value: formatDisplayValue(product.thickness, true) },
    { label: 'Pattern / Layout', value: formatDisplayValue(product.pattern) },
    { label: 'User Industry', value: formatDisplayValue(product.userIndustry) },
    { label: 'Application Area', value: formatDisplayValue(product.applicationArea) },
    { label: 'Size', value: product.size },
  ].filter(row => row.value && row.value !== '-');

  const [bg, logo, tile] = await Promise.all([
    loadImg(baseDataUrl),
    loadImg(logoSrc),
    loadImg(product.img),
  ]);

  const W    = 1200;
  const PAD  = 56;
  const IMG_H = Math.round(W * 0.48);
  const FONT = '-apple-system, BlinkMacSystemFont, Arial, sans-serif';

  // Column layout (computed early so we can measure wrap widths)
  const C1W = Math.round((W - PAD * 2) * 0.33);
  const C2X = PAD + C1W + 48;
  const C2W = W - PAD - C2X;
  const VALUE_X_OFFSET = Math.round(C2W * 0.42);
  const VALUE_MAX_W    = C2W - VALUE_X_OFFSET - 8;

  const LINE_H  = 20;  // height per wrapped line
  const ROW_PAD = 32;  // vertical padding per spec row

  // ── Pre-measure: wrap each value + compute dynamic row heights ──
  const measureCanvas = document.createElement('canvas');
  const mctx = measureCanvas.getContext('2d');
  mctx.font = `bold 15px ${FONT}`;

  const wrappedSpecs = specs.map(spec => {
    const lines = wrapText(mctx, spec.value, VALUE_MAX_W);
    const rowH  = Math.max(52, lines.length * LINE_H + ROW_PAD);
    return { ...spec, lines, rowH };
  });

  const SECT_H  = Math.max(180, wrappedSpecs.reduce((sum, s) => sum + s.rowH, 0) + 80);
  const TOTAL_H = PAD + 80 + IMG_H + 50 + SECT_H + PAD;

  const c   = document.createElement('canvas');
  c.width   = W;
  c.height  = TOTAL_H;
  const ctx = c.getContext('2d');

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, TOTAL_H);

  let y = PAD;

  // ── Header: Logo ──
  const hLH = 40;
  const hLW = Math.round((logo.naturalWidth / logo.naturalHeight) * hLH);
  ctx.drawImage(logo, PAD, y, hLW, hLH);
  y += hLH + 40;

  // ── Room image with rounded clip ──
  const imgW = W - PAD * 2;
  ctx.save();
  tracePath(ctx, PAD, y, imgW, IMG_H, 8);
  ctx.clip();
  ctx.drawImage(bg, PAD, y, imgW, IMG_H);
  ctx.restore();

  const wmH = 36;
  const wmW = Math.round((logo.naturalWidth / logo.naturalHeight) * wmH);
  ctx.drawImage(logo, W - PAD - wmW - 8, y + IMG_H - wmH - 16, wmW, wmH);

  y += IMG_H + 40;

  ctx.strokeStyle = '#e5e7eb';
  ctx.lineWidth   = 2;
  ctx.beginPath();
  ctx.moveTo(PAD, y);
  ctx.lineTo(W - PAD, y);
  ctx.stroke();
  y += 32;

  const C1X = PAD;

  // ── Left: Floors ──
  ctx.fillStyle = '#111827';
  ctx.font      = `bold 26px ${FONT}`;
  ctx.fillText('Floors', C1X, y + 22);

  const TILE = 84;
  ctx.drawImage(tile, C1X, y + 38, TILE, TILE);

  ctx.fillStyle = '#9ca3af';
  ctx.font      = `600 12px ${FONT}`;
  ctx.fillText('WONDERFLOOR', C1X + TILE + 16, y + 62);

  ctx.fillStyle = '#111827';
  ctx.font      = `bold 19px ${FONT}`;
  ctx.fillText(clampText(ctx, product.name, C1W - TILE - 24), C1X + TILE + 16, y + 90);

  // ── Right: Specifications ──
  ctx.fillStyle = '#111827';
  ctx.font      = `bold 26px ${FONT}`;
  ctx.fillText('Specifications', C2X, y + 22);

  let sY = y + 50;

  ctx.strokeStyle = '#e5e7eb';
  ctx.lineWidth   = 1;
  ctx.beginPath();
  ctx.moveTo(C2X, sY - 10);
  ctx.lineTo(C2X + C2W, sY - 10);
  ctx.stroke();

  wrappedSpecs.forEach(({ label, lines, rowH }) => {
    ctx.fillStyle = '#6b7280';
    ctx.font      = `500 15px ${FONT}`;
    ctx.fillText(label, C2X, sY + 18);

    ctx.fillStyle = '#111827';
    ctx.font      = `bold 15px ${FONT}`;
    const valX = C2X + VALUE_X_OFFSET;
    lines.forEach((line, i) => {
      ctx.fillText(line, valX, sY + 18 + i * LINE_H);
    });

    sY += rowH;
    ctx.strokeStyle = '#f3f4f6';
    ctx.lineWidth   = 1;
    ctx.beginPath();
    ctx.moveTo(C2X, sY - 10);
    ctx.lineTo(C2X + C2W, sY - 10);
    ctx.stroke();
  });

  return c.toDataURL('image/jpeg', 0.92);
};
// ── Component ─────────────────────────────────────────────────────────────

const DownloadView = ({ selectedProduct, currentSrc, onClose, onRequestDownload }) => {

  const handleDownload = async (option) => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    // Safari: open window SYNCHRONOUSLY before any await
    let iosWindow = null;
    if (isIOS) {
      iosWindow = window.open('', '_blank');
      if (!iosWindow) {
        alert('Please allow pop-ups to download images on iOS.');
        onClose?.();
        return;
      }
      iosWindow.document.write(
        '<body style="margin:0;background:#000;display:flex;align-items:center;justify-content:center;height:100vh;color:white;font-family:sans-serif;"><p>Processing your image…</p></body>'
      );
    }

    const triggerDownload = (dataUrl, fileName) => {
      if (isIOS && iosWindow) {
        iosWindow.document.body.innerHTML = `
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;color:white;font-family:sans-serif;">
            <p style="margin-bottom:20px;">Long-press the image below to "Save to Photos"</p>
            <img src="${dataUrl}" style="max-width:100%;max-height:80%;object-fit:contain;" />
          </div>`;
      } else {
        const a = document.createElement('a');
        a.href     = dataUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
      onClose?.();
    };

    const bail = setTimeout(() => {
      iosWindow?.close();
      console.warn('Download timed out');
    }, 25000);

    try {
      // KEY FIX: convert to data URL first — canvas.toDataURL() requires this in Safari
      const baseDataUrl = await toDataUrl(currentSrc);
      if (!baseDataUrl) throw new Error('Could not load the base image');

      const result = option === 'image'
        ? await buildImageOnly(baseDataUrl)
        : await buildDetailsImage(baseDataUrl, selectedProduct);

      clearTimeout(bail);
      const filename = option === 'image'
        ? `Wonderfloor_Design_${Date.now()}.jpg`
        : `Wonderfloor_Specs_${Date.now()}.jpg`;
      triggerDownload(result, filename);

    } catch (err) {
      clearTimeout(bail);
      console.error('Download failed:', err);
      alert(`Download failed: ${err.message}`);
      iosWindow?.close();
      onClose?.();
    }
  };

  return (
    <>
      <button
        onClick={() => {
          if (onRequestDownload) {
            onRequestDownload(() => handleDownload('image'));
          } else {
            handleDownload('image');
          }
        }}
        className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 text-left transition-colors cursor-pointer border-b border-gray-100 w-full"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
        </svg>
        Image
      </button>

      <button
        onClick={() => {
          if (onRequestDownload) {
            onRequestDownload(() => handleDownload('details'));
          } else {
            handleDownload('details');
          }
        }}
        className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 text-left transition-colors cursor-pointer w-full"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
        </svg>
        Image & Product Details
      </button>
      {/* Hidden divs removed — canvas builds everything in memory */}
    </>
  );
};

export default DownloadView;
