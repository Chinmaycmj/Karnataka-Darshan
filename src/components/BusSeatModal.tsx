import React, { useState } from "react";
import { BusRoute, BusSeat, UserTripBooking } from "../data/types";
import { useApp } from "../context/AppContext";
import { X, Check, Bus, ShieldCheck, User, Phone, AlertCircle, Users } from "lucide-react";

interface BusSeatModalProps {
  route: BusRoute;
  onClose: () => void;
}

interface PassengerInfo {
  name: string;
  age: string;
  gender: string;
}

export const BusSeatModal: React.FC<BusSeatModalProps> = ({ route, onClose }) => {
  const { addBooking, language } = useApp();
  const [selectedSeatNumbers, setSelectedSeatNumbers] = useState<string[]>([]);
  const [passengerPhone, setPassengerPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passengers, setPassengers] = useState<Record<string, PassengerInfo>>({});

  const toggleSeat = (seat: BusSeat) => {
    if (seat.status === "booked") return;
    if (selectedSeatNumbers.includes(seat.number)) {
      setSelectedSeatNumbers(prev => prev.filter(num => num !== seat.number));
      setPassengers(prev => {
        const updated = { ...prev };
        delete updated[seat.number];
        return updated;
      });
    } else {
      if (selectedSeatNumbers.length >= 6) {
        alert("Maximum 6 seats can be selected per booking.");
        return;
      }
      setSelectedSeatNumbers(prev => [...prev, seat.number]);
      setPassengers(prev => ({
        ...prev,
        [seat.number]: {
          name: prev[seat.number]?.name || "",
          age: prev[seat.number]?.age || "",
          gender: prev[seat.number]?.gender || (seat.isFemaleReserved ? "Female" : "Male")
        }
      }));
    }
  };

  const handlePassengerChange = (seatNum: string, field: keyof PassengerInfo, value: string) => {
    setPassengers(prev => ({
      ...prev,
      [seatNum]: {
        ...prev[seatNum],
        [field]: value
      }
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPassengerPhone(rawVal);
    if (rawVal.length === 0) {
      setPhoneError("");
    } else if (rawVal.length < 10) {
      setPhoneError("Phone number must be exactly 10 digits");
    } else if (!/^[6-9]/.test(rawVal)) {
      setPhoneError("Indian mobile numbers must start with 6, 7, 8, or 9");
    } else {
      setPhoneError("");
    }
  };

  const totalFare = selectedSeatNumbers.length * route.price;

  const handleBooking = () => {
    if (selectedSeatNumbers.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    // Phone validation
    const cleanPhone = passengerPhone.trim();
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setPhoneError("Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.");
      alert("Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).");
      return;
    }

    // Validate every passenger name
    for (let i = 0; i < selectedSeatNumbers.length; i++) {
      const seatNum = selectedSeatNumbers[i];
      const p = passengers[seatNum];
      if (!p || !p.name.trim()) {
        alert(`Please enter full name for Passenger on Seat ${seatNum}.`);
        return;
      }
    }

    const passengerList = selectedSeatNumbers.map(seatNum => ({
      seatNumber: seatNum,
      name: passengers[seatNum].name.trim(),
      age: passengers[seatNum].age.trim() || undefined,
      gender: passengers[seatNum].gender || "Adult"
    }));

    const primaryPassenger = passengerList[0].name;

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
        seats: selectedSeatNumbers,
        passengerPhone: cleanPhone,
        passengerList: passengerList
      },
      itinerarySummary: [
        `Departure: ${route.fromCity} Central Terminal at ${route.departureTime}`,
        `Arrival: ${route.toCity} Depot Terminal at ${route.arrivalTime}`,
        `Reserved Seats (${selectedSeatNumbers.length}): ${selectedSeatNumbers.join(", ")}`,
        `Primary Passenger: ${primaryPassenger} (+91 ${cleanPhone})`,
        `All Travelers: ${passengerList.map(p => `${p.name} (Seat ${p.seatNumber})`).join(", ")}`
      ]
    };

    addBooking(newBooking);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-scaleUp my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-red-800 via-amber-800 to-amber-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Bus className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg leading-tight">
                {route.operator} • {route.serviceType}
              </h3>
              <p className="text-xs text-amber-200">
                {route.fromCity} → {route.toCity} ({route.duration} • Departure: {route.departureTime})
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
            <span className="text-slate-600 font-medium">Available</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded bg-amber-600 border border-amber-700"></span>
            <span className="text-slate-600 font-medium">Selected</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded bg-slate-300 border border-slate-400"></span>
            <span className="text-slate-600 font-medium">Booked</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded border-2 border-pink-400 bg-pink-50"></span>
            <span className="text-slate-600 font-medium">Ladies Reserved</span>
          </div>
        </div>

        {/* Seat Layout */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              Step 1: Select Your Bus Seats
            </span>
            <div className="max-w-md mx-auto bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-inner">
              
              {/* Steering Wheel Indicator */}
              <div className="flex justify-between items-center pb-3 mb-3 border-b border-slate-200 text-slate-400 text-xs font-semibold">
                <span>🚌 Front of Bus / Driver Cabin</span>
                <span>🚪 Passenger Entry</span>
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
                        <span className="text-[9px] font-price font-semibold opacity-90">₹{seat.price}</span>
                      </button>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Step 2: Passenger Details (Dynamically Generated for n Selected Seats) */}
          {selectedSeatNumbers.length > 0 && (
            <div className="pt-4 border-t border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber-700" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Step 2: Enter Details for {selectedSeatNumbers.length} Traveler{selectedSeatNumbers.length > 1 ? "s" : ""}
                  </span>
                </div>
                <span className="text-xs text-slate-500">
                  Seats: <strong className="text-amber-800">{selectedSeatNumbers.join(", ")}</strong>
                </span>
              </div>

              {/* Individual Passenger Inputs for each selected seat */}
              <div className="space-y-3">
                {selectedSeatNumbers.map((seatNum, idx) => {
                  const p = passengers[seatNum] || { name: "", age: "", gender: "Male" };
                  const isPrimary = idx === 0;

                  return (
                    <div 
                      key={seatNum}
                      className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200 hover:border-amber-300 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-lg bg-amber-700 text-white font-mono text-xs font-bold">
                            Seat {seatNum}
                          </span>
                          <span className="text-xs font-bold text-slate-800">
                            {isPrimary ? "Primary Traveler (Ticket Holder)" : `Passenger ${idx + 1}`}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400">
                          {isPrimary ? "Receives SMS & Pass" : "Co-passenger"}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                        {/* Passenger Name */}
                        <div className="sm:col-span-6">
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                            <input
                              type="text"
                              required
                              placeholder="Name as per Government ID"
                              value={p.name}
                              onChange={(e) => handlePassengerChange(seatNum, "name", e.target.value)}
                              className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                            />
                          </div>
                        </div>

                        {/* Age */}
                        <div className="sm:col-span-3">
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                            Age
                          </label>
                          <input
                            type="number"
                            min="1"
                            max="115"
                            placeholder="Age"
                            value={p.age}
                            onChange={(e) => handlePassengerChange(seatNum, "age", e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                          />
                        </div>

                        {/* Gender */}
                        <div className="sm:col-span-3">
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                            Gender
                          </label>
                          <select
                            value={p.gender}
                            onChange={(e) => handlePassengerChange(seatNum, "gender", e.target.value)}
                            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Primary Mobile Phone Verification (Enforces Exactly 10 Digits) */}
              <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200">
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Primary Mobile Number (for KSRTC E-Pass SMS & Alerts) *
                </label>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-2 bg-white rounded-xl border border-slate-300 text-xs font-bold text-slate-700">
                    🇮🇳 +91
                  </div>
                  <div className="relative flex-1">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="10-digit mobile number (e.g. 9876543210)"
                      value={passengerPhone}
                      onChange={handlePhoneChange}
                      className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border bg-white font-price font-bold focus:outline-none focus:ring-2 ${
                        phoneError ? "border-red-500 ring-red-200" : "border-slate-300 focus:ring-amber-500"
                      }`}
                    />
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-500 shrink-0">
                    {passengerPhone.length}/10 digits
                  </span>
                </div>
                {phoneError ? (
                  <p className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {phoneError}
                  </p>
                ) : (
                  <p className="text-[11px] text-amber-800 mt-1.5">
                    Valid 10-digit Indian mobile number required. Ticket pass & live GPS tracking link will be dispatched to this number.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Guarantee Pill */}
          <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-100/80 p-3 rounded-2xl border border-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Government Standardized Bus Fares • Free 30 kg Luggage Allowance • 24x7 KSRTC Helpline</span>
          </div>
        </div>

        {/* Bottom Booking Action Bar */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-500 block">
              Total for {selectedSeatNumbers.length} Seat{selectedSeatNumbers.length !== 1 ? "s" : ""}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-price font-extrabold text-2xl sm:text-3xl text-amber-950">
                ₹{totalFare.toLocaleString("en-IN")}
              </span>
              <span className="text-xs text-slate-500 font-medium">(₹{route.price} / seat)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleBooking}
              disabled={selectedSeatNumbers.length === 0}
              className={`w-1/2 sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md ${
                selectedSeatNumbers.length > 0
                  ? "bg-gradient-to-r from-red-800 to-amber-800 hover:from-red-900 hover:to-amber-900 shadow-amber-800/30 cursor-pointer"
                  : "bg-slate-300 cursor-not-allowed"
              }`}
            >
              Confirm {selectedSeatNumbers.length} Seat{selectedSeatNumbers.length !== 1 ? "s" : ""} & Book
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
