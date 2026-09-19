import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { getPackageById, PACKAGES_DATA } from "../data/packages";
import { UserTripBooking } from "../data/types";
import { 
  Clock, 
  MapPin, 
  Calendar, 
  Check, 
  X, 
  ArrowLeft, 
  Bookmark, 
  ShieldCheck, 
  Sun, 
  Sunrise, 
  Sunset, 
  Moon, 
  Bus, 
  Hotel,
  Navigation
} from "lucide-react";

export const PackageDetailPage: React.FC = () => {
  const { 
    selectedPackageId, 
    setActiveView, 
    savedPackages, 
    toggleSavePackage, 
    addBooking, 
    language 
  } = useApp();

  const pkg = getPackageById(selectedPackageId || "coastal-karnataka-odyssey") || PACKAGES_DATA[0];
  const isSaved = savedPackages.includes(pkg.id);

  const [travelDate, setTravelDate] = useState("2026-10-15");
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [leadTraveler, setLeadTraveler] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const totalCost = pkg.startingPrice * guestsCount;

  const handleBooking = () => {
    if (!leadTraveler.trim()) {
      alert("Please enter lead traveler name.");
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(mobileNumber.trim())) {
      alert("Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).");
      return;
    }

    const booking: UserTripBooking = {
      id: `PKG-YN-${Math.floor(100000 + Math.random() * 900000)}`,
      bookingDate: new Date().toISOString().split("T")[0],
      travelDate: travelDate,
      type: "package",
      title: `${pkg.name} (${pkg.durationDays}D/${pkg.durationNights}N)`,
      packageId: pkg.id,
      totalCost: totalCost,
      status: "Confirmed",
      travelDetails: {
        busOperator: "KSRTC Airavat Club Class Sightseeing Circuit",
        serviceType: "Airavat Club Class",
        from: pkg.routeMapPoints[0]?.name || "Bengaluru",
        to: pkg.routeMapPoints[pkg.routeMapPoints.length - 1]?.name || "Circuit End",
        departureTime: "06:00 AM",
        seats: ["Assigned on Boarding"]
      },
      stayDetails: {
        hotelName: `Yaatri Niwaas Heritage Network (${pkg.districtNames.join(" & ")})`,
        roomType: "Deluxe AC",
        nights: pkg.durationNights,
        guests: guestsCount
      },
      itinerarySummary: pkg.itinerary.map(day => `Day ${day.dayNumber}: ${day.title} (${day.stayLocation})`)
    };

    addBooking(booking);
  };

  return (
    <div className="pb-20 space-y-16 animate-fadeIn">
      
      {/* 1. PACKAGE HERO */}
      <section className="relative h-[60vh] sm:h-[65vh] flex items-end justify-start bg-slate-900 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>

        {/* Back Button */}
        <div className="absolute top-6 left-4 sm:left-8 z-20">
          <button
            onClick={() => setActiveView("packages")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 text-xs font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Packages</span>
          </button>
        </div>

        {/* Bookmark Button */}
        <div className="absolute top-6 right-4 sm:right-8 z-20">
          <button
            onClick={() => toggleSavePackage(pkg.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl backdrop-blur-md text-xs font-bold transition-all ${
              isSaved 
                ? "bg-amber-600 text-white shadow-md" 
                : "bg-black/40 text-white hover:bg-black/60 border border-white/20"
            }`}
          >
            <Bookmark className="w-4 h-4 fill-current" />
            <span>{isSaved ? "Saved" : "Save Package"}</span>
          </button>
        </div>

        {/* Hero Title and Highlights */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider">
              {pkg.durationDays} Days / {pkg.durationNights} Nights
            </span>
            <span className="px-3 py-1 rounded-lg bg-black/50 text-white backdrop-blur-md border border-white/20 font-bold text-xs">
              {pkg.travelStyle} Style
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            {pkg.name}
          </h1>

          <div className="flex items-center gap-2 text-amber-300 text-sm font-medium">
            <MapPin className="w-4 h-4" />
            <span>Districts Covered: {pkg.districtNames.join(" • ")}</span>
          </div>
        </div>
      </section>

      {/* 2. MAIN LAYOUT: ITINERARY + BOOKING WIDGET */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Itinerary & Route Map Content (8 Cols) */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* INTERACTIVE ROUTE MAP WAYPOINTS */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl space-y-4 shadow-md">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <Navigation className="w-4 h-4" />
              <span>Multi-District Travel Route Map</span>
            </div>
            <h3 className="font-serif font-bold text-xl text-white">
              Connected Journey Circuit
            </h3>

            {/* Route Waypoints Flow */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {pkg.routeMapPoints.map((pt, idx) => (
                <React.Fragment key={idx}>
                  <div className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 ${
                    pt.type === "start" || pt.type === "end"
                      ? "bg-amber-500 text-slate-950"
                      : (pt.type === "stay" ? "bg-amber-900/60 text-amber-200 border border-amber-500/50" : "bg-slate-800 text-slate-200")
                  }`}>
                    {pt.type === "stay" && <Hotel className="w-3.5 h-3.5" />}
                    {pt.type === "attraction" && <MapPin className="w-3.5 h-3.5 text-amber-400" />}
                    <span>{pt.name}</span>
                  </div>
                  {idx < pkg.routeMapPoints.length - 1 && (
                    <span className="text-amber-500 text-xs font-extrabold">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-4">
              <span>✓ AC Sanitized Transport</span>
              <span>✓ Certified Local Tour Manager</span>
              <span>✓ Verified Yaatri Niwaas Stays</span>
            </div>
          </div>

          {/* DAY BY DAY TIMELINE */}
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-2xl text-slate-900">
              Day-by-Day Comprehensive Itinerary
            </h3>

            <div className="space-y-8">
              {pkg.itinerary.map((day) => (
                <div key={day.dayNumber} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
                  
                  {/* Day Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-2xl bg-amber-600 text-white font-serif font-extrabold text-lg flex items-center justify-center shrink-0">
                        D{day.dayNumber}
                      </span>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
                          Day {day.dayNumber} • {day.districtName} District
                        </span>
                        <h4 className="font-serif font-bold text-lg sm:text-xl text-slate-900">
                          {day.title}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1 rounded-xl border border-slate-200 shrink-0">
                      <Hotel className="w-3.5 h-3.5 text-amber-600" />
                      <span className="truncate max-w-[200px]">{day.stayLocation}</span>
                    </div>
                  </div>

                  {/* Day Activities (Morning, Afternoon, Evening, Night) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {day.activities.map((act, aIdx) => {
                      const getIcon = () => {
                        switch (act.timeOfDay) {
                          case "Morning": return <Sunrise className="w-4 h-4 text-amber-500" />;
                          case "Afternoon": return <Sun className="w-4 h-4 text-orange-500" />;
                          case "Evening": return <Sunset className="w-4 h-4 text-rose-500" />;
                          case "Night": return <Moon className="w-4 h-4 text-indigo-400" />;
                        }
                      };

                      return (
                        <div key={aIdx} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-1">
                          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                            {getIcon()}
                            <span>{act.timeOfDay}: {act.title}</span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {act.description}
                          </p>
                          <span className="text-[10px] text-amber-700 font-semibold block pt-1">
                            📍 {act.location}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* INCLUSIONS & EXCLUSIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200">
            <div>
              <h4 className="font-serif font-bold text-base text-slate-900 mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" />
                <span>Package Inclusions</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-base text-slate-900 mb-3 flex items-center gap-2">
                <X className="w-5 h-5 text-rose-600" />
                <span>Exclusions</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {pkg.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Right Sticky Booking Box (4 Cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
            
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                Starting Price
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-price font-extrabold text-3xl text-amber-950">
                  ₹{pkg.startingPrice.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-slate-500 font-medium">/ person</span>
              </div>
              <p className="text-[11px] text-emerald-700 font-semibold mt-1">
                ✓ Inclusive of GST, Transport & Yaatri Stays
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Journey Start Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Number of Travelers
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 font-semibold bg-white"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? "Traveler" : "Travelers"}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Lead Traveler Name *
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={leadTraveler}
                  onChange={(e) => setLeadTraveler(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  placeholder="10-digit phone"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200"
                />
              </div>

            </div>

            {/* Total Computation */}
            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Base Fare ({guestsCount} × ₹{pkg.startingPrice}):</span>
                <span>₹{totalCost.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Transport & Stay Inclusions:</span>
                <span className="text-emerald-600 font-bold">Included</span>
              </div>
              <div className="flex justify-between text-slate-900 font-bold text-sm pt-2 border-t border-slate-100">
                <span>Total Amount:</span>
                <span className="font-price font-extrabold text-xl text-amber-950">
                  ₹{totalCost.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <button
              onClick={handleBooking}
              className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 shadow-lg shadow-amber-700/30 transition-all cursor-pointer font-sans"
            >
              Confirm Tour Booking
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>Instant Mock Confirmation • Free Cancellation</span>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
};
