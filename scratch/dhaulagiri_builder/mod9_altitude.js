// Module 9: Section 7 - Interactive Altitude Visualizer & Route Elevation Profile for Dhaulagiri Circuit Trek
function getAltitudeSection() {
  return `
        <!-- Section 7: Altitude Profile & Acclimatization -->
        <section id="section-altitude-profile" class="trek-detail-section">
          <div class="details-title-wrapper" style="margin-bottom: 24px;">
            <h2 class="details-main-title">Altitude Profile of Dhaulagiri Circuit Trek</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
          </div>

          <p style="font-size: 1.02rem; color: #475569; line-height: 1.65; margin-bottom: 24px;">
            The Dhaulagiri Circuit Trek features one of the most dramatic elevation progressions in the Himalayas, climbing from the low subtropics of Beni (836 m) to French Pass (5,360 m / 17,585 ft) and sleeping at Hidden Valley (5,200 m). The interactive chart below tracks daily sleeping elevations, net gains, and mandatory acclimatization stops across the 20-day journey. Toggle units between meters and feet:
          </p>

          <!-- Interactive SVG/Canvas Altitude Chart Container -->
          <div id="altitude-chart-wrapper" data-trek-key="dhaulagiri_circuit" class="altitude-chart-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 30px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);"></div>

          <!-- Altitude Stages Breakdown Table -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; margin-bottom: 28px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <div style="background: #f8fafc; padding: 14px 18px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
              <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--color-primary-navy); margin: 0;">Four Elevation Stages of the Dhaulagiri Circuit</h3>
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--color-copper-orange); background: #fff7ed; padding: 2px 8px; border-radius: 10px;">Elevation Analysis</span>
            </div>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.88rem;">
                <thead>
                  <tr style="background: #fafafa; border-bottom: 2px solid #e2e8f0; color: var(--color-primary-navy);">
                    <th style="padding: 10px 14px; font-weight: 700;">Expedition Stage</th>
                    <th style="padding: 10px 14px; font-weight: 700;">Elevation Range</th>
                    <th style="padding: 10px 14px; font-weight: 700;">Key Settlements &amp; Camps</th>
                    <th style="padding: 10px 14px; font-weight: 700;">Physiological &amp; Trail Demands</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">1. Lower Valley Approach</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="836">836 m</span> to <span data-altitude-m="2520">2,520 m</span></td>
                    <td style="padding: 10px 14px; color: #334155;">Beni, Babiyachaur, Dharapani, Muri, Boghara, Dobang</td>
                    <td style="padding: 10px 14px; color: #64748b;">Subtropical climate, terraced farmland, stone staircases, building walking rhythm and leg endurance.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">2. Upper Valley Alpine Ascent</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="3110">3,110 m</span> to <span data-altitude-m="4750">4,750 m</span></td>
                    <td style="padding: 10px 14px; color: #334155;">Choriban Khola, Italian Base Camp, Glacier Camp, Dhaulagiri Base Camp</td>
                    <td style="padding: 10px 14px; color: #64748b;">Transition to supported camping, walking on Chhonbardan Glacier moraine; mandatory rest days at 3,660 m and 4,750 m.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f1f5f9;">
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">3. Extreme High-Pass Crossings</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="4750">4,750 m</span> to <span data-altitude-m="5360">5,360 m</span></td>
                    <td style="padding: 10px 14px; color: #334155;">French Pass (5,360 m), Hidden Valley (5,200 m), Dhampus Pass (5,250 m)</td>
                    <td style="padding: 10px 14px; color: #64748b;">Alpine pre-dawn starts, sub-zero snow traverses, 50% sea-level oxygen, coldest camping night of expedition (-20°C).</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 14px; font-weight: 700; color: var(--color-copper-orange);">4. Kali Gandaki Valley Descent</td>
                    <td style="padding: 10px 14px;"><span data-altitude-m="5250">5,250 m</span> down to <span data-altitude-m="822">822 m</span></td>
                    <td style="padding: 10px 14px; color: #334155;">Yak Kharka (3,680 m), Marpha, Jomsom (2,720 m), Pokhara (822 m)</td>
                    <td style="padding: 10px 14px; color: #64748b;">Sustained 1,550 m descent on scree slopes, return to oxygen-rich air, Thakali cultural villages, scenic gorge flight.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Acclimatization Safety Card -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
              <span class="pill pill-copper" style="font-size: 0.75rem; text-transform: uppercase; font-weight: 800;">Medical Assurance</span>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--color-primary-navy); margin: 0;">Why Acclimatization Matters on the Dhaulagiri Circuit</h3>
            </div>
            <p style="color: #475569; font-size: 0.92rem; line-height: 1.65; margin-bottom: 12px;">
              Ascending safely to 5,360 m cannot be rushed. The human body requires gradual staging to trigger physiologic adaptations: increasing hematocrit (red blood cell volume), hyperventilating to blow off carbon dioxide, and stabilizing sleeping heart rates.
            </p>
            <p style="color: #475569; font-size: 0.92rem; line-height: 1.65; margin: 0;">
              Our 20-day plan includes two built-in acclimatization rest days: <strong>Day 11 at Italian Base Camp (3,660 m)</strong> and <strong>Day 14 at Dhaulagiri Base Camp (4,750 m)</strong>. Each morning and evening, our lead Sherpa guide records your blood oxygen saturation (SpO2) and pulse using a medical-grade pulse oximeter. Comprehensive wilderness medical kits and portable oxygen are carried on all high passes.
            </p>
          </div>

        </section>
`;
}

module.exports = { getAltitudeSection };

