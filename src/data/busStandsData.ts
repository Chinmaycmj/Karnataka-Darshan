// Official KSRTC, NWKRTC, and KKRTC Bus Stand Profiles and Departure Timetable Boards

export interface BusStandScheduleEntry {
  serviceNumber: string;
  destination: string;
  serviceType: string;
  operator: 'KSRTC' | 'NWKRTC' | 'KKRTC';
  departureTime: string;
  viaRoute: string;
  platform: string;
  frequency: string;
  fare: number;
}

export interface BusStandInfo {
  id: string;
  city: string;
  kannadaCity: string;
  name: string;
  kannadaName: string;
  division: 'KSRTC' | 'NWKRTC' | 'KKRTC';
  divisionFullName: string;
  address: string;
  helplinePhone: string;
  enquiryCounter: string;
  operatingHours: string;
  totalPlatforms: number;
  dailyDepartures: string;
  facilities: string[];
  platformBays: {
    platforms: string;
    destinations: string;
    serviceTypes: string;
  }[];
  schedules: BusStandScheduleEntry[];
}

export const BUS_STANDS_DIRECTORY: BusStandInfo[] = [
  {
    "id": "hubballi-cbs",
    "city": "Hubballi",
    "kannadaCity": "\u0cb9\u0cc1\u0cac\u0ccd\u0cac\u0cb3\u0ccd\u0cb3\u0cbf",
    "name": "Hubballi New Central Bus Stand (Gokul Road & Hosur CBS)",
    "kannadaName": "\u0cb9\u0cc1\u0cac\u0ccd\u0cac\u0cb3\u0ccd\u0cb3\u0cbf \u0cb9\u0cca\u0cb8 \u0c95\u0cc7\u0c82\u0ca6\u0ccd\u0cb0 \u0cac\u0cb8\u0ccd \u0ca8\u0cbf\u0cb2\u0ccd\u0ca6\u0cbe\u0ca3 (\u0c97\u0ccb\u0c95\u0cc1\u0cb2\u0ccd \u0cb0\u0cb8\u0ccd\u0ca4\u0cc6 \u0cae\u0ca4\u0ccd\u0ca4\u0cc1 \u0cb9\u0cca\u0cb8\u0cc2\u0cb0\u0cc1)",
    "division": "NWKRTC",
    "divisionFullName": "North Western Karnataka Road Transport Corporation (\u0cb5\u0cbe\u0caf\u0cb5\u0ccd\u0caf \u0c95\u0cb0\u0ccd\u0ca8\u0cbe\u0c9f\u0c95 \u0cb0\u0cb8\u0ccd\u0ca4\u0cc6 \u0cb8\u0cbe\u0cb0\u0cbf\u0c97\u0cc6)",
    "address": "Gokul Road & Hosur Circle, Hubballi, Dharwad Dist - 580030",
    "helplinePhone": "0836-2237300 / 0836-2330554",
    "enquiryCounter": "7760991684 (24x7 Control Room)",
    "operatingHours": "24 Hours Open (Continuous Operations)",
    "totalPlatforms": 24,
    "dailyDepartures": "950+ Express & Inter-District Services",
    "facilities": [
      "24x7 Deluxe AC Waiting Lounge",
      "Electric Vehicle (EV) Fast Charging Hub",
      "Canteen & KSTDC Janatha Aahar",
      "Cloakroom & Luggage Depot",
      "Automated KSRTC/NWKRTC E-Booking Kiosks",
      "Braille Signage & Wheelchair Ramps"
    ],
    "platformBays": [
      {
        "platforms": "Platform 1 - 4",
        "destinations": "Bengaluru (Express & Non-Stop), Tumakuru, Chitradurga",
        "serviceTypes": "Airavat Club Class, EV Power Plus, Rajahamsa"
      },
      {
        "platforms": "Platform 5 - 8",
        "destinations": "Belagavi CBT, Kolhapur, Pune, Mumbai",
        "serviceTypes": "Airavat, Rajahamsa, Sleeper"
      },
      {
        "platforms": "Platform 9 - 12",
        "destinations": "Gokarna, Karwar, Sirsi, Kumta, Ankola",
        "serviceTypes": "Rajahamsa, Vayavya Sarige"
      },
      {
        "platforms": "Platform 13 - 16",
        "destinations": "Mangaluru Bejai, Udupi, Kundapura, Murudeshwara",
        "serviceTypes": "Airavat Club Class, Non-AC Sleeper"
      },
      {
        "platforms": "Platform 17 - 20",
        "destinations": "Bagalkote (Badami), Vijayapura, Kalaburagi, Bidar",
        "serviceTypes": "Rajahamsa, KKRTC Kalyana Ratha"
      },
      {
        "platforms": "Platform 21 - 24",
        "destinations": "Hospete (Hampi), Ballari, Davanagere, Shivamogga, Mysuru",
        "serviceTypes": "Rajahamsa, Express Sarige"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "NW-1001",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "NWKRTC",
        "departureTime": "06:00 AM",
        "viaRoute": "Haveri - Ranebennur - Davanagere - Tumakuru",
        "platform": "Bay 1",
        "frequency": "Every 45 mins",
        "fare": 840
      },
      {
        "serviceNumber": "NW-1004",
        "destination": "Bengaluru",
        "serviceType": "EV Power Plus",
        "operator": "NWKRTC",
        "departureTime": "07:30 AM",
        "viaRoute": "Davanagere - Chitradurga Expressway",
        "platform": "Bay 2",
        "frequency": "Daily 4 Trips",
        "fare": 790
      },
      {
        "serviceNumber": "NW-1008",
        "destination": "Bengaluru",
        "serviceType": "Rajahamsa Executive",
        "operator": "NWKRTC",
        "departureTime": "09:00 AM",
        "viaRoute": "Haveri - Davanagere - Sira",
        "platform": "Bay 3",
        "frequency": "Hourly Service",
        "fare": 580
      },
      {
        "serviceNumber": "NW-1022",
        "destination": "Bengaluru",
        "serviceType": "Non-AC Sleeper",
        "operator": "NWKRTC",
        "departureTime": "10:00 PM",
        "viaRoute": "Direct NH-48 Overnight Express",
        "platform": "Bay 2",
        "frequency": "Nightly 6 Trips",
        "fare": 690
      },
      {
        "serviceNumber": "NW-2002",
        "destination": "Belagavi",
        "serviceType": "Airavat Club Class",
        "operator": "NWKRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Dharwad Bypass - Kittur Tollway",
        "platform": "Bay 5",
        "frequency": "Every 30 mins",
        "fare": 240
      },
      {
        "serviceNumber": "NW-2005",
        "destination": "Belagavi",
        "serviceType": "Rajahamsa Executive",
        "operator": "NWKRTC",
        "departureTime": "08:15 AM",
        "viaRoute": "Dharwad - Kittur Fort",
        "platform": "Bay 6",
        "frequency": "Every 45 mins",
        "fare": 180
      },
      {
        "serviceNumber": "NW-3010",
        "destination": "Bagalkote (Badami)",
        "serviceType": "Rajahamsa Executive",
        "operator": "NWKRTC",
        "departureTime": "06:45 AM",
        "viaRoute": "Navalgund - Nargund - Badami",
        "platform": "Bay 17",
        "frequency": "Every 1 hour",
        "fare": 260
      },
      {
        "serviceNumber": "NW-3015",
        "destination": "Vijayapura",
        "serviceType": "Rajahamsa Executive",
        "operator": "NWKRTC",
        "departureTime": "07:15 AM",
        "viaRoute": "Gadag - Bagalkote Bypass",
        "platform": "Bay 18",
        "frequency": "Every 1 hour",
        "fare": 350
      },
      {
        "serviceNumber": "NW-4001",
        "destination": "Vijayanagara (Hampi)",
        "serviceType": "Rajahamsa Executive",
        "operator": "NWKRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Gadag - Koppal - Munirabad Dam",
        "platform": "Bay 21",
        "frequency": "Every 1 hour",
        "fare": 250
      },
      {
        "serviceNumber": "NW-5002",
        "destination": "Mangaluru",
        "serviceType": "Airavat Club Class",
        "operator": "NWKRTC",
        "departureTime": "07:30 AM",
        "viaRoute": "Yellapur - Sirsi - Kumta - Kundapura - Udupi",
        "platform": "Bay 13",
        "frequency": "4 Daily Services",
        "fare": 620
      },
      {
        "serviceNumber": "NW-5010",
        "destination": "Mangaluru",
        "serviceType": "Non-AC Sleeper",
        "operator": "NWKRTC",
        "departureTime": "09:30 PM",
        "viaRoute": "Ankola - Bhatkal - Udupi",
        "platform": "Bay 14",
        "frequency": "Night Express",
        "fare": 540
      },
      {
        "serviceNumber": "NW-6003",
        "destination": "Gokarna",
        "serviceType": "Rajahamsa Executive",
        "operator": "NWKRTC",
        "departureTime": "08:00 AM",
        "viaRoute": "Yellapur - Ankola Coastal Highway",
        "platform": "Bay 9",
        "frequency": "Daily 4 Trips",
        "fare": 320
      },
      {
        "serviceNumber": "NW-6012",
        "destination": "Karwar",
        "serviceType": "Airavat Club Class",
        "operator": "NWKRTC",
        "departureTime": "09:00 AM",
        "viaRoute": "Hubballi-Ankola Highway - Kali River",
        "platform": "Bay 10",
        "frequency": "3 Daily Trips",
        "fare": 360
      },
      {
        "serviceNumber": "NW-7001",
        "destination": "Shivamogga",
        "serviceType": "Rajahamsa Executive",
        "operator": "NWKRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Shiggaon - Haveri - Hirekerur - Shikaripura",
        "platform": "Bay 22",
        "frequency": "Every 2 hours",
        "fare": 310
      },
      {
        "serviceNumber": "NW-7015",
        "destination": "Davanagere",
        "serviceType": "EV Power Plus",
        "operator": "NWKRTC",
        "departureTime": "08:30 AM",
        "viaRoute": "Haveri - Motebennur - Ranebennur",
        "platform": "Bay 23",
        "frequency": "Every 1.5 hours",
        "fare": 260
      },
      {
        "serviceNumber": "KK-8001",
        "destination": "Kalaburagi",
        "serviceType": "Rajahamsa Executive",
        "operator": "KKRTC",
        "departureTime": "08:00 AM",
        "viaRoute": "Gadag - Koppal - Kushtagi - Shahapur",
        "platform": "Bay 19",
        "frequency": "4 Daily Trips",
        "fare": 490
      },
      {
        "serviceNumber": "KK-8020",
        "destination": "Kalaburagi",
        "serviceType": "Non-AC Sleeper",
        "operator": "KKRTC",
        "departureTime": "10:15 PM",
        "viaRoute": "Sindhanur - Raichur Road",
        "platform": "Bay 20",
        "frequency": "Night Express",
        "fare": 580
      },
      {
        "serviceNumber": "NW-9005",
        "destination": "Mysuru",
        "serviceType": "Non-AC Sleeper",
        "operator": "NWKRTC",
        "departureTime": "08:45 PM",
        "viaRoute": "Davanagere - Arsikere - Hassan - KR Nagar",
        "platform": "Bay 24",
        "frequency": "Nightly 3 Trips",
        "fare": 710
      },
      {
        "serviceNumber": "NW-9010",
        "destination": "Ballari",
        "serviceType": "Rajahamsa Executive",
        "operator": "NWKRTC",
        "departureTime": "07:30 AM",
        "viaRoute": "Gadag - Koppal - Hospete",
        "platform": "Bay 21",
        "frequency": "Hourly Service",
        "fare": 320
      }
    ]
  },
  {
    "id": "bengaluru-kbs",
    "city": "Bengaluru",
    "kannadaCity": "\u0cac\u0cc6\u0c82\u0c97\u0cb3\u0cc2\u0cb0\u0cc1",
    "name": "Kempegowda Bus Station (Majestic KBS & Satellite MCTC)",
    "kannadaName": "\u0c95\u0cc6\u0c82\u0caa\u0cc7\u0c97\u0ccc\u0ca1 \u0cac\u0cb8\u0ccd \u0ca8\u0cbf\u0cb2\u0ccd\u0ca6\u0cbe\u0ca3 (\u0cae\u0cc6\u0c9c\u0cc6\u0cb8\u0ccd\u0c9f\u0cbf\u0c95\u0ccd \u0cae\u0ca4\u0ccd\u0ca4\u0cc1 \u0cb8\u0ccd\u0caf\u0cbe\u0c9f\u0cb2\u0cc8\u0c9f\u0ccd \u0cae\u0cc8\u0cb8\u0cc2\u0cb0\u0cc1 \u0cb0\u0cb8\u0ccd\u0ca4\u0cc6)",
    "division": "KSRTC",
    "divisionFullName": "Karnataka State Road Transport Corporation (\u0c95\u0cb0\u0ccd\u0ca8\u0cbe\u0c9f\u0c95 \u0cb0\u0cbe\u0c9c\u0ccd\u0caf \u0cb0\u0cb8\u0ccd\u0ca4\u0cc6 \u0cb8\u0cbe\u0cb0\u0cbf\u0c97\u0cc6 \u0ca8\u0cbf\u0c97\u0cae)",
    "address": "Kempegowda Bus Station, Majestic, Bengaluru - 560009",
    "helplinePhone": "080-22220386 / 080-22870099",
    "enquiryCounter": "7760990034 (KBS Central Helpline)",
    "operatingHours": "24 Hours Continuous",
    "totalPlatforms": 30,
    "dailyDepartures": "2,400+ Inter-District & Inter-State Services",
    "facilities": [
      "Central Air-Conditioned Passenger Lounges",
      "Namma Metro Direct Pedestrian Skywalk Link",
      "Automated PNR Ticketing Counters",
      "Cloakrooms & Mother-Care Rooms",
      "24-Hour Food Plaza & Pharmacy",
      "Comprehensive Tourist Information Bureau"
    ],
    "platformBays": [
      {
        "platforms": "Platform 1 - 5",
        "destinations": "Mysuru (Non-Stop Expressway), Mandya, Chamarajanagar",
        "serviceTypes": "EV Power Plus, Airavat Club Class"
      },
      {
        "platforms": "Platform 6 - 9",
        "destinations": "Hassan, Chikkamagaluru, Belur, Halebidu",
        "serviceTypes": "Airavat, Rajahamsa"
      },
      {
        "platforms": "Platform 10 - 14",
        "destinations": "Mangaluru, Udupi, Dharmasthala, Kukke Subrahmanya",
        "serviceTypes": "Airavat Multi-Axle, Sleeper"
      },
      {
        "platforms": "Platform 15 - 19",
        "destinations": "Shivamogga, Sagar, Jog Falls, Davanagere",
        "serviceTypes": "Rajahamsa, EV Power Plus"
      },
      {
        "platforms": "Platform 20 - 24",
        "destinations": "Hubballi, Belagavi, Dharwad, Kolhapur",
        "serviceTypes": "Airavat Club Class, Rajahamsa"
      },
      {
        "platforms": "Platform 25 - 30",
        "destinations": "Hampi (Hospete), Kalaburagi, Bidar, Vijayapura, Raichur",
        "serviceTypes": "Airavat, Non-AC Sleeper"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KS-101",
        "destination": "Mysuru",
        "serviceType": "EV Power Plus",
        "operator": "KSRTC",
        "departureTime": "06:00 AM",
        "viaRoute": "Bengaluru-Mysuru Expressway Non-Stop",
        "platform": "Bay 1",
        "frequency": "Every 15 mins",
        "fare": 320
      },
      {
        "serviceNumber": "KS-105",
        "destination": "Mysuru",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "07:15 AM",
        "viaRoute": "Expressway Corridor",
        "platform": "Bay 2",
        "frequency": "Every 30 mins",
        "fare": 380
      },
      {
        "serviceNumber": "KS-201",
        "destination": "Hubballi",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Tumakuru - Chitradurga - Davanagere",
        "platform": "Bay 20",
        "frequency": "Every 45 mins",
        "fare": 840
      },
      {
        "serviceNumber": "KS-215",
        "destination": "Belagavi",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Hubballi Bypass - Kittur",
        "platform": "Bay 21",
        "frequency": "Hourly",
        "fare": 950
      },
      {
        "serviceNumber": "KS-301",
        "destination": "Vijayanagara (Hampi)",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Chitradurga - Kudligi - Hospete",
        "platform": "Bay 25",
        "frequency": "Morning & Night",
        "fare": 650
      },
      {
        "serviceNumber": "KS-310",
        "destination": "Vijayanagara (Hampi)",
        "serviceType": "Non-AC Sleeper",
        "operator": "KSRTC",
        "departureTime": "10:30 PM",
        "viaRoute": "Direct Overnight Express",
        "platform": "Bay 26",
        "frequency": "Night Express",
        "fare": 580
      },
      {
        "serviceNumber": "KS-401",
        "destination": "Mangaluru",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "06:45 AM",
        "viaRoute": "Kunigal - Hassan - Sakleshpur - Shiradi Ghat",
        "platform": "Bay 10",
        "frequency": "Hourly",
        "fare": 720
      },
      {
        "serviceNumber": "KS-412",
        "destination": "Udupi",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "07:30 AM",
        "viaRoute": "Hassan - Mangaluru Bypass - Mulki",
        "platform": "Bay 11",
        "frequency": "Every 1 hour",
        "fare": 760
      },
      {
        "serviceNumber": "KS-501",
        "destination": "Kodagu (Madikeri)",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Mysuru - Hunsur - Kushalnagar",
        "platform": "Bay 3",
        "frequency": "Every 1 hour",
        "fare": 550
      },
      {
        "serviceNumber": "KS-601",
        "destination": "Chikkamagaluru",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "06:15 AM",
        "viaRoute": "Hassan - Belur bypass",
        "platform": "Bay 7",
        "frequency": "Every 1 hour",
        "fare": 420
      },
      {
        "serviceNumber": "KS-701",
        "destination": "Shivamogga",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "06:00 AM",
        "viaRoute": "Tumakuru - Tiptur - Arsikere - Tarikere",
        "platform": "Bay 15",
        "frequency": "Hourly",
        "fare": 540
      },
      {
        "serviceNumber": "KS-801",
        "destination": "Kalaburagi",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "08:00 AM",
        "viaRoute": "Anantapur - Raichur - Shahapur",
        "platform": "Bay 27",
        "frequency": "Morning & Night",
        "fare": 890
      },
      {
        "serviceNumber": "KS-815",
        "destination": "Kalaburagi",
        "serviceType": "Non-AC Sleeper",
        "operator": "KKRTC",
        "departureTime": "09:30 PM",
        "viaRoute": "Overnight Highway Sleeper",
        "platform": "Bay 28",
        "frequency": "Night Express",
        "fare": 740
      },
      {
        "serviceNumber": "KS-901",
        "destination": "Gokarna",
        "serviceType": "Non-AC Sleeper",
        "operator": "KSRTC",
        "departureTime": "08:30 PM",
        "viaRoute": "Shivamogga - Sagar - Honnavara - Kumta",
        "platform": "Bay 12",
        "frequency": "Daily 3 Trips",
        "fare": 720
      },
      {
        "serviceNumber": "KS-950",
        "destination": "Vijayapura",
        "serviceType": "Non-AC Sleeper",
        "operator": "KSRTC",
        "departureTime": "09:15 PM",
        "viaRoute": "Hubballi - Bagalkote - Bilagi",
        "platform": "Bay 29",
        "frequency": "Night Express",
        "fare": 750
      }
    ]
  },
  {
    "id": "mysuru-cbs",
    "city": "Mysuru",
    "kannadaCity": "\u0cae\u0cc8\u0cb8\u0cc2\u0cb0\u0cc1",
    "name": "Mysuru Suburb Central Bus Stand (CBS)",
    "kannadaName": "\u0cae\u0cc8\u0cb8\u0cc2\u0cb0\u0cc1 \u0c89\u0caa\u0ca8\u0c97\u0cb0 \u0c95\u0cc7\u0c82\u0ca6\u0ccd\u0cb0 \u0cac\u0cb8\u0ccd \u0ca8\u0cbf\u0cb2\u0ccd\u0ca6\u0cbe\u0ca3",
    "division": "KSRTC",
    "divisionFullName": "KSRTC Mysuru Division (\u0cae\u0cc8\u0cb8\u0cc2\u0cb0\u0cc1 \u0cb5\u0cbf\u0cad\u0cbe\u0c97)",
    "address": "Mother Teresa Road, Suburb Bus Stand, Mysuru - 570001",
    "helplinePhone": "0821-2520853 / 0821-2443916",
    "enquiryCounter": "7760990820 (Central Enquiry)",
    "operatingHours": "24 Hours Continuous",
    "totalPlatforms": 22,
    "dailyDepartures": "1,100+ Buses Daily",
    "facilities": [
      "Expressway Electric Coach Rapid Terminal",
      "Tourist Information & Chamundi Hills Transit Kiosks",
      "Executive AC Waiting Halls",
      "Luggage Cloakroom & Dormitory Facilities"
    ],
    "platformBays": [
      {
        "platforms": "Platform 1 - 6",
        "destinations": "Bengaluru Expressway Non-Stop & Kempegowda Airport Flybus",
        "serviceTypes": "EV Power Plus, Flybus AC, Airavat"
      },
      {
        "platforms": "Platform 7 - 10",
        "destinations": "Madikeri, Kushalnagar, Virajpet, Wayanad",
        "serviceTypes": "Rajahamsa, EV Power Plus"
      },
      {
        "platforms": "Platform 11 - 14",
        "destinations": "Hassan, Chikkamagaluru, Belur, Shivamogga",
        "serviceTypes": "Rajahamsa, Sarige"
      },
      {
        "platforms": "Platform 15 - 18",
        "destinations": "Mangaluru, Udupi, Sullya, Puttur",
        "serviceTypes": "Airavat, Rajahamsa, Sleeper"
      },
      {
        "platforms": "Platform 19 - 22",
        "destinations": "Hubballi, Belagavi, Davanagere, Ballari, Hospete",
        "serviceTypes": "Non-AC Sleeper, Rajahamsa"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "MY-101",
        "destination": "Bengaluru",
        "serviceType": "EV Power Plus",
        "operator": "KSRTC",
        "departureTime": "05:30 AM",
        "viaRoute": "Mandya - Ramanagara - Expressway Non-Stop",
        "platform": "Bay 1",
        "frequency": "Every 15 mins",
        "fare": 320
      },
      {
        "serviceNumber": "MY-108",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Expressway Corridor",
        "platform": "Bay 2",
        "frequency": "Every 30 mins",
        "fare": 380
      },
      {
        "serviceNumber": "MY-201",
        "destination": "Kodagu (Madikeri)",
        "serviceType": "EV Power Plus",
        "operator": "KSRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Hunsur - Periyapatna - Kushalnagar",
        "platform": "Bay 7",
        "frequency": "Every 45 mins",
        "fare": 210
      },
      {
        "serviceNumber": "MY-210",
        "destination": "Kodagu (Madikeri)",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "08:15 AM",
        "viaRoute": "Hunsur - Bylakuppe Golden Temple",
        "platform": "Bay 8",
        "frequency": "Hourly",
        "fare": 180
      },
      {
        "serviceNumber": "MY-301",
        "destination": "Mangaluru",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Madikeri - Sampaje Ghat - Sullya - Puttur",
        "platform": "Bay 15",
        "frequency": "3 Daily Trips",
        "fare": 460
      },
      {
        "serviceNumber": "MY-312",
        "destination": "Mangaluru",
        "serviceType": "Non-AC Sleeper",
        "operator": "KSRTC",
        "departureTime": "09:30 PM",
        "viaRoute": "Overnight Sampaje Ghat",
        "platform": "Bay 16",
        "frequency": "Night Express",
        "fare": 420
      },
      {
        "serviceNumber": "MY-401",
        "destination": "Hassan",
        "serviceType": "EV Power Plus",
        "operator": "KSRTC",
        "departureTime": "07:15 AM",
        "viaRoute": "KR Nagar - Holenarasipura",
        "platform": "Bay 11",
        "frequency": "Every 1 hour",
        "fare": 160
      },
      {
        "serviceNumber": "MY-415",
        "destination": "Chikkamagaluru",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "08:00 AM",
        "viaRoute": "Hassan - Belur",
        "platform": "Bay 12",
        "frequency": "Every 1.5 hours",
        "fare": 250
      },
      {
        "serviceNumber": "MY-501",
        "destination": "Shivamogga",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "06:45 AM",
        "viaRoute": "Arsikere - Tarikere - Bhadravathi",
        "platform": "Bay 13",
        "frequency": "Every 2 hours",
        "fare": 320
      },
      {
        "serviceNumber": "MY-601",
        "destination": "Hubballi",
        "serviceType": "Non-AC Sleeper",
        "operator": "KSRTC",
        "departureTime": "09:00 PM",
        "viaRoute": "Hassan - Arsikere - Davanagere",
        "platform": "Bay 19",
        "frequency": "Nightly 3 Trips",
        "fare": 710
      },
      {
        "serviceNumber": "MY-620",
        "destination": "Belagavi",
        "serviceType": "Non-AC Sleeper",
        "operator": "KSRTC",
        "departureTime": "08:15 PM",
        "viaRoute": "Davanagere - Hubballi Bypass",
        "platform": "Bay 20",
        "frequency": "Night Express",
        "fare": 820
      },
      {
        "serviceNumber": "MY-701",
        "destination": "Vijayanagara (Hampi)",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Tumakuru - Chitradurga - Hospete",
        "platform": "Bay 21",
        "frequency": "Daily 2 Trips",
        "fare": 580
      }
    ]
  },
  {
    "id": "mangaluru-bejai",
    "city": "Mangaluru",
    "kannadaCity": "\u0cae\u0c82\u0c97\u0cb3\u0cc2\u0cb0\u0cc1",
    "name": "Mangaluru KSRTC Central Bus Terminal (Bejai)",
    "kannadaName": "\u0cae\u0c82\u0c97\u0cb3\u0cc2\u0cb0\u0cc1 \u0c95\u0cc6\u0c8e\u0cb8\u0ccd\u200c\u0c86\u0cb0\u0ccd\u200c\u0c9f\u0cbf\u0cb8\u0cbf \u0c95\u0cc7\u0c82\u0ca6\u0ccd\u0cb0 \u0cac\u0cb8\u0ccd \u0ca8\u0cbf\u0cb2\u0ccd\u0ca6\u0cbe\u0ca3 (\u0cac\u0cbf\u0c9c\u0cc8)",
    "division": "KSRTC",
    "divisionFullName": "KSRTC Mangaluru Coastal Division (\u0c95\u0cb0\u0cbe\u0cb5\u0cb3\u0cbf \u0cb5\u0cbf\u0cad\u0cbe\u0c97)",
    "address": "Bejai Main Road, Mangaluru, Dakshina Kannada - 575004",
    "helplinePhone": "0824-2220577 / 0824-2220588",
    "enquiryCounter": "7760990720 (Bejai Helpline)",
    "operatingHours": "24 Hours Continuous",
    "totalPlatforms": 18,
    "dailyDepartures": "650+ Buses Daily",
    "facilities": [
      "Coastal AC Passenger Lounges",
      "Multi-Storey Bus Terminal Amenities",
      "Direct Tourist Helpdesk for Coastal Pilgrimages",
      "Clean Restrooms & Feeding Cubicles"
    ],
    "platformBays": [
      {
        "platforms": "Platform 1 - 4",
        "destinations": "Bengaluru (Shiradi Ghat Express & Charmadi Route)",
        "serviceTypes": "Airavat Multi-Axle, Sleeper"
      },
      {
        "platforms": "Platform 5 - 8",
        "destinations": "Udupi, Kundapura, Bhatkal, Murudeshwara, Gokarna, Karwar",
        "serviceTypes": "Airavat Club Class, Rajahamsa"
      },
      {
        "platforms": "Platform 9 - 12",
        "destinations": "Madikeri, Mysuru, Sullya, Puttur",
        "serviceTypes": "Airavat, Rajahamsa, Sleeper"
      },
      {
        "platforms": "Platform 13 - 15",
        "destinations": "Dharmasthala, Kukke Subrahmanya, Hassan, Chikkamagaluru",
        "serviceTypes": "Rajahamsa, Sarige"
      },
      {
        "platforms": "Platform 16 - 18",
        "destinations": "Hubballi, Belagavi, Shivamogga, Davanagere",
        "serviceTypes": "Airavat, Non-AC Sleeper"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "MN-101",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "BC Road - Sakleshpur - Hassan - Kunigal",
        "platform": "Bay 1",
        "frequency": "Hourly",
        "fare": 720
      },
      {
        "serviceNumber": "MN-120",
        "destination": "Bengaluru",
        "serviceType": "Non-AC Sleeper",
        "operator": "KSRTC",
        "departureTime": "10:00 PM",
        "viaRoute": "Shiradi Ghat Expressway",
        "platform": "Bay 2",
        "frequency": "Night Express (6 Trips)",
        "fare": 640
      },
      {
        "serviceNumber": "MN-201",
        "destination": "Udupi",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "06:15 AM",
        "viaRoute": "Surathkal - Mulki - Kaup Coastal NH-66",
        "platform": "Bay 5",
        "frequency": "Every 20 mins",
        "fare": 95
      },
      {
        "serviceNumber": "MN-301",
        "destination": "Gokarna",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Kundapura - Murudeshwara - Kumta",
        "platform": "Bay 6",
        "frequency": "Every 1.5 hours",
        "fare": 340
      },
      {
        "serviceNumber": "MN-320",
        "destination": "Karwar",
        "serviceType": "Airavat Club Class",
        "operator": "NWKRTC",
        "departureTime": "08:15 AM",
        "viaRoute": "Udupi - Bhatkal - Honnavara - Ankola",
        "platform": "Bay 7",
        "frequency": "Daily 4 Trips",
        "fare": 420
      },
      {
        "serviceNumber": "MN-401",
        "destination": "Mysuru",
        "serviceType": "Airavat Club Class",
        "operator": "KSRTC",
        "departureTime": "07:30 AM",
        "viaRoute": "Puttur - Sullya - Madikeri - Hunsur",
        "platform": "Bay 9",
        "frequency": "3 Daily Trips",
        "fare": 460
      },
      {
        "serviceNumber": "MN-415",
        "destination": "Kodagu (Madikeri)",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "08:00 AM",
        "viaRoute": "Mani - Sullya - Sampaje Ghat",
        "platform": "Bay 10",
        "frequency": "Every 1 hour",
        "fare": 210
      },
      {
        "serviceNumber": "MN-501",
        "destination": "Hubballi",
        "serviceType": "Airavat Club Class",
        "operator": "NWKRTC",
        "departureTime": "07:30 AM",
        "viaRoute": "Udupi - Kumta - Sirsi - Yellapur",
        "platform": "Bay 16",
        "frequency": "Daily 3 Trips",
        "fare": 620
      },
      {
        "serviceNumber": "MN-520",
        "destination": "Belagavi",
        "serviceType": "Non-AC Sleeper",
        "operator": "NWKRTC",
        "departureTime": "09:00 PM",
        "viaRoute": "Karwar - Ankola - Hubballi Bypass",
        "platform": "Bay 17",
        "frequency": "Night Express",
        "fare": 690
      },
      {
        "serviceNumber": "MN-601",
        "destination": "Shivamogga",
        "serviceType": "Rajahamsa Executive",
        "operator": "KSRTC",
        "departureTime": "06:45 AM",
        "viaRoute": "Karkala - Agumbe Ghat - Thirthahalli",
        "platform": "Bay 18",
        "frequency": "Daily 4 Trips",
        "fare": 280
      }
    ]
  },
  {
    "id": "belagavi-cbt",
    "city": "Belagavi",
    "kannadaCity": "\u0cac\u0cc6\u0cb3\u0c97\u0cbe\u0cb5\u0cbf",
    "name": "Belagavi Central Bus Stand (CBT Fort Road)",
    "kannadaName": "\u0cac\u0cc6\u0cb3\u0c97\u0cbe\u0cb5\u0cbf \u0c95\u0cc7\u0c82\u0ca6\u0ccd\u0cb0 \u0cac\u0cb8\u0ccd \u0ca8\u0cbf\u0cb2\u0ccd\u0ca6\u0cbe\u0ca3 (\u0cb8\u0cbf\u0cac\u0cbf\u0c9f\u0cbf \u0c95\u0ccb\u0c9f\u0cc6 \u0cb0\u0cb8\u0ccd\u0ca4\u0cc6)",
    "division": "NWKRTC",
    "divisionFullName": "NWKRTC Belagavi Division (\u0cac\u0cc6\u0cb3\u0c97\u0cbe\u0cb5\u0cbf \u0cb5\u0cbf\u0cad\u0cbe\u0c97)",
    "address": "CBT, Fort Road, Belagavi - 590016",
    "helplinePhone": "0831-2422200 / 0831-2405555",
    "enquiryCounter": "7760991500 (24x7 CBT Enquiry)",
    "operatingHours": "24 Hours Continuous",
    "totalPlatforms": 16,
    "dailyDepartures": "700+ Buses Daily",
    "facilities": [
      "Spacious Passenger Waiting Concourse",
      "Canteen & Drinking Water RO Stations",
      "NWKRTC Computerized Reservation Counter",
      "Pre-Paid Auto Stand & Parking Bay"
    ],
    "platformBays": [
      {
        "platforms": "Platform 1 - 4",
        "destinations": "Hubballi, Dharwad, Davanagere, Bengaluru",
        "serviceTypes": "Airavat Club Class, Rajahamsa, Sleeper"
      },
      {
        "platforms": "Platform 5 - 8",
        "destinations": "Bagalkote (Badami), Vijayapura, Kalaburagi",
        "serviceTypes": "Rajahamsa, Sarige"
      },
      {
        "platforms": "Platform 9 - 12",
        "destinations": "Gokarna, Karwar, Mangaluru, Udupi",
        "serviceTypes": "Non-AC Sleeper, Rajahamsa"
      },
      {
        "platforms": "Platform 13 - 16",
        "destinations": "Kolhapur, Pune, Mumbai, Nipani, Chikkodi",
        "serviceTypes": "Inter-State Express & Sleeper"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "BL-101",
        "destination": "Hubballi",
        "serviceType": "Airavat Club Class",
        "operator": "NWKRTC",
        "departureTime": "06:15 AM",
        "viaRoute": "Kittur - Dharwad Bypass",
        "platform": "Bay 1",
        "frequency": "Every 30 mins",
        "fare": 240
      },
      {
        "serviceNumber": "BL-105",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "NWKRTC",
        "departureTime": "07:30 AM",
        "viaRoute": "Hubballi - Davanagere - Tumakuru",
        "platform": "Bay 2",
        "frequency": "Hourly",
        "fare": 950
      },
      {
        "serviceNumber": "BL-120",
        "destination": "Bengaluru",
        "serviceType": "Non-AC Sleeper",
        "operator": "NWKRTC",
        "departureTime": "09:45 PM",
        "viaRoute": "Direct NH-48 Overnight Express",
        "platform": "Bay 3",
        "frequency": "Night Express (5 Trips)",
        "fare": 790
      },
      {
        "serviceNumber": "BL-201",
        "destination": "Bagalkote (Badami)",
        "serviceType": "Rajahamsa Executive",
        "operator": "NWKRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Yaragatti - Lokapur - Badami",
        "platform": "Bay 5",
        "frequency": "Every 1 hour",
        "fare": 220
      },
      {
        "serviceNumber": "BL-215",
        "destination": "Vijayapura",
        "serviceType": "Rajahamsa Executive",
        "operator": "NWKRTC",
        "departureTime": "07:45 AM",
        "viaRoute": "Sankeshwar - Athani - Tikota",
        "platform": "Bay 6",
        "frequency": "Every 1.5 hours",
        "fare": 280
      },
      {
        "serviceNumber": "BL-301",
        "destination": "Gokarna",
        "serviceType": "Non-AC Sleeper",
        "operator": "NWKRTC",
        "departureTime": "08:30 PM",
        "viaRoute": "Londa - Yellapur - Ankola",
        "platform": "Bay 9",
        "frequency": "Night Express",
        "fare": 480
      },
      {
        "serviceNumber": "BL-310",
        "destination": "Karwar",
        "serviceType": "Rajahamsa Executive",
        "operator": "NWKRTC",
        "departureTime": "07:15 AM",
        "viaRoute": "Khanapur - Dandeli - Joida - Kadra",
        "platform": "Bay 10",
        "frequency": "Daily 3 Trips",
        "fare": 340
      },
      {
        "serviceNumber": "BL-401",
        "destination": "Kalaburagi",
        "serviceType": "Non-AC Sleeper",
        "operator": "NWKRTC",
        "departureTime": "08:00 PM",
        "viaRoute": "Bagalkote - Vijayapura - Jevargi",
        "platform": "Bay 8",
        "frequency": "Night Express",
        "fare": 620
      }
    ]
  },
  {
    "id": "kalaburagi-cbs",
    "city": "Kalaburagi",
    "kannadaCity": "\u0c95\u0cb2\u0cac\u0cc1\u0cb0\u0c97\u0cbf",
    "name": "Kalaburagi KKRTC Central Bus Terminal (Sedam Road)",
    "kannadaName": "\u0c95\u0cb2\u0cac\u0cc1\u0cb0\u0c97\u0cbf \u0c95\u0cc6\u0c95\u0cc6\u0c86\u0cb0\u0ccd\u200c\u0c9f\u0cbf\u0cb8\u0cbf \u0c95\u0cc7\u0c82\u0ca6\u0ccd\u0cb0 \u0cac\u0cb8\u0ccd \u0ca8\u0cbf\u0cb2\u0ccd\u0ca6\u0cbe\u0ca3 (\u0cb8\u0cc7\u0ca1\u0c82 \u0cb0\u0cb8\u0ccd\u0ca4\u0cc6)",
    "division": "KKRTC",
    "divisionFullName": "Kalyana Karnataka Road Transport Corporation (\u0c95\u0cb2\u0ccd\u0caf\u0cbe\u0ca3 \u0c95\u0cb0\u0ccd\u0ca8\u0cbe\u0c9f\u0c95 \u0cb0\u0cb8\u0ccd\u0ca4\u0cc6 \u0cb8\u0cbe\u0cb0\u0cbf\u0c97\u0cc6 \u0ca8\u0cbf\u0c97\u0cae)",
    "address": "Sedam Road, Central Bus Terminal, Kalaburagi - 585105",
    "helplinePhone": "08472-220042 / 08472-225588",
    "enquiryCounter": "7760992000 (Central Control Room)",
    "operatingHours": "24 Hours Continuous",
    "totalPlatforms": 20,
    "dailyDepartures": "800+ Buses Daily",
    "facilities": [
      "KKRTC Kalyana Ratha AC Lounge",
      "24x7 E-Reservation Counters",
      "Tourist Facilitation Desk for Gulbarga Fort & Khwaja Bande Nawaz",
      "Clean RO Water Booths & Dormitory"
    ],
    "platformBays": [
      {
        "platforms": "Platform 1 - 5",
        "destinations": "Bengaluru (Express & Non-Stop Sleeper Corridor)",
        "serviceTypes": "Airavat Club Class, Kalyana Ratha Sleeper"
      },
      {
        "platforms": "Platform 6 - 9",
        "destinations": "Bidar, Humnabad, Basavakalyan",
        "serviceTypes": "Rajahamsa, Sarige Express"
      },
      {
        "platforms": "Platform 10 - 13",
        "destinations": "Raichur, Yadgir, Ballari, Vijayanagara (Hospete)",
        "serviceTypes": "Rajahamsa, Express"
      },
      {
        "platforms": "Platform 14 - 17",
        "destinations": "Vijayapura, Bagalkote, Hubballi, Belagavi",
        "serviceTypes": "Non-AC Sleeper, Rajahamsa"
      },
      {
        "platforms": "Platform 18 - 20",
        "destinations": "Hyderabad, Solapur, Latur, Mysuru",
        "serviceTypes": "Inter-State Express"
      }
    ],
    "schedules": [
      {
        "serviceNumber": "KL-101",
        "destination": "Bengaluru",
        "serviceType": "Airavat Club Class",
        "operator": "KKRTC",
        "departureTime": "08:00 AM",
        "viaRoute": "Shahapur - Raichur - Anantapur",
        "platform": "Bay 1",
        "frequency": "Daily Morning",
        "fare": 890
      },
      {
        "serviceNumber": "KL-115",
        "destination": "Bengaluru",
        "serviceType": "Non-AC Sleeper",
        "operator": "KKRTC",
        "departureTime": "09:30 PM",
        "viaRoute": "Direct NH-44 Overnight Express",
        "platform": "Bay 2",
        "frequency": "Night Express (6 Trips)",
        "fare": 740
      },
      {
        "serviceNumber": "KL-201",
        "destination": "Bidar",
        "serviceType": "Rajahamsa Executive",
        "operator": "KKRTC",
        "departureTime": "06:30 AM",
        "viaRoute": "Humnabad - Hallikhed",
        "platform": "Bay 6",
        "frequency": "Every 45 mins",
        "fare": 180
      },
      {
        "serviceNumber": "KL-301",
        "destination": "Raichur",
        "serviceType": "Rajahamsa Executive",
        "operator": "KKRTC",
        "departureTime": "07:00 AM",
        "viaRoute": "Shahapur - Wadgera - Devadurga",
        "platform": "Bay 10",
        "frequency": "Hourly",
        "fare": 210
      },
      {
        "serviceNumber": "KL-401",
        "destination": "Vijayapura",
        "serviceType": "Rajahamsa Executive",
        "operator": "KKRTC",
        "departureTime": "07:30 AM",
        "viaRoute": "Jevargi - Sindagi",
        "platform": "Bay 14",
        "frequency": "Every 1 hour",
        "fare": 230
      },
      {
        "serviceNumber": "KL-501",
        "destination": "Hubballi",
        "serviceType": "Rajahamsa Executive",
        "operator": "KKRTC",
        "departureTime": "08:15 AM",
        "viaRoute": "Koppal - Gadag Corridor",
        "platform": "Bay 15",
        "frequency": "4 Daily Trips",
        "fare": 490
      },
      {
        "serviceNumber": "KL-515",
        "destination": "Hubballi",
        "serviceType": "Non-AC Sleeper",
        "operator": "KKRTC",
        "departureTime": "10:30 PM",
        "viaRoute": "Sindhanur - Kushtagi",
        "platform": "Bay 16",
        "frequency": "Night Express",
        "fare": 580
      },
      {
        "serviceNumber": "KL-601",
        "destination": "Vijayanagara (Hampi)",
        "serviceType": "Rajahamsa Executive",
        "operator": "KKRTC",
        "departureTime": "06:45 AM",
        "viaRoute": "Shahapur - Raichur - Gangavathi",
        "platform": "Bay 12",
        "frequency": "Daily 3 Trips",
        "fare": 380
      }
    ]
  }
];

export const getBusStandByCity = (city: string): BusStandInfo | undefined => {
  return BUS_STANDS_DIRECTORY.find(bs => 
    bs.city.toLowerCase() === city.toLowerCase() || 
    city.toLowerCase().includes(bs.city.toLowerCase())
  );
};
