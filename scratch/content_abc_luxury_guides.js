module.exports = {
  getGuidesSection: function() {
    return `
          <!-- Section 6: Trip Details (16 In-Depth Guides) -->
          <section id="section-details" class="trek-detail-section">
            
            <div class="details-title-wrapper" style="margin-bottom: 20px;">
              <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
                <h2 class="details-main-title" style="margin: 0;">Read Before You Book: 16 In-Depth Annapurna Guides</h2>
                <div class="details-bulk-actions">
                  <button type="button" id="guidesToggleAllBtn" class="guides-bulk-toggle-btn">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    <span>Expand All</span>
                  </button>
                </div>
              </div>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 10px;"></div>
            </div>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.8; margin-bottom: 24px;">
              Prepare thoroughly for your high-altitude journey into the Annapurna Sanctuary. We have documented every operational, physiological, and logistical nuance—from teahouse standards and altitude safety to 4-week physical training, Gurung etiquette, and emergency helicopter rescue protocols.
            </p>

            <!-- Guide Controls: Category Tabs & Real-Time Filter -->
            <div class="guide-controls-wrapper">
              <!-- Category Filter Tabs (SVG icons only, NO EMOJIS) -->
              <div class="guide-category-pills" id="guideCategoryPills" role="tablist">
                <button type="button" class="guide-pill-btn active" data-filter="all" role="tab" aria-selected="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  <span>All Guides</span>
                  <span class="guide-pill-count">16</span>
                </button>
                <button type="button" class="guide-pill-btn" data-filter="altitude" role="tab" aria-selected="false">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  <span>Altitude & Safety</span>
                  <span class="guide-pill-count">4</span>
                </button>
                <button type="button" class="guide-pill-btn" data-filter="accommodation" role="tab" aria-selected="false">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  <span>Lodges & Dining</span>
                  <span class="guide-pill-count">3</span>
                </button>
                <button type="button" class="guide-pill-btn" data-filter="fitness" role="tab" aria-selected="false">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>
                  <span>Fitness & Training</span>
                  <span class="guide-pill-count">2</span>
                </button>
                <button type="button" class="guide-pill-btn" data-filter="weather" role="tab" aria-selected="false">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                  <span>Weather & Seasons</span>
                  <span class="guide-pill-count">2</span>
                </button>
                <button type="button" class="guide-pill-btn" data-filter="logistics" role="tab" aria-selected="false">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  <span>Logistics & Culture</span>
                  <span class="guide-pill-count">5</span>
                </button>
              </div>

              <!-- Real-Time Search Bar -->
              <div class="guide-search-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="guide-search-icon" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="text" id="guideSearchInput" class="guide-search-input" placeholder="Search guides (e.g. altitude, training, food, hot springs, packing, showers)..." aria-label="Search guides">
                <button type="button" id="guideSearchClearBtn" class="guide-search-clear" aria-label="Clear search" style="display: none;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
            </div>

            <!-- Reading Progress Tracker -->
            <div class="details-progress-wrapper" style="margin-bottom: 24px;">
              <div class="details-progress-badge">
                <div class="details-progress-ring-box">
                  <svg width="44" height="44" aria-hidden="true">
                    <circle class="details-progress-ring-bg" r="18" cx="22" cy="22"></circle>
                    <circle class="details-progress-ring-bar" r="18" cx="22" cy="22"></circle>
                  </svg>
                </div>
                <div class="details-progress-text-box">
                  <span class="details-progress-count">0/16 read</span>
                  <span class="details-progress-status">Essential reading for a safe, comfortable journey</span>
                </div>
              </div>
            </div>

            <!-- Accordion List (16 Comprehensive Guides) -->
            <div class="detail-accordion-list">

              <!-- Guide 1 -->
              <div class="detail-accordion-card" data-category="altitude" data-detail-id="guide-altitude-safety">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                    </div>
                    <div>
                      <h3 class="detail-accordion-title">1. Acclimatization & Altitude Safety: Staged Ascent to ABC (4,130m)</h3>
                      <div class="detail-accordion-subtitle">Physiological adaptation, symptom warning signs & staged overnights</div>
                    </div>
                  </div>
                  <div class="detail-accordion-header-right">
                    <span class="detail-read-pill">Read Guide</span>
                    <span class="detail-chevron">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <p>
                    Reaching Annapurna Base Camp (<span data-altitude-m="4130">4,130 m / 13,549 ft</span>) involves genuine high-altitude exposure. At this elevation, atmospheric pressure drops and effective oxygen availability per breath is reduced by approximately 40% compared to sea level. Even on a luxury trek with premium services, altitude response is physiological and cannot be eliminated by comfort amenities.
                  </p>
                  <p>
                    Our 15-day itinerary mitigates Acute Mountain Sickness (AMS) through deliberate, staged sleeping elevations. Rather than rushing from Bamboo directly to MBC or ABC in a grueling 2-day push, we divide the ascent into measured 2-to-3 hour stages: Bamboo (<span data-altitude-m="2300">2,300m</span>), Dovan (<span data-altitude-m="2600">2,600m</span>), Himalaya (<span data-altitude-m="2870">2,870m</span>), Deurali (<span data-altitude-m="3200">3,200m</span>), MBC (<span data-altitude-m="3700">3,700m</span>), and ABC (<span data-altitude-m="4130">4,130m</span>).
                  </p>
                  <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-neutral-700);">
                    <li><strong>Early Warning Signs:</strong> Mild frontal headache, unusual lethargy, loss of appetite, mild nausea, and disturbed sleep. These must be reported immediately to your guide.</li>
                    <li><strong>Safety Golden Rule:</strong> Never ascend with symptoms of altitude sickness. If symptoms worsen despite rest and hydration, immediate descent to Deurali or Dovan is mandatory.</li>
                    <li><strong>Pulse Oximeter Protocol:</strong> Your guide carries a medical-grade fingertip oximeter to record resting pulse and SpO2 blood oxygen saturation every morning and evening.</li>
                  </ul>
                  <div class="sherpa-tip-box" style="margin-top: 16px; background: #f0fdf4; border-left: 4px solid var(--color-emerald-green); padding: 14px 18px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #065f46; margin-bottom: 4px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <span>Sherpa Altitude Advice</span>
                    </div>
                    <p style="margin: 0; font-size: 0.92rem; color: #166534; line-height: 1.6;">
                      Drink 3 to 4 liters of purified water daily, avoid alcohol and sleeping pills above Bamboo, and maintain a conversational "bistari" (slow) walking rhythm. The mountain rewards patience over speed.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Guide 2 -->
              <div class="detail-accordion-card" data-category="accommodation" data-detail-id="guide-luxury-lodges">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    </div>
                    <div>
                      <h3 class="detail-accordion-title">2. Luxury City Hotels vs. Mountain Lodges & Sanctuary Teahouses</h3>
                      <div class="detail-accordion-subtitle">Realistic expectations: boutique comfort down low, authentic teahouse shelter up high</div>
                    </div>
                  </div>
                  <div class="detail-accordion-header-right">
                    <span class="detail-read-pill">Read Guide</span>
                    <span class="detail-chevron">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <p>
                    Understanding the transition of accommodation along the Annapurna route is key to setting clear, realistic expectations. Our luxury package coordinates three distinct lodging tiers across the 15-day journey:
                  </p>
                  <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-neutral-700);">
                    <li><strong>Kathmandu & Pokhara (5-Star / Boutique):</strong> Luxury hotel properties featuring air-conditioned suites, en-suite western bathrooms with bathtubs, high-speed Wi-Fi, swimming pools, spa facilities, and multi-cuisine restaurants.</li>
                    <li><strong>Lower Annapurna Approach (Ghandruk & Chhomrong):</strong> Selected boutique mountain lodges built in traditional Gurung slate style. Rooms feature private en-suite bathrooms, comfortable spring mattresses, hot solar showers, and panoramic mountain-view balconies.</li>
                    <li><strong>Upper Sanctuary Corridor (Bamboo to ABC):</strong> Due to strict ACAP national park environmental regulations, lodge construction is limited to rustic alpine teahouses. Rooms are clean, unheated private twin rooms with foam mattresses and wooden walls. Bathrooms are shared squat/flush facilities. Communal dining rooms are warmed in the evening by a central stove fueled by wood or gas.</li>
                  </ul>
                  <div class="sherpa-tip-box" style="margin-top: 16px; background: #f0fdf4; border-left: 4px solid var(--color-emerald-green); padding: 14px 18px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #065f46; margin-bottom: 4px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <span>Lodge Comfort Tip</span>
                    </div>
                    <p style="margin: 0; font-size: 0.92rem; color: #166534; line-height: 1.6;">
                      We provide a heavy-duty down sleeping bag and request extra lodge blankets upon arrival. Slip a Nalgene bottle filled with boiling water into the foot of your sleeping bag 20 minutes before bedtime for cozy, all-night warmth.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Guide 3 -->
              <div class="detail-accordion-card" data-category="fitness" data-detail-id="guide-training-plan">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>
                    </div>
                    <div>
                      <h3 class="detail-accordion-title">3. 4-Week Physical Training Plan for the Annapurna Sanctuary Trail</h3>
                      <div class="detail-accordion-subtitle">Cardio, leg strength, stair climbing conditioning & endurance building</div>
                    </div>
                  </div>
                  <div class="detail-accordion-header-right">
                    <span class="detail-read-pill">Read Guide</span>
                    <span class="detail-chevron">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <p>
                    You do not need to be an extreme endurance athlete to complete the Annapurna Base Camp Luxury Trek, but having solid leg strength, cardiovascular capacity, and stair-climbing endurance is vital. The Annapurna trail is renowned for thousands of steep, uneven stone steps—particularly between Chhomrong, the river gorge, and Sinuwa.
                  </p>
                  <table style="width: 100%; border-collapse: collapse; margin-top: 14px; margin-bottom: 16px; font-size: 0.92rem;">
                    <thead>
                      <tr style="background: var(--color-neutral-100); text-align: left; border-bottom: 2px solid var(--color-neutral-300);">
                        <th style="padding: 10px 14px;">Period</th>
                        <th style="padding: 10px 14px;">Focus</th>
                        <th style="padding: 10px 14px;">Recommended Training Activities</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                        <td style="padding: 10px 14px; font-weight: 700;">Week 1</td>
                        <td style="padding: 10px 14px;">Base Walking Habit</td>
                        <td style="padding: 10px 14px;">Brisk 45-min walks 3x/week; 1 long 90-min weekend hike on park trails.</td>
                      </tr>
                      <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                        <td style="padding: 10px 14px; font-weight: 700;">Week 2</td>
                        <td style="padding: 10px 14px;">Stair Conditioning</td>
                        <td style="padding: 10px 14px;">Climb 30–50 flights of stairs 2x/week; incorporate bodyweight squats and lunges.</td>
                      </tr>
                      <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                        <td style="padding: 10px 14px; font-weight: 700;">Week 3</td>
                        <td style="padding: 10px 14px;">Loaded Pack Hiking</td>
                        <td style="padding: 10px 14px;">Hike 3–4 hours on hills carrying a 5kg daypack; practice using trekking poles.</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 14px; font-weight: 700;">Week 4</td>
                        <td style="padding: 10px 14px;">Taper & Recovery</td>
                        <td style="padding: 10px 14px;">Light aerobic walks, stretching, hydration, and restful sleep before departure.</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="sherpa-tip-box" style="margin-top: 16px; background: #f0fdf4; border-left: 4px solid var(--color-emerald-green); padding: 14px 18px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #065f46; margin-bottom: 4px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <span>Footwear Conditioning Tip</span>
                    </div>
                    <p style="margin: 0; font-size: 0.92rem; color: #166534; line-height: 1.6;">
                      Do not begin your trek in brand-new hiking boots. Wear them on all training walks to ensure the leather conforms to your feet and prevents painful blisters in Nepal.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Guide 4 -->
              <div class="detail-accordion-card" data-category="weather" data-detail-id="guide-seasons-weather">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                    </div>
                    <div>
                      <h3 class="detail-accordion-title">4. Best Seasons to Trek: Spring Rhododendrons vs. Autumn Clarity</h3>
                      <div class="detail-accordion-subtitle">Seasonal climate analysis, temperature swings & photography conditions</div>
                    </div>
                  </div>
                  <div class="detail-accordion-header-right">
                    <span class="detail-read-pill">Read Guide</span>
                    <span class="detail-chevron">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <p>
                    The Annapurna Conservation Area experiences distinct microclimates across the year. For the Annapurna Base Camp Luxury Trek, two primary trekking windows offer optimal conditions:
                  </p>
                  <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-neutral-700);">
                    <li><strong>Spring (March to May):</strong> Spectacular botanical season. Lower slopes around Ghandruk and Chhomrong bloom with vibrant crimson, pink, and white rhododendron forests. Daytime temperatures in the foothills hover around 18°C to 24°C, dropping to -2°C to 5°C at ABC. Afternoons can see light cloud build-up, but mornings are typically crisp and sunny.</li>
                    <li><strong>Autumn (September to November):</strong> The undisputed peak trekking season. The post-monsoon atmosphere is scrubbed completely clean, offering razor-sharp mountain visibility, crystalline skies, and stable weather. Daytime temperatures range from 15°C to 20°C in the valleys, dropping to -5°C to -10°C at ABC during crisp, starry nights.</li>
                    <li><strong>Winter (December to February):</strong> Trails are remarkably quiet and skies are deep azure, but freezing temperatures (-15°C at ABC) and heavy snow in the upper gorge require cold-weather preparation.</li>
                    <li><strong>Monsoon (June to August):</strong> High rainfall, leeches, muddy staircases, and obscured mountain peaks make this period less suitable for luxury trekking.</li>
                  </ul>
                  <div class="sherpa-tip-box" style="margin-top: 16px; background: #f0fdf4; border-left: 4px solid var(--color-emerald-green); padding: 14px 18px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #065f46; margin-bottom: 4px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <span>Seasonal Timing Tip</span>
                    </div>
                    <p style="margin: 0; font-size: 0.92rem; color: #166534; line-height: 1.6;">
                      Photographers seeking sharp panoramic summit portraits should choose October or November. Nature enthusiasts captivated by wild flora and cascading waterfalls should target April.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Guide 5 -->
              <div class="detail-accordion-card" data-category="logistics" data-detail-id="guide-packing-layering">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                    </div>
                    <div>
                      <h3 class="detail-accordion-title">5. Complete 4-Season Layering & Gear Checklist</h3>
                      <div class="detail-accordion-subtitle">Mastering the 3-layer system for subtropical heat and alpine sub-zero cold</div>
                    </div>
                  </div>
                  <div class="detail-accordion-header-right">
                    <span class="detail-read-pill">Read Guide</span>
                    <span class="detail-chevron">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <p>
                    Because temperatures range from +25°C in Pokhara to -10°C at Base Camp, packing for ABC requires an efficient 3-layer outdoor system:
                  </p>
                  <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-neutral-700);">
                    <li><strong>Base Layer (Moisture Management):</strong> Merino wool or synthetic thermal tops and bottoms. Avoid cotton completely as it retains sweat and causes rapid hypothermia when you stop walking.</li>
                    <li><strong>Mid Layer (Thermal Insulation):</strong> High-loft fleece jacket or breathable synthetic down pullover to trap core body heat during cool morning climbs.</li>
                    <li><strong>Outer Layer (Weather Shell):</strong> Windproof, waterproof GORE-TEX jacket and rain pants to seal against Himalayan winds and sudden afternoon showers.</li>
                    <li><strong>Static Heavy Insulation:</strong> Heavyweight down parka (-15°C rated) worn immediately upon arriving at teahouses when your body stops generating movement heat.</li>
                  </ul>
                  <div class="sherpa-tip-box" style="margin-top: 16px; background: #f0fdf4; border-left: 4px solid var(--color-emerald-green); padding: 14px 18px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #065f46; margin-bottom: 4px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <span>Luggage Division Tip</span>
                    </div>
                    <p style="margin: 0; font-size: 0.92rem; color: #166534; line-height: 1.6;">
                      City clothes, formal footwear, and extra travel baggage can be left in free, locked, secure luggage storage at our partner 5-star hotel in Kathmandu or Pokhara while you are on the trail.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Guide 6 -->
              <div class="detail-accordion-card" data-category="accommodation" data-detail-id="guide-food-dining">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                    </div>
                    <div>
                      <h3 class="detail-accordion-title">6. Mountain Dining: Nutrition, Dal Bhat & Lodge Kitchen Realities</h3>
                      <div class="detail-accordion-subtitle">Full-board meal allowances, vegetarian guidelines & high-altitude digestion</div>
                    </div>
                  </div>
                  <div class="detail-accordion-header-right">
                    <span class="detail-read-pill">Read Guide</span>
                    <span class="detail-chevron">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <p>
                    On our Annapurna Base Camp Luxury Trek, all meals during the 10 trekking days are fully included (breakfast, lunch, and dinner, plus tea or coffee). Food in the Annapurna Sanctuary is wholesome, hearty, and cooked fresh to order by local teahouse chefs.
                  </p>
                  <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-neutral-700);">
                    <li><strong>Dal Bhat Power:</strong> The undisputed staple of Himalayan trekking. Comprises steamed rice, aromatic lentil soup (dal), seasonal vegetable curry, spinach, and fermented pickle. Dal Bhat is delicious, easily digestible at altitude, and comes with unlimited free refills!</li>
                    <li><strong>Diverse Teahouse Menus:</strong> Menus also feature Tibetan fried bread (Gurung bread), vegetable fried noodles (chowmein), momo dumplings, potato rosti with cheese, garlic soup, porridge with honey, and apple pie.</li>
                    <li><strong>Strict Vegetarian Zone in Upper Sanctuary:</strong> Beyond Chhomrong, local religious traditions strictly ban the butchering of animals to honor sacred mountain spirits. Consequently, all meat in upper teahouses must be portered for days without refrigeration. We strongly advise adhering to a pure vegetarian diet from Bamboo to ABC.</li>
                  </ul>
                  <div class="sherpa-tip-box" style="margin-top: 16px; background: #f0fdf4; border-left: 4px solid var(--color-emerald-green); padding: 14px 18px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #065f46; margin-bottom: 4px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <span>High Altitude Diet Tip</span>
                    </div>
                    <p style="margin: 0; font-size: 0.92rem; color: #166534; line-height: 1.6;">
                      Order fresh garlic soup with dinner every evening above 3,000m. Garlic aids peripheral blood circulation, relieves mild altitude headaches, and keeps you warm.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Guide 7 -->
              <div class="detail-accordion-card" data-category="logistics" data-detail-id="guide-flights-transfers">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>
                    </div>
                    <div>
                      <h3 class="detail-accordion-title">7. Kathmandu & Pokhara Logistics: Domestic Flights & Roadhead Transfers</h3>
                      <div class="detail-accordion-subtitle">Bypassing overland road delays with scheduled flights and private 4WD vehicles</div>
                    </div>
                  </div>
                  <div class="detail-accordion-header-right">
                    <span class="detail-read-pill">Read Guide</span>
                    <span class="detail-chevron">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <p>
                    Connecting Kathmandu, Pokhara, and the Annapurna foothills by overland tourist bus involves 7 to 9 hours of bumpy, fatiguing driving each way due to ongoing highway expansions. Our luxury package replaces overland road travel with scheduled domestic flights:
                  </p>
                  <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-neutral-700);">
                    <li><strong>Scenic 25-Minute Flights:</strong> Board reliable ATR-72 turboprop aircraft operated by Nepal's premier carriers (Buddha Air or Yeti Airlines) for the 25-minute flight between Kathmandu and Pokhara. On clear days, sit on the right side flying west to Pokhara for sweeping views of Langtang, Ganesh Himal, Manaslu, and Annapurna.</li>
                    <li><strong>Private Trailhead 4WD Transfer:</strong> In Pokhara, private 4WD Mahindra or Toyota vehicles transfer you directly to the Ghandruk roadhead, saving 3–4 hours of dusty lower-altitude walking.</li>
                    <li><strong>Luggage Allowance:</strong> Domestic airlines enforce a strict 15 kg (33 lbs) total weight allowance per passenger (10 kg check-in + 5 kg hand luggage). Excess baggage fees are nominal, but packing efficiently keeps your porter's load safe.</li>
                  </ul>
                  <div class="sherpa-tip-box" style="margin-top: 16px; background: #f0fdf4; border-left: 4px solid var(--color-emerald-green); padding: 14px 18px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #065f46; margin-bottom: 4px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <span>Flight Buffer Tip</span>
                    </div>
                    <p style="margin: 0; font-size: 0.92rem; color: #166534; line-height: 1.6;">
                      Our Day 14 flexible city buffer day in Kathmandu ensures that even if mountain weather creates short flight delays returning from Pokhara, your international flight home remains 100% protected.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Guide 8 -->
              <div class="detail-accordion-card" data-category="logistics" data-detail-id="guide-culture-gurung">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <div>
                      <h3 class="detail-accordion-title">8. Gurung Heritage & Village Etiquette in Ghandruk and Chhomrong</h3>
                      <div class="detail-accordion-subtitle">Cultural traditions, Gurkha warrior history, prayer wheels & respectful travel</div>
                    </div>
                  </div>
                  <div class="detail-accordion-header-right">
                    <span class="detail-read-pill">Read Guide</span>
                    <span class="detail-chevron">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <p>
                    The southern slopes of the Annapurna range are the historic homeland of the Gurung (Tamu) people, renowned worldwide for their courage as British Gurkha soldiers, their warm hospitality, and their rich animist-Buddhist traditions.
                  </p>
                  <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-neutral-700);">
                    <li><strong>Ghandruk Village:</strong> Built entirely from local grey slate and timber, Ghandruk features labyrinthine alleys, traditional weaving looms, and two fascinating community museums detailing traditional Gurung dress, hunting tools, and military service.</li>
                    <li><strong>Cultural Etiquette:</strong> Always pass Buddhist chortens, mani walls, and prayer flag poles on your left-hand side (clockwise direction). Greet locals with palms pressed together and a warm "Namaste".</li>
                    <li><strong>Photography Respect:</strong> Always ask permission before photographing village elders, children, or household interiors. Respect private courtyards where grain and corn are laid out to dry.</li>
                  </ul>
                  <div class="sherpa-tip-box" style="margin-top: 16px; background: #f0fdf4; border-left: 4px solid var(--color-emerald-green); padding: 14px 18px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #065f46; margin-bottom: 4px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <span>Cultural Etiquette Tip</span>
                    </div>
                    <p style="margin: 0; font-size: 0.92rem; color: #166534; line-height: 1.6;">
                      Dress respectfully when walking through settlements. Keep shoulders and knees covered, and remove hiking shoes before entering private home sanctuaries or monastery prayer halls.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Guide 9 -->
              <div class="detail-accordion-card" data-category="logistics" data-detail-id="guide-electricity-wifi">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                    </div>
                    <div>
                      <h3 class="detail-accordion-title">9. Electricity, Wi-Fi & Device Charging in the Modi Khola Gorge</h3>
                      <div class="detail-accordion-subtitle">Cellular coverage (NTC/Ncell), solar charging fees & power bank management</div>
                    </div>
                  </div>
                  <div class="detail-accordion-header-right">
                    <span class="detail-read-pill">Read Guide</span>
                    <span class="detail-chevron">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <p>
                    Staying connected while deep in the Modi Khola gorge requires an understanding of remote mountain utilities:
                  </p>
                  <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-neutral-700);">
                    <li><strong>Electricity & Charging:</strong> In Kathmandu, Pokhara, and Ghandruk, standard AC electrical sockets are available in your private room. Higher up (Bamboo to ABC), teahouses rely on micro-hydro or solar power. Charging phones or power banks in the communal dining hall costs a nominal fee (approx. NPR 200–500 per device).</li>
                    <li><strong>Cellular Reception:</strong> Both Nepal Telecom (NTC) and Ncell provide 4G data in Ghandruk and Chhomrong. Inside the deep, narrow Modi Khola gorge between Bamboo and Deurali, cellular signals are frequently blocked by sheer rock walls. Signal intermittently returns at MBC and ABC.</li>
                    <li><strong>Teahouse Wi-Fi:</strong> Many lodges offer satellite Wi-Fi scratch cards (Everest Link / AirSiddhi) costing NPR 500–700 for 24 hours of data. Speeds are sufficient for WhatsApp text messaging, though streaming video is rarely supported.</li>
                  </ul>
                  <div class="sherpa-tip-box" style="margin-top: 16px; background: #f0fdf4; border-left: 4px solid var(--color-emerald-green); padding: 14px 18px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #065f46; margin-bottom: 4px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <span>Battery Longevity Tip</span>
                    </div>
                    <p style="margin: 0; font-size: 0.92rem; color: #166534; line-height: 1.6;">
                      Cold mountain air rapidly drains lithium-ion batteries. Always store your phone, camera batteries, and power banks inside an insulated wool sock inside your sleeping bag at night.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Guide 10 -->
              <div class="detail-accordion-card" data-category="logistics" data-detail-id="guide-permits-acap">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="13" y2="16"/></svg>
                    </div>
                    <div>
                      <h3 class="detail-accordion-title">10. Permits & Conservation: ACAP and TIMS Regulatory Guide</h3>
                      <div class="detail-accordion-subtitle">Official entry permits, checkpoint inspections & park conservation rules</div>
                    </div>
                  </div>
                  <div class="detail-accordion-header-right">
                    <span class="detail-read-pill">Read Guide</span>
                    <span class="detail-chevron">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <p>
                    Entering the Annapurna Conservation Area (Nepal's largest protected biodiversity zone covering 7,629 sq km) requires two mandatory legal permits:
                  </p>
                  <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-neutral-700);">
                    <li><strong>ACAP Entry Permit:</strong> Issued by the National Trust for Nature Conservation (NTNC). Permit revenues directly fund trail maintenance, suspension bridge upkeep, solar lighting, and wildlife conservation across the region.</li>
                    <li><strong>TIMS Card (Trekkers' Information Management System):</strong> A national safety database card that logs trekker entry and exit, assisting search-and-rescue teams in the event of severe weather.</li>
                    <li><strong>Checkpoints:</strong> Official police and ACAP checkpoints operate at Birethanti, Ghandruk, and Chhomrong. Your Namaste Hiking Trek guide holds and manages all permits throughout the trek.</li>
                  </ul>
                  <div class="sherpa-tip-box" style="margin-top: 16px; background: #f0fdf4; border-left: 4px solid var(--color-emerald-green); padding: 14px 18px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #065f46; margin-bottom: 4px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <span>All Permits Included</span>
                    </div>
                    <p style="margin: 0; font-size: 0.92rem; color: #166534; line-height: 1.6;">
                      All permit fees, government taxes, and registration logistics are 100% included in your luxury package. Simply provide two passport photos and a copy of your passport prior to departure.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Guide 11 -->
              <div class="detail-accordion-card" data-category="logistics" data-detail-id="guide-jhinu-hot-springs">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                    </div>
                    <div>
                      <h3 class="detail-accordion-title">11. The Jhinu Danda Hot Springs & Lower Sanctuary Exit Route</h3>
                      <div class="detail-accordion-subtitle">Natural riverside thermal pools, suspension bridge crossing & 4WD vehicle pickup</div>
                    </div>
                  </div>
                  <div class="detail-accordion-header-right">
                    <span class="detail-read-pill">Read Guide</span>
                    <span class="detail-chevron">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <p>
                    Day 12 marks the transition out of the high mountain sanctuary through the settlement of Jhinu Danda:
                  </p>
                  <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-neutral-700);">
                    <li><strong>Natural Thermal Springs:</strong> Located a 20-minute descent below Jhinu village on the banks of the Modi Khola, three stone-lined natural pools are fed by geothermal springs (38°C to 42°C). Soaking in the mineral-rich waters is the ultimate reward for tired hiking legs!</li>
                    <li><strong>Jhinu Suspension Bridge:</strong> Crossing from Jhinu to the southern roadhead takes you across one of Nepal's most thrilling footbridges—suspended 287 meters long and over 100 meters above the rushing canyon.</li>
                    <li><strong>Seamless 4WD Exit:</strong> Rather than trekking on dusty dirt roads toward Nayapul, our private 4WD vehicle meets you right at the bridge roadhead for an effortless transfer back to your luxury hotel in Pokhara.</li>
                  </ul>
                  <div class="sherpa-tip-box" style="margin-top: 16px; background: #f0fdf4; border-left: 4px solid var(--color-emerald-green); padding: 14px 18px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #065f46; margin-bottom: 4px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <span>Hot Springs Pack Tip</span>
                    </div>
                    <p style="margin: 0; font-size: 0.92rem; color: #166534; line-height: 1.6;">
                      Pack a light microfiber towel, swimwear, and flip-flops at the very top of your daypack on Day 12 so you don't have to unpack your main duffel bag at Jhinu Danda.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Guide 12 -->
              <div class="detail-accordion-card" data-category="altitude" data-detail-id="guide-insurance-evacuation">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div>
                      <h3 class="detail-accordion-title">12. Travel Insurance & Emergency Helicopter Evacuation Protocols</h3>
                      <div class="detail-accordion-subtitle">Mandatory coverage requirements, SOS dispatch & 24/7 Kathmandu medical coordination</div>
                    </div>
                  </div>
                  <div class="detail-accordion-header-right">
                    <span class="detail-read-pill">Read Guide</span>
                    <span class="detail-chevron">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <p>
                    Comprehensive travel insurance covering high-altitude trekking and emergency helicopter rescue is a mandatory requirement for all travelers embarking on the Annapurna Base Camp Luxury Trek.
                  </p>
                  <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-neutral-700);">
                    <li><strong>Policy Altitude Requirement:</strong> Your policy must explicitly state coverage for trekking up to at least 4,500 meters (15,000 feet) without altitude exclusions. Recommended global providers include World Nomads, Ripcord Rescue, Global Rescue, and Allianz Global Assistance.</li>
                    <li><strong>Emergency Helicopter Protocol:</strong> In the rare event of severe altitude sickness (HAPE/HACE) or serious injury, your guide communicates via satellite phone with our Kathmandu operations desk to coordinate an emergency helicopter dispatch. Evacuations fly directly to specialized international hospitals in Pokhara or Kathmandu.</li>
                    <li><strong>Helicopter Weather Limits:</strong> Mountain helicopters operate strictly under Visual Flight Rules (VFR) and cannot fly during dense fog or torrential downpours. In poor weather, our team coordinates immediate ground litter descent to lower elevations.</li>
                  </ul>
                  <div class="sherpa-tip-box" style="margin-top: 16px; background: #f0fdf4; border-left: 4px solid var(--color-emerald-green); padding: 14px 18px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #065f46; margin-bottom: 4px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <span>Insurance Verification Tip</span>
                    </div>
                    <p style="margin: 0; font-size: 0.92rem; color: #166534; line-height: 1.6;">
                      Email a digital copy of your insurance certificate and 24-hour emergency assistance phone number to our operations team during booking so we can initiate instant hospital authorizations if ever required.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Guide 13 -->
              <div class="detail-accordion-card" data-category="logistics" data-detail-id="guide-wildlife-nature">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    </div>
                    <div>
                      <h3 class="detail-accordion-title">13. Wildlife & Biodiversity in the Annapurna Conservation Area</h3>
                      <div class="detail-accordion-subtitle">Himalayan monal, langur monkeys, blue sheep & pristine rhododendron ecosystems</div>
                    </div>
                  </div>
                  <div class="detail-accordion-header-right">
                    <span class="detail-read-pill">Read Guide</span>
                    <span class="detail-chevron">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <p>
                    The Annapurna Conservation Area (ACA) is one of Asia’s most ecologically diverse regions, protecting over 100 mammal species, 480 bird species, and 1,200 flowering plants across subtropical to alpine ecological zones:
                  </p>
                  <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-neutral-700);">
                    <li><strong>Mammals:</strong> White-bellied musk deer, Himalayan thar, elusive blue sheep (bharal), barking deer, red pandas, and grey langur monkeys swinging through oak canopies in Bamboo and Dovan.</li>
                    <li><strong>Birdlife:</strong> Look for Nepal’s iridescent national bird, the Himalayan Monal (Danphe), soaring golden eagles, lammergeier bearded vultures, and colorful laughingthrushes in the forest understory.</li>
                    <li><strong>Flora:</strong> In spring, the forests are ablaze with blooming giant tree rhododendrons (Lali Gurans), wild orchids, magnolia, and dense bamboo groves.</li>
                  </ul>
                  <div class="sherpa-tip-box" style="margin-top: 16px; background: #f0fdf4; border-left: 4px solid var(--color-emerald-green); padding: 14px 18px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #065f46; margin-bottom: 4px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <span>Wildlife Viewing Tip</span>
                    </div>
                    <p style="margin: 0; font-size: 0.92rem; color: #166534; line-height: 1.6;">
                      Bring a compact pair of 8x32 or 10x42 binoculars. The quiet early morning hours around Dovan and Himalaya offer the highest chance of spotting musk deer and langur monkeys.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Guide 14 -->
              <div class="detail-accordion-card" data-category="weather" data-detail-id="guide-photography-tips">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    </div>
                    <div>
                      <h3 class="detail-accordion-title">14. Himalayan Photography Guide: Capturing Machhapuchhre & ABC</h3>
                      <div class="detail-accordion-subtitle">Golden hour angles, alpenglow exposure, lens selection & cold battery care</div>
                    </div>
                  </div>
                  <div class="detail-accordion-header-right">
                    <span class="detail-read-pill">Read Guide</span>
                    <span class="detail-chevron">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <p>
                    The Annapurna Sanctuary provides an endless canvas of dramatic light, soaring verticality, and cultural charm:
                  </p>
                  <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-neutral-700);">
                    <li><strong>Key Vantage Points:</strong> Ghandruk terrace at sunrise for Annapurna South; Chhomrong overlooking Fishtail Mountain; and the moraine ridge above ABC for a breathtaking 360-degree panorama.</li>
                    <li><strong>Recommended Lenses:</strong> An ultra-wide zoom (16–35mm full frame) is essential to capture the massive amphitheater walls at Base Camp. A versatile 24–70mm handles village portraits, while a 70–200mm isolates distant icefall seracs and golden mountain ridges.</li>
                    <li><strong>Exposure Strategy:</strong> High contrast between bright snow and shadowed canyons can deceive camera meters. Use exposure compensation (+0.7 to +1.0 EV) on snowy scenes to keep white peaks from appearing dull grey.</li>
                  </ul>
                  <div class="sherpa-tip-box" style="margin-top: 16px; background: #f0fdf4; border-left: 4px solid var(--color-emerald-green); padding: 14px 18px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #065f46; margin-bottom: 4px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <span>Astrophotography Tip</span>
                    </div>
                    <p style="margin: 0; font-size: 0.92rem; color: #166534; line-height: 1.6;">
                      The night sky at Annapurna Base Camp has near-zero light pollution. Pack a lightweight carbon-fiber travel tripod to capture the Milky Way arching directly over the summit of Annapurna I.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Guide 15 -->
              <div class="detail-accordion-card" data-category="altitude" data-detail-id="guide-water-purification">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                    </div>
                    <div>
                      <h3 class="detail-accordion-title">15. Safe Drinking Water & Hydration Protocols on the Trail</h3>
                      <div class="detail-accordion-subtitle">Eliminating single-use plastics, water filtration, purification tablets & daily volume</div>
                    </div>
                  </div>
                  <div class="detail-accordion-header-right">
                    <span class="detail-read-pill">Read Guide</span>
                    <span class="detail-chevron">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <p>
                    Single-use disposable plastic water bottles are strictly prohibited in the Annapurna Sanctuary to protect the fragile alpine environment from plastic waste.
                  </p>
                  <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-neutral-700);">
                    <li><strong>Reusable Bottles:</strong> Carry two 1-liter wide-mouth Nalgene bottles. Boiling water can be purchased from lodge kitchens each evening to refill your bottles, keeping you warm overnight and providing safe drinking water the following morning.</li>
                    <li><strong>Purification Methods:</strong> Chlorine dioxide tablets (Aquatabs / Katadyn Micropur) or UV sterilizers (SteriPEN) are highly effective against bacteria, viruses, and Giardia cysts in tap water. Allow the recommended 30-minute contact time for purification tablets.</li>
                    <li><strong>Hydration Targets:</strong> Aim to drink at least 3.5 to 4 liters of fluids per day. Dehydration thickens your blood and drastically accelerates altitude fatigue and headache.</li>
                  </ul>
                  <div class="sherpa-tip-box" style="margin-top: 16px; background: #f0fdf4; border-left: 4px solid var(--color-emerald-green); padding: 14px 18px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #065f46; margin-bottom: 4px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <span>Electrolyte Hydration Tip</span>
                    </div>
                    <p style="margin: 0; font-size: 0.92rem; color: #166534; line-height: 1.6;">
                      Add a powdered electrolyte tablet (Nuun / Hydralyte) to one of your morning bottles to replenish sodium, potassium, and magnesium lost through heavy perspiration on steep stone stair ascents.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Guide 16 -->
              <div class="detail-accordion-card" data-category="logistics" data-detail-id="guide-private-customization">
                <div class="detail-accordion-header">
                  <div class="detail-accordion-header-left">
                    <div class="detail-icon-container">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </div>
                    <div>
                      <h3 class="detail-accordion-title">16. Solo, Couples & Private Departures: Customizing Your Luxury Journey</h3>
                      <div class="detail-accordion-subtitle">Bespoke scheduling, extra days in Pokhara, private guides & tailored side-trips</div>
                    </div>
                  </div>
                  <div class="detail-accordion-header-right">
                    <span class="detail-read-pill">Read Guide</span>
                    <span class="detail-chevron">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                  </div>
                </div>
                <div class="detail-accordion-content">
                  <p>
                    While we run small, highly reviewed group departures, many travelers prefer the bespoke flexibility of an exclusive private departure. Private trips allow total control over walking speed, rest breaks, and lodging arrangements.
                  </p>
                  <ul style="padding-left: 20px; line-height: 1.8; color: var(--color-neutral-700);">
                    <li><strong>Flexible Pacing for Couples:</strong> Private departures allow couples to walk at their own natural pace, taking extra photo stops along the river gorge or resting whenever needed without feeling pressured by a larger group.</li>
                    <li><strong>Optional Itinerary Extensions:</strong> Add extra rest days beside Phewa Lake in Pokhara, incorporate a scenic helicopter flight out of Annapurna Base Camp directly back to Pokhara, or combine your trek with a Chitwan National Park luxury jungle safari.</li>
                    <li><strong>Dedicated Guide & Porter Team:</strong> You have your own dedicated licensed Sherpa guide and personal porter assigned exclusively to your party from start to finish.</li>
                  </ul>
                  <div class="sherpa-tip-box" style="margin-top: 16px; background: #f0fdf4; border-left: 4px solid var(--color-emerald-green); padding: 14px 18px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; color: #065f46; margin-bottom: 4px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                      <span>Customization Tip</span>
                    </div>
                    <p style="margin: 0; font-size: 0.92rem; color: #166534; line-height: 1.6;">
                      Contact our mountain planning experts via WhatsApp or the booking form to customize your hotel tier, add extra nights, or design a private honeymoon departure.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </section>
`;
  }
};
