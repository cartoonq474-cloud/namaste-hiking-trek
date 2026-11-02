// Module 3 Full: Section 1 - Overview, Key Trip Facts, Why Choose 9-Day, Highlights
const { getLineRange, linesToHtml } = require('./content_parser.js');

function getOverviewSection() {
  const userContentHtml = linesToHtml(getLineRange(3, 352));

  return `
        <!-- Section 1: Overview -->
        <section id="section-overview" class="trek-detail-section">
          <h2 class="trek-section-title">Trek Overview</h2>

          <!-- Package at a Glance Quick Table -->
          <div style="background: #ffffff; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); overflow: hidden; margin-bottom: 30px; box-shadow: var(--shadow-sm);">
            <div style="background: var(--color-neutral-50); padding: 14px 20px; border-bottom: 1px solid var(--color-neutral-100);">
              <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--color-primary-navy); margin: 0;">Package at a Glance</h3>
            </div>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
                <tbody>
                  <tr style="border-bottom: 1px solid var(--color-neutral-100);">
                    <td style="padding: 12px 20px; font-weight: 600; color: var(--color-neutral-600); width: 220px; background: var(--color-neutral-50);">Total Duration</td>
                    <td style="padding: 12px 20px; color: var(--color-neutral-800);">9 Calendar Days (Kathmandu to Kathmandu overland)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-100);">
                    <td style="padding: 12px 20px; font-weight: 600; color: var(--color-neutral-600); background: var(--color-neutral-50);">Trekking Days</td>
                    <td style="padding: 12px 20px; color: var(--color-neutral-800);">5 Scheduled Walking Days (Dhap &bull; Jhapre &bull; Base Camp &bull; Jasmane &bull; Junbesi &bull; Phaplu)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-100);">
                    <td style="padding: 12px 20px; font-weight: 600; color: var(--color-neutral-600); background: var(--color-neutral-50);">Highest Viewpoint</td>
                    <td style="padding: 12px 20px; color: var(--color-neutral-800);"><strong style="color: #008060;">Pikey Peak Summit (4,065 m / 13,336 ft)</strong> on Day 5</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-100);">
                    <td style="padding: 12px 20px; font-weight: 600; color: var(--color-neutral-600); background: var(--color-neutral-50);">Highest Sleeping Altitude</td>
                    <td style="padding: 12px 20px; color: var(--color-neutral-800);">Pikey Peak Base Camp (~3,640 m / 11,942 ft) on Night 4</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-100);">
                    <td style="padding: 12px 20px; font-weight: 600; color: var(--color-neutral-600); background: var(--color-neutral-50);">Overland Trailhead &bull; Exit</td>
                    <td style="padding: 12px 20px; color: var(--color-neutral-800);">Drive Kathmandu to Dhap Bazaar (~2,850 m) &bull; Drive Phaplu to Kathmandu (~2,469 m)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-100);">
                    <td style="padding: 12px 20px; font-weight: 600; color: var(--color-neutral-600); background: var(--color-neutral-50);">Lukla Flight Status</td>
                    <td style="padding: 12px 20px; color: var(--color-neutral-800);"><strong style="color: #008060;">No domestic flights required</strong> (Avoids Lukla weather cancellations)</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 20px; font-weight: 600; color: var(--color-neutral-600); background: var(--color-neutral-50);">Cultural Highlights</td>
                    <td style="padding: 12px 20px; color: var(--color-neutral-800);">Jhapre Gompa, Thupten Chholing Monastery, Junbesi Sherpa Village, Mani walls &amp; Chortens</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Comprehensive Overview User Content -->
          <div class="user-content-block" style="font-size: 1.05rem; line-height: 1.7; color: var(--color-neutral-700);">
            ${userContentHtml}
          </div>
        </section>
`;
}

module.exports = { getOverviewSection };
