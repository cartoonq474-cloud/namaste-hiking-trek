// Generator for Module 8: Section 6 - Read Before You Book (21 Canonical Guides for Dhaulagiri Circuit Trek)
const fs = require('fs');

function buildDetailsModule() {
  const guides = [
    {
      id: "guide-1",
      cat: "logistics",
      num: "01",
      title: "Overland Journey Logistics: Kathmandu to Beni & Babiyachaur via Middle Hills",
      content: `The Dhaulagiri Circuit Trek begins with an essential overland approach into western Nepal. From Kathmandu, our private vehicle transfer travels west along the Prithvi Highway, tracing the Trisuli and Marsyangdi river corridors toward Pokhara and continuing north along the Kali Gandaki highway to Beni (Day 3, approx. 7 to 9 hours). Road travel takes up a substantial portion of the day, passing through bustling trading towns, river confluences, and terraced agricultural hillsides.<br><br>
      From Beni, the gateway to Myagdi district, the journey continues on Day 4 along an unpaved rural road network deeper into the Myagdi Valley to Babiyachaur (approx. 24 km, 2 to 3 hours). Utilizing this vehicular link saves repetitive walking along dirt roads and positions the group right at the true foot trailhead. Keep your daypack with personal water, snacks, windbreaker, and motion sickness medication inside the passenger cabin.`,
      takeaway: "<strong>Key Logistics Note:</strong> Private overland transport ensures comfort and flexibility for meal and photo stops. Vehicular access terminates at Babiyachaur, where foot trekking commences."
    },
    {
      id: "guide-2",
      cat: "route",
      num: "02",
      title: "Trail Progression & Staging: From Low Valley Terraces to Alpine Glacial Moraines",
      content: `One of the most remarkable aspects of the Dhaulagiri Circuit is its geographical transition. The trek starts in the sub-tropical lower Myagdi Valley around 950 m, ascending through terraced rice paddies, citrus orchards, and lush bamboo forests through settlements like Dharapani, Muri, and Boghara.<br><br>
      As the trail enters the deep river gorge beyond Dobang (2,520 m), the landscape transforms into dense oak and rhododendron forest before climbing above the tree line at Choriban Khola (3,110 m). From Italian Base Camp (3,660 m), you enter a colossal glacial amphitheater, stepping onto the rubble-covered Chhonbardan Glacier to Glacier Camp (4,200 m) and Dhaulagiri Base Camp (4,750 m). This gradual staging allows steady cardiovascular conditioning before tackling French Pass (5,360 m).`,
      takeaway: "<strong>Topological Reality:</strong> Expect steep, undulating trails on the lower days with frequent ascents and descents across tributary river canyons before reaching the continuous alpine moraines."
    },
    {
      id: "guide-3",
      cat: "accommodation",
      num: "03",
      title: "Expedition Camping Realities: High-Altitude Tents, Sub-Zero Nights & Daily Camp Life",
      content: `Unlike popular teahouse routes in the Annapurna or Everest regions, the central stages of the Dhaulagiri Circuit require self-contained expedition camping for 7+ consecutive nights. From Choriban Khola through Italian Base Camp, Glacier Camp, Dhaulagiri Base Camp, Hidden Valley, and Yak Kharka, there are no permanent lodge facilities.<br><br>
      Our dedicated camp crew handles all logistics: erecting heavy-duty, two-person four-season alpine sleeping tents, laying out thick closed-cell foam and self-inflating sleeping pads, and setting up the communal mess tent with tables and camp stools. Evening temperatures at Dhaulagiri Base Camp and Hidden Valley regularly plunge between -15°C and -20°C (0°F to -4°F). A four-season sleeping bag rated to -20°C combined with thermal down booties is essential for restorative sleep.`,
      takeaway: "<strong>Camp Routine:</strong> Wake up at 6:00 AM with hot washing water and 'bed tea' served directly to your tent, followed by a warm, hearty breakfast in the mess tent before packing duffels."
    },
    {
      id: "guide-4",
      cat: "food",
      num: "04",
      title: "The Expedition Kitchen: High-Altitude Nutrition, Caloric Needs & Camp Meals",
      content: `Maintaining adequate caloric intake is crucial when trekking 6 to 8 hours daily at extreme elevation. High altitude suppresses appetite while drastically accelerating metabolic expenditure. Our experienced expedition cooks and kitchen crew prepare three hot, freshly cooked meals daily using pressurized kerosene and gas stoves in the kitchen tent.<br><br>
      Mornings feature porridge, eggs (fried, scrambled, boiled), pancakes, muesli, toast, and hot drinks (tea, coffee, hot chocolate). Midday lunches along the trail feature hot noodle soup, fried rice, pasta, or fresh flatbreads with cooked vegetables. Evenings in camp provide multi-course dinners: garlic soup (proven to assist acclimatization), followed by traditional Nepali Dal Bhat (steamed rice, rich lentil soup, curried vegetables, pickles), Sherpa stew (Syakpa), momos, or pasta, concluding with hot tea and canned fruit.`,
      takeaway: "<strong>Caloric Imperative:</strong> Aim for 3,500 to 4,000 calories daily. Even if altitude diminishes your appetite, prioritize hot soups, carbohydrates, and healthy fats."
    },
    {
      id: "guide-5",
      cat: "health",
      num: "05",
      title: "Safe Drinking Water Protocols & Plastic-Free Hydration in Freezing Moraine Camps",
      content: `Hydration is your primary defense against Acute Mountain Sickness (AMS). Trekkers must consume between 3.5 and 4.5 liters of clean water daily. In remote moraine camps, water is drawn from glacial melt streams that contain high levels of mineral sediment and rock flour.<br><br>
      Our kitchen team boils all cooking and drinking water thoroughly. Trekkers should carry two 1-liter wide-mouth Nalgene bottles and a 750ml–1L vacuum insulated thermos flask. Fill your thermos with boiling water each evening; keep it inside your sleeping bag as a hot water bottle for warmth, and enjoy warm drinking water the following morning without fear of bottles freezing solid on high passes. Avoid untreated natural stream water; supplement with Chlorine Dioxide purification tablets or a micro-filter.`,
      takeaway: "<strong>Freezing Prevention:</strong> Hydration bladder hoses freeze solid within minutes above 4,000 m. Pack insulated Nalgene bottle jackets and keep your thermos handy on French Pass."
    },
    {
      id: "guide-6",
      cat: "accommodation",
      num: "06",
      title: "Sanitation, Toilet Tents & Personal Hygiene in Remote High Camps",
      content: `In the remote camping sections above Dobang, there are no indoor bathrooms or plumbed plumbing facilities. Our crew erects a dedicated, private toilet tent at every campsite positioned safely away from water sources. The toilet tent features a deep, dug dry pit with clean soil or ashes provided for covering after each use.<br><br>
      Personal hygiene at sub-zero temperatures requires practical preparation. Running hot showers are unavailable in high camps; our crew provides small basins of hot water each morning and evening for sponge washing face and hands. Trekkers should bring alcohol-based hand sanitizer, biodegradable wet wipes (warm them inside your jacket before use), and zip-lock waste bags for pack-it-out personal trash disposal.`,
      takeaway: "<strong>Environmental Ethics:</strong> Follow Leave No Trace (LNT) principles strictly. All sanitary paper must be disposed of into camp waste receptacles, never left exposed on the trail."
    },
    {
      id: "guide-7",
      cat: "logistics",
      num: "07",
      title: "Device Charging, Cold Battery Care & Mobile Connectivity Drops",
      content: `Sub-zero temperatures dramatically reduce lithium-ion battery capacity. In the remote wilderness section between Dobang and Jomsom (Days 8 through 16), there is zero mains electricity and no access to generator charging. Trekkers must be completely self-reliant for camera and phone power.<br><br>
      Pack at least two high-capacity (20,000+ mAh) power banks rated for cold conditions. Store all phones, camera batteries, and power banks inside wool socks and keep them in your interior jacket pockets during the day, and deep inside the foot of your sleeping bag at night. Cellular network signal (NTC and Ncell) is available intermittently in the lower Myagdi villages up to Muri/Boghara, after which signal drops completely until reaching Jomsom. Our expedition guide carries a satellite communicator for emergency operational contact.`,
      takeaway: "<strong>Cold Battery Rule:</strong> Never leave electronics exposed to ambient air overnight. An uninsulated phone can discharge from 100% to dead within 3 hours at -15°C."
    },
    {
      id: "guide-8",
      cat: "difficulty",
      num: "08",
      title: "Trek Difficulty Breakdown: Strenuous Grade 5 Physical & Glacial Demands",
      content: `The Dhaulagiri Circuit is classified as Strenuous to Very Challenging (Grade 5 Expedition Trek). Unlike teahouse routes with established steps and lodge comforts, this expedition demands continuous endurance over 20 days, including 13 days of strenuous mountain walking and 7+ days living in remote alpine tents.<br><br>
      Key difficulty factors include: crossing French Pass at 5,360 m (17,585 ft) and Dhampus Pass at 5,250 m (17,224 ft); spending consecutive nights above 4,000 m (Glacier Camp, DBC, Hidden Valley); navigating shifting glacial moraine, loose scree, and snow slopes; and enduring sub-zero temperatures. Trekkers must carry a 6–8 kg daypack containing personal warm layers, water, first aid, and camera gear throughout long 6 to 9-hour walking stages.`,
      takeaway: "<strong>Difficulty Benchmark:</strong> Significantly more physically and mentally demanding than Everest Base Camp or Annapurna Circuit due to wilderness camping and remote pass crossings."
    },
    {
      id: "guide-9",
      cat: "difficulty",
      num: "09",
      title: "12-Week Physical Preparation Plan for High-Altitude Mountain Endurance",
      content: `A structured training plan over 12 weeks builds the cardiovascular base, leg strength, and mental endurance required for Dhaulagiri. Your regimen should focus on aerobic conditioning, eccentric quadricep strength for sustained descents, and pack-bearing stamina.<br><br>
      <strong>Weeks 1–4 (Base Foundation):</strong> 3–4 days/week of moderate cardio (jogging, cycling, swimming for 45–60 mins) combined with bodyweight squats, lunges, calf raises, and core planks.<br>
      <strong>Weeks 5–8 (Hill & Pack Loading):</strong> Introduce stair climbing (stairmaster or outdoor stadium steps) and hill walking 2 days/week carrying a 5 kg daypack. Increase weekend long hikes to 4–5 hours on uneven terrain.<br>
      <strong>Weeks 9–11 (Expedition Peak):</strong> Perform back-to-back weekend mountain hikes (5–7 hours each day) carrying an 8 kg daypack. Practice walking on rocky scree with trekking poles and broken-in boots.<br>
      <strong>Week 12 (Taper):</strong> Reduce training volume by 50% to allow full muscular recovery and arrive in Kathmandu feeling fresh and injury-free.`,
      takeaway: "<strong>Training Focus:</strong> Prioritize stair climbing and weighted steep hill hiking. Leg endurance and knee stability during descents matter just as much as uphill cardiovascular capacity."
    },
    {
      id: "guide-10",
      cat: "difficulty",
      num: "10",
      title: "Weekly Mountain Training Schedule: Balancing Cardio, Leg Strength & Recovery",
      content: `To maximize consistency and prevent overuse injuries before departure, follow a balanced weekly training template:<br><br>
      • <strong>Monday:</strong> Easy 45-minute aerobic recovery session (brisk walking or zone-2 cycling).<br>
      • <strong>Tuesday:</strong> High-incline treadmill walking (12–15% incline) or stair climbing for 45–60 minutes.<br>
      • <strong>Wednesday:</strong> Lower-body strength training: Bulgarian split squats, step-ups onto 18-inch box, Romanian deadlifts, calf raises, and 10 minutes of core stability.<br>
      • <strong>Thursday:</strong> 60-minute tempo cardio session or swimming to build lung capacity and thoracic endurance.<br>
      • <strong>Friday:</strong> Complete rest, stretching, and foam rolling.<br>
      • <strong>Saturday:</strong> Long outdoor mountain hike (4 to 7 hours) with an 8 kg loaded backpack on steep, uneven trails.<br>
      • <strong>Sunday:</strong> 2 to 3-hour easy trail walk focusing on controlled downhill foot placement and balance.`,
      takeaway: "<strong>Recovery Discipline:</strong> Listen to your body. If persistent knee, Achilles, or lower back pain arises, substitute high-impact jogging with low-impact rowing or swimming."
    },
    {
      id: "guide-11",
      cat: "health",
      num: "11",
      title: "Altitude Acclimatization Strategy: Mandatory Rest Days at Italian & Dhaulagiri Base Camps",
      content: `Ascending into extreme elevation requires careful physiologic acclimatization. The Dhaulagiri Circuit itinerary follows a proven medical staging curve: a gradual 5-day walk up the lower valley from Babiyachaur (970 m) to Dobang (2,520 m), followed by progression to Italian Base Camp (3,660 m).<br><br>
      Our itinerary incorporates two non-negotiable acclimatization rest days: <strong>Day 11 at Italian Base Camp (3,660 m)</strong> and <strong>Day 14 at Dhaulagiri Base Camp (4,750 m)</strong>. These days allow your red blood cell count to increase, breathing depth to adjust, and resting heart rate to stabilize before ascending toward French Pass (5,360 m). During rest days, your guide leads short active walks to higher ridges before returning to camp to sleep ('climb high, sleep low').`,
      takeaway: "<strong>Medical Protocol:</strong> Our Sherpa guides take twice-daily pulse oximeter readings (oxygen saturation SpO2 and pulse rate) at breakfast and dinner to track your body's adaptation."
    },
    {
      id: "guide-12",
      cat: "health",
      num: "12",
      title: "Acute Mountain Sickness (AMS), HAPE & HACE Protocols & Symptom Recognition",
      content: `Above 3,000 meters, atmospheric pressure drops, providing roughly 50% of sea-level oxygen at 5,000 m. Trekkers must be hyper-vigilant for early symptoms of Acute Mountain Sickness (AMS): persistent throbbing headache, loss of appetite, nausea, dizziness, insomnia, and unusual lethargy. Mild AMS is normal and manageable with rest, hydration, and light analgesics.<br><br>
      However, severe altitude conditions—High Altitude Pulmonary Edema (HAPE) and High Altitude Cerebral Edema (HACE)—are life-threatening emergencies. Warning signs include severe breathlessness at rest, persistent coughing with pink frothy sputum, rattling in the chest, ataxia (loss of coordination / inability to walk heel-to-toe in a straight line), and confusion. If severe symptoms occur, the golden rule is absolute: <strong>immediate descent to lower altitude</strong>. Our guides carry supplemental medical oxygen cylinders and coordinate satellite emergency evacuation if required.`,
      takeaway: "<strong>Transparency Rule:</strong> Never hide symptoms from your guide to 'keep up with the group.' Early reporting allows simple remedies before minor symptoms escalate into emergencies."
    },
    {
      id: "guide-13",
      cat: "health",
      num: "13",
      title: "Diamox (Acetazolamide) Guidelines & Personal Wilderness Medical Kit",
      content: `Diamox (Acetazolamide) is a carbonic anhydrase inhibitor that acidifies the blood, stimulating deeper and more frequent breathing, especially during sleep. It accelerates natural acclimatization but does not mask deteriorating symptoms of severe altitude illness.<br><br>
      Standard prophylactic dosage is 125 mg to 250 mg taken orally twice daily (morning and evening), typically commenced 24 hours before ascending above 3,000 m (around Dobang or Choriban Khola) and continued until descending past Dhampus Pass. Common harmless side effects include tingling in fingers and toes (paresthesia), increased urination, and altered taste of carbonated beverages. Consult your physician prior to travel (especially if allergic to sulfa-based medications).<br><br>
      <strong>Essential Personal Medical Kit:</strong> Diamox (30 tablets), Ibuprofen/Paracetamol (pain/headache), Imodium & Ciprofloxacin (gastrointestinal), blister care (moleskin, Compeed, sterile lancets), throat lozenges, rehydration salts (ORS), and broad-spectrum antibiotics.`,
      takeaway: "<strong>Hydration with Diamox:</strong> Because Diamox is a mild diuretic, you must increase daily fluid consumption by an additional 500ml–1L to prevent dehydration."
    },
    {
      id: "guide-14",
      cat: "route",
      num: "14",
      title: "Crossing French Pass (5,360 m): Pre-Dawn Alpine Ascent, Snowfields & Safety",
      content: `Crossing French Pass (5,360 m / 17,585 ft) on Day 15 is the physical and emotional climax of the Dhaulagiri Circuit. The day begins at 4:00 AM with hot porridge and tea. Leaving Dhaulagiri Base Camp with headlamps illuminated, the trail leaves the moraine and climbs steadily up steep shale, gravel, and snow slopes.<br><br>
      Pacing is vital: take short, rhythmic steps, synchronizing one breath per step. As the sun rises over the Himalayas, the sheer north face of Dhaulagiri I glows pink and gold. Reaching the crest at 5,360 m marked by prayer flags, you stand between the Dhaulagiri massif and Mukut Himal, with views stretching north toward Upper Mustang and Dolpo. The descent on the eastern side into Hidden Valley involves traversing snowfields and moraine benches where microspikes or crampons provide essential security.`,
      takeaway: "<strong>Alpine Start:</strong> Crossing early avoids softening snow and high afternoon ridge winds. Protect your eyes with Category 4 sunglasses to avoid debilitating snow blindness."
    },
    {
      id: "guide-15",
      cat: "route",
      num: "15",
      title: "Hidden Valley Survival (5,200 m): Camping in Nepal's Most Remote High Basin",
      content: `Hidden Valley is a vast, isolated alpine desert basin lying between French Pass and Dhampus Pass at an elevation of approximately 5,000 to 5,200 m. Enclosed by glaciated peaks, the valley is completely barren and uninhabited. It is one of the highest scheduled overnight camps on any trekking circuit in the Himalayas.<br><br>
      Camping here is an authentic wilderness experience. The wind can be ferocious, and nighttime temperatures routinely drop between -15°C and -22°C. Our team anchors the tents with heavy rocks in addition to snow stakes. Drink plenty of hot soup in the dining tent and change into completely dry thermal base layers before getting into your sleeping bag. Hidden Valley provides an unforgettable night under some of the clearest, darkest starry skies on the planet.`,
      takeaway: "<strong>Survival Strategy:</strong> Keep all water bottles, boots, headlamps, and wet wipes inside your sleeping bag to prevent them from freezing rock-solid by morning."
    },
    {
      id: "guide-16",
      cat: "route",
      num: "16",
      title: "Dhampus Pass (5,250 m) & The Demanding 1,550 m Descent to Yak Kharka",
      content: `Day 16 presents the second formidable high pass of the expedition: Dhampus Pass (commonly reported around 5,200 to 5,250 m). Climbing gently out of Hidden Valley across snowy slopes, reaching Dhampus Pass marks the exit from the Dhaulagiri wilderness into the Annapurna/Mustang territory.<br><br>
      From the pass, an extraordinary panorama reveals Annapurna I (8,091 m), Annapurna South, Nilgiri, Tilicho Peak, and the vast brown desert hills of Mustang across the Kali Gandaki Gorge. What follows is a grueling, sustained descent of 1,570 vertical meters down steep, rocky scree slopes to Yak Kharka (3,680 m). This descent places heavy stress on knees, quadriceps, and toes. Use two trekking poles, loosen boot laces slightly across the forefoot if toes pinch, and take deliberate, controlled steps down the zigzagging switchbacks.`,
      takeaway: "<strong>Descent Technique:</strong> Shorten your stride and keep your center of gravity slightly forward over your knees. Descending 1,550 m on tired legs requires high concentration."
    },
    {
      id: "guide-17",
      cat: "logistics",
      num: "17",
      title: "Jomsom Mountain Flight Realities, Weather Cancellations & Overland Contingencies",
      content: `On Day 18, our itinerary schedules the short, dramatic mountain flight from Jomsom to Pokhara (approx. 20 minutes) soaring through the Kali Gandaki Gorge. However, Jomsom Airport is famous for strong midday thermal valley winds and morning fog in the lower gorge, which can cause flight delays or cancellations.<br><br>
      All flights operate exclusively in the early morning between 6:30 AM and 10:00 AM before the valley winds pick up. If weather grounds aircraft, Namaste Hiking Trek immediately initiates our proven overland contingency plan: securing private 4WD Scorpio Jeeps to drive from Jomsom through Tatopani and Beni to Pokhara (approx. 6–8 hours). Our built-in buffer on Days 18 and 19 ensures that international flight departures from Kathmandu are safely protected.`,
      takeaway: "<strong>Buffer Philosophy:</strong> Never schedule your international departure flight on the same day as your Jomsom-Pokhara flight. Our 20-day plan includes built-in safety margins."
    },
    {
      id: "guide-18",
      cat: "permits",
      num: "18",
      title: "Permits & Regulatory Checkpoints: ACAP, TIMS & Local Myagdi Fees",
      content: `The Dhaulagiri Circuit passes through both Myagdi district and the Annapurna Conservation Area (as the route descends past Dhampus Pass toward Jomsom and Mustang). Three official permits and registration documents are mandatory:<br><br>
      1. <strong>Annapurna Conservation Area Project (ACAP) Permit:</strong> Official entry permit issued by the National Trust for Nature Conservation (NTNC). Fee: approx. 3,000 NPR (approx. $25 USD) for foreign nationals.<br>
      2. <strong>TIMS Card (Trekkers' Information Management System):</strong> Mandatory tracking permit issued by TAAN/Nepal Tourism Board. Fee: 2,000 NPR (approx. $17 USD).<br>
      3. <strong>Myagdi Rural Municipality Entry Permit:</strong> Local government fee registered at checkpoints in Beni and Dharapani.<br><br>
      Namaste Hiking Trek manages all permit applications, paperwork, and checkpoint stamping in advance. You only need to supply 4 passport-sized photographs and a clear scan of your passport biodata page upon booking.`,
      takeaway: "<strong>Checkpoint Protocols:</strong> Your lead guide carries the official permit dossier. Original passports should remain accessible in your daypack during transit checkpoints."
    },
    {
      id: "guide-19",
      cat: "weather",
      num: "19",
      title: "Seasonal Weather Analysis: Autumn Crystal Skies vs. Spring Snowmelt",
      content: `Choosing the right season is paramount for completing the high passes of Dhaulagiri safely:<br><br>
      <strong>Autumn (Late September to Late November):</strong> The undisputed gold-standard climbing season. Post-monsoon atmospheric high pressure sweeps away dust and clouds, delivering crystal-clear skies, razor-sharp mountain panoramas, and minimal precipitation. Daytime temperatures in lower valleys reach 18°C–22°C; nights at base camps drop to -10°C to -18°C. Snow on French Pass is generally compact and stable.<br><br>
      <strong>Spring (April to Late May):</strong> The pre-monsoon spring season brings warmer ambient temperatures and vibrant blooming rhododendron and magnolia forests throughout the lower Myagdi Valley. Days are longer and warmer. However, high passes often retain winter snowpacks requiring careful moraine route-finding. Afternoons can see convective cloud buildup with light snowfall at high camps.<br><br>
      <strong>Monsoon (June–August) & Winter (December–February):</strong> Not recommended. Monsoon brings severe mud, leeches, and landslides in the Myagdi gorge; winter brings impassable 2-meter snowdrifts and sub -30°C blizzard conditions on French Pass.`,
      takeaway: "<strong>Best Month:</strong> October offers the highest statistical probability of clear weather, firm snow conditions on French Pass, and optimal flight operations at Jomsom."
    },
    {
      id: "guide-20",
      cat: "money",
      num: "20",
      title: "Trail Cash Management, Budgeting & Complete ATM Unavailability from Beni to Jomsom",
      content: `There are absolutely zero ATM facilities, bank branches, or credit card terminals anywhere along the trail between Beni (Day 3) and Jomsom (Day 17). Trekkers must withdraw all necessary Nepali Rupees (NPR) in Kathmandu or Beni before departing into the mountains.<br><br>
      While your package includes all standard meals, camping accommodation, permits, and transportation, you will need cash for personal incidental expenses at the lower teahouses: hot showers ($3–$5), battery charging ($2–$4), Wi-Fi cards ($3–$5), snacks, soft drinks/beer, and tipping your support crew. We recommend budgeting approximately <strong>25,000 to 35,000 NPR (approx. $190 to $270 USD)</strong> in small denomination notes (100, 500, 1000 NPR) carried securely in a waterproof neck pouch.`,
      takeaway: "<strong>ATM Advisory:</strong> Kathmandu ATMs occasionally run out of cash or reject foreign cards. Withdraw funds 24 hours prior to road departure."
    },
    {
      id: "guide-21",
      cat: "porters",
      num: "21",
      title: "Ethical Porter Welfare, IPPG Standards & Fair Tipping Culture",
      content: `The porters and kitchen crew are the true heroes of the Dhaulagiri Circuit. Carrying expedition tents, cooking stoves, fresh vegetables, and duffel bags through freezing moraines requires exceptional endurance and dedication. Namaste Hiking Trek strictly enforces International Porter Protection Group (IPPG) ethical standards:<br><br>
      • Maximum load limit of 20 kg per porter (one porter assigned between two clients).<br>
      • High-altitude alpine outerwear, windproof jackets, thermal base layers, sturdy boots, sunglasses, and gloves supplied by the agency.<br>
      • Comprehensive medical and helicopter rescue insurance for all support staff.<br>
      • Warm, dry tented accommodation and identical nutritious food rations as clients.<br><br>
      <strong>Tipping Guidelines:</strong> Tipping is a customary Himalayan tradition acknowledging extraordinary hard work. We recommend budgeting approx. $150 to $200 USD per client into a collective group tip pool, distributed during the celebratory farewell dinner in Jomsom on Day 17.`,
      takeaway: "<strong>Ethical Tourism:</strong> Treat porters with dignity and respect. Keep your main duffel bag strictly under 10–12 kg so your porter's total load never exceeds safe limits."
    }
  ];

  let cardsHtml = '';
  guides.forEach((g, idx) => {
    cardsHtml += `
              <!-- Guide Card ${g.num} -->
              <div class="detail-accordion-card" data-category="${g.cat}" id="${g.id}">
                <div class="detail-accordion-header" onclick="toggleDetailCard(this)">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </div>
                    <div class="detail-check-bubble">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 class="detail-accordion-title" style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy);">${g.num}. ${g.title}</h3>
                  </div>
                  <div class="detail-accordion-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <div class="detail-accordion-content-inner" style="padding: 20px 24px 24px 24px;">
                    <p style="color: #475569; font-size: 0.95rem; line-height: 1.7; margin-bottom: 16px;">
                      ${g.content}
                    </p>
                    <div style="background: #f8fafc; border-left: 3px solid var(--color-copper-orange); padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
                      ${g.takeaway}
                    </div>
                  </div>
                </div>
              </div>
`;
  });

  const code = `// Module 8: Section 6 - Read Before You Book (21 Canonical Guides for Dhaulagiri Circuit Trek)
function getDetailsSection() {
  return \`
        <!-- Section 6: Read Before You Book -->
        <section id="section-details" class="trek-detail-section">
          <div class="details-section-container">
            <!-- Heading -->
            <div class="details-title-wrapper" style="margin-bottom: 18px;">
              <h2 class="details-main-title" style="margin-bottom: 6px;">Read before you book, Dhaulagiri Circuit Trek</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 6px;"></div>
            </div>

            <!-- Subtitle Paragraphs -->
            <p class="details-subtitle-text" style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.65; margin-bottom: 12px;">
              To help you prepare for this challenging 20-day high-altitude camping expedition, our mountain operations team has compiled 21 essential operational, medical, and logistical guides covering trail progression, French Pass safety, cold-weather camping, and emergency protocols.
            </p>
            <p class="details-subtitle-text" style="color: var(--color-neutral-700); font-size: 1.02rem; line-height: 1.65; margin-bottom: 24px;">
              If you have any specific medical, dietary, or climbing gear questions, please <a href="https://wa.me/9779800000000" target="_blank" style="color: var(--color-copper-orange); font-weight: 700; text-decoration: underline;">WhatsApp our expedition specialists directly</a>. We reply within 24 hours.
            </p>

            <!-- Interactive Progress Tracker Badge -->
            <div class="details-progress-wrapper" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; margin-bottom: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div class="details-progress-badge" style="display: flex; align-items: center; gap: 14px;">
                <div class="details-progress-ring-box" style="position: relative; width: 44px; height: 44px;">
                  <svg width="44" height="44" viewBox="0 0 44 44" style="transform: rotate(-90deg);">
                    <circle class="details-progress-ring-bg" r="18" cx="22" cy="22" stroke="#e2e8f0" stroke-width="4" fill="none"></circle>
                    <circle class="details-progress-ring-bar" r="18" cx="22" cy="22" stroke="var(--color-copper-orange)" stroke-width="4" fill="none" stroke-dasharray="113.1" stroke-dashoffset="113.1" style="transition: stroke-dashoffset 0.3s ease;"></circle>
                  </svg>
                  <span id="details-progress-percent" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 800; color: var(--color-primary-navy);">0%</span>
                </div>
                <div class="details-progress-text-box">
                  <span class="details-progress-count" style="font-size: 0.95rem; font-weight: 700; color: var(--color-primary-navy); display: block;"><span id="read-guides-count">0</span> of 21 guides completed</span>
                  <span class="details-progress-status" style="font-size: 0.8rem; color: #64748b;">Read and check off all cards before departure</span>
                </div>
              </div>

              <!-- Global Toggle Button -->
              <div style="display: flex; gap: 10px;">
                <button type="button" id="toggle-all-guides-btn" class="btn btn-secondary btn-sm" style="font-size: 0.82rem; padding: 6px 14px; border-radius: 6px; cursor: pointer;">Expand All Guides</button>
              </div>
            </div>

            <!-- Search & Category Filters -->
            <div style="margin-bottom: 20px; display: flex; flex-direction: column; gap: 12px;">
              <!-- Live Search Input -->
              <div style="position: relative;">
                <input type="text" id="guide-search-input" placeholder="Search guides by keyword (e.g., French Pass, Diamox, camping, flights, porters)..." style="width: 100%; padding: 12px 16px 12px 42px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.92rem; outline: none; transition: border-color 0.2s;" onkeyup="filterGuidesByKeyword(this.value)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%);"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>

              <!-- Filter Pills -->
              <div id="guide-filter-pills" style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button type="button" class="guide-filter-pill active" data-filter="all" onclick="filterGuidesByCategory('all', this)" style="padding: 5px 12px; border-radius: 20px; font-size: 0.82rem; font-weight: 600; cursor: pointer; border: 1px solid var(--color-copper-orange); background: var(--color-copper-orange); color: #fff;">All 21 Guides</button>
                <button type="button" class="guide-filter-pill" data-filter="route" onclick="filterGuidesByCategory('route', this)" style="padding: 5px 12px; border-radius: 20px; font-size: 0.82rem; font-weight: 600; cursor: pointer; border: 1px solid #cbd5e1; background: #fff; color: #475569;">Route &amp; Passes</button>
                <button type="button" class="guide-filter-pill" data-filter="health" onclick="filterGuidesByCategory('health', this)" style="padding: 5px 12px; border-radius: 20px; font-size: 0.82rem; font-weight: 600; cursor: pointer; border: 1px solid #cbd5e1; background: #fff; color: #475569;">Altitude &amp; Safety</button>
                <button type="button" class="guide-filter-pill" data-filter="accommodation" onclick="filterGuidesByCategory('accommodation', this)" style="padding: 5px 12px; border-radius: 20px; font-size: 0.82rem; font-weight: 600; cursor: pointer; border: 1px solid #cbd5e1; background: #fff; color: #475569;">Camping &amp; Lodges</button>
                <button type="button" class="guide-filter-pill" data-filter="difficulty" onclick="filterGuidesByCategory('difficulty', this)" style="padding: 5px 12px; border-radius: 20px; font-size: 0.82rem; font-weight: 600; cursor: pointer; border: 1px solid #cbd5e1; background: #fff; color: #475569;">Fitness &amp; Training</button>
                <button type="button" class="guide-filter-pill" data-filter="logistics" onclick="filterGuidesByCategory('logistics', this)" style="padding: 5px 12px; border-radius: 20px; font-size: 0.82rem; font-weight: 600; cursor: pointer; border: 1px solid #cbd5e1; background: #fff; color: #475569;">Logistics &amp; Flights</button>
              </div>
            </div>

            <!-- 21 Accordion Cards -->
            <div class="detail-accordion-list" style="display: flex; flex-direction: column; gap: 12px;">
${cardsHtml}
            </div>

          </div>
        </section>
\`;
}

module.exports = { getDetailsSection };
`;

  fs.writeFileSync('scratch/dhaulagiri_builder/mod8_details.js', code, 'utf8');
  console.log('Successfully wrote scratch/dhaulagiri_builder/mod8_details.js');
}

buildDetailsModule();
