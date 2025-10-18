import React, { useState, useEffect } from 'react';
import NavBar from '../../components/ui/navbar';
import PrimaryButton from '../../components/ui/primarybutton';
import SearchBar from '../../components/ui/searchbar';

const Listing = () => {
  const [filteredCars, setFilteredCars] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [initialSearchTerm, setInitialSearchTerm] = useState('');
  const carsPerPage = 6;

  // Handle URL search parameters on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    
    if (searchParam && searchParam.trim()) {
      setInitialSearchTerm(searchParam.trim());
      handleSearch(searchParam.trim());
    }
  }, []);

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
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
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
      image: 'https://wallpapers.com/images/hd/lexus-lfa-2500-x-1670-wallpaper-howld4wdtk3fjsr5.jpg',
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
      image: 'https://cafrealvolante.files.wordpress.com/2019/12/guangzhou-auto-show-lotus-evija-2.jpg',
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
      image: 'https://imgs.search.brave.com/WVeAayfJ8Hc4EWRqfbWusO0R8SFteMSlV6tupGXyOEw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC81LzMv/Ny8xNzU0NTk4LTM4/NDB4MjE2MC1kZXNr/dG9wLTRrLXJvbGxz/LXJveWNlLWN1bGxp/bmFuLXdhbGxwYXBl/ci5qcGc',
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
      image: 'https://imgs.search.brave.com/wXmf5XJOOOkR7ccAvqlo98F5y-X15t5RGY-TuFS0HFM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM0LzA3/LzkzLzM0MDc5MzBm/ZDNhYmMyZmFlZmE2/NDVjNjhlNjE0YTMw/LmpwZw',
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
      image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?auto=format&fit=crop&w=800&q=80',
      features: ['Premium Interior', 'Advanced Safety', 'Sport+ Mode', 'Luxury Comfort']
    },
    // Additional 20 cars
    {
      id: 7,
      name: 'BMW X6 M',
      brand: 'BMW',
      type: 'Performance SUV',
      price: 22000000,
      horsepower: 617,
      engine: '4.4L Twin-Turbo V8',
      description: 'High-performance SUV combining luxury with track-ready dynamics.',
      image: 'https://imgs.search.brave.com/YZ6zOXmda1R12DVWv6D9Z4k3jDrmNaM_IRgtRzt6bH8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYm13/LXg2LW0tcGljdHVy/ZXMtMmowMnI1czkz/dmowd3psYy5qcGc',
      features: ['M Sport Package', 'Adaptive Suspension', 'Performance Brakes', 'Sport Seats']
    },
    {
      id: 8,
      name: 'Lexus LS 500',
      brand: 'Lexus',
      type: 'Luxury Sedan',
      price: 8500000,
      horsepower: 416,
      engine: '3.5L Twin-Turbo V6',
      description: 'Flagship luxury sedan with exceptional comfort and advanced technology.',
      image: 'https://imgs.search.brave.com/kKe_pUOKdNIYLRN0HfyYMt7SjnoaI_lqgIsdN8jUz2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8yMDI1/LWxleHVzLWxzLTUw/MC1mLXNwb3J0LWF3/ZC0xMDEtNjdlMzBh/YjE5YWE2MC5qcGc_/Y3JvcD0wLjYyMHh3/OjAuNTI0eGg7MC4y/ODB4dywwLjM4OXho/JnJlc2l6ZT0xMjAw/Oio',
      features: ['Executive Package', 'Mark Levinson Audio', 'Air Suspension', 'Massage Seats']
    },
    {
      id: 9,
      name: 'Lotus Elise',
      brand: 'Lotus',
      type: 'Sports Car',
      price: 9800000,
      horsepower: 218,
      engine: '1.8L Supercharged I4',
      description: 'Pure driving experience with exceptional handling and lightweight design.',
      image: 'https://imgs.search.brave.com/GegGtoBnbc_p7ShkwQDaW2rl0PAU515KcBt900hySF8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzljL2My/L2I1LzljYzJiNWZm/ZGMzNDk0MGFiNGU3/NzgwYjM0OGFhZWM0/LmpwZw',
      features: ['Lightweight Chassis', 'Track-Focused', 'Manual Transmission', 'Racing Pedigree']
    },
    {
      id: 10,
      name: 'Rolls Royce Phantom',
      brand: 'Rolls Royce',
      type: 'Ultra Luxury Sedan',
      price: 58000000,
      horsepower: 563,
      engine: '6.8L Twin-Turbo V12',
      description: 'The pinnacle of luxury motoring with unmatched refinement.',
      image: 'https://imgs.search.brave.com/Z0GbhunJ1UV0ae2qKaHLgRov1DBcz6R8PhKwUby4Jyk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTYy/MTc5MzIvcGhvdG8v/c2luZ2Fwb3JlLWEt/cm9sbHMtcm95Y2Ut/cGhhbnRvbS1jb3Vw/ZS1pcy10YWtlbi1v/bi1hLXRlc3QtZHJp/dmUtaW4tc2luZ2Fw/b3JlLW9uLW1vbmRh/eS1zZXB0LTE1Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1x/Z2l0QWNlNV9RSVRs/bnlka1FVTGZDR2Jh/dVY4eGlLLWxKNzM4/bEFpZXpnPQ',
      features: ['Spirit of Ecstasy', 'Bespoke Interior', 'Whisper Quiet', 'Handcrafted Details']
    },
    {
      id: 11,
      name: 'BMW M5 CS',
      brand: 'BMW',
      type: 'Performance Sedan',
      price: 19800000,
      horsepower: 627,
      engine: '4.4L Twin-Turbo V8',
      description: 'Track-focused sedan with motorsport DNA and luxury comfort.',
      image: 'https://imgs.search.brave.com/T2QBeKBdVZZB3Lnnl6TgnOggFX1uAEjndH_pcLhvQVA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNzg0/MTg2Ny5qcGc',
      features: ['Carbon Fiber Parts', 'Sport Suspension', 'Track Package', 'Limited Edition']
    },
    {
      id: 12,
      name: 'Lexus RX 450h',
      brand: 'Lexus',
      type: 'Hybrid SUV',
      price: 6800000,
      horsepower: 308,
      engine: '3.5L V6 Hybrid',
      description: 'Luxury hybrid SUV combining efficiency with premium comfort.',
      image: 'https://imgs.search.brave.com/6yC1-biwPKtUGKFjhnTTu5bNXFDCUtn9QVPU4IlmnPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rdmRi/aWwtaW1hZ2VzLmlt/Z2l4Lm5ldC83MjU3/NDMwLzM2MjMxNDdl/LmpwZw',
      features: ['Hybrid Power', 'All-Wheel Drive', 'Premium Audio', 'Advanced Safety']
    },
    {
      id: 13,
      name: 'Lotus Exige',
      brand: 'Lotus',
      type: 'Track Car',
      price: 13500000,
      horsepower: 410,
      engine: '3.5L Supercharged V6',
      description: 'Extreme performance car designed for track domination.',
      image: 'https://imgs.search.brave.com/5dLGAhgKqCMZlln5yPUvqwAtyQpBsqOFI1wKDj1x5Cc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzU4L0xvdHVzX0V4/aWdlX0N1cF8yNDAu/anBn',
      features: ['Aerodynamic Package', 'Track Suspension', 'Lightweight Body', 'Racing Interior']
    },
    {
      id: 14,
      name: 'Rolls Royce Wraith',
      brand: 'Rolls Royce',
      type: 'Grand Tourer',
      price: 42000000,
      horsepower: 624,
      engine: '6.6L Twin-Turbo V12',
      description: 'Powerful grand tourer with dramatic design and luxurious appointments.',
      image: 'https://imgs.search.brave.com/ySXsJFvBF-_U2sZ9uv6AuOliROWH3AKtMuE2HEi3HzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmJyYW1hbnJvbGxz/LXJveWNlcGFsbWJl/YWNoLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wMi9S/b2xscy1Sb3ljZS1X/cmFpdGguanBn',
      features: ['Fastback Design', 'Starlight Roof', 'Powerful V12', 'Bespoke Options']
    },
    {
      id: 15,
      name: 'BMW Z4 M40i',
      brand: 'BMW',
      type: 'Roadster',
      price: 7200000,
      horsepower: 382,
      engine: '3.0L Turbo I6',
      description: 'Open-air driving pleasure with sporty performance and luxury.',
      image: 'https://imgs.search.brave.com/2nA8o0AI6rstf63DWfjcEC9ZgYfPxs1oNCIrlnj7Ljg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8yMDIz/LWJtdy16NC1tNDBp/LTEzNS02NGE2Zjhj/YzE3MGE4LmpwZz9j/cm9wPTAuNjMzeHc6/MC41MzR4aDswLjIw/OHh3LDAuMjk4eGgm/cmVzaXplPTEyMDA6/Kg',
      features: ['Convertible Top', 'Sport Package', 'M Performance', 'Premium Interior']
    },
    {
      id: 16,
      name: 'Lexus GS F',
      brand: 'Lexus',
      type: 'Performance Sedan',
      price: 11200000,
      horsepower: 467,
      engine: '5.0L V8',
      description: 'High-performance sedan with F Sport heritage and luxury comfort.',
      image: 'https://imgs.search.brave.com/jRUXOM8_sEEhYqA9UvY8L0JUszHrL3PbfEgkGYBa2pQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/MWp1NWZnbTh3MGo4/MS5qcGc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9NzVlZGQzYWU3/ODQyODE5ODc5ZDk0/MjE2ZWM4YzllNmMw/ZTg0ZDkwMw',
      features: ['F Sport Package', 'Performance Suspension', 'Track Tuning', 'Sport Interior']
    },
    {
      id: 17,
      name: 'Lotus Emira',
      brand: 'Lotus',
      type: 'Sports Car',
      price: 16800000,
      horsepower: 400,
      engine: '3.5L Supercharged V6',
      description: 'Modern sports car with classic Lotus DNA and contemporary luxury.',
      image: 'https://imgs.search.brave.com/0jL09L1_B-s4GMaKY5VMs7eAtPTv6tOSCzt6wH6ShE4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYXIt/aW1hZ2VzLmJhdWVy/c2VjdXJlLmNvbS93/cC1pbWFnZXMvMTMz/MzAvNDgweDI3MC9s/b3R1c19lbWlyYV9y/ZXZpZXdfY2xhcmtf/ZWRpdGlvbl8xLmpw/Zz9tb2RlPXBhZCZx/dWFsaXR5PTkw',
      features: ['Modern Design', 'Track Performance', 'Lightweight Construction', 'Premium Materials']
    },
    {
      id: 18,
      name: 'Rolls Royce Dawn',
      brand: 'Rolls Royce',
      type: 'Luxury Convertible',
      price: 48000000,
      horsepower: 563,
      engine: '6.6L Twin-Turbo V12',
      description: 'Ultra-luxury convertible offering open-air motoring at its finest.',
      image: 'https://imgs.search.brave.com/dsDXlS8qWXPcvw-Bhmo2gHP_dGyOSXMrsAjQJ1m-A_8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/Y2xhc3Npc3RhdGlj/LmRlL2FwaS92MS9t/by1wcm9kL2ltYWdl/cy9lOC9lODc5ZjRk/Mi1mZTA5LTQ2NWIt/YTQxOS1iNDliNjUx/ZWU0MDA_cnVsZT1t/by02NDAuanBn',
      features: ['Convertible Luxury', 'Effortless Power', 'Bespoke Craftsmanship', 'Whisper Quiet']
    },
    {
      id: 19,
      name: 'BMW M2 CS',
      brand: 'BMW',
      type: 'Compact Sports Car',
      price: 14500000,
      horsepower: 444,
      engine: '3.0L Twin-Turbo I6',
      description: 'Compact powerhouse with racing DNA and precision handling.',
      image: 'https://imgs.search.brave.com/o0AWOucv-iCHZK6dZRBAqVdv2GT37hi0M2YZmd49AWA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9wOTA2/MDA4NzItaGlnaHJl/cy02ODM2MzU2MjNk/MmMzLmpwZz9jcm9w/PTEuMDB4dzowLjc1/MnhoOzAsMC4wMjE2/eGgmcmVzaXplPTY0/MDoq',
      features: ['M Performance', 'Carbon Fiber', 'Track Package', 'Manual Option']
    },
    {
      id: 20,
      name: 'Lexus RC F',
      brand: 'Lexus',
      type: 'Performance Coupe',
      price: 9800000,
      horsepower: 472,
      engine: '5.0L V8',
      description: 'Athletic coupe with F Sport performance and luxury refinement.',
      image: 'https://imgs.search.brave.com/Qjf4CiMQ7dJVxw92NrA1eTQ72MXMy6BjLTa-CGW3QKo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sZXh1/c2VudGh1c2lhc3Qu/Y29tL2ltYWdlcy93/ZWJsb2cvMTgtMDEt/MTUtbGV4dXMtcmMt/Zi10cmFjay1lZGl0/aW9uLmpwZw',
      features: ['F Sport Design', 'Track-Tuned Suspension', 'Performance Brakes', 'Sport Interior']
    },
    {
      id: 21,
      name: 'BMW X7 M50i',
      brand: 'BMW',
      type: 'Luxury SUV',
      price: 28000000,
      horsepower: 523,
      engine: '4.4L Twin-Turbo V8',
      description: 'Full-size luxury SUV with commanding presence and premium comfort.',
      image: 'https://imgs.search.brave.com/nELGnA1_v8QSDqGttih5YpwuTM7U-oC7ylmZ8QzZRZ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2l4c3RhdGlj/LmNvbS9tZWRpYS81/OTRhMGRfMmIyYTI0/YWFmNzg1NDRjOWE2/ZDE2Mjc4ZTZhOTBl/Yjh-bXYyLmpwZy92/MS9maWxsL3dfNDUw/LGhfMjU0LGFsX2Ms/cV84MCx1c21fMC42/Nl8xLjAwXzAuMDEs/ZW5jX2F2aWYscXVh/bGl0eV9hdXRvL0lt/YWdlLWVtcHR5LXN0/YXRlX2VkaXRlZC5q/cGc',
      features: ['7-Seat Luxury', 'Premium Package', 'Air Suspension', 'Executive Lounge']
    },
    {
      id: 22,
      name: 'Lexus LX 600',
      brand: 'Lexus',
      type: 'Luxury SUV',
      price: 18500000,
      horsepower: 409,
      engine: '3.5L Twin-Turbo V6',
      description: 'Full-size luxury SUV built for adventure and executive comfort.',
      image: 'https://images7.alphacoders.com/118/1182389.jpg',
      features: ['Off-Road Capable', 'Luxury Interior', 'Advanced Technology', 'Premium Audio']
    },
    {
      id: 23,
      name: 'Lotus Esprit',
      brand: 'Lotus',
      type: 'Classic Sports Car',
      price: 25000000,
      horsepower: 350,
      engine: '3.5L Turbo V8',
      description: 'Iconic sports car with timeless design and thrilling performance.',
      image: 'https://bringatrailer.com/wp-content/uploads/2024/05/2003_lotus_esprit-v8-final-edition_2004-lotus-esprit-blue-tan-159-33886.jpg',
      features: ['Classic Design', 'Turbo Power', 'Lightweight', 'Racing Heritage']
    },
    {
      id: 24,
      name: 'Rolls Royce Ghost',
      brand: 'Rolls Royce',
      type: 'Luxury Sedan',
      price: 38000000,
      horsepower: 563,
      engine: '6.75L Twin-Turbo V12',
      description: 'Contemporary luxury sedan with effortless performance and refinement.',
      image: 'https://cdn.motor1.com/images/mgl/qkog4y/s1/spofec-rolls-royce-black-badge-ghost.jpg',
      features: ['Modern Luxury', 'Effortless Power', 'Advanced Technology', 'Bespoke Interior']
    },
    {
      id: 25,
      name: 'BMW i4 M50',
      brand: 'BMW',
      type: 'Electric Performance',
      price: 13800000,
      horsepower: 536,
      engine: 'Dual Electric Motors',
      description: 'Electric performance sedan combining sustainability with M power.',
      image: 'https://tse2.mm.bing.net/th/id/OIP.gBhNsLz4cRa2bOEb13RqvQHaEA?pid=Api&P=0&h=180',
      features: ['All-Electric', 'M Performance', 'Fast Charging', 'Zero Emissions']
    },
    {
      id: 26,
      name: 'Lexus ES 300h',
      brand: 'Lexus',
      type: 'Hybrid Sedan',
      price: 4800000,
      horsepower: 215,
      engine: '2.5L Hybrid I4',
      description: 'Efficient luxury sedan with hybrid technology and premium comfort.',
      image: 'https://images.hgmsites.net/hug/lexus-es_100789279_h.jpg',
      features: ['Hybrid Efficiency', 'Luxury Comfort', 'Advanced Safety', 'Premium Audio']
    }
  ];

  // Search function
  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredCars(null);
      setCurrentPage(1);
      return;
    }
    
    const filtered = allCars.filter(car => 
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCars(filtered);
    setCurrentPage(1);
  };

  // Handle URL search parameters on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    
    if (searchParam && searchParam.trim()) {
      setInitialSearchTerm(searchParam.trim());
      handleSearch(searchParam.trim());
    }
  }, []);

  const displayCars = filteredCars || allCars;
  
  // Pagination calculations
  const totalPages = Math.ceil(displayCars.length / carsPerPage);
  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;
  const currentCars = displayCars.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderCar = (carName) => {
    window.location.href = `/order?car=${encodeURIComponent(carName)}`;
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen w-full text-white overflow-x-hidden">
      <NavBar />

      <section className="w-full px-4 md:px-8 lg:px-12 xl:px-20 py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white mb-6 tracking-tight">
              Luxury Car Collection
            </h1>
            <div className="absolute -top-2 md:-top-4 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
            Discover our meticulously curated collection of premium vehicles from the world's most prestigious automotive brands
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl lg:max-w-2xl mx-auto mb-6 md:mb-8 px-4">
            <SearchBar onSearch={handleSearch} initialValue={initialSearchTerm} />
          </div>
        </div>

        {/* Results Counter and Pagination Info */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-800 mx-4 md:mx-0">
          <div className="mb-3 md:mb-0 text-center md:text-left">
            <p className="text-gray-300 text-sm md:text-lg font-medium">
              Showing <span className="text-white font-bold">{startIndex + 1}-{Math.min(endIndex, displayCars.length)}</span> of <span className="text-white font-bold">{displayCars.length}</span> {displayCars.length === 1 ? 'vehicle' : 'vehicles'}
            </p>
          </div>
          <div className="text-gray-300 text-sm md:text-lg font-medium">
            Page <span className="text-white font-bold">{currentPage}</span> of <span className="text-white font-bold">{totalPages}</span>
          </div>
        </div>

        {/* Car Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16">
          {currentCars.map((car, index) => (
            <div 
              key={car.id} 
              className="group relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-gray-700/50 hover:border-gray-500/50 transition-all duration-700 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5 mx-4 md:mx-0"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10 flex flex-col gap-6 md:gap-8">
                {/* Car Image */}
                <div className="w-full">
                  <div className="relative overflow-hidden rounded-xl md:rounded-2xl">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    {/* Price Badge */}
                    <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-black/80 backdrop-blur-sm text-white px-3 md:px-4 py-2 rounded-lg md:rounded-xl border border-gray-600">
                      <p className="text-sm md:text-lg font-bold">₱{(car.price / 1000000).toFixed(1)}M</p>
                    </div>
                  </div>
                </div>
                
                {/* Car Details */}
                <div className="w-full flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <span className="text-xs md:text-sm text-gray-200 bg-gradient-to-r from-gray-700 to-gray-800 px-3 md:px-4 py-1 md:py-2 rounded-full border border-gray-600 font-medium">{car.brand}</span>
                      <span className="text-xs md:text-sm text-gray-200 bg-gradient-to-r from-gray-700 to-gray-800 px-3 md:px-4 py-1 md:py-2 rounded-full border border-gray-600 font-medium">{car.type}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-gray-100 transition-colors duration-300">{car.name}</h3>
                    <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{car.description}</p>
                    
                    {/* Specifications */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6">
                      <div className="bg-gray-800/50 rounded-lg md:rounded-xl p-3 md:p-4 border border-gray-700">
                        <p className="text-xs md:text-sm text-gray-400 mb-1 font-medium">Power Output</p>
                        <p className="text-white font-bold text-sm md:text-lg">{car.horsepower} HP</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg md:rounded-xl p-3 md:p-4 border border-gray-700">
                        <p className="text-xs md:text-sm text-gray-400 mb-1 font-medium">Engine</p>
                        <p className="text-white font-bold text-sm md:text-lg">{car.engine}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4 md:mb-6">
                      <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3 font-medium">Premium Features</p>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {car.features.map((feature, index) => (
                          <span key={index} className="text-xs md:text-sm text-gray-200 bg-gradient-to-r from-gray-800 to-gray-700 px-2 md:px-3 py-1 md:py-2 rounded-md md:rounded-lg border border-gray-600 hover:border-gray-500 transition-colors duration-300">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price and Order Button */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-700 gap-3 sm:gap-0">
                    <div>
                      <p className="text-xs md:text-sm text-gray-400 mb-1">Starting at</p>
                      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">₱{car.price.toLocaleString()}</p>
                    </div>
                    <button
                      onClick={() => handleOrderCar(car.name)}
                      className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-white to-gray-100 text-black rounded-xl md:rounded-2xl hover:from-gray-100 hover:to-white transition-all duration-300 font-bold text-sm md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-300 min-h-[44px]"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 border border-gray-700/50 mb-8 md:mb-12 mx-4 md:mx-0">
            <div className="flex flex-col items-center space-y-4 md:space-y-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-300">Navigate Collection</h3>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-0 sm:space-x-3 w-full">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl md:rounded-2xl font-semibold transition-all duration-300 transform min-h-[44px] ${
                    currentPage === 1 
                      ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed border border-gray-700' 
                      : 'bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-100 hover:to-white hover:scale-105 shadow-lg border border-gray-300'
                  }`}
                >
                  <span>←</span>
                  <span>Previous</span>
                </button>

                {/* Page Numbers - Desktop Only */}
                <div className="hidden sm:flex space-x-2">
                  {Array.from({ length: totalPages }, (_, index) => {
                    const pageNumber = index + 1;
                    const isCurrentPage = pageNumber === currentPage;
                    
                    // Show only a window of pages around current page
                    if (totalPages <= 7 || 
                        pageNumber === 1 || 
                        pageNumber === totalPages || 
                        (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2)) {
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl font-bold transition-all duration-300 transform hover:scale-110 ${
                            isCurrentPage
                              ? 'bg-gradient-to-r from-white to-gray-100 text-black shadow-lg border border-gray-300'
                              : 'bg-gray-800/80 text-white hover:bg-gray-700 border border-gray-600 hover:border-gray-500'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    } else if (pageNumber === currentPage - 3 || pageNumber === currentPage + 3) {
                      return (
                        <span key={pageNumber} className="flex items-center px-2 md:px-3 py-3 text-gray-500 font-bold">
                          ⋯
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* Mobile Page Indicator */}
                <div className="sm:hidden flex items-center gap-3 bg-gray-800/50 rounded-xl px-4 py-2 border border-gray-600">
                  <span className="text-gray-300 text-sm font-medium">Page</span>
                  <span className="text-white font-bold text-lg">{currentPage}</span>
                  <span className="text-gray-300 text-sm">of</span>
                  <span className="text-white font-bold text-lg">{totalPages}</span>
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl md:rounded-2xl font-semibold transition-all duration-300 transform min-h-[44px] ${
                    currentPage === totalPages
                      ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed border border-gray-700'
                      : 'bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-100 hover:to-white hover:scale-105 shadow-lg border border-gray-300'
                  }`}
                >
                  <span>Next</span>
                  <span>→</span>
                </button>
              </div>

              {/* Page Info */}
              <div className="text-xs md:text-sm text-gray-400 text-center px-4">
                Jump to any page to explore our complete collection
              </div>
            </div>
          </div>
        )}

        {/* No Results Message */}
        {displayCars.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">No Vehicles Found</h3>
              <p className="text-gray-400 text-lg mb-6">
                We couldn't find any vehicles matching your search criteria.
              </p>
              <button
                onClick={() => {
                  setFilteredCars(null);
                  setCurrentPage(1);
                }}
                className="px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-black rounded-2xl hover:from-gray-100 hover:to-white transition-all duration-300 font-bold transform hover:scale-105 shadow-lg"
              >
                View All Vehicles
              </button>
            </div>
          </div>
        )}

        {/* Back to Home Button */}
        <div className="text-center">
          <PrimaryButton
            label="← Back to Home"
            onClick={() => window.location.href = '/'}
            type="outline"
          />
        </div>
      </section>

      <footer className="w-full bg-black text-gray-400 text-center py-8 border-t border-gray-800">
        <p className="text-sm">
          © 2025 AutoLux Premium — Luxury Car Edition.
        </p>
      </footer>
    </div>
  );
};

export default Listing;
