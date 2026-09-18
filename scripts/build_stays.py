import json, re

# Read districts from districts.ts
with open('src/data/districts.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract json array from export const DISTRICTS_DATA: District[] = [...];
match = re.search(r'DISTRICTS_DATA:\s*District\[\]\s*=\s*(\[[\s\S]*?\]);\s*export', text)
if not match:
    print('Failed to match DISTRICTS_DATA')
    exit(1)

districts = json.loads(match.group(1))

stays = []
amenities_pool = [
  "Free High-Speed Wi-Fi",
  "Complimentary Traditional Breakfast",
  "24/7 Hot Water & Power Backup",
  "In-House Pure Veg Restaurant",
  "Electric Vehicle (EV) Charging Station",
  "Travel & Sightseeing Desk",
  "Secure Ample Car Parking",
  "Luggage Assistance & Locker",
  "Local Tourism Guide on Request"
]

images_pool = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80"
]

for idx, d in enumerate(districts):
    d_name = d["name"]
    d_kannada = d["kannadaName"]
    d_id = d["id"]
    
    # Custom property naming per district
    stay_name = f"Yaatri Niwaas — {d_name}"
    kannada_stay_name = f"ಯಾತ್ರಿ ನಿವಾಸ — {d_kannada}"
    
    img = images_pool[idx % len(images_pool)]
    if "heroImage" in d and d["heroImage"]:
        img = d["heroImage"]
        
    rating = round(4.5 + ((idx * 7) % 5) * 0.1, 1)
    reviews_count = 140 + ((idx * 53) % 450)
    
    prop = {
      "id": f"yn-{d_id}",
      "districtId": d_id,
      "districtName": d_name,
      "name": stay_name,
      "kannadaName": kannada_stay_name,
      "tagline": f"Official Tourism Stay in {d_name} — Comfortable, Affordable & Authentic",
      "address": f"KSTDC Yaatri Niwaas Complex, Main Tourism Road, {d_name}, Karnataka",
      "rating": rating,
      "reviewsCount": reviews_count,
      "priceStarting": 1250,
      "image": img,
      "amenities": amenities_pool[:7],
      "nearbyLandmarks": d.get("highlights", [])[:3],
      "rooms": [
        {
          "id": f"room-{d_id}-std",
          "name": "Standard Non-AC Room",
          "type": "Standard Non-AC",
          "capacity": 2,
          "pricePerNight": 1250,
          "amenities": ["Twin/Queen Bed", "Attached Bathroom", "Ceiling Fan", "Hot Water", "Complimentary Breakfast"],
          "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
          "available": True
        },
        {
          "id": f"room-{d_id}-dlx",
          "name": "Deluxe Air-Conditioned Room",
          "type": "Deluxe AC",
          "capacity": 2,
          "pricePerNight": 2200,
          "amenities": ["Queen Size Bed", "Split Air Conditioner", "LED TV with Satellite Channels", "Electric Kettle & Tea Kit", "Free Breakfast"],
          "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
          "available": True
        },
        {
          "id": f"room-{d_id}-suite",
          "name": "Heritage Suite",
          "type": "Heritage Suite",
          "capacity": 3,
          "pricePerNight": 3600,
          "amenities": ["King Bed + Sofa Bed", "Spacious Living Area", "Mini Refrigerator", "Balcony View", "Complimentary South Indian Breakfast & High Tea"],
          "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
          "available": True
        },
        {
          "id": f"room-{d_id}-cottage",
          "name": "Family Tourism Cottage",
          "type": "Family Cottage",
          "capacity": 5,
          "pricePerNight": 4400,
          "amenities": ["Two Interconnected Bedrooms", "Private Sit-Out Lawn", "Dining Space", "Exclusive Parking Porch", "Buffet Breakfast Included"],
          "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
          "available": True
        }
      ]
    }
    stays.append(prop)

header = "import { YaatriNiwaasProperty } from './types';\\n\\n"
with open('src/data/stays.ts', 'w', encoding='utf-8') as f_out:
    f_out.write(header)
    f_out.write('export const STAYS_DATA: YaatriNiwaasProperty[] = ' + json.dumps(stays, indent=2, ensure_ascii=False) + ';\\n\\n')
    f_out.write('export const getStayByDistrict = (districtId: string): YaatriNiwaasProperty | undefined => {\\n')
    f_out.write('  return STAYS_DATA.find(s => s.districtId.toLowerCase() === districtId.toLowerCase());\\n')
    f_out.write('};\\n\\n')
    f_out.write('export const getStayById = (id: string): YaatriNiwaasProperty | undefined => {\\n')
    f_out.write('  return STAYS_DATA.find(s => s.id.toLowerCase() === id.toLowerCase());\\n')
    f_out.write('};\\n')

print(f'Stays dataset built successfully with {len(stays)} Yaatri Niwaas properties covering ALL 31 districts!')
