import React, { useState, useEffect } from 'react';
import NavBar from '../../components/ui/navbar';
import PrimaryButton from '../../components/ui/primarybutton';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carType: '',
    message: '',
  });

  const [selectedCar, setSelectedCar] = useState(null);

  // All available cars for selection
  const allCars = [
    {
      id: 1,
      name: 'BMW M8 Competition',
      brand: 'BMW',
      type: 'Coupe',
      price: 15500000,
      horsepower: 617,
      engine: '4.4L Twin-Turbo V8',
      description: 'A 617-horsepower twin-turbo V8 masterpiece — pure BMW performance and luxury.',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
      features: ['All-Wheel Drive', 'Carbon Fiber Interior', 'Sport Exhaust', 'M Performance Parts']
    },
    {
      id: 2,
      name: 'Lexus LFA',
      brand: 'Lexus',
      type: 'Supercar',
      price: 45000000,
      horsepower: 563,
      engine: '4.8L V10',
      description: 'A legendary 563-horsepower V10 supercar — precision engineering at its finest.',
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80',
      features: ['Carbon Fiber Body', 'Track-Tuned Suspension', 'Limited Edition', 'Racing Heritage']
    },
    {
      id: 3,
      name: 'Lotus Evija',
      brand: 'Lotus',
      type: 'Electric Hypercar',
      price: 125000000,
      horsepower: 1972,
      engine: 'Quad Electric Motors',
      description: 'An all-electric hypercar with 1,972 horsepower — the future of performance.',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80',
      features: ['All-Electric', 'Aerodynamic Design', 'Advanced Materials', 'Zero Emissions']
    },
    {
      id: 4,
      name: 'Rolls Royce Cullinan',
      brand: 'Rolls Royce',
      type: 'Luxury SUV',
      price: 32000000,
      horsepower: 563,
      engine: '6.75L Twin-Turbo V12',
      description: 'The ultimate luxury SUV with unparalleled craftsmanship and comfort.',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
      features: ['Handcrafted Interior', 'Air Suspension', 'Starlight Headliner', 'Bespoke Options']
    },
    {
      id: 5,
      name: 'BMW i8',
      brand: 'BMW',
      type: 'Hybrid Sports Car',
      price: 18000000,
      horsepower: 369,
      engine: '1.5L Turbo + Electric',
      description: 'A futuristic hybrid sports car that redefines sustainable performance.',
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80',
      features: ['Hybrid Technology', 'Butterfly Doors', 'Carbon Fiber', 'Eco-Friendly']
    },
    {
      id: 6,
      name: 'Lexus LC 500',
      brand: 'Lexus',
      type: 'Grand Tourer',
      price: 12500000,
      horsepower: 471,
      engine: '5.0L V8',
      description: 'A grand tourer that blends luxury, performance, and timeless elegance.',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
      features: ['Premium Interior', 'Advanced Safety', 'Sport+ Mode', 'Luxury Comfort']
    }
  ];

  useEffect(() => {
    // Get car from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const carName = urlParams.get('car');
    
    if (carName) {
      const car = allCars.find(c => c.name === decodeURIComponent(carName));
      if (car) {
        setSelectedCar(car);
        setFormData(prev => ({ ...prev, carType: car.name }));
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCarSelection = (e) => {
    const carName = e.target.value;
    const car = allCars.find(c => c.name === carName);
    setSelectedCar(car);
    setFormData({
      ...formData,
      carType: carName,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
    alert(`Thank you for your order! We will contact you soon about your ${selectedCar?.name || 'selected vehicle'}.`);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      carType: '',
      message: '',
    });
    setSelectedCar(null);
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen w-full text-white overflow-x-hidden">
      <NavBar />

      <section className="w-full px-4 md:px-8 lg:px-12 xl:px-20 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="relative">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white mb-6 tracking-tight">
                Place Your Order
              </h1>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to own your dream car? Complete your order details below and our luxury automotive specialists will contact you shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
            {/* Car Information Section */}
            <div className="order-2 xl:order-1">
              <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-gray-700/50 hover:border-gray-500/50 transition-all duration-700">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8 flex items-center gap-3">
                  <span className="w-2 h-6 lg:h-8 bg-gradient-to-b from-white to-gray-300 rounded-full"></span>
                  Selected Vehicle
                </h2>
                
                {selectedCar ? (
                  <div className="space-y-6 lg:space-y-8">
                    {/* Car Image */}
                    <div className="relative overflow-hidden rounded-2xl group">
                      <img
                        src={selectedCar.image}
                        alt={selectedCar.name}
                        className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      {/* Price Badge */}
                      <div className="absolute top-4 lg:top-6 right-4 lg:right-6 bg-black/80 backdrop-blur-sm text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl lg:rounded-2xl border border-gray-600">
                        <p className="text-xs lg:text-sm text-gray-300 mb-1">Total Price</p>
                        <p className="text-lg lg:text-2xl font-bold">₱{(selectedCar.price / 1000000).toFixed(1)}M</p>
                      </div>
                    </div>
                    
                    {/* Car Details */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2 lg:gap-3 mb-4 lg:mb-6">
                        <span className="text-xs lg:text-sm text-gray-200 bg-gradient-to-r from-gray-700 to-gray-800 px-3 lg:px-4 py-1 lg:py-2 rounded-full border border-gray-600 font-medium">
                          {selectedCar.brand}
                        </span>
                        <span className="text-xs lg:text-sm text-gray-200 bg-gradient-to-r from-gray-700 to-gray-800 px-3 lg:px-4 py-1 lg:py-2 rounded-full border border-gray-600 font-medium">
                          {selectedCar.type}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">{selectedCar.name}</h3>
                      <p className="text-gray-300 mb-6 lg:mb-8 leading-relaxed text-base lg:text-lg">{selectedCar.description}</p>
                      
                      {/* Specifications */}
                      <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
                        <div className="bg-gray-800/50 rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                          <p className="text-xs lg:text-sm text-gray-400 mb-1 lg:mb-2 font-medium">Power Output</p>
                          <p className="text-lg lg:text-2xl font-bold text-white">{selectedCar.horsepower} HP</p>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-300">
                          <p className="text-xs lg:text-sm text-gray-400 mb-1 lg:mb-2 font-medium">Engine</p>
                          <p className="text-lg lg:text-2xl font-bold text-white">{selectedCar.engine}</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6 lg:mb-8">
                        <p className="text-base lg:text-lg text-gray-300 mb-3 lg:mb-4 font-semibold">Premium Features</p>
                        <div className="grid grid-cols-1 gap-2 lg:gap-3">
                          {selectedCar.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm lg:text-base text-gray-200 bg-gray-800/30 p-2 lg:p-3 rounded-lg lg:rounded-xl border border-gray-700/50">
                              <span className="w-2 lg:w-3 h-2 lg:h-3 bg-gradient-to-r from-white to-gray-300 rounded-full mr-3 lg:mr-4 flex-shrink-0"></span>
                              <span className="font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Final Price */}
                      <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-2 border-gray-600 rounded-xl lg:rounded-2xl p-4 lg:p-6">
                        <p className="text-base lg:text-lg text-gray-300 mb-2 font-medium">Investment Total</p>
                        <p className="text-3xl lg:text-5xl font-bold text-white">₱{selectedCar.price.toLocaleString()}</p>
                        <p className="text-xs lg:text-sm text-gray-400 mt-2">Price includes premium delivery and setup</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 lg:py-20">
                    <div className="w-16 lg:w-24 h-16 lg:h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 border border-gray-600">
                      <svg className="w-8 lg:w-12 h-8 lg:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6" />
                      </svg>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3">No Vehicle Selected</h3>
                    <p className="text-gray-400 text-base lg:text-lg">Please choose a vehicle from the dropdown to continue</p>
                  </div>
                )}
              </div>
            </div>

            {/* Order Form Section */}
            <div className="order-1 xl:order-2">
              <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-gray-700/50 hover:border-gray-500/50 transition-all duration-700">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8 flex items-center gap-3">
                  <span className="w-2 h-6 lg:h-8 bg-gradient-to-b from-white to-gray-300 rounded-full"></span>
                  Order Information
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                  {/* Car Selection */}
                  <div>
                    <label htmlFor="carSelection" className="block text-white font-semibold mb-3 lg:mb-4 text-base lg:text-lg">
                      Select Your Vehicle *
                    </label>
                    <div className="relative">
                      <select
                        id="carSelection"
                        value={selectedCar?.name || ''}
                        onChange={handleCarSelection}
                        required
                        className="w-full px-4 lg:px-6 py-4 lg:py-5 bg-gray-800/80 border-2 border-gray-600 rounded-xl lg:rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 text-white text-base lg:text-lg font-medium backdrop-blur-sm hover:border-gray-500"
                      >
                        <option value="">Choose your dream vehicle...</option>
                        {allCars.map((car) => (
                          <option key={car.id} value={car.name} className="bg-gray-800 text-white">
                            {car.name} - ₱{(car.price / 1000000).toFixed(1)}M
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 lg:pr-6 pointer-events-none">
                        <svg className="w-5 lg:w-6 h-5 lg:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Customer Information */}
                  <div className="space-y-4 lg:space-y-6">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-200 border-b border-gray-700 pb-2 lg:pb-3">Contact Details</h3>
                    
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold mb-2 lg:mb-3 text-base lg:text-lg">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 lg:px-6 py-4 lg:py-5 bg-gray-800/80 border-2 border-gray-600 rounded-xl lg:rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 text-white placeholder-gray-400 text-base lg:text-lg backdrop-blur-sm hover:border-gray-500"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white font-semibold mb-2 lg:mb-3 text-base lg:text-lg">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 lg:px-6 py-4 lg:py-5 bg-gray-800/80 border-2 border-gray-600 rounded-xl lg:rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 text-white placeholder-gray-400 text-base lg:text-lg backdrop-blur-sm hover:border-gray-500"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-white font-semibold mb-2 lg:mb-3 text-base lg:text-lg">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 lg:px-6 py-4 lg:py-5 bg-gray-800/80 border-2 border-gray-600 rounded-xl lg:rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 text-white placeholder-gray-400 text-base lg:text-lg backdrop-blur-sm hover:border-gray-500"
                        placeholder="+63 9XX XXX XXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white font-semibold mb-2 lg:mb-3 text-base lg:text-lg">
                        Additional Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 lg:px-6 py-4 lg:py-5 bg-gray-800/80 border-2 border-gray-600 rounded-xl lg:rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300 resize-none text-white placeholder-gray-400 text-base lg:text-lg backdrop-blur-sm hover:border-gray-500"
                        placeholder="Any special requests, financing questions, or additional information..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-6 lg:pt-8 border-t border-gray-700">
                    <button
                      type="submit"
                      disabled={!selectedCar}
                      className={`flex-1 py-4 lg:py-5 rounded-xl lg:rounded-2xl font-bold text-lg lg:text-xl transition-all duration-300 transform ${
                        selectedCar 
                          ? 'bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-100 hover:to-white hover:scale-105 shadow-lg border border-gray-300' 
                          : 'bg-gray-700/50 text-gray-500 cursor-not-allowed border border-gray-600'
                      }`}
                    >
                      {selectedCar ? `🚗 Order ${selectedCar.name}` : 'Select a Vehicle First'}
                    </button>
                    <button
                      type="button"
                      onClick={() => window.location.href = '/listing'}
                      className="px-6 lg:px-8 py-4 lg:py-5 bg-gray-800/80 text-white rounded-xl lg:rounded-2xl border-2 border-gray-600 hover:bg-gray-700/80 hover:border-gray-500 transition-all duration-300 font-semibold text-base lg:text-lg backdrop-blur-sm"
                    >
                      ← Back to Cars
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center bg-gray-900/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-gray-700/50">
              <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-br from-white to-gray-300 rounded-full mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                <span className="text-black font-bold text-lg lg:text-xl">✓</span>
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-white mb-2">Secure Ordering</h3>
              <p className="text-sm lg:text-base text-gray-400">Your information is protected with enterprise-grade security</p>
            </div>
            <div className="text-center bg-gray-900/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-gray-700/50">
              <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-br from-white to-gray-300 rounded-full mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                <span className="text-black font-bold text-lg lg:text-xl">24</span>
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-white mb-2">Quick Response</h3>
              <p className="text-sm lg:text-base text-gray-400">Our specialists respond within 24 hours</p>
            </div>
            <div className="text-center bg-gray-900/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-gray-700/50">
              <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-br from-white to-gray-300 rounded-full mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                <span className="text-black font-bold text-lg lg:text-xl">🏆</span>
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-white mb-2">Premium Service</h3>
              <p className="text-sm lg:text-base text-gray-400">White-glove delivery and setup included</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-gradient-to-r from-gray-900 to-black text-gray-400 text-center py-8 lg:py-12 border-t border-gray-800/50 mt-12 lg:mt-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h4 className="text-lg lg:text-xl font-semibold text-white mb-3 lg:mb-4">AutoLux Premium</h4>
          <p className="text-base lg:text-lg text-gray-300 mb-3 lg:mb-4">Luxury Car Edition — Where Dreams Meet Reality</p>
          <p className="text-xs lg:text-sm text-gray-500">
            © 2025 AutoLux Premium. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Order;
