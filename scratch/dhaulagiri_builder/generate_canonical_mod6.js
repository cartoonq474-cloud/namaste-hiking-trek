const fs = require('fs');

const departures = [
  // AUG 2026
  { month: 'AUG', day: '20', title: 'Aug 20 – Sep 8, 2026', status: 'AVAILABLE', extra: false },
  { month: 'AUG', day: '28', title: 'Aug 28 – Sep 16, 2026', status: 'GUARANTEED', extra: false },
  { month: 'AUG', day: '31', title: 'Aug 31 – Sep 19, 2026', status: 'AVAILABLE', extra: true },

  // SEP 2026
  { month: 'SEP', day: '05', title: 'Sep 5 – Sep 24, 2026', status: 'AVAILABLE', extra: false },
  { month: 'SEP', day: '12', title: 'Sep 12 – Oct 1, 2026', status: 'GUARANTEED', extra: false },
  { month: 'SEP', day: '20', title: 'Sep 20 – Oct 9, 2026', status: 'GUARANTEED (4 Spots Left)', extra: false },
  { month: 'SEP', day: '27', title: 'Sep 27 – Oct 16, 2026', status: 'AVAILABLE', extra: false },
  { month: 'SEP', day: '30', title: 'Sep 30 – Oct 19, 2026', status: 'AVAILABLE', extra: true },

  // OCT 2026
  { month: 'OCT', day: '05', title: 'Oct 5 – Oct 24, 2026', status: 'GUARANTEED (2 Spots Left)', extra: false },
  { month: 'OCT', day: '12', title: 'Oct 12 – Oct 31, 2026', status: 'AVAILABLE', extra: false },
  { month: 'OCT', day: '18', title: 'Oct 18 – Nov 6, 2026', status: 'GUARANTEED', extra: false },
  { month: 'OCT', day: '25', title: 'Oct 25 – Nov 13, 2026', status: 'AVAILABLE', extra: false },
  { month: 'OCT', day: '28', title: 'Oct 28 – Nov 16, 2026', status: 'AVAILABLE', extra: true },

  // NOV 2026
  { month: 'NOV', day: '02', title: 'Nov 2 – Nov 21, 2026', status: 'AVAILABLE', extra: false },
  { month: 'NOV', day: '10', title: 'Nov 10 – Nov 29, 2026', status: 'AVAILABLE', extra: false },
  { month: 'NOV', day: '16', title: 'Nov 16 – Dec 5, 2026', status: 'AVAILABLE', extra: true },

  // DEC 2026
  { month: 'DEC', day: '01', title: 'Dec 1 – Dec 20, 2026', status: 'AVAILABLE', extra: false },

  // MAR 2027
  { month: 'MAR', day: '15', title: 'Mar 15 – Apr 3, 2027', status: 'AVAILABLE', extra: false },
  { month: 'MAR', day: '25', title: 'Mar 25 – Apr 13, 2027', status: 'AVAILABLE', extra: false },
  { month: 'MAR', day: '30', title: 'Mar 30 – Apr 18, 2027', status: 'AVAILABLE', extra: true },

  // APR 2027
  { month: 'APR', day: '05', title: 'Apr 5 – Apr 24, 2027', status: 'AVAILABLE (8 Spots Left)', extra: false },
  { month: 'APR', day: '15', title: 'Apr 15 – May 4, 2027', status: 'GUARANTEED', extra: false },
  { month: 'APR', day: '25', title: 'Apr 25 – May 14, 2027', status: 'AVAILABLE (6 Spots Left)', extra: false },
  { month: 'APR', day: '28', title: 'Apr 28 – May 17, 2027', status: 'AVAILABLE', extra: true },

  // MAY 2027
  { month: 'MAY', day: '05', title: 'May 5 – May 24, 2027', status: 'AVAILABLE', extra: false },
  { month: 'MAY', day: '15', title: 'May 15 – Jun 3, 2027', status: 'AVAILABLE', extra: false },
  { month: 'MAY', day: '22', title: 'May 22 – Jun 10, 2027', status: 'AVAILABLE', extra: true }
];

let rowsHtml = '';
departures.forEach(d => {
  const isAug = d.month === 'AUG';
  const extraClass = d.extra ? ' extra-date' : '';
  const initialDisplay = (isAug && !d.extra) ? '' : ' style="display: none;"';

  rowsHtml += `
                  <!-- Departure ${d.month} ${d.day} -->
                  <div class="departure-item-row${extraClass}" data-month="${d.month}"${initialDisplay}>
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">${d.day}</div>
                      <div class="calendar-month-txt">${d.month}</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">${d.title}</div>
                      <span class="departure-status-pill">${d.status}</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (${d.title})">Book Now</button>
                    </div>
                  </div>`;
});

const fileContent = `// Module 6: Section 4 - Dates & Availability with Dual Calendar Mount for Dhaulagiri Circuit Trek
// Upgraded to canonical flagship template matching Everest Base Camp and Manaslu Circuit treks
function getDatesSection() {
  return \`
        <!-- Section 4: Dates & Availability -->
        <section id="section-dates" class="trek-detail-section">
          <div class="dates-section-header">
            <h2 class="trek-section-title" style="margin-bottom: 0;">Booking Dates &amp; Availability for Dhaulagiri Circuit Trek</h2>
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
              <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                <span style="font-weight: 700; color: var(--color-primary-navy); font-size: 0.95rem;">Guaranteed Fixed Group Departures (Autumn 2026 &amp; Spring 2027)</span>
                <span style="font-size: 0.8rem; background: #ecfdf5; color: #047857; font-weight: 700; padding: 3px 8px; border-radius: 6px;">Small Groups (Max 10 Climbers)</span>
              </div>

              <div class="dates-group-topbar">
                <span class="dates-year-badge">2026 / 2027</span>
                <div class="dates-month-tabs">
                  <button type="button" class="dates-month-tab active" data-month="AUG">AUG</button>
                  <button type="button" class="dates-month-tab" data-month="SEP">SEP</button>
                  <button type="button" class="dates-month-tab" data-month="OCT">OCT</button>
                  <button type="button" class="dates-month-tab" data-month="NOV">NOV</button>
                  <button type="button" class="dates-month-tab" data-month="DEC">DEC</button>
                  <button type="button" class="dates-month-tab" data-month="MAR">MAR</button>
                  <button type="button" class="dates-month-tab" data-month="APR">APR</button>
                  <button type="button" class="dates-month-tab" data-month="MAY">MAY</button>
                </div>
              </div>

              <div class="dates-departure-list">` + rowsHtml + `
              </div>

              <div class="dates-load-more-wrapper">
                <button type="button" id="btn-load-more-dates" class="btn-load-more-dates">Load more dates</button>
              </div>
            </div>

            <!-- View 2: Private Date -->
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
                  <h3 class="private-dates-title">Choose Your Departure Date</h3>
                  <p class="private-dates-desc">
                    Plan your Dhaulagiri Circuit Trek: Demanding 20-Day Wilderness High Pass Expedition at your convenience. Select your preferred departure date for this 20 days journey, and we'll take care of the rest.
                  </p>
                </div>
              </div>

              <!-- Dual Month Interactive Calendar Widget Container -->
              <div class="dual-calendar-card">
                <div id="dual-calendar-mount" class="dual-calendar-mount"></div>
                <div class="calendar-footer-meta">
                  <div class="legend-item">
                    <span class="sold-out-dot"></span> Sold out dates
                  </div>
                  <div class="discount-note">
                    Group-size discounts will be applied in the next step.
                  </div>
                </div>
              </div>

              <!-- Bottom Action Row -->
              <div class="private-dates-action-bar">
                <span id="private-selected-date-text" class="private-selected-prompt">Select a start date from the calendar.</span>
                <button type="button" id="btn-select-private-date" class="btn-select-dates open-inquiry-btn" data-base-title="Dhaulagiri Circuit Private Trek" data-trek-title="Dhaulagiri Circuit Private Trek" disabled>Select dates ↗</button>
              </div>
            </div>
          </div>
        </section>
  \`;
}

module.exports = { getDatesSection };
`;

fs.writeFileSync('scratch/dhaulagiri_builder/mod6_dates.js', fileContent, 'utf8');
console.log("Successfully generated scratch/dhaulagiri_builder/mod6_dates.js");
