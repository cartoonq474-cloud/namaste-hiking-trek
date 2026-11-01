const fs = require('fs');

function generateAltitudeProfileHtml() {
  return `
          <!-- Section 7: Altitude Profile -->
          <section id="section-altitude-profile" class="trek-detail-section">
            <h2 class="trek-section-title">Annapurna Circuit Elevation & Route Profile</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px; margin-bottom: 20px;"></div>
            
            <p style="font-size: 1.05rem; color: var(--color-neutral-700); line-height: 1.7; margin-bottom: 24px;">
              The Annapurna Circuit does not follow a single continuous ascent and descent. It is an extraordinary <strong>altitude traverse through six distinct geographical stages</strong>: rising up the Marsyangdi River valley, crossing through the high-altitude Tibetan-style plateau of Manang, surmounting Thorong La Pass at 5,416 m (17,769 ft), dropping steeply into the trans-Himalayan desert of Muktinath and Mustang, descending deep into the subtropical Kali Gandaki gorge at Tatopani (1,190 m), and ascending a second time through blooming rhododendron forests to Ghorepani and Poon Hill (3,210 m).
            </p>

            <!-- Dynamic Altitude Visualizer Widget -->
            <div class="altitude-visualizer-container" data-trek-key="annapurna_circuit" style="margin-bottom: 30px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
              <h3 style="font-size: 1.15rem; color: var(--color-primary-navy); margin-bottom: 16px; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22L12 2l8 20H4z"/><path d="M9 22l3-7 3 7H9z" fill="#008060"/></svg>
                Interactive Route Altitude Visualizer
              </h3>
              <div class="altitude-chart-wrapper" style="min-height: 280px; position: relative;">
                <!-- Chart canvas dynamically populated by js/altitude-visualizer.js -->
                <canvas id="altitudeChart" style="width: 100%; height: 280px;"></canvas>
              </div>
            </div>

            <!-- Complete 6-Stage Altitude Progression Table -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
              <h3 style="font-size: 1.25rem; color: var(--color-primary-navy); margin-bottom: 16px; font-weight: 700;">Annapurna Circuit Elevation Milestones & Sleeping Profile</h3>
              <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
                  <thead>
                    <tr style="background: #f1f5f9; color: var(--color-primary-navy); text-align: left; border-bottom: 2px solid #cbd5e1;">
                      <th style="padding: 12px; font-weight: 700;">Route Milestone</th>
                      <th style="padding: 12px; font-weight: 700;">Approx. Elevation</th>
                      <th style="padding: 12px; font-weight: 700;">Role on Itinerary</th>
                      <th style="padding: 12px; font-weight: 700;">Daily Sleeping Gain</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 600; color: var(--color-primary-navy);">Kathmandu</td>
                      <td style="padding: 10px 12px;">1,300 m / 4,265 ft</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-600);">Arrival, briefing & logistics hub</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-500);">Base entry</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                      <td style="padding: 10px 12px; font-weight: 600; color: var(--color-primary-navy);">Chame</td>
                      <td style="padding: 10px 12px;">2,710 m / 8,891 ft</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-600);">Overland drive finish & walking start</td>
                      <td style="padding: 10px 12px; color: #008060; font-weight: 600;">Day 2 drive (+1,410 m)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 600; color: var(--color-primary-navy);">Lower Pisang</td>
                      <td style="padding: 10px 12px;">3,185 m / 10,450 ft</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-600);">First high alpine settlement</td>
                      <td style="padding: 10px 12px; color: #008060; font-weight: 600;">+475 m</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                      <td style="padding: 10px 12px; font-weight: 600; color: var(--color-primary-navy);">Manang (High Route)</td>
                      <td style="padding: 10px 12px;">3,500 m / 11,482 ft</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-600);">Strategic acclimatization hub</td>
                      <td style="padding: 10px 12px; color: #008060; font-weight: 600;">+315 m (via 3,670m Ghyaru)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 600; color: var(--color-primary-navy);">Manang Rest Day</td>
                      <td style="padding: 10px 12px;">3,500 m (Day hike ~3,945 m)</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-600);">Active acclimatization hike</td>
                      <td style="padding: 10px 12px; color: #2563eb; font-weight: 600;">0 m (Same sleep altitude)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                      <td style="padding: 10px 12px; font-weight: 600; color: var(--color-primary-navy);">Yak Kharka</td>
                      <td style="padding: 10px 12px;">4,018 m / 13,182 ft</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-600);">First sleep above 4,000m</td>
                      <td style="padding: 10px 12px; color: #008060; font-weight: 600;">+518 m</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 600; color: var(--color-primary-navy);">Thorong Phedi / High Camp</td>
                      <td style="padding: 10px 12px;">4,450 m / 4,925 m</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-600);">Pre-pass staging base</td>
                      <td style="padding: 10px 12px; color: #008060; font-weight: 600;">+432 m (Phedi) / +907 m (Camp)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #fef2f2;">
                      <td style="padding: 10px 12px; font-weight: 700; color: #dc2626;">Thorong La Pass</td>
                      <td style="padding: 10px 12px; font-weight: 700; color: #dc2626;">5,416 m / 17,769 ft</td>
                      <td style="padding: 10px 12px; color: #b91c1c; font-weight: 600;">Highest point of circuit (Daytime pass)</td>
                      <td style="padding: 10px 12px; color: #dc2626; font-weight: 700;">+966 m daytime climb</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 600; color: var(--color-primary-navy);">Muktinath</td>
                      <td style="padding: 10px 12px;">3,800 m / 12,467 ft</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-600);">Pilgrimage shrine & post-pass sleep</td>
                      <td style="padding: 10px 12px; color: #16a34a; font-weight: 600;">-1,616 m descent</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                      <td style="padding: 10px 12px; font-weight: 600; color: var(--color-primary-navy);">Jomsom (via Kagbeni)</td>
                      <td style="padding: 10px 12px;">2,720 m / 8,924 ft</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-600);">Kali Gandaki transport hub</td>
                      <td style="padding: 10px 12px; color: #16a34a; font-weight: 600;">-1,080 m descent</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 600; color: var(--color-primary-navy);">Tatopani</td>
                      <td style="padding: 10px 12px;">1,190 m / 3,904 ft</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-600);">Subtropical natural hot springs</td>
                      <td style="padding: 10px 12px; color: #16a34a; font-weight: 600;">-1,530 m descent</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                      <td style="padding: 10px 12px; font-weight: 600; color: var(--color-primary-navy);">Ghorepani</td>
                      <td style="padding: 10px 12px;">2,860 m / 9,383 ft</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-600);">Second mountain rise in cloud forest</td>
                      <td style="padding: 10px 12px; color: #008060; font-weight: 600;">+1,670 m climb</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 12px; font-weight: 600; color: var(--color-primary-navy);">Poon Hill Viewpoint</td>
                      <td style="padding: 10px 12px;">3,210 m / 10,531 ft</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-600);">Panoramic sunrise over Dhaulagiri</td>
                      <td style="padding: 10px 12px; color: #008060; font-weight: 600;">+350 m dawn climb</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 12px; font-weight: 600; color: var(--color-primary-navy);">Pokhara</td>
                      <td style="padding: 10px 12px;">900 m / 2,953 ft</td>
                      <td style="padding: 10px 12px; color: var(--color-neutral-600);">Lakeside relaxation & trek conclusion</td>
                      <td style="padding: 10px 12px; color: #16a34a; font-weight: 600;">-2,310 m (Nayapul drive)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Sleeping Altitude vs Daytime Altitude Callout -->
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; font-size: 0.98rem; line-height: 1.7; color: var(--color-neutral-700);">
              <h4 style="font-size: 1.15rem; color: var(--color-primary-navy); margin-bottom: 10px; font-weight: 700;">Sleeping Altitude Matters More than Peak Altitude</h4>
              <p style="margin-bottom: 0;">
                The human body acclimatizes primarily to the altitude at which it rests and sleeps. Reaching 5,416 m at Thorong La Pass is a daytime crossing lasting only 30 to 45 minutes; you immediately drop 1,600 vertical meters to sleep at Muktinath (3,800 m). By maintaining conservative overnight gains—sleeping at Pisang (+475m), Manang (+315m), Yak Kharka (+518m), and Thorong Phedi (+432m)—our itinerary adheres to the world-standard <strong>CDC Yellow Book and Nepal Tourism Board guidelines</strong>, preventing acute altitude distress while ensuring high summit success.
              </p>
            </div>
          </section>
`;
}

function generateDatesHtml() {
  return `
          <!-- Section 4: Dates & Availability -->
          <section id="section-dates" class="trek-detail-section">
            <h2 class="trek-section-title">Annapurna Circuit Trek: Departure Dates & Availability</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px; margin-bottom: 20px;"></div>
            
            <p style="font-size: 1.05rem; color: var(--color-neutral-700); line-height: 1.7; margin-bottom: 24px;">
              Join one of our guaranteed small-group departures (maximum 10 to 12 trekkers per group) or choose custom private dates tailored to your schedule. All departures include full ground transport, licensed mountain guides, porter service, permits, and teahouse accommodation.
            </p>

            <!-- Dual-Mode Tab Switcher -->
            <div class="dates-mode-tabs" style="display: flex; gap: 12px; margin-bottom: 24px;">
              <button class="dates-tab-btn active" data-date-tab="group" style="padding: 10px 22px; border-radius: 8px; border: 1px solid #008060; background: #008060; color: #ffffff; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.2s ease;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Group Joining Dates (2026/2027)
              </button>
              <button class="dates-tab-btn" data-date-tab="private" style="padding: 10px 22px; border-radius: 8px; border: 1px solid #cbd5e1; background: #ffffff; color: var(--color-primary-navy); font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.2s ease;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Private Tailor-Made Departure
              </button>
            </div>

            <!-- Group Dates Table Container -->
            <div id="group-dates-container" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 24px;">
              <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
                  <thead>
                    <tr style="background: #f8fafc; color: var(--color-primary-navy); text-align: left; border-bottom: 2px solid #cbd5e1;">
                      <th style="padding: 12px; font-weight: 700;">Start Date</th>
                      <th style="padding: 12px; font-weight: 700;">End Date</th>
                      <th style="padding: 12px; font-weight: 700;">Season / Weather</th>
                      <th style="padding: 12px; font-weight: 700;">Price</th>
                      <th style="padding: 12px; font-weight: 700;">Status</th>
                      <th style="padding: 12px; font-weight: 700; text-align: right;">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- Spring Departures -->
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 12px; font-weight: 600; color: var(--color-primary-navy);">15 Mar 2026</td>
                      <td style="padding: 12px;">28 Mar 2026</td>
                      <td style="padding: 12px; color: var(--color-neutral-600);">Spring Rhododendron Bloom</td>
                      <td style="padding: 12px; font-weight: 700; color: #008060;">$1,199</td>
                      <td style="padding: 12px;"><span style="background: #dcfce7; color: #15803d; font-size: 0.8rem; font-weight: 700; padding: 3px 8px; border-radius: 100px;">Guaranteed</span></td>
                      <td style="padding: 12px; text-align: right;"><button class="btn btn-sm btn-primary open-inquiry-btn" style="padding: 6px 14px; font-size: 0.85rem;">Book Now</button></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                      <td style="padding: 12px; font-weight: 600; color: var(--color-primary-navy);">05 Apr 2026</td>
                      <td style="padding: 12px;">18 Apr 2026</td>
                      <td style="padding: 12px; color: var(--color-neutral-600);">Spring Peak Climbing Season</td>
                      <td style="padding: 12px; font-weight: 700; color: #008060;">$1,199</td>
                      <td style="padding: 12px;"><span style="background: #dcfce7; color: #15803d; font-size: 0.8rem; font-weight: 700; padding: 3px 8px; border-radius: 100px;">Guaranteed</span></td>
                      <td style="padding: 12px; text-align: right;"><button class="btn btn-sm btn-primary open-inquiry-btn" style="padding: 6px 14px; font-size: 0.85rem;">Book Now</button></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 12px; font-weight: 600; color: var(--color-primary-navy);">25 Apr 2026</td>
                      <td style="padding: 12px;">08 May 2026</td>
                      <td style="padding: 12px; color: var(--color-neutral-600);">Late Spring Clear Skies</td>
                      <td style="padding: 12px; font-weight: 700; color: #008060;">$1,199</td>
                      <td style="padding: 12px;"><span style="background: #e0f2fe; color: #0369a1; font-size: 0.8rem; font-weight: 700; padding: 3px 8px; border-radius: 100px;">Available</span></td>
                      <td style="padding: 12px; text-align: right;"><button class="btn btn-sm btn-primary open-inquiry-btn" style="padding: 6px 14px; font-size: 0.85rem;">Book Now</button></td>
                    </tr>
                    <!-- Autumn Departures -->
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                      <td style="padding: 12px; font-weight: 600; color: var(--color-primary-navy);">18 Sep 2026</td>
                      <td style="padding: 12px;">01 Oct 2026</td>
                      <td style="padding: 12px; color: var(--color-neutral-600);">Early Autumn Crystal Clarity</td>
                      <td style="padding: 12px; font-weight: 700; color: #008060;">$1,199</td>
                      <td style="padding: 12px;"><span style="background: #dcfce7; color: #15803d; font-size: 0.8rem; font-weight: 700; padding: 3px 8px; border-radius: 100px;">Guaranteed</span></td>
                      <td style="padding: 12px; text-align: right;"><button class="btn btn-sm btn-primary open-inquiry-btn" style="padding: 6px 14px; font-size: 0.85rem;">Book Now</button></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 12px; font-weight: 600; color: var(--color-primary-navy);">08 Oct 2026</td>
                      <td style="padding: 12px;">21 Oct 2026</td>
                      <td style="padding: 12px; color: var(--color-neutral-600);">Peak Autumn Dashain Festival</td>
                      <td style="padding: 12px; font-weight: 700; color: #008060;">$1,199</td>
                      <td style="padding: 12px;"><span style="background: #fef3c7; color: #b45309; font-size: 0.8rem; font-weight: 700; padding: 3px 8px; border-radius: 100px;">Filling Fast</span></td>
                      <td style="padding: 12px; text-align: right;"><button class="btn btn-sm btn-primary open-inquiry-btn" style="padding: 6px 14px; font-size: 0.85rem;">Book Now</button></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                      <td style="padding: 12px; font-weight: 600; color: var(--color-primary-navy);">28 Oct 2026</td>
                      <td style="padding: 12px;">10 Nov 2026</td>
                      <td style="padding: 12px; color: var(--color-neutral-600);">Peak Autumn Panorama</td>
                      <td style="padding: 12px; font-weight: 700; color: #008060;">$1,199</td>
                      <td style="padding: 12px;"><span style="background: #dcfce7; color: #15803d; font-size: 0.8rem; font-weight: 700; padding: 3px 8px; border-radius: 100px;">Guaranteed</span></td>
                      <td style="padding: 12px; text-align: right;"><button class="btn btn-sm btn-primary open-inquiry-btn" style="padding: 6px 14px; font-size: 0.85rem;">Book Now</button></td>
                    </tr>
                    <tr>
                      <td style="padding: 12px; font-weight: 600; color: var(--color-primary-navy);">14 Nov 2026</td>
                      <td style="padding: 12px;">27 Nov 2026</td>
                      <td style="padding: 12px; color: var(--color-neutral-600);">Late Autumn Crisp Skies</td>
                      <td style="padding: 12px; font-weight: 700; color: #008060;">$1,199</td>
                      <td style="padding: 12px;"><span style="background: #e0f2fe; color: #0369a1; font-size: 0.8rem; font-weight: 700; padding: 3px 8px; border-radius: 100px;">Available</span></td>
                      <td style="padding: 12px; text-align: right;"><button class="btn btn-sm btn-primary open-inquiry-btn" style="padding: 6px 14px; font-size: 0.85rem;">Book Now</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Private Departure Card (Hidden by default, shown when Private tab clicked) -->
            <div id="private-dates-container" style="display: none; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 24px;">
              <h3 style="font-size: 1.3rem; color: var(--color-primary-navy); margin-bottom: 12px; font-weight: 700;">Design Your Custom Annapurna Circuit Schedule</h3>
              <p style="font-size: 1rem; color: var(--color-neutral-700); line-height: 1.7; margin-bottom: 20px;">
                Traveling with family, a private group of friends, or prefer your own pace? We offer daily private departures from Kathmandu on any date between September and May. Customize your walking stages, add side trips to Tilicho Lake (~4,919 m), upgrade your hotel in Pokhara, or request a helicopter flight back.
              </p>
              <div style="display: flex; gap: 14px; flex-wrap: wrap;">
                <a href="../../custom-plan.html" class="btn btn-primary" style="padding: 10px 24px;">Customize My Dates</a>
                <a href="https://wa.me/9779800000000?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20a%20private%2014-Day%20Annapurna%20Circuit%20departure." target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding: 10px 24px; display: inline-flex; align-items: center; gap: 8px;">
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <script>
              document.addEventListener('DOMContentLoaded', () => {
                const groupBtn = document.querySelector('[data-date-tab="group"]');
                const privateBtn = document.querySelector('[data-date-tab="private"]');
                const groupContainer = document.getElementById('group-dates-container');
                const privateContainer = document.getElementById('private-dates-container');

                if (groupBtn && privateBtn && groupContainer && privateContainer) {
                  groupBtn.addEventListener('click', () => {
                    groupBtn.style.background = '#008060';
                    groupBtn.style.color = '#ffffff';
                    groupBtn.style.borderColor = '#008060';
                    privateBtn.style.background = '#ffffff';
                    privateBtn.style.color = 'var(--color-primary-navy)';
                    privateBtn.style.borderColor = '#cbd5e1';
                    groupContainer.style.display = 'block';
                    privateContainer.style.display = 'none';
                  });

                  privateBtn.addEventListener('click', () => {
                    privateBtn.style.background = '#008060';
                    privateBtn.style.color = '#ffffff';
                    privateBtn.style.borderColor = '#008060';
                    groupBtn.style.background = '#ffffff';
                    groupBtn.style.color = 'var(--color-primary-navy)';
                    groupBtn.style.borderColor = '#cbd5e1';
                    privateContainer.style.display = 'block';
                    groupContainer.style.display = 'none';
                  });
                }
              });
            </script>
          </section>
`;
}

function generateFaqsHtml() {
  const faqs = [
    {
      q: "What permits are required for the Annapurna Circuit Trek?",
      a: "Trekkers require two official permits: the <strong>Annapurna Conservation Area Project (ACAP) Permit</strong> and the <strong>Trekkers' Information Management System (TIMS) Card</strong>. As per Nepal Tourism Board regulations, all foreign trekkers in the Annapurna region must be accompanied by a licensed trekking guide and carry an agency-issued TIMS card. All permits and paperwork are fully organized and included in your booking."
    },
    {
      q: "How difficult is Thorong La Pass (5,416 m)?",
      a: "Crossing Thorong La Pass is physically challenging because of high altitude, sub-zero morning temperatures, and sustained uphill exertion. It is not technical climbing—no ropes, crampons, or mountaineering axes are required under normal seasonal conditions. With our conservative acclimatization schedule (including the Day 5 rest in Manang) and controlled pacing, fit hikers of all ages successfully cross the pass."
    },
    {
      q: "How has road construction affected the Annapurna Circuit Trek?",
      a: "Jeep roads now reach several lower settlements along the Marsyangdi and Kali Gandaki corridors. Our modern 14-day itinerary leverages this infrastructure strategically: by driving past dusty lower sections to Chame, we maximize your walking time in pristine high alpine wilderness between Pisang, Manang, Thorong La, and Muktinath, while avoiding mundane walking along vehicle tracks."
    },
    {
      q: "What is accommodation like along the route?",
      a: "Accommodation is in family-operated mountain teahouses. Rooms are clean, twin-sharing with foam mattresses and blankets. In lower villages like Chame, Manang, and Jomsom, rooms often feature private attached bathrooms and hot showers. At higher elevations like Yak Kharka and Thorong Phedi, facilities are shared and simpler. Bringing a quality 4-season (-10°C to -15°C) sleeping bag is essential."
    },
    {
      q: "What meals are served during the trek?",
      a: "Teahouses serve a wide variety of freshly prepared meals. The staple high-energy dish is traditional Nepali <em>Dal Bhat</em> (steamed rice, spiced lentil soup, seasonal vegetable curry, greens, and pickles), which comes with complimentary second helpings. You will also enjoy Tibetan momos, fried noodles, vegetable soup, garlic soup, porridge, eggs, pancakes, and famous Thakali apple pies."
    },
    {
      q: "What is the best season to trek the Annapurna Circuit?",
      a: "The two peak trekking seasons are <strong>Autumn (September to November)</strong> and <strong>Spring (March to May)</strong>. Autumn offers exceptionally clear skies, stable dry weather, and crisp mountain views after the monsoon. Spring brings warmer temperatures, longer daylight, and magnificent blooming rhododendron forests between Tatopani and Ghorepani."
    },
    {
      q: "Can solo travelers join this trek?",
      a: "Yes! Solo travelers can join one of our guaranteed small-group departures or book a private guided trek. Under current Nepal Tourism Board safety regulations, solo independent trekking without a guide is no longer permitted in the Annapurna Conservation Area. Joining our guided trips ensures complete safety, porter support, and shared camaraderie."
    },
    {
      q: "What emergency procedures are in place for altitude sickness?",
      a: "Our certified guides monitor blood oxygen saturation (SpO2) and heart rate twice daily using clinical pulse oximeters. They are trained in wilderness first aid and Acute Mountain Sickness (AMS) management. If a trekker shows persistent symptoms, the protocol is immediate rest or descent. In rare cases requiring emergency evacuation, we coordinate rapid helicopter rescue to Kathmandu or Pokhara through your travel insurance."
    }
  ];

  let faqsHtml = '';
  faqs.forEach((f, idx) => {
    faqsHtml += `
              <div class="faq-item" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 14px; overflow: hidden; box-shadow: 0 1px 2px rgba(0,0,0,0.03);">
                <button class="faq-question-btn" style="width: 100%; text-align: left; background: none; border: none; padding: 18px 20px; font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy); cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                  <span>${f.q}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-left: 12px; transition: transform 0.2s ease;">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div class="faq-answer-content" style="display: none; padding: 0 20px 20px 20px; font-size: 0.98rem; line-height: 1.7; color: var(--color-neutral-700); border-top: 1px solid #f1f5f9;">
                  <p style="margin-top: 12px; margin-bottom: 0;">${f.a}</p>
                </div>
              </div>
`;
  });

  return `
          <!-- Section 12: FAQs -->
          <section id="section-faqs" class="trek-detail-section">
            <h2 class="trek-section-title">Frequently Asked Questions: Annapurna Circuit Trek</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px; margin-bottom: 24px;"></div>
            
            <p style="font-size: 1.05rem; color: var(--color-neutral-700); line-height: 1.7; margin-bottom: 24px;">
              Here are clear, authentic answers to the most common questions about the 14-day Annapurna Circuit Trek, covering permits, Thorong La crossing safety, road conditions, accommodation, and preparation.
            </p>

            <div class="faq-accordion-list">
${faqsHtml}
            </div>

            <script>
              document.addEventListener('DOMContentLoaded', () => {
                const faqBtns = document.querySelectorAll('.faq-question-btn');
                faqBtns.forEach(btn => {
                  btn.addEventListener('click', () => {
                    const content = btn.nextElementSibling;
                    const chevron = btn.querySelector('svg');
                    const isVisible = content.style.display === 'block';
                    content.style.display = isVisible ? 'none' : 'block';
                    if (chevron) {
                      chevron.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
                    }
                  });
                });
              });
            </script>
          </section>
`;
}

function generateSidebarHtml() {
  return `
        <!-- Sticky Booking Sidebar Column -->
        <div>
          <div class="sidebar-booking-card">
              
              <!-- Top Right Best Seller Ribbon Badge -->
              <div style="position: absolute; top: 18px; right: 0; background: #F59E0B; color: #FFFFFF; font-size: 0.72rem; font-weight: 800; padding: 5px 14px; border-radius: 4px 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 2px 6px rgba(245, 158, 11, 0.3);">
                BEST SELLER
              </div>

              <!-- Pricing Header -->
              <span style="font-size: 0.75rem; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">FROM</span>
              <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 16px; flex-wrap: wrap;">
                <span style="font-size: 2.5rem; font-weight: 800; color: #0F172A; line-height: 1;">$1,199</span>
                <span style="font-size: 0.92rem; color: #64748B; font-weight: 500;">/ person</span>
                <a href="#section-itinerary" style="font-size: 0.92rem; color: #475569; font-weight: 600; text-decoration: underline; margin-left: 4px;">14 days trip</a>
              </div>

              <!-- Group Discount Accordion Toggle -->
              <div class="group-discount-toggle" onclick="const table = this.nextElementSibling; const arrow = this.querySelector('.gd-arrow'); if (table.style.display === 'none') { table.style.display = 'block'; arrow.style.transform = 'rotate(180deg)'; } else { table.style.display = 'none'; arrow.style.transform = 'rotate(0deg)'; }" style="border-top: 1px dashed #CBD5E1; border-bottom: 1px dashed #CBD5E1; padding: 10px 0; margin-bottom: 18px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none;">
                <span style="font-size: 0.78rem; font-weight: 800; color: #0F172A; text-transform: uppercase; letter-spacing: 0.04em;">WE OFFER GROUP DISCOUNT</span>
                <span class="gd-arrow" style="font-size: 0.85rem; color: #0F172A; transition: transform 0.2s ease;">▼</span>
              </div>

              <!-- Group Discount Table (Hidden by default, expandable) -->
              <div class="group-discount-content" style="display: none; margin-bottom: 18px; background: #F8FAFC; border-radius: 10px; padding: 12px; font-size: 0.85rem; border: 1px solid #E2E8F0;">
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">1 Person (Solo)</span>
                  <strong style="color: #0F172A;">$1,199 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">2 - 4 Persons</span>
                  <strong style="color: #0F172A;">$1,149 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">5 - 8 Persons</span>
                  <strong style="color: #0F172A;">$1,099 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0;">
                  <span style="color: #64748B;">9+ Persons</span>
                  <strong style="color: #0F172A;">$1,049 / person</strong>
                </div>
              </div>

              <!-- Booking CTA Buttons -->
              <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
                <a href="#section-booking" class="btn btn-primary" style="width: 100%; text-align: center; padding: 12px 20px; font-weight: 700; font-size: 1rem; border-radius: 8px;">
                  Book This Trek
                </a>
                <a href="https://wa.me/9779800000000?text=Hi%2C%20I%20am%20interested%20in%20the%2014-Day%20Annapurna%20Circuit%20Trek." target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="width: 100%; text-align: center; padding: 10px 20px; font-weight: 700; font-size: 0.95rem; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 8px;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  Chat on WhatsApp
                </a>
              </div>

              <!-- Trust & Guarantee Highlights -->
              <div style="border-top: 1px solid #E2E8F0; padding-top: 16px; display: flex; flex-direction: column; gap: 10px; font-size: 0.85rem; color: #475569;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="color: #008060; flex-shrink: 0;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>100% Guaranteed Departures</span>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="color: #008060; flex-shrink: 0;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>Free Date Change up to 30 days</span>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="color: #008060; flex-shrink: 0;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>Govt. Registered & Insured Guides</span>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="color: #008060; flex-shrink: 0;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>All ACAP & TIMS Permits Handled</span>
                </div>
              </div>

          </div>
        </div>
`;
}

module.exports = {
  generateAltitudeProfileHtml,
  generateDatesHtml,
  generateFaqsHtml,
  generateSidebarHtml
};
console.log('build_act_altitude_faqs.js created successfully');
