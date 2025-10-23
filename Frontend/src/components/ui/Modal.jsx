import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true"></div>
      <div className="relative bg-gray-900 text-white rounded-xl max-w-2xl w-full mx-auto p-6 z-10 shadow-2xl border border-gray-700">
        <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-700">
          <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
          <button 
            onClick={onClose} 
            aria-label="Close modal" 
            className="text-white hover:text-gray-300 focus:outline-none transition-colors text-2xl w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
