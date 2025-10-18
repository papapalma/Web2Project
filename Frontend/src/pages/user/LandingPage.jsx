import React, { useState } from 'react';
import NavBar from '../../components/ui/navbar';
import PrimaryButton from '../../components/ui/primarybutton';
import Card from '../../components/ui/card';
import SearchBar from '../../components/ui/searchbar';

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Define navigation functions
  const handleExplore = () => {
    // Navigate to car listing page
    window.location.href = '/listing';
  };

  const handleOrder = () => {
    // Navigate to order page
    window.location.href = '/order';
  };

  const handleSearch = (searchQuery) => {
    if (searchQuery && searchQuery.trim()) {
      // Navigate to listing page with search term
      window.location.href = `/listing?search=${encodeURIComponent(searchQuery.trim())}`;
    } else {
      // If empty search, just go to listing page
      window.location.href = '/listing';
    }
  };

  return (
    <div className="bg-black min-h-screen w-full text-white overflow-x-hidden">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 xl:px-24 py-12 md:py-16 lg:py-24 text-center bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-tight">
            Experience the Power of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
              Luxury
            </span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            Discover the perfect combination of design, speed, and craftsmanship.
            Explore our exclusive collection of BMW, Lexus, Lotus, and Rolls Royce.
          </p>

          {/* Search Bar */}
          <div className="mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 border border-gray-800/50">
              <p className="text-gray-300 text-sm md:text-base mb-4 text-center">
                Find your perfect luxury vehicle
              </p>
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center max-w-md sm:max-w-none mx-auto">
            <PrimaryButton 
              label="Explore Cars →" 
              onClick={handleExplore}
              type="primary"
            />
            <PrimaryButton 
              label="Order Now →" 
              onClick={handleOrder}
              type="outline"
            />
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 md:mt-16 lg:mt-20 w-full max-w-5xl mx-auto px-4">
          <img
            src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?auto=format&fit=crop&w=1200&q=80"
            alt="Luxury Car"
            className="rounded-2xl md:rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-700 border border-gray-800"
          />
        </div>
      </section>

      {/* Luxury Car Collection */}
      <section id="features" className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Luxury Collection
            </h3>
            <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Discover our most powerful, luxurious, and breathtaking models.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* BMW M8 Competition */}
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl md:rounded-3xl p-4 md:p-6 hover:transform hover:scale-105 transition-all duration-500 shadow-2xl border border-gray-800 hover:border-gray-600">
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80"
                alt="BMW M8 Competition"
                className="w-full h-40 md:h-48 object-cover rounded-xl md:rounded-2xl mb-4 md:mb-6"
              />
              <h4 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">BMW M8 Competition</h4>
              <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4 leading-relaxed">
                A 617-horsepower twin-turbo V8 masterpiece — pure BMW performance and luxury.
              </p>
              <p className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">₱15,500,000</p>
              <button
                onClick={handleOrder}
                className="w-full py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold text-sm md:text-base"
              >
                Order Now
              </button>
            </div>

            {/* Lexus LFA */}
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl md:rounded-3xl p-4 md:p-6 hover:transform hover:scale-105 transition-all duration-500 shadow-2xl border border-gray-800 hover:border-gray-600">
              <img
                src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80"
                alt="Lexus LFA"
                className="w-full h-40 md:h-48 object-cover rounded-xl md:rounded-2xl mb-4 md:mb-6"
              />
              <h4 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">Lexus LFA</h4>
              <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4 leading-relaxed">
                A legendary 563-horsepower V10 supercar — precision engineering at its finest.
              </p>
              <p className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">₱45,000,000</p>
              <button
                onClick={handleOrder}
                className="w-full py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold text-sm md:text-base"
              >
                Order Now
              </button>
            </div>

            {/* Lotus Evija */}
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl md:rounded-3xl p-4 md:p-6 hover:transform hover:scale-105 transition-all duration-500 shadow-2xl border border-gray-800 hover:border-gray-600 sm:col-span-2 lg:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80"
                alt="Lotus Evija"
                className="w-full h-40 md:h-48 object-cover rounded-xl md:rounded-2xl mb-4 md:mb-6"
              />
              <h4 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">Lotus Evija</h4>
              <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4 leading-relaxed">
                An all-electric hypercar with 1,972 horsepower — the future of performance.
              </p>
              <p className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">₱125,000,000</p>
              <button
                onClick={handleOrder}
                className="w-full py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold text-sm md:text-base"
              >
                Order Now
              </button>
            </div>

            {/* Rolls Royce Cullinan */}
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl p-6 hover:transform hover:scale-105 transition-all duration-500 shadow-2xl border border-gray-800 hover:border-gray-600">
              <img
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80"
                alt="Rolls Royce Cullinan"
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <h4 className="text-2xl font-bold text-white mb-3">Rolls Royce Cullinan</h4>
              <p className="text-gray-400 mb-4 leading-relaxed">
                The ultimate luxury SUV with unparalleled craftsmanship and comfort.
              </p>
              <p className="text-3xl font-bold text-white mb-4">₱32,000,000</p>
              <button
                onClick={handleOrder}
                className="w-full py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold"
              >
                Order Now
              </button>
            </div>

            {/* BMW i8 */}
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl p-6 hover:transform hover:scale-105 transition-all duration-500 shadow-2xl border border-gray-800 hover:border-gray-600">
              <img
                src="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80"
                alt="BMW i8"
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <h4 className="text-2xl font-bold text-white mb-3">BMW i8</h4>
              <p className="text-gray-400 mb-4 leading-relaxed">
                A futuristic hybrid sports car that redefines sustainable performance.
              </p>
              <p className="text-3xl font-bold text-white mb-4">₱18,000,000</p>
              <button
                onClick={handleOrder}
                className="w-full py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold"
              >
                Order Now
              </button>
            </div>

            {/* Lexus LC 500 */}
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl p-6 hover:transform hover:scale-105 transition-all duration-500 shadow-2xl border border-gray-800 hover:border-gray-600">
              <img
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80"
                alt="Lexus LC 500"
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <h4 className="text-2xl font-bold text-white mb-3">Lexus LC 500</h4>
              <p className="text-gray-400 mb-4 leading-relaxed">
                A grand tourer that blends luxury, performance, and timeless elegance.
              </p>
              <p className="text-3xl font-bold text-white mb-4">₱12,500,000</p>
              <button
                onClick={handleOrder}
                className="w-full py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-yellow-600 via-orange-600 to-red-700 text-black text-center py-20 px-6 md:px-12">
        <div className="w-full">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the Power of Luxury
          </h3>
          <p className="mb-10 text-lg text-black/80">
            Discover the perfect combination of design, speed, and craftsmanship.
            Explore our full lineup today.
          </p>
          <div className="flex gap-4 justify-center">
            <PrimaryButton 
              label="Explore Cars →" 
              onClick={handleExplore}
              type="secondary"
            />
            <PrimaryButton 
              label="Order Now →" 
              onClick={handleOrder}
              type="outline"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-gray-400 text-center py-8">
        <p className="text-sm">
          © 2025 AutoLux Premium — Luxury Car Edition.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
