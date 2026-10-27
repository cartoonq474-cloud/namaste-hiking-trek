function getDatesHtml() {
  const price = '$1,299';
  const trekName = 'Manaslu Circuit Trek';

  const departures = [
    // AUG (Default active month in trek-details.js)
    { month: 'AUG', day: '05', title: 'Aug 5 – Aug 18, 2026', status: 'AVAILABLE', extra: false },
    { month: 'AUG', day: '12', title: 'Aug 12 – Aug 25, 2026', status: 'GUARANTEED', extra: false },
    { month: 'AUG', day: '17', title: 'Aug 17 – Aug 30, 2026', status: 'AVAILABLE', extra: false },
    { month: 'AUG', day: '22', title: 'Aug 22 – Sep 4, 2026', status: 'AVAILABLE', extra: false },
    { month: 'AUG', day: '27', title: 'Aug 27 – Sep 9, 2026', status: 'LIMITED', extra: false },
    { month: 'AUG', day: '30', title: 'Aug 30 – Sep 12, 2026', status: 'AVAILABLE', extra: true },

    // SEP (Autumn Prime Season)
    { month: 'SEP', day: '04', title: 'Sep 4 – Sep 17, 2026', status: 'AVAILABLE', extra: false },
    { month: 'SEP', day: '10', title: 'Sep 10 – Sep 23, 2026', status: 'GUARANTEED', extra: false },
    { month: 'SEP', day: '16', title: 'Sep 16 – Sep 29, 2026', status: 'LIMITED', extra: false },
    { month: 'SEP', day: '22', title: 'Sep 22 – Oct 5, 2026', status: 'GUARANTEED', extra: false },
    { month: 'SEP', day: '27', title: 'Sep 27 – Oct 10, 2026', status: 'AVAILABLE', extra: false },
    { month: 'SEP', day: '30', title: 'Sep 30 – Oct 13, 2026', status: 'AVAILABLE', extra: true },

    // OCT (Peak Visibility & Festivities)
    { month: 'OCT', day: '03', title: 'Oct 3 – Oct 16, 2026', status: 'GUARANTEED', extra: false },
    { month: 'OCT', day: '08', title: 'Oct 8 – Oct 21, 2026', status: 'LIMITED', extra: false },
    { month: 'OCT', day: '14', title: 'Oct 14 – Oct 27, 2026', status: 'GUARANTEED', extra: false },
    { month: 'OCT', day: '19', title: 'Oct 19 – Nov 1, 2026', status: 'AVAILABLE', extra: false },
    { month: 'OCT', day: '25', title: 'Oct 25 – Nov 7, 2026', status: 'GUARANTEED', extra: false },
    { month: 'OCT', day: '30', title: 'Oct 30 – Nov 12, 2026', status: 'AVAILABLE', extra: true },

    // NOV (Crisp Clear Mountain Vistas)
    { month: 'NOV', day: '04', title: 'Nov 4 – Nov 17, 2026', status: 'GUARANTEED', extra: false },
    { month: 'NOV', day: '10', title: 'Nov 10 – Nov 23, 2026', status: 'AVAILABLE', extra: false },
    { month: 'NOV', day: '16', title: 'Nov 16 – Nov 29, 2026', status: 'AVAILABLE', extra: false },
    { month: 'NOV', day: '22', title: 'Nov 22 – Dec 5, 2026', status: 'GUARANTEED', extra: false },
    { month: 'NOV', day: '27', title: 'Nov 27 – Dec 10, 2026', status: 'LIMITED', extra: false },
    { month: 'NOV', day: '30', title: 'Nov 30 – Dec 13, 2026', status: 'AVAILABLE', extra: true },

    // DEC (Quiet Winter Magic)
    { month: 'DEC', day: '03', title: 'Dec 3 – Dec 16, 2026', status: 'AVAILABLE', extra: false },
    { month: 'DEC', day: '09', title: 'Dec 9 – Dec 22, 2026', status: 'AVAILABLE', extra: false },
    { month: 'DEC', day: '15', title: 'Dec 15 – Dec 28, 2026', status: 'AVAILABLE', extra: false },
    { month: 'DEC', day: '21', title: 'Dec 21 – Jan 3, 2027', status: 'GUARANTEED', extra: false },

    // MAR (Spring Awakening 2027)
    { month: 'MAR', day: '06', title: 'Mar 6 – Mar 19, 2027', status: 'AVAILABLE', extra: false },
    { month: 'MAR', day: '12', title: 'Mar 12 – Mar 25, 2027', status: 'GUARANTEED', extra: false },
    { month: 'MAR', day: '18', title: 'Mar 18 – Mar 31, 2027', status: 'AVAILABLE', extra: false },
    { month: 'MAR', day: '24', title: 'Mar 24 – Apr 6, 2027', status: 'AVAILABLE', extra: false },
    { month: 'MAR', day: '30', title: 'Mar 30 – Apr 12, 2027', status: 'GUARANTEED', extra: false },
    { month: 'MAR', day: '31', title: 'Mar 31 – Apr 13, 2027', status: 'AVAILABLE', extra: true },

    // APR (Wildflower & Rhododendron Season)
    { month: 'APR', day: '04', title: 'Apr 4 – Apr 17, 2027', status: 'GUARANTEED', extra: false },
    { month: 'APR', day: '10', title: 'Apr 10 – Apr 23, 2027', status: 'LIMITED', extra: false },
    { month: 'APR', day: '16', title: 'Apr 16 – Apr 29, 2027', status: 'GUARANTEED', extra: false },
    { month: 'APR', day: '22', title: 'Apr 22 – May 5, 2027', status: 'AVAILABLE', extra: false },
    { month: 'APR', day: '28', title: 'Apr 28 – May 11, 2027', status: 'AVAILABLE', extra: false },
    { month: 'APR', day: '30', title: 'Apr 30 – May 13, 2027', status: 'AVAILABLE', extra: true },

    // MAY (Lush Alpine Valleys)
    { month: 'MAY', day: '05', title: 'May 5 – May 18, 2027', status: 'AVAILABLE', extra: false },
    { month: 'MAY', day: '11', title: 'May 11 – May 24, 2027', status: 'GUARANTEED', extra: false },
    { month: 'MAY', day: '17', title: 'May 17 – May 30, 2027', status: 'AVAILABLE', extra: false },
    { month: 'MAY', day: '23', title: 'May 23 – Jun 5, 2027', status: 'AVAILABLE', extra: false },
    { month: 'MAY', day: '28', title: 'May 28 – Jun 10, 2027', status: 'AVAILABLE', extra: true }
  ];

  const departureRowsHtml = departures.map(d => {
    const isAug = d.month === 'AUG';
    const isExtra = d.extra;
    const extraClass = isExtra ? ' extra-date' : '';
    let displayStyle = '';

    if (!isAug || isExtra) {
      displayStyle = ' style="display: none;"';
    }

    return `                  <!-- Departure ${d.month} ${d.day} -->
                  <div class="departure-item-row${extraClass}" data-month="${d.month}"${displayStyle}>
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
                      <div class="departure-price"><span class="price-val">${price}</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="${trekName} (${d.title})">Book Now</button>
                    </div>
                  </div>`;
  }).join('\n');

  return `
          <!-- Section 4: Dates & Availability -->
          <section id="section-dates" class="trek-detail-section">
            <div class="dates-section-header">
              <h2 class="trek-section-title" style="margin-bottom: 0;">Booking Dates & Availability for Manaslu Circuit Trek</h2>
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

                <div class="dates-departure-list">
${departureRowsHtml}
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
                      Plan your Manaslu Circuit Trek: Circumnavigate the World's 8th Highest Peak at your convenience. Select your preferred departure date for this 14 days journey, and we'll take care of the rest.
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
                  <button type="button" id="btn-select-private-date" class="btn-select-dates open-inquiry-btn" data-base-title="Manaslu Circuit Private Trek" data-trek-title="Manaslu Circuit Private Trek" disabled>Select dates ↗</button>
                </div>
              </div>
            </div>
          </section>`;
}

module.exports = getDatesHtml;
