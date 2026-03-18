import React, { useState, useRef } from 'react';
import ARVisualizer from './components/ARVisualizer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoomImage, setSelectedRoomImage] = useState(null);
  const fileInputRef = useRef(null);

  // Keeps your two specific demo rooms, including the Pinterest kitchen link
  const demoRooms = [
    { id: 1, name: 'My Kitchen', img: 'https://i.pinimg.com/736x/b2/31/d2/b231d25a7d36facfe22c0ecba18c5b8a.jpg' },
    { id: 2, name: 'Living Room', img: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=600&q=80' },
  ];

  const handleUploadClick = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedRoomImage({ previewUrl: URL.createObjectURL(file), isDemo: false, rawFile: file });
      setIsModalOpen(true);
    }
  };

  // Convert the internet URL into a physical File object behind the scenes
  const handleDemoRoomClick = async (imgUrl) => {
    try {
      // THE FIX: We wrap the URL in a free proxy to bypass Pinterest's security block
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(imgUrl)}`;
      
      // 1. Fetch the image data through the proxy
      const response = await fetch(proxyUrl);
      const blob = await response.blob();
      
      // 2. Package it into a physical File object
      const file = new File([blob], "demo_room.jpg", { type: "image/jpeg" });

      // 3. Send it to the ARVisualizer!
      setSelectedRoomImage({ previewUrl: imgUrl, isDemo: true, rawFile: file });
      setIsModalOpen(true);
      
    } catch (error) {
      console.error("Failed to load demo image:", error);
      alert("Could not load the demo room. The network request failed.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-10 font-sans text-gray-800">
      
      {/* BEAUTIFUL MODIFIED SVG LOGO SECTION - NOW A DISTINCT 'W' */}
      <div className="mb-10 flex items-center gap-4">
        <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shadow-sm rounded-lg">
          <rect width="40" height="40" rx="8" fill="#0b5e5e"/>
          {/* A traditional 'W' shape path: TopL -> BotL -> MidTop -> BotR -> TopR */}
          <path d="M10 10L15 30L20 20L25 30L30 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Re-adding the Floor Line for theme consistency, repositioned slightly lower */}
          <path d="M10 35H30" stroke="#4fd1c5" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Wonderfloor</h1>
      </div>
      
      <h2 className="text-xl md:text-2xl font-bold mb-8 text-gray-700">See products in your room</h2>
      
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-10 mb-16">
        <div className="flex-1 flex flex-col gap-6 min-w-[300px]">
          <ul className="text-gray-600 space-y-3 font-medium">
            <li className="flex items-center gap-2">📸 Upload a picture of your room</li>
            <li className="flex items-center gap-2">📦 Try our products in your room</li>
          </ul>
          
          <button 
            onClick={handleUploadClick}
            className="bg-[#0b5e5e] hover:bg-[#084747] text-white font-bold py-4 px-8 rounded-md text-lg transition duration-200 shadow-md w-full md:w-auto text-center"
          >
            📷 Upload Photo
          </button>
          
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            ref={fileInputRef}
            onChange={handleFileChange}
          />

          <div className="border border-gray-300 rounded-md p-4 text-center text-gray-500 bg-gray-50 text-sm">
            📱 Or scan a QR code to upload pictures directly from your phone.
          </div>
        </div>

        <div className="flex-[2] bg-gray-100 rounded-xl flex flex-col items-center justify-center min-h-[250px] text-gray-600 p-8 border border-gray-200 shadow-inner">
           <h3 className="font-bold text-xl mb-4 text-[#0b5e5e]">How it works</h3>
           <ol className="space-y-3 text-sm md:text-base w-full max-w-md">
              <li className="flex gap-3"><span className="font-bold text-[#0b5e5e]">1.</span> Upload your own room or select a demo image below.</li>
              <li className="flex gap-3"><span className="font-bold text-[#0b5e5e]">2.</span> Choose from our extensive catalog of flooring tiles.</li>
              <li className="flex gap-3"><span className="font-bold text-[#0b5e5e]">3.</span> Our AI Engine maps the perspective and instantly visualizes the floor.</li>
           </ol>
        </div>
      </div>

      {/* Bottom Section - Demo Rooms */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-6 border-b pb-2">Don't have a picture? Try our demo rooms instead:</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {demoRooms.map((room) => (
            <div 
              key={room.id} 
              className="cursor-pointer group relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 max-w-sm"
              onClick={() => handleDemoRoomClick(room.img)}
            >
              <img 
                src={room.img} 
                alt={room.name} 
                className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-sm text-white font-medium drop-shadow-md">{room.name}</p>
              </div>
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