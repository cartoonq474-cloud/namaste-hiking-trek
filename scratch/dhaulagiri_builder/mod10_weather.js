// Module 10: Section 8 - Weather & Seasonal Conditions for Dhaulagiri Circuit Trek
function getWeatherSection() {
  return `
        <!-- Section 8: Weather -->
        <section id="section-weather" class="trek-detail-section">
          <div class="details-title-wrapper" style="margin-bottom: 24px;">
            <h2 class="details-main-title">Weather on the Dhaulagiri Circuit Trek</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
          </div>

          <p style="font-size: 1.02rem; color: #475569; line-height: 1.65; margin-bottom: 24px;">
            Weather across the Dhaulagiri massif transitions dramatically from temperate sub-tropical conditions in the lower Myagdi Valley to severe sub-zero high-altitude alpine weather at Dhaulagiri Base Camp (4,750 m) and Hidden Valley (5,200 m). Explore monthly temperature ranges and daily expedition variations below:
          </p>

          <!-- Interactive Weather Visualizer Container -->
          <div id="weather-chart-wrapper" data-trek-key="dhaulagiri_circuit" class="weather-chart-card" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 30px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);"></div>

          <!-- Seasonal Weather Breakdown Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin-bottom: 24px;">
            
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span style="font-size: 0.8rem; font-weight: 700; color: #15803d; background: #dcfce7; padding: 2px 8px; border-radius: 12px;">Peak Season</span>
                <strong style="color: var(--color-primary-navy); font-size: 1.05rem;">Autumn (Late Sept – Late Nov)</strong>
              </div>
              <p style="color: #64748b; font-size: 0.9rem; line-height: 1.6; margin: 0;">
                The finest climbing window. Clear post-monsoon skies offer breathtaking visibility, stable snow conditions on French Pass, and optimal flight operations at Jomsom. Daytime temperatures at base camps average 0°C to 6°C; nights drop to -10°C to -18°C.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span style="font-size: 0.8rem; font-weight: 700; color: #b45309; background: #fef3c7; padding: 2px 8px; border-radius: 12px;">Flora &amp; Warm Days</span>
                <strong style="color: var(--color-primary-navy); font-size: 1.05rem;">Spring (April – Late May)</strong>
              </div>
              <p style="color: #64748b; font-size: 0.9rem; line-height: 1.6; margin: 0;">
                Longer, warmer daylight hours with blooming rhododendrons in the lower Myagdi gorge. Daytime base camp temperatures range from 4°C to 10°C; nights drop to -8°C to -14°C. French Pass retains winter snowpack requiring microspikes or crampons.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span style="font-size: 0.8rem; font-weight: 700; color: #dc2626; background: #fee2e2; padding: 2px 8px; border-radius: 12px;">Not Recommended</span>
                <strong style="color: var(--color-primary-navy); font-size: 1.05rem;">Monsoon (June – August)</strong>
              </div>
              <p style="color: #64748b; font-size: 0.9rem; line-height: 1.6; margin: 0;">
                Heavy rainfall causes landslides, swollen river crossings, and dense leeches throughout the Myagdi Valley. Dense cloud cover blocks mountain views, and passes become prone to rockfalls and avalanches.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span style="font-size: 0.8rem; font-weight: 700; color: #dc2626; background: #fee2e2; padding: 2px 8px; border-radius: 12px;">Impassable Passes</span>
                <strong style="color: var(--color-primary-navy); font-size: 1.05rem;">Winter (December – February)</strong>
              </div>
              <p style="color: #64748b; font-size: 0.9rem; line-height: 1.6; margin: 0;">
                Extreme winter blizzards deposit heavy snowdrifts exceeding 2 meters across French Pass and Hidden Valley. Temperatures plummet below -30°C with severe frostbite danger; passes are virtually impassable.
              </p>
            </div>

          </div>

        </section>
`;
}

module.exports = { getWeatherSection };

