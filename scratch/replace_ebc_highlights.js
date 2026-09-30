const fs = require('fs');

const filePath = 'trek/everest-base-camp-trek/index.html';
const content = fs.readFileSync(filePath, 'utf8');

// Find boundaries
const styleStart = content.indexOf('<style>\r\n              .rich-highlights-container') !== -1
  ? content.indexOf('<style>\r\n              .rich-highlights-container')
  : content.indexOf('<style>\n              .rich-highlights-container');

const whyBookStart = content.indexOf('<style>\r\n              .why-book-container') !== -1
  ? content.indexOf('<style>\r\n              .why-book-container')
  : content.indexOf('<style>\n              .why-book-container');

if (styleStart === -1 || whyBookStart === -1) {
  console.error('Could not find start or end boundary', { styleStart, whyBookStart });
  process.exit(1);
}

console.log('Replacing from index', styleStart, 'to', whyBookStart);

const newHighlightsHTML = `<style>
              .ebc-highlights-section {
                margin-top: 40px;
                padding-top: 35px;
                border-top: 1px solid var(--color-neutral-100);
              }
              .ebc-highlights-header {
                border-left: 4px solid var(--color-copper-orange);
                padding-left: 16px;
                margin-bottom: 16px;
              }
              .ebc-highlights-title {
                font-size: 1.85rem;
                margin: 0;
                color: var(--color-primary-navy);
                font-weight: 700;
                line-height: 1.3;
              }
              .ebc-highlights-intro-p {
                color: var(--color-neutral-700);
                font-size: 1.05rem;
                margin-bottom: 16px;
                line-height: 1.7;
              }
              .ebc-highlights-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 24px;
                margin-top: 30px;
                margin-bottom: 35px;
              }
              .ebc-highlight-card {
                background: #ffffff;
                border: 1px solid #e2e8f0;
                border-radius: 16px;
                padding: 24px 26px;
                display: flex;
                flex-direction: column;
                transition: all var(--transition-fast, 0.25s ease);
                box-shadow: 0 2px 8px rgba(12, 43, 78, 0.03);
              }
              .ebc-highlight-card:hover {
                border-color: var(--color-copper-orange);
                box-shadow: 0 10px 28px rgba(217, 119, 6, 0.09);
                transform: translateY(-2px);
              }
              .ebc-highlight-top {
                display: flex;
                align-items: center;
                gap: 14px;
                margin-bottom: 14px;
              }
              .ebc-highlight-icon-box {
                width: 44px;
                height: 44px;
                flex-shrink: 0;
                background: rgba(217, 119, 6, 0.08);
                color: var(--color-copper-orange);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .ebc-highlight-card-title {
                font-size: 1.15rem;
                margin: 0;
                color: var(--color-primary-navy);
                font-weight: 700;
                line-height: 1.35;
              }
              .ebc-highlight-body {
                font-size: 0.98rem;
                line-height: 1.68;
                color: var(--color-neutral-700);
                margin: 0;
              }
              .ebc-peak-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin: 14px 0 14px 0;
              }
              .ebc-peak-tag {
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                padding: 5px 11px;
                font-size: 0.86rem;
                font-weight: 600;
                color: var(--color-primary-navy);
                display: inline-flex;
                align-items: center;
                gap: 4px;
              }
              .ebc-peak-tag span {
                color: var(--color-copper-orange);
                font-weight: 500;
              }

              /* Summary Box: At a Glance */
              .ebc-glance-box {
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-left: 5px solid var(--color-copper-orange);
                border-radius: 14px;
                padding: 28px 30px;
                margin-top: 10px;
                margin-bottom: 25px;
                box-shadow: 0 4px 14px rgba(12, 43, 78, 0.03);
              }
              .ebc-glance-header {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 20px;
              }
              .ebc-glance-header h3 {
                font-size: 1.25rem;
                font-weight: 700;
                color: var(--color-primary-navy);
                margin: 0;
              }
              .ebc-glance-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 16px 24px;
              }
              .ebc-glance-item {
                display: flex;
                align-items: flex-start;
                gap: 12px;
                font-size: 0.95rem;
                line-height: 1.55;
                color: var(--color-neutral-700);
              }
              .ebc-glance-item svg {
                flex-shrink: 0;
                margin-top: 3px;
                color: var(--color-copper-orange);
              }
              .ebc-glance-item strong {
                color: var(--color-primary-navy);
                font-weight: 700;
              }

              @media (max-width: 900px) {
                .ebc-highlights-grid {
                  grid-template-columns: 1fr;
                }
                .ebc-glance-grid {
                  grid-template-columns: 1fr;
                }
              }
              @media (max-width: 600px) {
                .ebc-highlight-card {
                  padding: 20px 18px;
                }
                .ebc-glance-box {
                  padding: 20px 18px;
                }
              }
            </style>

            <div class="ebc-highlights-section">
              <div class="ebc-highlights-header">
                <h2 class="ebc-highlights-title">Everest Base Camp Trek Highlights</h2>
              </div>
              
              <p class="ebc-highlights-intro-p">
                The Everest Base Camp Trek is made up of far more than reaching a sign at <span data-altitude-m="5364">5,364 meters</span>. The route brings together the high Himalayan landscapes of Sagarmatha National Park, Sherpa villages and Buddhist heritage, suspension bridges, glacial valleys, mountain viewpoints and the everyday experience of walking and staying in the Khumbu.
              </p>
              <p class="ebc-highlights-intro-p">
                From the first steps out of Lukla to the final descent from the upper Khumbu, each section of the trail has its own character. These are the experiences that define the classic Everest Base Camp journey.
              </p>
              
              <div class="ebc-highlights-grid">
                <!-- 1. Stand at Everest Base Camp -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Flag on Mountain Summit -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                        <line x1="4" y1="22" x2="4" y2="15"></line>
                      </svg>
                    </div>
                    <h4 class="ebc-highlight-card-title">Stand at Everest Base Camp at <span data-altitude-m="5364">5,364 m</span></h4>
                  </div>
                  <p class="ebc-highlight-body">
                    Reaching Everest Base Camp (<span data-altitude-m="5364">5,364 m / 17,598 ft</span>) is the defining achievement of the trek. From Gorak Shep, the trail follows the rugged landscape beside the Khumbu Glacier toward the base camp area. The terrain is rocky and uneven, and at more than 5,000 meters even a relatively short walk requires patience and controlled pacing. At Base Camp, you are surrounded by the enormous walls of Nuptse, Lhotse, Pumori and Khumbutse, with the Khumbu Icefall rising ahead. During the spring climbing season, expedition teams establish camps here as they prepare for attempts on Everest. Outside the climbing season, the landscape can be much quieter. One important detail surprises many first-time trekkers: you do not get the classic unobstructed summit view of Everest from Base Camp itself. That is one reason Kala Patthar is such an important part of the itinerary.
                  </p>
                </div>

                <!-- 2. Climb Kala Patthar -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Sun over Mountain / Viewpoint -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                      </svg>
                    </div>
                    <h4 class="ebc-highlight-card-title">Climb Kala Patthar for the classic Everest view</h4>
                  </div>
                  <p class="ebc-highlight-body">
                    Kala Patthar, approximately <span data-altitude-m="5545">5,545 m (18,192 ft)</span>, is usually the highest point reached on the classic Everest Base Camp itinerary and one of the most important viewpoints in the Khumbu. The climb begins from Gorak Shep and follows a steep, rocky trail toward the summit ridge. At this elevation, the distance is less important than the thin air, so your guide will set a deliberately slow pace. From Kala Patthar, the panorama opens toward Mount Everest, Nuptse, Lhotse, Pumori, Lingtren and other Himalayan peaks. It is this viewpoint that produces the familiar close mountain perspective most travelers associate with Everest trekking. Nepal Tourism Board also identifies Kala Patthar as a renowned viewpoint for views of Mount Everest. Depending on weather, visibility and the itinerary, the ascent may be timed for sunrise or another favorable period of the day. Your guide can adjust the timing according to conditions rather than treating the viewpoint as a fixed schedule.
                  </p>
                </div>

                <!-- 3. Fly into Lukla -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Airplane -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                      </svg>
                    </div>
                    <h4 class="ebc-highlight-card-title">Fly into Lukla, the gateway to the Everest region</h4>
                  </div>
                  <p class="ebc-highlight-body">
                    The classic EBC route begins with the journey to Lukla, widely known as the gateway to the Everest region. From Lukla, the trail descends and follows the Dudh Koshi valley toward Phakding and eventually Namche Bazaar. The mountain flight is therefore not merely transportation; it marks the transition from Kathmandu and Nepal's lower elevations into the Himalayan trekking environment. The flight schedule is subject to operational and weather conditions, so trekkers should treat the Lukla sector as part of the expedition logistics and allow contingency time when planning international flights. Nepal Tourism Board identifies Lukla as the traditional starting and finishing point for the approximately two-week classic Everest Base Camp trek.
                  </p>
                </div>

                <!-- 4. Suspension bridges over Dudh Koshi -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Bridge / River Crossing -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M2 18h20"></path>
                        <path d="M4 18V9"></path>
                        <path d="M20 18V9"></path>
                        <path d="M4 9c4 4 12 4 16 0"></path>
                        <path d="M10 12v6"></path>
                        <path d="M14 12v6"></path>
                      </svg>
                    </div>
                    <h4 class="ebc-highlight-card-title">Cross suspension bridges over the Dudh Koshi</h4>
                  </div>
                  <p class="ebc-highlight-body">
                    The trail between Lukla, Phakding and Namche Bazaar follows one of the most memorable river valleys in the Khumbu. You cross multiple suspension bridges above the Dudh Koshi River and its tributaries, often decorated with Buddhist prayer flags. The bridges rise above deep Himalayan gorges, while the river continues below through the valley. The approach to Namche becomes particularly dramatic as the trail crosses bridges around Jorsale and the Sagarmatha National Park entrance before beginning the sustained climb toward Namche Bazaar. Nepal Tourism Board specifically identifies the Dudh Koshi route and suspension bridge section as part of the classic approach to Namche. For first-time trekkers, these crossings are often one of the first moments when the scale and terrain of the Everest region become unmistakable.
                  </p>
                </div>

                <!-- 5. Sagarmatha National Park -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Tree / Nature / Heritage -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22v-7"></path>
                        <path d="M9 18H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4"></path>
                        <path d="M12 2 8 8h8z"></path>
                      </svg>
                    </div>
                    <h4 class="ebc-highlight-card-title">Enter Sagarmatha National Park</h4>
                  </div>
                  <p class="ebc-highlight-body">
                    A major part of the Everest Base Camp experience takes place inside Sagarmatha National Park, the protected Himalayan landscape surrounding Mount Everest. The park contains dramatic mountains, glaciers and deep valleys and was inscribed as a UNESCO World Heritage Site in 1979. It is also notable because its natural environment is closely intertwined with the culture and settlements of the Sherpa communities who have lived in the Khumbu for generations. As the trail climbs, the environment changes noticeably. Lower elevations contain pine, hemlock and rhododendron forests, while higher elevations transition toward fir, birch, juniper, alpine vegetation, rock, ice and glacial terrain. This ecological progression is one of the less obvious but most rewarding highlights of the EBC hike: you physically watch the landscape change as you gain altitude.
                  </p>
                </div>

                <!-- 6. Namche Bazaar Acclimatization -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Compass / Hub -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                      </svg>
                    </div>
                    <h4 class="ebc-highlight-card-title">Acclimatize around Namche Bazaar</h4>
                  </div>
                  <p class="ebc-highlight-body">
                    Namche Bazaar is much more than an overnight stop. The horseshoe-shaped settlement is one of the principal commercial and trekking centres of the Khumbu and an important stage in the acclimatization process. Nepal Tourism Board recommends spending time around Namche rather than rushing through it, with surrounding destinations such as Syangboche, Khumjung and Khunde providing options for acclimatization walks. A properly paced itinerary uses this time to let your body adapt to increasing elevation. Rather than spending an acclimatization day completely inactive, you normally make a controlled hike to a higher elevation and return to Namche to sleep. This is also where the trekking experience becomes more culturally immersive. You will find Sherpa-owned lodges, bakeries, trekking shops, cafés, prayer wheels and views extending toward the surrounding peaks.
                  </p>
                </div>

                <!-- 7. Sherpa culture in the Khumbu -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Users / Community / Culture -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <h4 class="ebc-highlight-card-title">Experience Sherpa culture in the Khumbu</h4>
                  </div>
                  <p class="ebc-highlight-body">
                    The Everest Base Camp Trek takes you through the homeland of the Sherpa people, making the journey both a Himalayan trekking experience and a cultural journey. The Sherpa presence is visible throughout the route in the architecture of villages, Buddhist monasteries, prayer flags, mani walls, agriculture, hospitality and the people who operate many of the region's trekking services. UNESCO considers the relationship between the Sherpa culture and the natural environment of Sagarmatha National Park an important part of the area's outstanding universal value. Rather than treating Sherpa culture as something to observe from outside, the EBC trek allows you to encounter it within the communities through which you travel.
                  </p>
                </div>

                <!-- 8. Tengboche Monastery -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Monastery / Temple -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 21h18"></path>
                        <path d="M5 21V10l7-5 7 5v11"></path>
                        <path d="M9 21v-4a3 3 0 0 1 6 0v4"></path>
                        <line x1="12" y1="2" x2="12" y2="5"></line>
                      </svg>
                    </div>
                    <h4 class="ebc-highlight-card-title">Visit Tengboche Monastery beneath Ama Dablam</h4>
                  </div>
                  <p class="ebc-highlight-body">
                    The trail from Namche toward Tengboche is one of the most scenic sections of the route, with the landscape opening toward Ama Dablam, Thamserku, Kangtega, Lhotse and Everest. At Tengboche, the physical landscape meets the spiritual character of the Khumbu. Tengboche Monastery is one of the region's best-known Buddhist centres and is particularly famous for its dramatic setting below Ama Dablam. The monastery is also associated with Mani Rimdu, an important Buddhist festival held annually. When monastery activities are open to visitors, your guide can explain the appropriate etiquette. Religious sites along the trail are functioning places of worship, so respectful behavior is more important than treating them simply as photographic attractions.
                  </p>
                </div>

                <!-- 9. Walk through forests and alpine zone -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Pine / Alpine Progression -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2L7 10h3l-4 7h12l-4-7h3z"></path>
                        <path d="M12 17v5"></path>
                      </svg>
                    </div>
                    <h4 class="ebc-highlight-card-title">Walk through forests and into the alpine zone</h4>
                  </div>
                  <p class="ebc-highlight-body">
                    One of the most satisfying aspects of the Everest Base Camp hiking route is its changing vegetation. The lower trail around Lukla and Phakding passes through greener environments with forests and river valleys. As you climb through Namche and Tengboche, rhododendron, pine, birch and fir forests become part of the landscape. Above the tree line, the environment changes dramatically. Around Dingboche, Lobuche and Gorak Shep, the scenery becomes increasingly exposed, with stone-walled fields, alpine valleys, barren slopes, moraine and glaciers replacing dense forest. The change makes the altitude tangible. You do not simply gain elevation on a map; you enter a completely different ecological and visual environment.
                  </p>
                </div>

                <!-- 10. Ama Dablam & Himalayan Giants -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Mountain Peaks Panorama -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                      </svg>
                    </div>
                    <h4 class="ebc-highlight-card-title">See Ama Dablam and the Himalayan giants from changing perspectives</h4>
                  </div>
                  <p class="ebc-highlight-body">
                    Everest may be the name on the itinerary, but the journey gives you views of an entire Himalayan mountain system. Depending on the section of the route and visibility, you can see:
                  </p>
                  
                  <div class="ebc-peak-tags">
                    <div class="ebc-peak-tag">Mount Everest <span>8,848.86 m</span></div>
                    <div class="ebc-peak-tag">Lhotse <span>8,516 m</span></div>
                    <div class="ebc-peak-tag">Nuptse <span>7,861 m</span></div>
                    <div class="ebc-peak-tag">Ama Dablam <span>6,812 m</span></div>
                    <div class="ebc-peak-tag">Pumori <span>7,161 m</span></div>
                    <div class="ebc-peak-tag">Thamserku <span>6,623 m</span></div>
                    <div class="ebc-peak-tag">Kangtega <span>6,782 m</span></div>
                    <div class="ebc-peak-tag">Cholatse <span>6,440 m</span></div>
                    <div class="ebc-peak-tag">Lobuche East <span>6,119 m</span></div>
                    <div class="ebc-peak-tag">Island Peak / Imja Tse <span>6,189 m</span></div>
                    <div class="ebc-peak-tag">Lingtren <span>6,713 m</span></div>
                    <div class="ebc-peak-tag">Khumbutse <span>6,665 m</span></div>
                  </div>

                  <p class="ebc-highlight-body">
                    The mountains do not look the same throughout the trek. Ama Dablam dominates views from the Imja Valley and Tengboche area, while the upper Khumbu opens toward Pumori, Nuptse, Lhotse and Everest. From Kala Patthar, these peaks form a much more concentrated high-Himalayan panorama. That changing perspective is part of what makes the route visually rewarding from beginning to end.
                  </p>
                </div>

                <!-- 11. Walk beside the Khumbu Glacier -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Glacier / Moraine -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 22 22 22"></polygon>
                        <path d="M12 11l-3 5h6z"></path>
                      </svg>
                    </div>
                    <h4 class="ebc-highlight-card-title">Walk beside the Khumbu Glacier</h4>
                  </div>
                  <p class="ebc-highlight-body">
                    Above Dingboche, the terrain increasingly reflects the influence of the Khumbu Glacier. The trail toward Lobuche follows sections of the glacier's lateral moraine before continuing toward Gorak Shep. From here, the route to Base Camp crosses rugged glacial terrain surrounded by enormous mountain walls. This section feels very different from the lower trekking trail. There are fewer trees, less shelter from wind and much greater exposure to altitude. The terrain is rocky and irregular, so every step needs more attention. Nepal Tourism Board describes Lobuche as sitting on the lateral moraine of the Khumbu Glacier and identifies the final approach from Gorak Shep across the glacier environment toward Everest Base Camp.
                  </p>
                </div>

                <!-- 12. Stay in mountain teahouses -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Cabin / Lodge / Home -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </div>
                    <h4 class="ebc-highlight-card-title">Stay in mountain teahouses</h4>
                  </div>
                  <p class="ebc-highlight-body">
                    The teahouse experience is an important part of what makes the Everest Base Camp Trek different from a standard mountain tour. Instead of camping every night, trekkers generally stay in locally operated teahouses and lodges along the established route. Rooms are simple, while the dining room becomes the social centre of the evening. After several hours on the trail, this is where the experience often becomes surprisingly personal: sharing dal bhat, momos, soup or noodles, warming up around a stove, playing cards, talking with fellow trekkers and listening to stories from guides and porters. Facilities become progressively more basic as altitude increases. Hot showers, charging and internet connectivity may be available for additional fees, while higher settlements offer fewer conveniences than Namche or Lukla. The simplicity is part of the experience. You are not trekking through the Khumbu to reproduce the comforts of a city hotel, you are spending the night inside a Himalayan trekking community.
                  </p>
                </div>

                <!-- 13. Look for Himalayan wildlife -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Eye / Wildlife -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </div>
                    <h4 class="ebc-highlight-card-title">Look for Himalayan wildlife</h4>
                  </div>
                  <p class="ebc-highlight-body">
                    Sagarmatha National Park is an important Himalayan wildlife habitat, although sightings are naturally unpredictable. The park supports species including Himalayan tahr, musk deer, ghoral, pika and other high-altitude wildlife, while more than 100 bird species have been recorded, including the danphe (Himalayan monal). The higher-profile species of the park include the snow leopard, but seeing one during an EBC trek would be exceptionally rare. A more realistic wildlife experience is spotting Himalayan birds or tahr in quieter areas away from busy trekking sections. Early starts, careful observation and respect for wildlife give you the best opportunity to notice animals without disturbing them.
                  </p>
                </div>

                <!-- 14. Quiet moments between major landmarks -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Hot Cup / Heart / Solitude -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                        <line x1="6" y1="1" x2="6" y2="4"></line>
                        <line x1="10" y1="1" x2="10" y2="4"></line>
                        <line x1="14" y1="1" x2="14" y2="4"></line>
                      </svg>
                    </div>
                    <h4 class="ebc-highlight-card-title">Experience the quiet moments between the major landmarks</h4>
                  </div>
                  <p class="ebc-highlight-body">
                    Not every highlight of the EBC trek appears on a map. It can be the first cup of hot tea after climbing a steep section above Namche. It can be watching clouds move around Ama Dablam from a teahouse courtyard. It can be learning a Nepali or Sherpa greeting from your guide, sharing stories around the dining-room stove or looking back down the valley after a long ascent. These moments matter because the Everest Base Camp Trek is a multi-day journey, not a single attraction. The experience builds gradually: one village, one ridge, one monastery, one bridge and one mountain view at a time.
                  </p>
                </div>

                <!-- 15. Complete journey safely as a team -->
                <div class="ebc-highlight-card" style="grid-column: 1 / -1;">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Shield / Safe Team -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <h4 class="ebc-highlight-card-title">Complete the journey safely as a team</h4>
                  </div>
                  <p class="ebc-highlight-body" style="margin-bottom: 12px;">
                    The final highlight is reaching the high Khumbu while respecting what the altitude demands. A successful Everest Base Camp trek is not about walking fastest or proving that you can ignore fatigue. It is about steady pacing, acclimatization, hydration, nutrition, appropriate gear and communicating openly with your guide when something does not feel right. The classic itinerary deliberately gives trekkers time to acclimatize around Namche Bazaar and Dingboche before continuing toward Lobuche and Gorak Shep. This gradual approach is particularly important because altitude-related illness can affect people regardless of age, fitness or previous trekking experience.
                  </p>
                  <p class="ebc-highlight-body" style="margin-bottom: 12px; font-weight: 600; color: var(--color-primary-navy);">
                    The strongest trekking experience is therefore not simply: Lukla → Base Camp → back to Lukla.
                  </p>
                  <p class="ebc-highlight-body">
                    It is: <em>Lukla → Khumbu Valley → Sherpa culture → Namche → Tengboche → Dingboche → high Himalaya → Gorak Shep → Everest Base Camp → Kala Patthar → return.</em> That combination of mountain scenery, altitude, culture, glaciers, wildlife, Buddhist heritage and human endurance is what makes the Everest Base Camp Trek one of Nepal's defining trekking experiences.
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
                  <h3>At a glance: the highlights you will experience</h3>
                </div>

                <div class="ebc-glance-grid">
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Everest Base Camp:</strong> Reach the legendary expedition base at <span data-altitude-m="5364">5,364 m</span>.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Kala Patthar:</strong> Climb to approximately <span data-altitude-m="5545">5,545 m</span> for the classic close-up panorama of Everest.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Lukla:</strong> Begin the classic trek through the traditional gateway to the Everest region.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Dudh Koshi suspension bridges:</strong> Cross dramatic Himalayan river gorges beneath prayer flags.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Sagarmatha National Park:</strong> Trek through a UNESCO World Heritage landscape of mountains, glaciers, valleys, wildlife and Sherpa culture.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Namche Bazaar:</strong> Acclimatize in the Khumbu's best-known Sherpa trading and trekking centre.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Tengboche Monastery:</strong> Experience one of the most important Buddhist sites on the Everest trekking route beneath Ama Dablam.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Khumbu Glacier:</strong> Walk through the rugged glacial landscape surrounding Lobuche, Gorak Shep and Everest Base Camp.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Himalayan wildlife:</strong> Look for Himalayan tahr, danphe and other species within Sagarmatha National Park.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Teahouse life:</strong> Experience locally operated mountain lodges, traditional food, shared dining rooms and genuine trail companionship.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Sherpa culture:</strong> Encounter the communities, Buddhist traditions and mountain lifestyle that make the Khumbu culturally distinctive.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>The journey itself:</strong> Spend nearly two weeks moving from green river valleys into the high Himalaya beneath Mount Everest.</div>
                  </div>
                </div>
              </div>
            </div>

            `;

const updatedContent = content.substring(0, styleStart) + newHighlightsHTML + content.substring(whyBookStart);

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log('Successfully updated highlights section in', filePath);
