// App.jsx
import React, { useState, useRef, useEffect } from 'react';
import ARVisualizer from './components/ARVisualizer';
import { io } from 'socket.io-client';
import { QRCodeCanvas } from 'qrcode.react';

import { useImageHistory } from './hooks/useImageHistory';
import ImageHistoryDrawer from './components/ImageHistoryDrawer'; // <-- Correct path // <-- Correct path

import { useLocation, useParams, useNavigate } from 'react-router-dom';

// --- Import all local images ---
import Hospital      from './assets/Hospital_02.jpg';
import office02      from './assets/Office-Flooring_02.jpg';
import residential03 from './assets/Residential-Flooring_02.jpg';
import school03      from './assets/School-Flooring_02.jpg';
import superMarket01 from './assets/Super-Market-Flooring_01.jpg';
import HeroImage     from './assets/hero.png';
import Sport         from './assets/Sports-Flooring_01.jpg';
import Transport     from './assets/Transport-Flooring_03.jpg';
import Auditorial    from './assets/Auditorium-Flooring_01.jpg';
import Hotel         from './assets/Hotel_Hospitality-Flooring_01.jpg';
import Industrial    from './assets/Industrial-Flooring_02.jpg';
import DefaultImage  from './assets/Default.jpg';
import Logo          from './assets/logo.png';
import room1         from './assets/room1.jpg';
import room2         from './assets/room2.jpg';
import room1copy     from './assets/room1copy.png';
import room2copy     from './assets/room2copy.png';
import schoolcopy1   from './assets/School-Flooring_02 copy.png';
import schoolcopy2   from './assets/School-Flooring_03 copy.png';
import schoolcopy3   from './assets/School-Flooring_04 copy.png';
import schoolcopy4   from './assets/School-Flooring_05 copy.png';
import schoolcopy5   from './assets/School-Flooring_06 copy.png';
import schoolcopy6   from './assets/School-Flooring_07.png';
import school01      from './assets/school1.jpg';
import school02      from './assets/school2.jpg';
import school04      from './assets/school3.jpg';
import school05      from './assets/school4.jpg';
import school06      from './assets/school6.jpg';

// ── Socket ───────────────────────────────────────────────────────────────────
const socket = io('https://python-floor-backend.onrender.com', {
  transports: ['polling', 'websocket'],
});

// ── Static data (outside component — these never change) ─────────────────────
const industries = [
  'ALL INDUSTRY',
  'Industrial Flooring',
  'Office Flooring',
  'Residential Flooring',
  'School Flooring',
  'Sports Flooring',
  'Supermarket Flooring',
  'Transport Flooring',
  'Hospital Flooring',
  'Auditorium Flooring',
  'Hotel/ Hospitality Flooring',
  'Luxury Vinyl Tile',
];

const flooringProducts = [
  'Product Collections',
  'Antique',
  'Adventus',
  'Braavo',
  'Durofloor',
  'Duratek',
  "D'ZINER",
  'Galaxxy',
  'GDP',
  'Hi-Tech',
  'Krayons',
  'Luxuria',
  'Matrixx',
  'Meteor',
  'Ornate',
  'Orbit',
  'Oriion',
  'Rangolie',
  'Rhythm',
  'Robust',
  'Siggma',
  'Stoneland Monza',
  'Traction / Safety',
  'Trendo wood',
  'Trendo Chips',
  'Uttsav',
];

const allDemoRooms = [
  { id: 'ind-1', name: 'Industrial Flooring Option 1', img: Industrial,    category: 'Industrial Flooring',        product: ['Durofloor', 'Antique'] },
  { id: 'ind-2', name: 'Industrial Flooring Option 2', img: DefaultImage,  category: 'Industrial Flooring',        product: 'Siggma' },
  { id: 'ind-3', name: 'Industrial Flooring Option 3', img: DefaultImage,  category: 'Industrial Flooring',        product: 'Siggma' },
  { id: 'ind-4', name: 'Industrial Flooring Option 4', img: DefaultImage,  category: 'Industrial Flooring',        product: 'Siggma' },

  { id: 'off-1', name: 'Office Flooring Option 1',     img: office02,      category: 'Office Flooring',            product: ['Siggma', 'Trendo wood', 'Ornate', 'Antique', 'Hi-Tech', 'Trendo Chips', 'Stoneland Monza', 'Adventus'] },
  { id: 'off-2', name: 'Office Flooring Option 2',     img: DefaultImage,  category: 'Office Flooring',            product: ['Siggma', 'Trendo wood', 'Ornate', 'Antique', 'Hi-Tech', 'Trendo Chips', 'Stoneland Monza', 'Adventus'] },
  { id: 'off-3', name: 'Office Flooring Option 3',     img: DefaultImage,  category: 'Office Flooring',            product: ['Siggma', 'Trendo wood', 'Ornate', 'Antique', 'Hi-Tech', 'Trendo Chips', 'Stoneland Monza', 'Adventus'] },
  { id: 'off-4', name: 'Office Flooring Option 4',     img: DefaultImage,  category: 'Office Flooring',            product: ['Siggma', 'Trendo wood', 'Ornate', 'Antique', 'Hi-Tech', 'Trendo Chips', 'Stoneland Monza', 'Adventus'] },

  { id: 'res-1', name: 'Residential Flooring Option 1', img: residential03, category: 'Residential Flooring',      product: ['Trendo wood', 'Ornate', 'Duratek', 'Galaxxy', 'Luxuria', 'Antique', 'GDP', 'Hi-Tech', 'Uttsav', 'Oriion', 'Rangolie'] },
  { id: 'res-2', name: 'Residential Flooring Option 2', img: DefaultImage,  category: 'Residential Flooring',      product: ['Trendo wood', 'Ornate', 'Duratek', 'Galaxxy', 'Luxuria', 'Antique', 'GDP', 'Hi-Tech', 'Uttsav', 'Oriion', 'Rangolie'] },
  { id: 'res-3', name: 'Residential Flooring Option 3', img: DefaultImage,  category: 'Residential Flooring',      product: ['Trendo wood', 'Ornate', 'Duratek', 'Galaxxy', 'Luxuria', 'Antique', 'GDP', 'Hi-Tech', 'Uttsav', 'Oriion', 'Rangolie'] },
  { id: 'res-4', name: 'Residential Flooring Option 4', img: DefaultImage,  category: 'Residential Flooring',      product: ['Trendo wood', 'Ornate', 'Duratek', 'Galaxxy', 'Luxuria', 'Antique', 'GDP', 'Hi-Tech', 'Uttsav', 'Oriion', 'Rangolie'] },
  { id: 'res-6', name: 'Residential Flooring Option 5', img: room1, mask: room1copy, category: 'Residential Flooring', product: ['Trendo wood', 'Ornate', 'Duratek', 'Galaxxy', 'Luxuria', 'Antique', 'GDP', 'Hi-Tech', 'Uttsav', 'Oriion', 'Rangolie'] },
  { id: 'res-7', name: 'Residential Flooring Option 6', img: room2, mask: room2copy, category: 'Residential Flooring', product: ['Trendo wood', 'Ornate', 'Duratek', 'Galaxxy', 'Luxuria', 'Antique', 'GDP', 'Hi-Tech', 'Uttsav', 'Oriion', 'Rangolie'] },

  { id: 'sch-1', name: 'School Flooring Option 1', mask: schoolcopy1, img: school03, category: 'School Flooring', product: ['Krayons', 'Rhythm', 'Trendo Chips'] },
  { id: 'sch-2', name: 'School Flooring Option 2', mask: schoolcopy2, img: school02, category: 'School Flooring', product: ['Krayons', 'Rhythm', 'Trendo Chips'] },
  { id: 'sch-3', name: 'School Flooring Option 3', mask: schoolcopy3, img: school01, category: 'School Flooring', product: ['Krayons', 'Rhythm', 'Trendo Chips'] },
  { id: 'sch-4', name: 'School Flooring Option 4', mask: schoolcopy4, img: school04, category: 'School Flooring', product: ['Krayons', 'Rhythm', 'Trendo Chips'] },
  { id: 'sch-5', name: 'School Flooring Option 5', mask: schoolcopy5, img: school05, category: 'School Flooring', product: ['Krayons', 'Rhythm', 'Trendo Chips'] },
  { id: 'sch-6', name: 'School Flooring Option 6', mask: schoolcopy6, img: school06, category: 'School Flooring', product: ['Krayons', 'Rhythm', 'Trendo Chips'] },

  { id: 'spo-1', name: 'Sports Flooring Option 1', img: Sport,        category: 'Sports Flooring',       product: ['Ornate', 'Braavo'] },
  { id: 'spo-2', name: 'Sports Flooring Option 2', img: DefaultImage, category: 'Sports Flooring',       product: ['Ornate', 'Braavo'] },
  { id: 'spo-3', name: 'Sports Flooring Option 3', img: DefaultImage, category: 'Sports Flooring',       product: ['Ornate', 'Braavo'] },
  { id: 'spo-4', name: 'Sports Flooring Option 4', img: DefaultImage, category: 'Sports Flooring',       product: ['Ornate', 'Braavo'] },

  { id: 'sup-1', name: 'Supermarket Flooring Option 1', img: superMarket01, category: 'Supermarket Flooring', product: ['Durofloor', 'Siggma', 'Timberland Exotica 2mm', 'Trendo wood', 'Ornate', 'Trendo Chips', 'Oriion'] },
  { id: 'sup-2', name: 'Supermarket Flooring Option 2', img: DefaultImage,  category: 'Supermarket Flooring', product: ['Durofloor', 'Siggma', 'Timberland Exotica 2mm', 'Trendo wood', 'Ornate', 'Trendo Chips', 'Oriion'] },
  { id: 'sup-3', name: 'Supermarket Flooring Option 3', img: DefaultImage,  category: 'Supermarket Flooring', product: ['Durofloor', 'Siggma', 'Timberland Exotica 2mm', 'Trendo wood', 'Ornate', 'Trendo Chips', 'Oriion'] },
  { id: 'sup-4', name: 'Supermarket Flooring Option 4', img: DefaultImage,  category: 'Supermarket Flooring', product: ['Durofloor', 'Siggma', 'Timberland Exotica 2mm', 'Trendo wood', 'Ornate', 'Trendo Chips', 'Oriion'] },

  { id: 'tra-1', name: 'Transport Flooring Option 1', img: Transport,    category: 'Transport Flooring', product: ['Traction / Safety', 'Matrixx (Export)', "D'ziner"] },
  { id: 'tra-2', name: 'Transport Flooring Option 2', img: DefaultImage, category: 'Transport Flooring', product: ['Traction / Safety', 'Matrixx (Export)', "D'ziner"] },
  { id: 'tra-3', name: 'Transport Flooring Option 3', img: DefaultImage, category: 'Transport Flooring', product: ['Traction / Safety', 'Matrixx (Export)', "D'ziner"] },
  { id: 'tra-4', name: 'Transport Flooring Option 4', img: DefaultImage, category: 'Transport Flooring', product: ['Traction / Safety', 'Matrixx (Export)', "D'ziner"] },

  { id: 'hos-1', name: 'Hospital Flooring Option 1', img: Hospital,     category: 'Hospital Flooring', product: ['Siggma', 'Orbit', 'Trendo Chips', 'Wallspro Plus', 'Adventus'] },
  { id: 'hos-2', name: 'Hospital Flooring Option 2', img: DefaultImage, category: 'Hospital Flooring', product: ['Siggma', 'Orbit', 'Trendo Chips', 'Wallspro Plus', 'Adventus'] },
  { id: 'hos-3', name: 'Hospital Flooring Option 3', img: DefaultImage, category: 'Hospital Flooring', product: ['Siggma', 'Orbit', 'Trendo Chips', 'Wallspro Plus', 'Adventus'] },
  { id: 'hos-4', name: 'Hospital Flooring Option 4', img: DefaultImage, category: 'Hospital Flooring', product: ['Siggma', 'Orbit', 'Trendo Chips', 'Wallspro Plus', 'Adventus'] },

  { id: 'aud-1', name: 'Auditorium Flooring Option 1', img: Auditorial,  category: 'Auditorium Flooring', product: ['Timberland Exotica 2mm', 'Trendo wood', 'Braavo', 'Stoneland Monza', 'Timberland Herringbone 2mm'] },
  { id: 'aud-2', name: 'Auditorium Flooring Option 2', img: DefaultImage, category: 'Auditorium Flooring', product: ['Timberland Exotica 2mm', 'Trendo wood', 'Braavo', 'Stoneland Monza', 'Timberland Herringbone 2mm'] },
  { id: 'aud-3', name: 'Auditorium Flooring Option 3', img: DefaultImage, category: 'Auditorium Flooring', product: ['Timberland Exotica 2mm', 'Trendo wood', 'Braavo', 'Stoneland Monza', 'Timberland Herringbone 2mm'] },
  { id: 'aud-4', name: 'Auditorium Flooring Option 4', img: DefaultImage, category: 'Auditorium Flooring', product: ['Timberland Exotica 2mm', 'Trendo wood', 'Braavo', 'Stoneland Monza', 'Timberland Herringbone 2mm'] },

  { id: 'hot-1', name: 'Hotel Flooring Option 1', img: Hotel,        category: 'Hotel/ Hospitality Flooring', product: ['Timberland Exotica 2mm', 'Trendo wood', 'Ornate', 'Braavo', 'Timberworld 1.5 mm', 'Stoneland Monza', 'Meteor', 'Timberland Herringbone 2mm', 'Grandeure Premium Luxury Planks 2mm'] },
  { id: 'hot-2', name: 'Hotel Flooring Option 2', img: DefaultImage, category: 'Hotel/ Hospitality Flooring', product: ['Timberland Exotica 2mm', 'Trendo wood', 'Ornate', 'Braavo', 'Timberworld 1.5 mm', 'Stoneland Monza', 'Meteor', 'Timberland Herringbone 2mm', 'Grandeure Premium Luxury Planks 2mm'] },
  { id: 'hot-3', name: 'Hotel Flooring Option 3', img: DefaultImage, category: 'Hotel/ Hospitality Flooring', product: ['Timberland Exotica 2mm', 'Trendo wood', 'Ornate', 'Braavo', 'Timberworld 1.5 mm', 'Stoneland Monza', 'Meteor', 'Timberland Herringbone 2mm', 'Grandeure Premium Luxury Planks 2mm'] },
  { id: 'hot-4', name: 'Hotel Flooring Option 4', img: DefaultImage, category: 'Hotel/ Hospitality Flooring', product: ['Timberland Exotica 2mm', 'Trendo wood', 'Ornate', 'Braavo', 'Timberworld 1.5 mm', 'Stoneland Monza', 'Meteor', 'Timberland Herringbone 2mm', 'Grandeure Premium Luxury Planks 2mm'] },
];

// ─────────────────────────────────────────────────────────────────────────────
// APP COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function App() {
  // ── UI state ───────────────────────────────────────────────────────────────
  const [isModalOpen, setIsModalOpen]         = useState(false);
  const [selectedRoomImage, setSelectedRoomImage] = useState(null);
  const [showQR, setShowQR]                   = useState(false);
  const [sessionId, setSessionId]             = useState('');
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  // ── History state (INSIDE the component — hooks must always be here) ───────
  const { history, addToHistory, removeEntry, clearHistory,  updateEntryProduct} = useImageHistory();
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  // ── Saved filter preferences ───────────────────────────────────────────────
  const [selectedIndustry, setSelectedIndustry] = useState(
    localStorage.getItem('savedIndustry') || 'ALL INDUSTRY'
  );
  const [selectedProduct, setSelectedProduct] = useState(
    localStorage.getItem('savedProduct') || 'Product Collections'
  );

  // ── Refs ───────────────────────────────────────────────────────────────────
  const fileInputRef       = useRef(null);
  const productDropdownRef = useRef(null);

  // ── Router ─────────────────────────────────────────────────────────────────
  const location = useLocation();
  const { roomId } = useParams();
  const navigate   = useNavigate();

  // ── Persist filter choices ─────────────────────────────────────────────────
  useEffect(() => {
    localStorage.setItem('savedIndustry', selectedIndustry);
    localStorage.setItem('savedProduct',  selectedProduct);
  }, [selectedIndustry, selectedProduct]);

  // ── Lock body scroll when a modal is open ─────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = (isModalOpen || showQR) ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen, showQR]);

  // ── Mobile socket sync ────────────────────────────────────────────────────
  useEffect(() => {
    const handleConnect = () => {
      if (sessionId) {
        console.log('Socket reconnected! Re-joining session:', sessionId);
        socket.emit('join_session', sessionId);
      }
    };

    const handleImageUploaded = async (base64Data) => {
      console.log('Image received from mobile!');
      try {
        const dataUrl = base64Data.startsWith('data:image')
          ? base64Data
          : `data:image/jpeg;base64,${base64Data}`;

        const res  = await fetch(dataUrl);
        const blob = await res.blob();
        const file = new File([blob], 'mobile_upload.jpg', { type: blob.type || 'image/jpeg' });

        // ── Save to history ───────────────────────────────────────────────
        const mobileImageObj = {
          previewUrl: dataUrl,
          isDemo:     false,
          rawFile:    file,
          name:       `Mobile upload · ${new Date().toLocaleDateString()}`,
        };
        setSelectedRoomImage(mobileImageObj);
        addToHistory(mobileImageObj); // ← saves compressed thumb to localStorage

        setShowQR(false);
        setIsModalOpen(true);
        console.log('Visualizer opened successfully!');
      } catch (error) {
        console.error('Failed to process the mobile image:', error);
        alert('Received the image, but it was unable to be processed.');
      }
    };

    socket.on('connect',                    handleConnect);
    socket.on('image_uploaded_from_mobile', handleImageUploaded);

    return () => {
      socket.off('connect',                    handleConnect);
      socket.off('image_uploaded_from_mobile', handleImageUploaded);
    };
  }, [sessionId, addToHistory]);

  // ── Close dropdown on outside click ──────────────────────────────────────
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (productDropdownRef.current && !productDropdownRef.current.contains(e.target)) {
        setIsProductDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

// ── Share / deep-link route handler ──────────────────────────────────────
  useEffect(() => {
    if (location.pathname.startsWith('/visualizer')) {
      const pathRoomId = roomId || location.pathname.split('/').pop();
      if (pathRoomId && pathRoomId !== 'default' && pathRoomId !== 'visualizer') {
        const matchedRoom = allDemoRooms.find(r => r.id === pathRoomId);
        
        // 🚨 FIX: Change "true" to "false" so it actually saves to history!
        if (matchedRoom) handleDemoRoomClick(matchedRoom, false); 
        else navigate('/');
      } else {
        handleDemoRoomClick(allDemoRooms[0]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, roomId]);

  // ── Auto-reload last demo room after a page refresh ───────────────────────
 useEffect(() => {
  // Don't auto-restore if we're already loading a specific room from the URL
  if (location.pathname.startsWith('/visualizer')) return;

  const savedRoomId = localStorage.getItem('activeDemoRoomId');
  if (savedRoomId) {
    const room = allDemoRooms.find(r => r.id === savedRoomId);
    if (room) handleDemoRoomClick(room).catch(console.error);
  }
}, []);

  // ── Handlers ──────────────────────────────────────────────────────────────

  const handleUploadClick = () => fileInputRef.current.click();

  /** File-picker upload — saves to history */
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageObj = {
      previewUrl: URL.createObjectURL(file),
      isDemo:     false,
      rawFile:    file,
      name:       `My upload · ${new Date().toLocaleDateString()}`,
    };
    setSelectedRoomImage(imageObj);
    addToHistory(imageObj); // ← compressed thumb saved to localStorage
    setIsModalOpen(true);
    localStorage.removeItem('activeDemoRoomId');
  };

  /** Demo room click — saves to history */
/** Demo room click — saves to history */
  const handleDemoRoomClick = async (room, skipHistory = false) => {
    try {
      // ✅ We MUST fetch the local asset to convert it to a File object. 
      // If we pass rawFile: null, ARVisualizer will crash and cause a white screen.
      const response = await fetch(room.img);
      if (!response.ok) throw new Error("Image asset could not be loaded");
      
      const blob = await response.blob();
      const file = new File([blob], 'demo_room.jpg', { type: 'image/jpeg' });

      const imageObj = {
        id:         room.id,
        previewUrl: room.img,
        isDemo:     true,
        rawFile:    file, // <--- This prevents the ARVisualizer crash
        maskUrl:    room.mask || null,
        name:       room.name,
        lastProduct: room.lastProduct || null,
      };

      setSelectedRoomImage(imageObj);
      if (!skipHistory) addToHistory(imageObj);
      
      setIsModalOpen(true);
      localStorage.setItem('activeDemoRoomId', room.id);

    } catch (error) {
      console.error('Failed to load demo image:', error);
      alert('Failed to load this room image. Please try another one.');
      if (location.pathname.startsWith('/visualizer')) navigate('/');
    }
  };

  /** Re-open the visualizer from a history card */
  const handleHistorySelect = (entry) => {
    if (entry.type === 'demo' && entry.roomId) {
      // Demo: look up full room data (mask, img, etc.) from allDemoRooms
      const room = allDemoRooms.find(r => r.id === entry.roomId);
        if (room) {
      handleDemoRoomClick({
        ...room,
        historyEntryId: entry.id, // ← pass history entry ID for later lookup
        lastProduct: entry.lastProduct || null, // ← pass saved tile
      });
    }
    } else {
    setSelectedRoomImage({
      previewUrl:  entry.thumbnail,
      id:          entry.id,
      historyEntryId: entry.id, // ← NEW: Keep it consistent for uploads too
      isDemo:      false,
      rawFile:     null,
      lastProduct: entry.lastProduct || null, 
    });
      setIsModalOpen(true);
    }
    setIsHistoryOpen(false);
  };

  /** Close the visualizer modal */
  const handleCloseModal = () => {
  setIsModalOpen(false);
  
  // Explicitly clear allocated memory if it's a blob/object URL
  if (selectedRoomImage?.previewUrl && selectedRoomImage.previewUrl.startsWith('blob:')) {
    URL.revokeObjectURL(selectedRoomImage.previewUrl);
  }
  
  setSelectedRoomImage(null);
  localStorage.removeItem('activeDemoRoomId');
  if (location.pathname.startsWith('/visualizer')) navigate('/');
};

  /** QR code generation */
  const handleGenerateQR = () => {
    const newSessionId = Math.random().toString(36).substring(2, 10);
    setSessionId(newSessionId);
    setShowQR(true);

    if (socket.connected) {
      socket.emit('join_session', newSessionId);
    } else {
      socket.once('connect', () => socket.emit('join_session', newSessionId));
    }
  };

  // ── Derived values ────────────────────────────────────────────────────────
  const isDefaultView = selectedIndustry === 'ALL INDUSTRY' && selectedProduct === 'Product Collections';

  const displayedRooms = allDemoRooms.filter(room => {
    if (selectedProduct !== 'Product Collections') {
      return Array.isArray(room.product)
        ? room.product.includes(selectedProduct)
        : room.product === selectedProduct;
    }
    return room.category === selectedIndustry;
  });

  const uniqueCategories = [];
  const categoryNames = new Set();
  for (const room of allDemoRooms) {
    if (!categoryNames.has(room.category)) {
      categoryNames.add(room.category);
      uniqueCategories.push(room);
    }
  }

  const isVisualizerRoute = location.pathname.startsWith('/visualizer');

  // ── Loading spinner while the /visualizer route initialises ──────────────
  if (isVisualizerRoute && !isModalOpen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <svg className="w-10 h-10 text-[#f05c3f] animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <p className="text-sm text-gray-500 font-medium">Loading visualizer...</p>
        </div>
      </div>
    );
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="w-full min-h-screen mt-[-5%] bg-white overflow-x-hidden">

      <div className="relative inset-0 w-full max-w-[1300px] mx-auto px-4 sm:px-6 py-15 font-sans text-gray-800 flex flex-col">

        {/* ── Hero section ── */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16 mt-16 sm:mt-20 md:mt-24 mb-16 sm:mb-24 w-full">

          <div className="w-full lg:w-[480px] flex flex-col gap-4 shrink-0 mt-8 lg:mt-0 lg:-mt-2">
            <img src={Logo} alt="Wonderfloor Logo" className="w-[200px] h-auto mb-1 mx-auto lg:mx-0" />

            <h1 className="text-[32px] sm:text-[36px] lg:text-[42px] font-bold text-[#202938] mb-1 tracking-tight text-center lg:text-left leading-[1.15] break-words">
              See live floor transformation in your room
            </h1>

            <p className="text-[15px] sm:text-[16px] text-gray-800 font-normal mb-1 text-center lg:text-left">
              Upload a photo of your room
            </p>

            {/* Upload button */}
            <button
              onClick={handleUploadClick}
              className="cursor-pointer bg-[#f05c3f] hover:bg-[#f05c4f] text-white font-bold py-3.5 px-6 rounded-[4px] text-[16px] tracking-wide transition duration-200 w-full lg:w-[280px] flex items-center justify-center gap-2 shadow-sm mt-2"
            >
              Upload
            </button>

            <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileChange} />

            {/* QR code button */}
            <button
              onClick={handleGenerateQR}
              className="cursor-pointer bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-3.5 px-6 rounded-[4px] text-[14px] transition duration-200 w-full lg:w-[280px] flex items-center justify-center gap-2 mt-1 shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Or scan a QR code to upload
            </button>

            {/* ── Recent rooms button (NEW) ── */}
            

            {/* QR modal */}
            {showQR && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity">
                <div className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col items-center relative max-w-sm w-full mx-4 border-t-4 border-[#f05c3f]">
                  <button
                    onClick={() => setShowQR(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors cursor-pointer"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h3 className="text-xl font-bold text-[#202938] mb-2">Scan to Upload</h3>
                  <p className="text-sm text-gray-500 mb-6 text-center leading-relaxed">
                    Use your phone's camera to scan this QR code and snap a photo of your room.
                  </p>
                  <div className="p-3 border-4 border-gray-100 rounded-xl bg-white mb-6 shadow-sm">
                    <QRCodeCanvas
                      value={`https://wonderfloor-v2.vercel.app/mobile-upload?session=${sessionId}`}
                      size={180}
                    />
                  </div>
                  <div className="flex items-center gap-2 text-[#f05c3f]">
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <p className="text-sm font-bold tracking-wide">Waiting for image...</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="hidden lg:flex flex-1 w-full h-[421px] rounded-lg overflow-hidden shadow-xl select-none">
            <img src={HeroImage} alt="Floor Visualization Demo" className="w-full h-full" />
          </div>
        </div>

      {/* ── Demo rooms section ── */}
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 relative z-30 gap-4">
            <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-400">
              Don't have a picture? Try our demo rooms instead
            </h3>

            {/* NEW WRAPPER: Groups the Recent Rooms button and Product Dropdown on the right */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              
              {/* ── RECENT ROOMS BUTTON (Moved to right side) ── */}
              <button
                onClick={() => setIsHistoryOpen(true)}
                className="cursor-pointer flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-5 py-3 sm:py-2.5 rounded text-[13px] font-bold tracking-wide transition-colors hover:bg-gray-50 hover:text-[#f05c3f] hover:border-[#f05c3f] uppercase w-full sm:w-auto shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                My History
                {history.length > 0 && (
                  <span className="ml-1 bg-[#f05c3f] text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {history.length > 9 ? '9+' : history.length}
                  </span>
                )}
              </button>

              {/* Product Dropdown */}
              <div className="relative w-full sm:w-auto" ref={productDropdownRef}>
                <button
                  onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                  className="cursor-pointer flex items-center justify-between sm:justify-center gap-2 bg-[#6a6a6a] text-white px-5 py-3 sm:py-2.5 rounded text-[13px] font-bold tracking-wide transition-colors hover:bg-gray-600 uppercase w-full sm:w-auto shadow-sm"
                >
                  {selectedProduct}
                  <svg className={`w-4 h-4 transition-transform ${isProductDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isProductDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-full sm:w-64 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] border-t-[3px] border-[#fc6c3f] py-2 z-50 rounded-b max-h-[300px] overflow-y-auto">
                    {flooringProducts.map((product, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedProduct(product);
                          setSelectedIndustry('ALL INDUSTRY');
                          setIsProductDropdownOpen(false);
                        }}
                        className={`cursor-pointer w-full text-left px-5 py-2.5 text-[15px] transition-colors ${
                          selectedProduct === product
                            ? 'text-[#fc6c3f] bg-gray-50'
                            : 'text-gray-600 hover:text-[#fc6c3f] hover:bg-gray-50'
                        }`}
                      >
                        {product}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Industry filter pills */}
          <div
            className="flex overflow-x-auto gap-3 mb-8 pb-2 w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedIndustry(industry);
                  setSelectedProduct('Product Collections');
                }}
                className={`shrink-0 cursor-pointer px-5 py-2 rounded-full text-[13px] font-bold tracking-wide transition-all uppercase border ${
                  selectedIndustry === industry
                    ? 'bg-[#f05c3f] text-white border-[#f05c3f] shadow-md'
                    : 'bg-white text-gray-500 border-gray-300 hover:border-[#f05c3f] hover:text-[#f05c3f]'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          {/* Room grid */}
          {isDefaultView ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 relative z-10">
              {uniqueCategories.map((cat) => (
                <div
                  key={`cat-${cat.id}`}
                  className="cursor-pointer group flex flex-col gap-3"
                  onClick={() => setSelectedIndustry(cat.category)}
                >
                  <div className="overflow-hidden rounded-none bg-gray-100">
                    <img src={cat.img} alt={cat.category} className="w-full h-[200px] object-cover hover:opacity-90 transition-opacity duration-200" />
                  </div>
                  <p className="text-[12px] text-[#0b5c58] font-bold uppercase tracking-wider px-1 group-hover:text-[#f05c3f] transition-colors">
                    {cat.category}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <button
                onClick={() => {
                  setSelectedIndustry('ALL INDUSTRY');
                  setSelectedProduct('Product Collections');
                }}
                className="mb-6 flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#f05c3f] transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Go Back
              </button>

              {displayedRooms.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 relative z-10">
                  {displayedRooms.map((room, index) => (
                    <div
                      key={`${room.id}-${index}`}
                      className="cursor-pointer group flex flex-col gap-3"
                     onClick={() => navigate(`/visualizer/${room.id}`)}
                    >
                      <div className="overflow-hidden rounded-none bg-gray-100">
                        <img src={room.img} alt={room.name} className="w-full h-[200px] object-cover hover:opacity-90 transition-opacity duration-200" />
                      </div>
                      <p className="text-[12px] text-[#0b5c58] font-bold uppercase tracking-wider px-1 group-hover:text-[#f05c3f] transition-colors">
                        {room.name}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full py-12 text-center text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                  <p className="text-lg">
                    No demo rooms available for {selectedProduct !== 'Product Collections' ? selectedProduct : selectedIndustry} yet.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── History drawer (NEW) ── */}
      <ImageHistoryDrawer
        isOpen={isHistoryOpen}
        history={history}
        onSelect={handleHistorySelect}
        onRemove={removeEntry}
        onClear={clearHistory}
        onClose={() => setIsHistoryOpen(false)}
      />

      {/* ── Visualizer modal ── */}
      {isModalOpen && (
        <ARVisualizer closeModal={handleCloseModal} initialImage={selectedRoomImage} />
      )}
       {/* ── Visualizer modal ── */}
      {isModalOpen && selectedRoomImage && (
        <ARVisualizer 
          key={selectedRoomImage.previewUrl} 
          closeModal={handleCloseModal} 
          initialImage={selectedRoomImage} 
          onOpenRecentRooms={() => setIsHistoryOpen(true)} 
           historyCount={history.length}  // ← ADD THIS
            onProductChange={updateEntryProduct}   // ← NEW prop
  />
      )}
    </div>
  );
}

export default App;
