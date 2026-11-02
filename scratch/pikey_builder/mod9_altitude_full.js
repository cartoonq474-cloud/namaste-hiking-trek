// Module 9 Full: Section 7 - Interactive Altitude Visualizer, Route Analysis & Acclimatization Safety Deep-Dive
const { getLineRange, linesToHtml } = require('./content_parser.js');

function getAltitudeSection() {
  // Parse user content on Route and Altitude Profile (lines 598 to 783)
  const routeHtml = linesToHtml(getLineRange(598, 783));

  // Parse user content on Acclimatization and Altitude Safety (lines 1074 to 1358)
  const safetyHtml = linesToHtml(getLineRange(1074, 1358));

  return `
        <!-- Section 7: Altitude Profile & Acclimatization -->
        <section id="section-altitude-profile" class="trek-detail-section">
          <div class="details-title-wrapper" style="margin-bottom: 24px;">
            <h2 class="details-main-title">Altitude Profile of Pikey Peak Trek</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
          </div>

          <p style="font-size: 1rem; color: #475569; line-height: 1.6; margin-bottom: 24px;">
            The Pikey Peak Trek features a balanced, safe elevation progression. The chart below illustrates daily elevations, net ascents, and descents along the 9-day circuit. Switch between metric and imperial units or hover over any waypoint to inspect precise elevations.
          </p>

          <!-- Interactive SVG Altitude Chart Container -->
          <div id="altitude-chart-wrapper" data-trek-key="pikey_peak" class="altitude-chart-card" style="margin-bottom: 30px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <!-- Populated dynamically by js/altitude-visualizer.js -->
          </div>

          <!-- 4 Bento Metric Cards -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 30px;">
            
            <div class="bento-stat-card">
              <span style="display: block; font-size: 0.8rem; color: #64748b; font-weight: 600; text-transform: uppercase;">Peak Summit Elevation</span>
              <strong style="display: block; font-size: 1.4rem; color: #0f172a; margin-top: 4px;">4,065 m / 13,337 ft</strong>
              <span style="font-size: 0.85rem; color: #059669; font-weight: 600;">Day 5 &bull; Pikey Peak Summit</span>
              <p style="margin: 6px 0 0 0; font-size: 0.85rem; color: #64748b; line-height: 1.4;">Pre-dawn excursion for sunrise; only ~2 hours spent at peak before descending.</p>
            </div>

            <div class="bento-stat-card">
              <span style="display: block; font-size: 0.8rem; color: #64748b; font-weight: 600; text-transform: uppercase;">Highest Sleeping Altitude</span>
              <strong style="display: block; font-size: 1.4rem; color: #0f172a; margin-top: 4px;">3,640 m / 11,942 ft</strong>
              <span style="font-size: 0.85rem; color: #c2410c; font-weight: 600;">Day 4 &bull; Pikey Base Camp</span>
              <p style="margin: 6px 0 0 0; font-size: 0.85rem; color: #64748b; line-height: 1.4;">Single overnight stay directly beneath the summit ridge; warm lodge dining.</p>
            </div>

            <div class="bento-stat-card">
              <span style="display: block; font-size: 0.8rem; color: #64748b; font-weight: 600; text-transform: uppercase;">Total Net Elevation Gain</span>
              <strong style="display: block; font-size: 1.4rem; color: #0f172a; margin-top: 4px;">~2,665 m</strong>
              <span style="font-size: 0.85rem; color: #0284c7; font-weight: 600;">Kathmandu to Pikey Peak</span>
              <p style="margin: 6px 0 0 0; font-size: 0.85rem; color: #64748b; line-height: 1.4;">Overland vehicle absorbs 1,450 m to Dhap; on-foot climbing is only ~1,215 m.</p>
            </div>

            <div class="bento-stat-card">
              <span style="display: block; font-size: 0.8rem; color: #64748b; font-weight: 600; text-transform: uppercase;">Acclimatization Safety</span>
              <strong style="display: block; font-size: 1.4rem; color: #059669; margin-top: 4px;">Low-to-Moderate</strong>
              <span style="font-size: 0.85rem; color: #059669; font-weight: 600;">Rapid Post-Summit Descent</span>
              <p style="margin: 6px 0 0 0; font-size: 0.85rem; color: #64748b; line-height: 1.4;">Immediate descent to 3,550 m and 2,700 m (Junbesi) minimizes altitude strain.</p>
            </div>

          </div>

          <!-- Comprehensive Route and Altitude Profile User Content -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 26px; margin-bottom: 30px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <div style="border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 18px;">
              <span class="pill pill-copper" style="margin-bottom: 6px;">Topographic Analysis</span>
              <h3 style="font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 4px 0 0 0;">Route &amp; Stage Elevation Profile</h3>
            </div>
            <div class="user-content-block" style="font-size: 0.98rem; line-height: 1.7; color: #334155;">
              ${routeHtml}
            </div>
          </div>

          <!-- Comprehensive Acclimatization & Altitude Safety User Content -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 26px; margin-bottom: 30px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <div style="border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 18px;">
              <span class="pill pill-copper" style="margin-bottom: 6px;">Medical Protocols</span>
              <h3 style="font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 4px 0 0 0;">Acclimatization, Symptoms &amp; Altitude Safety</h3>
            </div>
            <div class="user-content-block" style="font-size: 0.98rem; line-height: 1.7; color: #334155;">
              ${safetyHtml}
            </div>
          </div>
        </section>
`;
}

module.exports = { getAltitudeSection };

