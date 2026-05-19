import React from 'react';

const FavoritesView = ({
  favoriteIds,
  allProducts,
  onBack,
  onSelectProduct,
  onToggleFavorite
}) => {
  // Filter the main product list to only show items that are favorited
  const favoriteProducts = allProducts.filter(prod => favoriteIds.includes(prod.id));

  return (
    <div className="flex flex-col h-full bg-white absolute inset-0 z-40 animate-fade-in md:rounded-none rounded-t-3xl overflow-hidden w-full">
      
      {/* Header */}
      <div className="p-4 md:p-5 flex items-center gap-3 border-b border-gray-100 shrink-0 bg-white">
        <button
          onClick={onBack}
          className="text-gray-500 hover:text-black hover:bg-gray-100 p-1.5 rounded-md cursor-pointer transition-colors"
          title="Back to products"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          Favourites
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </h2>
      </div>

      {/* Product List Content */}
      <div className="flex-1 overflow-y-auto px-4 md:px-5 py-4 bg-gray-50/30">
        {favoriteProducts.length === 0 ? (
          <div className="text-center text-gray-500 py-12 flex flex-col items-center gap-3 h-full justify-center">
            <div className="bg-gray-100 p-4 rounded-full mb-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-700">No favourites yet</p>
            <p className="text-xs text-gray-500 max-w-[200px]">Click the heart icon on any product to save it here for later.</p>
            <button
              onClick={onBack}
              className="mt-4 px-5 py-2.5 bg-[#0b5e5e] text-white rounded-md text-sm font-medium hover:bg-[#084747] transition-colors cursor-pointer shadow-sm"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
              Saved Items ({favoriteProducts.length})
            </p>
            
            {favoriteProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => {
                  onSelectProduct(prod);
                  // Optional: Automatically close favorites view when a product is clicked
                  // onBack(); 
                }}
                className="relative flex gap-3 md:gap-4 p-2 md:p-3 border rounded-lg cursor-pointer transition-all duration-300 bg-white border-gray-200 hover:border-[#0b5e5e]/30 hover:shadow-[0_8px_20px_rgb(0,0,0,0.08)] hover:-translate-y-0.5 group"
              >
                {/* Un-favorite button */}
                <button
                  onClick={(e) => onToggleFavorite(e, prod.id)}
                  className="absolute top-2 right-2 p-1.5 z-10 cursor-pointer bg-white rounded-full shadow-sm border border-gray-100 hover:bg-red-50 transition-colors"
                  title="Remove from favourites"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2" className="transition-transform hover:scale-110">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>

                <img 
                  src={prod.img} 
                  alt={prod.name} 
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded shadow-sm bg-gray-100 shrink-0 border border-gray-200 group-hover:border-[#0b5e5e]/50 transition-colors" 
                />
                
                <div className="flex flex-col justify-center min-w-0 flex-1 pr-8">
                  <span className="text-[10px] md:text-[11px] text-[#0b5e5e] uppercase tracking-wider font-semibold">{prod.accordionCategory || 'Wonderfloor'}</span>
                  <span className="font-bold text-sm md:text-base text-gray-900 truncate mt-0.5">{prod.name}</span>
                  <div className="flex flex-col gap-0.5 mt-1.5">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                       <span className="w-1 h-1 rounded-full bg-gray-300"></span> 
                       Size: {prod.size}
                    </span>
                    {prod.colour && (
                       <span className="text-xs text-gray-500 flex items-center gap-1">
                         <span className="w-1 h-1 rounded-full bg-gray-300"></span> 
                         Color: {prod.colour}
                       </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesView;