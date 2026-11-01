const fs = require('fs');

let html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const s3Start = '<!-- Section 3: Includes and Excludes -->';
const s5Start = '<!-- Section 4: Packing List -->';

const idx3 = html.indexOf(s3Start);
const idx5 = html.indexOf(s5Start);

if (idx3 === -1 || idx5 === -1) {
  console.error('Section 3/5 markers not found!');
  process.exit(1);
}

const includesData = [
  {
    title: "Official NMA Mera Peak Climbing Permit & Garbage Deposit",
    desc: "Full Nepal Mountaineering Association (NMA) peak climbing permit fees, mandatory garbage deposit fee, Makalu-Barun National Park entry permit, and Khumbu Pasang Lhamu Rural Municipality entry fee."
  },
  {
    title: "Certified UIAGM/NMA Climbing Sherpas & Lead Guide",
    desc: "Professional, licensed UIAGM/IFMGA or NMA-certified Climbing Sherpa guide (maintaining a dedicated 1:2 guide-to-climber ratio on summit day) plus government-licensed English-speaking trekking lead guide."
  },
  {
    title: "Group Technical Climbing Gear & Ropes",
    desc: "All high-standard group technical equipment including main climbing ropes, dynamic backup ropes, snow bars, ice screws, deadmen anchors, rock pitons, and crevasse rescue pulleys."
  },
  {
    title: "Expedition High Camp Tents & Camping Infrastructure",
    desc: "Premium 4-season geodesic expedition tents (Mountain Hardwear / The North Face) at Mera High Camp (5,780m), thick closed-cell insulating foam mattresses, and high-altitude cooking stoves."
  },
  {
    title: "All Hotel & Mountain Lodge Accommodation (17 Nights)",
    desc: "3 nights in Kathmandu at a 3-star deluxe hotel with breakfast (twin-sharing), plus 14 nights in clean mountain teahouses and lodges along the trekking and climbing route."
  },
  {
    title: "All Meals on the Mountain (Breakfast, Lunch & Dinner)",
    desc: "Three hot, nutritious meals daily during the trek and climb, sourced fresh from lodges and cooked by our camp staff at High Camp, supplemented by fresh seasonal fruit and hot tea/coffee."
  },
  {
    title: "Domestic Flights & Ground Transfers (Kathmandu – Lukla – Kathmandu)",
    desc: "Round-trip domestic flights between Kathmandu/Ramechhap and Lukla, including airport departure taxes, private vehicle transfers, and luggage handling."
  },
  {
    title: "Experienced High-Altitude Porters & Duffel Bag",
    desc: "Dedicated porters to carry personal gear (1 porter per 2 climbers, up to 15 kg personal luggage allowance per climber), plus a complimentary 100-liter waterproof Namaste Hiking Trek duffel bag."
  },
  {
    title: "Complete Staff Insurance, Living Wages & Gear",
    desc: "Full emergency medical and helicopter evacuation insurance, proper high-altitude mountaineering boots and clothing, and fair living wages for all Climbing Sherpas, guides, and porters (IPPG compliant)."
  },
  {
    title: "Pre-Climbing Glacier Clinic & NMA Summit Certificate",
    desc: "Comprehensive hands-on alpine skills training session at Khare Base Camp (5,045m), daily pulse oximeter SpO2 monitoring, and official NMA-endorsed Summit Certificate upon completion."
  }
];

const excludesData = [
  {
    title: "International Airfare & Nepal Entry Visa Fees",
    desc: "International flights to and from Kathmandu Tribhuvan Airport (KTM) and Nepal tourist visa fees ($30 USD for 15 days, $50 USD for 30 days, payable upon arrival at airport immigration)."
  },
  {
    title: "Personal Mountaineering Climbing Gear & Boots",
    desc: "Personal climbing equipment (crampons, double plastic/hybrid mountaineering boots, climbing harness, ice axe, ascender/jumar, helmet, locking carabiners, and -20°C sleeping bag; all available for rent in Kathmandu or Khare)."
  },
  {
    title: "High-Altitude Travel & Emergency Rescue Insurance",
    desc: "Mandatory personal travel and medical insurance policy covering mountaineering/peak climbing activities and helicopter evacuation up to 6,500 meters altitude."
  },
  {
    title: "Climbing Sherpa Summit Bonus & Staff Gratuities",
    desc: "Customary summit bonus for personal Climbing Sherpas (customarily $150 to $250 USD per climber upon reaching the summit) and tipping for trekking guides and porters."
  },
  {
    title: "Lunches & Dinners in Kathmandu",
    desc: "Lunches and evening meals in Kathmandu outside of the organized welcome dinner and farewell celebration."
  },
  {
    title: "Personal Teahouse Expenses & Paid Services",
    desc: "Hot shower fees, electronic device charging fees, Wi-Fi internet access cards, and laundry services charged extra by mountain teahouses."
  },
  {
    title: "Beverages, Barista Coffees & Personal Snacks",
    desc: "Bottled mineral water, boiled drinking water, canned soft drinks, specialty barista espresso coffees, energy bars, and alcoholic beverages."
  },
  {
    title: "Emergency Evacuation, Helicopter Upgrades & Delays",
    desc: "Costs arising from emergency medical treatment, personal helicopter charters, flight cancellations due to weather, or additional hotel nights resulting from unexpected early descent."
  },
  {
    title: "Single Room Supplement",
    desc: "Single room supplement in Kathmandu hotels ($150 USD total). Mountain lodges operate on twin-sharing rooms during peak climbing season."
  },
  {
    title: "Any Services Not Explicitly Listed as Included",
    desc: "Any other expense, activity, personal shopping, or service not explicitly listed under the inclusions section."
  }
];

function renderCard(item, isExclude) {
  const iconBox = isExclude
    ? `<div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>`
    : `<div class="inc-exc-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>
                  </div>`;
  const extraClass = isExclude ? " exclude-card" : "";
  return `                <div class="inc-exc-card${extraClass}">
                  ${iconBox}
                  <div class="inc-exc-card-content">
                    <div class="inc-exc-card-title">${item.title}</div>
                    <div class="inc-exc-card-text">${item.desc}</div>
                  </div>
                </div>`;
}

const incCardsHtml = includesData.map(i => renderCard(i, false)).join('\n\n');
const excCardsHtml = excludesData.map(e => renderCard(e, true)).join('\n\n');

// Dates departure rows (18 days duration)
const departures = [
  // Spring 2026 (Mar, Apr, May)
  { month: "MAR", dayNum: "25", dates: "Mar 25 – Apr 11, 2026", status: "AVAILABLE", price: "$1,850" },
  { month: "APR", dayNum: "05", dates: "Apr 05 – Apr 22, 2026", status: "GUARANTEED", price: "$1,850" },
  { month: "APR", dayNum: "15", dates: "Apr 15 – May 02, 2026", status: "AVAILABLE", price: "$1,850" },
  { month: "APR", dayNum: "25", dates: "Apr 25 – May 12, 2026", status: "AVAILABLE", price: "$1,850" },
  { month: "MAY", dayNum: "02", dates: "May 02 – May 19, 2026", status: "GUARANTEED", price: "$1,850" },
  { month: "MAY", dayNum: "12", dates: "May 12 – May 29, 2026", status: "AVAILABLE", price: "$1,850" },
  // Autumn 2026 (Sep, Oct, Nov)
  { month: "SEP", dayNum: "15", dates: "Sep 15 – Oct 02, 2026", status: "AVAILABLE", price: "$1,850" },
  { month: "SEP", dayNum: "25", dates: "Sep 25 – Oct 12, 2026", status: "GUARANTEED", price: "$1,850" },
  { month: "OCT", dayNum: "04", dates: "Oct 04 – Oct 21, 2026", status: "GUARANTEED", price: "$1,850" },
  { month: "OCT", dayNum: "14", dates: "Oct 14 – Oct 31, 2026", status: "GUARANTEED", price: "$1,850" },
  { month: "OCT", dayNum: "24", dates: "Oct 24 – Nov 10, 2026", status: "AVAILABLE", price: "$1,850" },
  { month: "NOV", dayNum: "04", dates: "Nov 04 – Nov 21, 2026", status: "AVAILABLE", price: "$1,850" },
  { month: "NOV", dayNum: "14", dates: "Nov 14 – Dec 01, 2026", status: "AVAILABLE", price: "$1,850" }
];

function renderDepartureRow(dep) {
  const isGuaranteed = dep.status === "GUARANTEED";
  const statusPill = isGuaranteed
    ? `<span class="departure-status-pill" style="background: #e6f7f0; color: #008060; border-color: #a3e9c9;">GUARANTEED</span>`
    : `<span class="departure-status-pill">AVAILABLE</span>`;

  return `                  <div class="departure-item-row" data-month="${dep.month}">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">${dep.dayNum}</div>
                      <div class="calendar-month-txt">${dep.month}</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">${dep.dates}</div>
                      ${statusPill}
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">${dep.price}</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Mera Peak Climbing Trek (${dep.dates})">Book Now</button>
                    </div>
                  </div>`;
}

const departureRowsHtml = departures.map(renderDepartureRow).join('\n');

const newSec3And4 = `<!-- Section 3: Includes and Excludes -->
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
                justify-content: center;
              }
              .inc-exc-card-title {
                font-size: 0.98rem;
                font-weight: 600;
                color: var(--color-primary-navy);
                line-height: 1.45;
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
                <h2 class="inc-exc-section-title">What is Included in the Mera Peak Climbing Trek?</h2>
                <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <p class="inc-exc-lead-text" style="font-size: 1rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0 0 24px 0;">Our comprehensive Mera Peak expedition package is completely transparent, covering all official NMA permits, certified climbing guides (1:2 summit ratio), high-camp infrastructure, domestic flights, lodges, meals, and safety gear.</p>

              <!-- Includes Grid -->
              <div class="inc-exc-grid">
${incCardsHtml}
              </div>

              <!-- Excludes Heading -->
              <div class="inc-exc-section-title-wrapper">
                <h2 class="inc-exc-section-title">What is Excluded from the Mera Peak Climbing Trek?</h2>
                <div style="width: 48px; height: 4px; background: #ef4444; border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <p class="inc-exc-lead-text" style="font-size: 1rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0 0 24px 0;">To give you total clarity when budgeting, the following personal expenses, international travel, insurance, and equipment items are not included in the standard expedition rate.</p>

              <!-- Excludes Grid -->
              <div class="inc-exc-grid">
${excCardsHtml}
              </div>
            </div>
          </section>

          <!-- Section 4: Dates and Availability -->
          <section id="section-dates" class="trek-detail-section">
            <div class="dates-section-header">
              <h2 class="trek-section-title" style="margin-bottom: 0;">Booking Dates & Availability for Mera Peak Climb</h2>
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

            <!-- Card Container -->
            <div class="dates-card-container">
              <!-- View 1: Group Joining -->
              <div id="dates-group-view" class="dates-view-pane active">
                <div class="dates-group-topbar">
                  <span class="dates-year-badge">2026</span>
                  <div class="dates-month-tabs">
                    <button type="button" class="dates-month-tab active" data-month="MAR">MAR</button>
                    <button type="button" class="dates-month-tab" data-month="APR">APR</button>
                    <button type="button" class="dates-month-tab" data-month="MAY">MAY</button>
                    <button type="button" class="dates-month-tab" data-month="SEP">SEP</button>
                    <button type="button" class="dates-month-tab" data-month="OCT">OCT</button>
                    <button type="button" class="dates-month-tab" data-month="NOV">NOV</button>
                  </div>
                </div>

                <!-- Departure List -->
                <div class="dates-departure-list">
${departureRowsHtml}
                </div>
              </div>

              <!-- View 2: Private Dates -->
              <div id="dates-private-view" class="dates-view-pane" style="display: none;">
                <div class="private-dates-header">
                  <div class="private-dates-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 class="private-dates-title">Choose Your Private Departure Date</h3>
                    <p class="private-dates-desc">
                      Plan your Mera Peak Climbing Trek: Summit Nepal's Highest Trekking Peak at your convenience. Select your preferred departure date for this 18 days journey, and we'll take care of the rest.
                    </p>
                  </div>
                </div>

                <!-- Dual Month Interactive Calendar -->
                <div class="calendar-wrapper">
                  <div class="calendar-navigation">
                    <button type="button" class="cal-nav-btn" id="cal-prev" aria-label="Previous Month">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <button type="button" class="cal-nav-btn" id="cal-next" aria-label="Next Month">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                  </div>

                  <div class="dual-calendar-grid">
                    <!-- Month 1 -->
                    <div class="month-box" id="cal-month-1">
                      <div class="month-title" id="cal-month-1-title">Month Year</div>
                      <div class="weekdays-grid">
                        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                      </div>
                      <div class="days-grid" id="cal-days-1"></div>
                    </div>

                    <!-- Month 2 -->
                    <div class="month-box" id="cal-month-2">
                      <div class="month-title" id="cal-month-2-title">Month Year</div>
                      <div class="weekdays-grid">
                        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                      </div>
                      <div class="days-grid" id="cal-days-2"></div>
                    </div>
                  </div>
                </div>

                <!-- Selection Summary Card -->
                <div class="selection-summary-card" id="selection-summary" style="display: none;">
                  <div class="summary-left">
                    <div class="summary-badge">CUSTOM DEPARTURE</div>
                    <div class="summary-dates" id="summary-date-range">Date - Date, Year</div>
                    <div class="summary-sub">18 days trip • Private Guide & Climbing Sherpas • Guaranteed Departure</div>
                  </div>
                  <div class="summary-right">
                    <div class="summary-price-box">
                      <div class="sum-price-val">$1,850</div>
                      <div class="sum-price-unit">per person</div>
                    </div>
                    <button type="button" class="btn-continue-booking open-inquiry-btn" id="btn-book-custom" data-trek-title="Mera Peak Climbing Trek (Custom Date)">
                      Book This Date
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>\n\n          `;

html = html.substring(0, idx3) + newSec3And4 + html.substring(idx5);

fs.writeFileSync('trek/mera-peak-climbing-trek/index.html', html, 'utf8');
console.log('Successfully updated Section 3 (Includes/Excludes) and Section 4 (Dates) for Mera Peak!');
