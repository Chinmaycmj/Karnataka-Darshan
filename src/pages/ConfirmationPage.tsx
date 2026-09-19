import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { useApp } from "../context/AppContext";
import { 
  CheckCircle, 
  Download, 
  Printer, 
  MapPin, 
  Calendar, 
  Bus, 
  Hotel, 
  ShieldCheck, 
  ArrowRight, 
  Share2, 
  Sparkles, 
  PhoneCall, 
  QrCode,
  Compass,
  FileCheck
} from "lucide-react";

export const ConfirmationPage: React.FC = () => {
  const { latestBooking, bookings, setActiveView, language } = useApp();
  const booking = latestBooking || bookings[0];

  useEffect(() => {
    // Fire festive Karnataka celebratory confetti
    try {
      const count = 200;
      const defaults = {
        origin: { y: 0.7 }
      };

      const fire = (particleRatio: number, opts: confetti.Options) => {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      };

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
        colors: ["#dc2626", "#f59e0b", "#10b981", "#ffffff"]
      });
      fire(0.2, {
        spread: 60,
        colors: ["#d97706", "#b45309", "#fcd34d"]
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45
      });
    } catch {
      // Confetti fallback if canvas not available
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (!booking) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md text-center shadow-lg border border-slate-200">
          <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-800 mb-2">No Active Booking Found</h2>
          <p className="text-slate-500 text-sm mb-6">Explore our curated Karnataka circuits or official Yaatri Niwaas properties to make a reservation.</p>
          <button
            onClick={() => setActiveView("home")}
            className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm rounded-xl"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100/70 py-10 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Success Alert Banner (Hidden on print) */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden print:hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <div>
                <span className="inline-block px-3 py-0.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-1">
                  Official Confirmation • ಅಧಿಕೃತ ಮುಂಗಡ ಬುಕಿಂಗ್
                </span>
                <h1 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-white">
                  Booking Confirmed!
                </h1>
                <p className="text-emerald-100 text-sm mt-0.5">
                  Your Karnataka Tourism reservation voucher has been generated and confirmed.
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 text-xs font-bold shadow transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>Print Pass / PDF</span>
              </button>
              <button
                onClick={() => setActiveView("mytrips")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-900 text-white text-xs font-bold border border-emerald-500/50 shadow transition-all"
              >
                <span>View My Trips</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* The Printable E-Ticket / Digital Tourism Pass */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden print:shadow-none print:border-2 print:border-slate-800">
          
          {/* Ticket Header Bar */}
          <div className="bg-amber-950 text-white p-6 border-b border-amber-900/40 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-amber-950 font-serif font-black text-xl">
                ಯಾ
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif font-black text-lg tracking-wide text-white">YAATRI NIWAAS</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-full">
                    GOVT. OF KARNATAKA
                  </span>
                </div>
                <p className="text-[11px] text-amber-200/70">Department of Tourism & KSRTC Unified E-Pass</p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">Booking Reference ID</span>
              <span className="font-mono text-base sm:text-lg font-black tracking-widest text-white">
                {booking.id}
              </span>
            </div>
          </div>

          {/* Ticket Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Main Reservation Title & Type */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  {booking.type.toUpperCase()} RESERVATION
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-black text-slate-900">
                  {booking.title}
                </h2>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs text-slate-400 block uppercase font-bold">Total Amount Paid</span>
                <span className="text-2xl sm:text-3xl font-price font-black text-emerald-700">
                  ₹{booking.totalCost.toLocaleString("en-IN")}
                </span>
                <span className="text-[10px] text-emerald-800 font-bold block bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 mt-0.5">
                  ✓ PAID & VERIFIED
                </span>
              </div>
            </div>

            {/* Travel / Bus Details Block (if any) */}
            {booking.travelDetails && (
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                  <Bus className="w-4 h-4 text-red-600" />
                  <span>KSRTC Transit Reservation Details</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block font-medium">Service Operator</span>
                    <span className="font-bold text-slate-800 text-sm">{booking.travelDetails.busOperator}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Route Route</span>
                    <span className="font-bold text-slate-800 text-sm">{booking.travelDetails.from} → {booking.travelDetails.to}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Scheduled Departure</span>
                    <span className="font-bold text-slate-800 text-sm">{booking.travelDetails.departureTime}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Reserved Seat(s)</span>
                    <div className="flex gap-1 mt-0.5">
                      {booking.travelDetails.seats.map(s => (
                        <span key={s} className="px-2 py-0.5 bg-red-600 text-white rounded font-mono font-bold text-xs">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Confirmed Passenger Manifest */}
                {booking.travelDetails.passengerList && booking.travelDetails.passengerList.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-200">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      Confirmed Passengers ({booking.travelDetails.passengerList.length} Travelers):
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {booking.travelDetails.passengerList.map((p, i) => (
                        <div key={i} className="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-slate-200 text-xs">
                          <div>
                            <span className="font-bold text-slate-800 block">{p.name}</span>
                            <span className="text-[10px] text-slate-400">{p.gender || "Adult"}{p.age ? `, Age ${p.age}` : ""}</span>
                          </div>
                          <span className="text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 font-mono font-bold text-xs">
                            Seat {p.seatNumber}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Stay / Yaatri Niwaas Details Block (if any) */}
            {booking.stayDetails && (
              <div className="bg-amber-50/60 rounded-2xl p-5 border border-amber-200/80">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-3">
                  <Hotel className="w-4 h-4 text-amber-700" />
                  <span>Yaatri Niwaas Lodging Voucher</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-amber-700/80 block font-medium">Guesthouse Property</span>
                    <span className="font-bold text-amber-950 text-sm">{booking.stayDetails.hotelName}</span>
                  </div>
                  <div>
                    <span className="text-amber-700/80 block font-medium">Room Category</span>
                    <span className="font-bold text-amber-950 text-sm">{booking.stayDetails.roomType}</span>
                  </div>
                  <div>
                    <span className="text-amber-700/80 block font-medium">Duration of Stay</span>
                    <span className="font-bold text-amber-950 text-sm">{booking.stayDetails.nights} Night(s)</span>
                  </div>
                  <div>
                    <span className="text-amber-700/80 block font-medium">Guests Accommodated</span>
                    <span className="font-bold text-amber-950 text-sm">{booking.stayDetails.guests} Guest(s)</span>
                  </div>
                </div>
              </div>
            )}

            {/* Itinerary Highlights */}
            {booking.itinerarySummary && booking.itinerarySummary.length > 0 && (
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>Included Circuit Stops / Tour Highlights</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {booking.itinerarySummary.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Pass Verification & Barcode */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white p-2 rounded-2xl border border-slate-300 shadow-sm flex items-center justify-center shrink-0">
                  <QrCode className="w-full h-full text-slate-800" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>VERIFIED DIGITAL PASS</span>
                  </div>
                  <p className="text-[11px] text-slate-500 max-w-sm leading-relaxed">
                    Scan at KSRTC terminal or Yaatri Niwaas check-in desk. Please carry an official Government Photo ID (Aadhaar / Voter ID / Passport) during travel.
                  </p>
                </div>
              </div>

              <div className="text-center sm:text-right shrink-0">
                <div className="font-mono text-xs text-slate-400 tracking-widest">
                  *YN-{booking.id.toUpperCase()}*
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Issued: {booking.bookingDate} • State of Karnataka
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Post-Booking Next Steps (Hidden on Print) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 print:hidden">
          <div 
            onClick={() => setActiveView("districts")}
            className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-md cursor-pointer transition-all group"
          >
            <Compass className="w-6 h-6 text-amber-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="font-bold text-slate-900 text-sm">Explore More Districts</h4>
            <p className="text-xs text-slate-500 mt-1">Discover attractions across all 31 Karnataka districts.</p>
          </div>

          <div 
            onClick={() => setActiveView("transport")}
            className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-md cursor-pointer transition-all group"
          >
            <Bus className="w-6 h-6 text-red-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="font-bold text-slate-900 text-sm">Book Return Transit</h4>
            <p className="text-xs text-slate-500 mt-1">Select return seats on KSRTC Airavat or EV Power Plus.</p>
          </div>

          <div 
            onClick={() => setActiveView("mytrips")}
            className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-md cursor-pointer transition-all group"
          >
            <FileCheck className="w-6 h-6 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="font-bold text-slate-900 text-sm">Manage in My Trips</h4>
            <p className="text-xs text-slate-500 mt-1">View your saved itineraries, vouchers, and travel calendar.</p>
          </div>
        </div>

      </div>
    </div>
  );
};
