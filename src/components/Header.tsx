import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '919666903335';
    const message = 'Hello! I would like to inquire about your construction services. Please provide more information.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:9666903335', '_self');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      {/* Top Bar */}
      <div className={`border-b transition-all duration-500 ${
        isScrolled ? 'border-gray-200 bg-gray-50/80' : 'border-white/20 bg-blue-900/20'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3" />
                <span className={isScrolled ? 'text-gray-600' : 'text-white/90'}>
                  +91 9666903335
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3" />
                <span className={isScrolled ? 'text-gray-600' : 'text-white/90'}>
                  prrinfraprojects@gmail.com
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={handleWhatsAppClick}
                className={`px-4 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                WhatsApp Chat
              </button>
              <button
                onClick={handleCallClick}
                className={`px-4 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className={`relative p-3 rounded-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 ${
              isScrolled 
                ? 'bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg' 
                : 'bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm'
            }`}>
              <Building2 className="h-200 w-200 text-white" />
              <div className="absolute inset-10 bg-gradient-to-br from-orange-600/20 to-orange-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${
                isScrolled 
                  ? 'text-blue-800 group-hover:text-orange-600' 
                  : 'text-white group-hover:text-orange-300'
              }`}>
                PRR INFRA
              </span>
              <span className={`text-sm font-semibold tracking-wider transition-all duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                PROJECTS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-6 py-3 font-semibold transition-all duration-300 rounded-xl group ${
                  location.pathname === item.path
                    ? isScrolled
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-orange-300 bg-white/10'
                    : isScrolled
                    ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                    : 'text-white hover:text-orange-300 hover:bg-white/10'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-8 ${
                  location.pathname === item.path ? 'w-8' : ''
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/booking"
              className={`relative px-8 py-3 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden group ${
                isScrolled
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl'
                  : 'bg-gradient-to-r from-white to-gray-100 text-blue-800 shadow-lg hover:shadow-xl'
              }`}
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${
              isScrolled 
                ? 'text-gray-700 bg-gray-100 hover:bg-gray-200' 
                : 'text-white bg-white/10 hover:bg-white/20'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl mt-4 p-6 shadow-2xl border border-gray-100">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 font-semibold rounded-xl transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              <Link
                to="/booking"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105"
              >
                Book Now
              </Link>
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    handleWhatsAppClick();
                    setIsMenuOpen(false);
                  }}
                  className="flex-1 bg-green-500 text-white font-medium py-2 px-4 rounded-lg text-center transition-all duration-300 hover:bg-green-600"
                >
                  WhatsApp
                </button>
                <button
                  onClick={() => {
                    handleCallClick();
                    setIsMenuOpen(false);
                  }}
                  className="flex-1 bg-blue-500 text-white font-medium py-2 px-4 rounded-lg text-center transition-all duration-300 hover:bg-blue-600"
                >
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;