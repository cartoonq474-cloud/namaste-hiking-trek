// Module 10 Full: Section 8 - Weather Visualizer & Comprehensive Seasonal Guide
const { getLineRange, linesToHtml } = require('./content_parser.js');

function getWeatherSection() {
  // Parse user content on Best Time & Seasons (lines 1358 to 1600)
  const weatherHtml = linesToHtml(getLineRange(1358, 1600));

  return `
        <!-- Section 8: Weather & Best Seasons -->
        <section id="section-weather" class="trek-detail-section">
          <div class="details-title-wrapper" style="margin-bottom: 24px;">
            <h2 class="details-main-title">Weather on the Pikey Peak Trek</h2>
            <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
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

          <!-- Comprehensive Best Time & Seasons User Content -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <div style="border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 20px;">
              <span class="pill pill-copper" style="margin-bottom: 8px;">Seasonal Climate Guide</span>
              <h3 style="font-size: 1.45rem; font-weight: 800; color: #0f172a; margin: 4px 0 0 0;">Comprehensive Seasonal Overview &amp; Photography Guide</h3>
            </div>
            <div class="user-content-block" style="font-size: 0.98rem; line-height: 1.7; color: #334155;">
              ${weatherHtml}
            </div>
          </div>
        </section>
`;
}

module.exports = { getWeatherSection };

