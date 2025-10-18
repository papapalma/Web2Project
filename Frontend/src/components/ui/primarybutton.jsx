import React from 'react';

const PrimaryButton = ({ label, onClick, type = 'primary' }) => {
  const baseStyles = 'px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 text-base md:text-lg w-full sm:w-auto min-h-[44px]';
  
  const typeStyles = {
    primary: 'bg-white text-black hover:bg-gray-200 shadow-lg hover:shadow-xl hover:scale-105',
    secondary: 'bg-gray-800 text-white border-2 border-gray-600 hover:bg-gray-700 hover:border-gray-500 shadow-lg hover:shadow-xl hover:scale-105',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-black shadow-lg hover:shadow-xl hover:scale-105'
  };

  return (
    <button 
      className={`${baseStyles} ${typeStyles[type]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
