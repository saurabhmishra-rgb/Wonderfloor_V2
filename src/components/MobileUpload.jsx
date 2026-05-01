// src/MobileUpload.jsx
import React, { useState } from 'react';

function MobileUpload() {
    const [status, setStatus] = useState('Waiting for file...');
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session');

    const handleMobileFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setStatus('Uploading to laptop...');

        const formData = new FormData();
        formData.append('roomImage', file);
        formData.append('sessionId', sessionId);

        try {
            // --- PRODUCTION RENDER URL HERE ---
            // Replace 'YOUR-RENDER-APP-NAME' with your actual live Render link!
            const response = await fetch('https://python-floor-backend.onrender.com/api/upload-mobile', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setStatus('Success! Check your laptop screen.');
            } else {
                const text = await response.text();  
                console.error('Server response:', text);
                setStatus(`Failed: ${response.status} — check console`);
            }
        } catch (error) {
            console.error(error);
            setStatus('Network error. Check if the Python backend is running.');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white font-sans text-gray-800">
            <h1 className="text-2xl font-bold mb-2 text-center text-[#202938]">Upload Room Photo</h1>
            <p className="text-center text-gray-500 mb-8">Take a picture of your floor to see it on your laptop.</p>

            <label className="bg-[#f05c3f] hover:bg-[#f05c4f] text-white px-8 py-4 rounded shadow-md cursor-pointer font-bold text-lg text-center transition-colors">
                Open Camera / Gallery
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleMobileFileChange}
                />
            </label>

            <p className="mt-8 text-[#0b5c58] font-bold">{status}</p>
        </div>
    );
}

export default MobileUpload;