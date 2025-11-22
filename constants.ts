import { CarType } from './types';

export const CAR_TYPES: CarType[] = [
  {
    id: 'hatchback',
    name: 'Mini / Hatchback',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=300&q=80',
    pricePerKm: 13,
    seatCount: 4,
    description: 'Compact and comfortable for small families.',
    driverAllowance: 300
  },
  {
    id: 'sedan',
    name: 'Sedan (Dzire/Etios)',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=300&q=80',
    pricePerKm: 14,
    seatCount: 4,
    description: 'Spacious sedan for a comfortable journey.',
    driverAllowance: 300
  },
  {
    id: 'suv',
    name: 'SUV (Ertiga/Xylo)',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=300&q=80',
    pricePerKm: 19,
    seatCount: 6,
    description: 'Perfect for larger groups and extra luggage.',
    driverAllowance: 400
  },
  {
    id: 'innova',
    name: 'Innova Crysta',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=300&q=80',
    pricePerKm: 24,
    seatCount: 7,
    description: 'Premium comfort for long distance travel.',
    driverAllowance: 500
  }
];

export const CONTACT_NUMBER = "+91 98765 43210";
export const CONTACT_EMAIL = "booking@travel4taxi.in";
