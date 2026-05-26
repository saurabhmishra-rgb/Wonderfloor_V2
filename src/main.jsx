// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import MobileUpload from "./components/MobileUpload.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mobile-upload" element={<MobileUpload />} />
        
        <Route path="/app" element={<App />} />
        
<<<<<<< HEAD
        {/* 👉 THE FIX: This matches exactly 1 parameter (e.g., /visualizer/res-6) */}
        <Route path="/visualizer/:roomId" element={<App />} /> 
        
        {/* Optional: Keep this if you plan to use 2 parameters later (e.g., /visualizer/wood/res-6) */}
        <Route path="/visualizer/:productId/:roomId" element={<App />} /> 
        
=======
        {/* ADD THE DYNAMIC PATH VARIABLES HERE */}
        <Route path="/visualizer/:productId/:roomId" element={<App />} /> 
        
        {/* Optional: Keep this one too just in case someone types only /visualizer */}
>>>>>>> fa1a36b12595fe13b52f32f11a62d0142e8be25a
        <Route path="/visualizer" element={<App />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
<<<<<<< HEAD
)
=======
)
>>>>>>> fa1a36b12595fe13b52f32f11a62d0142e8be25a
