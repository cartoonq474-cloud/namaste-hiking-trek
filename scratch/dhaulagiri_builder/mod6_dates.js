// Module 6: Section 4 - Dates & Availability with Dual Calendar Mount for Dhaulagiri Circuit Trek
// Upgraded to canonical flagship template matching Everest Base Camp and Manaslu Circuit treks
function getDatesSection() {
  return `
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

              <div class="dates-departure-list">
                  <!-- Departure AUG 20 -->
                  <div class="departure-item-row" data-month="AUG">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">20</div>
                      <div class="calendar-month-txt">AUG</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Aug 20 – Sep 8, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Aug 20 – Sep 8, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure AUG 28 -->
                  <div class="departure-item-row" data-month="AUG">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">28</div>
                      <div class="calendar-month-txt">AUG</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Aug 28 – Sep 16, 2026</div>
                      <span class="departure-status-pill">GUARANTEED</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Aug 28 – Sep 16, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure AUG 31 -->
                  <div class="departure-item-row extra-date" data-month="AUG" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">31</div>
                      <div class="calendar-month-txt">AUG</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Aug 31 – Sep 19, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Aug 31 – Sep 19, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure SEP 05 -->
                  <div class="departure-item-row" data-month="SEP" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">05</div>
                      <div class="calendar-month-txt">SEP</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Sep 5 – Sep 24, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Sep 5 – Sep 24, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure SEP 12 -->
                  <div class="departure-item-row" data-month="SEP" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">12</div>
                      <div class="calendar-month-txt">SEP</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Sep 12 – Oct 1, 2026</div>
                      <span class="departure-status-pill">GUARANTEED</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Sep 12 – Oct 1, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure SEP 20 -->
                  <div class="departure-item-row" data-month="SEP" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">20</div>
                      <div class="calendar-month-txt">SEP</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Sep 20 – Oct 9, 2026</div>
                      <span class="departure-status-pill">GUARANTEED (4 Spots Left)</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Sep 20 – Oct 9, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure SEP 27 -->
                  <div class="departure-item-row" data-month="SEP" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">27</div>
                      <div class="calendar-month-txt">SEP</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Sep 27 – Oct 16, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Sep 27 – Oct 16, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure SEP 30 -->
                  <div class="departure-item-row extra-date" data-month="SEP" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">30</div>
                      <div class="calendar-month-txt">SEP</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Sep 30 – Oct 19, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Sep 30 – Oct 19, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure OCT 05 -->
                  <div class="departure-item-row" data-month="OCT" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">05</div>
                      <div class="calendar-month-txt">OCT</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Oct 5 – Oct 24, 2026</div>
                      <span class="departure-status-pill">GUARANTEED (2 Spots Left)</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Oct 5 – Oct 24, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure OCT 12 -->
                  <div class="departure-item-row" data-month="OCT" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">12</div>
                      <div class="calendar-month-txt">OCT</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Oct 12 – Oct 31, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Oct 12 – Oct 31, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure OCT 18 -->
                  <div class="departure-item-row" data-month="OCT" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">18</div>
                      <div class="calendar-month-txt">OCT</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Oct 18 – Nov 6, 2026</div>
                      <span class="departure-status-pill">GUARANTEED</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Oct 18 – Nov 6, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure OCT 25 -->
                  <div class="departure-item-row" data-month="OCT" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">25</div>
                      <div class="calendar-month-txt">OCT</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Oct 25 – Nov 13, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Oct 25 – Nov 13, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure OCT 28 -->
                  <div class="departure-item-row extra-date" data-month="OCT" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">28</div>
                      <div class="calendar-month-txt">OCT</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Oct 28 – Nov 16, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Oct 28 – Nov 16, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure NOV 02 -->
                  <div class="departure-item-row" data-month="NOV" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">02</div>
                      <div class="calendar-month-txt">NOV</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Nov 2 – Nov 21, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Nov 2 – Nov 21, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure NOV 10 -->
                  <div class="departure-item-row" data-month="NOV" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">10</div>
                      <div class="calendar-month-txt">NOV</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Nov 10 – Nov 29, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Nov 10 – Nov 29, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure NOV 16 -->
                  <div class="departure-item-row extra-date" data-month="NOV" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">16</div>
                      <div class="calendar-month-txt">NOV</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Nov 16 – Dec 5, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Nov 16 – Dec 5, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure DEC 01 -->
                  <div class="departure-item-row" data-month="DEC" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">01</div>
                      <div class="calendar-month-txt">DEC</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Dec 1 – Dec 20, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Dec 1 – Dec 20, 2026)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure MAR 15 -->
                  <div class="departure-item-row" data-month="MAR" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">15</div>
                      <div class="calendar-month-txt">MAR</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Mar 15 – Apr 3, 2027</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Mar 15 – Apr 3, 2027)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure MAR 25 -->
                  <div class="departure-item-row" data-month="MAR" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">25</div>
                      <div class="calendar-month-txt">MAR</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Mar 25 – Apr 13, 2027</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Mar 25 – Apr 13, 2027)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure MAR 30 -->
                  <div class="departure-item-row extra-date" data-month="MAR" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">30</div>
                      <div class="calendar-month-txt">MAR</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Mar 30 – Apr 18, 2027</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Mar 30 – Apr 18, 2027)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure APR 05 -->
                  <div class="departure-item-row" data-month="APR" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">05</div>
                      <div class="calendar-month-txt">APR</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Apr 5 – Apr 24, 2027</div>
                      <span class="departure-status-pill">AVAILABLE (8 Spots Left)</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Apr 5 – Apr 24, 2027)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure APR 15 -->
                  <div class="departure-item-row" data-month="APR" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">15</div>
                      <div class="calendar-month-txt">APR</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Apr 15 – May 4, 2027</div>
                      <span class="departure-status-pill">GUARANTEED</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Apr 15 – May 4, 2027)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure APR 25 -->
                  <div class="departure-item-row" data-month="APR" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">25</div>
                      <div class="calendar-month-txt">APR</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Apr 25 – May 14, 2027</div>
                      <span class="departure-status-pill">AVAILABLE (6 Spots Left)</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Apr 25 – May 14, 2027)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure APR 28 -->
                  <div class="departure-item-row extra-date" data-month="APR" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">28</div>
                      <div class="calendar-month-txt">APR</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Apr 28 – May 17, 2027</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (Apr 28 – May 17, 2027)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure MAY 05 -->
                  <div class="departure-item-row" data-month="MAY" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">05</div>
                      <div class="calendar-month-txt">MAY</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">May 5 – May 24, 2027</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (May 5 – May 24, 2027)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure MAY 15 -->
                  <div class="departure-item-row" data-month="MAY" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">15</div>
                      <div class="calendar-month-txt">MAY</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">May 15 – Jun 3, 2027</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (May 15 – Jun 3, 2027)">Book Now</button>
                    </div>
                  </div>
                  <!-- Departure MAY 22 -->
                  <div class="departure-item-row extra-date" data-month="MAY" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">22</div>
                      <div class="calendar-month-txt">MAY</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">May 22 – Jun 10, 2027</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,999</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Dhaulagiri Circuit Trek (May 22 – Jun 10, 2027)">Book Now</button>
                    </div>
                  </div>
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
  `;
}

module.exports = { getDatesSection };
