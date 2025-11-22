import React, { useState } from 'react';
import { Phone, Menu, X, Car } from 'lucide-react';
import { CONTACT_NUMBER } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brand-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-brand-yellow p-2 rounded-full text-brand-dark">
              <Car size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wide text-brand-yellow">Travel4Taxi</span>
              <span className="text-xs text-gray-400 tracking-wider">MILES OF SMILES</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-brand-yellow transition-colors text-sm font-medium">HOME</a>
            <a href="#services" className="hover:text-brand-yellow transition-colors text-sm font-medium">SERVICES</a>
            <a href="#about" className="hover:text-brand-yellow transition-colors text-sm font-medium">ABOUT</a>
            <a href="#tariff" className="hover:text-brand-yellow transition-colors text-sm font-medium">TARIFF</a>
            <a href="#contact" className="hover:text-brand-yellow transition-colors text-sm font-medium">CONTACT</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href={`tel:${CONTACT_NUMBER}`} className="flex items-center gap-2 bg-brand-yellow text-brand-dark px-4 py-2 rounded-full font-bold hover:bg-yellow-400 transition-all transform hover:scale-105">
              <Phone size={18} />
              <span>{CONTACT_NUMBER}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <nav className="flex flex-col p-4 space-y-4">
            <a href="#home" className="text-white hover:text-brand-yellow" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#services" className="text-white hover:text-brand-yellow" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" className="text-white hover:text-brand-yellow" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#tariff" className="text-white hover:text-brand-yellow" onClick={() => setIsMenuOpen(false)}>Tariff</a>
            <a href={`tel:${CONTACT_NUMBER}`} className="flex items-center gap-2 text-brand-yellow font-bold">
              <Phone size={18} /> Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;