// ARVisualization.jsx
import React, { useState, useRef, useEffect } from 'react';
import FavoritesView from './FavouritesView';
import RoomUploader from './RoomUploader';
import DownloadView from './DownloadView';
import { initVisualizer } from './script.jsx';
import AttractiveLoader from './AttractiveLoader';
import { useParams,useNavigate } from 'react-router-dom';
// 1. IMPORT YOUR LOCAL ASSETS HERE
import floorActon from '../assets/image1.jpeg';
import floorHolmes from '../assets/image2.jpeg';
import floorCedar from '../assets/image3.jpeg';
import floorCalla from '../assets/image4.jpeg';
import floorTansy from '../assets/image5.jpeg';
import floorPoppy from '../assets/image6.jpeg';
import floorPoppy1 from '../assets/image7.jpeg';
import floorPoppy2 from '../assets/image8.jpeg';
import floorPoppy3 from '../assets/image9.jpeg';
import floorPoppy4 from '../assets/image10.jpeg';
import floorPoppy5 from '../assets/image11.jpeg';
import floorpoppy6 from '../assets/image3.1.jpeg';
//Krayons
import Krayons1 from '../assets/krayon-fluorescent.jpg';
import Krayons2 from '../assets/krayons-frosty-n-beige.jpg';
import Krayons4 from '../assets/krayons-frosty-n-grey.jpg';
import Krayons5 from '../assets/krayons-frosty-n-orange.jpg';
import Krayons6 from '../assets/krayons-frosty-n-red.jpg';
import Krayons7 from '../assets/krayons-frosty-n-yellow.jpg';
import Krayons8 from '../assets/krayons-frosty-n-sea-blue.jpg';
import Krayons9 from '../assets/krayons-frosty-n-blue.jpg';
import Krayons10 from '../assets/krayons-pastel-blue.jpg';
import Krayons11 from '../assets/krayons-pastel-green.png';
import Krayons12 from '../assets/krayons-pastel-lemon.jpg';
import Krayons13 from '../assets/krayons-frosty-n-orange.jpg';
import Krayons14 from '../assets/krayons-pastel-purple.jpg';
import Krayons15 from '../assets/krayons-pastel-cherry.jpg';
import Krayons16 from '../assets/krayons-pastel-pink.jpg';

//Bravo Tiles
import Bravo1 from '../assets/braavo-ace-091-cherry-red.jpg';
import Bravo2 from '../assets/braavo-ace-092-blue.jpg';
import Bravo3 from '../assets/braavo-ace-093-orange.jpg';
import Bravo4 from '../assets/braavo-ace-094-green.jpg';
import Bravo5 from '../assets/braavo-ace-095-neo-silver.jpg';
import Bravo6 from '../assets/braavo-ace-096-yellow.jpg';
import Bravo7 from '../assets/braavo-ace-097-iron-grey.jpg';

import Bravo8 from '../assets/braavo-ar-051.jpg';
import Bravo9 from '../assets/braavo-ar-053.jpg';
import Bravo10 from '../assets/braavo-ar-054.jpg';
import Bravo11 from '../assets/braavo-ar-055.jpg';
import Bravo12 from '../assets/braavo-ar-056.jpg';
import Bravo13 from '../assets/braavo-ar-057.jpg';

import Bravo14 from '../assets/braavo-elite-blue--082.jpg';
import Bravo15 from '../assets/braavo-elite-elite-red-081.jpg';
import Bravo16 from '../assets/braavo-elite-gray--087.jpg';
import Bravo17 from '../assets/braavo-elite-orange-083.jpg';

import Bravo18 from '../assets/braavo-lite-lite-bood-085a.jpg';
import Bravo19 from '../assets/braavo-lite-lite-green-084.jpg';
import Bravo20 from '../assets/braavo-lite-lite-wood--086.jpg';

import Bravo21 from '../assets/braavo-spt-082-meadows-green.jpg';

const BACKEND_URL = 'http://127.0.0.1:8000';
// const BACKEND_URL = 'https://wonderfloor-backend-1.onrender.com';

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


// ── MAIN AR VISUALIZER COMPONENT ──
const mockProducts = [
  //Bravo Tiles

  { id: 28, name: 'Ace-091-cherry-red', size: '2mtr x 15mtr (Roll)', img: Bravo1, colour: 'cherry-red', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0001', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 29, name: 'Ace-092-blue', size: '2mtr x 15mtr (Roll)', img: Bravo2, colour: 'blue', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0002', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 30, name: 'Ace-093-orange', size: '2mtr x 15mtr (Roll)', img: Bravo3, colour: 'orange', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0003', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 31, name: 'Ace-094-green', size: '2mtr x 15mtr (Roll)', img: Bravo4, colour: 'green', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0004', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 32, name: 'Light-grey', size: '2mtr x 15mtr (Roll)', img: Bravo5, colour: 'neo-silver', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0005', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 33, name: 'Ace-096-yellow', size: '2mtr x 15mtr (Roll)', img: Bravo6, colour: 'yellow', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0006', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 34, name: 'Ace-097-iron-grey', size: '2mtr x 15mtr (Roll)', img: Bravo7, colour: 'grey', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0007', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 35, name: 'Ar-051', size: '2mtr x 15mtr (Roll)', img: Bravo8, colour: 'orange', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0008', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 36, name: 'Ar-053', size: '2mtr x 15mtr (Roll)', img: Bravo9, colour: 'orange', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0009', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 37, name: 'Ar-054', size: '2mtr x 15mtr (Roll)', img: Bravo10, colour: 'orange', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0010', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 38, name: 'Ar-055', size: '2mtr x 15mtr (Roll)', img: Bravo11, colour: 'grey', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0011', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 39, name: 'Ar-056', size: '2mtr x 15mtr (Roll)', img: Bravo12, colour: 'orange', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0012', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 40, name: 'Ar-057', size: '2mtr x 15mtr (Roll)', img: Bravo13, colour: 'yellow', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0013', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 41, name: 'Elite-blue-082', size: '2mtr x 15mtr (Roll)', img: Bravo14, colour: 'blue', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0014', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 42, name: 'Elite-red-081', size: '2mtr x 15mtr (Roll)', img: Bravo15, colour: 'red', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0015', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 43, name: 'Elite-grey-087', size: '2mtr x 15mtr (Roll)', img: Bravo16, colour: 'grey', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0016', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 44, name: 'Elite-orange-083', size: '2mtr x 15mtr (Roll)', img: Bravo17, colour: 'orange', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0017', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 45, name: 'Elite-Wood-085A', size: '2mtr x 15mtr (Roll)', img: Bravo18, colour: 'yellow', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0018', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 46, name: 'Elite-green-084', size: '2mtr x 15mtr (Roll)', img: Bravo19, colour: 'green', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0019', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 47, name: 'Elite-wood-086', size: '2mtr x 15mtr (Roll)', img: Bravo20, colour: 'brown', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0020', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },
  { id: 48, name: 'Spt-082-meadows-green', size: '2mtr x 15mtr (Roll)', img: Bravo21, colour: 'green', shade: 'Dark', category: 'Braavo', userIndustry: ['Sports Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Braavo', sku: 'WF/BR/0021', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=BRAAVO', description: "Wonderfloor Braavo premium sports flooring combines heavy-duty durability with cushioned comfort, making workouts safer, smoother, and more comfortable for gyms, courts, and fitness spaces.\n\nDesigned with resilient wear layers, glass fibre reinforcement, and easy-maintenance PUR coating, Braavo offers excellent shock absorption, acoustic performance, and long-lasting stability for sports, wellness, schools, auditoriums, and libraries." },

  //krayons
  { id: 13, name: 'Pastel Green', size: '2mtr x 20mtr (Roll)', img: Krayons1, colour: 'Green', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring, Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Krayons', sku: 'WF/KR/0001', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons cushion vinyl flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 14, name: 'Frosty N Beige', size: '2mtr x 20mtr (Roll)', img: Krayons2, colour: 'Beige', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Krayons', sku: 'WF/KR/0002', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons cushion vinyl flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 15, name: 'Frosty N Grey', size: '2mtr x 20mtr (Roll)', img: Krayons4, colour: 'Blue', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Krayons', sku: 'WF/KR/0003', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons cushion vinyl flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 16, name: 'Frosty N Orange', size: '2mtr x 20mtr (Roll)', img: Krayons5, colour: 'Grey', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Krayons', sku: 'WF/KR/0004', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons cushion vinyl flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 17, name: 'Frosty N Red', size: '2mtr x 20mtr (Roll)', img: Krayons6, colour: 'Orange', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Krayons', sku: 'WF/KR/0005', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons cushion vinyl flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 18, name: 'Frosty N Yellow', size: '2mtr x 20mtr (Roll)', img: Krayons7, colour: 'Red', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Krayons', sku: 'WF/KR/0006', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons cushion vinyl flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 19, name: 'Frosty N Sea Blue', size: '2mtr x 20mtr (Roll)', img: Krayons8, colour: 'Yellow', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Krayons', sku: 'WF/KR/0007', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons cushion vinyl flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 20, name: 'Frosty N Blue', size: '2mtr x 20mtr (Roll)', img: Krayons9, colour: 'Blue', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Krayons', sku: 'WFKRr/0008', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons cushion vinyl flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 21, name: 'Pastel Blue', size: '2mtr x 20mtr (Roll)', img: Krayons10, colour: 'Blue', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Krayons', sku: 'WF/KR/0009', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons cushion vinyl flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 22, name: 'Fluoresent', size: '2mtr x 20mtr (Roll)', img: Krayons11, colour: 'Green', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Krayons', sku: 'WF/KR/00010', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons cushion vinyl flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 23, name: 'Pastel Lemon', size: '2mtr x 20mtr (Roll)', img: Krayons12, colour: 'Lemon', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Krayons', sku: 'WF/KR/00011', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons cushion vinyl flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 24, name: 'Pastel Orange', size: '2mtr x 20mtr (Roll)', img: Krayons13, colour: 'Orange', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Krayons', sku: 'WF/KR/00012', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons cushion vinyl flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 25, name: 'Pastel Purple', size: '2mtr x 20mtr (Roll)', img: Krayons14, colour: 'Purple', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Krayons', sku: 'WF/KR/00013', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons cushion vinyl flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 26, name: 'Pastel Cherry', size: '2mtr x 20mtr (Roll)', img: Krayons15, colour: 'Cherry', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring', 'Hotel/ Hospitality Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Krayons', sku: 'WF/KR/00014', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons', description: "Wonderfloor Krayons cushion vinyl flooring brings vibrant colours and creative design flexibility to interiors with easy mix-and-match patterns, durable dimensional stability, and a maintenance-free PUR-coated surface.\n\nIdeal for schools, play areas, homes, offices, and hospitality spaces, Krayons adds a cheerful and lively atmosphere while offering long-lasting performance." },
  { id: 27, name: 'Pastel Pink', size: '2mtr x 20mtr (Roll)', img: Krayons16, colour: 'Pink', shade: 'Dark', category: 'Krayons', userIndustry: ['School Flooring', 'Office Flooring'], collection: 'Cushion Vinyl', accordionCategory: 'Krayons', sku: 'WF/kr/0015', url: 'https://www.wonderfloor.co.in/vinyl_flooring?product=Krayons' },
  { id: 1, name: 'GDP-550406', size: '30cm x 30cm', img: floorActon, colour: 'Grey', shade: 'Dark', category: 'Tiles', userIndustry: ['Industrial Flooring'], collection: 'GDP', accordionCategory: 'Durofloor', sku: 'WF000051' },
  { id: 2, name: 'GDP-551004', size: '30cm x 30cm', img: floorHolmes, colour: 'Beige', shade: 'Light', category: 'Planks', userIndustry: ['Office Flooring', 'Residential Flooring'], collection: 'Classic', accordionCategory: 'Durofloor', sku: 'WF000052' },
  { id: 3, name: 'GDP-551007', size: '30cm x 30cm', img: floorCedar, colour: 'Brown', shade: 'Medium', category: 'Tiles', userIndustry: ['Industrial Flooring'], collection: 'GDP', accordionCategory: 'Siggma', sku: 'WF000053' },
  { id: 4, name: 'GDP-552107', size: '30cm x 30cm', img: floorCalla, colour: 'Grey', shade: 'Light', category: 'Carpet', userIndustry: ['Office Flooring'], collection: 'Premium', accordionCategory: 'Siggma', sku: 'WF000054' },
  { id: 5, name: 'GDP-553107', size: '30cm x 30cm', img: floorpoppy6, colour: 'Grey', shade: 'Light', category: 'Carpet', userIndustry: ['Office Flooring'], collection: 'Premium', accordionCategory: 'Siggma', sku: 'WF000055' },
  { id: 6, name: 'GDP-552112', size: '30cm x 30cm', img: floorTansy, colour: 'Black', shade: 'Dark', category: 'Planks', userIndustry: ['Residential Flooring'], collection: 'Classic', accordionCategory: 'Orbit', sku: 'WF000056' },
  { id: 7, name: 'GDP-554306', size: '30cm x 30cm', img: floorPoppy, colour: 'White', shade: 'Light', category: 'Tiles', userIndustry: ['Residential Flooring'], collection: 'GDP', accordionCategory: 'Orbit', sku: 'WF000057' },
  { id: 8, name: 'GDP-555902', size: '30cm x 30cm', img: floorPoppy1, colour: 'Grey', shade: 'Medium', category: 'Carpet', userIndustry: ['Industrial Flooring'], collection: 'Premium', accordionCategory: 'Stoneland Monza', sku: 'WF000058' },
  { id: 9, name: 'GDP-557304', size: '30cm x 30cm', img: floorPoppy2, colour: 'Beige', shade: 'Medium', category: 'Tiles', userIndustry: ['Office Flooring'], collection: 'Classic', accordionCategory: 'Stoneland Monza', sku: 'WF000059' },
  { id: 10, name: 'GDP-557703', size: '30cm x 30cm', img: floorPoppy3, colour: 'Brown', shade: 'Dark', category: 'Planks', userIndustry: ['Residential Flooring'], collection: 'Premium', accordionCategory: 'Meteor', sku: 'WF000060' },
  { id: 11, name: 'GDP-559204', size: '30cm x 30cm', img: floorPoppy4, colour: 'Black', shade: 'Dark', category: 'Carpet', userIndustry: ['Sports Flooring'], collection: 'GDP', accordionCategory: 'Meteor', sku: 'WF000061' },
  { id: 12, name: 'GDP-559404', size: '30cm x 30cm', img: floorPoppy5, colour: 'White', shade: 'Light', category: 'Tiles', userIndustry: ['Residential Flooring'], collection: 'Classic', accordionCategory: 'Aventus', sku: 'WF000062' },
];

const ARVisualizer = ({ closeModal, initialImage, onOpenRecentRooms, historyCount = 0, onProductChange,    }) => {
  const { productId } = useParams(); // <-- NEW CLEAN URL EXTRACTOR
  const navigate = useNavigate();

  const productCategories = ['Braavo', 'Krayons', 'Durofloor', 'Siggma', 'Orbit', 'Stoneland Monza', 'Meteor', 'Aventus'];
  const [initialPinchDist, setInitialPinchDist] = useState(null);
  const [uploadedRoom, setUploadedRoom] = useState(null);

  // 2. READ URL DIRECTLY INTO INITIAL STATE
 const [selectedProduct, setSelectedProduct] = useState(() => {
    // Priority 1: Explicitly clicked History Item (fixes the wrong tile bug)
    if (initialImage?.historyEntryId && initialImage?.lastProduct) {
      const match = mockProducts.find(p => p.id === initialImage.lastProduct.id);
      if (match) return match;
    }

    // Priority 2: URL param (highest priority for newly shared links)
    if (productId) {
      const decodedSku = decodeURIComponent(productId); // Fixes encoded slashes
      const matchedProduct = mockProducts.find(p => p.sku === decodedSku);
      if (matchedProduct) return matchedProduct;
    }
 
    // Priority 3: General last used tile saved in history
    if (initialImage?.lastProduct) {
      const match = mockProducts.find(p => p.id === initialImage.lastProduct.id);
      if (match) return match;
    }

    // Priority 4: Fallback to LocalStorage, then Default
    const savedProduct = localStorage.getItem('savedSelectedProduct');
    return savedProduct ? JSON.parse(savedProduct) : mockProducts[0];
  });
// ── NEW: 1. Track absolute latest product to prevent 3D loading glitches ──
  const latestProductRef = useRef(selectedProduct);
  useEffect(() => {
    latestProductRef.current = selectedProduct;
  }, [selectedProduct]);

  // ── NEW: 2. Auto-stamp the current tile to history so chips never vanish ──
useEffect(() => {
    // Give App.jsx 500ms to actually create the history item before we try to attach a chip to it!
    const timer = setTimeout(() => {
      const targetHistoryId = initialImage?.historyEntryId || initialImage?.id;
      if (onProductChange && targetHistoryId && selectedProduct) {
        onProductChange(targetHistoryId, selectedProduct);
      }
    }, 500); 
    
    return () => clearTimeout(timer);
  }, [initialImage?.historyEntryId, initialImage?.id, selectedProduct, onProductChange]);

  useEffect(() => {
    localStorage.setItem('savedSelectedProduct', JSON.stringify(selectedProduct));
  }, [selectedProduct]);

 // ── UPDATE: Force update when History is clicked & sync React Router ──
 useEffect(() => {
    if (initialImage?.historyEntryId && initialImage?.lastProduct) {
      const historyProduct = mockProducts.find(p => p.id === initialImage.lastProduct.id);
      
      // If the history tile is different from what is currently on screen
      if (historyProduct && historyProduct.id !== selectedProduct?.id) {
        setSelectedProduct(historyProduct);
        setFloorRotation(0);
        
        const safeSku = encodeURIComponent(historyProduct.sku);
        const safeRoom = encodeURIComponent(initialImage?.id || 'default');
        navigate(`/visualizer/${safeSku}/${safeRoom}`, { replace: true });
        
        // Only apply instantly IF the visualizer is fully alive. 
        // Otherwise, the boot-up process will catch it.
        if (visualizerInstance.current && visualizerInstance.current.updateTexture) {
          visualizerInstance.current.updateTexture(historyProduct.img, 0);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialImage]);

  const [processedImage, setProcessedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isFloorVisible, setIsFloorVisible] = useState(true);
  const threeContainerRef = useRef(null);
  const visualizerInstance = useRef(null);
  const compositeRef = useRef(null);

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
  const [activeFooterCategory, setActiveFooterCategory] = useState(mockProducts[0].accordionCategory);

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

  const shareRef = useRef(null);
  const downloadRef = useRef(null);
  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Toolbar States
  const [viewMode, setViewMode] = useState('list');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter Sidebar States
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [expandedFilterCategory, setExpandedFilterCategory] = useState(null);
  const [activeFilters, setActiveFilters] = useState({});

  const imageContainerRef = useRef(null);
  const activeBaseImage = uploadedRoom || initialImage;
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
        const instance = initVisualizer(threeContainerRef.current);
        if (instance) {
          visualizerInstance.current = instance; // ✅ ADD THIS LINE
          if (latestProductRef.current && instance.updateTexture) {
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

  const handleTouchEnd = () => { setIsDragging(false); setInitialPinchDist(null); };

  const getRotatedTileBlob = async (imageSrc, angle) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
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
        canvas.toBlob(resolve, 'image/jpeg');
      };
      img.onerror = reject;
      img.src = imageSrc;
    });
  };

  // ── FIX: GENERATE LOCAL 3D COMPOSITE (BYPASSES FETCH COMPLETELY) ──
  // ── FIX: GENERATE LOCAL 3D COMPOSITE WITH SAFE GPU TIMEOUT ──
  const generateCompositeImage = async (productImgUrl, angle = 0) => {
    return new Promise((resolve) => {
      if (!activeBaseImage?.maskUrl || !visualizerInstance.current) {
        return resolve(null);
      }

      const tilePreloader = new Image();
      tilePreloader.crossOrigin = 'anonymous';

      tilePreloader.onload = () => {
        // 1. The image is downloaded. Tell ThreeJS to update the material.
        if (visualizerInstance.current.updateTexture) {
          visualizerInstance.current.updateTexture(productImgUrl, angle);
        }

        // 2. WAIT FOR THE GPU TO RENDER THE FRAME
        // 450ms guarantees ThreeJS has time to upload the texture and draw it.
        setTimeout(() => {
          try {
            const canvas = document.createElement('canvas');
            const bgImg = new Image();
            bgImg.crossOrigin = 'anonymous';

            bgImg.onload = () => {
              canvas.width = bgImg.width;
              canvas.height = bgImg.height;
              const ctx = canvas.getContext('2d');

              // Draw Base Room Background
              ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

              // Draw Updated ThreeJS webgl layer
              const webglCanvas = threeContainerRef.current?.querySelector('canvas');
              if (webglCanvas) {
                ctx.drawImage(webglCanvas, 0, 0, canvas.width, canvas.height);
              }

              // Draw Top Mask layer
              const maskImg = new Image();
              maskImg.crossOrigin = 'anonymous';
              maskImg.onload = () => {
                ctx.drawImage(maskImg, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL('image/jpeg', 0.9)); // Return baked image dataURL
              };
              maskImg.onerror = () => resolve(null);
              maskImg.src = activeBaseImage.maskUrl;
            };
            bgImg.onerror = () => resolve(null);
            bgImg.src = activeBaseImage.previewUrl;
          } catch (e) {
            console.error("Canvas composite failed:", e);
            resolve(null);
          }
        }, 450); // <--- THIS IS THE MAGIC NUMBER THAT FIXES THE DOUBLE CLICK
      };

      tilePreloader.onerror = () => {
        console.error("Failed to preload tile texture asset:", productImgUrl);
        resolve(null);
      };

      tilePreloader.src = productImgUrl;
    });
  };

  // Canvas-only composite that doesn't need the live ThreeJS instance
  const generateStaticComposite = async (productImgUrl,) => {
    if (!activeBaseImage?.maskUrl) return null;

    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const bgImg = new Image();
      bgImg.crossOrigin = 'anonymous';

      bgImg.onload = () => {
        canvas.width = bgImg.width;
        canvas.height = bgImg.height;
        const ctx = canvas.getContext('2d');

        // Layer 1: Draw room background
        ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

        // Layer 2: Draw tiled floor texture
        const tileImg = new Image();
        tileImg.crossOrigin = 'anonymous';
        tileImg.onload = () => {
          // Simple repeating tile fill as a floor approximation
          const pattern = ctx.createPattern(tileImg, 'repeat');
          if (pattern) {
            ctx.save();
            ctx.globalAlpha = 0.85;
            ctx.fillStyle = pattern;
            ctx.fillRect(0, canvas.height * 0.45, canvas.width, canvas.height * 0.55);
            ctx.restore();
          }

          // Layer 3: Draw mask on top
          const maskImg = new Image();
          maskImg.crossOrigin = 'anonymous';
          maskImg.onload = () => {
            ctx.drawImage(maskImg, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL('image/jpeg', 0.9));
          };
          maskImg.onerror = () => resolve(null);
          maskImg.src = activeBaseImage.maskUrl;
        };
        tileImg.onerror = () => resolve(null);
        tileImg.src = productImgUrl;
      };
      bgImg.onerror = () => resolve(null);
      bgImg.src = activeBaseImage.previewUrl;
    });
  };
  const handleEnterCompare = async () => {
    // ✅ Step 1: Capture composite WHILE visualizer is still alive
    let initialComposite = null;
    if (activeBaseImage?.maskUrl && visualizerInstance.current) {
      setIsProcessing(true);
      initialComposite = await generateCompositeImage(selectedProduct.img, floorRotation);
      setIsProcessing(false);
    }

    // ✅ Step 2: NOW enter compare mode (visualizer gets cleaned up here)
    setIsCompareMode(true);
    setCompareLeftProduct(selectedProduct);
    setCompareRightProduct(selectedProduct);
    setActiveCompareSide('right');
    if (window.innerWidth >= 768) setIsSidebarOpen(true);

    // ✅ Step 3: Use the pre-captured composite
    if (initialComposite) {
      setCompareLeftImage(initialComposite);
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
        const response = await fetch(`${BACKEND_URL}/api/replace-floor`, { method: 'POST', body: formData });
        const data = await response.json();
        if (response.ok && data.success) {
          setCompareLeftImage(data.imageDataUrl);
          setCompareRightImage(data.imageDataUrl);
        } else {
          setCompareLeftImage(currentSrc);
          setCompareRightImage(currentSrc);
        }
      } catch {
        setCompareLeftImage(currentSrc);
        setCompareRightImage(currentSrc);
      } finally {
        setIsProcessing(false);
      }
    } else {
      setCompareLeftImage(currentSrc);
      setCompareRightImage(currentSrc);
    }
  };
  const applyFloorOverlay = async (product, angle, showLoader = true) => {
    if (!activeBaseImage) return;
    if (showLoader) setIsProcessing(true);

    try {
      if (activeBaseImage?.maskUrl) {
        if (visualizerInstance.current && visualizerInstance.current.updateTexture) {
          visualizerInstance.current.updateTexture(product.img, angle);
        }
        await new Promise(resolve => setTimeout(resolve, 4500));
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
        fetch(`${BACKEND_URL}/api/replace-floor`, { method: 'POST', body: formData }),
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
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
    setZoomScale(1);
    setPan({ x: 0, y: 0 });
    setErrorMsg(null);

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
            ? await generateCompositeImage(product.img, floorRotation)
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

          const response = await fetch(`${BACKEND_URL}/api/replace-floor`, { method: 'POST', body: formData });
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
    const nextAngle = (floorRotation + 30) % 360;
    setFloorRotation(nextAngle);
    setIsFloorVisible(true);
    applyFloorOverlay(selectedProduct, -nextAngle, false);
  };

  const getDistance = (touch1, touch2) => {
    return Math.sqrt(Math.pow(touch2.clientX - touch1.clientX, 2) + Math.pow(touch2.clientY - touch1.clientY, 2));
  };

  const handleShare = (platform) => {
    // ✅ Build the clean URL
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
        // ✅ Only sends the URL so WhatsApp automatically creates a clickable preview card
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
        // ✅ Only puts the URL in the body of the email
        window.open(
          `mailto:?subject=${encodeURIComponent('Wonderfloor Design — ' + selectedProduct.name)}&body=${shareUrl}`
        );
        break;

      default:
        break;
    }

    setIsShareMenuOpen(false);
  };

  const filterCategories = [
    { id: 'accordionCategory', label: 'Product Collections', options: ['Braavo', 'Krayons', 'Durofloor', 'Siggma', 'Orbit', 'Stoneland Monza', 'Meteor', 'Aventus'] },
    { id: 'colour', label: 'Colour Family', options: ['Grey', 'cherry-red', 'neo-silver', 'Beige', 'Brown', 'Black', 'White', 'Blue', 'Green', 'Lemon', 'Orange', 'Purple', 'Cherry', 'Pink'] },
    { id: 'shade', label: 'Shade', options: ['Light', 'Medium', 'Dark'] },
    { id: 'userIndustry', label: 'User Industry', options: ['Industrial Flooring', 'Office Flooring', 'Residential Flooring', 'School Flooring', 'Sports Flooring', 'Hotel/ Hospitality Flooring'] },
    { id: 'Pattern/Layout', label: 'Pattern/ Layout', options: ['Harringbone'] },
    { id: 'collection', label: 'Style', options: ['Wood', 'Stone', 'Cushion Vinyl'] },
  ];

  const handleToggleFilter = (categoryId, option) => {
    setActiveFilters(prev => {
      const currentSelected = prev[categoryId] || [];
      if (currentSelected.includes(option)) return { ...prev, [categoryId]: currentSelected.filter(item => item !== option) };
      else return { ...prev, [categoryId]: [...currentSelected, option] };
    });
  };

  const clearFilters = () => setActiveFilters({});
  // Filter Logic
  const filteredProducts = mockProducts.filter(prod => {
    const searchLower = searchQuery.trim().toLowerCase();
    const matchesSearch = searchLower === '' ||
      prod.name.toLowerCase().includes(searchLower) ||
      (prod.accordionCategory && prod.accordionCategory.toLowerCase().includes(searchLower)) ||
      (prod.collection && prod.collection.toLowerCase().includes(searchLower)) ||
      (prod.category && prod.category.toLowerCase().includes(searchLower)) ||
      (prod.colour && prod.colour.toLowerCase().includes(searchLower));

    // FILTERING LOGIC TO SUPPORT REAL ARRAYS
    const matchesFilters = Object.entries(activeFilters).every(([key, selectedValues]) => {
      if (selectedValues.length === 0) return true;
      if (!prod[key]) return false;

      // Check if the product data property is an Array (like our new userIndustry format)
      if (Array.isArray(prod[key])) {
        return selectedValues.some(val => prod[key].includes(val));
      }

      // Normal string check fallback (for colour, shade, etc.)
      return selectedValues.includes(prod[key]);
    });

    return matchesSearch && matchesFilters;
  });

  const displayCategories = [...productCategories].sort((a, b) => {
    if (sortOrder === 'Cat-A-Z') return a.localeCompare(b);
    if (sortOrder === 'Cat-Z-A') return b.localeCompare(a);
    return 0;
  });

  const totalActiveFiltersCount = Object.values(activeFilters).reduce((acc, curr) => acc + curr.length, 0);

  return (
    <div className="fixed inset-0 bg-[#f9fafb] flex z-50 overflow-hidden font-sans text-gray-800">

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed md:relative bg-white md:border-r border-gray-200 flex flex-col z-50 md:z-30 shrink-0 transition-transform duration-300 ease-in-out
        bottom-0 left-0 w-full h-[85vh] rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.15)]
        ${isSidebarOpen ? 'translate-y-0' : 'translate-y-full'} 
        md:w-[320px] md:h-full md:rounded-none md:shadow-sm md:translate-y-0
      `}>

        {isFavoritesViewOpen ? (
          <FavoritesView
            favoriteIds={favoriteProducts}
            allProducts={mockProducts}
            onBack={() => setIsFavoritesViewOpen(false)}
            onSelectProduct={handleTileSelection}
            onToggleFavorite={toggleFavorite}
          />
        ) : isFilterMenuOpen ? (
          <div className="flex flex-col h-full bg-white absolute inset-0 z-40 animate-fade-in md:rounded-none rounded-t-3xl overflow-hidden">
            <div className="p-4 md:p-5 flex items-center gap-3 border-b border-gray-100">
              <button onClick={() => setIsFilterMenuOpen(false)} className="text-gray-500 hover:text-black hover:bg-gray-100 p-1.5 rounded-md cursor-pointer transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <h2 className="text-xl font-bold text-gray-900">Filters</h2>
            </div>

            <div className="flex-1 overflow-y-auto px-4 md:px-5 py-4">
              <p className="text-sm font-medium text-gray-800 mb-4">
                {totalActiveFiltersCount === 0 ? "No active filters" : `${totalActiveFiltersCount} active filter${totalActiveFiltersCount > 1 ? 's' : ''}`}
              </p>

              <div className="flex flex-col">
                <button
                  onClick={() => setExpandedFilterCategory(expandedFilterCategory === 'sort' ? null : 'sort')}
                  className={`flex justify-between items-center py-3 px-2 rounded-md transition-colors cursor-pointer ${expandedFilterCategory === 'sort' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                >
                  <span className="font-medium text-[15px] text-gray-800 flex items-center gap-2">Sort By</span>
                  <svg className={`w-5 h-5 text-gray-500 transition-transform ${expandedFilterCategory === 'sort' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {expandedFilterCategory === 'sort' && (
                  <div className="flex flex-col gap-3 py-3 px-2 pl-4">
                    <label className="flex justify-between items-center cursor-pointer group">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                        Default
                      </span>
                      <input type="radio" name="sort" value="" checked={sortOrder === ''} onChange={(e) => setSortOrder(e.target.value)} className="w-4 h-4 text-[#0b5e5e] focus:ring-[#0b5e5e] cursor-pointer accent-[#0b5e5e]" />
                    </label>
                    <label className="flex justify-between items-center cursor-pointer group">
                      <span className="text-sm text-gray-700 flex items-center gap-2">Product Name (A-Z)</span>
                      <input type="radio" name="sort" value="Prod-A-Z" checked={sortOrder === 'Prod-A-Z'} onChange={(e) => setSortOrder(e.target.value)} className="w-4 h-4 text-[#0b5e5e] focus:ring-[#0b5e5e] cursor-pointer accent-[#0b5e5e]" />
                    </label>
                    <label className="flex justify-between items-center cursor-pointer group">
                      <span className="text-sm text-gray-700 flex items-center gap-2">Product Name (Z-A)</span>
                      <input type="radio" name="sort" value="Prod-Z-A" checked={sortOrder === 'Prod-Z-A'} onChange={(e) => setSortOrder(e.target.value)} className="w-4 h-4 text-[#0b5e5e] focus:ring-[#0b5e5e] cursor-pointer accent-[#0b5e5e]" />
                    </label>
                    <label className="flex justify-between items-center cursor-pointer group">
                      <span className="text-sm text-gray-700 flex items-center gap-2">Category Name (A-Z)</span>
                      <input type="radio" name="sort" value="Cat-A-Z" checked={sortOrder === 'Cat-A-Z'} onChange={(e) => setSortOrder(e.target.value)} className="w-4 h-4 text-[#0b5e5e] focus:ring-[#0b5e5e] cursor-pointer accent-[#0b5e5e]" />
                    </label>
                    <label className="flex justify-between items-center cursor-pointer group">
                      <span className="text-sm text-gray-700 flex items-center gap-2">Category Name (Z-A)</span>
                      <input type="radio" name="sort" value="Cat-Z-A" checked={sortOrder === 'Cat-Z-A'} onChange={(e) => setSortOrder(e.target.value)} className="w-4 h-4 text-[#0b5e5e] focus:ring-[#0b5e5e] cursor-pointer accent-[#0b5e5e]" />
                    </label>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1">
                {filterCategories.map((category) => {
                  const isExpanded = expandedFilterCategory === category.id;
                  const selectedCount = activeFilters[category.id]?.length || 0;
                  return (
                    <div key={category.id} className="flex flex-col">
                      <button
                        onClick={() => setExpandedFilterCategory(isExpanded ? null : category.id)}
                        className={`flex justify-between items-center py-3 px-2 rounded-md transition-colors cursor-pointer ${isExpanded ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                      >
                        <span className="font-medium text-[15px] text-gray-800 flex items-center gap-2">
                          {category.label}
                          {selectedCount > 0 && (
                            <span className="bg-[#0b5e5e] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">{selectedCount}</span>
                          )}
                        </span>
                        <svg className={`w-5 h-5 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                      {isExpanded && (
                        <div className="flex flex-col gap-3 py-3 px-2 pl-4">
                          {category.options.map(option => {
                            const isChecked = activeFilters[category.id]?.includes(option) || false;
                            return (
                              <label key={option} className="flex justify-between items-center cursor-pointer group">
                                <span className="text-sm text-gray-700">{option}</span>
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => handleToggleFilter(category.id, option)}
                                  className="w-4 h-4 rounded border-gray-300 text-[#0b5e5e] focus:ring-[#0b5e5e] cursor-pointer accent-[#0b5e5e]"
                                />
                              </label>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-4 border-t border-gray-200 bg-white flex justify-between gap-3 shrink-0">
              <button onClick={clearFilters} className="flex-1 py-2.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
                Clear filters
              </button>
              <button onClick={() => setIsFilterMenuOpen(false)} className="flex-1 py-2.5 bg-[#202938] rounded-md text-sm font-medium text-white hover:bg-black transition-colors cursor-pointer">
                Done
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
                    className="text-gray-400 hover:text-gray-800 hover:bg-gray-100 p-1.5 rounded-md transition-colors cursor-pointer"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1.5"></circle><circle cx="12" cy="5" r="1.5"></circle><circle cx="12" cy="19" r="1.5"></circle></svg>
                  </button>
                  {isMenuDropdownOpen && (
                    <div className="absolute top-[45px] right-0 bg-white shadow-2xl border border-gray-200 rounded-md py-2 w-[180px] z-[100] flex flex-col">
                      <button onClick={onOpenRecentRooms} className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 text-left transition-colors cursor-pointer w-full">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500 shrink-0">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        My History
                        {historyCount > 0 && (
                          <span className="ml-1 bg-[#f05c3f] text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0">
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
                        className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 text-left transition-colors cursor-pointer w-full"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                        Upload
                      </RoomUploader>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="px-4 md:px-5 pb-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600 shrink-0 cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
                <button
                  onClick={() => setIsFilterMenuOpen(true)}
                  className="flex-1 h-10 border border-gray-300 rounded flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 cursor-pointer relative"
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
                <div className="flex border border-gray-300 rounded overflow-hidden h-10 shrink-0">
                  <button onClick={() => setViewMode('list')} className={`w-10 flex justify-center items-center transition-colors cursor-pointer ${viewMode === 'list' ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                  </button>
                  <div className="w-px bg-gray-300"></div>
                  <button onClick={() => setViewMode('grid')} className={`w-10 flex justify-center items-center transition-colors cursor-pointer ${viewMode === 'grid' ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  </button>
                </div>
              </div>
              {isSearchOpen && (
                <div className="mt-3 animate-fade-in">
                  <input
                    type="text"
                    placeholder="Search products, collections, colors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-10 border border-gray-300 rounded px-3 text-[16px] md:text-sm focus:outline-none focus:border-[#0b5e5e] focus:ring-1 focus:ring-[#0b5e5e]"
                    autoFocus
                  />
                </div>
              )}
            </div>
            <div className="border-b border-gray-100"></div>

            {errorMsg && (
              <div className="mx-4 md:mx-5 mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm break-words font-medium">
                ⚠️ {errorMsg}
              </div>
            )}

            <div className="flex-1 overflow-y-auto px-4 md:px-5 pb-5 pt-4 flex flex-col relative">
              <div className="flex-1">
                {displayCategories.map(categoryName => {
                  let categoryProducts = filteredProducts.filter(
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
                  const isExpanded = (expandedProductCategory === categoryName) || (searchQuery.trim().length > 0);
                  return (
                    <div key={categoryName} className="mb-3">
                      <button
                        onClick={() => setExpandedProductCategory(isExpanded && searchQuery.length === 0 ? null : categoryName)}
                        className={`w-full flex justify-between items-center py-3 px-4 border rounded-lg transition-all duration-300 cursor-pointer ${isExpanded ? 'bg-[#0b5e5e] border-[#0b5e5e] text-white shadow-md' : 'bg-white border-gray-200 hover:bg-gray-50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]'}`}
                      >
                        <span className="font-bold text-sm tracking-wide">{categoryName}</span>
                        <svg className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180 text-white' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                      {isExpanded && (
                        <div className="pt-3 pb-1">
                          {viewMode === 'list' ? (
                            <div className="flex flex-col gap-3">
                              {categoryProducts.map((prod) => {
                                const isFavorite = favoriteProducts.includes(prod.id);
                                const isSelected = isCompareMode
                                  ? (activeCompareSide === 'left' ? compareLeftProduct?.id === prod.id : compareRightProduct?.id === prod.id)
                                  : selectedProduct.id === prod.id;
                                return (
                                  <div
                                    key={prod.id}
                                    onClick={() => handleTileSelection(prod)}
                                    className={`relative flex gap-3 md:gap-4 p-2 md:p-3 border rounded-lg cursor-pointer transition-all duration-300 bg-white ${isSelected ? 'border-[#0b5e5e] shadow-md bg-[#0b5e5e]/5 transform scale-[1.02]' : 'border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1'}`}
                                  >
                                    <button onClick={(e) => toggleFavorite(e, prod.id)} className="absolute top-2 right-2 p-1 z-10 cursor-pointer">
                                      <svg width="20" height="20" viewBox="0 0 24 24" fill={isFavorite ? "#ef4444" : "none"} stroke={isFavorite ? "#ef4444" : "#9ca3af"} strokeWidth="2" className="transition-colors hover:scale-110">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                      </svg>
                                    </button>
                                    <img src={prod.img} alt={prod.name} className="w-16 h-16 md:w-20 md:h-20 object-cover rounded shadow-sm bg-gray-100 shrink-0 border border-gray-200" />
                                    <div className="flex flex-col justify-center min-w-0 flex-1">
                                      <span className="text-[10px] md:text-[11px] text-gray-500 uppercase tracking-wide">Wonderfloor</span>
                                      <span className="font-bold text-sm text-gray-900 truncate mt-0.5 pr-6">{prod.name}</span>
                                      <span className="text-xs text-gray-500 mt-1">Size: {prod.size}</span>
                                      <button onClick={(e) => handleOpenDetails(e, prod)} className="text-xs text-[#0b5e5e] mt-1 hover:underline text-left cursor-pointer z-10 block w-max">
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
                                const isSelected = isCompareMode
                                  ? (activeCompareSide === 'left' ? compareLeftProduct?.id === prod.id : compareRightProduct?.id === prod.id)
                                  : selectedProduct.id === prod.id;
                                return (
                                  <div
                                    key={prod.id}
                                    onClick={() => handleTileSelection(prod)}
                                    className={`relative aspect-square rounded overflow-hidden cursor-pointer border-2 transition-all duration-300 bg-white ${isSelected ? 'border-[#0b5e5e] shadow-lg transform scale-105 z-10' : 'border-transparent hover:border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-105'}`}
                                  >
                                    <button onClick={(e) => toggleFavorite(e, prod.id)} className="absolute top-1.5 right-1.5 p-1 bg-white/70 backdrop-blur-sm rounded-full z-20 cursor-pointer shadow-sm">
                                      <svg width="14" height="14" viewBox="0 0 24 24" fill={isFavorite ? "#ef4444" : "none"} stroke={isFavorite ? "#ef4444" : "#6b7280"} strokeWidth="2" className="transition-colors hover:scale-110">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                      </svg>
                                    </button>
                                    <img src={prod.img} alt={prod.name} className="w-full h-full object-cover bg-gray-100" />
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
                {filteredProducts.length === 0 && (
                  <div className="text-center text-gray-500 py-8 text-sm">No products match your search or filters.</div>
                )}
              </div>

              {!isCompareMode && viewMode === 'grid' && selectedProduct && (
                <div className="mt-auto border-t border-gray-200 p-3 shrink-0 bg-white sticky bottom-0 z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col min-w-0 pr-2">
                      <span className="font-bold text-sm text-gray-900 truncate">{selectedProduct.name}</span>
                      <span className="text-xs text-gray-500 truncate">Size: {selectedProduct.size}</span>
                    </div>
                    <button onClick={(e) => handleOpenDetails(e, selectedProduct)} className="text-xs font-medium text-[#0b5e5e] flex items-center hover:bg-[#0b5e5e]/5 px-3 py-2 rounded-md transition-colors cursor-pointer shrink-0">
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
          <div className="h-[60px] bg-white border-b border-gray-200 flex justify-between items-center px-2 md:px-4 shadow-sm z-30 shrink-0 w-full relative">
            <div className="flex items-center gap-1 md:gap-2 text-gray-600 hover:text-black text-sm font-medium px-2 border-r border-gray-200 pr-3 md:pr-6 h-full transition-colors">
              <button onClick={() => setIsSidebarOpen(true)} className="md:hidden p-1.5 rounded-md hover:bg-gray-100 cursor-pointer">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </button>
              <button onClick={closeModal} className="flex items-center gap-1 md:gap-2 px-3 py-2 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                <span className="hidden sm:inline">Exit</span>
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center gap-1 md:gap-2 text-sm text-gray-600 font-medium px-3 whitespace-nowrap h-full">
              <button onClick={handleEnterCompare} className="flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 3h5v5M4 20L20 4M21 16v5h-5M15 15l6 6M4 4l5 5"></path></svg>
                <span className="hidden lg:inline">Compare</span>
              </button>

              <div className="relative flex items-center h-full" ref={shareRef}>
                <button onClick={() => setIsShareMenuOpen(!isShareMenuOpen)} className="flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer">
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
                <button onClick={() => setIsDownloadMenuOpen(!isDownloadMenuOpen)} className="flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  <span className="hidden sm:inline">Download</span>
                </button>
                {isDownloadMenuOpen && (
                  <div className="absolute top-[50px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0 bg-white shadow-xl border border-gray-200 rounded-md py-2 w-[240px] z-50 flex flex-col">
                    <DownloadView
                      selectedProduct={selectedProduct}
                      currentSrc={currentSrc}
                      compositeRef={activeBaseImage?.maskUrl ? compositeRef : null}
                      onClose={() => setIsDownloadMenuOpen(false)}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1 md:gap-2 border-l border-gray-200 pl-2 md:pl-4 h-full shrink-0">
              <a href="https://www.wonderfloor.co.in/contact-us" target="_blank" rel="noopener noreferrer" title="Contact Us | Wonderfloor">
                <button className="bg-[#0b5e5e] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-medium hover:bg-[#084747] flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="hidden sm:block"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  Contact us
                </button>
              </a>
              <div className="relative flex items-center h-full" ref={menuRef}>
                <button onClick={() => setIsMenuDropdownOpen(!isMenuDropdownOpen)} className="flex text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-2 md:px-3 py-2 rounded-md text-sm font-medium items-center gap-1 transition-colors cursor-pointer">
                  <span className="hidden sm:inline">Menu</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1.5"></circle><circle cx="12" cy="5" r="1.5"></circle><circle cx="12" cy="19" r="1.5"></circle></svg>
                </button>
                {isMenuDropdownOpen && (
                  <div className="absolute top-[50px] right-0 bg-white shadow-xl border border-gray-200 rounded-md py-2 w-[180px] z-50 flex flex-col">
                    <button onClick={onOpenRecentRooms} className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 text-left transition-colors cursor-pointer w-full">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      My History
                      {historyCount > 0 && (
                        <span className="ml-1 bg-[#f05c3f] text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0">
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
                      className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 text-left transition-colors cursor-pointer w-full"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                      Upload
                    </RoomUploader>
                  </div>
                )}
              </div>
            </div>
          </div>

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
          <div className="bg-white border-t border-gray-200 shrink-0 flex flex-col z-20 w-full">
            {/* Row 1: Selected Product Info & Basic Actions */}
            <div className="flex flex-wrap md:flex-nowrap items-center justify-between px-3 md:px-6 py-2 gap-y-2">
              <div
                onClick={(e) => handleOpenDetails(e, selectedProduct)}
                className="flex items-center gap-2 md:gap-3 w-full md:w-auto cursor-pointer hover:bg-gray-50 p-1.5 -ml-1.5 rounded-md transition-colors group"
              >
                <img src={selectedProduct.img} alt="Selected" className="w-8 h-8 md:w-10 md:h-10 object-cover rounded border border-gray-200" />
                <div className="flex flex-col mr-auto md:mr-0">
                  <span className="font-bold text-sm md:text-base text-gray-900 leading-tight group-hover:text-[#0b5e5e] transition-colors">{selectedProduct.name}</span>
                  <span className="text-[10px] md:text-xs text-gray-400">{selectedProduct.size}</span>
                </div>
                <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm text-gray-600 font-medium md:ml-6 md:border-l border-gray-200 pl-2 md:pl-6 h-full py-1">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleReset(); }}
                    disabled={!isFloorVisible}
                    className={`flex items-center gap-1 md:gap-2 px-2 py-1.5 md:py-2 rounded-md transition-colors ${isFloorVisible
                      ? 'hover:bg-gray-100 hover:text-gray-900 cursor-pointer text-gray-600'
                      : 'opacity-50 cursor-not-allowed text-gray-400'
                      }`}
                  >
                    <span className="hidden sm:inline">Reset</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-4 md:h-4"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><polyline points="3 3 3 8 8 8"></polyline></svg>
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleRotate(); }}
                    disabled={!isFloorVisible}
                    className={`flex items-center gap-1 md:gap-2 px-2 py-1.5 md:py-2 rounded-md transition-colors group ${isFloorVisible
                      ? 'hover:bg-gray-100 hover:text-gray-900 cursor-pointer'
                      : 'opacity-50 cursor-not-allowed text-gray-400'
                      }`}
                  >
                    <span className="hidden sm:inline">Rotate</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-4 md:h-4"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
                    {floorRotation !== 0 && (
                      <span className="ml-1 px-1.5 py-0.5 text-[10px] md:text-xs font-bold text-[#0b5e5e] bg-[#0b5e5e]/10 rounded-full group-hover:bg-[#0b5e5e]/20 transition-colors">
                        {floorRotation}&deg;
                      </span>
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-default text-xs md:text-sm text-gray-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  <span className="hidden sm:inline">Zoom</span> {zoomScale > 1 ? `(${zoomScale.toFixed(1)}x)` : ''}
                </button>
                <button
                  onClick={() => { setZoomScale(1); setPan({ x: 0, y: 0 }); }}
                  disabled={zoomScale === 1}
                  className={`text-xs md:text-sm px-3 py-1.5 rounded-md transition-colors ${zoomScale === 1
                    ? 'text-gray-400 cursor-not-allowed opacity-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 cursor-pointer'
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
                {displayCategories.map(cat => (
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
                {mockProducts.filter(p => p.accordionCategory === activeFooterCategory).map(prod => {
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
                <div className="w-full sm:w-1/2 aspect-square rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm shrink-0">
                  <img src={detailsProduct.img} alt={detailsProduct.name} className="w-full h-full object-cover" />
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
                    { label: 'Collection/ Style', value: detailsProduct.collection },
                    { label: 'Flooring Product', value: detailsProduct.category },
                    { label: 'Colour', value: detailsProduct.colour },
                    { label: 'Shade', value: detailsProduct.shade },
                    {
                      label: 'User Industry',
                      // If it's an array, join values visually with a comma, else fallback to direct display
                      value: Array.isArray(detailsProduct.userIndustry)
                        ? detailsProduct.userIndustry.join(', ')
                        : detailsProduct.userIndustry
                    },
                  ].map(({ label, value }) => (
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
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#0b5e5e] hover:underline transition-colors w-full sm:w-auto justify-center sm:justify-start cursor-pointer"
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
    </div>
  );
};

export default ARVisualizer;
