function buildSectionDates() {
  return `<section id="section-dates" class="trek-detail-section">
            <div class="dates-section-header">
              <h2 class="trek-section-title" style="margin-bottom: 0;">Booking Dates &amp; Availability for Mardi Himal Trek</h2>
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
              <!-- Group Joining View Pane -->
              <div id="dates-group-view" class="dates-view-pane active">
                <div class="dates-group-topbar">
                  <span class="dates-year-badge">2025 - 2026 Departures</span>
                  <!-- Month Filter Tabs -->
                  <div class="dates-month-tabs">
                    <button type="button" class="dates-month-tab active" data-month="2025-03">Mar 2025</button>
                    <button type="button" class="dates-month-tab" data-month="2025-04">Apr 2025</button>
                    <button type="button" class="dates-month-tab" data-month="2025-05">May 2025</button>
                    <button type="button" class="dates-month-tab" data-month="2025-09">Sep 2025</button>
                    <button type="button" class="dates-month-tab" data-month="2025-10">Oct 2025</button>
                    <button type="button" class="dates-month-tab" data-month="2025-11">Nov 2025</button>
                  </div>
                </div>

                <!-- Departure Items List -->
                <div class="dates-departure-list">
                  <!-- Mar 2025 (Active) -->
                  <div class="departure-item-row" data-month="2025-03">
                    <div class="departure-date-badge">
                      <span class="dep-day" style="font-size: 1.4rem; font-weight: 700; color: var(--color-primary-navy); display: block; line-height: 1;">08</span>
                      <span class="dep-month" style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--color-neutral-600);">Mar 2025</span>
                    </div>
                    <div class="departure-info">
                      <h4 class="departure-title">8 Days Mardi Himal Ridge Trek • Spring Rhododendron Special</h4>
                      <div class="departure-meta-tags" style="display: flex; gap: 8px; align-items: center; margin-top: 4px;">
                        <span class="departure-status-pill guaranteed" style="background: #e6f7f0; color: #008060; font-size: 0.75rem; font-weight: 600; padding: 2px 8px; border-radius: 4px; display: inline-flex; align-items: center; gap: 4px;">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Guaranteed Departure
                        </span>
                        <span style="font-size: 0.8rem; color: var(--color-neutral-500); font-weight: 500;">4 seats remaining</span>
                      </div>
                    </div>
                    <div class="departure-price">
                      <span class="price-val" style="font-size: 1.5rem; font-weight: 700; color: var(--color-primary-navy);">$749</span>
                      <span class="price-unit" style="font-size: 0.8rem; color: var(--color-neutral-500);">/ person</span>
                    </div>
                    <div class="departure-action">
                      <a href="#section-booking" class="btn-book-now" style="display: inline-flex; align-items: center; justify-content: center; padding: 10px 20px; background: #008060; color: #ffffff; border-radius: 8px; font-weight: 600; font-size: 0.9rem; text-decoration: none; transition: background 0.2s;">Book Now</a>
                    </div>
                  </div>

                  <div class="departure-item-row" data-month="2025-03">
                    <div class="departure-date-badge">
                      <span class="dep-day" style="font-size: 1.4rem; font-weight: 700; color: var(--color-primary-navy); display: block; line-height: 1;">18</span>
                      <span class="dep-month" style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--color-neutral-600);">Mar 2025</span>
                    </div>
                    <div class="departure-info">
                      <h4 class="departure-title">8 Days Mardi Himal Ridge Trek • Small Group Departure</h4>
                      <div class="departure-meta-tags" style="display: flex; gap: 8px; align-items: center; margin-top: 4px;">
                        <span class="departure-status-pill guaranteed" style="background: #e6f7f0; color: #008060; font-size: 0.75rem; font-weight: 600; padding: 2px 8px; border-radius: 4px; display: inline-flex; align-items: center; gap: 4px;">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Guaranteed Departure
                        </span>
                        <span style="font-size: 0.8rem; color: var(--color-neutral-500); font-weight: 500;">6 seats remaining</span>
                      </div>
                    </div>
                    <div class="departure-price">
                      <span class="price-val" style="font-size: 1.5rem; font-weight: 700; color: var(--color-primary-navy);">$749</span>
                      <span class="price-unit" style="font-size: 0.8rem; color: var(--color-neutral-500);">/ person</span>
                    </div>
                    <div class="departure-action">
                      <a href="#section-booking" class="btn-book-now" style="display: inline-flex; align-items: center; justify-content: center; padding: 10px 20px; background: #008060; color: #ffffff; border-radius: 8px; font-weight: 600; font-size: 0.9rem; text-decoration: none; transition: background 0.2s;">Book Now</a>
                    </div>
                  </div>

                  <div class="departure-item-row extra-date" data-month="2025-03" style="display: none;">
                    <div class="departure-date-badge">
                      <span class="dep-day" style="font-size: 1.4rem; font-weight: 700; color: var(--color-primary-navy); display: block; line-height: 1;">26</span>
                      <span class="dep-month" style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--color-neutral-600);">Mar 2025</span>
                    </div>
                    <div class="departure-info">
                      <h4 class="departure-title">8 Days Mardi Himal Ridge Trek • Peak Blossom Departure</h4>
                      <div class="departure-meta-tags" style="display: flex; gap: 8px; align-items: center; margin-top: 4px;">
                        <span class="departure-status-pill guaranteed" style="background: #e6f7f0; color: #008060; font-size: 0.75rem; font-weight: 600; padding: 2px 8px; border-radius: 4px; display: inline-flex; align-items: center; gap: 4px;">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Guaranteed Departure
                        </span>
                        <span style="font-size: 0.8rem; color: var(--color-neutral-500); font-weight: 500;">5 seats remaining</span>
                      </div>
                    </div>
                    <div class="departure-price">
                      <span class="price-val" style="font-size: 1.5rem; font-weight: 700; color: var(--color-primary-navy);">$749</span>
                      <span class="price-unit" style="font-size: 0.8rem; color: var(--color-neutral-500);">/ person</span>
                    </div>
                    <div class="departure-action">
                      <a href="#section-booking" class="btn-book-now" style="display: inline-flex; align-items: center; justify-content: center; padding: 10px 20px; background: #008060; color: #ffffff; border-radius: 8px; font-weight: 600; font-size: 0.9rem; text-decoration: none; transition: background 0.2s;">Book Now</a>
                    </div>
                  </div>

                  <!-- Apr 2025 -->
                  <div class="departure-item-row" data-month="2025-04" style="display: none;">
                    <div class="departure-date-badge">
                      <span class="dep-day" style="font-size: 1.4rem; font-weight: 700; color: var(--color-primary-navy); display: block; line-height: 1;">05</span>
                      <span class="dep-month" style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--color-neutral-600);">Apr 2025</span>
                    </div>
                    <div class="departure-info">
                      <h4 class="departure-title">8 Days Mardi Himal Ridge Trek • Spring High Season</h4>
                      <div class="departure-meta-tags" style="display: flex; gap: 8px; align-items: center; margin-top: 4px;">
                        <span class="departure-status-pill guaranteed" style="background: #e6f7f0; color: #008060; font-size: 0.75rem; font-weight: 600; padding: 2px 8px; border-radius: 4px; display: inline-flex; align-items: center; gap: 4px;">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Guaranteed Departure
                        </span>
                        <span style="font-size: 0.8rem; color: var(--color-neutral-500); font-weight: 500;">8 seats remaining</span>
                      </div>
                    </div>
                    <div class="departure-price">
                      <span class="price-val" style="font-size: 1.5rem; font-weight: 700; color: var(--color-primary-navy);">$749</span>
                      <span class="price-unit" style="font-size: 0.8rem; color: var(--color-neutral-500);">/ person</span>
                    </div>
                    <div class="departure-action">
                      <a href="#section-booking" class="btn-book-now" style="display: inline-flex; align-items: center; justify-content: center; padding: 10px 20px; background: #008060; color: #ffffff; border-radius: 8px; font-weight: 600; font-size: 0.9rem; text-decoration: none; transition: background 0.2s;">Book Now</a>
                    </div>
                  </div>

                  <!-- Oct 2025 -->
                  <div class="departure-item-row" data-month="2025-10" style="display: none;">
                    <div class="departure-date-badge">
                      <span class="dep-day" style="font-size: 1.4rem; font-weight: 700; color: var(--color-primary-navy); display: block; line-height: 1;">10</span>
                      <span class="dep-month" style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--color-neutral-600);">Oct 2025</span>
                    </div>
                    <div class="departure-info">
                      <h4 class="departure-title">8 Days Mardi Himal Ridge Trek • Crystal Autumn Sky</h4>
                      <div class="departure-meta-tags" style="display: flex; gap: 8px; align-items: center; margin-top: 4px;">
                        <span class="departure-status-pill guaranteed" style="background: #e6f7f0; color: #008060; font-size: 0.75rem; font-weight: 600; padding: 2px 8px; border-radius: 4px; display: inline-flex; align-items: center; gap: 4px;">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Guaranteed Departure
                        </span>
                        <span style="font-size: 0.8rem; color: var(--color-neutral-500); font-weight: 500;">10 seats remaining</span>
                      </div>
                    </div>
                    <div class="departure-price">
                      <span class="price-val" style="font-size: 1.5rem; font-weight: 700; color: var(--color-primary-navy);">$749</span>
                      <span class="price-unit" style="font-size: 0.8rem; color: var(--color-neutral-500);">/ person</span>
                    </div>
                    <div class="departure-action">
                      <a href="#section-booking" class="btn-book-now" style="display: inline-flex; align-items: center; justify-content: center; padding: 10px 20px; background: #008060; color: #ffffff; border-radius: 8px; font-weight: 600; font-size: 0.9rem; text-decoration: none; transition: background 0.2s;">Book Now</a>
                    </div>
                  </div>
                </div>

                <!-- Load More Button -->
                <div class="dates-load-more-wrapper" style="text-align: center; margin-top: 20px;">
                  <button type="button" class="btn-load-more-dates" style="background: #ffffff; border: 1px solid #cbd5e1; padding: 10px 24px; border-radius: 8px; font-weight: 600; color: var(--color-primary-navy); cursor: pointer; transition: all 0.2s;">
                    Load More Departures
                  </button>
                </div>
              </div>

              <!-- Private Dates View Pane -->
              <div id="dates-private-view" class="dates-view-pane" style="display: none; padding: 30px; text-align: center;">
                <div class="private-dates-header" style="max-width: 600px; margin: 0 auto 24px;">
                  <div class="private-dates-icon" style="width: 50px; height: 50px; border-radius: 50%; background: rgba(16, 185, 129, 0.12); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: var(--color-copper-orange);">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </div>
                  <h3 class="private-dates-title" style="font-size: 1.4rem; color: var(--color-primary-navy); margin-bottom: 8px;">Choose Your Own Private Trek Departure Date</h3>
                  <p class="private-dates-desc" style="color: var(--color-neutral-600); font-size: 0.95rem; line-height: 1.6;">
                    Solo travelers, couples, families, and private groups can depart any date of their choice between September and May. Tailor daily walking hours, add extra days in Pokhara, and enjoy a dedicated guide and porter team.
                  </p>
                </div>
                <div id="dual-calendar-mount" style="max-width: 500px; margin: 0 auto 24px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
                  <p id="private-selected-date-text" style="font-size: 1rem; font-weight: 600; color: var(--color-primary-navy); margin-bottom: 16px;">Select your preferred start date for your custom private trek:</p>
                  <input type="date" id="private-trek-datepicker" style="padding: 10px 16px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem; color: var(--color-primary-navy); outline: none;">
                </div>
                <a href="#section-booking" id="btn-select-private-date" class="btn-select-dates" style="display: inline-flex; align-items: center; justify-content: center; padding: 12px 30px; background: #008060; color: #ffffff; border-radius: 8px; font-weight: 600; font-size: 1rem; text-decoration: none;">
                  Request Private Custom Trek
                </a>
              </div>
            </div>
          </section>`;
}

module.exports = { buildSectionDates };
