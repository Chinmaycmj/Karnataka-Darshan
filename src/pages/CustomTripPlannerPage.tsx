import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { DISTRICTS_DATA, getDistrictById } from "../data/districts";
import { DESTINATIONS_DATA } from "../data/destinations";
import { Destination, UserTripBooking } from "../data/types";
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Check, 
  Compass, 
  ArrowRight, 
  Hotel, 
  Bus, 
  Clock,
  Landmark,
  Waves,
  Trees,
  UtensilsCrossed,
  Flame,
  Camera,
  Heart
} from "lucide-react";

export const CustomTripPlannerPage: React.FC = () => {
  const { addBooking, language } = useApp();

  // Wizard state
  const [startingCity, setStartingCity] = useState("Bengaluru");
  const [durationDays, setDurationDays] = useState<number>(3);
  const [budgetLevel, setBudgetLevel] = useState<"Budget" | "Moderate" | "Luxury">("Moderate");
  const [travelStyle, setTravelStyle] = useState<"Solo" | "Couple" | "Family" | "Friends">("Family");
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["Heritage", "Nature"]);
  const [travelMode, setTravelMode] = useState<"KSRTC Bus" | "Private AC Cab" | "Self Drive">("KSRTC Bus");

  // Generated Plan State
  const [generatedPlan, setGeneratedPlan] = useState<{
    title: string;
    districtsVisited: string[];
    days: {
      dayNumber: number;
      districtName: string;
      morning: Destination;
      afternoon: Destination;
      evening: string;
      stay: string;
    }[];
    estimatedCost: number;
  } | null>(null);

  const interestOptions = [
    { id: "Heritage", label: "Heritage & History", icon: Landmark },
    { id: "Nature", label: "Nature & Waterfalls", icon: Trees },
    { id: "Coast", label: "Beaches & Coast", icon: Waves },
    { id: "Food", label: "Culinary & Food Trails", icon: UtensilsCrossed },
    { id: "Wildlife", label: "Wildlife & Safari", icon: Compass },
    { id: "Spiritual", label: "Spiritual & Temples", icon: Sparkles },
    { id: "Adventure", label: "Adventure & Treks", icon: Flame },
    { id: "Culture", label: "Folk Arts & Crafts", icon: Camera }
  ];

  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      if (selectedInterests.length === 1) return; // keep at least 1
      setSelectedInterests(prev => prev.filter(item => item !== id));
    } else {
      setSelectedInterests(prev => [...prev, id]);
    }
  };

  // SMART RULE-BASED ITINERARY GENERATOR
  const generateItinerary = () => {
    // 1. Determine region focus based on starting city and interests
    let focusDistricts: string[] = [];

    if (selectedInterests.includes("Coast")) {
      focusDistricts = ["udupi", "dakshina-kannada", "uttara-kannada"];
    } else if (selectedInterests.includes("Heritage")) {
      if (startingCity === "Hubballi" || startingCity === "Belagavi") {
        focusDistricts = ["bagalkote", "vijayanagara", "gadag", "vijayapura"];
      } else {
        focusDistricts = ["mysuru", "hassan", "mandya", "vijayanagara"];
      }
    } else if (selectedInterests.includes("Nature") || selectedInterests.includes("Wildlife")) {
      focusDistricts = ["kodagu", "chikkamagaluru", "shivamogga", "chamarajanagar"];
    } else {
      focusDistricts = ["bengaluru-urban", "ramanagara", "chikkaballapur", "tumakuru"];
    }

    // Filter authentic matching destinations
    const matchedDestinations = DESTINATIONS_DATA.filter(d => 
      focusDistricts.includes(d.districtId) || selectedInterests.includes(d.category)
    );

    // Build day-wise structure
    const daysData = [];
    const visitedDistrictsSet = new Set<string>();

    for (let i = 1; i <= durationDays; i++) {
      const targetDistrictId = focusDistricts[(i - 1) % focusDistricts.length];
      const districtObj = getDistrictById(targetDistrictId) || DISTRICTS_DATA[0];
      visitedDistrictsSet.add(districtObj.name);

      const districtDests = matchedDestinations.filter(d => d.districtId === targetDistrictId);
      const mD = districtDests[0] || matchedDestinations[(i * 2) % matchedDestinations.length] || DESTINATIONS_DATA[0];
      const aD = districtDests[1] || matchedDestinations[(i * 2 + 1) % matchedDestinations.length] || DESTINATIONS_DATA[1];

      const foodHighlight = districtObj.foodSpecialties[0]?.name || "Local traditional vegetarian thali";

      daysData.push({
        dayNumber: i,
        districtName: districtObj.name,
        morning: mD,
        afternoon: aD,
        evening: `Sunset walk & culinary exploration: Taste authentic ${foodHighlight} in ${districtObj.name}.`,
        stay: `Yaatri Niwaas — ${districtObj.name}`
      });
    }

    // Price calculation
    let dailyRate = 2200;
    if (budgetLevel === "Moderate") dailyRate = 3500;
    if (budgetLevel === "Luxury") dailyRate = 5800;

    const totalEstimate = dailyRate * durationDays;

    const generated = {
      title: `${durationDays}-Day Customized Karnataka ${selectedInterests.join(" & ")} Journey`,
      districtsVisited: Array.from(visitedDistrictsSet),
      days: daysData,
      estimatedCost: totalEstimate
    };

    setGeneratedPlan(generated);

    setTimeout(() => {
      document.getElementById("generated-itinerary-result")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleConfirmCustomTrip = () => {
    if (!generatedPlan) return;

    const newBooking: UserTripBooking = {
      id: `CUSTOM-YN-${Math.floor(100000 + Math.random() * 900000)}`,
      bookingDate: new Date().toISOString().split("T")[0],
      travelDate: new Date(Date.now() + 86400000 * 5).toISOString().split("T")[0],
      type: "custom",
      title: generatedPlan.title,
      totalCost: generatedPlan.estimatedCost,
      status: "Confirmed",
      travelDetails: {
        busOperator: `KSRTC ${travelMode}`,
        serviceType: "Airavat Club Class",
        from: startingCity,
        to: generatedPlan.districtsVisited.join(" → "),
        departureTime: "06:30 AM",
        seats: ["Reserved for Journey"]
      },
      stayDetails: {
        hotelName: `Yaatri Niwaas Network (${generatedPlan.districtsVisited.join(", ")})`,
        roomType: budgetLevel === "Luxury" ? "Heritage Suite" : "Deluxe AC",
        nights: durationDays - 1 || 1,
        guests: 2
      },
      itinerarySummary: generatedPlan.days.map(d => `Day ${d.dayNumber}: ${d.morning.name} & ${d.afternoon.name} (${d.districtName})`)
    };

    addBooking(newBooking);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>Rule-Based Intelligent Routing Engine</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-slate-900">
          BUILD YOUR OWN KARNATAKA TRIP
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Configure your preferences below. Our rule-based system curates an authentic day-by-day travel plan using destinations, stays, and transport connections across all 31 districts.
        </p>
      </div>

      {/* Interactive Input Form */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        
        {/* Step 1: Starting City & Duration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. Starting Hub
            </label>
            <select
              value={startingCity}
              onChange={(e) => setStartingCity(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 font-semibold text-sm bg-slate-50 focus:outline-none focus:border-amber-600"
            >
              <option value="Bengaluru">Bengaluru (Capital Hub)</option>
              <option value="Mysuru">Mysuru (Heritage Gateway)</option>
              <option value="Hubballi">Hubballi (North KA Hub)</option>
              <option value="Mangaluru">Mangaluru (Coastal Gateway)</option>
              <option value="Belagavi">Belagavi (Western Border)</option>
              <option value="Kalaburagi">Kalaburagi (Kalyana KA Hub)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              2. Number of Days
            </label>
            <div className="flex items-center gap-2">
              {[2, 3, 5, 7, 10].map((d) => (
                <button
                  key={d}
                  onClick={() => setDurationDays(d)}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                    durationDays === d
                      ? "bg-amber-600 text-white border-amber-700 shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {d}D
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              3. Budget Preference
            </label>
            <div className="flex items-center gap-2">
              {(["Budget", "Moderate", "Luxury"] as const).map((b) => (
                <button
                  key={b}
                  onClick={() => setBudgetLevel(b)}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                    budgetLevel === b
                      ? "bg-amber-600 text-white border-amber-700 shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              4. Travel Mode
            </label>
            <select
              value={travelMode}
              onChange={(e) => setTravelMode(e.target.value as any)}
              className="w-full p-3 rounded-xl border border-slate-200 font-semibold text-sm bg-slate-50 focus:outline-none focus:border-amber-600"
            >
              <option value="KSRTC Bus">KSRTC Airavat / Rajahamsa</option>
              <option value="Private AC Cab">Private Chauffeur AC Cab</option>
              <option value="Self Drive">Self-Drive Rental SUV</option>
            </select>
          </div>

        </div>

        {/* Step 2: Interests Multi-Select */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              5. Select Your Travel Interests (Select multiple)
            </label>
            <span className="text-xs text-amber-700 font-semibold">
              {selectedInterests.length} selected
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {interestOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = selectedInterests.includes(opt.id);
              return (
                <div
                  key={opt.id}
                  onClick={() => toggleInterest(opt.id)}
                  className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
                    isSelected
                      ? "border-amber-600 bg-amber-50 text-amber-950 font-bold shadow-xs"
                      : "border-slate-200 bg-slate-50/70 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isSelected ? "text-amber-600" : "text-slate-400"}`} />
                  <span className="text-xs">{opt.label}</span>
                  {isSelected && <Check className="w-4 h-4 text-amber-700 ml-auto" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button: GENERATE MY TRIP */}
        <div className="text-center pt-4 border-t border-slate-100">
          <button
            onClick={generateItinerary}
            className="px-8 py-4 rounded-2xl text-sm font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-lg hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>GENERATE MY TRIP</span>
          </button>
        </div>

      </div>

      {/* GENERATED ITINERARY RESULT DISPLAY */}
      {generatedPlan && (
        <div id="generated-itinerary-result" className="space-y-8 animate-scaleUp">
          
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950">
                Your Customized Karnataka Journey
              </span>
              <span className="font-serif font-extrabold text-2xl sm:text-3xl text-amber-400">
                Est. ₹{generatedPlan.estimatedCost.toLocaleString("en-IN")}
                <span className="text-xs font-normal text-slate-300"> (Total)</span>
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-white">
              {generatedPlan.title}
            </h2>

            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-amber-200">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Districts: {generatedPlan.districtsVisited.join(" → ")}</span>
              <span className="mx-2">•</span>
              <Bus className="w-4 h-4 text-amber-400" />
              <span>Travel Mode: {travelMode}</span>
            </div>
          </div>

          {/* Day Cards */}
          <div className="space-y-6">
            {generatedPlan.days.map((day) => (
              <div 
                key={day.dayNumber} 
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-2xl bg-amber-600 text-white font-serif font-extrabold flex items-center justify-center">
                      D{day.dayNumber}
                    </span>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                        {day.districtName} District
                      </span>
                      <h4 className="font-serif font-bold text-lg text-slate-900">
                        Exploration in {day.districtName}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-3 py-1 rounded-xl border border-slate-200">
                    <Hotel className="w-3.5 h-3.5 text-amber-600" />
                    <span>{day.stay}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Morning Attraction */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex gap-3">
                    <img src={day.morning.image} alt={day.morning.name} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold text-amber-600 uppercase">Morning Highlight</span>
                      <h5 className="font-bold text-sm text-slate-800">{day.morning.name}</h5>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">{day.morning.description}</p>
                    </div>
                  </div>

                  {/* Afternoon Attraction */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex gap-3">
                    <img src={day.afternoon.image} alt={day.afternoon.name} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold text-amber-600 uppercase">Afternoon Highlight</span>
                      <h5 className="font-bold text-sm text-slate-800">{day.afternoon.name}</h5>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">{day.afternoon.description}</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 bg-amber-50/60 p-3 rounded-xl border border-amber-200/80">
                  🍛 <strong>Evening Food & Sightseeing:</strong> {day.evening}
                </p>
              </div>
            ))}
          </div>

          {/* Confirm and Book Action */}
          <div className="bg-amber-100/60 p-6 rounded-3xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif font-bold text-lg text-slate-900">
                Ready to Lock in Your Journey?
              </h4>
              <p className="text-xs text-slate-600">
                Includes verified Yaatri Niwaas reservations, KSRTC bus connection schedule, and digital tour pass.
              </p>
            </div>

            <button
              onClick={handleConfirmCustomTrip}
              className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-amber-700 hover:bg-amber-800 shadow-md shadow-amber-700/30 transition-all cursor-pointer shrink-0"
            >
              Confirm & Book This Journey
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
