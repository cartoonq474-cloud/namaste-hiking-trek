const fs = require('fs');

let html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');

const incStart = html.indexOf('<section id="section-includes"');
const datesStart = html.indexOf('<section id="section-dates"');

if (incStart === -1 || datesStart === -1) {
  console.error('Could not find section-includes or section-dates');
  process.exit(1);
}

const newIncludesHtml = `<section id="section-includes" class="trek-detail-section">
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
              .inc-exc-section-title-wrapper h3 {
                font-size: 1.45rem;
                font-weight: 700;
                color: var(--color-primary-navy);
                margin: 0;
              }
              .inc-exc-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                gap: 16px;
                margin-bottom: 30px;
              }
              .inc-exc-card {
                background: #ffffff;
                border: 1px solid var(--color-neutral-100);
                border-radius: var(--radius-md);
                padding: 18px 20px;
                display: flex;
                gap: 16px;
                box-shadow: var(--shadow-sm);
                transition: transform 0.2s ease, box-shadow 0.2s ease;
              }
              .inc-exc-card:hover {
                transform: translateY(-2px);
                box-shadow: var(--shadow-md);
              }
              .inc-exc-icon-box {
                flex-shrink: 0;
                margin-top: 2px;
              }
              .inc-exc-card-content {
                flex: 1;
              }
              .inc-exc-card-title {
                font-weight: 700;
                font-size: 1.05rem;
                color: var(--color-primary-navy);
                margin-bottom: 6px;
                line-height: 1.35;
              }
              .inc-exc-card-text {
                font-size: 0.92rem;
                color: var(--color-neutral-600);
                line-height: 1.6;
              }
            </style>

            <h2 class="trek-section-title">What is Included & Excluded in Mera Peak Climbing</h2>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-top: 14px; margin-bottom: 24px; line-height: 1.7;">
              We operate an honest, transparent expedition pricing model. All essential transportation, accommodations, meals, licensed staff, climbing royalties, and high-altitude emergency safety gear are included in your package with zero hidden surprises.
            </p>

            <div class="inc-exc-container">
              <!-- Included Section -->
              <div class="inc-exc-section-title-wrapper" style="border-left-color: #008060;">
                <h3 style="display: flex; align-items: center; gap: 8px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  What is Included in Your 18-Day Package
                </h3>
              </div>

              <div class="inc-exc-grid">
                <!-- 1. Airport Transfers -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">Airport Transfers & Ground Transport</div>
                    <div class="inc-exc-card-text">Personalized airport meet-and-greet in Kathmandu, private vehicle transfers to/from hotel, and ground transport for Lukla/Ramechhap flights.</div>
                  </div>
                </div>

                <!-- 2. Kathmandu Hotel -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">Accommodation in Kathmandu</div>
                    <div class="inc-exc-card-text">3 nights in a 3-star deluxe hotel in Kathmandu (twin-sharing) with complimentary daily breakfast and secure luggage storage.</div>
                  </div>
                </div>

                <!-- 3. Teahouse Lodges -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">Teahouse Lodging on Trek (13 Nights)</div>
                    <div class="inc-exc-card-text">Clean twin-bedded lodge rooms along the approach and return route via Chutanga, Thuli Kharka, Kothe, Thangnak, and Khare.</div>
                  </div>
                </div>

                <!-- 4. High Camp Logistics -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">High Camp Camping & Kitchen Infrastructure</div>
                    <div class="inc-exc-card-text">1 night four-season North Face / Mountain Hardwear expedition tents at Mera High Camp (<span data-altitude-m="5780">5,780 m</span>) with insulated sleeping pads and dining tent.</div>
                  </div>
                </div>

                <!-- 5. Full Board Meals -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">All Meals During Trek & Mountain Stages</div>
                    <div class="inc-exc-card-text">Nutritious breakfasts, trail lunches, warm dinners, hot tea/coffee, and fresh seasonal fruits after evening meals throughout the expedition.</div>
                  </div>
                </div>

                <!-- 6. High Camp Cook Support -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">Dedicated High Camp Kitchen Crew</div>
                    <div class="inc-exc-card-text">Trained high-altitude kitchen staff preparing hot, calorie-dense meals, soup, and boiled drinking water at Mera High Camp.</div>
                  </div>
                </div>

                <!-- 7. Climbing Sherpa Guide -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">Certified UIAGM / NMA Climbing Guides</div>
                    <div class="inc-exc-card-text">Expert Sherpa climbing leaders with multiple high-altitude summits, conducting Khare glacier training with a 1:2 to 1:3 summit guide ratio.</div>
                  </div>
                </div>

                <!-- 8. Trekking Guide & Porters -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">Trekking Guide & Mountain Porter Support</div>
                    <div class="inc-exc-card-text">Licensed English-speaking trekking guide plus ethical porters (1 porter for 2 trekkers, carrying up to 20–25 kg total luggage) fully equipped and insured.</div>
                  </div>
                </div>

                <!-- 9. Domestic Flights -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">Domestic Flights: Kathmandu / Lukla Return</div>
                    <div class="inc-exc-card-text">Scheduled return flights between Kathmandu/Ramechhap and Lukla including 15 kg luggage allowance (10 kg check-in + 5 kg hand carry).</div>
                  </div>
                </div>

                <!-- 10. Climbing Permits & Royalties -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">All Climbing Permits & National Park Fees</div>
                    <div class="inc-exc-card-text">Official Mera Peak Climbing Permit (DoT / NMA royalty), Makalu-Barun National Park entry fee, Sagarmatha National Park entry fee, and local Khumbu permits.</div>
                  </div>
                </div>

                <!-- 11. Group Gear & Medical Safety -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">Group Climbing Gear & Safety System</div>
                    <div class="inc-exc-card-text">Dynamic climbing ropes, fixed lines, snow bars, ice screws, comprehensive medical first-aid kit, pulse oximeter, and emergency oxygen bottle support.</div>
                  </div>
                </div>

                <!-- 12. Contingency & Celebration -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">Contingency Staging & Farewell Dinner</div>
                    <div class="inc-exc-card-text">Movable mountain weather contingency day (Day 12), Kathmandu buffer day (Day 17), climbing achievement certificate, and farewell cultural feast.</div>
                  </div>
                </div>
              </div>

              <!-- Excluded Section -->
              <div class="inc-exc-section-title-wrapper" style="border-left-color: #ef4444; margin-top: 40px;">
                <h3 style="display: flex; align-items: center; gap: 8px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                  What is Not Included in the Package
                </h3>
              </div>

              <div class="inc-exc-grid">
                <!-- 1. International Flights -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">International Airfare & Airport Taxes</div>
                    <div class="inc-exc-card-text">Flights to and from your home country to Kathmandu (Tribhuvan International Airport - KTM).</div>
                  </div>
                </div>

                <!-- 2. Nepal Visa -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">Nepal Tourist Entry Visa</div>
                    <div class="inc-exc-card-text">Payable upon arrival at Kathmandu airport ($30 USD for 15 days, $50 USD for 30 days, or $125 USD for 90 days).</div>
                  </div>
                </div>

                <!-- 3. Personal Climbing Gear -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">Personal Technical Climbing Equipment</div>
                    <div class="inc-exc-card-text">Double climbing boots, crampons, ice axe, harness, helmet, ascender, and descender. (Quality equipment is available for hire in Kathmandu or Khare).</div>
                  </div>
                </div>

                <!-- 4. Travel & Rescue Insurance -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">Mountaineering & Helicopter Rescue Insurance</div>
                    <div class="inc-exc-card-text">Mandatory policy covering high-altitude mountaineering with ropes and crampons up to <span data-altitude-m="6500">6,500 m</span> and emergency helicopter evacuation.</div>
                  </div>
                </div>

                <!-- 5. Kathmandu Meals -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">City Meals in Kathmandu</div>
                    <div class="inc-exc-card-text">Lunch and dinner in Kathmandu during non-expedition staging days (budget approximately $15–$25 USD per day).</div>
                  </div>
                </div>

                <!-- 6. Teahouse Personal Expenses -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">Teahouse Extras & Personal Amenities</div>
                    <div class="inc-exc-card-text">Hot showers, electronic device charging fees, Wi-Fi scratch cards, bottled water, canned soda, and alcoholic beverages.</div>
                  </div>
                </div>

                <!-- 7. Tips & Gratuities -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">Staff Tips & Gratuities</div>
                    <div class="inc-exc-card-text">Customary tips for climbing Sherpa guides, trekking guide, porters, and kitchen crew (recommended $180–$250 USD total per climber).</div>
                  </div>
                </div>

                <!-- 8. Unforeseen Delays -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">Extra Days Due to Severe Weather</div>
                    <div class="inc-exc-card-text">Accommodation, food, or additional helicopter chartered flights incurred beyond the scheduled 18-day itinerary.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>\n\n          <!-- Section 4: Dates & Pricing -->\n          `;

// Replace section-includes
html = html.slice(0, incStart) + newIncludesHtml + html.slice(datesStart);

fs.writeFileSync('trek/mera-peak-climbing/index.html', html, 'utf8');
console.log('Successfully updated Section 3 (Includes & Exclusions)!');
