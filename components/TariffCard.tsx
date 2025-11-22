import React from 'react';
import { CarType } from '../types';
import { CheckCircle, IndianRupee } from 'lucide-react';

interface TariffCardProps {
  car: CarType;
  onBook: (car: CarType) => void;
}

const TariffCard: React.FC<TariffCardProps> = ({ car, onBook }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-brand-yellow text-brand-dark px-3 py-1 rounded-full text-xs font-bold">
          {car.seatCount} Seats
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{car.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{car.description}</p>

        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <span className="text-sm font-medium text-gray-600">Rate / Km</span>
            <div className="flex items-center text-lg font-bold text-brand-dark">
              <IndianRupee size={16} />
              {car.pricePerKm}
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle size={12} className="text-green-500" />
              <span>Driver Allowance: ₹{car.driverAllowance}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle size={12} className="text-green-500" />
              <span>Min. Billable: 250 Km / Day</span>
            </div>
             <div className="flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle size={12} className="text-green-500" />
              <span>Toll & Parking Extra</span>
            </div>
          </div>

          <button
            onClick={() => onBook(car)}
            className="w-full mt-4 bg-brand-dark text-white py-2 rounded-lg font-semibold text-sm hover:bg-brand-blue transition-colors"
          >
            Book {car.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TariffCard;