import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // WhatsApp redirect function
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/919035948632`, '_blank');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-focus search when opened
  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchOpen]);

  const menuItems = [
    { 
      name: 'Home', 
      path: '/',
      dropdown: null
    },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: null
    },
    { 
      name: 'Portfolio', 
      path: '/portfolio',
      dropdown: null
    },
    { 
      name: 'About Us', 
      path: '/about',
      dropdown: null
    },
    { 
      name: 'Contact', 
      path: '/contact',
      dropdown: null
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-archivo w-full`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center py-4 w-full">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src="https://i.postimg.cc/Pr28Q6Qm/feswgfew-Photoroom.png" 
                alt="Suba Designs Logo"
                className="h-16 md:h-20 w-auto transition-all duration-300 group-hover:scale-105 brightness-100 contrast-125"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center -ml-12">
              <div className="bg-[#D4AF37]/30 px-10 py-5 rounded-full flex space-x-5">
                {menuItems.map((item) => (
                  <div key={item.name} className="relative group" ref={item.dropdown ? dropdownRef : null}>
                    <div className="flex items-center">
                      <Link
                        to={item.path}
                        className={`transition-colors duration-200 font-medium flex items-center ${
                          isActive(item.path)
                            ? 'text-[#D4AF37] font-semibold'
                            : 'text-gray-900 hover:text-gray-700'
                        }`}
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span className="tracking-wide">{item.name}</span>
                      </Link>
                      {item.dropdown && (
                        <button 
                          onClick={() => toggleDropdown(item.name)}
                          className="ml-1 focus:outline-none text-gray-900 hover:text-gray-700"
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                      )}
                    </div>

                    {/* Dropdown menu */}
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                      >
                        <div className="py-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className={`block px-4 py-2 text-sm ${
                                isActive(subItem.path)
                                  ? 'bg-gray-100 text-gray-900 font-medium'
                                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                              }`}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full text-gray-900 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* WhatsApp button - Desktop */}
              <button 
                onClick={handleWhatsAppClick}
                className="p-2 rounded-full text-green-600 hover:text-green-700 hover:bg-green-100 transition-colors hidden md:block"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-6 w-6" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-full text-gray-900 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <form onSubmit={handleSearch} className="py-2">
                  <div className="relative">
                    <input
                      ref={searchRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search designs, products..."
                      className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent font-archivo text-gray-800 placeholder-gray-400"
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 overflow-hidden font-archivo"
              >
                <nav className="py-4 space-y-2 px-4">
                  <div className="bg-[#D4AF37]/10 p-4 rounded-lg">
                    {menuItems.map((item) => (
                      <div key={item.name} className="mb-2 last:mb-0">
                        <div className="flex items-center justify-between">
                          <Link
                            to={item.path}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                            className={`block w-full text-left py-2 transition-colors duration-200 ${
                              isActive(item.path)
                                ? 'text-white font-semibold bg-[#D4AF37] px-4 rounded'
                                : 'text-gray-900 hover:bg-[#D4AF37]/20 px-4 rounded'
                            }`}
                          >
                            {item.name}
                          </Link>
                          {item.dropdown && (
                            <button 
                              onClick={() => toggleDropdown(item.name)}
                              className="p-2 focus:outline-none text-gray-900 hover:text-gray-700"
                            >
                              <ChevronDown className={`h-4 w-4 transition-transform ${
                                activeDropdown === item.name ? 'rotate-180' : ''
                              }`} />
                            </button>
                          )}
                        </div>

                        {/* Mobile dropdown */}
                        {item.dropdown && activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-2 bg-white/80 rounded-lg"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
                                className={`block px-4 py-2 text-sm ${
                                  isActive(subItem.path)
                                    ? 'text-gray-900 font-medium bg-gray-100 rounded'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded'
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Floating WhatsApp button for mobile */}
        <div className="fixed bottom-6 right-6 z-40 md:hidden">
          <button 
            onClick={handleWhatsAppClick}
            className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="h-8 w-8" />
            <span className="sr-only">WhatsApp</span>
          </button>
        </div>
      </header>

      {/* Global styles with hidden scrollbar */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap');
        html {
          overflow-y: scroll;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }
        html::-webkit-scrollbar {
          width: 0;
          height: 0;
          display: none; /* Chrome, Safari, Opera */
        }
        body {
          font-family: 'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          overflow-x: hidden;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        body::-webkit-scrollbar {
          display: none;
        }
        .font-archivo {
          font-family: 'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          letter-spacing: 0.01em;
        }
      `}</style>
    </>
  );
};

export default Header;