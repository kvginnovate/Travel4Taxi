import React from 'react';
import { ShieldCheck, Clock, CreditCard, Headphones, Map } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={32} className="text-brand-yellow" />,
    title: 'Safe & Secure',
    description: 'Verified drivers and GPS tracked vehicles for your safety.'
  },
  {
    icon: <Clock size={32} className="text-brand-yellow" />,
    title: 'On-Time Pickup',
    description: 'We value your time. Punctual pickups guaranteed.'
  },
  {
    icon: <CreditCard size={32} className="text-brand-yellow" />,
    title: 'Transparent Billing',
    description: 'No hidden costs. Pay what you see in the estimate.'
  },
  {
    icon: <Headphones size={32} className="text-brand-yellow" />,
    title: '24/7 Support',
    description: 'Our support team is always available to assist you.'
  },
   {
    icon: <Map size={32} className="text-brand-yellow" />,
    title: 'One Way Drops',
    description: 'Pay only for the distance traveled on one-way trips.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose <span className="text-brand-blue">Travel4Taxi?</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We provide the best-in-class outstation taxi service with a focus on reliability, comfort, and affordability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 group">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-blue">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
