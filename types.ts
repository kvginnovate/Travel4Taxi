export enum TripType {
  ONE_WAY = 'ONE_WAY',
  ROUND_TRIP = 'ROUND_TRIP'
}

export interface BookingFormData {
  source: string;
  destination: string;
  mobile: string;
  date: string;
  time: string;
  tripType: TripType;
}

export interface CarType {
  id: string;
  name: string;
  image: string;
  pricePerKm: number;
  seatCount: number;
  description: string;
  driverAllowance?: number;
}

export interface RouteInsight {
  distance: string;
  duration: string;
  description: string;
  highlights: string[];
}
