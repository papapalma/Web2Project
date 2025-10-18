import React, { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-black shadow-2xl sticky top-0 z-50 border-b border-gray-800">
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 xl:px-24 py-4 md:py-6">
        {/* Logo */}
        <h1 
          className="text-xl md:text-2xl lg:text-3xl font-bold text-white cursor-pointer hover:text-gray-300 transition-colors" 
          onClick={() => { window.location.href = '/'; closeMenu(); }}
        >
          🏎️ AutoLux
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a 
            href="/" 
            className="text-white hover:text-gray-400 transition-colors font-medium text-base lg:text-lg"
          >
            Home
          </a>
          <a 
            href="/listing" 
            className="text-white hover:text-gray-400 transition-colors font-medium text-base lg:text-lg"
          >
            Cars
          </a>
          <a 
            href="/order" 
            className="px-4 lg:px-6 py-2 lg:py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300 font-semibold text-base lg:text-lg"
          >
            Order
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span 
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span 
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span 
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col space-y-1 px-4 py-4">
          <a 
            href="/" 
            onClick={closeMenu}
            className="text-white hover:text-gray-300 hover:bg-gray-800/50 transition-all duration-200 font-medium text-lg py-3 px-4 rounded-lg"
          >
            🏠 Home
          </a>
          <a 
            href="/listing" 
            onClick={closeMenu}
            className="text-white hover:text-gray-300 hover:bg-gray-800/50 transition-all duration-200 font-medium text-lg py-3 px-4 rounded-lg"
          >
            🚗 Cars
          </a>
          <a 
            href="/order" 
            onClick={closeMenu}
            className="bg-white text-black hover:bg-gray-200 transition-all duration-200 font-semibold text-lg py-3 px-4 rounded-lg text-center mt-2"
          >
            📋 Order Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
