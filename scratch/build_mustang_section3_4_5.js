const fs = require('fs');

const targetPath = 'trek/upper-mustang-trek/index.html';
let html = fs.readFileSync(targetPath, 'utf8');

const s3Start = html.indexOf('<section id="section-includes"');
const s5End = html.indexOf('<section id="section-details"');

if (s3Start === -1 || s5End === -1) {
  console.error('Could not locate Section 3 or Section 6 start!');
  process.exit(1);
}

const newSections3_4_5 = `<section id="section-includes" class="trek-detail-section">
            <style>
              .inc-exc-container {
                margin-top: 10px;
              }
              .inc-exc-section-title-wrapper {
                border-left: 4px solid #008060;
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
                border-color: #008060;
                box-shadow: 0 8px 20px rgba(0, 128, 96, 0.08);
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
                <h2 class="inc-exc-section-title">What is Included in the 17-Day Package</h2>
                <div style="width: 48px; height: 4px; background: #008060; border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <!-- Includes Grid (9 items) -->
              <div class="inc-exc-grid">
                <!-- Include 1 -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">International Airport Transfers x 2 (Arrival & Departure)</h4>
                    <p class="inc-exc-card-text">Private airport pickup and drop-off in Kathmandu with warm traditional welcome by our representative.</p>
                  </div>
                </div>

                <!-- Include 2 -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Round-Trip Flights Pokhara–Jomsom & Kathmandu–Pokhara Transfers</h4>
                    <p class="inc-exc-card-text">Scheduled round-trip mountain flights between Pokhara and Jomsom (including airport taxes), plus scenic overland tourist coach transfers between Kathmandu and Pokhara.</p>
                  </div>
                </div>

                <!-- Include 3 -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Restricted Area Permit (RAP) & ACAP Conservation Permits</h4>
                    <p class="inc-exc-card-text">Official Upper Mustang Restricted Area Permit (USD 500 fee per person covering the 10-day restricted zone) and Annapurna Conservation Area Project (ACAP) permit, fully arranged and processed in Kathmandu.</p>
                  </div>
                </div>

                <!-- Include 4 -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Government-Licensed Mountain Guide & Porter Support</h4>
                    <p class="inc-exc-card-text">Experienced English-speaking trekking guide licensed for restricted areas and strong local porters (1 porter for 2 trekkers, carrying up to 18–20 kg total), including their wages, meals, lodge stays, equipment, and insurance.</p>
                  </div>
                </div>

                <!-- Include 5 -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">3-Star City Hotels: 3 Nights in Kathmandu & 2 Nights in Pokhara</h4>
                    <p class="inc-exc-card-text">Comfortable twin-sharing rooms in quality 3-star standard hotels (Kathmandu Suite Home / Hotel Lake Star or similar) with complimentary breakfast included.</p>
                  </div>
                </div>

                <!-- Include 6 -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">11 Nights Mountain Lodge & Teahouse Accommodation</h4>
                    <p class="inc-exc-card-text">Authentic mountain lodges and family-run teahouses along the route (twin-sharing), selected for clean beds, warm hospitality, and traditional Mustang architecture.</p>
                  </div>
                </div>

                <!-- Include 7 -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Full Board Meals During Trekking: 14 Breakfasts, 11 Lunches & 12 Dinners</h4>
                    <p class="inc-exc-card-text">Nutritious meals ordered from teahouse menus (Dal Bhat, Tibetan breads, noodles, soups, momos, eggs, oats) plus seasonal fresh fruits served after evening dinners.</p>
                  </div>
                </div>

                <!-- Include 8 -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Welcome & Farewell Cultural Dinners in Kathmandu</h4>
                    <p class="inc-exc-card-text">Enjoy authentic Nepalese cuisine accompanied by live cultural music and ethnic dance performances on your arrival and departure evenings.</p>
                  </div>
                </div>

                <!-- Include 9 -->
                <div class="inc-exc-card">
                  <div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>
                  <div class="inc-exc-card-content">
                    <h4 class="inc-exc-card-title">Comprehensive First Aid, Oximeter Monitoring & Trek Gear</h4>
                    <p class="inc-exc-card-text">Daily pulse oximeter blood oxygen checks, comprehensive medical kit, company duffel bag (yours to use on trek), trekking route map, and official completion certificate.</p>
                  </div>
                </div>
              </div>

              <!-- Excludes Heading -->
              <div class="inc-exc-section-title-wrapper" style="border-left-color: #ef4444;">
                <h2 class="inc-exc-section-title">What is Excluded</h2>
                <div style="width: 48px; height: 4px; background: #ef4444; border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <!-- Excludes Grid (4 items) -->
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
                    <h4 class="inc-exc-card-title">International Airfare & Nepal Entry Visa</h4>
                    <p class="inc-exc-card-text">Flights to and from your home country, and the Nepal tourist visa fee (USD 30 for 15 days or USD 50 for 30 days, easily issued upon arrival at Tribhuvan International Airport).</p>
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
                    <h4 class="inc-exc-card-title">Travel & High-Altitude Medical Evacuation Insurance</h4>
                    <p class="inc-exc-card-text">Comprehensive travel insurance covering trip cancellation, medical treatment, and emergency helicopter evacuation up to 4,200 m (mandatory for restricted area permit issuance).</p>
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
                    <h4 class="inc-exc-card-title">Personal Expenses & Teahouse Extras</h4>
                    <p class="inc-exc-card-text">Lunches and dinners in Kathmandu and Pokhara (outside welcome/farewell events), hot showers, electronic device battery recharging, Wi-Fi usage, bar bills, soft drinks, and laundry.</p>
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
                    <h4 class="inc-exc-card-title">Gratuities & Tips for Guide, Porters & Drivers</h4>
                    <p class="inc-exc-card-text">Tips for your trekking crew are customary in Nepal as a direct appreciation of their care and hard work (recommended approx. 10%–15% of trip cost shared among crew).</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Section 4: Booking Dates & Availability -->
          <section id="section-dates" class="trek-detail-section">
            <div class="dates-section-header">
              <h2 class="trek-section-title" style="margin-bottom: 0;">Booking Dates & Availability: Upper Mustang Trek (17 Days)</h2>
              <div class="dates-mode-toggle">
                <button type="button" class="dates-mode-btn active" data-mode="group">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  Group Joining
                </button>
                <button type="button" class="dates-mode-btn" data-mode="private">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Private Date
                </button>
              </div>
            </div>

            <!-- Monsoon Advantage Callout -->
            <div style="background: #E6F7F0; border: 1px solid #10B981; border-radius: 12px; padding: 16px 20px; margin-bottom: 24px; display: flex; align-items: flex-start; gap: 14px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <div>
                <strong style="color: #0F172A; font-size: 0.98rem; display: block; margin-bottom: 4px;">Trek in the Summer Monsoon (June–August) Advantage:</strong>
                <p style="color: #065F46; font-size: 0.9rem; line-height: 1.5; margin: 0;">
                  Upper Mustang is nestled in the Himalayan rain shadow of Mount Annapurna and Mount Dhaulagiri. While the rest of Nepal experiences heavy rainfall and clouds, Upper Mustang receives less than 200 mm of annual rain and enjoys dry trails, bright sunny skies, and lush valley oasis crops from June through August.
                </p>
              </div>
            </div>

            <!-- Card Container -->
            <div class="dates-card-container">
              <!-- View 1: Group Joining -->
              <div id="dates-group-view" class="dates-view-pane active">
                <div class="dates-group-topbar">
                  <span class="dates-year-badge">2026 / 2027</span>
                  <div class="dates-month-tabs">
                    <button type="button" class="dates-month-tab active" data-month="AUG">AUG</button>
                    <button type="button" class="dates-month-tab" data-month="SEP">SEP</button>
                    <button type="button" class="dates-month-tab" data-month="OCT">OCT</button>
                    <button type="button" class="dates-month-tab" data-month="NOV">NOV</button>
                    <button type="button" class="dates-month-tab" data-month="MAR">MAR</button>
                    <button type="button" class="dates-month-tab" data-month="APR">APR</button>
                    <button type="button" class="dates-month-tab" data-month="MAY">MAY</button>
                  </div>
                </div>

                <div class="dates-departure-list">
                  <!-- Row 1: AUG -->
                  <div class="departure-item-row" data-month="AUG">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">08</div>
                      <div class="calendar-month-txt">AUG</div>
                    </div>
                    <div class="departure-info">
                      <h4 class="departure-title">Aug 8 – Aug 24, 2026</h4>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,850</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Upper Mustang Trek (Aug 8 - Aug 24, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Row 2: AUG -->
                  <div class="departure-item-row" data-month="AUG">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">20</div>
                      <div class="calendar-month-txt">AUG</div>
                    </div>
                    <div class="departure-info">
                      <h4 class="departure-title">Aug 20 – Sep 5, 2026</h4>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,850</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Upper Mustang Trek (Aug 20 - Sep 5, 2026)">Book Now</button>
                    </div>
                  </div>

                  <!-- Row 3: SEP -->
                  <div class="departure-item-row" data-month="SEP">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">06</div>
                      <div class="calendar-month-txt">SEP</div>
                    </div>
                    <div class="departure-info">
                      <h4 class="departure-title">Sep 6 – Sep 22, 2026</h4>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,850</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Upper Mustang Trek (Sep 6 - Sep 22, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Row 4: SEP -->
                  <div class="departure-item-row" data-month="SEP">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">18</div>
                      <div class="calendar-month-txt">SEP</div>
                    </div>
                    <div class="departure-info">
                      <h4 class="departure-title">Sep 18 – Oct 4, 2026</h4>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,850</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Upper Mustang Trek (Sep 18 - Oct 4, 2026)">Book Now</button>
                    </div>
                  </div>

                  <!-- Row 5: OCT -->
                  <div class="departure-item-row" data-month="OCT">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">04</div>
                      <div class="calendar-month-txt">OCT</div>
                    </div>
                    <div class="departure-info">
                      <h4 class="departure-title">Oct 4 – Oct 20, 2026</h4>
                      <span class="departure-status-pill">POPULAR</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,850</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Upper Mustang Trek (Oct 4 - Oct 20, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Row 6: OCT -->
                  <div class="departure-item-row" data-month="OCT">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">18</div>
                      <div class="calendar-month-txt">OCT</div>
                    </div>
                    <div class="departure-info">
                      <h4 class="departure-title">Oct 18 – Nov 3, 2026</h4>
                      <span class="departure-status-pill">POPULAR</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,850</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Upper Mustang Trek (Oct 18 - Nov 3, 2026)">Book Now</button>
                    </div>
                  </div>

                  <!-- Row 7: NOV -->
                  <div class="departure-item-row" data-month="NOV">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">05</div>
                      <div class="calendar-month-txt">NOV</div>
                    </div>
                    <div class="departure-info">
                      <h4 class="departure-title">Nov 5 – Nov 21, 2026</h4>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,850</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Upper Mustang Trek (Nov 5 - Nov 21, 2026)">Book Now</button>
                    </div>
                  </div>

                  <!-- Row 8: MAR 2027 -->
                  <div class="departure-item-row" data-month="MAR" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">12</div>
                      <div class="calendar-month-txt">MAR</div>
                    </div>
                    <div class="departure-info">
                      <h4 class="departure-title">Mar 12 – Mar 28, 2027</h4>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,850</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Upper Mustang Trek (Mar 12 - Mar 28, 2027)">Book Now</button>
                    </div>
                  </div>

                  <!-- Row 9: APR 2027 -->
                  <div class="departure-item-row" data-month="APR" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">08</div>
                      <div class="calendar-month-txt">APR</div>
                    </div>
                    <div class="departure-info">
                      <h4 class="departure-title">Apr 8 – Apr 24, 2027</h4>
                      <span class="departure-status-pill">POPULAR</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,850</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Upper Mustang Trek (Apr 8 - Apr 24, 2027)">Book Now</button>
                    </div>
                  </div>

                  <!-- Row 10: MAY 2027 (TIJI FESTIVAL SEASON) -->
                  <div class="departure-item-row" data-month="MAY" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">04</div>
                      <div class="calendar-month-txt">MAY</div>
                    </div>
                    <div class="departure-info">
                      <h4 class="departure-title">May 4 – May 20, 2027 (Tiji Festival Special)</h4>
                      <span class="departure-status-pill" style="background: #FDF2E9; color: #D97706; border-color: #FCD34D;">FESTIVAL SPECIAL</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,950</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Upper Mustang Trek (May 4 - May 20, 2027 - Tiji Festival)">Book Now</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- View 2: Private Date Selection -->
              <div id="dates-private-view" class="dates-view-pane">
                <div class="dates-private-box">
                  <div class="dates-private-content">
                    <h3 class="dates-private-title">Tailor-Made Private Upper Mustang Trek</h3>
                    <p class="dates-private-text">
                      Prefer to trek with your own personal group or family? Choose any start date that suits your international schedule. Remember that Nepal immigration requires a minimum of 2 registered trekkers for the Restricted Area Permit.
                    </p>
                    <div class="dates-private-benefits">
                      <div class="benefit-tag">Custom Pace & Acclimatization</div>
                      <div class="benefit-tag">Tiji Festival Alignments</div>
                      <div class="benefit-tag">Private Guide & Dedicated Porter</div>
                      <div class="benefit-tag">Flexible Departure Dates</div>
                    </div>
                  </div>
                  <div class="dates-private-action">
                    <button type="button" class="btn-book-private open-inquiry-btn" data-trek-title="Upper Mustang Trek (Private Departure)">Request Custom Dates</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Section 5: Packing List -->
          <section id="section-packing" class="trek-detail-section">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; gap: 16px; flex-wrap: wrap;">
              <div>
                <h2 class="trek-section-title" style="margin-bottom: 8px;">Packing List for Upper Mustang Trek</h2>
                <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                  <span style="font-size: 0.95rem; color: var(--color-neutral-600); font-weight: 500;">
                    High-Desert Checklist: Rent sleeping bags or down jackets in Kathmandu for <strong>USD 1/day per item</strong>
                  </span>
                  <a href="#" onclick="window.print(); return false;" style="font-size: 0.9rem; color: #008060; text-decoration: underline; font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Printable Checklist
                  </a>
                </div>
              </div>
              <div class="itinerary-meta-pill" style="font-size: 1rem; padding: 8px 18px; background: #E6F7F0; border: 1px solid #10B981; color: #008060; border-radius: 12px; font-weight: 700; box-shadow: var(--shadow-sm);">
                Packed: <strong><span class="gear-checked-count">4</span> / <span class="gear-total-count">28</span></strong>
              </div>
            </div>

            <p style="color: var(--color-neutral-600); font-size: 0.95rem; margin-bottom: 24px;">
              Upper Mustang combines high-altitude desert sunlight with afternoon Kali Gandaki gorge wind and sub-zero nighttime temperatures. Check off items as you pack; your list state is automatically saved.
            </p>

            <!-- Category 1: Essential High-Desert Gear -->
            <div class="gear-section">
              <h3 class="gear-section-title">Essential High-Desert & Trekking Gear <span style="font-size: 0.85rem; font-weight: normal; color: var(--color-neutral-500); margin-left: 6px;">(7 items)</span></h3>
              <div class="gear-grid">
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-poles" class="gear-checkbox" checked>
                  <label for="gear-poles" class="gear-item-name">Trekking Poles (essential for scree descents & riverbed crossings)</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-pack" class="gear-checkbox" checked>
                  <label for="gear-pack" class="gear-item-name">Daypack (25–35 Litres with rain/dust cover)</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-duffel" class="gear-checkbox" checked>
                  <label for="gear-duffel" class="gear-item-name">Main Duffel Bag 80–100L (provided free by Namaste Hiking Trek for porter)</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-sleeping" class="gear-checkbox" checked>
                  <label for="gear-sleeping" class="gear-item-name">Four-Season Sleeping Bag (-10°C to -15°C rated)</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-headlamp" class="gear-checkbox">
                  <label for="gear-headlamp" class="gear-item-name">Headlamp with extra rechargeable batteries</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-hydration" class="gear-checkbox">
                  <label for="gear-hydration" class="gear-item-name">Water Bottles (2 x 1-Litre Nalgene) & Hydration Bladder</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-purification" class="gear-checkbox">
                  <label for="gear-purification" class="gear-item-name">Water Purification Tablets or SteriPEN UV Purifier</label>
                </div>
              </div>
            </div>

            <!-- Category 2: Sun & Wind Protection (Mustang Crucial) -->
            <div class="gear-section" style="margin-top: 24px;">
              <h3 class="gear-section-title">Sun, Wind & Dust Protection <span style="font-size: 0.85rem; font-weight: normal; color: var(--color-neutral-500); margin-left: 6px;">(7 items)</span></h3>
              <div class="gear-grid">
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-buff" class="gear-checkbox">
                  <label for="gear-buff" class="gear-item-name">Neck Gaiter / Buff x 2 (mandatory for afternoon Kali Gandaki gorge dust)</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-sunglasses" class="gear-checkbox">
                  <label for="gear-sunglasses" class="gear-item-name">Category 3 or 4 UV Polarized Sunglasses with side shields</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-sunhat" class="gear-checkbox">
                  <label for="gear-sunhat" class="gear-item-name">Wide-brimmed sun hat & baseball cap</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-sunscreen" class="gear-checkbox">
                  <label for="gear-sunscreen" class="gear-item-name">Sunscreen (SPF 50+) & Lip Balm with SPF (extreme UV reflection)</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-windjacket" class="gear-checkbox">
                  <label for="gear-windjacket" class="gear-item-name">Windproof Breathable Shell Jacket (Gore-Tex or equivalent)</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-windpants" class="gear-checkbox">
                  <label for="gear-windpants" class="gear-item-name">Windproof Trekking Trousers & Quick-dry hiking pants</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-moisturizer" class="gear-checkbox">
                  <label for="gear-moisturizer" class="gear-item-name">Skin Moisturizer & Saline Nasal Spray (for dry desert air)</label>
                </div>
              </div>
            </div>

            <!-- Category 3: Clothing & Thermal Insulation -->
            <div class="gear-section" style="margin-top: 24px;">
              <h3 class="gear-section-title">Clothing & Thermal Insulation <span style="font-size: 0.85rem; font-weight: normal; color: var(--color-neutral-500); margin-left: 6px;">(7 items)</span></h3>
              <div class="gear-grid">
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-downjacket" class="gear-checkbox">
                  <label for="gear-downjacket" class="gear-item-name">Heavy Down Jacket (700+ fill power for sub-zero Lo Manthang nights)</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-fleece" class="gear-checkbox">
                  <label for="gear-fleece" class="gear-item-name">Mid-layer Fleece Jacket or Wool Pullover</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-thermal-top" class="gear-checkbox">
                  <label for="gear-thermal-top" class="gear-item-name">Thermal Baselayers Top & Bottom (Merino Wool recommended x 2)</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-shirts" class="gear-checkbox">
                  <label for="gear-shirts" class="gear-item-name">Moisture-wicking Quick-Dry T-Shirts x 4 (long & short sleeve)</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-beanie" class="gear-checkbox">
                  <label for="gear-beanie" class="gear-item-name">Warm Wool Beanie & Lightweight Gloves</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-gloves-heavy" class="gear-checkbox">
                  <label for="gear-gloves-heavy" class="gear-item-name">Insulated Windproof Mountain Gloves</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-underwear" class="gear-checkbox">
                  <label for="gear-underwear" class="gear-item-name">Quick-dry Breathable Underwear x 5</label>
                </div>
              </div>
            </div>

            <!-- Category 4: Footwear, First Aid & Documents -->
            <div class="gear-section" style="margin-top: 24px;">
              <h3 class="gear-section-title">Footwear, First Aid & Essential Documents <span style="font-size: 0.85rem; font-weight: normal; color: var(--color-neutral-500); margin-left: 6px;">(7 items)</span></h3>
              <div class="gear-grid">
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-boots" class="gear-checkbox">
                  <label for="gear-boots" class="gear-item-name">Sturdy Ankle-support Hiking Boots (broken in before arrival)</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-camp-shoes" class="gear-checkbox">
                  <label for="gear-camp-shoes" class="gear-item-name">Camp Sandals or Lightweight Trail Runners for teahouse evenings</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-socks" class="gear-checkbox">
                  <label for="gear-socks" class="gear-item-name">Merino Wool Trekking Socks x 5 pairs</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-meds" class="gear-checkbox">
                  <label for="gear-meds" class="gear-item-name">Personal Medications (Diamox/Acetazolamide, Ibuprofen, throat lozenges)</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-powerbank" class="gear-checkbox">
                  <label for="gear-powerbank" class="gear-item-name">High-capacity Power Bank (20,000 mAh) & universal plug adapter</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-cash" class="gear-checkbox">
                  <label for="gear-cash" class="gear-item-name">Cash in Nepalese Rupees (NPR) — no functional ATMs beyond Jomsom</label>
                </div>
                <div class="gear-item-row" onclick="this.querySelector('input').click(); event.stopPropagation();">
                  <input type="checkbox" id="gear-passport" class="gear-checkbox">
                  <label for="gear-passport" class="gear-item-name">Valid Passport (6+ months validity), visa, insurance papers & 4 photos</label>
                </div>
              </div>
            </div>
          </section>`;

const updatedHtml = html.substring(0, s3Start) + newSections3_4_5 + '\n\n          ' + html.substring(s5End);
fs.writeFileSync(targetPath, updatedHtml, 'utf8');
console.log('Successfully updated Sections 3, 4, and 5 (Includes/Excludes, Booking Dates & Availability, and Packing List)!');
