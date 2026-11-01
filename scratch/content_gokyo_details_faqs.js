// Module 4: 16 Important Details (Guides) and 30 Tailored FAQs for Gokyo Lake Trek

const detailsGuides = [
  {
    id: "teahouse-life",
    category: "LODGE & TEAHOUSE",
    title: "Mountain Teahouses & Accommodation Standards",
    desc: `Trekking in the Khumbu follows the traditional Himalayan teahouse system. A teahouse is a family-run mountain lodge offering a communal heated dining hall and basic private bedrooms (typically twin-share with two wooden single beds, foam mattresses, clean sheets, and pillows). In Namche Bazaar, lodges offer modern amenities such as en-suite bathrooms, electric blankets, and bakery cafes. Higher up the Gokyo Valley—in Dole, Machhermo, and Gokyo village—infrastructure becomes progressively simpler. Rooms are unheated; the central dining room stove (fueled by dried yak dung or wood pellets) is lit each evening around 4:30–5:00 p.m., serving as the cozy social hub of the lodge. At Gokyo (4,790 m), facilities are functional and clean, with shared Asian-style squat or Western toilets on each floor. Hot showers (gas or solar-heated) are available for an extra charge of NPR 400–700 ($3–$6). We provide four-season sleeping bags rated to -15°C/-20°C to ensure you stay warm and comfortable through frosty alpine nights.`
  },
  {
    id: "food-dining",
    category: "FOOD & NUTRITION",
    title: "Teahouse Food, Meal Choices & Dietary Options",
    desc: `Mountain teahouse kitchens serve a satisfying blend of traditional Nepali staples, Tibetan specialties, and familiar international comfort dishes. The undisputed champion of trekking nutrition is Dal Bhat: a steaming plate of steamed white or brown rice, aromatic lentil soup, spiced vegetable curry, sautéed greens (saag), and spicy pickled chutney. Dal Bhat is freshly prepared, nutritious, easily digestible, and comes with free refills ("Dal Bhat Power, 24 Hour!"). Other common menu choices include vegetable and egg fried rice, chow mein noodles, potato rosti, macaroni cheese, momos (steamed dumplings), porridge, pancakes, and Tibetan bread with honey. Vegetarian and vegan diets are exceptionally easy to cater to along the entire Gokyo route. If you have severe food allergies (such as celiac gluten intolerance or nut allergies), inform your guide prior to departure and double-check with the lodge kitchen, as remote mountain kitchens utilize shared preparation spaces.`
  },
  {
    id: "hydration-water",
    category: "HYDRATION & WATER",
    title: "Hydration, Drinking Water & Purification Methods",
    desc: `Proper hydration is the single most effective physiological aid for high-altitude acclimatization. You should consume between 3.5 and 4.5 liters of clean fluid daily (including water, hot lemon, ginger tea, and garlic soup). At high elevation, the atmosphere is exceptionally dry, and your increased respiration rate causes rapid moisture loss. Do not rely on single-use plastic mineral water bottles, which create severe environmental waste in Sagarmatha National Park and are increasingly prohibited. Instead, carry two 1-liter reusable wide-mouth bottles (such as Nalgene) or an insulated flask. You can fill up tap water at lodges and treat it using a combination of water purification tablets (Aquatabs / chlorine dioxide), a portable UV purifier (SteriPEN), or a hollow-fiber microfilter (Sawyer Squeeze). Alternatively, teahouses sell boiled drinking water (NPR 200–500 per liter depending on elevation), which can also be placed inside your sleeping bag at night as a comforting bed warmer before drinking the next morning.`
  },
  {
    id: "lakes-ramsar",
    category: "SACRED WETLANDS",
    title: "The Gokyo Lakes System & Sacred Dudh Pokhari",
    desc: `The Gokyo Lakes comprise the highest freshwater alpine wetland system in the world, spanning a designated Ramsar site of 7,770 hectares within Sagarmatha National Park. The wetland consists of six principal glacial lakes fed by subterranean seepage from the Ngozumpa Glacier and snow meltwater from surrounding peaks. The third lake, Dudh Pokhari ("Milk Lake" / Gokyo Cho), sits at 4,790 m directly beside Gokyo village and is the most celebrated for its vivid turquoise-emerald hue. Beyond their extraordinary visual splendor, the lakes hold profound spiritual significance: during the sacred Janai Purnima festival in August, hundreds of Hindu and Buddhist pilgrims trek to the lakes to take holy cleansing dips. The basin is also an internationally critical stopover sanctuary for migratory waterfowl, including the Brahminy duck (ruddy shelduck) and bar-headed geese crossing the Himalayan divide. Trekkers are expected to treat the lakes with deep reverence—swimming, washing clothes, and disposing of waste in or near the water is strictly prohibited.`
  },
  {
    id: "upper-lakes",
    category: "OPTIONAL EXCURSIONS",
    title: "Fourth & Fifth Lake Excursions: Exploring the Upper Basin",
    desc: `While standard itineraries focus on Gokyo Ri and the principal village lake (Dudh Pokhari), ambitious hikers with good stamina can explore the upper Gokyo Valley on Day 10. Heading north along the western lateral moraine of the Ngozumpa Glacier, a 1.5 to 2-hour walk leads to the Fourth Lake, Thonak Cho (4,870 m), an immense, deep-blue water body framed by dramatic granite cliffs. Continuing another hour farther north brings you to the Fifth Lake, Ngozumpa Cho (4,990 m). Near the fifth lake sits the renowned viewpoint known as Scoundrel's Viewpoint, which presents a jaw-dropping, close-up perspective of the colossal southern face of Mount Cho Oyu (8,188 m) and the vast ice field of the Ngozumpa Glacier with Mount Everest towering in the distance. This optional round-trip excursion adds approximately 5 to 6 hours of high-altitude walking, so evaluate your energy reserves, weather conditions, and consult your Sherpa guide before setting out.`
  },
  {
    id: "gokyo-ri-climb",
    category: "SUMMIT VIEWPOINT",
    title: "Gokyo Ri Summit Ascent (5,357 m): Effort, Timing & Panoramas",
    desc: `Rising steeply directly behind Gokyo village, Gokyo Ri (5,357 m / 17,575 ft) is universally regarded as one of the finest mountain panoramic viewpoints in the Himalayas. The climb begins in the pre-dawn darkness (typically 5:00 a.m.) to catch first light illuminating the summits. The trail is non-technical—a well-trodden, zig-zagging dirt and rock path—but the relentless uphill gradient and thin air (approximately 50% sea-level oxygen) make it physically demanding. The ascent normally takes 2 to 3 hours at a slow, rhythmic "Sherpa pace." Upon reaching the prayer-flag-adorned summit, you are greeted by an unforgettable 360-degree amphitheater: Mount Everest (8,848 m), Lhotse (8,516 m), Makalu (8,485 m), and Cho Oyu (8,188 m) stand in stark, glittering relief against the sky, while the turquoise lakes of Gokyo shimmer like dropped jewels thousands of feet below. Carry warm gloves, an expedition down jacket, headlamp, and water inside an insulated sleeve to prevent freezing.`
  },
  {
    id: "ngozumpa-glacier",
    category: "GLACIOLOGY & MORAINE",
    title: "Ngozumpa Glacier Landscape & Moraine Safety",
    desc: `Stretching roughly 20 kilometers southward from the slopes of Cho Oyu, the Ngozumpa Glacier is the longest glacier in the Himalayas. Unlike pristine white polar ice sheets, Ngozumpa is a classic debris-covered glacier: its dynamic ice core is blanketed beneath millions of tons of shattered rock, sand, gravel, and massive boulders carved out by centuries of glacial movement. The trail into Gokyo climbs up and over the glacier's unstable terminal moraine near Pangkha. From elevated vantage points along the lateral moraine and Gokyo Ri, you can see dramatic meltwater ponds, supraglacial lakes, sheer exposed ice cliffs, and hear the occasional echoing creaks of shifting ice. Trekkers should strictly remain on established, guide-approved paths and never wander onto untracked moraine edges or slippery ice surfaces without professional instruction.`
  },
  {
    id: "fitness-preparation",
    category: "FITNESS & TRAINING",
    title: "Trek Difficulty, Physical Fitness & Endurance Training",
    desc: `The Gokyo Lake Trek is graded as Challenging High-Altitude. It does not require technical mountaineering skills, ropes, or previous alpine climbing experience, but it does demand sustained cardiovascular endurance, leg strength, and mental resilience. You will be walking for 5 to 7 hours consecutively for 11 days over uneven terrain, stone staircases, and rocky moraines, carrying a 5–7 kg daypack at elevations exceeding 4,000–5,000 meters. To prepare, begin physical training 8 to 12 weeks before departure. Focus on aerobic endurance (brisk uphill walking, stairmaster, cycling, swimming, and trail running 3–4 times weekly) combined with lower-body strength training (squats, lunges, step-ups, and core stability). Most importantly, take practice day hikes wearing your actual trekking boots and weighted daypack. Remember: physical fitness does not prevent Acute Mountain Sickness (AMS); only gradual, disciplined ascent allows the body to acclimatize safely.`
  },
  {
    id: "acclimatization-strategy",
    category: "ALTITUDE & HEALTH",
    title: "Two-Stage Acclimatization Strategy (Namche & Machhermo)",
    desc: `Our 15-day itinerary incorporates two vital, deliberate acclimatization stops: Day 5 at Namche Bazaar (3,440 m) and Day 8 at Machhermo (4,470 m). Rapid ascent into the Gokyo Valley without adequate staging is a frequent cause of altitude sickness on rushed 11-day programs. In Namche, we hike up to the Everest View Hotel (~3,900 m) before returning to sleep at 3,440 m, stimulating natural erythropoietin (EPO) production and hemoglobin synthesis. At Machhermo, spending two consecutive nights allows your body to adjust to 4,470 m before crossing the terminal moraine to sleep at 4,790 m in Gokyo. Your guide monitors your health twice daily using a digital pulse oximeter. If you experience mild symptoms of AMS (headache, nausea, loss of appetite, or sleeplessness), notify your guide immediately. Rest, hydration, and taking Diamox (Acetazolamide) usually resolve mild symptoms; severe symptoms require immediate descent.`
  },
  {
    id: "walking-hours-pacing",
    category: "TRAIL REALITIES",
    title: "Walking Hours, Distances & Daily Trail Pacing",
    desc: `Daily walking times on the Gokyo Lake Trek average between 4 and 7 hours, covering distances from 6 km on high-altitude approach days to 18 km on the lower river return. It is crucial to understand that trail distance does not equal effort in the Himalayas: walking 6 km between Dole and Machhermo above 4,000 m requires more physical output than walking 12 km at lower elevations because each breath yields approximately 40% less oxygen. The secret to completing the Gokyo trek successfully is maintaining a steady, rhythmic "Sherpa pace" (bistari, bistari — slow and steady). Keep your strides compact, synchronize your breathing with your footsteps, avoid sudden sprints, and take regular 5-minute hydration rests. Trekking poles reduce knee impact by up to 25% on long downhill descents and assist balance across loose rocky moraines.`
  },
  {
    id: "seasons-weather",
    category: "SEASONS & WEATHER",
    title: "Best Trekking Seasons, Weather Realities & Frozen Lakes",
    desc: `The optimal trekking windows for Gokyo are Autumn (late September to late November) and Spring (March to May). Autumn offers crystal-clear post-monsoon atmospheric clarity, stable sunny days, mild daytime temperatures (10°C to 15°C at lower elevations; 0°C to 5°C in Gokyo), and crisp, starry nights (dropping to -10°C to -15°C). Spring brings warmer weather, lengthening daylight, and spectacular blooms of wild red, pink, and white rhododendrons across the forests between Phortse and Dole. In winter (December to February), temperatures plummet below -20°C in Gokyo, and the lakes frequently freeze over into vast sheets of shimmering turquoise ice—an ethereal spectacle, but requiring heavy winter insulation and microspikes. Summer/Monsoon (June to August) brings heavy rainfall, leeches, obscured mountain views, and frequent Lukla flight cancellations, making it unadvisable for standard trekking.`
  },
  {
    id: "route-comparisons",
    category: "ROUTES & CIRCUITS",
    title: "Route Comparisons & High Pass Extensions (Renjo La & Cho La)",
    desc: `While our standard 15-day itinerary returns via Dole and Namche Bazaar, the Gokyo Valley is a central junction for several famous high-altitude pass crossings: 
1. **Gokyo & Cho La Pass to Everest Base Camp (18–19 Days):** Crosses the glaciated Cho La Pass (5,420 m) eastward from Gokyo to Dzongla and Gorak Shep, combining Gokyo Ri with Everest Base Camp and Kala Patthar. 
2. **Gokyo & Renjo La Pass Circuit (16–17 Days):** Crosses the rugged Renjo La Pass (5,360 m) westward from Gokyo into the remote Bhote Koshi valley, descending through Thame to Namche Bazaar. 
3. **Everest Three Passes Trek (20–22 Days):** The ultimate circuit tackling Kongma La (5,535 m), Cho La (5,420 m), and Renjo La (5,360 m). 
These pass extensions require additional days, crampons/microspikes, and strong high-altitude stamina. Contact our team if you wish to upgrade to one of these extended circuits.`
  },
  {
    id: "flight-logistics",
    category: "AVIATION LOGISTICS",
    title: "Flights, Airports & Ramechhap / Manthali Operations",
    desc: `Flights between Kathmandu and Lukla (Tenzing-Hillary Airport) operate aboard STOL (Short Take-Off and Landing) aircraft such as Twin Otters and Dorniers. The flight takes approximately 25–35 minutes. During peak trekking seasons (October–November and April–May), the Civil Aviation Authority of Nepal (CAAN) redirects all Lukla fixed-wing flights to Ramechhap/Manthali Airport to alleviate air traffic congestion at Kathmandu's international airport. When Ramechhap operations are in effect, our team coordinates private tourist vehicle transport between Kathmandu and Manthali (approx. 4–5 hours drive, typically departing Kathmandu around 1:00–2:00 a.m. for morning flights). Strict baggage limits apply: 15 kg (33 lbs) total per passenger (10 kg duffel + 5 kg hand carry). Lukla weather can change abruptly; flight delays are a standard reality of Himalayan travel, which is why Day 15 is built into our package as a contingency buffer.`
  },
  {
    id: "permits-regulations",
    category: "PERMITS & RULES",
    title: "Permits, Registrations & Mandatory Guide Regulations",
    desc: `Trekking to Gokyo requires two official government permits: 
1. **Sagarmatha National Park Entry Permit:** NPR 3,000 (~$25 USD) for foreign nationals; NPR 1,500 for SAARC citizens. 
2. **Khumbu Pasang Lhamu Rural Municipality Entry Fee:** NPR 2,000 (~$17 USD) per person, collected directly in Lukla. 
Both permits are fully included and processed by Namaste Hiking Trek on your behalf. Additionally, under official Nepal Tourism Board (NTB) regulations, solo independent trekking without a guide is strictly prohibited in the Everest/Gokyo region. Trekkers must be accompanied by a government-licensed trekking guide and registered through an authorized trekking agency. Unrestricted drone flying is illegal without specialized civil aviation and national park permits; unauthorized drones risk immediate confiscation and hefty fines.`
  },
  {
    id: "safety-evacuation",
    category: "SAFETY & EMERGENCY",
    title: "Safety Protocols, Altitude Monitoring & Helicopter Rescue",
    desc: `Your safety is our paramount priority. All Namaste Hiking Trek lead guides are wilderness first aid certified and carry a pulse oximeter to track blood oxygen saturation (SpO2) and heart rate every morning and evening. Our guides follow conservative protocols: if symptoms of Acute Mountain Sickness (AMS), High Altitude Pulmonary Edema (HAPE), or High Altitude Cerebral Edema (HACE) are detected, immediate descent to a lower elevation (Dole or Namche) is initiated. If emergency medical evacuation is necessary, our 24/7 Kathmandu operations base coordinates a private rescue helicopter directly with Nepal's premier aviation services and your international travel insurance assistance desk. Ensure your insurance explicitly covers trekking up to 6,000 meters and emergency helicopter airlift without requiring upfront cash outlays.`
  },
  {
    id: "costs-cash-tips",
    category: "MONEY & BUDGETING",
    title: "Costs, Budgeting, Cash Currency & Tipping Guidelines",
    desc: `While your package covers all accommodation, internal transport, flights, permits, and meals on the trek, you should carry sufficient cash in Nepalese Rupees (NPR) for personal expenses. There are no reliable ATMs above Namche Bazaar, and card payment facilities in remote lodges are virtually nonexistent or incur heavy surcharges. We recommend budgeting NPR 2,500 to 3,500 ($20–$30 USD) per day for personal expenses such as hot showers (NPR 400–700), device charging (NPR 200–500 per device), Wi-Fi cards (NPR 500–800), hot herbal teas, chocolate bars, and cold drinks. For tipping your field crew, it is customary in Nepal to tip around 10%–12% of the total trek package cost at the conclusion of the trip in Lukla (approx. $120–$150 USD for your lead guide and $80–$100 USD for your porter from each trekker). Exchange cash in Kathmandu before flying to Lukla.`
  }
];

const categorizedFaqs = {
  general: [
    {
      q: "How long is this Gokyo Lake Trek?",
      a: "This itinerary is 15 calendar days from Kathmandu arrival to departure. It features 11 scheduled mountain walking days (Days 3–13), two dedicated acclimatization days (Day 5 in Namche Bazaar and Day 8 in Machhermo), a full exploration day around Gokyo and Gokyo Ri, and Day 15 as a built-in flight contingency buffer."
    },
    {
      q: "How high is Gokyo village in this itinerary?",
      a: "Gokyo village sits at approximately 4,790 meters (15,715 feet) above sea level, nestled on the eastern shore of Dudh Pokhari (the third Gokyo lake) directly beneath Gokyo Ri."
    },
    {
      q: "How high is the summit of Gokyo Ri?",
      a: "Gokyo Ri stands at approximately 5,357 meters (17,575 feet). It is the highest planned viewpoint of the trek, offering an extraordinary 360-degree panorama of Mount Everest, Lhotse, Makalu, and Cho Oyu."
    },
    {
      q: "What is the highest sleeping elevation on the trek?",
      a: "Gokyo village at approximately 4,790 meters (15,715 feet) is the highest overnight sleeping stop in this itinerary. The summit of Gokyo Ri (5,357 m) is an early morning daytime viewpoint climb, not an overnight camp."
    },
    {
      q: "Is the Gokyo Lake Trek difficult?",
      a: "The trek is rated as Challenging High-Altitude. It does not require technical climbing skills or ropes, but it involves walking 5 to 7 hours daily for 11 consecutive days on rocky trails and steep moraines in cold, thin-air conditions."
    },
    {
      q: "Can beginners do the Gokyo Lake Trek?",
      a: "Yes. Physically fit beginners with positive mental stamina can successfully complete the Gokyo Lake Trek. Our 15-day profile includes two dedicated acclimatization rest stages (Namche and Machhermo), which gives the body ample time to adjust safely."
    }
  ],
  permits: [
    {
      q: "Do I need a licensed guide for the Gokyo Lake Trek?",
      a: "Yes. Under official Nepal Tourism Board (NTB) regulations, all foreign trekkers in Sagarmatha National Park and the Gokyo Valley must be accompanied by a government-licensed trekking guide and registered through an authorized trekking agency."
    },
    {
      q: "What does the published TIMS guidance say about Gokyo?",
      a: "Nepal Tourism Board's revised route list explicitly designates the Gokyo Valley among high-altitude trekking routes requiring agency-issued TIMS cards and certified licensed guides to ensure trekker safety and environmental protection."
    },
    {
      q: "Which permits are required and are they included?",
      a: "Two permits are required: the Sagarmatha National Park Entry Permit (NPR 3,000) and the Khumbu Pasang Lhamu Rural Municipality Permit (NPR 2,000). Both permits and official registrations are fully included in your Namaste Hiking Trek package."
    },
    {
      q: "Do Lukla flights depart from Kathmandu or Ramechhap?",
      a: "During off-peak months, flights operate directly between Kathmandu (TIA) and Lukla. During busy peak trekking seasons (spring and autumn), the Civil Aviation Authority redirects flights through Ramechhap/Manthali Airport to avoid air traffic delays. We provide private ground transfers to Ramechhap when applicable."
    },
    {
      q: "Can Lukla flights be delayed or cancelled?",
      a: "Yes. Flights to Lukla operate under strict Visual Flight Rules (VFR) and depend on clear visibility in the mountain valleys. Mist, heavy cloud, or high winds can cause delays, which is why our 15-day itinerary includes Day 15 as a built-in contingency buffer."
    }
  ],
  accommodation: [
    {
      q: "What kind of food is available along the Gokyo route?",
      a: "Teahouses serve a hearty mix of traditional Nepali, Tibetan, and international meals. Options include Dal Bhat (rice, lentil soup, vegetable curry), fried noodles, fried rice, momos, pasta, potato dishes, porridge, eggs, pancakes, toast, and hot teas."
    },
    {
      q: "Can travelers with dietary restrictions or allergies trek to Gokyo?",
      a: "Yes. Vegetarian and vegan diets are very easy to accommodate. If you have gluten sensitivity or severe nut allergies, notify us before booking; our guides will coordinate directly with teahouse kitchens to ensure safe food preparation."
    },
    {
      q: "How do I get safe drinking water on the trek?",
      a: "Tap water from lodges can be purified using chlorine dioxide tablets, portable UV purifiers (SteriPEN), or microfilters. Teahouses also sell boiled drinking water. Single-use plastic mineral water bottles are discouraged for conservation."
    },
    {
      q: "Is Wi-Fi available at lodges in the Gokyo Valley?",
      a: "Yes. Most lodges up to Gokyo village offer Wi-Fi access via pre-paid scratch cards (such as Airzed or Everest Link, costing approx. $5–$7 for 10GB–20GB). Connection speeds are suitable for messaging, though cold weather can occasionally affect service."
    },
    {
      q: "Are hot showers and electricity charging available in Gokyo?",
      a: "Yes. Hot gas or solar showers are available at teahouses for NPR 400–700 ($3–$6). Electronic device charging is available in communal dining halls via solar/hydro systems for NPR 200–500 ($2–$4) per device. We recommend carrying a 20,000 mAh power bank."
    }
  ],
  health: [
    {
      q: "Which acclimatization days are included in this 15-day itinerary?",
      a: "Our itinerary includes two dedicated acclimatization days: Day 5 in Namche Bazaar (3,440 m) with a day hike to ~3,900 m near the Everest View Hotel, and Day 8 in Machhermo (4,470 m) with an active ridgeline hike."
    },
    {
      q: "What should I do if altitude sickness symptoms develop?",
      a: "Inform your guide immediately. Never ascend with symptoms of Acute Mountain Sickness (headache, nausea, dizziness). Your guide will check your oxygen saturation (SpO2) with a pulse oximeter, administer rest, hydration, or Diamox, and if necessary, initiate immediate descent to lower elevation."
    },
    {
      q: "What travel insurance do I need for the Gokyo Lake Trek?",
      a: "You must purchase comprehensive travel insurance that explicitly covers high-altitude mountain trekking up to 6,000 meters (19,685 ft) and emergency medical helicopter evacuation. Bring printed copies of your policy with emergency assistance contact numbers."
    },
    {
      q: "How much water should I drink daily at high altitude?",
      a: "Drink at least 3.5 to 4.5 liters of clean water and warm fluids daily. The air at high altitude is dry, and rapid respiration causes substantial dehydration, which exacerbates altitude sickness risk."
    },
    {
      q: "How cold does it get in Gokyo and on Gokyo Ri?",
      a: "During peak seasons (Oct–Nov and Mar–Apr), daytime temperatures range from 5°C to 12°C, but night temperatures at Gokyo village often drop to -5°C to -15°C. The pre-dawn summit climb to Gokyo Ri can feel like -15°C to -20°C with wind chill, requiring heavy thermal layers."
    }
  ],
  routes: [
    {
      q: "When and how do we climb Gokyo Ri?",
      a: "The ascent of Gokyo Ri (5,357 m) is scheduled for the early morning of Day 10, typically starting around 5:00 a.m. with headlamps. The steep, non-technical hiking ascent takes 2 to 3 hours, arriving at the summit as sunrise illuminates Everest, Lhotse, Makalu, and Cho Oyu."
    },
    {
      q: "Are the Gokyo Lakes frozen during the trek?",
      a: "During the main spring (April–May) and autumn (October–November) trekking seasons, the lakes are unfrozen and display their signature radiant turquoise colors. During deep winter (December to February), the lake surfaces freeze into thick sheets of ice."
    },
    {
      q: "What is the main lake beside Gokyo village?",
      a: "Dudh Pokhari ('Milk Lake'), also known as the Third Gokyo Lake (Gokyo Cho), is the primary water body located immediately adjacent to Gokyo settlement at 4,790 meters."
    },
    {
      q: "What is the Ngozumpa Glacier?",
      a: "The Ngozumpa Glacier is the longest glacier in the Himalayas (~20 km long), flowing southward from Mount Cho Oyu. It is a debris-covered glacier featuring moraine ridges, ice cliffs, and meltwater lakes that trekkers encounter entering Gokyo."
    },
    {
      q: "Can I visit the fourth and fifth Gokyo lakes?",
      a: "Yes. Day 10 includes free afternoon time in Gokyo. If you are feeling energetic and weather permits, you can hike along the glacier moraine to the Fourth Lake (Thonak Cho) and Fifth Lake (Ngozumpa Cho) beneath Cho Oyu's south face."
    }
  ],
  booking: [
    {
      q: "Is Gokyo quieter than the classic Everest Base Camp trek?",
      a: "Yes. After diverging from the main trail past Namche Bazaar at Mong La, the Gokyo corridor sees significantly fewer trekkers than the traditional Tengboche–EBC thoroughfare, offering a more peaceful, wilderness-focused trekking atmosphere."
    },
    {
      q: "Can the Gokyo Lake Trek be combined with Everest Base Camp?",
      a: "Yes. A popular extension is the 18–19 day Gokyo & Cho La Pass Trek, which connects Gokyo to Dzongla, Lobuche, and Everest Base Camp via the high glaciated Cho La Pass (5,420 m)."
    },
    {
      q: "Can Gokyo be combined with the Renjo La Pass?",
      a: "Yes. The Gokyo–Renjo La circuit crosses the Renjo La Pass (5,360 m) westward from Gokyo, descending through the remote Bhote Koshi valley and Thame village back to Namche Bazaar."
    },
    {
      q: "How much contingency does Day 15 provide and how much cash should I carry?",
      a: "Day 15 serves as a built-in buffer for Lukla weather delays or an unhurried departure day. We recommend carrying NPR 30,000–45,000 ($230–$350 USD) in cash from Kathmandu for personal lodge expenses (showers, Wi-Fi, snacks, charging) and crew tipping."
    }
  ]
};

function generateDetailGuidesHtml() {
  return detailsGuides.map((guide, idx) => `
              <!-- Guide ${idx + 1}: ${guide.title} -->
              <div class="detail-accordion-card" id="detail-card-${guide.id}">
                <div class="detail-accordion-header">
                  <div class="detail-badge-pill">${guide.category}</div>
                  <h3 class="detail-title">${guide.title}</h3>
                  <div class="detail-toggle-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-text-body">
                    <p>${guide.desc}</p>
                  </div>
                </div>
              </div>
  `).join('\n');
}

function generateFaqsHtml() {
  const categories = [
    { key: "general", label: "General & Difficulty" },
    { key: "permits", label: "Permits & Flights" },
    { key: "accommodation", label: "Lodging & Food" },
    { key: "health", label: "Acclimatization & Safety" },
    { key: "routes", label: "Gokyo Ri & Lakes" },
    { key: "booking", label: "Logistics & Budget" }
  ];

  const catButtonsHtml = categories.map((c, i) => `
                <button class="faq-category-btn${i === 0 ? ' active' : ''}" data-faq-cat="${c.key}">
                  ${c.label}
                </button>
  `).join('\n');

  const catPanelsHtml = categories.map((c, i) => {
    const isHidden = i === 0 ? '' : ' style="display: none;"';
    const faqsInCat = categorizedFaqs[c.key] || [];

    const itemsHtml = faqsInCat.map(faq => `
                  <div class="faq-item">
                    <button class="faq-item-question">
                      <span>${faq.q}</span>
                      <div class="faq-toggle-circle">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                      </div>
                    </button>
                    <div class="faq-item-answer">
                      <p>${faq.a}</p>
                    </div>
                  </div>
    `).join('\n');

    return `
              <!-- FAQ Category Panel: ${c.label} -->
              <div class="faq-category-panel" id="faq-panel-${c.key}"${isHidden}>
${itemsHtml}
              </div>
    `;
  }).join('\n');

  return `
            <h2 class="trek-section-title">Frequently Asked Questions: Gokyo Lake Trek</h2>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-top: 12px; margin-bottom: 24px; line-height: 1.7;">
              Find expert answers to common questions about route difficulty, altitude acclimatization, teahouse amenities, permits, flights, and the Gokyo Ri sunrise ascent.
            </p>

            <div class="faq-container-tabs" style="margin-bottom: 30px;">
              
              <!-- Category Filter Buttons -->
              <div class="faq-category-nav" style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
${catButtonsHtml}
              </div>

              <!-- FAQ Accordion Panels -->
              <div class="faq-panels-wrap">
${catPanelsHtml}
              </div>

            </div>
  `;
}

module.exports = {
  detailsGuides,
  categorizedFaqs,
  generateDetailGuidesHtml,
  generateFaqsHtml
};
