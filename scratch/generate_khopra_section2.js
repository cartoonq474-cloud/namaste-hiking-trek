const fs = require('fs');

console.log('Building authentic Section 2 (15-Day Itinerary) for Khopra Ridge Trek...');

const quickTableRows = [
  { day: 'Day 1', route: 'Arrival in Kathmandu & Hotel Transfer', elev: '1,355 m', time: 'Airport transfer & preparation' },
  { day: 'Day 2', route: 'Drive from Kathmandu to Pokhara', elev: '822 m', time: '6–7 hrs scenic drive (200 km)' },
  { day: 'Day 3', route: 'Drive Pokhara to Nayapul & Trek to Ghandruk', elev: '1,940 m', time: '1.5 hrs drive + 5 hrs trek' },
  { day: 'Day 4', route: 'Trek from Ghandruk to Tadapani', elev: '2,630 m', time: '4–5 hrs (8.6 km)' },
  { day: 'Day 5', route: 'Trek from Tadapani to Bayeli Kharka', elev: '3,460 m', time: '5–6 hrs (10 km)' },
  { day: 'Day 6', route: 'Trek from Bayeli Kharka to Upper Chistibung', elev: '2,950 m', time: '4–5 hrs (9 km)' },
  { day: 'Day 7', route: 'Trek from Upper Chistibung to Khopra Ridge', elev: '3,660 m', time: '3 hrs (6 km)' },
  { day: 'Day 8', route: 'High-Altitude Excursion to Khayer Lake & Return', elev: '4,700 m', time: '7–9 hrs full-day excursion' },
  { day: 'Day 9', route: 'Trek from Khopra Ridge to Swanta', elev: '2,260 m', time: '4–5 hrs (8.5 km)' },
  { day: 'Day 10', route: 'Trek from Swanta to Ghorepani', elev: '2,880 m', time: '5 hrs (10 km)' },
  { day: 'Day 11', route: 'Poon Hill Sunrise (3,210m) & Trek to Mohare Hill', elev: '3,300 m', time: '4–5 hrs (7 km)' },
  { day: 'Day 12', route: 'Trek from Mohare Hill to Tikhedhunga', elev: '1,480 m', time: '6–7 hrs (15 km descent)' },
  { day: 'Day 13', route: 'Trek Tikhedhunga to Nayapul & Drive to Pokhara', elev: '822 m', time: '4 hrs trek + 1.5 hrs drive' },
  { day: 'Day 14', route: 'Drive from Pokhara to Kathmandu', elev: '1,355 m', time: '6–8 hrs highway drive' },
  { day: 'Day 15', route: 'Hotel Checkout & Final International Departure', elev: '1,355 m', time: 'Airport transfer according to flight' }
];

const itineraryDays = [
  {
    dayNum: 1,
    title: 'Arrival in Kathmandu (1,355 m / 4,445 ft)',
    elev: '1,355 m',
    dist: 'Airport Transfer',
    time: '30–45 mins drive',
    activity: 'Arrival, Hotel Transfer & Expedition Briefing',
    meals: 'Welcome Dinner with Cultural Performance',
    acc: 'Hotel in Kathmandu (Thamel / Lazimpat)',
    body: `<p>Your Khopra Ridge Trek begins the moment your international flight descends into the Kathmandu Valley, offering initial glimpses of the snow-capped Himalayan crest when skies are clear. After clearing Nepal immigration and customs at Tribhuvan International Airport (TIA), step out into the arrival terminal where our representative warmly greets you with a traditional marigold garland (Khada) and transfers you by private vehicle to your hotel in Kathmandu.</p>
    <p>After settling into your room, take time to unwind from long-haul travel. In the late afternoon, gather in the lobby for an essential expedition briefing led by your managing director and trekking guide. We will thoroughly review the daily schedule, trail conditions, community lodge protocols, acclimatization guidelines for Khayer Lake (<span data-altitude-m="4700">4,700 m</span>), and inspect your personal gear (down jacket, sleeping bag, broken-in trekking boots, and trekking poles). Any missing alpine items can be easily rented or purchased in Thamel's outdoor shops. In the evening, enjoy a traditional welcome dinner featuring authentic Nepali cuisine and cultural dances.</p>`
  },
  {
    dayNum: 2,
    title: 'Scenic Drive from Kathmandu to Pokhara (approx. 822 m / 2,697 ft)',
    elev: '822 m',
    dist: 'Approx. 200 km',
    time: '6–7 hours scenic drive',
    activity: 'Highway Overland Transfer & Lakeside Relaxation',
    meals: 'Breakfast at Hotel',
    acc: 'Hotel in Pokhara (Lakeside)',
    body: `<p>Following an early breakfast at your Kathmandu hotel, board our comfortable tourist vehicle or private coach for the picturesque overland journey to Pokhara—Nepal's premier lakeside resort city and the primary gateway for all Annapurna adventures. The scenic drive follows the winding Prithvi Highway through lush middle-hill country, tracing the mighty Trishuli and Marsyangdi river gorges past terraced rice fields, vibrant market towns, and suspension bridges.</p>
    <p>We make periodic comfort stops along the route for fresh local tea, seasonal fruits, and a hot riverside buffet lunch. As you approach the Pokhara Valley in the afternoon, the dramatic skyline opens to reveal the soaring snow-fluted summit of Machapuchare (Fishtail, <span data-altitude-m="6993">6,993 m</span>) and the Annapurna range towering above the subtropical valley floor. Upon reaching Pokhara, check in to your lakeside hotel. Spend the late afternoon taking an easy stroll along the serene shores of Phewa Lake, enjoying the bustling cafes, or taking a peaceful wooden boat ride before an early night's rest.</p>`
  },
  {
    dayNum: 3,
    title: 'Drive Pokhara to Nayapul & Trek to Ghandruk (1,940 m / 6,365 ft)',
    elev: '1,940 m',
    dist: '1.5 hrs drive + 9 km trek',
    time: '5 hours trekking',
    activity: 'Trailhead Transit & Ascent to Gurung Cultural Village',
    meals: 'Breakfast, Lunch, Dinner',
    acc: 'Local Lodge / Teahouse in Ghandruk',
    body: `<p>After breakfast in Pokhara, meet your guide and porters and depart by private vehicle toward Nayapul or Birethanti, driving past scenic agricultural valleys and the rushing Modi Khola. At the ACAP checkpoint in Birethanti, your guide completes all official permit registrations before we lace up our boots and begin the walking portion of our journey.</p>
    <p>The trail ascends gradually along stone staircases through terraced millet and rice fields, passing traditional stone farmhouses, cascading waterfalls, and subtropical woods. We stop for lunch at a trailside teahouse before embarking on the steady stone staircase climb leading up to the historic village of Ghandruk (<span data-altitude-m="1940">1,940 m</span>). Ghandruk is the largest and most renowned Gurung settlement in the Annapurna foothills, famous for its slate-roofed masonry houses, clean flagstone alleys, and friendly local culture. From village terraces, enjoy spellbinding views of Annapurna South (<span data-altitude-m="7219">7,219 m</span>), Hiunchuli, and Machapuchare. In the afternoon, explore the local Gurung cultural museum and Buddhist monastery.</p>`
  },
  {
    dayNum: 4,
    title: 'Trek from Ghandruk to Tadapani (2,630 m / 8,628 ft)',
    elev: '2,630 m',
    dist: 'Approx. 8.6 km',
    time: '4–5 hours trekking',
    activity: 'Forested Mountain Ascent through Rhododendron Woods',
    meals: 'Breakfast, Lunch, Dinner',
    acc: 'Mountain Lodge in Tadapani',
    body: `<p>Wake up early in Ghandruk to witness sunrise lighting up the eastern flank of Annapurna South and Fishtail with glowing rose-gold hues. After a hearty breakfast of porridge, eggs, and Tibetan bread, bid farewell to the village and begin climbing northward along well-maintained stone pathways.</p>
    <p>Leaving the cultivated terraces behind, the trail enters a dense, primeval forest of moss-draped oak, maple, and towering rhododendron trees. In the spring months (March–April), these ancient canopies erupt in brilliant blooms of scarlet, pink, and white. The soothing sound of mountain streams and birdsong accompanies our steady climb. We pause for tea and rest at Baisi Kharka before tackling the final forested ridge toward Tadapani (<span data-altitude-m="2630">2,630 m</span>). Perched atop a forested mountain pass, Tadapani offers dramatic, close-up panoramas of Annapurna South, Hiunchuli, and Machapuchare directly across the deep valley. Settle into your cozy teahouse and enjoy the brisk mountain air.</p>`
  },
  {
    dayNum: 5,
    title: 'Trek from Tadapani to Bayeli Kharka (3,460 m / 11,352 ft)',
    elev: '3,460 m',
    dist: 'Approx. 10 km',
    time: '5–6 hours trekking',
    activity: 'Branching off Main Trail into Remote Subalpine Pastures',
    meals: 'Breakfast, Lunch, Dinner',
    acc: 'Community Lodge in Bayeli Kharka',
    body: `<p>Today marks our departure from the heavily traveled trekking corridors as we branch northwest toward Khopra Danda. Leaving Tadapani after breakfast, the trail leaves the Poon Hill circuit behind and enters a remarkably tranquil, secluded mountain wilderness where few other trekkers tread.</p>
    <p>The path climbs steadily through virgin rhododendron and bamboo woodlands, following narrow ridge crests with intermittent views of deep forested valleys on either side. We cross babbling alpine brooks and ascend past summer grazing settlements known as Kharkas. Because this stage gains approximately 830 metres of sleeping elevation, your guide will enforce a steady, unhurried pace ("Bistari, Bistari") with frequent hydration breaks. After crossing subalpine clearings where yak and sheep graze, we arrive at the remote settlement of Bayeli Kharka (<span data-altitude-m="3460">3,460 m</span>). Settle into the community lodge, warm up around the wood-burning stove in the dining room, and take in the expansive views of Dhaulagiri rising majestically on the western horizon.</p>`
  },
  {
    dayNum: 6,
    title: 'Trek from Bayeli Kharka to Upper Chistibung (2,950 m / 9,679 ft)',
    elev: '2,950 m',
    dist: 'Approx. 9 km',
    time: '4–5 hours trekking',
    activity: 'Staged Descending & Contouring Trail for Safe Acclimatization',
    meals: 'Breakfast, Lunch, Dinner',
    acc: 'Basic Community Lodge in Upper Chistibung',
    body: `<p>Following a crisp morning gazing at the sunrise over Dhaulagiri, begin the trek from Bayeli Kharka toward Upper Chistibung. Today's trail serves a vital physiological role: by descending to sleep at <span data-altitude-m="2950">2,950 metres</span>, your body undergoes optimal acclimatization staging before making the final push up to Khopra Ridge (<span data-altitude-m="3660">3,660 m</span>) and Khayer Lake (<span data-altitude-m="4700">4,700 m</span>).</p>
    <p>The route winds down through enchanting mossy forests of oak and birch, crossing wooden footbridges over crystal-clear glacial streams. Keep your camera ready, as these quiet, undisturbed woods are prime habitat for the Himalayan Monal (Danphe—Nepal’s colorful national bird), musk deer, and barking deer. After reaching Lower Chistibung for a tea break, the trail climbs gently through open pastureland to Upper Chistibung (<span data-altitude-m="2950">2,950 m</span>), also known as Dobato or Dhan Kharka. Accommodation here is in a rustic, community-run lodge providing essential comfort, nourishing dal bhat, and an authentic glimpse into high-mountain pastoral life.</p>`
  },
  {
    dayNum: 7,
    title: 'Trek from Upper Chistibung to Khopra Ridge (3,660 m / 12,008 ft)',
    elev: '3,660 m',
    dist: 'Approx. 6 km',
    time: '3 hours steady climbing',
    activity: 'Ascent above Tree Line to Panoramic Khopra Danda',
    meals: 'Breakfast, Lunch, Dinner',
    acc: 'Community Lodge at Khopra Ridge',
    body: `<p>Today's hike is relatively short in distance but involves a steady, exhilarating ascent as we climb directly toward the crowning viewpoint of the trek: Khopra Ridge (Khopra Danda). Leaving Upper Chistibung after breakfast, the trail leaves the tree line behind, ascending through subalpine grasslands and dwarf rhododendron scrub.</p>
    <p>As you gain elevation, the surrounding horizon expands exponentially. To your west, the immense, ice-encrusted eastern face of Mount Dhaulagiri (<span data-altitude-m="8167">8,167 m</span>) rises like a titanic white wall directly above the depths of the Kali Gandaki Gorge—the deepest canyon on Earth. To the north, Annapurna South (<span data-altitude-m="7219">7,219 m</span>) and the fang-like peak of Fang (Varaharshikhar, <span data-altitude-m="7647">7,647 m</span>) loom staggeringly close. We reach Khopra Ridge (<span data-altitude-m="3660">3,660 m</span>) around midday. After checking into the community lodge and enjoying a warm lunch, spend the afternoon marveling at the 360-degree mountain amphitheater, capturing sunset photography, and hydrating thoroughly for tomorrow's demanding excursion to Khayer Lake.</p>`
  },
  {
    dayNum: 8,
    title: 'High-Altitude Excursion to Sacred Khayer Lake (~4,700 m / 15,420 ft) & Return',
    elev: '4,700 m (Highest Point)',
    dist: 'Approx. 15–16 km roundtrip',
    time: '7–9 hours strenuous hike',
    activity: 'High-Alpine Moraine Ascent to Sacred Glacial Lake',
    meals: 'Breakfast, Packed Lunch, Dinner',
    acc: 'Community Lodge at Khopra Ridge',
    body: `<p>Day 8 is the grand physical and spiritual highlight of the Khopra Ridge Trek. We start before dawn (around 5:30 AM) with headlamps, carrying a daypack with warm thermal layers, windproof shell, sun protection, high-energy snacks, packed lunch, and at least 2 litres of treated drinking water. No permanent lodges exist along this remote high-altitude trail, making self-sufficiency essential.</p>
    <p>The trail climbs steeply along rocky ridgelines and lateral moraines, steadily gaining altitude above the clouds. As we cross 4,000 metres and push toward <span data-altitude-m="4700">4,700 metres</span>, the terrain turns into an austere alpine wonderland of scree, boulders, and hanging glaciers directly beneath the colossal face of Annapurna South. Reaching the shores of sacred Khayer Lake is an unforgettable achievement. The serene turquoise water reflects the icy peaks, and a small Hindu shrine dedicated to Khayer Barahi stands at the lake's edge, draped with prayer flags. Pilgrims visit this holy site during the August full moon, believing the goddess grants wishes for fertility and health. After soaking in the silence and taking photographs, we descend carefully back down the rocky ridges, arriving at Khopra Ridge by mid-afternoon for hot soup, well-earned rest, and celebration.</p>`
  },
  {
    dayNum: 9,
    title: 'Trek from Khopra Ridge to Swanta (approx. 2,260 m / 7,415 ft)',
    elev: '2,260 m',
    dist: 'Approx. 8.5 km',
    time: '4–5 hours trekking',
    activity: 'Descent through Forest & Farmland to Magar Village',
    meals: 'Breakfast, Lunch, Dinner',
    acc: 'Local Teahouse / Lodge in Swanta',
    body: `<p>Wake up to enjoy one last memorable sunrise over Dhaulagiri and Nilgiri from Khopra Ridge. After a hot breakfast, we shoulder our packs and begin our descent from the high ridge toward the lower valleys, heading toward the traditional village of Swanta (<span data-altitude-m="2260">2,260 m</span>).</p>
    <p>Today's trail involves a significant loss of elevation (approximately 1,400 metres). The path descends steeply along open grassy ridges before entering dense woodlands of bamboo, oak, and rhododendron. Trekking poles are highly beneficial on this section to cushion the knees and stabilize footing on uneven stone paths. As we lose altitude, the air becomes warmer and the vegetation increasingly lush. We cross a wooden bridge over a rushing river and arrive in the picturesque village of Swanta, inhabited primarily by the Magar ethnic community. Swanta features beautiful terraced potato and barley fields, a local secondary school, and a peaceful, non-commercial atmosphere. Enjoy a relaxing afternoon exploring the village lanes and resting your legs.</p>`
  },
  {
    dayNum: 10,
    title: 'Trek from Swanta to Ghorepani (approx. 2,880 m / 9,449 ft)',
    elev: '2,880 m',
    dist: 'Approx. 10 km',
    time: '5 hours trekking',
    activity: 'Scenic River Crossing & Ascent to Ghorepani Pass',
    meals: 'Breakfast, Lunch, Dinner',
    acc: 'Mountain Lodge in Ghorepani',
    body: `<p>Following a hearty village breakfast in Swanta, begin today's trek by descending through terraced farmlands to a rushing mountain stream. We cross a suspension bridge and pass a traditional watermill used by locals to grind maize and wheat into flour.</p>
    <p>From the river, the trail begins a steady climb through beautiful mixed forests, passing through the small settlement of Chittre. Here, our path rejoins the historic trans-Himalayan trade route that connects Pokhara with Mustang and Tibet. Climbing stone stairways bordered by ancient rhododendron trees, we reach the bustling hill settlement of Ghorepani (<span data-altitude-m="2880">2,880 m</span>) by early afternoon. Ghorepani ("Horse Water") is situated on a major mountain pass with spectacular panoramic views across the Dhaulagiri and Annapurna ranges. Settle into your teahouse, enjoy hot showers and bakery treats, and prepare your warm layers and headlamp for tomorrow morning's pre-dawn excursion to Poon Hill.</p>`
  },
  {
    dayNum: 11,
    title: 'Poon Hill Sunrise (3,210 m) & Trek from Ghorepani to Mohare Hill (3,300 m)',
    elev: 'Poon Hill 3,210 m / Mohare 3,300 m',
    dist: 'Approx. 7 km total',
    time: '4–5 hours walking',
    activity: 'Dawn Sunrise Ascent & High Ridge Traverse to Eco-Lodge',
    meals: 'Breakfast, Lunch, Dinner',
    acc: 'Community Eco-Lodge at Mohare Hill',
    body: `<p>A pre-dawn wake-up call at 4:45 AM sets the stage for one of Nepal's most iconic mountain spectacles. With headlamps on, we make the 45-minute uphill walk along stone stairways to the summit of Poon Hill (<span data-altitude-m="3210">3,210 m</span>). As the sun breaks over the eastern horizon, golden light bathes more than 20 major Himalayan peaks, including Dhaulagiri I (<span data-altitude-m="8167">8,167 m</span>), Annapurna I (<span data-altitude-m="8091">8,091 m</span>), Annapurna South, Hiunchuli, Machapuchare, and Manaslu (<span data-altitude-m="8163">8,163 m</span>).</p>
    <p>After capturing photographs and enjoying hot spiced tea from the summit stall, we descend back to Ghorepani for breakfast. Afterward, we embark on a scenic traverse along the ridge crest toward Mohare Hill (<span data-altitude-m="3300">3,300 m</span>). Unlike Poon Hill, Mohare Danda is an eco-community initiative developed under the visionary guidance of local leader Mahabir Pun. The trail passes through quiet oak and rhododendron woodlands along a high mountain spine. Arriving at Mohare Hill in the afternoon, we stay at the community eco-lodge—equipped with solar heating and wireless internet—offering stunning sunset vistas across the deep valleys below.</p>`
  },
  {
    dayNum: 12,
    title: 'Trek from Mohare Hill to Tikhedhunga (approx. 1,480 m / 4,855 ft)',
    elev: '1,480 m',
    dist: 'Approx. 15 km',
    time: '6–7 hours trekking',
    activity: 'Extended Descent through Forests & Ulleri Stone Steps',
    meals: 'Breakfast, Lunch, Dinner',
    acc: 'Local Lodge / Teahouse in Tikhedhunga',
    body: `<p>Begin the morning with breathtaking dawn views from Mohare Hill as the first light strikes the Dhaulagiri and Annapurna massifs. After breakfast at the eco-lodge, we commence our final major descent from the high ridges down into the subtropical river valleys of the lower Annapurna.</p>
    <p>The trail descends through tranquil, mossy forests and pasture clearings, gradually rejoining the main Poon Hill trail near Ulleri. From Ulleri, we navigate the famous 3,280 stone steps that descend steeply toward the roaring Bhurungdi Khola. Take your time, maintain a controlled cadence, and utilize trekking poles to relieve knee pressure. We cross a high suspension bridge over the river and arrive at the welcoming village of Tikhedhunga (<span data-altitude-m="1480">1,480 m</span>). Settle into your lodge, enjoy a refreshing drink, and relax as the high-altitude challenges of the trek come to a close.</p>`
  },
  {
    dayNum: 13,
    title: 'Trek Tikhedhunga to Nayapul & Drive to Pokhara (approx. 822 m / 2,697 ft)',
    elev: '822 m',
    dist: '9 km trek + 42 km drive',
    time: '4 hrs trek + 1.5 hrs road transfer',
    activity: 'Final Foothill Walking & Transfer to Lakeside Pokhara',
    meals: 'Breakfast, Lunch',
    acc: 'Hotel in Pokhara (Lakeside)',
    body: `<p>Enjoy a relaxed morning breakfast in Tikhedhunga listening to the roar of the Bhurungdi river. Today's walking is gentle and enjoyable as we follow the riverside path downstream through lush subtropical forests, small stone hamlets, and cultivated banana and citrus orchards.</p>
    <p>We pass through Hile and reach the bustling settlement of Birethanti, where we cross the suspension bridge over the Modi Khola and check out at the ACAP permit post. Continuing 30 minutes along the road, we reach Nayapul, marking the official completion of our trekking circuit. Here, our private vehicle awaits to transport our group back to Pokhara (approximately 1.5 hours drive). Upon arriving at your Lakeside hotel, enjoy a long, hot shower, clean clothes, and an afternoon of relaxation. In the evening, gather for a celebratory meal at one of Lakeside’s famous lakeside restaurants, raising a toast to an extraordinary journey across Khopra Ridge and Khayer Lake.</p>`
  },
  {
    dayNum: 14,
    title: 'Scenic Drive from Pokhara to Kathmandu (1,355 m / 4,445 ft)',
    elev: '1,355 m',
    dist: 'Approx. 200 km',
    time: '6–8 hours highway drive',
    activity: 'Scenic Overland Highway Journey back to Kathmandu',
    meals: 'Breakfast, Farewell Dinner',
    acc: 'Hotel in Kathmandu',
    body: `<p>After breakfast at your Pokhara hotel, board our private tourist transport for the return drive to Kathmandu. The route winds through the scenic river valleys of the Marsyangdi and Trishuli, providing one last look at rural Nepal's terraced hills, suspension bridges, and bustling roadside markets.</p>
    <p>We stop en route for tea and lunch at a highway restaurant. Arriving back in Kathmandu in the afternoon, transfer to your hotel. Spend your remaining hours souvenir shopping in Thamel for pashminas, thangkas, and handcrafted singing bowls, or exploring Kathmandu's historic squares. In the evening, join the Namaste Hiking Trek management team for a special farewell dinner to celebrate the successful completion of the Khopra Ridge Trek, receive your trek certificate of completion, and share memories of your time in the Annapurna mountains.</p>`
  },
  {
    dayNum: 15,
    title: 'Final Departure from Kathmandu (1,355 m / 4,445 ft)',
    elev: '1,355 m',
    dist: 'Airport Transfer',
    time: '30–45 mins drive',
    activity: 'Hotel Checkout & International Flight Departure',
    meals: 'Breakfast at Hotel',
    acc: 'None (Departure)',
    body: `<p>Your 15-day Khopra Ridge Trek adventure draws to a close today. Enjoy breakfast at your hotel and spend any remaining free time packing your luggage and taking in final views of Kathmandu.</p>
    <p>Depending on your international flight departure schedule, our airport representative and private driver will meet you at your hotel lobby approximately 3 hours prior to takeoff. You will be transferred to Tribhuvan International Airport (TIA) for your flight home, carrying with you lifelong memories, stunning photographs, and the deep satisfaction of having stood at Khopra Ridge and sacred Khayer Lake under the shadow of the mighty Himalayas. Namaste, and safe travels!</p>`
  }
];

// Build Quick Reference Table HTML
let tableRowsHtml = '';
quickTableRows.forEach(row => {
  tableRowsHtml += `                  <tr style="border-bottom: 1px solid var(--color-neutral-100);">
                    <td style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">${row.day}</td>
                    <td style="padding: 12px 14px; color: var(--color-neutral-800);">${row.route}</td>
                    <td style="padding: 12px 14px; color: #10b981; font-weight: 600;">${row.elev}</td>
                    <td style="padding: 12px 14px; color: var(--color-neutral-600); font-size: 0.9rem;">${row.time}</td>
                  </tr>\n`;
});

// Build 15 Itinerary Cards HTML
let cardsHtml = '';
itineraryDays.forEach(item => {
  const isFirst = item.dayNum === 1;
  const isLakeDay = item.dayNum === 8;
  const isPoonHill = item.dayNum === 11;
  const badgeClass = isLakeDay ? 'pill-copper' : (isPoonHill ? 'pill-forest' : 'pill-teal');
  const badgeText = isLakeDay ? 'Crucial Lake Excursion' : (isPoonHill ? 'Dual Viewpoints' : `Day ${item.dayNum}`);

  cardsHtml += `            <!-- Day ${item.dayNum} Card -->
            <div class="itinerary-card" data-day="${item.dayNum}">
              <div class="itinerary-card-header ${isFirst ? 'active' : ''}">
                <div class="itinerary-card-title-group">
                  <span class="pill ${badgeClass}" style="margin-bottom: 0;">${badgeText}</span>
                  <h3 class="itinerary-card-title">${item.dayNum}: ${item.title}</h3>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span style="font-size: 0.85rem; font-weight: 600; color: #10b981; background: rgba(16, 185, 129, 0.08); padding: 4px 10px; border-radius: 4px;">${item.elev}</span>
                  <span class="itinerary-card-icon" style="transition: transform 0.3s; transform: ${isFirst ? 'rotate(180deg)' : 'rotate(0deg)'};">&#9662;</span>
                </div>
              </div>
              <div class="itinerary-card-body" style="display: ${isFirst ? 'block' : 'none'};">
                <div class="itinerary-metrics-list" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-bottom: 16px; background: #f8fafc; padding: 12px 16px; border-radius: 6px; font-size: 0.88rem;">
                  <div><strong style="color: var(--color-primary-navy);">Altitude:</strong> <span style="color: var(--color-neutral-700);">${item.elev}</span></div>
                  <div><strong style="color: var(--color-primary-navy);">Distance:</strong> <span style="color: var(--color-neutral-700);">${item.dist}</span></div>
                  <div><strong style="color: var(--color-primary-navy);">Duration:</strong> <span style="color: var(--color-neutral-700);">${item.time}</span></div>
                  <div><strong style="color: var(--color-primary-navy);">Activity:</strong> <span style="color: var(--color-neutral-700);">${item.activity}</span></div>
                </div>
                
                <div class="itinerary-meta-box" style="display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 16px; padding: 10px 14px; background: rgba(16, 185, 129, 0.04); border-left: 3px solid #10b981; border-radius: 0 4px 4px 0; font-size: 0.88rem;">
                  <div><strong style="color: var(--color-primary-navy);">Meals:</strong> <span style="color: var(--color-neutral-700);">${item.meals}</span></div>
                  <div><strong style="color: var(--color-primary-navy);">Overnight:</strong> <span style="color: var(--color-neutral-700);">${item.acc}</span></div>
                </div>

                <div class="itinerary-card-narrative" style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.7; margin-bottom: 20px;">
                  ${item.body}
                </div>

                <!-- 4-Photo Responsive Gallery -->
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 15px;">
                  <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80" alt="Khopra Ridge Trail Scenery - Day ${item.dayNum}" style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px;" loading="lazy">
                  <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Dhaulagiri Himalayan Vista - Day ${item.dayNum}" style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px;" loading="lazy">
                  <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80" alt="Annapurna Mountain Range - Day ${item.dayNum}" style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px;" loading="lazy">
                  <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80" alt="Himalayan Village Teahouse - Day ${item.dayNum}" style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px;" loading="lazy">
                </div>
              </div>
            </div>\n\n`;
});

const section2Html = `<!-- Section 2: Itinerary -->
          <section id="section-itinerary" class="trek-detail-section">
            <h2 class="trek-section-title">Khopra Ridge Trek Itinerary: Day by Day Details</h2>
            <p style="font-size: 1.05rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 24px; max-width: 800px;">
              Our comprehensive 15-day itinerary is designed to maximize safety, cultural immersion, and gradual acclimatization. It combines the traditional villages of Ghandruk and Swanta, high-altitude community stays at Bayeli Kharka and Khopra Ridge (<span data-altitude-m="3660">3,660 m</span>), the strenuous excursion to sacred Khayer Lake (<span data-altitude-m="4700">4,700 m</span>), and sunrise viewpoints at Poon Hill (<span data-altitude-m="3210">3,210 m</span>) and Mohare Hill (<span data-altitude-m="3300">3,300 m</span>). Review the daily hiking hours, elevation profiles, meals, and overnight lodgings below.
            </p>

            <!-- 15-Day Quick-Reference Outline Table -->
            <div style="background: white; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); overflow-x: auto; margin-bottom: 30px;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.92rem;">
                <thead>
                  <tr style="background: var(--color-neutral-50); border-bottom: 2px solid var(--color-neutral-100);">
                    <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Day</th>
                    <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Route / Activity</th>
                    <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Approx. Elevation</th>
                    <th style="padding: 12px 14px; font-weight: 700; color: var(--color-primary-navy);">Walking / Travel Duration</th>
                  </tr>
                </thead>
                <tbody>
${tableRowsHtml}                </tbody>
              </table>
            </div>

            <!-- Route and Operational Notice Card -->
            <div style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: var(--radius-md); padding: 20px 24px; margin-bottom: 28px;">
              <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy); margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                Route & Expedition Notes for Khopra Ridge Trek
              </h4>
              <p style="font-size: 0.92rem; color: var(--color-neutral-700); line-height: 1.6; margin: 0;">
                <strong>Khayer Lake Excursion (Day 8):</strong> Khayer Lake (~<span data-altitude-m="4700">4,700 m</span>) is an active full-day out-and-back mountain hike from Khopra Ridge. It is not an assumed overnight stop. The hike requires 7 to 9 hours roundtrip and is subject to weather, trail conditions, and group health. If snow, ice, or altitude symptoms occur, turnaround protocols are strictly enforced.<br>
                <strong>Community Staging (Days 5–7):</strong> Sleeping at Tadapani (<span data-altitude-m="2630">2,630 m</span>), Bayeli Kharka (<span data-altitude-m="3460">3,460 m</span>), and Upper Chistibung (<span data-altitude-m="2950">2,950 m</span>) provides vital physiological acclimatization before sleeping at Khopra Ridge (<span data-altitude-m="3660">3,660 m</span>).
              </p>
            </div>

            <!-- Expand / Collapse All Controls -->
            <div style="display: flex; justify-content: flex-end; margin-bottom: 16px;">
              <button id="itinerary-toggle-all-btn" style="background: none; border: 1px solid var(--color-neutral-200); padding: 6px 14px; border-radius: 4px; font-size: 0.85rem; font-weight: 600; color: var(--color-neutral-700); cursor: pointer; transition: all 0.2s;">
                Expand All Days
              </button>
            </div>

            <!-- 15 Detailed Itinerary Accordion Cards -->
            <div class="itinerary-timeline">
${cardsHtml}            </div>

            <script>
              document.addEventListener('DOMContentLoaded', () => {
                const headers = document.querySelectorAll('.itinerary-card-header');
                const toggleAllBtn = document.getElementById('itinerary-toggle-all-btn');
                let allExpanded = false;

                headers.forEach(header => {
                  header.addEventListener('click', () => {
                    const body = header.nextElementSibling;
                    const icon = header.querySelector('.itinerary-card-icon');
                    const isActive = header.classList.contains('active');

                    if (isActive) {
                      header.classList.remove('active');
                      body.style.display = 'none';
                      if (icon) icon.style.transform = 'rotate(0deg)';
                    } else {
                      header.classList.add('active');
                      body.style.display = 'block';
                      if (icon) icon.style.transform = 'rotate(180deg)';
                    }
                  });
                });

                if (toggleAllBtn) {
                  toggleAllBtn.addEventListener('click', () => {
                    allExpanded = !allExpanded;
                    headers.forEach(header => {
                      const body = header.nextElementSibling;
                      const icon = header.querySelector('.itinerary-card-icon');
                      if (allExpanded) {
                        header.classList.add('active');
                        body.style.display = 'block';
                        if (icon) icon.style.transform = 'rotate(180deg)';
                      } else {
                        header.classList.remove('active');
                        body.style.display = 'none';
                        if (icon) icon.style.transform = 'rotate(0deg)';
                      }
                    });
                    toggleAllBtn.textContent = allExpanded ? 'Collapse All Days' : 'Expand All Days';
                  });
                }
              });
            </script>

            <!-- Custom Trip CTA Banner -->
            <div class="custom-trip-cta-card" style="margin-top: 35px;">
              <div class="custom-trip-cta-left">
                <h3 class="custom-trip-cta-title">Not satisfied with this Itinerary?</h3>
                <p class="custom-trip-cta-subtitle">Are you interested on planning a custom trip or adding Annapurna Base Camp? It only takes 2 minutes.</p>
              </div>
              <div class="custom-trip-cta-right">
                <div class="cta-dotted-arc"></div>
                <a href="#" class="btn-plan-trip-cyan open-inquiry-modal-btn" data-inquiry-type="Tailor-Made Custom Trip">Plan Your Trip</a>
              </div>
            </div>
          </section>`;

let html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const s2Start = html.indexOf('<!-- Section 2: Itinerary -->');
const s3Start = html.indexOf('<!-- Section 3: Includes');

if (s2Start === -1 || s3Start === -1) {
  console.error('Could not locate Section 2 or Section 3 markers!', { s2Start, s3Start });
  process.exit(1);
}

html = html.substring(0, s2Start) + section2Html + '\n\n          ' + html.substring(s3Start);

// Tag balance check
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
console.log('SUCCESS: Phase 3 (Section 2: 15-Day Itinerary) completed with 100% tag balance!');
