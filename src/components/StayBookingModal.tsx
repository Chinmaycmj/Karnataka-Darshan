import React, { useState } from "react";
import { YaatriNiwaasProperty, YaatriNiwaasRoom, UserTripBooking } from "../data/types";
import { useApp } from "../context/AppContext";
import { X, Check, Calendar, Users, Hotel, ShieldCheck } from "lucide-react";

interface StayBookingModalProps {
  property: YaatriNiwaasProperty;
  onClose: () => void;
}

export const StayBookingModal: React.FC<StayBookingModalProps> = ({ property, onClose }) => {
  const { addBooking, language } = useApp();
  const [selectedRoomId, setSelectedRoomId] = useState<string>(property.rooms[1]?.id || property.rooms[0]?.id);
  const [checkInDate, setCheckInDate] = useState("2026-10-15");
  const [nights, setNights] = useState<number>(2);
  const [guests, setGuests] = useState<number>(2);
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");

  const selectedRoom = property.rooms.find(r => r.id === selectedRoomId) || property.rooms[0];
  const totalPrice = selectedRoom ? selectedRoom.pricePerNight * nights : 0;

  const handleBooking = () => {
    if (!guestName.trim()) {
      alert("Please enter guest name.");
      return;
    }

    const newBooking: UserTripBooking = {
      id: `YN-STAY-${Math.floor(100000 + Math.random() * 900000)}`,
      bookingDate: new Date().toISOString().split("T")[0],
      travelDate: checkInDate,
      type: "stay",
      title: `${property.name} — ${selectedRoom.name} (${nights} Nights)`,
      districtId: property.districtId,
      totalCost: totalPrice,
      status: "Confirmed",
      stayDetails: {
        hotelName: property.name,
        roomType: selectedRoom.name,
        nights: nights,
        guests: guests
      },
      itinerarySummary: [
        `Property: ${property.name}`,
        `Address: ${property.address}`,
        `Check-in Date: ${checkInDate} for ${nights} Nights`,
        `Guests: ${guests} Adults`,
        `Room: ${selectedRoom.name}`
      ]
    };

    addBooking(newBooking);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-scaleUp">
        
        {/* Header */}
        <div className="relative h-44 bg-slate-800">
          <img 
            src={property.image} 
            alt={property.name} 
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
              {property.districtName} District • Official Accommodation
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
              {property.name}
            </h3>
            <p className="text-xs text-slate-300">{property.address}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
          
          {/* Select Room Type */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              Select Room Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.rooms.map((room) => {
                const isSelected = selectedRoomId === room.id;
                return (
                  <div
                    key={room.id}
                    onClick={() => setSelectedRoomId(room.id)}
                    className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all ${
                      isSelected
                        ? "border-amber-600 bg-amber-50/50 shadow-sm"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="font-bold text-sm text-slate-800">{room.name}</h5>
                      <span className="font-extrabold text-sm text-amber-700">
                        ₹{room.pricePerNight}
                        <span className="text-[10px] font-normal text-slate-500">/nt</span>
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mb-2">Capacity: Up to {room.capacity} Guests</p>
                    <div className="flex flex-wrap gap-1">
                      {room.amenities.slice(0, 3).map((a, i) => (
                        <span key={i} className="text-[10px] bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-600">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dates & Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Check-in Date
              </label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full text-xs font-semibold p-2 bg-white rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Number of Nights
              </label>
              <select
                value={nights}
                onChange={(e) => setNights(Number(e.target.value))}
                className="w-full text-xs font-semibold p-2 bg-white rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500"
              >
                {[1, 2, 3, 4, 5, 7, 10].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? "Night" : "Nights"}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Total Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full text-xs font-semibold p-2 bg-white rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500"
              >
                {[1, 2, 3, 4, 5].map(g => (
                  <option key={g} value={g}>{g} {g === 1 ? "Guest" : "Guests"}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Guest Contact Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Primary Guest Name *
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-amber-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Contact Phone Number
              </label>
              <input
                type="tel"
                placeholder="10-digit mobile number"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-amber-600"
              />
            </div>
          </div>

          {/* Guarantee pill */}
          <div className="flex items-center gap-2 text-xs text-slate-500 bg-amber-50/50 p-3 rounded-xl border border-amber-200">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Complimentary South Indian breakfast included. No pre-payment penalty. Realistic mock booking for prototype.</span>
          </div>

          {/* Booking Summary Bar */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-500 block">
                Total for {nights} Nights ({selectedRoom.name})
              </span>
              <span className="font-serif font-extrabold text-2xl text-amber-950">
                ₹{totalPrice.toLocaleString("en-IN")}
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
                className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-amber-700 hover:bg-amber-800 shadow-md shadow-amber-700/30 transition-all cursor-pointer"
              >
                Confirm Stay Booking
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
