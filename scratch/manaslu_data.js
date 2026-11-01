// Data repository for Manaslu Circuit Trek based directly on the provided dossier
module.exports = {
  meta: {
    title: "Manaslu Circuit Trek (14 Days) — Namaste Hiking Trek",
    description: "Complete 14-day Manaslu Circuit Trek guide: circumnavigate Mount Manaslu (8,163m), cross Larkya La Pass (5,106m), explore remote Nubri monasteries, and trek Budhi Gandaki Valley.",
    canonical: "https://namastehikingtrek.com/trek/manaslu-circuit-trek/",
    ogImage: "https://namastehikingtrek.com/images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-04.jpg"
  },
  
  hero: {
    regionPill: "Manaslu Region, Gorkha • High-Altitude Himalayan Circuit",
    h1: "Manaslu Circuit Trek",
    leadText: "The Manaslu Circuit Trek is a high-altitude Himalayan trekking journey centered on Mount Manaslu, the world's eighth-highest mountain at 8,163 m. The route connects the deep river gorges of the Budhi Gandaki Valley with the alpine Marsyangdi Valley over Larkya La Pass (5,106 m), creating a complete wilderness circumnavigation through untouched Tibetan Buddhist Nubri communities.",
    expandText: "This itinerary features fourteen route days from Kathmandu departure to Kathmandu return. Acclimatization is built in at Samagaon (3,530 m) and Samdo (3,860 m), with Dharamsala (4,460 m) serving as the highest scheduled overnight before the daytime crossing of Larkya La. All permits (Manaslu RAP, MCAP, ACAP, TIMS) and a licensed trekking guide are fully coordinated for your party.",
    facts: [
      { label: "Duration", value: "14 days", icon: "clock" },
      { label: "Difficulty", value: "Challenging", icon: "activity" },
      { label: "Max Altitude", value: "5,106 m / 16,752 ft", icon: "mountain", altM: 5106 },
      { label: "Destination", value: "Manaslu, Gorkha", icon: "map-pin" },
      { label: "Activity", value: "Circuit Trekking", icon: "compass" },
      { label: "Accommodation", value: "Mountain Teahouses", icon: "home" },
      { label: "Transport", value: "Overland 4WD Drive", icon: "truck" },
      { label: "Meals", value: "All Meals on Trek", icon: "coffee" },
      { label: "Best Seasons", value: "Sep–Nov & Mar–May", icon: "calendar" },
      { label: "Trek Starts", value: "Machha Khola (~900 m)", icon: "play" },
      { label: "Trek Ends", value: "Dharapani (~1,860 m)", icon: "flag" },
      { label: "Permits", value: "RAP, MCAP, ACAP, TIMS", icon: "file-text" }
    ]
  },

  overviewTable: [
    { feature: "Trek name", details: "Manaslu Circuit Trek" },
    { feature: "Main mountain", details: "Mount Manaslu" },
    { feature: "Mount Manaslu elevation", details: "8,163 m (26,781 ft)" },
    { feature: "Highest point of trek", details: "Larkya La Pass, approximately 5,106 m (16,752 ft)" },
    { feature: "Trek region", details: "Manaslu, Gorkha District, Nepal" },
    { feature: "Main valley", details: "Budhi Gandaki River Valley" },
    { feature: "Approximate circuit distance", details: "170–180 km (approx. 177 km standard)" },
    { feature: "Common itinerary length", details: "Around 14 route days (Kathmandu to Kathmandu)" },
    { feature: "Trek character", details: "High-altitude Himalayan wilderness circuit" },
    { feature: "Conservation area", details: "Manaslu Conservation Area (MCAP) & ACAP exit" },
    { feature: "Major cultural region", details: "Nubri (Tibetan Buddhist heritage)" },
    { feature: "Main high-altitude settlements", details: "Samagaon (3,530 m) and Samdo (3,860 m)" },
    { feature: "Major pass", details: "Larkya La (5,106 m / 16,752 ft)" },
    { feature: "Main post-pass area", details: "Bimthang (3,720 m) and Marsyangdi Valley" },
    { feature: "Common extension", details: "Tsum Valley (Sacred Valley of Non-Violence)" }
  ],

  highlights: [
    {
      title: "Circumnavigation of Mount Manaslu (8,163 m)",
      desc: "Rather than an out-and-back route, you complete a continuous 360-degree circumnavigation of the world's eighth-highest mountain, admiring its imposing double-peaked summit from lower river canyons, high glacial cirques, and alpine pastures."
    },
    {
      title: "Crossing the Dramatic Larkya La Pass (5,106 m)",
      desc: "The pinnacle stage of the circuit leads across the high moraines of Larkya Glacier to the prayer-flag strewn summit of Larkya La at 5,106 m, unveiling breathtaking panoramic vistas of Himlung Himal, Cheo Himal, Kang Guru, and Annapurna II."
    },
    {
      title: "Living Tibetan Buddhist Culture in Nubri",
      desc: "Immerse yourself in authentic ancient Buddhist culture across Namrung, Lho, and Samagaon. Walk past intricately carved centuries-old mani walls, spinning prayer wheels, and historic monasteries like Ribung Gompa and Pungyen Gompa."
    },
    {
      title: "Two Dedicated Acclimatization Hubs",
      desc: "A safe altitude progression featuring scheduled multi-night acclimatization stays at Samagaon (3,530 m) and Samdo (3,860 m). Take active side hikes toward Birendra Glacier Lake and the ancient Tibetan trading trail before tackling the high pass."
    },
    {
      title: "Deep River Gorges & Suspension Bridges",
      desc: "Experience the thrilling engineering of the Budhi Gandaki corridor, crossing towering suspension bridges suspended hundreds of feet above churning glacial torrents, alongside cascading waterfalls and sheer cantilevered cliff walkways."
    },
    {
      title: "Ecological Transitions Across Five Climatic Zones",
      desc: "Witness extraordinary natural biodiversity as the trail ascends from subtropical river valleys, terrace farmlands, and lush rhododendron-oak forests through subalpine pine zones into stark, barren high-altitude arctic moraines."
    }
  ],

  itinerary: [
    {
      day: 1,
      title: "Drive from Kathmandu to Machha Khola via Dhading Besi & Arughat",
      subtitle: "Scenic Mountain Highway & River Valley Road Corridor",
      route: "Kathmandu (1,400 m) to Machha Khola (900 m)",
      hours: "7–9 hrs road drive",
      distance: "Approx. 140 km overland drive",
      maxElevation: "1,400 m down to 900 m",
      accommodation: "Standard Mountain Teahouse in Machha Khola",
      image: "../../images/treks/manaslu-circuit/manaslu-circuit-mountain-village-dawn-12.jpg",
      imageAlt: "Overland Mountain Road Journey Leading to Machha Khola Trailhead",
      desc: "Your 14-day Manaslu Circuit journey begins with an early morning scenic drive from Kathmandu. Leaving the capital behind, the route travels west along the paved Prithvi Highway following the Trishuli River before turning north at Malekhu towards Dhading Besi. From Dhading, the road transitions into a rugged mountain track winding through rural hill settlements, terraced farmlands, and green subtropical valleys down to Arughat on the banks of the Budhi Gandaki River. Continuing upstream along the river corridor, we arrive at Machha Khola (Fish Stream) at approximately 900 m. This low starting elevation provides an ideal baseline for the gradual altitude progression that will unfold over the coming two weeks.",
      meals: "Lunch & Dinner included",
      overnight: "Machha Khola (approx. 900 m / 2,952 ft)"
    },
    {
      day: 2,
      title: "Trek from Machha Khola to Jagat via Khorlabesi & Tatopani",
      subtitle: "Lower Budhi Gandaki River Gorge & Natural Hot Springs",
      route: "Machha Khola (900 m) to Jagat (1,340 m)",
      hours: "6–7 hrs trekking",
      distance: "Approx. 14 km (8.7 miles)",
      maxElevation: "1,340 m (4,396 ft)",
      accommodation: "Traditional Teahouse in Jagat",
      image: "../../images/treks/manaslu-circuit/manaslu-circuit-river-gorge-08.jpg",
      imageAlt: "Trekkers traversing the rugged riverside canyon of the Budhi Gandaki",
      desc: "Today marks your first full day on foot following the dramatic Budhi Gandaki Valley. The trail begins with undulating stone staircases, crossing small streams and passing through the terraced fields of Khorlabesi. A short climb brings us to Tatopani ('hot water' in Nepali), where natural hot mineral water spouts flow from the rocky cliffs beside the trail. We cross a suspension bridge over the torrential river, climb a wide staircase over a rocky ridge toward Dovan, and navigate riverside gravel paths and cantilevered sections. The gorge begins to narrow noticeably as we approach Jagat at 1,340 m, a beautifully clean, stone-paved village featuring the first official conservation and police checkpoint where your restricted area permits are verified.",
      meals: "Breakfast, Lunch & Dinner included",
      overnight: "Jagat (approx. 1,340 m / 4,396 ft)"
    },
    {
      day: 3,
      title: "Trek from Jagat to Deng via Philim & Pewa",
      subtitle: "Pine Forests, Deep Gorges & Entry to Buddhist Culture",
      route: "Jagat (1,340 m) to Deng (1,860 m)",
      hours: "6–8 hrs trekking",
      distance: "Approx. 19 km (11.8 miles)",
      maxElevation: "1,860 m (6,102 ft)",
      accommodation: "Local Mountain Teahouse in Deng",
      image: "../../images/treks/manaslu-circuit/manaslu-circuit-suspension-bridge-10.jpg",
      imageAlt: "High Steel Suspension Bridge crossing deep river gorge near Philim",
      desc: "Leaving Jagat, we ascend over a rocky spur to Salleri, offering expansive views of Sringi Himal (7,187 m). We descend to Sirdibas, an ancient Gurung settlement where traditional stone houses and drying corn cobs line the paths. Crossing a dramatic long suspension bridge to the eastern bank, we climb steeply up to Philim (1,570 m), the largest and most prosperous administrative village of the lower valley with its prominent secondary school and Japanese-assisted health post. Beyond Philim, the trail enters a dramatically narrow gorge where the river thunders through sheer rock clefts. We cross and recross the Budhi Gandaki over high suspension bridges, pass through bamboo groves at Ekle Bhatti and Pewa, and make a steady ascent to Deng (1,860 m), where the first glimpses of Tibetan Buddhist culture become visible.",
      meals: "Breakfast, Lunch & Dinner included",
      overnight: "Deng (approx. 1,860 m / 6,102 ft)"
    },
    {
      day: 4,
      title: "Trek from Deng to Namrung via Ghap",
      subtitle: "Himalayan Forest Ascent & Gateway to Upper Nubri",
      route: "Deng (1,860 m) to Namrung (2,630 m)",
      hours: "6–7 hrs trekking",
      distance: "Approx. 19.5 km (12.1 miles)",
      maxElevation: "2,630 m (8,628 ft)",
      accommodation: "Teahouse in Namrung (Upper Nubri gateway)",
      image: "../../images/treks/manaslu-circuit/manaslu-circuit-mountain-village-landscape-02.jpg",
      imageAlt: "Lush rhododendron and pine forest slopes surrounding upper Manaslu settlements",
      desc: "Today's trek is one of the most culturally and ecologically significant transition stages on the circuit. Shortly after Deng, we cross the Budhi Gandaki once more and ascend steadily through pristine forests of rhododendron, bamboo, and Himalayan pine. The trail passes Rana and Bihi Phedi before reaching Ghap (2,160 m), where beautiful Tibetan Buddhist mani stones carved with intricate prayers and deities adorn the village entrance. Entering the territory of Upper Nubri, the local dialect, architecture, and dress shift distinctly toward Tibetan traditions. A steep, continuous climb through fragrant fir and oak woodlands alive with Himalayan monal pheasants brings us to Namrung (2,630 m), an important trading post with stone-paved streets, ancient archways (Kani), and viewpoints toward Ganesh Himal.",
      meals: "Breakfast, Lunch & Dinner included",
      overnight: "Namrung (approx. 2,630 m / 8,628 ft)"
    },
    {
      day: 5,
      title: "Trek from Namrung to Lho via Lihi & Sho",
      subtitle: "First Views of Mount Manaslu & Ribung Gompa",
      route: "Namrung (2,630 m) to Lho (3,180 m)",
      hours: "4–5 hrs trekking",
      distance: "Approx. 10.5 km (6.5 miles)",
      maxElevation: "3,180 m (10,433 ft)",
      accommodation: "Traditional Teahouse in Lho",
      image: "../../images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-04.jpg",
      imageAlt: "Breathtaking first panoramic view of Mount Manaslu rising above Lho Village",
      desc: "A shorter, highly rewarding walking stage that brings you face-to-face with Mount Manaslu for the very first time. Leaving Namrung, we climb through lush alpine forests to Lihi (2,900 m), famous for its ancient terraced barley fields and traditional flat-roofed stone houses clustered together. Continuing past Sho (2,960 m), the valley opens broadly to reveal breathtaking panoramas of Simnang Himal and Manaslu North. An easy ascent leads into Lho (3,180 m), dominated by the sprawling hillside complex of Ribung Gompa. Here, hundreds of young monks study Buddhist philosophy under the towering gaze of Mount Manaslu's majestic double peak. The golden afternoon light across the monastery's prayer flags and Manaslu's icy summit is one of the photographic highlights of the trek.",
      meals: "Breakfast, Lunch & Dinner included",
      overnight: "Lho (approx. 3,180 m / 10,433 ft)"
    },
    {
      day: 6,
      title: "Trek from Lho to Samagaon via Shyala",
      subtitle: "Glacial Valleys, Ancient Mani Walls & Nubri Capital",
      route: "Lho (3,180 m) to Samagaon (3,530 m)",
      hours: "5–6 hrs trekking",
      distance: "Approx. 13 km (8.1 miles)",
      maxElevation: "3,530 m (11,581 ft)",
      accommodation: "Standard Mountain Teahouse in Samagaon",
      image: "../../images/treks/manaslu-circuit/manaslu-circuit-trekker-mountain-village-01.jpg",
      imageAlt: "Trekker walking past ancient carved mani walls into Samagaon village",
      desc: "We start early to catch the sunrise glowing pink and gold on Manaslu from Lho. The trail descends through alpine larch and rhododendron woodlands to the riverbed, crosses a wooden bridge, and climbs steadily up to Shyala (3,500 m). Shyala is surrounded by a 360-degree amphitheater of giant Himalayan peaks: Himal Chuli and Peak 29 (Ngadi Chuli) to the left, Manaslu directly ahead, and large glaciers tumbling down rock faces. From Shyala, the trail descends gently toward a wide, open glacial plain where yaks graze on alpine meadows. We cross the stream draining Manaslu Glacier and enter Samagaon (3,530 m), the bustling cultural capital of the Nubri Valley, characterized by sprawling stone houses, extensive mani walls, and vibrant monastery courtyards.",
      meals: "Breakfast, Lunch & Dinner included",
      overnight: "Samagaon (approx. 3,530 m / 11,581 ft)"
    },
    {
      day: 7,
      title: "Acclimatization & Exploration Day at Samagaon",
      subtitle: "Active Side Hike to Birendra Lake or Pungyen Gompa",
      route: "Samagaon (3,530 m) – Active Day Hikes – Samagaon",
      hours: "3–5 hrs active day hike",
      distance: "Approx. 7–10 km excursion round-trip",
      maxElevation: "4,050 m (13,287 ft)",
      accommodation: "Standard Mountain Teahouse in Samagaon",
      image: "../../images/treks/manaslu-circuit/manaslu-circuit-village-prayer-flags-13.jpg",
      imageAlt: "Tibetan prayer flags framing turquoise Birendra Glacier Lake beneath Manaslu",
      desc: "Today is a vital scheduled acclimatization day that strictly adheres to the proven mountaineering rule: 'Climb high, sleep low'. Staying active at this elevation accelerates physiological adaptation before pushing above 4,000 meters. You have two premier excursion options. The standard hike leads to turquoise Birendra Lake (Tal) at 3,450 m, an exquisite glacial lake fed directly by the melting ice of Manaslu Glacier, with options to continue climbing the moraine ridge toward Manaslu Base Camp (4,400 m). Alternatively, a longer cultural excursion ascends the southern ridge to ancient Pungyen Gompa (4,050 m), an isolated sanctuary tucked beneath the sheer eastern precipice of Manaslu. Returning to Samagaon for the afternoon gives ample time to rest and visit the historic Labrang Gompa.",
      meals: "Breakfast, Lunch & Dinner included",
      overnight: "Samagaon (approx. 3,530 m / 11,581 ft)"
    },
    {
      day: 8,
      title: "Trek from Samagaon to Samdo via Kani Gateway",
      subtitle: "High Alpine Pastures, Yak Herds & Tibetan Frontier Village",
      route: "Samagaon (3,530 m) to Samdo (3,860 m)",
      hours: "3–4 hrs trekking",
      distance: "Approx. 8.5 km (5.3 miles)",
      maxElevation: "3,860 m (12,664 ft)",
      accommodation: "Authentic Teahouse in Samdo",
      image: "../../images/treks/manaslu-circuit/manaslu-circuit-yak-pasture-valley-14.jpg",
      imageAlt: "Yak grazing in the open, expansive high alpine valley on the trail to Samdo",
      desc: "Following our acclimatization day, we resume the circuit with a gentle, shorter stage up the widening valley toward Samdo. The route heads north through sparse juniper and dwarf birch scrub, passing long mani walls and the Kani entry gateway. We cross wooden bridges over the upper Budhi Gandaki, which has now shrunk to a fast-flowing glacial torrent. The landscape becomes stark, vast, and alpine as tree cover completely disappears, replaced by wide yak pastures where bearded griffon vultures and Himalayan marmots are frequently spotted. After a short, steady climb up an alluvial terrace, we reach Samdo (3,860 m). Samdo is the highest permanent settlement on the circuit, settled in the 1950s by Tibetan refugees from the border region just 15 km to the north.",
      meals: "Breakfast, Lunch & Dinner included",
      overnight: "Samdo (approx. 3,860 m / 12,664 ft)"
    },
    {
      day: 9,
      title: "Second Acclimatization & High Altitude Prep in Samdo",
      subtitle: "Active Acclimatization Hike along Ancient Tibetan Trading Route",
      route: "Samdo (3,860 m) – High Ridge Walk – Samdo",
      hours: "2–4 hrs active day hike",
      distance: "Approx. 5–6 km excursion round-trip",
      maxElevation: "4,200 m (13,779 ft)",
      accommodation: "Authentic Teahouse in Samdo",
      image: "../../images/treks/manaslu-circuit/manaslu-circuit-purple-mountain-flowers-09.jpg",
      imageAlt: "Alpine flora and sweeping mountain ridges surrounding Samdo settlement",
      desc: "To guarantee peak physical condition and maximum comfort for crossing the 5,106 m Larkya La Pass, our itinerary includes a second structured acclimatization stage in Samdo. Today's half-day excursion ascends the northern ridge behind the village, following part of the historic trans-Himalayan trade trail leading toward the Tibetan border at Lajyung La (5,098 m). As we gain altitude to approximately 4,200 m, spectacular panoramas open up encompassing Simnang Himal, Samdo Peak (Pangphuchhe), Mount Manaslu, and the expansive Larkya Glacier system. This moderate walk stimulates oxygenation and red blood cell production while keeping energy reserves fully intact. After descending back to Samdo for hot lunch, your guide conducts a thorough gear check (microspikes, warm layers, headlamps) in preparation for the high pass.",
      meals: "Breakfast, Lunch & Dinner included",
      overnight: "Samdo (approx. 3,860 m / 12,664 ft)"
    },
    {
      day: 10,
      title: "Trek from Samdo to Dharamsala (Larkya Phedi)",
      subtitle: "Ascent to High Base Camp & Gateway to the High Pass",
      route: "Samdo (3,860 m) to Dharamsala (4,460 m)",
      hours: "3–5 hrs trekking",
      distance: "Approx. 7.5 km (4.7 miles)",
      maxElevation: "4,460 m (14,632 ft)",
      accommodation: "High-Altitude Mountain Lodge / Hut in Dharamsala",
      image: "../../images/treks/manaslu-circuit/manaslu-circuit-trekker-high-valley-06.jpg",
      imageAlt: "Trekker walking across high-altitude barren terrain approaching Dharamsala",
      desc: "We depart Samdo on a gradual climb, passing the ancient ruins of Larkya Bazaar, an open-air seasonal market where Tibetan and Nepalese salt merchants historically traded goods. We descend to cross the wooden bridge over the Athahra Saya Khola before beginning a steady, continuous ascent alongside the lateral moraine of Larkya Glacier. The vegetation dwindles to sparse alpine tundra and rocky scree, with glacial streams freezing in the shadows. A final push brings us to Dharamsala (Larkya Phedi) at 4,460 m. Dharamsala is an austere, high-altitude seasonal shelter designed strictly for pre-pass acclimatization and overnight rest. We arrive early in the afternoon to eat a hearty carbohydrate-rich meal, hydrate thoroughly, organize summit packs, and sleep early for the pre-dawn pass crossing.",
      meals: "Breakfast, Lunch & Dinner included",
      overnight: "Dharamsala (approx. 4,460 m / 14,632 ft)"
    },
    {
      day: 11,
      title: "Cross Larkya La Pass (5,106 m) & Descend to Bimthang",
      subtitle: "The Summit Day & Dramatic Alpine Descent into Marsyangdi",
      route: "Dharamsala (4,460 m) – Larkya La (5,106 m) – Bimthang (3,720 m)",
      hours: "8–11+ hrs sustained crossing",
      distance: "Approx. 18.5 km (11.5 miles)",
      maxElevation: "5,106 m (16,752 ft)",
      accommodation: "Comfortable Mountain Lodge in Bimthang",
      image: "../../images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-closeup-05.jpg",
      imageAlt: "Prayer flags fluttering in icy winds on the summit ridge of Larkya La Pass at 5,106 m",
      desc: "The definitive crux and highlight of the entire Manaslu Circuit Trek. We begin in the freezing darkness between 3:30 AM and 4:30 AM with headlamps illuminating the frozen moraine path. The trail climbs steadily over rocky lateral ridges and frozen glacial basins, passing four small frozen lakes before ascending the final snowy ridge to Larkya La Pass at 5,106 m (16,752 ft). Standing amidst thousands of fluttering Buddhist prayer flags at sunrise, you are rewarded with one of the greatest mountain panoramas in the Himalayas: Himlung Himal (7,126 m), Cheo Himal, Kang Guru (6,981 m), Gyaji Kang, and the towering northeast face of Annapurna II (7,937 m). From the pass, a steep, knee-jarring descent over loose scree and snow leads down into the tranquil cirque of Bimthang (3,720 m), where comfortable lodges, hot showers, and celebratory dinners await.",
      meals: "Breakfast, Lunch & Dinner included",
      overnight: "Bimthang (approx. 3,720 m / 12,204 ft)"
    },
    {
      day: 12,
      title: "Trek from Bimthang to Tilije via Gho",
      subtitle: "Descent through Ancient Rhododendron & Pine Woodlands",
      route: "Bimthang (3,720 m) to Tilije (2,300 m)",
      hours: "6–8 hrs trekking",
      distance: "Approx. 16 km (9.9 miles)",
      maxElevation: "3,720 m down to 2,300 m",
      accommodation: "Welcoming Village Teahouse in Tilije",
      image: "../../images/treks/manaslu-circuit/manaslu-circuit-mountain-sunrise-clouds-11.jpg",
      imageAlt: "Magnificent alpine morning light illuminating lush pine valleys below Bimthang",
      desc: "Awaking in Bimthang to the majestic southern amphitheater of Manaslu and Phungi Himal, we begin a long, deeply satisfying descent through changing ecological zones. Leaving the high glacial cirque, we enter magnificent old-growth forests of Himalayan pine, fir, and giant rhododendrons blooming profusely in spring. Following the course of the crystal-clear Dudh Khola, the trail crosses several wooden footbridges and passes through Kharche (2,700 m) and the peaceful settlement of Gho (2,560 m). Breathing becomes effortless as atmospheric oxygen increases with every descending kilometer. A gentle afternoon walk through cultivated terraces of maize, potatoes, and barley brings us into Tilije (2,300 m), a culturally rich Gurung and Bhotia village renowned for its stone architecture and apple orchards.",
      meals: "Breakfast, Lunch & Dinner included",
      overnight: "Tilije (approx. 2,300 m / 7,545 ft)"
    },
    {
      day: 13,
      title: "Trek from Tilije to Dharapani & Drive to Besisahar",
      subtitle: "Marsyangdi Confluence, Annapurna Connection & Road Corridor",
      route: "Tilije (2,300 m) to Dharapani (1,860 m), then 4WD Drive to Besisahar (760 m)",
      hours: "2–3 hrs walking + 3–4 hrs 4WD mountain drive",
      distance: "Approx. 7 km walk + 35 km 4WD drive",
      maxElevation: "2,300 m down to 760 m",
      accommodation: "Standard Hotel in Besisahar",
      image: "../../images/treks/manaslu-circuit/manaslu-circuit-suspension-bridge-mountain-view-03.jpg",
      imageAlt: "Confluence of Dudh Khola and Marsyangdi River near Dharapani checkpoint",
      desc: "On our final morning of foot trekking, we cross the Dudh Khola over a suspension bridge and descend through Thonje village before crossing the Marsyangdi River into Dharapani at 1,860 m. Dharapani is the major intersection where the Manaslu Circuit connects with the classic Annapurna Circuit trekking route. Here, we complete our official exit check with the Annapurna Conservation Area (ACAP) and police authorities, concluding the walking portion of our expedition. We board our pre-arranged 4WD mountain jeep for an exhilarating drive south along the dramatic Marsyangdi river valley road, passing through Tal, Chamje, and Syange waterfalls before arriving at Besisahar (760 m), the bustling commercial district headquarters of Lamjung.",
      meals: "Breakfast, Lunch & Dinner included",
      overnight: "Besisahar (approx. 760 m / 2,493 ft)"
    },
    {
      day: 14,
      title: "Drive from Besisahar back to Kathmandu",
      subtitle: "Return to Capital & Farewell Celebration",
      route: "Besisahar (760 m) to Kathmandu (1,400 m)",
      hours: "5–7 hrs scenic road drive",
      distance: "Approx. 175 km overland drive",
      maxElevation: "1,400 m (4,593 ft)",
      accommodation: "Hotel in Kathmandu (own arrangement or add-on)",
      image: "../../images/treks/manaslu-circuit/manaslu-circuit-yak-pasture-mountain-07.jpg",
      imageAlt: "Tranquil Himalayan valley scenery reflecting the completed circumnavigation",
      desc: "Following a relaxed breakfast at your hotel in Besisahar, we begin the scenic overland return journey to Kathmandu. The paved highway follows the Marsyangdi River to Dumre before joining the Prithvi Highway alongside the roaring Trishuli River, passing through vibrant roadside markets, lively towns, and river canyons. We stop for lunch at a riverside restaurant before climbing out of the river valley via the Nagdhunga Pass back into the Kathmandu Valley. Arriving back at your hotel in Kathmandu in the mid-to-late afternoon, you can enjoy a hot shower, rest, and celebrate the triumphant completion of your 14-day Manaslu Circuit circumnavigation. Evening farewell dinner hosted by our team.",
      meals: "Breakfast & Lunch included",
      overnight: "Kathmandu Hotel (approx. 1,400 m / 4,593 ft)"
    }
  ],

  includes: [
    { title: "Manaslu Restricted Area Permit (RAP)", desc: "Official Department of Immigration restricted area permit covering Chumnubri Rural Municipality wards 1 to 4 for the required circuit duration." },
    { title: "Manaslu Conservation Area Permit (MCAP)", desc: "National Trust for Nature Conservation (NTNC) entry authorization for the Manaslu protected zone." },
    { title: "Annapurna Conservation Area Permit (ACAP)", desc: "Required protected area entry for the standard circuit exit corridor passing through Dharapani." },
    { title: "Agency-Issued TIMS Registration Card", desc: "Official electronic Trekkers' Information Management System card with verified QR code tracking." },
    { title: "Licensed Himalayan Trekking Guide", desc: "Government-certified, English-speaking local mountain guide trained in wilderness first aid and high-altitude safety (mandatory under NTB regulations)." },
    { title: "Professional Porter Support", desc: "Experienced local porters (1 porter for 2 trekkers, maximum 22–25 kg total) to transport main expedition duffel bags." },
    { title: "Overland Ground Transportation", desc: "Kathmandu to Machha Khola and Besisahar to Kathmandu via comfortable private 4WD jeep or shared tourist service." },
    { title: "13 Nights Teahouse Accommodation", desc: "Carefully selected mountain teahouses and lodges along the route (twin-share basis with warm dining halls)." },
    { title: "Full Board Meals on Trek", desc: "3 freshly cooked, hearty meals daily (Breakfast, Lunch, Dinner) with seasonal fruit and a cup of hot tea/coffee per meal." },
    { title: "Daily Health & SpO2 Monitoring", desc: "Pulse oximeter checks conducted morning and evening to evaluate oxygen saturation and resting pulse rates." },
    { title: "Wilderness First Aid & Oxygen Protocol", desc: "Comprehensive first aid kit with high-altitude emergency medications and established helicopter evacuation protocols." },
    { title: "Taxes & Official Agency Charges", desc: "All local government charges, VAT (13%), and official company operating service fees included." }
  ],

  excludes: [
    { title: "International Airfares & Visa", desc: "Round-trip international flights to Kathmandu and Nepal tourist entry visa ($30 for 15 days, $50 for 30 days)." },
    { title: "Mandatory Travel Insurance", desc: "Policy covering high-altitude trekking up to 5,200 m, emergency medical treatment, and emergency helicopter evacuation." },
    { title: "Personal Trekking Equipment", desc: "Four-season sleeping bag (-15°C to -20°C rated), heavy down jacket, broken-in trekking boots, microspikes, and daypack." },
    { title: "Teahouse Incidentals & Amenities", desc: "Hot showers ($2–$5), electronic device charging ($1–$4), and Wi-Fi cards ($2–$5) where available in lodges." },
    { title: "Beverages & Extra Snacks", desc: "Bottled mineral water, soft drinks, alcoholic beverages, espresso coffees, bakery items, and personal snacks." },
    { title: "Personal Medication & Expenses", desc: "Personal prescription medications, laundry services, souvenirs, and personal telephone calls." },
    { title: "Gratuities & Tips", desc: "Tips for trekking guides, porters, and drivers (customary recognition for good service in Himalayan trekking)." },
    { title: "Unforeseen Emergency Expenses", desc: "Costs arising from landslides, weather roadblocks, route diversions, or early descent beyond agency control." }
  ],

  guides: [
    {
      id: "guide-route-landscapes",
      category: "route",
      title: "Stage-by-Stage Route & Landscape Progression",
      icon: "map",
      content: `The Manaslu Circuit Trek follows a long Himalayan corridor from the lower Budhi Gandaki Valley into the high mountain settlements around Mount Manaslu, crosses the approximately 5,106 m Larkya La, and descends toward Bimthang and the Marsyangdi Valley. Unlike a trek that follows one valley from beginning to end, the Manaslu Circuit changes significantly in landscape, settlement pattern, altitude, culture, and trail character as it progresses.<br><br>
      The complete circuit can be divided into five distinct geographical stages:<br>
      • <strong>Stage 1: Lower Budhi Gandaki (Machha Khola to Deng, ~900 m to 1,860 m):</strong> Warm, subtropical river gorges, cascading waterfalls, terraced rice paddies, suspension bridges, and cliffside trails.<br>
      • <strong>Stage 2: Middle Valley Approach (Deng to Lho, ~1,860 m to 3,180 m):</strong> Transition into cooler temperate forests of oak, pine, and rhododendron, opening into broader valleys with initial views of Manaslu North and Peak 29.<br>
      • <strong>Stage 3: Upper Manaslu & Nubri (Lho to Samdo, ~3,180 m to 3,860 m):</strong> The Tibetan Buddhist heartland of Nubri. Open glacial valleys, extensive mani walls, Ribung and Pungyen Gompas, yak pastures, and dramatic panoramas of Mount Manaslu (8,163 m).<br>
      • <strong>Stage 4: Larkya La High Pass Crossing (Samdo to Bimthang via Larkya La, ~3,860 m to 5,106 m, down to 3,720 m):</strong> Barren alpine tundra, glacial moraine, frozen tarns, high pass crossing, and vast vistas of Himlung, Kang Guru, and Annapurna II.<br>
      • <strong>Stage 5: Marsyangdi Exit (Bimthang to Dharapani & Besisahar, ~3,720 m down to 760 m):</strong> Rapid descent through pristine rhododendron and pine forests along the Dudh Khola, connecting with the Marsyangdi River road corridor.`
    },
    {
      id: "guide-distance-hours",
      category: "route",
      title: "Distance, Daily Walking Hours & Trail Terrain",
      icon: "clock",
      content: `The standard Manaslu Circuit covers approximately 170–180 km of trekking route, with around 177 km commonly used as an overall reference for the complete circuit. Most standard walking days involve 5 to 8 hours on the trail at a steady, sustainable pace.<br><br>
      However, distance alone does not determine difficulty. A relatively short stage above 4,000 m (such as Samagaon to Samdo, 8.5 km in 3–4 hrs) can require more physical effort than a longer stage at lower altitude because of reduced atmospheric oxygen.<br><br>
      • <strong>The Longest Day:</strong> The crossing from Dharamsala over Larkya La (5,106 m) to Bimthang covers approximately 17–20 km and requires 8 to 11+ hours. It combines an early pre-dawn alpine ascent with a long 1,400–1,500 m descent over rocky moraine and loose scree.<br>
      • <strong>Trail Surfaces:</strong> Lower sections feature stone steps, dirt paths, and suspension bridges. Middle sections include stone-paved village paths and forest tracks. Upper sections feature glacial moraine, loose shale, frozen snowfields, and rocky high-altitude ridges where surefootedness is paramount.`
    },
    {
      id: "guide-altitude-profile",
      category: "safety",
      title: "Altitude Profile & Vertical Acclimatization Strategy",
      icon: "trending-up",
      content: `The Manaslu Circuit has an exceptionally wide vertical range, beginning at approximately 900 m in Machha Khola and reaching 5,106 m at Larkya La Pass—a total vertical elevation gain exceeding 4,200 meters. The cumulative ascent throughout the trek is even greater due to the undulating nature of Himalayan valley terrain.<br><br>
      Our 14-day itinerary incorporates a proven two-stage acclimatization structure to ensure safe physiological adaptation:<br>
      • <strong>First Acclimatization Stop: Samagaon (3,530 m):</strong> Trekkers spend two nights here. An active day hike to Birendra Glacier Lake (3,450 m) or Pungyen Gompa (4,050 m) adheres to the golden mountaineering principle of 'climb high, sleep low'.<br>
      • <strong>Second Acclimatization Stop: Samdo (3,860 m):</strong> An additional active half-day excursion up to ~4,200 m along the Tibetan border trail allows your body to adjust to thin air before proceeding to the 4,460 m high camp at Dharamsala.<br>
      • <strong>Sleeping Altitude vs. Maximum Daytime Altitude:</strong> The highest overnight stay is at Dharamsala (4,460 m). The maximum altitude of 5,106 m at Larkya La is crossed during daytime, followed immediately by a rapid descent to Bimthang (3,720 m), which greatly aids recovery.`
    },
    {
      id: "guide-difficulty-training",
      category: "safety",
      title: "Trek Difficulty, Physical Demands & Fitness Preparation",
      icon: "shield",
      content: `The Manaslu Circuit Trek is officially graded as a <strong>Challenging High-Altitude Trek</strong>. It is significantly more demanding than shorter introductory routes like Poon Hill or Langtang Valley because it requires sustained physical endurance over 14 consecutive days in a remote wilderness environment.<br><br>
      • <strong>Non-Technical Nature:</strong> The standard circuit does not require technical mountaineering skills, ropes, or ice axes. However, 'non-technical' must not be confused with 'easy'. You must be prepared for steep ascents, rocky moraines, freezing high-pass conditions, and knee-jarring descents.<br><br>
      • <strong>Recommended Physical Preparation:</strong> Begin training 8 to 12 weeks before departure. Focus on:<br>
      1. Cardiovascular endurance: Brisk uphill walking, stair climbing, cycling, or jogging 3–4 times weekly.<br>
      2. Leg & Core Strength: Squats, lunges, step-ups, and planks to prepare your knees and ankles for prolonged downhill strain.<br>
      3. Back-to-Back Hiking: Complete weekend hikes of 5–7 hours carrying an 8–10 kg daypack to condition your body for consecutive trekking days with minimal recovery time.`
    },
    {
      id: "guide-larkya-la-crossing",
      category: "safety",
      title: "Crossing Larkya La Pass (5,106 m): What to Expect on Crux Day",
      icon: "alert-triangle",
      content: `Larkya La (5,106 m / 16,752 ft) represents the geographical, physical, and emotional pinnacle of the Manaslu Circuit. Successful pass day execution requires discipline, proper pacing, and mental preparation.<br><br>
      • <strong>Pre-Dawn Departure:</strong> You will wake at 3:30 AM in Dharamsala, have a warm breakfast, and begin hiking by 4:00 AM with headlamps. Starting early provides maximum daylight and allows the party to cross the pass before high-altitude afternoon winds and clouds develop.<br>
      • <strong>The Ascent:</strong> The trail climbs steadily over frozen lateral moraines of Larkya Glacier. Depending on the season, snow and patches of black ice may require slip-on microspikes. Pacing should be slow, rhythmic, and synchronized with steady breathing.<br>
      • <strong>At the Summit:</strong> The pass is marked by a massive cairn draped with prayer flags. The view encompasses Manaslu North, Himlung Himal, Cheo Himal, and Annapurna II.<br>
      • <strong>The Demanding Descent:</strong> The descent from 5,106 m down to Bimthang at 3,720 m is a steep drop of nearly 1,400 meters over loose scree and rocky switchbacks. Trekking poles and controlled foot placement are essential to protect your knees.`
    },
    {
      id: "guide-best-seasons",
      category: "weather",
      title: "Best Seasons, Month-by-Month Weather & Climate Zones",
      icon: "sun",
      content: `The ideal windows for the Manaslu Circuit Trek are the two prime Himalayan trekking seasons: <strong>Autumn (September to November)</strong> and <strong>Spring (March to May)</strong>.<br><br>
      • <strong>Autumn (September, October, November) — The Premier Choice:</strong> September marks the post-monsoon transition with lush green valleys. October delivers the clearest skies, stable weather, and superb mountain visibility. November brings crisp, dry air with colder nights (down to -8°C at high camp).<br>
      • <strong>Spring (March, April, May) — Flowering Flora & Warming Trails:</strong> March is crisp with lingering high-altitude snow. April is ideal with vibrant rhododendron blooms and comfortable daytime temperatures. May is warmer with longer days, though pre-monsoon afternoon clouds can form.<br>
      • <strong>Monsoon / Summer (June to August):</strong> Characterized by heavy rainfall in the lower Budhi Gandaki gorge, risk of landslides, slippery trails, leeches, and cloud-obscured peaks. Not recommended for standard itineraries.<br>
      • <strong>Winter (December to February):</strong> Severe cold with sub-zero temperatures (down to -20°C at Dharamsala) and heavy snowfall. Larkya La Pass can become impassable, and teahouses above Samdo generally close.`
    },
    {
      id: "guide-permits-regulations",
      category: "permits",
      title: "Official Permits, Government Regulations & Guide Mandate",
      icon: "file-text",
      content: `Because the Manaslu region borders Tibet and encompasses protected wildlife sanctuaries, foreign trekkers must hold four specific government permits and adhere to strict regulatory provisions:<br><br>
      • <strong>1. Manaslu Restricted Area Permit (RAP):</strong> Administered by the Nepal Department of Immigration. Seasonal pricing: USD 100 for the first 7 days plus USD 15 per additional day during Autumn (Sep–Nov); USD 75 for the first 7 days plus USD 10 per additional day during Dec–Aug.<br>
      • <strong>2. Manaslu Conservation Area Permit (MCAP):</strong> NPR 3,000 for foreign visitors (NPR 1,000 for SAARC nationals).<br>
      • <strong>3. Annapurna Conservation Area Permit (ACAP):</strong> NPR 3,000 for foreign visitors. Required because the circuit exits into the Annapurna Conservation Area at Dharapani.<br>
      • <strong>4. TIMS Card:</strong> NPR 2,000 agency-issued electronic card with verified QR code tracking.<br>
      • <strong>Mandatory Licensed Guide:</strong> Under Nepal Tourism Board (NTB) and Department of Immigration regulations, solo or independent trekking without a licensed guide is strictly prohibited in the Manaslu region. All permits must be processed through a registered Nepalese trekking agency.`
    },
    {
      id: "guide-costs-budgeting",
      category: "permits",
      title: "Cost, Pricing Transparency & Personal On-Trek Budgeting",
      icon: "dollar-sign",
      content: `A fully organized Manaslu Circuit package typically ranges between <strong>USD $1,150 and $1,450 per person</strong>, depending on group size, transportation type (shared vs. private 4WD jeep), and season.<br><br>
      • <strong>What is Covered in a Professional Package:</strong> All four government permits (RAP, MCAP, ACAP, TIMS), certified guide and porter salaries, transport between Kathmandu and trailheads, 13 nights teahouse lodging, and 3 meals daily on trek.<br>
      • <strong>Personal On-Trek Budgeting:</strong> We recommend carrying approximately <strong>NPR 25,000 to 35,000 in cash</strong> (approx. USD $200–$270) in Nepalese Rupees from Kathmandu. There are no functioning ATMs anywhere between Arughat and Besisahar.<br>
      • <strong>Typical Teahouse Extra Expenses:</strong><br>
      - Hot bucket shower: NPR 300 – 600<br>
      - Device / power bank charging: NPR 200 – 500<br>
      - Wi-Fi card / access: NPR 300 – 600<br>
      - Boiled drinking water (1L): NPR 150 – 400<br>
      - Bakery treats, sodas, and chocolate bars: NPR 250 – 500`
    },
    {
      id: "guide-teahouse-lodging",
      category: "lodging",
      title: "Teahouse Living, Lodges & Amenities in Upper Nubri",
      icon: "home",
      content: `Accommodation on the Manaslu Circuit is based on authentic mountain teahouses and lodges. Facilities have improved significantly in recent years, but expectations should remain grounded in remote mountain reality.<br><br>
      • <strong>Rooms:</strong> Typically twin-share rooms featuring two single wooden beds, foam mattresses, clean sheets, and pillows. Rooms are unheated; bringing a high-quality 4-season sleeping bag (-15°C rated) is essential for sub-zero nights in Samdo and Dharamsala.<br>
      • <strong>Dining Halls:</strong> The social center of every teahouse is the communal dining room, which is heated every evening by a central cast-iron stove burning dried wood or yak dung. It is warm, welcoming, and perfect for reading, journaling, and enjoying hot meals.<br>
      • <strong>Bathrooms & Toilets:</strong> Lower settlements may offer western flush toilets and attached bathrooms in select rooms. In higher settlements (Lho, Samagaon, Samdo, Dharamsala), shared squat-style toilets are standard. Always carry your own toilet paper and hand sanitizer.`
    },
    {
      id: "guide-food-water",
      category: "lodging",
      title: "Food, Nutrition & Safe Drinking Water Management",
      icon: "coffee",
      content: `Nutritious, carbohydrate-rich fuel is crucial for sustaining physical energy and altitude adaptation over 14 consecutive trekking days.<br><br>
      • <strong>The Himalayan Fuel — Dal Bhat:</strong> The traditional Nepalese staple of steamed white rice, spiced lentil soup (dal), seasonal vegetable curry (tarkari), and pickled greens (saag) is freshly prepared twice daily. It comes with unlimited free refills and provides the optimal balance of complex carbs, protein, and minerals.<br>
      • <strong>Other Menu Varieties:</strong> Teahouse menus also feature Tibetan bread, tsampa porridge, noodle soups (thukpa), fried rice, potato dishes, momo dumplings, and porridge with honey.<br>
      • <strong>Safe Drinking Water:</strong> Drink 3 to 4 liters of fluid daily to prevent dehydration and AMS. To preserve the fragile ecology of the Manaslu Conservation Area, single-use plastic water bottles are discouraged. Carry two 1-liter reusable insulated bottles and treat water using Katadyn/Aquatabs purification tablets or a portable filter.`
    },
    {
      id: "guide-group-vs-private",
      category: "route",
      title: "Group Joining vs. Private Guided Trekking Departures",
      icon: "users",
      content: `Namaste Hiking Trek offers both fixed-date Group Joining departures and fully customized Private Treks for the Manaslu Circuit:<br><br>
      • <strong>Group Joining Departures:</strong> Ideal for solo travelers and pairs seeking social camaraderie with fellow international adventurers. Group sizes are capped at 8–10 trekkers to maintain high safety standards, personalized guide attention, and manageable lodge dynamics.<br>
      • <strong>Private Guided Departures:</strong> Recommended for families, clubs, or travelers who prioritize complete itinerary flexibility. With a private trek, you control the daily walking pace, departure dates, rest stop durations, and can easily customize side excursions (such as visiting Manaslu Base Camp or Pungyen Gompa).<br>
      • <strong>Pacing & Safety:</strong> Whether in a group or private trek, our guides strictly adhere to safety protocols, daily pulse oximeter monitoring, and emergency communication systems.`
    },
    {
      id: "guide-extensions-tsum",
      category: "route",
      title: "Route Extensions: Tsum Valley & Annapurna Circuit Connection",
      icon: "git-branch",
      content: `Because the Manaslu Circuit reaches key junction points, several thrilling regional extensions can be integrated into your itinerary:<br><br>
      • <strong>Tsum Valley Extension (Add 5–7 Days):</strong> Branching northeast from Lokpa below Deng, the sacred Tsum Valley ('Beyul Kyimolang') is an ancient sanctuary of non-violence where no animals are slaughtered. It features ancient nunneries like Mu Gompa and Rachen Gompa, Milarepa's meditation cave, and deep Tibetan cultural traditions. Note: Requires a separate Tsum Valley RAP (USD 40/week in autumn).<br>
      • <strong>Annapurna Circuit Continuation:</strong> Rather than boarding a vehicle at Dharapani, ambitious trekkers can continue hiking up the Marsyangdi Valley into Manang, crossing the famed Thorong La Pass (5,416 m) down to Muktinath and Jomsom.<br>
      • <strong>Manaslu Base Camp (4,400 m):</strong> Can be incorporated directly into the Samagaon acclimatization day as a vigorous 7–8 hour day hike to touch the edge of the active mountaineering expedition base camp.`
    }
  ],

  altitudeMilestones: [
    { location: "Kathmandu", elevationM: 1400, elevationFt: 4593, role: "Arrival & Trip Briefing" },
    { location: "Machha Khola", elevationM: 900, elevationFt: 2952, role: "Trek Trailhead" },
    { location: "Jagat", elevationM: 1340, elevationFt: 4396, role: "Lower Valley Checkpoint" },
    { location: "Deng", elevationM: 1860, elevationFt: 6102, role: "Gorge Transition Settlement" },
    { location: "Namrung", elevationM: 2630, elevationFt: 8628, role: "Upper Nubri Gateway" },
    { location: "Lho", elevationM: 3180, elevationFt: 10433, role: "First Manaslu Panorama" },
    { location: "Samagaon", elevationM: 3530, elevationFt: 11581, role: "1st Acclimatization Hub" },
    { location: "Samdo", elevationM: 3860, elevationFt: 12664, role: "2nd Acclimatization Hub" },
    { location: "Dharamsala", elevationM: 4460, elevationFt: 14632, role: "Highest Scheduled Overnight" },
    { location: "Larkya La Pass", elevationM: 5106, elevationFt: 16752, role: "Highest Trek Elevation" },
    { location: "Bimthang", elevationM: 3720, elevationFt: 12204, role: "Post-Pass Descent Hub" },
    { location: "Tilije", elevationM: 2300, elevationFt: 7545, role: "Forest Descent Settlement" },
    { location: "Dharapani", elevationM: 1860, elevationFt: 6102, role: "Marsyangdi Road Confluence" },
    { location: "Besisahar", elevationM: 760, elevationFt: 2493, role: "Highway Hub" }
  ],

  faqs: [
    // General Information
    {
      category: "general",
      question: "Can I trek the Manaslu Circuit without a guide?",
      answer: "No. Under current Nepal Tourism Board (NTB) and Department of Immigration regulations, solo or independent trekking is strictly prohibited in the Manaslu restricted area. Trekkers must be accompanied by a government-licensed trekking guide and travel with official agency-issued TIMS documentation."
    },
    {
      category: "general",
      question: "What makes the Manaslu Circuit Trek unique compared to Annapurna or Everest?",
      answer: "The Manaslu Circuit combines complete circular circumnavigation of an 8,000-meter peak (Mt. Manaslu, 8,163 m) with the cultural preservation of a restricted trekking area. Unlike the crowded Everest or road-affected Annapurna highways, Manaslu sees far fewer trekkers, preserves authentic Tibetan Buddhist monastic heritage in the Nubri Valley, and transitions through five distinct climatic zones from subtropical river gorges to high glacial passes."
    },
    {
      category: "general",
      question: "Is there a minimum group size required for Manaslu permits?",
      answer: "Historically, immigration rules required a minimum of two foreign trekkers for the Manaslu Restricted Area Permit. Current agency operations allow booking as a solo traveler, where our agency coordinates the mandatory licensed guide and processes the required immigration paperwork for your departure date."
    },
    {
      category: "general",
      question: "What is the total walking distance and daily duration?",
      answer: "The complete walking circuit covers approximately 170 to 180 km (approx. 177 km on standard itineraries). Trekking days typically average 5 to 8 hours of walking at a measured, steady pace. The longest and most demanding stage is the Larkya La crossing day from Dharamsala to Bimthang, which covers 17–20 km and takes 8 to 11+ hours."
    },

    // Route & Logistics
    {
      category: "route",
      question: "Where does the road transport begin and end on this 14-day trek?",
      answer: "The trip departs Kathmandu by road, traveling along the Prithvi Highway and rural mountain roads to Machha Khola (approx. 900 m) where walking begins. At the conclusion of the circuit in Dharapani (1,860 m), we board a 4WD jeep to Besisahar, followed by a scenic paved highway drive back to Kathmandu."
    },
    {
      category: "route",
      question: "How difficult is the crossing of Larkya La Pass (5,106 m)?",
      answer: "Larkya La is a strenuous high-altitude alpine pass crossing, but it does not require technical mountaineering skills. The primary challenges are the 4:00 AM pre-dawn cold start, sub-zero temperatures, walking on rocky moraine and potential snowfields, and the knee-jarring 1,400-meter descent to Bimthang. Having microspikes, trekking poles, and warm layered clothing makes this day safe and achievable."
    },
    {
      category: "route",
      question: "Can I add the Tsum Valley extension to this itinerary?",
      answer: "Yes! Tsum Valley branches northeast from the lower Manaslu trail at Lokpa. Adding Tsum Valley requires 5 to 7 additional days and a separate Tsum Valley Restricted Area Permit (USD 40/week in autumn). It is renowned for ancient Buddhist monasteries, Milarepa's cave, and deep spiritual traditions."
    },
    {
      category: "route",
      question: "Are suspension bridges safe on the Manaslu trail?",
      answer: "Yes, modern steel suspension bridges spanning the Budhi Gandaki and Marsyangdi rivers are engineered to high international standards with tall wire-mesh side railings. They safely accommodate trekkers, guides, porters, and pack mule/yak caravans."
    },

    // Lodging & Food
    {
      category: "lodging",
      question: "What are the teahouses like on the Manaslu Circuit?",
      answer: "Teahouses provide simple, clean twin-share bedrooms with two single wooden beds, foam mattresses, clean sheets, and pillows. Rooms are unheated, making a four-season sleeping bag (-15°C rated) necessary. The communal dining hall is heated every evening by a central wood or yak-dung burning stove, serving as the cozy social hub of the lodge."
    },
    {
      category: "lodging",
      question: "What kind of food is available during the trek?",
      answer: "Teahouses offer surprisingly diverse freshly prepared meals. The staple is traditional Dal Bhat (steamed rice, spiced lentil soup, seasonal vegetable curry, greens, and pickles) with free second helpings. You can also order Tibetan bread, noodle soups (thukpa), fried rice, momo dumplings, spaghetti, porridge, and eggs."
    },
    {
      category: "lodging",
      question: "Is electricity, phone reception, and Wi-Fi available?",
      answer: "Electricity from solar panels or local micro-hydro is available in most villages for a small charging fee (NPR 200–500 per device/power bank). Nepali SIM cards (NTC and Ncell) work sporadically in lower villages, with NTC having better coverage up to Samagaon. Wi-Fi cards (such as Everest Link or local air-band) are sold in larger villages like Namrung and Samagaon, though signals are weather-dependent and absent at Dharamsala."
    },
    {
      category: "lodging",
      question: "How do I manage safe drinking water on the circuit?",
      answer: "Single-use plastic mineral water bottles are strongly discouraged inside the conservation area. We recommend carrying two 1-liter insulated stainless steel or Nalgene bottles. You can fill them with clean tap water and treat it with purification tablets (chlorine dioxide/Aquatabs) or a portable filter, or purchase boiled water at teahouses."
    },

    // Safety & Altitude
    {
      category: "safety",
      question: "How is acclimatization managed on this 14-day itinerary?",
      answer: "Our itinerary features two dedicated acclimatization stops: Samagaon (3,530 m) and Samdo (3,860 m). Both locations include scheduled active day hikes to higher terrain (Birendra Lake, Pungyen Gompa ridge, or the Tibetan frontier route) before sleeping at the same elevation. This structured altitude progression allows your body to adjust naturally before reaching the 4,460 m high camp at Dharamsala."
    },
    {
      category: "safety",
      question: "What happens if a trekker develops Acute Mountain Sickness (AMS)?",
      answer: "Our certified guides carry pulse oximeters to check your blood oxygen saturation (SpO2) and pulse twice daily. Guides are trained to identify early symptoms of AMS (headache, nausea, dizziness). If mild symptoms appear, we rest and hydrate. If symptoms persist or worsen, the primary medical rule is immediate descent to lower elevation. In severe emergencies, satellite emergency communications initiate helicopter rescue evacuation."
    },
    {
      category: "safety",
      question: "Do I need special high-altitude travel insurance?",
      answer: "Yes, comprehensive travel insurance is mandatory. Your policy must explicitly cover trekking up to 5,200 meters (17,000 ft), emergency medical treatment, and emergency helicopter rescue evacuation. Keep copies of your policy details accessible to your guide."
    },
    {
      category: "safety",
      question: "What should I carry in my personal daypack versus the porter duffel?",
      answer: "Porters transport your main duffel bag (up to 10–12 kg per person) directly from lodge to lodge. You carry a 30–40 liter daypack containing only daytime essentials: warm layers (fleece, down jacket), waterproof Gore-Tex jacket and pants, 2 liters of water, snacks, sunscreen, sunglasses, personal medication, passport/cash, and a camera."
    },

    // Permits & Costs
    {
      category: "permits",
      question: "What permits are required for the Manaslu Circuit and how much do they cost?",
      answer: "Four separate permits are required: (1) Manaslu Restricted Area Permit (RAP): Autumn USD 100/first 7 days + USD 15/day; Winter/Spring/Summer USD 75/first 7 days + USD 10/day; (2) Manaslu Conservation Area Permit (MCAP): NPR 3,000; (3) Annapurna Conservation Area Permit (ACAP): NPR 3,000; (4) TIMS Card: NPR 2,000. All permits are arranged by our agency prior to departure."
    },
    {
      category: "permits",
      question: "Can I obtain Manaslu permits independently at the trailhead?",
      answer: "No. The Manaslu Restricted Area Permit cannot be issued at trailside checkpoints or to individual independent travelers. It must be applied for through a registered Nepalese trekking agency through the Department of Immigration in Kathmandu with verified licensed guide credentials."
    },
    {
      category: "permits",
      question: "How much cash should I carry on the trek?",
      answer: "We advise bringing NPR 25,000 to 35,000 in cash (approx. USD $200–$270) per person. This covers personal expenses such as hot showers, device charging, Wi-Fi, snacks, beverages, and tips for your guide and porters. There are no functional ATMs between Arughat and Besisahar."
    },
    {
      category: "permits",
      question: "Are tips for guides and porters included in the package price?",
      answer: "No, tipping is customary in Nepalese trekking but left to your discretion based on service quality. As a general industry guideline, trekking groups pool approximately USD $12–$15 per day for the guide and USD $8–$10 per day for each porter, distributed at the farewell in Dharapani or Besisahar."
    }
  ]
};
