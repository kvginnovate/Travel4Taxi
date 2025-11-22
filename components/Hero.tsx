import React from 'react';
import BookingForm from './BookingForm';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen md:min-h-[650px] flex items-center py-12 md:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80"
          alt="Highway"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-brand-dark/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-6">
            <div className="inline-block bg-brand-yellow text-brand-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
              #1 Trusted Outstation Taxi
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Journey, <br />
              <span className="text-brand-yellow">Our Priority</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
              Book one-way and round-trip outstation cabs at the lowest prices.
              Professional drivers, clean cars, and transparent billing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <span className="text-brand-yellow font-bold">✓</span> No Hidden Charges
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <span className="text-brand-yellow font-bold">✓</span> 24/7 Support
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 lg:w-5/12">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
