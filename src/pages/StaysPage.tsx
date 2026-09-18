import React, { useState, useMemo } from "react";
import { useApp } from "../context/AppContext";
import { STAYS_DATA } from "../data/stays";
import { DISTRICTS_DATA, REGIONS } from "../data/districts";
import { StayCard } from "../components/StayCard";
import { 
  Hotel, 
  Search, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Utensils, 
  Coffee, 
  Zap, 
  CheckCircle2, 
  Filter, 
  Info,
  Calendar
} from "lucide-react";

export const StaysPage: React.FC = () => {
  const { language } = useApp();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [priceTier, setPriceTier] = useState<"all" | "budget" | "mid" | "premium">("all");
  const [selectedAmenity, setSelectedAmenity] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"rating" | "price-asc" | "price-desc">("rating");

  // Create lookup of district to region
  const districtRegionMap = useMemo(() => {
    const map = new Map<string, string>();
    DISTRICTS_DATA.forEach(d => map.set(d.id, d.region));
    return map;
  }, []);

  const popularAmenities = [
    "All",
    "Wi-Fi",
    "Breakfast",
    "Restaurant",
    "EV Charging",
    "Travel Desk"
  ];

  const filteredStays = useMemo(() => {
    return STAYS_DATA.filter(property => {
      // Region check
      const region = districtRegionMap.get(property.districtId) || "";
      if (selectedRegion !== "All" && region !== selectedRegion) {
        return false;
      }

      // Search check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = property.name.toLowerCase().includes(q);
        const matchDistrict = property.districtName.toLowerCase().includes(q);
        const matchAddress = property.address.toLowerCase().includes(q);
        if (!matchName && !matchDistrict && !matchAddress) return false;
      }

      // Price tier check
      if (priceTier === "budget" && property.priceStarting > 1500) return false;
      if (priceTier === "mid" && (property.priceStarting <= 1500 || property.priceStarting > 2500)) return false;
      if (priceTier === "premium" && property.priceStarting <= 2500) return false;

      // Amenity check
      if (selectedAmenity !== "All") {
        const hasAmenity = property.amenities.some(a => 
          a.toLowerCase().includes(selectedAmenity.toLowerCase())
        );
        if (!hasAmenity) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "price-asc") return a.priceStarting - b.priceStarting;
      if (sortBy === "price-desc") return b.priceStarting - a.priceStarting;
      return 0;
    });
  }, [searchQuery, selectedRegion, priceTier, selectedAmenity, sortBy, districtRegionMap]);

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-950 to-slate-950 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-800/60 border border-amber-600/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Hotel className="w-3.5 h-3.5" />
            <span>{language === "kn" ? "ಅಧಿಕೃತ ಪ್ರವಾಸೋದ್ಯಮ ವಸತಿಗೃಹಗಳು" : "Official Tourism Accommodations"}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white mb-4">
            {language === "kn" 
              ? "ಕರ್ನಾಟಕ ಯಾತ್ರಿ ನಿವಾಸ ಶೃಂಖಲೆ" 
              : "Yaatri Niwaas Guesthouses Across 31 Districts"}
          </h1>
          <p className="text-amber-100/90 text-base sm:text-lg max-w-3xl leading-relaxed">
            {language === "kn"
              ? "ಕರ್ನಾಟಕದ ಪ್ರತಿಯೊಂದು ಜಿಲ್ಲೆಯಲ್ಲೂ ಯಾತ್ರಿಕರು, ಕುಟುಂಬಗಳು ಮತ್ತು ಪ್ರವಾಸಿಗರಿಗಾಗಿ ಸರ್ಕಾರಿ ದೃಢೀಕೃತ, ಶುಚಿಯಾದ ಮತ್ತು ಕೈಗೆಟುಕುವ ಬೆಲೆಯ ಯಾತ್ರಿ ನಿವಾಸ ವಸತಿ ವ್ಯವಸ್ಥೆ. ಸಂಪ್ರದಾಯಬದ್ಧ ಊಟ ಮತ್ತು ಸುರಕ್ಷಿತ ಆತಿಥ್ಯ."
              : "Verified, authentic, and budget-friendly guesthouses operated at prime pilgrimage sites, wildlife corridors, and heritage capitals. Every one of Karnataka's 31 districts has a dedicated Yaatri Niwaas property."}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-amber-800/40 text-left">
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">31</div>
              <div className="text-xs text-amber-200/80">Properties (1 in Every District)</div>
            </div>
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">100%</div>
              <div className="text-xs text-amber-200/80">Pure Veg Diners & Verified Kitchens</div>
            </div>
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">₹850</div>
              <div className="text-xs text-amber-200/80">Standard AC & Non-AC Starting Tariff</div>
            </div>
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">4.5★</div>
              <div className="text-xs text-amber-200/80">Average Traveler Satisfaction Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Filter Controls Bar */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-5 sm:p-7 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={language === "kn" ? "ಜಿಲ್ಲೆ ಅಥವಾ ಯಾತ್ರಿ ನಿವಾಸದ ಹೆಸರು ಹುಡುಕಿ..." : "Search district, city or stay name..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            {/* Price Tier */}
            <div>
              <select
                value={priceTier}
                onChange={(e) => setPriceTier(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <option value="all">💰 All Price Ranges</option>
                <option value="budget">💰 Budget Friendly (Under ₹1,500/night)</option>
                <option value="mid">💰 Standard Deluxe (₹1,500 - ₹2,500/night)</option>
                <option value="premium">💰 Heritage Suites & Cottages (₹2,500+/night)</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <option value="rating">⭐ Highest Rated First</option>
                <option value="price-asc">💵 Price: Low to High</option>
                <option value="price-desc">💵 Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Region Tabs */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Region:</span>
            <button
              onClick={() => setSelectedRegion("All")}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                selectedRegion === "All"
                  ? "bg-amber-800 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Regions (31)
            </button>
            {REGIONS.map(reg => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  selectedRegion === reg
                    ? "bg-amber-800 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {reg}
              </button>
            ))}
          </div>

          {/* Amenities Quick Filter */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Feature:</span>
            {popularAmenities.map(amenity => (
              <button
                key={amenity}
                onClick={() => setSelectedAmenity(amenity)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  selectedAmenity === amenity
                    ? "bg-amber-100 text-amber-900 border border-amber-300 font-bold"
                    : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {amenity === "All" ? "All Features" : `✓ ${amenity}`}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mt-8 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-600" />
            <span className="text-slate-800 font-bold text-base sm:text-lg">
              {filteredStays.length} {language === "kn" ? "ಯಾತ್ರಿ ನಿವಾಸ ಆಸ್ತಿಗಳು ಲಭ್ಯವಿವೆ" : "Yaatri Niwaas Properties Available"}
            </span>
          </div>
          <div className="text-xs text-slate-500 hidden sm:flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Instant Confirmation • Direct State Tourism Desk</span>
          </div>
        </div>

        {/* Stays Grid */}
        {filteredStays.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
            <Hotel className="w-14 h-14 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">No Yaatri Niwaas properties found matching your search</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
              Try clearing the region or amenity filter to view all 31 properties across Karnataka.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedRegion("All");
                setPriceTier("all");
                setSelectedAmenity("All");
              }}
              className="px-5 py-2.5 bg-amber-700 hover:bg-amber-800 text-white text-sm font-bold rounded-xl transition-all"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredStays.map(property => (
              <StayCard key={property.id} property={property} />
            ))}
          </div>
        )}

        {/* Informational Callout */}
        <div className="mt-14 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 sm:p-8 border border-amber-200">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-600 text-white shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-950 font-serif mb-2">
                {language === "kn" ? "ಯಾತ್ರಿ ನಿವಾಸದ ಪ್ರಮುಖ ಸೌಲಭ್ಯಗಳು & ನಿಯಮಗಳು" : "Why Choose Yaatri Niwaas Across Karnataka?"}
              </h3>
              <p className="text-sm text-amber-900/80 leading-relaxed mb-4">
                Yaatri Niwaas is designed to provide comfortable, safe, and hygienic lodging for spiritual pilgrims, nature enthusiasts, and heritage explorers. Properties feature standardized pricing regulated by Karnataka Tourism, sanitized linen, pure vegetarian dining facilities preparing authentic regional recipes (such as Udupi breakfast, Jolada Rotti Oota, and Malnad filter coffee), and local sightseeing assistance desks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold text-amber-900">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>24-Hour Hot Water & Power Backup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Free Cancellation up to 24 hrs before check-in</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>KSRTC Pick-up Shuttle Coordination</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
