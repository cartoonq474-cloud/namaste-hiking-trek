const fs = require('fs');

const pStyle = `style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;"`;
const h3SubtitleStyle = `class="trek-overview-subtitle" style="font-size: 1.4rem; color: var(--color-primary-navy); font-weight: 700; margin-top: 32px; margin-bottom: 12px; line-height: 1.35;"`;

let html = `        <!-- SECTION 1: OVERVIEW -->
        <section id="section-overview" class="trek-detail-section">
          <h2 class="trek-section-title">Trek Overview</h2>

          <p ${pStyle}>
            The Everest View Trek is a rewarding short Himalayan journey through the heart of Nepal's Khumbu region, taking you from the mountain airstrip of Lukla through pine-scented river gorges, vibrant Sherpa settlements, Buddhist monasteries, and some of the most celebrated mountain viewpoints in the world. Designed specifically for travelers who want to experience the grandeur of Mount Everest without the strenuous physical commitment and extreme altitude of the 14-day Base Camp expedition, this 7-day route culminates at the iconic Hotel Everest View at <span data-altitude-m="3880">3,880 m (12,729 ft)</span>.
          </p>
          <p ${pStyle}>
            While the summit of Mount Everest stands at an imposing <span data-altitude-m="8848">8,848.86 m</span>, the perspective from the high ridge above Namche Bazaar is widely regarded as one of the finest in the Himalayas. From the panoramic terrace of Hotel Everest View, Everest, Lhotse (<span data-altitude-m="8516">8,516 m</span>), Nuptse (<span data-altitude-m="7861">7,861 m</span>), Thamserku (<span data-altitude-m="6623">6,623 m</span>), and the majestic soaring spire of Ama Dablam (<span data-altitude-m="6812">6,812 m</span>) form an uninterrupted high-altitude amphitheater. In many ways, this vantage point offers a broader and more photogenic view of Everest than Base Camp itself, where the summit is often obscured by Nuptse's western ridge.
          </p>
          <p ${pStyle}>
            The journey is as much about cultural immersion as it is about mountain landscapes. You follow the Dudh Koshi River Valley across high steel suspension bridges draped with colorful prayer flags, enter Sagarmatha National Park (a UNESCO World Heritage Site), walk past sacred Mani walls and chortens, and spend nights in authentic, locally operated Sherpa mountain teahouses. In Namche Bazaar—the historic trading hub and Sherpa capital—and the traditional twin villages of Khumjung and Khunde, the trail becomes a living encounter with Sherpa heritage, mountaineering lore, and warm Himalayan hospitality.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
            Our 7-day itinerary is intentionally paced to maximize acclimatization safety and travel comfort. By scheduling three consecutive nights in Namche Bazaar at <span data-altitude-m="3440">3,440 m</span>, our route strictly follows the proven mountaineering rule of "climb high, sleep low." You undertake an active day hike up to the Everest View Hotel and traditional villages before returning to sleep at a stable altitude, providing an unhurried, luxurious introduction to the world's highest mountains.
          </p>

          <!-- Subsection 1: What the Everest View Trek is really like? -->
          <h3 ${h3SubtitleStyle}>
            What the Everest View Trek is really like?
          </h3>
          <p ${pStyle}>
            Expect approximately 3 to 6 hours of walking on most trekking days, combining gradual riverside paths, stone staircases, thrilling suspension bridges, and sustained uphill ascents. The terrain does not involve technical climbing, glacier walking, or ropes, but the elevation gain requires reasonable cardiovascular endurance. The physical highlight is the steady 2.5-hour ascent from the Hillary Suspension Bridge through pine forests up to Namche Bazaar, where you gain approximately 600 vertical meters.
          </p>
          <p ${pStyle}>
            You do not need to be an experienced mountaineer or marathon runner to complete this trek. Anyone in good general health who enjoys regular walking, hill hiking, or weekend fitness training can comfortably complete the route. Because our maximum sleeping altitude is capped at 3,440 m in Namche Bazaar, the risk of severe Acute Mountain Sickness (AMS) is significantly lower than on routes that sleep above 4,500 m or 5,000 m.
          </p>
          <p ${pStyle}>
            Accommodation on this route is among the finest in the Khumbu region. Because Lukla, Phakding, and Namche Bazaar are situated in the lower valley with better logistics, lodges feature solid twin bedrooms, comfortable mattresses, attached private bathrooms in many properties, gas-heated hot showers, and extensive food menus with fresh bakery treats and espresso.
          </p>

          <!-- Subsection 2: From Lukla to Namche Bazaar and Hotel Everest View -->
          <h3 ${h3SubtitleStyle}>
            From Lukla to Namche Bazaar and Hotel Everest View
          </h3>
          <p ${pStyle}>
            The adventure begins with an unforgettable mountain flight into Tenzing-Hillary Airport in Lukla (<span data-altitude-m="2860">2,860 m</span>), the world-famous gateway to the Khumbu. From Lukla, the trail descends gently through farmland, mani stones, and small Sherpa settlements along the Dudh Koshi to Phakding (<span data-altitude-m="2610">2,610 m</span>), providing a relaxed first day on the trail.
          </p>
          <p ${pStyle}>
            The second day follows the river gorge through Monjo, where permits are verified at the Sagarmatha National Park entrance gate. Crossing the breathtaking Hillary Suspension Bridge marks the start of the climb through pine forest to Namche Bazaar (<span data-altitude-m="3440">3,440 m</span>). Built into a natural mountain bowl, Namche greets you with multi-story lodges, gear shops, German bakeries, and Tibetan craft markets.
          </p>
          <p ${pStyle}>
            The centerpiece excursion takes you above Namche, past the Syangboche airstrip to Hotel Everest View (<span data-altitude-m="3880">3,880 m</span>). Here, you can sit on the outdoor terrace with a warm cup of coffee and take in an unobstructed, world-class panorama of Everest, Lhotse, and Ama Dablam. The trail then loops through the peaceful agricultural village of Khumjung (<span data-altitude-m="3790">3,790 m</span>) before descending back to Namche, concluding with a relaxed two-day return walk down to Lukla for your flight back to Kathmandu.
          </p>

          <!-- Subsection 3: More than a mountain trek -->
          <h3 ${h3SubtitleStyle}>
            More than a mountain trek: Sherpa Heritage & Sacred Khumbu
          </h3>
          <p ${pStyle}>
            What makes the Everest View Trek truly special is that the mountain scenery is inseparable from the people and culture of the Khumbu. This valley is the sacred homeland of the Sherpa community, who migrated from eastern Tibet over five centuries ago. Their Buddhist spiritual connection to the mountains permeates every village and trail.
          </p>
          <p ${pStyle}>
            Along the route, you will walk past intricately carved Mani walls, chortens, and spinning bronze prayer wheels. In Khumjung, you visit the historic village monastery, which preserves a legendary relic attributed to the yeti, and see the Khumjung Hillary School founded by Sir Edmund Hillary in 1961. In Khunde, you witness the Himalayan Trust hospital that continues to provide vital healthcare to the Sherpa community.
          </p>
          <p ${pStyle}>
            The natural environment within Sagarmatha National Park is equally captivating. You hike through pine, fir, and rhododendron forests that bloom with pink and crimson flowers in spring. Lucky trekkers often spot Himalayan wildlife, including the colorful Danphe (Himalayan Monal, Nepal's national bird), musk deer, and herds of Himalayan Thar grazing on steep cliff faces.
          </p>

          <!-- Subsection 4: Is the Everest View Trek right for you? -->
          <h3 ${h3SubtitleStyle}>
            Is the Everest View Trek right for you?
          </h3>
          <p ${pStyle}>
            The Everest View Trek is ideal for travelers who want to experience the majesty of the Everest region but have limited holiday time or prefer a lower-altitude, highly comfortable trekking schedule.
          </p>
          <p ${pStyle}>
            It is a premier choice for <strong>first-time Himalayan hikers</strong> who want to test their mountain legs on well-maintained trails. It is equally suited for <strong>families with children aged 8 and older</strong>, <strong>active seniors</strong>, <strong>couples</strong>, and <strong>photographers</strong> who wish to spend leisurely mornings capturing sunrise light on Mount Everest without trekking 8 hours a day in sub-zero alpine conditions.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 30px; line-height: 1.7;">
            With full logistical support from Namaste Hiking Trek—including round-trip Lukla flights, experienced licensed Sherpa guides, professional porters, private teahouse rooms, all permits, and comprehensive safety management—you can focus entirely on enjoying one of the world's greatest mountain journeys.
          </p>

          <!-- 1B: Distinct Highlights Section -->
          <div class="ebc-highlights-section">
            <div class="ebc-highlights-header">
              <h2 class="ebc-highlights-title">Everest View Trek Highlights</h2>
            </div>
            
            <p class="ebc-highlights-intro-p">
              The Everest View Trek brings together the high Himalayan landscapes of Sagarmatha National Park, vibrant Sherpa villages, ancient Buddhist monasteries, thrilling suspension bridges, and iconic viewpoints overlooking Mount Everest without demanding extreme altitudes.
            </p>
            <p class="ebc-highlights-intro-p">
              From the first steps out of Lukla to the panoramic terrace of Hotel Everest View, each section of the trail has its own distinct character. These are the defining experiences of the 7-day Everest View journey.
            </p>
            
            <div class="ebc-highlights-grid">
<!-- Highlight 1: Scenic Flight to Lukla -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Scenic Mountain Flight into Lukla (<span data-altitude-m="2860">2,860 m</span>)</h3>
                </div>
                <p class="ebc-highlight-body">
                  The Everest View adventure begins with an unforgettable mountain flight into Tenzing-Hillary Airport in Lukla (<span data-altitude-m="2860">2,860 m / 9,383 ft</span>), the celebrated gateway to the Khumbu. Operating out of Kathmandu or Ramechhap/Manthali, the twin-otter aircraft flies parallel to the snow-crested Himalayan range, treating passengers to breathtaking aerial views of deep green river canyons, tiered terrace farms, and soaring glaciated peaks. Touching down on Lukla's dramatic short-sloping runway carved into the hillside is a landmark mountaineering experience in itself. After deplaning into the crisp, cool Himalayan air, you meet your dedicated Sherpa trekking crew, complete a final daypack check, and begin the gentle introductory descent along the Dudh Koshi valley. Because mountain flights are strictly weather-dependent, building buffer flexibility into your overall Nepal itinerary ensures a completely relaxed, stress-free start.
                </p>
              </div>

              <!-- Highlight 2: Trek Along the Dudh Koshi River -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Trek Along the Glacial Dudh Koshi River Valley</h3>
                </div>
                <p class="ebc-highlight-body">
                  From Lukla down to Phakding (<span data-altitude-m="2610">2,610 m / 8,563 ft</span>) and onward toward Monjo, the trail traces the rushing, milky-white waters of the glacial Dudh Koshi (&quot;Milk River&quot;). Fed directly by the melting glaciers of the high Himalayas, the roaring river creates a natural corridor through aromatic forests of blue pine, rhododendron, and Himalayan birch. Trekkers walk past traditional stone-walled homesteads, hand-carved Buddhist mani stones engraved with sacred mantras, and terraced plots of mountain potatoes and barley. The trail features a gentle rhythm of undulating riverside paths, stone-paved staircases, and quiet hamlets like Ghat and Toktok. This introductory terrain offers the perfect opportunity to dial in your walking pace, test your footwear and trekking poles, and absorb the serene, unhurried rhythm of mountain life.
                </p>
              </div>

              <!-- Highlight 3: Suspension Bridges and Mountain Trails -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18h20"></path><path d="M4 18V9"></path><path d="M20 18V9"></path><path d="M4 9c4 4 12 4 16 0"></path><path d="M10 12v6"></path><path d="M14 12v6"></path></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Cross Thrilling High Suspension Bridges</h3>
                </div>
                <p class="ebc-highlight-body">
                  Suspension bridges spanning dizzying river gorges are among the most exhilarating and iconic trademarks of the Everest region. Throughout the lower valley, you cross multiple high-tensile steel cable bridges strung dramatically above the roaring rapids, adorned with thousands of fluttering Tibetan prayer flags carrying blessings on the wind. The most famous is the soaring Hillary Suspension Bridge, suspended over 100 meters above the canyon floor just before the climb to Namche Bazaar. Crossing these bridges is thrilling yet completely secure. Our guides practice strict mountain trail etiquette: trekkers always give right-of-way to approaching yak, dzo, and mule pack trains by moving promptly to the uphill mountain wall side—never standing near the outer edge—ensuring safe, seamless passage across every span.
                </p>
              </div>

              <!-- Highlight 4: Enter Sagarmatha National Park -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 22h20L12 2z"></path><path d="M12 18h.01"></path></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Enter Sagarmatha National Park (UNESCO Site)</h3>
                </div>
                <p class="ebc-highlight-body">
                  Just past the tranquil riverside village of Monjo (<span data-altitude-m="2835">2,835 m</span>), you pass through the official entrance gate and checkpoint of Sagarmatha National Park. Inscribed as a UNESCO World Heritage Site in 1979 for its outstanding universal natural value, this protected 1,148-square-kilometer sanctuary encompasses dramatic ecological zones ranging from temperate pine forests to the highest glaciated summits on Earth. Here, our guides register your Sagarmatha National Park Entry Permit and local Khumbu Pasang Lhamu Rural Municipality card. The park enforces strict environmental regulations to safeguard fragile alpine ecosystems, preserve native wildlife habitats, and protect rare Himalayan flora. Walking these pristine trails reinforces Namaste Hiking Trek's firm commitment to Leave No Trace ethics and eco-conscious mountain stewardship.
                </p>
              </div>

              <!-- Highlight 5: Namche Bazaar -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Namche Bazaar: Vibrant Sherpa Capital (<span data-altitude-m="3440">3,440 m</span>)</h3>
                </div>
                <p class="ebc-highlight-body">
                  Nestled within a natural horseshoe-shaped amphitheatre against the steep rocky slopes of Kongde Ri, Namche Bazaar (<span data-altitude-m="3440">3,440 m / 11,286 ft</span>) is the legendary historic capital, trading crossroads, and cultural heart of the Khumbu Sherpa. Emerging from the forested trail onto Namche's stone-paved steps reveals a vibrant mountain settlement like no other. Multistory stone lodges, German bakeries with freshly baked apple strudel, artisan coffee bars, gear shops, and handicraft boutiques line the narrow winding streets. On weekends, regional traders gather at the lively Saturday market. Namche combines traditional Sherpa hospitality with surprisingly modern comforts, including reliable Wi-Fi, laundry facilities, gear rental shops, and ATMs. It serves as our central base camp for three nights, providing warmth, community, and unforgettable mountain charm.
                </p>
              </div>

              <!-- Highlight 6: Acclimatization in Namche Bazaar -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Three Nights in Namche for Optimal Acclimatization</h3>
                </div>
                <p class="ebc-highlight-body">
                  Acclimatization is the single most critical factor in high-altitude trekking success and comfort. While basic operators rush trekkers through, our Everest View itinerary features three consecutive nights based in Namche Bazaar (<span data-altitude-m="3440">3,440 m</span>). This provides an unhurried, scientifically proven acclimatization profile based on the golden mountaineering principle of &quot;climb high, sleep low.&quot; On Days 3 and 4, we take active panoramic day hikes up to Syangboche (<span data-altitude-m="3780">3,780 m</span>) and Hotel Everest View (<span data-altitude-m="3880">3,880 m</span>). Gaining altitude during the day naturally stimulates your body to produce oxygen-carrying red blood cells, while returning to Namche's richer atmospheric pressure for sleep allows deep physiological recovery. This ensures exceptional energy levels, peaceful sleep, and minimal risk of altitude-related headaches or discomfort.
                </p>
              </div>

              <!-- Highlight 7: Panoramic Views from Hotel Everest View -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Terrace Panoramas from Hotel Everest View (<span data-altitude-m="3880">3,880 m</span>)</h3>
                </div>
                <p class="ebc-highlight-body">
                  The crown jewel and defining highlight of the entire trek is the memorable morning excursion to the world-renowned Hotel Everest View (<span data-altitude-m="3880">3,880 m / 12,730 ft</span>). Officially listed in the Guinness Book of World Records as one of the highest-placed luxury hotels on the planet, it sits atop a panoramic ridge above Syangboche. Relaxing on the hotel's sun-drenched outdoor stone terrace with a cup of hot French-press coffee or fragrant Himalayan herbal tea is an unparalleled sensory experience. Directly across the valley, Mount Everest, Lhotse, Nuptse, and the breathtaking spire of Ama Dablam dominate the skyline in crystal-clear high-definition detail. The setting offers an extraordinary opportunity to photograph and savor the majestic scale of the Himalayas in total comfort before continuing your scenic ridge walk.
                </p>
              </div>

              <!-- Highlight 8: Views of Mount Everest and Himalayan Giants -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Spectacular Vistas of Mount Everest &amp; Himalayan Giants</h3>
                </div>
                <p class="ebc-highlight-body">
                  While the Everest Base Camp trek requires trekking for days into a deep glacial canyon where Everest's summit is hidden behind Nuptse, the Everest View Trek viewpoints above Namche provide arguably the finest, most comprehensive mountain panoramas in Nepal. In a single 360-degree sweep, you can view the wind-whipped apex of Mount Everest (<span data-altitude-m="8848">8,848.86 m</span>), the imposing South Face of Lhotse (<span data-altitude-m="8516">8,516 m</span>), Nuptse (<span data-altitude-m="7861">7,861 m</span>), and the world's most photogenic mountain, Ama Dablam (<span data-altitude-m="6812">6,812 m</span>), rising like an sculpted ice obelisk. To the south, Thamserku (<span data-altitude-m="6608">6,608 m</span>) and Kusum Kanguru (<span data-altitude-m="6367">6,367 m</span>) display jagged fluted ice ridges, while the formidable wall of Kongde Ri (<span data-altitude-m="6187">6,187 m</span>) towers directly behind.
                </p>
                <div class="ebc-peak-tags">
                  <span class="ebc-peak-tag">Mount Everest (8,848.86 m)</span>
                  <span class="ebc-peak-tag">Lhotse (8,516 m)</span>
                  <span class="ebc-peak-tag">Nuptse (7,861 m)</span>
                  <span class="ebc-peak-tag">Ama Dablam (6,812 m)</span>
                  <span class="ebc-peak-tag">Thamserku (6,608 m)</span>
                  <span class="ebc-peak-tag">Kongde Ri (6,187 m)</span>
                  <span class="ebc-peak-tag">Kusum Kanguru (6,367 m)</span>
                  <span class="ebc-peak-tag">Taboche (6,367 m)</span>
            </div>

            const fs = require('fs');

const pStyle = `style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;"`;
const h3SubtitleStyle = `class="trek-overview-subtitle" style="font-size: 1.4rem; color: var(--color-primary-navy); font-weight: 700; margin-top: 32px; margin-bottom: 12px; line-height: 1.35;"`;

let html = `        <!-- SECTION 1: OVERVIEW -->
        <section id="section-overview" class="trek-detail-section">
          <h2 class="trek-section-title">Trek Overview</h2>

          <p ${pStyle}>
            The Everest View Trek is a rewarding short Himalayan journey through the heart of Nepal's Khumbu region, taking you from the mountain airstrip of Lukla through pine-scented river gorges, vibrant Sherpa settlements, Buddhist monasteries, and some of the most celebrated mountain viewpoints in the world. Designed specifically for travelers who want to experience the grandeur of Mount Everest without the strenuous physical commitment and extreme altitude of the 14-day Base Camp expedition, this 7-day route culminates at the iconic Hotel Everest View at <span data-altitude-m="3880">3,880 m (12,729 ft)</span>.
          </p>
          <p ${pStyle}>
            While the summit of Mount Everest stands at an imposing <span data-altitude-m="8848">8,848.86 m</span>, the perspective from the high ridge above Namche Bazaar is widely regarded as one of the finest in the Himalayas. From the panoramic terrace of Hotel Everest View, Everest, Lhotse (<span data-altitude-m="8516">8,516 m</span>), Nuptse (<span data-altitude-m="7861">7,861 m</span>), Thamserku (<span data-altitude-m="6623">6,623 m</span>), and the majestic soaring spire of Ama Dablam (<span data-altitude-m="6812">6,812 m</span>) form an uninterrupted high-altitude amphitheater. In many ways, this vantage point offers a broader and more photogenic view of Everest than Base Camp itself, where the summit is often obscured by Nuptse's western ridge.
          </p>
          <p ${pStyle}>
            The journey is as much about cultural immersion as it is about mountain landscapes. You follow the Dudh Koshi River Valley across high steel suspension bridges draped with colorful prayer flags, enter Sagarmatha National Park (a UNESCO World Heritage Site), walk past sacred Mani walls and chortens, and spend nights in authentic, locally operated Sherpa mountain teahouses. In Namche Bazaar—the historic trading hub and Sherpa capital—and the traditional twin villages of Khumjung and Khunde, the trail becomes a living encounter with Sherpa heritage, mountaineering lore, and warm Himalayan hospitality.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
            Our 7-day itinerary is intentionally paced to maximize acclimatization safety and travel comfort. By scheduling three consecutive nights in Namche Bazaar at <span data-altitude-m="3440">3,440 m</span>, our route strictly follows the proven mountaineering rule of "climb high, sleep low." You undertake an active day hike up to the Everest View Hotel and traditional villages before returning to sleep at a stable altitude, providing an unhurried, luxurious introduction to the world's highest mountains.
          </p>

          <!-- Subsection 1: What the Everest View Trek is really like? -->
          <h3 ${h3SubtitleStyle}>
            What the Everest View Trek is really like?
          </h3>
          <p ${pStyle}>
            Expect approximately 3 to 6 hours of walking on most trekking days, combining gradual riverside paths, stone staircases, thrilling suspension bridges, and sustained uphill ascents. The terrain does not involve technical climbing, glacier walking, or ropes, but the elevation gain requires reasonable cardiovascular endurance. The physical highlight is the steady 2.5-hour ascent from the Hillary Suspension Bridge through pine forests up to Namche Bazaar, where you gain approximately 600 vertical meters.
          </p>
          <p ${pStyle}>
            You do not need to be an experienced mountaineer or marathon runner to complete this trek. Anyone in good general health who enjoys regular walking, hill hiking, or weekend fitness training can comfortably complete the route. Because our maximum sleeping altitude is capped at 3,440 m in Namche Bazaar, the risk of severe Acute Mountain Sickness (AMS) is significantly lower than on routes that sleep above 4,500 m or 5,000 m.
          </p>
          <p ${pStyle}>
            Accommodation on this route is among the finest in the Khumbu region. Because Lukla, Phakding, and Namche Bazaar are situated in the lower valley with better logistics, lodges feature solid twin bedrooms, comfortable mattresses, attached private bathrooms in many properties, gas-heated hot showers, and extensive food menus with fresh bakery treats and espresso.
          </p>

          <!-- Subsection 2: From Lukla to Namche Bazaar and Hotel Everest View -->
          <h3 ${h3SubtitleStyle}>
            From Lukla to Namche Bazaar and Hotel Everest View
          </h3>
          <p ${pStyle}>
            The adventure begins with an unforgettable mountain flight into Tenzing-Hillary Airport in Lukla (<span data-altitude-m="2860">2,860 m</span>), the world-famous gateway to the Khumbu. From Lukla, the trail descends gently through farmland, mani stones, and small Sherpa settlements along the Dudh Koshi to Phakding (<span data-altitude-m="2610">2,610 m</span>), providing a relaxed first day on the trail.
          </p>
          <p ${pStyle}>
            The second day follows the river gorge through Monjo, where permits are verified at the Sagarmatha National Park entrance gate. Crossing the breathtaking Hillary Suspension Bridge marks the start of the climb through pine forest to Namche Bazaar (<span data-altitude-m="3440">3,440 m</span>). Built into a natural mountain bowl, Namche greets you with multi-story lodges, gear shops, German bakeries, and Tibetan craft markets.
          </p>
          <p ${pStyle}>
            The centerpiece excursion takes you above Namche, past the Syangboche airstrip to Hotel Everest View (<span data-altitude-m="3880">3,880 m</span>). Here, you can sit on the outdoor terrace with a warm cup of coffee and take in an unobstructed, world-class panorama of Everest, Lhotse, and Ama Dablam. The trail then loops through the peaceful agricultural village of Khumjung (<span data-altitude-m="3790">3,790 m</span>) before descending back to Namche, concluding with a relaxed two-day return walk down to Lukla for your flight back to Kathmandu.
          </p>

          <!-- Subsection 3: More than a mountain trek -->
          <h3 ${h3SubtitleStyle}>
            More than a mountain trek: Sherpa Heritage & Sacred Khumbu
          </h3>
          <p ${pStyle}>
            What makes the Everest View Trek truly special is that the mountain scenery is inseparable from the people and culture of the Khumbu. This valley is the sacred homeland of the Sherpa community, who migrated from eastern Tibet over five centuries ago. Their Buddhist spiritual connection to the mountains permeates every village and trail.
          </p>
          <p ${pStyle}>
            Along the route, you will walk past intricately carved Mani walls, chortens, and spinning bronze prayer wheels. In Khumjung, you visit the historic village monastery, which preserves a legendary relic attributed to the yeti, and see the Khumjung Hillary School founded by Sir Edmund Hillary in 1961. In Khunde, you witness the Himalayan Trust hospital that continues to provide vital healthcare to the Sherpa community.
          </p>
          <p ${pStyle}>
            The natural environment within Sagarmatha National Park is equally captivating. You hike through pine, fir, and rhododendron forests that bloom with pink and crimson flowers in spring. Lucky trekkers often spot Himalayan wildlife, including the colorful Danphe (Himalayan Monal, Nepal's national bird), musk deer, and herds of Himalayan Thar grazing on steep cliff faces.
          </p>

          <!-- Subsection 4: Is the Everest View Trek right for you? -->
          <h3 ${h3SubtitleStyle}>
            Is the Everest View Trek right for you?
          </h3>
          <p ${pStyle}>
            The Everest View Trek is ideal for travelers who want to experience the majesty of the Everest region but have limited holiday time or prefer a lower-altitude, highly comfortable trekking schedule.
          </p>
          <p ${pStyle}>
            It is a premier choice for <strong>first-time Himalayan hikers</strong> who want to test their mountain legs on well-maintained trails. It is equally suited for <strong>families with children aged 8 and older</strong>, <strong>active seniors</strong>, <strong>couples</strong>, and <strong>photographers</strong> who wish to spend leisurely mornings capturing sunrise light on Mount Everest without trekking 8 hours a day in sub-zero alpine conditions.
          </p>
          <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 30px; line-height: 1.7;">
            With full logistical support from Namaste Hiking Trek—including round-trip Lukla flights, experienced licensed Sherpa guides, professional porters, private teahouse rooms, all permits, and comprehensive safety management—you can focus entirely on enjoying one of the world's greatest mountain journeys.
          </p>

          <!-- 1B: Distinct Highlights Section -->
          <div class="ebc-highlights-section">
            <div class="ebc-highlights-header">
              <h2 class="ebc-highlights-title">Everest View Trek Highlights</h2>
            </div>
            
            <p class="ebc-highlights-intro-p">
              The Everest View Trek brings together the high Himalayan landscapes of Sagarmatha National Park, vibrant Sherpa villages, ancient Buddhist monasteries, thrilling suspension bridges, and iconic viewpoints overlooking Mount Everest without demanding extreme altitudes.
            </p>
            <p class="ebc-highlights-intro-p">
              From the first steps out of Lukla to the panoramic terrace of Hotel Everest View, each section of the trail has its own distinct character. These are the defining experiences of the 7-day Everest View journey.
            </p>
            
            <div class="ebc-highlights-grid">
              <!-- Highlight 1: Scenic Flight to Lukla -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Scenic Flight to Lukla (<span data-altitude-m="2860">2,860 m</span>)</h3>
                </div>
                <p class="ebc-highlight-body">
                  The adventure begins with an exhilarating mountain flight into Tenzing-Hillary Airport in Lukla, offering sweeping aerial panoramas of terraced green hills, deep valleys, and snow-capped Himalayan ridges.
                </p>
              </div>

              <!-- Highlight 2: Trek Along the Dudh Koshi River -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Trek Along the Glacial Dudh Koshi River</h3>
                </div>
                <p class="ebc-highlight-body">
                  Follow the milky-white glacial river through fragrant pine and rhododendron forests, stone-walled farmland, and quaint Sherpa hamlets. The soothing sound of rushing water accompanies your first days on the trail.
                </p>
              </div>

              <!-- Highlight 3: Suspension Bridges and Mountain Trails -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18h20"></path><path d="M4 18V9"></path><path d="M20 18V9"></path><path d="M4 9c4 4 12 4 16 0"></path><path d="M10 12v6"></path><path d="M14 12v6"></path></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Cross Thrilling High Suspension Bridges</h3>
                </div>
                <p class="ebc-highlight-body">
                  Cross steel suspension bridges draped with colorful Tibetan prayer flags high above river chasms, culminating in the dizzying crossing of the famous Hillary Bridge before the climb to Namche Bazaar.
                </p>
              </div>

              <!-- Highlight 4: Enter Sagarmatha National Park -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 22h20L12 2z"></path><path d="M12 18h.01"></path></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Enter Sagarmatha National Park (UNESCO Site)</h3>
                </div>
                <p class="ebc-highlight-body">
                  Pass through the Monjo checkpoint into Sagarmatha National Park, a globally recognized UNESCO World Heritage sanctuary dedicated to protecting the rare flora, wildlife, and cultural landscape of the Everest region.
                </p>
              </div>

              <!-- Highlight 5: Namche Bazaar -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Namche Bazaar: Vibrant Sherpa Capital (<span data-altitude-m="3440">3,440 m</span>)</h3>
                </div>
                <p class="ebc-highlight-body">
                  Arrive at the Khumbu's famous horseshoe-shaped trading hub. Nestled against steep mountain walls, Namche features bustling Saturday markets, artisanal craft shops, modern bakeries, cafes, and sweeping valley vistas.
                </p>
              </div>

              <!-- Highlight 6: Acclimatization in Namche Bazaar -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Three Nights in Namche for Optimal Acclimatization</h3>
                </div>
                <p class="ebc-highlight-body">
                  Rather than rushing higher, our itinerary dedicates three consecutive nights in Namche Bazaar. This allows your body to adjust naturally to 3,440 m while enjoying relaxed day hikes, museums, and local bakery treats.
                </p>
              </div>

              <!-- Highlight 7: Panoramic Views from Hotel Everest View -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Terrace Panoramas from Hotel Everest View (<span data-altitude-m="3880">3,880 m</span>)</h3>
                </div>
                <p class="ebc-highlight-body">
                  The defining highlight of the trek: enjoy hot coffee or herbal tea on the sunlit terrace of one of the highest-altitude luxury hotels in the world, with Mount Everest and Ama Dablam dominating the skyline directly in front of you.
                </p>
              </div>

              <!-- Highlight 8: Views of Mount Everest and Himalayan Giants -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Spectacular Vistas of Mount Everest &amp; Himalayan Giants</h3>
                </div>
                <p class="ebc-highlight-body">
                  Experience unobstructed, world-class panoramas of the planet's most iconic summits from changing viewpoints throughout the Syangboche and Khumjung ridges:
                </p>
                <div class="ebc-peak-tags">
                  <div class="ebc-peak-tag">Mount Everest <span data-altitude-m="8848">8,848.86 m</span></div>
                  <div class="ebc-peak-tag">Lhotse <span data-altitude-m="8516">8,516 m</span></div>
                  <div class="ebc-peak-tag">Nuptse <span data-altitude-m="7861">7,861 m</span></div>
                  <div class="ebc-peak-tag">Ama Dablam <span data-altitude-m="6812">6,812 m</span></div>
                  <div class="ebc-peak-tag">Thamserku <span data-altitude-m="6623">6,623 m</span></div>
                  <div class="ebc-peak-tag">Kongde Ri <span data-altitude-m="6187">6,187 m</span></div>
                  <div class="ebc-peak-tag">Kusum Kanguru <span data-altitude-m="6367">6,367 m</span></div>
                  <div class="ebc-peak-tag">Taboche <span data-altitude-m="6542">6,542 m</span></div>
                </div>
              </div>

              <!-- Highlight 9: Traditional Villages of Khumjung & Khunde -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Traditional Villages of Khumjung &amp; Khunde (<span data-altitude-m="3790">3,790 m</span>)</h3>
                </div>
                <p class="ebc-highlight-body">
                  Walk through the stone-walled potato and buckwheat fields of Khumjung and Khunde. These traditional settlements provide authentic glimpses into daily Sherpa agricultural life and community architecture.
                </p>
              </div>

              <!-- Highlight 10: Buddhist Culture and Himalayan Traditions -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Historic Khumjung Monastery &amp; Yeti Scalp Relic</h3>
                </div>
                <p class="ebc-highlight-body">
                  Visit the revered Buddhist monastery in Khumjung, where monks preserve an ancient, enigmatic relic associated with the legendary yeti, surrounded by colorful prayer murals and butter lamps.
                </p>
              </div>

              <!-- Highlight 11: Sir Edmund Hillary School & Khunde Hospital -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Hillary Memorial School &amp; Khunde Hospital</h3>
                </div>
                <p class="ebc-highlight-body">
                  Witness the enduring philanthropic legacy of Sir Edmund Hillary and the Himalayan Trust, including the original 1961 school in Khumjung and the local hospital that has served the valley for decades.
                </p>
              </div>

              <!-- Highlight 12: Changing Landscapes from Lukla to Namche -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l4 8 5-5 5 15H2L8 3z"></path></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Ever-Changing Alpine Landscapes</h3>
                </div>
                <p class="ebc-highlight-body">
                  Experience the dramatic transition as the lush subtropical river valley near Lukla gives way to towering pine forests, cascading waterfalls, and high alpine meadows framed by soaring granite peaks.
                </p>
              </div>

              <!-- Highlight 13: Traditional Teahouse Accommodation -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Comfortable Teahouse Living with Attached Bathrooms</h3>
                </div>
                <p class="ebc-highlight-body">
                  Stay in the best-developed lodges in the Khumbu region. Enjoy comfortable twin rooms, attached bathrooms in Namche and Phakding, hot gas showers, and warm evenings around the dining hall hearth.
                </p>
              </div>

              <!-- Highlight 14: Experience Local Food and Hospitality -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Hearty Mountain Cuisine &amp; Sherpa Hospitality</h3>
                </div>
                <p class="ebc-highlight-body">
                  Refuel with fresh, energizing meals including traditional Nepali Dal Bhat with unlimited refills, Sherpa Shakpa stew, handmade vegetable momos, warm oatmeal porridge, and ginger lemon honey tea.
                </p>
              </div>

              <!-- Highlight 15: Spot Himalayan Wildlife -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Spot Himalayan Wildlife Along the Forest Trails</h3>
                </div>
                <p class="ebc-highlight-body">
                  Keep watch for native Himalayan wildlife within Sagarmatha National Park, including the iridescent Danphe (Himalayan Monal), agile Himalayan Thar mountain goats, musk deer, and soaring lammergeier eagles.
                </p>
              </div>

              <!-- Highlight 16: Safe Guided Team Experience -->
              <div class="ebc-highlight-card">
                <div class="ebc-highlight-top">
                  <div class="ebc-highlight-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <h3 class="ebc-highlight-card-title">Complete the Himalayan Journey Safely as a Team</h3>
                </div>
                <p class="ebc-highlight-body">
                  Trek with total confidence alongside our experienced, government-licensed Sherpa guides and friendly porter crew. Benefit from daily pulse oximeter monitoring, personalized pacing, and dedicated 24/7 logistical support.
                </p>
              </div>
            </div>

            <!-- At a Glance: Feature Box -->
            <div class="ebc-glance-box">
              <div class="ebc-glance-header">
                <div style="width: 36px; height: 36px; border-radius: 10px; background: rgba(217, 119, 6, 0.12); color: var(--color-copper-orange); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 11l3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <h3>At a glance: the highlights you will experience on the Everest View Trek</h3>
              </div>

              <div class="ebc-glance-grid">
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Hotel Everest View Terrace:</strong> Savor morning tea overlooking Mount Everest (<span data-altitude-m="8848">8,848.86 m</span>), Lhotse, and Ama Dablam from <span data-altitude-m="3880">3,880 m</span>.</div>
                </div>
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Namche Bazaar Hub:</strong> Three consecutive nights in the Khumbu's trading capital (<span data-altitude-m="3440">3,440 m</span>) with cafes, bakeries, and Sherpa markets.</div>
                </div>
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Lukla Mountain Flight:</strong> Thrilling STOL aircraft flight into Tenzing-Hillary Airport (<span data-altitude-m="2860">2,860 m</span>), the gateway to Everest.</div>
                </div>
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Hillary Suspension Bridge:</strong> Cross the famous high suspension bridge spanning the roaring Dudh Koshi river gorge.</div>
                </div>
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Sagarmatha National Park:</strong> Trek through a UNESCO World Heritage landscape of pine and rhododendron forests beneath snow peaks.</div>
                </div>
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Khumjung Village &amp; Monastery:</strong> Explore the traditional green-roofed settlement and see the historic yeti scalp relic.</div>
                </div>
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Hillary School &amp; Khunde Hospital:</strong> Witness Sir Edmund Hillary's enduring philanthropic legacy in the high Himalayas.</div>
                </div>
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Sherpa Culture &amp; Buddhist Traditions:</strong> Pass ancient Mani stone walls (clockwise), chortens, and colorful prayer flags.</div>
                </div>
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Comfortable Teahouse Living:</strong> Stay in the region's best-developed lodges with attached bathrooms and warm dining hall stoves.</div>
                </div>
                <div class="ebc-glance-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                  <div><strong>Expert Guided Safety:</strong> 100% locally led by licensed Sherpa guides with daily digital pulse oximeter monitoring.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 1C: Why Book With Us Section -->
          <div class="why-book-container">
            <div class="why-book-title-wrapper">
              <h2 class="why-book-title">Why Book the Everest View Trek with Namaste Hiking Trek?</h2>
            </div>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 20px; line-height: 1.7;">
              Planning a Himalayan journey requires more than just an itinerary—it requires authentic local expertise, reliable logistics, fair treatment of mountain crew, and responsive care from people who live and work in Nepal. Here is why travelers worldwide trust Namaste Hiking Trek for their Khumbu adventure:
            </p>
            <div class="why-book-grid">
              <!-- Card 1: Guides -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">Local Sherpa Guides with 6 to 10+ Years Experience</div>
                  <p class="why-book-card-text">Not seasonal hires—our lead guides (Sujan, Sharad, Bishal, Sandip, Biraj, Pradip) are licensed veterans who grew up in the Himalayas and undergo annual Wilderness First Aid certification.</p>
                </div>
              </div>

              <!-- Card 2: 100% Guaranteed departures -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">100% Guaranteed Departures</div>
                  <p class="why-book-card-text">Once your booking is confirmed, your trek runs. We never cancel departures due to low participant numbers, ensuring your international travel plans are completely secure.</p>
                </div>
              </div>

              <!-- Card 3: You see your group -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">You See Your Group Before You Arrive</div>
                  <p class="why-book-card-text">Through our secure client portal, you can view who else is joining your trek departure, connect with fellow hikers, and coordinate arrival plans before landing in Kathmandu.</p>
                </div>
              </div>

              <!-- Card 4: Pre-trek briefing -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">Comprehensive Kathmandu Pre-Trek Briefing</div>
                  <p class="why-book-card-text">Sit down face-to-face with your lead guide at our Kathmandu office. We inspect your gear piece-by-piece, answer every question, and verify all permits before leaving for Lukla.</p>
                </div>
              </div>

              <!-- Card 5: 24/7 replies -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">24/7 Direct Replies from Real Mountain Operators</div>
                  <p class="why-book-card-text">No anonymous call centers or outsourced bots. Company founders Lal, Kamal, and Hemlal personally answer all pre-trip inquiries via WhatsApp, email, or phone within minutes.</p>
                </div>
              </div>

              <!-- Card 6: Private airport pickup -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">Private Airport Pickups &amp; Drop-offs Included</div>
                  <p class="why-book-card-text">A dedicated driver holding an official Namaste Hiking Trek sign meets you at Tribhuvan International Airport, assisting with luggage and transferring you directly to your hotel.</p>
                </div>
              </div>

              <!-- Card 7: Gear Rentals -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">Sleeping Bag &amp; Down Jacket Rentals at the Office</div>
                  <p class="why-book-card-text">Save luggage weight on international flights. Rent high-grade, freshly laundered 4-season sleeping bags and down jackets directly at our Kathmandu office for just USD 15 per item.</p>
                </div>
              </div>

              <!-- Card 8: Duffle bag -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">Complimentary Branded Waterproof Duffle Bag</div>
                  <p class="why-book-card-text">Every trekker receives a heavy-duty, waterproof 80L Namaste Hiking Trek duffle bag for porter portage, keeping your mountain clothing dry and secure in all weather conditions.</p>
                </div>
              </div>

              <!-- Card 9: Booking System -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">Streamlined Booking &amp; Secure Digital Payments</div>
                  <p class="why-book-card-text">Book with confidence using our encrypted portal. Pay your 20% deposit online via major credit cards, upload passport details securely, and receive instant confirmation vouchers.</p>
                </div>
              </div>

              <!-- Card 10: 24/7 Emergency Support -->
              <div class="why-book-card">
                <div class="why-book-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <div class="why-book-card-content">
                  <div class="why-book-card-title">24/7 Emergency Response &amp; Rapid Rescue</div>
                  <p class="why-book-card-text">Our dedicated emergency operations team liaises directly with leading helicopter charter operators in Nepal to mobilize swift, life-saving medical rescues if required.</p>
                </div>
              </div>
            </div>
          </div>

        </section>\n`;

fs.writeFileSync('scratch/evt_section1_upgraded.html', html, 'utf8');
console.log('Successfully generated scratch/evt_section1_upgraded.html! Length:', html.length);
