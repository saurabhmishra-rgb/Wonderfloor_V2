// src/components/ImageHistoryDrawer.jsx
import React from 'react';

export default function ImageHistoryDrawer({ isOpen, history, onSelect, onRemove, onClear, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex justify-end">
      {/* ── Dark Backdrop ── */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity cursor-pointer"
        onClick={onClose}
      ></div>

      {/* ── Sliding Drawer Panel ── */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-[20px] font-bold text-gray-800">Recent Rooms</h2>
          <button 
            onClick={onClose} 
            className="p-2 text-gray-400 hover:text-[#f05c3f] hover:bg-red-50 rounded-full transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* History List */}
        <div className="flex-1 overflow-y-auto p-5">
          {history.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-3">
              <svg className="w-12 h-12 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-medium">No recent rooms found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {history.map((item) => (
                <div 
                  key={item.id} 
                  className="relative group rounded-lg border border-gray-200 overflow-hidden hover:border-[#f05c3f] transition-all duration-200 cursor-pointer bg-white shadow-sm hover:shadow-md flex flex-col"
                >
                  {/* Image Click Area */}
                  <div className="w-full h-28 bg-gray-100 overflow-hidden relative" onClick={() => onSelect(item)}>
                    {item.thumbnail ? (
                      <img 
                        src={item.thumbnail} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[11px] text-gray-400 font-medium">
                        No Preview
                      </div>
                    )}

                    {/* ── NEW: tile chip in the corner ── */}
                    {item.lastProduct && (
                      <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full pl-1 pr-2.5 py-1 shadow-sm">
                        <img
                          src={item.lastProduct.img}
                          alt={item.lastProduct.name}
                          className="w-5 h-5 rounded-full object-cover border border-gray-300"
                        />
                        <span className="text-[10px] font-semibold text-gray-700 truncate max-w-[80px]">
                          {item.lastProduct.name}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Details Area */}
                  <div className="p-3 flex-1 flex flex-col justify-between" onClick={() => onSelect(item)}>
                    <h3 className="text-[13px] font-bold text-gray-700 truncate" title={item.name}>
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-1 font-medium">
                      {new Date(item.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                  
                  {/* Hover Delete Button */}
                  <button
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      onRemove(item.id); 
                    }}
                    className="absolute top-2 right-2 bg-white/90 text-red-500 p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white"
                    title="Remove from history"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {history.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-gray-50">
            <button
              onClick={onClear}
              className="w-full py-2.5 px-4 bg-white border border-red-200 text-red-500 rounded font-bold hover:bg-red-50 transition-colors cursor-pointer text-[13px] tracking-wide"
            >
              Clear All History
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
