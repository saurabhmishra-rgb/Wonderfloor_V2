// src/store/imageHistoryStore.js

const STORAGE_KEY = 'wonderfloor_recent_rooms';

// ── NEW: Helper to convert large files into tiny, storage-safe Base64 thumbnails
const generateThumbnail = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Compress down to a max 300px box so we don't blow up localStorage
        const MAX_SIZE = 300;
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
        ctx.drawImage(img, 0, 0, width, height);
        
        // Export as a lightweight JPEG
        resolve(canvas.toDataURL('image/jpeg', 0.6)); 
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

export const addHistoryEntry = async (imageObj) => {
  const history = getHistory();
  let finalThumbnail = imageObj.previewUrl;

  // ── NEW: If it's a raw user upload, generate a safe thumbnail string 
  if (!imageObj.isDemo && imageObj.rawFile) {
    try {
      finalThumbnail = await generateThumbnail(imageObj.rawFile);
    } catch (err) {
      console.error("Could not generate thumbnail", err);
    }
  }

  const newEntry = {
    id: imageObj.id || `upload-${Date.now()}`,
    name: imageObj.name || 'Uploaded Room',
    thumbnail: finalThumbnail,
    timestamp: Date.now(),
    roomId: imageObj.isDemo ? imageObj.id : null,
    type: imageObj.isDemo ? 'demo' : 'upload'
  };

  const filteredHistory = history.filter(item => item.id !== newEntry.id);
  // Keep only the last 10 entries to ensure we don't exceed the browser 5MB limit
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