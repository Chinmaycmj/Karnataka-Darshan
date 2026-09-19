import React, { useState } from "react";
import { DISTRICTS_DATA } from "../data/districts";
import { useApp } from "../context/AppContext";
import { District, RegionType } from "../data/types";
import { MapPin, Sparkles, ChevronRight, Eye, Compass, Waves, Trees, Search } from "lucide-react";

export const KarnatakaMap: React.FC = () => {
  const { language, navigateToDistrict } = useApp();
  const [hoveredDistrict, setHoveredDistrict] = useState<District | null>(DISTRICTS_DATA.find(d => d.id === "vijayanagara") || DISTRICTS_DATA[0]);
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

  const getDistrictFill = (region: RegionType, isHovered: boolean, isFiltered: boolean) => {
    if (!isFiltered) return "fill-slate-100 stroke-slate-300 opacity-30";
    if (isHovered) return "fill-amber-500 stroke-amber-800 stroke-[1.2] filter drop-shadow-md";

    switch (region) {
      case "Coastal Karnataka":
        return "fill-sky-100 hover:fill-sky-300 stroke-sky-500";
      case "Malnad":
        return "fill-emerald-100 hover:fill-emerald-300 stroke-emerald-600";
      case "North Karnataka":
        return "fill-amber-100 hover:fill-amber-300 stroke-amber-500";
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>{language === "kn" ? "ಕರ್ನಾಟಕ ಅಧಿಕೃತ ಭೌಗೋಳಿಕ ನಕಾಶೆ" : "Official Geographic Cartography"}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            {language === "kn" ? "ಜಿಲ್ಲಾವಾರು ಪ್ರವಾಸೋದ್ಯಮ ಅನ್ವೇಷಣೆ" : "Explore Karnataka by District"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {language === "kn"
              ? "ನಕಾಶೆಯಲ್ಲಿರುವ ಯಾವುದೇ ಜಿಲ್ಲೆಯ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಆಕರ್ಷಣೆಗಳು, ಯಾತ್ರಿ ನಿವಾಸ ಮತ್ತು ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಸೇವೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ."
              : "Interact with the state territory to inspect tourist focus sites, local cuisine, and official Yaatri Niwaas properties."}
          </p>
        </div>

        {/* Quick Search inside Map */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={language === "kn" ? "ಜಿಲ್ಲೆ ಹುಡುಕಿ..." : "Search 31 districts..."}
            value={mapSearch}
            onChange={(e) => setMapSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
          />
        </div>
      </div>

      {/* Region Filter Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto py-4 border-b border-slate-100 scrollbar-none">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap mr-1">
          {language === "kn" ? "ಪ್ರದೇಶ:" : "Region:"}
        </span>
        {regions.map((r) => (
          <button
            key={r}
            onClick={() => setSelectedRegion(r)}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all ${
              selectedRegion === r
                ? "bg-amber-800 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Main Map Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
        
        {/* SVG Realistic Cartography Map Area (8 Cols) */}
        <div className="lg:col-span-8 relative bg-gradient-to-b from-sky-50/40 via-amber-50/20 to-emerald-50/30 rounded-3xl p-4 sm:p-6 border border-slate-200/80 flex items-center justify-center min-h-[520px] overflow-hidden shadow-inner">
          
          {/* Watermark Details */}
          <div className="absolute top-4 left-4 flex items-center gap-2 text-sky-800/60 text-xs font-bold tracking-wider uppercase select-none pointer-events-none">
            <Waves className="w-4 h-4 text-sky-600" />
            <span>Arabian Sea Coast (320 km)</span>
          </div>

          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-emerald-800/60 text-xs font-bold tracking-wider uppercase select-none pointer-events-none">
            <Trees className="w-4 h-4 text-emerald-600" />
            <span>Western Ghats Sahyadri Belt</span>
          </div>

          <svg
            viewBox="0 0 100 115"
            className="w-full h-auto max-h-[580px] select-none filter drop-shadow-md"
          >
            <defs>
              {/* Coastal Water Gradient */}
              <linearGradient id="coastSea" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
              </linearGradient>

              {/* State Gradient */}
              <linearGradient id="stateBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFBEB" />
                <stop offset="50%" stopColor="#FEF3C7" />
                <stop offset="100%" stopColor="#ECFDF5" />
              </linearGradient>

              {/* Ghats Pattern */}
              <linearGradient id="ghatsGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Arabian Sea Blue Water Margin on the West Coast */}
            <path
              d="M 5,30 Q 15,65 18,98 L 26,98 Q 28,68 18,30 Z"
              fill="url(#coastSea)"
            />

            {/* Realistic Detailed Boundary of Karnataka State */}
            {/* Accurately contoured from Bidar (top) -> Raichur doab -> Kolar/Chintamani -> Chamarajanagar (bottom) -> Kodagu -> Mangaluru -> Karwar coast -> Belagavi -> Vijayapura -> Bidar */}
            <path
              d="
                M 68,6 
                C 71,5 73,8 74,13 
                C 72,18 69,22 71,27 
                C 74,30 80,31 82,36 
                C 81,42 76,46 74,51 
                C 75,56 79,61 78,67 
                C 80,72 87,74 86,79 
                C 84,83 78,85 76,88 
                C 73,92 68,97 64,103 
                C 60,107 57,106 55,102 
                C 51,98 47,96 44,93 
                C 39,90 35,88 33,83 
                C 30,76 29,67 26,60 
                C 24,54 21,50 19,45 
                C 20,40 23,37 25,32 
                C 27,27 30,22 35,18 
                C 41,13 47,10 54,8 
                Z
              "
              fill="url(#stateBody)"
              stroke="#B45309"
              strokeWidth="0.9"
              strokeLinejoin="round"
              className="transition-all duration-300"
            />

            {/* Western Ghats Natural Mountain Ridge Spine */}
            <path
              d="M 23,43 Q 27,65 35,84 Q 44,92 50,98"
              fill="none"
              stroke="#059669"
              strokeWidth="2.2"
              strokeDasharray="1,1.5"
              opacity="0.5"
            />

            {/* Sacred Rivers of Karnataka */}
            {/* Kaveri River */}
            <path
              d="M 44,93 Q 54,91 63,94 Q 72,96 76,98"
              fill="none"
              stroke="#0284c7"
              strokeWidth="0.5"
              strokeDasharray="2,1"
              opacity="0.6"
            />
            {/* Tungabhadra River */}
            <path
              d="M 38,62 Q 52,55 64,48 Q 74,42 78,38"
              fill="none"
              stroke="#0284c7"
              strokeWidth="0.5"
              strokeDasharray="2,1"
              opacity="0.6"
            />
            {/* Krishna River */}
            <path
              d="M 32,22 Q 46,24 60,25 Q 73,28 81,35"
              fill="none"
              stroke="#0284c7"
              strokeWidth="0.5"
              strokeDasharray="2,1"
              opacity="0.6"
            />

            {/* Coastal Indicator Labels */}
            <text x="8" y="58" className="text-[2px] font-bold fill-sky-800 tracking-wider rotate-[-75] select-none pointer-events-none opacity-60">
              ARABIAN SEA • ಕರಾವಳಿ ತೀರ
            </text>

            {/* Render All 31 Districts as Georeferenced Precision Hubs */}
            {DISTRICTS_DATA.map((district) => {
              const isFiltered = filteredDistricts.some((d) => d.id === district.id);
              const isHovered = hoveredDistrict?.id === district.id;
              const fillClass = getDistrictFill(district.region, isHovered, isFiltered);

              return (
                <g
                  key={district.id}
                  onClick={() => navigateToDistrict(district.id)}
                  onMouseEnter={() => setHoveredDistrict(district)}
                  className={`cursor-pointer transition-all duration-200 ${
                    !isFiltered ? "opacity-25" : "opacity-100"
                  }`}
                >
                  {/* Subtle district territory aura */}
                  <circle
                    cx={district.coordinates.mapX}
                    cy={district.coordinates.mapY}
                    r={isHovered ? 5.2 : 3.2}
                    className={`${fillClass} transition-all duration-300`}
                    strokeWidth="0.5"
                  />

                  {/* Pulsing beacon on hover */}
                  {isHovered && (
                    <circle
                      cx={district.coordinates.mapX}
                      cy={district.coordinates.mapY}
                      r={7}
                      fill="none"
                      stroke="#B45309"
                      strokeWidth="0.6"
                      className="animate-ping"
                    />
                  )}

                  {/* Inner pinpoint dot */}
                  <circle
                    cx={district.coordinates.mapX}
                    cy={district.coordinates.mapY}
                    r={0.9}
                    fill={isHovered ? "#FFFFFF" : "#78350F"}
                  />

                  {/* District Label Text */}
                  <text
                    x={district.coordinates.mapX}
                    y={district.coordinates.mapY + 3.8}
                    textAnchor="middle"
                    className={`text-[2.2px] tracking-tight select-none pointer-events-none transition-all ${
                      isHovered 
                        ? "fill-amber-950 font-black text-[2.8px]" 
                        : "fill-slate-800 font-bold"
                    }`}
                  >
                    {language === "kn" ? district.kannadaName : district.name}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Floating Map Legend */}
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-slate-200 text-[10px] space-y-1 shadow-sm hidden sm:block">
            <span className="font-bold text-slate-800 uppercase tracking-wider block mb-1">
              7 Tourism Regions:
            </span>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                <span>Coastal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>Malnad</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span>North KA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                <span>Kalyana KA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-violet-400"></span>
                <span>Central KA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
                <span>South KA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic District Preview Panel (Hover or Selected - 4 Cols) */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          {hoveredDistrict ? (
            <div className="bg-gradient-to-b from-amber-50/50 to-white rounded-3xl p-5 sm:p-6 border border-amber-200 shadow-xl animate-fadeIn">
              
              <div className="relative h-48 rounded-2xl overflow-hidden mb-4 shadow-sm group">
                <img
                  src={hoveredDistrict.heroImage}
                  alt={hoveredDistrict.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                <div className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-lg bg-amber-600 text-white shadow">
                  {hoveredDistrict.region}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-xs text-amber-300 font-kannada block font-medium">
                    {hoveredDistrict.kannadaName}
                  </span>
                  <h4 className="font-serif font-bold text-xl text-white leading-tight">
                    {hoveredDistrict.name}
                  </h4>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {hoveredDistrict.shortDescription}
              </p>

              {/* Key Attractions */}
              <div className="space-y-1.5 mb-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  {language === "kn" ? "ಪ್ರಮುಖ ಆಕರ್ಷಣೆಗಳು:" : "Focus Attractions:"}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {hoveredDistrict.highlights.slice(0, 4).map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white text-slate-700 border border-slate-200 shadow-2xs"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Authentic Food specialty pill */}
              <div className="bg-amber-50/80 p-3 rounded-xl border border-amber-200/80 mb-4 text-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                  Authentic Food Legend:
                </span>
                <span className="font-bold text-amber-950">
                  {hoveredDistrict.foodSpecialties[0]?.name}
                </span>
                <span className="text-amber-800/80 block text-[11px]">
                  {hoveredDistrict.foodSpecialties[0]?.description}
                </span>
              </div>

              {/* CTA Explore Button */}
              <button
                onClick={() => navigateToDistrict(hoveredDistrict.id)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <span>{language === "kn" ? "ಜಿಲ್ಲೆಯ ಸಮಗ್ರ ವಿವರ ನೋಡಿ" : `Explore ${hoveredDistrict.name}`}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>
          ) : (
            <div className="bg-slate-50 rounded-3xl p-8 text-center border border-slate-200 text-slate-400">
              <MapPin className="w-10 h-10 mx-auto mb-2 text-slate-300" />
              <p className="text-xs">Hover or click any district on the map to view authentic attractions, cuisine, and stays.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
