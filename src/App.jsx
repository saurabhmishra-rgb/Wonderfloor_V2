import React, { useState, useRef } from 'react';
import ARVisualizer from './components/ARVisualizer'; // Assuming you have this component

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoomImage, setSelectedRoomImage] = useState(null);
  const fileInputRef = useRef(null);

  // --- New State for Dropdown ---
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('USER INDUSTRY');

  // --- Data from first image ---
  const industries = [
    "Industrial Flooring",
    "Office Flooring",
    "Residential Flooring",
    "School Flooring",
    "Sports Flooring",
    "Supermarket Flooring",
    "Transport Flooring",
    "Hospital Flooring",
    "Auditorium Flooring",
    "Hotel/ Hospitality Flooring"
  ];

  const demoRooms = [
    { id: 1, name: 'Kitchen', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80' },
    { id: 2, name: 'Bathroom', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80' },
    { id: 3, name: 'Living Room', img: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=600&q=80' },
    { id: 4, name: 'Bedroom', img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80' },
    { id: 5, name: 'Living Room', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80' },
    { id: 6, name: 'Outdoor Modern House', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80' },
    { id: 7, name: 'Dining Room', img: 'https://images.unsplash.com/photo-1617806118233-18e1c12e4023?auto=format&fit=crop&w=600&q=80' },
    { id: 8, name: 'Living Room', img: 'https://images.unsplash.com/photo-1583847268964-b28ce8f30000?auto=format&fit=crop&w=600&q=80' },
    { id: 9, name: 'Modern Kitchen', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80' },
    { id: 10, name: 'Outdoor Deck', img: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?auto=format&fit=crop&w=600&q=80' },
    { id: 11, name: 'Rustic Kitchen', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80' },
    { id: 12, name: 'Living Room', img: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=600&q=80' },
  ];

  const handleUploadClick = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedRoomImage({ previewUrl: URL.createObjectURL(file), isDemo: false, rawFile: file });
      setIsModalOpen(true);
    }
  };

  const handleDemoRoomClick = async (imgUrl) => {
    try {
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(imgUrl)}`;
      const response = await fetch(proxyUrl);
      const blob = await response.blob();
      const file = new File([blob], "demo_room.jpg", { type: "image/jpeg" });
      setSelectedRoomImage({ previewUrl: imgUrl, isDemo: true, rawFile: file });
      setIsModalOpen(true);
    } catch (error) {
      console.error("Failed to load demo image:", error);
      alert("Could not load the demo room. The network request failed.");
    }
  };

  return (
    <div className="relative max-w-[1300px] mx-auto px-6 py-12 font-sans text-gray-800 bg-white min-h-screen flex flex-col">
      
      {/* Top Left Logo */}
      <div className="absolute top-8 left-6 md:top-12 md:left-6 z-50">
        <img 
          src="https://www.wonderfloor.co.in/assets/img/logo/logo.png" 
          alt="Wonderfloor Logo" 
          className="h-10 md:h-12 object-contain"
        />
      </div>
      
      {/* Top Section: Perfectly Aligned Side-by-Side */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 mt-20 md:mt-24 mb-24 w-full">
        
        {/* Left Column - Heading & Controls */}
        <div className="w-full lg:w-[400px] flex flex-col gap-6 shrink-0">
          
          <h1 className="text-[32px] font-bold text-[#0f172a] mb-2 tracking-tight">
            See products in your room
          </h1>

          <ul className="text-[15px] text-gray-600 space-y-4 font-medium mb-2">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Upload a picture of your room
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
              Try our products in your room
            </li>
          </ul>
          
          {/* Primary Upload Button */}
          <button 
            onClick={handleUploadClick}
            className="bg-[#0b5c58] hover:bg-[#084844] text-white font-semibold py-3.5 px-6 rounded text-[15px] transition duration-200 w-full lg:w-[320px] flex items-center justify-center gap-2 shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Upload
          </button>
          
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            ref={fileInputRef}
            onChange={handleFileChange}
          />

          {/* Secondary QR Button */}
          <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-500 py-3.5 px-6 rounded text-[13px] font-medium transition duration-200 w-full lg:w-[320px] flex items-center justify-center gap-3">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            Or scan a QR code to upload pictures
          </button>
        </div>

        {/* Right Column - Exact CSS Graphic mimicking the new Roomvo screenshot */}
        <div className="flex-1 w-full bg-[#6a6a6a] h-[340px] rounded relative overflow-hidden flex shadow-sm select-none">
          {/* Inner Light Gray Wall */}
          <div className="absolute top-10 left-10 right-10 bottom-16 bg-[#e6e6e6] rounded-t-lg"></div>
          
          {/* Floor */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#555555]"></div>
          
          {/* Left White Drawer Element */}
          <div className="absolute bottom-16 left-32 w-48 h-20 bg-white flex justify-center pt-2 shadow-sm border border-gray-100">
             <div className="w-10 h-3 bg-[#cbd5e1] rounded-full"></div>
             {/* Checkmark Circle */}
             <div className="absolute bottom-4 right-10 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
             </div>
          </div>

          {/* Right Brown Boxes Element */}
          <div className="absolute bottom-16 right-20 w-40 h-24 bg-[#b48d66] flex flex-wrap border-t border-l border-[#9c7956]">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-1/2 h-1/2 border-r border-b border-[#9c7956] flex items-center pl-2 relative">
                <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                {/* Overlay Checkmark on bottom right box */}
                {i === 4 && (
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white border-2 border-blue-200 rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 border-2 border-blue-400 rounded-sm"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Top floating White Search/Filter Box */}
          <div className="absolute top-16 left-32 w-56 h-12 bg-white flex items-center px-4 shadow-sm border border-gray-100">
            <div className="w-20 h-1.5 bg-gray-200 rounded-full"></div>
            {/* Outline Circle */}
            <div className="absolute top-3 -right-3 w-6 h-6 bg-white border-2 border-blue-200 rounded-full flex items-center justify-center shadow-sm">
               <div className="w-2.5 h-2.5 border-2 border-blue-400 rounded-sm"></div>
            </div>
          </div>

          {/* Left Side Floating Menu Overlay */}
          <div className="absolute left-16 top-12 w-[60px] bg-[#e2e2e2] rounded-lg shadow-lg flex flex-col items-center py-3 gap-3 z-10 border border-gray-300">
             <div className="w-10 h-10 border-[3px] border-[#fc6c3f] bg-[#9cbdb9] rounded-sm"></div>
             <div className="w-10 h-10 bg-[#557e87] rounded-sm relative">
                {/* Pointer Hand Icon */}
                <svg className="absolute -bottom-4 -right-4 w-8 h-8 text-white drop-shadow-md z-20" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5 21a.5.5 0 01-.5-.5v-4.79l-2.15 2.15a.5.5 0 01-.7 0l-1.41-1.42a.5.5 0 010-.7l6.06-6.06a.5.5 0 01.7 0l6.06 6.06a.5.5 0 010 .7l-1.41 1.41a.5.5 0 01-.7 0L17.5 15.71V20.5a.5.5 0 01-.5.5h-3.5zM4 10.5a6.5 6.5 0 1113 0H4z" /></svg>
             </div>
             <div className="w-10 h-10 bg-white rounded-sm shadow-inner"></div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Demo Rooms Grid */}
      <div className="flex-grow">
        
        {/* === HEADER & DROPDOWN CONTAINER === */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 relative z-30 gap-4">
          <h3 className="text-[16px] font-bold text-gray-800">
            Don't have a picture? Try our demo rooms instead
          </h3>
          
          {/* USER INDUSTRY DROPDOWN */}
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 bg-[#6a6a6a] text-white px-5 py-2.5 rounded text-[13px] font-bold tracking-wide transition-colors hover:bg-gray-600 uppercase"
            >
              {selectedIndustry}
              <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] border-t-[3px] border-[#fc6c3f] py-2 z-50 rounded-b">
                {industries.map((industry, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedIndustry(industry);
                      setIsDropdownOpen(false);
                      // Add logic here if you want to filter demoRooms based on selection
                    }}
                    className={`w-full text-left px-5 py-2.5 text-[15px] transition-colors ${
                      selectedIndustry === industry || (selectedIndustry === 'USER INDUSTRY' && index === 0)
                        ? 'text-[#fc6c3f]' 
                        : 'text-gray-600 hover:text-[#fc6c3f] hover:bg-gray-50'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 relative z-10">
          {demoRooms.map((room) => (
            <div 
              key={room.id} 
              className="cursor-pointer group flex flex-col gap-3"
              onClick={() => handleDemoRoomClick(room.img)}
            >
              <div className="overflow-hidden rounded-lg bg-gray-100">
                <img 
                  src={room.img} 
                  alt={room.name} 
                  className="w-full h-[200px] object-cover hover:opacity-90 transition-opacity duration-200" 
                />
              </div>
              <p className="text-[12px] text-gray-500 font-semibold uppercase tracking-wider px-1">
                {room.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* AR Modal Overlay */}
      {isModalOpen && (
        <ARVisualizer 
           closeModal={() => setIsModalOpen(false)} 
           initialImage={selectedRoomImage} 
        />
      )}
    </div>
  );
}

export default App;