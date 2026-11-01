const fs = require('fs');

let html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const startMarker = '<!-- Section 2: Itinerary -->';
const endMarker = '<!-- Section 3: Includes and Excludes -->';

const startIndex = html.indexOf(startMarker);
const endIndex = html.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Section 2 markers not found!');
  process.exit(1);
}

// Days data for Mera Peak (18 days)
const daysData = [
  {
    num: "01",
    dayNum: 1,
    title: "Arrival at Tribhuvan International Airport in Kathmandu & Hotel Transfer",
    subtitle: 'Kathmandu – approximately <span data-altitude-m="1355">1,355 m / 4,445 ft</span>',
    metrics: [
      { icon: "clock", text: "Transfer time: 25 to 35 minutes" },
      { icon: "home", text: "Accommodation: 3-Star Deluxe Hotel (Kathmandu)" },
      { icon: "activity", text: "Activity: Welcome, hotel check-in & rest" }
    ],
    meta: [
      { icon: "coffee", text: "Meals: Welcome Dinner (traditional Nepali feast)" },
      { icon: "map-pin", text: 'Overnight: Kathmandu (<span data-altitude-m="1355">1,355 m</span>)' }
    ],
    desc: [
      "Your Himalayan mountaineering journey begins upon your arrival at Tribhuvan International Airport (KTM) in Kathmandu. Our friendly representative will greet you outside the arrival terminal holding a personalized Namaste Hiking Trek placard, offer a traditional marigold garland welcome, and escort you to your hotel in a private air-conditioned vehicle.",
      "The drive through Kathmandu introduces you to the vibrant energy of Nepal's capital. After checking in, take time to unpack, relax, shake off jet lag, and explore the nearby lively lanes of Thamel with its outdoor cafés and climbing gear shops.",
      "In the evening, gather with our expedition management team for a warm welcome dinner featuring authentic Nepali cuisine and live cultural music, setting the stage for an extraordinary high-altitude expedition."
    ],
    photos: [
      { src: "../../images/treks/mera-peak/mera-peak-trekking-group-mountain-village-02.jpg", alt: "Namaste Hiking Trek Team Meeting in Nepal" },
      { src: "../../images/treks/mera-peak/mera-peak-hiker-glacial-lake-03.jpg", alt: "Kathmandu Valley and Himalayan Horizons" }
    ]
  },
  {
    num: "02",
    dayNum: 2,
    title: "Kathmandu Valley Sightseeing, Climbing Briefing & Technical Gear Inspection",
    subtitle: 'Kathmandu – <span data-altitude-m="1355">1,355 m / 4,445 ft</span>',
    metrics: [
      { icon: "clock", text: "Tour duration: 4 to 5 hours" },
      { icon: "home", text: "Accommodation: 3-Star Deluxe Hotel (Kathmandu)" },
      { icon: "activity", text: "Activity: UNESCO World Heritage sites & gear inspection" }
    ],
    meta: [
      { icon: "coffee", text: "Meals: Breakfast" },
      { icon: "map-pin", text: 'Overnight: Kathmandu (<span data-altitude-m="1355">1,355 m</span>)' }
    ],
    desc: [
      "After breakfast, embark on a guided cultural tour of Kathmandu's most sacred UNESCO World Heritage sites. Visit the ancient hilltop stupa of Swayambhunath (the Monkey Temple) with sweeping views across the valley basin, and explore the revered Hindu temple complex of Pashupatinath on the banks of the sacred Bagmati River.",
      "In the afternoon, convene at our Kathmandu office for an in-depth expedition briefing led by your UIAGM/NMA-certified Climbing Sherpa guide. We review the 18-day route, daily acclimatization pacing, mountain weather forecasts, communication protocols, and high-camp procedures.",
      "Our technical team conducts a comprehensive personal gear audit. We verify your mountaineering boots, crampons, harness, ice axe, ascender (jumar), helmet, sleeping bag (-20°C rated), and down suit. Any missing or underspecified equipment can be purchased or rented from high-end gear outlets in Thamel with your guide's guidance."
    ],
    photos: [
      { src: "../../images/treks/mera-peak/mera-peak-trekking-group-mountain-village-02.jpg", alt: "Kathmandu Cultural Sights and Trekking Preparation" },
      { src: "../../images/treks/mera-peak/mera-peak-climbers-snowy-trail-01.jpg", alt: "Technical Mountaineering Gear Check" }
    ]
  },
  {
    num: "03",
    dayNum: 3,
    title: "Scenic Flight to Lukla (2,850m) & Trek Southward to Paiya / Chutanga",
    subtitle: 'Lukla to Paiya (Chutok) – approximately <span data-altitude-m="2730">2,730 m / 8,956 ft</span>',
    metrics: [
      { icon: "clock", text: "Walking time: 5 to 6 hours" },
      { icon: "trending-up", text: "Distance: ~10 km | Elevation change: +150 m / -270 m" },
      { icon: "home", text: "Accommodation: Mountain Teahouse Lodge" },
      { icon: "activity", text: "Activity: 35-min mountain flight & quiet southern trail" }
    ],
    meta: [
      { icon: "coffee", text: "Meals: Breakfast, Lunch, Dinner" },
      { icon: "map-pin", text: 'Overnight: Paiya / Chutok (<span data-altitude-m="2730">2,730 m</span>)' }
    ],
    desc: [
      'An exhilarating early morning transfer brings you to the airport for the legendary flight to Tenzing-Hillary Airport in Lukla (<span data-altitude-m="2850">2,850 m</span>). The 35-minute twin-otter flight provides jaw-dropping vistas of the snow-clad Himalayan giants before touching down on Lukla\'s dramatic mountain runway.',
      "At Lukla, meet our expedition support crew and porters. While the crowds turn north along the bustling Everest highway toward Phakding, our Mera Peak expedition heads south along the tranquil, seldom-traveled trails leading toward Paiya.",
      "We wind through fragrant pine, oak, and rhododendron forests, descending past traditional farming terraces and crossing wooden suspension bridges over clear mountain streams. The gentle walking allows your body to begin adapting to the Himalayan air before arriving at the charming settlement of Paiya (also known as Chutok) for a restful evening."
    ],
    photos: [
      { src: "../../images/treks/mera-peak/mera-peak-trekking-group-mountain-village-02.jpg", alt: "Lukla Mountain Airstrip and Trailhead" },
      { src: "../../images/treks/mera-peak/mera-peak-hiker-glacial-lake-03.jpg", alt: "Quiet Forest Trail South of Lukla" }
    ]
  },
  {
    num: "04",
    dayNum: 4,
    title: "Trek from Paiya to Pangkongma via Kari La Pass (3,145m)",
    subtitle: 'Paiya to Pangkongma – approximately <span data-altitude-m="2846">2,846 m / 9,337 ft</span>',
    metrics: [
      { icon: "clock", text: "Walking time: 5 to 6 hours" },
      { icon: "trending-up", text: "Distance: ~11 km | Elevation change: +550 m / -430 m" },
      { icon: "home", text: "Accommodation: Mountain Teahouse Lodge" },
      { icon: "activity", text: "Activity: Traverse Kari La Pass & bamboo thickets" }
    ],
    meta: [
      { icon: "coffee", text: "Meals: Breakfast, Lunch, Dinner" },
      { icon: "map-pin", text: 'Overnight: Pangkongma (<span data-altitude-m="2846">2,846 m</span>)' }
    ],
    desc: [
      'Setting out from Paiya, the trail descends briefly to a wooden bridge spanning the Paiya Khola before embarking on a steady uphill climb through dense bamboo groves and birch woodland to the Kari La Pass (<span data-altitude-m="3145">3,145 m</span>). From this vantage point, look back over the deep Dudh Koshi canyon.',
      "Descending through mossy forests alive with bird calls, the route traverses narrow hillside paths overlooking terraced farmland carved into steep mountain slopes. We pass small stone farmhouses belonging to the indigenous Rai and Sherpa communities.",
      "Our afternoon walk leads into Pangkongma, a picturesque Sherpa village perched on a high ridge. The village boasts a peaceful Buddhist monastery (Gompa) surrounded by fluttering prayer flags and carved mani stones, where monks regularly chant evening prayers."
    ],
    photos: [
      { src: "../../images/treks/mera-peak/mera-peak-trekking-group-mountain-village-02.jpg", alt: "Pangkongma Village and Monastery Ridge" },
      { src: "../../images/treks/mera-peak/mera-peak-climbers-snowy-trail-01.jpg", alt: "High Ridge Forest Path in Solukhumbu" }
    ]
  },
  {
    num: "05",
    dayNum: 5,
    title: "Cross Pangkongma La Pass (3,174m) & Trek to Nashing Dingma",
    subtitle: 'Pangkongma to Nashing Dingma – approximately <span data-altitude-m="2360">2,360 m / 7,742 ft</span>',
    metrics: [
      { icon: "clock", text: "Walking time: 6 to 7 hours" },
      { icon: "trending-up", text: "Distance: ~12 km | Elevation change: +450 m / -930 m" },
      { icon: "home", text: "Accommodation: Mountain Teahouse Lodge" },
      { icon: "activity", text: "Activity: Cross Pangkongma La & Hinku Khola descent" }
    ],
    meta: [
      { icon: "coffee", text: "Meals: Breakfast, Lunch, Dinner" },
      { icon: "map-pin", text: 'Overnight: Nashing Dingma (<span data-altitude-m="2360">2,360 m</span>)' }
    ],
    desc: [
      'We begin the morning with a gradual climb toward the Pangkongma La Pass (<span data-altitude-m="3174">3,174 m</span>). As you gain the pass, marked by colorful prayer flags, you are rewarded with your first breathtaking glimpses of Mera Peak\'s towering southern flank shimmering in the northern distance.',
      "From the pass, the trail undertakes a dramatic descent through virgin rhododendron, fir, and bamboo forests down into the deep gorge of the Hinku Khola river basin. The lush sub-tropical canopy provides habitat for red pandas, musk deer, and Himalayan pheasants.",
      "After crossing the river on a suspension bridge, we make a steady uphill push along switchback trails to the tranquil hamlet of Nashing Dingma. This lower altitude sleeping stop allows your cardiovascular system to recharge while taking in serene views of the surrounding wilderness."
    ],
    photos: [
      { src: "../../images/treks/mera-peak/mera-peak-hiker-glacial-lake-03.jpg", alt: "View toward Mera Peak from Pangkongma Ridge" },
      { src: "../../images/treks/mera-peak/mera-peak-trekking-group-mountain-village-02.jpg", alt: "Lush River Valleys of Solu" }
    ]
  },
  {
    num: "06",
    dayNum: 6,
    title: "Trek from Nashing Dingma to Chalem Kharka via Surke La Pass",
    subtitle: 'Nashing Dingma to Chalem Kharka – approximately <span data-altitude-m="3600">3,600 m / 11,811 ft</span>',
    metrics: [
      { icon: "clock", text: "Walking time: 5 to 6 hours" },
      { icon: "trending-up", text: "Distance: ~9 km | Elevation change: +1,240 m" },
      { icon: "home", text: "Accommodation: Mountain Teahouse / Trekker Lodge" },
      { icon: "activity", text: "Activity: Steady mountain climb through alpine pasture" }
    ],
    meta: [
      { icon: "coffee", text: "Meals: Breakfast, Lunch, Dinner" },
      { icon: "map-pin", text: 'Overnight: Chalem Kharka (<span data-altitude-m="3600">3,600 m</span>)' }
    ],
    desc: [
      "Leaving Nashing Dingma, today's route climbs steadily upward through fragrant pine and juniper forests toward the Surke La ridge. As elevation increases, the dense woods gradually transition into open sub-alpine terrain characterized by dwarf rhododendron and wild alpine herbs.",
      "The trail follows a pristine wilderness ridge with commanding views of the sprawling Hinku and Inkhu valleys below. You will rarely encounter other trekking groups along this route, allowing you to immerse yourself fully in the raw solitude of the eastern Himalaya.",
      "We arrive in Chalem Kharka, a summer grazing pasture (kharka) used by local yak herders. The crisp, clean mountain air and surrounding granite crags provide a scenic backdrop for an afternoon of rest, hydration, and acclimatization."
    ],
    photos: [
      { src: "../../images/treks/mera-peak/mera-peak-trekkers-glacial-lake-08.jpg", alt: "Alpine Pastures of Chalem Kharka" },
      { src: "../../images/treks/mera-peak/mera-peak-climbers-snowy-trail-01.jpg", alt: "Ascending Mountain Ridge Trails" }
    ]
  },
  {
    num: "07",
    dayNum: 7,
    title: "Trek from Chalem Kharka to Chunbu Kharka via Panch Pokhari Ridge",
    subtitle: 'Chalem Kharka to Chunbu Kharka – approximately <span data-altitude-m="4200">4,200 m / 13,779 ft</span>',
    metrics: [
      { icon: "clock", text: "Walking time: 5 to 6 hours" },
      { icon: "trending-up", text: "Distance: ~8 km | Elevation change: +600 m" },
      { icon: "home", text: "Accommodation: High-Altitude Lodge / Camp" },
      { icon: "activity", text: "Activity: High alpine ridge walking above tree line" }
    ],
    meta: [
      { icon: "coffee", text: "Meals: Breakfast, Lunch, Dinner" },
      { icon: "map-pin", text: 'Overnight: Chunbu Kharka (<span data-altitude-m="4200">4,200 m</span>)' }
    ],
    desc: [
      "Today we break through the tree line into the true high-alpine zone. The trail winds along rocky ridgelines with expansive vistas stretching east toward the Kangchenjunga range and north toward the glistening summits of the Barun and Hinku mountains.",
      "We pass sacred alpine tarns and the rugged trails leading toward the sacred pilgrimage lakes of Panch Pokhari. The terrain becomes rockier and more exposed, with icy streams carving through glacial boulders.",
      'We reach Chunbu Kharka at <span data-altitude-m="4200">4,200 m</span>. Sleeping above 4,000 meters for the first time on the expedition is a vital physiological milestone. Our guides conduct evening pulse oximetry readings, ensure warm herbal tea intake, and instruct everyone on breathing and thermal management.'
    ],
    photos: [
      { src: "../../images/treks/mera-peak/mera-peak-glacial-lake-mountain-09.jpg", alt: "High Alpine Landscape above Tree Line" },
      { src: "../../images/treks/mera-peak/mera-peak-hiker-glacial-lake-03.jpg", alt: "Sacred Alpine Tarns in Solukhumbu" }
    ]
  },
  {
    num: "08",
    dayNum: 8,
    title: "Trek from Chunbu Kharka Down to Kothe into the Main Hinku Valley",
    subtitle: 'Chunbu Kharka to Kothe – approximately <span data-altitude-m="3600">3,600 m / 11,811 ft</span>',
    metrics: [
      { icon: "clock", text: "Walking time: 6 to 7 hours" },
      { icon: "trending-up", text: "Distance: ~10 km | Elevation change: +200 m / -800 m" },
      { icon: "home", text: "Accommodation: Mountain Teahouse Lodge" },
      { icon: "activity", text: "Activity: Descent into the main Hinku River canyon" }
    ],
    meta: [
      { icon: "coffee", text: "Meals: Breakfast, Lunch, Dinner" },
      { icon: "map-pin", text: 'Overnight: Kothe (<span data-altitude-m="3600">3,600 m</span>)' }
    ],
    desc: [
      "We depart Chunbu Kharka and navigate rocky moraine trails before undertaking a long descent through stunted juniper scrub and moss-carpeted birch woodlands into the main glacial valley of the Hinku River.",
      "As we approach the valley floor, the roaring Hinku Khola emerges, tumbling over gigantic granite boulders. The canyon walls soar thousands of meters overhead, topped by shimmering hanging glaciers and granite pillars.",
      'We arrive in Kothe (<span data-altitude-m="3600">3,600 m</span>), the primary staging village of the Hinku Valley. Dropping back down to 3,600 meters provides welcome physiological relief, allowing your blood cells to replenish oxygen reserves efficiently. Settle into a comfortable riverside teahouse for hearty dal bhat and a restful sleep.'
    ],
    photos: [
      { src: "../../images/treks/mera-peak/mera-peak-trekking-group-mountain-village-02.jpg", alt: "Kothe Village in Hinku Valley" },
      { src: "../../images/treks/mera-peak/mera-peak-hiker-glacial-lake-03.jpg", alt: "Hinku River Valley Canyon" }
    ]
  },
  {
    num: "09",
    dayNum: 9,
    title: "Trek along the Hinku River from Kothe to Thangnak",
    subtitle: 'Kothe to Thangnak – approximately <span data-altitude-m="4356">4,356 m / 14,291 ft</span>',
    metrics: [
      { icon: "clock", text: "Walking time: 4 to 5 hours" },
      { icon: "trending-up", text: "Distance: ~9 km | Elevation change: +756 m" },
      { icon: "home", text: "Accommodation: Mountain Teahouse Lodge" },
      { icon: "activity", text: "Activity: Valley gorge walk past 200-year-old Lungsumgba Gompa" }
    ],
    meta: [
      { icon: "coffee", text: "Meals: Breakfast, Lunch, Dinner" },
      { icon: "map-pin", text: 'Overnight: Thangnak (<span data-altitude-m="4356">4,356 m</span>)' }
    ],
    desc: [
      'Following the west bank of the Hinku Khola, the trail heads north deeper into the high mountains. The scenery shifts dramatically as forested slopes recede, giving way to monumental U-shaped glacial valleys bordered by jagged peaks like Kusum Kanguru (<span data-altitude-m="6367">6,367 m</span>) and Kyashar (<span data-altitude-m="6770">6,770 m</span>).',
      "Along the trail, we stop at the 200-year-old Lungsumgba Gompa, a sacred Buddhist shrine carved beneath an enormous rock overhang. Climbers and Sherpas traditionally light butter lamps and pray here for a safe and auspicious mountain ascent.",
      'Continuing past wide lateral moraines, we arrive at Thangnak (<span data-altitude-m="4356">4,356 m</span>), a seasonal settlement nestled at the foot of Charpate Himal. Thangnak serves as our primary acclimatization base before pushing into the extreme alpine zone.'
    ],
    photos: [
      { src: "../../images/treks/mera-peak/mera-peak-trekkers-glacial-lake-08.jpg", alt: "Lungsumgba Gompa Rock Shrine in Hinku Valley" },
      { src: "../../images/treks/mera-peak/mera-peak-glacial-lake-mountain-09.jpg", alt: "Thangnak Settlement beneath Charpate Himal" }
    ]
  },
  {
    num: "10",
    dayNum: 10,
    title: "Acclimatization & Exploration Day in Thangnak (Hike to Charpate Lake 5,000m)",
    subtitle: 'Thangnak – <span data-altitude-m="4356">4,356 m / 14,291 ft</span> (Hike to <span data-altitude-m="5000">5,000 m</span>)',
    metrics: [
      { icon: "clock", text: "Hiking time: 4 to 5 hours" },
      { icon: "trending-up", text: "Elevation gain: +644 m / -644 m" },
      { icon: "home", text: "Accommodation: Mountain Teahouse Lodge" },
      { icon: "activity", text: "Activity: Active acclimatization hike to Sabai Tsho glacial lake" }
    ],
    meta: [
      { icon: "coffee", text: "Meals: Breakfast, Lunch, Dinner" },
      { icon: "map-pin", text: 'Overnight: Thangnak (<span data-altitude-m="4356">4,356 m</span>)' }
    ],
    desc: [
      "To ensure your body synthesizes essential red blood cells and adapts smoothly to the thinning atmosphere, today is an active acclimatization day following the golden mountaineering rule: 'Climb high, sleep low.'",
      'After a relaxed breakfast, we take an acclimatization hike up the lateral moraine of the Dig Glacier toward the turquoise waters of Sabai Tsho glacial lake and the viewpoints around Charpate Himal (<span data-altitude-m="5000">5,000 m</span>). The vista of Mera\'s glaciers and the towering north face of Kyashar is awe-inspiring.',
      "We spend an hour at the high viewpoint soaking in the panoramic grandeur and allowing our bodies to adjust, before leisurely descending back to Thangnak for a hot lunch, hydration, and an afternoon of resting and gear organization."
    ],
    photos: [
      { src: "../../images/treks/mera-peak/mera-peak-hiker-glacial-lake-03.jpg", alt: "Sabai Tsho Glacial Lake near Thangnak" },
      { src: "../../images/treks/mera-peak/mera-peak-glacial-lake-mountain-09.jpg", alt: "Acclimatization Viewpoint overlooking Mera Glaciers" }
    ]
  },
  {
    num: "11",
    dayNum: 11,
    title: "Trek from Thangnak to Khare / Mera Base Camp (5,045m)",
    subtitle: 'Thangnak to Khare – approximately <span data-altitude-m="5045">5,045 m / 16,551 ft</span>',
    metrics: [
      { icon: "clock", text: "Walking time: 4 to 5 hours" },
      { icon: "trending-up", text: "Distance: ~6 km | Elevation change: +689 m" },
      { icon: "home", text: "Accommodation: High-Altitude Teahouse Lodge" },
      { icon: "activity", text: "Activity: Moraine traverse into Mera Alpine Base Camp" }
    ],
    meta: [
      { icon: "coffee", text: "Meals: Breakfast, Lunch, Dinner" },
      { icon: "map-pin", text: 'Overnight: Khare (<span data-altitude-m="5045">5,045 m</span>)' }
    ],
    desc: [
      "From Thangnak, we follow the lateral moraine of the Dig Glacier, climbing steadily toward the snout of the Hinku Nup glacier. The trail crosses boulder-strewn moraine fields with views of hanging glaciers cascading off the Mera wall.",
      'As we climb higher, the colossal bulk of Mera Peak Central (<span data-altitude-m="6476">6,476 m</span>) and Mera North dominates the northern sky. The air feels noticeably thinner, demanding a deliberate, rhythmic walking pace and controlled breathing.',
      'We arrive in Khare (<span data-altitude-m="5045">5,045 m</span>), the bustling high-altitude staging camp for all Mera Peak climbs. Khare features several well-equipped stone lodges, bakeries, and gear rental shops. You will check into your lodge, enjoy warm garlic soup (renowned for altitude acclimatization), and take in the dramatic icefall looming directly above the settlement.'
    ],
    photos: [
      { src: "../../images/treks/mera-peak/mera-peak-trekkers-glacial-lake-08.jpg", alt: "Trekking Moraine toward Khare Base Camp" },
      { src: "../../images/treks/mera-peak/mera-peak-peak-sunrise-snowfield-04.jpg", alt: "Mera Peak Looming above Khare Lodge" }
    ]
  },
  {
    num: "12",
    dayNum: 12,
    title: "Pre-Climbing Glacier Training & Rest Day in Khare (5,045m)",
    subtitle: 'Khare – <span data-altitude-m="5045">5,045 m / 16,551 ft</span>',
    metrics: [
      { icon: "clock", text: "Training duration: 3 to 4 hours" },
      { icon: "home", text: "Accommodation: High-Altitude Teahouse Lodge" },
      { icon: "activity", text: "Activity: Glacier ropes, crampons & jumar ascending clinic" }
    ],
    meta: [
      { icon: "coffee", text: "Meals: Breakfast, Lunch, Dinner" },
      { icon: "map-pin", text: 'Overnight: Khare (<span data-altitude-m="5045">5,045 m</span>)' }
    ],
    desc: [
      "Today is a pivotal day dedicated to your summit readiness. After breakfast, our certified Climbing Sherpas lead you to a nearby glacier slope or steep moraine ice pitch for comprehensive hands-on alpine skills training.",
      "You will practice: (1) Securing double mountaineering boots and strapping crampons securely, (2) French and front-pointing crampon walking techniques, (3) Self-arrest techniques using your ice axe, (4) Ascending steep fixed lines using a mechanical ascender (jumar) and safety sling, and (5) Controlled abseiling (rappelling) with a figure-eight descender.",
      "Our guides also simulate rope-team glacier travel, emphasizing communication, proper rope tension, and crevasse awareness. The afternoon is spent resting, drinking abundant fluids, and packing your summit duffel and summit daypack with essentials (thermal layers, headlamp, extra lithium batteries, insulated thermos flask)."
    ],
    photos: [
      { src: "../../images/treks/mera-peak/mera-peak-climbers-snowy-trail-01.jpg", alt: "Glacier Skills Practice and Crampon Clinic at Khare" },
      { src: "../../images/treks/mera-peak/mera-peak-summit-route-snow-07.jpg", alt: "Ascender and Fixed Rope Practice" }
    ]
  },
  {
    num: "13",
    dayNum: 13,
    title: "Trek from Khare to Mera Peak High Camp (5,780m) via Mera La (5,415m)",
    subtitle: 'Khare to High Camp – approximately <span data-altitude-m="5780">5,780 m / 18,963 ft</span>',
    metrics: [
      { icon: "clock", text: "Climbing time: 5 to 6 hours" },
      { icon: "trending-up", text: "Distance: ~5 km | Elevation change: +735 m" },
      { icon: "home", text: "Accommodation: 4-Season Geodesic Expedition Tents" },
      { icon: "activity", text: "Activity: Cross Mera La glacier onto high camp rock ridge" }
    ],
    meta: [
      { icon: "coffee", text: "Meals: Breakfast, Lunch, Dinner (High-altitude camp meals)" },
      { icon: "map-pin", text: 'Overnight: Mera High Camp (<span data-altitude-m="5780">5,780 m</span>)' }
    ],
    desc: [
      "We depart Khare climbing up boulder fields and steep scree toward the Mera Glacier snout. Here, we strap on our crampons, rope up in guided teams, and step onto the vast, gleaming ice of the Mera Glacier.",
      'The ascent up to Mera La Pass (<span data-altitude-m="5415">5,415 m</span>) is a steady, gentle glacier plod over firm snowfields. Reaching the pass opens up breathtaking views of the Hongu Valley and the formidable south face of Mount Chamlang (<span data-altitude-m="7319">7,319 m</span>).',
      'From Mera La, we continue ascending along the glaciated slope to Mera High Camp (<span data-altitude-m="5780">5,780 m</span>), nestled behind a rocky promontory that provides shelter from prevailing winds. Our Sherpa team has already erected sturdy 4-season geodesic expedition tents. As evening arrives, witness one of the planet\'s most spectacular sunsets, with Everest, Lhotse, Makalu, and Baruntse glowing in deep crimson light.',
      "Enjoy a hot, calorie-dense dinner, fill thermoses with boiling water, and retire early into your sub-zero sleeping bag for a few hours of rest before the midnight wake-up call."
    ],
    photos: [
      { src: "../../images/treks/mera-peak/mera-peak-summit-route-snow-07.jpg", alt: "Climbing toward Mera La Glacier" },
      { src: "../../images/treks/mera-peak/mera-peak-peak-sunrise-snowfield-04.jpg", alt: "Sunset Panorama from Mera High Camp at 5,780m" }
    ]
  },
  {
    num: "14",
    dayNum: 14,
    title: "Summit Push: Mera Peak Central (6,476m) & Descent to Khare (5,045m)",
    subtitle: 'High Camp to Summit (<span data-altitude-m="6476">6,476 m</span>) & Return to Khare (<span data-altitude-m="5045">5,045 m</span>)',
    metrics: [
      { icon: "clock", text: "Push time: 9 to 11 hours round trip" },
      { icon: "trending-up", text: "Distance: ~10 km | Elevation change: +696 m / -1,431 m" },
      { icon: "home", text: "Accommodation: High-Altitude Teahouse Lodge" },
      { icon: "activity", text: "Activity: 2:00 AM alpine summit push & 5x 8,000m panorama" }
    ],
    meta: [
      { icon: "coffee", text: "Meals: Light Breakfast, Summit Snacks, Hot Lunch & Dinner" },
      { icon: "map-pin", text: 'Overnight: Khare (<span data-altitude-m="5045">5,045 m</span>)' }
    ],
    desc: [
      "Summit Day! The wake-up call comes at 1:30 AM. After hot porridge and steaming tea, we gear up: double boots, crampons, harness, windproof down layers, and headlamps. Roped together with our Climbing Sherpas (1:2 ratio), we step into the sub-zero darkness under an infinite sea of stars around 2:00 to 2:30 AM.",
      "The route ascends steady 30-degree snow slopes across the central glacier bowl. The air is bone-chillingly cold and thin, demanding steady breathing, rhythmic steps, and unyielding mental focus. As the eastern horizon transitions from deep indigo to blazing gold, the first sunbeams illuminate the towering crown of Kanchenjunga.",
      'The final 40-meter summit ridge steepens to approximately 40 to 45 degrees. Here, our Sherpas fix a safety rope. Clipping your jumar onto the line, you make the final exhilarating push onto the summit dome of Mera Peak Central (<span data-altitude-m="6476">6,476 m / 21,247 ft</span>).',
      'Standing at the pinnacle of Nepal\'s highest trekking peak, you are surrounded by an unmatched 360-degree amphitheater of five 8,000-meter giants: Mount Everest (<span data-altitude-m="8848">8,848 m</span>), Lhotse (<span data-altitude-m="8516">8,516 m</span>), Makalu (<span data-altitude-m="8481">8,481 m</span>), Cho Oyu (<span data-altitude-m="8188">8,188 m</span>), and Kanchenjunga (<span data-altitude-m="8586">8,586 m</span>), along with Baruntse, Chamlang, and Ama Dablam. After celebratory photos and summit embrace, we carefully abseil and retrace our steps down to High Camp for hot soup, then continue descending to the comfort of Khare for a triumphant celebration and deeply earned sleep.'
    ],
    photos: [
      { src: "../../images/treks/mera-peak/mera-peak-climbers-summit-banner-05.jpg", alt: "Climbers Celebrating on Mera Peak Central Summit at 6,476m" },
      { src: "../../images/treks/mera-peak/mera-peak-himalayan-summit-panorama-12.jpg", alt: "Unmatched 360-Degree Himalayan Mountain Panorama" },
      { src: "../../images/treks/mera-peak/mera-peak-climbers-sunrise-snowfield-10.jpg", alt: "Sunrise Summit Push on Mera Glacier" },
      { src: "../../images/treks/mera-peak/mera-peak-climbers-summit-11.jpg", alt: "Mera Peak Summit Ridge and 8,000m Giants" }
    ]
  },
  {
    num: "15",
    dayNum: 15,
    title: "Contingency / Weather Reserve Day in Khare (5,045m)",
    subtitle: 'Khare – <span data-altitude-m="5045">5,045 m / 16,551 ft</span>',
    metrics: [
      { icon: "clock", text: "Reserve day for summit safety" },
      { icon: "home", text: "Accommodation: High-Altitude Teahouse Lodge" },
      { icon: "activity", text: "Activity: Built-in weather & acclimatization buffer" }
    ],
    meta: [
      { icon: "coffee", text: "Meals: Breakfast, Lunch, Dinner" },
      { icon: "map-pin", text: 'Overnight: Khare (<span data-altitude-m="5045">5,045 m</span>)' }
    ],
    desc: [
      "Himalayan weather can be unpredictable. High winds, heavy snowfall, or individual acclimatization delays can occasionally disrupt a summit schedule. Having this dedicated Day 15 contingency day built directly into the itinerary is a key reason for our outstanding summit success rate.",
      "If the summit push was postponed on Day 14 due to adverse conditions, we launch our second summit bid today with renewed energy and favorable weather windows.",
      "If the summit was successfully achieved on Day 14 as scheduled, this day becomes a glorious, pressure-free rest day in Khare. Relax by the teahouse stove, share stories and photos with fellow climbers, take short walks around the moraine, or enjoy an extra leisurely descent pace down the valley."
    ],
    photos: [
      { src: "../../images/treks/mera-peak/mera-peak-glacial-lake-mountain-09.jpg", alt: "High Mountain Weather at Khare" },
      { src: "../../images/treks/mera-peak/mera-peak-trekkers-glacial-lake-08.jpg", alt: "Relaxing at Khare Base Camp" }
    ]
  },
  {
    num: "16",
    dayNum: 16,
    title: "Trek from Khare Down to Kothe (3,600m)",
    subtitle: 'Khare to Kothe – approximately <span data-altitude-m="3600">3,600 m / 11,811 ft</span>',
    metrics: [
      { icon: "clock", text: "Walking time: 5 to 6 hours" },
      { icon: "trending-up", text: "Distance: ~15 km | Elevation change: -1,445 m" },
      { icon: "home", text: "Accommodation: Mountain Teahouse Lodge" },
      { icon: "activity", text: "Activity: Rapid descent back into rich oxygen and forest" }
    ],
    meta: [
      { icon: "coffee", text: "Meals: Breakfast, Lunch, Dinner" },
      { icon: "map-pin", text: 'Overnight: Kothe (<span data-altitude-m="3600">3,600 m</span>)' }
    ],
    desc: [
      "With the summit triumph behind you, we retrace our steps down the Hinku Valley. Moving downhill with increasing atmospheric oxygen makes walking feel effortless and invigorating compared to the arduous ascent.",
      "We hike past the Dig Glacier moraines and Thangnak, pausing for tea and a hot lunch while looking back at the colossal rock wall of Charpate and Kyashar. Continuing south along the Hinku Khola river banks, the alpine scrub gradually gives way to birch, juniper, and fragrant pine forests.",
      'We arrive back at Kothe (<span data-altitude-m="3600">3,600 m</span>). The thick, oxygen-rich air at 3,600 meters feels like a luxury. Tonight, celebrate with your Sherpa guides and porters over a festive dinner and local Chhyang (Himalayan rice wine) or Tongba.'
    ],
    photos: [
      { src: "../../images/treks/mera-peak/mera-peak-trekking-group-mountain-village-02.jpg", alt: "Hinku Valley Return Trail to Kothe" },
      { src: "../../images/treks/mera-peak/mera-peak-hiker-glacial-lake-03.jpg", alt: "Scenic Riverbanks of Hinku Khola" }
    ]
  },
  {
    num: "17",
    dayNum: 17,
    title: "Trek from Kothe to Thuli Kharka & Cross Zatrwa La Pass (4,610m) to Lukla",
    subtitle: 'Kothe to Lukla via Zatrwa La – approximately <span data-altitude-m="2850">2,850 m / 9,350 ft</span>',
    metrics: [
      { icon: "clock", text: "Walking time: 7 to 9 hours" },
      { icon: "trending-up", text: "Distance: ~16 km | Elevation change: +1,010 m / -1,760 m" },
      { icon: "home", text: "Accommodation: Deluxe Mountain Lodge (Lukla)" },
      { icon: "activity", text: "Activity: High mountain pass crossing over Zatrwa La into Lukla" }
    ],
    meta: [
      { icon: "coffee", text: "Meals: Breakfast, Lunch, Dinner" },
      { icon: "map-pin", text: 'Overnight: Lukla (<span data-altitude-m="2850">2,850 m</span>)' }
    ],
    desc: [
      'Today presents an exciting, rewarding finale to our mountain trek. Rather than retracing the long southern loop via Pangkongma, our expedition tackles the direct alpine pass of Zatrwa La (<span data-altitude-m="4610">4,610 m</span>).',
      'Setting off early from Kothe, the trail climbs steeply westward out of the Hinku Valley through dense rhododendron and birch forests to the high pasture of Thuli Kharka (<span data-altitude-m="4300">4,300 m</span>). From here, a rocky traverse leads to the crest of the Zatrwa La Pass. Standing at the pass, decorated with prayer flags, enjoy a spectacular final panorama looking across both the Hinku and Dudh Koshi river systems.',
      "Crossing the pass, we make a steady descent toward the Khumbu Valley. Through fragrant pine groves and welcoming mani walls, the lights of Lukla come into view. We check into a comfortable lodge in Lukla, enjoy hot showers, and host a farewell banquet honoring our heroic Sherpas and porters."
    ],
    photos: [
      { src: "../../images/treks/mera-peak/mera-peak-climbers-snowy-trail-01.jpg", alt: "Crossing Zatrwa La Pass at 4,610m" },
      { src: "../../images/treks/mera-peak/mera-peak-trekking-group-mountain-village-02.jpg", alt: "Arriving back in Lukla for Celebration" }
    ]
  },
  {
    num: "18",
    dayNum: 18,
    title: "Fly from Lukla to Kathmandu (1,355m) & Hotel Transfer",
    subtitle: 'Lukla to Kathmandu – <span data-altitude-m="1355">1,355 m / 4,445 ft</span>',
    metrics: [
      { icon: "clock", text: "Flight time: 35 minutes" },
      { icon: "home", text: "Accommodation: 3-Star Deluxe Hotel (Kathmandu)" },
      { icon: "activity", text: "Activity: Scenic mountain flight, hotel transfer & farewell dinner" }
    ],
    meta: [
      { icon: "coffee", text: "Meals: Breakfast & Farewell Dinner" },
      { icon: "map-pin", text: 'Overnight: Kathmandu (<span data-altitude-m="1355">1,355 m</span>)' }
    ],
    desc: [
      "Board your early morning flight from Lukla back to Kathmandu (or Ramechhap during peak aviation seasons). As the aircraft lifts off, look out the window for your final aerial glimpses of the towering snow peaks of the Everest and Makalu regions.",
      "Upon landing in Kathmandu, our private vehicle transfers you back to your hotel. The remainder of the day is yours to enjoy at leisure: indulge in a rejuvenating Ayurvedic massage, hunt for souvenirs and cashmere in Thamel, or simply relax by the pool.",
      'In the evening, gather for an intimate farewell celebration hosted by Namaste Hiking Trek. We present each climber with an official Nepal Mountaineering Association (NMA) Summit Certificate, celebrating your crowning achievement atop Mera Peak Central (<span data-altitude-m="6476">6,476 m</span>)!'
    ],
    photos: [
      { src: "../../images/treks/mera-peak/mera-peak-climbers-summit-banner-05.jpg", alt: "Official NMA Mera Peak Climbing Summit Celebration" },
      { src: "../../images/treks/mera-peak/mera-peak-trekking-group-mountain-village-02.jpg", alt: "Farewell in Kathmandu" }
    ]
  }
];

function renderItineraryDay(d) {
  const activeClass = d.dayNum === 1 ? " active" : "";
  
  const metricsHtml = d.metrics.map(m => {
    let iconSvg = '';
    if (m.icon === 'clock') {
      iconSvg = '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>';
    } else if (m.icon === 'trending-up') {
      iconSvg = '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>';
    } else if (m.icon === 'home') {
      iconSvg = '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>';
    } else {
      iconSvg = '<polygon points="12 2 2 22 22 22"></polygon>';
    }
    return `                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          ${iconSvg}
                        </svg>
                        <span>${m.text}</span>
                      </div>`;
  }).join('\n');

  const metaHtml = d.meta.map(m => {
    let iconSvg = '';
    if (m.icon === 'coffee') {
      iconSvg = '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>';
    } else {
      iconSvg = '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>';
    }
    return `                      <div class="itinerary-meta-box-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          ${iconSvg}
                        </svg>
                        <span>${m.text}</span>
                      </div>`;
  }).join('\n');

  const descHtml = d.desc.map(p => `                      <p>${p}</p>`).join('\n');

  const photosHtml = d.photos.map(p => {
    return `                      <div class="itinerary-photo-wrapper">
                        <img loading="lazy" src="${p.src}" alt="${p.alt}">
                      </div>`;
  }).join('\n');

  return `              <!-- Day ${d.num} -->
              <div class="itinerary-card${activeClass}">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day ${d.dayNum}:</span> ${d.title}
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      ${d.subtitle}
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
                    <div class="itinerary-metrics-list">
${metricsHtml}
                    </div>

                    <div class="itinerary-meta-box">
${metaHtml}
                    </div>

                    <div class="itinerary-description">
${descHtml}
                    </div>

                    <div class="itinerary-photos-grid">
${photosHtml}
                    </div>
                  </div>
                </div>
              </div>`;
}

const renderedCards = daysData.map(renderItineraryDay).join('\n\n');

const newItinerarySection = `<!-- Section 2: Itinerary -->
          <section id="section-itinerary" class="trek-detail-section">
            <h2 class="trek-section-title">Mera Peak Climbing Itinerary: Day by Day Details</h2>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-top: 16px; margin-bottom: 16px; line-height: 1.7;">
              Our 18-day Mera Peak expedition itinerary is engineered with precision around gradual physiological acclimatization, technical preparation, and mountain safety. Rather than rushing directly up steep trails, our route loops southward from Lukla through the untouched, peaceful rhododendron forests of the lower Hinku Valley via Paiya and Pangkongma before ascending through Kothe to Khare Base Camp at <span data-altitude-m="5045">5,045 m (16,551 ft)</span>.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The itinerary includes 15 scheduled mountain days—featuring an active acclimatization hike to Sabai Tsho Lake (<span data-altitude-m="5000">5,000 m</span>) in Thangnak, a dedicated glacier skills training day at Khare, an overnight at Mera High Camp (<span data-altitude-m="5780">5,780 m</span>), our 2:00 AM summit push to Mera Peak Central (<span data-altitude-m="6476">6,476 m</span>), a built-in Day 15 weather contingency day, and a scenic return traverse over the Zatrwa La Pass (<span data-altitude-m="4610">4,610 m</span>) directly back into Lukla.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
              Daily walking times and stage distances are approximate reference values. Pacing is carefully managed by our certified Climbing Sherpas based on group fitness, altitude response, and prevailing snow conditions to maximize comfort, camaraderie, and summit success.
            </p>

            <h3 style="font-size: 1.35rem; color: var(--color-primary-navy); font-weight: 700; margin-top: 32px; margin-bottom: 14px; line-height: 1.35;">
              Before Your Mera Peak Expedition Starts
            </h3>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The departure date you select is your arrival date in Kathmandu (Day 1). Day 2 is fully dedicated to official expedition permits, personal gear audits, and technical climbing briefings before flying to Lukla on Day 3.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              During your pre-trip briefing in Kathmandu, your lead Climbing Sherpa will review the daily profile, cold weather gear protocols, rope techniques, emergency evacuation procedures, and answer any final questions. Missing items can be rented or purchased in Thamel with professional guidance.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 30px; line-height: 1.7;">
              During peak trekking windows (October–November and April–May), Nepal's Civil Aviation Authority may route Lukla flights via Manthali/Ramechhap Airport (a scenic 4-hour pre-dawn drive from Kathmandu). We handle all ground logistics, private vehicle transfers, and flight boarding arrangements seamlessly.
            </p>
            
            <div class="itinerary-timeline">
${renderedCards}
            </div>

            <!-- Custom Trip CTA -->
            <div class="custom-trip-cta">
              <div class="custom-trip-cta-left">
                <div class="cta-sparkle-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3>Looking for a Tailor-Made Mera Peak Expedition?</h3>
                <p>Want a private climb, an extended traverse over Amphu Lapcha Pass into Everest, or custom departure dates? Tell us your group size and preferences — our alpine specialists will design the perfect custom expedition plan within 24 hours.</p>
              </div>
              <div class="custom-trip-cta-right">
                <div class="cta-dotted-arc"></div>
                <a href="#" class="btn-plan-trip-cyan open-inquiry-modal-btn" data-inquiry-type="Tailor-Made Custom Trip">Plan Your Custom Climb</a>
              </div>
            </div>
          </section>\n\n          `;

html = html.substring(0, startIndex) + newItinerarySection + html.substring(endIndex);

fs.writeFileSync('trek/mera-peak-climbing-trek/index.html', html, 'utf8');
console.log('Successfully updated Section 2: Itinerary for Mera Peak!');
