const fs = require('fs');

let html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const sIdx = html.indexOf('<!-- Highlights Section Replicating EBC Pattern -->');
const eIdx = html.indexOf('<!-- Why Book Section Replicating EBC Pattern -->');

if (sIdx === -1 || eIdx === -1) {
  console.error('Markers not found!');
  process.exit(1);
}

const newHighlightsHtml = `<!-- Highlights Section Replicating EBC Pattern -->
            <style>
              .ebc-highlights-section {
                margin-top: 36px;
                margin-bottom: 30px;
              }
              .ebc-highlights-header {
                margin-bottom: 26px;
              }
              .ebc-highlights-title {
                font-size: 1.85rem;
                font-weight: 800;
                color: var(--color-primary-navy);
                margin: 0 0 10px 0;
                line-height: 1.3;
              }
              .ebc-highlights-intro-p {
                color: var(--color-neutral-600);
                font-size: 1.05rem;
                line-height: 1.68;
                margin: 0;
                max-width: 860px;
              }
              .ebc-highlights-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 22px;
                margin-top: 24px;
                margin-bottom: 35px;
              }
              .ebc-highlight-card {
                background: #ffffff;
                border: 1px solid #e2e8f0;
                border-radius: 16px;
                padding: 26px 28px;
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
                margin-bottom: 12px;
              }
              .ebc-highlight-icon-box {
                width: 46px;
                height: 46px;
                flex-shrink: 0;
                background: rgba(217, 119, 6, 0.08);
                color: var(--color-copper-orange);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .ebc-highlight-card-title {
                font-size: 1.2rem;
                margin: 0;
                color: var(--color-primary-navy);
                font-weight: 700;
                line-height: 1.35;
              }
              .ebc-peak-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin: 10px 0 14px 0;
              }
              .ebc-peak-tag {
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                padding: 5px 11px;
                font-size: 0.84rem;
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
              .ebc-highlight-body {
                font-size: 0.98rem;
                line-height: 1.68;
                color: var(--color-neutral-700);
                margin: 0;
              }
              .ebc-highlight-body p {
                margin: 0 0 12px 0;
                color: var(--color-neutral-700);
                line-height: 1.68;
                font-size: 0.98rem;
              }
              .ebc-highlight-body p:last-child {
                margin-bottom: 0;
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
                <h2 class="ebc-highlights-title">Mera Peak Climbing Highlights</h2>
                <p class="ebc-highlights-intro-p">
                  From secluded cloud forests and ancient Buddhist cliff shrines to suspended high camps and an unforgettable sunrise summit overlooking five 8,000-meter giants, here are the hallmark highlights that define Nepal's premier trekking peak expedition.
                </p>
              </div>

              <div class="ebc-highlights-grid">
                
                <!-- Highlight 1: Stand on the Apex of Mera Peak Central -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Flag on Mountain Summit -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                        <line x1="4" y1="22" x2="4" y2="15"></line>
                      </svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">Stand on the Apex of Mera Peak Central (<span data-altitude-m="6476">6,476 m</span>)</h3>
                  </div>
                  <div class="ebc-peak-tags">
                    <span class="ebc-peak-tag"><span>Altitude:</span> <span data-altitude-m="6476">6,476 m / 21,247 ft</span></span>
                    <span class="ebc-peak-tag"><span>Classification:</span> Nepal's Highest Trekking Peak</span>
                    <span class="ebc-peak-tag"><span>Grade:</span> Alpine PD</span>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>Reaching the central summit dome of Mera Peak (<span data-altitude-m="6476">6,476 m / 21,247 ft</span>) is the defining triumph of this expedition. Standing at the highest officially recognized trekking peak in Nepal, each climber experiences an overwhelming surge of achievement after days of rigorous acclimatization and early morning alpine ascent. The central summit sits proudly above Mera North (<span data-altitude-m="6461">6,461 m</span>) and Mera South (<span data-altitude-m="6065">6,065 m</span>), offering the pure satisfaction of true Himalayan mountaineering.</p>
                    <p>At nearly 6,500 meters, atmospheric pressure delivers less than half the oxygen found at sea level. The feeling of stepping onto the narrow summit crest alongside your dedicated Climbing Sherpa, roped together as a unified team, is a life-affirming milestone that validates your physical endurance, mental perseverance, and passion for the high mountains.</p>
                  </div>
                </div>

                <!-- Highlight 2: 360-Degree Panorama of 5 Eight-Thousanders -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Sun & Mountains Panorama -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 12s1.5 2 4 2 4-2 4-2"></path>
                      </svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">The World-Renowned 360° Panorama of 5 Eight-Thousanders</h3>
                  </div>
                  <div class="ebc-peak-tags">
                    <span class="ebc-peak-tag"><span>Everest:</span> <span data-altitude-m="8848">8,848 m</span></span>
                    <span class="ebc-peak-tag"><span>Kanchenjunga:</span> <span data-altitude-m="8586">8,586 m</span></span>
                    <span class="ebc-peak-tag"><span>Lhotse:</span> <span data-altitude-m="8516">8,516 m</span></span>
                    <span class="ebc-peak-tag"><span>Makalu:</span> <span data-altitude-m="8481">8,481 m</span></span>
                    <span class="ebc-peak-tag"><span>Cho Oyu:</span> <span data-altitude-m="8188">8,188 m</span></span>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>Mera Peak Central commands what mountaineering historians widely recognize as the finest panoramic view in the entire Himalaya. Because Mera sits slightly south and east of the main Khumbu ridge, your vantage point offers an unobstructed, stadium-like view encompassing five of the world's six highest peaks simultaneously.</p>
                    <p>Looking north, Mount Everest (<span data-altitude-m="8848">8,848.86 m</span>) towers above the immense Nuptse-Lhotse wall, flanked by Lhotse (<span data-altitude-m="8516">8,516 m</span>) and Cho Oyu (<span data-altitude-m="8188">8,188 m</span>). To the immediate east, the four-sided granite pyramid of Makalu (<span data-altitude-m="8481">8,481 m</span>) looms dramatically, while far on the eastern horizon, the massive massif of Kanchenjunga (<span data-altitude-m="8586">8,586 m</span>) glistens above Sikkim. Below you, the sheer rock faces of Chamlang, Baruntse, and Ama Dablam complete an amphitheater unmatched anywhere on Earth.</p>
                  </div>
                </div>

                <!-- Highlight 3: Untamed Hinku & Hongu Wilderness -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Tree & Shield Icon -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">Trek the Secluded Trails of the Hinku Valley Wilderness</h3>
                  </div>
                  <div class="ebc-peak-tags">
                    <span class="ebc-peak-tag"><span>Region:</span> Solukhumbu & Makalu-Barun</span>
                    <span class="ebc-peak-tag"><span>Environment:</span> Virgin Cloud Forest</span>
                    <span class="ebc-peak-tag"><span>Crowd Level:</span> Low / Off-the-Beaten-Path</span>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>While thousands of trekkers crowd the commercial tea trail toward Everest Base Camp, our Mera Peak route branches south into the remote, peaceful sanctuary of the <strong>Hinku Valley</strong>. This pristine wilderness preserves the authentic soul of Himalayan trekking as it existed decades ago, characterized by silence, raw granite canyons, and untouched biodiversity.</p>
                    <p>The trail winds beneath towering hemlocks, moss-draped silver firs, and blooming rhododendron forests before emerging into glacial river valleys bordered by vertical 2,000-meter cliffs. You cross clear torrents over wooden bridges and walk along trails where the only sounds are rushing glacial water, the rustle of wind through high bamboo, and the occasional call of the Himalayan monal pheasant.</p>
                  </div>
                </div>

                <!-- Highlight 4: Pre-Climbing Glacier Clinic at Khare -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Ice Axe / Alpine Clinic -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                      </svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">Hands-On Alpine Glacier Clinic at Khare (<span data-altitude-m="5045">5,045 m</span>)</h3>
                  </div>
                  <div class="ebc-peak-tags">
                    <span class="ebc-peak-tag"><span>Location:</span> Khare Alpine Base</span>
                    <span class="ebc-peak-tag"><span>Day:</span> Dedicated Day 12</span>
                    <span class="ebc-peak-tag"><span>Mentors:</span> UIAGM/NMA Climbing Sherpas</span>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>No prior mountaineering experience is necessary to join this expedition because Day 12 is completely dedicated to comprehensive, practical alpine skills instruction. Conducted on real moraine ice slopes above Khare Base Camp (<span data-altitude-m="5045">5,045 m</span>), our certified climbing Sherpas teach you essential mountaineering techniques with patience and precision.</p>
                    <p>Climbers practice fitting double mountaineering boots, walking in steel 12-point crampons (both flat-footing French technique and front-pointing), executing self-arrest with an ice axe, operating mechanical jumar ascenders on fixed ropes, and controlled abseiling using figure-8 descenders. By the time you step onto the Mera Glacier, every technical movement is familiar and confident.</p>
                  </div>
                </div>

                <!-- Highlight 5: Sleeping at Mera High Camp (5,780 m) -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Mountain Tent -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">Sleep Suspended Above the Clouds at Mera High Camp (<span data-altitude-m="5780">5,780 m</span>)</h3>
                  </div>
                  <div class="ebc-peak-tags">
                    <span class="ebc-peak-tag"><span>High Camp Alt:</span> <span data-altitude-m="5780">5,780 m / 18,963 ft</span></span>
                    <span class="ebc-peak-tag"><span>Shelter:</span> 4-Season Geodesic Tents</span>
                    <span class="ebc-peak-tag"><span>Night Temp:</span> -15°C to -22°C</span>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>Perched dramatically behind a rocky promontory on the Mera Glacier edge, Mera High Camp (<span data-altitude-m="5780">5,780 m</span>) ranks among the highest sleeping locations on Earth. Setting camp here shortens summit day significantly, giving our team a decisive tactical advantage compared to operators attempting the summit from Khare.</p>
                    <p>Sheltered inside rugged Mountain Hardwear and North Face 4-season geodesic dome tents with closed-cell insulating mattresses, you stay warm while our Sherpas serve hot soups and high-carbohydrate meals. As dusk settles, step outside your tent to watch an unforgettable sunset turn Mount Everest, Lhotse, Makalu, and Chamlang into glowing crimson spires above an endless ocean of clouds.</p>
                  </div>
                </div>

                <!-- Highlight 6: The 2:00 AM Alpine Summit Push -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Clock & Night Stars -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">The Thrilling 2:00 AM Headlamp Summit Push Under Starlight</h3>
                  </div>
                  <div class="ebc-peak-tags">
                    <span class="ebc-peak-tag"><span>Alpine Start:</span> 02:00 AM</span>
                    <span class="ebc-peak-tag"><span>Pacing:</span> Roped Guided Team</span>
                    <span class="ebc-peak-tag"><span>Summit Duration:</span> 9 to 11 Hours</span>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>Awakening at 1:30 AM to steaming tea and hot porridge inside your high-camp tent, the anticipation is palpable. After strapping on crampons, securing climbing harnesses, and switching on headlamps, you step into the sub-zero Himalayan night under a breathtaking dome of diamond-like stars.</p>
                    <p>Roped together in teams of 2 to 3 with certified Climbing Sherpas, the team maintains a steady, rhythmic pressure-breathing pace across the wide central glacier bowl. The crunch of steel crampons on frozen crust and the beams of headlamps carving through the darkness create an indelible memory. As dawn approaches, the eastern sky slowly morphs from midnight indigo to blazing gold, illuminating the immense south face of Kanchenjunga.</p>
                  </div>
                </div>

                <!-- Highlight 7: The Final 40-Meter Summit Headwall -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Steep Mountain Ridge / Carabiner -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                        <polyline points="2 17 12 22 22 17"></polyline>
                        <polyline points="2 12 12 17 22 12"></polyline>
                      </svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">The Exhilarating 40-Meter Headwall & Fixed-Rope Ascent</h3>
                  </div>
                  <div class="ebc-peak-tags">
                    <span class="ebc-peak-tag"><span>Slope Gradient:</span> 40° to 45°</span>
                    <span class="ebc-peak-tag"><span>Technical Gear:</span> Jumar Ascender & Safety Sling</span>
                    <span class="ebc-peak-tag"><span>Safety:</span> Fixed Safety Line</span>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>While the majority of Mera Peak is a gentle 25°–30° snow plod, the climb reaches a thrilling climax at the final summit headwall. Rising approximately 40 to 50 meters beneath the apex dome, the slope steepens to an exhilarating 40°–45° angle of hard-packed snow and alpine ice.</p>
                    <p>Here, our lead Climbing Sherpas fix a robust dynamic safety line anchored with snow stakes and ice screws. Clipping your mechanical ascender (jumar) and safety tether to the line, you front-point up the final ridge with complete peace of mind. Topping out onto the razor crest and stepping onto the central summit dome provides an unforgettable rush of triumph and emotion.</p>
                  </div>
                </div>

                <!-- Highlight 8: Gradual Southern Acclimatization Loop -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Activity / Elevation Curve -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">Gradual Southern Acclimatization Loop via Paiya & Pangkongma</h3>
                  </div>
                  <div class="ebc-peak-tags">
                    <span class="ebc-peak-tag"><span>Route Strategy:</span> Southern Valley Approach</span>
                    <span class="ebc-peak-tag"><span>Acclimatization:</span> 5 Days Below 3,600 m</span>
                    <span class="ebc-peak-tag"><span>Summit Success:</span> >92%</span>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>Many low-cost operators rush clients straight over the 4,610m Zatrwa La Pass on Day 2 directly from Lukla, triggering severe Acute Mountain Sickness (AMS) and forcing premature evacuations. Our 18-day itinerary adopts a physiologically proven circular route that heads south from Lukla through Paiya (<span data-altitude-m="2730">2,730 m</span>) and Pangkongma (<span data-altitude-m="2846">2,846 m</span>).</p>
                    <p>By spending five full days gaining elevation gradually below 3,600 meters, your body synthesizes essential red blood cells and adjusts smoothly to high altitude. When you finally reach Kothe and Khare, you arrive energetic, well-fed, and properly acclimatized, dramatically boosting your personal probability of summit success.</p>
                  </div>
                </div>

                <!-- Highlight 9: High Pass Traverse over Zatrwa La -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Pass / Mountain Trail -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 8 8 12 12 16"></polyline>
                        <line x1="16" y1="12" x2="8" y2="12"></line>
                      </svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">Traverse the High Rocky Saddle of Zatrwa La Pass (<span data-altitude-m="4610">4,610 m</span>)</h3>
                  </div>
                  <div class="ebc-peak-tags">
                    <span class="ebc-peak-tag"><span>Pass Altitude:</span> <span data-altitude-m="4610">4,610 m / 15,124 ft</span></span>
                    <span class="ebc-peak-tag"><span>Stage:</span> Day 17 Return Traverse</span>
                    <span class="ebc-peak-tag"><span>Terrain:</span> Alpine Moraine & Boulder Saddle</span>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>Rather than retracing the long southern loop back through Pangkongma, our expedition delivers a spectacular final alpine challenge by crossing the dramatic Zatrwa La Pass (<span data-altitude-m="4610">4,610 m</span>) on Day 17. Because your body is now thoroughly acclimatized from climbing above 6,400 meters, crossing this rugged pass feels empowering and exhilarating.</p>
                    <p>The rocky traverse out of Thuli Kharka rewards you with dual valley panoramas looking across the Hinku river gorge on one side and the deep Dudh Koshi basin on the other. Adorned with fluttering Buddhist prayer flags, the pass marks your triumphant return crossing toward Lukla for an evening of hot showers and celebratory banquets.</p>
                  </div>
                </div>

                <!-- Highlight 10: Sabai Tsho Glacial Lake & Charpate Ridge -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Water / Glacial Lake -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                      </svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">Hike to Sabai Tsho Glacial Lake & Charpate Ridge (<span data-altitude-m="5000">5,000 m</span>)</h3>
                  </div>
                  <div class="ebc-peak-tags">
                    <span class="ebc-peak-tag"><span>Acclimatization Alt:</span> <span data-altitude-m="5000">5,000 m</span></span>
                    <span class="ebc-peak-tag"><span>Feature:</span> Turquoise Glacial Lake</span>
                    <span class="ebc-peak-tag"><span>Mountain View:</span> Kyashar North Face</span>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>During our active acclimatization day in Thangnak (Day 10), we embark on a spectacular side excursion following the lateral moraine of the Dig Glacier up toward the turquoise waters of Sabai Tsho lake and the high vantage points of Charpate Ridge (<span data-altitude-m="5000">5,000 m</span>).</p>
                    <p>This hike exemplifies the golden mountaineering principle: <em>climb high, sleep low</em>. Spending hours adjusting at 5,000 meters before returning to sleep at Thangnak (<span data-altitude-m="4356">4,356 m</span>) primes your vascular system. Furthermore, the vantage point places you directly opposite the sheer 2,000-meter north face of Kyashar (Peak 43) and the tumbling icefalls of Mera Glacier.</p>
                  </div>
                </div>

                <!-- Highlight 11: 200-Year-Old Lungsumgba Gompa Rock Shrine -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Temple / Gompa -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      </svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">Visit the Ancient 200-Year-Old Lungsumgba Rock Gompa</h3>
                  </div>
                  <div class="ebc-peak-tags">
                    <span class="ebc-peak-tag"><span>Heritage:</span> 200-Year-Old Tibetan Shrine</span>
                    <span class="ebc-peak-tag"><span>Tradition:</span> Butter Lamp Puja</span>
                    <span class="ebc-peak-tag"><span>Culture:</span> Rai & Sherpa Mountain Lore</span>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>Between Kothe and Thangnak, nestled beneath an immense granite boulder overhang, lies the sacred 200-year-old Buddhist sanctuary of Lungsumgba Gompa. Carved directly into the rock face and painted with traditional Tibetan Buddhist iconography, this ancient hermitage has blessed generations of Himalayan mountaineers.</p>
                    <p>Climbing Sherpas and trekkers pause here to light brass butter lamps, hang prayer flags, and pray for safe mountain passage and favorable weather. Meeting local lamas and experiencing this deeply spiritual mountain ritual adds profound cultural depth to your physical journey through the Hinku Valley.</p>
                  </div>
                </div>

                <!-- Highlight 12: Elite Mountain Safety Team & Contingency Reserve -->
                <div class="ebc-highlight-card">
                  <div class="ebc-highlight-top">
                    <div class="ebc-highlight-icon-box">
                      <!-- Shield & Check -->
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <polyline points="9 12 11 14 15 10"></polyline>
                      </svg>
                    </div>
                    <h3 class="ebc-highlight-card-title">Dedicated 1:2 Summit Guiding Ratio & Weather Reserve Day</h3>
                  </div>
                  <div class="ebc-peak-tags">
                    <span class="ebc-peak-tag"><span>Summit Ratio:</span> 1:2 Certified Sherpa Guide</span>
                    <span class="ebc-peak-tag"><span>Medical:</span> Twice-Daily Pulse Oximetry</span>
                    <span class="ebc-peak-tag"><span>Contingency:</span> Built-in Day 15 Buffer</span>
                  </div>
                  <div class="ebc-highlight-body">
                    <p>Climbing above 6,000 meters requires uncompromising safety standards. On summit night, Namaste Hiking Trek guarantees a dedicated <strong>1:2 guide-to-climber ratio</strong> with licensed UIAGM/NMA Climbing Sherpas. This ensures every pair of climbers has a personal alpine mentor managing rope tension, pacing, nutrition, and psychological encouragement.</p>
                    <p>Safety is further reinforced with twice-daily digital pulse oximeter saturation checks, comprehensive altitude medical kits, and our built-in Day 15 weather reserve day in Khare. If high winds or fresh snow disrupt our planned summit push, we have the flexibility to make a second attempt without jeopardizing flight schedules.</p>
                  </div>
                </div>

              </div>

              <!-- Enhanced At a Glance Summary Box -->
              <div class="ebc-glance-box">
                <div class="ebc-glance-header">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <div>
                    <h3 style="font-size: 1.3rem; margin: 0; color: var(--color-primary-navy); font-weight: 700;">At a Glance: The 10 Landmark Milestones You Will Experience</h3>
                    <p style="margin: 4px 0 0 0; font-size: 0.92rem; color: var(--color-neutral-600);">Key reference altitudes, passes, camps, and achievements across your 18-day Mera Peak expedition.</p>
                  </div>
                </div>

                <div class="ebc-glance-grid">
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Mera Peak Central Summit:</strong> Stand on Nepal's highest trekking peak at <span data-altitude-m="6476">6,476 m (21,247 ft)</span> on Day 14.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Five 8,000m Giants:</strong> Unmatched 360° summit panorama of Everest, Lhotse, Makalu, Cho Oyu & Kanchenjunga.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Mera High Camp:</strong> Sleep perched above the clouds in 4-season geodesic tents at <span data-altitude-m="5780">5,780 m</span>.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Khare Base Camp:</strong> Alpine staging hub at <span data-altitude-m="5045">5,045 m</span> featuring hands-on pre-climbing glacier clinic.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Zatrwa La Pass:</strong> Exhilarating return traverse across the high rocky ridge at <span data-altitude-m="4610">4,610 m</span> on Day 17.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Sabai Tsho Glacial Lake:</strong> Active acclimatization hike to Charpate Ridge at <span data-altitude-m="5000">5,000 m</span>.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Pangkongma La Pass:</strong> Scenic rhododendron ridge crossing at <span data-altitude-m="3174">3,174 m</span> along the quiet southern trail.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Untouched Hinku Wilderness:</strong> Deep river canyons, ancient forests, and tranquil Rai & Sherpa settlements.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>200-Year-Old Lungsumgba Gompa:</strong> Sacred cliffside Buddhist monastery for traditional expedition blessing.</div>
                  </div>
                  <div class="ebc-glance-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
                    <div><strong>Dedicated Weather Contingency:</strong> Integrated Day 15 reserve day maximizing team safety and summit success.</div>
                  </div>
                </div>
              </div>

            </div>\n\n            `;

html = html.substring(0, sIdx) + newHighlightsHtml + html.substring(eIdx);

fs.writeFileSync('trek/mera-peak-climbing-trek/index.html', html, 'utf8');
console.log('Successfully upgraded Mera Peak Climbing Highlights section to 12 deep-dive cards and enhanced glance box!');

