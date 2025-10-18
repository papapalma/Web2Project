import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch, initialValue = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  // Update search term when initialValue changes
  useEffect(() => {
    setSearchTerm(initialValue);
  }, [initialValue]);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-xl lg:max-w-2xl mx-auto mb-6 md:mb-8">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
          <svg 
            className="h-4 w-4 md:h-5 md:w-5 text-gray-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search cars..."
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full pl-10 md:pl-12 pr-20 md:pr-24 py-3 md:py-4 text-base md:text-lg bg-gray-900 border-2 border-gray-700 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all text-white placeholder-gray-500"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 px-3 md:px-6 py-1 md:py-2 mr-1 md:mr-2 my-1 md:my-2 bg-white text-black rounded-lg md:rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold text-sm md:text-base"
        >
          <span className="hidden sm:inline">Search</span>
          <span className="sm:hidden">🔍</span>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;