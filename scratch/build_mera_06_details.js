const fs = require('fs');

let html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sDetailsMarker = '<!-- Section 5: Trip Details -->';
const sAltMarker = '<!-- Section 6: Map & Elevation -->';

const idxDetails = html.indexOf(sDetailsMarker);
const idxAlt = html.indexOf(sAltMarker);

if (idxDetails === -1 || idxAlt === -1) {
  console.error('Section 5 details or Section 6 alt marker not found!');
  process.exit(1);
}

// 21 Detailed Topics for Mera Peak Climbing
const topics = [
  {
    id: "accommodation",
    title: "Accommodation: Hotels, Mountain Teahouses & High Camp Tents",
    icon: `<path d="M3 17V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="M3 13h18"></path><circle cx="8" cy="9" r="1.5"></circle>`,
    content: `
      <p>Accommodation during the 18-day Mera Peak expedition transitions through three distinct comfort zones: standard city hospitality in Kathmandu, rustic family-run teahouses across the Solukhumbu and Hinku valleys, and specialized alpine camping at Mera High Camp (<span data-altitude-m="5780">5,780 m</span>).</p>
      
      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Kathmandu Hotel Comfort</h4>
      <p>In Kathmandu, you stay 3 nights at a 3-star boutique hotel in the quiet outskirts of Thamel. Rooms include en-suite bathrooms with reliable 24-hour hot water, comfortable mattresses, air conditioning, high-speed Wi-Fi, and daily buffet breakfast. This provides an ideal staging base for pre-expedition gear checks and a welcoming sanctuary after your mountain summit.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Hinku Valley Mountain Teahouses</h4>
      <p>During the trek from Paiya to Khare, accommodation is in local Sherpa- and Rai-run teahouses. Rooms are simple, unheated twin-share bedrooms with wooden beds, foam mattresses, pillows, and blankets. Because the Hinku Valley is significantly less commercialized than the Everest Base Camp highway, teahouses here retain an authentic, rustic alpine charm. In settlements like Thangnak and Khare, dining halls are warmed in the evening by a central cast-iron stove fueled by dried yak dung or firewood, creating a lively social hub for hot tea and hearty meals.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">High-Altitude Expedition Tents at High Camp (5,780 m)</h4>
      <p>At Mera High Camp (<span data-altitude-m="5780">5,780 m</span>), where no permanent buildings exist, our Sherpa team sets up a specialized tented campsite. We provide rugged 4-season geodesic dome tents (Mountain Hardwear Trango 3 or The North Face VE 25) designed to withstand gale-force Himalayan winds and heavy snowfall. Inside, each climber is equipped with a thick closed-cell insulating foam sleeping pad. We strongly advise using an expedition sleeping bag rated to at least -20°C (-4°F) to ensure warm, restorative rest before the midnight summit push.</p>
    `
  },
  {
    id: "food",
    title: "Available Food & Mountain Nutrition: Dal Bhat, High-Calorie Meals & Garlic Soup",
    icon: `<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>`,
    content: `
      <p>Proper high-altitude nutrition is critical for sustaining energy, staying warm, and recovering muscular strength during an 18-day climbing expedition where your basal metabolic rate can increase by 30% to 50%.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">The Power of Traditional Dal Bhat</h4>
      <p>Throughout the mountain lodges, the undisputed staple is <strong>Dal Bhat Tarkari</strong>—steamed rice, savory lentil soup, spiced vegetable curry, and fresh spinach. Highly nutritious, carbohydrate-dense, easily digestible at high elevation, and always served with generous free second helpings, it remains the fuel of choice for Sherpa mountaineers.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Diverse Lodge Menus</h4>
      <p>Teahouse menus in Paiya, Kothe, Thangnak, and Khare also feature hearty Western and Sherpa dishes:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Breakfast:</strong> Oatmeal porridge, muesli with warm milk, pancakes, Tibetan bread with honey/jam, scrambled or fried eggs, and hash browns.</li>
        <li><strong>Lunch & Dinner:</strong> Sherpa stew (Syakpa), fried noodles (Chowmein), momos (steamed dumplings), vegetable fried rice, macaroni pasta with yak cheese, and potato rostis.</li>
        <li><strong>Altitude Soups:</strong> Fresh garlic soup is enthusiastically recommended by Sherpa guides due to its proven vasodilating properties that aid oxygen circulation in the blood.</li>
      </ul>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">High Camp Dining & Summit Nutrition</h4>
      <p>At Mera High Camp, our expedition cooks prepare hot, high-carbohydrate meals such as vegetable pasta, instant porridge, and hot soups. For the 2:00 AM summit push, carry lightweight, high-energy snacks that won't freeze solid (honey stinger waffles, chocolate bars, energy gels, mixed dried fruits, and nuts) tucked inside your down jacket pockets close to body heat.</p>
    `
  },
  {
    id: "water",
    title: "Drinking Water & Hydration Safety (4–5 Liters Daily)",
    icon: `<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>`,
    content: `
      <p>Staying aggressively hydrated is the single most effective physiological defense against Acute Mountain Sickness (AMS). In the dry, thin air above 4,000 meters, you lose significant moisture through rapid respiratory rate alone. We mandate drinking <strong>4 to 5 liters of fluids daily</strong>.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Safe Drinking Water Protocols</h4>
      <p>Never drink untreated tap or stream water in Nepal. We recommend two safe, eco-friendly strategies:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Chemical Purification:</strong> Fill wide-mouth Nalgene bottles with lodge tap water and treat with chlorine dioxide tablets (Aquatabs / Katadyn Micropur) or iodine. Allow the full 30-minute reaction time before drinking.</li>
        <li><strong>Boiled Lodge Water:</strong> Teahouses sell boiled drinking water by the liter or thermos. Boiling kills 100% of waterborne pathogens and provides comforting warmth when poured into your bottle at night (doubling as a bed warmer inside your sleeping bag!).</li>
      </ul>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Freeze Prevention on Summit Night</h4>
      <p>On summit morning, temperatures plummet to -20°C. Standard water bladder hoses freeze solid within 15 minutes and should be avoided. Instead, carry a 1-liter vacuum-insulated thermos flask filled with hot lemon tea, plus a 1-liter wide-mouth Nalgene bottle stored inside an insulated thermal sleeve inside your backpack.</p>
    `
  },
  {
    id: "difficulty",
    title: "Expedition Difficulty & Mountaineering Classification (Alpine PD)",
    icon: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>`,
    content: `
      <p>Mera Peak Central (<span data-altitude-m="6476">6,476 m / 21,247 ft</span>) is classified as <strong>Alpine PD (Peu Difficile / Slightly Difficult)</strong> on the French adjectival mountaineering scale. While technically straightforward compared to peaks like Island Peak or Ama Dablam, it is physically demanding due to extreme altitude, freezing temperatures, and long sustained walking hours.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">What Makes Mera Peak Physically Challenging?</h4>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Extreme Altitude:</strong> At nearly 6,500 meters, each breath delivers under 45% of sea-level oxygen. Simple movements demand heavy physical exertion.</li>
        <li><strong>Sustained Summit Day:</strong> The summit push from High Camp to the top and down to Khare involves 9 to 11 hours of continuous movement across 1,400 meters of elevation change.</li>
        <li><strong>Freezing Temperatures:</strong> Wind chills at High Camp and the summit ridge regularly drop to between -15°C and -25°C.</li>
      </ul>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Technical Requirements</h4>
      <p>The glacier ascent consists mostly of low-angle snow walking (20° to 30° gradients) roped together in teams of 3 to 4. The only steep technical section is the final 40-meter summit headwall, which steepens to 40°–45°. Our Climbing Sherpas fix a dynamic safety line here, allowing you to ascend safely using a mechanical jumar ascender and abseil down with a figure-8 descender. All necessary technical skills are taught and practiced thoroughly on Day 12 at Khare Base Camp.</p>
    `
  },
  {
    id: "best-time",
    title: "Best Time for Mera Peak Climbing: Spring vs Autumn Windows",
    icon: `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`,
    content: `
      <p>Climbing Mera Peak is optimal during Nepal's two primary mountaineering seasons: <strong>Spring (late March to May)</strong> and <strong>Autumn (late September to November)</strong>. Each season offers unique weather characteristics and mountain conditions.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Autumn Season (Late September to November) — The Peak Season</h4>
      <p>Autumn is widely considered the premier climbing window for Mera Peak:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Sky Clarity:</strong> The monsoon washes away atmospheric dust, leaving razor-sharp crystal skies and virtually guaranteed panoramas of the 5 eight-thousanders.</li>
        <li><strong>Stable Weather:</strong> High-pressure systems bring settled, predictable weather patterns with low wind speeds on the summit ridge.</li>
        <li><strong>Colder Nights:</strong> Temperatures are crisp and cold, dipping to -20°C at High Camp by November.</li>
      </ul>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Spring Season (April to May) — Warmer Temperatures & Blooming Flora</h4>
      <p>Spring is favored by climbers who prefer milder temperatures and vibrant nature:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Rhododendron Blooms:</strong> The forests of Paiya and Pangkongma burst into brilliant scarlet, pink, and white blossoms.</li>
        <li><strong>Warmer Days:</strong> Daytime temperatures are warmer, making high camps and summit mornings less punishing.</li>
        <li><strong>Afternoon Clouds:</strong> Pre-monsoon thermal convection can build afternoon clouds and occasional snow flurries, making dawn summit pushes essential.</li>
      </ul>
    `
  },
  {
    id: "permits",
    title: "Permits & Official Regulations (NMA Permit, Makalu-Barun & Khumbu Fee)",
    icon: `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>`,
    content: `
      <p>Mera Peak is managed under the strict regulatory framework of the Nepal Mountaineering Association (NMA) and local municipal conservation authorities. Namaste Hiking Trek handles 100% of permit procurement, documentation, and government fees on your behalf.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Required Permits Included in Your Package:</h4>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>NMA Mera Peak Climbing Permit:</strong> Official climbing authorization issued in Kathmandu by the Nepal Mountaineering Association. Fees vary seasonally ($250 USD in Spring, $125 USD in Autumn).</li>
        <li><strong>Makalu-Barun National Park Entry Permit:</strong> Conservation fee of NPR 3,000 (~$25 USD) for entering the pristine national park wilderness.</li>
        <li><strong>Khumbu Pasang Lhamu Rural Municipality Entry Permit:</strong> Local government development fee of NPR 2,000 (~$17 USD) registered upon arrival in Lukla.</li>
        <li><strong>Garbage Deposit:</strong> A mandatory refundable environmental deposit of $500 USD per expedition deposited with the NMA to ensure all non-biodegradable waste is packed out.</li>
      </ul>
      <p>Please provide a scanned copy of your passport (valid for at least 6 months) and two passport-sized digital photographs at least 3 weeks prior to departure for expedited processing.</p>
    `
  },
  {
    id: "acclimatization",
    title: "Acclimatization Strategy & Altitude Sickness Prevention (Khare & High Camp)",
    icon: `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>`,
    content: `
      <p>Ascending safely to <span data-altitude-m="6476">6,476 m</span> requires methodical physiological adaptation. Our 18-day itinerary is purposefully structured according to established high-altitude medicine guidelines to virtually eliminate the risk of severe altitude illness.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Our Golden Acclimatization Safeguards:</h4>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>The Southern Approach via Paiya & Pangkongma:</strong> Unlike rushed routes that force trekkers over the 4,600m Zatrwa La on Day 2, our route approaches south through Paiya (<span data-altitude-m="2730">2,730 m</span>), allowing 5 full days of gentle elevation gain below 3,600 meters.</li>
        <li><strong>Active Rest Day in Thangnak (Day 10):</strong> We hike up to Sabai Tsho Lake and Charpate Ridge (<span data-altitude-m="5000">5,000 m</span>) before descending to sleep at Thangnak (<span data-altitude-m="4356">4,356 m</span>), adhering strictly to the principle: <em>Climb high, sleep low</em>.</li>
        <li><strong>Two Nights at Khare Base Camp (5,045 m):</strong> Spending Days 11 and 12 at Khare stabilizes arterial oxygen saturation before ascending to High Camp.</li>
        <li><strong>Daily Pulse Oximetry Logs:</strong> Your lead guide checks your resting heart rate and blood oxygen percentage (SpO2) every morning and evening.</li>
        <li><strong>Diamox (Acetazolamide):</strong> Climbers may consider taking prophylactic low-dose Diamox (125mg twice daily) starting around Kothe, following consultation with their travel physician.</li>
      </ul>
    `
  },
  {
    id: "training-skills",
    title: "Pre-Climbing Alpine Training at Khare Base Camp (Glacier Clinic)",
    icon: `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>`,
    content: `
      <p>You do not need to arrive in Nepal as an experienced alpinist. Day 12 at Khare Base Camp (<span data-altitude-m="5045">5,045 m</span>) is an intensive, practical glacier clinic conducted on real glacial ice and moraine slopes by our UIAGM/NMA-certified Climbing Sherpas.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Skills Covered During the Khare Clinic:</h4>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Crampon Fitting & Footwork:</strong> Learning flat-footing (French technique) and front-pointing on hard alpine ice to maximize traction and avoid snagging pant cuffs.</li>
        <li><strong>Ice Axe Technique:</strong> Proper walking grip (piolet-canne), self-belay, and self-arrest practice to immediately arrest a simulated fall on snow slopes.</li>
        <li><strong>Ascending Fixed Lines (Jumar):</strong> Clipping and advancing a mechanical ascender along fixed static ropes, managing safety slings at intermediate anchor points.</li>
        <li><strong>Abseiling / Rappelling:</strong> Controlled descent using figure-8 descenders or ATC belay devices with backup friction knots.</li>
        <li><strong>Rope Team Management:</strong> Distance spacing, walking in unison, and maintaining proper tension on tied-in glaciated rope teams.</li>
      </ul>
      <p>This session builds immense confidence and guarantees that every team member operates with muscle memory and calm precision on summit day.</p>
    `
  },
  {
    id: "summit-day",
    title: "Summit Day Breakdown: 2:00 AM Alpine Start, Crampons & Fixed Ropes",
    icon: `<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>`,
    content: `
      <p>Summit Day on Mera Peak Central (<span data-altitude-m="6476">6,476 m</span>) is an extraordinary, unforgettable alpine challenge requiring mental grit, steady pacing, and endurance.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Chronological Summit Push Schedule:</h4>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>01:30 AM — Wake-up Call:</strong> Hot tea, porridge, and biscuits served in your tent. Suit up in full thermal down layers, double boots, harnesses, and headlamps.</li>
        <li><strong>02:00 AM — Departure:</strong> Rope up with your Climbing Sherpa (1:2 ratio) and step onto the crisp, frozen snowfield under starry Himalayan skies.</li>
        <li><strong>02:00 AM to 05:30 AM — Glacier Bowl Ascent:</strong> A steady, rhythmic zigzag ascent up 25°–30° snow slopes across the open glacier bowl. Air is crisp, calm, and freezing (-15°C to -25°C).</li>
        <li><strong>05:45 AM — Golden Sunrise:</strong> Dawn breaks over the eastern horizon, setting Kanchenjunga and Makalu ablaze with golden and magenta hues.</li>
        <li><strong>07:30 AM — The Summit Ridge:</strong> Reach the base of the final summit pyramid. Clip onto the 40-meter fixed safety rope installed by our Sherpas.</li>
        <li><strong>08:30 AM — SUMMIT APEX (6,476 m):</strong> Step onto the highest trekking peak in Nepal. Celebrate, take photos, and absorb the breathtaking 360-degree panorama of Everest, Lhotse, Makalu, Cho Oyu, and Kanchenjunga!</li>
        <li><strong>09:30 AM to 12:30 PM — Safe Descent:</strong> Controlled abseil down the ridge and retrace rope tracks down to High Camp for hot soup, then continue descending safely to Khare for celebration.</li>
      </ul>
    `
  },
  {
    id: "high-camp",
    title: "High Camp Logistics (5,780m): Tents, Sub-Zero Sleep & Sunset Views",
    icon: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>`,
    content: `
      <p>Perched dramatically on a rocky outcrop behind the Mera Glacier edge, Mera High Camp (<span data-altitude-m="5780">5,780 m / 18,963 ft</span>) is one of the highest sleeping locations in the world. Despite its stark, frozen environment, proper logistics turn it into a secure, memorable haven.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Expedition Infrastructure:</h4>
      <p>Namaste Hiking Trek's advance Sherpa team ascends ahead to establish High Camp. We pitch expedition-grade, 4-season geodesic mountain tents firmly anchored with snow stakes and heavy rocks. Thick insulating closed-cell foam pads line the tent floor to block conductible ground frost.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Living at 5,780 Meters:</h4>
      <p>Rest is the primary focus. Upon arriving in the afternoon, remove crampons, slip into dry socks, and climb inside your sleeping bag to conserve body warmth. Our camp cooks deliver piping hot ginger lemon tea, noodle soup, and hot dinners directly to your tent door. Around 5:30 PM, step outside for five minutes to witness the south face of Chamlang and the Everest massif glowing under a dramatic Himalayan sunset before turning in for an early rest.</p>
    `
  },
  {
    id: "weather-conditions",
    title: "Mountain Weather, Temperature Ranges & Windchill at 6,476m",
    icon: `<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>`,
    content: `
      <p>High mountain weather in the Makalu-Barun and Solukhumbu ranges changes rapidly with altitude. Being equipped for extreme cold and variable conditions is the key to comfort and safety.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Seasonal Temperature Breakdown:</h4>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Lower Valleys (Paiya / Kothe, 2,700m–3,600m):</strong> Daytime: 12°C to 18°C (comfortable trekking in light softshell). Nighttime: 2°C to 7°C.</li>
        <li><strong>Khare Base Camp (5,045m):</strong> Daytime: 4°C to 8°C in direct sun. Nighttime: -5°C to -10°C.</li>
        <li><strong>Mera High Camp (5,780m):</strong> Daytime: 0°C to -4°C. Nighttime: -12°C to -18°C.</li>
        <li><strong>Mera Summit Ridge (6,476m):</strong> Early morning summit temperatures range from -15°C to -25°C. With wind chill factored in, perceived temperatures can drop to -30°C.</li>
      </ul>
      <p>Our expedition leaders monitor daily satellite weather forecasts via satellite phone to ensure summit attempts coincide with clear skies and wind speeds below 30 km/h.</p>
    `
  },
  {
    id: "flights",
    title: "Flights to Lukla: Flight Operations, Weather Delays & Ramechhap Routing",
    icon: `<path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>`,
    content: `
      <p>The gateway to Mera Peak is Tenzing-Hillary Airport in Lukla (<span data-altitude-m="2850">2,850 m</span>), renowned as one of the most thrilling mountain airstrips in aviation.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Kathmandu vs Ramechhap / Manthali Airport Routing</h4>
      <p>During peak trekking seasons (October–November and April–May), Nepal's Civil Aviation Authority diverts commercial STOL flights from Kathmandu to Manthali Airport in Ramechhap to alleviate Kathmandu air traffic congestion. When this occurs, we provide comfortable private vehicle transfers from your hotel in Kathmandu to Ramechhap (approx. 4 to 4.5 hours drive), ensuring seamless boarding for your 20-minute flight to Lukla.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Mountain Weather Protocols</h4>
      <p>Lukla operates strictly under visual flight rules (VFR). If dense cloud or high winds envelop the Lukla valley, flights may be delayed. We build adequate buffers into our itinerary and maintain priority arrangements with helicopter charter providers should adverse weather require alternative transport.</p>
    `
  },
  {
    id: "insurance",
    title: "Travel & Mountaineering Insurance: Mandatory 6,500m Helicopter Cover",
    icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>`,
    content: `
      <p>Because Mera Peak involves high-altitude mountaineering above 6,000 meters, standard travel insurance policies will <strong>not</strong> cover this expedition. You must secure a comprehensive mountaineering travel insurance policy that explicitly covers:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>High-Altitude Trekking & Peak Climbing:</strong> Up to at least <strong>6,500 meters (21,325 ft)</strong>.</li>
        <li><strong>Emergency Helicopter Evacuation:</strong> Coverage without requiring upfront cash authorization or prohibitive policy limits (minimum recommended $50,000 USD evacuation cover).</li>
        <li><strong>In-Hospital Medical Care:</strong> Hospitalization and doctor fees in Kathmandu.</li>
        <li><strong>Trip Interruption & Flight Delays:</strong> Protection against missed international connections.</li>
      </ul>
      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Recommended Insurance Providers</h4>
      <p>Reputable global providers experienced in Himalayan mountaineering include <strong>Global Rescue</strong>, <strong>Ripcord Rescue Travel Insurance</strong>, <strong>World Nomads (with Explorer Climbing upgrade)</strong>, and <strong>BMC (British Mountaineering Council)</strong> for UK residents.</p>
    `
  },
  {
    id: "emergency-safety",
    title: "Emergency Procedures, Mountain Rescue & Daily Health Checks",
    icon: `<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>`,
    content: `
      <p>Safety is the cornerstone of every Namaste Hiking Trek expedition. Our field leadership operates under stringent alpine risk-management protocols developed over decades in the Himalaya.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Daily Health Monitoring</h4>
      <p>Every morning and evening, your lead guide measures and logs your arterial oxygen saturation (SpO2) and pulse using digital fingertip oximeters. Guides also assess the Lake Louise Acute Mountain Sickness scoring system (headache, nausea, fatigue, dizziness, sleep quality), allowing early detection of altitude stress before it escalates.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Expedition Medical Kit & Emergency Evacuation</h4>
      <p>Our teams carry comprehensive medical kits including broad-spectrum antibiotics, pain management, antiemetics, Diamox, and emergency dexamethasone. In the rare event that severe altitude illness (HAPE/HACE) or serious trauma develops, our 24/7 Kathmandu operations desk coordinates immediate emergency helicopter evacuation directly from Kothe, Thangnak, or Khare to international-standard hospitals in Kathmandu.</p>
    `
  },
  {
    id: "gear-rental",
    title: "Personal Gear Rental: Kathmandu Shops vs Khare Alpine Base",
    icon: `<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>`,
    content: `
      <p>Purchasing full technical 6,000-meter mountaineering gear can be prohibitively expensive. Fortunately, excellent quality rental options are available both in Kathmandu and along the trail.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Renting in Kathmandu (Thamel)</h4>
      <p>During our Day 2 gear inspection, your guide will accompany you to trusted gear rental shops in Thamel. You can rent 800-fill down jackets, -20°C sleeping bags, trekking poles, and waterproof shells for approximately $1.50 to $3.00 USD per day. Quality brands include Mountain Hardwear, Black Diamond, and North Face.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Renting at Khare Base Camp (5,045 m)</h4>
      <p>For heavy technical climbing equipment (double plastic or hybrid mountaineering boots, crampons, harness, ice axe, helmet, and jumar), renting directly in Khare is an outstanding option. Several specialized rental shops in Khare stock modern climbing boots in all European/US sizes. Renting in Khare saves you from carrying 6 kg of heavy mountaineering boots in your luggage during the lower forest approach trek!</p>
    `
  },
  {
    id: "packing-tips",
    title: "Packing Strategy & 15 kg Lukla Flight Weight Limit",
    icon: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>`,
    content: `
      <p>Smart, disciplined packing makes life on the trail far smoother. Mountain flights to Lukla enforce a strict luggage limit of <strong>15 kg (33 lbs) total</strong> per passenger, comprising 10 kg in your main duffel bag and 5 kg in your carry-on daypack.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">How to Divide Your Luggage:</h4>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Expedition Duffel Bag (Carried by Porters):</strong> Contains your sleeping bag, spare thermal underwear, camp clothing, toiletries, and extra footwear. Pack everything in waterproof dry sacks or heavy plastic bags inside the duffel to guard against mountain showers.</li>
        <li><strong>Trekking Daypack (Carried by You):</strong> Keep your rain shell, warm fleece layer, 2 liters of water, camera, passport, cash, sunscreen, sunglasses, and personal blister kit with you at all times.</li>
        <li><strong>Excess City Luggage:</strong> Clean clothes, non-trekking footwear, and city valuables can be left safely in our secure hotel storage room in Kathmandu at zero additional charge.</li>
      </ul>
    `
  },
  {
    id: "cultural-etiquette",
    title: "Cultural Etiquette: Rai & Sherpa Traditions in the Hinku Valley",
    icon: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>`,
    content: `
      <p>The southern approach through Paiya, Pangkongma, and the Hinku Valley passes through traditional lands inhabited by Rai, Chhetri, and Sherpa communities. Observing local customs enriches your journey and demonstrates heartfelt respect.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Key Cultural Guidelines:</h4>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Mani Walls & Chortens:</strong> Always pass Buddhist mani walls, chortens, and stupas on your right side (clockwise direction). Never sit on or step over carved sacred stones.</li>
        <li><strong>Lungsumgba Gompa Blessing:</strong> In Thangnak, our climbing team stops at the sacred rock-carved shrine of Lungsumgba. Lighting a butter lamp and receiving a blessing from the resident lama is an auspicious Buddhist tradition before climbing.</li>
        <li><strong>Greetings:</strong> Greet locals with palms pressed together at chest level saying <em>"Namaste"</em> (or <em>"Tashi Delek"</em> in Sherpa communities).</li>
        <li><strong>Photography:</strong> Always politely ask permission before photographing local residents, monks, or the interior of sacred shrines.</li>
      </ul>
    `
  },
  {
    id: "connectivity",
    title: "Mobile Connectivity, Wi-Fi & Electricity in Remote Teahouses",
    icon: `<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>`,
    content: `
      <p>Staying connected in the remote Hinku Valley is feasible but requires realistic expectations. Unlike the heavily wired Everest Base Camp highway, digital infrastructure here is more limited.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Mobile Network Coverage (Ncell & Nepal Telecom)</h4>
      <p>We recommend purchasing an Ncell or NTC (Nepal Telecom) tourist SIM card with a data package in Kathmandu. Coverage is generally reliable in Lukla, Paiya, and Pangkongma. Once you enter the deep Hinku canyon (Kothe, Thangnak, Khare), cellular signal is intermittent to non-existent. Our expedition leaders carry satellite phones for operational coordination and emergencies.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Teahouse Wi-Fi & Device Charging</h4>
      <p>Some lodges in Kothe and Khare offer satellite Wi-Fi (such as Everest Link prepaid cards) for approximately $5 to $8 USD per card. Due to high mountain cloud cover and limited bandwidth, speeds are modest. Device charging is available in lodge dining rooms via solar or micro-hydro power, typically costing $2 to $5 USD per phone or power bank. Bringing a 20,000 mAh portable power bank is essential.</p>
    `
  },
  {
    id: "money-budget",
    title: "Money, ATM Availability & Mountain Tipping Guidelines",
    icon: `<rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path>`,
    content: `
      <p>There are no functioning ATMs anywhere between Lukla and Mera Peak. You must withdraw sufficient cash in <strong>Nepalese Rupees (NPR)</strong> while in Kathmandu.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Estimated Personal Budget</h4>
      <p>We recommend carrying approximately <strong>NPR 35,000 to 45,000</strong> (approx. $250–$350 USD) in cash to cover personal expenses during the trek, such as:</p>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li>Hot showers in lodges: NPR 500–800 per shower.</li>
        <li>Device battery charging: NPR 300–600 per charge.</li>
        <li>Boiled drinking water & specialty coffees: NPR 200–500 per drink.</li>
        <li>Wi-Fi access cards: NPR 700–1,000 per card.</li>
      </ul>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Tipping & Summit Bonus Guidelines</h4>
      <p>Tipping is customary and deeply appreciated in Himalayan mountaineering. Traditional guidelines include: (1) Climbing Sherpa Summit Bonus: $150 to $250 USD per climber upon successful summit, and (2) Trekking Staff Tipping Pool: $120 to $180 USD per climber distributed among lead guides, assistant guides, and porters at the farewell dinner in Lukla.</p>
    `
  },
  {
    id: "porter-welfare",
    title: "Porter Welfare, Ethical Guiding & Responsible Mountain Tourism",
    icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline>`,
    content: `
      <p>Porters and Sherpas are the unsung heroes of the Himalaya. Without their extraordinary strength, endurance, and warmth, high-altitude expeditions would be impossible. Namaste Hiking Trek operates with an unwavering commitment to porter ethics and fair treatment.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Our IPPG Welfare Standards:</h4>
      <ul style="margin: 8px 0 14px 20px; line-height: 1.6; color: var(--color-neutral-700);">
        <li><strong>Strict Weight Limits:</strong> We enforce an absolute maximum weight limit of 20 kg per porter (10 kg per trekker across a 1:2 porter ratio).</li>
        <li><strong>Fair Living Wages:</strong> All our field crew receive generous wages well above industry averages, paid punctually with prompt contract settlement.</li>
        <li><strong>Complete High-Altitude Kit:</strong> Every porter is equipped with insulated mountaineering jackets, warm boots, gloves, wool socks, beanies, and UV-rated sunglasses before stepping onto high passes.</li>
        <li><strong>Full Medical & Rescue Coverage:</strong> Our porters carry the same emergency helicopter evacuation insurance and medical protection as our foreign clients. If a porter falls ill, their evacuation is prioritized immediately.</li>
      </ul>
    `
  },
  {
    id: "post-climb",
    title: "Post-Climb Contingency Days & Kathmandu Exploration",
    icon: `<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>`,
    content: `
      <p>Our 18-day itinerary includes dedicated contingency padding designed to buffer against unpredictable Himalayan mountain weather and domestic flight scheduling.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Built-in Day 15 Reserve Day</h4>
      <p>Day 15 is an integrated summit weather buffer at Khare. If high winds or fresh snow prevent a summit attempt on Day 14, this contingency day allows the team to rest and make a second, safe summit bid without compromising your flight schedule. If the summit was achieved on Day 14, it becomes an extra relaxed rest day or leisurely descent pace.</p>

      <h4 style="font-size: 1.05rem; color: var(--color-primary-navy); margin: 20px 0 10px 0; font-weight: 700;">Buffer Days in Kathmandu</h4>
      <p>We advise booking your international return flight home with at least 1 to 2 flexible buffer days after your scheduled Day 18 return from Lukla. This guarantees complete peace of mind if Lukla mountain flights experience weather holds, allowing you to relax, enjoy Kathmandu's vibrant dining and shopping scene, and celebrate your mountaineering triumph stress-free.</p>
    `
  }
];

function renderTopicCard(t) {
  return `                <!-- Topic: ${t.id} -->
                <div class="detail-accordion-card" data-detail-id="${t.id}">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          ${t.icon}
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h3 class="detail-accordion-title">${t.title}</h3>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      ${t.content.trim()}
                    </div>
                  </div>
                </div>`;
}

const renderedTopicsHtml = topics.map(renderTopicCard).join('\n\n');

const newDetailsSection = `<!-- Section 5: Trip Details -->
          <section id="section-details" class="trek-detail-section">
            <div class="details-section-container">
              <!-- Heading -->
              <div class="details-title-wrapper">
                <h2 class="details-main-title">Read Before You Book: Mera Peak Climbing Expedition</h2>
                <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <!-- Subtitle Paragraphs -->
              <p class="details-subtitle-text">To help you prepare with absolute confidence for climbing Nepal's highest trekking peak, we have compiled comprehensive, transparent guidance covering mountaineering difficulty, high camp life, glacier training, gear rental, and safety protocols.</p>
              <p class="details-subtitle-text" style="margin-bottom: 24px;">Have questions about technical preparation or group fitness? Email our alpine specialists or message us directly on <a href="https://wa.me/9779800000000" target="_blank" style="color: #008060; font-weight: 600; text-decoration: underline;">WhatsApp</a> — our certified climbing directors will reply within 24 hours.</p>

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

              <!-- 21 Accordion Cards Grid -->
              <div class="detail-accordion-list">
${renderedTopicsHtml}
              </div>
            </div>
          </section>\n\n          `;

html = html.substring(0, idxDetails) + newDetailsSection + html.substring(idxAlt);

fs.writeFileSync('trek/mera-peak-climbing-trek/index.html', html, 'utf8');
console.log('Successfully updated Section 6: Details (21 Topics) for Mera Peak!');

