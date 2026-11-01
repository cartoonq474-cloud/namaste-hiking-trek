const fs = require('fs');

console.log('Generating upgraded Itinerary Day-by-Day Accordions for Khopra Ridge Trek...');

const quickTableRows = [
  { day: 'Day 1', route: 'Arrival at Kathmandu Airport & Hotel Transfer', elev: '1,355 m', time: '30–45 mins airport drive' },
  { day: 'Day 2', route: 'Scenic Highway Drive from Kathmandu to Pokhara', elev: '822 m', time: '6–7 hrs scenic drive (200 km)' },
  { day: 'Day 3', route: 'Drive Pokhara to Nayapul & Trek to Ghandruk', elev: '1,940 m', time: '1.5 hrs drive + approx. 5 hrs walk' },
  { day: 'Day 4', route: 'Trek from Ghandruk to Tadapani', elev: '2,630 m', time: '4–5 hrs (8.6 km)' },
  { day: 'Day 5', route: 'Trek from Tadapani to Bayeli Kharka', elev: '3,460 m', time: '5–6 hrs (10 km)' },
  { day: 'Day 6', route: 'Trek from Bayeli Kharka to Upper Chistibung', elev: '2,950 m', time: '4–5 hrs (9 km)' },
  { day: 'Day 7', route: 'Trek from Upper Chistibung to Khopra Ridge', elev: '3,660 m', time: 'Approx. 3 hrs (6 km climb)' },
  { day: 'Day 8', route: 'High-Altitude Excursion to Sacred Khayer Lake & Return', elev: '4,700 m', time: '7–9 hrs strenuous alpine hike' },
  { day: 'Day 9', route: 'Trek from Khopra Ridge to Swanta', elev: '2,260 m', time: '4–5 hrs (8.5 km descent)' },
  { day: 'Day 10', route: 'Trek from Swanta to Ghorepani', elev: '2,880 m', time: 'Approx. 5 hrs (10 km)' },
  { day: 'Day 11', route: 'Poon Hill Sunrise (3,210m) & Trek to Mohare Hill', elev: '3,300 m', time: '4–5 hrs walking (7 km)' },
  { day: 'Day 12', route: 'Trek from Mohare Hill to Tikhedhunga', elev: '1,480 m', time: '6–7 hrs (15 km descent)' },
  { day: 'Day 13', route: 'Trek Tikhedhunga to Nayapul & Drive to Pokhara', elev: '822 m', time: '4 hrs walk + 1.5 hrs road transfer' },
  { day: 'Day 14', route: 'Scenic Highway Drive from Pokhara to Kathmandu', elev: '1,355 m', time: '6–8 hrs overland journey' },
  { day: 'Day 15', route: 'Hotel Checkout & Final International Departure', elev: '1,355 m', time: 'Private transfer according to flight' }
];

const itineraryDays = [
  {
    dayNum: 1,
    title: 'Arrival at Tribhuvan International Airport in Kathmandu & Hotel Transfer',
    subtitle: 'Kathmandu – approximately <span data-altitude-m="1355">1,355 m / 4,445 ft</span>',
    duration: '30 to 45 mins airport drive',
    maxElev: '<span data-altitude-m="1355">1,355 m / 4,445 ft</span>',
    gainLoss: 'Arrival elevation',
    distTerrain: 'Airport road transfer · Paved city streets',
    meals: 'Welcome Dinner with Cultural Performance',
    overnight: '3-Star Standard Hotel in Kathmandu (Thamel)',
    paragraphs: [
      `Your 15-day Khopra Ridge Trek begins the moment your international flight descends into the Kathmandu Valley, offering initial glimpses of the snow-capped Himalayan crest when skies are clear. After clearing Nepal immigration and customs at Tribhuvan International Airport (TIA), step out into the arrival terminal where our representative warmly greets you with a traditional marigold garland (Khada) and transfers you by private vehicle to your hotel in Kathmandu.`,
      `After settling into your room, take time to unwind from long-haul travel. In the late afternoon, gather in the lobby for an essential expedition briefing led by your managing director and trekking guide. We will thoroughly review the daily schedule, trail conditions, community lodge protocols, acclimatization guidelines for Khayer Lake (<span data-altitude-m="4700">4,700 m</span>), and inspect your personal gear (down jacket, sleeping bag, broken-in trekking boots, and trekking poles). Any missing alpine items can be easily rented or purchased in Thamel's outdoor shops. In the evening, enjoy a traditional welcome dinner featuring authentic Nepali cuisine and cultural dances.`
    ],
    photos: [
      { src: '../../images/treks/mardi-himal/mardi-himal-trekking-backpacks-13.jpg', alt: 'Trekking backpacks and gear check in Kathmandu' },
      { src: '../../images/treks/mardi-himal/mardi-himal-mountain-village-morning-29.jpg', alt: 'Kathmandu valley morning cityscape' },
      { src: '../../images/treks/mardi-himal/mardi-himal-trekking-group-nepal-flag-02.jpg', alt: 'Expedition briefing with Nepal flag and mountain team' },
      { src: '../../images/treks/mardi-himal/mardi-himal-trekking-backpacks-mountain-view-12.jpg', alt: 'Equipment preparation and duffle bag packing' }
    ]
  },
  {
    dayNum: 2,
    title: 'Scenic Overland Drive from Kathmandu to Pokhara',
    subtitle: 'Kathmandu to Pokhara – approximately <span data-altitude-m="822">822 m / 2,697 ft</span>',
    duration: '6 to 7 hours scenic drive (approx. 200 km)',
    maxElev: '<span data-altitude-m="1355">1,355 m</span> descending to <span data-altitude-m="822">822 m</span>',
    gainLoss: '-533 m net descent into Pokhara Valley',
    distTerrain: 'Overland highway · Winding river valleys',
    meals: 'Breakfast at Kathmandu hotel',
    overnight: 'Lakeside Tourist Hotel in Pokhara',
    paragraphs: [
      `Following an early breakfast at your Kathmandu hotel, board our comfortable tourist coach or private vehicle for the picturesque overland journey to Pokhara—Nepal's premier lakeside resort city and the primary gateway for all Annapurna adventures. The scenic drive follows the winding Prithvi Highway through lush middle-hill country, tracing the mighty Trishuli and Marsyangdi river gorges past terraced rice fields, vibrant market towns, and suspension bridges.`,
      `We make periodic comfort stops along the route for fresh local tea, seasonal fruits, and a hot riverside buffet lunch. As you approach the Pokhara Valley in the afternoon, the dramatic skyline opens to reveal the soaring snow-fluted summit of Machapuchare (Fishtail, <span data-altitude-m="6993">6,993 m</span>) and the Annapurna range towering above the subtropical valley floor. Upon reaching Pokhara, check in to your lakeside hotel. Spend the late afternoon taking an easy stroll along the serene shores of Phewa Lake, enjoying the bustling cafes, or taking a peaceful wooden boat ride before an early night's rest.`
    ],
    photos: [
      { src: '../../images/gallery-bridge.jpg', alt: 'Scenic suspension bridge crossing on river highway' },
      { src: '../../images/treks/mardi-himal/mardi-himal-machhapuchhre-morning-light-27.jpg', alt: 'First dramatic view of Machapuchare from Pokhara' },
      { src: '../../images/treks/mardi-himal/mardi-himal-annapurna-range-sunrise-valley-25.jpg', alt: 'Pokhara valley and Annapurna mountain panorama' },
      { src: '../../images/hero-himalayas.jpg', alt: 'Soaring Himalayan peaks along the Annapurna frontier' }
    ]
  },
  {
    dayNum: 3,
    title: 'Drive Pokhara to Nayapul & Trek to Ghandruk Gurung Village',
    subtitle: 'Pokhara to Ghandruk – approximately <span data-altitude-m="1940">1,940 m / 6,365 ft</span>',
    duration: '1.5 hrs drive + approx. 5 hrs trekking (9 km)',
    maxElev: '<span data-altitude-m="1940">1,940 m / 6,365 ft</span>',
    gainLoss: '+870 m net ascent from Nayapul (1,070 m)',
    distTerrain: 'Approx. 9 km walking · Stone staircases & terraced hills',
    meals: 'Breakfast, Lunch, Dinner',
    overnight: 'Traditional Mountain Lodge in Ghandruk',
    paragraphs: [
      `After breakfast in Pokhara, meet your guide and porters and depart by private vehicle toward Nayapul or Birethanti, driving past scenic agricultural valleys and the rushing Modi Khola. At the ACAP checkpoint in Birethanti, your guide completes all official permit registrations before we lace up our boots and begin the walking portion of our journey.`,
      `The trail ascends gradually along stone staircases through terraced millet and rice fields, passing traditional stone farmhouses, cascading waterfalls, and subtropical woods. We stop for lunch at a trailside teahouse before embarking on the steady stone staircase climb leading up to the historic village of Ghandruk (<span data-altitude-m="1940">1,940 m</span>). Ghandruk is the largest and most renowned Gurung settlement in the Annapurna foothills, famous for its slate-roofed masonry houses, clean flagstone alleys, and friendly local culture. From village terraces, enjoy spellbinding views of Annapurna South (<span data-altitude-m="7219">7,219 m</span>), Hiunchuli, and Machapuchare. In the afternoon, explore the local Gurung cultural museum and Buddhist monastery.`
    ],
    photos: [
      { src: '../../images/gallery-teahouse.jpg', alt: 'Traditional Gurung stone house in Ghandruk village' },
      { src: '../../images/treks/mardi-himal/mardi-himal-hikers-mountain-view-08.jpg', alt: 'Trekkers ascending stone trails through terraced hills' },
      { src: '../../images/treks/mardi-himal/mardi-himal-trekkers-mountain-view-04.jpg', alt: 'Hiking through stone-paved lanes into Ghandruk' },
      { src: '../../images/treks/mardi-himal/mardi-himal-village-mountain-sunrise-28.jpg', alt: 'Ghandruk village stone architecture and mountain backdrop' }
    ]
  },
  {
    dayNum: 4,
    title: 'Trek from Ghandruk to Tadapani through Ancient Rhododendron Woods',
    subtitle: 'Ghandruk to Tadapani – approximately <span data-altitude-m="2630">2,630 m / 8,628 ft</span>',
    duration: '4 to 5 hours trekking (approx. 8.6 km)',
    maxElev: '<span data-altitude-m="2630">2,630 m / 8,628 ft</span>',
    gainLoss: '+690 m sustained climb through deep forest',
    distTerrain: 'Approx. 8.6 km · Shaded forest trails & mossy stone steps',
    meals: 'Breakfast, Lunch, Dinner',
    overnight: 'Mountain Lodge in Tadapani',
    paragraphs: [
      `Wake up early in Ghandruk to witness sunrise lighting up the eastern flank of Annapurna South and Fishtail with glowing rose-gold hues. After a hearty breakfast of porridge, eggs, and Tibetan bread, bid farewell to the village and begin climbing northward along well-maintained stone pathways.`,
      `Leaving the cultivated terraces behind, the trail enters a dense, primeval forest of moss-draped oak, maple, and towering rhododendron trees. In the spring months (March–April), these ancient canopies erupt in brilliant blooms of scarlet, pink, and white. The soothing sound of mountain streams and birdsong accompanies our steady climb. We pause for tea and rest at Baisi Kharka before tackling the final forested ridge toward Tadapani (<span data-altitude-m="2630">2,630 m</span>). Perched atop a forested mountain pass, Tadapani offers dramatic, close-up panoramas of Annapurna South, Hiunchuli, and Machapuchare directly across the deep valley. Settle into your cozy teahouse and enjoy the brisk mountain air.`
    ],
    photos: [
      { src: '../../images/gallery-pass.jpg', alt: 'Moss-covered rhododendron forest pass above Ghandruk' },
      { src: '../../images/treks/mardi-himal/mardi-himal-annapurna-range-morning-light-24.jpg', alt: 'Golden morning light on Annapurna South from Tadapani' },
      { src: '../../images/treks/mardi-himal/mardi-himal-machhapuchhre-mountain-view-30.jpg', alt: 'Machapuchare Fishtail visible through forest breaks' },
      { src: '../../images/treks/mardi-himal/mardi-himal-trekkers-machhapuchhre-sunrise-11.jpg', alt: 'Trekkers admiring mountain sunrise from Tadapani lodge' }
    ]
  },
  {
    dayNum: 5,
    title: 'Trek from Tadapani to Bayeli Kharka (Branching into Wilderness)',
    subtitle: 'Tadapani to Bayeli Kharka – approximately <span data-altitude-m="3460">3,460 m / 11,352 ft</span>',
    duration: '5 to 6 hours trekking (approx. 10 km)',
    maxElev: '<span data-altitude-m="3460">3,460 m / 11,352 ft</span>',
    gainLoss: '+830 m gradual ascent into subalpine zone',
    distTerrain: 'Approx. 10 km · Narrow forest crests & grazing pastures',
    meals: 'Breakfast, Lunch, Dinner',
    overnight: 'Community Lodge in Bayeli Kharka',
    paragraphs: [
      `Today marks our departure from the heavily traveled trekking corridors as we branch northwest toward Khopra Danda. Leaving Tadapani after breakfast, the trail leaves the Poon Hill circuit behind and enters a remarkably tranquil, secluded mountain wilderness where few other trekkers tread.`,
      `The path climbs steadily through virgin rhododendron and bamboo woodlands, following narrow ridge crests with intermittent views of deep forested valleys on either side. We cross babbling alpine brooks and ascend past summer grazing settlements known as Kharkas. Because this stage gains approximately 830 metres of sleeping elevation, your guide will enforce a steady, unhurried pace ("Bistari, Bistari") with frequent hydration breaks. After crossing subalpine clearings where yak and sheep graze, we arrive at the remote settlement of Bayeli Kharka (<span data-altitude-m="3460">3,460 m</span>). Settle into the community lodge, warm up around the wood-burning stove in the dining room, and take in the expansive views of Dhaulagiri rising majestically on the western horizon.`
    ],
    photos: [
      { src: '../../images/treks/mardi-himal/mardi-himal-trekking-group-mountain-view-01.jpg', alt: 'Trekking group climbing subalpine ridge to Bayeli Kharka' },
      { src: '../../images/treks/mardi-himal/mardi-himal-annapurna-range-sunrise-clouds-22.jpg', alt: 'Cloud forest ridge and soaring mountain peaks' },
      { src: '../../images/treks/mardi-himal/mardi-himal-trekking-group-high-camp-09.jpg', alt: 'Arriving at high pastoral grazing settlement' },
      { src: '../../images/treks/mardi-himal/mardi-himal-mountain-dog-view-03.jpg', alt: 'Mountain pasture life at Bayeli Kharka' }
    ]
  },
  {
    dayNum: 6,
    title: 'Trek from Bayeli Kharka to Upper Chistibung (Acclimatization Staging)',
    subtitle: 'Bayeli Kharka to Upper Chistibung – approximately <span data-altitude-m="2950">2,950 m / 9,679 ft</span>',
    duration: '4 to 5 hours trekking (approx. 9 km)',
    maxElev: '<span data-altitude-m="3460">3,460 m</span> descending to <span data-altitude-m="2950">2,950 m</span>',
    gainLoss: '-510 m staged descent for acclimatization recovery',
    distTerrain: 'Approx. 9 km · Mixed oak forest & pasture contours',
    meals: 'Breakfast, Lunch, Dinner',
    overnight: 'Rustic Community Lodge in Upper Chistibung (Dobato)',
    paragraphs: [
      `Following a crisp morning gazing at the sunrise over Dhaulagiri, begin the trek from Bayeli Kharka toward Upper Chistibung. Today's trail serves a vital physiological role: by descending to sleep at <span data-altitude-m="2950">2,950 metres</span>, your body undergoes optimal acclimatization staging before making the final push up to Khopra Ridge (<span data-altitude-m="3660">3,660 m</span>) and Khayer Lake (<span data-altitude-m="4700">4,700 m</span>).`,
      `The route winds down through enchanting mossy forests of oak and birch, crossing wooden footbridges over crystal-clear glacial streams. Keep your camera ready, as these quiet, undisturbed woods are prime habitat for the Himalayan Monal (Danphe—Nepal’s colorful national bird), musk deer, and barking deer. After reaching Lower Chistibung for a tea break, the trail climbs gently through open pastureland to Upper Chistibung (<span data-altitude-m="2950">2,950 m</span>), also known as Dobato or Dhan Kharka. Accommodation here is in a rustic, community-run lodge providing essential comfort, nourishing dal bhat, and an authentic glimpse into high-mountain pastoral life.`
    ],
    photos: [
      { src: '../../images/treks/mardi-himal/mardi-himal-annapurna-sunrise-clouds-23.jpg', alt: 'Sunrise over Mount Dhaulagiri from Bayeli Kharka' },
      { src: '../../images/treks/mardi-himal/mardi-himal-trekker-snowy-trail-31.jpg', alt: 'Trekker traversing peaceful mossy forest contour' },
      { src: '../../images/treks/mardi-himal/mardi-himal-trekking-group-nepal-flag-07.jpg', alt: 'Group pausing at scenic clearing in Upper Chistibung' },
      { src: '../../images/treks/mardi-himal/mardi-himal-high-camp-sunrise-06.jpg', alt: 'Pastoral community lodge in Upper Chistibung' }
    ]
  },
  {
    dayNum: 7,
    title: 'Trek from Upper Chistibung to Khopra Ridge (Khopra Danda)',
    subtitle: 'Upper Chistibung to Khopra Ridge – approximately <span data-altitude-m="3660">3,660 m / 12,008 ft</span>',
    duration: 'Approx. 3 hours steady climbing (approx. 6 km)',
    maxElev: '<span data-altitude-m="3660">3,660 m / 12,008 ft</span>',
    gainLoss: '+710 m climb ascending above the tree line',
    distTerrain: 'Approx. 6 km · Open alpine crest & grassy switchbacks',
    meals: 'Breakfast, Lunch, Dinner',
    overnight: 'Community Lodge at Khopra Ridge (Khopra Danda)',
    paragraphs: [
      `Today's hike is relatively short in distance but involves a steady, exhilarating ascent as we climb directly toward the crowning viewpoint of the trek: Khopra Ridge (Khopra Danda). Leaving Upper Chistibung after breakfast, the trail leaves the tree line behind, ascending through subalpine grasslands and dwarf rhododendron scrub.`,
      `As you gain elevation, the surrounding horizon expands exponentially. To your west, the immense, ice-encrusted eastern face of Mount Dhaulagiri (<span data-altitude-m="8167">8,167 m</span>) rises like a titanic white wall directly above the depths of the Kali Gandaki Gorge—the deepest canyon on Earth. To the north, Annapurna South (<span data-altitude-m="7219">7,219 m</span>) and the fang-like peak of Fang (Varaharshikhar, <span data-altitude-m="7647">7,647 m</span>) loom staggeringly close. We reach Khopra Ridge (<span data-altitude-m="3660">3,660 m</span>) around midday. After checking into the community lodge and enjoying a warm lunch, spend the afternoon marveling at the 360-degree mountain amphitheater, capturing sunset photography, and hydrating thoroughly for tomorrow's demanding excursion to Khayer Lake.`
    ],
    photos: [
      { src: '../../images/treks/mardi-himal/mardi-himal-annapurna-range-sunrise-14.jpg', alt: 'Ascending grassy ridges above tree line toward Khopra Danda' },
      { src: '../../images/treks/mardi-himal/mardi-himal-machhapuchhre-snowy-panorama-15.jpg', alt: 'Expansive mountain panorama overlooking Kali Gandaki' },
      { src: '../../images/treks/mardi-himal/mardi-himal-trekking-group-mountain-view-10.jpg', alt: 'Trekking team reaching Khopra Ridge viewpoint at 3,660m' },
      { src: '../../images/treks/mardi-himal/mardi-himal-annapurna-range-sunrise-32.jpg', alt: 'Breathtaking sunset colors over Mount Dhaulagiri from Khopra' }
    ]
  },
  {
    dayNum: 8,
    title: 'High-Altitude Alpine Excursion to Sacred Khayer Lake & Return',
    subtitle: 'Khopra Ridge to Khayer Lake – highest point <span data-altitude-m="4700">4,700 m / 15,420 ft</span>',
    duration: '7 to 9 hours strenuous alpine day hike (approx. 15–16 km)',
    maxElev: '<span data-altitude-m="4700">4,700 m / 15,420 ft (Khayer Lake)</span>',
    gainLoss: '+1,040 m high-altitude ascent, -1,040 m descent to ridge',
    distTerrain: 'Approx. 15–16 km roundtrip · Rugged rocky moraine & scree trails',
    meals: 'Breakfast, Packed Trail Lunch, Hot Dinner',
    overnight: 'Community Lodge at Khopra Ridge (3,660 m)',
    paragraphs: [
      `Day 8 is the grand physical and spiritual highlight of the Khopra Ridge Trek. We start before dawn (around 5:30 AM) with headlamps, carrying a daypack with warm thermal layers, windproof shell, sun protection, high-energy snacks, packed lunch, and at least 2 litres of treated drinking water. No permanent lodges exist along this remote high-altitude trail, making self-sufficiency essential.`,
      `The trail climbs steeply along rocky ridgelines and lateral moraines, steadily gaining altitude above the clouds. As we cross 4,000 metres and push toward <span data-altitude-m="4700">4,700 metres</span>, the terrain turns into an austere alpine wonderland of scree, boulders, and hanging glaciers directly beneath the colossal face of Annapurna South. Reaching the shores of sacred Khayer Lake is an unforgettable achievement. The serene turquoise water reflects the icy peaks, and a small Hindu shrine dedicated to Khayer Barahi stands at the lake's edge, draped with prayer flags. Pilgrims visit this holy site during the August full moon, believing the goddess grants wishes for fertility and health. After soaking in the silence and taking photographs, we descend carefully back down the rocky ridges, arriving at Khopra Ridge by mid-afternoon for hot soup, well-earned rest, and celebration.`
    ],
    photos: [
      { src: '../../images/gallery-lake.jpg', alt: 'Sacred turquoise waters of high-altitude Khayer Lake (4,700m)' },
      { src: '../../images/treks/annapurna-base-camp/annapurna-base-camp-snow-covered-mountain-valley-10.jpg', alt: 'Glacial cirque beneath colossal face of Annapurna South' },
      { src: '../../images/treks/annapurna-base-camp/annapurna-base-camp-snowy-mountain-landscape-09.jpg', alt: 'Alpine moraines and rocky trails approaching Khayer Lake' },
      { src: '../../images/treks/annapurna-base-camp/annapurna-base-camp-trekking-group-prayer-flags-snow-02.jpg', alt: 'Khayer Barahi shrine and Buddhist prayer flags in snow' }
    ]
  },
  {
    dayNum: 9,
    title: 'Trek from Khopra Ridge to Swanta Magar Village',
    subtitle: 'Khopra Ridge to Swanta – approximately <span data-altitude-m="2260">2,260 m / 7,415 ft</span>',
    duration: '4 to 5 hours trekking (approx. 8.5 km)',
    maxElev: '<span data-altitude-m="3660">3,660 m</span> descending to <span data-altitude-m="2260">2,260 m</span>',
    gainLoss: '-1,400 m steep descent into agricultural valley',
    distTerrain: 'Approx. 8.5 km · Alpine slopes, bamboo thickets & village trails',
    meals: 'Breakfast, Lunch, Dinner',
    overnight: 'Local Teahouse / Lodge in Swanta',
    paragraphs: [
      `Wake up to enjoy one last memorable sunrise over Dhaulagiri and Nilgiri from Khopra Ridge. After a hot breakfast, we shoulder our packs and begin our descent from the high ridge toward the lower valleys, heading toward the traditional village of Swanta (<span data-altitude-m="2260">2,260 m</span>).`,
      `Today's trail involves a significant loss of elevation (approximately 1,400 metres). The path descends steeply along open grassy ridges before entering dense woodlands of bamboo, oak, and rhododendron. Trekking poles are highly beneficial on this section to cushion the knees and stabilize footing on uneven stone paths. As we lose altitude, the air becomes warmer and the vegetation increasingly lush. We cross a wooden bridge over a rushing river and arrive in the picturesque village of Swanta, inhabited primarily by the Magar ethnic community. Swanta features beautiful terraced potato and barley fields, a local secondary school, and a peaceful, non-commercial atmosphere. Enjoy a relaxing afternoon exploring the village lanes and resting your legs.`
    ],
    photos: [
      { src: '../../images/treks/mardi-himal/mardi-himal-machhapuchhre-sunrise-clouds-26.jpg', alt: 'Morning dawn clouds parting over Mount Dhaulagiri' },
      { src: '../../images/treks/mardi-himal/mardi-himal-trekkers-mountain-view-04.jpg', alt: 'Trekkers descending steep alpine ridge path to Swanta' },
      { src: '../../images/gallery-bridge.jpg', alt: 'Wooden suspension footbridge crossing rushing glacial stream' },
      { src: '../../images/gallery-teahouse.jpg', alt: 'Peaceful traditional stone teahouse in Swanta village' }
    ]
  },
  {
    dayNum: 10,
    title: 'Trek from Swanta to Ghorepani Pass',
    subtitle: 'Swanta to Ghorepani – approximately <span data-altitude-m="2880">2,880 m / 9,449 ft</span>',
    duration: 'Approx. 5 hours trekking (approx. 10 km)',
    maxElev: '<span data-altitude-m="2880">2,880 m / 9,449 ft</span>',
    gainLoss: '+620 m ascent through forest ravines',
    distTerrain: 'Approx. 10 km · River suspension bridges & stone staircases',
    meals: 'Breakfast, Lunch, Dinner',
    overnight: 'Mountain Lodge in Ghorepani',
    paragraphs: [
      `Following a hearty village breakfast in Swanta, begin today's trek by descending through terraced farmlands to a rushing mountain stream. We cross a suspension bridge and pass a traditional watermill used by locals to grind maize and wheat into flour.`,
      `From the river, the trail begins a steady climb through beautiful mixed forests, passing through the small settlement of Chittre. Here, our path rejoins the historic trans-Himalayan trade route that connects Pokhara with Mustang and Tibet. Climbing stone stairways bordered by ancient rhododendron trees, we reach the bustling hill settlement of Ghorepani (<span data-altitude-m="2880">2,880 m</span>) by early afternoon. Ghorepani ("Horse Water") is situated on a major mountain pass with spectacular panoramic views across the Dhaulagiri and Annapurna ranges. Settle into your teahouse, enjoy hot showers and bakery treats, and prepare your warm layers and headlamp for tomorrow morning's pre-dawn excursion to Poon Hill.`
    ],
    photos: [
      { src: '../../images/treks/mardi-himal/mardi-himal-village-mountain-sunrise-28.jpg', alt: 'Terraced farmlands and village orchards below Swanta' },
      { src: '../../images/treks/mardi-himal/mardi-himal-hikers-mountain-view-08.jpg', alt: 'Hikers ascending stone staircases toward Ghorepani' },
      { src: '../../images/treks/mardi-himal/mardi-himal-annapurna-range-morning-light-24.jpg', alt: 'Rhododendron forest canopy along the Ghorepani ridge' },
      { src: '../../images/gallery-peak.jpg', alt: 'Dramatic mountain pass views from Ghorepani village' }
    ]
  },
  {
    dayNum: 11,
    title: 'Poon Hill Dawn Sunrise (3,210 m) & Ridge Traverse to Mohare Hill',
    subtitle: 'Ghorepani to Poon Hill & Mohare Danda – approximately <span data-altitude-m="3300">3,300 m / 10,827 ft</span>',
    duration: '4 to 5 hours total walking (approx. 7 km)',
    maxElev: '<span data-altitude-m="3300">3,300 m</span> (Poon Hill: <span data-altitude-m="3210">3,210 m</span>)',
    gainLoss: 'Dual panoramic viewpoints with rolling ridge traverse',
    distTerrain: 'Approx. 7 km · Sunrise stone stairways & pine-fringed ridgelines',
    meals: 'Breakfast, Lunch, Dinner',
    overnight: 'Community Eco-Lodge at Mohare Hill',
    paragraphs: [
      `A pre-dawn wake-up call at 4:45 AM sets the stage for one of Nepal's most iconic mountain spectacles. With headlamps on, we make the 45-minute uphill walk along stone stairways to the summit of Poon Hill (<span data-altitude-m="3210">3,210 m</span>). As the sun breaks over the eastern horizon, golden light bathes more than 20 major Himalayan peaks, including Dhaulagiri I (<span data-altitude-m="8167">8,167 m</span>), Annapurna I (<span data-altitude-m="8091">8,091 m</span>), Annapurna South, Hiunchuli, Machapuchare, and Manaslu (<span data-altitude-m="8163">8,163 m</span>).`,
      `After capturing photographs and enjoying hot spiced tea from the summit stall, we descend back to Ghorepani for breakfast. Afterward, we embark on a scenic traverse along the ridge crest toward Mohare Hill (<span data-altitude-m="3300">3,300 m</span>). Unlike Poon Hill, Mohare Danda is an eco-community initiative developed under the visionary guidance of local leader Mahabir Pun. The trail passes through quiet oak and rhododendron woodlands along a high mountain spine. Arriving at Mohare Hill in the afternoon, we stay at the community eco-lodge—equipped with solar heating and wireless internet—offering stunning sunset vistas across the deep valleys below.`
    ],
    photos: [
      { src: '../../images/treks/annapurna-base-camp/annapurna-base-camp-annapurna-range-sunrise-03.jpg', alt: 'Golden dawn illumination across Dhaulagiri from Poon Hill' },
      { src: '../../images/treks/annapurna-base-camp/annapurna-base-camp-trekkers-sunrise-viewpoint-08.jpg', alt: 'Trekkers gathered at Poon Hill summit tower (3,210m)' },
      { src: '../../images/treks/mardi-himal/mardi-himal-annapurna-range-sunrise-clouds-22.jpg', alt: 'Scenic ridge traverse through pine woods to Mohare Hill' },
      { src: '../../images/treks/mardi-himal/mardi-himal-high-camp-sunrise-06.jpg', alt: 'Sunset view from community eco-lodge at Mohare Danda' }
    ]
  },
  {
    dayNum: 12,
    title: 'Trek from Mohare Hill to Tikhedhunga via Ulleri Stone Steps',
    subtitle: 'Mohare Hill to Tikhedhunga – approximately <span data-altitude-m="1480">1,480 m / 4,855 ft</span>',
    duration: '6 to 7 hours trekking (approx. 15 km)',
    maxElev: '<span data-altitude-m="3300">3,300 m</span> descending to <span data-altitude-m="1480">1,480 m</span>',
    gainLoss: '-1,820 m extended controlled descent',
    distTerrain: 'Approx. 15 km · Forest trails & famous Ulleri stone staircases',
    meals: 'Breakfast, Lunch, Dinner',
    overnight: 'Mountain Lodge in Tikhedhunga',
    paragraphs: [
      `Begin the morning with breathtaking dawn views from Mohare Hill as the first light strikes the Dhaulagiri and Annapurna massifs. After breakfast at the eco-lodge, we commence our final major descent from the high ridges down into the subtropical river valleys of the lower Annapurna.`,
      `The trail descends through tranquil, mossy forests and pasture clearings, gradually rejoining the main Poon Hill trail near Ulleri. From Ulleri, we navigate the famous 3,280 stone steps that descend steeply toward the roaring Bhurungdi Khola. Take your time, maintain a controlled cadence, and utilize trekking poles to relieve knee pressure. We cross a high suspension bridge over the river and arrive at the welcoming village of Tikhedhunga (<span data-altitude-m="1480">1,480 m</span>). Settle into your lodge, enjoy a refreshing drink, and relax as the high-altitude challenges of the trek come to a close.`
    ],
    photos: [
      { src: '../../images/treks/annapurna-base-camp/annapurna-base-camp-mountain-sunrise-04.jpg', alt: 'Crisp morning panorama over Annapurna valleys from Mohare' },
      { src: '../../images/treks/mardi-himal/mardi-himal-trekker-snowy-trail-31.jpg', alt: 'Descending tranquil mossy forest path below Mohare Danda' },
      { src: '../../images/treks/mardi-himal/mardi-himal-hikers-mountain-view-08.jpg', alt: 'Trekkers descending the famous stone staircases of Ulleri' },
      { src: '../../images/gallery-teahouse.jpg', alt: 'Welcoming riverside teahouse in Tikhedhunga' }
    ]
  },
  {
    dayNum: 13,
    title: 'Trek Tikhedhunga to Nayapul & Private Drive to Pokhara',
    subtitle: 'Tikhedhunga to Pokhara – approximately <span data-altitude-m="822">822 m / 2,697 ft</span>',
    duration: 'Approx. 4 hrs walk + 1.5 hrs private drive (9 km walk + 42 km road)',
    maxElev: '<span data-altitude-m="1480">1,480 m</span> descending to <span data-altitude-m="822">822 m</span>',
    gainLoss: '-658 m gentle river valley descent',
    distTerrain: 'Approx. 9 km walk · Subtropical riverside trail & paved highway',
    meals: 'Breakfast, Lunch, Celebratory Dinner',
    overnight: 'Lakeside Tourist Hotel in Pokhara',
    paragraphs: [
      `Enjoy a relaxed morning breakfast in Tikhedhunga listening to the roar of the Bhurungdi river. Today's walking is gentle and enjoyable as we follow the riverside path downstream through lush subtropical forests, small stone hamlets, and cultivated banana and citrus orchards.`,
      `We pass through Hile and reach the bustling settlement of Birethanti, where we cross the suspension bridge over the Modi Khola and check out at the ACAP permit post. Continuing 30 minutes along the road, we reach Nayapul, marking the official completion of our trekking circuit. Here, our private vehicle awaits to transport our group back to Pokhara (approximately 1.5 hours drive). Upon arriving at your Lakeside hotel, enjoy a long, hot shower, clean clothes, and an afternoon of relaxation. In the evening, gather for a celebratory meal at one of Lakeside’s famous lakeside restaurants, raising a toast to an extraordinary journey across Khopra Ridge and Khayer Lake.`
    ],
    photos: [
      { src: '../../images/gallery-bridge.jpg', alt: 'Suspension bridge crossing over Bhurungdi Khola' },
      { src: '../../images/treks/mardi-himal/mardi-himal-trekking-group-nepal-flag-02.jpg', alt: 'Group celebrating trek completion at Nayapul trailhead' },
      { src: '../../images/treks/mardi-himal/mardi-himal-machhapuchhre-morning-light-27.jpg', alt: 'Peaceful sunset reflection on Phewa Lake in Pokhara' },
      { src: '../../images/treks/mardi-himal/mardi-himal-trekking-group-snowfield-celebration-18.jpg', alt: 'Celebratory group dinner and toast in Pokhara' }
    ]
  },
  {
    dayNum: 14,
    title: 'Scenic Overland Highway Drive from Pokhara to Kathmandu',
    subtitle: 'Pokhara to Kathmandu – approximately <span data-altitude-m="1355">1,355 m / 4,445 ft</span>',
    duration: '6 to 8 hours highway drive (approx. 200 km)',
    maxElev: '<span data-altitude-m="1355">1,355 m / 4,445 ft</span>',
    gainLoss: 'Return highway journey to capital valley',
    distTerrain: 'Paved highway · Marsyangdi & Trishuli river valleys',
    meals: 'Breakfast at hotel, Farewell Dinner in Kathmandu',
    overnight: '3-Star Standard Hotel in Kathmandu',
    paragraphs: [
      `After breakfast at your Pokhara hotel, board our private tourist transport for the return drive to Kathmandu. The route winds through the scenic river valleys of the Marsyangdi and Trishuli, providing one last look at rural Nepal's terraced hills, suspension bridges, and bustling roadside markets.`,
      `We stop en route for tea and lunch at a highway restaurant. Arriving back in Kathmandu in the afternoon, transfer to your hotel. Spend your remaining hours souvenir shopping in Thamel for pashminas, thangkas, and handcrafted singing bowls, or exploring Kathmandu's historic squares. In the evening, join the Namaste Hiking Trek management team for a special farewell dinner to celebrate the successful completion of the Khopra Ridge Trek, receive your trek certificate of completion, and share memories of your time in the Annapurna mountains.`
    ],
    photos: [
      { src: '../../images/hero-himalayas.jpg', alt: 'Scenic mountain highway views across Nepal middle hills' },
      { src: '../../images/treks/mardi-himal/mardi-himal-annapurna-range-sunrise-valley-25.jpg', alt: 'Rushing river valleys along the Prithvi Highway route' },
      { src: '../../images/treks/mardi-himal/mardi-himal-trekking-backpacks-13.jpg', alt: 'Arriving back in Thamel for souvenir shopping' },
      { src: '../../images/treks/mardi-himal/mardi-himal-trekking-group-nepal-flag-07.jpg', alt: 'Farewell celebration and trek completion certificates' }
    ]
  },
  {
    dayNum: 15,
    title: 'Hotel Checkout & Final International Departure from Kathmandu',
    subtitle: 'Kathmandu – Tribhuvan International Airport (<span data-altitude-m="1355">1,355 m</span>)',
    duration: '30 to 45 mins private airport transfer',
    maxElev: '<span data-altitude-m="1355">1,355 m / 4,445 ft</span>',
    gainLoss: 'International departure',
    distTerrain: 'Airport transit · Paved city streets',
    meals: 'Breakfast at hotel',
    overnight: 'None (Flight Departure)',
    paragraphs: [
      `Your 15-day Khopra Ridge Trek adventure draws to a close today. Enjoy breakfast at your hotel and spend any remaining free time packing your luggage and taking in final views of Kathmandu.`,
      `Depending on your international flight departure schedule, our airport representative and private driver will meet you at your hotel lobby approximately 3 hours prior to takeoff. You will be transferred to Tribhuvan International Airport (TIA) for your flight home, carrying with you lifelong memories, stunning photographs, and the deep satisfaction of having stood at Khopra Ridge and sacred Khayer Lake under the shadow of the mighty Himalayas. Namaste, and safe travels!`
    ],
    photos: [
      { src: '../../images/treks/mardi-himal/mardi-himal-trekking-group-mountain-view-01.jpg', alt: 'Lifelong memories from the Khopra Ridge expedition' },
      { src: '../../images/treks/annapurna-base-camp/annapurna-base-camp-trekkers-mountain-viewpoint-05.jpg', alt: 'Khopra Danda high mountain viewpoint memories' },
      { src: '../../images/treks/mardi-himal/mardi-himal-machhapuchhre-sunrise-clouds-26.jpg', alt: 'Annapurna mountain skyline from Kathmandu flight' },
      { src: '../../images/gallery-peak.jpg', alt: 'Majestic Himalayan snow peaks bidding farewell' }
    ]
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

// Build 15 Premium Itinerary Cards HTML
let cardsHtml = '';
itineraryDays.forEach(item => {
  const isFirst = item.dayNum === 1;
  const activeClass = isFirst ? ' active' : '';
  const dayStr = item.dayNum < 10 ? '0' + item.dayNum : item.dayNum;

  let photosHtml = '';
  item.photos.forEach(img => {
    photosHtml += `                      <div class="itinerary-photo-wrapper">
                        <img loading="lazy" src="${img.src}" alt="${img.alt}">
                      </div>\n`;
  });

  let descHtml = '';
  item.paragraphs.forEach(p => {
    descHtml += `                    <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin: 0 0 16px 0;">${p}</p>\n`;
  });

  cardsHtml += `              <!-- Day ${dayStr} -->
              <div class="itinerary-card${activeClass}" data-day="${item.dayNum}">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day ${item.dayNum}:</span> ${item.title}
                    </h4>
                    <p class="itinerary-day-subtitle-new">
                      ${item.subtitle}
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

                <div class="itinerary-content"${isFirst ? ' style="max-height: 2500px;"' : ''}>
                  <div class="itinerary-content-inner">
                    <div class="itinerary-metrics-list">
                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>Duration: ${item.duration}</span>
                      </div>
                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polygon points="12 2 2 22 22 22"></polygon>
                        </svg>
                        <span>Max Elevation: ${item.maxElev}</span>
                      </div>
                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <line x1="12" y1="19" x2="12" y2="5"></line>
                          <polyline points="5 12 12 5 19 12"></polyline>
                        </svg>
                        <span>Elevation Gain/Loss: ${item.gainLoss}</span>
                      </div>
                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                        </svg>
                        <span>Distance & Terrain: ${item.distTerrain}</span>
                      </div>
                    </div>

                    <div class="itinerary-meta-box">
                      <div class="itinerary-meta-box-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                        </svg>
                        <span>Meals: ${item.meals}</span>
                      </div>
                      <div class="itinerary-meta-box-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                          <circle cx="12" cy="9" r="2.5"></circle>
                        </svg>
                        <span>Overnight: ${item.overnight}</span>
                      </div>
                    </div>

                    <div class="itinerary-description">
${descHtml}                    </div>

                    <div class="itinerary-photos-grid">
${photosHtml}                    </div>
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

            <!-- Premium Itinerary Controls Header -->
            <div class="itinerary-controls-row" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
              <div class="itinerary-controls-left" style="display: flex; gap: 10px; flex-wrap: wrap;">
                <span class="pill pill-forest" style="margin-bottom: 0;">15 Days Circuit</span>
                <span class="pill pill-teal" style="margin-bottom: 0;">Max Alt: 4,700 m (Khayer Lake)</span>
                <span class="pill pill-copper" style="margin-bottom: 0;">Ridge View: 3,660 m</span>
              </div>
              <button id="toggle-all-itinerary" class="itinerary-expand-all-btn" style="background: none; border: 1px solid var(--color-neutral-200); padding: 8px 18px; border-radius: 6px; font-size: 0.88rem; font-weight: 600; color: var(--color-neutral-700); cursor: pointer; transition: all 0.2s; display: inline-flex; align-items: center; gap: 6px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="7 13 12 18 17 13"></polyline>
                  <polyline points="7 6 12 11 17 6"></polyline>
                </svg>
                Expand All Days
              </button>
            </div>

            <!-- 15 Premium Itinerary Accordion Cards -->
            <div class="itinerary-timeline">
${cardsHtml}            </div>

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
console.log('SUCCESS: Upgraded Section 2 Itinerary Accordions completed with 100% tag balance!');
