import React, { useState, useCallback } from 'react';
import { useNavigation } from '../../hooks/useNavigation';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navigateTo, isCurrentPath } = useNavigation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleNavigation = useCallback((path) => {
    navigateTo(path);
    closeMenu();
  }, [navigateTo, closeMenu]);

  return (
    <nav className="w-full bg-black shadow-2xl sticky top-0 z-50 border-b border-gray-800">
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 xl:px-24 py-4 md:py-6">
        {/* Logo */}
        <h1 
          className="text-xl md:text-2xl lg:text-3xl font-bold text-white cursor-pointer hover:text-gray-300 transition-colors" 
          onClick={() => handleNavigation('/')}
        >
          🏎️ AutoLux
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <button
            onClick={() => handleNavigation('/')}
            className={`text-white hover:text-gray-400 transition-colors font-medium text-base lg:text-lg ${
              isCurrentPath('/') ? 'text-gray-300 border-b border-gray-300' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation('/listing')}
            className={`text-white hover:text-gray-400 transition-colors font-medium text-base lg:text-lg ${
              isCurrentPath('/listing') ? 'text-gray-300 border-b border-gray-300' : ''
            }`}
          >
            Cars
          </button>
          <button
            onClick={() => handleNavigation('/order')}
            className="px-4 lg:px-6 py-2 lg:py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300 font-semibold text-base lg:text-lg"
          >
            Order
          </button>
        </div>

        {/* Mobile footer nav (replaces hamburger) */}
        <div className="md:hidden">
          <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-50">
            <div className="flex justify-around items-center h-16 px-2">
              <button
                onClick={() => handleNavigation('/')}
                aria-label="Home"
                className={`flex flex-col items-center text-white focus:outline-none"
                  ${isCurrentPath('/') ? ' text-gray-300' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M3 9.75L12 3l9 6.75V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.75z" />
                </svg>
                <span className="text-xs mt-0.5">Home</span>
              </button>

              <button
                onClick={() => handleNavigation('/listing')}
                aria-label="Cars"
                className={`flex flex-col items-center text-white focus:outline-none"
                  ${isCurrentPath('/listing') ? ' text-gray-300' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M5 11l1.5-4h11L19 11v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6z" />
                  <circle cx="7.5" cy="16.5" r="1.5" />
                  <circle cx="16.5" cy="16.5" r="1.5" />
                </svg>
                <span className="text-xs mt-0.5">Cars</span>
              </button>

              <button
                onClick={() => handleNavigation('/order')}
                aria-label="Order"
                className={`flex flex-col items-center text-white focus:outline-none"
                  ${isCurrentPath('/order') ? ' text-gray-300' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M3 3h18v2H3V3zm2 6h14v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9z" />
                </svg>
                <span className="text-xs mt-0.5">Order</span>
              </button>

              <button
                onClick={toggleMenu}
                aria-label="More"
                className="flex flex-col items-center text-white focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 8a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
                <span className="text-xs mt-0.5">More</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile More Sheet (opened from footer 'More' button) */}
      {isMenuOpen && (
        <div className="md:hidden fixed left-4 right-4 bottom-20 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-200 z-50">
          <div className="flex flex-col space-y-2 px-4 py-4">
            <button
              onClick={() => handleNavigation('/')}
              className={`text-white hover:text-gray-300 hover:bg-gray-800/50 transition-all duration-200 font-medium text-lg py-3 px-4 rounded-lg text-left ${
                isCurrentPath('/') ? 'bg-gray-800/50 text-gray-300' : ''
              }`}
            >
              🏠 Home
            </button>
            <button
              onClick={() => handleNavigation('/listing')}
              className={`text-white hover:text-gray-300 hover:bg-gray-800/50 transition-all duration-200 font-medium text-lg py-3 px-4 rounded-lg text-left ${
                isCurrentPath('/listing') ? 'bg-gray-800/50 text-gray-300' : ''
              }`}
            >
              🚗 Cars
            </button>
            <button
              onClick={() => handleNavigation('/order')}
              className="bg-white text-black hover:bg-gray-200 transition-all duration-200 font-semibold text-lg py-3 px-4 rounded-lg text-center mt-2"
            >
              📋 Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
