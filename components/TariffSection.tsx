import React from 'react';
import { CAR_TYPES } from '../constants';
import TariffCard from './TariffCard';
import { CarType } from '../types';

const TariffSection: React.FC = () => {
  const handleBook = (car: CarType) => {
    console.log("Selected car type for booking:", car);
    // In a full implementation, this would scroll to the booking form
    // and pre-fill the vehicle selection, or open a booking modal.
  };

  return (
    <section id="tariff" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our <span className="text-brand-blue">Tariffs</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose from our wide range of fleet to suit your travel needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAR_TYPES.map((car) => (
            <TariffCard key={car.id} car={car} onBook={handleBook} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TariffSection;