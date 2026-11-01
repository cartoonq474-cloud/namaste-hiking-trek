const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'trek', 'langtang-valley-trek', 'index.html');
let html = fs.readFileSync(targetPath, 'utf8');

const s6Start = html.indexOf('<section id="section-details" class="trek-detail-section">');
const s7Start = html.indexOf('<!-- Section 6: Map & Elevation -->') !== -1 
  ? html.indexOf('<!-- Section 6: Map & Elevation -->') 
  : html.indexOf('<section id="section-altitude-profile"');

if (s6Start === -1 || s7Start === -1) {
  console.error('Could not find Section 6 boundaries!');
  process.exit(1);
}

const newSection6 = `<section id="section-details" class="trek-detail-section">
            <div class="details-section-container">
              <!-- Heading -->
              <div class="details-title-wrapper">
                <h2 class="details-main-title">Read before you book: Langtang Valley Trek</h2>
                <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <!-- Subtitle Paragraphs -->
              <p class="details-subtitle-text">To help you decide if the 14-day Langtang Valley Trek is the right adventure for you, we have prepared detailed guidelines on road transport, elevation, teahouses, permits, and seasonal trail conditions.</p>
              <p class="details-subtitle-text" style="margin-bottom: 24px;">If you have any specific questions about your fitness, group size, or private upgrades, email or <a href="https://wa.me/9779800000000" target="_blank" style="color: var(--color-copper-orange); text-decoration: underline; font-weight: 600;">WhatsApp our lead team</a>. We reply promptly to help you plan.</p>

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
                <!-- Item 1: Accommodation -->
                <div class="detail-accordion-card" data-detail-id="accommodation">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M3 17V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <path d="M3 13h18"></path>
                          <circle cx="8" cy="9" r="1.5"></circle>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Accommodation for the Langtang Valley Trek</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>On this 14-day itinerary, you stay 4 nights in a quality hotel in Kathmandu (Thamel) and 8 nights in local mountain teahouses along the trekking trail.</p>
                      
                      <h5 style="font-size: 1rem; color: var(--color-primary-navy); margin: 16px 0 8px 0; font-weight: 700;">What to expect in Kathmandu</h5>
                      <p>We accommodate our guests in a well-appointed 3-star hotel in Thamel on a twin-sharing basis (or private room upon request). Rooms feature private en-suite bathrooms, high-speed Wi-Fi, 24/7 hot water, comfortable bedding, and included daily breakfast.</p>
                      
                      <h5 style="font-size: 1rem; color: var(--color-primary-navy); margin: 16px 0 8px 0; font-weight: 700;">What to expect in Langtang Teahouses</h5>
                      <p>The Langtang Valley Trek is an established teahouse route. Lodges in Syabrubesi, Lama Hotel, Langtang Village, and Kyanjin Gompa provide twin-bed rooms with mattresses, pillows, and blankets. Rooms are clean but unheated; bringing a warm four-season sleeping bag (-15°C to -20°C rating) is strongly recommended for nights at Kyanjin Gompa (3,870 m).</p>
                      <p>Bathrooms are communal, with a mix of Western sitting toilets and squat toilets. Hot showers heated by gas geysers or solar are available at lower settlements and at Kyanjin Gompa for a small fee (approx. USD 3–5). Dining halls are heated in the evenings by central wood or briquette stoves.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 2: Available Food -->
                <div class="detail-accordion-card" data-detail-id="food">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                          <line x1="6" y1="1" x2="6" y2="4"></line>
                          <line x1="10" y1="1" x2="10" y2="4"></line>
                          <line x1="14" y1="1" x2="14" y2="4"></line>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Available Food in Langtang Valley Trek</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Teahouse menus in Langtang offer wholesome, energizing meals prepared fresh to order. The staples include:</p>
                      <p><strong>Dal Bhat Tarkari:</strong> The national trekking powerhouse consisting of steamed rice, spiced lentil soup, vegetable curry, and pickles. It is freshly cooked, easily digestible, and comes with free refills—earning the famous saying 'Dal Bhat Power, 24 Hour!'</p>
                      <p><strong>Other Meals:</strong> Vegetable fried rice, chow mein noodles, potato rosti, momo dumplings, garlic soup (great for acclimatization), chapati, Tibetan bread, porridge, muesli, and eggs cooked to your preference.</p>
                      <p><strong>Kyanjin Yak Cheese:</strong> At Kyanjin Gompa, you can sample and buy authentic yak cheese produced at the historic local dairy facility established with Swiss assistance in the 1950s.</p>
                      <p>We recommend a predominantly vegetarian diet on the trail for optimal digestive comfort and hygiene at higher elevations.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 3: Best Time -->
                <div class="detail-accordion-card" data-detail-id="best-time">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="5"></circle>
                          <line x1="12" y1="1" x2="12" y2="3"></line>
                          <line x1="12" y1="21" x2="12" y2="23"></line>
                          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                          <line x1="1" y1="12" x2="3" y2="12"></line>
                          <line x1="21" y1="12" x2="23" y2="12"></line>
                          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Best Time to Trek the Langtang Valley</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>The two prime trekking seasons in the Langtang region are <strong>Spring (March to May)</strong> and <strong>Autumn (September to November)</strong>.</p>
                      <p><strong>Spring (March - May):</strong> Temperatures are moderate, rhododendron forests explode in red and pink blooms across the middle valley, and days are pleasantly long with crystal clear mornings.</p>
                      <p><strong>Autumn (September - November):</strong> Post-monsoon clarity brings the sharpest mountain visibility of the year, stable weather, and deep blue Himalayan skies. Daytime trekking temperatures are comfortable, though nights at Kyanjin Gompa drop below freezing.</p>
                      <p><strong>Winter (December - February):</strong> Quiet trails and pristine snowy peaks, but severe cold at Kyanjin Gompa and snow may close higher viewpoints. Monsoon (June - August) brings frequent rain in the lower forest and potential highway landslides.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 4: A Typical Day -->
                <div class="detail-accordion-card" data-detail-id="typical-day">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">A Typical Day on the Langtang Valley Trek</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Each trekking day follows an enjoyable, healthy mountain rhythm:</p>
                      <p><strong>Morning:</strong> Wake up around 6:30–7:00 AM, pack your main duffle bag for the porters, and enjoy a hearty breakfast with hot ginger tea in the lodge dining room. Trekking starts around 7:45–8:00 AM while the mountain air is fresh and views are crisp.</p>
                      <p><strong>Midday:</strong> Walk for 3 to 4 hours with water and photography breaks, stopping around noon at a scenic riverside lodge for a cooked lunch and 1 hour of rest.</p>
                      <p><strong>Afternoon:</strong> Walk another 2 to 3 hours to reach your scheduled overnight village by 2:30–3:30 PM. Check into your room, change into dry warm clothes, and explore the village or relax.</p>
                      <p><strong>Evening:</strong> Gather in the warm dining room around 6:30 PM for dinner. Your guide checks your oxygen levels with a pulse oximeter, reviews the day, and briefs you on tomorrow's trail before heading to bed around 9:00 PM.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 5: Permits -->
                <div class="detail-accordion-card" data-detail-id="permits">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Permits for Langtang Valley Trek</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Two official permits are mandatory for the Langtang Valley Trek:</p>
                      <p><strong>1. Langtang National Park Entry Permit:</strong> NPR 3,000 per person (approx. USD 25–30). Issued by the Department of National Parks and Wildlife Conservation.</p>
                      <p><strong>2. TIMS Card (Trekkers' Information Management System):</strong> NPR 2,000 per person (approx. USD 16–20). Issued by the Nepal Tourism Board (NTB) / Trekking Agencies' Association of Nepal (TAAN).</p>
                      <p>Both permits are fully included in your Namaste Hiking Trek package. We arrange all permits in Kathmandu prior to departure—you simply provide your passport copy and 2 passport photos.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 6: Acclimatization -->
                <div class="detail-accordion-card" data-detail-id="acclimatization">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Acclimatization during the Langtang Valley Trek</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Altitude safety is the cornerstone of our Langtang itinerary design. The route climbs gradually from Syabrubesi (1,420 m) to Lama Hotel (2,480 m), Langtang Village (3,430 m), and Kyanjin Gompa (3,870 m).</p>
                      <p>Our 14-day schedule incorporates <strong>three nights at Kyanjin Gompa</strong>. Having a dedicated acclimatization day on Day 7 allows your body to adjust to sleeping above 3,800 m before attempting the higher viewpoint hike to Kyanjin Ri (4,773 m) or Tserko Ri (4,984 m) on Day 8.</p>
                      <p>Our guides carry medical pulse oximeters to check your oxygen saturation (SpO2) twice daily. The golden rules apply: climb high, sleep low, maintain 3–4 liters of daily water intake, walk at a conversational pace, and inform your guide immediately if you experience headache, nausea, or dizziness.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 7: Difficulty -->
                <div class="detail-accordion-card" data-detail-id="difficulty">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Difficulty and Physical Fitness Required for Langtang Valley Trek</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>The classic Langtang Valley Trek is graded <strong>Moderate</strong>. It does not require technical mountaineering skills, ropes, crampons, or glacier crossings on the standard route.</p>
                      <p>However, it is a multi-day mountain trek involving 5 to 7 hours of daily walking across uneven stone steps, forest trails, suspension bridges, and sustained elevation gains and losses. The highest sleeping elevation is 3,870 m, and optional hikes reach up to 4,984 m.</p>
                      <p><strong>Recommended Preparation:</strong> Start cardiovascular and leg endurance training 6 to 8 weeks prior to departure. Focus on stair climbing, uphill and downhill hill walking, squats, and brisk hiking carrying a 5–7 kg daypack. Good trekking poles are invaluable for protecting knees during the long descent.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 8: Culture -->
                <div class="detail-accordion-card" data-detail-id="culture">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Cultural Insights: Tamang Heritage and Buddhist Traditions</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>The Langtang Valley is the ancestral heartland of the Tamang and Tibetan-origin Bhotia communities. Their culture is deeply interwoven with Tibetan Buddhism:</p>
                      <p><strong>Sacred Monuments:</strong> The trail is lined with intricately carved mani walls (stones etched with the mantra <em>Om Mani Padme Hum</em>), whitewashed chortens, and colorful prayer flags carrying prayers on the mountain winds. Always pass mani walls and stupas clockwise.</p>
                      <p><strong>Kyanjin Gompa:</strong> Believed to be centuries old, this sacred monastery provides a serene sanctuary for meditation and religious ceremonies. Trekkers are welcome to enter quietly, observe butter lamps, and experience Buddhist puja rituals.</p>
                      <p><strong>Hospitality:</strong> Staying in family-run teahouses gives you direct contact with locals, their craftsmanship, cuisine, and mountain folklore.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 9: Route Alternatives -->
                <div class="detail-accordion-card" data-detail-id="route-alternatives">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Route and Alternatives for the Langtang Valley Trek</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>The standard classic route is an out-and-back journey through the Langtang Khola valley: Syabrubesi → Lama Hotel → Langtang Village → Kyanjin Gompa and return.</p>
                      <p>While compressed 7 or 8-day itineraries exist, our 14-day package provides full arrival/departure buffer days in Kathmandu, scenic daylight road travel, and 3 nights at Kyanjin Gompa for safe acclimatization and viewpoint exploration.</p>
                      <p>For trekkers seeking longer circuits, Langtang connects seamlessly into the <strong>Tamang Heritage Trail</strong> (adding 4–5 days via Gatlang and Tatopani) or the <strong>Sacred Gosaikunda Lake and Laurebina Pass Trek</strong> crossing over to Helambu.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 10: Overland Road Travel -->
                <div class="detail-accordion-card" data-detail-id="road-travel">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                          <line x1="1" y1="10" x2="23" y2="10"></line>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Overland Road Travel: Driving from Kathmandu to Syabrubesi</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>One of the primary benefits of the Langtang trek is that it requires <strong>no domestic flights</strong>, completely avoiding the weather cancellations common in Lukla or Jomsom.</p>
                      <p>The drive from Kathmandu to Syabrubesi covers approximately 120–130 kilometres and takes 6 to 8 hours depending on road conditions and local traffic. The route passes through Galchhi, Trishuli Bazaar, and the district capital of Dhunche before winding down to the river confluence at Syabrubesi (1,420 m).</p>
                      <p>The road is paved for the first half, with unpaved and bumpy mountain sections between Betrawati and Dhunche. We utilize rugged four-wheel-drive private jeeps or tourist vehicles to ensure a comfortable and safe overland journey.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 11: Different Age Groups -->
                <div class="detail-accordion-card" data-detail-id="age-groups">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Langtang Valley Trek for Families, Solo & Older Trekkers</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Because Langtang combines moderate trail stages with road access, it is exceptionally adaptable across age groups:</p>
                      <p><strong>Families:</strong> Excellent for active children and teenagers (ages 8+). Stages can be shortened if needed, and teahouses provide comfortable environments. The high viewpoint hikes on Day 8 can be kept gentle or optional.</p>
                      <p><strong>Older Travelers:</strong> Highly recommended due to the progressive ascent rate and absence of mountain flights. We recommend trekking poles, porter support for all luggage, and a private jeep transfer for maximum road comfort.</p>
                      <p><strong>Solo Travelers:</strong> Under government regulations, solo trekkers must have a licensed guide. Our private guide and porter arrangement ensures 100% safety, companionship, and personalized pacing.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 12: Trip Extensions -->
                <div class="detail-accordion-card" data-detail-id="extensions">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="13 17 18 12 13 7"></polyline>
                          <polyline points="6 17 11 12 6 7"></polyline>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Extend Your Trip: Gosaikunda Lakes or Tamang Heritage Trail</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>If you have extra time in Nepal, you can easily combine the Langtang Valley Trek with neighboring circuits:</p>
                      <p><strong>Gosaikunda Lake Trek (+4–5 days):</strong> Divert at Thulo Syabru to climb to the holy alpine lakes of Gosaikunda (4,380 m), sacred to both Hindus and Buddhists.</p>
                      <p><strong>Helambu Circuit (+3–4 days):</strong> Cross the Laurebina Pass (4,610 m) from Gosaikunda and trek through the lush Sherpa villages of Helambu, walking all the way back to the Kathmandu rim at Sundarijal.</p>
                      <p><strong>Chitwan Jungle Safari (+3 days):</strong> Relax after your mountain trek with a sub-tropical wildlife safari in Chitwan National Park to see one-horned rhinos, Bengal tigers, and gharial crocodiles.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 13: Porter Weight Limit -->
                <div class="detail-accordion-card" data-detail-id="porter-weight">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Porter Weight Limit and Trekking Luggage for Langtang Valley</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>We adhere strictly to ethical porter employment guidelines established by the International Porter Protection Group (IPPG):</p>
                      <p>One porter is assigned to two trekkers, carrying a maximum combined weight of <strong>20 kg (10 kg / 22 lbs per trekker)</strong>. We provide a complimentary heavy-duty waterproof duffle bag for your porter luggage.</p>
                      <p>You carry your own comfortable daypack (25–30 liters) containing daily essentials: water bottle, warm fleece, rain jacket, sunscreen, camera, lip balm, and personal medication. Excess city clothes and travel luggage can be stored for free in our secure Kathmandu office storage room.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 14: Helicopter Upgrade -->
                <div class="detail-accordion-card" data-detail-id="helicopter">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polygon points="12 2 2 22 22 22"></polygon>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Helicopter Options & Sightseeing in the Langtang Valley</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>For trekkers who want to bypass the return hike, we offer a <strong>Helicopter Return Upgrade from Kyanjin Gompa to Kathmandu</strong>.</p>
                      <p>The 30-minute chartered flight lifts off directly from Kyanjin Gompa helipad, soaring over Langtang Lirung, Gosaikunda lakes, and forested ridges before landing in Kathmandu. This upgrade reduces your trek by 3 days while providing unforgettable aerial views.</p>
                      <p>Charter costs range from USD 1,400 to USD 1,800 per private helicopter (seating up to 5 passengers), making it economical when split within a group.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 15: Responsible Trekking -->
                <div class="detail-accordion-card" data-detail-id="responsible-trekking">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Responsible Trekking & Conservation in Langtang National Park</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Langtang National Park is a fragile Himalayan ecological reserve. We practice strict 'Leave No Trace' principles:</p>
                      <p><strong>Plastic Waste Reduction:</strong> Avoid single-use disposable plastic water bottles. Carry reusable metal or Nalgene bottles and utilize water purification tablets, UV SteriPENs, or life straws.</p>
                      <p><strong>Flora & Fauna Protection:</strong> Never pick wild flowers, collect medicinal alpine herbs, or disturb wildlife (especially musk deer, tahr, and red pandas). Stay on designated trails to prevent soil erosion.</p>
                      <p><strong>Community Support:</strong> We employ local guides and porters from the Rasuwa and Langtang regions, patronize locally owned teahouses, and purchase local mountain products such as Kyanjin yak cheese.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 16: Guided vs Independent -->
                <div class="detail-accordion-card" data-detail-id="guided-vs-independent">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <line x1="20" y1="8" x2="20" y2="14"></line>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Independent vs. Guided Trekking in the Langtang Valley</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Under regulations enacted by the Nepal Tourism Board, independent solo trekking without a licensed guide is restricted in national park regions. Trekking with a certified agency such as Namaste Hiking Trek ensures:</p>
                      <p><strong>Safety & Navigation:</strong> Your guide is trained in wilderness first aid, altitude sickness recognition, and route safety across changing weather.</p>
                      <p><strong>Permits & Logistics:</strong> We handle all TIMS registration, park checkpoint inspections, vehicle transfers, and lodge reservations in advance during peak spring and autumn months.</p>
                      <p><strong>Cultural Connection:</strong> Having a local guide bridges language barriers, introducing you to teahouse owners, Tamang traditions, and hidden viewpoints that independent travelers easily miss.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 17: Emergency Evacuation -->
                <div class="detail-accordion-card" data-detail-id="emergency">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Emergency & Evacuation Process</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>In the rare event of acute mountain sickness (AMS) or injury, our emergency protocols take effect immediately:</p>
                      <p><strong>Immediate Assessment:</strong> Your guide evaluates symptoms. For mild AMS, we pause ascent and administer rest, hydration, and medication if advised. If symptoms persist or worsen, immediate descent is initiated.</p>
                      <p><strong>Helicopter Evacuation:</strong> In severe cases (suspected HAPE or HACE), our Kathmandu headquarters coordinates emergency helicopter dispatch from Tribhuvan International Airport to Kyanjin Gompa or Langtang Village. Flight time is approximately 25 to 30 minutes in clear weather.</p>
                      <p>Ensure your travel insurance policy explicitly covers emergency helicopter evacuation up to 5,000 meters.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 18: Money & ATMs -->
                <div class="detail-accordion-card" data-detail-id="money">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                          <circle cx="12" cy="12" r="2"></circle>
                          <path d="M6 12h.01M18 12h.01"></path>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Money Exchange and Cash Planning for Langtang Trek</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>There are <strong>no reliable ATMs</strong> along the trekking trail beyond Dhunche and Syabrubesi, and mountain lodges do not accept credit cards.</p>
                      <p>You must withdraw or exchange sufficient Nepalese Rupees (NPR) in Kathmandu before departure. We recommend budgeting approximately <strong>USD 15 to USD 25 (NPR 2,000–3,500) per person per day</strong> on the trail to cover hot showers, device charging, boiled drinking water, Wi-Fi, specialty coffee, snacks, and personal tipping.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 19: Cost & Booking -->
                <div class="detail-accordion-card" data-detail-id="booking-process">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Cost and the Booking Process for Langtang Valley Trek</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Our 14-day Langtang Valley Trek starts at <strong>USD 1,299 per person</strong> on a full-board basis, with generous group discounts for parties of 2 to 8+ people.</p>
                      <p><strong>How to Book:</strong> Select your preferred date from our live booking calendar, submit your inquiry, and pay a 20% deposit via our secure online card portal. The remaining balance can be settled upon arrival in Kathmandu via credit card or cash.</p>
                      <p>We provide instant confirmation and open your personalized client portal where you can submit passport copies, insurance details, and dietary preferences.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 20: Tipping -->
                <div class="detail-accordion-card" data-detail-id="tipping">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Tipping Culture in Nepal</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Tipping is customary in the Nepalese trekking industry and serves as a direct, meaningful expression of appreciation for your crew's hard work, mountain vigilance, and hospitality.</p>
                      <p>While tipping remains entirely at your discretion, general guidelines recommend budgeting approximately <strong>10% to 15% of your total trip cost</strong> for the support crew. For a 14-day trek, a typical tip is USD 100–140 for the guide and USD 70–100 per porter from the group, handed out in separate tip envelopes on the final evening in Syabrubesi or Kathmandu.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 21: Important Notes -->
                <div class="detail-accordion-card" data-detail-id="important-notes">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Important Practical Notes for Langtang Valley Trek</h4>
                    </div>
                    <div class="detail-accordion-chevron">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p><strong>Connectivity:</strong> Nepal Telecom (NTC) and Ncell provide intermittent mobile data coverage along the trail up to Kyanjin Gompa, though signals can drop inside the deeper forest canyon. Some lodges at Kyanjin offer paid satellite Wi-Fi cards (Everest Link / AirJaldi).</p>
                      <p><strong>Charging Devices:</strong> Teahouses charge fees (approx. NPR 200–500 per device or power bank) for solar/hydro charging. Bring a 20,000mAh power bank to remain self-sufficient.</p>
                      <p><strong>Drinking Water:</strong> Safe drinking water stations, boiled water, and filtration tablets should be used exclusively. Never drink untreated water directly from taps or streams.</p>
                      <p><strong>Flexibility:</strong> Mountain travel always requires flexibility regarding weather, trail pace, and road transfers. Our guides hold full authority to modify daily stages to ensure the safety and well-being of the group.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>\n\n          `;

html = html.substring(0, s6Start) + newSection6 + html.substring(s7Start);
fs.writeFileSync(targetPath, html, 'utf8');
console.log('Section 6 updated successfully! New length:', html.length);
