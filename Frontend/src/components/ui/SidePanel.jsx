import React, { useEffect, useState, useRef } from 'react';

const SidePanel = ({ isOpen, onClose, title, children, isMobileBottomSheet = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (isMobileBottomSheet) {
        setIsExpanded(false);
      }
    } else {
      document.body.style.overflow = '';
      setIsExpanded(false);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, isMobileBottomSheet]);

  const handleTouchStart = (e) => {
    if (!isMobileBottomSheet) return;
    setStartY(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isMobileBottomSheet || !isDragging) return;
    setCurrentY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!isMobileBottomSheet || !isDragging) return;
    const diff = currentY - startY;
    
    if (diff > 100) {
      // Swiped down significantly - close
      onClose();
    } else if (diff < -100 && !isExpanded) {
      // Swiped up significantly - expand
      setIsExpanded(true);
    }
    
    setIsDragging(false);
    setStartY(0);
    setCurrentY(0);
  };

  // Container classes for desktop (left panel) and mobile (bottom sheet)
  const containerClass = isMobileBottomSheet
    ? `fixed z-[100] inset-x-0 bottom-0 bg-gray-900 text-white transform transition-all duration-300 ease-out rounded-t-2xl shadow-2xl
       ${isOpen ? (isExpanded ? 'h-[90vh]' : 'h-[60vh]') : 'translate-y-full'}
       ${isDragging && currentY !== 0 ? '' : 'transition-all'}`
    : `fixed z-50 inset-y-0 top-0 bottom-0 left-0 right-auto h-full w-80 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out
       ${isOpen ? 'translate-x-0' : '-translate-x-full'}`;

  const draggableStyle = isMobileBottomSheet && isDragging && currentY !== 0
    ? { transform: `translateY(${Math.max(0, currentY - startY)}px)` }
    : {};

  return (
    <>
      <div className={`fixed inset-0 z-[99] transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true"></div>

        <div 
          ref={panelRef}
          className={containerClass} 
          style={draggableStyle}
          role="dialog" 
          aria-modal="true"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Drag Handle for Mobile */}
          {isMobileBottomSheet && (
            <div className="w-full flex justify-center pt-3 pb-2">
              <div className="w-12 h-1.5 bg-gray-600 rounded-full"></div>
            </div>
          )}

          {/* Header */}
          <div className="px-4 py-3 flex justify-between items-center border-b border-gray-700">
            <h4 className="font-semibold text-lg md:text-xl">{title || 'Panel'}</h4>
            <button 
              onClick={onClose} 
              aria-label="Close panel" 
              className="text-white hover:text-gray-300 focus:outline-none text-2xl w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className={`overflow-y-auto ${isMobileBottomSheet ? 'h-[calc(100%-4rem)]' : 'h-[calc(100%-4rem)]'} p-4`}>
            {children}
          </div>

          {/* Expand indicator for mobile */}
          {isMobileBottomSheet && !isExpanded && (
            <div 
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm flex items-center gap-2 animate-bounce"
              onClick={() => setIsExpanded(true)}
            >
              <span>Swipe up for more</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SidePanel;
