import React, { useState } from "react";
import { DISTRICTS_DATA } from "../data/districts";
import { useApp } from "../context/AppContext";
import { District, RegionType } from "../data/types";
import { MapPin, Sparkles, ChevronRight, Eye } from "lucide-react";

export const KarnatakaMap: React.FC = () => {
  const { language, navigateToDistrict } = useApp();
  const [hoveredDistrict, setHoveredDistrict] = useState<District | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [mapSearch, setMapSearch] = useState<string>("");

  const regions: string[] = [
    "All",
    "Coastal Karnataka",
    "Malnad",
    "North Karnataka",
    "Kalyana Karnataka",
    "Central Karnataka",
    "South Karnataka",
    "Bengaluru"
  ];

  const filteredDistricts = DISTRICTS_DATA.filter((d) => {
    const matchesRegion = selectedRegion === "All" || d.region === selectedRegion;
    const matchesSearch = 
      d.name.toLowerCase().includes(mapSearch.toLowerCase()) || 
      d.kannadaName.includes(mapSearch);
    return matchesRegion && matchesSearch;
  });

  const getRegionColor = (region: RegionType, isHovered: boolean, isSelected: boolean) => {
    if (isHovered) return "fill-amber-500 stroke-amber-700 stroke-2 filter drop-shadow-md";
    if (isSelected) return "fill-amber-400 stroke-amber-600 stroke-2";

    switch (region) {
      case "Coastal Karnataka":
        return "fill-sky-100 hover:fill-sky-300 stroke-sky-400";
      case "Malnad":
        return "fill-emerald-100 hover:fill-emerald-300 stroke-emerald-500";
      case "North Karnataka":
        return "fill-amber-100 hover:fill-amber-300 stroke-amber-400";
      case "Kalyana Karnataka":
        return "fill-rose-100 hover:fill-rose-300 stroke-rose-400";
      case "Central Karnataka":
        return "fill-violet-100 hover:fill-violet-300 stroke-violet-400";
      case "South Karnataka":
        return "fill-orange-100 hover:fill-orange-300 stroke-orange-400";
      case "Bengaluru":
        return "fill-indigo-100 hover:fill-indigo-300 stroke-indigo-400";
      default:
        return "fill-slate-100 hover:fill-amber-200 stroke-slate-300";
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
      
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-amber-700 font-semibold text-xs tracking-wider uppercase mb-1">
            <MapPin className="w-4 h-4" />
            <span>{language === "kn" ? "ಸಂವಾದಾತ್ಮಕ ನಕ್ಷೆ" : "Interactive Karnataka Map"}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            {language === "kn" ? "31 ಜಿಲ್ಲೆಗಳ ನಕ್ಷೆ ದರ್ಶನ" : "Click Any District to Explore"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            {language === "kn" 
              ? "ನಕ್ಷೆಯ ಮೇಲೆ ಯಾವುದೇ ಜಿಲ್ಲೆಯನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಆ ಜಿಲ್ಲೆಯ ತಾಣಗಳು, ವಸತಿ ಮತ್ತು ಪ್ಯಾಕೇಜ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ."
              : "Hover and click any district node across Karnataka to see top destinations, itineraries, and Yaatri Niwaas stays."}
          </p>
        </div>

        {/* Region Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
          <input
            type="text"
            placeholder={language === "kn" ? "ಜಿಲ್ಲೆ ಹುಡುಕಿ..." : "Filter district..."}
            value={mapSearch}
            onChange={(e) => setMapSearch(e.target.value)}
            className="px-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500 w-36 sm:w-44"
          />
        </div>
      </div>

      {/* Region Filter Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto py-4 border-b border-slate-100 scrollbar-none">
        {regions.map((r) => (
          <button
            key={r}
            onClick={() => setSelectedRegion(r)}
            className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap transition-all ${
              selectedRegion === r
                ? "bg-amber-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Main Map Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-center">
        
        {/* SVG Interactive Map Area */}
        <div className="lg:col-span-8 relative bg-slate-50/70 rounded-2xl p-4 sm:p-6 border border-slate-100 flex items-center justify-center min-h-[440px]">
          
          <svg
            viewBox="0 0 100 110"
            className="w-full h-auto max-h-[520px] select-none"
          >
            {/* Background Karnataka State Boundary Schematic Silhouette */}
            <path
              d="M 28,15 L 45,8 L 68,6 L 72,12 L 62,28 L 78,35 L 75,50 L 80,68 L 82,85 L 70,95 L 60,102 L 45,95 L 35,85 L 28,65 L 22,45 L 28,25 Z"
              fill="#F1F5F9"
              stroke="#CBD5E1"
              strokeWidth="1"
              strokeDasharray="2,2"
            />

            {/* Render 31 District Geometric Interactive Points & Cards */}
            {DISTRICTS_DATA.map((district) => {
              const isFiltered = filteredDistricts.some((d) => d.id === district.id);
              const isHovered = hoveredDistrict?.id === district.id;
              const colorClass = getRegionColor(district.region, isHovered, isHovered);

              return (
                <g
                  key={district.id}
                  onClick={() => navigateToDistrict(district.id)}
                  onMouseEnter={() => setHoveredDistrict(district)}
                  className={`cursor-pointer transition-transform duration-200 ${
                    !isFiltered ? "opacity-25" : "opacity-100"
                  }`}
                >
                  {/* District Marker Circle */}
                  <circle
                    cx={district.coordinates.mapX}
                    cy={district.coordinates.mapY}
                    r={isHovered ? 3.6 : 2.5}
                    className={`${colorClass} transition-all duration-300 stroke-slate-700/60`}
                    strokeWidth="0.6"
                  />

                  {/* Pulsing indicator on hover */}
                  {isHovered && (
                    <circle
                      cx={district.coordinates.mapX}
                      cy={district.coordinates.mapY}
                      r={5.5}
                      fill="none"
                      stroke="#D97706"
                      strokeWidth="0.5"
                      className="animate-ping"
                    />
                  )}

                  {/* District Label Text */}
                  <text
                    x={district.coordinates.mapX}
                    y={district.coordinates.mapY + 4}
                    textAnchor="middle"
                    className={`text-[2.2px] font-bold tracking-tight select-none pointer-events-none ${
                      isHovered ? "fill-amber-900 font-extrabold" : "fill-slate-700"
                    }`}
                  >
                    {language === "kn" ? district.kannadaName : district.name}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Floating Map Legend */}
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200 text-[10px] space-y-1 shadow-sm hidden sm:block">
            <span className="font-bold text-slate-700 uppercase tracking-wider block mb-1">
              7 Tourism Regions:
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-300 border border-sky-500"></span>
              <span>Coastal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 border border-emerald-500"></span>
              <span>Malnad</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-300 border border-amber-500"></span>
              <span>North Karnataka</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-300 border border-rose-500"></span>
              <span>Kalyana Karnataka</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-300 border border-orange-500"></span>
              <span>South Karnataka</span>
            </div>
          </div>
        </div>

        {/* Dynamic District Preview Panel (Hover or Selected) */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          {hoveredDistrict ? (
            <div className="bg-gradient-to-b from-amber-50/50 to-white rounded-2xl p-5 sm:p-6 border border-amber-200 shadow-lg animate-fadeIn">
              
              <div className="relative h-44 rounded-xl overflow-hidden mb-4 shadow-sm">
                <img
                  src={hoveredDistrict.heroImage}
                  alt={hoveredDistrict.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-lg bg-amber-500 text-white shadow">
                  {hoveredDistrict.region}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-xs text-amber-300 font-kannada block">
                    {hoveredDistrict.kannadaName}
                  </span>
                  <h4 className="font-serif font-bold text-xl text-white">
                    {hoveredDistrict.name}
                  </h4>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {hoveredDistrict.shortDescription}
              </p>

              <div className="space-y-2 mb-5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  {language === "kn" ? "ಪ್ರಸಿದ್ಧ ಆಕರ್ಷಣೆಗಳು:" : "Key Attractions:"}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {hoveredDistrict.highlights.slice(0, 4).map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 py-3 border-t border-amber-100 mb-4">
                <div>
                  <span className="text-slate-400 block text-[10px]">Best Season:</span>
                  <span className="font-semibold text-slate-700">{hoveredDistrict.bestSeason}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Recommended:</span>
                  <span className="font-semibold text-slate-700">{hoveredDistrict.recommendedDuration}</span>
                </div>
              </div>

              <button
                onClick={() => navigateToDistrict(hoveredDistrict.id)}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <span>{language === "kn" ? `${hoveredDistrict.kannadaName} ಜಿಲ್ಲೆ ಪರಿಚಯ` : `Explore ${hoveredDistrict.name}`}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>
          ) : (
            <div className="bg-slate-50 rounded-2xl p-8 border border-dashed border-slate-200 text-center flex flex-col items-center justify-center min-h-[360px]">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-lg font-bold text-slate-800 mb-1">
                {language === "kn" ? "ಯಾವುದೇ ಜಿಲ್ಲೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ" : "Select a District"}
              </h4>
              <p className="text-xs text-slate-500 max-w-xs leading-relaxed mb-4">
                {language === "kn"
                  ? "ನಕ್ಷೆಯ ಮೇಲೆ ಜಿಲ್ಲೆಯ ವೃತ್ತದ ಮೇಲೆ ಕರ್ಸರ್ ಇರಿಸಿ ಅಥವಾ ಕೆಳಗಿನ ಗ್ರಿಡ್‌ನಿಂದ ಜಿಲ್ಲೆಯನ್ನು ಆರಿಸಿ."
                  : "Hover over the map or click any of the 31 district markers to reveal authentic attractions, food specialties, and stays."}
              </p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700">
                <Sparkles className="w-3.5 h-3.5" />
                <span>All 31 Karnataka Districts Ready</span>
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
