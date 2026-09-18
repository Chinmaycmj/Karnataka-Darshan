import type { BusRoute } from './types';

export const BUS_ROUTES_DATA: BusRoute[] = [
  {
    "id": "RT-101",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Mysuru",
    "departureTime": "06:00 AM",
    "arrivalTime": "09:30 AM",
    "duration": "2h 45m",
    "price": 380,
    "seatsAvailable": 28,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Seats"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      }
    ]
  },
  {
    "id": "RT-102",
    "operator": "KSRTC EV Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Bengaluru",
    "toCity": "Mysuru",
    "departureTime": "08:30 AM",
    "arrivalTime": "02:00 PM",
    "duration": "2h 45m",
    "price": 380,
    "seatsAvailable": 28,
    "amenities": [
      "100% Electric Silent Ride",
      "Air Conditioned",
      "Fast USB-C Ports",
      "Reading Lights",
      "Live GPS Tracking"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      }
    ]
  },
  {
    "id": "RT-103",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Mysuru",
    "departureTime": "02:15 PM",
    "arrivalTime": "07:30 PM",
    "duration": "2h 45m",
    "price": 380,
    "seatsAvailable": 28,
    "amenities": [
      "Pushback Recliner Seats",
      "Air Suspension",
      "Reading Lights",
      "Luggage Storage"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      }
    ]
  },
  {
    "id": "RT-104",
    "operator": "KSRTC Corona Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Mysuru",
    "departureTime": "09:45 PM",
    "arrivalTime": "05:30 AM",
    "duration": "2h 45m",
    "price": 380,
    "seatsAvailable": 25,
    "amenities": [
      "Single & Double Berths",
      "Spacious Bedding",
      "Curtains for Privacy",
      "Night Reading Lamp"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "L1",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "L2",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "L3",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "L4",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "L5",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "L6",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "L7",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "L8",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "L9",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "L10",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "L11",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "L12",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "L13",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "L14",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "L15",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "L16",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "L17",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "L18",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "U19",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-20",
        "number": "U20",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-21",
        "number": "U21",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-22",
        "number": "U22",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-23",
        "number": "U23",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-24",
        "number": "U24",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-25",
        "number": "U25",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-26",
        "number": "U26",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-27",
        "number": "U27",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-28",
        "number": "U28",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-29",
        "number": "U29",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-30",
        "number": "U30",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-31",
        "number": "U31",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-32",
        "number": "U32",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-33",
        "number": "U33",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-34",
        "number": "U34",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-35",
        "number": "U35",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-36",
        "number": "U36",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      }
    ]
  },
  {
    "id": "RT-105",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Vijayanagara (Hampi)",
    "departureTime": "06:00 AM",
    "arrivalTime": "09:30 AM",
    "duration": "6h 30m",
    "price": 610,
    "seatsAvailable": 28,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Seats"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 610
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 610
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 610
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 610
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 610
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 610
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 610
      }
    ]
  },
  {
    "id": "RT-106",
    "operator": "KSRTC EV Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Bengaluru",
    "toCity": "Vijayanagara (Hampi)",
    "departureTime": "08:30 AM",
    "arrivalTime": "02:00 PM",
    "duration": "6h 30m",
    "price": 550,
    "seatsAvailable": 28,
    "amenities": [
      "100% Electric Silent Ride",
      "Air Conditioned",
      "Fast USB-C Ports",
      "Reading Lights",
      "Live GPS Tracking"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 550
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 550
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 550
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 550
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 550
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 550
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 550
      }
    ]
  },
  {
    "id": "RT-107",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Vijayanagara (Hampi)",
    "departureTime": "02:15 PM",
    "arrivalTime": "07:30 PM",
    "duration": "6h 30m",
    "price": 400,
    "seatsAvailable": 28,
    "amenities": [
      "Pushback Recliner Seats",
      "Air Suspension",
      "Reading Lights",
      "Luggage Storage"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 400
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 400
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 400
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 400
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 400
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      }
    ]
  },
  {
    "id": "RT-108",
    "operator": "KSRTC Corona Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Vijayanagara (Hampi)",
    "departureTime": "09:45 PM",
    "arrivalTime": "05:30 AM",
    "duration": "6h 30m",
    "price": 460,
    "seatsAvailable": 25,
    "amenities": [
      "Single & Double Berths",
      "Spacious Bedding",
      "Curtains for Privacy",
      "Night Reading Lamp"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "L1",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 460
      },
      {
        "id": "s-2",
        "number": "L2",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 460
      },
      {
        "id": "s-3",
        "number": "L3",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 460
      },
      {
        "id": "s-4",
        "number": "L4",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 460
      },
      {
        "id": "s-5",
        "number": "L5",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 460
      },
      {
        "id": "s-6",
        "number": "L6",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 460
      },
      {
        "id": "s-7",
        "number": "L7",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 460
      },
      {
        "id": "s-8",
        "number": "L8",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 460
      },
      {
        "id": "s-9",
        "number": "L9",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 460
      },
      {
        "id": "s-10",
        "number": "L10",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 460
      },
      {
        "id": "s-11",
        "number": "L11",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 460
      },
      {
        "id": "s-12",
        "number": "L12",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 460
      },
      {
        "id": "s-13",
        "number": "L13",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 460
      },
      {
        "id": "s-14",
        "number": "L14",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 460
      },
      {
        "id": "s-15",
        "number": "L15",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 460
      },
      {
        "id": "s-16",
        "number": "L16",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 460
      },
      {
        "id": "s-17",
        "number": "L17",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 460
      },
      {
        "id": "s-18",
        "number": "L18",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 460
      },
      {
        "id": "s-19",
        "number": "U19",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-20",
        "number": "U20",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-21",
        "number": "U21",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-22",
        "number": "U22",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-23",
        "number": "U23",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-24",
        "number": "U24",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-25",
        "number": "U25",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-26",
        "number": "U26",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-27",
        "number": "U27",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-28",
        "number": "U28",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-29",
        "number": "U29",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-30",
        "number": "U30",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-31",
        "number": "U31",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-32",
        "number": "U32",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-33",
        "number": "U33",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-34",
        "number": "U34",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-35",
        "number": "U35",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-36",
        "number": "U36",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      }
    ]
  },
  {
    "id": "RT-109",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Kodagu (Madikeri)",
    "departureTime": "06:00 AM",
    "arrivalTime": "09:30 AM",
    "duration": "5h 15m",
    "price": 450,
    "seatsAvailable": 28,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Seats"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 450
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 450
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 450
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 450
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 450
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 450
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 450
      }
    ]
  },
  {
    "id": "RT-110",
    "operator": "KSRTC EV Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Bengaluru",
    "toCity": "Kodagu (Madikeri)",
    "departureTime": "08:30 AM",
    "arrivalTime": "02:00 PM",
    "duration": "5h 15m",
    "price": 400,
    "seatsAvailable": 28,
    "amenities": [
      "100% Electric Silent Ride",
      "Air Conditioned",
      "Fast USB-C Ports",
      "Reading Lights",
      "Live GPS Tracking"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 400
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 400
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 400
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 400
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 400
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 400
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 400
      }
    ]
  },
  {
    "id": "RT-111",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Kodagu (Madikeri)",
    "departureTime": "02:15 PM",
    "arrivalTime": "07:30 PM",
    "duration": "5h 15m",
    "price": 380,
    "seatsAvailable": 28,
    "amenities": [
      "Pushback Recliner Seats",
      "Air Suspension",
      "Reading Lights",
      "Luggage Storage"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      }
    ]
  },
  {
    "id": "RT-112",
    "operator": "KSRTC Corona Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Kodagu (Madikeri)",
    "departureTime": "09:45 PM",
    "arrivalTime": "05:30 AM",
    "duration": "5h 15m",
    "price": 380,
    "seatsAvailable": 25,
    "amenities": [
      "Single & Double Berths",
      "Spacious Bedding",
      "Curtains for Privacy",
      "Night Reading Lamp"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "L1",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "L2",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "L3",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "L4",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "L5",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "L6",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "L7",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "L8",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "L9",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "L10",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "L11",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "L12",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "L13",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "L14",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "L15",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "L16",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "L17",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "L18",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "U19",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-20",
        "number": "U20",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-21",
        "number": "U21",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-22",
        "number": "U22",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-23",
        "number": "U23",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-24",
        "number": "U24",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-25",
        "number": "U25",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-26",
        "number": "U26",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-27",
        "number": "U27",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-28",
        "number": "U28",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-29",
        "number": "U29",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-30",
        "number": "U30",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-31",
        "number": "U31",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-32",
        "number": "U32",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-33",
        "number": "U33",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-34",
        "number": "U34",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-35",
        "number": "U35",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-36",
        "number": "U36",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      }
    ]
  },
  {
    "id": "RT-113",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Udupi",
    "departureTime": "06:00 AM",
    "arrivalTime": "09:30 AM",
    "duration": "8h 00m",
    "price": 720,
    "seatsAvailable": 28,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Seats"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 720
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 720
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 720
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 720
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 720
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 720
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 720
      }
    ]
  },
  {
    "id": "RT-114",
    "operator": "KSRTC EV Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Bengaluru",
    "toCity": "Udupi",
    "departureTime": "08:30 AM",
    "arrivalTime": "02:00 PM",
    "duration": "8h 00m",
    "price": 650,
    "seatsAvailable": 28,
    "amenities": [
      "100% Electric Silent Ride",
      "Air Conditioned",
      "Fast USB-C Ports",
      "Reading Lights",
      "Live GPS Tracking"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 650
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 650
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 650
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 650
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 650
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 650
      }
    ]
  },
  {
    "id": "RT-115",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Udupi",
    "departureTime": "02:15 PM",
    "arrivalTime": "07:30 PM",
    "duration": "8h 00m",
    "price": 470,
    "seatsAvailable": 28,
    "amenities": [
      "Pushback Recliner Seats",
      "Air Suspension",
      "Reading Lights",
      "Luggage Storage"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 470
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 470
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 470
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 470
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 470
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 470
      }
    ]
  },
  {
    "id": "RT-116",
    "operator": "KSRTC Corona Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Udupi",
    "departureTime": "09:45 PM",
    "arrivalTime": "05:30 AM",
    "duration": "8h 00m",
    "price": 540,
    "seatsAvailable": 25,
    "amenities": [
      "Single & Double Berths",
      "Spacious Bedding",
      "Curtains for Privacy",
      "Night Reading Lamp"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "L1",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 540
      },
      {
        "id": "s-2",
        "number": "L2",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 540
      },
      {
        "id": "s-3",
        "number": "L3",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 540
      },
      {
        "id": "s-4",
        "number": "L4",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 540
      },
      {
        "id": "s-5",
        "number": "L5",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 540
      },
      {
        "id": "s-6",
        "number": "L6",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 540
      },
      {
        "id": "s-7",
        "number": "L7",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 540
      },
      {
        "id": "s-8",
        "number": "L8",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 540
      },
      {
        "id": "s-9",
        "number": "L9",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 540
      },
      {
        "id": "s-10",
        "number": "L10",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 540
      },
      {
        "id": "s-11",
        "number": "L11",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 540
      },
      {
        "id": "s-12",
        "number": "L12",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 540
      },
      {
        "id": "s-13",
        "number": "L13",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 540
      },
      {
        "id": "s-14",
        "number": "L14",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 540
      },
      {
        "id": "s-15",
        "number": "L15",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 540
      },
      {
        "id": "s-16",
        "number": "L16",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 540
      },
      {
        "id": "s-17",
        "number": "L17",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 540
      },
      {
        "id": "s-18",
        "number": "L18",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 540
      },
      {
        "id": "s-19",
        "number": "U19",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 490
      },
      {
        "id": "s-20",
        "number": "U20",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 490
      },
      {
        "id": "s-21",
        "number": "U21",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 490
      },
      {
        "id": "s-22",
        "number": "U22",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 490
      },
      {
        "id": "s-23",
        "number": "U23",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 490
      },
      {
        "id": "s-24",
        "number": "U24",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 490
      },
      {
        "id": "s-25",
        "number": "U25",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 490
      },
      {
        "id": "s-26",
        "number": "U26",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 490
      },
      {
        "id": "s-27",
        "number": "U27",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 490
      },
      {
        "id": "s-28",
        "number": "U28",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 490
      },
      {
        "id": "s-29",
        "number": "U29",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 490
      },
      {
        "id": "s-30",
        "number": "U30",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 490
      },
      {
        "id": "s-31",
        "number": "U31",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 490
      },
      {
        "id": "s-32",
        "number": "U32",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 490
      },
      {
        "id": "s-33",
        "number": "U33",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 490
      },
      {
        "id": "s-34",
        "number": "U34",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 490
      },
      {
        "id": "s-35",
        "number": "U35",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 490
      },
      {
        "id": "s-36",
        "number": "U36",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 490
      }
    ]
  },
  {
    "id": "RT-117",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Mangaluru",
    "departureTime": "06:00 AM",
    "arrivalTime": "09:30 AM",
    "duration": "7h 15m",
    "price": 630,
    "seatsAvailable": 28,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Seats"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 630
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 630
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 630
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 630
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 630
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 630
      }
    ]
  },
  {
    "id": "RT-118",
    "operator": "KSRTC EV Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Bengaluru",
    "toCity": "Mangaluru",
    "departureTime": "08:30 AM",
    "arrivalTime": "02:00 PM",
    "duration": "7h 15m",
    "price": 570,
    "seatsAvailable": 28,
    "amenities": [
      "100% Electric Silent Ride",
      "Air Conditioned",
      "Fast USB-C Ports",
      "Reading Lights",
      "Live GPS Tracking"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 570
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 570
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 570
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 570
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 570
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      }
    ]
  },
  {
    "id": "RT-119",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Mangaluru",
    "departureTime": "02:15 PM",
    "arrivalTime": "07:30 PM",
    "duration": "7h 15m",
    "price": 410,
    "seatsAvailable": 28,
    "amenities": [
      "Pushback Recliner Seats",
      "Air Suspension",
      "Reading Lights",
      "Luggage Storage"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 410
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 410
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 410
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 410
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 410
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      }
    ]
  },
  {
    "id": "RT-120",
    "operator": "KSRTC Corona Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Mangaluru",
    "departureTime": "09:45 PM",
    "arrivalTime": "05:30 AM",
    "duration": "7h 15m",
    "price": 470,
    "seatsAvailable": 25,
    "amenities": [
      "Single & Double Berths",
      "Spacious Bedding",
      "Curtains for Privacy",
      "Night Reading Lamp"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "L1",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-2",
        "number": "L2",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-3",
        "number": "L3",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 470
      },
      {
        "id": "s-4",
        "number": "L4",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 470
      },
      {
        "id": "s-5",
        "number": "L5",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-6",
        "number": "L6",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-7",
        "number": "L7",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-8",
        "number": "L8",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 470
      },
      {
        "id": "s-9",
        "number": "L9",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-10",
        "number": "L10",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-11",
        "number": "L11",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 470
      },
      {
        "id": "s-12",
        "number": "L12",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 470
      },
      {
        "id": "s-13",
        "number": "L13",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-14",
        "number": "L14",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-15",
        "number": "L15",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-16",
        "number": "L16",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-17",
        "number": "L17",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-18",
        "number": "L18",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 470
      },
      {
        "id": "s-19",
        "number": "U19",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 420
      },
      {
        "id": "s-20",
        "number": "U20",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 420
      },
      {
        "id": "s-21",
        "number": "U21",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 420
      },
      {
        "id": "s-22",
        "number": "U22",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 420
      },
      {
        "id": "s-23",
        "number": "U23",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 420
      },
      {
        "id": "s-24",
        "number": "U24",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 420
      },
      {
        "id": "s-25",
        "number": "U25",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 420
      },
      {
        "id": "s-26",
        "number": "U26",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 420
      },
      {
        "id": "s-27",
        "number": "U27",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 420
      },
      {
        "id": "s-28",
        "number": "U28",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 420
      },
      {
        "id": "s-29",
        "number": "U29",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 420
      },
      {
        "id": "s-30",
        "number": "U30",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 420
      },
      {
        "id": "s-31",
        "number": "U31",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 420
      },
      {
        "id": "s-32",
        "number": "U32",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 420
      },
      {
        "id": "s-33",
        "number": "U33",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 420
      },
      {
        "id": "s-34",
        "number": "U34",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 420
      },
      {
        "id": "s-35",
        "number": "U35",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 420
      },
      {
        "id": "s-36",
        "number": "U36",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 420
      }
    ]
  },
  {
    "id": "RT-121",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Gokarna",
    "departureTime": "06:00 AM",
    "arrivalTime": "09:30 AM",
    "duration": "9h 30m",
    "price": 870,
    "seatsAvailable": 28,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Seats"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 870
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 870
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 870
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 870
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 870
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 870
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 870
      }
    ]
  },
  {
    "id": "RT-122",
    "operator": "KSRTC EV Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Bengaluru",
    "toCity": "Gokarna",
    "departureTime": "08:30 AM",
    "arrivalTime": "02:00 PM",
    "duration": "9h 30m",
    "price": 780,
    "seatsAvailable": 28,
    "amenities": [
      "100% Electric Silent Ride",
      "Air Conditioned",
      "Fast USB-C Ports",
      "Reading Lights",
      "Live GPS Tracking"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 780
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 780
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 780
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 780
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 780
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      }
    ]
  },
  {
    "id": "RT-123",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Gokarna",
    "departureTime": "02:15 PM",
    "arrivalTime": "07:30 PM",
    "duration": "9h 30m",
    "price": 570,
    "seatsAvailable": 28,
    "amenities": [
      "Pushback Recliner Seats",
      "Air Suspension",
      "Reading Lights",
      "Luggage Storage"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 570
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 570
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 570
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 570
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 570
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 570
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 570
      }
    ]
  },
  {
    "id": "RT-124",
    "operator": "KSRTC Corona Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Gokarna",
    "departureTime": "09:45 PM",
    "arrivalTime": "05:30 AM",
    "duration": "9h 30m",
    "price": 650,
    "seatsAvailable": 25,
    "amenities": [
      "Single & Double Berths",
      "Spacious Bedding",
      "Curtains for Privacy",
      "Night Reading Lamp"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "L1",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-2",
        "number": "L2",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-3",
        "number": "L3",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 650
      },
      {
        "id": "s-4",
        "number": "L4",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 650
      },
      {
        "id": "s-5",
        "number": "L5",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-6",
        "number": "L6",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-7",
        "number": "L7",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-8",
        "number": "L8",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 650
      },
      {
        "id": "s-9",
        "number": "L9",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-10",
        "number": "L10",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-11",
        "number": "L11",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 650
      },
      {
        "id": "s-12",
        "number": "L12",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 650
      },
      {
        "id": "s-13",
        "number": "L13",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-14",
        "number": "L14",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-15",
        "number": "L15",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-16",
        "number": "L16",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-17",
        "number": "L17",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-18",
        "number": "L18",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 650
      },
      {
        "id": "s-19",
        "number": "U19",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 600
      },
      {
        "id": "s-20",
        "number": "U20",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 600
      },
      {
        "id": "s-21",
        "number": "U21",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 600
      },
      {
        "id": "s-22",
        "number": "U22",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 600
      },
      {
        "id": "s-23",
        "number": "U23",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 600
      },
      {
        "id": "s-24",
        "number": "U24",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 600
      },
      {
        "id": "s-25",
        "number": "U25",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 600
      },
      {
        "id": "s-26",
        "number": "U26",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 600
      },
      {
        "id": "s-27",
        "number": "U27",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 600
      },
      {
        "id": "s-28",
        "number": "U28",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 600
      },
      {
        "id": "s-29",
        "number": "U29",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 600
      },
      {
        "id": "s-30",
        "number": "U30",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 600
      },
      {
        "id": "s-31",
        "number": "U31",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 600
      },
      {
        "id": "s-32",
        "number": "U32",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 600
      },
      {
        "id": "s-33",
        "number": "U33",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 600
      },
      {
        "id": "s-34",
        "number": "U34",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 600
      },
      {
        "id": "s-35",
        "number": "U35",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 600
      },
      {
        "id": "s-36",
        "number": "U36",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 600
      }
    ]
  },
  {
    "id": "RT-125",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Chikkamagaluru",
    "departureTime": "06:00 AM",
    "arrivalTime": "09:30 AM",
    "duration": "4h 45m",
    "price": 430,
    "seatsAvailable": 28,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Seats"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 430
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 430
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 430
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 430
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 430
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 430
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 430
      }
    ]
  },
  {
    "id": "RT-126",
    "operator": "KSRTC EV Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Bengaluru",
    "toCity": "Chikkamagaluru",
    "departureTime": "08:30 AM",
    "arrivalTime": "02:00 PM",
    "duration": "4h 45m",
    "price": 390,
    "seatsAvailable": 28,
    "amenities": [
      "100% Electric Silent Ride",
      "Air Conditioned",
      "Fast USB-C Ports",
      "Reading Lights",
      "Live GPS Tracking"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 390
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 390
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 390
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 390
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 390
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 390
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 390
      }
    ]
  },
  {
    "id": "RT-127",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Chikkamagaluru",
    "departureTime": "02:15 PM",
    "arrivalTime": "07:30 PM",
    "duration": "4h 45m",
    "price": 380,
    "seatsAvailable": 28,
    "amenities": [
      "Pushback Recliner Seats",
      "Air Suspension",
      "Reading Lights",
      "Luggage Storage"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      }
    ]
  },
  {
    "id": "RT-128",
    "operator": "KSRTC Corona Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Chikkamagaluru",
    "departureTime": "09:45 PM",
    "arrivalTime": "05:30 AM",
    "duration": "4h 45m",
    "price": 380,
    "seatsAvailable": 25,
    "amenities": [
      "Single & Double Berths",
      "Spacious Bedding",
      "Curtains for Privacy",
      "Night Reading Lamp"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "L1",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "L2",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "L3",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "L4",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "L5",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "L6",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "L7",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "L8",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "L9",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "L10",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "L11",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "L12",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "L13",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "L14",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "L15",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "L16",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "L17",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "L18",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "U19",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-20",
        "number": "U20",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-21",
        "number": "U21",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-22",
        "number": "U22",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-23",
        "number": "U23",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-24",
        "number": "U24",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-25",
        "number": "U25",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-26",
        "number": "U26",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-27",
        "number": "U27",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-28",
        "number": "U28",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-29",
        "number": "U29",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-30",
        "number": "U30",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-31",
        "number": "U31",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-32",
        "number": "U32",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-33",
        "number": "U33",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-34",
        "number": "U34",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-35",
        "number": "U35",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-36",
        "number": "U36",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      }
    ]
  },
  {
    "id": "RT-129",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Belagavi",
    "departureTime": "06:00 AM",
    "arrivalTime": "09:30 AM",
    "duration": "8h 45m",
    "price": 900,
    "seatsAvailable": 28,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Seats"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 900
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 900
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 900
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 900
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 900
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 900
      }
    ]
  },
  {
    "id": "RT-130",
    "operator": "KSRTC EV Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Bengaluru",
    "toCity": "Belagavi",
    "departureTime": "08:30 AM",
    "arrivalTime": "02:00 PM",
    "duration": "8h 45m",
    "price": 810,
    "seatsAvailable": 28,
    "amenities": [
      "100% Electric Silent Ride",
      "Air Conditioned",
      "Fast USB-C Ports",
      "Reading Lights",
      "Live GPS Tracking"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 810
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 810
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 810
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 810
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 810
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 810
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 810
      }
    ]
  },
  {
    "id": "RT-131",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Belagavi",
    "departureTime": "02:15 PM",
    "arrivalTime": "07:30 PM",
    "duration": "8h 45m",
    "price": 580,
    "seatsAvailable": 28,
    "amenities": [
      "Pushback Recliner Seats",
      "Air Suspension",
      "Reading Lights",
      "Luggage Storage"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 580
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 580
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 580
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 580
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 580
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 580
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 580
      }
    ]
  },
  {
    "id": "RT-132",
    "operator": "KSRTC Corona Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Belagavi",
    "departureTime": "09:45 PM",
    "arrivalTime": "05:30 AM",
    "duration": "8h 45m",
    "price": 680,
    "seatsAvailable": 25,
    "amenities": [
      "Single & Double Berths",
      "Spacious Bedding",
      "Curtains for Privacy",
      "Night Reading Lamp"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "L1",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-2",
        "number": "L2",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-3",
        "number": "L3",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 680
      },
      {
        "id": "s-4",
        "number": "L4",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 680
      },
      {
        "id": "s-5",
        "number": "L5",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-6",
        "number": "L6",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-7",
        "number": "L7",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-8",
        "number": "L8",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 680
      },
      {
        "id": "s-9",
        "number": "L9",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-10",
        "number": "L10",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-11",
        "number": "L11",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 680
      },
      {
        "id": "s-12",
        "number": "L12",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 680
      },
      {
        "id": "s-13",
        "number": "L13",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-14",
        "number": "L14",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-15",
        "number": "L15",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-16",
        "number": "L16",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-17",
        "number": "L17",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-18",
        "number": "L18",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-19",
        "number": "U19",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-20",
        "number": "U20",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-21",
        "number": "U21",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-22",
        "number": "U22",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-23",
        "number": "U23",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-24",
        "number": "U24",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-25",
        "number": "U25",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-26",
        "number": "U26",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-27",
        "number": "U27",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-28",
        "number": "U28",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-29",
        "number": "U29",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-30",
        "number": "U30",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-31",
        "number": "U31",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-32",
        "number": "U32",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-33",
        "number": "U33",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-34",
        "number": "U34",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-35",
        "number": "U35",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 630
      },
      {
        "id": "s-36",
        "number": "U36",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 630
      }
    ]
  },
  {
    "id": "RT-133",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Bidar",
    "departureTime": "06:00 AM",
    "arrivalTime": "09:30 AM",
    "duration": "12h 00m",
    "price": 1210,
    "seatsAvailable": 28,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Seats"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 1210
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 1210
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 1210
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 1210
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 1210
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1210
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1210
      }
    ]
  },
  {
    "id": "RT-134",
    "operator": "KSRTC EV Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Bengaluru",
    "toCity": "Bidar",
    "departureTime": "08:30 AM",
    "arrivalTime": "02:00 PM",
    "duration": "12h 00m",
    "price": 1080,
    "seatsAvailable": 28,
    "amenities": [
      "100% Electric Silent Ride",
      "Air Conditioned",
      "Fast USB-C Ports",
      "Reading Lights",
      "Live GPS Tracking"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 1080
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 1080
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 1080
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 1080
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 1080
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1080
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1080
      }
    ]
  },
  {
    "id": "RT-135",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Bidar",
    "departureTime": "02:15 PM",
    "arrivalTime": "07:30 PM",
    "duration": "12h 00m",
    "price": 780,
    "seatsAvailable": 28,
    "amenities": [
      "Pushback Recliner Seats",
      "Air Suspension",
      "Reading Lights",
      "Luggage Storage"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 780
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 780
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 780
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 780
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 780
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      }
    ]
  },
  {
    "id": "RT-136",
    "operator": "KSRTC Corona Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Bidar",
    "departureTime": "09:45 PM",
    "arrivalTime": "05:30 AM",
    "duration": "12h 00m",
    "price": 900,
    "seatsAvailable": 25,
    "amenities": [
      "Single & Double Berths",
      "Spacious Bedding",
      "Curtains for Privacy",
      "Night Reading Lamp"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "L1",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-2",
        "number": "L2",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-3",
        "number": "L3",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 900
      },
      {
        "id": "s-4",
        "number": "L4",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 900
      },
      {
        "id": "s-5",
        "number": "L5",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-6",
        "number": "L6",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-7",
        "number": "L7",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-8",
        "number": "L8",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 900
      },
      {
        "id": "s-9",
        "number": "L9",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-10",
        "number": "L10",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-11",
        "number": "L11",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 900
      },
      {
        "id": "s-12",
        "number": "L12",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 900
      },
      {
        "id": "s-13",
        "number": "L13",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-14",
        "number": "L14",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-15",
        "number": "L15",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-16",
        "number": "L16",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-17",
        "number": "L17",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-18",
        "number": "L18",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 900
      },
      {
        "id": "s-19",
        "number": "U19",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 850
      },
      {
        "id": "s-20",
        "number": "U20",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 850
      },
      {
        "id": "s-21",
        "number": "U21",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 850
      },
      {
        "id": "s-22",
        "number": "U22",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 850
      },
      {
        "id": "s-23",
        "number": "U23",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 850
      },
      {
        "id": "s-24",
        "number": "U24",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 850
      },
      {
        "id": "s-25",
        "number": "U25",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 850
      },
      {
        "id": "s-26",
        "number": "U26",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 850
      },
      {
        "id": "s-27",
        "number": "U27",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 850
      },
      {
        "id": "s-28",
        "number": "U28",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 850
      },
      {
        "id": "s-29",
        "number": "U29",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 850
      },
      {
        "id": "s-30",
        "number": "U30",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 850
      },
      {
        "id": "s-31",
        "number": "U31",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 850
      },
      {
        "id": "s-32",
        "number": "U32",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 850
      },
      {
        "id": "s-33",
        "number": "U33",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 850
      },
      {
        "id": "s-34",
        "number": "U34",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 850
      },
      {
        "id": "s-35",
        "number": "U35",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 850
      },
      {
        "id": "s-36",
        "number": "U36",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 850
      }
    ]
  },
  {
    "id": "RT-137",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Bengaluru",
    "toCity": "Kalaburagi",
    "departureTime": "06:00 AM",
    "arrivalTime": "09:30 AM",
    "duration": "10h 30m",
    "price": 1040,
    "seatsAvailable": 28,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Seats"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 1040
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 1040
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 1040
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 1040
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 1040
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 1040
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 1040
      }
    ]
  },
  {
    "id": "RT-138",
    "operator": "KSRTC EV Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Bengaluru",
    "toCity": "Kalaburagi",
    "departureTime": "08:30 AM",
    "arrivalTime": "02:00 PM",
    "duration": "10h 30m",
    "price": 940,
    "seatsAvailable": 28,
    "amenities": [
      "100% Electric Silent Ride",
      "Air Conditioned",
      "Fast USB-C Ports",
      "Reading Lights",
      "Live GPS Tracking"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 940
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 940
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 940
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 940
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 940
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 940
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 940
      }
    ]
  },
  {
    "id": "RT-139",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Bengaluru",
    "toCity": "Kalaburagi",
    "departureTime": "02:15 PM",
    "arrivalTime": "07:30 PM",
    "duration": "10h 30m",
    "price": 680,
    "seatsAvailable": 28,
    "amenities": [
      "Pushback Recliner Seats",
      "Air Suspension",
      "Reading Lights",
      "Luggage Storage"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 680
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 680
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 680
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 680
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 680
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 680
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 680
      }
    ]
  },
  {
    "id": "RT-140",
    "operator": "KSRTC Corona Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Bengaluru",
    "toCity": "Kalaburagi",
    "departureTime": "09:45 PM",
    "arrivalTime": "05:30 AM",
    "duration": "10h 30m",
    "price": 780,
    "seatsAvailable": 25,
    "amenities": [
      "Single & Double Berths",
      "Spacious Bedding",
      "Curtains for Privacy",
      "Night Reading Lamp"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "L1",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-2",
        "number": "L2",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-3",
        "number": "L3",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 780
      },
      {
        "id": "s-4",
        "number": "L4",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 780
      },
      {
        "id": "s-5",
        "number": "L5",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-6",
        "number": "L6",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-7",
        "number": "L7",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-8",
        "number": "L8",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 780
      },
      {
        "id": "s-9",
        "number": "L9",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-10",
        "number": "L10",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-11",
        "number": "L11",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 780
      },
      {
        "id": "s-12",
        "number": "L12",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 780
      },
      {
        "id": "s-13",
        "number": "L13",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-14",
        "number": "L14",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-15",
        "number": "L15",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-16",
        "number": "L16",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-17",
        "number": "L17",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-18",
        "number": "L18",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 780
      },
      {
        "id": "s-19",
        "number": "U19",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 730
      },
      {
        "id": "s-20",
        "number": "U20",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 730
      },
      {
        "id": "s-21",
        "number": "U21",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 730
      },
      {
        "id": "s-22",
        "number": "U22",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 730
      },
      {
        "id": "s-23",
        "number": "U23",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 730
      },
      {
        "id": "s-24",
        "number": "U24",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 730
      },
      {
        "id": "s-25",
        "number": "U25",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 730
      },
      {
        "id": "s-26",
        "number": "U26",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 730
      },
      {
        "id": "s-27",
        "number": "U27",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 730
      },
      {
        "id": "s-28",
        "number": "U28",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 730
      },
      {
        "id": "s-29",
        "number": "U29",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 730
      },
      {
        "id": "s-30",
        "number": "U30",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 730
      },
      {
        "id": "s-31",
        "number": "U31",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 730
      },
      {
        "id": "s-32",
        "number": "U32",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 730
      },
      {
        "id": "s-33",
        "number": "U33",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 730
      },
      {
        "id": "s-34",
        "number": "U34",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 730
      },
      {
        "id": "s-35",
        "number": "U35",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 730
      },
      {
        "id": "s-36",
        "number": "U36",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 730
      }
    ]
  },
  {
    "id": "RT-141",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Mysuru",
    "toCity": "Kodagu (Madikeri)",
    "departureTime": "06:00 AM",
    "arrivalTime": "09:30 AM",
    "duration": "2h 30m",
    "price": 380,
    "seatsAvailable": 28,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Seats"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      }
    ]
  },
  {
    "id": "RT-142",
    "operator": "KSRTC EV Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Mysuru",
    "toCity": "Kodagu (Madikeri)",
    "departureTime": "08:30 AM",
    "arrivalTime": "02:00 PM",
    "duration": "2h 30m",
    "price": 380,
    "seatsAvailable": 28,
    "amenities": [
      "100% Electric Silent Ride",
      "Air Conditioned",
      "Fast USB-C Ports",
      "Reading Lights",
      "Live GPS Tracking"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      }
    ]
  },
  {
    "id": "RT-143",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Mysuru",
    "toCity": "Kodagu (Madikeri)",
    "departureTime": "02:15 PM",
    "arrivalTime": "07:30 PM",
    "duration": "2h 30m",
    "price": 380,
    "seatsAvailable": 28,
    "amenities": [
      "Pushback Recliner Seats",
      "Air Suspension",
      "Reading Lights",
      "Luggage Storage"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      }
    ]
  },
  {
    "id": "RT-144",
    "operator": "KSRTC Corona Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Mysuru",
    "toCity": "Kodagu (Madikeri)",
    "departureTime": "09:45 PM",
    "arrivalTime": "05:30 AM",
    "duration": "2h 30m",
    "price": 380,
    "seatsAvailable": 25,
    "amenities": [
      "Single & Double Berths",
      "Spacious Bedding",
      "Curtains for Privacy",
      "Night Reading Lamp"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "L1",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "L2",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "L3",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "L4",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "L5",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "L6",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "L7",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "L8",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "L9",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "L10",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "L11",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "L12",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "L13",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "L14",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "L15",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "L16",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "L17",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "L18",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "U19",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-20",
        "number": "U20",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-21",
        "number": "U21",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-22",
        "number": "U22",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-23",
        "number": "U23",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-24",
        "number": "U24",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-25",
        "number": "U25",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-26",
        "number": "U26",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-27",
        "number": "U27",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-28",
        "number": "U28",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-29",
        "number": "U29",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-30",
        "number": "U30",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-31",
        "number": "U31",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-32",
        "number": "U32",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-33",
        "number": "U33",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-34",
        "number": "U34",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-35",
        "number": "U35",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-36",
        "number": "U36",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      }
    ]
  },
  {
    "id": "RT-145",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Mangaluru",
    "toCity": "Gokarna",
    "departureTime": "06:00 AM",
    "arrivalTime": "09:30 AM",
    "duration": "4h 30m",
    "price": 410,
    "seatsAvailable": 28,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Seats"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 410
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 410
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 410
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 410
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 410
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 410
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 410
      }
    ]
  },
  {
    "id": "RT-146",
    "operator": "KSRTC EV Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Mangaluru",
    "toCity": "Gokarna",
    "departureTime": "08:30 AM",
    "arrivalTime": "02:00 PM",
    "duration": "4h 30m",
    "price": 380,
    "seatsAvailable": 28,
    "amenities": [
      "100% Electric Silent Ride",
      "Air Conditioned",
      "Fast USB-C Ports",
      "Reading Lights",
      "Live GPS Tracking"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      }
    ]
  },
  {
    "id": "RT-147",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Mangaluru",
    "toCity": "Gokarna",
    "departureTime": "02:15 PM",
    "arrivalTime": "07:30 PM",
    "duration": "4h 30m",
    "price": 380,
    "seatsAvailable": 28,
    "amenities": [
      "Pushback Recliner Seats",
      "Air Suspension",
      "Reading Lights",
      "Luggage Storage"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      }
    ]
  },
  {
    "id": "RT-148",
    "operator": "KSRTC Corona Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Mangaluru",
    "toCity": "Gokarna",
    "departureTime": "09:45 PM",
    "arrivalTime": "05:30 AM",
    "duration": "4h 30m",
    "price": 380,
    "seatsAvailable": 25,
    "amenities": [
      "Single & Double Berths",
      "Spacious Bedding",
      "Curtains for Privacy",
      "Night Reading Lamp"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "L1",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "L2",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "L3",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "L4",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "L5",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "L6",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "L7",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "L8",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "L9",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "L10",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "L11",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "L12",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "L13",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "L14",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "L15",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "L16",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "L17",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "L18",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "U19",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-20",
        "number": "U20",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-21",
        "number": "U21",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-22",
        "number": "U22",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-23",
        "number": "U23",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-24",
        "number": "U24",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-25",
        "number": "U25",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-26",
        "number": "U26",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-27",
        "number": "U27",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-28",
        "number": "U28",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-29",
        "number": "U29",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-30",
        "number": "U30",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-31",
        "number": "U31",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-32",
        "number": "U32",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-33",
        "number": "U33",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-34",
        "number": "U34",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-35",
        "number": "U35",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-36",
        "number": "U36",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      }
    ]
  },
  {
    "id": "RT-149",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Hubballi",
    "toCity": "Vijayanagara (Hampi)",
    "departureTime": "06:00 AM",
    "arrivalTime": "09:30 AM",
    "duration": "3h 00m",
    "price": 380,
    "seatsAvailable": 28,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Seats"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      }
    ]
  },
  {
    "id": "RT-150",
    "operator": "KSRTC EV Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Hubballi",
    "toCity": "Vijayanagara (Hampi)",
    "departureTime": "08:30 AM",
    "arrivalTime": "02:00 PM",
    "duration": "3h 00m",
    "price": 380,
    "seatsAvailable": 28,
    "amenities": [
      "100% Electric Silent Ride",
      "Air Conditioned",
      "Fast USB-C Ports",
      "Reading Lights",
      "Live GPS Tracking"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      }
    ]
  },
  {
    "id": "RT-151",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Hubballi",
    "toCity": "Vijayanagara (Hampi)",
    "departureTime": "02:15 PM",
    "arrivalTime": "07:30 PM",
    "duration": "3h 00m",
    "price": 380,
    "seatsAvailable": 28,
    "amenities": [
      "Pushback Recliner Seats",
      "Air Suspension",
      "Reading Lights",
      "Luggage Storage"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      }
    ]
  },
  {
    "id": "RT-152",
    "operator": "KSRTC Corona Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Hubballi",
    "toCity": "Vijayanagara (Hampi)",
    "departureTime": "09:45 PM",
    "arrivalTime": "05:30 AM",
    "duration": "3h 00m",
    "price": 380,
    "seatsAvailable": 25,
    "amenities": [
      "Single & Double Berths",
      "Spacious Bedding",
      "Curtains for Privacy",
      "Night Reading Lamp"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "L1",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "L2",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "L3",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "L4",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "L5",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "L6",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "L7",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "L8",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "L9",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "L10",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "L11",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "L12",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "L13",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "L14",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "L15",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "L16",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "L17",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "L18",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "U19",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-20",
        "number": "U20",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-21",
        "number": "U21",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-22",
        "number": "U22",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-23",
        "number": "U23",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-24",
        "number": "U24",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-25",
        "number": "U25",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-26",
        "number": "U26",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-27",
        "number": "U27",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-28",
        "number": "U28",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-29",
        "number": "U29",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-30",
        "number": "U30",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-31",
        "number": "U31",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-32",
        "number": "U32",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-33",
        "number": "U33",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-34",
        "number": "U34",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-35",
        "number": "U35",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-36",
        "number": "U36",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      }
    ]
  },
  {
    "id": "RT-153",
    "operator": "KSRTC Airavat",
    "serviceType": "Airavat Club Class",
    "fromCity": "Belagavi",
    "toCity": "Bagalkote (Badami)",
    "departureTime": "06:00 AM",
    "arrivalTime": "09:30 AM",
    "duration": "3h 15m",
    "price": 380,
    "seatsAvailable": 28,
    "amenities": [
      "Air Suspension",
      "Emergency Exit",
      "Live GPS Tracking",
      "Charging Ports",
      "Blankets & Water Bottle",
      "Reclining Seats"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      }
    ]
  },
  {
    "id": "RT-154",
    "operator": "KSRTC EV Power Plus",
    "serviceType": "EV Power Plus",
    "fromCity": "Belagavi",
    "toCity": "Bagalkote (Badami)",
    "departureTime": "08:30 AM",
    "arrivalTime": "02:00 PM",
    "duration": "3h 15m",
    "price": 380,
    "seatsAvailable": 28,
    "amenities": [
      "100% Electric Silent Ride",
      "Air Conditioned",
      "Fast USB-C Ports",
      "Reading Lights",
      "Live GPS Tracking"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      }
    ]
  },
  {
    "id": "RT-155",
    "operator": "KSRTC Rajahamsa",
    "serviceType": "Rajahamsa Executive",
    "fromCity": "Belagavi",
    "toCity": "Bagalkote (Badami)",
    "departureTime": "02:15 PM",
    "arrivalTime": "07:30 PM",
    "duration": "3h 15m",
    "price": 380,
    "seatsAvailable": 28,
    "amenities": [
      "Pushback Recliner Seats",
      "Air Suspension",
      "Reading Lights",
      "Luggage Storage"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "1",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "2",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "3",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "4",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "5",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "6",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "7",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "8",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "9",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "10",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "11",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "12",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "13",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "14",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "15",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "16",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "17",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "18",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "19",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-20",
        "number": "20",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-21",
        "number": "21",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-22",
        "number": "22",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-23",
        "number": "23",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-24",
        "number": "24",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-25",
        "number": "25",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-26",
        "number": "26",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-27",
        "number": "27",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-28",
        "number": "28",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-29",
        "number": "29",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-30",
        "number": "30",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-31",
        "number": "31",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-32",
        "number": "32",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-33",
        "number": "33",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-34",
        "number": "34",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-35",
        "number": "35",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-36",
        "number": "36",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-37",
        "number": "37",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-38",
        "number": "38",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-39",
        "number": "39",
        "type": "seater",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-40",
        "number": "40",
        "type": "seater",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      }
    ]
  },
  {
    "id": "RT-156",
    "operator": "KSRTC Corona Sleeper",
    "serviceType": "Non-AC Sleeper",
    "fromCity": "Belagavi",
    "toCity": "Bagalkote (Badami)",
    "departureTime": "09:45 PM",
    "arrivalTime": "05:30 AM",
    "duration": "3h 15m",
    "price": 380,
    "seatsAvailable": 25,
    "amenities": [
      "Single & Double Berths",
      "Spacious Bedding",
      "Curtains for Privacy",
      "Night Reading Lamp"
    ],
    "seats": [
      {
        "id": "s-1",
        "number": "L1",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-2",
        "number": "L2",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-3",
        "number": "L3",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-4",
        "number": "L4",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-5",
        "number": "L5",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-6",
        "number": "L6",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-7",
        "number": "L7",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-8",
        "number": "L8",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-9",
        "number": "L9",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-10",
        "number": "L10",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-11",
        "number": "L11",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-12",
        "number": "L12",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": true,
        "price": 380
      },
      {
        "id": "s-13",
        "number": "L13",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-14",
        "number": "L14",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-15",
        "number": "L15",
        "type": "sleeper-lower",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-16",
        "number": "L16",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-17",
        "number": "L17",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-18",
        "number": "L18",
        "type": "sleeper-lower",
        "status": "available",
        "isFemaleReserved": false,
        "price": 380
      },
      {
        "id": "s-19",
        "number": "U19",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-20",
        "number": "U20",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-21",
        "number": "U21",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-22",
        "number": "U22",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-23",
        "number": "U23",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-24",
        "number": "U24",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-25",
        "number": "U25",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-26",
        "number": "U26",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-27",
        "number": "U27",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-28",
        "number": "U28",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-29",
        "number": "U29",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-30",
        "number": "U30",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-31",
        "number": "U31",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-32",
        "number": "U32",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-33",
        "number": "U33",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-34",
        "number": "U34",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-35",
        "number": "U35",
        "type": "sleeper-upper",
        "status": "booked",
        "isFemaleReserved": false,
        "price": 330
      },
      {
        "id": "s-36",
        "number": "U36",
        "type": "sleeper-upper",
        "status": "available",
        "isFemaleReserved": false,
        "price": 330
      }
    ]
  }
];

export const searchBusRoutes = (fromCity: string, toCity: string): BusRoute[] => {
  return BUS_ROUTES_DATA.filter(r => 
    r.fromCity.toLowerCase().includes(fromCity.toLowerCase()) &&
    r.toCity.toLowerCase().includes(toCity.toLowerCase())
  );
};
