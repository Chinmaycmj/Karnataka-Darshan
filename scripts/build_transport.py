# -*- coding: utf-8 -*-
import json

routes_template = [
  {"from": "Bengaluru", "to": "Mysuru", "distance": "145 km", "baseDuration": "2h 45m"},
  {"from": "Bengaluru", "to": "Vijayanagara (Hampi)", "distance": "340 km", "baseDuration": "6h 30m"},
  {"from": "Bengaluru", "to": "Kodagu (Madikeri)", "distance": "250 km", "baseDuration": "5h 15m"},
  {"from": "Bengaluru", "to": "Udupi", "distance": "400 km", "baseDuration": "8h 00m"},
  {"from": "Bengaluru", "to": "Mangaluru", "distance": "350 km", "baseDuration": "7h 15m"},
  {"from": "Bengaluru", "to": "Gokarna", "distance": "485 km", "baseDuration": "9h 30m"},
  {"from": "Bengaluru", "to": "Chikkamagaluru", "distance": "240 km", "baseDuration": "4h 45m"},
  {"from": "Bengaluru", "to": "Belagavi", "distance": "500 km", "baseDuration": "8h 45m"},
  {"from": "Bengaluru", "to": "Bidar", "distance": "670 km", "baseDuration": "12h 00m"},
  {"from": "Bengaluru", "to": "Kalaburagi", "distance": "580 km", "baseDuration": "10h 30m"},
  {"from": "Mysuru", "to": "Kodagu (Madikeri)", "distance": "120 km", "baseDuration": "2h 30m"},
  {"from": "Mangaluru", "to": "Gokarna", "distance": "230 km", "baseDuration": "4h 30m"},
  {"from": "Hubballi", "to": "Vijayanagara (Hampi)", "distance": "145 km", "baseDuration": "3h 00m"},
  {"from": "Belagavi", "to": "Bagalkote (Badami)", "distance": "140 km", "baseDuration": "3h 15m"}
]

services = [
  {
    "type": "Airavat Club Class",
    "operator": "KSRTC Airavat",
    "priceMult": 1.0,
    "amenities": ["Air Suspension", "Emergency Exit", "Live GPS Tracking", "Charging Ports", "Blankets & Water Bottle", "Reclining Seats"]
  },
  {
    "type": "EV Power Plus",
    "operator": "KSRTC EV Power Plus",
    "priceMult": 0.9,
    "amenities": ["100% Electric Silent Ride", "Air Conditioned", "Fast USB-C Ports", "Reading Lights", "Live GPS Tracking"]
  },
  {
    "type": "Rajahamsa Executive",
    "operator": "KSRTC Rajahamsa",
    "priceMult": 0.65,
    "amenities": ["Pushback Recliner Seats", "Air Suspension", "Reading Lights", "Luggage Storage"]
  },
  {
    "type": "Non-AC Sleeper",
    "operator": "KSRTC Corona Sleeper",
    "priceMult": 0.75,
    "amenities": ["Single & Double Berths", "Spacious Bedding", "Curtains for Privacy", "Night Reading Lamp"]
  }
]

def generate_seats(service_type, base_price):
    seats = []
    total_seats = 36 if "Sleeper" in service_type else 40
    
    for i in range(1, total_seats + 1):
        # Deterministic status pattern
        status = "booked" if (i % 5 == 0 or i % 7 == 0) else "available"
        is_female = True if (i in [3, 4, 7, 8, 11, 12] and status == "available") else False
        seat_type = "seater"
        if "Sleeper" in service_type:
            seat_type = "sleeper-lower" if i <= 18 else "sleeper-upper"
            
        seats.append({
            "id": f"s-{i}",
            "number": f"{'L' if 'lower' in seat_type else ('U' if 'upper' in seat_type else '')}{i}",
            "type": seat_type,
            "status": status,
            "isFemaleReserved": is_female,
            "price": base_price if seat_type != "sleeper-upper" else base_price - 50
        })
    return seats

all_routes = []
route_counter = 101

departure_times = [
  ("06:00 AM", "09:30 AM"),
  ("08:30 AM", "02:00 PM"),
  ("02:15 PM", "07:30 PM"),
  ("09:45 PM", "05:30 AM"),
  ("10:30 PM", "06:15 AM"),
  ("11:15 PM", "07:00 AM")
]

for r in routes_template:
    from_c = r["from"]
    to_c = r["to"]
    dist_num = int(r["distance"].replace(" km", ""))
    
    for s_idx, s in enumerate(services):
        d_time, a_time = departure_times[s_idx % len(departure_times)]
        base_fare = int(dist_num * 1.8 * s["priceMult"])
        base_fare = max(380, round(base_fare / 10) * 10)
        
        bus_seats = generate_seats(s["type"], base_fare)
        avail_count = len([st for st in bus_seats if st["status"] == "available"])
        
        all_routes.append({
            "id": f"RT-{route_counter}",
            "operator": s["operator"],
            "serviceType": s["type"],
            "fromCity": from_c,
            "toCity": to_c,
            "departureTime": d_time,
            "arrivalTime": a_time,
            "duration": r["baseDuration"],
            "price": base_fare,
            "seatsAvailable": avail_count,
            "amenities": s["amenities"],
            "seats": bus_seats
        })
        route_counter += 1

header = "import { BusRoute } from './types';\\n\\n"
with open('src/data/transportRoutes.ts', 'w', encoding='utf-8') as f:
    f.write(header)
    f.write('export const BUS_ROUTES_DATA: BusRoute[] = ' + json.dumps(all_routes, indent=2, ensure_ascii=False) + ';\\n\\n')
    f.write('export const searchBusRoutes = (fromCity: string, toCity: string): BusRoute[] => {\\n')
    f.write('  return BUS_ROUTES_DATA.filter(r => \\n')
    f.write('    r.fromCity.toLowerCase().includes(fromCity.toLowerCase()) &&\\n')
    f.write('    r.toCity.toLowerCase().includes(toCity.toLowerCase())\\n')
    f.write('  );\\n')
    f.write('};\\n')

print(f'Transport dataset built successfully with {len(all_routes)} scheduled KSRTC routes across Karnataka.')
