import React, { useState, useMemo, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { BUS_ROUTES_DATA } from "../data/transportRoutes";
import { BUS_STANDS_DIRECTORY, BusStandInfo, getBusStandByCity } from "../data/busStandsData";
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
  PhoneCall,
  ClipboardList,
  Compass,
  Building2,
  Phone,
  AlertCircle,
  ExternalLink,
  ChevronRight
} from "lucide-react";

export const TransportPage: React.FC = () => {
  const { language, transportFilter, setTransportFilter } = useApp();
  const [activeTab, setActiveTab] = useState<"booking" | "timetables">("booking");
  const [fromCity, setFromCity] = useState<string>("All");
  const [toCity, setToCity] = useState<string>("All");
  const [selectedServiceType, setSelectedServiceType] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"departure" | "price" | "duration">("departure");
  const [selectedRouteForBooking, setSelectedRouteForBooking] = useState<BusRoute | null>(null);

  // Timetable board state
  const [selectedStandId, setSelectedStandId] = useState<string>("hubballi-cbs");
  const [selectedStandRegion, setSelectedStandRegion] = useState<string>("All");
  const [standSearch, setStandSearch] = useState<string>("");
  const [timetableSearch, setTimetableSearch] = useState<string>("");

  // Handle cross-page navigation preselection
  useEffect(() => {
    if (transportFilter) {
      if (transportFilter.tab) setActiveTab(transportFilter.tab);
      if (transportFilter.fromCity) setFromCity(transportFilter.fromCity);
      if (transportFilter.toCity) setToCity(transportFilter.toCity);
      if (transportFilter.standId) {
        setSelectedStandId(transportFilter.standId);
        setActiveTab("timetables");
      }
      setTransportFilter(null);
    }
  }, [transportFilter, setTransportFilter]);

  // Extract unique origins and destinations
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

  // Compute available destinations and counts from currently selected origin
  const destinationCountsForOrigin = useMemo(() => {
    const map = new Map<string, number>();
    BUS_ROUTES_DATA.forEach(r => {
      if (fromCity === "All" || r.fromCity === fromCity) {
        map.set(r.toCity, (map.get(r.toCity) || 0) + 1);
      }
    });
    return map;
  }, [fromCity]);

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
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "departure") return a.departureTime.localeCompare(b.departureTime);
      if (sortBy === "duration") return a.duration.localeCompare(b.duration);
      return 0;
    });
  }, [fromCity, toCity, selectedServiceType, sortBy]);

  // If user searched a non-direct combination, find other routes from that origin
  const alternativeRoutesFromOrigin = useMemo(() => {
    if (fromCity === "All") return [];
    return BUS_ROUTES_DATA.filter(r => r.fromCity === fromCity);
  }, [fromCity]);

  // Filtered bus stands by region & search
  const filteredBusStands = useMemo(() => {
    return BUS_STANDS_DIRECTORY.filter(s => {
      if (selectedStandRegion !== "All" && s.region !== selectedStandRegion) return false;
      if (standSearch.trim()) {
        const q = standSearch.toLowerCase();
        return s.city.toLowerCase().includes(q) || 
               s.name.toLowerCase().includes(q) || 
               s.districtName.toLowerCase().includes(q) ||
               s.division.toLowerCase().includes(q);
      }
      return true;
    });
  }, [selectedStandRegion, standSearch]);

  // Current bus stand for timetable board
  const activeBusStand = useMemo(() => {
    return BUS_STANDS_DIRECTORY.find(bs => bs.id === selectedStandId) || BUS_STANDS_DIRECTORY[0];
  }, [selectedStandId]);

  // Filtered timetable schedules
  const filteredSchedules = useMemo(() => {
    if (!activeBusStand) return [];
    return activeBusStand.schedules.filter(s => {
      if (!timetableSearch.trim()) return true;
      const query = timetableSearch.toLowerCase();
      return (
        s.destination.toLowerCase().includes(query) ||
        s.serviceType.toLowerCase().includes(query) ||
        s.viaRoute.toLowerCase().includes(query) ||
        s.serviceNumber.toLowerCase().includes(query) ||
        s.operator.toLowerCase().includes(query)
      );
    });
  }, [activeBusStand, timetableSearch]);

  const quickOrigins = ["Hubballi", "Bengaluru", "Mysuru", "Mangaluru", "Belagavi", "Kalaburagi", "Shivamogga"];

  const handleBookFromTimetable = (originCity: string, destinationCity: string) => {
    setFromCity(originCity);
    setToCity(destinationCity);
    setActiveTab("booking");
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  const switchToTimetableForCity = (city: string) => {
    const stand = getBusStandByCity(city);
    if (stand) {
      setSelectedStandId(stand.id);
    }
    setActiveTab("timetables");
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-950 via-amber-900 to-stone-950 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-800/80 border border-red-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Bus className="w-3.5 h-3.5" />
              <span>{language === "kn" ? "ಅಧಿಕೃತ ಸಾರಿಗೆ ಜಾಲ" : "Official Inter-District Transit Network"}</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/10 text-amber-200 border border-white/15">
              KSRTC • NWKRTC (ಹುಬ್ಬಳ್ಳಿ) • KKRTC (ಕಲಬುರಗಿ)
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white mb-4">
            {language === "kn" 
              ? "ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಮತ್ತು ವಾಯವ್ಯ ಕರ್ನಾಟಕ ಸಾರಿಗೆ ಜಾಲ" 
              : "Karnataka Inter-District Bus Network & Schedules"}
          </h1>
          
          <p className="text-amber-100/90 text-sm sm:text-base max-w-3xl leading-relaxed">
            {language === "kn"
              ? "ಹುಬ್ಬಳ್ಳಿ, ಬೆಂಗಳೂರು, ಮೈಸೂರು, ಮಂಗಳೂರು, ಬೆಳಗಾವಿ, ಕಲಬುರಗಿ ಸೇರಿದಂತೆ ರಾಜ್ಯದ ಎಲ್ಲಾ 31 ಜಿಲ್ಲೆಗಳನ್ನು ಸಂಪರ್ಕಿಸುವ ಅಧಿಕೃತ ಬಸ್ ವೇಳಾಪಟ್ಟಿ, ಐರಾವತ ವೋಲ್ವೋ, ಇವಿ ಪವರ್ ಪ್ಲಸ್ ಮತ್ತು ರಾಜಹಂಸ ಬಸ್ಸುಗಳ ನೇರ ಸೀಟು ಕಾಯ್ದಿರಿಸುವಿಕೆ."
              : "Comprehensive bus schedules and seat booking across all 31 Karnataka districts. Direct access to NWKRTC Hubballi, KSRTC South & Coast, and KKRTC Kalyana Karnataka official timetables and express departures."}
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-amber-800/40 text-left">
            <div className="bg-black/25 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-price">{BUS_ROUTES_DATA.length}+</div>
              <div className="text-xs text-amber-200/80">Direct Inter-District Services</div>
            </div>
            <div className="bg-black/25 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-price">31</div>
              <div className="text-xs text-amber-200/80">District Bus Stands Connected</div>
            </div>
            <div className="bg-black/25 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-price">3</div>
              <div className="text-xs text-amber-200/80">State Transport Divisions</div>
            </div>
            <div className="bg-black/25 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-price">24x7</div>
              <div className="text-xs text-amber-200/80">Central Control & Enquiry</div>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab("booking")}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "booking"
                  ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 scale-105"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
              }`}
            >
              <Bus className="w-4 h-4" />
              <span>{language === "kn" ? "ಬಸ್ ಹುಡುಕಾಟ & ಸೀಟು ಕಾಯ್ದಿರಿಸಿ" : "Book Seats & Routes"}</span>
            </button>

            <button
              onClick={() => setActiveTab("timetables")}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === "timetables"
                  ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 scale-105"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
              }`}
            >
              <ClipboardList className="w-4 h-4" />
              <span>{language === "kn" ? "ಅಧಿಕೃತ ಬಸ್ ನಿಲ್ದಾಣ ವೇಳಾಪಟ್ಟಿ" : "Bus Stand Departure Boards"}</span>
            </button>
          </div>

        </div>
      </div>

      {/* TAB 1: ONLINE BUS BOOKING & ROUTE FINDER */}
      {activeTab === "booking" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          
          {/* Search & Filter Bar */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-5 sm:p-7">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              
              {/* From City */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  <span className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-red-600" />
                      {language === "kn" ? "ಹೊರಡುವ ನಗರ (From)" : "Origin City (From)"}
                    </span>
                    {fromCity !== "All" && (
                      <button
                        onClick={() => switchToTimetableForCity(fromCity)}
                        className="text-[10px] font-semibold text-amber-700 hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        Timetable <ChevronRight className="w-3 h-3" />
                      </button>
                    )}
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
                    {language === "kn" ? "ತಲುಪುವ ನಗರ (To)" : "Destination City (To)"}
                  </span>
                </label>
                <select
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
                >
                  <option value="All">🎯 All Destinations / ಎಲ್ಲಾ ಗಮ್ಯಗಳು</option>
                  {toCities.filter(c => c !== "All").map(city => {
                    const count = destinationCountsForOrigin.get(city);
                    return (
                      <option key={city} value={city}>
                        {city} {count ? `(${count} services)` : ""}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Bus className="w-3.5 h-3.5 text-emerald-600" />
                    {language === "kn" ? "ಬಸ್ ಮಾದರಿ (Bus Class)" : "Service Class"}
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
                {language === "kn" ? "ಪ್ರಮುಖ ಕೇಂದ್ರಗಳು:" : "Major Divisions:"}
              </span>
              <button
                onClick={() => { setFromCity("All"); setToCity("All"); }}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  fromCity === "All" 
                    ? "bg-amber-600 text-white shadow-sm" 
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                All Karnataka Hubs
              </button>
              {quickOrigins.map(origin => (
                <button
                  key={origin}
                  onClick={() => {
                    setFromCity(origin);
                    if (toCity === origin) setToCity("All");
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    fromCity === origin 
                      ? "bg-red-800 text-white shadow-sm" 
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {origin} {origin === "Hubballi" && "(NWKRTC HQ)"}
                </button>
              ))}
            </div>

          </div>

          {/* Results Info Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-8 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-800 font-bold text-base sm:text-lg">
                {filteredRoutes.length} {language === "kn" ? "ನೇರ ಬಸ್ ಸೇವೆಗಳು ಲಭ್ಯವಿವೆ" : "KSRTC / NWKRTC / KKRTC Direct Services Available"}
              </span>
              {(fromCity !== "All" || toCity !== "All" || selectedServiceType !== "All") && (
                <button
                  onClick={() => { setFromCity("All"); setToCity("All"); setSelectedServiceType("All"); }}
                  className="ml-2 text-xs font-semibold text-amber-700 underline hover:text-amber-800 cursor-pointer"
                >
                  Clear Filters
                </button>
              )}
            </div>
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Official Government Fares • Guaranteed Seat Allocation</span>
            </div>
          </div>

          {/* Empty State with Intelligent Transfer Guidance */}
          {filteredRoutes.length === 0 ? (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-center">
              <div className="w-16 h-16 rounded-3xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto mb-4 border border-amber-200">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                No direct non-stop service between {fromCity} and {toCity}
              </h3>
              <p className="text-slate-600 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
                While direct point-to-point buses may not run between these specific terminals, seamless connections are available via Karnataka's primary transit hubs.
              </p>

              {/* Transit Hub Connection Recommendation Card */}
              <div className="bg-amber-50/60 rounded-2xl p-5 border border-amber-200/80 max-w-xl mx-auto mb-6 text-left">
                <div className="flex items-center gap-2 font-bold text-sm text-amber-900 mb-2">
                  <Compass className="w-4 h-4 text-amber-700" />
                  <span>Recommended Transit Transfer Route:</span>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  {fromCity === "Hubballi" || toCity === "Hubballi"
                    ? "Hubballi Central Bus Stand (Gokul Rd/Hosur CBS) operates 950+ connecting buses daily to North Karnataka, Coastal Karavali, and South corridors."
                    : `Board an express service from ${fromCity} to Hubballi CBS or Bengaluru Majestic, then make a 15-minute cross-platform connection to ${toCity}.`}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {fromCity !== "All" && (
                    <button
                      onClick={() => switchToTimetableForCity(fromCity)}
                      className="px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <ClipboardList className="w-3.5 h-3.5" />
                      <span>View {fromCity} Bus Stand Timetable</span>
                    </button>
                  )}
                  <button
                    onClick={() => { setToCity("All"); }}
                    className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    View All Departures from {fromCity}
                  </button>
                </div>
              </div>

              {/* Show alternate departures leaving from that origin */}
              {alternativeRoutesFromOrigin.length > 0 && (
                <div className="pt-6 border-t border-slate-200 max-w-4xl mx-auto">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
                    Other Popular Departures Leaving from {fromCity}:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
                    {alternativeRoutesFromOrigin.slice(0, 6).map((alt) => (
                      <div 
                        key={alt.id}
                        className="bg-slate-50 hover:bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-amber-400 transition-all cursor-pointer"
                        onClick={() => { setToCity(alt.toCity); }}
                      >
                        <div className="flex justify-between items-center text-xs font-bold text-slate-800">
                          <span>{alt.toCity}</span>
                          <span className="text-amber-800 font-price">₹{alt.price}</span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1 flex items-center justify-between">
                          <span>{alt.serviceType}</span>
                          <span>{alt.departureTime}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Routes Cards List */
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
                      
                      {/* Operator & Badges */}
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

                      {/* Schedule & Timing */}
                      <div className="flex items-center justify-between sm:justify-start sm:gap-8 flex-1 lg:border-x lg:border-slate-100 lg:px-8">
                        <div>
                          <div className="text-xl sm:text-2xl font-black text-slate-900 font-serif">
                            {route.departureTime}
                          </div>
                          <div className="text-sm font-bold text-slate-700 mt-0.5 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-red-600" />
                            {route.fromCity}
                          </div>
                          <div className="text-xs text-slate-400">
                            {route.fromCity === "Hubballi" ? "Hosur / Gokul Rd CBS" : "Central Bus Terminal"}
                          </div>
                        </div>

                        <div className="flex flex-col items-center px-4">
                          <span className="text-[11px] font-bold text-slate-500 mb-1 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {route.duration}
                          </span>
                          <div className="relative w-24 sm:w-32 flex items-center">
                            <div className="h-0.5 w-full bg-slate-300"></div>
                            <Bus className="w-4 h-4 text-amber-600 absolute left-1/2 -translate-x-1/2 -top-2 bg-white px-0.5" />
                          </div>
                          <span className="text-[10px] text-emerald-700 font-semibold mt-1">Non-Stop Express</span>
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

                      {/* Price & Book Action */}
                      <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4 lg:w-1/4">
                        <div>
                          <div className="text-xs text-slate-400 text-left lg:text-right">Seat Fare from</div>
                          <div className="text-2xl sm:text-3xl font-black text-amber-950 font-price">
                            ₹{route.price.toLocaleString("en-IN")}
                          </div>
                          <div className="text-[11px] text-emerald-700 font-semibold text-left lg:text-right mt-0.5">
                            {route.seatsAvailable} seats available
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedRouteForBooking(route)}
                          className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-gradient-to-r from-red-800 to-amber-800 hover:from-red-900 hover:to-amber-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02] cursor-pointer"
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

        </div>
      )}

      {/* TAB 2: OFFICIAL BUS STAND DEPARTURE BOARDS & TIMETABLE DIRECTORY */}
      {activeTab === "timetables" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-8">
          
          {/* Stand Selector Tabs with Search & Region Filter */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-5 sm:p-7 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Select District Bus Stand / 31 ಜಿಲ್ಲಾ ಬಸ್ ನಿಲ್ದಾಣಗಳು:
                </span>
                <p className="text-xs text-slate-500 mt-0.5">
                  Official KSRTC, NWKRTC, and KKRTC departure boards and platform allocations.
                </p>
              </div>

              {/* Quick Search */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={standSearch}
                  onChange={(e) => setStandSearch(e.target.value)}
                  placeholder="Search district (e.g. Koppal, Mandya)..."
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>
            </div>

            {/* Region Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 border-b border-slate-100 pb-3">
              {["All", "Kalyana Karnataka", "North Karnataka", "South Karnataka", "Malnad", "Coastal Karnataka"].map(reg => (
                <button
                  key={reg}
                  onClick={() => setSelectedStandRegion(reg)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedStandRegion === reg
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                  }`}
                >
                  {reg === "All" ? "All 31 Districts" : reg}
                </button>
              ))}
            </div>

            {/* Bus Stand Buttons Grid */}
            <div className="flex flex-wrap items-center gap-2 max-h-56 overflow-y-auto pr-1 py-1">
              {filteredBusStands.map((stand) => {
                const isSelected = stand.id === selectedStandId;
                return (
                  <button
                    key={stand.id}
                    onClick={() => setSelectedStandId(stand.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? "bg-amber-600 text-white shadow-md shadow-amber-600/30 scale-105"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{stand.city}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isSelected ? "bg-amber-800 text-white" : "bg-slate-200 text-slate-600"
                    }`}>
                      {stand.division}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Bus Stand Profile Card */}
          {activeBusStand && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-red-100 text-red-800 border border-red-300">
                      {activeBusStand.division} Division
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      {activeBusStand.divisionFullName}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-900">
                    {activeBusStand.name}
                  </h2>
                  <p className="text-sm text-slate-600 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{activeBusStand.address}</span>
                  </p>
                </div>

                {/* Helpline & Quick Contacts */}
                <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200/80 shrink-0 space-y-2 text-xs">
                  <div className="font-bold text-amber-900 uppercase tracking-wider text-[11px] flex items-center gap-1">
                    <PhoneCall className="w-3.5 h-3.5 text-amber-700" />
                    <span>24x7 Terminal Helpline & Enquiry</span>
                  </div>
                  <div className="text-slate-800 font-mono font-semibold">
                    📞 {activeBusStand.helplinePhone}
                  </div>
                  <div className="text-slate-600 text-[11px]">
                    Control Room: {activeBusStand.enquiryCounter}
                  </div>
                  <div className="text-emerald-700 font-bold text-[11px]">
                    ⚡ {activeBusStand.operatingHours} • {activeBusStand.dailyDepartures}
                  </div>
                </div>
              </div>

              {/* Platform Bay Directory */}
              <div className="mt-6 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-amber-600" />
                  <span>Platform / Bay Routing Directory ({activeBusStand.totalPlatforms} Bays):</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {activeBusStand.platformBays.map((bay, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs space-y-1">
                      <span className="font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md inline-block">
                        {bay.platforms}
                      </span>
                      <p className="font-semibold text-slate-800 pt-1">
                        {bay.destinations}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {bay.serviceTypes}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Departure Schedule Board */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-serif flex items-center gap-2">
                      <ClipboardList className="w-5 h-5 text-amber-700" />
                      <span>Daily Departure Schedule (ಅಧಿಕೃತ ದಿನನಿತ್ಯದ ನಿರ್ಗಮನ ವೇಳಾಪಟ್ಟಿ)</span>
                    </h3>
                    <p className="text-xs text-slate-500">
                      Live scheduled services departing from {activeBusStand.city} Central Stand
                    </p>
                  </div>

                  {/* Filter Search inside timetable */}
                  <div className="relative w-full sm:w-64">
                    <input
                      type="text"
                      placeholder="Search destination, via, or bus..."
                      value={timetableSearch}
                      onChange={(e) => setTimetableSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  </div>
                </div>

                {/* Timetable Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4">Service #</th>
                        <th className="py-3 px-4">Departure</th>
                        <th className="py-3 px-4">Destination</th>
                        <th className="py-3 px-4">Service Type</th>
                        <th className="py-3 px-4">Route Via</th>
                        <th className="py-3 px-4">Platform</th>
                        <th className="py-3 px-4">Frequency</th>
                        <th className="py-3 px-4">Fare</th>
                        <th className="py-3 px-4 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                      {filteredSchedules.map((item, idx) => (
                        <tr key={idx} className="hover:bg-amber-50/50 transition-colors">
                          <td className="py-3 px-4 font-mono font-bold text-slate-900">
                            {item.serviceNumber}
                          </td>
                          <td className="py-3 px-4 font-bold text-slate-900 font-price text-sm whitespace-nowrap">
                            {item.departureTime}
                          </td>
                          <td className="py-3 px-4 font-bold text-amber-950">
                            {item.destination}
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                              {item.serviceType}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-slate-500 text-[11px] max-w-xs truncate">
                            {item.viaRoute}
                          </td>
                          <td className="py-3 px-4 font-bold text-red-800 whitespace-nowrap">
                            {item.platform}
                          </td>
                          <td className="py-3 px-4 text-[11px] text-slate-500 whitespace-nowrap">
                            {item.frequency}
                          </td>
                          <td className="py-3 px-4 font-bold text-slate-900 font-price">
                            ₹{item.fare}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <button
                              onClick={() => handleBookFromTimetable(activeBusStand.city, item.destination)}
                              className="px-3 py-1.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
                            >
                              Book Seats
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>

            </div>
          )}

        </div>
      )}

      {/* Passenger Information Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-amber-50/80 rounded-3xl p-6 sm:p-8 border border-amber-200/80">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-600 text-white shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-950 font-serif mb-1">
                {language === "kn" ? "ಕರ್ನಾಟಕ ರಸ್ತೆ ಸಾರಿಗೆ ನಿಗಮಗಳ ಅಧಿಕೃತ ಪ್ರಯಾಣಿಕರ ಮಾಹಿತಿ" : "Official KSRTC / NWKRTC / KKRTC Passenger Travel Advisory"}
              </h3>
              <p className="text-sm text-amber-900/80 leading-relaxed mb-4">
                Yaatri Niwaas connects you to the unified transport networks of KSRTC (South & Coastal Karnataka), NWKRTC (North Western Karnataka HQ Hubballi), and KKRTC (Kalyana Karnataka HQ Kalaburagi). All ticket reservations include automated digital passes with passenger manifest confirmation, live tracking, and complimentary luggage allowance of up to 30 kg.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-amber-900">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Connecting Shuttle to Official Yaatri Niwaas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Safe Night Travel & Lady Conductor Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Central Toll-Free Helpline: 1800-425-25555 / 7760991684</span>
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
