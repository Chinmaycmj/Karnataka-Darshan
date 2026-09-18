import React, { useState, useMemo } from "react";
import { useApp } from "../context/AppContext";
import { BUS_ROUTES_DATA } from "../data/transportRoutes";
import { BusRoute } from "../data/types";
import { BusSeatModal } from "../components/BusSeatModal";
import { 
  Bus, 
  Search, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Wifi, 
  Zap, 
  ArrowRight, 
  Filter, 
  Info, 
  CheckCircle2,
  Calendar,
  Sparkles,
  PhoneCall
} from "lucide-react";

export const TransportPage: React.FC = () => {
  const { language } = useApp();
  const [fromCity, setFromCity] = useState<string>("All");
  const [toCity, setToCity] = useState<string>("All");
  const [selectedServiceType, setSelectedServiceType] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"departure" | "price" | "duration">("departure");
  const [selectedRouteForBooking, setSelectedRouteForBooking] = useState<BusRoute | null>(null);

  // Extract unique from and to cities
  const fromCities = useMemo(() => {
    const cities = new Set<string>();
    BUS_ROUTES_DATA.forEach(r => cities.add(r.fromCity));
    return ["All", ...Array.from(cities).sort()];
  }, []);

  const toCities = useMemo(() => {
    const cities = new Set<string>();
    BUS_ROUTES_DATA.forEach(r => cities.add(r.toCity));
    return ["All", ...Array.from(cities).sort()];
  }, []);

  const serviceTypes = [
    "All",
    "Airavat Club Class",
    "EV Power Plus",
    "Rajahamsa Executive",
    "Non-AC Sleeper"
  ];

  // Filter routes
  const filteredRoutes = useMemo(() => {
    return BUS_ROUTES_DATA.filter(route => {
      if (fromCity !== "All" && route.fromCity !== fromCity) return false;
      if (toCity !== "All" && route.toCity !== toCity) return false;
      if (selectedServiceType !== "All") {
        if (!route.serviceType.toLowerCase().includes(selectedServiceType.toLowerCase())) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price") {
        return a.price - b.price;
      }
      if (sortBy === "departure") {
        return a.departureTime.localeCompare(b.departureTime);
      }
      if (sortBy === "duration") {
        return a.duration.localeCompare(b.duration);
      }
      return 0;
    });
  }, [fromCity, toCity, selectedServiceType, sortBy]);

  const quickOrigins = ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Kalaburagi", "Belagavi"];

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-900 via-amber-900 to-amber-950 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-800/60 border border-red-600/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Bus className="w-3.5 h-3.5" />
            <span>{language === "kn" ? "ಕರ್ನಾಟಕ ರಾಜ್ಯ ರಸ್ತೆ ಸಾರಿಗೆ" : "Official KSRTC & Regional Express Transit"}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white mb-4">
            {language === "kn" 
              ? "ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಬಸ್ ಜಾಲ ಮತ್ತು ಬುಕಿಂಗ್" 
              : "Inter-District KSRTC Bus Transit"}
          </h1>
          <p className="text-amber-100/90 text-base sm:text-lg max-w-3xl leading-relaxed">
            {language === "kn"
              ? "ಕರ್ನಾಟಕದ ಎಲ್ಲಾ 31 ಜಿಲ್ಲೆಗಳನ್ನು ಸಂಪರ್ಕಿಸುವ ಐರಾವತ ಕ್ಲಬ್ ಕ್ಲಾಸ್, ಇವಿ ಪವರ್ ಪ್ಲಸ್ ಮತ್ತು ರಾಜಹಂಸ ಎಕ್ಸಿಕ್ಯೂಟಿವ್ ಬಸ್ಸುಗಳನ್ನು ಸುಲಭವಾಗಿ ಹುಡುಕಿ, ಆಸನ ಆಯ್ಕೆ ಮಾಡಿ ಮುಂಗಡ ಕಾಯ್ದಿರಿಸಿ."
              : "Seamless transit across all 31 Karnataka districts. Experience Airavat Multi-Axle Volvo luxury, zero-emission EV Power Plus, and budget-friendly Rajahamsa coaches with live seat layout selection."}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-amber-800/40 text-left">
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">56+</div>
              <div className="text-xs text-amber-200/80">Scheduled Inter-District Routes</div>
            </div>
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">100%</div>
              <div className="text-xs text-amber-200/80">GPS Live Tracking & Safe Transit</div>
            </div>
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">31</div>
              <div className="text-xs text-amber-200/80">District Bus Terminals Connected</div>
            </div>
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">24x7</div>
              <div className="text-xs text-amber-200/80">Central State Helpline & Support</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Search & Filter Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-5 sm:p-7">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* From City */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-600" />
                  {language === "kn" ? "ಹೊರಡುವ ಸ್ಥಳ (From)" : "Origin City (From)"}
                </span>
              </label>
              <select
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
              >
                {fromCities.map(city => (
                  <option key={city} value={city}>
                    {city === "All" ? "📍 All Origins / ಎಲ್ಲಾ ಸ್ಥಳಗಳು" : `📍 ${city}`}
                  </option>
                ))}
              </select>
            </div>

            {/* To City */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  {language === "kn" ? "ತಲುಪುವ ಸ್ಥಳ (To)" : "Destination City (To)"}
                </span>
              </label>
              <select
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
              >
                {toCities.map(city => (
                  <option key={city} value={city}>
                    {city === "All" ? "🎯 All Destinations / ಎಲ್ಲಾ ಗಮ್ಯಗಳು" : `🎯 ${city}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Bus className="w-3.5 h-3.5 text-emerald-600" />
                  {language === "kn" ? "ಬಸ್ ಮಾದರಿ (Bus Type)" : "Service Class"}
                </span>
              </label>
              <select
                value={selectedServiceType}
                onChange={(e) => setSelectedServiceType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
              >
                {serviceTypes.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-blue-600" />
                  {language === "kn" ? "ವಿಂಗಡಿಸಿ (Sort)" : "Sort Results"}
                </span>
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
              >
                <option value="departure">⏰ Departure Time (Earliest First)</option>
                <option value="price">💰 Price (Lowest First)</option>
                <option value="duration">⚡ Travel Duration</option>
              </select>
            </div>
          </div>

          {/* Quick Origin Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
              {language === "kn" ? "ತ್ವರಿತ ನಗರಗಳು:" : "Popular Hubs:"}
            </span>
            <button
              onClick={() => { setFromCity("All"); setToCity("All"); }}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                fromCity === "All" 
                  ? "bg-amber-600 text-white shadow-sm" 
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Hubs
            </button>
            {quickOrigins.map(origin => (
              <button
                key={origin}
                onClick={() => setFromCity(origin)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  fromCity === origin 
                    ? "bg-red-700 text-white shadow-sm" 
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {origin}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-8 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-800 font-bold text-base sm:text-lg">
              {filteredRoutes.length} {language === "kn" ? "ಬಸ್ ಸೇವೆಗಳು ಲಭ್ಯವಿವೆ" : "KSRTC Scheduled Services Available"}
            </span>
            {(fromCity !== "All" || toCity !== "All" || selectedServiceType !== "All") && (
              <button
                onClick={() => { setFromCity("All"); setToCity("All"); setSelectedServiceType("All"); }}
                className="ml-2 text-xs font-semibold text-amber-700 underline hover:text-amber-800"
              >
                Clear Filters
              </button>
            )}
          </div>
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Govt. Standardized Fares • No Hidden Surcharges</span>
          </div>
        </div>

        {/* Routes Grid / Cards */}
        {filteredRoutes.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
            <Bus className="w-14 h-14 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">No direct KSRTC routes found for this filter</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
              Try resetting your origin or destination filters to see all available inter-district buses.
            </p>
            <button
              onClick={() => { setFromCity("All"); setToCity("All"); setSelectedServiceType("All"); }}
              className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold rounded-xl transition-all"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredRoutes.map((route) => {
              const isEV = route.serviceType.toLowerCase().includes("ev") || route.serviceType.toLowerCase().includes("electric");
              const isAiravat = route.serviceType.toLowerCase().includes("airavat");

              return (
                <div 
                  key={route.id}
                  className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 hover:border-amber-400 shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Left: Bus Operator & Badges */}
                    <div className="space-y-2 lg:w-1/4">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-black tracking-wider uppercase ${
                          isEV 
                            ? "bg-emerald-100 text-emerald-800 border border-emerald-300" 
                            : isAiravat 
                            ? "bg-red-100 text-red-800 border border-red-300" 
                            : "bg-amber-100 text-amber-800 border border-amber-300"
                        }`}>
                          {route.operator}
                        </span>
                        {isEV && (
                          <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <Zap className="w-3 h-3 fill-current" /> EV Zero Emission
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-amber-900 transition-colors">
                        {route.serviceType}
                      </h4>
                      <p className="text-xs text-slate-500 font-mono">
                        Service Code: {route.id}
                      </p>
                    </div>

                    {/* Middle: Departure - Duration - Arrival Timetable */}
                    <div className="flex items-center justify-between sm:justify-start sm:gap-8 flex-1 lg:border-x lg:border-slate-100 lg:px-8">
                      <div>
                        <div className="text-xl sm:text-2xl font-black text-slate-900 font-serif">
                          {route.departureTime}
                        </div>
                        <div className="text-sm font-bold text-slate-700 mt-0.5 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-red-600" />
                          {route.fromCity}
                        </div>
                        <div className="text-xs text-slate-400">Central Bus Stand</div>
                      </div>

                      <div className="flex flex-col items-center px-4">
                        <span className="text-[11px] font-bold text-slate-500 mb-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {route.duration}
                        </span>
                        <div className="relative w-24 sm:w-32 flex items-center">
                          <div className="h-0.5 w-full bg-slate-300"></div>
                          <Bus className="w-4 h-4 text-amber-600 absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-0.5" />
                        </div>
                        <span className="text-[10px] text-emerald-700 font-semibold mt-1">Non-Stop / Express</span>
                      </div>

                      <div>
                        <div className="text-xl sm:text-2xl font-black text-slate-900 font-serif">
                          {route.arrivalTime}
                        </div>
                        <div className="text-sm font-bold text-slate-700 mt-0.5 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-amber-600" />
                          {route.toCity}
                        </div>
                        <div className="text-xs text-slate-400">Main Depot Terminal</div>
                      </div>
                    </div>

                    {/* Right: Amenities, Price & Book Action */}
                    <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4 lg:w-1/4">
                      <div>
                        <div className="text-xs text-slate-400 text-left lg:text-right">Seat Fare from</div>
                        <div className="text-2xl sm:text-3xl font-black text-amber-950 font-serif">
                          ₹{route.price.toLocaleString("en-IN")}
                        </div>
                        <div className="text-[11px] text-emerald-700 font-semibold text-left lg:text-right mt-0.5">
                          {route.seatsAvailable} seats available
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedRouteForBooking(route)}
                        className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-gradient-to-r from-red-800 to-amber-800 hover:from-red-900 hover:to-amber-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                      >
                        <span>Select Seat</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Amenities Row */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                    <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] mr-1">Amenities:</span>
                    {route.amenities.map((amenity, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200 text-slate-700 text-[11px]"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Passenger Information Callout */}
        <div className="mt-12 bg-amber-50/80 rounded-3xl p-6 sm:p-8 border border-amber-200/80">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-500 text-white shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-950 font-serif mb-1">
                {language === "kn" ? "ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಪ್ರಯಾಣಿಕರ ಮಾರ್ಗಸೂಚಿ ಮತ್ತು ಮಾಹಿತಿ" : "Official KSRTC Passenger Travel Advisory"}
              </h3>
              <p className="text-sm text-amber-900/80 leading-relaxed mb-4">
                Yaatri Niwaas integrates directly with the Karnataka State Road Transport Corporation network. All ticket bookings made through Yaatri Niwaas include verified bus passes, real-time dispatch alerts, and complimentary luggage allowance of up to 30 kg per passenger.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-amber-900">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Connecting Shuttle to Yaatri Niwaas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Lady Conductor / Safe Night Travel</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>24/7 Helpline: 1800-425-25555 / 080-49596666</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seat Selection Modal */}
      {selectedRouteForBooking && (
        <BusSeatModal
          route={selectedRouteForBooking}
          onClose={() => setSelectedRouteForBooking(null)}
        />
      )}
    </div>
  );
};
