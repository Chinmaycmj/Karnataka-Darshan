import React, { useState, useMemo } from "react";
import { useApp } from "../context/AppContext";
import { PACKAGES_DATA } from "../data/packages";
import { PackageCard } from "../components/PackageCard";
import { 
  Package, 
  Search, 
  Clock, 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  Compass, 
  Bus, 
  Hotel,
  CheckCircle2
} from "lucide-react";

export const PackagesPage: React.FC = () => {
  const { language } = useApp();
  const [searchQuery, setSearchQuery] = useState("");
  const [durationFilter, setDurationFilter] = useState<"all" | "short" | "medium" | "long">("all");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "duration">("featured");

  const filteredPackages = useMemo(() => {
    return PACKAGES_DATA.filter((pkg) => {
      // Duration filter
      if (durationFilter === "short" && pkg.durationDays > 4) return false;
      if (durationFilter === "medium" && (pkg.durationDays < 5 || pkg.durationDays > 6)) return false;
      if (durationFilter === "long" && pkg.durationDays < 7) return false;

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = pkg.name.toLowerCase().includes(q);
        const matchKannada = (pkg.kannadaName || "").includes(q);
        const matchDistricts = pkg.districtNames.some(d => d.toLowerCase().includes(q));
        const matchHighlights = pkg.highlights.some(h => h.toLowerCase().includes(q));
        if (!matchTitle && !matchKannada && !matchDistricts && !matchHighlights) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.startingPrice - b.startingPrice;
      if (sortBy === "price-desc") return b.startingPrice - a.startingPrice;
      if (sortBy === "duration") return a.durationDays - b.durationDays;
      return 0;
    });
  }, [durationFilter, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-amber-900 to-red-950 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-800/60 border border-amber-600/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Package className="w-3.5 h-3.5" />
            <span>{language === "kn" ? "ಕರ್ನಾಟಕ ಸಮಗ್ರ ಪ್ರವಾಸ ಯೋಜನೆಗಳು" : "Official All-Inclusive Tour Circuits"}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white mb-4">
            {language === "kn" 
              ? "ಕ್ಯುರೇಟೆಡ್ ಬಹು-ಜಿಲ್ಲಾ ಪ್ರವಾಸ ಪ್ಯಾಕೇಜ್‌ಗಳು" 
              : "Curated Multi-District Tour Circuits"}
          </h1>
          <p className="text-amber-100/90 text-base sm:text-lg max-w-3xl leading-relaxed">
            {language === "kn"
              ? "ಐತಿಹಾಸಿಕ ಹಂಪಿ ಮತ್ತು ಬಾದಾಮಿಯಿಂದ ಮಲೆನಾಡಿನ ಕಾಫಿ ತೋಟಗಳು, ಕರಾವಳಿ ತೀರಗಳು ಮತ್ತು ದಕ್ಷಿಣದ ಮೈಸೂರು ರಾಜವಂಶದವರೆಗೆ - ಅಧಿಕೃತ ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಸಾರಿಗೆ ಮತ್ತು ಯಾತ್ರಿ ನಿವಾಸ ಆತಿಥ್ಯದೊಂದಿಗೆ ಸಂಪೂರ್ಣ ಆಯೋಜನೆ."
              : "Travel across multiple districts in seamless circuits. Every package includes verified KSRTC Airavat/Rajahamsa coach transit, authenticated Yaatri Niwaas accommodations, guided temple darshans, and traditional regional dining."}
          </p>

          {/* Package Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-amber-800/40 text-left">
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">7</div>
              <div className="text-xs text-amber-200/80">Thematic Signature Circuits</div>
            </div>
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">100%</div>
              <div className="text-xs text-amber-200/80">KSRTC Airavat & Volvo Included</div>
            </div>
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">₹7,999</div>
              <div className="text-xs text-amber-200/80">Starting All-Inclusive Price</div>
            </div>
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">Zero</div>
              <div className="text-xs text-amber-200/80">Hidden Costs or Surcharges</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-5 sm:p-7 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={language === "kn" ? "ಪ್ಯಾಕೇಜ್ ಅಥವಾ ಜಿಲ್ಲೆ ಹುಡುಕಿ..." : "Search circuit, destination, or theme..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            {/* Duration Filter */}
            <div>
              <select
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <option value="all">⏳ All Durations (3 - 8 Days)</option>
                <option value="short">⚡ Weekend & Quick (3 - 4 Days)</option>
                <option value="medium">🌟 Signature Exploration (5 - 6 Days)</option>
                <option value="long">👑 Grand Karnataka Expeditions (7+ Days)</option>
              </select>
            </div>

            {/* Sort Filter */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <option value="featured">✨ Featured Circuits First</option>
                <option value="price-asc">💵 Price: Low to High</option>
                <option value="price-desc">💵 Price: High to Low</option>
                <option value="duration">⌛ Duration: Short to Long</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mt-8 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-600" />
            <span className="text-slate-800 font-bold text-base sm:text-lg">
              {filteredPackages.length} {language === "kn" ? "ಪ್ರವಾಸ ಪ್ಯಾಕೇಜ್‌ಗಳು ಲಭ್ಯವಿವೆ" : "Tour Packages Available"}
            </span>
          </div>
          <div className="text-xs text-slate-500 hidden sm:flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Govt. Regulated Tariffs • Sanitized Stays</span>
          </div>
        </div>

        {/* Packages Grid */}
        {filteredPackages.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
            <Package className="w-14 h-14 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">No Tour Packages Match Your Filter</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
              Try adjusting your duration or search keywords to view our full collection of Karnataka circuits.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setDurationFilter("all"); }}
              className="px-5 py-2.5 bg-amber-700 hover:bg-amber-800 text-white text-sm font-bold rounded-xl transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPackages.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}

        {/* Package Inclusions Banner */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 font-serif mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span>Standard Inclusions in Every Yaatri Niwaas Tour Package</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-700">
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
              <Bus className="w-5 h-5 text-amber-800 mb-2" />
              <div className="font-bold text-slate-900 mb-1">KSRTC Luxury Transit</div>
              <div>Reserved seats on Volvo Airavat Club Class or Rajahamsa Express coaches.</div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <Hotel className="w-5 h-5 text-emerald-800 mb-2" />
              <div className="font-bold text-slate-900 mb-1">Yaatri Niwaas Lodging</div>
              <div>Sanitized Deluxe AC rooms with 24/7 hot water and official hospitality.</div>
            </div>

            <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200">
              <Compass className="w-5 h-5 text-orange-800 mb-2" />
              <div className="font-bold text-slate-900 mb-1">Temple & Safari Permits</div>
              <div>Pre-cleared VIP darshan passes and forest department safari bookings included.</div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
              <ShieldCheck className="w-5 h-5 text-blue-800 mb-2" />
              <div className="font-bold text-slate-900 mb-1">State Travel Insurance</div>
              <div>Comprehensive passenger safety cover and 24/7 dedicated helpline support.</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
