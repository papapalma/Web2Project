import React, { useState, useCallback } from 'react';
import NavBar from '../../components/ui/navbar';
import PrimaryButton from '../../components/ui/primarybutton';
import Card from '../../components/ui/card';
import SearchBar from '../../components/ui/searchbar';
import { useNavigation } from '../../hooks/useNavigation';
import Modal from '../../components/ui/Modal';
import SidePanel from '../../components/ui/SidePanel';

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { navigateTo } = useNavigation();

  // Define navigation functions using hooks
  const handleExplore = useCallback(() => {
    navigateTo('/listing');
  }, [navigateTo]);

  const handleOrder = useCallback(() => {
    navigateTo('/order');
  }, [navigateTo]);

  const handleSearch = useCallback((searchQuery) => {
    if (searchQuery && searchQuery.trim()) {
      // Navigate to listing page with search term
      navigateTo(`/listing?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      // If empty search, just go to listing page
      navigateTo('/listing');
    }
  }, [navigateTo]);

  // UI state for modal and side panel
  const [selectedCar, setSelectedCar] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Car data with detailed specs
  const carData = [
    {
      id: 1,
      name: "BMW M8 Competition",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
      description: "A 617-horsepower twin-turbo V8 masterpiece — pure BMW performance and luxury.",
      price: 15500000,
      specs: {
        engine: "4.4L Twin-Turbo V8",
        power: "617 hp",
        torque: "553 lb-ft",
        acceleration: "0-60 mph in 3.0s",
        topSpeed: "190 mph (limited)",
        transmission: "8-speed M Steptronic",
        drivetrain: "M xDrive AWD"
      },
      features: ['All-Wheel Drive', 'Carbon Fiber Interior', 'Sport Exhaust', 'M Performance Parts']
    },
    {
      id: 2,
      name: "Lexus LFA",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80",
      description: "A legendary 563-horsepower V10 supercar — precision engineering at its finest.",
      price: 45000000,
      specs: {
        engine: "4.8L V10",
        power: "563 hp",
        torque: "354 lb-ft",
        acceleration: "0-60 mph in 3.6s",
        topSpeed: "202 mph",
        transmission: "6-speed Automated Sequential",
        drivetrain: "RWD"
      },
      features: ['Carbon Fiber Body', 'Track-Tuned Suspension', 'Limited Edition', 'Racing Heritage']
    },
    {
      id: 3,
      name: "Lotus Evija",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80",
      description: "An all-electric hypercar with 1,972 horsepower — the future of performance.",
      price: 125000000,
      specs: {
        power: "1,972 hp",
        torque: "1,254 lb-ft",
        acceleration: "0-60 mph in < 3.0s",
        topSpeed: "200+ mph",
        range: "250 miles (est.)",
        batteryCapacity: "70 kWh",
        motors: "4 electric motors"
      },
      features: ['All-Electric', 'Aerodynamic Design', 'Advanced Materials', 'Zero Emissions']
    },
    {
      id: 4,
      name: "Rolls Royce Cullinan",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
      description: "The ultimate luxury SUV with unparalleled craftsmanship and comfort.",
      price: 32000000,
      specs: {
        engine: "6.75L Twin-Turbo V12",
        power: "563 hp",
        torque: "627 lb-ft",
        acceleration: "0-60 mph in 4.5s",
        transmission: "8-speed ZF",
        drivetrain: "AWD",
        groundClearance: "9.1 inches"
      },
      features: ['Handcrafted Interior', 'Air Suspension', 'Starlight Headliner', 'Bespoke Options']
    },
    {
      id: 5,
      name: "BMW i8",
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80",
      description: "A futuristic hybrid sports car that redefines sustainable performance.",
      price: 18000000,
      specs: {
        powerSystem: "Hybrid (3-cyl + Electric)",
        combinedPower: "369 hp",
        acceleration: "0-60 mph in 4.2s",
        electricRange: "23 miles",
        batteryCapacity: "11.6 kWh",
        construction: "Carbon Fiber",
        transmission: "6-speed automatic"
      },
      features: ['Hybrid Technology', 'Butterfly Doors', 'Carbon Fiber', 'Eco-Friendly']
    },
    {
      id: 6,
      name: "Lexus LC 500",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
      description: "A grand tourer that blends luxury, performance, and timeless elegance.",
      price: 12500000,
      specs: {
        engine: "5.0L V8",
        power: "471 hp",
        torque: "398 lb-ft",
        acceleration: "0-60 mph in 4.4s",
        transmission: "10-speed Direct-Shift",
        drivetrain: "RWD",
        suspension: "Adaptive Variable Suspension"
      },
      features: ['Premium Interior', 'Advanced Safety', 'Sport+ Mode', 'Luxury Comfort']
    }
  ];

  return (
    <div className="bg-black min-h-screen w-full text-white overflow-x-hidden with-mobile-footer">
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
            {carData.map((car) => (
              <div 
                key={car.id}
                onClick={() => setSelectedCar(car)}
                className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-4 hover:transform hover:scale-105 transition-all duration-500 shadow-2xl border border-gray-800 hover:border-gray-600 cursor-pointer group"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover rounded-xl mb-4 group-hover:opacity-90 transition-opacity"
                />
                <h4 className="text-xl font-bold text-white text-center">{car.name}</h4>
              </div>
            ))}
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

      {/* Car Details - Modal on Desktop, Bottom Sheet on Mobile */}
      {!isMobile ? (
        <Modal 
          isOpen={selectedCar !== null} 
          onClose={() => setSelectedCar(null)} 
          title={selectedCar?.name || "Car Details"}
        >
          {selectedCar && (
            <div className="space-y-6 max-h-[70vh] overflow-y-auto">
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
              <div className="space-y-4">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">{selectedCar.description}</p>
                <p className="text-2xl md:text-3xl font-bold text-white">₱{selectedCar.price.toLocaleString()}</p>
                
                <div className="space-y-3">
                  <h4 className="text-lg md:text-xl font-semibold text-white border-b border-gray-700 pb-2">Specifications</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Object.entries(selectedCar.specs).map(([key, value]) => (
                      <div key={key} className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
                        <div className="text-gray-400 text-xs md:text-sm capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="text-white font-medium text-sm md:text-base mt-1">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedCar.features && (
                  <div className="space-y-3">
                    <h4 className="text-lg md:text-xl font-semibold text-white border-b border-gray-700 pb-2">Premium Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCar.features.map((feature, index) => (
                        <span 
                          key={index} 
                          className="text-xs md:text-sm text-gray-200 bg-gradient-to-r from-gray-800 to-gray-700 px-3 py-2 rounded-lg border border-gray-600"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex gap-3 pt-4 border-t border-gray-700">
                  <button
                    onClick={handleOrder}
                    className="flex-1 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300 font-semibold text-sm md:text-base"
                  >
                    Order Now
                  </button>
                  <button
                    onClick={() => setSelectedCar(null)}
                    className="flex-1 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 font-semibold text-sm md:text-base border border-gray-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </Modal>
      ) : (
        <SidePanel 
          isOpen={selectedCar !== null} 
          onClose={() => setSelectedCar(null)}
          title={selectedCar?.name || "Car Details"}
          isMobileBottomSheet={true}
        >
          {selectedCar && (
            <div className="space-y-4">
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="space-y-4">
                <p className="text-gray-300 text-base leading-relaxed">{selectedCar.description}</p>
                <p className="text-2xl font-bold text-white">₱{selectedCar.price.toLocaleString()}</p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Specifications</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(selectedCar.specs).map(([key, value]) => (
                      <div key={key} className="bg-gray-800/50 p-2.5 rounded-lg border border-gray-700">
                        <div className="text-gray-400 text-xs capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="text-white font-medium text-sm mt-1">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedCar.features && (
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Premium Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCar.features.map((feature, index) => (
                        <span 
                          key={index} 
                          className="text-xs text-gray-200 bg-gradient-to-r from-gray-800 to-gray-700 px-2.5 py-1.5 rounded-lg border border-gray-600"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex gap-3 pt-4 border-t border-gray-700 sticky bottom-0 bg-gray-900 pb-4">
                  <button
                    onClick={handleOrder}
                    className="flex-1 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300 font-semibold"
                  >
                    Order Now
                  </button>
                  <button
                    onClick={() => setSelectedCar(null)}
                    className="flex-1 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 font-semibold border border-gray-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </SidePanel>
      )}
    </div>
  );
};

export default LandingPage;
