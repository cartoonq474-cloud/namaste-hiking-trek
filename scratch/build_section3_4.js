const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'trek', 'langtang-valley-trek', 'index.html');
let html = fs.readFileSync(targetPath, 'utf8');

const s3Start = html.indexOf('<!-- Section 3: Includes and Excludes -->');
const s3End = html.indexOf('<!-- Section: Booking Dates & Availability -->');

if (s3Start === -1 || s3End === -1) {
  console.error('Could not find Section 3 boundaries!');
  process.exit(1);
}

const newSection3 = `<!-- Section 3: Includes and Excludes -->
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
                <h2 class="inc-exc-section-title">Includes</h2>
                <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <!-- Includes Grid -->
              <div class="inc-exc-grid">
                <!-- Include 1 -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Private International Airport Transfers (x 2)</h4>
                    <p class="inc-exc-card-text">Personal airport pickup upon arrival and dedicated drop-off for your international flight by private vehicle.</p>
                  </div>
                </div>

                <!-- Include 2 -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Kathmandu to Syabrubesi Roundtrip Overland Transport</h4>
                    <p class="inc-exc-card-text">Comfortable scenic road transfers from Kathmandu to Syabrubesi and back by private vehicle or shared jeep, avoiding mountain flight delays.</p>
                  </div>
                </div>

                <!-- Include 3 -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">First Aid Kit & Daily Pulse Oximeter Health Checks</h4>
                    <p class="inc-exc-card-text">Comprehensive mountain medical kit carried by your guide, including daily morning and evening oxygen saturation (SpO2) and pulse monitoring.</p>
                  </div>
                </div>

                <!-- Include 4 -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Government-Licensed Guide & Strong Mountain Porters</h4>
                    <p class="inc-exc-card-text">Experienced English-speaking wilderness guide plus local porters (1 porter per 2 trekkers, 20 kg limit) with fair wages, meals, lodging, and full insurance.</p>
                  </div>
                </div>

                <!-- Include 5 -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Langtang National Park Permit & TIMS Card</h4>
                    <p class="inc-exc-card-text">All necessary government park entry permits and Trekkers' Information Management System cards pre-arranged before departure without hassle.</p>
                  </div>
                </div>

                <!-- Include 6 -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">4 Nights Hotel Accommodation in Kathmandu</h4>
                    <p class="inc-exc-card-text">Comfortable 3-star hotel in Thamel (twin-sharing) with breakfast included before and after the trek (Days 1, 2, 11, and 12/13).</p>
                  </div>
                </div>

                <!-- Include 7 -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">8 Nights Mountain Teahouse Accommodation</h4>
                    <p class="inc-exc-card-text">Handpicked teahouse lodges along the trail on twin-sharing basis (Syabrubesi, Lama Hotel, Langtang Village, and Kyanjin Gompa).</p>
                  </div>
                </div>

                <!-- Include 8 -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Complimentary Duffle Bag & Gear Support</h4>
                    <p class="inc-exc-card-text">Heavy-duty branded Namaste Hiking Trek waterproof duffle bag for porter transport (returned after trek) plus map and completion certificate.</p>
                  </div>
                </div>

                <!-- Include 9 -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">All Meals on Trek (Breakfast, Lunch, Dinner)</h4>
                    <p class="inc-exc-card-text">Three nourishing hot meals daily chosen directly from teahouse menus during the trek, including fresh seasonal fruit when available.</p>
                  </div>
                </div>
              </div>

              <!-- Excludes Heading -->
              <div class="inc-exc-section-title-wrapper" style="margin-top: 10px;">
                <h2 class="inc-exc-section-title">Excludes</h2>
                <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <!-- Excludes Grid -->
              <div class="inc-exc-grid">
                <!-- Exclude 1 -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Lunch and Dinner in Kathmandu</h4>
                    <p class="inc-exc-card-text">Meals in Kathmandu (except welcome and farewell dinners) are excluded to give you freedom to explore the city's diverse dining scene.</p>
                  </div>
                </div>

                <!-- Exclude 2 -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">International Airfare & Nepal Entry Visa</h4>
                    <p class="inc-exc-card-text">Flights to/from your home country and the Nepal tourist visa fee (USD 30 for 15 days or USD 50 for 30 days, obtainable on arrival).</p>
                  </div>
                </div>

                <!-- Exclude 3 -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Travel & Medical Insurance with Evacuation</h4>
                    <p class="inc-exc-card-text">Comprehensive travel insurance covering high-altitude mountain trekking and emergency helicopter rescue up to 5,000 m is mandatory.</p>
                  </div>
                </div>

                <!-- Exclude 4 -->
                <div class="inc-exc-card exclude-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Personal Expenses, Beverages & Tips</h4>
                    <p class="inc-exc-card-text">Hot showers, battery charging, boiled/bottled drinking water, soft/alcoholic drinks, snacks, and customary tips for guide and porter.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>\n\n          `;

html = html.substring(0, s3Start) + newSection3 + html.substring(s3End);

// Also fix Section 4 heading if it still says "EBC trek"
html = html.replace('Booking Dates & Availability for EBC trek', 'Booking Dates & Availability for Langtang Valley Trek');

fs.writeFileSync(targetPath, html, 'utf8');
console.log('Section 3 & 4 updated successfully! File length:', html.length);
