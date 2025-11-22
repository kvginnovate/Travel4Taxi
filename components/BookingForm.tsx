import React, { useState, useEffect } from 'react';
import { TripType, BookingFormData, RouteInsight } from '../types';
import { Calendar, MapPin, Phone, Clock, ArrowRight, Sparkles, Info } from 'lucide-react';
import { getRouteInsights } from '../services/geminiService';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    source: '',
    destination: '',
    mobile: '',
    date: '',
    time: '',
    tripType: TripType.ONE_WAY
  });

  const [insights, setInsights] = useState<RouteInsight | null>(null);
  const [loadingInsights, setLoadingInsights] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTripTypeChange = (type: TripType) => {
    setFormData(prev => ({ ...prev, tripType: type }));
  };

  const fetchInsights = async () => {
    if (formData.source.length > 3 && formData.destination.length > 3) {
      setLoadingInsights(true);
      const data = await getRouteInsights(formData.source, formData.destination);
      setInsights(data);
      setLoadingInsights(false);
    }
  };

  // Debounce insight fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      if (formData.source && formData.destination) {
        fetchInsights();
      }
    }, 1500);
    return () => clearTimeout(timer);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.source, formData.destination]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `New Booking Request:\nType: ${formData.tripType}\nFrom: ${formData.source}\nTo: ${formData.destination}\nDate: ${formData.date}\nTime: ${formData.time}\nPhone: ${formData.mobile}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-md w-full mx-auto border border-gray-100">
      {/* Tabs */}
      <div className="flex">
        <button
          onClick={() => handleTripTypeChange(TripType.ONE_WAY)}
          className={`flex-1 py-4 text-center font-bold text-sm transition-colors ${
            formData.tripType === TripType.ONE_WAY
              ? 'bg-brand-yellow text-brand-dark'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
        >
          ONE WAY
        </button>
        <button
          onClick={() => handleTripTypeChange(TripType.ROUND_TRIP)}
          className={`flex-1 py-4 text-center font-bold text-sm transition-colors ${
            formData.tripType === TripType.ROUND_TRIP
              ? 'bg-brand-yellow text-brand-dark'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
        >
          ROUND TRIP
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500 uppercase">From</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              name="source"
              value={formData.source}
              onChange={handleChange}
              placeholder="Enter Pickup City"
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all text-gray-800 placeholder-gray-400"
              required
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500 uppercase">To</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-brand-blue" size={20} />
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Enter Drop City"
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all text-gray-800 placeholder-gray-400"
              required
            />
          </div>
        </div>

        {/* Gemini Insights Preview */}
        {(loadingInsights || insights) && (
          <div className="bg-blue-50 rounded-lg p-3 text-xs border border-blue-100 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center gap-2 text-blue-800 font-bold mb-1">
              <Sparkles size={14} />
              <span>AI Trip Insights</span>
            </div>
            {loadingInsights ? (
              <p className="text-blue-600">Calculating best route info...</p>
            ) : (
              <div className="space-y-1 text-blue-700">
                 <div className="flex justify-between font-semibold">
                    <span>{insights?.distance}</span>
                    <span>{insights?.duration}</span>
                 </div>
                 <p className="opacity-90 leading-tight">{insights?.description}</p>
              </div>
            )}
          </div>
        )}

        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500 uppercase">Mobile Number</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="10 Digit Mobile Number"
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all text-gray-800 placeholder-gray-400"
              pattern="[0-9]{10}"
              required
            />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="space-y-1 flex-1">
            <label className="text-xs font-semibold text-gray-500 uppercase">Pick Up Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full pl-10 pr-2 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none text-gray-800"
                required
              />
            </div>
          </div>
          <div className="space-y-1 w-1/3">
            <label className="text-xs font-semibold text-gray-500 uppercase">Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full pl-10 pr-2 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none text-gray-800"
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-brand-dark text-white py-3.5 rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group mt-4"
        >
          <span>GET ESTIMATE & BOOK</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-[10px] text-center text-gray-400 flex items-center justify-center gap-1">
          <Info size={12} /> By booking, you agree to our T&C
        </p>
      </form>
    </div>
  );
};

export default BookingForm;
