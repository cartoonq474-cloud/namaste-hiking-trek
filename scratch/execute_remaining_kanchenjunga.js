const fs = require('fs');

console.log('Reading index.html...');
let html = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8');

// ==========================================
// 1. UPDATE SECTION 4 (PACKING LIST HEADER)
// ==========================================
console.log('1. Updating Section 4 Packing List header...');
html = html.replace(
  'Packing List for Kanchenjunga Base Camp Trek',
  'Packing List for Kanchenjunga Circuit Trek (26 Days)'
);

// Update subtitle note if present
html = html.replace(
  'Essential Info: Don’t have it? Rent it with us — <strong>USD 1/day per item</strong>',
  'Essential 26-Day Remote Wilderness Packing List. Facilities on the Kanchenjunga circuit are remote, so bringing a 4-season (-20°C) sleeping bag, reliable power banks, and durable thermal layers is vital. Don’t have it? Rent it with us — <strong>USD 1/day per item</strong>'
);

// ==========================================
// 2. UPDATE SECTION 5 (TRIP DETAILS ACCORDION)
// ==========================================
console.log('2. Building Section 5 (Trip Details: 21 Accordion Cards)...');

const s5StartMarker = '<!-- Section 5: Trip Details -->';
const s6StartMarker = '<!-- Section 6: Map & Elevation -->';

const idx5 = html.indexOf(s5StartMarker);
const idx6 = html.indexOf(s6StartMarker);

if (idx5 === -1 || idx6 === -1) {
  console.error('ERROR: Could not find Section 5 or Section 6 marker!', { idx5, idx6 });
  process.exit(1);
}

const section5Html = `<!-- Section 5: Trip Details -->
          <section id="section-details" class="trek-detail-section">
            <div class="details-section-container">
              <!-- Heading -->
              <div class="details-title-wrapper">
                <h2 class="details-main-title">Read Before You Book: Kanchenjunga Circuit Trek (26 Days)</h2>
                <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <!-- Subtitle Paragraphs -->
              <p class="details-subtitle-text">To help you prepare thoroughly for eastern Nepal's premier 26-day wilderness expedition, we have compiled comprehensive operational details on transport, route difficulty, permits, high-altitude safety, and seasonal conditions below.</p>
              <p class="details-subtitle-text" style="margin-bottom: 24px;">Need tailored advice for your group or fitness level? Speak directly with our Himalayan specialists via email or <a href="https://wa.me/9779800000000" target="_blank">WhatsApp us</a>. We respond promptly with genuine mountain guidance.</p>

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
                      <h4 class="detail-accordion-title">Accommodation Across the Kanchenjunga Circuit</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Accommodation along the Kanchenjunga Circuit consists of authentic, family-run mountain teahouses and rustic lodges. Unlike the heavily commercialized trails of Everest or Annapurna, eastern Nepal retains an untouched wilderness atmosphere with simpler facilities.</p>
                      <p>In lower settlements like Mitlung, Chirwa, and Sukathum, lodges are constructed from local wood and stone, offering basic twin-bedded rooms. As you ascend toward Ghunsa (<span data-altitude-m="3475">3,475 m</span>), Khambachen (<span data-altitude-m="4050">4,050 m</span>), and Lhonak (<span data-altitude-m="4770">4,770 m</span>), teahouses become progressively more rustic. Rooms feature twin wooden foam beds, and unheated bedrooms mean a four-season (-20°C rated) down sleeping bag is essential for nighttime warmth.</p>
                      <p>Dining halls are heated in the evenings by central wood or yak-dung stoves, providing a warm communal gathering point. In Kathmandu, you enjoy 3 nights in a comfortable 3-star standard hotel with private ensuite bathrooms and complimentary breakfast.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 2: Food & Nutrition -->
                <div class="detail-accordion-card" data-detail-id="food">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Food & Nutrition on Remote Eastern Trails</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Fueling your body with carbohydrates and warm liquids is critical during 22 consecutive days of mountain hiking. Teahouses prepare freshly made, wholesome meals using local ingredients.</p>
                      <p><strong>Traditional Dal Bhat:</strong> Steamed rice, organic lentil soup, spiced vegetable curry, and pickled greens remain the staple trekking fuel ("Dal Bhat Power 24 Hour"), complete with complimentary refills.</p>
                      <p><strong>Breakfast & Lunch Options:</strong> Porridge, tsampa (roasted barley porridge), Tibetan bread, chapati, pancakes, eggs (boiled, omelet, or fried), vegetable noodles, thukpa noodle soup, momos (steamed dumplings), and potato rosti.</p>
                      <p><strong>Hydration:</strong> Drink 3 to 4 liters of purified water or hot tea (ginger, lemon, honey, black tea) daily to combat dehydration and reduce the risk of altitude illness.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 3: Best Time & Seasons -->
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
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Best Time & Seasons for Kanchenjunga Circuit</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>The Kanchenjunga Circuit Trek is best undertaken during two distinct trekking seasons:</p>
                      <p><strong>Autumn (Mid-September to Late November):</strong> The most popular and reliable window. Post-monsoon air is crystal-clear, offering panoramic views of Kanchenjunga (<span data-altitude-m="8586">8,586 m</span>), Jannu, and Yalung Kang. Days are sunny and crisp, and high passes such as Sele Le (<span data-altitude-m="4290">4,290 m</span>) are generally free of heavy winter snow.</p>
                      <p><strong>Spring (March to Late May):</strong> Warmer temperatures and magnificent rhododendron, magnolia, and orchid blooms across lower and mid-elevation valleys. Snow lines gradually recede, allowing access to Pangpema (<span data-altitude-m="5143">5,143 m</span>). Afternoons can see cloud build-up, but morning clarity is exceptional.</p>
                      <p><strong>Winter & Monsoon:</strong> Winter (December–February) brings extreme freezing conditions and heavy snow that can close Sele Le pass and Lhonak lodges. Summer monsoon (June–August) brings torrential rainfall, muddy trails, and leeches in lower river valleys.</p>
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
                      <h4 class="detail-accordion-title">A Typical Day on the Kanchenjunga Circuit</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>A structured daily routine helps maintain high energy and morale throughout a 26-day expedition:</p>
                      <p><strong>Morning:</strong> Wake around 6:30 AM to hot tea and pack your main duffle for the porters. A hearty breakfast is served around 7:00 AM, and walking begins by 7:30 to 8:00 AM to make the most of clear morning weather.</p>
                      <p><strong>Midday:</strong> Walk 3 to 4 hours along river gorges, alpine forests, or moraine terraces. We stop at a trail teahouse for a freshly cooked 1-hour lunch break.</p>
                      <p><strong>Afternoon:</strong> Walk an additional 2 to 3 hours to the destination teahouse. Settle into your room, change into dry evening thermal clothes, and relax in the communal dining hall.</p>
                      <p><strong>Evening:</strong> Dinner is served around 6:30–7:00 PM. Your guide checks everyone's blood oxygen saturation (SpO2) and pulse with a portable oximeter, reviews the following day's trail conditions, and outlines water and clothing needs before a restful night's sleep.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 5: Permits & Regulations -->
                <div class="detail-accordion-card" data-detail-id="permits">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Permits & Restricted Area Regulations</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>The Kanchenjunga region borders India (Sikkim) and the Tibet Autonomous Region of China and is classified as a sensitive border sanctuary by the Government of Nepal. Specific legal requirements apply:</p>
                      <p><strong>1. Restricted Area Permit (RAP):</strong> Issued exclusively by the Department of Immigration in Kathmandu through a licensed trekking agency. Cost: USD $20 per person per week (covering the 4-week expedition duration). Independent trekking is strictly prohibited.</p>
                      <p><strong>2. Minimum Group Requirement:</strong> Under Nepal immigration law, a minimum of 2 registered trekkers accompanied by a government-certified guide is mandatory for permit issuance.</p>
                      <p><strong>3. Kanchenjunga Conservation Area Project (KCAP):</strong> NPR 3,000 (approx. USD $25) conservation entry fee per person, supporting local community development, trail maintenance, and wildlife preservation.</p>
                      <p>We handle all permit paperwork, fees, and government verification directly on your behalf in Kathmandu.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 6: Acclimatization & Safety -->
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
                      <h4 class="detail-accordion-title">Acclimatization Strategy & Altitude Safety</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Trekking to Pangpema (<span data-altitude-m="5143">5,143 m</span>) involves spending several days above 4,000 meters. Proper altitude management is central to our 26-day expedition itinerary:</p>
                      <p><strong>Two Dedicated Acclimatization Stops:</strong> We spend two nights at Ghunsa (<span data-altitude-m="3475">3,475 m</span>) on Day 8 & 9, and two nights at Khambachen (<span data-altitude-m="4050">4,050 m</span>) on Day 10 & 11. These rest days feature "climb high, sleep low" day hikes to stimulate red blood cell production before ascending to Lhonak (<span data-altitude-m="4770">4,770 m</span>).</p>
                      <p><strong>Recognizing Acute Mountain Sickness (AMS):</strong> Symptoms include persistent headache, nausea, dizziness, fatigue, and insomnia. Trekkers must report symptoms immediately to their guide.</p>
                      <p><strong>Emergency Medical Protocol:</strong> Our guides carry pulse oximeters, first aid equipment, and Diamox (Acetazolamide). Any trekker showing signs of severe altitude illness (HAPE or HACE) will be escorted down immediately to lower altitude, as descent is the definitive treatment.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 7: Difficulty & Fitness -->
                <div class="detail-accordion-card" data-detail-id="difficulty">
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
                      <h4 class="detail-accordion-title">Difficulty, Fitness & 10-Week Training Plan</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p><strong>Trek Grade: Challenging to Strenuous.</strong> While non-technical (no crampons, ropes, or mountaineering gear required), the 26-day duration, sustained walking (5 to 8 hours daily for over 3 weeks), rough rocky moraines, and the high pass crossing over Sele Le (<span data-altitude-m="4290">4,290 m</span>) demand strong physical endurance and mental fortitude.</p>
                      <p><strong>Recommended 10-Week Training Regimen:</strong></p>
                      <p>• <strong>Weeks 1–4 (Base Conditioning):</strong> 45 minutes of aerobic exercise (brisk hiking, cycling, running, or swimming) 3–4 days weekly, plus leg strength workouts (squats, lunges, calf raises).</p>
                      <p>• <strong>Weeks 5–8 (Specific Endurance):</strong> Weekend hill or stair climbing with a 5–8 kg backpack for 3–5 hours continuously. Focus on pacing and eccentric knee stability for prolonged descents.</p>
                      <p>• <strong>Weeks 9–10 (Taper & Mobility):</strong> Reduce volume to prevent injury. Light cardio, yoga, dynamic stretching, and ensuring your trekking boots are thoroughly broken in.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 8: Culture & Communities -->
                <div class="detail-accordion-card" data-detail-id="culture">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Cultural Heritage: Limbu, Rai, and Bhotia Traditions</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>The Kanchenjunga region is a rich cultural tapestry where indigenous ethnic groups live in harmony with the mountains:</p>
                      <p><strong>Lower Valleys (Limbu & Rai):</strong> As you walk through Mitlung, Chirwa, and Yamphudin, you encounter Limbu and Rai villages known for terraced cardamom and millet farming, distinct Kirat shamanic traditions, and hospitable teahouses serving warm Tongba (fermented warm millet drink sipped through a bamboo straw).</p>
                      <p><strong>Upper Alpine Valleys (Bhotia & Sherpa):</strong> Settlements such as Ghunsa and Phale are inhabited by Bhotia and Sherpa people practicing Tibetan Buddhism. Ghunsa boasts ancient gompas decorated with historic murals, prayer wheels, and mani stones carved with Buddhist mantras.</p>
                      <p>Always walk to the left of chortens and mani walls as a sign of cultural respect.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 9: Route & Alternatives -->
                <div class="detail-accordion-card" data-detail-id="route-alternatives">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                          <line x1="8" y1="2" x2="8" y2="18"></line>
                          <line x1="16" y1="6" x2="16" y2="22"></line>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Route & Elevation Profile Breakdown</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>The 26-day itinerary follows a comprehensive circuit layout connecting both northern and southern valleys of Kanchenjunga:</p>
                      <p><strong>1. Northern Inflow:</strong> Begins at Mitlung (<span data-altitude-m="921">921 m</span>) and gradually tracks the Tamor and Ghunsa river valleys through Chirwa, Sukathum, and Amjilosa up to Ghunsa (<span data-altitude-m="3475">3,475 m</span>).</p>
                      <p><strong>2. North Base Camp Excursion:</strong> Climbs to Khambachen (<span data-altitude-m="4050">4,050 m</span>) beneath the towering north face of Jannu (Kumbhakarna), continuing across the Lhonak sand flats (<span data-altitude-m="4770">4,770 m</span>) to Pangpema (<span data-altitude-m="5143">5,143 m</span>) for the monumental view of Kanchenjunga's northern face.</p>
                      <p><strong>3. High Pass Crossing:</strong> Crosses Sele Le (<span data-altitude-m="4290">4,290 m</span>) and Sinion La pass into the Simbua Khola valley toward Cheram (<span data-altitude-m="3870">3,870 m</span>) and the Yalung Glacier moraine at Ramche (<span data-altitude-m="4580">4,580 m</span>).</p>
                      <p><strong>4. Southern Outflow:</strong> Descends through Tortong, Yamphudin, Mamanke, and Lalikharka back to Suketar.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 10: Transport & Flights -->
                <div class="detail-accordion-card" data-detail-id="flight-lukla">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"></path>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Domestic Flights & Overland Access to Eastern Nepal</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Reaching Taplejung/Suketar in eastern Nepal is part of the expedition adventure:</p>
                      <p><strong>Direct Flight Option:</strong> Scheduled STOL (Short Take-Off and Landing) flights operate between Kathmandu and Suketar Airport (Taplejung, <span data-altitude-m="2419">2,419 m</span>). These flights are weather-dependent and subject to airline scheduling.</p>
                      <p><strong>Overland Alternative via Bhadrapur:</strong> When direct Suketar flights are unavailable, we fly from Kathmandu to Bhadrapur (Chandragadhi Airport) in the lowlands (45-minute flight), followed by a scenic private 4WD jeep drive winding through the famous green tea gardens of Ilam and Kanyam to Taplejung (approx. 8–9 hours).</p>
                      <p>Our team continuously monitors flight schedules and road conditions to guarantee seamless transit to and from the trailhead.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 11: Age Groups & Suitability -->
                <div class="detail-accordion-card" data-detail-id="age-groups">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="7" r="4"></circle>
                          <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2"></path>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Expedition Suitability for Different Age Groups</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Because the Kanchenjunga Circuit Trek is 26 days in duration with remote wilderness sections and basic medical access, it is best suited for experienced adult trekkers aged 18 to 65 with prior multi-day high-altitude hiking experience.</p>
                      <p><strong>Teenagers (Ages 16–17):</strong> May join accompanied by parents or legal guardians, provided they demonstrate proven mountain fitness and enthusiasm for rugged wilderness conditions.</p>
                      <p><strong>Seniors (Ages 60+):</strong> We regularly guide fit seniors who have completed high-altitude treks before. A comprehensive cardiovascular and joint checkup with your physician prior to booking is recommended.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 12: Trip Extensions -->
                <div class="detail-accordion-card" data-detail-id="extend-trip">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="16"></line>
                          <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Extending Your Journey in Eastern Nepal & Beyond</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>If you have extra days after completing your 26-day expedition, eastern Nepal and the Kathmandu Valley offer superb extension options:</p>
                      <p>• <strong>Ilam Tea Garden Retreat (2–3 Days):</strong> Unwind in the rolling misty hills of Kanyam and Ilam, famous for world-class orthodox black teas and homestays.</p>
                      <p>• <strong>Chitwan National Park Safari (3 Days):</strong> Relax in subtropical warmth while tracking one-horned rhinos, royal Bengal tigers, and Asian elephants on jungle safaris.</p>
                      <p>• <strong>Kathmandu Heritage & Cultural Immersion:</strong> Explore Patan Durbar Square, Bhaktapur, and tranquil medieval Newari villages like Panauti and Bandipur.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 13: Porter Welfare -->
                <div class="detail-accordion-card" data-detail-id="porter-limit">
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
                      <h4 class="detail-accordion-title">Porter Weight Limits & Mountain Crew Welfare</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Our porters and mountain staff are the backbone of our Kanchenjunga expeditions. We strictly adhere to the guidelines established by the International Porter Protection Group (IPPG):</p>
                      <p><strong>Weight Limit:</strong> Maximum luggage allowance per trekker for the porter duffle is <strong>10 to 12 kg (22–26 lbs)</strong>. One porter carries luggage for two trekkers (maximum combined load: 20–22 kg).</p>
                      <p><strong>Welfare & Equipment:</strong> Every porter is equipped with warm windproof clothing, insulated jackets, sturdy footwear, gloves, and sunglasses for high-altitude snow conditions. All staff receive fair living wages, medical insurance, and emergency helicopter rescue coverage.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 14: Helicopter Logistics -->
                <div class="detail-accordion-card" data-detail-id="upgrade-heli">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Helicopter Logistics & Emergency Evacuation</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Due to the immense remoteness of the Taplejung district, emergency evacuation is conducted via high-altitude B3 / B3e rescue helicopters dispatched from Kathmandu or Biratnagar.</p>
                      <p><strong>Evacuation Protocol:</strong> If a trekker suffers acute mountain sickness (HAPE/HACE) or serious trauma that prevents walking down, our guide contacts our 24/7 Kathmandu operations desk via satellite phone or mobile network. We coordinate directly with your travel insurance provider to dispatch a rescue helicopter to the nearest cleared landing site (e.g. Ghunsa, Khambachen, Lhonak, or Yamphudin).</p>
                      <p><strong>Insurance Requirement:</strong> Ensure your travel insurance policy explicitly covers emergency helicopter evacuation up to <strong>5,500 m / 18,000 ft</strong> without hidden altitude caps.</p>
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
                      <h4 class="detail-accordion-title">Responsible Trekking & Conservation in KCAP</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>The Kanchenjunga Conservation Area Project (KCAP) is Nepal's first community-managed protected area, home to endangered snow leopards, red pandas, blue sheep, and Himalayan black bears:</p>
                      <p>• <strong>Leave No Trace:</strong> We operate on a strict "pack-it-in, pack-it-out" policy. All non-biodegradable waste (plastics, wrappers, used batteries) is carried out of the sanctuary.</p>
                      <p>• <strong>Water Sustainability:</strong> To eliminate single-use plastic bottles, we require all guests to carry reusable water bottles and use water purification tablets or UV purifiers (SteriPEN).</p>
                      <p>• <strong>Community Support:</strong> We patronize locally owned teahouses and hire local guides and porters from eastern Nepal, ensuring that tourism revenues directly benefit indigenous mountain families.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 16: Guided Regulations -->
                <div class="detail-accordion-card" data-detail-id="guided-vs-independent">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Mandatory Guide Law & Restricted Zone Safety</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Under Government of Nepal immigration regulations, independent trekking is strictly forbidden in the Kanchenjunga region. All foreign nationals must be accompanied by a government-licensed mountain guide registered with a recognized trekking agency.</p>
                      <p>Having an experienced guide is not just a legal requirement; it is your greatest safety asset in remote eastern Nepal. Your guide monitors changing weather patterns, navigates confusing moraines near Pangpema and Sele Le pass, conducts daily health checks, and liaises with local teahouse owners to secure comfortable rooms.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 17: Emergency Protocols -->
                <div class="detail-accordion-card" data-detail-id="emergency-evacuation">
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
                      <h4 class="detail-accordion-title">Medical Readiness & Emergency Evacuation Protocol</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Namaste Hiking Trek enforces a multi-tier safety protocol for our 26-day Kanchenjunga Circuit expeditions:</p>
                      <p><strong>1. Daily Health Diagnostics:</strong> Every morning and evening, your guide monitors your pulse rate and blood oxygen saturation (SpO2) with a medical pulse oximeter.</p>
                      <p><strong>2. Wilderness First Aid:</strong> Our guides carry a comprehensive expedition first-aid kit stocked with altitude medication, broad-spectrum antibiotics, painkillers, rehydration salts, wound dressings, and blister care.</p>
                      <p><strong>3. Communications:</strong> We maintain contact with local checkpoints and regional lodges. In the event of severe illness, our Kathmandu 24/7 emergency coordination team is notified immediately to arrange evacuation.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 18: Money & Currency -->
                <div class="detail-accordion-card" data-detail-id="money-exchange">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <line x1="12" y1="1" x2="12" y2="23"></line>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Money Exchange & Cash Needs on the Circuit</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p><strong>No ATMs Exist Beyond Suketar/Taplejung:</strong> Credit cards and foreign currencies are NOT accepted at teahouses along the Kanchenjunga Circuit. You must withdraw or exchange sufficient Nepalese Rupees (NPR) before departing Kathmandu or Taplejung.</p>
                      <p><strong>Recommended Cash Allowance:</strong> While all meals and lodging on the trail are covered in your package, we recommend carrying approx. <strong>NPR 25,000 to 35,000 (approx. USD $200–$280)</strong> in cash for personal expenses such as hot bucket showers (NPR 300–500), battery charging (NPR 300–500), Wi-Fi where available, extra snacks, and guide/porter gratuities.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 19: Booking Terms & Permits -->
                <div class="detail-accordion-card" data-detail-id="booking-process">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 6v6l4 2"></path>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Booking Terms, Deposit & Permit Verification</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>To confirm your booking for the 26-Day Kanchenjunga Circuit Trek:</p>
                      <p><strong>1. Deposit & Confirmation:</strong> A 20% advance deposit confirms your expedition dates and initiates flight bookings and logistics.</p>
                      <p><strong>2. Passport Verification in Kathmandu:</strong> Nepal Department of Immigration requires your original passport with a valid Nepal visa to finalize the Restricted Area Permit in Kathmandu. This is handled on Day 2 during your sightseeing day.</p>
                      <p><strong>3. Payment Balance:</strong> The remaining trip balance can be settled upon arrival in Kathmandu via cash (USD, EUR, GBP, NPR) or major credit card prior to departure for the trailhead.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 20: Tipping Etiquette -->
                <div class="detail-accordion-card" data-detail-id="tipping-culture">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        <div class="detail-check-bubble">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                      </div>
                      <h4 class="detail-accordion-title">Tipping Culture & Gratuity Guidelines</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>Tipping is customary in the Nepal trekking industry and represents a meaningful way to thank your guide and porters for their dedicated service, hard work, and mountain companionship over 26 days.</p>
                      <p><strong>Recommended Standard:</strong> We suggest budgeting approximately <strong>10% to 15% of the total expedition cost</strong> per trekking group for tips. Typically, 60% of the tipping pool is offered to the head guide and 40% is shared equally among the porters. Tips are customarily presented in separate envelopes on the final evening together in Suketar or Kathmandu.</p>
                    </div>
                  </div>
                </div>

                <!-- Item 21: Operational Notes -->
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
                      <h4 class="detail-accordion-title">Essential Expedition Operational Notes</h4>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-accordion-arrow-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      <p>To ensure a safe and successful journey through eastern Nepal's wildest mountains, please note the following operational realities:</p>
                      <p><strong>1. Day 13 Pangpema Excursion:</strong> Reaching Pangpema (<span data-altitude-m="5143">5,143 m</span>) from Lhonak is an out-and-back high-altitude hike across moraines. If weather is unstable or fatigue sets in, the guide may recommend an intermediate viewpoint along the glacier.</p>
                      <p><strong>2. Day 18/19 Ramche & Cheram:</strong> The visit to Ramche (<span data-altitude-m="4580">4,580 m</span>) is typically conducted as an excursion from Cheram (<span data-altitude-m="3870">3,870 m</span>) where better lodge facilities are maintained, optimizing rest before descending through Tortong.</p>
                      <p><strong>3. Sele Le High Pass Readiness:</strong> Crossing Sele Le (<span data-altitude-m="4290">4,290 m</span>) connects the northern and southern circuits. Early season snow may require microspikes; your guide will assess conditions on Day 15 at Ghunsa.</p>
                      <p><strong>4. Expedition Mindset:</strong> Remote trekking demands flexibility. Weather delays and trail alterations are part of authentic wilderness exploration.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>`;

html = html.substring(0, idx5) + section5Html + '\n\n          ' + html.substring(idx6);

// ==========================================
// 3. UPDATE STICKY SIDEBAR BOOKING CARD
// ==========================================
console.log('3. Updating Sticky Sidebar Booking Card...');
html = html.replace(
  '14 days trip',
  '26 days expedition'
);
html = html.replace(
  'Kanchenjunga Base Camp Trek (Aug 5 - Aug 18, 2026)',
  'Kanchenjunga Circuit Trek (26 Days Expedition)'
);

// ==========================================
// 4. VALIDATE HTML TAG BALANCE
// ==========================================
console.log('4. Validating tag balance across entire file...');
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

fs.writeFileSync('trek/kanchenjunga-base-camp-trek/index.html', html, 'utf8');
console.log('SUCCESS: Section 5 Trip Details, Section 4 Packing header, and Sidebar updated with 100% tag balance!');
