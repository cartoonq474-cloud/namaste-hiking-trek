const fs = require('fs');

const targetPath = 'trek/upper-mustang-trek/index.html';
let html = fs.readFileSync(targetPath, 'utf8');

const s6Start = html.indexOf('<section id="section-details"');
const s6End = html.indexOf('<section id="section-altitude-profile"');

if (s6Start === -1 || s6End === -1) {
  console.error('Could not locate Section 6 bounds in index.html!');
  process.exit(1);
}

// Helper for SVGs
function getIconSvg(id) {
  switch (id) {
    case 'accommodation':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="M3 13h18"></path><circle cx="8" cy="9" r="1.5"></circle></svg>`;
    case 'food':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`;
    case 'best-time':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    case 'daily-routine':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;
    case 'permits':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
    case 'altitude':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 22 22 22"></polygon><polyline points="12 13 8.5 19 15.5 19"></polyline></svg>`;
    case 'difficulty':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`;
    case 'culture':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`;
    case 'caves':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`;
    case 'flights':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"></path></svg>`;
    case 'age-groups':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`;
    case 'extensions':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>`;
    case 'luggage':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`;
    case 'transport':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`;
    case 'sustainability':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`;
    case 'regulations':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;
    case 'emergency':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
    case 'money':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`;
    case 'booking':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>`;
    case 'tipping':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
    case 'essential-rules':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
    default:
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }
}

const accordionItems = [
  {
    id: 'accommodation',
    title: 'Accommodation for the Upper Mustang Trek',
    content: `
      <p>Accommodation throughout the Upper Mustang Trek reflects the authentic character and architectural heritage of the trans-Himalayan region. During your trek, you will stay in clean, family-operated mountain teahouses and traditional lodges constructed from whitewashed stone, mud-brick, and exposed timber beams.</p>
      <p>Rooms are typically arranged on a twin-sharing basis with wooden twin beds, clean mattresses, pillows, and cozy blankets. While extra blankets are provided by lodge hosts, bringing a four-season sleeping bag (rated to -10°C) is essential because night temperatures in Upper Mustang can drop rapidly after sunset, especially in Lo Manthang (3,840 m).</p>
      <p>In major settlements such as Kagbeni, Charang, and Lo Manthang, lodges have evolved significantly in recent years. Many now offer attached private bathrooms with Western flush toilets, solar-heated showers, and communal dining rooms heated in the evenings by central wood or dried-dung stoves. In smaller hamlets like Chele, Drakmar, and Sangboche, amenities remain traditional, with shared clean squat or flush toilets and hot water available in buckets upon request for a modest fee ($2–$3).</p>
      <div style="background: #F8FAFC; border-left: 4px solid #008060; padding: 14px 18px; border-radius: 6px; margin: 16px 0;">
        <strong style="color: #0F172A;">City Lodging Note:</strong> In Kathmandu and Pokhara, our 17-day package includes 3 nights in Kathmandu and 2 nights in Pokhara at hand-picked 3-star standard boutique hotels (with en-suite bathrooms, 24/7 hot showers, Wi-Fi, and breakfast included).
      </div>
    `
  },
  {
    id: 'food',
    title: 'Available Food & Dining in Upper Mustang',
    content: `
      <p>Meals in Upper Mustang provide hearty, wholesome nutrition crafted for high-altitude trekking. Lodge menus combine classic Nepalese staples, local Tibetan-Mustangi culinary traditions, and popular international trekker dishes.</p>
      <p>The staple of the trek is <strong>Dal Bhat Tarkari</strong> (steamed rice, spiced lentil soup, seasonal vegetable curry, and savory pickles). Served with unlimited refills of rice, dal, and vegetables, it remains the ultimate power meal for mountain hikers. Other popular dishes include fried noodles (chow mein), vegetable momos (steamed or fried dumplings), thukpa (hearty Tibetan noodle soup), egg fried rice, macaroni pasta, potato rosti, and fresh vegetable stews.</p>
      <p>Local specialties are a distinct highlight in the Kingdom of Lo: try fresh Tibetan flatbread with yak butter or honey, Tsampa (roasted barley flour porridge eaten by Himalayan monks), local buckwheat pancakes, and Mustang’s renowned organic apples, apple pies, and apple ciders around Kagbeni and Jomsom.</p>
      <div style="background: #E6F7F0; border-left: 4px solid #10B981; padding: 14px 18px; border-radius: 6px; margin: 16px 0;">
        <strong style="color: #065F46;">Hydration & Dietary Requests:</strong> Drinking 3 to 4 litres of water daily is crucial in Mustang’s arid, windswept climate. We cater seamlessly to vegetarians, vegans, and gluten-free diets upon advance request.
      </div>
    `
  },
  {
    id: 'best-time',
    title: 'Best Time to Trek Upper Mustang (The Monsoon Advantage)',
    content: `
      <p>Unlike almost all other trekking routes in Nepal that are rendered inaccessible or waterlogged by the summer monsoon, Upper Mustang is one of the world's premier monsoon trekking destinations. It lies in the geographical rain shadow of the immense Dhaulagiri and Annapurna massifs, receiving less than 200 mm of precipitation each year.</p>
      <p><strong>Summer Monsoon (June, July, August):</strong> While Pokhara and Kathmandu receive torrential downpours, Upper Mustang enjoys bright sunny skies, dry mountain trails, and comfortable daytime temperatures between 16°C and 22°C. The irrigated valley floors turn vibrant emerald green with flowering buckwheat and barley crops, presenting breathtaking visual contrasts against red and ochre canyon walls.</p>
      <p><strong>Autumn (September, October, November):</strong> The most popular trekking window across Nepal. Crisp, crystal-clear Himalayan skies, exceptional mountain visibility of Nilgiri, Dhaulagiri, and Tilicho Peak, and mild daytime temperatures. Nights in November grow cold, dropping to -5°C in Lo Manthang.</p>
      <p><strong>Spring (March, April, May):</strong> Excellent trekking conditions with lengthening days, blooming wildflowers, and mild pass crossings. May also hosts the legendary three-day <strong>Tiji Festival</strong> in Lo Manthang, featuring elaborate masked dances performed by monks to chase away evil spirits.</p>
      <p><em>Winter (December–February):</em> Bitterly cold with heavy snowfall on passes. Most Loba residents migrate down to Pokhara or Kathmandu, and many mountain teahouses close.</p>
    `
  },
  {
    id: 'daily-routine',
    title: 'A Typical Day on the Upper Mustang Trek',
    content: `
      <p>Daily routines on the Upper Mustang trail are structured to work in harmony with the unique weather and wind dynamics of the Kali Gandaki valley.</p>
      <ul style="padding-left: 20px; line-height: 1.7; color: var(--color-neutral-700);">
        <li><strong>6:30 AM – Morning Wakeup:</strong> Hot tea or coffee served in the dining hall, followed by packing your duffel bag for the porters.</li>
        <li><strong>7:00 AM – Breakfast:</strong> A hearty breakfast of porridge, eggs, Tibetan bread, pancakes, or muesli.</li>
        <li><strong>7:45 AM – Trail Departure:</strong> Early morning departures are essential. Between 11:00 AM and 2:00 PM, fierce southern winds funnel up the Kali Gandaki canyon. Trekking early allows you to complete most walking hours under calm morning conditions.</li>
        <li><strong>12:00 PM – Lunch Stop:</strong> Hot lunch enjoyed at a teahouse settlement midway along the daily route (e.g., Samar, Ghemi, or Tsarang).</li>
        <li><strong>2:30 PM – 3:30 PM – Arrival at Overnight Lodge:</strong> Check into your twin room, wash up, change into comfortable warm evening clothes, and enjoy afternoon tea.</li>
        <li><strong>4:00 PM – Cultural Exploration:</strong> Walk through ancient village alleyways, spin prayer wheels at local gompas, visit sky caves, or interact with friendly Loba elders.</li>
        <li><strong>6:30 PM – Dinner & Oximeter Check:</strong> Gather in the warm dining hall for dinner and daily blood oxygen / pulse monitoring with your guide. Review the route profile for the next day before turning in for a restful sleep.</li>
      </ul>
    `
  },
  {
    id: 'permits',
    title: 'Permits & Restricted Area Regulations for Upper Mustang',
    content: `
      <p>Upper Mustang is classified by the Government of Nepal as a Restricted Trekking Area to protect its delicate Tibetan Buddhist heritage and sensitive border environment near Tibet (China). Strict governmental regulations govern entry:</p>
      <ul style="padding-left: 20px; line-height: 1.7; color: var(--color-neutral-700);">
        <li><strong>Restricted Area Permit (RAP):</strong> Costs <strong>USD 500 per person</strong> for the first 10 days within the restricted zone (north of Kagbeni), plus <strong>USD 50 per additional day</strong> thereafter. Our 17-day itinerary covers the exact restricted duration needed without permit overruns.</li>
        <li><strong>Annapurna Conservation Area Project (ACAP):</strong> NPR 3,000 (approx. USD 25 per person) required for traversing the Annapurna region between Jomsom, Kagbeni, and Muktinath.</li>
        <li><strong>Minimum Group Size:</strong> Under immigration rules, RAP permits are never issued to solo individual trekkers. A minimum of <strong>two registered trekkers</strong> is legally mandatory. If you are a solo traveler, Namaste Hiking Trek can easily pair you with another traveler or arrange a ghost permit where allowed.</li>
        <li><strong>Mandatory Licensed Guide:</strong> Independent trekking is strictly illegal in Upper Mustang. Trekkers must be accompanied at all times by a government-licensed Nepalese guide arranged through a registered agency.</li>
      </ul>
    `
  },
  {
    id: 'altitude',
    title: 'Altitude Profile & Acclimatization Strategy',
    content: `
      <p>Compared to other flagship Himalayan circuits like Everest Base Camp (5,364 m) or Thorong La (5,416 m), Upper Mustang is moderate in maximum altitude. The principal overnight destination and high sleeping elevation is Lo Manthang at <strong>3,840 m (12,598 ft)</strong>, while daylight pass crossings such as Nyi La reach <strong>4,010 m (13,156 ft)</strong> and Gyu La reaches <strong>4,077 m</strong>.</p>
      <p>Our 17-day itinerary is purposefully crafted to minimize altitude sickness (Acute Mountain Sickness):</p>
      <p>We begin from Jomsom (2,720 m) and Kagbeni (2,743 m), increasing sleeping elevation gradually over 5 days before reaching Lo Manthang. Furthermore, <strong>Day 9 is a dedicated active exploration day in Lo Manthang</strong>, allowing your body to acclimatize thoroughly while visiting Namgyal Gompa and Tingkhar without packing bags or changing lodges.</p>
      <div style="background: #F8FAFC; border-left: 4px solid #008060; padding: 14px 18px; border-radius: 6px; margin: 16px 0;">
        <strong style="color: #0F172A;">Safety Protocols:</strong> Our guides carry pulse oximeters to check your blood oxygen saturation twice daily (morning and evening), monitor for early signs of AMS, and carry emergency medical kits and descent contingencies.
      </div>
    `
  },
  {
    id: 'difficulty',
    title: 'Trek Difficulty, Trail Conditions & Fitness Required',
    content: `
      <p>The 17-day Upper Mustang Trek is graded as <strong>Moderate</strong>. It does not require technical mountaineering skills, ropes, crampons, or glacial navigation. The trails consist of broad dirt tracks, packed earth paths, stone steps, canyon ridges, and dry gravel riverbeds.</p>
      <p>However, the trek presents distinct physical demands that require solid preparation:</p>
      <ul style="padding-left: 20px; line-height: 1.7; color: var(--color-neutral-700);">
        <li><strong>Consecutive Walking Days:</strong> You will hike for 11 consecutive days on the trail, averaging 5 to 7 hours and 15 to 20 km per day.</li>
        <li><strong>Arid Climate & Afternoon Winds:</strong> The high-desert air is extremely dry, causing faster dehydration. Afternoon headwinds in the Kali Gandaki gorge can tire hikers who do not pace themselves.</li>
        <li><strong>Pass Crossings:</strong> While passes are below 4,100 m, the trail includes steep ascents and descents over loose scree and canyon shoulders (e.g., Taklam La, Nyi La, Lo La).</li>
      </ul>
      <p><strong>Training Recommendation:</strong> We recommend 6 to 8 weeks of regular cardiovascular training (brisk hiking with an 8 kg daypack, jogging, stair climbing, or cycling) before arrival to ensure an enjoyable and energetic journey.</p>
    `
  },
  {
    id: 'culture',
    title: 'Cultural Heritage of Lo: Monasteries, Chortens & Traditions',
    content: `
      <p>Upper Mustang is one of the last living sanctuaries of traditional Tibetan Buddhist civilization on earth. Historically known as the Kingdom of Lo, the region remained politically and geographically secluded until opening to foreign trekkers in 1992.</p>
      <p>Culturally and linguistically, the Loba people share deep ties with Tibet. Throughout your trek, you will witness active spiritual traditions untouched by modern globalization:</p>
      <ul style="padding-left: 20px; line-height: 1.7; color: var(--color-neutral-700);">
        <li><strong>Ancient Gompas:</strong> Visit centuries-old monasteries including <em>Champa Lhakhang</em> (dating to 1420 AD with immense gilded Maitreya Buddha statues), <em>Thubchen Gompa</em> with magnificent 15th-century frescoes, and <em>Namgyal Gompa</em> ("Monastery of Victory") perched dramatically on a high ridge.</li>
        <li><strong>8th-Century Ghar Gompa (Lo Gekar):</strong> Located near Drakmar, this is one of the oldest Tibetan Buddhist monasteries in existence, established by Guru Padmasambhava even before Samye Monastery in Tibet.</li>
        <li><strong>Sacred Mani Walls & Chortens:</strong> Ghemi features the longest stone Mani wall in Mustang (over 300 meters long), adorned with meticulously carved Buddhist mantras (<em>Om Mani Padme Hum</em>).</li>
      </ul>
    `
  },
  {
    id: 'caves',
    title: 'The Mysterious Sky Caves of Mustang & Chhoser',
    content: `
      <p>One of the most enigmatic archaeological wonders of the world, Upper Mustang contains an estimated 10,000 man-made "Sky Caves" hollowed out of sheer vertical sandstone cliff faces up to 50 meters above the canyon floor.</p>
      <p>During our exploration day from Lo Manthang, we visit the legendary <strong>Jhong Cave at Chhoser</strong>. This five-story cliff fortress features dozens of interconnected chambers carved by ancient inhabitants more than 2,500 years ago. Archaeologists believe these caves served three distinct historical purposes:</p>
      <ul style="padding-left: 20px; line-height: 1.7; color: var(--color-neutral-700);">
        <li><strong>Prehistoric Burial Sites (1000 BC – 400 AD):</strong> Excavations have revealed mummified remains, bronze jewelry, and silk fragments from ancient trans-Himalayan trade routes.</li>
        <li><strong>Fortified Defensive Sanctuaries (10th – 14th Centuries):</strong> When hostile raiders attacked villages, entire communities retreated up rope ladders into these secure cliffside fortresses with food stores and water cisterns.</li>
        <li><strong>Buddhist Hermitages & Meditation Retreats:</strong> Monks and yogis retreated to the high caves for years of silent meditation. Beautiful painted frescoes and sacred texts have been discovered in these elevated sanctuaries.</li>
      </ul>
    `
  },
  {
    id: 'flights',
    title: 'Pokhara to Jomsom Mountain Flights & Weather Protocol',
    content: `
      <p>The scheduled domestic flight between Pokhara and Jomsom (approx. 20–25 minutes) is among the most spectacular mountain flights in the world. Flying in small 19-seat STOL aircraft (such as Twin Otters or Dorniers), the plane threads directly through the deepest gorge on earth, between Annapurna I (8,091 m) on your right and Dhaulagiri (8,167 m) on your left.</p>
      <p>Because powerful southern thermal winds roar through the Kali Gandaki canyon after 11:00 AM, all Jomsom flights are scheduled strictly in the early morning between 6:15 AM and 9:30 AM.</p>
      <div style="background: #FFFBEB; border-left: 4px solid #F59E0B; padding: 14px 18px; border-radius: 6px; margin: 16px 0;">
        <strong style="color: #92400E;">Weather Contingency Plan:</strong> Mountain aviation depends strictly on visual flight rules (VFR). If persistent fog or high winds cause flight delays in Jomsom, our team coordinates with private 4WD rugged jeeps as a dependable overland backup via the Beni-Jomsom highway, ensuring your international return schedule remains protected.
      </div>
    `
  },
  {
    id: 'age-groups',
    title: 'Upper Mustang Trek for Families, Seniors & Age Groups',
    content: `
      <p>Because the Upper Mustang route tops out below 4,100 m and avoids extreme glacial terrain, it is widely considered one of Nepal's most accessible multi-week Himalayan journeys for fit seniors, active families, and mature travelers.</p>
      <p><strong>For Seniors:</strong> The gradual gradient, absence of technical hazards, and relatively gentle altitude profile make Upper Mustang an outstanding choice. Trekking poles provide knee protection on descents, and private horse support can easily be arranged for anyone needing occasional riding relief on pass ascents.</p>
      <p><strong>For Families with Teenagers:</strong> The fascinating medieval history of walled Lo Manthang, the adventure of exploring multi-story sky caves at Chhoser, and learning about Tibetan nomadic culture offer an unforgettable, hands-on educational journey.</p>
    `
  },
  {
    id: 'extensions',
    title: 'Extending Your Journey: Muktinath, Annapurna & Chitwan',
    content: `
      <p>Our classic 17-day itinerary already incorporates the sacred pilgrimage temple of <strong>Muktinath (3,710 m)</strong> on Day 13 and Day 14, venerated by both Hindus and Buddhists for its 108 sacred water spouts and eternal natural gas flame.</p>
      <p>If you have additional vacation days, Namaste Hiking Trek can tailor several memorable extensions:</p>
      <ul style="padding-left: 20px; line-height: 1.7; color: var(--color-neutral-700);">
        <li><strong>Marpha & Tatopani Hot Springs (2–3 Days):</strong> Continue trekking south from Jomsom through the apple orchards of Marpha and relax in the natural thermal mineral pools of Tatopani.</li>
        <li><strong>Annapurna Circuit / Thorong La Connection:</strong> Strong trekkers can connect from Muktinath across the Thorong La Pass toward Manang and the Marsyangdi valley.</li>
        <li><strong>Chitwan National Park Safari (3 Days / 2 Nights):</strong> After returning to Pokhara, drive to the subtropical jungle of Chitwan for jeep safaris, one-horned rhino tracking, bird watching, and Tharu cultural shows.</li>
      </ul>
    `
  },
  {
    id: 'luggage',
    title: 'Luggage Weight Limits & Porter Support Services',
    content: `
      <p>To ensure comfortable trekking and fair ethical working conditions for our mountain crew, we maintain strict luggage standards:</p>
      <ul style="padding-left: 20px; line-height: 1.7; color: var(--color-neutral-700);">
        <li><strong>Domestic Flight Allowance:</strong> The Pokhara–Jomsom flight strictly limits baggage to <strong>15 kg (33 lbs) total per passenger</strong> (typically 10 kg checked duffel + 5 kg hand carry). Extra weight is charged at airline excess baggage rates (approx. USD 1.5–$2 per kg).</li>
        <li><strong>Porter Weight Sharing:</strong> Namaste Hiking Trek provides 1 porter for every 2 trekkers. Each trekker can place up to <strong>10 to 12 kg (22–26 lbs)</strong> into the shared company duffel bag carried by our porter.</li>
        <li><strong>Your Daypack (4–6 kg):</strong> You carry a 25–35 Litre daypack containing your camera, water bottles, windbreaker jacket, sunscreen, sunglasses, passport, and daily essentials.</li>
        <li><strong>City Luggage Storage:</strong> Any excess city clothing, suitcases, or souvenirs can be stored free of charge in secure lockers at our hotel in Kathmandu or Pokhara until your return.</li>
      </ul>
    `
  },
  {
    id: 'transport',
    title: 'Road Construction in Mustang: Trails vs. 4WD Jeeps',
    content: `
      <p>In recent years, a rough dirt road has been established connecting Jomsom through Kagbeni and Charang to Lo Manthang and the Chinese border at Korala. Many travelers ask whether road construction has affected the trekking experience.</p>
      <p>Namaste Hiking Trek utilizes scenic <strong>traditional pedestrian footpaths, eastern high bypasses, and ancient mule routes</strong> that deliberately veer away from motor tracks. You will trek through remote canyon landscapes, hidden oasis settlements like Gyakar, Drakmar, and Tingkhar, and cross high ridges where vehicles cannot go.</p>
      <p>The road does, however, provide an important modern safety advantage: in case of non-critical injury, exhaustion, or illness, a private 4WD vehicle can be accessed relatively quickly from nearby trail points to transfer a trekker safely back to Jomsom.</p>
    `
  },
  {
    id: 'sustainability',
    title: 'Responsible Tourism & Environmental Ethics in Lo',
    content: `
      <p>Upper Mustang is a delicate high-altitude desert ecosystem with scarce water, limited firewood, and fragile mud-brick heritage. We practice strict Leave No Trace principles:</p>
      <ul style="padding-left: 20px; line-height: 1.7; color: var(--color-neutral-700);">
        <li><strong>Plastic Elimination:</strong> Single-use plastic bottles are heavily discouraged. Trekkers should carry reusable water bottles and utilize water purification tablets, SteriPENs, or boiled water from lodges.</li>
        <li><strong>Supporting Local Loba Communities:</strong> We lodge exclusively at locally owned Loba teahouses, purchase local produce, and ensure fair wages and full insurance for our guides and porters.</li>
        <li><strong>Preserving Ancient Relics:</strong> Never purchase ancient stones, ammonite fossils (shaligrams), or religious relics from vendors. Respect all sacred sites by always walking clockwise around chortens and mani walls.</li>
      </ul>
    `
  },
  {
    id: 'regulations',
    title: 'Why Independent Trekking is Strictly Prohibited in Mustang',
    content: `
      <p>Foreign travelers often ask if they can trek Upper Mustang independently without a guide to save costs. The answer is an absolute <strong>no</strong>. The Nepal Department of Immigration strictly enforces restricted area laws:</p>
      <ul style="padding-left: 20px; line-height: 1.7; color: var(--color-neutral-700);">
        <li>Restricted Area Permits are never issued directly to individual travelers; they can only be applied for and processed by an authorized, registered Nepalese trekking agency like Namaste Hiking Trek.</li>
        <li>All trekkers must be accompanied from the Kagbeni checkpoint onwards by an authorized, licensed Nepalese mountain guide registered in the government immigration tracking system.</li>
        <li>Armed police and immigration checkpoints at Kagbeni, Ghemi, and Lo Manthang strictly verify permits, passports, and guide credentials. Attempting to enter without permits results in hefty fines and deportation.</li>
      </ul>
    `
  },
  {
    id: 'emergency',
    title: 'Emergency Protocols, Medical Care & Helicopter Rescue',
    content: `
      <p>Your safety is our absolute priority throughout the 17-day journey. While Upper Mustang has a low incidence of severe altitude complications due to its moderate sleeping altitudes (3,840 m), our team maintains rigorous emergency readiness:</p>
      <ul style="padding-left: 20px; line-height: 1.7; color: var(--color-neutral-700);">
        <li><strong>Daily Health Screenings:</strong> Guides conduct twice-daily pulse oximetry checks to record heart rates and blood oxygen levels, catching any abnormal fatigue or AMS symptoms early.</li>
        <li><strong>Local Medical Facilities:</strong> Small basic health posts operate in Kagbeni, Tsarang, and Lo Manthang, with a district hospital located in Jomsom.</li>
        <li><strong>Emergency Helicopter Evacuation:</strong> In the rare event of acute illness, trauma, or severe mountain sickness, our Kathmandu base office coordinates rapid emergency helicopter evacuation directly from Lo Manthang or nearby village helipads to international hospitals in Pokhara or Kathmandu. Your travel insurance must cover medical helicopter evacuation up to 4,200 m.</li>
      </ul>
    `
  },
  {
    id: 'money',
    title: 'Money, Currency Exchange & ATMs in Upper Mustang',
    content: `
      <p>Financial preparation is vital before heading into northern Mustang. While digital payment systems and ATMs are ubiquitous in Kathmandu and Pokhara, banking infrastructure in Upper Mustang is virtually non-existent:</p>
      <p>Jomsom has a couple of ATM machines, but they frequently run out of cash or suffer network interruptions. <strong>Beyond Jomsom, there are no working ATMs or credit card facilities in Kagbeni, Chele, Charang, or Lo Manthang.</strong></p>
      <div style="background: #F8FAFC; border-left: 4px solid #008060; padding: 14px 18px; border-radius: 6px; margin: 16px 0;">
        <strong style="color: #0F172A;">Recommended Cash Amount:</strong> We advise withdrawing or exchanging approximately <strong>USD 250 to USD 350 equivalent in Nepalese Rupees (NPR 30,000 to NPR 45,000)</strong> in Kathmandu or Pokhara before flying to Jomsom. This covers hot showers, device charging, beverages, personal snacks, and crew tips.
      </div>
    `
  },
  {
    id: 'booking',
    title: 'Transparent Pricing & Step-by-Step Booking Process',
    content: `
      <p>Namaste Hiking Trek operates with 100% price transparency. There are never any hidden agency surcharges, unexpected permit fees, or surprise equipment rentals.</p>
      <p><strong>Step-by-Step Booking Process:</strong></p>
      <ol style="padding-left: 20px; line-height: 1.8; color: var(--color-neutral-700);">
        <li><strong>Submit Inquiry:</strong> Select your preferred group departure date or custom private dates using our booking modal or WhatsApp us directly.</li>
        <li><strong>Trip Confirmation & Deposit:</strong> We confirm availability and request a <strong>20% advance deposit</strong> via secure international bank wire or online credit card payment.</li>
        <li><strong>Documentation Submission:</strong> Email us a clear color scan of your valid passport (6+ months validity) and a passport-size photo to initiate your Restricted Area Permit (RAP) and ACAP processing with the Department of Immigration.</li>
        <li><strong>Balance Payment:</strong> The remaining 80% balance is payable upon your arrival at our Kathmandu office via cash (USD, EUR, GBP, NPR) or credit card (nominal 3.5% bank surcharge applies).</li>
      </ol>
    `
  },
  {
    id: 'tipping',
    title: 'Tipping Culture & Gratuity Guidelines for Crew',
    content: `
      <p>While tipping is not legally mandatory in Nepal, it is deeply ingrained in Himalayan trekking culture. Your guide and porters work tirelessly—carrying heavy loads over mountain passes, coordinating lodges and meals, and ensuring your safety every step of the way.</p>
      <p>Tipping is traditionally presented on the final evening of the trek in Jomsom or at the farewell dinner in Kathmandu:</p>
      <ul style="padding-left: 20px; line-height: 1.7; color: var(--color-neutral-700);">
        <li><strong>Trekking Guide:</strong> Recommended approx. <strong>USD 10 to USD 15 per day</strong> total from the group.</li>
        <li><strong>Trekking Porter:</strong> Recommended approx. <strong>USD 8 to USD 10 per day</strong> total from the group (shared between 2 trekkers).</li>
        <li>In small groups (2–4 trekkers), pooling approximately <strong>USD 150 to USD 200 per trekker</strong> generally provides a generous, highly appreciated gratuity across your entire support crew.</li>
      </ul>
    `
  },
  {
    id: 'essential-rules',
    title: 'Essential Cultural Rules & Etiquette in the Kingdom of Lo',
    content: `
      <p>The Loba people are exceptionally warm, gracious, and hospitable. Observing traditional cultural etiquette ensures a respectful, mutually enriching experience:</p>
      <ul style="padding-left: 20px; line-height: 1.7; color: var(--color-neutral-700);">
        <li><strong>Clockwise Movement:</strong> Always walk around Buddhist chortens, stupas, mani walls, and shrines in a <strong>clockwise direction</strong> (keeping the sacred monument on your right hand side). Similarly, spin prayer wheels clockwise.</li>
        <li><strong>Gompa Protocol:</strong> Always remove your hiking boots before entering Buddhist monastery prayer halls. Remove hats and sunglasses. It is customary to place a small donation (NPR 100–500) on the altar.</li>
        <li><strong>Photography Courtesy:</strong> Always ask permission before photographing local monks, elders, or sacred altars. Photography inside some older monastery chapels is restricted to protect delicate mineral frescoes.</li>
        <li><strong>Modest Dress:</strong> Dress respectfully when visiting villages and religious sites. Keep shoulders and knees covered.</li>
      </ul>
    `
  }
];

// Build Accordion HTML
let accordionCardsHtml = '';
accordionItems.forEach(item => {
  accordionCardsHtml += `
                <!-- Item: ${item.id} -->
                <div class="detail-accordion-card" data-detail-id="${item.id}">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        ${getIconSvg(item.id)}
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">${item.title}</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-body">
                    <div class="detail-accordion-content">
                      ${item.content.trim()}
                    </div>
                  </div>
                </div>
`;
});

const newSection6 = `<section id="section-details" class="trek-detail-section">
            <div class="details-section-container">
              <!-- Heading -->
              <div class="details-title-wrapper">
                <h2 class="details-main-title">Read Before You Book: Upper Mustang Trek (17 Days)</h2>
                <div style="width: 48px; height: 4px; background: #008060; border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <!-- Subtitle Paragraphs -->
              <p class="details-subtitle-text">To help you thoroughly prepare for the journey into the Forbidden Kingdom of Lo, we have compiled comprehensive practical guidance on restricted area permits, trans-Himalayan monsoon travel, flight logistics, and cultural etiquette.</p>
              <p class="details-subtitle-text" style="margin-bottom: 24px;">Have questions about permits, solo travel matching, or custom itineraries? <a href="https://wa.me/9779800000000" target="_blank" style="color: #008060; font-weight: 600; text-decoration: underline;">Chat with us on WhatsApp</a>. We respond within a few hours!</p>

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
${accordionCardsHtml}
              </div>
            </div>
          </section>`;

const updatedHtml = html.substring(0, s6Start) + newSection6 + '\n\n          ' + html.substring(s6End);
fs.writeFileSync(targetPath, updatedHtml, 'utf8');
console.log('Successfully updated Section 6 (All 21 Upper Mustang Accordions)!');
