import React, { useState, useRef, useEffect, useMemo } from 'react';
import ARVisualizer from './components/ARVisualizer';
import { io } from 'socket.io-client';
import { QRCodeCanvas } from 'qrcode.react';

import { useImageHistory } from './hooks/useImageHistory';
import ImageHistoryDrawer from './components/ImageHistoryDrawer';

import { useLocation, useParams, useNavigate } from 'react-router-dom';

// --- Import all local images ---
import Hospital from './assets/Hospital_02.jpg';
import office02 from './assets/Office-Flooring_02.jpg';
import residential03 from './assets/Residential-Flooring_02.jpg';
import school03 from './assets/School-Flooring_02.jpg';
import superMarket01 from './assets/Super-Market-Flooring_01.jpg';
import HeroImage from './assets/hero.png';
import Sport from './assets/Sports-Flooring_01.jpg';
import Transport from './assets/Transport-Flooring_03.jpg';
import Auditorial from './assets/Auditorium-Flooring_01.jpg';
import Hotel from './assets/Hotel_Hospitality-Flooring_01.jpg';
import Industrial from './assets/Industrial-Flooring_02.jpg';
import DefaultImage from './assets/Default.jpg';
import Logo from './assets/logo.png';
import room1 from './assets/room1.jpg';
import room2 from './assets/room2.jpg';
import room1copy from './assets/room1copy.png';
import room2copy from './assets/room2copy.png';
import schoolcopy1 from './assets/School-Flooring_02 copy.png';
import schoolcopy2 from './assets/School-Flooring_03 copy.png';
import schoolcopy3 from './assets/School-Flooring_04 copy.png';
import schoolcopy4 from './assets/School-Flooring_05 copy.png';
import schoolcopy5 from './assets/School-Flooring_06 copy.png';
import schoolcopy6 from './assets/School-Flooring_07.png';
import school01 from './assets/school1.jpg';
import school02 from './assets/school2.jpg';
import school04 from './assets/school3.jpg';
import school05 from './assets/school4.jpg';
import school06 from './assets/school6.jpg';

// ── Socket ───────────────────────────────────────────────────────────────────
const socket = io('https://python-floor-backend.onrender.com', {
  transports: ['polling', 'websocket'],
});

// ── Static fallback data (outside App) ──────────────────────────────────────
const flooringProducts_static = [
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
  { id: 'ind-1', name: 'Industrial Flooring Option 1', img: Industrial, category: 'Industrial Flooring', product: ['Durofloor', 'Antique'] },
  { id: 'ind-2', name: 'Industrial Flooring Option 2', img: DefaultImage, category: 'Industrial Flooring', product: 'Siggma' },
  { id: 'ind-3', name: 'Industrial Flooring Option 3', img: DefaultImage, category: 'Industrial Flooring', product: 'Siggma' },
  { id: 'ind-4', name: 'Industrial Flooring Option 4', img: DefaultImage, category: 'Industrial Flooring', product: 'Siggma' },

  { id: 'off-1', name: 'Office Flooring Option 1', img: office02, category: 'Office Flooring', product: ['Siggma', 'Trendo wood', 'Ornate', 'Antique', 'Hi-Tech', 'Trendo Chips', 'Stoneland Monza', 'Adventus'] },
  { id: 'off-2', name: 'Office Flooring Option 2', img: DefaultImage, category: 'Office Flooring', product: ['Siggma', 'Trendo wood', 'Ornate', 'Antique', 'Hi-Tech', 'Trendo Chips', 'Stoneland Monza', 'Adventus'] },
  { id: 'off-3', name: 'Office Flooring Option 3', img: DefaultImage, category: 'Office Flooring', product: ['Siggma', 'Trendo wood', 'Ornate', 'Antique', 'Hi-Tech', 'Trendo Chips', 'Stoneland Monza', 'Adventus'] },
  { id: 'off-4', name: 'Office Flooring Option 4', img: DefaultImage, category: 'Office Flooring', product: ['Siggma', 'Trendo wood', 'Ornate', 'Antique', 'Hi-Tech', 'Trendo Chips', 'Stoneland Monza', 'Adventus'] },

  { id: 'res-1', name: 'Residential Flooring Option 1', img: residential03, category: 'Residential Flooring', product: ['Trendo wood', 'Ornate', 'Duratek', 'Galaxxy', 'Luxuria', 'Antique', 'GDP', 'Hi-Tech', 'Uttsav', 'Oriion', 'Rangolie'] },
  { id: 'res-2', name: 'Residential Flooring Option 2', img: DefaultImage, category: 'Residential Flooring', product: ['Trendo wood', 'Ornate', 'Duratek', 'Galaxxy', 'Luxuria', 'Antique', 'GDP', 'Hi-Tech', 'Uttsav', 'Oriion', 'Rangolie'] },
  { id: 'res-3', name: 'Residential Flooring Option 3', img: DefaultImage, category: 'Residential Flooring', product: ['Trendo wood', 'Ornate', 'Duratek', 'Galaxxy', 'Luxuria', 'Antique', 'GDP', 'Hi-Tech', 'Uttsav', 'Oriion', 'Rangolie'] },
  { id: 'res-4', name: 'Residential Flooring Option 4', img: DefaultImage, category: 'Residential Flooring', product: ['Trendo wood', 'Ornate', 'Duratek', 'Galaxxy', 'Luxuria', 'Antique', 'GDP', 'Hi-Tech', 'Uttsav', 'Oriion', 'Rangolie'] },
  { id: 'res-6', name: 'Residential Flooring Option 5', img: room1, mask: room1copy, category: 'Residential Flooring', product: ['Trendo wood', 'Ornate', 'Duratek', 'Galaxxy', 'Luxuria', 'Antique', 'GDP', 'Hi-Tech', 'Uttsav', 'Oriion', 'Rangolie','Durofloor','Adventus','Bravo','Krayons','Siggma','Robust','Timberworld 1.5mm'] },
  { id: 'res-7', name: 'Residential Flooring Option 6', img: room2, mask: room2copy, category: 'Residential Flooring', product: ['Trendo wood', 'Ornate', 'Duratek', 'Galaxxy', 'Luxuria', 'Antique', 'GDP', 'Hi-Tech', 'Uttsav', 'Oriion', 'Rangolie','Durofloor','Adventus','Bravo','Krayons','Siggma','Robust','Timberworld 1.5mm'] },

  { id: 'sch-1', name: 'School Flooring Option 1', mask: schoolcopy1, img: school03, category: 'School Flooring', product: ['Krayons', 'Rhythm', 'Trendo Chips'] },
  { id: 'sch-2', name: 'School Flooring Option 2', mask: schoolcopy2, img: school02, category: 'School Flooring', product: ['Krayons', 'Rhythm', 'Trendo Chips'] },
  { id: 'sch-3', name: 'School Flooring Option 3', mask: schoolcopy3, img: school01, category: 'School Flooring', product: ['Krayons', 'Rhythm', 'Trendo Chips'] },
  { id: 'sch-4', name: 'School Flooring Option 4', mask: schoolcopy4, img: school04, category: 'School Flooring', product: ['Krayons', 'Rhythm', 'Trendo Chips'] },
  { id: 'sch-5', name: 'School Flooring Option 5', mask: schoolcopy5, img: school05, category: 'School Flooring', product: ['Krayons', 'Rhythm', 'Trendo Chips'] },
  { id: 'sch-6', name: 'School Flooring Option 6', mask: schoolcopy6, img: school06, category: 'School Flooring', product: ['Krayons', 'Rhythm', 'Trendo Chips'] },

  { id: 'spo-1', name: 'Sports Flooring Option 1', img: Sport, category: 'Sports Flooring', product: ['Ornate', 'Braavo'] },
  { id: 'spo-2', name: 'Sports Flooring Option 2', img: DefaultImage, category: 'Sports Flooring', product: ['Ornate', 'Braavo'] },
  { id: 'spo-3', name: 'Sports Flooring Option 3', img: DefaultImage, category: 'Sports Flooring', product: ['Ornate', 'Braavo'] },
  { id: 'spo-4', name: 'Sports Flooring Option 4', img: DefaultImage, category: 'Sports Flooring', product: ['Ornate', 'Braavo'] },

  { id: 'sup-1', name: 'Supermarket Flooring Option 1', img: superMarket01, category: 'Supermarket Flooring', product: ['Durofloor', 'Siggma', 'Timberland Exotica 2mm', 'Trendo wood', 'Ornate', 'Trendo Chips', 'Oriion'] },
  { id: 'sup-2', name: 'Supermarket Flooring Option 2', img: DefaultImage, category: 'Supermarket Flooring', product: ['Durofloor', 'Siggma', 'Timberland Exotica 2mm', 'Trendo wood', 'Ornate', 'Trendo Chips', 'Oriion'] },
  { id: 'sup-3', name: 'Supermarket Flooring Option 3', img: DefaultImage, category: 'Supermarket Flooring', product: ['Durofloor', 'Siggma', 'Timberland Exotica 2mm', 'Trendo wood', 'Ornate', 'Trendo Chips', 'Oriion'] },
  { id: 'sup-4', name: 'Supermarket Flooring Option 4', img: DefaultImage, category: 'Supermarket Flooring', product: ['Durofloor', 'Siggma', 'Timberland Exotica 2mm', 'Trendo wood', 'Ornate', 'Trendo Chips', 'Oriion'] },

  { id: 'tra-1', name: 'Transport Flooring Option 1', img: Transport, category: 'Transport Flooring', product: ['Traction / Safety', 'Matrixx (Export)', "D'ziner"] },
  { id: 'tra-2', name: 'Transport Flooring Option 2', img: DefaultImage, category: 'Transport Flooring', product: ['Traction / Safety', 'Matrixx (Export)', "D'ziner"] },
  { id: 'tra-3', name: 'Transport Flooring Option 3', img: DefaultImage, category: 'Transport Flooring', product: ['Traction / Safety', 'Matrixx (Export)', "D'ziner"] },
  { id: 'tra-4', name: 'Transport Flooring Option 4', img: DefaultImage, category: 'Transport Flooring', product: ['Traction / Safety', 'Matrixx (Export)', "D'ziner"] },

  { id: 'hos-1', name: 'Hospital Flooring Option 1', img: Hospital, category: 'Hospital Flooring', product: ['Siggma', 'Orbit', 'Trendo Chips', 'Wallspro Plus', 'Adventus'] },
  { id: 'hos-2', name: 'Hospital Flooring Option 2', img: DefaultImage, category: 'Hospital Flooring', product: ['Siggma', 'Orbit', 'Trendo Chips', 'Wallspro Plus', 'Adventus'] },
  { id: 'hos-3', name: 'Hospital Flooring Option 3', img: DefaultImage, category: 'Hospital Flooring', product: ['Siggma', 'Orbit', 'Trendo Chips', 'Wallspro Plus', 'Adventus'] },
  { id: 'hos-4', name: 'Hospital Flooring Option 4', img: DefaultImage, category: 'Hospital Flooring', product: ['Siggma', 'Orbit', 'Trendo Chips', 'Wallspro Plus', 'Adventus'] },

  { id: 'aud-1', name: 'Auditorium Flooring Option 1', img: Auditorial, category: 'Auditorium Flooring', product: ['Timberland Exotica 2mm', 'Trendo wood', 'Braavo', 'Stoneland Monza', 'Timberland Herringbone 2mm'] },
  { id: 'aud-2', name: 'Auditorium Flooring Option 2', img: DefaultImage, category: 'Auditorium Flooring', product: ['Timberland Exotica 2mm', 'Trendo wood', 'Braavo', 'Stoneland Monza', 'Timberland Herringbone 2mm'] },
  { id: 'aud-3', name: 'Auditorium Flooring Option 3', img: DefaultImage, category: 'Auditorium Flooring', product: ['Timberland Exotica 2mm', 'Trendo wood', 'Braavo', 'Stoneland Monza', 'Timberland Herringbone 2mm'] },
  { id: 'aud-4', name: 'Auditorium Flooring Option 4', img: DefaultImage, category: 'Auditorium Flooring', product: ['Timberland Exotica 2mm', 'Trendo wood', 'Braavo', 'Stoneland Monza', 'Timberland Herringbone 2mm'] },

  { id: 'hot-1', name: 'Hotel Flooring Option 1', img: Hotel, category: 'Hotel/ Hospitality Flooring', product: ['Timberland Exotica 2mm', 'Trendo wood', 'Ornate', 'Braavo', 'Timberworld 1.5 mm', 'Stoneland Monza', 'Meteor', 'Timberland Herringbone 2mm', 'Grandeure Premium Luxury Planks 2mm'] },
  { id: 'hot-2', name: 'Hotel Flooring Option 2', img: DefaultImage, category: 'Hotel/ Hospitality Flooring', product: ['Timberland Exotica 2mm', 'Trendo wood', 'Ornate', 'Braavo', 'Timberworld 1.5 mm', 'Stoneland Monza', 'Meteor', 'Timberland Herringbone 2mm', 'Grandeure Premium Luxury Planks 2mm'] },
  { id: 'hot-3', name: 'Hotel Flooring Option 3', img: DefaultImage, category: 'Hotel/ Hospitality Flooring', product: ['Timberland Exotica 2mm', 'Trendo wood', 'Ornate', 'Braavo', 'Timberworld 1.5 mm', 'Stoneland Monza', 'Meteor', 'Timberland Herringbone 2mm', 'Grandeure Premium Luxury Planks 2mm'] },
  { id: 'hot-4', name: 'Hotel Flooring Option 4', img: DefaultImage, category: 'Hotel/ Hospitality Flooring', product: ['Timberland Exotica 2mm', 'Trendo wood', 'Ornate', 'Braavo', 'Timberworld 1.5 mm', 'Stoneland Monza', 'Meteor', 'Timberland Herringbone 2mm', 'Grandeure Premium Luxury Planks 2mm'] },
];

function App() {
  // ── UI state ───────────────────────────────────────────────────────────────
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoomImage, setSelectedRoomImage] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  // ── NEW: Database Fetched Rooms State ─────────────────────────────────────
  const [dbRooms, setDbRooms] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [dbRoomsLoaded, setDbRoomsLoaded] = useState(false);
  // ── History state ─────────────────────────────────────────────────────────
  const { history, addToHistory, removeEntry, clearHistory, updateEntryProduct } = useImageHistory();
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const industries = useMemo(() => {
    const staticCategories = allDemoRooms.map(r => r.category);
    const dbCategories = dbRooms.map(r => r.category);
    const unique = [
      'ALL INDUSTRY',
      ...Array.from(new Set([...staticCategories, ...dbCategories]))
        .filter(Boolean)
        .sort(),
    ];
    return unique;
  }, [dbRooms]);

  const flooringProducts = useMemo(() => {
    const dbCollections = dbProducts.map(p => p.accordionCategory).filter(Boolean);
    const unique = Array.from(
      new Set([...flooringProducts_static, ...dbCollections])
    ).sort();
    return ['Product Collections', ...unique];
  }, [dbProducts]);

  // ── Saved filter preferences ───────────────────────────────────────────────
  const [selectedIndustry, setSelectedIndustry] = useState(
    localStorage.getItem('savedIndustry') || 'ALL INDUSTRY'
  );
  const [selectedProduct, setSelectedProduct] = useState(
    localStorage.getItem('savedProduct') || 'Product Collections'
  );

  // ── THEME CONTROL STATE ──
  const [isDarkMode, setIsDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );
  const [isThemeExpanded, setIsThemeExpanded] = useState(true);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);


  useEffect(() => {
    async function fetchDatabaseProducts() {
      try {
        const response = await fetch('https://wonderfloor-dashboard.vercel.app/products');
        if (response.ok) {
          const data = await response.json();
          setDbProducts(data.filter(p => p.isVisible !== false)); // only visible products
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchDatabaseProducts();
  }, []);


  // ── NEW: Fetch Rooms from MongoDB/Cloudinary Backend ─────────────────────
  useEffect(() => {
    async function fetchDatabaseRooms() {
      try {
        const response = await fetch('https://wonderfloor-dashboard.vercel.app/rooms');
        if (response.ok) {
          const data = await response.json();
          const formattedDbRooms = data
            .filter(room => room.isLive)   // ← ONLY show live rooms
            .map(room => ({
              id: room._id,
              name: room.name,
              img: room.previewUrl,
              mask: room.maskUrl || null,
              category: room.category,
              product: room.supportedCollections || [],
            }));
          setDbRooms(formattedDbRooms);
          setDbRoomsLoaded(true); // ← mark DB as ready
        }
       } catch (error) {
       console.error("Failed to fetch rooms from database:", error);
       setDbRoomsLoaded(true); // ← still mark as done so navigate('/') can fire on real 404s
     }
    }
    fetchDatabaseRooms();
  }, []);

  // ── COMBINE STATIC AND DATABASE ROOMS ────────────────────────────────────
  const activeRooms = useMemo(() => {
    return [...allDemoRooms, ...dbRooms];
  }, [dbRooms]);

  // ── AUTO-HIDE THEME SWITCH AFTER 3 SECONDS ON CHANGE ──
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsThemeExpanded(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isDarkMode]);

  // ── Refs ───────────────────────────────────────────────────────────────────
  const fileInputRef = useRef(null);
  const productDropdownRef = useRef(null);
  const industryScrollRef = useRef(null);
  const demoSectionRef = useRef(null);

  // ── Router ─────────────────────────────────────────────────────────────────
  const location = useLocation();
  const { roomId } = useParams();
  const navigate = useNavigate();

  // ── Persist filter choices ─────────────────────────────────────────────────
  useEffect(() => {
    localStorage.setItem('savedIndustry', selectedIndustry);
    localStorage.setItem('savedProduct', selectedProduct);
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

        const res = await fetch(dataUrl);
        const blob = await res.blob();
        const file = new File([blob], 'mobile_upload.jpg', { type: blob.type || 'image/jpeg' });

        const mobileImageObj = {
          previewUrl: dataUrl,
          isDemo: false,
          rawFile: file,
          name: `Mobile upload · ${new Date().toLocaleDateString()}`,
        };
        setSelectedRoomImage(mobileImageObj);
        addToHistory(mobileImageObj);

        setShowQR(false);
        setIsModalOpen(true);
      } catch (error) {
        console.error('Failed to process the mobile image:', error);
        alert('Received the image, but it was unable to be processed.');
      }
    };

    socket.on('connect', handleConnect);
    socket.on('image_uploaded_from_mobile', handleImageUploaded);

    return () => {
      socket.off('connect', handleConnect);
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
    if (!location.pathname.startsWith('/visualizer')) return;

    // If the visualizer is already open, do NOT re-trigger.
    if (isModalOpen) return;

    const pathRoomId = roomId || location.pathname.split('/').pop();

    if (pathRoomId && pathRoomId !== 'default' && pathRoomId !== 'visualizer') {
      const matchedRoom = activeRooms.find(r => r.id === pathRoomId);
      if (matchedRoom) {
        handleDemoRoomClick(matchedRoom, false);
      } else if (dbRoomsLoaded) {
        navigate('/');
      }
    } else {
      if (activeRooms.length > 0) handleDemoRoomClick(activeRooms[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, roomId, activeRooms.length, dbRoomsLoaded]);

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleUploadClick = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageObj = {
      previewUrl: URL.createObjectURL(file),
      isDemo: false,
      rawFile: file,
      name: `My upload · ${new Date().toLocaleDateString()}`,
    };
    setSelectedRoomImage(imageObj);
    addToHistory(imageObj);
    setIsModalOpen(true);
    localStorage.removeItem('activeDemoRoomId');
  };

  const handleDemoRoomClick = async (room, skipHistory = false) => {
    try {
      const response = await fetch(room.img);
      if (!response.ok) throw new Error("Image asset could not be loaded");

      const blob = await response.blob();
      const file = new File([blob], 'demo_room.jpg', { type: 'image/jpeg' });

      const imageObj = {
        id: room.id,
        previewUrl: room.img,
        isDemo: true,
        rawFile: file,
        maskUrl: room.mask || null,
        name: room.name,
        lastProduct: room.lastProduct || null,
        // ── Forward the room's product collections to ARVisualizer ──
        supportedCollections: Array.isArray(room.product) ? room.product : [],
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

  const handleHistorySelect = (entry) => {
    if (entry.type === 'demo' && entry.roomId) {
      const room = activeRooms.find(r => r.id === entry.roomId);
      if (room) {
        handleDemoRoomClick({
          ...room,
          historyEntryId: entry.id,
          lastProduct: entry.lastProduct || null,
          // ── Carry collections through history navigation ──
          product: room.product || [],
        });
      }
    } else {
      setSelectedRoomImage({
        previewUrl: entry.thumbnail,
        id: entry.id,
        historyEntryId: entry.id,
        isDemo: false,
        rawFile: null,
        lastProduct: entry.lastProduct || null,
        // ── User-uploaded photo: no collection constraint ──
        supportedCollections: [],
      });
      setIsModalOpen(true);
    }
    setIsHistoryOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (selectedRoomImage?.previewUrl && selectedRoomImage.previewUrl.startsWith('blob:')) {
      URL.revokeObjectURL(selectedRoomImage.previewUrl);
    }
    setSelectedRoomImage(null);
    localStorage.removeItem('activeDemoRoomId');
    if (location.pathname.startsWith('/visualizer')) navigate('/');
  };

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

  const scrollIndustries = (direction) => {
    if (industryScrollRef.current) {
      const offset = direction === 'left' ? -240 : 240;
      industryScrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const scrollSmoothToDemo = () => {
    if (demoSectionRef.current) {
      demoSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ── Calculate matching industries dynamically ─────────────────────────
  const matchingIndustries = useMemo(() => {
    if (selectedProduct === 'Product Collections') return new Set();
    const matches = new Set();
    activeRooms.forEach(room => {
      const products = Array.isArray(room.product) ? room.product : [room.product];
      if (products.includes(selectedProduct)) {
        matches.add(room.category);
      }
    });
    return matches;
  }, [selectedProduct, activeRooms]);

  // ── Derived values ────────────────────────────────────────────────────────
  const isDefaultView = selectedIndustry === 'ALL INDUSTRY' && selectedProduct === 'Product Collections';

  const displayedRooms = activeRooms.filter(room => {
    if (selectedProduct !== 'Product Collections') {
      return Array.isArray(room.product)
        ? room.product.includes(selectedProduct)
        : room.product === selectedProduct;
    }
    return room.category === selectedIndustry;
  });

  // Extract unique categories for the new High-Level Directory grid
  const uniqueCategories = useMemo(() => {
    const categoriesMap = new Map();
    activeRooms.forEach(room => {
      if (room.category && !categoriesMap.has(room.category)) {
        categoriesMap.set(room.category, {
          id: room.id,
          category: room.category,
          img: room.img,
          displayName: room.category.replace(' Flooring', '').replace('/ Hospitality', '')
        });
      }
    });
    return Array.from(categoriesMap.values());
  }, [activeRooms]);

  const isVisualizerRoute = location.pathname.startsWith('/visualizer');

  if (isVisualizerRoute && !isModalOpen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-[999]">
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

  if (isVisualizerRoute && isModalOpen && selectedRoomImage) {
    return (
      <>
        <ImageHistoryDrawer
          isOpen={isHistoryOpen}
          history={history}
          onSelect={handleHistorySelect}
          onRemove={removeEntry}
          onClear={clearHistory}
          onClose={() => setIsHistoryOpen(false)}
        />
        <ARVisualizer
          key={selectedRoomImage.previewUrl}
          closeModal={handleCloseModal}
          initialImage={selectedRoomImage}
          onOpenRecentRooms={() => setIsHistoryOpen(true)}
          historyCount={history.length}
          onProductChange={updateEntryProduct}
        />
      </>
    );
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className={`w-full min-h-screen font-sans transition-colors duration-300 overflow-x-hidden ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-[#f8fafc] text-gray-900'}`}>
      
      {/* ── HEADER / NAVIGATION ── */}
      <header className={`w-full border-b backdrop-blur-md sticky top-0 z-40 ${isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-200'}`}>
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a href ='https://www.wonderfloor.co.in/index.php' className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <img src={Logo} alt="Wonderfloor Logo" className="h-9 w-auto object-contain" />
          </a>
          
          <nav className="hidden md:flex items-center gap-8 font-semibold text-[14px] text-gray-600 dark:text-slate-300">
            <a href="https://www.wonderfloor.co.in/" className="hover:text-[#f05c3f] transition-colors">Main Website</a>
            <a href="https://www.wonderfloor.co.in/about-us.php" className="hover:text-[#f05c3f] transition-colors">About Wonderfloor</a>
            <a href="https://www.wonderfloor.co.in/clients.php" className="hover:text-[#f05c3f] transition-colors">Our Clients</a>
            <a href="https://www.wonderfloor.co.in/installation.php" className="hover:text-[#f05c3f] transition-colors">Installation</a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-500 dark:text-slate-400"
              title="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 14.05a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.121-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
              )}
            </button>
            <a  href = "https://www.wonderfloor.co.in/contact-us.php" className="bg-[#f05c3f] hover:bg-[#e04b2f] text-white font-bold py-2 px-5 rounded-md text-[14px] transition duration-200 shadow-sm shadow-orange-500/10">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 pt-12 pb-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        <div className="w-full lg:max-w-[580px] flex flex-col items-start text-left">
          
          <div className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-950/40 text-[#f05c3f] text-[11px] sm:text-[12px] font-bold tracking-wide uppercase px-3 py-1.5 rounded-full mb-6 border border-orange-100 dark:border-orange-900/30">
            <span className="w-2 h-2 rounded-full bg-[#f05c3f] animate-pulse"></span>
            WonderVision AI · Powered by Real-Time Floor Visualisation
          </div>

          <h1 className="text-[36px] sm:text-[46px] lg:text-[54px] font-black tracking-tight leading-[1.1] mb-6 text-slate-900 dark:text-white">
            Turn Every Flooring Discussion into a <span className="text-[#f05c3f]">Live Visual Experience</span>
          </h1>

          <p className="text-[16px] sm:text-[17px] text-gray-600 dark:text-slate-300 font-normal leading-relaxed mb-8 max-w-[500px]">
            See <span className="font-semibold text-slate-900 dark:text-white">Wonderfloor vinyl flooring</span> in your space instantly. Upload a photo, scan from your phone, or explore demo scenes.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-8">
            <button
              onClick={handleUploadClick}
              className="bg-[#f05c3f] hover:bg-[#e04b2f] text-white font-bold py-3.5 px-6 rounded-md text-[15px] transition duration-200 w-full sm:w-auto flex items-center justify-center gap-2.5 shadow-lg shadow-orange-500/20 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Upload Photo
            </button>

            <button
              onClick={handleGenerateQR}
              className="bg-white dark:bg-slate-800 text-gray-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 font-bold py-3.5 px-6 rounded-md text-[15px] transition duration-200 w-full sm:w-auto flex items-center justify-center gap-2.5 shadow-sm cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m0 11v3m8-7h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707-.707M6 5h2a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1zm10 0h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V6a1 1 0 011-1zM6 16h2a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2a1 1 0 011-1z" />
              </svg>
              Scan to Upload
            </button>

            <button
              onClick={scrollSmoothToDemo}
              className="bg-white dark:bg-slate-800 text-gray-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 font-bold py-3.5 px-6 rounded-md text-[15px] transition duration-200 w-full sm:w-auto flex items-center justify-center gap-2.5 shadow-sm cursor-pointer"
            >
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Try Demo Scene
            </button>
          </div>

          <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileChange} />

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] font-medium text-gray-400 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-5 w-full">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#f05c3f]"></span> 25+ Collections</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#f05c3f]"></span> 11 Industries</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#f05c3f]"></span> Real-Time AI Preview</span>
          </div>

        </div>

        {/* Hero Right Mockup Frame */}
        <div className="w-full lg:flex-1 max-w-[620px] select-none relative animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-2xl blur-2xl -z-10"></div>
          <img src={HeroImage} alt="Floor Visualization Showcase" className="w-full h-auto drop-shadow-2xl rounded-xl object-contain" />
        </div>
      </section>

      {/* ── EXPLORE FLOORING IDEAS (DEMO SCENES) ── */}
      <section ref={demoSectionRef} className={`w-full py-16 sm:py-24 border-t ${isDarkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col items-start mb-10">
            <span className="text-[#f05c3f] text-[12px] font-extrabold tracking-widest uppercase mb-2 block">— Demo Scenes</span>
            <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-[30px] sm:text-[38px] font-black tracking-tight text-slate-900 dark:text-white leading-none">
                  Explore Flooring Ideas <span className="text-[#f05c3f]">by Space</span>
                </h2>
                <p className="text-[14px] sm:text-[15px] text-gray-500 dark:text-slate-400 mt-3 max-w-[650px]">
                  Choose an industry, browse realistic demo scenes, and open any scene directly inside WonderVision AI.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => setIsHistoryOpen(true)}
                  className="shrink-0 flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-4 py-2.5 rounded-md text-[12px] font-bold tracking-wider uppercase transition-all hover:border-[#f05c3f] shadow-sm cursor-pointer"
                >
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  My History {history.length > 0 && `(${history.length})`}
                </button>
              </div>
            </div>
          </div>

          {/* Inline Navigation & Control Matrix Layout */}
          <div className="flex flex-col gap-4 mb-10 bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-sm">
            
            {/* Industry Row Filter Matrix */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-3">
              <span className="text-[11px] font-extrabold tracking-wider text-gray-400 uppercase w-24 shrink-0 pt-1.5">Industry:</span>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => {
                  const isSelected = selectedIndustry === industry;
                  return (
                    <button
                      key={industry}
                      onClick={() => {
                        setSelectedIndustry(industry);
                        setSelectedProduct('Product Collections');
                      }}
                      className={`px-3 py-1.5 rounded-full text-[12px] font-bold tracking-wide border cursor-pointer transition-all ${
                        isSelected 
                          ? 'bg-[#f05c3f] text-white border-[#f05c3f] shadow-sm' 
                          : 'bg-slate-50 dark:bg-slate-800 text-gray-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-gray-400'
                      }`}
                    >
                      {industry === 'ALL INDUSTRY' ? 'All' : industry.replace(' Flooring', '')}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="h-[1px] bg-slate-100 dark:bg-slate-800 w-full" />

            {/* Collection Row Filter Matrix */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 relative">
              <span className="text-[11px] font-extrabold tracking-wider text-gray-400 uppercase w-24 shrink-0 pt-1.5">Collection:</span>
              
              <div className="flex flex-wrap gap-2 w-full pr-12">
                <button
                  onClick={() => setSelectedProduct('Product Collections')}
                  className={`px-3 py-1.5 rounded-full text-[12px] font-bold tracking-wide border cursor-pointer transition-all ${
                    selectedProduct === 'Product Collections'
                      ? 'bg-[#f05c3f] text-white border-[#f05c3f] shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800 text-gray-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-gray-400'
                  }`}
                >
                  All Collections
                </button>
                {flooringProducts.slice(0, 10).map((product) => {
                  if(product === 'Product Collections') return null; // handled above
                  const isSelected = selectedProduct === product;
                  return (
                    <button
                      key={product}
                      onClick={() => setSelectedProduct(product)}
                      className={`px-3 py-1.5 rounded-full text-[12px] font-bold tracking-wide border cursor-pointer transition-all ${
                        isSelected 
                          ? 'bg-[#f05c3f] text-white border-[#f05c3f] shadow-sm' 
                          : 'bg-slate-50 dark:bg-slate-800 text-gray-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-gray-400'
                      }`}
                    >
                      {product}
                    </button>
                  );
                })}
              </div>

              {/* The Dropdown toggler for remaining products (Replacing original dropdown) */}
              {flooringProducts.length > 10 && (
                <div className="absolute right-0 top-0" ref={productDropdownRef}>
                  <button
                    onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                    className="px-3 py-1.5 rounded-full text-[12px] font-bold tracking-wide border bg-slate-50 dark:bg-slate-800 text-gray-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-gray-400 cursor-pointer transition-all flex items-center gap-1"
                  >
                    More
                    <svg className={`w-3 h-3 transition-transform ${isProductDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                  </button>

                  {isProductDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-800 shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-slate-100 dark:border-slate-700 py-2 z-50 rounded max-h-[300px] overflow-y-auto">
                      {flooringProducts.slice(10).map((product, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedProduct(product);
                            setIsProductDropdownOpen(false);
                          }}
                          className={`cursor-pointer w-full text-left px-5 py-2.5 text-[13px] transition-colors ${selectedProduct === product
                              ? 'text-[#fc6c3f] bg-orange-50 dark:bg-slate-700 font-bold'
                              : 'text-gray-600 dark:text-slate-300 hover:text-[#fc6c3f] hover:bg-slate-50 dark:hover:bg-slate-700'
                            }`}
                        >
                          {product}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* ── Demo Rooms Grid Core Presentation (YOUR EXACT LOGIC `isDefaultView`) ── */}
          {isDefaultView ? (
            /* ── STEP 1: HIGH-LEVEL INDUSTRY DIRECTORY (EXACT SCENE CARD STYLE) ── */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10 animate-fade-in">
              {uniqueCategories.map((cat) => (
                <div
                  key={`cat-${cat.id}`}
                  className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/60 dark:border-slate-800 group transition-all duration-300 flex flex-col cursor-pointer"
                  onClick={() => {
                    setSelectedIndustry(cat.category);
                    setSelectedProduct('Product Collections');
                  }}
                >
                  {/* Image Frame Wrapper - Exact 230px Proportion */}
                  <div className="h-[230px] w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                    <img 
                      src={cat.img} 
                      alt={cat.category} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    
                    {/* Hover Action Sheet Template Plate */}
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="bg-[#f05c3f] text-white text-[13px] font-bold tracking-wide px-5 py-2.5 rounded shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                        View {cat.displayName} Scenes
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  
                  {/* Description metadata section matching image_48a2f9.png verbatim */}
                  <div className="p-5 flex flex-col gap-1.5 flex-grow">
                    <span className="text-[#f05c3f] text-[10px] font-extrabold uppercase tracking-widest">
                      Industry Category
                    </span>
                    <h4 className="text-[16px] font-bold text-slate-900 dark:text-white group-hover:text-[#f05c3f] transition-colors leading-tight">
                      {cat.category}
                    </h4>
                    <p className="text-[13px] text-gray-400 dark:text-slate-400 mt-auto pt-1 font-medium truncate">
                      Explore realistic {cat.displayName.toLowerCase()} spaces
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* ── STEP 2: DEEP-DIVE ROOM CARDS VIEW FOR CHOSEN INDUSTRY ── */
            <div>
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
                <button
                  onClick={() => {
                    setSelectedIndustry('ALL INDUSTRY');
                    setSelectedProduct('Product Collections');
                  }}
                  className="flex items-center gap-2 text-[13px] font-extrabold text-gray-600 dark:text-slate-300 hover:text-[#f05c3f] dark:hover:text-[#f05c3f] transition-colors cursor-pointer bg-white dark:bg-slate-900 px-4 py-2 rounded-md border border-slate-200 dark:border-slate-800 shadow-sm uppercase tracking-wider w-max"
                >
                  <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Go Back
                </button>
              </div>

              {displayedRooms.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10 animate-fade-in">
                  {displayedRooms.map((room, index) => (
                    <div
                      key={`${room.id}-${index}`}
                      className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/60 dark:border-slate-800 group transition-all duration-300 flex flex-col cursor-pointer"
                      // YOUR EXACT NAVIGATION LOGIC PRESERVED HERE
                      onClick={() => navigate(`/visualizer/${room.id}`)}
                    >
                      <div className="h-[230px] w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                        <img 
                          src={room.img} 
                          alt={room.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px]">
                          <span className="bg-[#f05c3f] text-white text-[13px] font-bold tracking-wide px-5 py-2.5 rounded shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                            Try This Scene 
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                          </span>
                        </div>
                        {room.img?.includes('cloudinary') && (
                          <div className="absolute top-3 right-3 bg-[#f05c3f] text-white text-[9px] font-black tracking-widest px-2 py-1 rounded shadow uppercase">
                            New
                          </div>
                        )}
                      </div>
                      
                      <div className="p-5 flex flex-col gap-1.5 flex-grow">
                        <span className="text-[#f05c3f] text-[10px] font-extrabold uppercase tracking-widest">
                          {room.category?.replace(' Flooring', '')}
                        </span>
                        <h4 className="text-[16px] font-bold text-slate-900 dark:text-white group-hover:text-[#f05c3f] transition-colors leading-tight">
                          {room.name}
                        </h4>
                        <p className="text-[13px] text-gray-400 dark:text-slate-400 mt-auto pt-1 font-medium truncate">
                          {Array.isArray(room.product) ? room.product.join(' · ') : room.product || 'Standard Range'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full py-16 text-center text-gray-500 dark:text-slate-400 bg-white dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 shadow-sm">
                  <p className="text-base font-medium">No demo spaces match your filtered parameters.</p>
                  <button 
                    onClick={() => { setSelectedIndustry('ALL INDUSTRY'); setSelectedProduct('Product Collections'); }}
                    className="mt-3 text-sm text-[#f05c3f] font-bold underline cursor-pointer"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── LOWER CALL TO ACTION BAND ── */}
      <section className="w-full bg-gradient-to-r from-[#f05c3f] to-[#e04b2f] text-white text-center py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent)] pointer-events-none"></div>
        <div className="relative z-10 max-w-[800px] mx-auto flex flex-col items-center">
          <h2 className="text-[28px] sm:text-[36px] font-black tracking-tight mb-3">
            Ready to See Your Space Transform?
          </h2>
          <p className="text-orange-50/90 text-[15px] sm:text-[16px] mb-8 font-medium max-w-[550px] leading-relaxed">
            Upload a photo, scan from your phone, or try a demo — no login, no setup required.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleUploadClick}
              className="bg-white hover:bg-orange-50 text-[#f05c3f] font-extrabold py-3.5 px-8 rounded-md text-[14px] uppercase tracking-wider transition duration-200 w-full sm:w-auto shadow-md cursor-pointer"
            >
              Upload Photo
            </button>
            <button
              onClick={handleGenerateQR}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/40 hover:border-white font-extrabold py-3 px-6 rounded-md text-[14px] uppercase tracking-wider transition duration-200 w-full sm:w-auto cursor-pointer"
            >
              Scan to Upload
            </button>
            <button
              onClick={scrollSmoothToDemo}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/40 hover:border-white font-extrabold py-3 px-6 rounded-md text-[14px] uppercase tracking-wider transition duration-200 w-full sm:w-auto cursor-pointer"
            >
              Try Demo Scene
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER LAYER ── */}
      <footer className={`w-full py-8 border-t ${isDarkMode ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-slate-900 text-slate-400 border-slate-800'}`}>
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-wide">WonderVision AI</span>
            <span className="text-slate-600">by Wonderfloor</span>
          </div>
          
          <div className="flex items-center gap-6 font-medium text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href ='https://www.wonderfloor.co.in/contact-us.php'className="hover:text-white transition-colors">Contact</a>
            <a href="https://www.wonderfloor.co.in/index.php" className="hover:text-white transition-colors">Wonderfloor.com</a>
          </div>

          <p>© 2026 Wonderfloor. All rights reserved.</p>
        </div>
      </footer>

      {/* ── MODALS & INJECTED PORTAL DRAWERS ── */}
      <ImageHistoryDrawer
        isOpen={isHistoryOpen}
        history={history}
        onSelect={handleHistorySelect}
        onRemove={removeEntry}
        onClear={clearHistory}
        onClose={() => setIsHistoryOpen(false)}
      />

      {showQR && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity animate-fade-in">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-2xl flex flex-col items-center relative max-w-sm w-full mx-4 border-t-4 border-[#f05c3f]">
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">Scan to Upload</h3>
            <p className="text-sm text-gray-500 dark:text-slate-400 mb-6 text-center leading-relaxed">
              Use your phone's camera to scan this QR code and snap a photo of your room.
            </p>
            <div className="p-3 border-4 border-slate-100 dark:border-slate-800 rounded-xl bg-white mb-6 shadow-inner">
              <QRCodeCanvas value={`https://wonderfloor-v2.vercel.app/mobile-upload?session=${sessionId}`} size={180} />
            </div>
            <div className="flex items-center gap-2 text-[#f05c3f]">
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <p className="text-sm font-bold tracking-wide animate-pulse">Waiting for image...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
