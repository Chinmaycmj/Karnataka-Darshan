import React, { useState, useEffect, useRef } from "react";
import { useApp } from "../context/AppContext";
import { DISTRICTS_DATA } from "../data/districts";
import { DESTINATIONS_DATA } from "../data/destinations";
import { PACKAGES_DATA } from "../data/packages";
import { Search, X, MapPin, Compass, Package, ChevronRight, Tag } from "lucide-react";

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, language, navigateToDistrict, navigateToPackage } = useApp();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const cleanQ = query.trim().toLowerCase();

  // Search in Districts
  const matchedDistricts = cleanQ ? DISTRICTS_DATA.filter(d => 
    d.name.toLowerCase().includes(cleanQ) || 
    d.kannadaName.includes(cleanQ) ||
    d.region.toLowerCase().includes(cleanQ) ||
    d.highlights.some(h => h.toLowerCase().includes(cleanQ)) ||
    d.foodSpecialties.some(f => f.name.toLowerCase().includes(cleanQ))
  ).slice(0, 5) : [];

  // Search in Destinations
  const matchedDestinations = cleanQ ? DESTINATIONS_DATA.filter(dest => 
    dest.name.toLowerCase().includes(cleanQ) || 
    dest.kannadaName.includes(cleanQ) ||
    dest.districtName.toLowerCase().includes(cleanQ) ||
    dest.category.toLowerCase().includes(cleanQ) ||
    dest.tags.some(t => t.toLowerCase().includes(cleanQ)) ||
    dest.description.toLowerCase().includes(cleanQ)
  ).slice(0, 6) : [];

  // Search in Packages
  const matchedPackages = cleanQ ? PACKAGES_DATA.filter(pkg => 
    pkg.name.toLowerCase().includes(cleanQ) ||
    pkg.districtNames.some(dn => dn.toLowerCase().includes(cleanQ)) ||
    pkg.highlights.some(h => h.toLowerCase().includes(cleanQ))
  ).slice(0, 3) : [];

  const quickSearches = [
    "Hampi", "Mysuru Palace", "Gokarna Beach", "Coorg Coffee", "Jog Falls", "Badami Caves", "Benne Dosa", "Bandipur Safari"
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Search Header Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50/50">
          <Search className="w-5 h-5 text-amber-600 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder={language === "kn" ? "ಕರ್ನಾಟಕದ ಯಾವುದೇ ಜಿಲ್ಲೆ, ತಾಣ, ದೇವಾಲಯ, ಆಹಾರ ಹುಡುಕಿ..." : "Search any district, beach, temple, palace, waterfall, food..."}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-800 text-sm sm:text-base focus:outline-none placeholder:text-slate-400 font-medium"
          />
          {query && (
            <button 
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="px-2 py-1 text-xs font-semibold text-slate-500 hover:text-slate-800 bg-slate-200/70 hover:bg-slate-200 rounded-md"
          >
            ESC
          </button>
        </div>

        {/* Quick Tag Recommendations when empty */}
        {!cleanQ && (
          <div className="p-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
              {language === "kn" ? "ಜನಪ್ರಿಯ ಹುಡುಕಾಟಗಳು:" : "Popular Searches:"}
            </span>
            <div className="flex flex-wrap gap-2">
              {quickSearches.map((item) => (
                <button
                  key={item}
                  onClick={() => setQuery(item)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80 transition-all flex items-center gap-1.5"
                >
                  <Tag className="w-3 h-3 text-amber-600" />
                  <span>{item}</span>
                </button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400 flex items-center justify-between">
              <span>Try searching for: "beach", "heritage", "waterfall", "coffee", "fort"</span>
              <span>All 31 Districts Index</span>
            </div>
          </div>
        )}

        {/* Results Area */}
        {cleanQ && (
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6 divide-y divide-slate-100">
            
            {/* Districts Section */}
            {matchedDistricts.length > 0 && (
              <div className="pt-2">
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block mb-2 px-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Districts ({matchedDistricts.length})</span>
                </span>
                <div className="space-y-1">
                  {matchedDistricts.map(d => (
                    <div
                      key={d.id}
                      onClick={() => {
                        navigateToDistrict(d.id);
                        setIsSearchOpen(false);
                      }}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-amber-50 cursor-pointer group transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <img src={d.heroImage} alt={d.name} className="w-12 h-12 rounded-lg object-cover" />
                        <div>
                          <h5 className="font-bold text-sm text-slate-800 group-hover:text-amber-900">
                            {d.name} <span className="text-xs text-amber-700 font-kannada font-normal">({d.kannadaName})</span>
                          </h5>
                          <span className="text-xs text-slate-500">{d.region} • {d.highlights[0]}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Destinations Section */}
            {matchedDestinations.length > 0 && (
              <div className="pt-4">
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block mb-2 px-2 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Destinations & Landmarks ({matchedDestinations.length})</span>
                </span>
                <div className="space-y-1">
                  {matchedDestinations.map(dest => (
                    <div
                      key={dest.id}
                      onClick={() => {
                        navigateToDistrict(dest.districtId);
                        setIsSearchOpen(false);
                      }}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-amber-50 cursor-pointer group transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <img src={dest.image} alt={dest.name} className="w-12 h-12 rounded-lg object-cover" />
                        <div>
                          <h5 className="font-bold text-sm text-slate-800 group-hover:text-amber-900">
                            {dest.name}
                          </h5>
                          <span className="text-xs text-slate-500">
                            {dest.districtName} District • {dest.category}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        {dest.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Packages Section */}
            {matchedPackages.length > 0 && (
              <div className="pt-4">
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block mb-2 px-2 flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5" />
                  <span>Tour Packages ({matchedPackages.length})</span>
                </span>
                <div className="space-y-1">
                  {matchedPackages.map(p => (
                    <div
                      key={p.id}
                      onClick={() => {
                        navigateToPackage(p.id);
                        setIsSearchOpen(false);
                      }}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-amber-50 cursor-pointer group transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <img src={p.image} alt={p.name} className="w-12 h-12 rounded-lg object-cover" />
                        <div>
                          <h5 className="font-bold text-sm text-slate-800 group-hover:text-amber-900">
                            {p.name}
                          </h5>
                          <span className="text-xs text-slate-500">
                            {p.durationDays} Days / {p.durationNights} Nights • From ₹{p.startingPrice.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Zero Results */}
            {matchedDistricts.length === 0 && matchedDestinations.length === 0 && matchedPackages.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-sm font-semibold text-slate-700 mb-1">
                  No direct matches found for "{query}"
                </p>
                <p className="text-xs text-slate-500">
                  Try searching by region name (e.g. Coastal, Malnad, North Karnataka) or destination types (temple, fort, beach, waterfall).
                </p>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
