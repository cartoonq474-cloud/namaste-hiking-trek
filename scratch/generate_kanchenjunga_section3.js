const fs = require('fs');

const sec3Html = `<!-- Section 3: Includes and Excludes -->
          <section id="section-includes" class="trek-detail-section">
            <style>
              .inc-exc-container {
                margin-top: 10px;
              }
              .inc-exc-section-title-wrapper {
                border-left: 4px solid var(--color-copper-orange);
                padding-left: 14px;
                margin-bottom: 24px;
                margin-top: 30px;
              }
              .inc-exc-section-title {
                font-size: 1.8rem;
                margin: 0;
                color: var(--color-primary-navy);
                font-weight: 700;
              }
              .inc-exc-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
                margin-bottom: 40px;
              }
              .inc-exc-card {
                background: var(--color-white);
                border: 1px solid #e2e8f0;
                border-radius: 16px;
                padding: 20px;
                display: flex;
                gap: 14px;
                transition: all var(--transition-fast);
              }
              .inc-exc-card:hover {
                border-color: var(--color-copper-orange);
                box-shadow: 0 8px 20px rgba(16, 185, 129, 0.05);
                transform: translateY(-1px);
              }
              .inc-exc-card.exclude-card:hover {
                border-color: #ef4444;
                box-shadow: 0 8px 20px rgba(239, 68, 68, 0.05);
              }
              .inc-exc-icon-box {
                flex-shrink: 0;
                margin-top: 2px;
              }
              .inc-exc-card-content {
                display: flex;
                flex-direction: column;
                gap: 6px;
              }
              .inc-exc-card-title {
                font-size: 1rem;
                font-weight: 700;
                color: var(--color-primary-navy);
                line-height: 1.4;
              }
              .inc-exc-card-text {
                font-size: 0.9rem;
                line-height: 1.5;
                color: var(--color-neutral-600);
              }
              @media (max-width: 800px) {
                .inc-exc-grid {
                  grid-template-columns: 1fr;
                  gap: 16px;
                }
              }
            </style>

            <div class="inc-exc-container">
              <!-- Includes Heading -->
              <div class="inc-exc-section-title-wrapper">
                <h2 class="inc-exc-section-title">What's Included in the 26-Day Kanchenjunga Circuit</h2>
                <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <!-- Includes Grid -->
              <div class="inc-exc-grid">
                <!-- Include 1: Airport Transfers -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">International Airport Transfers in Kathmandu</h4>
                    <p class="inc-exc-card-text">Private vehicle pick-up upon arrival on Day 1 and drop-off on Day 26 at Tribhuvan International Airport (TIA) with personalized meet-and-greet support.</p>
                  </div>
                </div>

                <!-- Include 2: Domestic Flights & Overland Transport -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Eastern Nepal Flights & Overland Transfers</h4>
                    <p class="inc-exc-card-text">Scheduled domestic airfare Kathmandu–Suketar roundtrip (or scheduled Bhadrapur flight with scenic private 4WD jeep connections to Taplejung/Suketar) as per confirmed itinerary.</p>
                  </div>
                </div>

                <!-- Include 3: Restricted Area Permit -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Kanchenjunga Restricted Area Permit (RAP)</h4>
                    <p class="inc-exc-card-text">Official Government of Nepal Restricted Area Permit issued through the Department of Immigration (USD $20 per trekker per week for the 4-week duration), handled completely by us.</p>
                  </div>
                </div>

                <!-- Include 4: KCAP Entry Permit -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">KCAP Conservation Area & Municipality Fees</h4>
                    <p class="inc-exc-card-text">Kanchenjunga Conservation Area Project (KCAP) national park entry fees and rural municipality local government entry taxes paid and certified.</p>
                  </div>
                </div>

                <!-- Include 5: Licensed Guide -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Licensed Mountain Guide (Restricted Zone Certified)</h4>
                    <p class="inc-exc-card-text">Professional, English-speaking, government-licensed mountain trekking guide certified in wilderness first aid, high-altitude safety protocols, and route management.</p>
                  </div>
                </div>

                <!-- Include 6: Porters -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Expedition Porters (1 Porter for 2 Trekkers)</h4>
                    <p class="inc-exc-card-text">Dedicated local mountain porters carrying your main luggage (up to 10–12 kg per trekker), allowing you to walk comfortably with just a daypack containing your essentials.</p>
                  </div>
                </div>

                <!-- Include 7: Hotel in Kathmandu -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">3 Nights Standard Hotel in Kathmandu</h4>
                    <p class="inc-exc-card-text">Comfortable twin-share hotel accommodation in central Kathmandu (Day 1 arrival, Day 2 prep, and Day 25 post-trek) with daily breakfast included.</p>
                  </div>
                </div>

                <!-- Include 8: Teahouse Accommodation -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">21 Nights Mountain Teahouses & Lodges</h4>
                    <p class="inc-exc-card-text">Carefully selected local lodges and authentic mountain teahouses across the circuit (Ghunsa, Khambachen, Lhonak, Sele Le, Cheram, Tortong, Yamphudin, and lower villages).</p>
                  </div>
                </div>

                <!-- Include 9: Full Board Meals -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Full Board Meals During Trek (22 Days)</h4>
                    <p class="inc-exc-card-text">3 wholesome, energizing meals daily (breakfast, lunch, dinner) chosen from teahouse menus, accompanied by hot tea or coffee at every meal to sustain endurance.</p>
                  </div>
                </div>

                <!-- Include 10: Medical & Pulse Oximeter -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Pulse Oximeter & High-Altitude First Aid Kit</h4>
                    <p class="inc-exc-card-text">Daily SpO2 oxygen saturation and pulse checks morning and evening by your guide, along with a comprehensive wilderness first aid kit and AMS safety protocols.</p>
                  </div>
                </div>

                <!-- Include 11: Expedition Gear -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Expedition Duffle Bag & Route Map</h4>
                    <p class="inc-exc-card-text">Complimentary 100L waterproof Namaste Hiking Trek expedition duffle bag for porter transport, official topographic route map, and trek certificate upon completion.</p>
                  </div>
                </div>

                <!-- Include 12: Staff Wages & Insurance -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Full Staff Insurance, Fair Wages & Equipment</h4>
                    <p class="inc-exc-card-text">Fair wages complying with Nepal Trekking Agencies guidelines, complete medical and high-altitude emergency rescue insurance, lodging, and winter gear for all support crew.</p>
                  </div>
                </div>
              </div>

              <!-- Excludes Heading -->
              <div class="inc-exc-section-title-wrapper" style="border-left-color: #ef4444;">
                <h2 class="inc-exc-section-title">What's Not Included (Excludes)</h2>
                <div style="width: 48px; height: 4px; background: #ef4444; border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <!-- Excludes Grid -->
              <div class="inc-exc-grid">
                <!-- Exclude 1: Nepal Visa -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Nepal Tourist Entry Visa</h4>
                    <p class="inc-exc-card-text">Nepal entry visa fee payable upon arrival at Tribhuvan International Airport (USD $50 for 30-day visa; note: because this trek is 26 days, ensure your total stay does not exceed your visa duration or consider a 90-day visa for USD $125).</p>
                  </div>
                </div>

                <!-- Exclude 2: International Airfare & Insurance -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">International Airfare & Mandatory Travel Insurance</h4>
                    <p class="inc-exc-card-text">International flights to/from Kathmandu and comprehensive travel insurance covering emergency helicopter evacuation, medical treatment, and high-altitude hiking up to 5,500 m.</p>
                  </div>
                </div>

                <!-- Exclude 3: Kathmandu Meals -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Lunch & Dinner in Kathmandu</h4>
                    <p class="inc-exc-card-text">Lunches and evening dinners while staying at your hotel in Kathmandu (excluding the pre-trek welcome dinner), allowing you to explore the local dining scene.</p>
                  </div>
                </div>

                <!-- Exclude 4: Personal Expenses -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Personal Teahouse Expenses & Drinks</h4>
                    <p class="inc-exc-card-text">Bottled mineral water, boiled drinking water, alcoholic drinks, soft beverages, hot bucket showers, Wi-Fi connectivity, and device charging fees at mountain teahouses.</p>
                  </div>
                </div>

                <!-- Exclude 5: Personal Gear -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Personal Clothing & Hiking Equipment</h4>
                    <p class="inc-exc-card-text">Personal hiking boots, trekking poles, thermal clothing layers, headlamp, and personal first-aid prescription medications (affordable rental available in Kathmandu).</p>
                  </div>
                </div>

                <!-- Exclude 6: Tips & Gratuities -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Tips for Mountain Guide & Porters</h4>
                    <p class="inc-exc-card-text">Gratuities for your dedicated trekking guide and porters (customarily recommended at 10–15% of the total expedition cost, presented at the conclusion of the trek in Suketar/Kathmandu).</p>
                  </div>
                </div>
              </div>
            </div>
          </section>`;

// Replace Section 3 in index.html
let html = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8');

const s3Start = '<!-- Section 3: Includes and Excludes -->';
const s4Start = '<!-- Section 4: Packing List -->';

const idx3 = html.indexOf(s3Start);
const idx4 = html.indexOf(s4Start);

if (idx3 === -1 || idx4 === -1) {
  console.error('ERROR: Could not locate Section 3 or Section 4 start markers!', { idx3, idx4 });
  process.exit(1);
}

html = html.substring(0, idx3) + sec3Html + '\n\n          ' + html.substring(idx4);

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
  console.error('Tag balance validation failed!');
  process.exit(1);
}

fs.writeFileSync('trek/kanchenjunga-base-camp-trek/index.html', html, 'utf8');
console.log('SUCCESS: Section 3 (Includes & Excludes) replaced with 100% tag balance!');
