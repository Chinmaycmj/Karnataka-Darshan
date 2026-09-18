import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { DISTRICTS_DATA } from "../data/districts";
import { PACKAGES_DATA } from "../data/packages";
import { DistrictCard } from "../components/DistrictCard";
import { PackageCard } from "../components/PackageCard";
import { 
  Bookmark, 
  MapPin, 
  Calendar, 
  Bus, 
  Hotel, 
  CheckCircle2, 
  Compass, 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Trash2, 
  Clock,
  ShieldCheck,
  PhoneCall
} from "lucide-react";

export const MyTripsPage: React.FC = () => {
  const { 
    bookings, 
    savedPackages, 
    savedDistricts, 
    toggleSavePackage, 
    toggleSaveDistrict, 
    setActiveView, 
    language 
  } = useApp();

  const [activeTab, setActiveTab] = useState<"bookings" | "packages" | "districts">("bookings");

  const bookmarkedDistrictsList = DISTRICTS_DATA.filter(d => savedDistricts.includes(d.id));
  const bookmarkedPackagesList = PACKAGES_DATA.filter(p => savedPackages.includes(p.id));

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-amber-900 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-800/60 border border-amber-600/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Bookmark className="w-3.5 h-3.5" />
            <span>{language === "kn" ? "ನನ್ನ ಪ್ರವಾಸ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್" : "Personal Travel Dashboard"}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white mb-4">
            {language === "kn" ? "ನನ್ನ ಪ್ರವಾಸಗಳು ಮತ್ತು ದಾಖಲೆಗಳು" : "My Trips & Itineraries"}
          </h1>
          <p className="text-amber-100/90 text-base sm:text-lg max-w-3xl leading-relaxed">
            {language === "kn"
              ? "ನಿಮ್ಮ ಎಲ್ಲಾ ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಇ-ಪಾಸ್‌ಗಳು, ಯಾತ್ರಿ ನಿವಾಸ ಮುಂಗಡ ಬುಕಿಂಗ್‌ಗಳು, ಉಳಿಸಲಾದ ಪ್ರವಾಸ ಪ್ಯಾಕೇಜ್‌ಗಳು ಮತ್ತು ಮೆಚ್ಚಿನ ಜಿಲ್ಲೆಗಳ ವಿವರಗಳನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ನಿರ್ವಹಿಸಿ."
              : "Manage your confirmed KSRTC bus tickets, official Yaatri Niwaas reservations, custom circuit plans, and bookmarked destinations across Karnataka."}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-amber-800/40 max-w-lg text-left">
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">{bookings.length}</div>
              <div className="text-xs text-amber-200/80">Confirmed Bookings</div>
            </div>
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">{savedPackages.length}</div>
              <div className="text-xs text-amber-200/80">Saved Packages</div>
            </div>
            <div className="bg-black/20 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">{savedDistricts.length}</div>
              <div className="text-xs text-amber-200/80">Saved Districts</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200/80 p-2 sm:p-3 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab("bookings")}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === "bookings"
                ? "bg-amber-800 text-white shadow-md"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{language === "kn" ? "ದೃಢೀಕೃತ ಬುಕಿಂಗ್‌ಗಳು" : "Confirmed Bookings"} ({bookings.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("packages")}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === "packages"
                ? "bg-amber-800 text-white shadow-md"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>{language === "kn" ? "ಉಳಿಸಿದ ಪ್ಯಾಕೇಜ್‌ಗಳು" : "Saved Packages"} ({savedPackages.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("districts")}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === "districts"
                ? "bg-amber-800 text-white shadow-md"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>{language === "kn" ? "ಉಳಿಸಿದ ಜಿಲ್ಲೆಗಳು" : "Saved Districts"} ({savedDistricts.length})</span>
          </button>
        </div>

        {/* Tab 1: Confirmed Bookings */}
        {activeTab === "bookings" && (
          <div className="mt-8 space-y-6">
            {bookings.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
                <FileText className="w-14 h-14 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">No Bookings Yet</h3>
                <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
                  You have not booked any KSRTC buses, Yaatri Niwaas rooms, or tour circuits yet.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => setActiveView("packages")}
                    className="px-5 py-2.5 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs rounded-xl shadow transition-all"
                  >
                    Explore Tour Packages
                  </button>
                  <button
                    onClick={() => setActiveView("transport")}
                    className="px-5 py-2.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs rounded-xl shadow transition-all"
                  >
                    Book KSRTC Bus
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          {booking.status}
                        </span>
                        <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                          ID: {booking.id}
                        </span>
                        <span className="text-xs text-slate-400">
                          Booked on: {booking.bookingDate}
                        </span>
                      </div>

                      <h3 className="text-xl font-serif font-black text-slate-900">
                        {booking.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
                        <div className="flex items-center gap-1 font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-amber-600" />
                          <span>Travel Date: {booking.travelDate}</span>
                        </div>

                        {booking.travelDetails && (
                          <div className="flex items-center gap-1">
                            <Bus className="w-3.5 h-3.5 text-red-600" />
                            <span>{booking.travelDetails.from} → {booking.travelDetails.to} (Seats: {booking.travelDetails.seats.join(", ")})</span>
                          </div>
                        )}

                        {booking.stayDetails && (
                          <div className="flex items-center gap-1">
                            <Hotel className="w-3.5 h-3.5 text-amber-700" />
                            <span>{booking.stayDetails.hotelName} ({booking.stayDetails.nights} Nights)</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between gap-3 shrink-0 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-bold block md:text-right">Total Fare</span>
                        <div className="text-2xl font-black font-serif text-emerald-700">
                          ₹{booking.totalCost.toLocaleString("en-IN")}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setActiveView("confirmation");
                        }}
                        className="px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all w-full sm:w-auto justify-center"
                      >
                        <FileText className="w-4 h-4 text-amber-800" />
                        <span>View Pass / E-Ticket</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Saved Tour Packages */}
        {activeTab === "packages" && (
          <div className="mt-8">
            {bookmarkedPackagesList.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
                <Bookmark className="w-14 h-14 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">No Saved Tour Packages</h3>
                <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
                  Browse our multi-district thematic circuits and bookmark packages to compare them or book later.
                </p>
                <button
                  onClick={() => setActiveView("packages")}
                  className="px-5 py-2.5 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs rounded-xl shadow transition-all"
                >
                  Explore Karnataka Packages
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {bookmarkedPackagesList.map(pkg => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Saved Districts */}
        {activeTab === "districts" && (
          <div className="mt-8">
            {bookmarkedDistrictsList.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
                <MapPin className="w-14 h-14 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">No Saved Districts</h3>
                <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
                  Save districts you want to visit across the 7 regions of Karnataka to plan your future itinerary.
                </p>
                <button
                  onClick={() => setActiveView("districts")}
                  className="px-5 py-2.5 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs rounded-xl shadow transition-all"
                >
                  Browse All 31 Districts
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {bookmarkedDistrictsList.map(district => (
                  <DistrictCard key={district.id} district={district} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Traveler Help Bar */}
        <div className="mt-14 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-3 bg-amber-100 rounded-2xl text-amber-800">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Need changes to your reservation?</h4>
              <p className="text-xs text-slate-500">Contact the 24/7 Karnataka Tourism helpline at 1800-425-25555 or Yaatri Niwaas Central Desk.</p>
            </div>
          </div>
          <button
            onClick={() => setActiveView("planner")}
            className="px-5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2 shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>Create New Itinerary</span>
          </button>
        </div>

      </div>
    </div>
  );
};
