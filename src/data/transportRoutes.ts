import type { BusRoute, BusSeat } from './types';

// Procedural seat layout generator ensuring every route has realistic interactive seat statuses
function generateRouteSeats(price: number, seed: number): BusSeat[] {
  const seats: BusSeat[] = [];
  const bookedSet = new Set([
    (seed * 3) % 32,
    (seed * 7 + 4) % 32,
    (seed * 11 + 9) % 32,
    (seed * 13 + 15) % 32,
    (seed * 17 + 22) % 32
  ]);
  const femaleSet = new Set([2, 3, 6, 7]); // standard front row ladies reserved

  for (let i = 1; i <= 32; i++) {
    const isBooked = bookedSet.has(i - 1);
    seats.push({
      id: `s-${seed}-${i}`,
      number: `${i}`,
      type: 'seater',
      status: isBooked ? 'booked' : 'available',
      isFemaleReserved: femaleSet.has(i - 1),
      price: price
    });
  }
  return seats;
}

const RAW_ROUTES_DEF = [
  {
    "id": "RT-001",
    "operator": "NWKRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Hubballi",
    "toCity": "Bengaluru",
    "departureTime": "06:00 AM",
    "arrivalTime": "01:30 PM",
    "duration": "7h 30m",
    "price": 840,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 1
  },
  {
    "id": "RT-002",
    "operator": "NWKRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Hubballi",
    "toCity": "Bengaluru",
    "departureTime": "07:30 AM",
    "arrivalTime": "03:00 PM",
    "duration": "7h 30m",
    "price": 790,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 2
  },
  {
    "id": "RT-003",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Bengaluru",
    "departureTime": "09:00 AM",
    "arrivalTime": "04:45 PM",
    "duration": "7h 45m",
    "price": 580,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 3
  },
  {
    "id": "RT-004",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Hubballi",
    "toCity": "Bengaluru",
    "departureTime": "10:00 PM",
    "arrivalTime": "05:30 AM",
    "duration": "7h 30m",
    "price": 690,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 4
  },
  {
    "id": "RT-005",
    "operator": "NWKRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Hubballi",
    "toCity": "Bengaluru",
    "departureTime": "11:00 PM",
    "arrivalTime": "06:15 AM",
    "duration": "7h 15m",
    "price": 840,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 5
  },
  {
    "id": "RT-006",
    "operator": "NWKRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Hubballi",
    "toCity": "Belagavi",
    "departureTime": "06:30 AM",
    "arrivalTime": "08:45 AM",
    "duration": "2h 15m",
    "price": 240,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 6
  },
  {
    "id": "RT-007",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Belagavi",
    "departureTime": "08:15 AM",
    "arrivalTime": "10:45 AM",
    "duration": "2h 30m",
    "price": 180,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 7
  },
  {
    "id": "RT-008",
    "operator": "NWKRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Hubballi",
    "toCity": "Belagavi",
    "departureTime": "01:30 PM",
    "arrivalTime": "03:45 PM",
    "duration": "2h 15m",
    "price": 210,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 8
  },
  {
    "id": "RT-009",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Belagavi",
    "departureTime": "05:45 PM",
    "arrivalTime": "08:15 PM",
    "duration": "2h 30m",
    "price": 180,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 9
  },
  {
    "id": "RT-010",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Bagalkote (Badami)",
    "departureTime": "06:45 AM",
    "arrivalTime": "09:45 AM",
    "duration": "3h 00m",
    "price": 260,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 10
  },
  {
    "id": "RT-011",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Hubballi",
    "toCity": "Bagalkote (Badami)",
    "departureTime": "02:30 PM",
    "arrivalTime": "05:45 PM",
    "duration": "3h 15m",
    "price": 290,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 11
  },
  {
    "id": "RT-012",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Bagalkote (Badami)",
    "departureTime": "07:00 PM",
    "arrivalTime": "10:00 PM",
    "duration": "3h 00m",
    "price": 260,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 12
  },
  {
    "id": "RT-013",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Vijayapura",
    "departureTime": "07:15 AM",
    "arrivalTime": "11:30 AM",
    "duration": "4h 15m",
    "price": 350,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 13
  },
  {
    "id": "RT-014",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Hubballi",
    "toCity": "Vijayapura",
    "departureTime": "02:00 PM",
    "arrivalTime": "06:15 PM",
    "duration": "4h 15m",
    "price": 380,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 14
  },
  {
    "id": "RT-015",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Vijayapura",
    "departureTime": "08:30 PM",
    "arrivalTime": "12:45 AM",
    "duration": "4h 15m",
    "price": 350,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 15
  },
  {
    "id": "RT-016",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Vijayanagara (Hampi)",
    "departureTime": "06:30 AM",
    "arrivalTime": "09:45 AM",
    "duration": "3h 15m",
    "price": 250,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 16
  },
  {
    "id": "RT-017",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Hubballi",
    "toCity": "Vijayanagara (Hampi)",
    "departureTime": "01:15 PM",
    "arrivalTime": "04:45 PM",
    "duration": "3h 30m",
    "price": 280,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 17
  },
  {
    "id": "RT-018",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Vijayanagara (Hampi)",
    "departureTime": "06:00 PM",
    "arrivalTime": "09:15 PM",
    "duration": "3h 15m",
    "price": 250,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 18
  },
  {
    "id": "RT-019",
    "operator": "NWKRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Hubballi",
    "toCity": "Mangaluru",
    "departureTime": "07:30 AM",
    "arrivalTime": "03:00 PM",
    "duration": "7h 30m",
    "price": 620,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 19
  },
  {
    "id": "RT-020",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Hubballi",
    "toCity": "Mangaluru",
    "departureTime": "09:30 PM",
    "arrivalTime": "05:30 AM",
    "duration": "8h 00m",
    "price": 540,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 20
  },
  {
    "id": "RT-021",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Mangaluru",
    "departureTime": "10:30 PM",
    "arrivalTime": "06:45 AM",
    "duration": "8h 15m",
    "price": 480,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 21
  },
  {
    "id": "RT-022",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Udupi",
    "departureTime": "08:00 AM",
    "arrivalTime": "02:45 PM",
    "duration": "6h 45m",
    "price": 440,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 22
  },
  {
    "id": "RT-023",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Hubballi",
    "toCity": "Udupi",
    "departureTime": "10:00 PM",
    "arrivalTime": "05:00 AM",
    "duration": "7h 00m",
    "price": 510,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 23
  },
  {
    "id": "RT-024",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Gokarna",
    "departureTime": "08:00 AM",
    "arrivalTime": "12:00 PM",
    "duration": "4h 00m",
    "price": 320,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 24
  },
  {
    "id": "RT-025",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Hubballi",
    "toCity": "Gokarna",
    "departureTime": "02:30 PM",
    "arrivalTime": "06:45 PM",
    "duration": "4h 15m",
    "price": 360,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 25
  },
  {
    "id": "RT-026",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Gokarna",
    "departureTime": "08:15 PM",
    "arrivalTime": "12:15 AM",
    "duration": "4h 00m",
    "price": 320,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 26
  },
  {
    "id": "RT-027",
    "operator": "NWKRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Hubballi",
    "toCity": "Karwar",
    "departureTime": "09:00 AM",
    "arrivalTime": "01:00 PM",
    "duration": "4h 00m",
    "price": 360,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 27
  },
  {
    "id": "RT-028",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Karwar",
    "departureTime": "03:30 PM",
    "arrivalTime": "07:45 PM",
    "duration": "4h 15m",
    "price": 310,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 28
  },
  {
    "id": "RT-029",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Shivamogga",
    "departureTime": "07:00 AM",
    "arrivalTime": "11:00 AM",
    "duration": "4h 00m",
    "price": 310,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 29
  },
  {
    "id": "RT-030",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Hubballi",
    "toCity": "Shivamogga",
    "departureTime": "03:00 PM",
    "arrivalTime": "07:15 PM",
    "duration": "4h 15m",
    "price": 340,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 30
  },
  {
    "id": "RT-031",
    "operator": "NWKRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Hubballi",
    "toCity": "Davanagere",
    "departureTime": "08:30 AM",
    "arrivalTime": "11:00 AM",
    "duration": "2h 30m",
    "price": 260,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 31
  },
  {
    "id": "RT-032",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Davanagere",
    "departureTime": "02:00 PM",
    "arrivalTime": "04:45 PM",
    "duration": "2h 45m",
    "price": 220,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 32
  },
  {
    "id": "RT-033",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Kalaburagi",
    "departureTime": "08:00 AM",
    "arrivalTime": "03:00 PM",
    "duration": "7h 00m",
    "price": 490,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 33
  },
  {
    "id": "RT-034",
    "operator": "KKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Hubballi",
    "toCity": "Kalaburagi",
    "departureTime": "10:15 PM",
    "arrivalTime": "05:30 AM",
    "duration": "7h 15m",
    "price": 580,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 34
  },
  {
    "id": "RT-035",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Hubballi",
    "toCity": "Mysuru",
    "departureTime": "08:45 PM",
    "arrivalTime": "05:45 AM",
    "duration": "9h 00m",
    "price": 710,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 35
  },
  {
    "id": "RT-036",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Mysuru",
    "departureTime": "10:00 PM",
    "arrivalTime": "07:30 AM",
    "duration": "9h 30m",
    "price": 630,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 36
  },
  {
    "id": "RT-037",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Ballari",
    "departureTime": "07:30 AM",
    "arrivalTime": "12:00 PM",
    "duration": "4h 30m",
    "price": 320,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 37
  },
  {
    "id": "RT-038",
    "operator": "KKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Hubballi",
    "toCity": "Ballari",
    "departureTime": "03:15 PM",
    "arrivalTime": "08:00 PM",
    "duration": "4h 45m",
    "price": 350,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 38
  },
  {
    "id": "RT-039",
    "operator": "KSRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Bengaluru",
    "toCity": "Mysuru",
    "departureTime": "06:00 AM",
    "arrivalTime": "08:30 AM",
    "duration": "2h 30m",
    "price": 320,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 39
  },
  {
    "id": "RT-040",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Mysuru",
    "departureTime": "07:15 AM",
    "arrivalTime": "09:45 AM",
    "duration": "2h 30m",
    "price": 380,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 40
  },
  {
    "id": "RT-041",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Mysuru",
    "departureTime": "09:30 AM",
    "arrivalTime": "12:15 PM",
    "duration": "2h 45m",
    "price": 270,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 41
  },
  {
    "id": "RT-042",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Mysuru",
    "departureTime": "11:00 PM",
    "arrivalTime": "02:00 AM",
    "duration": "3h 00m",
    "price": 350,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 42
  },
  {
    "id": "RT-043",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Hubballi",
    "departureTime": "06:30 AM",
    "arrivalTime": "02:00 PM",
    "duration": "7h 30m",
    "price": 840,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 43
  },
  {
    "id": "RT-044",
    "operator": "KSRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Bengaluru",
    "toCity": "Hubballi",
    "departureTime": "08:00 AM",
    "arrivalTime": "03:30 PM",
    "duration": "7h 30m",
    "price": 790,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 44
  },
  {
    "id": "RT-045",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Hubballi",
    "departureTime": "02:30 PM",
    "arrivalTime": "10:15 PM",
    "duration": "7h 45m",
    "price": 580,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 45
  },
  {
    "id": "RT-046",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Hubballi",
    "departureTime": "10:30 PM",
    "arrivalTime": "06:00 AM",
    "duration": "7h 30m",
    "price": 690,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 46
  },
  {
    "id": "RT-047",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Mangaluru",
    "departureTime": "06:45 AM",
    "arrivalTime": "02:45 PM",
    "duration": "8h 00m",
    "price": 720,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 47
  },
  {
    "id": "RT-048",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Mangaluru",
    "departureTime": "08:30 AM",
    "arrivalTime": "05:00 PM",
    "duration": "8h 30m",
    "price": 520,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 48
  },
  {
    "id": "RT-049",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Mangaluru",
    "departureTime": "10:00 PM",
    "arrivalTime": "06:00 AM",
    "duration": "8h 00m",
    "price": 640,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 49
  },
  {
    "id": "RT-050",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Udupi",
    "departureTime": "07:30 AM",
    "arrivalTime": "04:15 PM",
    "duration": "8h 45m",
    "price": 760,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 50
  },
  {
    "id": "RT-051",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Udupi",
    "departureTime": "09:45 PM",
    "arrivalTime": "06:30 AM",
    "duration": "8h 45m",
    "price": 680,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 51
  },
  {
    "id": "RT-052",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Belagavi",
    "departureTime": "07:00 AM",
    "arrivalTime": "04:30 PM",
    "duration": "9h 30m",
    "price": 950,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 52
  },
  {
    "id": "RT-053",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Belagavi",
    "departureTime": "09:30 PM",
    "arrivalTime": "07:00 AM",
    "duration": "9h 30m",
    "price": 790,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 53
  },
  {
    "id": "RT-054",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Vijayanagara (Hampi)",
    "departureTime": "07:00 AM",
    "arrivalTime": "01:30 PM",
    "duration": "6h 30m",
    "price": 650,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 54
  },
  {
    "id": "RT-055",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Vijayanagara (Hampi)",
    "departureTime": "01:30 PM",
    "arrivalTime": "08:30 PM",
    "duration": "7h 00m",
    "price": 480,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 55
  },
  {
    "id": "RT-056",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Vijayanagara (Hampi)",
    "departureTime": "10:30 PM",
    "arrivalTime": "05:30 AM",
    "duration": "7h 00m",
    "price": 580,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 56
  },
  {
    "id": "RT-057",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Kodagu (Madikeri)",
    "departureTime": "06:30 AM",
    "arrivalTime": "01:00 PM",
    "duration": "6h 30m",
    "price": 550,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 57
  },
  {
    "id": "RT-058",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Kodagu (Madikeri)",
    "departureTime": "09:00 AM",
    "arrivalTime": "03:45 PM",
    "duration": "6h 45m",
    "price": 420,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 58
  },
  {
    "id": "RT-059",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Kodagu (Madikeri)",
    "departureTime": "11:00 PM",
    "arrivalTime": "05:45 AM",
    "duration": "6h 45m",
    "price": 490,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 59
  },
  {
    "id": "RT-060",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Chikkamagaluru",
    "departureTime": "06:15 AM",
    "arrivalTime": "11:45 AM",
    "duration": "5h 30m",
    "price": 420,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 60
  },
  {
    "id": "RT-061",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Chikkamagaluru",
    "departureTime": "02:00 PM",
    "arrivalTime": "07:30 PM",
    "duration": "5h 30m",
    "price": 540,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 61
  },
  {
    "id": "RT-062",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Shivamogga",
    "departureTime": "06:00 AM",
    "arrivalTime": "11:45 AM",
    "duration": "5h 45m",
    "price": 540,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 62
  },
  {
    "id": "RT-063",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Shivamogga",
    "departureTime": "01:00 PM",
    "arrivalTime": "07:00 PM",
    "duration": "6h 00m",
    "price": 390,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 63
  },
  {
    "id": "RT-064",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Shivamogga",
    "departureTime": "10:45 PM",
    "arrivalTime": "04:45 AM",
    "duration": "6h 00m",
    "price": 460,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 64
  },
  {
    "id": "RT-065",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Gokarna",
    "departureTime": "08:30 PM",
    "arrivalTime": "06:45 AM",
    "duration": "10h 15m",
    "price": 720,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 65
  },
  {
    "id": "RT-066",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Gokarna",
    "departureTime": "07:00 PM",
    "arrivalTime": "05:45 AM",
    "duration": "10h 45m",
    "price": 630,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 66
  },
  {
    "id": "RT-067",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Kalaburagi",
    "departureTime": "08:00 AM",
    "arrivalTime": "06:30 PM",
    "duration": "10h 30m",
    "price": 890,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 67
  },
  {
    "id": "RT-068",
    "operator": "KKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Kalaburagi",
    "departureTime": "09:30 PM",
    "arrivalTime": "07:30 AM",
    "duration": "10h 00m",
    "price": 740,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 68
  },
  {
    "id": "RT-069",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Vijayapura",
    "departureTime": "09:15 PM",
    "arrivalTime": "07:30 AM",
    "duration": "10h 15m",
    "price": 750,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 69
  },
  {
    "id": "RT-070",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Bagalkote (Badami)",
    "departureTime": "09:00 PM",
    "arrivalTime": "06:45 AM",
    "duration": "9h 45m",
    "price": 730,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 70
  },
  {
    "id": "RT-071",
    "operator": "KSRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Bengaluru",
    "toCity": "Hassan",
    "departureTime": "06:30 AM",
    "arrivalTime": "09:45 AM",
    "duration": "3h 15m",
    "price": 290,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 71
  },
  {
    "id": "RT-072",
    "operator": "KSRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Bengaluru",
    "toCity": "Davanagere",
    "departureTime": "07:00 AM",
    "arrivalTime": "11:30 AM",
    "duration": "4h 30m",
    "price": 450,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 72
  },
  {
    "id": "RT-073",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Ballari",
    "departureTime": "08:00 AM",
    "arrivalTime": "02:30 PM",
    "duration": "6h 30m",
    "price": 450,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 73
  },
  {
    "id": "RT-074",
    "operator": "KKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Bidar",
    "departureTime": "08:45 PM",
    "arrivalTime": "08:00 AM",
    "duration": "11h 15m",
    "price": 820,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 74
  },
  {
    "id": "RT-075",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Karwar",
    "departureTime": "08:00 PM",
    "arrivalTime": "07:00 AM",
    "duration": "11h 00m",
    "price": 860,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 75
  },
  {
    "id": "RT-076",
    "operator": "KSRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Mysuru",
    "toCity": "Bengaluru",
    "departureTime": "05:30 AM",
    "arrivalTime": "08:00 AM",
    "duration": "2h 30m",
    "price": 320,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 76
  },
  {
    "id": "RT-077",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Mysuru",
    "toCity": "Bengaluru",
    "departureTime": "07:00 AM",
    "arrivalTime": "09:30 AM",
    "duration": "2h 30m",
    "price": 380,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 77
  },
  {
    "id": "RT-078",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Mysuru",
    "toCity": "Bengaluru",
    "departureTime": "10:30 AM",
    "arrivalTime": "01:15 PM",
    "duration": "2h 45m",
    "price": 270,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 78
  },
  {
    "id": "RT-079",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Mysuru",
    "toCity": "Bengaluru",
    "departureTime": "11:30 PM",
    "arrivalTime": "02:30 AM",
    "duration": "3h 00m",
    "price": 350,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 79
  },
  {
    "id": "RT-080",
    "operator": "KSRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Mysuru",
    "toCity": "Kodagu (Madikeri)",
    "departureTime": "06:30 AM",
    "arrivalTime": "09:15 AM",
    "duration": "2h 45m",
    "price": 210,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 80
  },
  {
    "id": "RT-081",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Mysuru",
    "toCity": "Kodagu (Madikeri)",
    "departureTime": "08:15 AM",
    "arrivalTime": "11:15 AM",
    "duration": "3h 00m",
    "price": 180,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 81
  },
  {
    "id": "RT-082",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Mysuru",
    "toCity": "Kodagu (Madikeri)",
    "departureTime": "03:30 PM",
    "arrivalTime": "06:30 PM",
    "duration": "3h 00m",
    "price": 240,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 82
  },
  {
    "id": "RT-083",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Mysuru",
    "toCity": "Mangaluru",
    "departureTime": "07:00 AM",
    "arrivalTime": "01:45 PM",
    "duration": "6h 45m",
    "price": 460,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 83
  },
  {
    "id": "RT-084",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Mysuru",
    "toCity": "Mangaluru",
    "departureTime": "09:30 PM",
    "arrivalTime": "05:30 AM",
    "duration": "8h 00m",
    "price": 420,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 84
  },
  {
    "id": "RT-085",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Mysuru",
    "toCity": "Udupi",
    "departureTime": "07:45 AM",
    "arrivalTime": "03:30 PM",
    "duration": "7h 45m",
    "price": 440,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 85
  },
  {
    "id": "RT-086",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Mysuru",
    "toCity": "Udupi",
    "departureTime": "10:00 PM",
    "arrivalTime": "06:30 AM",
    "duration": "8h 30m",
    "price": 480,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 86
  },
  {
    "id": "RT-087",
    "operator": "KSRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Mysuru",
    "toCity": "Hassan",
    "departureTime": "07:15 AM",
    "arrivalTime": "09:45 AM",
    "duration": "2h 30m",
    "price": 160,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 87
  },
  {
    "id": "RT-088",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Mysuru",
    "toCity": "Hassan",
    "departureTime": "01:00 PM",
    "arrivalTime": "03:45 PM",
    "duration": "2h 45m",
    "price": 140,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 88
  },
  {
    "id": "RT-089",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Mysuru",
    "toCity": "Chikkamagaluru",
    "departureTime": "08:00 AM",
    "arrivalTime": "12:00 PM",
    "duration": "4h 00m",
    "price": 250,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 89
  },
  {
    "id": "RT-090",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Mysuru",
    "toCity": "Shivamogga",
    "departureTime": "06:45 AM",
    "arrivalTime": "12:15 PM",
    "duration": "5h 30m",
    "price": 320,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 90
  },
  {
    "id": "RT-091",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Mysuru",
    "toCity": "Hubballi",
    "departureTime": "09:00 PM",
    "arrivalTime": "06:00 AM",
    "duration": "9h 00m",
    "price": 710,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 91
  },
  {
    "id": "RT-092",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Mysuru",
    "toCity": "Belagavi",
    "departureTime": "08:15 PM",
    "arrivalTime": "06:30 AM",
    "duration": "10h 15m",
    "price": 820,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 92
  },
  {
    "id": "RT-093",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Mysuru",
    "toCity": "Davanagere",
    "departureTime": "07:30 AM",
    "arrivalTime": "01:30 PM",
    "duration": "6h 00m",
    "price": 380,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 93
  },
  {
    "id": "RT-094",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Mysuru",
    "toCity": "Vijayanagara (Hampi)",
    "departureTime": "07:00 AM",
    "arrivalTime": "03:30 PM",
    "duration": "8h 30m",
    "price": 580,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 94
  },
  {
    "id": "RT-095",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Mangaluru",
    "toCity": "Bengaluru",
    "departureTime": "06:30 AM",
    "arrivalTime": "02:30 PM",
    "duration": "8h 00m",
    "price": 720,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 95
  },
  {
    "id": "RT-096",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Mangaluru",
    "toCity": "Bengaluru",
    "departureTime": "09:00 AM",
    "arrivalTime": "05:30 PM",
    "duration": "8h 30m",
    "price": 520,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 96
  },
  {
    "id": "RT-097",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Mangaluru",
    "toCity": "Bengaluru",
    "departureTime": "10:00 PM",
    "arrivalTime": "06:00 AM",
    "duration": "8h 00m",
    "price": 640,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 97
  },
  {
    "id": "RT-098",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Mangaluru",
    "toCity": "Udupi",
    "departureTime": "06:15 AM",
    "arrivalTime": "07:30 AM",
    "duration": "1h 15m",
    "price": 95,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 98
  },
  {
    "id": "RT-099",
    "operator": "KSRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Mangaluru",
    "toCity": "Udupi",
    "departureTime": "08:00 AM",
    "arrivalTime": "09:15 AM",
    "duration": "1h 15m",
    "price": 90,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 99
  },
  {
    "id": "RT-100",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Mangaluru",
    "toCity": "Udupi",
    "departureTime": "11:30 AM",
    "arrivalTime": "12:50 PM",
    "duration": "1h 20m",
    "price": 80,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 100
  },
  {
    "id": "RT-101",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Mangaluru",
    "toCity": "Gokarna",
    "departureTime": "07:00 AM",
    "arrivalTime": "12:30 PM",
    "duration": "5h 30m",
    "price": 340,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 101
  },
  {
    "id": "RT-102",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Mangaluru",
    "toCity": "Gokarna",
    "departureTime": "02:00 PM",
    "arrivalTime": "07:30 PM",
    "duration": "5h 30m",
    "price": 370,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 102
  },
  {
    "id": "RT-103",
    "operator": "NWKRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Mangaluru",
    "toCity": "Karwar",
    "departureTime": "08:15 AM",
    "arrivalTime": "02:15 PM",
    "duration": "6h 00m",
    "price": 420,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 103
  },
  {
    "id": "RT-104",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Mangaluru",
    "toCity": "Karwar",
    "departureTime": "01:30 PM",
    "arrivalTime": "07:45 PM",
    "duration": "6h 15m",
    "price": 360,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 104
  },
  {
    "id": "RT-105",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Mangaluru",
    "toCity": "Mysuru",
    "departureTime": "07:30 AM",
    "arrivalTime": "02:15 PM",
    "duration": "6h 45m",
    "price": 460,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 105
  },
  {
    "id": "RT-106",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Mangaluru",
    "toCity": "Mysuru",
    "departureTime": "09:30 PM",
    "arrivalTime": "05:30 AM",
    "duration": "8h 00m",
    "price": 420,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 106
  },
  {
    "id": "RT-107",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Mangaluru",
    "toCity": "Kodagu (Madikeri)",
    "departureTime": "08:00 AM",
    "arrivalTime": "11:45 AM",
    "duration": "3h 45m",
    "price": 210,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 107
  },
  {
    "id": "RT-108",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Mangaluru",
    "toCity": "Hassan",
    "departureTime": "07:00 AM",
    "arrivalTime": "11:30 AM",
    "duration": "4h 30m",
    "price": 340,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 108
  },
  {
    "id": "RT-109",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Mangaluru",
    "toCity": "Chikkamagaluru",
    "departureTime": "08:30 AM",
    "arrivalTime": "01:30 PM",
    "duration": "5h 00m",
    "price": 290,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 109
  },
  {
    "id": "RT-110",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Mangaluru",
    "toCity": "Shivamogga",
    "departureTime": "06:45 AM",
    "arrivalTime": "12:00 PM",
    "duration": "5h 15m",
    "price": 280,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 110
  },
  {
    "id": "RT-111",
    "operator": "NWKRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Mangaluru",
    "toCity": "Hubballi",
    "departureTime": "07:30 AM",
    "arrivalTime": "03:00 PM",
    "duration": "7h 30m",
    "price": 620,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 111
  },
  {
    "id": "RT-112",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Mangaluru",
    "toCity": "Hubballi",
    "departureTime": "09:30 PM",
    "arrivalTime": "05:30 AM",
    "duration": "8h 00m",
    "price": 540,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 112
  },
  {
    "id": "RT-113",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Mangaluru",
    "toCity": "Belagavi",
    "departureTime": "09:00 PM",
    "arrivalTime": "06:30 AM",
    "duration": "9h 30m",
    "price": 690,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 113
  },
  {
    "id": "RT-114",
    "operator": "NWKRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Belagavi",
    "toCity": "Hubballi",
    "departureTime": "06:15 AM",
    "arrivalTime": "08:30 AM",
    "duration": "2h 15m",
    "price": 240,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 114
  },
  {
    "id": "RT-115",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Belagavi",
    "toCity": "Hubballi",
    "departureTime": "08:30 AM",
    "arrivalTime": "11:00 AM",
    "duration": "2h 30m",
    "price": 180,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 115
  },
  {
    "id": "RT-116",
    "operator": "NWKRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Belagavi",
    "toCity": "Hubballi",
    "departureTime": "02:00 PM",
    "arrivalTime": "04:15 PM",
    "duration": "2h 15m",
    "price": 210,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 116
  },
  {
    "id": "RT-117",
    "operator": "NWKRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Belagavi",
    "toCity": "Bengaluru",
    "departureTime": "07:30 AM",
    "arrivalTime": "05:00 PM",
    "duration": "9h 30m",
    "price": 950,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 117
  },
  {
    "id": "RT-118",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Belagavi",
    "toCity": "Bengaluru",
    "departureTime": "09:45 PM",
    "arrivalTime": "07:15 AM",
    "duration": "9h 30m",
    "price": 790,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 118
  },
  {
    "id": "RT-119",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Belagavi",
    "toCity": "Bengaluru",
    "departureTime": "08:15 PM",
    "arrivalTime": "06:00 AM",
    "duration": "9h 45m",
    "price": 680,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 119
  },
  {
    "id": "RT-120",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Belagavi",
    "toCity": "Bagalkote (Badami)",
    "departureTime": "07:00 AM",
    "arrivalTime": "10:15 AM",
    "duration": "3h 15m",
    "price": 220,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 120
  },
  {
    "id": "RT-121",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Belagavi",
    "toCity": "Bagalkote (Badami)",
    "departureTime": "03:00 PM",
    "arrivalTime": "06:30 PM",
    "duration": "3h 30m",
    "price": 250,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 121
  },
  {
    "id": "RT-122",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Belagavi",
    "toCity": "Vijayapura",
    "departureTime": "07:45 AM",
    "arrivalTime": "12:15 PM",
    "duration": "4h 30m",
    "price": 280,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 122
  },
  {
    "id": "RT-123",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Belagavi",
    "toCity": "Vijayapura",
    "departureTime": "02:15 PM",
    "arrivalTime": "06:45 PM",
    "duration": "4h 30m",
    "price": 310,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 123
  },
  {
    "id": "RT-124",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Belagavi",
    "toCity": "Gokarna",
    "departureTime": "08:30 PM",
    "arrivalTime": "02:45 AM",
    "duration": "6h 15m",
    "price": 480,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 124
  },
  {
    "id": "RT-125",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Belagavi",
    "toCity": "Karwar",
    "departureTime": "07:15 AM",
    "arrivalTime": "12:00 PM",
    "duration": "4h 45m",
    "price": 340,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 125
  },
  {
    "id": "RT-126",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Belagavi",
    "toCity": "Kalaburagi",
    "departureTime": "08:00 PM",
    "arrivalTime": "05:00 AM",
    "duration": "9h 00m",
    "price": 620,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 126
  },
  {
    "id": "RT-127",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Belagavi",
    "toCity": "Mangaluru",
    "departureTime": "08:45 PM",
    "arrivalTime": "06:15 AM",
    "duration": "9h 30m",
    "price": 690,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 127
  },
  {
    "id": "RT-128",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Belagavi",
    "toCity": "Mysuru",
    "departureTime": "07:30 PM",
    "arrivalTime": "05:45 AM",
    "duration": "10h 15m",
    "price": 820,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 128
  },
  {
    "id": "RT-129",
    "operator": "KKRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Kalaburagi",
    "toCity": "Bengaluru",
    "departureTime": "08:00 AM",
    "arrivalTime": "06:30 PM",
    "duration": "10h 30m",
    "price": 890,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 129
  },
  {
    "id": "RT-130",
    "operator": "KKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Kalaburagi",
    "toCity": "Bengaluru",
    "departureTime": "09:30 PM",
    "arrivalTime": "07:30 AM",
    "duration": "10h 00m",
    "price": 740,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 130
  },
  {
    "id": "RT-131",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Kalaburagi",
    "toCity": "Bengaluru",
    "departureTime": "08:15 PM",
    "arrivalTime": "06:45 AM",
    "duration": "10h 30m",
    "price": 650,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 131
  },
  {
    "id": "RT-132",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Kalaburagi",
    "toCity": "Bidar",
    "departureTime": "06:30 AM",
    "arrivalTime": "09:15 AM",
    "duration": "2h 45m",
    "price": 180,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 132
  },
  {
    "id": "RT-133",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Kalaburagi",
    "toCity": "Bidar",
    "departureTime": "02:00 PM",
    "arrivalTime": "04:45 PM",
    "duration": "2h 45m",
    "price": 180,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 133
  },
  {
    "id": "RT-134",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Kalaburagi",
    "toCity": "Raichur",
    "departureTime": "07:00 AM",
    "arrivalTime": "10:30 AM",
    "duration": "3h 30m",
    "price": 210,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 134
  },
  {
    "id": "RT-135",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Kalaburagi",
    "toCity": "Vijayapura",
    "departureTime": "07:30 AM",
    "arrivalTime": "11:15 AM",
    "duration": "3h 45m",
    "price": 230,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 135
  },
  {
    "id": "RT-136",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Kalaburagi",
    "toCity": "Bagalkote (Badami)",
    "departureTime": "08:00 AM",
    "arrivalTime": "01:00 PM",
    "duration": "5h 00m",
    "price": 340,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 136
  },
  {
    "id": "RT-137",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Kalaburagi",
    "toCity": "Hubballi",
    "departureTime": "08:15 AM",
    "arrivalTime": "03:15 PM",
    "duration": "7h 00m",
    "price": 490,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 137
  },
  {
    "id": "RT-138",
    "operator": "KKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Kalaburagi",
    "toCity": "Hubballi",
    "departureTime": "10:30 PM",
    "arrivalTime": "05:45 AM",
    "duration": "7h 15m",
    "price": 580,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 138
  },
  {
    "id": "RT-139",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Kalaburagi",
    "toCity": "Vijayanagara (Hampi)",
    "departureTime": "06:45 AM",
    "arrivalTime": "12:30 PM",
    "duration": "5h 45m",
    "price": 380,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 139
  },
  {
    "id": "RT-140",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Kalaburagi",
    "toCity": "Ballari",
    "departureTime": "07:15 AM",
    "arrivalTime": "12:45 PM",
    "duration": "5h 30m",
    "price": 360,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 140
  },
  {
    "id": "RT-141",
    "operator": "KKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Kalaburagi",
    "toCity": "Mysuru",
    "departureTime": "07:00 PM",
    "arrivalTime": "07:00 AM",
    "duration": "12h 00m",
    "price": 880,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 141
  },
  {
    "id": "RT-142",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Shivamogga",
    "toCity": "Bengaluru",
    "departureTime": "06:00 AM",
    "arrivalTime": "11:45 AM",
    "duration": "5h 45m",
    "price": 540,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 142
  },
  {
    "id": "RT-143",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Shivamogga",
    "toCity": "Bengaluru",
    "departureTime": "01:30 PM",
    "arrivalTime": "07:30 PM",
    "duration": "6h 00m",
    "price": 390,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 143
  },
  {
    "id": "RT-144",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Shivamogga",
    "toCity": "Bengaluru",
    "departureTime": "10:30 PM",
    "arrivalTime": "04:30 AM",
    "duration": "6h 00m",
    "price": 460,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 144
  },
  {
    "id": "RT-145",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Shivamogga",
    "toCity": "Hubballi",
    "departureTime": "07:30 AM",
    "arrivalTime": "11:30 AM",
    "duration": "4h 00m",
    "price": 310,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 145
  },
  {
    "id": "RT-146",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Shivamogga",
    "toCity": "Hubballi",
    "departureTime": "03:15 PM",
    "arrivalTime": "07:30 PM",
    "duration": "4h 15m",
    "price": 340,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 146
  },
  {
    "id": "RT-147",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Shivamogga",
    "toCity": "Mysuru",
    "departureTime": "07:00 AM",
    "arrivalTime": "12:30 PM",
    "duration": "5h 30m",
    "price": 320,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 147
  },
  {
    "id": "RT-148",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Shivamogga",
    "toCity": "Udupi",
    "departureTime": "06:45 AM",
    "arrivalTime": "10:30 AM",
    "duration": "3h 45m",
    "price": 240,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 148
  },
  {
    "id": "RT-149",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Shivamogga",
    "toCity": "Mangaluru",
    "departureTime": "08:15 AM",
    "arrivalTime": "01:30 PM",
    "duration": "5h 15m",
    "price": 280,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 149
  },
  {
    "id": "RT-150",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Shivamogga",
    "toCity": "Chikkamagaluru",
    "departureTime": "07:45 AM",
    "arrivalTime": "10:45 AM",
    "duration": "3h 00m",
    "price": 180,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 150
  },
  {
    "id": "RT-151",
    "operator": "KSRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Shivamogga",
    "toCity": "Davanagere",
    "departureTime": "08:00 AM",
    "arrivalTime": "10:15 AM",
    "duration": "2h 15m",
    "price": 160,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 151
  },
  {
    "id": "RT-152",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Vijayanagara (Hampi)",
    "toCity": "Bengaluru",
    "departureTime": "07:00 AM",
    "arrivalTime": "01:30 PM",
    "duration": "6h 30m",
    "price": 650,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 152
  },
  {
    "id": "RT-153",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Vijayanagara (Hampi)",
    "toCity": "Bengaluru",
    "departureTime": "10:15 PM",
    "arrivalTime": "05:15 AM",
    "duration": "7h 00m",
    "price": 580,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 153
  },
  {
    "id": "RT-154",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Vijayanagara (Hampi)",
    "toCity": "Bengaluru",
    "departureTime": "01:00 PM",
    "arrivalTime": "08:00 PM",
    "duration": "7h 00m",
    "price": 480,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 154
  },
  {
    "id": "RT-155",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Vijayanagara (Hampi)",
    "toCity": "Hubballi",
    "departureTime": "06:30 AM",
    "arrivalTime": "09:45 AM",
    "duration": "3h 15m",
    "price": 250,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 155
  },
  {
    "id": "RT-156",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Vijayanagara (Hampi)",
    "toCity": "Hubballi",
    "departureTime": "02:00 PM",
    "arrivalTime": "05:30 PM",
    "duration": "3h 30m",
    "price": 280,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 156
  },
  {
    "id": "RT-157",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Vijayanagara (Hampi)",
    "toCity": "Ballari",
    "departureTime": "07:15 AM",
    "arrivalTime": "08:45 AM",
    "duration": "1h 30m",
    "price": 120,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 157
  },
  {
    "id": "RT-158",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Vijayanagara (Hampi)",
    "toCity": "Bagalkote (Badami)",
    "departureTime": "08:00 AM",
    "arrivalTime": "11:45 AM",
    "duration": "3h 45m",
    "price": 220,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 158
  },
  {
    "id": "RT-159",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Vijayanagara (Hampi)",
    "toCity": "Kalaburagi",
    "departureTime": "07:45 AM",
    "arrivalTime": "01:30 PM",
    "duration": "5h 45m",
    "price": 380,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 159
  },
  {
    "id": "RT-160",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Vijayanagara (Hampi)",
    "toCity": "Mysuru",
    "departureTime": "08:00 AM",
    "arrivalTime": "04:30 PM",
    "duration": "8h 30m",
    "price": 580,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 160
  },
  {
    "id": "RT-161",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Vijayanagara (Hampi)",
    "toCity": "Davanagere",
    "departureTime": "09:15 AM",
    "arrivalTime": "12:15 PM",
    "duration": "3h 00m",
    "price": 220,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 161
  },
  {
    "id": "RT-162",
    "operator": "NWKRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Vijayapura",
    "toCity": "Bengaluru",
    "departureTime": "07:00 AM",
    "arrivalTime": "05:15 PM",
    "duration": "10h 15m",
    "price": 920,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 162
  },
  {
    "id": "RT-163",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Vijayapura",
    "toCity": "Bengaluru",
    "departureTime": "09:15 PM",
    "arrivalTime": "07:30 AM",
    "duration": "10h 15m",
    "price": 750,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 163
  },
  {
    "id": "RT-164",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Vijayapura",
    "toCity": "Bagalkote (Badami)",
    "departureTime": "07:30 AM",
    "arrivalTime": "09:45 AM",
    "duration": "2h 15m",
    "price": 160,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 164
  },
  {
    "id": "RT-165",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Vijayapura",
    "toCity": "Hubballi",
    "departureTime": "08:00 AM",
    "arrivalTime": "12:15 PM",
    "duration": "4h 15m",
    "price": 350,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 165
  },
  {
    "id": "RT-166",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Vijayapura",
    "toCity": "Belagavi",
    "departureTime": "07:15 AM",
    "arrivalTime": "11:45 AM",
    "duration": "4h 30m",
    "price": 280,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 166
  },
  {
    "id": "RT-167",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Vijayapura",
    "toCity": "Kalaburagi",
    "departureTime": "08:30 AM",
    "arrivalTime": "12:15 PM",
    "duration": "3h 45m",
    "price": 230,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 167
  },
  {
    "id": "RT-168",
    "operator": "KSRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Davanagere",
    "toCity": "Bengaluru",
    "departureTime": "06:30 AM",
    "arrivalTime": "11:00 AM",
    "duration": "4h 30m",
    "price": 450,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 168
  },
  {
    "id": "RT-169",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Davanagere",
    "toCity": "Bengaluru",
    "departureTime": "08:00 AM",
    "arrivalTime": "12:30 PM",
    "duration": "4h 30m",
    "price": 520,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 169
  },
  {
    "id": "RT-170",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Davanagere",
    "toCity": "Bengaluru",
    "departureTime": "11:00 PM",
    "arrivalTime": "03:30 AM",
    "duration": "4h 30m",
    "price": 420,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 170
  },
  {
    "id": "RT-171",
    "operator": "NWKRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Davanagere",
    "toCity": "Hubballi",
    "departureTime": "07:15 AM",
    "arrivalTime": "09:45 AM",
    "duration": "2h 30m",
    "price": 260,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 171
  },
  {
    "id": "RT-172",
    "operator": "KSRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Davanagere",
    "toCity": "Shivamogga",
    "departureTime": "08:00 AM",
    "arrivalTime": "10:15 AM",
    "duration": "2h 15m",
    "price": 160,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 172
  },
  {
    "id": "RT-173",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Davanagere",
    "toCity": "Mysuru",
    "departureTime": "08:30 AM",
    "arrivalTime": "02:30 PM",
    "duration": "6h 00m",
    "price": 380,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 173
  },
  {
    "id": "RT-174",
    "operator": "KSRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Hassan",
    "toCity": "Bengaluru",
    "departureTime": "06:30 AM",
    "arrivalTime": "09:45 AM",
    "duration": "3h 15m",
    "price": 290,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 174
  },
  {
    "id": "RT-175",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Hassan",
    "toCity": "Bengaluru",
    "departureTime": "08:00 AM",
    "arrivalTime": "11:15 AM",
    "duration": "3h 15m",
    "price": 340,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 175
  },
  {
    "id": "RT-176",
    "operator": "KSRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Hassan",
    "toCity": "Mysuru",
    "departureTime": "07:30 AM",
    "arrivalTime": "10:00 AM",
    "duration": "2h 30m",
    "price": 160,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 176
  },
  {
    "id": "RT-177",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hassan",
    "toCity": "Chikkamagaluru",
    "departureTime": "08:15 AM",
    "arrivalTime": "09:30 AM",
    "duration": "1h 15m",
    "price": 90,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 177
  },
  {
    "id": "RT-178",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Hassan",
    "toCity": "Mangaluru",
    "departureTime": "09:00 AM",
    "arrivalTime": "01:30 PM",
    "duration": "4h 30m",
    "price": 340,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 178
  },
  {
    "id": "RT-179",
    "operator": "KSRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Kodagu (Madikeri)",
    "toCity": "Mysuru",
    "departureTime": "06:30 AM",
    "arrivalTime": "09:15 AM",
    "duration": "2h 45m",
    "price": 210,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 179
  },
  {
    "id": "RT-180",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Kodagu (Madikeri)",
    "toCity": "Mysuru",
    "departureTime": "08:30 AM",
    "arrivalTime": "11:30 AM",
    "duration": "3h 00m",
    "price": 180,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 180
  },
  {
    "id": "RT-181",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Kodagu (Madikeri)",
    "toCity": "Bengaluru",
    "departureTime": "07:00 AM",
    "arrivalTime": "01:30 PM",
    "duration": "6h 30m",
    "price": 550,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 181
  },
  {
    "id": "RT-182",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Kodagu (Madikeri)",
    "toCity": "Bengaluru",
    "departureTime": "10:00 PM",
    "arrivalTime": "04:45 AM",
    "duration": "6h 45m",
    "price": 490,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 182
  },
  {
    "id": "RT-183",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Kodagu (Madikeri)",
    "toCity": "Mangaluru",
    "departureTime": "07:30 AM",
    "arrivalTime": "11:15 AM",
    "duration": "3h 45m",
    "price": 210,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 183
  },
  {
    "id": "RT-184",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Udupi",
    "toCity": "Mangaluru",
    "departureTime": "06:30 AM",
    "arrivalTime": "07:45 AM",
    "duration": "1h 15m",
    "price": 95,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 184
  },
  {
    "id": "RT-185",
    "operator": "KSRTC Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Udupi",
    "toCity": "Mangaluru",
    "departureTime": "08:30 AM",
    "arrivalTime": "09:45 AM",
    "duration": "1h 15m",
    "price": 90,
    "seatsAvailable": 27,
    "amenities": [
      "Zero Emission Electric Coach",
      "Fast USB-C Charging at Every Seat",
      "Whisper-Quiet Cabin",
      "Air Suspension Comfort",
      "Live Telematics & GPS",
      "Driver CCTV & Speed Governance"
    ],
    "_seed": 185
  },
  {
    "id": "RT-186",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Udupi",
    "toCity": "Bengaluru",
    "departureTime": "07:00 AM",
    "arrivalTime": "03:45 PM",
    "duration": "8h 45m",
    "price": 760,
    "seatsAvailable": 27,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Ergonomic Seats"
    ],
    "_seed": 186
  },
  {
    "id": "RT-187",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Udupi",
    "toCity": "Bengaluru",
    "departureTime": "09:30 PM",
    "arrivalTime": "06:15 AM",
    "duration": "8h 45m",
    "price": 680,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 187
  },
  {
    "id": "RT-188",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Udupi",
    "toCity": "Gokarna",
    "departureTime": "08:00 AM",
    "arrivalTime": "12:30 PM",
    "duration": "4h 30m",
    "price": 280,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 188
  },
  {
    "id": "RT-189",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Udupi",
    "toCity": "Hubballi",
    "departureTime": "07:45 AM",
    "arrivalTime": "02:30 PM",
    "duration": "6h 45m",
    "price": 440,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 189
  },
  {
    "id": "RT-190",
    "operator": "KSRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Udupi",
    "toCity": "Mysuru",
    "departureTime": "09:15 PM",
    "arrivalTime": "05:45 AM",
    "duration": "8h 30m",
    "price": 480,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 190
  },
  {
    "id": "RT-191",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Ballari",
    "toCity": "Bengaluru",
    "departureTime": "07:30 AM",
    "arrivalTime": "02:00 PM",
    "duration": "6h 30m",
    "price": 450,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 191
  },
  {
    "id": "RT-192",
    "operator": "KKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Ballari",
    "toCity": "Bengaluru",
    "departureTime": "10:00 PM",
    "arrivalTime": "04:30 AM",
    "duration": "6h 30m",
    "price": 520,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 192
  },
  {
    "id": "RT-193",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Ballari",
    "toCity": "Vijayanagara (Hampi)",
    "departureTime": "07:00 AM",
    "arrivalTime": "08:30 AM",
    "duration": "1h 30m",
    "price": 120,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 193
  },
  {
    "id": "RT-194",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Ballari",
    "toCity": "Hubballi",
    "departureTime": "08:00 AM",
    "arrivalTime": "12:30 PM",
    "duration": "4h 30m",
    "price": 320,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 194
  },
  {
    "id": "RT-195",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Ballari",
    "toCity": "Kalaburagi",
    "departureTime": "07:15 AM",
    "arrivalTime": "12:45 PM",
    "duration": "5h 30m",
    "price": 360,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 195
  },
  {
    "id": "RT-196",
    "operator": "KKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bidar",
    "toCity": "Kalaburagi",
    "departureTime": "07:00 AM",
    "arrivalTime": "09:45 AM",
    "duration": "2h 45m",
    "price": 180,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 196
  },
  {
    "id": "RT-197",
    "operator": "KKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bidar",
    "toCity": "Bengaluru",
    "departureTime": "08:30 PM",
    "arrivalTime": "07:45 AM",
    "duration": "11h 15m",
    "price": 820,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 197
  },
  {
    "id": "RT-198",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bagalkote (Badami)",
    "toCity": "Hubballi",
    "departureTime": "07:15 AM",
    "arrivalTime": "10:15 AM",
    "duration": "3h 00m",
    "price": 260,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 198
  },
  {
    "id": "RT-199",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bagalkote (Badami)",
    "toCity": "Belagavi",
    "departureTime": "08:00 AM",
    "arrivalTime": "11:15 AM",
    "duration": "3h 15m",
    "price": 220,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 199
  },
  {
    "id": "RT-200",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bagalkote (Badami)",
    "toCity": "Vijayapura",
    "departureTime": "07:30 AM",
    "arrivalTime": "09:45 AM",
    "duration": "2h 15m",
    "price": 160,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 200
  },
  {
    "id": "RT-201",
    "operator": "NWKRTC Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bagalkote (Badami)",
    "toCity": "Bengaluru",
    "departureTime": "08:45 PM",
    "arrivalTime": "06:30 AM",
    "duration": "9h 45m",
    "price": 730,
    "seatsAvailable": 27,
    "amenities": [
      "Individual Lower & Upper Berths",
      "Fresh Pillows & Bed Rolls",
      "Night Reading LED Lamps",
      "Curtains for Privacy",
      "Spacious Under-Chassis Boot"
    ],
    "_seed": 201
  },
  {
    "id": "RT-202",
    "operator": "NWKRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bagalkote (Badami)",
    "toCity": "Vijayanagara (Hampi)",
    "departureTime": "07:45 AM",
    "arrivalTime": "11:30 AM",
    "duration": "3h 45m",
    "price": 220,
    "seatsAvailable": 27,
    "amenities": [
      "Push-Back 2+2 Executive Seats",
      "Spacious Overhead Luggage Racks",
      "Individual Reading Lamps",
      "Emergency Exit Windows",
      "KSRTC Live Vehicle Tracking"
    ],
    "_seed": 202
  }
];

export const BUS_ROUTES_DATA: BusRoute[] = RAW_ROUTES_DEF.map(r => ({
  id: r.id,
  operator: r.operator,
  serviceType: r.serviceType as any,
  fromCity: r.fromCity,
  toCity: r.toCity,
  departureTime: r.departureTime,
  arrivalTime: r.arrivalTime,
  duration: r.duration,
  price: r.price,
  seatsAvailable: r.seatsAvailable,
  amenities: r.amenities,
  seats: generateRouteSeats(r.price, r._seed)
}));

export const searchBusRoutes = (fromCity: string, toCity: string): BusRoute[] => {
  return BUS_ROUTES_DATA.filter(r => 
    r.fromCity.toLowerCase().includes(fromCity.toLowerCase()) &&
    r.toCity.toLowerCase().includes(toCity.toLowerCase())
  );
};
