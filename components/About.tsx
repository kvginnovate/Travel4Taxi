import React from 'react';
import { Target, Eye, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-yellow rounded-tl-[2rem] z-0 opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-blue rounded-br-[2rem] z-0 opacity-60"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1511527844068-006b95d162c2?auto=format&fit=crop&w=800&q=80"
                alt="Travel4Taxi Fleet"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                 <p className="text-white font-bold text-lg flex items-center gap-2">
                    <Users className="text-brand-yellow" /> 50,000+ Happy Passengers
                 </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
                <h4 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">Our Story</h4>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Redefining <span className="text-brand-yellow">Outstation Travel</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                Travel4Taxi was born from a simple need: transparent, reliable, and affordable intercity travel. We recognized that customers were paying for round trips when they only needed a drop. We changed that. Today, we are a leading name in one-way drop taxi services across South India.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue mb-4">
                  <Target size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  To provide accessible, safe, and premium quality transportation services that connect cities and people.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center text-brand-dark mb-4">
                  <Eye size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  To be the most customer-centric taxi service provider in India, setting benchmarks in safety and comfort.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 pt-4 border-t border-gray-200">
                <div>
                    <h4 className="text-3xl font-bold text-gray-900">2018</h4>
                    <p className="text-sm text-gray-500">Founded</p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-gray-900">500+</h4>
                    <p className="text-sm text-gray-500">Drivers</p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-gray-900">100%</h4>
                    <p className="text-sm text-gray-500">Satisfaction</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;