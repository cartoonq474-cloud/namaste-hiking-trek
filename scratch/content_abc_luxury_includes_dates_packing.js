module.exports = {
  getIncludesDatesPackingSection: function() {
    return `
          <!-- Section 3: Includes & Excludes -->
          <section id="section-includes" class="trek-detail-section">

            <h2 class="trek-section-title">What is Included & Excluded in the Annapurna Base Camp Luxury Trek</h2>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-top: 12px; margin-bottom: 24px;">
              Transparency is fundamental to our luxury trekking ethos. We provide complete clarity on all inclusions, logistics, and lodge standards so you know exactly what is arranged before departure.
            </p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;" class="includes-excludes-grid">
              
              <!-- What is Included -->
              <div style="background: #ffffff; border: 1px solid #d1fae5; border-radius: var(--radius-md); padding: 28px; box-shadow: var(--shadow-sm);">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                  <div style="width: 36px; height: 36px; border-radius: 50%; background: #e6f7f0; display: flex; align-items: center; justify-content: center; color: #008060; flex-shrink: 0;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 style="font-size: 1.35rem; color: var(--color-primary-navy); font-weight: 700; margin: 0;">What is Included</h3>
                </div>

                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; font-size: 0.95rem; color: var(--color-neutral-700);">
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #008060; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></span>
                    <span><strong>5-Star City Hotel Stays:</strong> 3 nights in Kathmandu (5-star hotel) & 2 nights in Pokhara (luxury lakeside resort) with daily breakfasts.</span>
                  </li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #008060; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></span>
                    <span><strong>Selected Mountain Lodges:</strong> 9 nights in the best available mountain lodges and teahouses, including boutique lodge in Ghandruk and reserved twin rooms up to ABC.</span>
                  </li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #008060; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></span>
                    <span><strong>Domestic Flights:</strong> Round-trip scheduled flights Kathmandu ⇄ Pokhara, saving 14+ hours of overland driving, including 15kg baggage allowance per person.</span>
                  </li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #008060; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></span>
                    <span><strong>Private Ground Transfers:</strong> All airport pickups/drop-offs in Kathmandu and Pokhara, plus private 4WD transportation from Pokhara to Ghandruk and Jhinu exit back to Pokhara.</span>
                  </li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #008060; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></span>
                    <span><strong>Full Board on Trek:</strong> 3 freshly prepared meals daily (Breakfast, Lunch, Dinner) during the 10 trekking days, plus hot tea or coffee with each meal.</span>
                  </li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #008060; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></span>
                    <span><strong>Licensed Sherpa Guide:</strong> Highly experienced, English-speaking, government-certified mountain guide trained in wilderness first aid and high-altitude medicine.</span>
                  </li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #008060; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></span>
                    <span><strong>Dedicated Porter Support:</strong> 1 porter between every 2 trekkers (carrying up to 12.5 kg per trekker), ensuring you walk with only a light daypack.</span>
                  </li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #008060; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></span>
                    <span><strong>Permits & Documentation:</strong> Annapurna Conservation Area Project (ACAP) permit and Trekkers' Information Management System (TIMS) registration cards.</span>
                  </li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #008060; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></span>
                    <span><strong>Complimentary Expedition Gear:</strong> Duffel bag, 4-season down sleeping bag (-15°C rated), and down jacket provided on loan for the duration of the trek.</span>
                  </li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #008060; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></span>
                    <span><strong>Safety & Medical Monitoring:</strong> Daily pulse oximeter blood oxygen checks, comprehensive first-aid medical kit, and 24/7 emergency coordination.</span>
                  </li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #008060; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></span>
                    <span><strong>Celebratory Dinners:</strong> Authentic welcome dinner in Kathmandu and celebratory farewell cultural dinner with live music and traditional dance.</span>
                  </li>
                </ul>
              </div>

              <!-- What is Excluded -->
              <div style="background: #ffffff; border: 1px solid #fed7aa; border-radius: var(--radius-md); padding: 28px; box-shadow: var(--shadow-sm);">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                  <div style="width: 36px; height: 36px; border-radius: 50%; background: #fff7ed; display: flex; align-items: center; justify-content: center; color: #ea580c; flex-shrink: 0;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </div>
                  <h3 style="font-size: 1.35rem; color: var(--color-primary-navy); font-weight: 700; margin: 0;">What is Excluded</h3>
                </div>

                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; font-size: 0.95rem; color: var(--color-neutral-700);">
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #ea580c; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
                    <span><strong>International Airfare:</strong> International flights to and from Tribhuvan International Airport (KTM) in Kathmandu.</span>
                  </li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #ea580c; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
                    <span><strong>Nepal Entry Visa:</strong> $30 USD (15 days) or $50 USD (30 days), obtainable upon arrival at Kathmandu Airport.</span>
                  </li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #ea580c; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
                    <span><strong>Travel & Medical Insurance:</strong> Mandatory policy covering high-altitude trekking up to 4,500m and emergency helicopter medical evacuation.</span>
                  </li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #ea580c; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
                    <span><strong>City Lunches & Dinners:</strong> Lunches and dinners in Kathmandu and Pokhara (outside of the included welcome and farewell dinners).</span>
                  </li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #ea580c; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
                    <span><strong>Beverages & Bar Bills:</strong> Bottled soft drinks, beer, wine, spirits, and specialty barista coffee along the trail.</span>
                  </li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #ea580c; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
                    <span><strong>Personal Expenses:</strong> Hot gas showers, battery device recharging fees, and personal Wi-Fi cards in high-mountain lodges.</span>
                  </li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #ea580c; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
                    <span><strong>Tipping for Mountain Crew:</strong> Recommended gratuity for guide and porters (typically $150–$200 USD per trekker total).</span>
                  </li>
                  <li style="display: flex; gap: 12px; align-items: flex-start;">
                    <span style="color: #ea580c; flex-shrink: 0; margin-top: 2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
                    <span><strong>Unforeseen Delay Costs:</strong> Additional hotel nights or transport expenses resulting from flight delays, weather disruptions, or personal early departure.</span>
                  </li>
                </ul>
              </div>

            </div>

            <!-- Booking Protection & Deposit Banner -->
            <div style="margin-top: 28px; background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%); border: 1px solid #a7f3d0; border-radius: var(--radius-md); padding: 22px 28px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
              <div style="display: flex; align-items: center; gap: 16px;">
                <div style="width: 44px; height: 44px; border-radius: 50%; background: #10b981; color: white; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <h4 style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; margin: 0 0 4px 0;">100% Financial Protection & Flexible Booking</h4>
                  <p style="font-size: 0.9rem; color: var(--color-neutral-700); margin: 0;">Secure your preferred dates with a 20% deposit. Enjoy lifetime deposit flexibility and free date transfers up to 30 days before departure.</p>
                </div>
              </div>
              <a href="#section-booking" class="btn btn-primary" style="padding: 10px 24px; font-weight: 700; text-decoration: none;">Book With Confidence</a>
            </div>

          </section>

          <!-- Section 4: Dates & Availability (Flagship Dual-Mode Layout) -->
          <section id="section-dates" class="trek-detail-section">
            <div class="dates-section-header">
              <h2 class="trek-section-title" style="margin-bottom: 0;">Booking Dates & Availability for Annapurna Base Camp Luxury Trek</h2>
              <div class="dates-mode-toggle">
                <button type="button" class="dates-mode-btn active" data-mode="group">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  Group Joining
                </button>
                <button type="button" class="dates-mode-btn" data-mode="private">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
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
                    <button type="button" class="dates-month-tab" data-month="DEC">DEC</button>
                  </div>
                </div>

                <div class="dates-departure-list">
                  <!-- MAR Row 1 -->
                  <div class="departure-item-row" data-month="MAR">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">15</div>
                      <div class="calendar-month-txt">MAR</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Mar 15 – Mar 29, 2026</div>
                      <span class="departure-status-pill">GUARANTEED</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,650</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Annapurna Base Camp Luxury Trek (Mar 15 - Mar 29, 2026)">Book Now</button>
                    </div>
                  </div>

                  <!-- MAR Row 2 -->
                  <div class="departure-item-row" data-month="MAR">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">22</div>
                      <div class="calendar-month-txt">MAR</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Mar 22 – Apr 05, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,650</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Annapurna Base Camp Luxury Trek (Mar 22 - Apr 05, 2026)">Book Now</button>
                    </div>
                  </div>

                  <!-- APR Row 1 -->
                  <div class="departure-item-row" data-month="APR" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">04</div>
                      <div class="calendar-month-txt">APR</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Apr 04 – Apr 18, 2026</div>
                      <span class="departure-status-pill">GUARANTEED</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,650</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Annapurna Base Camp Luxury Trek (Apr 04 - Apr 18, 2026)">Book Now</button>
                    </div>
                  </div>

                  <!-- APR Row 2 -->
                  <div class="departure-item-row" data-month="APR" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">18</div>
                      <div class="calendar-month-txt">APR</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Apr 18 – May 02, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,650</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Annapurna Base Camp Luxury Trek (Apr 18 - May 02, 2026)">Book Now</button>
                    </div>
                  </div>

                  <!-- MAY Row 1 -->
                  <div class="departure-item-row" data-month="MAY" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">02</div>
                      <div class="calendar-month-txt">MAY</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">May 02 – May 16, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,650</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Annapurna Base Camp Luxury Trek (May 02 - May 16, 2026)">Book Now</button>
                    </div>
                  </div>

                  <!-- MAY Row 2 -->
                  <div class="departure-item-row" data-month="MAY" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">16</div>
                      <div class="calendar-month-txt">MAY</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">May 16 – May 30, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,650</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Annapurna Base Camp Luxury Trek (May 16 - May 30, 2026)">Book Now</button>
                    </div>
                  </div>

                  <!-- SEP Row 1 -->
                  <div class="departure-item-row" data-month="SEP" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">12</div>
                      <div class="calendar-month-txt">SEP</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Sep 12 – Sep 26, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,650</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Annapurna Base Camp Luxury Trek (Sep 12 - Sep 26, 2026)">Book Now</button>
                    </div>
                  </div>

                  <!-- SEP Row 2 -->
                  <div class="departure-item-row" data-month="SEP" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">26</div>
                      <div class="calendar-month-txt">SEP</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Sep 26 – Oct 10, 2026</div>
                      <span class="departure-status-pill">GUARANTEED</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,650</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Annapurna Base Camp Luxury Trek (Sep 26 - Oct 10, 2026)">Book Now</button>
                    </div>
                  </div>

                  <!-- OCT Row 1 -->
                  <div class="departure-item-row" data-month="OCT" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">05</div>
                      <div class="calendar-month-txt">OCT</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Oct 05 – Oct 19, 2026</div>
                      <span class="departure-status-pill">GUARANTEED</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,650</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Annapurna Base Camp Luxury Trek (Oct 05 - Oct 19, 2026)">Book Now</button>
                    </div>
                  </div>

                  <!-- OCT Row 2 -->
                  <div class="departure-item-row" data-month="OCT" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">15</div>
                      <div class="calendar-month-txt">OCT</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Oct 15 – Oct 29, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,650</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Annapurna Base Camp Luxury Trek (Oct 15 - Oct 29, 2026)">Book Now</button>
                    </div>
                  </div>

                  <!-- NOV Row 1 -->
                  <div class="departure-item-row" data-month="NOV" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">05</div>
                      <div class="calendar-month-txt">NOV</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Nov 05 – Nov 19, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,650</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Annapurna Base Camp Luxury Trek (Nov 05 - Nov 19, 2026)">Book Now</button>
                    </div>
                  </div>

                  <!-- DEC Row 1 -->
                  <div class="departure-item-row" data-month="DEC" style="display: none;">
                    <div class="departure-date-badge">
                      <div class="calendar-ring-dots"><span></span><span></span><span></span></div>
                      <div class="calendar-day-num">01</div>
                      <div class="calendar-month-txt">DEC</div>
                    </div>
                    <div class="departure-info">
                      <div class="departure-title">Dec 01 – Dec 15, 2026</div>
                      <span class="departure-status-pill">AVAILABLE</span>
                    </div>
                    <div class="departure-action">
                      <div class="departure-price"><span class="price-val">$1,650</span> <span class="price-unit">pp</span></div>
                      <button type="button" class="btn-book-now open-inquiry-btn" data-trek-title="Annapurna Base Camp Luxury Trek (Dec 01 - Dec 15, 2026)">Book Now</button>
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 class="private-dates-title">Choose Your Private Departure Date</h3>
                    <p class="private-dates-desc">
                      Plan your Annapurna Base Camp Luxury Trek on your personal timeline. Select your preferred departure date for this 15 days journey, and we will take care of every detail.
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
                  <button type="button" id="btn-select-private-date" class="btn-select-dates open-inquiry-btn" data-trek-title="Annapurna Base Camp Luxury Private Trek" disabled>Select dates ↗</button>
                </div>
              </div>
            </div>
          </section>

          <!-- Section 5: Packing List -->
          <section id="section-packing" class="trek-detail-section">

            <h2 class="trek-section-title">Comprehensive Packing List: Annapurna Base Camp Luxury Trek</h2>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-top: 12px; margin-bottom: 24px;">
              Trekking in the Annapurna Sanctuary spans subtropical river valleys (<span data-altitude-m="820">820m</span>) to alpine glacial terrain (<span data-altitude-m="4130">4,130m</span>). A disciplined 4-season layering strategy ensures total warmth, breathability, and comfort. We provide a waterproof duffel bag, down jacket, and warm sleeping bag for your journey.
            </p>

            <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 28px; box-shadow: var(--shadow-sm);">
              
              <!-- Tabbed Checklist Categories -->
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px;" class="packing-categories-grid">
                
                <!-- Category 1: Clothing & Layering -->
                <div>
                  <h3 class="gear-section-title" style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; border-left: 4px solid var(--color-copper-orange); padding-left: 10px; margin-bottom: 16px;">1. Moisture-Wicking & Insulating Layers</h3>
                  <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 0.92rem; color: var(--color-neutral-700);">
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> 2–3 moisture-wicking synthetic or merino wool t-shirts</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> 2 thermal base-layer tops and bottoms (merino 200–260 gsm)</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> 1 mid-weight fleece jacket or breathable Polartec pullover</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> 1 heavyweight down jacket (-15°C rated, complimentary loan provided)</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> 1 windproof & waterproof hardshell jacket (GORE-TEX or equivalent)</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> 2 pairs quick-dry trekking pants + 1 pair waterproof rain pants</li>
                  </ul>
                </div>

                <!-- Category 2: Footwear & Extremities -->
                <div>
                  <h3 class="gear-section-title" style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; border-left: 4px solid var(--color-copper-orange); padding-left: 10px; margin-bottom: 16px;">2. Footwear, Gloves & Headwear</h3>
                  <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 0.92rem; color: var(--color-neutral-700);">
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> Broken-in, waterproof high-ankle hiking boots with vibram sole</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> 4–5 pairs of cushioned merino wool trekking socks</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> 1 pair light lodge shoes or sandals for cozy teahouse evenings</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> 1 pair windproof fleece gloves + 1 pair heavy insulated winter gloves</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> 1 wide-brim UV sun hat + 1 warm wool/fleece beanie</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> 1 UV neck gaiter or buff to protect against mountain wind and dust</li>
                  </ul>
                </div>

                <!-- Category 3: Packs & Sleep -->
                <div>
                  <h3 class="gear-section-title" style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; border-left: 4px solid var(--color-copper-orange); padding-left: 10px; margin-bottom: 16px;">3. Packs, Sleep & Trekking Equipment</h3>
                  <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 0.92rem; color: var(--color-neutral-700);">
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> 28–35L daypack with supportive hip belt and built-in rain cover</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> Complimentary heavy-duty waterproof duffel bag (carried by porter)</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> 4-season sleeping bag (-15°C rated, loan provided by Namaste Hiking)</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> Telescopic trekking poles (essential for stone stairs in Chhomrong)</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> Category 3 or 4 UV glacier sunglasses (polarized)</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> 2 x 1-liter wide-mouth Nalgene bottles + insulated bottle jackets</li>
                  </ul>
                </div>

                <!-- Category 4: Medical, Hygiene & Tech -->
                <div>
                  <h3 class="gear-section-title" style="font-size: 1.15rem; color: var(--color-primary-navy); font-weight: 700; border-left: 4px solid var(--color-copper-orange); padding-left: 10px; margin-bottom: 16px;">4. Medical, Hygiene & Electronics</h3>
                  <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 0.92rem; color: var(--color-neutral-700);">
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> High-output LED headlamp (with spare rechargeable batteries)</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> 10,000–20,000 mAh power bank (store in sleeping bag to prevent drain)</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> Water purification tablets (Aquatabs / Katadyn) or UV SteriPEN</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> Personal blister kit (moleskin, Compeed patches, leukotape)</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> SPF 50+ mineral sunscreen, zinc lip balm, and biodegradable wipes</li>
                    <li style="display: flex; gap: 10px; align-items: center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> Personal medications, rehydration electrolytes, and Diamox (if advised)</li>
                  </ul>
                </div>

              </div>

              <!-- Rental text & checklist print note -->
              <div style="margin-top: 20px; font-size: 0.9rem; color: var(--color-neutral-600); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; border-top: 1px dashed var(--color-neutral-200); padding-top: 16px;">
                <div>Need to rent or buy gear locally? Kathmandu (Thamel) and Pokhara (Lakeside) have top-grade mountain gear shops.</div>
                <button type="button" onclick="window.print()" style="background: none; border: 1px solid var(--color-neutral-300); padding: 6px 14px; border-radius: 6px; font-weight: 600; font-size: 0.85rem; color: var(--color-primary-navy); cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                  Print Packing Checklist
                </button>
              </div>

            </div>

          </section>
`;
  }
};
