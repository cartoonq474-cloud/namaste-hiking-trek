const fs = require('fs');

const userText = fs.readFileSync('scratch/user_mustang_content.txt', 'utf8');
const userLines = userText.split('\n');

// Parse the 17 days from userText
const days = [];
let currentDay = null;

for (let i = 0; i < userLines.length; i++) {
  const line = userLines[i].trim();
  const match = line.match(/^Day\s+(\d+):\s*(.*)/i);
  if (match) {
    if (currentDay) {
      days.push(currentDay);
    }
    currentDay = {
      dayNum: parseInt(match[1]),
      title: match[2],
      paragraphs: []
    };
  } else if (currentDay) {
    if (line.match(/^What the 17-day Upper Mustang Trek itinerary covers/i) ||
        line.match(/^Why the itinerary includes/i) ||
        (currentDay.dayNum === 17 && line.match(/^[A-Z][a-z]+.*:/) && !line.startsWith('Day'))) {
      days.push(currentDay);
      currentDay = null;
    } else if (line.length > 0) {
      currentDay.paragraphs.push(line);
    }
  }
}
if (currentDay) days.push(currentDay);

console.log(`Parsed ${days.length} days from user text.`);

// Daily metadata map
const dayMeta = [
  {
    dayNum: 1,
    title: "Arrival in Kathmandu & Transfer to Hotel",
    subtitle: "Kathmandu – <span data-altitude-m=\"1355\">1,355 m / 4,445 ft</span>",
    metrics: [
      { icon: "clock", text: "Transfer time: 20 to 30 minutes" },
      { icon: "hotel", text: "Accommodation: 3-Star Hotel in Kathmandu" },
      { icon: "mountain", text: "Activity: Airport welcome & trek orientation" }
    ],
    meta: [
      { icon: "food", text: "Meals: Welcome Dinner (D)" },
      { icon: "location", text: "Overnight: Kathmandu (1,355 m)" }
    ],
    photos: [
      { src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80", alt: "Kathmandu Durbar Square" },
      { src: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80", alt: "Boudhanath Stupa" },
      { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", alt: "Nepal Temple Architecture" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", alt: "Kathmandu Valley Ridge" }
    ]
  },
  {
    dayNum: 2,
    title: "Kathmandu Sightseeing & Restricted Trekking Preparation",
    subtitle: "Kathmandu – <span data-altitude-m=\"1355\">1,355 m / 4,445 ft</span>",
    metrics: [
      { icon: "clock", text: "Activity duration: 4 to 6 hours" },
      { icon: "hotel", text: "Accommodation: 3-Star Hotel in Kathmandu" },
      { icon: "mountain", text: "Activity: UNESCO World Heritage tour & permit issuance" }
    ],
    meta: [
      { icon: "food", text: "Meals: Breakfast (B)" },
      { icon: "location", text: "Overnight: Kathmandu (1,355 m)" }
    ],
    photos: [
      { src: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80", alt: "Boudhanath Stupa Prayer Wheels" },
      { src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80", alt: "Swayambhunath Monkey Temple" },
      { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", alt: "Pashupatinath Temple" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", alt: "Thamel Trekking Gear Prep" }
    ]
  },
  {
    dayNum: 3,
    title: "Drive from Kathmandu to Pokhara",
    subtitle: "Pokhara – <span data-altitude-m=\"822\">822 m / 2,697 ft</span> (200 km / 124 mi)",
    metrics: [
      { icon: "clock", text: "Drive duration: 5 to 6 hours (200 km)" },
      { icon: "hotel", text: "Accommodation: 3-Star Hotel in Pokhara (Lakeside)" },
      { icon: "mountain", text: "Activity: Scenic highway drive along Trishuli & Marsyangdi rivers" }
    ],
    meta: [
      { icon: "food", text: "Meals: Breakfast (B)" },
      { icon: "location", text: "Overnight: Pokhara Lakeside (822 m)" }
    ],
    photos: [
      { src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80", alt: "Pokhara Phewa Lake" },
      { src: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80", alt: "Annapurna Range Reflection" },
      { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", alt: "Prithvi Highway Scenery" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", alt: "Lakeside Pokhara Evening" }
    ]
  },
  {
    dayNum: 4,
    title: "Fly Pokhara to Jomsom & Trek to Kagbeni",
    subtitle: "Kagbeni – <span data-altitude-m=\"2743\">2,743 m / 8,999 ft</span> (10 km / 6.2 mi)",
    metrics: [
      { icon: "clock", text: "Flight: 25 mins | Trek: 4 to 5 hours (10 km)" },
      { icon: "hotel", text: "Accommodation: Mountain Teahouse in Kagbeni" },
      { icon: "mountain", text: "Activity: Kali Gandaki gorge flight & trek to gateway of Upper Mustang" }
    ],
    meta: [
      { icon: "food", text: "Meals: Breakfast, Lunch, Dinner (B, L, D)" },
      { icon: "location", text: "Overnight: Kagbeni (2,743 m)" }
    ],
    photos: [
      { src: "/images/treks/upper-mustang/upper-mustang-kagbeni-gateway-04.jpg", alt: "Kagbeni Medieval Gateway Village" },
      { src: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80", alt: "Jomsom Mountain Airport" },
      { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", alt: "Kali Gandaki River Valley" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", alt: "Nilgiri Peak Views" }
    ]
  },
  {
    dayNum: 5,
    title: "Trek from Kagbeni to Chele",
    subtitle: "Chele – <span data-altitude-m=\"3050\">3,050 m / 10,006 ft</span> (15 km / 9.3 mi)",
    metrics: [
      { icon: "clock", text: "Trek duration: 6 to 7 hours (15 km)" },
      { icon: "hotel", text: "Accommodation: Mountain Lodge in Chele" },
      { icon: "mountain", text: "Activity: Enter restricted Upper Mustang zone & cliffside ascent" }
    ],
    meta: [
      { icon: "food", text: "Meals: Breakfast, Lunch, Dinner (B, L, D)" },
      { icon: "location", text: "Overnight: Chele (3,050 m)" }
    ],
    photos: [
      { src: "/images/treks/upper-mustang/upper-mustang-kagbeni-gateway-04.jpg", alt: "Upper Mustang Restricted Checkpoint" },
      { src: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80", alt: "Tangbe Whitewashed Houses" },
      { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", alt: "Chhusang Red Rock Cliffs" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", alt: "Chele Cliff Village" }
    ]
  },
  {
    dayNum: 6,
    title: "Trek from Chele to Gheling",
    subtitle: "Gheling – <span data-altitude-m=\"3570\">3,570 m / 11,712 ft</span> (17 km / 10.5 mi)",
    metrics: [
      { icon: "clock", text: "Trek duration: 6 to 7 hours (17 km)" },
      { icon: "hotel", text: "Accommodation: Mountain Lodge in Gheling" },
      { icon: "mountain", text: "Activity: Cross Taklam La (3,624 m) & Dawa La (3,630 m)" }
    ],
    meta: [
      { icon: "food", text: "Meals: Breakfast, Lunch, Dinner (B, L, D)" },
      { icon: "location", text: "Overnight: Gheling (3,570 m)" }
    ],
    photos: [
      { src: "/images/treks/upper-mustang/upper-mustang-drakmar-red-cliffs-02.jpg", alt: "Trans-Himalayan Pass Scenery" },
      { src: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80", alt: "Samar Oasis Village" },
      { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", alt: "Taklam La Pass Ridge" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", alt: "Gheling Old Monastery" }
    ]
  },
  {
    dayNum: 7,
    title: "Trek from Gheling to Charang (Tsarang)",
    subtitle: "Charang – <span data-altitude-m=\"3630\">3,630 m / 11,909 ft</span> (20 km / 12.4 mi)",
    metrics: [
      { icon: "clock", text: "Trek duration: 6 to 7 hours (20 km)" },
      { icon: "hotel", text: "Accommodation: Mountain Lodge in Charang" },
      { icon: "mountain", text: "Activity: Cross Nyi La Pass (4,010 m), longest Mani wall & Ghemi" }
    ],
    meta: [
      { icon: "food", text: "Meals: Breakfast, Lunch, Dinner (B, L, D)" },
      { icon: "location", text: "Overnight: Charang (3,630 m)" }
    ],
    photos: [
      { src: "/images/treks/upper-mustang/upper-mustang-drakmar-red-cliffs-02.jpg", alt: "Charang Historic Palace & Gompa" },
      { src: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80", alt: "Nyi La Pass 4010m" },
      { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", alt: "Longest Buddhist Mani Wall in Mustang" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", alt: "Ghemi Red Sandstone Valleys" }
    ]
  },
  {
    dayNum: 8,
    title: "Trek from Charang to Lo Manthang",
    subtitle: "Lo Manthang – <span data-altitude-m=\"3840\">3,840 m / 12,598 ft</span> (19 km / 11.8 mi)",
    metrics: [
      { icon: "clock", text: "Trek duration: 6 to 7 hours (19 km)" },
      { icon: "hotel", text: "Accommodation: Mountain Lodge in Lo Manthang" },
      { icon: "mountain", text: "Activity: Cross Lo La Pass (3,950 m) with first view of Walled City" }
    ],
    meta: [
      { icon: "food", text: "Meals: Breakfast, Lunch, Dinner (B, L, D)" },
      { icon: "location", text: "Overnight: Lo Manthang (3,840 m)" }
    ],
    photos: [
      { src: "/images/treks/upper-mustang/upper-mustang-lo-manthang-walled-city-01.jpg", alt: "Lo Manthang Walled City Panorama" },
      { src: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80", alt: "Lo La Pass Vista" },
      { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", alt: "King's Palace in Lo Manthang" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", alt: "Ancient Champa Lhakhang" }
    ]
  },
  {
    dayNum: 9,
    title: "Active Cultural Exploration of Namgyal Gompa & Tingkhar",
    subtitle: "Lo Manthang – <span data-altitude-m=\"3840\">3,840 m+ / 12,598 ft+</span> (16 km / 9.9 mi)",
    metrics: [
      { icon: "clock", text: "Exploration duration: 6 to 7 hours (16 km)" },
      { icon: "hotel", text: "Accommodation: Mountain Lodge in Lo Manthang" },
      { icon: "mountain", text: "Activity: Monasteries of Lo Manthang, Namgyal Gompa & Tingkhar village" }
    ],
    meta: [
      { icon: "food", text: "Meals: Breakfast, Lunch, Dinner (B, L, D)" },
      { icon: "location", text: "Overnight: Lo Manthang (3,840 m)" }
    ],
    photos: [
      { src: "/images/treks/upper-mustang/upper-mustang-chhoser-sky-caves-03.jpg", alt: "Chhoser Sky Caves & Jhong Cliff Dwellings" },
      { src: "/images/treks/upper-mustang/upper-mustang-lo-manthang-walled-city-01.jpg", alt: "Namgyal Gompa Monastery of Victory" },
      { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", alt: "Tingkhar Royal Summer Settlement" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", alt: "Tibetan Frescoes inside Gompas" }
    ]
  },
  {
    dayNum: 10,
    title: "Trek from Lo Manthang to Drakmar",
    subtitle: "Drakmar – <span data-altitude-m=\"3810\">3,810 m / 12,500 ft</span> (18 km / 11.1 mi)",
    metrics: [
      { icon: "clock", text: "Trek duration: 6 to 7 hours (18 km)" },
      { icon: "hotel", text: "Accommodation: Mountain Lodge in Drakmar" },
      { icon: "mountain", text: "Activity: 8th-century Ghar Gompa & crimson fluted sandstone cliffs" }
    ],
    meta: [
      { icon: "food", text: "Meals: Breakfast, Lunch, Dinner (B, L, D)" },
      { icon: "location", text: "Overnight: Drakmar (3,810 m)" }
    ],
    photos: [
      { src: "/images/treks/upper-mustang/upper-mustang-drakmar-red-cliffs-02.jpg", alt: "Drakmar Crimson Fluted Sandstone Cliffs" },
      { src: "/images/treks/upper-mustang/upper-mustang-lo-manthang-walled-city-01.jpg", alt: "Ghar Gompa Guru Rinpoche Sanctuary" },
      { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", alt: "Chogo La Pass High Traverse" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", alt: "Ancient Buddhist Stupas at Drakmar" }
    ]
  },
  {
    dayNum: 11,
    title: "Trek from Drakmar to Sangboche",
    subtitle: "Sangboche – <span data-altitude-m=\"3800\">3,800 m / 12,467 ft</span> (17 km / 10.5 mi)",
    metrics: [
      { icon: "clock", text: "Trek duration: 6 to 7 hours (17 km)" },
      { icon: "hotel", text: "Accommodation: Mountain Lodge in Sangboche" },
      { icon: "mountain", text: "Activity: Trek via Tama Gaon, Chungsi sacred cave & Syangboche" }
    ],
    meta: [
      { icon: "food", text: "Meals: Breakfast, Lunch, Dinner (B, L, D)" },
      { icon: "location", text: "Overnight: Sangboche (3,800 m)" }
    ],
    photos: [
      { src: "/images/treks/upper-mustang/upper-mustang-drakmar-red-cliffs-02.jpg", alt: "Chungsi Cave Hermitage" },
      { src: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80", alt: "Tama Gaon Traditional Terraces" },
      { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", alt: "High Mustang Alpine Plateau" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", alt: "Sangboche Lodge Viewpoint" }
    ]
  },
  {
    dayNum: 12,
    title: "Trek from Sangboche to Chhusang",
    subtitle: "Chhusang – <span data-altitude-m=\"2980\">2,980 m / 9,776 ft</span> (19 km / 11.8 mi)",
    metrics: [
      { icon: "clock", text: "Trek duration: 6 to 7 hours (19 km)" },
      { icon: "hotel", text: "Accommodation: Mountain Lodge in Chhusang" },
      { icon: "mountain", text: "Activity: Long canyon descent through Samar, Chele & riverbed crossing" }
    ],
    meta: [
      { icon: "food", text: "Meals: Breakfast, Lunch, Dinner (B, L, D)" },
      { icon: "location", text: "Overnight: Chhusang (2,980 m)" }
    ],
    photos: [
      { src: "/images/treks/upper-mustang/upper-mustang-chhoser-sky-caves-03.jpg", alt: "Chhusang Red Rock Spires" },
      { src: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80", alt: "Samar Ridge Trail" },
      { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", alt: "Kali Gandaki Riverbed Valley" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", alt: "Apple Orchards of Chhusang" }
    ]
  },
  {
    dayNum: 13,
    title: "Trek from Chhusang to Muktinath",
    subtitle: "Muktinath – <span data-altitude-m=\"3710\">3,710 m / 12,172 ft</span> (18 km / 11.1 mi)",
    metrics: [
      { icon: "clock", text: "Trek duration: 6 to 7 hours (18 km)" },
      { icon: "hotel", text: "Accommodation: Mountain Lodge in Muktinath" },
      { icon: "mountain", text: "Activity: Climb via Gyu La Pass (4,077 m) with Dhaulagiri panoramas" }
    ],
    meta: [
      { icon: "food", text: "Meals: Breakfast, Lunch, Dinner (B, L, D)" },
      { icon: "location", text: "Overnight: Muktinath (3,710 m)" }
    ],
    photos: [
      { src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80", alt: "Muktinath Sacred Pilgrimage Complex" },
      { src: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80", alt: "Gyu La Pass 4077m Views" },
      { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", alt: "108 Sacred Water Spouts" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", alt: "Eternal Natural Gas Flame" }
    ]
  },
  {
    dayNum: 14,
    title: "Trek from Muktinath to Jomsom via Jharkot",
    subtitle: "Jomsom – <span data-altitude-m=\"2720\">2,720 m / 8,924 ft</span> (20.2 km / 12.5 mi)",
    metrics: [
      { icon: "clock", text: "Trek duration: 5 to 6 hours (20.2 km)" },
      { icon: "hotel", text: "Accommodation: Mountain Lodge in Jomsom" },
      { icon: "mountain", text: "Activity: Historic Jharkot fortress gompa & final Kali Gandaki trek" }
    ],
    meta: [
      { icon: "food", text: "Meals: Breakfast, Lunch, Dinner (B, L, D)" },
      { icon: "location", text: "Overnight: Jomsom (2,720 m)" }
    ],
    photos: [
      { src: "/images/treks/upper-mustang/upper-mustang-kagbeni-gateway-04.jpg", alt: "Jharkot Fortress Village" },
      { src: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80", alt: "Kali Gandaki Shaligram Fossil Bed" },
      { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", alt: "Dhaulagiri Peak from Jomsom" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", alt: "Jomsom Airport Runway" }
    ]
  },
  {
    dayNum: 15,
    title: "Fly from Jomsom to Pokhara",
    subtitle: "Pokhara – <span data-altitude-m=\"822\">822 m / 2,697 ft</span> (25 min flight)",
    metrics: [
      { icon: "clock", text: "Flight duration: 25 minutes scenic mountain flight" },
      { icon: "hotel", text: "Accommodation: 3-Star Hotel in Pokhara (Lakeside)" },
      { icon: "mountain", text: "Activity: Annapurna / Dhaulagiri aerial flight & lakeside celebration" }
    ],
    meta: [
      { icon: "food", text: "Meals: Breakfast (B)" },
      { icon: "location", text: "Overnight: Pokhara Lakeside (822 m)" }
    ],
    photos: [
      { src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80", alt: "Jomsom Flight over Annapurna Range" },
      { src: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80", alt: "Pokhara Lakeside Relax" },
      { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", alt: "Peace Pagoda Viewpoint" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", alt: "Boating on Phewa Lake" }
    ]
  },
  {
    dayNum: 16,
    title: "Drive from Pokhara to Kathmandu",
    subtitle: "Kathmandu – <span data-altitude-m=\"1355\">1,355 m / 4,445 ft</span> (200 km / 124 mi)",
    metrics: [
      { icon: "clock", text: "Drive duration: 5 to 6 hours scenic tourist coach" },
      { icon: "hotel", text: "Accommodation: 3-Star Hotel in Kathmandu" },
      { icon: "mountain", text: "Activity: Return overland drive & farewell cultural dinner" }
    ],
    meta: [
      { icon: "food", text: "Meals: Breakfast, Farewell Dinner (B, D)" },
      { icon: "location", text: "Overnight: Kathmandu (1,355 m)" }
    ],
    photos: [
      { src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80", alt: "Scenic River Valley Highway" },
      { src: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80", alt: "Thamel Souvenir Shopping" },
      { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", alt: "Traditional Nepalese Farewell Dinner" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", alt: "Kathmandu Stupa Night View" }
    ]
  },
  {
    dayNum: 17,
    title: "Farewell & Final Departure from Nepal",
    subtitle: "Kathmandu – <span data-altitude-m=\"1355\">1,355 m / 4,445 ft</span>",
    metrics: [
      { icon: "clock", text: "Transfer: 3 hours prior to departure flight" },
      { icon: "hotel", text: "Accommodation: Departure Day (Hotel check-out by 12:00 PM)" },
      { icon: "mountain", text: "Activity: Airport drop-off & safe journey onward" }
    ],
    meta: [
      { icon: "food", text: "Meals: Breakfast (B)" },
      { icon: "location", text: "Final Destination: Tribhuvan International Airport (TIA)" }
    ],
    photos: [
      { src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80", alt: "Tribhuvan International Airport" },
      { src: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80", alt: "Himalayas Aerial Mountain Farewell" },
      { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", alt: "Prayer Flags in Himalayan Breeze" },
      { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", alt: "Namaste Nepal Memories" }
    ]
  }
];

// Helper to get SVG icons
function getSvg(type) {
  if (type === 'clock') {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;
  } else if (type === 'hotel') {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`;
  } else if (type === 'mountain') {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 22 22 22"></polygon></svg>`;
  } else if (type === 'food') {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path></svg>`;
  } else if (type === 'location') {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>`;
  }
  return '';
}

// Build cards HTML
let cardsHtml = '';

dayMeta.forEach((m, idx) => {
  const dData = days.find(d => d.dayNum === m.dayNum) || { paragraphs: [] };
  const isActive = idx === 0 ? ' active' : '';
  
  // Format paragraphs (take 3 to 6 high value paragraphs from user content)
  let paras = dData.paragraphs.filter(p => p.length > 30 && !p.startsWith('Day '));
  if (paras.length === 0) paras = [m.title];
  
  // Create clean paragraph markup
  const descMarkup = paras.slice(0, 5).map(p => `<p>${p.trim()}</p>`).join('\n                      ');
  
  const metricsMarkup = m.metrics.map(met => `
                      <div class="itinerary-metric-item">
                        ${getSvg(met.icon)}
                        <span>${met.text}</span>
                      </div>`).join('');

  const metaBoxMarkup = m.meta.map(mb => `
                      <div class="itinerary-meta-box-item">
                        ${getSvg(mb.icon)}
                        <span>${mb.text}</span>
                      </div>`).join('');

  const photosMarkup = m.photos.map(ph => `
                      <div class="itinerary-photo-wrapper">
                        <img loading="lazy" src="${ph.src}" alt="${ph.alt}">
                      </div>`).join('');

  cardsHtml += `
              <!-- Day ${String(m.dayNum).padStart(2, '0')} -->
              <div class="itinerary-card${isActive}">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day ${m.dayNum}:</span> ${m.title}
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      ${m.subtitle}
                    </p>
                  </div>
                  <div class="itinerary-header-right">
                    <div class="itinerary-toggle-btn-new">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="itinerary-content">
                  <div class="itinerary-content-inner">
                    <div class="itinerary-metrics-list">${metricsMarkup}
                    </div>

                    <div class="itinerary-meta-box">${metaBoxMarkup}
                    </div>

                    <div class="itinerary-description">
                      ${descMarkup}
                    </div>

                    <div class="itinerary-photos-grid">${photosMarkup}
                    </div>
                  </div>
                </div>
              </div>
`;
});

// Build 17-Day Itinerary Table
const tableHtml = `
            <!-- 17-Day Itinerary Summary Table -->
            <div style="margin-top: 45px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 24px; box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
              <h3 style="font-size: 1.25rem; font-weight: 700; color: #0F172A; margin: 0 0 16px 0; display: flex; align-items: center; gap: 10px;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                17-Day Upper Mustang Trek Route at a Glance
              </h3>
              <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem; text-align: left;">
                  <thead>
                    <tr style="background: #F8FAFC; border-bottom: 2px solid #E2E8F0; color: #1E293B;">
                      <th style="padding: 12px 14px; font-weight: 700;">Day</th>
                      <th style="padding: 12px 14px; font-weight: 700;">Route Stage</th>
                      <th style="padding: 12px 14px; font-weight: 700;">Overnight Elevation</th>
                      <th style="padding: 12px 14px; font-weight: 700;">Distance</th>
                      <th style="padding: 12px 14px; font-weight: 700;">Duration</th>
                      <th style="padding: 12px 14px; font-weight: 700;">Activity Type</th>
                    </tr>
                  </thead>
                  <tbody style="color: #475569;">
                    <tr style="border-bottom: 1px solid #F1F5F9;">
                      <td style="padding: 10px 14px; font-weight: 600; color: #008060;">Day 1</td>
                      <td style="padding: 10px 14px; font-weight: 600; color: #0F172A;">Arrival in Kathmandu</td>
                      <td style="padding: 10px 14px;">1,355 m / 4,445 ft</td>
                      <td style="padding: 10px 14px;">—</td>
                      <td style="padding: 10px 14px;">30 min transfer</td>
                      <td style="padding: 10px 14px;">Arrival & Welcome Dinner</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #F1F5F9; background: #FAFAFA;">
                      <td style="padding: 10px 14px; font-weight: 600; color: #008060;">Day 2</td>
                      <td style="padding: 10px 14px; font-weight: 600; color: #0F172A;">Kathmandu Sightseeing & Permit Prep</td>
                      <td style="padding: 10px 14px;">1,355 m / 4,445 ft</td>
                      <td style="padding: 10px 14px;">—</td>
                      <td style="padding: 10px 14px;">4–5 hrs tour</td>
                      <td style="padding: 10px 14px;">Sightseeing & Briefing</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #F1F5F9;">
                      <td style="padding: 10px 14px; font-weight: 600; color: #008060;">Day 3</td>
                      <td style="padding: 10px 14px; font-weight: 600; color: #0F172A;">Drive Kathmandu to Pokhara</td>
                      <td style="padding: 10px 14px;">822 m / 2,697 ft</td>
                      <td style="padding: 10px 14px;">200 km / 124 mi</td>
                      <td style="padding: 10px 14px;">5–6 hrs</td>
                      <td style="padding: 10px 14px;">Scenic highway drive</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #F1F5F9; background: #FAFAFA;">
                      <td style="padding: 10px 14px; font-weight: 600; color: #008060;">Day 4</td>
                      <td style="padding: 10px 14px; font-weight: 600; color: #0F172A;">Fly to Jomsom & Trek to Kagbeni</td>
                      <td style="padding: 10px 14px;">2,743 m / 8,999 ft</td>
                      <td style="padding: 10px 14px;">10 km / 6.2 mi</td>
                      <td style="padding: 10px 14px;">25m flt + 4–5 hrs</td>
                      <td style="padding: 10px 14px;">Flight & initial trek</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #F1F5F9;">
                      <td style="padding: 10px 14px; font-weight: 600; color: #008060;">Day 5</td>
                      <td style="padding: 10px 14px; font-weight: 600; color: #0F172A;">Kagbeni to Chele</td>
                      <td style="padding: 10px 14px;">3,050 m / 10,006 ft</td>
                      <td style="padding: 10px 14px;">15 km / 9.3 mi</td>
                      <td style="padding: 10px 14px;">6–7 hrs</td>
                      <td style="padding: 10px 14px;">Enter restricted zone</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #F1F5F9; background: #FAFAFA;">
                      <td style="padding: 10px 14px; font-weight: 600; color: #008060;">Day 6</td>
                      <td style="padding: 10px 14px; font-weight: 600; color: #0F172A;">Chele to Gheling</td>
                      <td style="padding: 10px 14px;">3,570 m / 11,712 ft</td>
                      <td style="padding: 10px 14px;">17 km / 10.5 mi</td>
                      <td style="padding: 10px 14px;">6–7 hrs</td>
                      <td style="padding: 10px 14px;">Cross Taklam & Dawa La</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #F1F5F9;">
                      <td style="padding: 10px 14px; font-weight: 600; color: #008060;">Day 7</td>
                      <td style="padding: 10px 14px; font-weight: 600; color: #0F172A;">Gheling to Charang (Tsarang)</td>
                      <td style="padding: 10px 14px;">3,630 m / 11,909 ft</td>
                      <td style="padding: 10px 14px;">20 km / 12.4 mi</td>
                      <td style="padding: 10px 14px;">6–7 hrs</td>
                      <td style="padding: 10px 14px;">Nyi La Pass (4,010 m)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #F1F5F9; background: #FAFAFA;">
                      <td style="padding: 10px 14px; font-weight: 600; color: #008060;">Day 8</td>
                      <td style="padding: 10px 14px; font-weight: 600; color: #0F172A;">Charang to Lo Manthang</td>
                      <td style="padding: 10px 14px; font-weight: 700; color: #008060;">3,840 m / 12,598 ft</td>
                      <td style="padding: 10px 14px;">19 km / 11.8 mi</td>
                      <td style="padding: 10px 14px;">6–7 hrs</td>
                      <td style="padding: 10px 14px;">Lo La Pass (3,950 m)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #F1F5F9;">
                      <td style="padding: 10px 14px; font-weight: 600; color: #008060;">Day 9</td>
                      <td style="padding: 10px 14px; font-weight: 600; color: #0F172A;">Lo Manthang Exploration (Namgyal & Tingkhar)</td>
                      <td style="padding: 10px 14px; font-weight: 700; color: #008060;">3,840 m / 12,598 ft</td>
                      <td style="padding: 10px 14px;">16 km / 9.9 mi</td>
                      <td style="padding: 10px 14px;">6–7 hrs</td>
                      <td style="padding: 10px 14px;">Active Cultural Excursion</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #F1F5F9; background: #FAFAFA;">
                      <td style="padding: 10px 14px; font-weight: 600; color: #008060;">Day 10</td>
                      <td style="padding: 10px 14px; font-weight: 600; color: #0F172A;">Lo Manthang to Drakmar via Ghar Gompa</td>
                      <td style="padding: 10px 14px;">3,810 m / 12,500 ft</td>
                      <td style="padding: 10px 14px;">18 km / 11.1 mi</td>
                      <td style="padding: 10px 14px;">6–7 hrs</td>
                      <td style="padding: 10px 14px;">Ancient Ghar Gompa & Cliffs</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #F1F5F9;">
                      <td style="padding: 10px 14px; font-weight: 600; color: #008060;">Day 11</td>
                      <td style="padding: 10px 14px; font-weight: 600; color: #0F172A;">Drakmar to Sangboche</td>
                      <td style="padding: 10px 14px;">3,800 m / 12,467 ft</td>
                      <td style="padding: 10px 14px;">17 km / 10.5 mi</td>
                      <td style="padding: 10px 14px;">6–7 hrs</td>
                      <td style="padding: 10px 14px;">Chungsi Cave hermitage</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #F1F5F9; background: #FAFAFA;">
                      <td style="padding: 10px 14px; font-weight: 600; color: #008060;">Day 12</td>
                      <td style="padding: 10px 14px; font-weight: 600; color: #0F172A;">Sangboche to Chhusang</td>
                      <td style="padding: 10px 14px;">2,980 m / 9,776 ft</td>
                      <td style="padding: 10px 14px;">19 km / 11.8 mi</td>
                      <td style="padding: 10px 14px;">6–7 hrs</td>
                      <td style="padding: 10px 14px;">Canyon descent</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #F1F5F9;">
                      <td style="padding: 10px 14px; font-weight: 600; color: #008060;">Day 13</td>
                      <td style="padding: 10px 14px; font-weight: 600; color: #0F172A;">Chhusang to Muktinath</td>
                      <td style="padding: 10px 14px;">3,710 m / 12,172 ft</td>
                      <td style="padding: 10px 14px;">18 km / 11.1 mi</td>
                      <td style="padding: 10px 14px;">6–7 hrs</td>
                      <td style="padding: 10px 14px;">Gyu La Pass (4,077 m)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #F1F5F9; background: #FAFAFA;">
                      <td style="padding: 10px 14px; font-weight: 600; color: #008060;">Day 14</td>
                      <td style="padding: 10px 14px; font-weight: 600; color: #0F172A;">Muktinath to Jomsom via Jharkot</td>
                      <td style="padding: 10px 14px;">2,720 m / 8,924 ft</td>
                      <td style="padding: 10px 14px;">20.2 km / 12.5 mi</td>
                      <td style="padding: 10px 14px;">6 hrs</td>
                      <td style="padding: 10px 14px;">Final trek completion</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #F1F5F9;">
                      <td style="padding: 10px 14px; font-weight: 600; color: #008060;">Day 15</td>
                      <td style="padding: 10px 14px; font-weight: 600; color: #0F172A;">Fly Jomsom to Pokhara</td>
                      <td style="padding: 10px 14px;">822 m / 2,697 ft</td>
                      <td style="padding: 10px 14px;">—</td>
                      <td style="padding: 10px 14px;">25 min flight</td>
                      <td style="padding: 10px 14px;">Mountain flight & rest</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #F1F5F9; background: #FAFAFA;">
                      <td style="padding: 10px 14px; font-weight: 600; color: #008060;">Day 16</td>
                      <td style="padding: 10px 14px; font-weight: 600; color: #0F172A;">Drive Pokhara to Kathmandu</td>
                      <td style="padding: 10px 14px;">1,355 m / 4,445 ft</td>
                      <td style="padding: 10px 14px;">200 km / 124 mi</td>
                      <td style="padding: 10px 14px;">5–6 hrs</td>
                      <td style="padding: 10px 14px;">Scenic coach drive</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 14px; font-weight: 600; color: #008060;">Day 17</td>
                      <td style="padding: 10px 14px; font-weight: 600; color: #0F172A;">Farewell & Final Departure</td>
                      <td style="padding: 10px 14px;">1,355 m / 4,445 ft</td>
                      <td style="padding: 10px 14px;">—</td>
                      <td style="padding: 10px 14px;">As scheduled</td>
                      <td style="padding: 10px 14px;">Airport transfer & farewell</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
`;

// Construct new section-itinerary
const newSectionItinerary = `<section id="section-itinerary" class="trek-detail-section">
            <h2 class="trek-section-title">Upper Mustang Trek Itinerary: 17-Day Day-by-Day Guide</h2>
            <p style="font-size: 1.05rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 24px; max-width: 840px;">
              Our comprehensive 17-day Upper Mustang itinerary follows a carefully engineered progression through the ancient Kingdom of Lo. Incorporating round-trip Pokhara-Jomsom flights, 11 trail walking days, dedicated exploration around Lo Manthang and Tingkhar, and high pass traverses, this classic route guarantees optimal acclimatization, cultural immersion, and trans-Himalayan desert wonder.
            </p>
            
            <div class="itinerary-timeline">
${cardsHtml}
            </div>
${tableHtml}
          </section>`;

// Replace in index.html
const targetPath = 'trek/upper-mustang-trek/index.html';
let html = fs.readFileSync(targetPath, 'utf8');

const s2Start = html.indexOf('<section id="section-itinerary"');
const s2End = html.indexOf('<!-- Custom Itinerary Plan Your Trip CTA Banner Card -->');

if (s2Start === -1 || s2End === -1) {
  console.error('Could not locate Section 2 bounds in index.html!');
  process.exit(1);
}

const updatedHtml = html.substring(0, s2Start) + newSectionItinerary + '\n\n          ' + html.substring(s2End);
fs.writeFileSync(targetPath, updatedHtml, 'utf8');
console.log('Successfully updated Section 2 (17-Day Itinerary & Summary Table)!');
