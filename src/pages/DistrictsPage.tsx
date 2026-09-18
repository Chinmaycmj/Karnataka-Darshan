import React, { useState, useMemo } from "react";
import { useApp } from "../context/AppContext";
import { DISTRICTS_DATA, REGIONS } from "../data/districts";
import { DistrictCard } from "../components/DistrictCard";
import { KarnatakaMap } from "../components/KarnatakaMap";
import { 
  MapPin, 
  Search, 
  Map as MapIcon, 
  Grid, 
  Compass, 
  Sparkles,
  Info
} from "lucide-react";

export const DistrictsPage: React.FC = () => {
  const { language, selectedRegionFilter, setSelectedRegionFilter } = useApp();
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");

  const filteredDistricts = useMemo(() => {
    return DISTRICTS_DATA.filter((district) => {
      // Region match
      if (selectedRegionFilter !== "All" && district.region !== selectedRegionFilter) {
        return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = district.name.toLowerCase().includes(q);
        const matchKannada = district.kannadaName.includes(q);
        const matchTagline = district.tagline.toLowerCase().includes(q);
        const matchCraft = district.cultureAndCrafts.some(c => 
          c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
        );
        const matchFood = district.foodSpecialties.some(f => 
          f.name.toLowerCase().includes(q) || f.description.toLowerCase().includes(q)
        );
        const matchHighlights = district.highlights.some(h => h.toLowerCase().includes(q));
        if (!matchName && !matchKannada && !matchTagline && !matchCraft && !matchFood && !matchHighlights) {
          return false;
        }
      }
      return true;
    });
  }, [selectedRegionFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-red-950 to-amber-900 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-800/60 border border-amber-600/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === "kn" ? "ಕರ್ನಾಟಕದ ಸಮಗ್ರ ಜಿಲ್ಲಾ ದರ್ಶನ" : "Complete 31-District Directory"}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white mb-4">
            {language === "kn" 
              ? "ಕರ್ನಾಟಕದ 31 ಜಿಲ್ಲೆಗಳು — ಒಂದು ಸಂಪೂರ್ಣ ನಕಾಶೆ" 
              : "All 31 Districts of Karnataka"}
          </h1>
          <p className="text-amber-100/90 text-base sm:text-lg max-w-3xl leading-relaxed">
            {language === "kn"
              ? "ಬಾಗಲಕೋಟೆಯಿಂದ ಹಿಡಿದು ನೂತನ 31ನೇ ಜಿಲ್ಲೆಯಾದ ವಿಜಯನಗರದವರೆಗೆ, ಕರ್ನಾಟಕದ ಎಲ್ಲಾ ಜಿಲ್ಲೆಗಳ ನೈಸರ್ಗಿಕ, ಸಾಂಸ್ಕೃತಿಕ, ಐತಿಹಾಸಿಕ ಮತ್ತು ಪಾಕಶಾಸ್ತ್ರೀಯ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ."
              : "From the sandstone temples of Bagalkote to Vijayanagara (Karnataka's 31st district carved out in 2020), explore the diverse landscapes, World Heritage capitals, pristine beaches, and culinary legends of the state."}
          </p>

          {/* District Highlights Metric */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-amber-800/40 text-left">
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">31</div>
              <div className="text-xs text-amber-200/80">Districts Fully Mapped</div>
            </div>
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">7</div>
              <div className="text-xs text-amber-200/80">Distinct Cultural Regions</div>
            </div>
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">53+</div>
              <div className="text-xs text-amber-200/80">Curated Heritage Destinations</div>
            </div>
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">100%</div>
              <div className="text-xs text-amber-200/80">KSRTC & Yaatri Niwaas Ready</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Filter and View Mode Switcher */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-5 sm:p-7 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={language === "kn" ? "ಜಿಲ್ಲೆ, ಪಾಕಪದ್ಧತಿ, ಅಥವಾ ಆಕರ್ಷಣೆ ಹುಡುಕಿ..." : "Search district, cuisine, heritage..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-end md:self-auto">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  viewMode === "grid"
                    ? "bg-white text-amber-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Grid className="w-4 h-4" />
                <span>Grid View ({filteredDistricts.length})</span>
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  viewMode === "map"
                    ? "bg-white text-amber-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <MapIcon className="w-4 h-4" />
                <span>Interactive Map</span>
              </button>
            </div>
          </div>

          {/* Region Tabs */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Region:</span>
            <button
              onClick={() => setSelectedRegionFilter("All")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedRegionFilter === "All"
                  ? "bg-amber-800 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All 31 Districts
            </button>
            {REGIONS.map((region) => {
              const count = DISTRICTS_DATA.filter(d => d.region === region).length;
              return (
                <button
                  key={region}
                  onClick={() => setSelectedRegionFilter(region)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedRegionFilter === region
                      ? "bg-amber-800 text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {region} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* View: Map View */}
        {viewMode === "map" ? (
          <div className="mt-8 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="font-serif font-black text-xl text-slate-900">
                  Interactive Cartography of Karnataka
                </h3>
                <p className="text-xs text-slate-500">
                  Click or hover any of the 31 districts on the SVG map to preview key attractions, authentic cuisine, and Yaatri Niwaas properties.
                </p>
              </div>
            </div>
            <KarnatakaMap />
          </div>
        ) : (
          /* View: Grid View */
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-bold text-slate-700">
                Showing {filteredDistricts.length} of 31 Districts
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs font-bold text-amber-700 underline"
                >
                  Clear search
                </button>
              )}
            </div>

            {filteredDistricts.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
                <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h4 className="font-bold text-slate-800 text-lg mb-1">No districts match your search query</h4>
                <p className="text-slate-500 text-xs mb-4">Try searching for a different keyword or reset filters.</p>
                <button
                  onClick={() => { setSearchQuery(""); setSelectedRegionFilter("All"); }}
                  className="px-4 py-2 bg-amber-700 text-white font-bold text-xs rounded-xl"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDistricts.map(district => (
                  <DistrictCard key={district.id} district={district} />
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
