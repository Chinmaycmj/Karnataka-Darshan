import React, { useState } from "react";
import { BusRoute, BusSeat, UserTripBooking } from "../data/types";
import { useApp } from "../context/AppContext";
import { X, Check, Bus, Shield, User, Phone } from "lucide-react";

interface BusSeatModalProps {
  route: BusRoute;
  onClose: () => void;
}

export const BusSeatModal: React.FC<BusSeatModalProps> = ({ route, onClose }) => {
  const { addBooking, language } = useApp();
  const [selectedSeatNumbers, setSelectedSeatNumbers] = useState<string[]>([]);
  const [passengerName, setPassengerName] = useState("");
  const [passengerPhone, setPassengerPhone] = useState("");

  const toggleSeat = (seat: BusSeat) => {
    if (seat.status === "booked") return;
    if (selectedSeatNumbers.includes(seat.number)) {
      setSelectedSeatNumbers(prev => prev.filter(num => num !== seat.number));
    } else {
      if (selectedSeatNumbers.length >= 4) {
        alert("Maximum 4 seats can be selected per booking.");
        return;
      }
      setSelectedSeatNumbers(prev => [...prev, seat.number]);
    }
  };

  const totalFare = selectedSeatNumbers.length * route.price;

  const handleBooking = () => {
    if (selectedSeatNumbers.length === 0) {
      alert("Please select at least one seat.");
      return;
    }
    if (!passengerName.trim()) {
      alert("Please enter primary passenger name.");
      return;
    }

    const newBooking: UserTripBooking = {
      id: `KSRTC-YN-${Math.floor(100000 + Math.random() * 900000)}`,
      bookingDate: new Date().toISOString().split("T")[0],
      travelDate: new Date(Date.now() + 86400000 * 3).toISOString().split("T")[0],
      type: "transport",
      title: `${route.operator} (${route.serviceType}) — ${route.fromCity} to ${route.toCity}`,
      totalCost: totalFare,
      status: "Confirmed",
      travelDetails: {
        busOperator: route.operator,
        serviceType: route.serviceType,
        from: route.fromCity,
        to: route.toCity,
        departureTime: route.departureTime,
        seats: selectedSeatNumbers
      },
      itinerarySummary: [
        `Departure: ${route.fromCity} at ${route.departureTime}`,
        `Arrival: ${route.toCity} at ${route.arrivalTime}`,
        `Selected Seats: ${selectedSeatNumbers.join(", ")}`,
        `Passenger: ${passengerName} (${passengerPhone || "Standard"})`
      ]
    };

    addBooking(newBooking);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-scaleUp">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-amber-700 to-amber-800 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Bus className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-tight">
                {route.operator} • {route.serviceType}
              </h3>
              <p className="text-xs text-amber-200">
                {route.fromCity} → {route.toCity} ({route.duration})
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-3 px-6 bg-slate-50 border-b border-slate-200 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded border-2 border-emerald-500 bg-emerald-50"></span>
            <span className="text-slate-600">Available</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded bg-amber-600 border border-amber-700"></span>
            <span className="text-slate-600">Selected</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded bg-slate-300 border border-slate-400"></span>
            <span className="text-slate-600">Booked</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded border-2 border-pink-400 bg-pink-50"></span>
            <span className="text-slate-600">Ladies Reserved</span>
          </div>
        </div>

        {/* Seat Layout */}
        <div className="p-6">
          <div className="max-w-md mx-auto bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-inner">
            
            {/* Steering Wheel Indicator */}
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-200 text-slate-400 text-xs font-semibold">
              <span>Front of Bus / Driver Cabin</span>
              <span>🚪 Door</span>
            </div>

            {/* Seats Grid */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
              {route.seats.map((seat, index) => {
                const isSelected = selectedSeatNumbers.includes(seat.number);
                const isBooked = seat.status === "booked";
                const isAisleGap = index % 4 === 1;

                let seatStyle = "bg-white border-2 border-emerald-500 text-emerald-800 hover:bg-emerald-50";
                if (isBooked) {
                  seatStyle = "bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed";
                } else if (isSelected) {
                  seatStyle = "bg-amber-600 border-amber-700 text-white shadow-md scale-105";
                } else if (seat.isFemaleReserved) {
                  seatStyle = "bg-pink-50 border-2 border-pink-400 text-pink-700 hover:bg-pink-100";
                }

                return (
                  <div key={seat.id} className={`flex items-center ${isAisleGap ? "mr-4" : ""}`}>
                    <button
                      disabled={isBooked}
                      onClick={() => toggleSeat(seat)}
                      className={`w-full h-11 rounded-lg font-bold text-xs flex flex-col items-center justify-center transition-all ${seatStyle}`}
                    >
                      <span>{seat.number}</span>
                      <span className="text-[9px] font-normal opacity-80">₹{seat.price}</span>
                    </button>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Passenger Input Form */}
          <div className="mt-6 pt-5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Primary Passenger Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={passengerName}
                  onChange={(e) => setPassengerName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-amber-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Mobile Number for Ticket SMS *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={passengerPhone}
                  onChange={(e) => setPassengerPhone(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-amber-600"
                />
              </div>
            </div>
          </div>

          {/* Summary & Booking CTA */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-500 block">
                Selected Seats: <strong className="text-slate-800">{selectedSeatNumbers.length > 0 ? selectedSeatNumbers.join(", ") : "None"}</strong>
              </span>
              <span className="font-serif font-extrabold text-2xl text-amber-950">
                ₹{totalFare.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={handleBooking}
                disabled={selectedSeatNumbers.length === 0}
                className={`w-1/2 sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md ${
                  selectedSeatNumbers.length > 0
                    ? "bg-amber-700 hover:bg-amber-800 shadow-amber-700/30 cursor-pointer"
                    : "bg-slate-300 cursor-not-allowed"
                }`}
              >
                Confirm & Book Ticket
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
