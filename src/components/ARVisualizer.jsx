// ARVisualization.jsx
import React, { useState, useRef, useEffect, useMemo } from 'react';
import FavoritesView from './FavouritesView';
import RoomUploader from './RoomUploader';
import DownloadView from './DownloadView';
import { initVisualizer } from './script.jsx';
import AttractiveLoader from './AttractiveLoader';
import { useParams, useNavigate } from 'react-router-dom';
import { useHerringbonePattern } from './useHerringbonePattern';
import DownloadLeadModal from './DownloadLeadModal.jsx';

import { NAV_CATEGORIES, ACCORDION_CATEGORIES, ALL_PRODUCTS } from '../data/productsConfig';
import SidebarNavTabs from './SidebarNavTabs';
import { useTileHoverPreview, TileHoverPreviewOverlay, TileHoverHintOverlay } from './TileHoverPreview.jsx';

// const PYTHON_BACKEND_URL = 'http://127.0.0.1:8000';
const NODE_BACKEND_URL = 'https://wonderfloor-dashboard.vercel.app'
// const BACKEND_URL = 'https://wonderfloor-backend-1.onrender.com';
const PYTHON_BACKEND_URL = 'https://python-floor-backend.onrender.com';

// ── COMPARE VIEW COMPONENT ──
const CompareView = ({
  leftImage,
  rightImage,
  leftProduct,
  rightProduct,
  activeSide,
  setActiveSide,
  onClose,
  onOpenSidebar
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);


  return (
    <div className="absolute inset-0 z-40 bg-[#e5e7eb] flex flex-col h-full w-full animate-fade-in">
      {/* Compare Toolbar */}
      <div className="h-[60px] bg-white border-b border-gray-200 flex justify-center items-center px-4 shadow-sm z-50 shrink-0 relative">
        <div className="absolute left-2 md:left-4 flex items-center gap-1 md:gap-2">
          {/* Mobile menu trigger to open sidebar */}
          <button onClick={onOpenSidebar} className="md:hidden p-1.5 rounded-md hover:bg-gray-100 cursor-pointer text-gray-600">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          <button onClick={onClose} className="flex items-center gap-1 md:gap-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-100 px-2 md:px-3 py-2 rounded-md transition-colors cursor-pointer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            <span className="hidden sm:inline">Exit Compare</span>
          </button>
        </div>
        <span className="font-bold text-gray-800 text-sm md:text-base">Compare Products</span>
      </div>

      {/* FIXED: Slider Area wrapped in matching 4/3 Aspect Ratio container */}
      <div className="flex-1 relative flex items-center justify-center p-2 md:px-3 md:py-4 overflow-hidden touch-none">

        {/* Background Blur matches normal view */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-gray-300">
          <img src={rightImage} className="w-full h-full object-cover blur-[11px] scale-110 opacity-80" alt="Blurred Background" crossOrigin="anonymous" />
          <div className="absolute inset-0 bg-white/21"></div>
        </div>

        {/* 4/3 Container fixes the "Zoomed In" appearance */}
        <div
          ref={containerRef}
          className="relative z-10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-md overflow-hidden ring-1 ring-black/10 cursor-ew-resize select-none touch-none"
          style={{ aspectRatio: '4/3', height: '100%', maxWidth: '98%' }}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* Right Image (Background) */}
          <img
            src={rightImage}
            alt="Right side floor"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            crossOrigin="anonymous"
          />

          {/* Left Image (Foreground, clipped) */}
          <img
            src={leftImage}
            alt="Left side floor"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            crossOrigin="anonymous"
          />

          {/* Slider Handle line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
            style={{ left: `calc(${sliderPosition}% - 2px)` }}
          >
            {/* Slider Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-md shadow-lg border border-gray-200 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2"><polyline points="15 18 21 12 15 6"></polyline><polyline points="9 18 3 12 9 6"></polyline></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Controls for Compare Mode */}
      <div className="bg-white border-t border-gray-200 p-3 md:p-4 shrink-0 flex justify-center items-center gap-2 md:gap-4 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
        <button
          onClick={() => setActiveSide('left')}
          className={`flex-1 max-w-[200px] flex items-center p-2 border-2 rounded-lg transition-all cursor-pointer ${activeSide === 'left' ? 'border-[#0b5e5e] bg-[#0b5e5e]/5' : 'border-gray-200 hover:border-gray-300'}`}
        >
          <img src={leftProduct?.img} className="w-8 h-8 md:w-10 md:h-10 rounded object-cover border border-gray-200 shrink-0 bg-gray-100" alt="Left" />
          <div className="ml-2 md:ml-3 text-left overflow-hidden">
            <span className="block text-[10px] md:text-xs font-bold text-gray-500 uppercase">Left Side</span>
            <span className="block text-xs md:text-sm font-bold text-gray-900 truncate">{leftProduct?.name || 'Select Floor'}</span>
          </div>
        </button>

        <button
          onClick={() => setActiveSide('right')}
          className={`flex-1 max-w-[200px] flex items-center p-2 border-2 rounded-lg transition-all cursor-pointer ${activeSide === 'right' ? 'border-[#0b5e5e] bg-[#0b5e5e]/5' : 'border-gray-200 hover:border-gray-300'}`}
        >
          <img src={rightProduct?.img} className="w-8 h-8 md:w-10 md:h-10 rounded object-cover border border-gray-200 shrink-0 bg-gray-100" alt="Right" />
          <div className="ml-2 md:ml-3 text-left overflow-hidden">
            <span className="block text-[10px] md:text-xs font-bold text-gray-500 uppercase">Right Side</span>
            <span className="block text-xs md:text-sm font-bold text-gray-900 truncate">{rightProduct?.name || 'Select Floor'}</span>
          </div>
        </button>
      </div>
    </div>
  );
};


// ── Place this OUTSIDE the ARVisualizer component (module-level constant) ──
const BASE_FILTER_CATEGORIES = [
  {
    id: 'accordionCategory',
    label: 'Product Collections',
    options: [], //  Ye automatically database se aa jayega
  },
  {
    id: 'colour',
    label: 'Colour Family',
    options: [], //  Pura array khali kar dein, ab database ke colours aayenge
  },
  {
    id: 'shade',
    label: 'Shade',
    options: [], //  Pura array khali kar dein
  },
  {
    id: 'thickness',
    label: 'Thickness',
    options: [], //  Pura array khali kar dein
  },
  {
    id: 'style',
    label: ' Type Of Flooring',
    options: [], //  Pura array khali kar dein
  },
  {
    id: 'pattern',
    label: 'Pattern / Layout',
    options: [], //  Pura array khali kar dein
  },
  {
    id: 'userIndustry',
    label: 'User Industry',
    options: [], // Pura array khali kar dein
  },
];


// Helper to clean up structural brackets, quotes, and format decimals evenly
const normalizeThickness = (val) => {
  if (val === undefined || val === null) return '';


  let cleaned = String(val)
    .replace(/\[/g, '')
    .replace(/\]/g, '')
    .replace(/"/g, '')
    .replace(/'/g, '')
    .trim();

  // Extract the numeric portion
  const numericMatch = cleaned.match(/[\d.]+/);
  if (!numericMatch) return cleaned;

  const num = parseFloat(numericMatch[0]);
  // Standardizes output formatting uniformly to one decimal spacing (e.g., "2.0 mm")
  return `${num.toFixed(1)} mm`;
};


// ✅ NEW HELPER: Safely parses stringified DB arrays like '["Grey", "White"]' into real arrays
const parseFieldToArray = (val) => {
  if (Array.isArray(val)) return val;
  if (!val) return [];
  if (typeof val === 'string') {
    const trimmed = val.trim();
    // Check if it's a stringified array from the database
    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      try {
        // Replace single quotes with double quotes for valid JSON parsing
        const parsed = JSON.parse(trimmed.replace(/'/g, '"'));
        if (Array.isArray(parsed)) return parsed.map(String);
      } catch (e) {
        // Fallback: manually strip brackets and quotes
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

//  NEW: Safe case/whitespace-insensitive string comparison
const normalizeCompare = (str) => String(str || '').trim().toLowerCase();

const formatDisplayValue = (val, isThickness = false) => {
  const arr = parseFieldToArray(val);
  if (isThickness) return arr.map(normalizeThickness).join(', ');
  return arr.join(', ');
};

// ✅ Safely checks if a string or array field contains the search term
const safeSearchMatch = (fieldValue, searchPattern) => {
  if (!fieldValue) return false;
  if (Array.isArray(fieldValue)) {
    return fieldValue.some(val => String(val).toLowerCase().includes(searchPattern));
  }
  return String(fieldValue).toLowerCase().includes(searchPattern);
};

const ARVisualizer = ({ closeModal, initialImage, onOpenRecentRooms, historyCount = 0, onProductChange, }) => {
  // Browser detector: True if Safari (Mac/iOS), False if Chrome/Edge/Windows
  const isSafari = typeof window !== 'undefined' && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  // ── NEW: MONZA CHECKERBOARD STATES 
  const [monzaDualMode, setMonzaDualMode] = useState(false);
  const [monzaTile2, setMonzaTile2] = useState(null);
  const [activeMonzaSlot, setActiveMonzaSlot] = useState(1);
  const monzaDualModeRef = useRef(false);
  const monzaTile2Ref = useRef(null);
  useEffect(() => { monzaDualModeRef.current = monzaDualMode; }, [monzaDualMode]);
  useEffect(() => { monzaTile2Ref.current = monzaTile2; }, [monzaTile2]);

  // for download images
  const [downloadImageUrl, setDownloadImageUrl] = useState(null);
  const [isGeneratingDownload, setIsGeneratingDownload] = useState(false);
  // State for the Download Lead Modal
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);



  //Open Menu Inside the Download then open then pop up
  const handleDownloadButtonClick = async () => {
    if (isDownloadMenuOpen) { setIsDownloadMenuOpen(false); return; }

    let imgUrl = currentSrc;
    if (activeBaseImage?.maskUrl && visualizerInstance.current) {
      setIsGeneratingDownload(true);
      try {
        const composite = await generateCompositeImage(selectedProduct, -floorRotation);
        if (composite) imgUrl = composite;
      } catch (e) {
        console.error('Composite failed for download:', e);
      } finally {
        setIsGeneratingDownload(false);
      }
    }
    setDownloadImageUrl(imgUrl);
    setIsDownloadMenuOpen(true);
  };

  const handleRequestDownload = (downloadFn) => {
    setIsDownloadMenuOpen(false);
    setPendingDownloadFn(() => downloadFn);
    setIsLeadModalOpen(true);
  };

  const proceedToDownload = async () => {
    setIsLeadModalOpen(false);

    let imgUrl = currentSrc;
    if (activeBaseImage?.maskUrl && visualizerInstance.current) {
      setIsGeneratingDownload(true);
      try {
        const composite = await generateCompositeImage(selectedProduct, -floorRotation);
        if (composite) imgUrl = composite;
      } catch (e) {
        console.error('Composite failed for download:', e);
      } finally {
        setIsGeneratingDownload(false);
      }
    }
    setDownloadImageUrl(imgUrl);
    setIsDownloadMenuOpen(true);
  };

  const handleLeadFormSubmit = async (formData) => {
    // console.log('Lead captured:', formData, 'Product:', selectedProduct?.name);
    setIsLeadModalOpen(false);
    if (pendingDownloadFn) {
      await pendingDownloadFn();
      setPendingDownloadFn(null);
    } else {
      await proceedToDownload();  // fallback, agar kabhi pendingDownloadFn set na ho
    }
  };


  const { productId } = useParams();
  const navigate = useNavigate();

  const [combinedProducts, setCombinedProducts] = useState([...ALL_PRODUCTS]);
  const [isLoadingDbProducts, setIsLoadingDbProducts] = useState(true);


  // ── 2. NEW: FETCH PRODUCTS FROM MONGODB ──
  useEffect(() => {
    async function fetchDatabaseProducts() {
      try {
        const response = await fetch(`${NODE_BACKEND_URL}/products`);
        if (response.ok) {
          const data = await response.json();




          const savedProductOrder = JSON.parse(localStorage.getItem('pm_productOrder')) || [];


          const formattedProducts = data
            .filter(prod => prod.isVisible !== false)
            .sort((a, b) => {
              // Priority 1: Admin's instant local drag-and-drop memory
              const idxA = savedProductOrder.indexOf(a._id);
              const idxB = savedProductOrder.indexOf(b._id);
              if (idxA !== -1 && idxB !== -1) return idxA - idxB;
              if (idxA !== -1) return -1;
              if (idxB !== -1) return 1;


              return (a.order ?? 99999) - (b.order ?? 99999);
            })
            .map(prod => {

              let translatedNav = prod.navCategory || '';
              if (translatedNav === 'Flooring Products') {
                translatedNav = 'flooring-products';
              } else if (translatedNav === 'Luxury Vinyl Tile') {
                translatedNav = 'luxury-vinyl-tile';
              }

              return {
                id: prod._id,
                navCategory: translatedNav,
                accordionCategory: (prod.accordionCategory || '').trim(),
                name: prod.name,
                sku: (prod.sku || '').trim(),
                size: prod.size,
                img: prod.img,
                colour: prod.colour,
                shade: prod.shade,
                collection: prod.collection || '',
                category: prod.accordionCategory,
                description: prod.description || '',
                userIndustry: prod.userIndustry || [],
                applicationArea: prod.applicationArea || [],
                tags: Array.isArray(prod.tags)
                  ? prod.tags
                  : (typeof prod.tags === 'string' ? prod.tags.split(',').map(t => t.trim()) : []),
                thickness: prod.thickness || '',
                style: prod.style || '',
                productLink: prod.productLink || '',
                pattern: prod.pattern || '',
                collectionTierOrder: prod.collectionTierOrder || 0,
              };
            });


          setCombinedProducts([...ALL_PRODUCTS, ...formattedProducts]);
          setIsLoadingDbProducts(false);
        }
      } catch (error) {
        console.error("Failed to fetch dynamic products:", error);
        setIsLoadingDbProducts(false);
      }
    }
    fetchDatabaseProducts();
  }, []);


  const [initialPinchDist, setInitialPinchDist] = useState(null);
  const [uploadedRoom, setUploadedRoom] = useState(null);
  const { previewProduct, showHint, mousePos, getHoverHandlers, closePreview, openPreview } = useTileHoverPreview(2000);
  const [activeNavCategory, setActiveNavCategory] = useState('flooring-products');
  // Dynamically extracts unique categories so newly created admin collections appear automatically!
  // const productCategories = Array.from(new Set(
  //   combinedProducts
  //     .filter(p => p.navCategory === activeNavCategory)
  //     // Only show accordion categories the room supports
  //     .filter(p =>
  //       !hasRoomFilter || roomSupportedCollections.includes(p.accordionCategory)
  //     )
  //     .map(p => p.accordionCategory)
  // ));

  // 2. READ URL DIRECTLY INTO INITIAL STATE
  const [selectedProduct, setSelectedProduct] = useState(() => {
    // Priority 1: Explicitly clicked History Item
    if (initialImage?.historyEntryId && initialImage?.lastProduct) {
      const match = combinedProducts.find(p => p.id === initialImage.lastProduct.id);
      if (match) return match;
    }

    // Priority 2: URL param 
    if (productId) {
      const decodedSku = decodeURIComponent(productId);
      const matchedProduct = combinedProducts.find(p => p.sku === decodedSku);
      if (matchedProduct) return matchedProduct;
    }

    // Priority 3: General last used tile
    if (initialImage?.lastProduct) {
      const match = combinedProducts.find(p => p.id === initialImage.lastProduct.id);
      if (match) return match;
    }

    // Priority 4: Fallback
    // const savedProduct = localStorage.getItem('savedSelectedProduct');
    // return savedProduct ? JSON.parse(savedProduct) : combinedProducts[0];
    return combinedProducts[0] || ALL_PRODUCTS[0] || {
      id: 'placeholder',
      name: 'Loading...',
      accordionCategory: '',
      img: '',
      size: '',
      sku: '',
    };
  });


  // ── NEW: WATCH FOR DB PRODUCTS ON INITIAL LOAD FROM URL ──
  useEffect(() => {
    if (productId && combinedProducts.length > ALL_PRODUCTS.length) {
      const decodedSku = decodeURIComponent(productId);
      const matchedProduct = combinedProducts.find(p => p.sku === decodedSku);
      if (matchedProduct && matchedProduct.id !== selectedProduct?.id) {
        setSelectedProduct(matchedProduct);
      }
    }
  }, [combinedProducts, productId, selectedProduct]);

  // ── NEW: 1. Track absolute latest product to prevent 3D loading glitches ──
  const latestProductRef = useRef(selectedProduct);
  useEffect(() => {
    latestProductRef.current = selectedProduct;
  }, [selectedProduct]);
  //For load original Product first when we click first 
  const isLoadingDbProductsRef = useRef(true);
  useEffect(() => {
    isLoadingDbProductsRef.current = isLoadingDbProducts;
  }, [isLoadingDbProducts]);

  // ── NEW: 2. Auto-stamp the current tile to history so chips never vanish ──
  useEffect(() => {
    const timer = setTimeout(() => {
      const targetHistoryId = initialImage?.historyEntryId || initialImage?.id;
      if (onProductChange && targetHistoryId && selectedProduct) {
        onProductChange(targetHistoryId, selectedProduct);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [initialImage?.historyEntryId, initialImage?.id, selectedProduct, onProductChange]);

  // useEffect(() => {
  //   localStorage.setItem('savedSelectedProduct', JSON.stringify(selectedProduct));
  // }, [selectedProduct]);

  //  History item click hone par uska exact tile restore karo
  useEffect(() => {
    if (isLoadingDbProducts) return;
    if (!(initialImage?.historyEntryId && initialImage?.lastProduct)) return;

    const historyProduct = combinedProducts.find(p => p.id === initialImage.lastProduct.id);

    if (historyProduct && historyProduct.id !== selectedProduct?.id) {
      setSelectedProduct(historyProduct);
      setExpandedProductCategory(historyProduct.accordionCategory);
      setActiveFooterCategory(historyProduct.accordionCategory);
      setFloorRotation(0);

      const safeSku = encodeURIComponent(historyProduct.sku);
      const safeRoom = encodeURIComponent(initialImage?.id || 'default');
      navigate(`/visualizer/${safeSku}/${safeRoom}`, { replace: true });

      if (visualizerInstance.current && visualizerInstance.current.updateTexture) {
        visualizerInstance.current.updateTexture(historyProduct.img, 0);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialImage, combinedProducts, isLoadingDbProducts]);

  const [processedImage, setProcessedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isFloorVisible, setIsFloorVisible] = useState(true);
  const threeContainerRef = useRef(null);
  const visualizerInstance = useRef(null);
  const compositeRef = useRef(null);
  const hasAppliedDefaultRef = useRef(null);

  // ── COMPARE MODE STATES ──
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [compareLeftProduct, setCompareLeftProduct] = useState(null);
  const [compareRightProduct, setCompareRightProduct] = useState(null);
  const [compareLeftImage, setCompareLeftImage] = useState(null);
  const [compareRightImage, setCompareRightImage] = useState(null);
  const [activeCompareSide, setActiveCompareSide] = useState('right'); // 'left' or 'right'

  //  FOR FAVOURITE VIEW
  const [isFavoritesViewOpen, setIsFavoritesViewOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [floorRotation, setFloorRotation] = useState(0);
  const [sortOrder, setSortOrder] = useState('');

  // Sidebar states
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedProductCategory, setExpandedProductCategory] = useState(selectedProduct.accordionCategory);
  const [footerDisplayProduct, setFooterDisplayProduct] = useState(selectedProduct);
  useEffect(() => {
    setFooterDisplayProduct(selectedProduct);
  }, [selectedProduct]);

  const [activeFooterCategory, setActiveFooterCategory] = useState(ALL_PRODUCTS[0].accordionCategory);

  // Modal States
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [detailsProduct, setDetailsProduct] = useState(null);

  const [favoriteProducts, setFavoriteProducts] = useState(() => {
    const savedFavs = localStorage.getItem('savedFavorites');
    return savedFavs ? JSON.parse(savedFavs) : [];
  });
  useEffect(() => {
    localStorage.setItem('savedFavorites', JSON.stringify(favoriteProducts));
  }, [favoriteProducts]);

  // Dropdown States
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [isDownloadMenuOpen, setIsDownloadMenuOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [pendingDownloadFn, setPendingDownloadFn] = useState(null);

  // FullScreen Mode

  const [isImmersiveMode, setIsImmersiveMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);


  const shareRef = useRef(null);
  const downloadRef = useRef(null);
  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const isRotatingRef = useRef(false);
  // Toolbar States
  const [viewMode, setViewMode] = useState('list');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // NEW: Track accordions manually closed during a search
  const [collapsedDuringSearch, setCollapsedDuringSearch] = useState([]);
  useEffect(() => {

    setCollapsedDuringSearch([]);
  }, [searchQuery]);
  // Filter Sidebar States
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [expandedFilterCategory, setExpandedFilterCategory] = useState(null);
  const [activeFilters, setActiveFilters] = useState({});

  const imageContainerRef = useRef(null);
  const activeBaseImage = uploadedRoom || initialImage;

  const {
    herringboneMode,
    isHerringbonePanelOpen,
    herringboneTile1,
    herringboneTile2,
    activeHerringboneSlot,
    setActiveHerringboneSlot,
    handleToggleHerringbone,
    handleHerringboneTileAssign,
    rotateHerringbone,
  } = useHerringbonePattern({
    activeBaseImage,
    visualizerInstance,
    selectedProduct,
    floorRotation,
    setErrorMsg,
    setIsProcessing: (val) => {
      if (isRotatingRef.current && val === true) return;
      setIsProcessing(val);
    },
  });

  useEffect(() => {
    if (expandedProductCategory === 'Timberland Herringbone') {
      if (!herringboneMode) handleToggleHerringbone();
    }
  }, [expandedProductCategory, herringboneMode, handleToggleHerringbone]);




  const roomSupportedCollections = activeBaseImage?.supportedCollections || [];
  const hasRoomFilter = roomSupportedCollections.length > 0;

  // ── Moved here so hasRoomFilter is already defined ──
  const productCategories = Array.from(new Set(
    combinedProducts
      .filter(p => p.navCategory === activeNavCategory)
      .filter(p => {
        const isSearching = searchQuery.trim() !== '';

        //  NEW: Mirror the filter check here
        const isFiltering = Object.values(activeFilters).some(selectedValues => selectedValues.length > 0);

        //  FIX: Show the accordion block globally if searching OR filtering
        if (isSearching || isFiltering) return true;

        return !hasRoomFilter || roomSupportedCollections.some(
          cat => normalizeCompare(cat) === normalizeCompare(p.accordionCategory)
        );
      })
      .map(p => p.accordionCategory)
  ));

  const currentSrc = processedImage || activeBaseImage?.previewUrl || 'https://images.unsplash.com/photo-1595844730298-b960fa25fa48?auto=format&fit=crop&w=1200&q=80';
  useEffect(() => {
    // For 3D rooms (maskUrl), your existing visualizerInstance hook already handles it.
    // For 2D rooms (rawFile), we need to trigger the python backend once the image is ready.
    if (activeBaseImage?.rawFile && !activeBaseImage?.maskUrl) {
      applyFloorOverlay(selectedProduct, floorRotation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeBaseImage]);
  useEffect(() => {
    setIsProcessing(true);
    const initTimer = setTimeout(() => setIsProcessing(false), 4500);
    return () => clearTimeout(initTimer);
  }, [activeBaseImage]);

  useEffect(() => {
    if (selectedProduct) {
      setActiveFooterCategory(selectedProduct.accordionCategory);
      setExpandedProductCategory(selectedProduct.accordionCategory);
    }
  }, [selectedProduct]);

  // ✅ NEW: Naya room aane par default-tile lock reset karo
  useEffect(() => {
    hasAppliedDefaultRef.current = null;
  }, [activeBaseImage]);

  // ── NEW: If the active product is outside the room's filter,
  //         auto-switch to the first available product ──
  // ✅ REPLACED: Room ke first supported collection ka first tile always wrap karo (normalized match)
  useEffect(() => {
    if (isLoadingDbProducts) return;
    if (initialImage?.historyEntryId && initialImage?.lastProduct) return;
    if (productId) return;

    const currentRoomKey = activeBaseImage?.id || activeBaseImage?.previewUrl || 'none';
    if (hasAppliedDefaultRef.current === currentRoomKey) return;

    const navProducts = combinedProducts.filter(p => p.navCategory === activeNavCategory);
    if (navProducts.length === 0) return;

    let firstProduct = null;

    if (hasRoomFilter && roomSupportedCollections.length > 0) {
      for (const cat of roomSupportedCollections) {
        const match = navProducts.find(
          p => normalizeCompare(p.accordionCategory) === normalizeCompare(cat)
        );
        if (match) {
          firstProduct = match;
          break;
        }
      }
    }

    if (!firstProduct) {
      firstProduct = navProducts[0];
    }

    if (firstProduct) {
      hasAppliedDefaultRef.current = currentRoomKey;

      setSelectedProduct(firstProduct);
      setExpandedProductCategory(firstProduct.accordionCategory);
      setActiveFooterCategory(firstProduct.accordionCategory);
      setFloorRotation(0);
      setIsFloorVisible(true);
      applyFloorOverlay(firstProduct, 0);

      const safeSku = encodeURIComponent(firstProduct.sku);
      const safeRoom = encodeURIComponent(initialImage?.id || 'default');
      navigate(`/visualizer/${safeSku}/${safeRoom}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingDbProducts, combinedProducts, activeNavCategory, hasRoomFilter, roomSupportedCollections, activeBaseImage]);

  // 🔍 TEMP DEBUG — issue confirm hone ke baad hata dena
  useEffect(() => {
    if (!isLoadingDbProducts) {
      // console.log('roomSupportedCollections:', roomSupportedCollections);
      // console.log('Available accordionCategories:',
      //   [...new Set(combinedProducts.map(p => `"${p.accordionCategory}"`))]
      // );
    }
  }, [isLoadingDbProducts, roomSupportedCollections, combinedProducts]);

  // ✅ NEW: Jab DB products load ho jaayen, productId (URL SKU) ko re-verify/correct karo
  useEffect(() => {
    if (isLoadingDbProducts) return;
    if (!productId) return;

    const decodedSku = decodeURIComponent(productId);
    const matchedProduct = combinedProducts.find(p => p.sku === decodedSku);

    if (matchedProduct && matchedProduct.id !== selectedProduct?.id) {
      setSelectedProduct(matchedProduct);
      setExpandedProductCategory(matchedProduct.accordionCategory);
      setActiveFooterCategory(matchedProduct.accordionCategory);
      applyFloorOverlay(matchedProduct, 0, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingDbProducts, combinedProducts, productId]);

  useEffect(() => {
    const container = imageContainerRef.current;
    if (!container) return;
    const handleWheel = (e) => {
      if (isDetailsModalOpen || isCompareMode) return;
      e.preventDefault();
      setZoomScale(prev => {
        const next = Math.min(Math.max(1, prev - e.deltaY * 0.002), 5);
        if (next === 1) setPan({ x: 0, y: 0 });
        return next;
      });
    };
    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [isDetailsModalOpen, isCompareMode]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (shareRef.current && !shareRef.current.contains(event.target)) setIsShareMenuOpen(false);
      if (downloadRef.current && !downloadRef.current.contains(event.target)) setIsDownloadMenuOpen(false);
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMenuDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  // FOR filter Product in Mobile nav collection 
  useEffect(() => {
    if (isLoadingDbProducts) return;

    if (currentTabFilteredProducts.length > 0) {
      const isCategoryStillValid = currentTabFilteredProducts.some(
        p => p.accordionCategory === activeFooterCategory
      );

      if (!isCategoryStillValid) {
        setActiveFooterCategory(currentTabFilteredProducts[0].accordionCategory);
      }
    }

  }, [activeNavCategory, activeFilters, searchQuery, isLoadingDbProducts]);
  // When exiting Compare Mode, reset the 3D texture to normal mode's selected product
  useEffect(() => {
    if (!isCompareMode && visualizerInstance.current && selectedProduct && activeBaseImage?.maskUrl) {
      visualizerInstance.current.updateTexture(selectedProduct.img, floorRotation);
    }
  }, [isCompareMode]);

  // Separate the compare-mode guard from the visualizer lifecycle
  useEffect(() => {
    if (!activeBaseImage?.maskUrl || !threeContainerRef.current) return;

    const timer = setTimeout(() => {
      if (threeContainerRef.current) {
        const instance = initVisualizer(threeContainerRef.current, activeBaseImage?.prediction);

        if (instance) {
          visualizerInstance.current = instance;
          if (!isLoadingDbProductsRef.current && latestProductRef.current && instance.updateTexture) {
            instance.updateTexture(latestProductRef.current.img, floorRotation);
          }
        }
      }
    }, 150);

    return () => {
      clearTimeout(timer);
      if (visualizerInstance.current?.cleanup) {
        visualizerInstance.current.cleanup();
      }
      visualizerInstance.current = null;
    };
  }, [activeBaseImage, activeBaseImage?.maskUrl]);
  const handleMouseDown = (e) => { if (zoomScale > 1 && !isDetailsModalOpen && !isCompareMode) { setIsDragging(true); setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y }); } };
  const handleMouseMove = (e) => { if (isDragging && !isDetailsModalOpen && !isCompareMode) setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y }); };
  const handleMouseUpOrLeave = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    if (isDetailsModalOpen || isCompareMode) return;
    if (e.touches.length === 2) {
      const dist = getDistance(e.touches[0], e.touches[1]);
      setInitialPinchDist(dist);
    } else if (e.touches.length === 1 && zoomScale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX - pan.x, y: e.touches[0].clientY - pan.y });
    }
  };

  const handleTouchMove = (e) => {
    if (isDetailsModalOpen || isCompareMode) return;
    if (e.touches.length === 2 && initialPinchDist !== null) {
      const currentDist = getDistance(e.touches[0], e.touches[1]);
      const scaleChange = currentDist / initialPinchDist;
      setZoomScale(prev => {
        const next = Math.min(Math.max(1, prev * scaleChange), 5);
        if (next === 1) setPan({ x: 0, y: 0 });
        return next;
      });
      setInitialPinchDist(currentDist);
    } else if (e.touches.length === 1 && isDragging) {
      setPan({ x: e.touches[0].clientX - dragStart.x, y: e.touches[0].clientY - dragStart.y });
    }
  };

  // ✅ NEW: Kisi bhi collection ka pehla tile floor par wrap karne ke liye shared helper
  const wrapFirstTileForCategory = (categoryName, productsList) => {
    if (isCompareMode) return; // compare mode apna alag flow follow karta hai

    const products = productsList.filter(p => p.accordionCategory === categoryName);
    const firstTile = products[0];
    if (!firstTile || firstTile.id === selectedProduct?.id) return;

    setSelectedProduct(firstTile);
    setFloorRotation(0);
    setIsFloorVisible(true);
    applyFloorOverlay(firstTile, 0);

    const safeSku = encodeURIComponent(firstTile.sku);
    const safeRoom = encodeURIComponent(initialImage?.id || 'default');
    navigate(`/visualizer/${safeSku}/${safeRoom}`, { replace: true });

    const targetHistoryId = initialImage?.historyEntryId || initialImage?.id;
    if (onProductChange && targetHistoryId) {
      onProductChange(targetHistoryId, firstTile);
    }
  };

  const handleTouchEnd = () => { setIsDragging(false); setInitialPinchDist(null); };

  const getRotatedTileBlob = async (imageSrc, angle) => {
    return new Promise((resolve, reject) => {
      const img = new Image();

      // FIX: Yeh line lagane se browser image ko anonymously request karega aur canvas taint nahi hoga
      img.crossOrigin = 'anonymous';

      img.onload = () => {
        const canvas = document.createElement('canvas');
        if (angle % 180 !== 0) {
          canvas.width = img.height;
          canvas.height = img.width;
        } else {
          canvas.width = img.width;
          canvas.height = img.height;
        }
        const ctx = canvas.getContext('2d');
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((angle * Math.PI) / 180);
        ctx.drawImage(img, -img.width / 2, -img.height / 2);

        // Ab ye line bina kisi crash ya error ke flawlessly chalegi!
        canvas.toBlob(resolve, 'image/jpeg', 0.90);
      };
      img.onerror = reject;
      img.src = imageSrc;
    });
  };

  // ── FIX: HELPER FUNCTION TO PROMISIFY IMAGE LOADING ──
  const loadCanvasImage = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = src;
    });
  };

  // ── FIX: GENERATE LOCAL 3D COMPOSITE SAFELY ──
  const generateCompositeImage = async (product, angle = 0) => {
    if (!activeBaseImage?.maskUrl || !visualizerInstance.current) {
      return null;
    }

    try {
      // 1. Pre-load all required image assets FIRST so we don't wait later
      const [bgImg, maskImg] = await Promise.all([
        loadCanvasImage(activeBaseImage.previewUrl),
        loadCanvasImage(activeBaseImage.maskUrl)
      ]);

      if (!bgImg || !maskImg) return null;


      const categoryName = (product?.accordionCategory || "").toLowerCase();


      if (herringboneMode) {
        if (visualizerInstance.current.updateHerringboneTexture && herringboneTile1 && herringboneTile2) {
          await visualizerInstance.current.updateHerringboneTexture(herringboneTile1.img, herringboneTile2.img, angle);
        }
      } else if (categoryName.includes('monja') || categoryName.includes('monza') || categoryName.includes('stoneland')) {
        if (monzaDualModeRef.current && monzaTile2Ref.current) {
          if (visualizerInstance.current.updateCheckerboardTexture) {
            await visualizerInstance.current.updateCheckerboardTexture(product.img, monzaTile2Ref.current.img, angle);
          }
        } else {
          if (visualizerInstance.current.updateMonzaSolidTexture) {
            await visualizerInstance.current.updateMonzaSolidTexture(product.img, angle);
          }
        }
      } else if (categoryName.includes('timber') || categoryName.includes('grandeure') || categoryName.includes('plank')) {
        if (visualizerInstance.current.updateStaggeredTexture) {
          await visualizerInstance.current.updateStaggeredTexture(product.img, 0.333, angle);
        }
      } else {
        if (visualizerInstance.current.updateTexture) {
          await visualizerInstance.current.updateTexture(product.img, angle);
        }
      }

      // 3. SYNCHRONOUSLY build the composite exactly as the WebGL buffer finishes
      const canvas = document.createElement('canvas');
      canvas.width = bgImg.width;
      canvas.height = bgImg.height;
      const ctx = canvas.getContext('2d');

      // Layer 1: Base Room Background
      ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

      // Layer 2: Updated ThreeJS webgl layer
      const webglCanvas = threeContainerRef.current?.querySelector('canvas');
      if (webglCanvas) {
        ctx.drawImage(webglCanvas, 0, 0, canvas.width, canvas.height);
      }

      // Layer 3: Top Mask layer
      ctx.drawImage(maskImg, 0, 0, canvas.width, canvas.height);

      // Return the baked image instantly
      return canvas.toDataURL('image/jpeg', 0.92);

    } catch (e) {
      console.error("Canvas composite failed:", e);
      return null;
    }
  };

  // Canvas-only composite that doesn't need the live ThreeJS instance
  const generateStaticComposite = async (productImgUrl) => {
    if (!activeBaseImage?.maskUrl) return null;

    try {
      // Pre-load all assets to prevent async race conditions
      const [bgImg, maskImg, tileImg] = await Promise.all([
        loadCanvasImage(activeBaseImage.previewUrl),
        loadCanvasImage(activeBaseImage.maskUrl),
        loadCanvasImage(productImgUrl)
      ]);

      if (!bgImg || !maskImg || !tileImg) return null;

      const canvas = document.createElement('canvas');
      canvas.width = bgImg.width;
      canvas.height = bgImg.height;
      const ctx = canvas.getContext('2d');

      // Layer 1: Base Room
      ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

      // Layer 2: Floor pattern approximation
      const pattern = ctx.createPattern(tileImg, 'repeat');
      if (pattern) {
        ctx.save();
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = pattern;
        ctx.fillRect(0, canvas.height * 0.45, canvas.width, canvas.height * 0.55);
        ctx.restore();
      }

      // Layer 3: Mask
      ctx.drawImage(maskImg, 0, 0, canvas.width, canvas.height);

      return canvas.toDataURL('image/jpeg', 0.92);

    } catch (e) {
      console.error("Static composite failed:", e);
      return null;
    }
  };

  const handleEnterCompare = async () => {
    let initialComposite = null;
    if (activeBaseImage?.maskUrl && visualizerInstance.current) {
      setIsProcessing(true);
      initialComposite = await generateCompositeImage(selectedProduct, floorRotation);
      setIsProcessing(false);
    }

    //  Step 2: NOW enter compare mode
    setIsCompareMode(true);

    //  Set Left side to "Original Floor" by default instead of duplicating selectedProduct
    const originalFloorPlaceholder = {
      id: 'original_floor',
      name: 'Apply Left Side',
      img: activeBaseImage?.previewUrl, // Dummy thumbnail for Original Room
      size: 'Base'
    };

    setCompareLeftProduct(originalFloorPlaceholder);
    setCompareRightProduct(selectedProduct);

    setActiveCompareSide('right');

    if (window.innerWidth >= 768) setIsSidebarOpen(true);

    // ✅ FIX 2: Set Left image to the base room image (without any floor applied)
    const baseRoomImage = activeBaseImage?.previewUrl || currentSrc;
    setCompareLeftImage(baseRoomImage);

    //  Step 3: Use the pre-captured composite ONLY for the RIGHT side
    if (initialComposite) {
      setCompareRightImage(initialComposite);
      return;
    }

    // Fallback for rawFile (2D) rooms
    if (activeBaseImage?.rawFile && selectedProduct) {
      setIsProcessing(true);
      try {
        const tileBlob = await getRotatedTileBlob(selectedProduct.img, floorRotation);
        const formData = new FormData();
        formData.append('roomImage', activeBaseImage.rawFile);
        formData.append('floorImage', tileBlob, `${selectedProduct.name}_rotated.jpg`);
        formData.append('instructions', `The flooring tiles have physical dimensions of ${selectedProduct.size}.`);
        const response = await fetch(`${PYTHON_BACKEND_URL}/api/replace-floor`, { method: 'POST', body: formData });
        const data = await response.json();

        if (response.ok && data.success) {
          // ✅ FIX 3: Apply the backend-generated floor ONLY to the Right Image
          setCompareRightImage(data.imageDataUrl);
        } else {
          setCompareRightImage(currentSrc);
        }
      } catch {
        setCompareRightImage(currentSrc);
      } finally {
        setIsProcessing(false);
      }
    } else {
      setCompareRightImage(currentSrc);
    }
  };
  const applyFloorOverlay = async (product, angle, showLoader = true, overrideTile2 = null, overrideDualMode = null) => {
    if (!activeBaseImage) return;
    if (showLoader) setIsProcessing(true);

    try {

      if (activeBaseImage?.maskUrl) {
        if (visualizerInstance.current) {
          // Fallback to empty string if undefined, convert to lowercase
          const categoryName = (product?.accordionCategory || "").toLowerCase();
          const productName = (product?.name || "").toLowerCase();

          // 1. Check for Herringbone
          if (categoryName.includes('herringbone') || productName.includes('herringbone')) {
            if (visualizerInstance.current.updateHerringboneTexture && herringboneTile1 && herringboneTile2) {
              await visualizerInstance.current.updateHerringboneTexture(herringboneTile1.img, herringboneTile2.img, angle);
            }
          }

          // 2. Check for Stoneland / Monza
          else if (categoryName.includes('monja') || categoryName.includes('monza') || categoryName.includes('stoneland')) {
            //  FIX: kabhi bhi stale state pe depend nahi karte — override > ref > state
            const isDualMode = overrideDualMode !== null ? overrideDualMode : monzaDualModeRef.current;
            const tile2ToUse = overrideTile2 || monzaTile2Ref.current;

            if (isDualMode && tile2ToUse) {
              if (visualizerInstance.current.updateCheckerboardTexture) {
                await visualizerInstance.current.updateCheckerboardTexture(product.img, tile2ToUse.img, angle);
              }
            } else {
              if (visualizerInstance.current.updateMonzaSolidTexture) {
                await visualizerInstance.current.updateMonzaSolidTexture(product.img, angle);
              }
            }
          }
          // NEW: Check for Planks (Timberland, Timberworld, Grandeure) for 1/3 Stagger
          else if (categoryName.includes('timber') || categoryName.includes('grandeure') || categoryName.includes('plank')) {
            if (visualizerInstance.current.updateStaggeredTexture) {
              await visualizerInstance.current.updateStaggeredTexture(product.img, 0.333, angle);
            }
          }
          // 4. Default Standard Grid
          else {
            if (visualizerInstance.current.updateTexture) {
              await visualizerInstance.current.updateTexture(product.img, angle);
            }
          }
        }
        //  FIX: 4.5 seconds ka freeze lag khatam kiya, ab updates instantly trigger hongi
        await new Promise(resolve => setTimeout(resolve, 4000));
        setIsProcessing(false);
        return;
      }


      if (!activeBaseImage?.rawFile) return;

      const tileBlob = await getRotatedTileBlob(product.img, angle);
      const formData = new FormData();
      formData.append('roomImage', activeBaseImage.rawFile);
      formData.append('floorImage', tileBlob, `${product.name}_rotated.jpg`);
      const dimensionInstruction = `The flooring tiles have physical dimensions of ${product.size}. Please scale the floor pattern realistically relative to the room perspective. ${product.description || ""}`.trim();
      formData.append('instructions', dimensionInstruction);

      const [response] = await Promise.all([
        fetch(`${PYTHON_BACKEND_URL}/api/replace-floor`, { method: 'POST', body: formData }),
        new Promise(resolve => setTimeout(resolve, 4500))
      ]);

      const data = await response.json();
      if (response.ok && data.success) {
        setProcessedImage(data.imageDataUrl);
      } else {
        const msg = data.error || 'Unknown server error.';
        console.error('Server error:', msg);
        setErrorMsg(`Backend Error: ${msg}`);
      }

    } catch (err) {
      console.error('Network / processing error:', err);
      setErrorMsg(`Connection Error: ${err.message}.`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleTileSelection = async (product) => {
    closePreview();
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
    setZoomScale(1);
    setPan({ x: 0, y: 0 });
    setErrorMsg(null);

    const isHerringboneProduct =
      (product?.accordionCategory || "").toLowerCase().includes('herringbone') ||
      (product?.name || "").toLowerCase().includes('herringbone');
    if (herringboneMode && !isHerringboneProduct) {
      handleToggleHerringbone();
    }
    if (monzaDualMode && (product.accordionCategory.toLowerCase().includes('monza') || product.accordionCategory.toLowerCase().includes('stoneland'))) {
      if (activeMonzaSlot === 2) {
        setMonzaTile2(product);
        setFooterDisplayProduct(product);
        applyFloorOverlay(selectedProduct, floorRotation, true, product, true);
        return;
      } else if (activeMonzaSlot === 1) {
        setSelectedProduct(product);
        applyFloorOverlay(product, floorRotation, true, monzaTile2Ref.current, true);

        const safeSku = encodeURIComponent(product.sku);
        const safeRoom = encodeURIComponent(initialImage?.id || 'default');
        navigate(`/visualizer/${safeSku}/${safeRoom}`, { replace: true });

        const targetHistoryId = initialImage?.historyEntryId || initialImage?.id;
        if (onProductChange && targetHistoryId) {
          onProductChange(targetHistoryId, product);
        }

        return;
      }
    }

    // Update the browser URL cleanly without reloading the page
    const safeSku = encodeURIComponent(product.sku);
    const safeRoom = encodeURIComponent(initialImage?.id || 'default');
    navigate(`/visualizer/${safeSku}/${safeRoom}`, { replace: true });
    // window.history.replaceState(null, '', `/visualizer/${safeSku}/${safeRoom}`);

    // ── COMPARE MODE BRANCH ──
    if (isCompareMode) {
      const currentSideProduct = activeCompareSide === 'left' ? compareLeftProduct : compareRightProduct;
      if (currentSideProduct?.id === product.id) return;

      if (activeCompareSide === 'left') setCompareLeftProduct(product);
      else setCompareRightProduct(product);

      setIsProcessing(true);
      try {
        // FIX: Prioritize local rendering for 3D rooms to avoid Fetch errors
        // FIXED CODE
        if (activeBaseImage?.maskUrl) {
          // Try live visualizer first, fall back to static canvas composite
          const compositeDataUrl = visualizerInstance.current
            ? await generateCompositeImage(product, floorRotation)
            : await generateStaticComposite(product.img, floorRotation);

          if (compositeDataUrl) {
            if (activeCompareSide === 'left') setCompareLeftImage(compositeDataUrl);
            else setCompareRightImage(compositeDataUrl);
            setIsProcessing(false);
            if (window.innerWidth < 768) setIsSidebarOpen(false);
            return;
          }
        }
        // Fallback to Python if it's a 2D rawFile room
        if (activeBaseImage?.rawFile) {
          const tileBlob = await getRotatedTileBlob(product.img, floorRotation);
          const formData = new FormData();
          formData.append('roomImage', activeBaseImage.rawFile);
          formData.append('floorImage', tileBlob, `${product.name}_rotated.jpg`);
          formData.append('instructions', `The flooring tiles have physical dimensions of ${product.size}. Please scale realistically.`);

          const response = await fetch(`${PYTHON_BACKEND_URL}/api/replace-floor`, { method: 'POST', body: formData });
          const data = await response.json();
          if (response.ok && data.success) {
            if (activeCompareSide === 'left') setCompareLeftImage(data.imageDataUrl);
            else setCompareRightImage(data.imageDataUrl);
          } else {
            setErrorMsg(data.error || 'Failed to generate comparison image');
          }
        } else {
          // Absolute fallback if no raw room is uploaded
          if (activeCompareSide === 'left') setCompareLeftImage(product.img);
          else setCompareRightImage(product.img);
        }
      } catch (err) {
        setErrorMsg(`Compare Error: ${err.message}`);
      } finally {
        setIsProcessing(false);
        if (window.innerWidth < 768) setIsSidebarOpen(false); // Close sidebar on mobile
      }
      return;
    }

    // ── NORMAL MODE BRANCH ──
    setSelectedProduct(product);
    setFloorRotation(0);
    setIsFloorVisible(true);
    applyFloorOverlay(product, 0);
    setIsSidebarOpen(false);
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    }, 100);
    const targetHistoryId = initialImage?.historyEntryId || initialImage?.id;

    if (onProductChange && targetHistoryId) {
      onProductChange(targetHistoryId, product);
    }
  };



  const handleReset = () => {
    setProcessedImage(null);
    setErrorMsg(null);
    setZoomScale(1);
    setPan({ x: 0, y: 0 });
    setFloorRotation(0);
    setIsFloorVisible(false);
  };
  const handleOpenDetails = (e, product) => {
    e.stopPropagation();
    setDetailsProduct(product);
    setIsDetailsModalOpen(true);
  };
  const toggleFavorite = (e, productId) => {
    e.stopPropagation();
    setFavoriteProducts(prev => prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]);
  };

  const handleRotate = () => {
    if (!isFloorVisible) return;
    const nextAngle = (floorRotation + 15) % 180;
    setFloorRotation(nextAngle);
    setIsFloorVisible(true);
    if (herringboneMode) {
      isRotatingRef.current = true; // 1. Raise flag to block incoming loader requests
      rotateHerringbone(nextAngle); // 2. Perform the canvas/texture rotation

      // 3. Clear the flag after the immediate asynchronous state changes clear up
      setTimeout(() => {
        isRotatingRef.current = false;
      }, 250);
    } else {
      //  FIX: ref se current dualMode/tile2 explicitly pass, rotate pe checkerboard break na ho
      applyFloorOverlay(selectedProduct, -nextAngle, false, monzaTile2Ref.current, monzaDualModeRef.current);
    }
  };

  const getDistance = (touch1, touch2) => {
    return Math.sqrt(Math.pow(touch2.clientX - touch1.clientX, 2) + Math.pow(touch2.clientY - touch1.clientY, 2));
  };

  const handleShare = (platform) => {

    const baseUrl = window.location.origin;
    const safeSku = encodeURIComponent(selectedProduct.sku);
    const safeRoom = encodeURIComponent(initialImage?.id || 'default');

    // The clean URL path
    const rawUrl = `${baseUrl}/visualizer/${safeSku}/${safeRoom}`;
    const shareUrl = encodeURIComponent(rawUrl);

    // Note: We completely deleted the `shareText` variable to keep the link clean!

    switch (platform) {
      case 'copy':
        navigator.clipboard.writeText(rawUrl); // Only copies the URL
        alert("Link copied!");
        break;

      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
          '_blank'
        );
        break;

      case 'whatsapp':
        window.open(
          `https://api.whatsapp.com/send?text=${shareUrl}`,
          '_blank'
        );
        break;

      // case 'pinterest': {
      //   const pinImg = encodeURIComponent(selectedProduct.img);
      //   window.open(
      //     `https://pinterest.com/pin/create/button/?url=${shareUrl}&media=${pinImg}`,
      //     '_blank'
      //   );
      //   break;
      // }
      case 'email':
        window.open(
          `mailto:?subject=${encodeURIComponent('Wonderfloor Design — ' + selectedProduct.name)}&body=${shareUrl}`
        );
        break;

      default:
        break;
    }

    setIsShareMenuOpen(false);
  };

  //add filter option by dashboard when it is not available in ARVisualizer in filter if exist then it is not place inside filter option
  const filterCategories = useMemo(() => {
    return BASE_FILTER_CATEGORIES.map(category => {
      const uniqueOptionsSet = new Set();

      // 1. Process predefined static configuration elements
      if (Array.isArray(category.options)) {
        category.options.forEach(opt => {
          if (opt !== undefined && opt !== null) {
            const cleaned = String(opt).trim();
            if (cleaned !== '') uniqueOptionsSet.add(cleaned);
          }
        });
      }

      // 2. Extract and normalize dynamic entries from product lists
      combinedProducts.forEach(prod => {
        const rawValue = prod[category.id];
        const valuesArray = parseFieldToArray(rawValue); // Parse messy strings safely

        valuesArray.forEach(v => {
          if (v !== undefined && v !== null) {
            let cleaned = String(v).trim();
            // Apply uniform thickness formatting for the sidebar (e.g. 2.0 mm)
            if (category.id === 'thickness') {
              cleaned = normalizeThickness(cleaned);
            }
            if (cleaned !== '') uniqueOptionsSet.add(cleaned);
          }
        });
      });

      // 3. Human-friendly alphanumeric sort
      const sortedOptions = Array.from(uniqueOptionsSet).sort((a, b) => {
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
      });

      return {
        ...category,
        options: sortedOptions,
      };
    });
  }, [combinedProducts]);// Removed room dependencies so the filter menu is always full


  const handleToggleFilter = (categoryId, option) => {
    setActiveFilters(prev => {
      const currentSelected = prev[categoryId] || [];
      const isRemoving = currentSelected.includes(option);

      if (categoryId === 'accordionCategory' && !isRemoving) {
        setExpandedProductCategory(option);
        setActiveFooterCategory(option);
        // wrapFirstTileForCategory(option, currentTabFilteredProducts);
      }

      if (isRemoving) {
        return { ...prev, [categoryId]: currentSelected.filter(item => item !== option) };
      } else {
        return { ...prev, [categoryId]: [...currentSelected, option] };
      }
    });
  };

  const handleToggleSelectAll = (categoryId, allOptions) => {
    setActiveFilters(prev => {
      const currentSelected = prev[categoryId] || [];
      const isAllSelected = currentSelected.length === allOptions.length;

      if (isAllSelected) {
        return { ...prev, [categoryId]: [] };
      } else {
        return { ...prev, [categoryId]: [...allOptions] };
      }
    });
  };
  const clearFilters = () => setActiveFilters({});
  // Filter Logic
  const navProducts = combinedProducts.filter(p => p.navCategory === activeNavCategory);
  // console.log('activeNavCategory:', activeNavCategory);
  // console.log('navProducts count:', navProducts.length);
  // console.log('ALL_PRODUCTS count:', ALL_PRODUCTS.length);


  // ── FILTER LOGIC SECTION KO IS TARAH UPDATE KAREIN ──
  const filteredProducts = combinedProducts.filter(prod => {
    const searchLower = searchQuery.trim().toLowerCase();
    const isSearching = searchLower !== '';

    const isBypassActive =
      (activeFilters['accordionCategory']?.length > 0) ||
      (activeFilters['userIndustry']?.length > 0);

    if (!isSearching && !isBypassActive && hasRoomFilter && !roomSupportedCollections.some(
      cat => normalizeCompare(cat) === normalizeCompare(prod.accordionCategory)
    )) {
      return false;
    }

    // Baaki ka matchesSearch aur matchesFilters ka logic same rahega...
    const matchesSearch = searchLower === '' ||
      safeSearchMatch(prod.name, searchLower) ||
      safeSearchMatch(prod.accordionCategory, searchLower) ||
      safeSearchMatch(prod.collection, searchLower) ||
      safeSearchMatch(prod.colour, searchLower) ||
      safeSearchMatch(prod.shade, searchLower) ||
      safeSearchMatch(prod.style, searchLower) ||
      safeSearchMatch(prod.pattern, searchLower) ||
      safeSearchMatch(prod.thickness, searchLower) ||
      safeSearchMatch(normalizeThickness(prod.thickness), searchLower) ||
      safeSearchMatch(prod.userIndustry, searchLower) ||
      safeSearchMatch(prod.applicationArea, searchLower) ||
      (prod.tags && prod.tags.some(tag => tag.toLowerCase().includes(searchLower)));

    const matchesFilters = Object.entries(activeFilters).every(([key, selectedValues]) => {
      if (selectedValues.length === 0) return true;

      const rawValue = prod[key];
      if (rawValue === undefined || rawValue === null) return false;

      let prodValues = parseFieldToArray(rawValue);

      if (key === 'thickness') {
        prodValues = prodValues.map(normalizeThickness);
      } else {
        prodValues = prodValues.map(v => String(v).trim());
      }

      return selectedValues.some(selected => prodValues.includes(selected));
    });

    return matchesSearch && matchesFilters;
  });
  // Isolate filtered results matching the current tab category
  const currentTabFilteredProducts = filteredProducts.filter(p => p.navCategory === activeNavCategory);

  const displayCategories = [...productCategories].sort((a, b) => {
    // Manual sort overrides everything
    if (sortOrder === 'Cat-A-Z') return a.localeCompare(b);
    if (sortOrder === 'Cat-Z-A') return b.localeCompare(a);


    if (hasRoomFilter) {
      const idxA = roomSupportedCollections.indexOf(a);
      const idxB = roomSupportedCollections.indexOf(b);

      if (idxA !== -1 && idxB !== -1) return idxA - idxB;

      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
    }


    const prodA = combinedProducts.find(p => p.accordionCategory === a);
    const prodB = combinedProducts.find(p => p.accordionCategory === b);
    const tierA = prodA?.collectionTierOrder ?? 999;
    const tierB = prodB?.collectionTierOrder ?? 999;
    return tierA - tierB;
  });
  const totalActiveFiltersCount = Object.values(activeFilters).reduce((acc, curr) => acc + curr.length, 0);
  const dm = {
    root: isDarkMode ? 'bg-[#0f172a] text-gray-100' : 'bg-[#f9fafb] text-gray-800',
    navbar: isDarkMode ? 'bg-[#1e293b] border-[#334155]' : 'bg-white border-gray-200',
    sidebar: isDarkMode ? 'bg-[#1e293b] border-[#334155]' : 'bg-white border-gray-200',
    card: isDarkMode ? 'bg-[#243447] border-[#3d5068]' : 'bg-white border-gray-200',
    cardSelected: isDarkMode ? 'border-teal-400 bg-teal-900/40 shadow-[0_0_12px_rgba(45,212,191,0.25)]' : 'border-[#0b5e5e] bg-[#0b5e5e]/5',
    input: isDarkMode ? 'bg-[#1a2740] border-[#3d5068] text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-800',
    footer: isDarkMode ? 'bg-[#1e293b] border-[#334155]' : 'bg-white border-gray-200',

    // ── VIBRANT TEXT COLORS ──
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    subtext: isDarkMode ? 'text-gray-300' : 'text-gray-500',
    brandLabel: isDarkMode ? 'text-teal-400' : 'text-gray-500',
    sizeText: isDarkMode ? 'text-gray-300' : 'text-gray-500',
    moreDetails: isDarkMode ? 'text-teal-400 hover:text-teal-300' : 'text-[#0b5e5e] hover:underline',
    accent: isDarkMode ? 'text-teal-400' : 'text-[#0b5e5e]',

    hover: isDarkMode ? 'hover:bg-[#2d4059]' : 'hover:bg-gray-100',
    divider: isDarkMode ? 'border-[#334155]' : 'border-gray-200',
    accordion: isDarkMode ? 'bg-[#243447] border-[#3d5068] text-white' : 'bg-white border-gray-200 text-gray-800',

    // ── FILTER SIDEBAR SPECIFIC ──
    filterBg: isDarkMode ? 'bg-[#1e293b]' : 'bg-white',
    filterHeader: isDarkMode ? 'border-[#334155]' : 'border-gray-100',
    filterBtn: isDarkMode ? 'bg-[#243447] hover:bg-[#2d4059] text-gray-100' : 'hover:bg-gray-50 text-gray-800',
    filterActive: isDarkMode ? 'bg-[#2d4059] text-white' : 'bg-gray-100 text-gray-800',
    filterOption: isDarkMode ? 'text-gray-200' : 'text-gray-700',
    filterFooter: isDarkMode ? 'bg-[#1a2535] border-[#334155]' : 'bg-gray-50 border-gray-200',
    filterClear: isDarkMode ? 'border-[#3d5068] text-gray-200 hover:bg-[#2d4059]' : 'border-gray-300 text-gray-700 hover:bg-gray-50',
    navBtn: isDarkMode ? 'text-gray-200 hover:text-white hover:bg-[#2d4059]' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
    navBtnActive: isDarkMode ? 'text-white' : 'text-gray-900',
    footerText: isDarkMode ? 'text-white' : 'text-gray-900',
    footerSub: isDarkMode ? 'text-gray-300' : 'text-gray-400',
    actionBtn: isDarkMode ? 'text-gray-200 hover:text-white hover:bg-[#2d4059]' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
    actionDis: isDarkMode ? 'text-gray-600 cursor-not-allowed opacity-40' : 'text-gray-400 cursor-not-allowed opacity-50',
    zoomText: isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900',
    tabActive: isDarkMode ? 'text-teal-400 border-teal-400' : 'text-[#0b5e5e] border-[#0b5e5e]',
    tabInactive: isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700',
  };
  return (
    <div className={`fixed inset-0 flex z-50 overflow-hidden font-sans transition-colors duration-300 ${dm.root}`}>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed md:relative md:border-r flex flex-col z-50 md:z-30 shrink-0 transition-all duration-300
  bottom-0 left-0 w-full h-[85vh] rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.15)]
  ${isSidebarOpen ? 'translate-y-0' : 'translate-y-full'} 
  md:w-[320px] md:h-full md:rounded-none md:shadow-sm md:translate-y-0
  ${isImmersiveMode ? 'md:hidden' : ''}
  ${dm.sidebar}`}>

        {isFavoritesViewOpen ? (
          <FavoritesView
            favoriteIds={favoriteProducts}
            allProducts={combinedProducts}
            onBack={() => setIsFavoritesViewOpen(false)}
            onSelectProduct={handleTileSelection}
            onToggleFavorite={toggleFavorite}
            onOpenDetails={handleOpenDetails}
          />
        ) : isFilterMenuOpen ? (
          <div className={`flex flex-col w-full h-full z-40 animate-fade-in
    md:rounded-none rounded-t-3xl overflow-hidden transition-colors
    ${isDarkMode ? 'bg-[#0f1b2d]' : 'bg-white'}`}>

            {/* ── HEADER ── */}
            <div className={`p-4 md:p-5 flex items-center gap-3 border-b shrink-0
              ${isDarkMode ? 'border-[#1e3a5f] bg-[#0f1b2d]' : 'border-gray-100 bg-white'}`}>
              <button
                onClick={() => setIsFilterMenuOpen(false)}
                className={`p-2 rounded-lg cursor-pointer transition-all
                  ${isDarkMode
                    ? 'text-gray-300 hover:text-white hover:bg-[#1e3a5f]'
                    : 'text-gray-500 hover:text-black hover:bg-gray-100'}`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <div>
                <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Filters
                </h2>
                <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {totalActiveFiltersCount === 0
                    ? 'No active filters'
                    : `${totalActiveFiltersCount} filter${totalActiveFiltersCount > 1 ? 's' : ''} applied`}
                </p>
              </div>
              {totalActiveFiltersCount > 0 && (
                <span className="ml-auto flex items-center justify-center w-6 h-6 rounded-full bg-teal-500 text-white text-[11px] font-bold shadow-md shadow-teal-500/30">
                  {totalActiveFiltersCount}
                </span>
              )}
            </div>

            {/* ── SCROLLABLE BODY ── */}
            <div className="flex-1 overflow-y-auto min-h-0 px-3 md:px-4 py-3 flex flex-col gap-1.5">


              {/* Sort By Accordion */}
              <div className={`shrink-0 rounded-xl overflow-hidden border transition-colors
  ${isDarkMode ? 'border-[#1e3a5f]' : 'border-gray-200'}`}>
                <button
                  onClick={() => setExpandedFilterCategory(expandedFilterCategory === 'sort' ? null : 'sort')}
                  className={`w-full flex justify-between items-center px-4 py-3.5 cursor-pointer transition-all
                    ${expandedFilterCategory === 'sort'
                      ? isDarkMode ? 'bg-[#1e3a5f] text-white' : 'bg-[#0b5e5e]/5 text-[#0b5e5e]'
                      : isDarkMode ? 'bg-[#152235] text-gray-200 hover:bg-[#1a2d47]' : 'bg-white text-gray-800 hover:bg-gray-50'}`}
                >
                  <span className="font-semibold text-sm flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
                    </svg>
                    Sort By
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform ${expandedFilterCategory === 'sort' ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${expandedFilterCategory === 'sort' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className={`flex flex-col gap-1 p-3 border-t
                      ${isDarkMode ? 'bg-[#0d1825] border-[#1e3a5f]' : 'bg-gray-50 border-gray-100'}`}>
                      {[
                        { label: 'Default', value: '' },
                        { label: 'Product Name (A–Z)', value: 'Prod-A-Z' },
                        { label: 'Product Name (Z–A)', value: 'Prod-Z-A' },
                        { label: 'Category Name (A–Z)', value: 'Cat-A-Z' },
                        { label: 'Category Name (Z–A)', value: 'Cat-Z-A' },
                      ].map(({ label, value }) => (
                        <label
                          key={value}
                          className={`relative flex justify-between items-center px-3 py-2.5 rounded-lg cursor-pointer transition-all
                            ${sortOrder === value
                              ? isDarkMode ? 'bg-teal-500/20 text-teal-300' : 'bg-[#0b5e5e]/10 text-[#0b5e5e]'
                              : isDarkMode ? 'text-gray-300 hover:bg-[#1a2d47] hover:text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                        >
                          <span className="text-sm font-medium">{label}</span>
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all
                            ${sortOrder === value
                              ? 'border-teal-400 bg-teal-400'
                              : isDarkMode ? 'border-gray-500' : 'border-gray-300'}`}>
                            {sortOrder === value && (
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            )}
                          </div>
                          <input
                            type="radio" name="sort" value={value}
                            checked={sortOrder === value}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="sr-only"
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Filter Category Accordions */}
              {filterCategories.map((category) => {
                const isExpanded = expandedFilterCategory === category.id;
                const selectedCount = activeFilters[category.id]?.length || 0;

                return (
                  <div key={category.id} className={`shrink-0 rounded-xl overflow-hidden border transition-colors
      ${isDarkMode ? 'border-[#1e3a5f]' : 'border-gray-200'}`}>

                    <button
                      onClick={() => setExpandedFilterCategory(isExpanded ? null : category.id)}
                      className={`w-full flex justify-between items-center px-4 py-3.5 cursor-pointer transition-all
                        ${isExpanded
                          ? isDarkMode ? 'bg-[#1e3a5f] text-white' : 'bg-[#0b5e5e]/5 text-[#0b5e5e]'
                          : isDarkMode ? 'bg-[#152235] text-gray-200 hover:bg-[#1a2d47]' : 'bg-white text-gray-800 hover:bg-gray-50'}`}
                    >
                      <span className="font-semibold text-sm flex items-center gap-2">
                        {category.label}
                        {selectedCount > 0 && (
                          <span className="bg-teal-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm shadow-teal-500/30">
                            {selectedCount}
                          </span>
                        )}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className={`p-3 border-t flex flex-col gap-1
  ${isDarkMode ? 'bg-[#0d1825] border-[#1e3a5f]' : 'bg-gray-50 border-gray-100'}`}>

                          {/* NEW: Agar category 'Product Collection' ya 'User Industry' hai, to 'Select All' dikhao */}
                          {(category.id === 'accordionCategory' || category.id === 'userIndustry') && (
                            <label
                              className={`relative flex justify-between items-center px-3 py-2.5 rounded-lg cursor-pointer transition-all
        ${activeFilters[category.id]?.length === category.options.length
                                  ? isDarkMode ? 'bg-teal-500/20 text-teal-300' : 'bg-[#0b5e5e]/10 text-[#0b5e5e]'
                                  : isDarkMode ? 'text-gray-300 hover:bg-[#1a2d47] hover:text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                            >
                              <span className="text-sm font-bold">Select All</span>
                              <div className={`w-4 h-4 rounded flex items-center justify-center border-2 transition-all
        ${activeFilters[category.id]?.length === category.options.length
                                  ? 'bg-teal-500 border-teal-500'
                                  : isDarkMode ? 'border-gray-500' : 'border-gray-300'}`}>
                                {activeFilters[category.id]?.length === category.options.length && (
                                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                )}
                              </div>
                              <input
                                type="checkbox"
                                checked={activeFilters[category.id]?.length === category.options.length}
                                onChange={() => handleToggleSelectAll(category.id, category.options)}
                                className="sr-only"
                              />
                            </label>
                          )}


                          {category.options.map(option => {
                            const isChecked = activeFilters[category.id]?.includes(option) || false;
                            return (
                              <label
                                key={option}
                                className={`relative flex justify-between items-center px-3 py-2.5 rounded-lg cursor-pointer transition-all
    ${isChecked
                                    ? isDarkMode ? 'bg-teal-500/20 text-teal-300' : 'bg-[#0b5e5e]/10 text-[#0b5e5e]'
                                    : isDarkMode ? 'text-gray-300 hover:bg-[#1a2d47] hover:text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                              >
                                <span className="text-sm font-medium">{option}</span>
                                <div className={`w-4 h-4 rounded flex items-center justify-center border-2 transition-all
                                  ${isChecked
                                    ? 'bg-teal-500 border-teal-500'
                                    : isDarkMode ? 'border-gray-500' : 'border-gray-300'}`}>
                                  {isChecked && (
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  )}
                                </div>
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => handleToggleFilter(category.id, option)}
                                  className="sr-only"
                                />
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── FOOTER BUTTONS ── */}
            <div className={`p-4 border-t flex gap-3 shrink-0
              ${isDarkMode ? 'bg-[#0f1b2d] border-[#1e3a5f]' : 'bg-white border-gray-200'}`}>
              <button
                onClick={clearFilters}
                className={`flex-1 py-3 rounded-xl text-sm font-semibold border-2 transition-all cursor-pointer
                  ${isDarkMode
                    ? 'border-[#1e3a5f] text-gray-300 hover:border-teal-500/50 hover:text-white hover:bg-[#1e3a5f]'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              >
                Clear all
              </button>
              <button
                onClick={() => setIsFilterMenuOpen(false)}
                className="flex-1 py-3 rounded-xl text-sm font-semibold text-white cursor-pointer transition-all
                  bg-gradient-to-r from-[#0b5e5e] to-teal-500 hover:from-[#084747] hover:to-teal-600
                  shadow-lg shadow-teal-900/40"
              >
                Apply
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="md:hidden w-full flex justify-center pt-3 pb-1 cursor-pointer touch-none" onClick={() => setIsSidebarOpen(false)}>
              <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
            </div>

            <div className="p-4 md:p-5 flex justify-between items-center pb-4 pt-2 md:pt-5">
              <img
                src="https://www.wonderfloor.co.in/assets/img/logo/logo.png"
                alt="Logo"
                className="h-8 max-w-[150px] md:max-w-[180px] object-contain"
              />
              <div className="flex items-center gap-1 md:gap-2">
                <button
                  onClick={() => setIsFavoritesViewOpen(true)}
                  className="relative p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill={favoriteProducts.length > 0 ? "#ef4444" : "none"} stroke={favoriteProducts.length > 0 ? "#ef4444" : "currentColor"} strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  {favoriteProducts.length > 0 && (
                    <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#0b5e5e] text-[10px] font-bold text-white border border-white">
                      {favoriteProducts.length}
                    </span>
                  )}
                </button>
                <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-400 hover:text-gray-800 hover:bg-gray-100 p-1.5 rounded-md transition-colors cursor-pointer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>
                <div className="relative md:hidden flex items-center" ref={mobileMenuRef}>
                  <button
                    onClick={() => setIsMenuDropdownOpen(!isMenuDropdownOpen)}
                    className={`p-1.5 rounded-md transition-colors cursor-pointer ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-[#2d4059]' : 'text-gray-400 hover:text-gray-800 hover:bg-gray-100'}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1.5"></circle><circle cx="12" cy="5" r="1.5"></circle><circle cx="12" cy="19" r="1.5"></circle></svg>
                  </button>
                  {isMenuDropdownOpen && (
                    <div className={`absolute top-[45px] right-0 shadow-2xl border rounded-md py-2 w-[180px] z-[100] flex flex-col transition-colors
                      ${isDarkMode ? 'bg-[#1e293b] border-[#334155]' : 'bg-white border-gray-200'}`}>

                      <button onClick={onOpenRecentRooms} className={`flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors cursor-pointer w-full
                        ${isDarkMode ? 'text-gray-300 hover:bg-[#2d4059] hover:text-white' : 'text-gray-700 hover:bg-gray-50'}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`shrink-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        My History
                        {historyCount > 0 && (
                          <span className="ml-1 bg-[#f05c3f] text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 shadow-sm">
                            {historyCount > 9 ? '9+' : historyCount}
                          </span>
                        )}
                      </button>

                      <RoomUploader
                        onImageUpload={(newImageData) => {
                          setUploadedRoom(newImageData);
                          setProcessedImage(null);
                          setIsMenuDropdownOpen(false);
                        }}
                        className={`flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors cursor-pointer w-full
                          ${isDarkMode ? 'text-gray-300 hover:bg-[#2d4059] hover:text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                        Upload
                      </RoomUploader>

                      <button
                        onClick={() => { setIsImmersiveMode(true); setIsMenuDropdownOpen(false); setIsSidebarOpen(false); }}
                        className={`flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors cursor-pointer w-full
                          ${isDarkMode ? 'text-gray-300 hover:bg-[#2d4059] hover:text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`shrink-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          <path d="M2 3h20v14H2z" /><path d="M8 21h8" /><path d="M12 17v4" />
                        </svg>
                        Immersive View
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="px-4 md:px-5 pb-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`w-10 h-10 border rounded-lg flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-sm
                    ${isDarkMode
                      ? 'bg-[#1e293b] border-[#334155] text-gray-300 hover:text-white hover:border-teal-500 hover:bg-[#1a2d47]'
                      : 'bg-white border-gray-200 text-gray-600 hover:text-[#0b5e5e] hover:border-[#0b5e5e] hover:bg-gray-50'}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>

                <button
                  onClick={() => setIsFilterMenuOpen(true)}
                  className={`flex-1 h-10 border rounded-lg flex items-center justify-center gap-2 transition-all text-sm font-semibold cursor-pointer relative shadow-sm
                    ${isDarkMode
                      ? 'bg-[#1e293b] border-[#334155] text-gray-300 hover:text-white hover:border-teal-500 hover:bg-[#1a2d47]'
                      : 'bg-white border-gray-200 text-gray-700 hover:text-[#0b5e5e] hover:border-[#0b5e5e] hover:bg-gray-50'}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                  Filters
                  {totalActiveFiltersCount > 0 && (
                    <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f05c3f] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#f05c3f]"></span>
                    </span>
                  )}
                </button>

                <div className={`flex border rounded-lg overflow-hidden h-10 shrink-0 shadow-sm transition-colors ${isDarkMode ? 'border-[#334155]' : 'border-gray-200'}`}>
                  <button onClick={() => setViewMode('list')} className={`w-10 flex justify-center items-center transition-all cursor-pointer ${viewMode === 'list' ? (isDarkMode ? 'bg-teal-500 text-white' : 'bg-[#0b5e5e] text-white') : (isDarkMode ? 'bg-[#1e293b] text-gray-400 hover:bg-[#2d4059] hover:text-white' : 'bg-white text-gray-500 hover:bg-gray-100')}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                  </button>
                  <div className={`w-px ${isDarkMode ? 'bg-[#334155]' : 'bg-gray-200'}`}></div>
                  <button onClick={() => setViewMode('grid')} className={`w-10 flex justify-center items-center transition-all cursor-pointer ${viewMode === 'grid' ? (isDarkMode ? 'bg-teal-500 text-white' : 'bg-[#0b5e5e] text-white') : (isDarkMode ? 'bg-[#1e293b] text-gray-400 hover:bg-[#2d4059] hover:text-white' : 'bg-white text-gray-500 hover:bg-gray-100')}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  </button>
                </div>
              </div>
              {isSearchOpen && (
                <div className="mt-3 animate-fade-in">
                  <input
                    type="text"
                    placeholder="Search by name, industry, application area, colour, collection, shade, pattern, thickness..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full h-10 border rounded px-3 text-[16px] md:text-sm focus:outline-none focus:border-[#0b5e5e] focus:ring-1 focus:ring-[#0b5e5e] transition-colors ${dm.input}`}
                    autoFocus
                  />
                </div>
              )}
            </div>
            <div className="border-b border-gray-100"></div>

            <SidebarNavTabs
              categories={NAV_CATEGORIES}
              activeId={activeNavCategory}
              isDarkMode={isDarkMode}
              onChange={(id) => {
                setActiveNavCategory(id);
                setExpandedProductCategory(null);

                // 1. Handling Luxury Vinyl Tile Tab
                if (id === 'luxury-vinyl-tile') {
                  const newTabProducts = combinedProducts.filter(p => p.navCategory === id);
                  let firstCategory = null;
                  if (hasRoomFilter) {
                    firstCategory = roomSupportedCollections.find(cat =>
                      newTabProducts.some(p => p.accordionCategory === cat)
                    );
                  }
                  if (!firstCategory) {
                    firstCategory = newTabProducts[0]?.accordionCategory;
                  }
                  if (firstCategory) {
                    setExpandedProductCategory(firstCategory);
                    setActiveFooterCategory(firstCategory);
                  }
                  return;
                }

                // 2. Handling Flooring Products & Other Tabs
                if (!isCompareMode) {
                  const newTabProducts = combinedProducts.filter(p => p.navCategory === id);

                  let firstCategory = null;
                  if (hasRoomFilter) {
                    firstCategory = roomSupportedCollections.find(cat =>
                      newTabProducts.some(p => p.accordionCategory === cat)
                    );
                  }
                  if (!firstCategory) {
                    firstCategory = newTabProducts[0]?.accordionCategory;
                  }

                  if (firstCategory) {
                    setExpandedProductCategory(firstCategory);
                    setActiveFooterCategory(firstCategory); //  Fix 2: Sync Flooring footer strip even on early return
                    // wrapFirstTileForCategory(firstCategory, newTabProducts);
                  }
                }
              }}
            />

            {errorMsg && (
              <div className="mx-4 md:mx-5 mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm break-words font-medium">
                {errorMsg}
              </div>
            )}

            <div className="flex-1 overflow-y-auto min-h-0 px-4 md:px-5 pb-5 pt-4 flex flex-col relative">
              <div className="flex-1">

                {/* ── Loading state: DB products not yet fetched ── */}
                {isLoadingDbProducts && productCategories.length === 0 && (
                  <div className="flex flex-col gap-3 animate-pulse">
                    {[1, 2, 3].map(n => (
                      <div key={n} className={`h-11 rounded-lg ${isDarkMode ? 'bg-[#243447]' : 'bg-gray-100'}`} />
                    ))}
                    <p className={`text-xs text-center mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      Loading products…
                    </p>
                  </div>
                )}

                {/* ── Empty state: DB loaded but room has no matching products ── */}
                {!isLoadingDbProducts && productCategories.length === 0 && hasRoomFilter && (
                  <div className={`flex flex-col items-center justify-center py-10 px-4 text-center rounded-xl border border-dashed gap-3
        ${isDarkMode ? 'border-[#334155] text-gray-400' : 'border-gray-200 text-gray-400'}`}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-40">
                      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <p className="text-sm font-medium">No products assigned to this room.</p>
                    <p className="text-xs opacity-70">Contact your admin to add collections.</p>
                  </div>
                )}

                {displayCategories.map(categoryName => {
                  // Change filteredProducts to currentTabFilteredProducts
                  let categoryProducts = currentTabFilteredProducts.filter(
                    p => p.accordionCategory === categoryName
                  );

                  if (sortOrder === 'Prod-A-Z') {
                    categoryProducts = [...categoryProducts].sort((a, b) =>
                      a.name.localeCompare(b.name)
                    );
                  } else if (sortOrder === 'Prod-Z-A') {
                    categoryProducts = [...categoryProducts].sort((a, b) =>
                      b.name.localeCompare(a.name)
                    );
                  }
                  if (categoryProducts.length === 0) return null;
                  {/* Change filteredProducts.length to currentTabFilteredProducts.length */ }
                  {
                    currentTabFilteredProducts.length === 0 && (
                      <div className="text-center text-gray-500 py-8 text-sm">No products match your search or filters.</div>
                    )
                  }
                  // NEW ACCORDION LOGIC
                  const isSearching = searchQuery.trim().length > 0;
                  const isExpanded = isSearching
                    ? !collapsedDuringSearch.includes(categoryName)
                    : expandedProductCategory === categoryName;

                  const handleAccordionToggle = () => {
                    if (isSearching) {
                      setCollapsedDuringSearch(prev =>
                        isExpanded ? [...prev, categoryName] : prev.filter(c => c !== categoryName)
                      );
                    } else {
                      const willExpand = !isExpanded;
                      setExpandedProductCategory(willExpand ? categoryName : null);

                      if (willExpand) {
                        setActiveFooterCategory(categoryName);
                      }
                    }
                  };
                  return (
                    <div key={categoryName} className="mb-3 shrink-0">
                      <button
                        onClick={handleAccordionToggle}
                        className={`w-full flex justify-between items-center py-3 px-4 border rounded-lg transition-all duration-300 cursor-pointer
  ${isExpanded ? 'bg-[#0b5e5e] border-[#0b5e5e] text-white shadow-md' : `${dm.accordion} ${dm.hover}`}`}
                      >
                        <span className="font-bold text-sm tracking-wide">{categoryName}</span>
                        <svg className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180 text-white' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                          }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pt-3 pb-1">
                            {/* ── MONZA DUAL MODE TOGGLE BUTTONS INJECTED ── */}
                            {(categoryName.toLowerCase().includes('monza') || categoryName.toLowerCase().includes('stoneland')) && (
                              <div className="flex gap-2 p-2 mb-3 bg-gray-100 dark:bg-slate-800 rounded-xl">
                                <button
                                  onClick={() => {
                                    setMonzaDualMode(false);
                                    //  FIX: dualMode explicitly false pass kiya, stale wait nahi karna
                                    applyFloorOverlay(selectedProduct, floorRotation, true, null, false);
                                  }}
                                  className={`cursor-pointer flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${!monzaDualMode ? 'bg-white dark:bg-slate-700 shadow shadow-black/5 text-gray-900 dark:text-white' : 'text-gray-500'}`}
                                >
                                  Solid Layout
                                </button>
                                <button
                                  onClick={() => {
                                    //  FIX: naya tile2 pehle nikalo, phir sab jagah wahi explicit value use karo
                                    const newTile2 = monzaTile2 || categoryProducts[0] || selectedProduct;
                                    setMonzaDualMode(true);
                                    setMonzaTile2(newTile2);
                                    setActiveMonzaSlot(2);
                                    // setTimeout hata diya — ab koi stale-wait ki zaroorat nahi
                                    applyFloorOverlay(selectedProduct, floorRotation, true, newTile2, true);
                                  }}
                                  className={`cursor-pointer flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${monzaDualMode ? 'bg-white dark:bg-slate-700 shadow shadow-black/5 text-gray-900 dark:text-white' : 'text-gray-500'}`}
                                >
                                  Checkerboard Mix
                                </button>
                              </div>
                            )}
                            {viewMode === 'list' ? (
                              <div className="flex flex-col gap-3">

                                {categoryProducts.map((prod) => {
                                  const isFavorite = favoriteProducts.includes(prod.id);
                                  const isMonzaCat = prod.accordionCategory.toLowerCase().includes('monza') || prod.accordionCategory.toLowerCase().includes('stoneland');
                                  const isHerringboneCat = prod.accordionCategory.toLowerCase().includes('herringbone') || prod.name.toLowerCase().includes('herringbone');
                                  const isSelected = isCompareMode
                                    ? (activeCompareSide === 'left' ? compareLeftProduct?.id === prod.id : compareRightProduct?.id === prod.id)
                                    : (herringboneMode && isHerringboneCat)
                                      ? (activeHerringboneSlot === 2 ? herringboneTile2?.id === prod.id : herringboneTile1?.id === prod.id)
                                      : (monzaDualMode && isMonzaCat)
                                        ? (activeMonzaSlot === 2 ? monzaTile2?.id === prod.id : selectedProduct.id === prod.id)
                                        : selectedProduct.id === prod.id;
                                  return (
                                    <div
                                      key={prod.id}
                                      onClick={(e) => {
                                        const cardEl = e.currentTarget;
                                        const isHerringboneCat =
                                          prod.accordionCategory.toLowerCase().includes('herringbone') ||
                                          prod.name.toLowerCase().includes('herringbone');


                                        if (herringboneMode && isHerringbonePanelOpen && isHerringboneCat) {
                                          handleHerringboneTileAssign(prod);
                                          setFooterDisplayProduct(prod);
                                        } else {
                                          handleTileSelection(prod);
                                        }
                                        setTimeout(() => {
                                          cardEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }, 320);
                                      }}
                                      {...getHoverHandlers(prod, prod.navCategory === 'luxury-vinyl-tile')}
                                      className={`relative flex gap-3 md:gap-4 p-2 md:p-3 border rounded-lg cursor-pointer transition-all duration-300
  ${isSelected ? dm.cardSelected : `${dm.card} hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1`}`}
                                    >
                                      <button onClick={(e) => toggleFavorite(e, prod.id)} className="absolute top-2 right-2 p-1 z-10 cursor-pointer">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill={isFavorite ? "#ef4444" : "none"} stroke={isFavorite ? "#ef4444" : "#9ca3af"} strokeWidth="2" className="transition-colors hover:scale-110">
                                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                        </svg>
                                      </button>
                                      {/*  NEW: Mobile-only eye icon — sirf Luxury Vinyl Tile products ke liye */}
                                      {prod.navCategory === 'luxury-vinyl-tile' && (
                                        <button
                                          onClick={(e) => { e.stopPropagation(); openPreview(prod); }}
                                          className="md:hidden absolute bottom-2 right-2 p-1.5 z-10 cursor-pointer rounded-full bg-black/50 backdrop-blur-sm"
                                        >
                                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                          </svg>
                                        </button>
                                      )}
                                      <img src={prod.img} alt={prod.name} className="w-16 h-16 md:w-20 md:h-20 object-cover rounded shadow-sm bg-gray-100 shrink-0 border border-gray-200" />
                                      <div className="flex flex-col justify-center min-w-0 flex-1">
                                        <span className={`text-[10px] md:text-[11px] uppercase tracking-wide font-semibold ${dm.brandLabel}`}>Wonderfloor</span>
                                        <span className={`font-bold text-sm truncate mt-0.5 pr-6 ${dm.text}`}>{prod.name}</span>
                                        <span className={`text-xs mt-1 ${dm.sizeText}`}>Size: {prod.size}</span>
                                        <button
                                          onClick={(e) => handleOpenDetails(e, prod)}
                                          className={`text-xs mt-1 text-left cursor-pointer z-10 block w-max font-medium transition-colors ${dm.moreDetails}`}
                                        >
                                          More details →
                                        </button>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            ) : (
                              <div className="grid grid-cols-3 gap-2">
                                {categoryProducts.map((prod) => {
                                  const isFavorite = favoriteProducts.includes(prod.id);
                                  const isMonzaCat = prod.accordionCategory.toLowerCase().includes('monza') || prod.accordionCategory.toLowerCase().includes('stoneland');
                                  const isSelected = isCompareMode
                                    ? (activeCompareSide === 'left' ? compareLeftProduct?.id === prod.id : compareRightProduct?.id === prod.id)
                                    : (monzaDualMode && isMonzaCat)
                                      ? (activeMonzaSlot === 2 ? monzaTile2?.id === prod.id : selectedProduct.id === prod.id)
                                      : selectedProduct.id === prod.id;
                                  return (
                                    <div
                                      key={prod.id}
                                      onClick={(e) => {
                                        const cardEl = e.currentTarget;
                                        handleTileSelection(prod);
                                        setTimeout(() => {
                                          cardEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }, 320);
                                      }}
                                      {...getHoverHandlers(prod, prod.navCategory === 'luxury-vinyl-tile')}
                                      className={`relative aspect-square rounded overflow-hidden cursor-pointer border-2 transition-all duration-300 bg-white ${isSelected ? 'border-[#0b5e5e] shadow-lg transform scale-105 z-10' : 'border-transparent hover:border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-105'}`}
                                    >
                                      <button onClick={(e) => toggleFavorite(e, prod.id)} className="absolute top-1.5 right-1.5 p-1 bg-white/70 backdrop-blur-sm rounded-full z-20 cursor-pointer shadow-sm">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill={isFavorite ? "#ef4444" : "none"} stroke={isFavorite ? "#ef4444" : "#6b7280"} strokeWidth="2" className="transition-colors hover:scale-110">
                                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                        </svg>
                                      </button>
                                      {/* NEW: Mobile-only eye icon — sirf Luxury Vinyl Tile products ke liye */}
                                      {prod.navCategory === 'luxury-vinyl-tile' && (
                                        <button
                                          onClick={(e) => { e.stopPropagation(); openPreview(prod); }}
                                          className="md:hidden absolute bottom-1.5 right-1.5 p-1.5 z-20 cursor-pointer rounded-full bg-black/50 backdrop-blur-sm"
                                        >
                                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                          </svg>
                                        </button>
                                      )}
                                      <img src={prod.img} alt={prod.name} className="w-full h-full object-cover bg-gray-100" />
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {filteredProducts.length === 0 && (
                  <div className="text-center text-gray-500 py-8 text-sm">No products match your search or filters.</div>
                )}
              </div>

              {!isCompareMode && viewMode === 'grid' && footerDisplayProduct && (
                <div className="mt-auto border-t border-gray-200 p-3 shrink-0 bg-white sticky bottom-0 z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col min-w-0 pr-2">
                      <span className={`font-bold text-sm md:text-base leading-tight transition-colors group-hover:text-teal-400 ${dm.footerText}`}>
                        {footerDisplayProduct.name}
                      </span>
                      <span className={`text-[10px] md:text-xs ${dm.footerSub}`}>{footerDisplayProduct.size}</span>
                    </div>
                    <button onClick={(e) => handleOpenDetails(e, footerDisplayProduct)} className="text-xs font-medium text-[#0b5e5e] flex items-center hover:bg-[#0b5e5e]/5 px-3 py-2 rounded-md transition-colors cursor-pointer shrink-0">
                      Details <svg className="ml-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* ── MAIN CONTENT AREA ── */}

      <div className="flex-1 flex flex-col bg-[#e5e7eb] h-full overflow-hidden relative w-full">

        {/* ✅ CompareView as absolute overlay — keeps normal view in DOM */}
        {isCompareMode && (
          <>
            <CompareView
              leftImage={compareLeftImage || currentSrc}
              rightImage={compareRightImage || currentSrc}
              leftProduct={compareLeftProduct}
              rightProduct={compareRightProduct}
              activeSide={activeCompareSide}
              setActiveSide={setActiveCompareSide}
              onClose={() => setIsCompareMode(false)}
              onOpenSidebar={() => setIsSidebarOpen(true)}
            />
            {isProcessing && <AttractiveLoader productName={activeCompareSide === 'left' ? compareLeftProduct?.name : compareRightProduct?.name} />}
          </>
        )}

        {/* ✅ Normal view ALWAYS rendered — threeContainerRef stays alive */}
        {/* FIXED CODE */}
        <div className={`flex-1 flex flex-col h-full overflow-hidden ${isCompareMode ? 'pointer-events-none' : ''}`}>

          {/* Top Nav Bar */}
          {!isImmersiveMode && (
            <div className={`h-[60px] border-b flex justify-between items-center px-2 md:px-4 shadow-sm z-30 shrink-0 w-full relative transition-colors ${dm.navbar}`}>
              <div className="flex items-center gap-1 md:gap-2 text-gray-600 hover:text-black text-sm font-medium px-2 border-r border-gray-200 pr-3 md:pr-6 h-full transition-colors">
                <button onClick={() => setIsSidebarOpen(true)} className="md:hidden p-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
                <button onClick={closeModal} className={`flex items-center gap-1 md:gap-2 px-3 py-2 rounded-md transition-colors cursor-pointer ${dm.navBtn}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  <span className="hidden sm:inline">Exit</span>
                </button>
              </div>

              <div className="flex-1 flex items-center justify-center gap-1 md:gap-2 text-sm text-gray-600 font-medium px-3 whitespace-nowrap h-full">
                <button onClick={handleEnterCompare} className={`flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors cursor-pointer ${dm.navBtn}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 3h5v5M4 20L20 4M21 16v5h-5M15 15l6 6M4 4l5 5"></path></svg>
                  <span className="hidden lg:inline">Compare</span>
                </button>

                <div className="relative flex items-center h-full" ref={shareRef}>
                  <button onClick={() => setIsShareMenuOpen(!isShareMenuOpen)} className={`flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors cursor-pointer ${dm.navBtn}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                    <span className="hidden sm:inline">Share</span>
                  </button>
                  {isShareMenuOpen && (
                    <div className="absolute top-[50px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0 bg-white shadow-xl border border-gray-200 rounded-md py-2 w-[220px] z-50 flex flex-col">
                      <button onClick={() => handleShare('copy')} className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 text-left transition-colors cursor-pointer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> Copy Link</button>
                      <button onClick={() => handleShare('facebook')} className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 text-left transition-colors cursor-pointer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> Facebook</button>
                      <button onClick={() => handleShare('whatsapp')} className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 text-left transition-colors cursor-pointer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> WhatsApp</button>
                      {/* <button onClick={() => handleShare('pinterest')} className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 text-left transition-colors cursor-pointer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><line x1="12" y1="22" x2="12" y2="12"></line><line x1="12" y1="2" x2="12" y2="4"></line><line x1="2" y1="12" x2="4" y2="12"></line><line x1="22" y1="12" x2="20" y2="12"></line><circle cx="12" cy="12" r="10"></circle><path d="M8 12a4 4 0 0 0 8 0"></path></svg> Pinterest</button> */}
                      <button onClick={() => handleShare('email')} className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 text-left transition-colors cursor-pointer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Email</button>
                    </div>
                  )}
                </div>

                <div className="relative flex items-center h-full" ref={downloadRef}>
                  <button
                    onClick={handleDownloadButtonClick}
                    disabled={isGeneratingDownload}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-md transition-all h-9 text-sm font-semibold select-none
                      ${isGeneratingDownload ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'} ${dm.navBtn}`}
                  >
                    {isGeneratingDownload ? (
                      <>
                        {/* Premium micro-spinner icon */}
                        <svg className="animate-spin h-4 w-4 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="hidden sm:inline text-teal-500">Preparing...</span>
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        <span className="hidden sm:inline">Download</span>
                      </>
                    )}
                  </button>
                  {isDownloadMenuOpen && (
                    <div className={`absolute top-[50px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0 shadow-xl border rounded-md py-2 w-[240px] z-50 flex flex-col transition-colors
                      ${isDarkMode ? 'bg-[#1e293b] border-[#334155]' : 'bg-white border-gray-200'}`}>
                      <DownloadView
                        selectedProduct={selectedProduct}
                        currentSrc={downloadImageUrl || currentSrc}
                        compositeRef={!isSafari && activeBaseImage?.maskUrl ? compositeRef : null}
                        onClose={() => setIsDownloadMenuOpen(false)}
                        onRequestDownload={handleRequestDownload}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className={`flex items-center gap-1.5 md:gap-5 border-l pl-1.5 md:pl-5 h-full shrink-0 transition-colors ${isDarkMode ? 'border-[#334155]' : 'border-gray-200'}`}>
                {/*  DARK MODE TOGGLE — Premium Animated Version */}
                <button
                  onClick={() => setIsDarkMode(prev => !prev)}
                  title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  className={`group relative flex items-center justify-center md:justify-start gap-2 w-8 h-8 md:w-auto md:h-auto md:px-4 md:py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer overflow-hidden border
                    ${isDarkMode
                      ? 'bg-[#1e293b] text-yellow-400 border-[#334155] hover:border-yellow-400/50 hover:bg-[#1a2436] shadow-[0_0_10px_rgba(250,204,21,0.05)] hover:shadow-[0_0_15px_rgba(250,204,21,0.15)]'
                      : 'bg-white text-slate-700 border-gray-200 hover:border-slate-300 hover:bg-gray-50 shadow-sm hover:shadow-md'
                    }`}
                >
                  {/* Subtle hover glow effect */}
                  {isDarkMode && <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}

                  {isDarkMode ? (
                    <svg className="w-4 h-4 animate-[spin_8s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 group-hover:-rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  )}
                  <span className="hidden md:inline relative z-10">{isDarkMode ? 'Light' : 'Dark'}</span>
                </button>
                <a href="https://www.wonderfloor.co.in/contact-us" target="_blank" rel="noopener noreferrer" title="Contact Us | Wonderfloor">
                  <button className="group relative flex items-center justify-center gap-2 w-8 h-8 md:w-auto md:h-auto md:px-4 md:py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer overflow-hidden border border-teal-500/30 bg-gradient-to-r from-[#0b5e5e] to-teal-600 text-white hover:from-[#084747] hover:to-teal-700 shadow-md hover:shadow-lg shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 group-hover:-translate-y-0.5 transition-transform duration-300">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span className="hidden md:inline relative z-10">Contact us</span>
                  </button>
                </a>
                <div className="relative flex items-center h-full" ref={menuRef}>
                  <button onClick={() => setIsMenuDropdownOpen(!isMenuDropdownOpen)} className={`flex p-1.5 md:px-3 md:py-2 rounded-md text-sm font-medium items-center gap-1 transition-colors cursor-pointer ${dm.navBtn}`}>
                    <span className="hidden sm:inline">Menu</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1.5"></circle><circle cx="12" cy="5" r="1.5"></circle><circle cx="12" cy="19" r="1.5"></circle></svg>
                  </button>
                  {isMenuDropdownOpen && (
                    <div className={`absolute top-[50px] right-0 shadow-xl border rounded-md py-2 w-[180px] z-50 flex flex-col transition-colors
                      ${isDarkMode ? 'bg-[#1e293b] border-[#334155]' : 'bg-white border-gray-200'}`}>

                      <button onClick={onOpenRecentRooms} className={`flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors cursor-pointer w-full
                        ${isDarkMode ? 'text-gray-300 hover:bg-[#2d4059] hover:text-white' : 'text-gray-700 hover:bg-gray-50'}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`shrink-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        My History
                        {historyCount > 0 && (
                          <span className="ml-1 bg-[#f05c3f] text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 shadow-sm">
                            {historyCount > 9 ? '9+' : historyCount}
                          </span>
                        )}
                      </button>

                      <RoomUploader
                        onImageUpload={(newImageData) => {
                          setUploadedRoom(newImageData);
                          setProcessedImage(null);
                          setIsMenuDropdownOpen(false);
                        }}
                        className={`flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors cursor-pointer w-full
                          ${isDarkMode ? 'text-gray-300 hover:bg-[#2d4059] hover:text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                        Upload
                      </RoomUploader>

                      <button
                        onClick={() => { setIsImmersiveMode(true); setIsMenuDropdownOpen(false); setIsSidebarOpen(false); }}
                        className={`flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors cursor-pointer w-full
                          ${isDarkMode ? 'text-gray-300 hover:bg-[#2d4059] hover:text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`shrink-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          <path d="M2 3h20v14H2z" /><path d="M8 21h8" /><path d="M12 17v4" />
                        </svg>
                        Full Screen
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {/* ── IMAGE VIEWER ── */}
          <div
            ref={imageContainerRef}
            className="flex-1 relative flex items-center justify-center p-2 md:px-3 md:py-4 overflow-hidden touch-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            style={{ cursor: zoomScale > 1 && !isDetailsModalOpen ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in' }}
          >
            {/* --- BLURRED BACKGROUND LAYER --- */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-gray-300">
              <img
                src={activeBaseImage?.previewUrl || processedImage}
                className="w-full h-full object-cover blur-[11px] scale-110 opacity-80"
                alt="Blurred Background"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-white/21"></div>
            </div>

            {isProcessing && <AttractiveLoader productName={selectedProduct?.name} />}

            {isImmersiveMode && (
              <button
                onClick={() => setIsImmersiveMode(false)}
                className="absolute top-4 right-4 z-50 flex items-center gap-2 bg-black/50 hover:bg-black/70 text-white text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm transition-colors cursor-pointer shadow-lg"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3" /><path d="M21 8h-3a2 2 0 0 1-2-2V3" />
                  <path d="M3 16h3a2 2 0 0 1 2 2v3" /><path d="M16 21v-3a2 2 0 0 1 2-2h3" />
                </svg>
                Exit Full Screen
              </button>
            )}

            {/* --- MAIN 4/3 CONTAINER --- */}
            <div
              className="relative z-10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-md overflow-hidden ring-1 ring-black/10"
              style={{
                aspectRatio: '4/3',
                height: '100%',
                maxWidth: '98%',
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomScale})`,
                transformOrigin: 'center center',
                transition: isDragging ? 'none' : 'transform 0.1s ease-out'
              }}
            >
              <div className="absolute inset-0 overflow-hidden bg-gray-200" ref={compositeRef}>
                {activeBaseImage?.maskUrl ? (
                  <div className="absolute inset-0 w-full h-full pointer-events-none">
                    {/* LAYER 1: Background Room */}
                    <img
                      src={activeBaseImage.previewUrl}
                      className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                      alt="Base Room"
                      crossOrigin="anonymous"
                    />
                    {/* LAYER 2: Three.js Floor Canvas */}
                    {/* FIXED CODE */}
                    <div
                      ref={threeContainerRef}
                      className={`absolute inset-0 w-full h-full z-10 
  ${isFloorVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    ></div>
                    {/* LAYER 3: Mask Image */}
                    <img
                      src={activeBaseImage.maskUrl}
                      className={`absolute inset-0 w-full h-full object-cover z-20 transition-opacity duration-300 pointer-events-none ${isFloorVisible ? 'opacity-100' : 'opacity-0'}`}
                      alt="Room Mask"
                      crossOrigin="anonymous"
                    />
                  </div>
                ) : (
                  <img
                    src={isFloorVisible ? (processedImage || activeBaseImage?.previewUrl) : activeBaseImage?.previewUrl}
                    alt="Room"
                    draggable="false"
                    className="absolute inset-0 w-full h-full object-cover select-none z-0"
                    crossOrigin="anonymous"
                  />
                )}
              </div>
            </div>

            {/* Powered-by badge */}
            <div className="absolute bottom-3 right-3 md:bottom-5 md:right-5 bg-gradient-to-r from-red-600/80 to-rose-500/80 backdrop-blur-xl border border-white/20 px-5 md:px-4 py-1.5 md:py-2 rounded-full z-30 pointer-events-none flex items-center gap-1.5 shadow-lg shadow-red-500/40 ring-1 ring-inset ring-white/10">
              <span className="text-[10px] md:text-[11px] font-normal text-gray-200">Powered by</span>
              <span className="text-[11px] md:text-[12px] font-bold text-white tracking-wide">WonderFloor</span>
            </div>
          </div>

          {/* ── FOOTER BAR ── */}
          {!isImmersiveMode && (

            <div className={`border-t shrink-0 flex flex-col z-20 w-full transition-colors ${dm.footer}`}>
              {/* Row 1: Selected Product Info & Basic Actions */}
              <div className="flex flex-wrap md:flex-nowrap items-center justify-between px-3 md:px-6 py-2 gap-y-2">
                <div
                  onClick={(e) => handleOpenDetails(e, footerDisplayProduct)}
                  className={`flex items-center gap-2 md:gap-3 w-full md:w-auto cursor-pointer p-1.5 -ml-1.5 rounded-md transition-colors group
    ${isDarkMode ? 'hover:bg-[#2d4059]' : 'hover:bg-gray-50'}`}
                >
                  <img src={footerDisplayProduct.img} alt="Selected"
                    className={`w-8 h-8 md:w-10 md:h-10 object-cover rounded border ${isDarkMode ? 'border-[#3d5068]' : 'border-gray-200'}`}
                  />
                  <div className="flex flex-col mr-auto md:mr-0">
                    <span className={`font-bold text-sm md:text-base leading-tight transition-colors
      ${isDarkMode ? 'text-white group-hover:text-teal-400' : 'text-gray-900 group-hover:text-[#0b5e5e]'}`}>
                      {footerDisplayProduct.name}
                    </span>
                    <span className={`text-[10px] md:text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}>
                      {footerDisplayProduct.size}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm text-gray-600 font-medium md:ml-6 md:border-l border-gray-200 pl-2 md:pl-6 h-full py-1">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleReset(); }}
                      disabled={!isFloorVisible}
                      className={`flex items-center gap-1 md:gap-2 px-2 py-1.5 md:py-2 rounded-md transition-colors ${isFloorVisible
                        ? dm.actionBtn
                        : dm.actionDis}`}
                    >
                      <span className="hidden sm:inline">Reset</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-4 md:h-4"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><polyline points="3 3 3 8 8 8"></polyline></svg>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleRotate(); }}
                      disabled={!isFloorVisible}
                      className={`flex items-center gap-1 md:gap-2 px-2 py-1.5 md:py-2 rounded-md transition-colors group ${isFloorVisible
                        ? dm.actionBtn
                        : dm.actionDis}`}
                    >
                      <span className="hidden sm:inline">Rotate</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-4 md:h-4"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
                      {floorRotation !== 0 && (
                        <span className="ml-1 px-1.5 py-0.5 text-[10px] md:text-xs font-bold text-[#0b5e5e] bg-[#0b5e5e]/10 rounded-full group-hover:bg-[#0b5e5e]/20 transition-colors">
                          {floorRotation}&deg;
                        </span>
                      )}
                    </button>

                    {/* Monza Checkerboard Dynamic Footer Slots */}
                    {herringboneMode && (
                      <div className="flex items-center gap-2 md:gap-3 border-l border-gray-200 pl-3 md:pl-6 h-full animate-fade-in">
                        <span className={`text-[11px] font-bold uppercase tracking-wide hidden lg:inline ${dm.subtext}`}>Herringbone:</span>

                        {/* Tile 1 Slot Selector */}
                        <button
                          onClick={(e) => { e.stopPropagation(); setActiveHerringboneSlot(1); }}
                          className={`flex items-center gap-1.5 p-1 border rounded-md transition-all cursor-pointer ${activeHerringboneSlot === 1 ? 'border-[#0b5e5e] bg-[#0b5e5e]/5' : 'border-gray-200 hover:bg-gray-50'}`}
                        >
                          <img src={herringboneTile1?.img || activeBaseImage?.previewUrl} className="w-6 h-6 rounded object-cover border border-gray-100 shrink-0" alt="T1" />
                          <span className="text-xs font-bold truncate max-w-[70px] hidden sm:inline">{herringboneTile1?.name || 'Select'}</span>
                        </button>

                        {/* Tile 2 Slot Selector */}
                        <button
                          onClick={(e) => { e.stopPropagation(); setActiveHerringboneSlot(2); }}
                          className={`flex items-center gap-1.5 p-1 border rounded-md transition-all cursor-pointer ${activeHerringboneSlot === 2 ? 'border-[#0b5e5e] bg-[#0b5e5e]/5' : 'border-gray-200 hover:bg-gray-50'}`}
                        >
                          <img src={herringboneTile2?.img || activeBaseImage?.previewUrl} className="w-6 h-6 rounded object-cover border border-gray-100 shrink-0" alt="T2" />
                          <span className="text-xs font-bold truncate max-w-[70px] hidden sm:inline">{herringboneTile2?.name || 'Select'}</span>
                        </button>
                      </div>
                    )}
                    {/* ── 2. MONZA CHECKERBOARD SELECTORS ── */}
                    {!herringboneMode && monzaDualMode && (selectedProduct.accordionCategory.toLowerCase().includes('monza') || selectedProduct.accordionCategory.toLowerCase().includes('stoneland')) && (
                      <div className="flex items-center gap-2 md:gap-3 border-l border-gray-200 pl-3 md:pl-6 h-full animate-fade-in">
                        <span className={`text-[11px] font-bold uppercase tracking-wide hidden lg:inline ${dm.subtext}`}>Mix Slots:</span>

                        {/* Monza Slot 1 */}
                        <button
                          onClick={(e) => { e.stopPropagation(); setActiveMonzaSlot(1); }}
                          className={`flex items-center gap-1.5 p-1 border rounded-md transition-all cursor-pointer ${activeMonzaSlot === 1 ? 'border-[#0b5e5e] bg-[#0b5e5e]/5' : 'border-gray-200 hover:bg-gray-50'}`}
                        >
                          <img src={selectedProduct?.img} className="w-6 h-6 rounded object-cover border" alt="Tile1" />
                          <span className="text-xs font-bold truncate max-w-[70px] hidden sm:inline">{selectedProduct?.name}</span>
                        </button>

                        {/* Monza Slot 2 */}
                        <button
                          onClick={(e) => { e.stopPropagation(); setActiveMonzaSlot(2); }}
                          className={`flex items-center gap-1.5 p-1 border rounded-md transition-all cursor-pointer ${activeMonzaSlot === 2 ? 'border-[#0b5e5e] bg-[#0b5e5e]/5' : 'border-gray-200 hover:bg-gray-50'}`}
                        >
                          <img src={monzaTile2?.img || selectedProduct?.img} className="w-6 h-6 rounded object-cover border" alt="Tile2" />
                          <span className="text-xs font-bold truncate max-w-[70px] hidden sm:inline">{monzaTile2?.name || 'Select Decor'}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors cursor-default text-xs md:text-sm ${dm.zoomText}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <span className="hidden sm:inline">Zoom</span> {zoomScale > 1 ? `(${zoomScale.toFixed(1)}x)` : ''}
                  </button>
                  <button
                    onClick={() => { setZoomScale(1); setPan({ x: 0, y: 0 }); }}
                    disabled={zoomScale === 1}
                    className={`text-xs md:text-sm px-4 py-2 rounded-lg font-medium transition-all shadow-sm ${zoomScale === 1
                      ? isDarkMode
                        ? 'bg-[#1e293b]/50 text-gray-500 border border-[#334155]/50 cursor-not-allowed'
                        : 'bg-gray-50 text-gray-400 border border-gray-200 cursor-not-allowed'
                      : isDarkMode
                        ? 'bg-[#1e293b] text-teal-400 border border-teal-500/30 hover:bg-[#1a2d47] hover:border-teal-500 cursor-pointer'
                        : 'bg-white text-[#0b5e5e] border border-[#0b5e5e]/30 hover:bg-gray-50 hover:border-[#0b5e5e] cursor-pointer'
                      }`}
                  >
                    Reset Zoom
                  </button>
                </div>
              </div>
              {/* Row 2: Quick Selector (mobile only) */}
              <div className="flex md:hidden flex-col w-full border-t border-gray-100 px-3 md:px-6 py-2 bg-gray-50/50">
                <div className="flex overflow-x-auto gap-2 pb-2 items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider mr-1 shrink-0">Collections:</span>
                  {displayCategories
                    .filter(cat => currentTabFilteredProducts.some(p => p.accordionCategory === cat))
                    .map(cat => (
                      <button
                        key={cat}
                        onClick={(e) => { e.stopPropagation(); setActiveFooterCategory(cat); }}
                        className={`shrink-0 text-[11px] md:text-xs px-3 py-1 rounded-full font-medium transition-colors cursor-pointer border ${activeFooterCategory === cat ? 'bg-[#0b5e5e] text-white border-[#0b5e5e] shadow-sm' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'}`}
                      >
                        {cat}
                      </button>
                    ))}
                </div>
                <div className="flex overflow-x-auto gap-3 py-1 items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

                  {currentTabFilteredProducts
                    .filter(p => p.accordionCategory === activeFooterCategory)
                    .map(prod => {
                      const isSelected = selectedProduct.id === prod.id;
                      return (
                        <div
                          key={prod.id}
                          onClick={(e) => { e.stopPropagation(); handleTileSelection(prod); }}
                          className={`relative shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-md cursor-pointer border-2 transition-all duration-200 overflow-hidden ${isSelected ? 'border-[#0b5e5e] shadow-md scale-105 z-10' : 'border-transparent hover:border-gray-300'}`}
                          title={prod.name}
                        >
                          <img src={prod.img} alt={prod.name} className="w-full h-full object-cover" />
                          {isSelected && (
                            <div className="absolute inset-0 bg-[#0b5e5e]/10 flex items-center justify-center">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="drop-shadow-md">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          )}
        </div>{/* ← closes the always-rendered normal view wrapper */}

      </div>{/* ← closes the main content area */}

      {/* ── PRODUCT DETAILS MODAL ── */}
      {isDetailsModalOpen && detailsProduct && (
        <div onClick={() => setIsDetailsModalOpen(false)} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh] overflow-hidden transform transition-all animate-fade-in-up">
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-100 shrink-0">
              <h2 className="text-xl font-bold text-gray-900">Product Details</h2>
              <button onClick={() => setIsDetailsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-gray-500 hover:text-black">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="overflow-y-auto p-4 sm:p-6 flex flex-col flex-1">
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                {/* Image at product level */}
                <div className="relative w-full sm:w-1/2 shrink-0 flex items-center justify-center max-h-[280px] sm:max-h-[320px]">
                  <button
                    onClick={(e) => toggleFavorite(e, detailsProduct.id)}
                    className="absolute top-1 right-1 sm:top-2 sm:right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full z-10 cursor-pointer shadow-sm hover:scale-110 transition-transform"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24"
                      fill={favoriteProducts.includes(detailsProduct.id) ? "#ef4444" : "none"}
                      stroke={favoriteProducts.includes(detailsProduct.id) ? "#ef4444" : "#6b7280"}
                      strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                  <img
                    src={detailsProduct.img}
                    alt={detailsProduct.name}
                    className="max-w-full max-h-[280px] sm:max-h-[320px] w-auto h-auto object-contain"
                  />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col justify-start pt-2">
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Wonderfloor</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">{detailsProduct.name}</h3>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-600 font-medium flex items-center gap-2">
                      <span className="text-gray-400">Size:</span>
                      <span className="text-gray-900 bg-gray-100 px-2 py-1 rounded font-semibold">{detailsProduct.size}</span>
                    </p>
                    {/* NEW DESCRIPTION PARAGRAPH LAYER INSERTED HERE */}
                    {detailsProduct.description && (
                      <p className="mt-5 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal whitespace-pre-line">
                        {detailsProduct.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center justify-between cursor-default">
                  Specifications
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 transform rotate-180"><polyline points="18 15 12 9 6 15"></polyline></svg>
                </h4>
                <div className="border-t border-gray-200 flex flex-col">
                  {[
                    { label: 'SKU', value: detailsProduct.sku || detailsProduct.name },
                    { label: 'Collection', value: detailsProduct.accordionCategory },
                    { label: 'Colour', value: formatDisplayValue(detailsProduct.colour) },
                    { label: 'Shade', value: formatDisplayValue(detailsProduct.shade) },
                    { label: 'Thickness', value: formatDisplayValue(detailsProduct.thickness, true) },
                    { label: 'Type Of Flooring', value: formatDisplayValue(detailsProduct.style) },
                    { label: 'Pattern / Layout', value: formatDisplayValue(detailsProduct.pattern) },
                    { label: 'User Industry', value: formatDisplayValue(detailsProduct.userIndustry) },
                    { label: 'Application Area', value: formatDisplayValue(detailsProduct.applicationArea) },
                  ].filter(row => row.value)
                    .map(({ label, value }) => (
                      <div key={label} className="flex py-3 sm:py-4 border-b border-gray-100 items-center">
                        <span className="w-1/3 text-sm text-gray-500 font-medium">{label}</span>
                        <span className="w-2/3 text-sm font-bold text-gray-900">{value}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-5 border-t border-gray-200 bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4 shrink-0">
              <a
                href={detailsProduct.url}
                href={detailsProduct.productLink || '#'}
                target="_blank"
                rel="noopener noreferrer"
                // Also disable the link visually when there's no URL
                className={`flex items-center gap-2 text-sm font-medium transition-colors w-full sm:w-auto justify-center sm:justify-start
                 ${detailsProduct.productLink
                    ? 'text-gray-600 hover:text-[#0b5e5e] hover:underline cursor-pointer'
                    : 'text-gray-300 cursor-not-allowed pointer-events-none'}`}
                onClick={e => !detailsProduct.productLink && e.preventDefault()}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                Go to product page
              </a>
              <button
                onClick={() => {
                  handleTileSelection(detailsProduct);
                  setIsDetailsModalOpen(false);
                }}
                disabled={selectedProduct?.id === detailsProduct?.id && isFloorVisible && !isCompareMode}
                className={`w-full sm:w-auto font-bold py-3 px-6 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 ${selectedProduct?.id === detailsProduct?.id && isFloorVisible && !isCompareMode
                  ? 'bg-green-600 text-white opacity-60 cursor-not-allowed'
                  : 'bg-[#1877f2] hover:bg-[#1564cd] text-white cursor-pointer'
                  }`}
              >
                {selectedProduct?.id === detailsProduct?.id && isFloorVisible && !isCompareMode ? (
                  <span>Currently In Use</span>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    Apply to Room
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      <TileHoverPreviewOverlay previewProduct={previewProduct} onClose={closePreview} />
      <TileHoverHintOverlay showHint={showHint} mousePos={mousePos} />
      <DownloadLeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        onSubmit={handleLeadFormSubmit}
        productName={selectedProduct?.name}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default ARVisualizer;
