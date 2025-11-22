import React from 'react';
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { CONTACT_NUMBER, CONTACT_EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-brand-yellow p-2 rounded-full text-brand-dark">
                <Car size={24} />
              </div>
              <span className="text-2xl font-bold text-white">Travel4Taxi</span>
            </div>
            <p className="text-sm text-gray-400">
              Premium one-way and round-trip drop taxi service across South India. We ensure a safe and memorable journey.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-brand-yellow transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-yellow transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-yellow transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-1 after:bg-brand-yellow">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-brand-yellow transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand-yellow transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-brand-yellow transition-colors">About Us</a></li>
              <li><a href="#tariff" className="hover:text-brand-yellow transition-colors">Tariff</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-1 after:bg-brand-yellow">
              Popular Routes
            </h3>
            <ul className="space-y-3 text-sm">
              <li><span className="hover:text-brand-yellow cursor-pointer">Chennai to Bangalore</span></li>
              <li><span className="hover:text-brand-yellow cursor-pointer">Coimbatore to Chennai</span></li>
              <li><span className="hover:text-brand-yellow cursor-pointer">Bangalore to Mysore</span></li>
              <li><span className="hover:text-brand-yellow cursor-pointer">Trichy to Madurai</span></li>
              <li><span className="hover:text-brand-yellow cursor-pointer">Salem to Coimbatore</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-10 after:h-1 after:bg-brand-yellow">
              Get In Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand-yellow mt-1" />
                <span>{CONTACT_NUMBER}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-yellow mt-1" />
                <span>{CONTACT_EMAIL}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-yellow mt-1" />
                <span>
                  123, Travel Plaza, Main Road,<br />
                  Chennai, Tamil Nadu - 600001
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Travel4Taxi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;