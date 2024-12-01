import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300 py-4">
      <nav className={`mx-auto max-w-7xl bg-dark/80 backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 ${
        isScrolled ? 'shadow-primary/20' : ''
      }`}>
        <div className="px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <Camera className="h-8 w-8 text-primary-light" />
                <span className="text-xl font-bold text-white">Social Alchemy Labs</span>
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-primary-light transition-colors">Home</Link>
              <Link to="/services" className="text-gray-300 hover:text-primary-light transition-colors">Services</Link>
              <Link to="/testimonials" className="text-gray-300 hover:text-primary-light transition-colors">Testimonials</Link>
              <Link to="/brands" className="text-gray-300 hover:text-primary-light transition-colors">Our Clients</Link>
              <Link 
                to="/contact" 
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-light transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}