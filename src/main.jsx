import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MobileUpload from "./components/MobileUpload.jsx"; // <-- Import the new mobile page
import './index.css'

// Check the URL in the browser
const path = window.location.pathname;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* If the URL is exactly '/mobile-upload', show the mobile page. Otherwise, show the main laptop App. */}
    {path === '/mobile-upload' ? <MobileUpload /> : <App />}
  </React.StrictMode>,
)