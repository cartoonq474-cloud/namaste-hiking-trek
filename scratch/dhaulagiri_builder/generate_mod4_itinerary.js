// Generator for Module 4: Section 2 - 20-Day Itinerary for Dhaulagiri Circuit Trek
const fs = require('fs');

function buildItineraryModule() {
  const days = [
    {
      day: 1,
      title: "Arrival in Kathmandu (1,355 m)",
      dist: "Airport Transfer (20–40 mins drive)",
      time: "Rest & Briefing",
      altM: 1355,
      altFt: 4445,
      gain: "0 m",
      meals: "Welcome Dinner Included",
      accom: "3-Star Boutique Hotel in Thamel",
      desc: `Your Dhaulagiri Circuit Trek begins with your arrival at Tribhuvan International Airport in Kathmandu. After completing customs and visa formalities, you will meet the designated Namaste Hiking Trek representative and transfer to your hotel. Once you have checked in, the remainder of the day is available for resting after international travel. Depending on your arrival time and energy level, you may explore the vibrant streets of Thamel, visit nearby shops, or enjoy a meal at a local restaurant. Keeping the schedule relaxed is advisable because the coming days involve equipment preparation, overland travel, and a demanding 20-day high-altitude mountain expedition. Important equipment should be organized before departure from Kathmandu because replacement options become non-existent after entering the remote upper Myagdi Valley.`,
      meta: `<strong>Preparation Priority:</strong> Meet your expedition leader in the evening for a comprehensive briefing. Confirm passport validity, personal travel insurance details, and gear checklist.`
    },
    {
      day: 2,
      title: "Kathmandu Valley Sightseeing & Expedition Preparation",
      dist: "City Tour / Hotel Staging",
      time: "Full Day Prep & Sightseeing",
      altM: 1355,
      altFt: 4445,
      gain: "0 m",
      meals: "Breakfast Included",
      accom: "3-Star Boutique Hotel in Thamel",
      desc: `The second day combines thorough preparation for the Dhaulagiri expedition with an opportunity to explore selected cultural and UNESCO World Heritage sites across the Kathmandu Valley. After breakfast, you may visit sacred locations such as Swayambhunath (Monkey Temple), Pashupatinath, or Boudhanath Stupa. The remainder of the day is devoted to crucial expedition preparation: review the 20-day day-by-day itinerary, verify your high-altitude boots, warm down jacket (-20°C), thermal layers, headlamp, and sub-zero sleeping bag. Our operations team validates all ACAP conservation permits and TIMS registration cards, while the expedition cook and kitchen crew pack the mess tents, stove fuel, and specialized rations for the remote camping stages.`,
      meta: `<strong>Insurance Verification:</strong> Ensure your travel insurance policy explicitly covers emergency helicopter evacuation and search/rescue up to 6,000 meters elevation.`
    },
    {
      day: 3,
      title: "Drive from Kathmandu to Beni (approx. 836 m)",
      dist: "285 km overland drive",
      time: "7 to 9 hours",
      altM: 836,
      altFt: 2743,
      gain: "-519 m (Net Descent)",
      meals: "Breakfast, Lunch, Dinner",
      accom: "Guesthouse / Local Hotel in Beni",
      desc: `After an early breakfast, begin the overland journey westward from Kathmandu toward Beni, the gateway to the Dhaulagiri trekking region and the Myagdi Valley. The scenic drive follows the Prithvi Highway along the Trisuli and Marsyangdi river valleys, passing lush terraced hillsides, rural towns, and bustling roadside markets before traversing towards Pokhara and continuing along the Kali Gandaki corridor to Beni. Road travel takes up a substantial part of the day, offering sweeping views of the changing landscape from central Nepal's valleys to the rugged foothills of the western Himalayas. Beni is a vital district headquarters and supply hub where our expedition team organizes the final fresh food provisions.`,
      meta: `<strong>Overland Note:</strong> Private vehicle transfer allows flexible photo stops and lunch along the river highway. Keep daypacks accessible inside the vehicle.`
    },
    {
      day: 4,
      title: "Drive from Beni to Babiyachaur (approx. 970 m)",
      dist: "24 km rural road transfer",
      time: "2 to 3 hours",
      altM: 970,
      altFt: 3182,
      gain: "+134 m",
      meals: "Breakfast, Lunch, Dinner",
      accom: "Local Guesthouse in Babiyachaur",
      desc: `Today's journey continues from Beni deeper into the Myagdi Valley toward Babiyachaur. This short road transfer follows the unpaved rural road network along the roaring Myagdi Khola, passing traditional Magar settlements, citrus orchards, and cascading waterfalls. Utilizing this vehicle approach reduces redundant walking on dirt roads and positions the group perfectly at the official foot trailhead for tomorrow's trekking departure. After arriving in Babiyachaur, settle into the local lodge, test your trekking poles and daypack weight distribution, and take an afternoon acclimatizing stroll through the rural village. Your guide coordinates porter loads and reviews tomorrow's walking stages.`,
      meta: `<strong>Trailhead Staging:</strong> Babiyachaur marks the end of vehicular access. Tomorrow morning the true foot expedition commences into the Myagdi gorge.`
    },
    {
      day: 5,
      title: "Trek from Babiyachaur to Dharapani (approx. 1,560 m)",
      dist: "10 km walking trail",
      time: "5 to 6 hours",
      altM: 1560,
      altFt: 5118,
      gain: "+590 m",
      meals: "Breakfast, Lunch, Dinner",
      accom: "Local Lodge / Teahouse in Dharapani",
      desc: `The active trekking journey begins as you leave Babiyachaur behind and follow the ancient stone-paved trails heading up the Myagdi Valley. The trail meanders through fertile river flats, crossing suspension bridges over the turquoise Myagdi Khola and climbing steadily through terraced paddy fields cultivated with rice, millet, and corn. You pass through small hamlets such as Shahashradhara and Dukhu, observing rural agricultural life where water buffalo plow the fields and children walk to local schools. The final approach to Dharapani involves a sustained climb up stone staircases carved into the hillside. Dharapani is a picturesque Magar village offering commanding views of the valley below.`,
      meta: `<strong>Pacing Guideline:</strong> Establish a relaxed, rhythmic walking pace today. Avoid rushing uphill in the humid lower elevations to conserve leg endurance.`
    },
    {
      day: 6,
      title: "Trek from Dharapani to Muri (approx. 1,850 m)",
      dist: "12 km mountain trail",
      time: "5 to 6 hours",
      altM: 1850,
      altFt: 6070,
      gain: "+290 m (multiple undulations)",
      meals: "Breakfast, Lunch, Dinner",
      accom: "Local Teahouse / Lodge in Muri",
      desc: `After a hearty breakfast, the trail ascends past terraced fields to the crest of a ridge before descending toward the riverbed of the Gatti Khola. Continuing through dense subtropical forests and across suspension bridges, the path navigates the steep, undulating contours of the valley wall. You climb steadily up stone steps through the village of Sibang and cross the Dhara Khola. The afternoon brings a final climb to Muri, a sprawling, traditional Magar settlement perched on a high amphitheater above the junction of the Myagdi and Dhola Kholas. On clear days, the dramatic southern wall of Mount Dhaulagiri I (8,167 m) and Manapathi peak make their first awe-inspiring appearance on the northern horizon.`,
      meta: `<strong>First Mountain View:</strong> Keep cameras ready on the ridge above Muri for your initial glimpse of the massive Dhaulagiri massif towering above the valley.`
    },
    {
      day: 7,
      title: "Trek from Muri to Boghara (approx. 2,080 m)",
      dist: "12 km rugged trail",
      time: "6 to 7 hours",
      altM: 2080,
      altFt: 6824,
      gain: "+230 m (steep descent & ascent)",
      meals: "Breakfast, Lunch, Dinner",
      accom: "Local Lodge / Guesthouse in Boghara",
      desc: `Today is an energetic, undulating trek characterized by dramatic terrain changes. Leaving Muri, the path descends steeply through terraced fields to the Dhora Khola riverbed before climbing across a forested spur. The trail clings to steep cliff faces and crosses several minor streams, alternating between rocky ascents and tricky descents on stone steps through lush oak, bamboo, and rhododendron forests. You pass through the isolated settlement of Naura before tackling a steep, grassy cliff trail that leads up to Boghara. Boghara is the last major permanently inhabited village on the Dhaulagiri Circuit, where local mountain hospitality and rustic farming traditions remain completely untouched by modern commercial tourism.`,
      meta: `<strong>Trail Reality:</strong> Sections of the path between Muri and Boghara can be narrow and exposed. Watch footing on damp stone steps and utilize trekking poles.`
    },
    {
      day: 8,
      title: "Trek from Boghara to Dobang (approx. 2,520 m)",
      dist: "13 km forested gorge",
      time: "6 to 7 hours",
      altM: 2520,
      altFt: 8268,
      gain: "+440 m",
      meals: "Breakfast, Lunch, Dinner",
      accom: "Rustic Teahouse / Lodge in Dobang",
      desc: `Leaving Boghara, the trail plunges into the wild, uninhabited upper gorge of the Myagdi Khola. The route descends through subtropical bamboo and fern groves to the river bank before following a rugged trail carved directly into the forested canyon walls. You cross tributary torrents via sturdy wooden logs and boulder bridges, trekking through moss-draped oak and rhododendron forest where langur monkeys and Himalayan musk deer are occasionally spotted. The air grows cooler and crisper as elevation increases. After passing the small forest clearing of Jhorbagar, a final rocky climb through dense forest brings you to Dobang, a remote cluster of rustic lodges situated alongside the roaring river.`,
      meta: `<strong>Transition Point:</strong> Dobang is the final staging area where teahouse accommodation is available before transitioning into self-contained expedition camping.`
    },
    {
      day: 9,
      title: "Trek from Dobang to Choriban Khola (approx. 3,110 m)",
      dist: "10 km river gorge",
      time: "5 hours",
      altM: 3110,
      altFt: 10203,
      gain: "+590 m",
      meals: "Full Expedition Meals (Cooked by Crew)",
      accom: "Tented Alpine Camp at Choriban Khola",
      desc: `Today marks the official transition into true wilderness expedition camping. The trail leaves Dobang, climbing through towering cedar, pine, and birch forests as the Myagdi gorge narrows into a steep, dramatic canyon. You cross a wooden footbridge to the west bank of the Myagdi Khola and traverse bamboo thickets known for seasonal avalanche debris. As you climb above 3,000 meters, the dense forest gradually thins, giving way to sub-alpine scrub, juniper, and wild barberry. Arriving at Choriban Khola, a pleasant riverside clearing, our dedicated expedition camp crew has already pitched the dining tent, kitchen tent, and two-person alpine sleeping tents. Hot tea, lemon drinks, and freshly prepared soup await your arrival.`,
      meta: `<strong>Altitude Check:</strong> Crossing 3,000 m elevation requires heightened hydration (at least 3.5 to 4 liters daily) and careful temperature regulation.`
    },
    {
      day: 10,
      title: "Trek from Choriban Khola to Italian Base Camp (approx. 3,660 m)",
      dist: "12 km alpine valley",
      time: "5 to 6 hours",
      altM: 3660,
      altFt: 12008,
      gain: "+550 m",
      meals: "Full Expedition Meals",
      accom: "Tented Camp at Italian Base Camp",
      desc: `Leaving Choriban Khola, you trek up the valley as the canyon opens dramatically into an alpine basin flanked by colossal rock buttresses. You cross the lateral moraine of the Chhonbardan Glacier and follow glacial streams beneath the sheer, staggering west face of Dhaulagiri I. Arriving at Italian Base Camp (named after the pioneering Italian expeditions that staged here), you are enveloped in a majestic mountain amphitheater. Dhaulagiri II (7,751 m), Dhaulagiri III (7,715 m), and Dhaulagiri V (7,386 m) soar vertically above the camp, with massive ice avalanches frequently rumbling harmlessly across the opposing mountain faces. The kitchen crew serves warm meals inside the heated mess tent.`,
      meta: `<strong>Camp Scenery:</strong> Italian Base Camp offers front-row seats to the sheer 4,000-meter western precipice of Dhaulagiri I. Temperature drops sharply at sunset.`
    },
    {
      day: 11,
      title: "Acclimatization & Rest Day at Italian Base Camp (3,660 m)",
      dist: "Optional 3–4 km acclimatization walk",
      time: "Active Rest Day",
      altM: 3660,
      altFt: 12008,
      gain: "+200 m (during walk, sleep at 3,660 m)",
      meals: "Full Expedition Meals",
      accom: "Tented Camp at Italian Base Camp",
      desc: `A scheduled rest and acclimatization day at Italian Base Camp is mandatory for physiologic adaptation before proceeding into the glacier camps above 4,000 m. In the morning, your guide leads an optional, gentle hike up the grassy ridges toward the base of the Chhonbardan Glacier lateral moraine to gain elevation and aid acclimatization ('climb high, sleep low'). The afternoon is spent resting in camp, reading, hydrating, drying gear, and checking equipment. The guide conducts twice-daily pulse oximeter saturation checks and reviews crampon/microspike adjustments. The kitchen staff provides nutritious, high-carbohydrate meals including fresh vegetable soup, pasta, and Sherpa stew to refuel energy stores.`,
      meta: `<strong>Acclimatization Golden Rule:</strong> Rest actively, stay well hydrated, and avoid unnecessary exhaustion. Report any persistent headache or nausea immediately.`
    },
    {
      day: 12,
      title: "Trek from Italian Base Camp to Glacier Camp (approx. 4,200 m)",
      dist: "10 km glacial moraine",
      time: "5 to 6 hours",
      altM: 4200,
      altFt: 13780,
      gain: "+540 m",
      meals: "Full Expedition Meals",
      accom: "Tented Camp on Glacier Moraine",
      desc: `Today is an adventurous and technically engaging trekking day as the expedition leaves all vegetation behind and steps onto the Chhonbardan Glacier. The route negotiates a narrow canyon known as the 'Swiss Camp' trail, crossing the rocky lateral moraine where careful foot placement is required over loose gravel, boulders, and scree. You navigate past the snout of the glacier, where meltwater streams roar underneath thick layers of compressed ice and moraine debris. Glacier Camp is established directly on a flat, gravel-covered platform on the glacier moraine at 4,200 m. Surrounding you are crystalline ice formations, hanging glaciers, and the immense bulk of Dhaulagiri I. The camp is cold and exposed, demanding warm four-season down gear.`,
      meta: `<strong>Glacier Navigation:</strong> Stay close to your guide. Walking on moraine terrain requires constant vigilance over shifting rocks and slippery ice patches.`
    },
    {
      day: 13,
      title: "Trek from Glacier Camp to Dhaulagiri Base Camp (approx. 4,750 m)",
      dist: "8 km active glacier trek",
      time: "4 to 5 hours",
      altM: 4750,
      altFt: 15584,
      gain: "+550 m",
      meals: "Full Expedition Meals",
      accom: "Tented Camp at Dhaulagiri Base Camp",
      desc: `A breathtaking mountain stage leads upward along the central spine of the rubble-strewn Chhonbardan Glacier. The trail climbs steadily, threading between massive ice seracs, frozen glacial lakes, and towering moraine ridges. As you approach Dhaulagiri Base Camp (4,750 m / 15,584 ft), the northern and western faces of Dhaulagiri I rise like an impenetrable wall of blue ice and granite, with the summit looming 3,400 meters directly overhead. Colorful expedition prayer flags flutter across the boulder fields, marking successful camps from international climbing expeditions. The camp offers an extraordinary, raw Himalayan atmosphere, surrounded by Tukuche Peak, Sita Chuchura, and the icefall of Dhaulagiri.`,
      meta: `<strong>Milestone Achievement:</strong> Reaching 4,750 m is a major milestone of the expedition. Put on insulated down jackets immediately upon arrival in camp.`
    },
    {
      day: 14,
      title: "Acclimatization & Rest Day at Dhaulagiri Base Camp (4,750 m)",
      dist: "Rest & Exploration around Base Camp",
      time: "Full Rest Day",
      altM: 4750,
      altFt: 15584,
      gain: "0 m",
      meals: "Full Expedition Meals",
      accom: "Tented Camp at Dhaulagiri Base Camp",
      desc: `This vital acclimatization day at Dhaulagiri Base Camp prepares your body for tomorrow's crossing of French Pass (5,360 m). Surrounded by chaotic glacial ice, you can explore the lower icefall formations, take photographs of the towering summit ridge of Dhaulagiri I, and watch mountaineering teams if an active climbing season is underway. Your guide inspects all climbing gear, tests microspikes/crampons, checks alpine gaiters, and finalizes the alpine departure timing for the morning. The kitchen crew serves warm herbal teas, garlic soup (renowned for altitude acclimatization), and calorically dense meals. Rest thoroughly in your sleeping bag to conserve maximum energy for the pass crossing.`,
      meta: `<strong>Pass Preparation:</strong> Pack daypack with thermal layers, headlamp with fresh batteries, thermos flask, high-altitude sunglasses, and windproof gloves tonight.`
    },
    {
      day: 15,
      title: "Cross French Pass (5,360 m) & Trek to Hidden Valley (approx. 5,200 m)",
      dist: "15 km alpine pass crossing",
      time: "7 to 8+ hours",
      altM: 5200,
      altFt: 17060,
      gain: "+610 m to Pass, then -160 m to camp",
      meals: "Full Expedition Meals",
      accom: "Tented Camp in Hidden Valley (5,200 m)",
      desc: `The crown jewel and most physically demanding day of the Dhaulagiri Circuit begins with a 4:00 AM alpine departure. Leaving base camp under a sky blazing with stars, you climb off the glacier moraine and ascend a steep, rocky scree trail toward the pass. As dawn breaks, golden sunlight illuminates the immense crown of Dhaulagiri I. Step by step, maintaining a slow, measured breathing rhythm, you conquer the final snow slope to reach French Pass (5,360 m / 17,585 ft). The summit rewards you with an unmatched 360-degree panorama: Dhaulagiri I, Tukuche Peak, Sita Chuchura, Mukut Himal, and the mysterious dry plateau of Upper Mustang and Tibet. Descending the eastern flank, you enter Hidden Valley, an uninhabited, stark alpine basin at 5,200 m where camp is pitched in the snow.`,
      meta: `<strong>Highest Point of Expedition:</strong> Celebrate at French Pass! Hydrate frequently during the descent into Hidden Valley. This will be the coldest night of the trek (-15°C to -20°C).`
    },
    {
      day: 16,
      title: "Cross Dhampus Pass (5,250 m) & Trek to Yak Kharka (approx. 3,680 m)",
      dist: "14 km high pass & long descent",
      time: "7 to 8+ hours",
      altM: 3680,
      altFt: 12073,
      gain: "+50 m to Dhampus Pass, then -1,570 m descent",
      meals: "Full Expedition Meals",
      accom: "Tented Camp at Yak Kharka (3,680 m)",
      desc: `Leaving the freezing expanse of Hidden Valley, the trail climbs gently across snow and shale ridges to Dhampus Pass (commonly reported between 5,200 and 5,250 m). Standing atop Dhampus Pass marks the successful completion of the two great high passes of western Nepal. To your east, the entire Annapurna range unfolds—Annapurna I (8,091 m), Annapurna South, Nilgiri, and Tilicho Peak—separated from you by the immense trench of the Kali Gandaki Gorge. What follows is a sustained, knee-testing descent of over 1,550 meters down steep, rocky scree slopes. Trekking poles are indispensable. As oxygen levels increase, walking becomes easier, and you reach the alpine grazing meadows of Yak Kharka to camp.`,
      meta: `<strong>Sustained Descent:</strong> Protect your knees with trekking poles and take short, controlled steps down the long scree slope from Dhampus Pass to Yak Kharka.`
    },
    {
      day: 17,
      title: "Trek from Yak Kharka to Jomsom (approx. 2,720 m)",
      dist: "18 km descending trail",
      time: "6 to 7 hours",
      altM: 2720,
      altFt: 8924,
      gain: "-960 m (Descent into Kali Gandaki)",
      meals: "Breakfast, Lunch, Dinner",
      accom: "Lodge / Hotel in Jomsom",
      desc: `The final walking stage descends from the high alpine meadows of Yak Kharka toward the Kali Gandaki Valley. The trail descends through juniper scrub and pine forests, offering sweeping views of the trans-Himalayan landscape. Depending on trail conditions, the route may pass through the charming Thakali village of Marpha, famed for its whitewashed stone alleys, apple orchards, and traditional cider distilleries. Continuing along the wide riverbed of the Kali Gandaki, you arrive in Jomsom, the bustling administrative center of Mustang. Here, you check into a comfortable hotel, celebrate the successful completion of the circuit with your Sherpa guides and porters, and enjoy hot showers and a celebratory feast.`,
      meta: `<strong>Trek Completion:</strong> Congratulations on completing the formidable Dhaulagiri Circuit! In the evening, hold a tip-distribution and farewell celebration with your support crew.`
    },
    {
      day: 18,
      title: "Fly from Jomsom to Pokhara (approx. 822 m)",
      dist: "20-minute mountain flight",
      time: "Morning Flight",
      altM: 822,
      altFt: 2697,
      gain: "-1,898 m (Scenic Flight)",
      meals: "Breakfast Included",
      accom: "3-Star Boutique Hotel in Pokhara (Lakeside)",
      desc: `Early in the morning, transfer to Jomsom Airport for the spectacular 20-minute mountain flight to Pokhara. The aircraft flies directly through the Kali Gandaki Gorge—the deepest canyon in the world—with the 8,000-meter giants of Dhaulagiri on your right and Annapurna on your left. Arriving in Pokhara, transfer to your lakeside hotel. The warm climate, lush greenery, and relaxed lakeside promenade provide a delightful contrast to the icy, windswept high camps of the past week. Spend the afternoon strolling along Phewa Lake, enjoying boating, or relaxing at a cozy cafe. (Note: In the event of mountain flight weather delays, private overland transport via Beni/Kushma is arranged as contingency).`,
      meta: `<strong>Flight Flexibility:</strong> Jomsom flights operate early in the morning before strong valley winds develop. Weather delays can occur; buffer time is built into the itinerary.`
    },
    {
      day: 19,
      title: "Drive from Pokhara to Kathmandu (approx. 1,355 m)",
      dist: "200 km overland drive",
      time: "6 to 8 hours",
      altM: 1355,
      altFt: 4445,
      gain: "+533 m",
      meals: "Breakfast, Farewell Dinner",
      accom: "3-Star Boutique Hotel in Thamel, Kathmandu",
      desc: `After breakfast overlooking Phewa Lake, embark on the overland road journey back to Kathmandu along the Prithvi Highway. The route winds through river valleys, terraced hillsides, and lively towns, following the Marsyangdi and Trisuli rivers. Upon arrival in Kathmandu, check into your hotel in Thamel. Use the late afternoon for last-minute souvenir shopping, exploring local spice markets, or packing your international luggage. In the evening, gather for a celebratory farewell dinner hosted by Namaste Hiking Trek at a traditional Nepali restaurant featuring authentic cultural folk performances.`,
      meta: `<strong>Buffer Assurance:</strong> Day 19 serves as the vital return link ensuring you are safely back in Kathmandu in time for international flights.`
    },
    {
      day: 20,
      title: "Final Departure from Kathmandu",
      dist: "Airport Transfer (20–40 mins drive)",
      time: "Departure Day",
      altM: 1355,
      altFt: 4445,
      gain: "0 m",
      meals: "Breakfast Included",
      accom: "Not Applicable (Airport Transfer)",
      desc: `Your extraordinary 20-day Dhaulagiri Circuit Trek expedition concludes today. After breakfast at your hotel, ensure all personal belongings, cameras, trekking gear, and travel documents are packed. According to your international flight schedule, a private vehicle transfer will pick you up from your hotel and drive you to Tribhuvan International Airport for your departure flight home. As you soar above the majestic Himalayan peaks, you carry memories of crossing French Pass and Dhampus Pass, camping in the silence of Hidden Valley, and conquering one of the greatest high-altitude circuits on Earth. Namaste and safe travels!`,
      meta: `<strong>Airport Transfer:</strong> Hotel check-out is typically 12:00 PM. Airport transfer is scheduled 3 hours prior to your international departure flight.`
    }
  ];

  let cardsHtml = '';
  days.forEach(d => {
    cardsHtml += `
            <!-- Day ${d.day < 10 ? '0' + d.day : d.day} -->
            <div class="itinerary-card" id="day-${d.day}">
              <div class="itinerary-header" onclick="toggleItinerary(this)">
                <div class="itinerary-header-left">
                  <span class="day-badge">Day ${d.day < 10 ? '0' + d.day : d.day}</span>
                  <h3 class="itinerary-day-title">${d.title}</h3>
                </div>
                <div class="itinerary-header-right">
                  <span class="itinerary-quick-stat">${d.time}</span>
                  <svg class="itinerary-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              </div>
              <div class="itinerary-content">
                <div class="itinerary-body">
                  <div class="itinerary-metrics-grid">
                    <div class="itin-metric-box">
                      <span class="itin-metric-label">DISTANCE</span>
                      <strong class="itin-metric-val">${d.dist}</strong>
                    </div>
                    <div class="itin-metric-box">
                      <span class="itin-metric-label">TIME</span>
                      <strong class="itin-metric-val">${d.time}</strong>
                    </div>
                    <div class="itin-metric-box">
                      <span class="itin-metric-label">OVERNIGHT ELEV</span>
                      <strong class="itin-metric-val"><span data-altitude-m="${d.altM}">${d.altM} m (${d.altFt} ft)</span></strong>
                    </div>
                    <div class="itin-metric-box">
                      <span class="itin-metric-label">ALTITUDE GAIN</span>
                      <strong class="itin-metric-val">${d.gain}</strong>
                    </div>
                    <div class="itin-metric-box">
                      <span class="itin-metric-label">MEALS</span>
                      <strong class="itin-metric-val">${d.meals}</strong>
                    </div>
                    <div class="itin-metric-box">
                      <span class="itin-metric-label">LODGING</span>
                      <strong class="itin-metric-val">${d.accom}</strong>
                    </div>
                  </div>

                  <p class="itinerary-narrative">${d.desc}</p>

                  <div class="itinerary-meta-box">
                    <div class="itinerary-meta-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      <span>${d.meta}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
`;
  });

  const code = `// Module 4: Section 2 - 20-Day Itinerary for Dhaulagiri Circuit Trek
function getItinerarySection() {
  return \`
        <!-- Section 2: Itinerary -->
        <section id="section-itinerary" class="trek-detail-section">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 16px; margin-bottom: 24px;">
            <div>
              <h2 class="trek-section-title" style="margin-bottom: 0;">Dhaulagiri Circuit Trek Itinerary: Day by Day Details</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 6px;"></div>
            </div>
            
            <div style="display: flex; gap: 10px;">
              <button onclick="expandAllItinerary()" class="btn btn-secondary btn-sm" style="font-size: 0.82rem; padding: 6px 14px; border-radius: 6px; cursor: pointer;">Expand All Days</button>
              <button onclick="collapseAllItinerary()" class="btn btn-secondary btn-sm" style="font-size: 0.82rem; padding: 6px 14px; border-radius: 6px; cursor: pointer;">Collapse All</button>
            </div>
          </div>

          <!-- 4 Stat Badges Row -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 12px; margin-bottom: 24px;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 14px; text-align: center;">
              <span style="font-size: 0.72rem; color: #64748b; font-weight: 700; text-transform: uppercase; display: block;">Total Days</span>
              <strong style="color: var(--color-primary-navy); font-size: 1.15rem;">20 Days</strong>
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 14px; text-align: center;">
              <span style="font-size: 0.72rem; color: #64748b; font-weight: 700; text-transform: uppercase; display: block;">Max Elevation</span>
              <strong style="color: var(--color-primary-navy); font-size: 1.15rem;"><span data-altitude-m="5360">5,360 m</span></strong>
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 14px; text-align: center;">
              <span style="font-size: 0.72rem; color: #64748b; font-weight: 700; text-transform: uppercase; display: block;">Walking Stages</span>
              <strong style="color: var(--color-primary-navy); font-size: 1.15rem;">13 Days</strong>
            </div>
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 14px; text-align: center;">
              <span style="font-size: 0.72rem; color: #64748b; font-weight: 700; text-transform: uppercase; display: block;">Acclimatization</span>
              <strong style="color: var(--color-primary-navy); font-size: 1.15rem;">2 Days (3660m &amp; 4750m)</strong>
            </div>
          </div>

          <!-- Itinerary at a Glance Summary Table -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <div style="background: #f8fafc; padding: 14px 18px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
              <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy); margin: 0;">Itinerary at a Glance</h3>
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--color-copper-orange); background: #fff7ed; padding: 2px 8px; border-radius: 10px;">Days 1 to 20</span>
            </div>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.88rem;">
                <thead>
                  <tr style="background: #fafafa; border-bottom: 2px solid #e2e8f0; color: var(--color-primary-navy);">
                    <th style="padding: 10px 14px; font-weight: 700;">Day</th>
                    <th style="padding: 10px 14px; font-weight: 700;">Scheduled Overnight</th>
                    <th style="padding: 10px 14px; font-weight: 700;">Sleeping Elevation</th>
                    <th style="padding: 10px 14px; font-weight: 700;">Daytime Activity / Staging</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 1–2</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Kathmandu</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="1355">1,355 m (4,445 ft)</span></td>
                    <td style="padding: 10px 14px; color: #64748b;">Arrival, trek briefing, permit checks, and valley sightseeing</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 3</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Beni</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="836">836 m (2,743 ft)</span></td>
                    <td style="padding: 10px 14px; color: #64748b;">Scenic overland drive via Prithvi Highway (7–9 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 4</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Babiyachaur</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="970">970 m (3,182 ft)</span></td>
                    <td style="padding: 10px 14px; color: #64748b;">Road transfer into Myagdi Valley; walking starts Day 5</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 5</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Dharapani (Myagdi)</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="1560">1,560 m (5,118 ft)</span></td>
                    <td style="padding: 10px 14px; color: #64748b;">Trek starts: village paths and terraced valley hillsides (5–6 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 6</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Muri</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="1850">1,850 m (6,070 ft)</span></td>
                    <td style="padding: 10px 14px; color: #64748b;">Magar village approach; first views of Dhaulagiri I (5–6 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 7</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Boghara</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="2080">2,080 m (6,824 ft)</span></td>
                    <td style="padding: 10px 14px; color: #64748b;">Stone staircase climbs and canyon trail undulations (6–7 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 8</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Dobang</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="2520">2,520 m (8,268 ft)</span></td>
                    <td style="padding: 10px 14px; color: #64748b;">Bamboo and rhododendron gorge; final teahouse transition (6–7 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 9</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Choriban Khola</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="3110">3,110 m (10,203 ft)</span></td>
                    <td style="padding: 10px 14px; color: #64748b;">Transition to full expedition-supported tented camping (5 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 10</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Italian Base Camp</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="3660">3,660 m (12,008 ft)</span></td>
                    <td style="padding: 10px 14px; color: #64748b;">Ascent into alpine amphitheater beneath Dhaulagiri west face (5–6 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 11</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Italian Base Camp</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="3660">3,660 m (12,008 ft)</span></td>
                    <td style="padding: 10px 14px; color: #16a34a; font-weight: 700;">Mandatory Acclimatization &amp; Rest Day (active ridge hike)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 12</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Glacier Camp</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="4200">4,200 m (13,780 ft)</span></td>
                    <td style="padding: 10px 14px; color: #64748b;">Chhonbardan Glacier moraine traverse and rock navigation (5–6 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 13</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Dhaulagiri Base Camp</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="4750">4,750 m (15,584 ft)</span></td>
                    <td style="padding: 10px 14px; color: #64748b;">Glacier spine climb into high base camp beneath Dhaulagiri I (4–5 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 14</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Dhaulagiri Base Camp</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="4750">4,750 m (15,584 ft)</span></td>
                    <td style="padding: 10px 14px; color: #16a34a; font-weight: 700;">Mandatory Acclimatization &amp; French Pass Preparation Day</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 15</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Hidden Valley</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="5200">5,200 m (17,060 ft)</span></td>
                    <td style="padding: 10px 14px; color: #dc2626; font-weight: 700;">Cross French Pass (5,360 m / 17,585 ft) into high basin (7–8+ hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 16</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Yak Kharka</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="3680">3,680 m (12,073 ft)</span></td>
                    <td style="padding: 10px 14px; color: #dc2626; font-weight: 700;">Cross Dhampus Pass (5,250 m) and descend 1,570 m (7–8+ hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 17</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Jomsom</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="2720">2,720 m (8,924 ft)</span></td>
                    <td style="padding: 10px 14px; color: #64748b;">Descent to Kali Gandaki Valley; visit Marpha &amp; hotel celebration (6–7 hrs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 18</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Pokhara</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="822">822 m (2,697 ft)</span></td>
                    <td style="padding: 10px 14px; color: #64748b;">Scenic mountain flight over Kali Gandaki Gorge; lakeside hotel</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 19</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Kathmandu</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="1355">1,355 m (4,445 ft)</span></td>
                    <td style="padding: 10px 14px; color: #64748b;">Overland drive back to capital (6–8 hrs); farewell cultural dinner</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">Day 20</td>
                    <td style="padding: 10px 14px; font-weight: 600;">Departure</td>
                    <td style="padding: 10px 14px;">Homebound</td>
                    <td style="padding: 10px 14px; color: #64748b;">Private hotel-to-airport transfer according to international flight</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 20 Interactive Day Cards -->
          <div class="itinerary-accordion-container" style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 30px;">
${cardsHtml}
          </div>

          <!-- Section 2.4: Route Summary & High Pass Safety Card -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
              <span class="pill pill-copper" style="font-size: 0.75rem; text-transform: uppercase; font-weight: 800;">Expedition Safety</span>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--color-primary-navy); margin: 0;">Important Notes About the Dhaulagiri Circuit Itinerary</h3>
            </div>
            <p style="color: #475569; font-size: 0.92rem; line-height: 1.65; margin-bottom: 14px;">
              The 20-day schedule establishes a safe, medically sound progression through the remote Himalayas. Keep the following operational principles in mind:
            </p>
            <ul style="color: #475569; font-size: 0.9rem; line-height: 1.65; margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 6px;"><strong>High-Pass Crossings:</strong> Both French Pass (5,360 m) and Dhampus Pass (5,250 m) are assessed by the expedition leader on current snow, ice, wind, and visibility. Pass crossings are never forced if conditions are hazardous.</li>
              <li style="margin-bottom: 6px;"><strong>Preservation of Rest Days:</strong> The scheduled acclimatization days at Italian Base Camp (Day 11) and Dhaulagiri Base Camp (Day 14) are non-negotiable safety pillars and cannot be skipped or condensed.</li>
              <li style="margin-bottom: 6px;"><strong>Camping Self-Reliance:</strong> From Dobang/Choriban Khola through Hidden Valley, our group is 100% self-sufficient with private tents, kitchen crew, food supplies, and medical oxygen.</li>
              <li><strong>Flight Contingency Buffers:</strong> Jomsom mountain flights are subject to early-morning weather. Days 18–19 provide built-in buffer time to ensure you make international connections without stress.</li>
            </ul>
          </div>

        </section>
\`;
}

module.exports = { getItinerarySection };
`;

  fs.writeFileSync('scratch/dhaulagiri_builder/mod4_itinerary.js', code, 'utf8');
  console.log('Successfully wrote scratch/dhaulagiri_builder/mod4_itinerary.js');
}

buildItineraryModule();
