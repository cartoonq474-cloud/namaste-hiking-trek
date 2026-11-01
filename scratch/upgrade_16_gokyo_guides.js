const fs = require('fs');

// 1. Define the 16 Guides Data with complete structured formatting, icons, categories, and pro-tips
const guidesData = [
  {
    id: "detail-card-teahouse-life",
    category: "lodge",
    categoryLabel: "LODGE & TEAHOUSE",
    readTime: "2 min read",
    title: "Mountain Teahouses & Accommodation Standards",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="M3 13h18"></path><circle cx="8" cy="9" r="1.5"></circle></svg>`,
    lead: "The traditional Himalayan teahouse system provides authentic, family-run lodges featuring comfortable private twin bedrooms and a central heated dining hall that serves as the warm social hearth of each village.",
    facts: [
      { label: "Room Standards", value: "Twin-share wooden single beds with clean foam mattresses, fresh linens, and pillows. Bedrooms are unheated; we provide 4-season sleeping bags rated to -15°C/-20°C." },
      { label: "Dining Hall Stove", value: "Central stove fueled by dried yak dung or wood pellets is lit every evening at ~4:30 PM, creating a warm, cozy social atmosphere." },
      { label: "Bathroom Facilities", value: "Modern attached en-suite bathrooms in Namche Bazaar; clean shared Western-style or Asian squat toilets on each floor in Dole, Machhermo, and Gokyo." },
      { label: "Hot Showers", value: "Solar or gas-heated hot showers are available at teahouses for an additional charge of NPR 400–700 ($3–$6)." }
    ],
    proTip: "Charging sockets are located only in the communal dining hall and cost NPR 200–500 per device. Carry a 20,000 mAh power bank inside your sleeping bag at night so the freezing cold does not sap your battery charge."
  },
  {
    id: "detail-card-food-dining",
    category: "lodge",
    categoryLabel: "FOOD & NUTRITION",
    readTime: "2 min read",
    title: "Teahouse Food, Meal Choices & Dietary Options",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
    lead: "Teahouse kitchens along the Gokyo route serve high-carb, nutrient-dense meals engineered for sustained mountain walking, expertly blending traditional Nepali recipes with international comfort food.",
    facts: [
      { label: "Dal Bhat Power", value: "Steamed rice, aromatic lentil soup (dal), seasonal vegetable curry, greens (saag), and spicy pickled chutney with free refills on every plate." },
      { label: "Western & Asian Options", value: "Vegetable and egg fried rice, chow mein noodles, potato rosti, momos (steamed dumplings), porridge, pancakes, toast, and macaroni pasta." },
      { label: "Dietary Flexibility", value: "Vegetarian and vegan diets are exceptionally easy to cater to along the entire route. Notify us before departure for gluten-free accommodations." },
      { label: "Meat Advisory", value: "Meat is portered up without refrigeration above Namche; our guides recommend a vegetarian diet above 3,500 m for optimal digestive health." }
    ],
    proTip: "Place your dinner order with your guide by 5:30 PM each evening so the kitchen can prepare your meal fresh without extended delays during peak dining hours."
  },
  {
    id: "detail-card-hydration-water",
    category: "lodge",
    categoryLabel: "HYDRATION & WATER",
    readTime: "2 min read",
    title: "Hydration, Drinking Water & Purification Methods",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`,
    lead: "Proper hydration is your single most potent physiological tool for acclimatizing smoothly; dry, thin mountain air accelerates dehydration and amplifies altitude fatigue.",
    facts: [
      { label: "Daily Fluid Target", value: "Drink 3.5 to 4.5 liters of clean fluids daily (water, warm lemon-ginger-honey tea, and garlic soup)." },
      { label: "Purification Protocols", value: "Use chlorine dioxide tablets (Aquatabs / Katadyn Micropur) or portable UV SteriPENs to sanitize lodge tap water." },
      { label: "Boiled Drinking Water", value: "Lodge kitchens sell thermoses of boiled drinking water (NPR 200–400 per liter) which is safe, sterile, and soothing in sub-zero evenings." },
      { label: "Plastic Bottle Ban", value: "Single-use plastic bottles are restricted throughout Sagarmatha National Park to eliminate plastic waste in fragile glacial ecosystems." }
    ],
    proTip: "Fill your Nalgene bottle with boiling water before sleeping and slip it into your sleeping bag—it functions as an effective hot water bottle and gives you warm, ready-to-drink water in the morning."
  },
  {
    id: "detail-card-lakes-ramsar",
    category: "route",
    categoryLabel: "SACRED WETLANDS",
    readTime: "2 min read",
    title: "The Gokyo Lakes System & Sacred Dudh Pokhari",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c.6 0 1.2-.2 1.7-.6 1-.8 2.6-.8 3.6 0 1 .8 2.6.8 3.6 0 1-.8 2.6-.8 3.6 0 1 .8 2.6.8 3.6 0 .5.4 1.1.6 1.7.6"></path><path d="M2 18c.6 0 1.2-.2 1.7-.6 1-.8 2.6-.8 3.6 0 1 .8 2.6.8 3.6 0 1-.8 2.6-.8 3.6 0 1 .8 2.6.8 3.6 0 .5.4 1.1.6 1.7.6"></path></svg>`,
    lead: "Recognized internationally as a protected Ramsar Wetland of International Importance, the six alpine lakes of Gokyo constitute the highest freshwater lake network on Earth.",
    facts: [
      { label: "First Lake (Longponga Cho)", value: "Situated at 4,690 m, this is the introductory glacial lake encountered right as you climb past the snout of the Ngozumpa Glacier." },
      { label: "Second Lake (Taujun Cho)", value: "Sitting at 4,740 m, known for its tranquil turquoise waters framed by steep lateral moraines and alpine cliffs." },
      { label: "Third Lake (Dudh Pokhari)", value: "At 4,790 m, this radiant turquoise lake is the centerpiece of Gokyo settlement, directly below the soaring summit ridge of Gokyo Ri." },
      { label: "Sacred Status", value: "Deeply revered by both Buddhists and Hindus (dedicated to Lord Shiva); bathing, washing, or disturbing the sacred waters is strictly prohibited." }
    ],
    proTip: "Walk the quiet eastern shoreline trail of Dudh Pokhari during the late afternoon calm—when the valley wind settles, the turquoise water reflects towering mountain faces like a flawless mirror."
  },
  {
    id: "detail-card-upper-lakes",
    category: "route",
    categoryLabel: "OPTIONAL EXCURSIONS",
    readTime: "2 min read",
    title: "Fourth & Fifth Lake Excursions: Exploring the Upper Basin",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    lead: "Venturing north from Gokyo village into the wild upper glacial basin brings adventurous trekkers into an untouched alpine amphitheater beneath the towering south face of Mount Cho Oyu.",
    facts: [
      { label: "Fourth Lake (Thonak Cho)", value: "Located at 4,870 m (~3 km north of Gokyo village; 1.5–2 hrs walk). The deepest and largest lake in the entire Gokyo basin." },
      { label: "Fifth Lake (Ngozumpa Cho)", value: "Sitting at 4,990 m directly beneath the massive hanging glaciers and sheer 3,000 m south wall of Mount Cho Oyu (8,188 m)." },
      { label: "Scoundrel's Viewpoint", value: "A high moraine ridge adjacent to the fifth lake providing an unparalleled close-range vantage point of Mount Everest, Lhotse, and the giant glacier." },
      { label: "Time Needed", value: "4 to 6 hours round-trip from Gokyo village lodges; ideal for the afternoon of Day 10 after climbing Gokyo Ri." }
    ],
    proTip: "Always consult your lead guide before setting out for the upper lakes; afternoon weather can shift rapidly and wind chills near the Cho Oyu face are intense."
  },
  {
    id: "detail-card-gokyo-ri-climb",
    category: "route",
    categoryLabel: "SUMMIT VIEWPOINT",
    readTime: "2 min read",
    title: "Gokyo Ri Summit Ascent (5,357 m): Effort, Timing & Panoramas",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l4 8 5-5 5 15H2L8 3z"></path></svg>`,
    lead: "Rising dramatically behind Gokyo village, Gokyo Ri (5,357 m / 17,575 ft) is celebrated by veteran mountaineers as offering the most expansive 360-degree mountain panorama in the Himalayas.",
    facts: [
      { label: "Four 8,000-Meter Giants", value: "Direct unobstructed views of Mount Everest (8,848 m), Lhotse (8,516 m), Makalu (8,485 m), and Cho Oyu (8,188 m), with sparkling turquoise lakes below." },
      { label: "Climb Difficulty", value: "A strenuous, steep switchback hiking trail on loose rocky scree; non-technical, requiring no ropes, crampons, or mountaineering equipment." },
      { label: "Start Time & Duration", value: "Departs around 5:00 AM with headlamps; the ascent requires 2 to 3 hours of steady walking, followed by 1 to 1.5 hours descent for breakfast." },
      { label: "Summit Elevation", value: "5,357 meters (17,575 ft), marked with fluttering Buddhist prayer flags and stone cairns." }
    ],
    proTip: "Pre-dawn summit climb temperatures frequently drop to -15°C to -20°C with wind chill. Wear thermal base layers, a heavy down jacket, windproof shell, and keep spare camera batteries in an inside chest pocket."
  },
  {
    id: "detail-card-ngozumpa-glacier",
    category: "route",
    categoryLabel: "GLACIOLOGY & MORAINE",
    readTime: "2 min read",
    title: "Ngozumpa Glacier Landscape & Moraine Safety",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg>`,
    lead: "Stretching approximately 20 kilometers southward from Mount Cho Oyu, the Ngozumpa Glacier is the longest glacier in Nepal and the entire Himalayan mountain system.",
    facts: [
      { label: "Glacial Landscape", value: "Debris-covered moraines, towering ice cliffs, deep turquoise meltwater pools, and vast boulder screes carving through the valley." },
      { label: "Trail Routing", value: "The standard Gokyo trail skirts along the safe, stable lateral western moraine rather than traversing active glacier ice." },
      { label: "Trail Conditions", value: "Rocky, dusty, and gravel-strewn surfaces requiring watchful foot placement; stay on established cairn-marked lines." },
      { label: "Acoustic Wonders", value: "Listen closely in the stillness of dawn or dusk to hear the deep rumble, cracking, and groaning of shifting glacial ice." }
    ],
    proTip: "Remove the rubber caps from your trekking poles on moraine trails. The exposed tungsten carbide tips provide essential bite into loose shale and rocky steps."
  },
  {
    id: "detail-card-fitness-preparation",
    category: "health",
    categoryLabel: "FITNESS & TRAINING",
    readTime: "2 min read",
    title: "Trek Difficulty, Physical Fitness & Endurance Training",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    lead: "Graded as Challenging High-Altitude, the Gokyo Lake Trek does not demand technical climbing skills, but requires robust aerobic endurance and mental grit for 11 consecutive mountain hiking days.",
    facts: [
      { label: "Training Timeline", value: "Commence structured aerobic and leg-strengthening preparation 8 to 12 weeks before arriving in Nepal." },
      { label: "Cardio Regimen", value: "3 to 4 weekly sessions of stair climbing, incline treadmill walking, running, swimming, or cycling (45–60 mins per session)." },
      { label: "Loaded Daypack Hikes", value: "Weekend outdoor hikes carrying a 5 to 8 kg daypack build vital core stability and condition knee joints for sustained descents." },
      { label: "Mental Stamina", value: "A patient, cheerful mindset and the ability to embrace simple rustic lodge life are just as crucial as physical fitness." }
    ],
    proTip: "Train specifically on stair descents to condition your quadriceps eccentrically. This prevents knee fatigue when walking 1,500 meters downhill from Gokyo back toward Lukla."
  },
  {
    id: "detail-card-acclimatization-strategy",
    category: "health",
    categoryLabel: "ALTITUDE & HEALTH",
    readTime: "2 min read",
    title: "Two-Stage Acclimatization Strategy (Namche & Machhermo)",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    lead: "Acclimatization cannot be rushed; our 15-day itinerary incorporates two dedicated acclimatization rest stages to give your cardiovascular system ample time to manufacture oxygen-carrying red blood cells.",
    facts: [
      { label: "Stage 1 (Day 5 - Namche 3,440 m)", value: "Active acclimatization day hike up to the Everest View Hotel (~3,900 m) following the physiological rule: 'Climb High, Sleep Low'." },
      { label: "Stage 2 (Day 8 - Machhermo 4,470 m)", value: "Active afternoon ridge climb to ~4,800 m above Machhermo to prepare your lungs for sleeping at Gokyo village (4,790 m)." },
      { label: "HRA Rescue Clinic", value: "Machhermo is home to the Himalayan Rescue Association (HRA) volunteer medical clinic providing daily altitude safety lectures." },
      { label: "Safe Elevation Gradient", value: "Our daily sleeping elevation gain above 3,000 meters strictly adheres to the international 300–500 m daily safety threshold." }
    ],
    proTip: "Attend the free 3:00 PM altitude briefing at the Machhermo HRA clinic on Day 7 or 8. The volunteer doctors share invaluable medical advice on altitude acclimation."
  },
  {
    id: "detail-card-walking-hours-pacing",
    category: "health",
    categoryLabel: "TRAIL REALITIES",
    readTime: "2 min read",
    title: "Walking Hours, Distances & Daily Trail Pacing",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    lead: "The universal golden rule of high-altitude trekking in Nepal is 'Bistari, Bistari' (slowly, slowly)—steady rhythmic breathing preserves oxygen efficiency and prevents premature exhaustion.",
    facts: [
      { label: "Daily Distance", value: "8 to 14 km on lower valley days; high-altitude stages are shorter (5–8 km) due to steeper gradient and reduced atmospheric oxygen." },
      { label: "Daily Walking Time", value: "4 to 6 hours on average walking days, with leisurely teahouse lunch breaks and viewpoint photography stops." },
      { label: "Daily Schedule", value: "Breakfast at 7:00 AM, trail departure at 7:45–8:00 AM, arriving at your afternoon lodge by 1:30–3:00 PM before afternoon mist gathers." },
      { label: "Breathing Synchronization", value: "Match each step to a measured breath; never allow yourself to hyperventilate by rushing uphill." }
    ],
    proTip: "If you feel winded on uphill stone staircases, shorten your step length rather than halting completely. A slow, unbroken cadence conserves tremendous energy over 15 days."
  },
  {
    id: "detail-card-seasons-weather",
    category: "logistics",
    categoryLabel: "SEASONS & WEATHER",
    readTime: "2 min read",
    title: "Best Trekking Seasons, Weather Realities & Frozen Lakes",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
    lead: "Crisp alpine skies, panoramic visibility, and comfortable walking temperatures make Autumn (October–November) and Spring (March–May) the premier trekking windows for the Gokyo Valley.",
    facts: [
      { label: "Autumn (Oct–Nov)", value: "Statistically the clearest skies, crispest mountain visibility, and radiant unfrozen turquoise lakes. Daytime highs: 10°C–14°C; night lows: -5°C to -15°C." },
      { label: "Spring (Mar–May)", value: "Vibrant rhododendron and magnolia forest blooms in the lower valley, warming daytime conditions, and unfrozen turquoise waters." },
      { label: "Winter (Dec–Feb)", value: "Sub-zero conditions (-20°C at night) and thick ice sheets across all six lakes; peaceful, solitary trails for cold-tolerant trekkers." },
      { label: "Monsoon (Jun–Aug)", value: "Heavy cloud cover, muddy trails with leeches in lower sections, and frequent Lukla flight delays; trekking is not recommended." }
    ],
    proTip: "Late October through mid-November provides the absolute highest probability of crystal-clear sunrise views of Mount Everest and Cho Oyu from Gokyo Ri."
  },
  {
    id: "detail-card-route-comparisons",
    category: "route",
    categoryLabel: "ROUTES & CIRCUITS",
    readTime: "2 min read",
    title: "Route Comparisons & High Pass Extensions (Renjo La & Cho La)",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>`,
    lead: "The Gokyo Valley acts as the central wilderness hub of the Khumbu, offering both a standalone peaceful lake route and high glaciated circuit crossings.",
    facts: [
      { label: "Classic Gokyo Lake Trek (15 Days)", value: "Our standard in-and-out route via Dole and Namche. Safe, manageable, and features the lowest objective hazard and crowd density." },
      { label: "Gokyo & Cho La Pass (18–19 Days)", value: "Traverses Cho La Pass (5,420 m) eastward to Dzongla and Lobuche, linking Gokyo with Everest Base Camp and Kala Patthar." },
      { label: "Gokyo & Renjo La Pass (16–17 Days)", value: "Crosses Renjo La Pass (5,360 m) westward, descending through remote Bhote Koshi valley pastures and Thame village back to Namche." },
      { label: "Custom Extensions", value: "Both pass extensions can be seamlessly arranged with our Kathmandu operations team if you have extra travel days and alpine experience." }
    ],
    proTip: "If you want to add Cho La Pass or Renjo La Pass to your journey, let us know prior to booking so we can equip you with microspikes and adjust your national park permit route filing."
  },
  {
    id: "detail-card-flight-logistics",
    category: "logistics",
    categoryLabel: "AVIATION LOGISTICS",
    readTime: "2 min read",
    title: "Flights, Airports & Ramechhap / Manthali Operations",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"></path></svg>`,
    lead: "Flying into Lukla's Tenzing-Hillary Airport (2,850 m) is one of the world's most scenic mountain flight experiences, requiring informed understanding of flight routing.",
    facts: [
      { label: "Kathmandu Flights (Off-Peak)", value: "During off-peak months, flights operate directly between Tribhuvan International Airport (TIA) and Lukla (~30 minutes flight)." },
      { label: "Ramechhap Operations (Peak Season)", value: "In busy spring (Apr–May) and autumn (Oct–Nov) seasons, CAAN redirects all Lukla traffic to Ramechhap Airport to bypass Kathmandu air traffic." },
      { label: "Private Ground Transfers", value: "We provide private, comfortable shared transfer vans from Kathmandu to Ramechhap (approx. 4 to 5 hours drive) included in your booking." },
      { label: "VFR Flight Rules", value: "Lukla flights operate strictly under Visual Flight Rules; flights only depart when mountain visibility is 100% clear." }
    ],
    proTip: "Day 15 in our 15-day itinerary serves as an essential flight contingency buffer, ensuring that temporary weather holds in Lukla never jeopardize your international flight home."
  },
  {
    id: "detail-card-permits-regulations",
    category: "logistics",
    categoryLabel: "PERMITS & RULES",
    readTime: "2 min read",
    title: "Permits, Registrations & Mandatory Guide Regulations",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    lead: "Entering the protected alpine ecosystems of the Khumbu region requires official government documentation and compliance with national park conservation policies.",
    facts: [
      { label: "Sagarmatha National Park Permit", value: "NPR 3,000 (~$23 USD) + 13% VAT, issued by the Department of National Parks and Wildlife Conservation to fund park conservation." },
      { label: "Khumbu Pasang Lhamu Entry Permit", value: "NPR 2,000 (~$15 USD), issued directly at Lukla and Monjo by the local municipal government to fund community trails." },
      { label: "Mandatory Guide Regulation", value: "Under official Nepal Tourism Board regulations, all foreign trekkers must be accompanied by a certified, licensed mountain guide." },
      { label: "All Permits Included", value: "Both required permits, municipal registrations, and government taxes are fully included in your Namaste Hiking Trek expedition package." }
    ],
    proTip: "Carry 4 passport-sized photos and a color copy of your passport to our Kathmandu pre-trek briefing for emergency backup documentation at park checkpoints."
  },
  {
    id: "detail-card-safety-evacuation",
    category: "health",
    categoryLabel: "SAFETY & EMERGENCY",
    readTime: "2 min read",
    title: "Safety Protocols, Altitude Monitoring & Helicopter Rescue",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    lead: "Your safety is our foremost commitment; our lead Sherpa guides are certified wilderness first responders equipped with medical diagnostics and immediate emergency dispatch channels.",
    facts: [
      { label: "Twice-Daily Health Checks", value: "Lead guides monitor and record your pulse rate and blood oxygen saturation (SpO2) morning and evening using portable pulse oximeters." },
      { label: "First Aid & Medications", value: "Comprehensive medical kits carried on trail, including Diamox (Acetazolamide), analgesics, rehydration salts, and broad-spectrum antibiotics." },
      { label: "Descent Protocol", value: "If acute mountain sickness symptoms worsen or fail to resolve with rest, our guides initiate immediate assisted descent to lower elevation." },
      { label: "Helicopter Rescue", value: "In serious medical emergencies (e.g., severe AMS, HAPE, or HACE), our Kathmandu team dispatches emergency helicopter airlifts within 45–90 minutes." }
    ],
    proTip: "Make certain your travel insurance policy explicitly covers high-altitude trekking up to 6,000 meters and emergency medical helicopter evacuation with cashless direct hospital billing."
  },
  {
    id: "detail-card-costs-cash-tips",
    category: "logistics",
    categoryLabel: "MONEY & BUDGETING",
    readTime: "2 min read",
    title: "Costs, Budgeting, Cash Currency & Tipping Guidelines",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    lead: "While your comprehensive package covers domestic flights, permits, guide, porters, accommodation, and all three daily meals, carrying sufficient cash for personal teahouse expenses is essential.",
    facts: [
      { label: "Recommended Cash", value: "Carry NPR 30,000 to NPR 45,000 (~$230–$350 USD) per person in cash (Nepali Rupees) withdrawn in advance in Kathmandu." },
      { label: "Daily Out-of-Pocket Expenses", value: "Hot showers (NPR 400–700), device battery charging (NPR 200–500), Wi-Fi cards (NPR 500–800), bakery snacks, and sodas." },
      { label: "No High-Altitude ATMs", value: "There are no functioning ATMs above Namche Bazaar; teahouses operate strictly on a cash-only basis." },
      { label: "Crew Tipping Guidelines", value: "Tipping your guide and porter is a deeply respected tradition in Nepal; typical tipping is 10%–15% of your trek cost pooled by your group on the final night in Lukla." }
    ],
    proTip: "Withdraw all necessary cash in Kathmandu before flying to Lukla. ATMs in Namche Bazaar frequently run out of cash during busy trekking seasons."
  }
];

console.log(`Loaded ${guidesData.length} guides.`);

// 2. Generate HTML markup for the upgraded section
function buildGuidesSectionHTML() {
  let html = `
          <!-- Section 6: Read Before You Book: 16 In-Depth Gokyo Guides -->
          <section id="section-details" class="trek-detail-section">
            <div class="details-title-wrapper" style="margin-bottom: 20px;">
              <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
                <h2 class="details-main-title" style="margin: 0;">Read Before You Book: 16 In-Depth Gokyo Guides</h2>
                <div class="details-bulk-actions">
                  <button type="button" id="guidesToggleAllBtn" class="guides-bulk-toggle-btn">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                    <span>Expand All</span>
                  </button>
                </div>
              </div>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 10px;"></div>
            </div>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.8; margin-bottom: 24px;">
              Prepare thoroughly for your high-altitude journey. We have documented every operational, physiological, and logistical nuance of trekking into the Gokyo Valley—from teahouse heating realities and water purification to sunrise climbs of Gokyo Ri and helicopter rescue protocols.
            </p>

            <!-- Guide Controls: Category Tabs & Real-Time Filter -->
            <div class="guide-controls-wrapper">
              <!-- Category Filter Tabs -->
              <div class="guide-category-pills" id="guideCategoryPills" role="tablist">
                <button type="button" class="guide-pill-btn active" data-filter="all" role="tab" aria-selected="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  <span>All Guides</span>
                  <span class="guide-pill-count">16</span>
                </button>
                <button type="button" class="guide-pill-btn" data-filter="route" role="tab" aria-selected="false">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
                  <span>Route & Lakes</span>
                  <span class="guide-pill-count">5</span>
                </button>
                <button type="button" class="guide-pill-btn" data-filter="health" role="tab" aria-selected="false">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  <span>Health & Altitude</span>
                  <span class="guide-pill-count">4</span>
                </button>
                <button type="button" class="guide-pill-btn" data-filter="lodge" role="tab" aria-selected="false">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="M3 13h18"></path><circle cx="8" cy="9" r="1.5"></circle></svg>
                  <span>Food & Stay</span>
                  <span class="guide-pill-count">3</span>
                </button>
                <button type="button" class="guide-pill-btn" data-filter="logistics" role="tab" aria-selected="false">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                  <span>Logistics & Cost</span>
                  <span class="guide-pill-count">4</span>
                </button>
              </div>

              <!-- Filter Search Bar & Reading Tracker Progress -->
              <div class="guide-search-and-progress">
                <div class="guide-search-box">
                  <svg class="guide-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  <input type="text" id="guideSearchInput" class="guide-search-input" placeholder="Search guides (e.g. Wi-Fi, Diamox, Gokyo Ri, showers, permits)..." aria-label="Search Gokyo guides">
                  <button type="button" id="guideSearchClearBtn" class="guide-search-clear" style="display: none;" aria-label="Clear search">×</button>
                </div>

                <!-- Interactive Progress Tracker Badge -->
                <div class="details-progress-wrapper" style="margin: 0;">
                  <div class="details-progress-badge">
                    <div class="details-progress-ring-box">
                      <svg width="44" height="44">
                        <circle class="details-progress-ring-bg" r="18" cx="22" cy="22"></circle>
                        <circle class="details-progress-ring-bar" r="18" cx="22" cy="22"></circle>
                      </svg>
                    </div>
                    <div class="details-progress-text-box">
                      <span class="details-progress-count">0/16 read</span>
                      <span class="details-progress-status">Nice start — keep going</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 16 Upgraded Guide Accordion Cards -->
            <div class="details-accordion-wrapper" id="detailsAccordionWrapper" style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 30px;">
`;

  guidesData.forEach((g, index) => {
    html += `
              <!-- Guide ${index + 1}: ${g.title} -->
              <div class="detail-accordion-card" id="${g.id}" data-guide-category="${g.category}">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      ${g.icon}
                      <div class="detail-check-bubble">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                    </div>
                    <div class="detail-header-info">
                      <div class="detail-meta-row">
                        <span class="detail-badge-pill">${g.categoryLabel}</span>
                        <span class="detail-read-time">${g.readTime}</span>
                      </div>
                      <h3 class="detail-accordion-title">${g.title}</h3>
                    </div>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner">
                    <p class="guide-lead-text">${g.lead}</p>
                    
                    <div class="guide-quick-facts-grid">
                      ${g.facts.map(f => `
                      <div class="guide-fact-item">
                        <span class="guide-fact-label">${f.label}:</span>
                        <span class="guide-fact-value">${f.value}</span>
                      </div>
                      `).join('')}
                    </div>

                    <div class="guide-pro-tip-box">
                      <div class="guide-pro-tip-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="9" y1="18" x2="15" y2="18"></line><line x1="10" y1="22" x2="14" y2="22"></line><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>
                        <span>Sherpa Guide Tip</span>
                      </div>
                      <p class="guide-pro-tip-text">${g.proTip}</p>
                    </div>
                  </div>
                </div>
              </div>
`;
  });

  html += `
            </div>

            <!-- Closing Contextual Conversion micro-CTA -->
            <div class="guide-cta-card">
              <div class="guide-cta-icon-box">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div class="guide-cta-content">
                <h4 class="guide-cta-title">Have Questions About High-Altitude Conditions in Gokyo?</h4>
                <p class="guide-cta-desc">Our veteran Sherpa expedition leaders have guided over 100+ Gokyo & Cho Oyu ascents. Ask us anything about cold-weather layering, current lake conditions, or custom pass extensions.</p>
              </div>
              <div class="guide-cta-buttons">
                <a href="https://wa.me/9779851000000?text=Hello%20Namaste%20Hiking%20Trek,%20I'm%20reading%20the%20Gokyo%20Guides%20and%20have%20questions%20about%20the%20trek" class="btn-guide-wa" target="_blank" rel="noopener">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Chat on WhatsApp
                </a>
                <a href="#section-booking" class="btn-guide-book">
                  Check Dates & Book
                </a>
              </div>
            </div>
          </section>
`;

  return html;
}

// 3. Inject new section into trek/gokyo-lakes-trek/index.html
const htmlPath = 'trek/gokyo-lakes-trek/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const startMarker = '<!-- Section 6: Read Before You Book: 16 In-Depth Gokyo Guides -->';
const endMarker = '<!-- Section 7: Altitude Profile -->';

const startIdx = html.indexOf(startMarker);
const endIdx = html.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
  console.error("Could not find section markers!", { startIdx, endIdx });
  process.exit(1);
}

const newSectionHTML = buildGuidesSectionHTML();
html = html.substring(0, startIdx) + newSectionHTML + '\n          ' + html.substring(endIdx);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Successfully updated trek/gokyo-lakes-trek/index.html with upgraded 16 Guides section!');
