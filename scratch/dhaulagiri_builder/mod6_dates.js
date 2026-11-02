// Module 6: Section 4 - Dates & Availability with Dual Calendar Mount for Dhaulagiri Circuit Trek
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

          <!-- Dual Calendar Mount -->
          <div id="dual-calendar-mount" class="dual-calendar-container" style="margin-bottom: 24px;"></div>

          <!-- Fixed Group Departures Table (Autumn & Spring 2026/2027) -->
          <div class="dates-table-container" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <div style="background: #f8fafc; padding: 14px 18px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
              <span style="font-weight: 700; color: var(--color-primary-navy); font-size: 0.98rem;">Guaranteed Fixed Group Departures (Autumn 2026 &amp; Spring 2027)</span>
              <span style="font-size: 0.8rem; background: #ecfdf5; color: #047857; font-weight: 700; padding: 3px 8px; border-radius: 6px;">Small Groups (Max 10 Climbers)</span>
            </div>
            
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem;">
                <thead>
                  <tr style="background: #f1f5f9; color: var(--color-primary-navy); border-bottom: 2px solid #e2e8f0;">
                    <th style="padding: 12px 16px; font-weight: 700;">Departure Date</th>
                    <th style="padding: 12px 16px; font-weight: 700;">Return Date</th>
                    <th style="padding: 12px 16px; font-weight: 700;">Duration</th>
                    <th style="padding: 12px 16px; font-weight: 700;">Availability Status</th>
                    <th style="padding: 12px 16px; font-weight: 700;">Price (USD)</th>
                    <th style="padding: 12px 16px; font-weight: 700; text-align: right;">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 600; color: var(--color-primary-navy);">Sep 20, 2026</td>
                    <td style="padding: 12px 16px; color: #475569;">Oct 09, 2026</td>
                    <td style="padding: 12px 16px;">20 Days</td>
                    <td style="padding: 12px 16px;"><span style="background: #dcfce7; color: #15803d; font-size: 0.78rem; font-weight: 700; padding: 3px 8px; border-radius: 4px;">Guaranteed (4 Spots Left)</span></td>
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-primary-navy);">$1,999 pp</td>
                    <td style="padding: 12px 16px; text-align: right;"><button class="btn btn-primary btn-sm open-inquiry-btn" style="padding: 5px 12px; font-size: 0.82rem;">Book Now</button></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 600; color: var(--color-primary-navy);">Oct 05, 2026</td>
                    <td style="padding: 12px 16px; color: #475569;">Oct 24, 2026</td>
                    <td style="padding: 12px 16px;">20 Days</td>
                    <td style="padding: 12px 16px;"><span style="background: #dcfce7; color: #15803d; font-size: 0.78rem; font-weight: 700; padding: 3px 8px; border-radius: 4px;">Guaranteed (2 Spots Left)</span></td>
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-primary-navy);">$1,999 pp</td>
                    <td style="padding: 12px 16px; text-align: right;"><button class="btn btn-primary btn-sm open-inquiry-btn" style="padding: 5px 12px; font-size: 0.82rem;">Book Now</button></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 600; color: var(--color-primary-navy);">Oct 20, 2026</td>
                    <td style="padding: 12px 16px; color: #475569;">Nov 08, 2026</td>
                    <td style="padding: 12px 16px;">20 Days</td>
                    <td style="padding: 12px 16px;"><span style="background: #eff6ff; color: #1d4ed8; font-size: 0.78rem; font-weight: 700; padding: 3px 8px; border-radius: 4px;">Available (6 Spots Left)</span></td>
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-primary-navy);">$1,999 pp</td>
                    <td style="padding: 12px 16px; text-align: right;"><button class="btn btn-primary btn-sm open-inquiry-btn" style="padding: 5px 12px; font-size: 0.82rem;">Book Now</button></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 12px 16px; font-weight: 600; color: var(--color-primary-navy);">Apr 05, 2027</td>
                    <td style="padding: 12px 16px; color: #475569;">Apr 24, 2027</td>
                    <td style="padding: 12px 16px;">20 Days</td>
                    <td style="padding: 12px 16px;"><span style="background: #eff6ff; color: #1d4ed8; font-size: 0.78rem; font-weight: 700; padding: 3px 8px; border-radius: 4px;">Available (8 Spots Left)</span></td>
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-primary-navy);">$1,999 pp</td>
                    <td style="padding: 12px 16px; text-align: right;"><button class="btn btn-primary btn-sm open-inquiry-btn" style="padding: 5px 12px; font-size: 0.82rem;">Book Now</button></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 16px; font-weight: 600; color: var(--color-primary-navy);">Apr 25, 2027</td>
                    <td style="padding: 12px 16px; color: #475569;">May 14, 2027</td>
                    <td style="padding: 12px 16px;">20 Days</td>
                    <td style="padding: 12px 16px;"><span style="background: #eff6ff; color: #1d4ed8; font-size: 0.78rem; font-weight: 700; padding: 3px 8px; border-radius: 4px;">Available (8 Spots Left)</span></td>
                    <td style="padding: 12px 16px; font-weight: 700; color: var(--color-primary-navy);">$1,999 pp</td>
                    <td style="padding: 12px 16px; text-align: right;"><button class="btn btn-primary btn-sm open-inquiry-btn" style="padding: 5px 12px; font-size: 0.82rem;">Book Now</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Custom Private Departures Callout -->
          <div style="background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 10px; padding: 18px 22px; margin-top: 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
            <div>
              <strong style="color: var(--color-primary-navy); font-size: 0.98rem; display: block; margin-bottom: 4px;">Need a Private Departure on Custom Dates?</strong>
              <span style="color: #64748b; font-size: 0.88rem; line-height: 1.5; display: block;">We organize private custom expeditions for solo climbers, couples, friends, and alpine clubs on any date during the climbing seasons.</span>
            </div>
            <button class="btn btn-secondary open-inquiry-btn" style="font-size: 0.88rem; padding: 8px 18px;">Request Custom Dates</button>
          </div>

        </section>
`;
}

module.exports = { getDatesSection };

