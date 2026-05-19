import React, { useRef } from 'react';

const RoomUploader = ({ onImageUpload, className, children, onClick }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = (e) => {
    // Prevent event bubbling so the menu doesn't close prematurely
    e.stopPropagation(); 
    // Trigger the hidden file input
    fileInputRef.current.click();
    if (onClick) onClick(e);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Generate a temporary local URL for the preview
      const previewUrl = URL.createObjectURL(file);
      // Pass both the raw file (for the backend) and preview URL (for the UI) back to the parent
      onImageUpload({ rawFile: file, previewUrl });
    }
    // Reset input so the user can upload the exact same file again if needed
    e.target.value = null; 
  };

  return (
    <>
      <button onClick={handleButtonClick} className={className}>
        {children}
      </button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }} // Strictly hide the native input
      />
    </>
  );
};

export default RoomUploader;