const fs = require('fs');

console.log('Building upgraded Read Before You Book Section 5 for Khopra Ridge Trek...');

const icons = JSON.parse(fs.readFileSync('scratch/khopra_detail_icons.json', 'utf8'));
const iconMap = {};
icons.forEach(item => {
  iconMap[item.id] = item.iconSvg;
});

// All 21 upgraded cards data
const detailCards = [
  {
    id: 'accommodation',
    title: 'Accommodation for the Khopra Ridge Trek',
    paragraphs: [
      `Accommodation on the 15-day Khopra Ridge Trek offers a rich and authentic cross-section of Nepal's mountain hospitality, transitioning from comfortable 3-star city hotels in Kathmandu and Pokhara to traditional Gurung stone lodges and remote community-owned eco-lodges along the alpine ridgeline.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What to Expect in Kathmandu and Pokhara (4 Nights)</h4>
      <p>Before and after the trek—in Kathmandu (Days 1 & 14) and Pokhara (Days 2 & 13)—you will stay in handpicked 3-star tourist-standard hotels located near vibrant dining and shopping hubs (Thamel in Kathmandu and Lakeside in Pokhara). Rooms are private twin or double rooms featuring en-suite modern bathrooms, 24-hour hot showers, complimentary high-speed Wi-Fi, air conditioning, and daily breakfast.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Traditional Mountain Teahouses (Ghandruk, Tadapani, Swanta, Ghorepani, Tikhedhunga)</h4>
      <p>In the inhabited lower and middle elevation villages, accommodation is in family-operated mountain teahouses constructed from local slate and timber. Key features include:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li>Twin-sharing bedrooms with two wooden single beds, clean mattresses, pillows, and freshly laundered bedsheets.</li>
        <li>Warm communal dining halls heated by central wood- or sawdust-burning stoves in the evening—the social heart of the lodge where meals are enjoyed, route maps reviewed, and stories shared.</li>
        <li>Common bathroom facilities (western sit-down toilets or traditional squat toilets) located on each floor or in detached outbuildings. Attached bathrooms are available in select lodges at Ghandruk and Ghorepani.</li>
      </ul>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">High-Altitude Community Eco-Lodges (Bayeli Kharka, Upper Chistibung, Khopra Ridge, Mohare Hill)</h4>
      <p>Above <span data-altitude-m="3000">3,000 metres</span>, the trail leaves private commercial lodges behind and enters community-managed territory. Built under the visionary rural development initiative led by Ramon Magsaysay Award-winner Mahabir Pun, these community lodges are non-profit social enterprises:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Direct Community Impact:</strong> 100% of accommodation profits directly fund local community schools, healthcare clinics, micro-hydro power, and community wireless internet in remote Magar and Gurung villages.</li>
        <li><strong>Simple & Functional Comfort:</strong> Rooms are cozy, timber-paneled twin bedrooms offering essential shelter, warm blankets, and awe-inspiring panoramas of Mount Dhaulagiri (<span data-altitude-m="8167">8,167 m</span>) and Annapurna South (<span data-altitude-m="7219">7,219 m</span>) directly from your window.</li>
        <li><strong>Resource Mindfulness:</strong> Solar-powered electricity provides lighting in rooms and dining halls. Water is piped from pristine alpine springs and heated using solar systems or fuel-efficient wood boilers.</li>
      </ul>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Hot Showers, Device Charging & Connectivity</h4>
      <p>Solar or gas hot showers are available at most lodges for a modest local fee (approx. NPR 300 to 500 / $2–$4 USD). Electronic device charging (phones, camera batteries, power banks) is available in common dining areas for a small fee (NPR 200 to 400). Wi-Fi is available in Ghandruk, Ghorepani, and Mohare Danda, but connectivity is intermittent or unavailable at Khopra Ridge and Bayeli Kharka. We strongly recommend carrying a 10,000–20,000 mAh portable power bank.</p>`
    ]
  },
  {
    id: 'food',
    title: 'Dining, Food & Drinking Water on the Khopra Ridge Trek',
    paragraphs: [
      `Proper nutrition and consistent hydration are fundamental to enjoying a safe and energetic trek in the Annapurna mountains. Your package includes full-board meals (breakfast, lunch, and dinner) during all trekking days, prepared fresh daily by trained lodge kitchen teams.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">The Power of Authentic Dal Bhat</h4>
      <p>The staple fuel of the Himalayas is traditional Nepalese <em>Dal Bhat Tarkari</em>—a balanced, nourishing platter comprising steamed white or brown rice, hearty spiced lentil soup (dal), seasonal vegetable curry (tarkari), fresh mountain spinach (saag), and spicy pickled chutney (achar). Dal Bhat is freshly prepared, easily digestible at high elevation, and comes with customary complimentary refills of rice, dal, and vegetables until you are completely satisfied ("Dal Bhat Power, 24 Hour!").</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Varied Mountain Menus</h4>
      <p>Teahouses across the Annapurna range offer remarkably diverse menus accommodating international palates:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Breakfast:</strong> Oatmeal porridge with honey, muesli with warm milk, Tibetan flatbread with jam, eggs cooked to order (poached, scrambled, fried, omelets), hash brown potatoes, pancakes, and hot Himalayan spiced milk tea or black coffee.</li>
        <li><strong>Lunch & Dinner:</strong> Steamed and fried vegetable momos (dumplings), stir-fried noodles (chowmein), vegetable fried rice, pasta arrabbiata, sherpa potato stew, macaroni cheese, thukpa (hearty Tibetan noodle soup), and garlic soup (traditionally consumed by highlanders to assist acclimatization).</li>
      </ul>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Vegetarian Advisory & Dietary Needs</h4>
      <p>We strongly recommend adopting a predominantly vegetarian or lacto-ovo vegetarian diet once ascending above Ghandruk and Tadapani. Because meat must be portered uphill from lower valley roadheads without continuous refrigeration, vegetarian meals are significantly fresher, healthier, and minimize any risk of gastrointestinal upset. Our guides gladly accommodate vegan, gluten-free, dairy-free, and nut-allergy requirements when notified in advance.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Safe Drinking Water Protocol</h4>
      <p>To preserve the pristine environment of the Annapurna Conservation Area, single-use disposable plastic water bottles are discouraged. Trekkers should carry two 1-litre wide-mouth reusable bottles (e.g., Nalgene). Safe drinking water options include:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li>Purchasing boiled drinking water from lodges (approx. NPR 150 to 300 per litre), which can double as a hot water bottle inside your sleeping bag at night.</li>
        <li>Treating tap or spring water using chlorine dioxide water purification tablets (Aquatabs) or a portable UV purifier (SteriPEN).</li>
        <li>Drinking a minimum of 3 to 4 litres of fluids daily to support optimal oxygen transport and prevent altitude dehydration.</li>
      </ul>`
    ]
  },
  {
    id: 'best-time',
    title: 'Best Time & Seasons to Trek Khopra Ridge',
    paragraphs: [
      `The Khopra Ridge Trek can be undertaken during multiple seasons of the year, each offering unique climatic conditions, flora, and mountain vistas. The two primary trekking windows in Nepal are Spring (March to May) and Autumn (September to November).`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Spring Season (March, April & May) — Rhododendrons & Mild Weather</h4>
      <p>Spring is one of the most magnificent times to explore the Annapurna foothills:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Flowering Canopies:</strong> In March and April, the ancient oak and rhododendron woodlands between Ghandruk, Tadapani, and Bayeli Kharka explode into brilliant displays of crimson, pink, and white blooms (Nepal's national flower, <em>Lali Gurans</em>).</li>
        <li><strong>Pleasant Temperatures:</strong> Daytime temperatures in the valleys range from 16°C to 22°C (61°F–72°F), while high elevations like Khopra Ridge (<span data-altitude-m="3660">3,660 m</span>) reach 8°C to 14°C (46°F–57°F) during sunny afternoons, dropping to around -2°C to 4°C at night.</li>
        <li><strong>Atmosphere:</strong> Crystal-clear mornings generally yield to afternoon haze or occasional light mountain showers, with clear star-studded nights.</li>
      </ul>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Autumn Season (September, October & November) — Crystal Mountain Clarity</h4>
      <p>Autumn is widely considered the peak trekking season in the Himalayas:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Unrivaled Visibility:</strong> The summer monsoon clears all atmospheric dust, leaving the air exceptionally sharp and transparent. Vistas of Dhaulagiri I (<span data-altitude-m="8167">8,167 m</span>) and Annapurna South from Khopra Ridge are at their most breathtaking.</li>
        <li><strong>Stable Meteorology:</strong> October and November offer the most consistent weather with minimal rain, deep blue skies, and dry trail footing.</li>
        <li><strong>Ideal Khayer Lake Window:</strong> High-altitude trail conditions to sacred Khayer Lake (<span data-altitude-m="4700">4,700 m</span>) are optimal, with minimal fresh snow and firm moraine paths.</li>
      </ul>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Winter (December to February) & Monsoon (June to August)</h4>
      <p><strong>Winter:</strong> Offers crisp, crystal-clear skies and peaceful trails with virtually no crowds. However, temperatures at Khopra Ridge drop below -10°C (14°F) at night, and snow can occasionally block the high pass to Khayer Lake. Heavy thermal gear and microspikes are mandatory.<br>
      <strong>Monsoon:</strong> Heavy rainfall in lower valleys creates muddy trails and leeches in sub-tropical forests, while clouds obscure mountain peaks. However, high alpine meadows around Khayer Lake are carpeted with wildflowers, and pilgrims hike to the lake for the sacred Janai Purnima festival in August.</p>`
    ]
  },
  {
    id: 'typical-day',
    title: 'A Typical Day on the Khopra Ridge Trail',
    paragraphs: [
      `A typical trekking day in the Annapurna mountains follows a healthy, rhythmic routine synchronized with daylight hours, designed to optimize physical stamina, mountain photography, and recovery.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Morning Routine (6:30 AM – 7:30 AM)</h4>
      <p>Wake up around 6:30 AM to crisp mountain air and golden morning sunlight striking the snowy ramparts of Dhaulagiri and Machapuchare. Pack your main duffle bag and place it in the designated staging area for your porter. Gather in the warm dining room for a hearty hot breakfast (porridge, eggs, toast, tea, or coffee). Refill your water bottles with treated water, apply sunscreen, and lace up your boots.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">The Morning Hike (7:30 AM – 11:30 AM)</h4>
      <p>We hit the trail around 7:30 AM when temperatures are cool and visibility is at its peak. Walking is conducted at an unhurried, rhythmic pace ("Bistari, Bistari" — slow and steady), which allows your cardiovascular system to adapt smoothly to rising elevation. We take brief 5-to-10 minute breaks every hour for hydration, trail snacks (nuts, dried fruits, energy bars), and photography.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Lunch & Afternoon Trek (11:30 AM – 3:30 PM)</h4>
      <p>Around 11:30 AM or noon, we stop at a scenic teahouse for an hour-long freshly cooked lunch. After relaxing in the midday sun, we continue for an additional 1.5 to 3 hours of walking, arriving at our overnight community lodge or teahouse by 2:30 PM to 3:30 PM. Early arrivals ensure you have ample daylight to wash up, change into dry lodge clothing, and explore the surrounding village or ridge viewpoints.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Evening Hearth & Rest (5:00 PM – 9:00 PM)</h4>
      <p>As evening chill sets in, gather in the communal dining hall around the heated stove. Your guide conducts a brief pulse oximeter check to monitor your heart rate and blood oxygen levels (SpO2). Enjoy a hot, nourishing dinner around 6:30 PM or 7:00 PM, followed by a briefing from your guide outlining tomorrow's route, distance, elevation profile, and clothing recommendations. Most trekkers retire to bed by 9:00 PM for deep, restorative sleep.</p>`
    ]
  },
  {
    id: 'permits',
    title: 'Permits & Regulations for the Annapurna Region (ACAP & TIMS)',
    paragraphs: [
      `Trekking through the Khopra Ridge circuit requires official government permits managed under the authority of the Annapurna Conservation Area Project (ACAP) and the Nepal Tourism Board (NTB).`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">1. Annapurna Conservation Area Project (ACAP) Entry Permit</h4>
      <p>The entire Khopra Ridge route lies within the Annapurna Conservation Area, Nepal's largest protected biodiversity sanctuary. The ACAP permit fee is NPR 3,000 per person (approx. $25 USD) for international travelers (NPR 1,000 for SAARC citizens). Revenues collected directly fund biodiversity conservation, wildlife anti-poaching patrols, forest preservation, and infrastructure maintenance across the conservation area.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">2. Trekkers' Information Management System (TIMS) Card</h4>
      <p>A registered green TIMS card issued through an authorized trekking agency is mandatory for all foreign hikers in the Annapurna region (cost approx. NPR 2,000 / $17 USD). The TIMS database records your personal information, emergency contacts, guide details, and intended route, providing critical tracking in the event of regional emergencies or extreme weather events.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">All Permit Logistics Handled by Namaste Hiking Trek</h4>
      <p>All permit fees, official application forms, passport registrations, and passport photos are completely arranged by our administrative team in Kathmandu and Pokhara prior to your departure. Your lead guide carries and presents the original permits at official ACAP checkpoints along the trail (Birethanti, Nayapul, and Ghorepani).</p>`
    ]
  },
  {
    id: 'acclimatization',
    title: 'Acclimatization Strategy & Altitude Safety for Khayer Lake (4,700m)',
    paragraphs: [
      `Ascending safely to high Himalayan altitudes requires deliberate pacing, staged elevation gains, and strict adherence to proven physiological principles. Our 15-day Khopra Ridge itinerary has been meticulously formulated by experienced high-altitude guides.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">The Staged Ascent Profile ("Climb High, Sleep Low")</h4>
      <p>Rather than rushing straight to high altitude, our route incorporates intelligent staging:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Days 3–4:</strong> Moderate elevations at Ghandruk (<span data-altitude-m="1940">1,940 m</span>) and Tadapani (<span data-altitude-m="2630">2,630 m</span>) allow initial physiological adaptation.</li>
        <li><strong>Days 5–6 (The Acclimatization Pivot):</strong> We climb to Bayeli Kharka (<span data-altitude-m="3460">3,460 m</span>), but then sleep lower at Upper Chistibung (<span data-altitude-m="2950">2,950 m</span>). This follows the golden mountaineering rule of <em>"climb high, sleep low"</em>, prompting the body to produce extra red blood cells while resting in denser oxygen.</li>
        <li><strong>Days 7–8:</strong> By the time you sleep at Khopra Ridge (<span data-altitude-m="3660">3,660 m</span>), your body is primed. The strenuous push to sacred Khayer Lake (<span data-altitude-m="4700">4,700 m</span>) is an active out-and-back day excursion—you spend only 1 to 2 hours at peak altitude before descending safely back to sleep at <span data-altitude-m="3660">3,660 metres</span>.</li>
      </ul>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Recognizing Acute Mountain Sickness (AMS)</h4>
      <p>Mild symptoms of AMS can occasionally occur above 3,000 metres and include light frontal headache, mild nausea, loss of appetite, dizziness, or fatigue. Your guide conducts daily pulse oximeter readings and Lake Louise AMS scoring. Never conceal symptoms: mild AMS resolves with rest, extra hydration (4 litres daily), and mild analgesics (ibuprofen/paracetamol).</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Severe Altitude Illness & Emergency Protocols (HAPE & HACE)</h4>
      <p>High Altitude Pulmonary Edema (HAPE) and High Altitude Cerebral Edema (HACE) are serious, life-threatening conditions characterized by severe breathlessness at rest, persistent coughing with pink sputum, loss of coordination (ataxia), or confusion. In the event of worsening AMS or severe symptoms, the rule is absolute: <strong>immediate descent to lower altitude</strong>. Our guides carry first aid supplies, emergency altitude medications (Diamox / Dexamethasone), and maintain direct radio/mobile links for rapid helicopter evacuation if required.</p>`
    ]
  },
  {
    id: 'difficulty',
    title: 'Difficulty & Physical Fitness Required for Khopra Ridge Trek',
    paragraphs: [
      `The Khopra Ridge Trek is graded as <strong>Moderate to Challenging</strong>. While the main circuit along ridge trails and villages is within the capabilities of fit hikers, Day 8's high-altitude excursion to Khayer Lake (<span data-altitude-m="4700">4,700 m</span>) is physically demanding and considered strenuous.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Trail Demands & Terrain Characteristics</h4>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Daily Distance & Duration:</strong> Walking averages 4 to 6 hours per day over 8 to 12 km. The Khayer Lake day requires 7 to 9 hours of sustained mountain hiking covering approx. 15 km roundtrip with over 1,000 metres of elevation gain and loss.</li>
        <li><strong>Stone Staircases:</strong> Like many classic Annapurna routes, sections feature thousands of stone steps, notably the descent from Ulleri to Tikhedhunga (3,280 stone steps). Strong knee stabilizers and trekking poles are essential.</li>
        <li><strong>Alpine Ridges & Moraines:</strong> Above Upper Chistibung, trails follow narrow grassy mountain ridges and loose rocky scree moraines approaching Khayer Lake. No technical climbing or ropes are required.</li>
      </ul>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Recommended 10-Week Training Regimen</h4>
      <p>To fully enjoy the trek without extreme muscular fatigue, begin training 8 to 10 weeks prior to departure:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Cardiovascular Endurance (3x weekly, 45–60 mins):</strong> Running, brisk uphill walking, stairmaster, rowing, or cycling to build aerobic capacity.</li>
        <li><strong>Leg & Core Strength (2x weekly):</strong> Bodyweight squats, walking lunges, calf raises, step-ups on an elevated bench, and planks to strengthen quadriceps, calves, and stabilizing core muscles.</li>
        <li><strong>Weekend Practice Hikes:</strong> Long outdoor walks (3–5 hours) on hilly trails wearing your broken-in trekking boots and carrying a daypack loaded with 5 to 8 kg of weight.</li>
      </ul>`
    ]
  },
  {
    id: 'culture',
    title: 'Cultural Heritage of Annapurna: Gurung & Magar Traditions',
    paragraphs: [
      `Beyond its sublime alpine vistas, the Khopra Ridge Trek offers an intimate journey into the living heritage, spiritual traditions, and mountain culture of two of Nepal's most celebrated ethnic peoples: the Gurung and Magar communities.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Gurung Heritage in Ghandruk & Landruk</h4>
      <p>Ghandruk (<span data-altitude-m="1940">1,940 m</span>) is the cultural capital of the Annapurna Gurung people (known natively as <em>Tamu</em>). Renowned worldwide for their valor in the British and Indian Gurkha regiments, the Gurung are hospitable agrarians with rich traditions:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Architecture & Village Life:</strong> Impeccably paved flagstone streets, whitewashed stone homes with slate shingle roofs, and meticulously cultivated terraces of millet, maize, and mustard.</li>
        <li><strong>Spiritual Practices:</strong> A harmonious blend of Tibetan Buddhism and ancient Shamanistic (Bon) traditions. Village gompas (monasteries) fly colorful prayer flags sending blessings on mountain breezes.</li>
        <li><strong>Gurung Cultural Museum:</strong> We visit the historic museum in Ghandruk displaying traditional sheep-wool textiles, antique farming implements, brass water vessels, and authentic Gurung ceremonial attire.</li>
      </ul>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Magar Traditions in Swanta & Tikhedhunga</h4>
      <p>In Swanta, Ulleri, and Tikhedhunga, you are welcomed by the Magar community, one of Nepal's oldest indigenous ethnic groups. Magar culture is celebrated for its warm community spirit, folklore dancing (<em>Maruni</em> and <em>Kauda</em>), traditional watermills, and terraced agricultural mastery.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Spiritual Sanctity of Sacred Khayer Lake</h4>
      <p>Perched high in an alpine glacial amphitheater at <span data-altitude-m="4700">4,700 metres</span>, Khayer Lake is revered as a sacred high-altitude sanctuary dedicated to Goddess Khayer Barahi. During the sacred full moon of Janai Purnima (August), hundreds of Hindu and Buddhist pilgrims make the arduous barefoot climb to bathe in its icy waters, believing the goddess bestows blessings of health, prosperity, and fertility.</p>`
    ]
  },
  {
    id: 'route-alternatives',
    title: 'Route Architecture & Trail Alternatives for Khopra Ridge',
    paragraphs: [
      `Our 15-day itinerary is engineered as a non-repetitive circuit loop that captures the optimal combination of secluded wilderness, cultural immersion, and world-class viewpoints.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">The Circuit Loop Advantage</h4>
      <p>Unlike standard out-and-back treks that retrace the same trails, our route moves in a dynamic loop:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>The Ascent Arc:</strong> Nayapul → Ghandruk → Tadapani → wilderness branch to Bayeli Kharka → Upper Chistibung → Khopra Ridge.</li>
        <li><strong>The Apex:</strong> Khopra Ridge (<span data-altitude-m="3660">3,660 m</span>) with day excursion to sacred Khayer Lake (<span data-altitude-m="4700">4,700 m</span>).</li>
        <li><strong>The Descent & Viewpoint Arc:</strong> Swanta Magar village → Ghorepani → dawn sunrise at Poon Hill (<span data-altitude-m="3210">3,210 m</span>) → ridge traverse to Mohare Hill eco-lodge (<span data-altitude-m="3300">3,300 m</span>) → Ulleri stone staircases → Tikhedhunga → Nayapul.</li>
      </ul>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Popular Variations & Extensions</h4>
      <p><strong>1. Annapurna Base Camp (ABC) Connection:</strong> From Tadapani or Ghorepani, you can link directly eastward via Chomrong into the Annapurna Sanctuary, combining Khopra Ridge with ABC in an extended 18-to-20 day mega-circuit.<br>
      <strong>2. Descent to Tatopani Hot Springs:</strong> For trekkers wishing to bypass Poon Hill, an alternative trail descends steeply west from Khopra Ridge into the Kali Gandaki Valley at Tatopani (<span data-altitude-m="1190">1,190 m</span>), where natural geothermal hot springs provide muscle-soothing baths beside the river.</p>`
    ]
  },
  {
    id: 'flight-lukla',
    title: 'Transportation: Kathmandu to Pokhara & Trailhead Access',
    paragraphs: [
      `Unlike the Everest region which relies heavily on weather-sensitive mountain flights into Lukla Airport, the Khopra Ridge Trek benefits from dependable overland highway connections and optional domestic flights between Kathmandu and Pokhara.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Overland Scenic Drive (Kathmandu – Pokhara)</h4>
      <p>Our standard package includes travel between Kathmandu and Pokhara (Days 2 & 14) aboard comfortable tourist coaches or private vehicles along the 200 km Prithvi Highway. The journey takes approximately 6 to 7 hours, winding along the scenic Trishuli and Marsyangdi river gorges past terraced farms, roadside bazaars, and suspension bridges, with regular stops for tea and buffet lunch.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Domestic Flight Upgrade Option</h4>
      <p>If you prefer to save travel time, you can easily upgrade to a 25-minute domestic flight between Tribhuvan International Airport (Kathmandu) and the new Pokhara International Airport aboard scheduled ATR-72 aircraft (operated by Buddha Air or Yeti Airlines). The flight offers panoramic views of the Langtang, Manaslu, and Annapurna massifs on clear days.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Trailhead Transfers (Pokhara – Nayapul & Return)</h4>
      <p>Private vehicle road transfers are provided from your Pokhara Lakeside hotel to the trek starting point at Nayapul / Birethanti (approx. 42 km, 1.5 hours drive). At the conclusion of your trek on Day 13, our private vehicle meets your group at Nayapul for the comfortable transfer back to Pokhara.</p>`
    ]
  },
  {
    id: 'age-groups',
    title: 'Khopra Ridge Trek for Different Age Groups & Fitness Levels',
    paragraphs: [
      `Because of its moderate trail grades, flexible pacing, and well-managed elevation profile, the Khopra Ridge Trek is adaptable to a wide range of adventurous travelers.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Active Seniors & Mature Trekkers (55 to 70+)</h4>
      <p>Mature hikers with sound knees, good cardiovascular health, and regular walking habits thrive on this trek. Trekking poles are strongly recommended to cushion knee joints on descents. Our private departures allow complete flexibility to adjust daily hiking speeds to match your natural cadence.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Families with Teenagers (Ages 12+)</h4>
      <p>The cultural diversity, wildlife spotting (Danphe pheasants, langur monkeys), and manageable walking days make Khopra Ridge an exceptional bonding adventure for families with teenagers. The trek exposes young adults to mountain ecology, sustainable community living, and authentic Himalayan culture.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Flexibility on Day 8 (Khayer Lake Optional)</h4>
      <p>A major operational advantage of our itinerary is that Day 8's hike to Khayer Lake (<span data-altitude-m="4700">4,700 m</span>) is an optional out-and-back day trip. Any group member feeling fatigued or wishing to avoid the strenuous 7-to-9 hour climb can comfortably remain at the Khopra Ridge community lodge (<span data-altitude-m="3660">3,660 m</span>), soaking in 360-degree panoramas of Dhaulagiri and Annapurna South in complete relaxation.</p>`
    ]
  },
  {
    id: 'extend-trip',
    title: 'Extend Your Trip After Khopra Ridge (ABC, Poon Hill, Chitwan)',
    paragraphs: [
      `Because Pokhara serves as Nepal's outdoor adventure capital, your Khopra Ridge Trek can be effortlessly paired with unforgettable regional extensions before flying home.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">1. Chitwan National Park Wildlife Safari (+3 Days / 2 Nights)</h4>
      <p>Travel by private tourist vehicle from Pokhara down to the subtropical lowlands of Chitwan National Park. Stay in an eco-safari resort and enjoy jeep safaris, dugout canoe rides along the Rapti River, guided jungle walks, and opportunities to spot endangered greater one-horned rhinoceroses, gharial crocodiles, wild elephants, and Royal Bengal tigers.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">2. Relaxation & Adventure in Pokhara (+1 to 2 Days)</h4>
      <p>Extend your stay in picturesque Pokhara to enjoy paragliding from Sarangkot, an early morning sunrise boat ride on Phewa Lake, visiting the Peace Pagoda (Shanti Stupa), touring Davis Falls and Gupteshwor Cave, or indulging in post-trek massage and spa treatments in Lakeside.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">3. Kathmandu UNESCO Heritage Exploration (+1 Day)</h4>
      <p>Spend an extra day in the capital exploring ancient UNESCO World Heritage sites: the great Buddhist stupas of Boudhanath and Swayambhunath (Monkey Temple), the sacred Hindu temple complex of Pashupatinath, and the medieval palace courtyards of Patan Durbar Square.</p>`
    ]
  },
  {
    id: 'porter-limit',
    title: 'Porter Welfare, Weight Limits & Ethical Trekking Standards',
    paragraphs: [
      `At Namaste Hiking Trek, ethical porter care and fair labor standards are non-negotiable core values. Porters are the true foundation of Himalayan trekking, and we ensure their safety, health, and dignity on every expedition.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Strict Weight Limits (20–22 kg Maximum per Porter)</h4>
      <p>In accordance with guidelines established by the International Porter Protection Group (IPPG) and the Trekking Agencies' Association of Nepal (TAAN):</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li>One porter carries luggage for two trekkers.</li>
        <li>Each trekker is allocated a maximum of <strong>10 to 11 kg (22–24 lbs)</strong> of personal luggage packed into our complimentary water-resistant expedition duffle bag.</li>
        <li>Your daypack (containing water, warm layers, camera, sunscreen, rain jacket, and valuables) is carried by you and typically weighs 4 to 6 kg.</li>
      </ul>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Fair Wages, Proper Gear & Emergency Insurance</h4>
      <p>All our porters receive industry-leading daily wages, nutritious meals matching client standards, warm sleeping accommodations in teahouses, proper cold-weather clothing (boots, thermal layers, warm jackets, gloves, sunglasses), and comprehensive medical and emergency evacuation insurance covering high-altitude illness and injury.</p>`
    ]
  },
  {
    id: 'upgrade-heli',
    title: 'Emergency Evacuation & Helicopter Logistics in Annapurna',
    paragraphs: [
      `Safety is our paramount priority throughout the 15-day Khopra Ridge Trek. While serious emergencies are rare due to our gradual acclimatization schedule, the Annapurna region features an exceptional emergency response infrastructure.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Rapid Helicopter Response from Pokhara Airport</h4>
      <p>Pokhara International Airport serves as the regional hub for modern high-altitude rescue helicopters (Airbus H125 / AS350 B3e series). In clear weather during daylight hours, emergency rescue helicopters can reach helipads at Khopra Ridge (<span data-altitude-m="3660">3,660 m</span>), Bayeli Kharka, Ghorepani, or Ghandruk in just <strong>15 to 20 minutes</strong> from initial dispatch.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Mandatory Travel Insurance Requirements</h4>
      <p>All participants on the Khopra Ridge Trek are required to maintain travel insurance that explicitly covers:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li>Emergency medical treatment and hospitalization in Nepal.</li>
        <li>Helicopter search, rescue, and evacuation up to <strong><span data-altitude-m="5000">5,000 metres (16,400 ft)</span></strong> without altitude restrictions.</li>
        <li>Repatriation of remains.</li>
      </ul>
      <p>Always verify with your insurance provider that "hiking up to 5,000m" is explicitly included in your policy coverage terms without hidden deductibles or pre-authorization delays.</p>`
    ]
  },
  {
    id: 'responsible-trekking',
    title: 'Responsible Eco-Trekking & Community Support',
    paragraphs: [
      `The Khopra Ridge and Mohare Danda trails were pioneered as sustainable eco-trekking corridors designed to distribute tourism revenues directly into underprivileged hill villages.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Supporting Community-Owned Tourism Enterprises</h4>
      <p>By booking this trek, your travel expenditure directly supports rural grassroots development:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li>Community lodge revenues in Bayeli Kharka, Upper Chistibung, Khopra Danda, and Mohare Hill provide sustainable funding for local secondary schools, computers for digital education, and village health clinics.</li>
        <li>We purchase locally produced organic vegetables, free-range eggs, potatoes, and goat cheese from family farms along the trail.</li>
      </ul>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Leave No Trace Principles</h4>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Zero Single-Use Plastic:</strong> Bring refillable water bottles and water purification methods. Never discard plastic bottles, snack wrappers, or wet wipes on mountain paths.</li>
        <li><strong>Pack It In, Pack It Out:</strong> All non-biodegradable waste generated during the high alpine push to Khayer Lake is packed down to lower settlements for responsible disposal.</li>
        <li><strong>Trail Integrity:</strong> Stay on established stone footpaths to prevent topsoil erosion on fragile alpine slopes. Respect wildlife and refrain from picking alpine wildflowers.</li>
      </ul>`
    ]
  },
  {
    id: 'guided-vs-independent',
    title: 'Independent vs. Guided Trekking for Khopra Ridge',
    paragraphs: [
      `Understanding current Nepal government trekking regulations and the practical benefits of professional guidance ensures a seamless mountain journey.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Official Nepal Government Regulations (Mandatory Guides)</h4>
      <p>Effective April 2023, the Nepal Tourism Board and Ministry of Culture, Tourism and Civil Aviation enacted mandatory regulations prohibiting independent foreign trekking in all national parks and conservation areas, including the Annapurna Conservation Area. Foreign trekkers must be accompanied by a government-licensed guide registered through a legally recognized trekking company.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Why Guided Trekking is Essential on Khopra Ridge</h4>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Navigation on Remote Trails:</strong> Unlike the heavily signposted Poon Hill highway, the trails between Tadapani, Bayeli Kharka, Upper Chistibung, and Khopra Ridge feature narrow forested tracks and unmarked ridgeline junctions. Frequent afternoon mists can severely impair visibility. An experienced guide ensures flawless route finding.</li>
        <li><strong>Securing Community Lodge Beds:</strong> High community lodges (Bayeli Kharka, Upper Chistibung, Khopra Danda) have limited room capacities (15 to 25 beds). Our team reserves your rooms and meals in advance, preventing situations where independent walkers are turned away due to lack of space.</li>
        <li><strong>Khayer Lake Mountain Leadership:</strong> The out-and-back trail to Khayer Lake (<span data-altitude-m="4700">4,700 m</span>) traverses rugged lateral moraines and scree. A seasoned guide assesses daily weather, snow conditions, and client stamina, making authoritative turnaround decisions if mountain conditions deteriorate.</li>
      </ul>`
    ]
  },
  {
    id: 'emergency-evacuation',
    title: 'Wilderness Medical Safety & First Aid Protocols',
    paragraphs: [
      `Every Namaste Hiking Trek departure operates under rigorous safety, risk-management, and high-altitude emergency protocols developed over decades of Himalayan leadership.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Certified Wilderness First Responders</h4>
      <p>Your lead trekking guide is certified in Wilderness First Aid (WFA) and high-altitude emergency management by certified Himalayan medical institutions. They possess extensive training in recognizing early indicators of acute mountain sickness (AMS), hypothermia, heat exhaustion, and trauma management.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Expedition Medical Kit & Diagnostic Tools</h4>
      <p>Our guiding team carries a comprehensive wilderness medical kit containing:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li>Digital pulse oximeters to measure blood oxygen saturation (SpO2) and heart rate twice daily.</li>
        <li>Prescription altitude medications (Acetazolamide / Diamox) and antiemetics.</li>
        <li>Broad-spectrum antibiotics, rehydration salts (ORS), and gastrointestinal treatments.</li>
        <li>Sterile dressings, antiseptic wound washes, blister care (moleskin, second skin), elastic bandages, and emergency splints.</li>
      </ul>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">24/7 Operations Desk Coordination</h4>
      <p>Our Kathmandu operations headquarters maintains daily communications with your guide via mobile and satellite networks. If emergency descent, clinical evaluation, or helicopter extraction is required, our ground team immediately coordinates logistics with your travel insurance and regional medical providers in Pokhara.</p>`
    ]
  },
  {
    id: 'money-exchange',
    title: 'Cash Needs, ATMs & Personal Expenses on Trail',
    paragraphs: [
      `While all essential expedition costs (permits, accommodation, 3 meals per day, ground transport, guide, and porter fees) are fully covered in your booking package, you will need personal local cash for incidental trail expenses.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">No ATMs in High Mountain Settlements</h4>
      <p>The last reliable ATM facilities before the trek are located in Pokhara (Lakeside) and Nayapul. <strong>There are zero ATMs or banking facilities in Ghandruk, Tadapani, Bayeli Kharka, Khopra Ridge, Swanta, or Ghorepani.</strong> Mountain lodges and local shops accept cash only in Nepalese Rupees (NPR). Credit cards and foreign currencies cannot be used on the trail.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Recommended Daily Cash Budget</h4>
      <p>We recommend budgeting approximately <strong>NPR 2,500 to 3,500 per person per day ($20 to $30 USD)</strong> in cash for optional personal items:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li>Hot showers at mountain teahouses (NPR 300 to 500 per shower).</li>
        <li>Electronic device charging (NPR 200 to 400 per device/power bank).</li>
        <li>Wi-Fi connection access cards (NPR 300 to 500 per 24 hours in select villages).</li>
        <li>Specialty coffees, soft drinks, beer, snacks, candy bars, or fresh bakery treats in Ghorepani.</li>
        <li>Handmade souvenirs, wool shawls, or local donations in traditional Gurung/Magar villages.</li>
      </ul>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Currency Exchange Guidance</h4>
      <p>Exchange major foreign currencies (USD, EUR, GBP, AUD, CAD) into Nepalese Rupees at authorized exchange counters or ATMs in Kathmandu (Thamel) or Pokhara (Lakeside) prior to Day 3. Request smaller denominations (NPR 100, 500, and 1,000 notes), as teahouses in remote high camps often lack change for large sums.</p>`
    ]
  },
  {
    id: 'booking-process',
    title: 'Cost, Deposit & Booking Process for Khopra Ridge Trek',
    paragraphs: [
      `Booking your 15-day Khopra Ridge Trek with Namaste Hiking Trek is straightforward, transparent, and completely secure.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Simple Step-by-Step Booking Procedure</h4>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Step 1: Inquire & Date Selection:</strong> Reach out via our online inquiry form, direct email, or WhatsApp (+977 980 000 0000). Our trekking specialist will verify departure availability and provide a tailored proposal.</li>
        <li><strong>Step 2: Confirm with 20% Deposit:</strong> Secure your booking by paying a 20% advance deposit via credit card (Visa, MasterCard, American Express) through our secure payment gateway or international bank wire transfer.</li>
        <li><strong>Step 3: Documentation:</strong> Provide a scanned copy of your passport (valid for at least 6 months), passport-size photographs (for ACAP/TIMS permits), and international flight arrival details.</li>
        <li><strong>Step 4: Balance Payment in Nepal:</strong> The remaining 80% balance is payable upon your arrival in Kathmandu during our pre-trek briefing, payable in cash (USD, EUR, GBP, NPR) or by credit card (subject to standard bank processing fees).</li>
      </ul>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Transparent Pricing Guarantee</h4>
      <p>We pride ourselves on 100% transparent pricing. There are no hidden fees, local booking surcharges, or surprise equipment charges. All permits, accommodation, domestic overland transfers, licensed guide services, porter luggage transport, and full board meals are included as specified.</p>`
    ]
  },
  {
    id: 'tipping-culture',
    title: 'Tipping Etiquette for Guides & Porters in Nepal',
    paragraphs: [
      `Tipping is a deeply ingrained and meaningful tradition within Nepal's trekking and mountaineering culture. While tipping is voluntary and reflects your satisfaction with the crew's hard work, care, and hospitality, it forms an important supplement to their seasonal livelihood.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Industry-Standard Tipping Benchmarks</h4>
      <p>As a practical general benchmark, budget approximately <strong>10% to 15% of your total trek cost</strong> for overall support crew tips. A customary distribution guideline per group is:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Lead Trekking Guide:</strong> $10 to $15 USD per day from the entire group.</li>
        <li><strong>Porters & Assistant Crew:</strong> $6 to $10 USD per day per porter from the group.</li>
      </ul>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">The Tipping Ceremony</h4>
      <p>Tipping is traditionally presented on the final evening of the trek (Day 13 in Pokhara or Day 12 in Tikhedhunga). Trekkers pool their contributions and place tips into individual cash envelopes for each guide and porter. This evening celebration is a cherished moment of mutual gratitude, singing, and heartfelt farewells before returning to Kathmandu.</p>`
    ]
  },
  {
    id: 'important-notes',
    title: 'Essential Expedition Notes & Weather Contingencies for Khopra Ridge',
    paragraphs: [
      `To ensure your journey through the Annapurna wilderness is smooth, safe, and memorable, please keep these practical operational considerations in mind.`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Weather & Safety Decisions on Day 8 (Khayer Lake)</h4>
      <p>The excursion to sacred Khayer Lake (<span data-altitude-m="4700">4,700 m</span>) is an alpine wilderness ascent across remote terrain. In the event of heavy snowfall, dense whiteout fog, high winds, or signs of altitude illness among group members, your lead guide holds the authoritative professional authority to modify the route or turn back to Khopra Ridge. Client and crew safety will never be compromised.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Free Luggage Storage in Kathmandu & Pokhara</h4>
      <p>You do not need to carry all your international travel luggage into the mountains. Excess city clothing, formal attire, and non-trekking gear can be stored securely and free of charge in the locked luggage storage rooms of our partner hotels in Kathmandu or Pokhara until your return.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Nepal Tourist Visa Information</h4>
      <p>Most foreign travelers can easily obtain a Nepal Tourist Visa on arrival at Tribhuvan International Airport (TIA) in Kathmandu. Visa fees (payable in USD cash or credit card) are: 15-day visa ($30 USD), 30-day visa ($50 USD), or 90-day visa ($125 USD). We recommend selecting the 30-day visa to provide ample buffer for your 15-day itinerary and city exploration.</p>`,
      `<h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Passport Validity & Emergency Contact</h4>
      <p>Ensure your passport has at least six months of validity beyond your planned departure date from Nepal and contains at least two blank visa pages. Provide Namaste Hiking Trek with emergency contact details (next of kin) and full insurance policy documentation before departure.</p>`
    ]
  }
];

// Build cards HTML
let cardsHtml = '';
detailCards.forEach((card, index) => {
  const iconSvg = iconMap[card.id] || `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
  
  let paragraphsHtml = '';
  card.paragraphs.forEach(p => {
    if (p.startsWith('<h4') || p.startsWith('<ul') || p.startsWith('<div')) {
      paragraphsHtml += `                      ${p}\n`;
    } else {
      paragraphsHtml += `                      <p>${p}</p>\n`;
    }
  });

  cardsHtml += `                <!-- Item ${index + 1}: ${card.id} -->
                <div class="detail-accordion-card" data-detail-id="${card.id}">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        ${iconSvg}
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h3 class="detail-accordion-title">${card.title}</h3>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-content-inner">
${paragraphsHtml}                    </div>
                  </div>
                </div>\n\n`;
});

const section5Html = `<!-- Section 5: Trip Details / "Read Before You Book" -->
          <section id="section-details" class="trek-detail-section">
            <div class="details-section-container">
              <!-- Heading -->
              <div class="details-title-wrapper">
                <h2 class="details-main-title">Read before you book, Khopra Ridge Trek</h2>
                <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <!-- Subtitle Paragraphs -->
              <p class="details-subtitle-text">To help you prepare for the 15-day Khopra Ridge Trek, we have compiled an essential operational guide covering community lodge accommodations, trail nutrition, acclimatization protocols, 10-week conditioning, ACAP permits, and high-altitude safety for Khayer Lake (<span data-altitude-m="4700">4,700 m</span>).</p>
              <p class="details-subtitle-text" style="margin-bottom: 24px;">If you are still unsure if this trek is for you, then email or <a href="https://wa.me/9779800000000" target="_blank">WhatsApp us</a>. We will get back to you within 24 hours to answer any more questions.</p>

              <!-- Interactive Progress Tracker Badge -->
              <div class="details-progress-wrapper">
                <div class="details-progress-badge">
                  <div class="details-progress-ring-box">
                    <svg width="44" height="44">
                      <circle class="details-progress-ring-bg" r="18" cx="22" cy="22"></circle>
                      <circle class="details-progress-ring-bar" r="18" cx="22" cy="22"></circle>
                    </svg>
                  </div>
                  <div class="details-progress-text-box">
                    <span class="details-progress-count">0/21 read</span>
                    <span class="details-progress-status">Nice start — keep going</span>
                  </div>
                </div>
              </div>

              <!-- Accordion List (21 Items) -->
              <div class="detail-accordion-list">
${cardsHtml}              </div>
            </div>
          </section>`;

let html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

// Also update data-trek-key="khopra"
html = html.replace('data-trek-details-wrapper data-trek-key="ebc"', 'data-trek-details-wrapper data-trek-key="khopra"');

const s5Start = html.indexOf('<!-- Section 5:');
const s6Start = html.indexOf('<!-- Section 6:');

if (s5Start === -1 || s6Start === -1) {
  console.error('Could not locate Section 5 or Section 6 markers!', { s5Start, s6Start });
  process.exit(1);
}

html = html.substring(0, s5Start) + section5Html + '\n\n          ' + html.substring(s6Start);

// Validate tag balance
const tags = ['div', 'section', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'span', 'ul', 'li', 'button', 'a', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'main', 'article'];
let allOk = true;
for (const t of tags) {
  const o = (html.match(new RegExp('<' + t + '[\\s>]', 'gi')) || []).length;
  const c = (html.match(new RegExp('</' + t + '>', 'gi')) || []).length;
  if (o !== c) {
    console.error(t + ' MISMATCH: open=' + o + ', close=' + c + ', diff=' + (o - c));
    allOk = false;
  }
}

if (!allOk) {
  console.error('Validation failed! Tag balance error.');
  process.exit(1);
}

fs.writeFileSync('trek/khopra-ridge-trek/index.html', html, 'utf8');
console.log('SUCCESS: Upgraded Section 5 Read Before You Book completed with 100% tag balance!');
