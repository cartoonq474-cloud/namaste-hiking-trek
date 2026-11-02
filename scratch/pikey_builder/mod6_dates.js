// Module 6: Section 4 - Dates & Availability with Dual Calendar Mount
function getDatesSection() {
  return `
        <!-- Section 4: Dates & Availability -->
        <section id="section-dates" class="trek-detail-section">
          <div class="dates-section-header">
            <h2 class="trek-section-title" style="margin-bottom: 0;">Booking Dates &amp; Availability for Pikey Peak Trek</h2>
            <div class="dates-mode-toggle">
              <button type="button" class="dates-mode-btn active" data-mode="group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Group Departures
              </button>
              <button type="button" class="dates-mode-btn" data-mode="private">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Private Custom Dates
              </button>
            </div>
          </div>

          <p style="font-size: 1rem; color: #475569; line-height: 1.6; margin-bottom: 24px;">
            Choose from our 100% guaranteed small group departures or arrange a customized private departure on your preferred date. Small groups are capped at 8–10 travelers to preserve authentic Sherpa interactions and safety on the trail.
          </p>

          <!-- Group vs Private Mode Toggle -->
          <div style="display: inline-flex; background: #f1f5f9; padding: 4px; border-radius: 10px; margin-bottom: 24px; border: 1px solid #e2e8f0;">
            <button id="btn-toggle-group-dates" style="padding: 8px 20px; font-size: 0.9rem; font-weight: 700; border: none; border-radius: 8px; background: #ffffff; color: #0f172a; box-shadow: 0 1px 3px rgba(0,0,0,0.1); cursor: pointer;">
              Group Joining Departures
            </button>
            <button id="btn-toggle-private-dates" class="open-inquiry-btn" style="padding: 8px 20px; font-size: 0.9rem; font-weight: 600; border: none; border-radius: 8px; background: transparent; color: #64748b; cursor: pointer;">
              Private Customized Date
            </button>
          </div>

          <!-- Dual Calendar Mount Container -->
          <div id="dual-calendar-mount" class="calendar-container" style="margin-bottom: 30px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">
              <strong style="color: #0f172a; font-size: 1.1rem;">Interactive Departure Calendar</strong>
              <span style="font-size: 0.85rem; color: #059669; font-weight: 600;">● Guaranteed Departures Active</span>
            </div>
            <div style="text-align: center; color: #64748b; padding: 20px; font-size: 0.95rem;">
              Select a date below to join a confirmed small group or click to book directly.
            </div>
          </div>

          <!-- Featured Confirmed Departures List -->
          <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 30px;">
            
            <!-- Card 1 -->
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div>
                <span style="display: inline-block; background: #dcfce7; color: #15803d; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; margin-bottom: 6px;">GUARANTEED DEPARTURE</span>
                <strong style="display: block; font-size: 1.1rem; color: #0f172a;">Mar 15, 2026 &ndash; Mar 23, 2026</strong>
                <span style="font-size: 0.85rem; color: #64748b;">9 Days &bull; Kathmandu to Kathmandu &bull; Spring Rhododendron Bloom</span>
              </div>
              <div style="display: flex; align-items: center; gap: 20px;">
                <div style="text-align: right;">
                  <span style="display: block; font-size: 1.25rem; font-weight: 800; color: #0f172a;">$890 <span style="font-size: 0.8rem; font-weight: 400; color: #64748b;">/ person</span></span>
                  <span style="font-size: 0.8rem; color: #059669; font-weight: 600;">4 seats remaining</span>
                </div>
                <button class="btn btn-primary btn-sm open-inquiry-btn">Book Date</button>
              </div>
            </div>

            <!-- Card 2 -->
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div>
                <span style="display: inline-block; background: #dcfce7; color: #15803d; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; margin-bottom: 6px;">GUARANTEED DEPARTURE</span>
                <strong style="display: block; font-size: 1.1rem; color: #0f172a;">Apr 05, 2026 &ndash; Apr 13, 2026</strong>
                <span style="font-size: 0.85rem; color: #64748b;">9 Days &bull; Kathmandu to Kathmandu &bull; Peak Spring Season</span>
              </div>
              <div style="display: flex; align-items: center; gap: 20px;">
                <div style="text-align: right;">
                  <span style="display: block; font-size: 1.25rem; font-weight: 800; color: #0f172a;">$890 <span style="font-size: 0.8rem; font-weight: 400; color: #64748b;">/ person</span></span>
                  <span style="font-size: 0.8rem; color: #059669; font-weight: 600;">3 seats remaining</span>
                </div>
                <button class="btn btn-primary btn-sm open-inquiry-btn">Book Date</button>
              </div>
            </div>

            <!-- Card 3 -->
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div>
                <span style="display: inline-block; background: #dcfce7; color: #15803d; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; margin-bottom: 6px;">GUARANTEED DEPARTURE</span>
                <strong style="display: block; font-size: 1.1rem; color: #0f172a;">May 03, 2026 &ndash; May 11, 2026</strong>
                <span style="font-size: 0.85rem; color: #64748b;">9 Days &bull; Kathmandu to Kathmandu &bull; Late Spring &bull; Mild Weather</span>
              </div>
              <div style="display: flex; align-items: center; gap: 20px;">
                <div style="text-align: right;">
                  <span style="display: block; font-size: 1.25rem; font-weight: 800; color: #0f172a;">$890 <span style="font-size: 0.8rem; font-weight: 400; color: #64748b;">/ person</span></span>
                  <span style="font-size: 0.8rem; color: #059669; font-weight: 600;">6 seats remaining</span>
                </div>
                <button class="btn btn-primary btn-sm open-inquiry-btn">Book Date</button>
              </div>
            </div>

            <!-- Card 4 -->
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div>
                <span style="display: inline-block; background: #dcfce7; color: #15803d; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; margin-bottom: 6px;">GUARANTEED DEPARTURE</span>
                <strong style="display: block; font-size: 1.1rem; color: #0f172a;">Oct 04, 2026 &ndash; Oct 12, 2026</strong>
                <span style="font-size: 0.85rem; color: #64748b;">9 Days &bull; Kathmandu to Kathmandu &bull; Autumn Post-Monsoon Crystal Clarity</span>
              </div>
              <div style="display: flex; align-items: center; gap: 20px;">
                <div style="text-align: right;">
                  <span style="display: block; font-size: 1.25rem; font-weight: 800; color: #0f172a;">$890 <span style="font-size: 0.8rem; font-weight: 400; color: #64748b;">/ person</span></span>
                  <span style="font-size: 0.8rem; color: #059669; font-weight: 600;">2 seats remaining</span>
                </div>
                <button class="btn btn-primary btn-sm open-inquiry-btn">Book Date</button>
              </div>
            </div>

            <!-- Card 5 -->
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div>
                <span style="display: inline-block; background: #dcfce7; color: #15803d; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; margin-bottom: 6px;">GUARANTEED DEPARTURE</span>
                <strong style="display: block; font-size: 1.1rem; color: #0f172a;">Oct 25, 2026 &ndash; Nov 02, 2026</strong>
                <span style="font-size: 0.85rem; color: #64748b;">9 Days &bull; Kathmandu to Kathmandu &bull; Autumn Festival Season</span>
              </div>
              <div style="display: flex; align-items: center; gap: 20px;">
                <div style="text-align: right;">
                  <span style="display: block; font-size: 1.25rem; font-weight: 800; color: #0f172a;">$890 <span style="font-size: 0.8rem; font-weight: 400; color: #64748b;">/ person</span></span>
                  <span style="font-size: 0.8rem; color: #059669; font-weight: 600;">5 seats remaining</span>
                </div>
                <button class="btn btn-primary btn-sm open-inquiry-btn">Book Date</button>
              </div>
            </div>

            <!-- Card 6 -->
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div>
                <span style="display: inline-block; background: #dcfce7; color: #15803d; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; margin-bottom: 6px;">GUARANTEED DEPARTURE</span>
                <strong style="display: block; font-size: 1.1rem; color: #0f172a;">Nov 15, 2026 &ndash; Nov 23, 2026</strong>
                <span style="font-size: 0.85rem; color: #64748b;">9 Days &bull; Kathmandu to Kathmandu &bull; Crisp Skies &bull; Quiet Trails</span>
              </div>
              <div style="display: flex; align-items: center; gap: 20px;">
                <div style="text-align: right;">
                  <span style="display: block; font-size: 1.25rem; font-weight: 800; color: #0f172a;">$890 <span style="font-size: 0.8rem; font-weight: 400; color: #64748b;">/ person</span></span>
                  <span style="font-size: 0.8rem; color: #059669; font-weight: 600;">7 seats remaining</span>
                </div>
                <button class="btn btn-primary btn-sm open-inquiry-btn">Book Date</button>
              </div>
            </div>

          </div>

          <!-- Private Tailored Departure Banner -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
            <div>
              <strong style="color: #0f172a; font-size: 1.05rem; display: block; margin-bottom: 4px;">Prefer a Private Customized Departure?</strong>
              <p style="margin: 0; font-size: 0.9rem; color: #64748b;">
                Depart on any date that suits your travel schedule. We customize pace, private 4WD vehicle staging, and extra days in Junbesi for couples, families, or private groups.
              </p>
            </div>
            <button class="btn btn-primary open-inquiry-btn" style="white-space: nowrap;">Request Custom Dates</button>
          </div>
        </section>
`;
}

module.exports = { getDatesSection };

