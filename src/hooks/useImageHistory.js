// src/hooks/useImageHistory.js
import { useState, useCallback } from 'react';

// FIX: Import from the store, NOT the Drawer component!
import {
  getHistory,
  addHistoryEntry,
  removeHistoryEntry,
  clearHistory as clearStore,
  updateHistoryEntryProduct, // ← import new function
} from '../store/imageHistoryStore'; 

export function useImageHistory() {
  const [history, setHistory] = useState(() => getHistory());
 // ← NEW: call this whenever the user picks a tile
  const updateEntryProduct = (entryId, product) => {
    setHistory(updateHistoryEntryProduct(entryId, product));
  };
  const addToHistory = useCallback(async (imageObj) => {
    const updatedHistory = await addHistoryEntry(imageObj);
    setHistory(updatedHistory || getHistory());
  }, []);

  const removeEntry = useCallback(async (entryId) => {
    const updatedHistory = await removeHistoryEntry(entryId);
    setHistory(updatedHistory || getHistory());
  }, []);

  const clearHistory = useCallback(() => {
    clearStore();
    setHistory([]);
  }, []);

  return { history, addToHistory, removeEntry, clearHistory, updateEntryProduct };
}
