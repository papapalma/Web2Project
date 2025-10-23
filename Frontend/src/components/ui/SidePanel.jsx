import React, { useEffect } from 'react';

const SidePanel = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Container classes:
  // - Default (mobile): bottom sheet -> translate-y-full when closed, translate-y-0 when open
  // - md+ (desktop): left side panel -> -translate-x-full when closed, translate-x-0 when open
  const containerClass = `fixed z-50 inset-x-0 bottom-0 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out rounded-t-xl
    ${isOpen ? 'translate-y-0' : 'translate-y-full'}
    md:inset-y-0 md:top-0 md:bottom-0 md:left-0 md:right-auto md:h-full md:w-80 md:rounded-none
    ${isOpen ? 'md:translate-x-0' : 'md:-translate-x-full'}`;

  return (
    <>
      <div className={`fixed inset-0 z-50 transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true"></div>

        <div className={containerClass} role="dialog" aria-modal="true">
          <div className="p-4 flex justify-between items-center border-b border-gray-700">
            <h4 className="font-semibold">Panel</h4>
            <button onClick={onClose} aria-label="Close panel" className="focus:outline-none">✕</button>
          </div>
          <div className="p-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
