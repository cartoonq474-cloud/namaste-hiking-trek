// Module 9: Section 7 - Interactive Altitude Visualizer & Acclimatization Staging
function getAltitudeSection() {
  return `
        <!-- Section 7: Altitude Profile & Acclimatization -->
        <section id="section-altitude-profile" style="margin-bottom: 50px;">
          <div style="border-bottom: 2px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 24px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #ffedd5; color: #c2410c; border-radius: 8px; font-weight: 700;">07</span>
              <span class="pill pill-copper">Elevation Dynamics &amp; Safety</span>
            </div>
            <h2 style="font-size: 1.85rem; font-weight: 800; color: #0f172a; margin: 0;">Altitude Profile &amp; Acclimatization</h2>
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

          <!-- 9-Day Elevation Staging & Risk Assessment Table -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 25px;">
            <div style="background: #f8fafc; padding: 14px 20px; border-bottom: 1px solid #e2e8f0;">
              <h3 style="font-size: 1.1rem; font-weight: 700; color: #0f172a; margin: 0;">9-Day Elevation Staging &amp; Acclimatization Log</h3>
            </div>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                <thead>
                  <tr style="background: #f1f5f9; text-align: left; color: #475569;">
                    <th style="padding: 10px 14px; font-weight: 600;">Day</th>
                    <th style="padding: 10px 14px; font-weight: 600;">Route Stage</th>
                    <th style="padding: 10px 14px; font-weight: 600;">Night Alt (m/ft)</th>
                    <th style="padding: 10px 14px; font-weight: 600;">Net Change</th>
                    <th style="padding: 10px 14px; font-weight: 600;">Day Max Alt</th>
                    <th style="padding: 10px 14px; font-weight: 600;">Risk Level</th>
                    <th style="padding: 10px 14px; font-weight: 600;">Acclimatization Strategy</th>
                  </tr>
                </thead>
                <tbody style="color: #334155;">
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 600;">Day 1</td>
                    <td style="padding: 10px 14px;">Arrival in Kathmandu</td>
                    <td style="padding: 10px 14px;">1,400 m / 4,593 ft</td>
                    <td style="padding: 10px 14px;">Baseline</td>
                    <td style="padding: 10px 14px;">1,400 m</td>
                    <td style="padding: 10px 14px;"><span style="background: #dcfce7; color: #15803d; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;">LOW</span></td>
                    <td style="padding: 10px 14px;">Hydration, flight recovery, briefing</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 10px 14px; font-weight: 600;">Day 2</td>
                    <td style="padding: 10px 14px;">Drive Kathmandu to Dhap</td>
                    <td style="padding: 10px 14px;">2,850 m / 9,350 ft</td>
                    <td style="padding: 10px 14px;">+1,450 m (Drive)</td>
                    <td style="padding: 10px 14px;">2,850 m</td>
                    <td style="padding: 10px 14px;"><span style="background: #fef9c3; color: #854d0e; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;">MILD</span></td>
                    <td style="padding: 10px 14px;">Drink 3L water; early sleep at Dhap</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 600;">Day 3</td>
                    <td style="padding: 10px 14px;">Trek Dhap to Jhapre</td>
                    <td style="padding: 10px 14px;">2,920 m / 9,580 ft</td>
                    <td style="padding: 10px 14px;">+70 m net</td>
                    <td style="padding: 10px 14px;">2,920 m</td>
                    <td style="padding: 10px 14px;"><span style="background: #dcfce7; color: #15803d; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;">LOW</span></td>
                    <td style="padding: 10px 14px;">Gentle 4–5 hr walking; body adjusts to walking</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 10px 14px; font-weight: 600;">Day 4</td>
                    <td style="padding: 10px 14px;">Trek Jhapre to Pikey Base Camp</td>
                    <td style="padding: 10px 14px;">3,640 m / 11,942 ft</td>
                    <td style="padding: 10px 14px;">+720 m net</td>
                    <td style="padding: 10px 14px;">3,640 m</td>
                    <td style="padding: 10px 14px;"><span style="background: #fed7aa; color: #9a3412; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;">MODERATE</span></td>
                    <td style="padding: 10px 14px;">Slow pace; pulse oximeter check; early night</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 600;">Day 5</td>
                    <td style="padding: 10px 14px;">Pikey Summit &rarr; Jasmane Bhanjyang</td>
                    <td style="padding: 10px 14px;">3,550 m / 11,647 ft</td>
                    <td style="padding: 10px 14px;">+425m / -515m</td>
                    <td style="padding: 10px 14px;"><strong>4,065 m (Peak)</strong></td>
                    <td style="padding: 10px 14px;"><span style="background: #fef9c3; color: #854d0e; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;">MILD</span></td>
                    <td style="padding: 10px 14px;">"Climb high, sleep low"; immediate descent</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 10px 14px; font-weight: 600;">Day 6</td>
                    <td style="padding: 10px 14px;">Trek Jasmane to Junbesi</td>
                    <td style="padding: 10px 14px;">2,700 m / 8,858 ft</td>
                    <td style="padding: 10px 14px;">-850 m descent</td>
                    <td style="padding: 10px 14px;">3,550 m</td>
                    <td style="padding: 10px 14px;"><span style="background: #dcfce7; color: #15803d; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;">LOW</span></td>
                    <td style="padding: 10px 14px;">Oxygen increases dramatically; deep recovery</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 600;">Day 7</td>
                    <td style="padding: 10px 14px;">Trek Junbesi to Phaplu</td>
                    <td style="padding: 10px 14px;">2,469 m / 8,100 ft</td>
                    <td style="padding: 10px 14px;">-230 m descent</td>
                    <td style="padding: 10px 14px;">2,700 m</td>
                    <td style="padding: 10px 14px;"><span style="background: #dcfce7; color: #15803d; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;">LOW</span></td>
                    <td style="padding: 10px 14px;">Relaxed valley hike; celebration dinner</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 10px 14px; font-weight: 600;">Day 8</td>
                    <td style="padding: 10px 14px;">Drive Phaplu to Kathmandu</td>
                    <td style="padding: 10px 14px;">1,400 m / 4,593 ft</td>
                    <td style="padding: 10px 14px;">-1,069 m (Drive)</td>
                    <td style="padding: 10px 14px;">2,469 m</td>
                    <td style="padding: 10px 14px;"><span style="background: #dcfce7; color: #15803d; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;">NONE</span></td>
                    <td style="padding: 10px 14px;">Return to Kathmandu; hot shower &amp; rest</td>
                  </tr>
                  <tr style="background: #ffffff;">
                    <td style="padding: 10px 14px; font-weight: 600;">Day 9</td>
                    <td style="padding: 10px 14px;">Final International Departure</td>
                    <td style="padding: 10px 14px;">1,400 m / 4,593 ft</td>
                    <td style="padding: 10px 14px;">Departure</td>
                    <td style="padding: 10px 14px;">1,400 m</td>
                    <td style="padding: 10px 14px;"><span style="background: #dcfce7; color: #15803d; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: 700;">NONE</span></td>
                    <td style="padding: 10px 14px;">Flight home with lifelong memories</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
`;
}

module.exports = { getAltitudeSection };

