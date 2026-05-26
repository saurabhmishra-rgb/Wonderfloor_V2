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
        
        {/* 👉 THE FIX: This matches exactly 1 parameter (e.g., /visualizer/res-6) */}
        <Route path="/visualizer/:roomId" element={<App />} /> 
        
        {/* Optional: Keep this if you plan to use 2 parameters later (e.g., /visualizer/wood/res-6) */}
        <Route path="/visualizer/:productId/:roomId" element={<App />} /> 
        
        <Route path="/visualizer" element={<App />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)