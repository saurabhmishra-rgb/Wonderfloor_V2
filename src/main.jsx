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
        
        {/* ADD THE DYNAMIC PATH VARIABLES HERE */}
        <Route path="/visualizer/:productId/:roomId" element={<App />} /> 
        
        {/* Optional: Keep this one too just in case someone types only /visualizer */}
        <Route path="/visualizer" element={<App />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
