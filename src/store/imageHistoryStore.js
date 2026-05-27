// src/store/imageHistoryStore.js

const STORAGE_KEY = 'wonderfloor_recent_rooms';

// Helper to convert large files into tiny, storage-safe Base64 thumbnails
const generateThumbnail = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Compress down to a max 800px box so we don't blow up localStorage
        const MAX_SIZE = 800;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_SIZE) {
            height *= MAX_SIZE / width;
            width = MAX_SIZE;
          }
        } else {
          if (height > MAX_SIZE) {
            width *= MAX_SIZE / height;
            height = MAX_SIZE;
          }
        }
        canvas.width = width;
        canvas.height = height;
        
        // Enable image smoothing for better downscaling quality
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        let srcCanvas = document.createElement('canvas');
        let srcCtx = srcCanvas.getContext('2d');
        srcCanvas.width = img.width;
        srcCanvas.height = img.height;
        srcCtx.drawImage(img, 0, 0);

        // Step down in halves until close to target size
        while (srcCanvas.width / 2 > width) {
          const half = document.createElement('canvas');
          half.width = Math.floor(srcCanvas.width / 2);
          half.height = Math.floor(srcCanvas.height / 2);
          half.getContext('2d').drawImage(srcCanvas, 0, 0, half.width, half.height);
          srcCanvas = half;
        }

        ctx.drawImage(img, 0, 0, width, height);

        // Export as a lightweight JPEG
        resolve(canvas.toDataURL('image/jpeg', 0.85));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
};

export const getHistory = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to parse history", error);
    return [];
  }
};

// src/store/imageHistoryStore.js

export const addHistoryEntry = async (imageObj) => {
  const history = getHistory();
  let finalThumbnail = imageObj.previewUrl;

  // Generate thumbnail for raw uploads
  if (!imageObj.isDemo && imageObj.rawFile) {
    try {
      finalThumbnail = await generateThumbnail(imageObj.rawFile);
    } catch (err) {
      console.error("Could not generate thumbnail", err);
    }
  }

  // Identify if this is a demo room and what its core ID is
  const isDemo = imageObj.isDemo || imageObj.type === 'demo';
  const expectedRoomId = imageObj.roomId || imageObj.id;

  // ── SMART CHECK: Find existing entry to prevent duplicates ──
  const existingIndex = history.findIndex(item => {
    if (isDemo) {
      // For demo rooms, match by the static roomId so they merge properly
      return item.type === 'demo' && item.roomId === expectedRoomId;
    }
    // For user uploads, match by the standard ID
    return item.id === (imageObj.historyEntryId || imageObj.id);
  });

  let previousProduct = null;
  let targetId = imageObj.historyEntryId || imageObj.id || `upload-${Date.now()}`;

  // If the room is already in history, grab the old tile chip so it doesn't vanish
  if (existingIndex !== -1) {
    previousProduct = history[existingIndex].lastProduct;
    targetId = history[existingIndex].id; // Ensure we keep the exact same ID
  }

  const newEntry = {
    id: targetId,
    name: imageObj.name || (isDemo ? 'Demo Room' : 'Uploaded Room'),
    thumbnail: finalThumbnail,
    timestamp: Date.now(),
    roomId: isDemo ? expectedRoomId : null,
    type: isDemo ? 'demo' : 'upload',
    // ── CRITICAL: Use the incoming product, or fallback to the saved chip ──
    lastProduct: imageObj.lastProduct || previousProduct || null, 
  };

  // Filter out the old entry so the fresh one bumps to the top
  const filteredHistory = history.filter(item => item.id !== targetId);
  const updatedHistory = [newEntry, ...filteredHistory].slice(0, 10);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
  return updatedHistory;
};

export const removeHistoryEntry = async (entryId) => {
  const history = getHistory();
  const updatedHistory = history.filter(item => item.id !== entryId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
  return updatedHistory;
};

export const clearHistory = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const updateHistoryEntryProduct = (entryId, product) => {
  const history = getHistory();
  const updated = history.map(item =>
    item.id === entryId
      ? {
          ...item,
          lastProduct: {
            id:   product.id,
            name: product.name,
            img:  product.img,
            sku:  product.sku,
          }
        }
      : item
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};
