import React, { useState } from 'react';

const DownloadLeadModal = ({ isOpen, onClose, onSubmit, isDarkMode }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNo: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.contactNo.trim()) {
      newErrors.contactNo = 'Contact No is required';
    } else if (!/^\d{7,15}$/.test(formData.contactNo.replace(/[\s+-]/g, ''))) {
      newErrors.contactNo = 'Enter a valid contact number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(formData); // Parent (ARVisualizer) isko handle karega
      setFormData({ fullName: '', email: '', contactNo: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up
          ${isDarkMode ? 'bg-[#1e293b] text-white' : 'bg-white text-gray-900'}`}
      >
        {/* Header */}
        <div className={`flex justify-between items-center p-5 border-b ${isDarkMode ? 'border-[#334155]' : 'border-gray-100'}`}>
          <div>
            <h2 className="text-lg font-bold">Get Your Design</h2>
            {/* <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {productName ? `Downloading: ${productName}` : 'Enter your details to continue'}
            </p> */}
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors cursor-pointer ${isDarkMode ? 'hover:bg-[#334155]' : 'hover:bg-gray-100'}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide mb-1 block">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full h-11 px-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#0b5e5e]/30 transition-colors
                ${isDarkMode ? 'bg-[#0f1b2d] border-[#334155] text-white placeholder-gray-500' : 'bg-white border-gray-300'}
                ${errors.fullName ? 'border-red-500' : ''}`}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wide mb-1 block">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`w-full h-11 px-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#0b5e5e]/30 transition-colors
                ${isDarkMode ? 'bg-[#0f1b2d] border-[#334155] text-white placeholder-gray-500' : 'bg-white border-gray-300'}
                ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wide mb-1 block">
              Contact No <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={`w-full h-11 px-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-[#0b5e5e]/30 transition-colors
                ${isDarkMode ? 'bg-[#0f1b2d] border-[#334155] text-white placeholder-gray-500' : 'bg-white border-gray-300'}
                ${errors.contactNo ? 'border-red-500' : ''}`}
            />
            {errors.contactNo && <p className="text-red-500 text-xs mt-1">{errors.contactNo}</p>}
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wide mb-1 block">
              Message <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>(optional)</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Any specific requirement..."
              className={`w-full px-3 py-2 rounded-lg border text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#0b5e5e]/30 transition-colors
                ${isDarkMode ? 'bg-[#0f1b2d] border-[#334155] text-white placeholder-gray-500' : 'bg-white border-gray-300'}`}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-11 rounded-lg font-bold text-white bg-gradient-to-r from-[#0b5e5e] to-teal-500 hover:from-[#084747] hover:to-teal-600 transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Please wait...
              </>
            ) : (
              'Continue to Download'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DownloadLeadModal;
