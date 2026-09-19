import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { DISTRICTS_DATA, getDistrictById } from "../data/districts";
import { KARNATAKA_GEOJSON } from "../data/karnatakaGeoJSON";
import { useApp } from "../context/AppContext";
import { District, RegionType } from "../data/types";
import { 
  MapPin, 
  Sparkles, 
  Compass, 
  Search, 
  RotateCcw, 
  Layers, 
  Eye, 
  ArrowRight,
  Clock,
  Calendar,
  Utensils,
  ChevronRight,
  ShieldCheck,
  Hotel,
  Bus
} from "lucide-react";

// Regional Color Mapping for 7 Tourism Regions
const REGION_COLORS: Record<string, string> = {
  "Coastal Karnataka": "#0284C7", // Sky Blue
  "Malnad": "#059669",            // Emerald Green
  "North Karnataka": "#D97706",   // Amber / Gold
  "Kalyana Karnataka": "#E11D48", // Rose / Coral
  "Central Karnataka": "#7C3AED", // Purple / Violet
  "South Karnataka": "#EA580C",   // Deep Orange
  "Bengaluru": "#4F46E5"          // Indigo
};

export const KarnatakaMap: React.FC = () => {
  const { language, navigateToDistrict, setActiveView, mapFocusDistrictId, setMapFocusDistrictId } = useApp();

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const geojsonLayerRef = useRef<L.GeoJSON | null>(null);

  const [selectedDistrict, setSelectedDistrict] = useState<District>(
    DISTRICTS_DATA.find(d => d.id === "vijayanagara") || DISTRICTS_DATA[0]
  );
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [mapSearch, setMapSearch] = useState<string>("");
  const [showRegions, setShowRegions] = useState<boolean>(true);
  const [showBoundaries, setShowBoundaries] = useState<boolean>(true);

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

  // Karnataka full geographic bounds
  const karnatakaBounds = L.latLngBounds(
    [11.55, 74.05], // South-West (Arabian sea coast near Mangaluru / Kasaragod)
    [18.45, 77.65]  // North-East (Bidar tip near Aurad)
  );

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Create Map with bounded coordinates
    const map = L.map(mapContainerRef.current, {
      center: [14.9, 75.85],
      zoom: 7,
      minZoom: 6,
      maxZoom: 12,
      maxBounds: L.latLngBounds([10.5, 73.0], [19.5, 79.0]),
      maxBoundsViscosity: 0.8,
      zoomControl: false // Custom controls placed cleanly
    });

    // High-resolution public OpenStreetMap tile layer (100% Free, No API Key Required)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(map);

    // Initial view fitting Karnataka
    map.fitBounds(karnatakaBounds, { padding: [15, 15] });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update GeoJSON Layer with district polygons and styling
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (geojsonLayerRef.current) {
      map.removeLayer(geojsonLayerRef.current);
    }

    const geoLayer = L.geoJSON(KARNATAKA_GEOJSON, {
      style: (feature) => {
        const dId = feature?.properties?.id;
        const region = feature?.properties?.region || "Other";
        const isSelected = selectedDistrict?.id === dId;
        const matchesRegion = selectedRegion === "All" || region === selectedRegion;
        const matchesSearch = !mapSearch.trim() || 
          (feature?.properties?.name?.toLowerCase().includes(mapSearch.toLowerCase()) || 
           feature?.properties?.kannadaName?.includes(mapSearch));

        const baseColor = REGION_COLORS[region] || "#0B5E8E";

        if (!matchesRegion || !matchesSearch) {
          return {
            fillColor: "#CBD5E1",
            fillOpacity: 0.1,
            color: "#94A3B8",
            weight: 0.5,
            opacity: 0.3
          };
        }

        if (isSelected) {
          return {
            fillColor: baseColor,
            fillOpacity: 0.85,
            color: "#D99A24", // Royal Gold selected border
            weight: 3.5,
            opacity: 1
          };
        }

        return {
          fillColor: showRegions ? baseColor : "#E2E8F0",
          fillOpacity: showRegions ? 0.45 : 0.2,
          color: showBoundaries ? "#073B5C" : "transparent",
          weight: 1.5,
          opacity: 0.8
        };
      },
      onEachFeature: (feature, layer) => {
        const props = feature.properties;
        const matched = getDistrictById(props.id);

        // Tooltip on Hover
        layer.bindTooltip(`
          <div style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 12px; padding: 2px 4px;">
            <div style="font-weight: 800; color: #032B43;">${props.name}</div>
            <div style="font-size: 10px; color: #D99A24; font-weight: 600;">${props.kannadaName}</div>
            <div style="font-size: 9px; color: #64748B;">${props.region}</div>
          </div>
        `, { sticky: true, className: "custom-leaflet-tooltip" });

        layer.on({
          mouseover: (e) => {
            const l = e.target;
            if (props.id !== selectedDistrict?.id) {
              l.setStyle({
                fillOpacity: 0.7,
                weight: 2.5,
                color: "#D99A24"
              });
            }
          },
          mouseout: (e) => {
            const l = e.target;
            if (props.id !== selectedDistrict?.id) {
              geoLayer.resetStyle(l);
            }
          },
          click: () => {
            if (matched) {
              setSelectedDistrict(matched);
              // Pan smoothly to district
              const bounds = (layer as any).getBounds();
              map.flyToBounds(bounds, { maxZoom: 9, duration: 0.8, padding: [40, 40] });
            }
          }
        });
      }
    }).addTo(map);

    geojsonLayerRef.current = geoLayer;
  }, [selectedDistrict, selectedRegion, mapSearch, showRegions, showBoundaries]);

  // Handle external map focus from AppContext (e.g. from AI assistant)
  useEffect(() => {
    if (!mapFocusDistrictId) return;
    const district = getDistrictById(mapFocusDistrictId);
    if (district && mapInstanceRef.current && geojsonLayerRef.current) {
      setSelectedDistrict(district);
      
      // Find layer
      geojsonLayerRef.current.eachLayer((layer: any) => {
        if (layer.feature?.properties?.id === mapFocusDistrictId) {
          const bounds = layer.getBounds();
          mapInstanceRef.current?.flyToBounds(bounds, { maxZoom: 9, duration: 1.0, padding: [40, 40] });
        }
      });
      // Clear focus id after consumption
      setMapFocusDistrictId(null);
    }
  }, [mapFocusDistrictId]);

  const handleResetView = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyToBounds(karnatakaBounds, { padding: [15, 15], duration: 0.8 });
      setSelectedRegion("All");
      setMapSearch("");
    }
  };

  const handleZoomIn = () => {
    mapInstanceRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapInstanceRef.current?.zoomOut();
  };

  const currentRegionColor = REGION_COLORS[selectedDistrict.region] || "#0B5E8E";

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-xl border border-slate-200 overflow-hidden space-y-6">
      
      {/* 1. Header & GIS Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#073B5C] border border-blue-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5 text-[#0B5E8E]" />
            <span>{language === "kn" ? "ಅಧಿಕೃತ ಭೌಗೋಳಿಕ ಜಿಐಎಸ್ ನಕಾಶೆ" : "Official Geographic GIS Map"}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#032B43]">
            {language === "kn" ? "೩೧ ಜಿಲ್ಲೆಗಳ ನೈಜ ಭೌಗೋಳಿಕ ನಕಾಶೆ" : "Real Interactive Karnataka Map"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {language === "kn"
              ? "ನಿಜವಾದ ಭೌಗೋಳಿಕ ಗಡಿಗಳು, 7 ಪ್ರವಾಸೋದ್ಯಮ ವಲಯಗಳು ಮತ್ತು ಅರೇಬಿಯನ್ ಸಮುದ್ರ ತೀರದೊಂದಿಗೆ ಎಲ್ಲಾ 31 ಜಿಲ್ಲೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ."
              : "Explore all 31 districts, authentic geographic boundaries, 7 tourism regions, and the Arabian Sea coast."}
          </p>
        </div>

        {/* Quick Search inside Map */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={language === "kn" ? "31 ಜಿಲ್ಲೆಗಳಲ್ಲಿ ಹುಡುಕಿ..." : "Search 31 districts..."}
            value={mapSearch}
            onChange={(e) => setMapSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5E8E] font-medium"
          />
        </div>
      </div>

      {/* 2. 7 Region Filter Pills & GIS Toggles */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none max-w-full">
          {regions.map((r) => {
            const isSel = selectedRegion === r;
            const col = REGION_COLORS[r];
            return (
              <button
                key={r}
                onClick={() => setSelectedRegion(r)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer border ${
                  isSel
                    ? "bg-[#032B43] text-white border-[#032B43] shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
                }`}
              >
                {col && <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: col }} />}
                <span>{r}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowRegions(!showRegions)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
              showRegions 
                ? "bg-blue-50 text-[#073B5C] border-blue-200" 
                : "bg-slate-100 text-slate-500 border-slate-200"
            }`}
            title="Toggle Region Overlays"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Regions</span>
          </button>

          <button
            onClick={() => setShowBoundaries(!showBoundaries)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
              showBoundaries 
                ? "bg-blue-50 text-[#073B5C] border-blue-200" 
                : "bg-slate-100 text-slate-500 border-slate-200"
            }`}
            title="Toggle District Boundaries"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Borders</span>
          </button>

          <button
            onClick={handleResetView}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer border border-slate-200"
            title="Reset Map View"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3. Main GIS Layout: Leaflet Map (Left) + District Tourism Info Card (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Leaflet Real GIS Map Container (7 Cols) */}
        <div className="lg:col-span-7 relative h-[520px] sm:h-[620px] rounded-3xl overflow-hidden border border-slate-300 shadow-inner bg-slate-100">
          
          <div ref={mapContainerRef} className="w-full h-full z-10" />

          {/* Map Geographic Compass / Western Ghats / Arabian Sea Annotations */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/40 shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
            <span className="text-[11px] font-bold text-[#032B43] tracking-wide">
              Arabian Sea Coast (West)
            </span>
          </div>

          <div className="absolute bottom-4 left-4 z-20 pointer-events-none bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/40 shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#059669]" />
            <span className="text-[11px] font-bold text-[#032B43] tracking-wide">
              Western Ghats / Sahyadri Range
            </span>
          </div>

          {/* Custom Zoom Buttons */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5 shadow-md">
            <button
              onClick={handleZoomIn}
              className="w-8 h-8 rounded-xl bg-white hover:bg-slate-50 text-[#032B43] font-bold text-base flex items-center justify-center border border-slate-200 transition-colors cursor-pointer"
              title="Zoom In"
            >
              +
            </button>
            <button
              onClick={handleZoomOut}
              className="w-8 h-8 rounded-xl bg-white hover:bg-slate-50 text-[#032B43] font-bold text-base flex items-center justify-center border border-slate-200 transition-colors cursor-pointer"
              title="Zoom Out"
            >
              −
            </button>
          </div>

        </div>

        {/* District Tourism Information Card (5 Cols) */}
        <div className="lg:col-span-5 bg-gradient-to-b from-white to-slate-50 rounded-3xl p-6 border border-slate-200 shadow-md space-y-5">
          
          {/* District Header with Image & Title */}
          <div className="relative rounded-2xl overflow-hidden h-40 shadow-sm">
            <img
              src={selectedDistrict.heroImage}
              alt={selectedDistrict.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <div className="flex items-center gap-2 mb-1">
                <span 
                  className="px-2 py-0.5 rounded-md text-[10px] font-bold text-white uppercase tracking-wider"
                  style={{ backgroundColor: currentRegionColor }}
                >
                  {selectedDistrict.region}
                </span>
                <span className="text-[10px] text-amber-300 font-kannada">
                  {selectedDistrict.kannadaName}
                </span>
              </div>
              <h4 className="font-serif text-2xl font-extrabold tracking-wide leading-tight">
                {selectedDistrict.name}
              </h4>
            </div>
          </div>

          {/* Tagline & Short Description */}
          <div className="space-y-1.5">
            <p className="text-xs font-bold text-[#D99A24] italic">
              "{selectedDistrict.tagline}"
            </p>
            <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
              {selectedDistrict.shortDescription}
            </p>
          </div>

          {/* Quick Metrics (Duration, Best Season, HQ) */}
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0B5E8E] shrink-0" />
              <div>
                <span className="text-slate-400 block text-[9px] uppercase font-semibold">Suggested Duration</span>
                <span className="font-bold text-slate-800">{selectedDistrict.recommendedDuration}</span>
              </div>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#D99A24] shrink-0" />
              <div>
                <span className="text-slate-400 block text-[9px] uppercase font-semibold">Best Season</span>
                <span className="font-bold text-slate-800 truncate block">{selectedDistrict.bestSeason.split("(")[0]}</span>
              </div>
            </div>
          </div>

          {/* Major Highlights */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Key Tourist Attractions
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedDistrict.highlights.slice(0, 4).map((hl, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#073B5C] border border-blue-100 text-[11px] font-medium"
                >
                  {hl}
                </span>
              ))}
            </div>
          </div>

          {/* Food Specialty */}
          {selectedDistrict.foodSpecialties.length > 0 && (
            <div className="space-y-1 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block flex items-center gap-1">
                <Utensils className="w-3 h-3 text-amber-600" /> Authentic Food
              </span>
              <p className="text-xs text-slate-700 font-semibold">
                {selectedDistrict.foodSpecialties[0].name} — <span className="font-normal text-slate-500 text-[11px]">{selectedDistrict.foodSpecialties[0].description}</span>
              </p>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-2 space-y-2">
            <button
              onClick={() => navigateToDistrict(selectedDistrict.id)}
              className="w-full py-3 rounded-xl bg-[#032B43] hover:bg-[#073B5C] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 shadow-md cursor-pointer"
            >
              <span>Explore {selectedDistrict.name} Full Guide</span>
              <ArrowRight className="w-4 h-4 text-[#D99A24]" />
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setActiveView("planner");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="py-2.5 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Plan Trip</span>
              </button>

              <button
                onClick={() => {
                  setActiveView("ai-assistant");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#073B5C] border border-blue-200 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <span>Ask YAATRI AI</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#0B5E8E]" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* 4. 7 Regions Legend Bar */}
      <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
        <span className="font-bold text-[#032B43] uppercase text-[10px] tracking-wider">
          7 Tourism Regions:
        </span>
        <div className="flex flex-wrap items-center gap-3">
          {Object.entries(REGION_COLORS).map(([rName, color]) => (
            <div key={rName} className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-[11px] font-medium text-slate-700">{rName}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
