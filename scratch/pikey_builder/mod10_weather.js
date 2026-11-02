// Module 10: Section 8 - Interactive Weather Visualizer & 12-Month Climate Matrix
function getWeatherSection() {
  return `
        <!-- Section 8: Weather & Best Seasons -->
        <section id="section-weather" style="margin-bottom: 50px;">
          <div style="border-bottom: 2px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 24px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #ffedd5; color: #c2410c; border-radius: 8px; font-weight: 700;">08</span>
              <span class="pill pill-copper">Climate &amp; Seasonal Timing</span>
            </div>
            <h2 style="font-size: 1.85rem; font-weight: 800; color: #0f172a; margin: 0;">Weather &amp; Best Seasons</h2>
          </div>

          <p style="font-size: 1rem; color: #475569; line-height: 1.6; margin-bottom: 24px;">
            Because Pikey Peak is located at 4,065 m in the lower Everest ridge system, it experiences slightly milder temperatures than high-altitude Khumbu destinations (like Gorak Shep or Cho La Pass). However, summit mornings are crisp and cold. Explore the interactive visualizer below to inspect monthly temperatures and precipitation.
          </p>

          <!-- Interactive SVG Weather Chart Container -->
          <div id="weather-chart-wrapper" data-trek-key="pikey_peak" class="weather-chart-card" style="margin-bottom: 30px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <!-- Populated dynamically by js/weather-visualizer.js -->
          </div>

          <!-- 4 Season Deep-Dive Cards -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 30px;">
            
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <strong style="color: #0f172a; font-size: 1.1rem;">Spring (Mar &ndash; May)</strong>
                <span style="background: #dcfce7; color: #15803d; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px;">PEAK SEASON</span>
              </div>
              <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 10px;">
                Day: 10°C to 18°C &bull; Night: -2°C to 5°C
              </div>
              <p style="margin: 0; font-size: 0.9rem; color: #334155; line-height: 1.5;">
                Slopes between Jhapre and Base Camp erupt with vibrant red and pink rhododendron blossoms. Days are pleasantly warm and morning skies are crystal clear for sunrise photography.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <strong style="color: #0f172a; font-size: 1.1rem;">Autumn (Sep &ndash; Nov)</strong>
                <span style="background: #dcfce7; color: #15803d; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px;">BEST VISIBILITY</span>
              </div>
              <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 10px;">
                Day: 12°C to 20°C &bull; Night: -5°C to 6°C
              </div>
              <p style="margin: 0; font-size: 0.9rem; color: #334155; line-height: 1.5;">
                The gold standard for Himalayan panoramas. Freshly scrubbed by monsoon rains, atmospheric clarity is at its yearly maximum with deep blue skies and crisp visibility across Everest and Makalu.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <strong style="color: #0f172a; font-size: 1.1rem;">Winter (Dec &ndash; Feb)</strong>
                <span style="background: #e0f2fe; color: #0369a1; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px;">SERENE &amp; CRISP</span>
              </div>
              <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 10px;">
                Day: 5°C to 12°C &bull; Night: -12°C to -2°C
              </div>
              <p style="margin: 0; font-size: 0.9rem; color: #334155; line-height: 1.5;">
                Trails are peaceful and virtually empty. Days are brilliantly clear with snow-dusted ridges, though summit mornings require heavy sub-zero down layers, balaclavas, and insulated mitts.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.04);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <strong style="color: #0f172a; font-size: 1.1rem;">Monsoon (Jun &ndash; Aug)</strong>
                <span style="background: #fef2f2; color: #b91c1c; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px;">WET TRAILS</span>
              </div>
              <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 10px;">
                Day: 16°C to 24°C &bull; Night: 10°C to 15°C
              </div>
              <p style="margin: 0; font-size: 0.9rem; color: #334155; line-height: 1.5;">
                Valleys turn lush emerald green, but frequent rain causes muddy trails, leeches in lower forests, cloudy mountain views, and potential highway landslide delays. Not recommended for panoramic vistas.
              </p>
            </div>

          </div>

          <!-- 12-Month Detailed Climate & Visibility Matrix Table -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
            <div style="background: #f8fafc; padding: 14px 20px; border-bottom: 1px solid #e2e8f0;">
              <h3 style="font-size: 1.1rem; font-weight: 700; color: #0f172a; margin: 0;">Month-by-Month Climate &amp; Visibility Matrix</h3>
            </div>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                <thead>
                  <tr style="background: #f1f5f9; text-align: left; color: #475569;">
                    <th style="padding: 10px 14px; font-weight: 600;">Month</th>
                    <th style="padding: 10px 14px; font-weight: 600;">Avg Day</th>
                    <th style="padding: 10px 14px; font-weight: 600;">Avg Night</th>
                    <th style="padding: 10px 14px; font-weight: 600;">Rain (mm)</th>
                    <th style="padding: 10px 14px; font-weight: 600;">Mountain Visibility</th>
                    <th style="padding: 10px 14px; font-weight: 600;">Trail Status</th>
                    <th style="padding: 10px 14px; font-weight: 600;">Rating</th>
                  </tr>
                </thead>
                <tbody style="color: #334155;">
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 600;">January</td>
                    <td style="padding: 10px 14px;">8°C / 46°F</td>
                    <td style="padding: 10px 14px;">-10°C / 14°F</td>
                    <td style="padding: 10px 14px;">12 mm</td>
                    <td style="padding: 10px 14px;">Excellent / Crisp</td>
                    <td style="padding: 10px 14px;">Cold, occasional frost / snow</td>
                    <td style="padding: 10px 14px;">★★★☆☆</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 10px 14px; font-weight: 600;">February</td>
                    <td style="padding: 10px 14px;">10°C / 50°F</td>
                    <td style="padding: 10px 14px;">-7°C / 19°F</td>
                    <td style="padding: 10px 14px;">18 mm</td>
                    <td style="padding: 10px 14px;">Very Good</td>
                    <td style="padding: 10px 14px;">Warming gradually</td>
                    <td style="padding: 10px 14px;">★★★☆☆</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 600;">March</td>
                    <td style="padding: 10px 14px;">14°C / 57°F</td>
                    <td style="padding: 10px 14px;">-2°C / 28°F</td>
                    <td style="padding: 10px 14px;">25 mm</td>
                    <td style="padding: 10px 14px;">Excellent</td>
                    <td style="padding: 10px 14px;">Rhododendron buds opening</td>
                    <td style="padding: 10px 14px;">★★★★☆</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 10px 14px; font-weight: 600;">April</td>
                    <td style="padding: 10px 14px;">17°C / 63°F</td>
                    <td style="padding: 10px 14px;">2°C / 36°F</td>
                    <td style="padding: 10px 14px;">45 mm</td>
                    <td style="padding: 10px 14px;">Outstanding</td>
                    <td style="padding: 10px 14px;">Peak rhododendron bloom</td>
                    <td style="padding: 10px 14px;">★★★★★</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 600;">May</td>
                    <td style="padding: 10px 14px;">19°C / 66°F</td>
                    <td style="padding: 10px 14px;">5°C / 41°F</td>
                    <td style="padding: 10px 14px;">80 mm</td>
                    <td style="padding: 10px 14px;">Good / Afternoon clouds</td>
                    <td style="padding: 10px 14px;">Lush, warm hiking</td>
                    <td style="padding: 10px 14px;">★★★★☆</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 10px 14px; font-weight: 600;">June</td>
                    <td style="padding: 10px 14px;">21°C / 70°F</td>
                    <td style="padding: 10px 14px;">11°C / 52°F</td>
                    <td style="padding: 10px 14px;">210 mm</td>
                    <td style="padding: 10px 14px;">Cloud obscured</td>
                    <td style="padding: 10px 14px;">Monsoon rain arrives</td>
                    <td style="padding: 10px 14px;">★★☆☆☆</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 600;">July</td>
                    <td style="padding: 10px 14px;">20°C / 68°F</td>
                    <td style="padding: 10px 14px;">12°C / 54°F</td>
                    <td style="padding: 10px 14px;">340 mm</td>
                    <td style="padding: 10px 14px;">Poor</td>
                    <td style="padding: 10px 14px;">Heavy rain, muddy, leeches</td>
                    <td style="padding: 10px 14px;">★☆☆☆☆</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 10px 14px; font-weight: 600;">August</td>
                    <td style="padding: 10px 14px;">20°C / 68°F</td>
                    <td style="padding: 10px 14px;">12°C / 54°F</td>
                    <td style="padding: 10px 14px;">310 mm</td>
                    <td style="padding: 10px 14px;">Poor / Occasional breaks</td>
                    <td style="padding: 10px 14px;">Heavy rain, green flora</td>
                    <td style="padding: 10px 14px;">★☆☆☆☆</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 600;">September</td>
                    <td style="padding: 10px 14px;">18°C / 64°F</td>
                    <td style="padding: 10px 14px;">8°C / 46°F</td>
                    <td style="padding: 10px 14px;">140 mm</td>
                    <td style="padding: 10px 14px;">Improving rapidly</td>
                    <td style="padding: 10px 14px;">Post-monsoon clearing</td>
                    <td style="padding: 10px 14px;">★★★★☆</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9; background: #fafafa;">
                    <td style="padding: 10px 14px; font-weight: 600;">October</td>
                    <td style="padding: 10px 14px;">16°C / 61°F</td>
                    <td style="padding: 10px 14px;">2°C / 36°F</td>
                    <td style="padding: 10px 14px;">30 mm</td>
                    <td style="padding: 10px 14px;">Flawless / 360° Clarity</td>
                    <td style="padding: 10px 14px;">Dry, stable, perfect trails</td>
                    <td style="padding: 10px 14px;">★★★★★</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 600;">November</td>
                    <td style="padding: 10px 14px;">12°C / 54°F</td>
                    <td style="padding: 10px 14px;">-3°C / 27°F</td>
                    <td style="padding: 10px 14px;">10 mm</td>
                    <td style="padding: 10px 14px;">Crystal Clear</td>
                    <td style="padding: 10px 14px;">Crisp, dry, quiet trails</td>
                    <td style="padding: 10px 14px;">★★★★★</td>
                  </tr>
                  <tr style="background: #fafafa;">
                    <td style="padding: 10px 14px; font-weight: 600;">December</td>
                    <td style="padding: 10px 14px;">9°C / 48°F</td>
                    <td style="padding: 10px 14px;">-8°C / 18°F</td>
                    <td style="padding: 10px 14px;">8 mm</td>
                    <td style="padding: 10px 14px;">Very Clear</td>
                    <td style="padding: 10px 14px;">Cold nights, frost on ridge</td>
                    <td style="padding: 10px 14px;">★★★☆☆</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
`;
}

module.exports = { getWeatherSection };

