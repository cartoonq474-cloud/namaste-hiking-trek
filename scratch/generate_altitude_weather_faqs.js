const fs = require('fs');

// We will construct the entire altitude, weather, map, booking, reviews, faqs, sidebar, footer, modal and script content.
const code = `module.exports = {
  getAltitudeWeatherFaqsSection: function() {
    return \`
          <!-- Section 7: Altitude Profile -->
          <section id="section-altitude-profile" class="trek-detail-section">

            <h2 class="trek-section-title">Annapurna Base Camp Altitude Profile & Elevation Map</h2>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-top: 12px; margin-bottom: 24px;">
              Visualize the 15-day altitude progression from Kathmandu (<span data-altitude-m="1400">1,400m</span>) and Pokhara (<span data-altitude-m="820">820m</span>) through the Modi Khola canyon to Annapurna Base Camp (<span data-altitude-m="4130">4,130m</span>). Notice how our upper stages (Dovan, Himalaya, Deurali, MBC) limit daily altitude gains to ensure natural physiological adaptation.
            </p>

            <!-- Altitude Visualizer Widget Container -->
            <div id="altitude-visualizer-container" data-trek-key="abc_luxury" style="margin-bottom: 30px;"></div>

            <!-- Complete Altitude Profile Table -->
            <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-sm); overflow-x: auto;">
              <h3 style="font-size: 1.25rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 16px;">15-Day Altitude & Route Progression Reference</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem;">
                <thead>
                  <tr style="background: var(--color-neutral-100); text-align: left; border-bottom: 2px solid var(--color-neutral-300);">
                    <th style="padding: 10px 14px;">Day</th>
                    <th style="padding: 10px 14px;">Overnight Location</th>
                    <th style="padding: 10px 14px;">Sleeping Elevation</th>
                    <th style="padding: 10px 14px;">Daily Role & Terrain Demand</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                    <td style="padding: 10px 14px; font-weight: 700;">Day 1</td>
                    <td style="padding: 10px 14px;">Kathmandu</td>
                    <td style="padding: 10px 14px; color: var(--color-primary-navy); font-weight: 600;">1,400 m / 4,593 ft</td>
                    <td style="padding: 10px 14px;">International arrival, hotel check-in & trek briefing</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                    <td style="padding: 10px 14px; font-weight: 700;">Day 2</td>
                    <td style="padding: 10px 14px;">Pokhara</td>
                    <td style="padding: 10px 14px; color: var(--color-primary-navy); font-weight: 600;">820 m / 2,690 ft</td>
                    <td style="padding: 10px 14px;">Domestic flight & lakeside resort relaxation</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                    <td style="padding: 10px 14px; font-weight: 700;">Day 3</td>
                    <td style="padding: 10px 14px;">Ghandruk</td>
                    <td style="padding: 10px 14px; color: var(--color-primary-navy); font-weight: 600;">2,000 m / 6,561 ft</td>
                    <td style="padding: 10px 14px;">Private 4WD transfer + gentle village walk to boutique lodge</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                    <td style="padding: 10px 14px; font-weight: 700;">Day 4</td>
                    <td style="padding: 10px 14px;">Chhomrong</td>
                    <td style="padding: 10px 14px; color: var(--color-primary-navy); font-weight: 600;">2,150 m / 7,053 ft</td>
                    <td style="padding: 10px 14px;">5–6 hrs trekking; stone steps & Kimrong Khola crossing</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                    <td style="padding: 10px 14px; font-weight: 700;">Day 5</td>
                    <td style="padding: 10px 14px;">Bamboo</td>
                    <td style="padding: 10px 14px; color: var(--color-primary-navy); font-weight: 600;">2,300 m / 7,545 ft</td>
                    <td style="padding: 10px 14px;">5–6 hrs; Chhomrong stairs, climb to Sinuwa & canyon entry</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                    <td style="padding: 10px 14px; font-weight: 700;">Day 6</td>
                    <td style="padding: 10px 14px;">Dovan / Himalaya</td>
                    <td style="padding: 10px 14px; color: var(--color-primary-navy); font-weight: 600;">2,600–2,920 m</td>
                    <td style="padding: 10px 14px;">4–5 hrs; steady ascent through bamboo and oak gorge</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                    <td style="padding: 10px 14px; font-weight: 700;">Day 7</td>
                    <td style="padding: 10px 14px;">Deurali</td>
                    <td style="padding: 10px 14px; color: var(--color-primary-navy); font-weight: 600;">3,200 m / 10,498 ft</td>
                    <td style="padding: 10px 14px;">3–4 hrs; short stage crossing tree line into subalpine zone</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                    <td style="padding: 10px 14px; font-weight: 700;">Day 8</td>
                    <td style="padding: 10px 14px;">Machhapuchhre Base Camp (MBC)</td>
                    <td style="padding: 10px 14px; color: var(--color-primary-navy); font-weight: 600;">3,700 m / 12,139 ft</td>
                    <td style="padding: 10px 14px;">3–4 hrs; entrance into Annapurna Sanctuary gateway</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                    <td style="padding: 10px 14px; font-weight: 700;">Day 9</td>
                    <td style="padding: 10px 14px;">Annapurna Base Camp (ABC)</td>
                    <td style="padding: 10px 14px; color: #dc2626; font-weight: 700;">4,130 m / 13,549 ft</td>
                    <td style="padding: 10px 14px;">2–3 hrs; gentle morning ascent into glacial amphitheater</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                    <td style="padding: 10px 14px; font-weight: 700;">Day 10</td>
                    <td style="padding: 10px 14px;">Bamboo</td>
                    <td style="padding: 10px 14px; color: var(--color-primary-navy); font-weight: 600;">2,300 m / 7,545 ft</td>
                    <td style="padding: 10px 14px;">6–7 hrs; sunrise at ABC, long descent to thick oxygen</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                    <td style="padding: 10px 14px; font-weight: 700;">Day 11</td>
                    <td style="padding: 10px 14px;">Jhinu Danda</td>
                    <td style="padding: 10px 14px; color: var(--color-primary-navy); font-weight: 600;">1,780 m / 5,839 ft</td>
                    <td style="padding: 10px 14px;">5 hrs; climb through Chhomrong, descent to riverside hot springs</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                    <td style="padding: 10px 14px; font-weight: 700;">Day 12</td>
                    <td style="padding: 10px 14px;">Pokhara</td>
                    <td style="padding: 10px 14px; color: var(--color-primary-navy); font-weight: 600;">820 m / 2,690 ft</td>
                    <td style="padding: 10px 14px;">Suspension bridge walk, private 4WD drive & luxury hotel</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                    <td style="padding: 10px 14px; font-weight: 700;">Day 13</td>
                    <td style="padding: 10px 14px;">Pokhara (Leisure)</td>
                    <td style="padding: 10px 14px; color: var(--color-primary-navy); font-weight: 600;">820 m / 2,690 ft</td>
                    <td style="padding: 10px 14px;">Boating on Phewa Lake, spa wellness & mountain views</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--color-neutral-200);">
                    <td style="padding: 10px 14px; font-weight: 700;">Day 14</td>
                    <td style="padding: 10px 14px;">Kathmandu</td>
                    <td style="padding: 10px 14px; color: var(--color-primary-navy); font-weight: 600;">1,400 m / 4,593 ft</td>
                    <td style="padding: 10px 14px;">Scenic flight to KTM, shopping & celebratory farewell dinner</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 14px; font-weight: 700;">Day 15</td>
                    <td style="padding: 10px 14px;">Kathmandu (Departure)</td>
                    <td style="padding: 10px 14px; color: var(--color-primary-navy); font-weight: 600;">1,400 m / 4,593 ft</td>
                    <td style="padding: 10px 14px;">Private airport transfer for international flight home</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </section>

          <!-- Section 8: Weather & Seasons -->
          <section id="section-weather" class="trek-detail-section">

            <h2 class="trek-section-title">Annapurna Base Camp Weather, Temperatures & Best Seasons</h2>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-top: 12px; margin-bottom: 24px;">
              Because the trail climbs from warm subtropical river valleys into a high-alpine cirque, temperatures vary dramatically. Explore month-by-month averages, rainfall, and trekking suitability below.
            </p>

            <!-- Weather Visualizer Widget Container -->
            <div id="weather-visualizer-container" data-trek-key="abc_luxury" style="margin-bottom: 30px;"></div>

            <!-- Season Breakdown Cards -->
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;" class="seasons-grid">
              
              <!-- Spring -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-sm);">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                  <h3 style="font-size: 1.2rem; color: var(--color-primary-navy); font-weight: 700; margin: 0;">Spring (March – May)</h3>
                  <span style="background: #dcfce7; color: #166534; font-size: 0.78rem; font-weight: 700; padding: 4px 10px; border-radius: 999px;">Peak Season</span>
                </div>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 12px;">
                  Rhododendron forests burst into vibrant red and pink blooms across Ghandruk and Chhomrong. Daytime temperatures at base camp range from 0°C to 12°C, dropping to -6°C at night. Clear morning skies provide crystalline mountain panoramas.
                </p>
                <div style="font-size: 0.85rem; color: var(--color-neutral-500); display: flex; gap: 16px;">
                  <span><strong>Daytime:</strong> 10°C to 18°C (Lower)</span>
                  <span><strong>Night (ABC):</strong> -4°C to -8°C</span>
                </div>
              </div>

              <!-- Autumn -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-sm);">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                  <h3 style="font-size: 1.2rem; color: var(--color-primary-navy); font-weight: 700; margin: 0;">Autumn (Sept – Nov)</h3>
                  <span style="background: #dcfce7; color: #166534; font-size: 0.78rem; font-weight: 700; padding: 4px 10px; border-radius: 999px;">Best Visibility</span>
                </div>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 12px;">
                  The premier trekking season in Nepal. Post-monsoon atmospheric clarity yields unrivaled mountain vistas. Moderate temperatures make walking comfortable, with daytime highs around 8°C–14°C at ABC and crisp nights down to -10°C in November.
                </p>
                <div style="font-size: 0.85rem; color: var(--color-neutral-500); display: flex; gap: 16px;">
                  <span><strong>Daytime:</strong> 12°C to 20°C (Lower)</span>
                  <span><strong>Night (ABC):</strong> -5°C to -10°C</span>
                </div>
              </div>

              <!-- Winter -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-sm);">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                  <h3 style="font-size: 1.2rem; color: var(--color-primary-navy); font-weight: 700; margin: 0;">Winter (Dec – Feb)</h3>
                  <span style="background: #e0f2fe; color: #0369a1; font-size: 0.78rem; font-weight: 700; padding: 4px 10px; border-radius: 999px;">Crisp & Quiet</span>
                </div>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 12px;">
                  Crisp blue skies and remarkably quiet trails. Nights at base camp become bitterly cold (-12°C to -18°C), and snow may accumulate between Deurali and ABC. Our 4-season down sleeping bags and heated city stays make winter luxury trekking very rewarding.
                </p>
                <div style="font-size: 0.85rem; color: var(--color-neutral-500); display: flex; gap: 16px;">
                  <span><strong>Daytime:</strong> 4°C to 8°C (ABC)</span>
                  <span><strong>Night (ABC):</strong> -12°C to -18°C</span>
                </div>
              </div>

              <!-- Monsoon -->
              <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-sm);">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                  <h3 style="font-size: 1.2rem; color: var(--color-primary-navy); font-weight: 700; margin: 0;">Monsoon (June – August)</h3>
                  <span style="background: #fee2e2; color: #b91c1c; font-size: 0.78rem; font-weight: 700; padding: 4px 10px; border-radius: 999px;">Rain & Clouds</span>
                </div>
                <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 12px;">
                  Heavy monsoon downpours bring leeches, muddy stone stairs, and frequent cloud cover obscuring peaks. Flight delays between Kathmandu and Pokhara are common. We generally advise booking in Spring or Autumn for the ultimate luxury experience.
                </p>
                <div style="font-size: 0.85rem; color: var(--color-neutral-500); display: flex; gap: 16px;">
                  <span><strong>Daytime:</strong> 16°C to 24°C (Rainy)</span>
                  <span><strong>Night (ABC):</strong> 2°C to 5°C</span>
                </div>
              </div>

            </div>

          </section>

          <!-- Section 9: Trekking Route Map -->
          <section id="section-map" class="trek-detail-section">
            <div class="details-title-wrapper" style="margin-bottom: 24px;">
              <h2 class="details-main-title">Annapurna Base Camp Trek Map</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
            </div>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px;">
              Follow the route from the tranquil shores of Phewa Lake in Pokhara through terraced Gurung villages, the deep Modi Khola river canyon, and up into the glaciated amphitheater of the Annapurna Sanctuary.
            </p>

            <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-sm); margin-bottom: 35px;">
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; text-align: center;">
                <svg viewBox="0 0 700 320" style="width: 100%; height: auto; max-height: 340px;" aria-hidden="true">
                  <!-- Trail path -->
                  <path d="M 60 270 Q 150 240 220 200 T 320 180 T 400 150 T 480 110 T 560 70 T 640 40" fill="none" stroke="#10b981" stroke-width="4" stroke-dasharray="8 4"/>
                  <!-- Return path -->
                  <path d="M 640 40 Q 560 80 480 120 T 400 160 T 320 190 Q 260 220 220 260 L 150 280" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4 4"/>
                  
                  <!-- Waypoint Nodes -->
                  <circle cx="60" cy="270" r="7" fill="#0C2B4E"/>
                  <text x="60" y="295" font-size="11" font-weight="bold" fill="#0C2B4E" text-anchor="middle">Pokhara (820m)</text>
                  
                  <circle cx="220" cy="200" r="7" fill="#10B981"/>
                  <text x="220" y="185" font-size="11" font-weight="bold" fill="#0C2B4E" text-anchor="middle">Ghandruk (2,000m)</text>
                  
                  <circle cx="320" cy="180" r="7" fill="#10B981"/>
                  <text x="320" y="165" font-size="11" font-weight="bold" fill="#0C2B4E" text-anchor="middle">Chhomrong (2,150m)</text>
                  
                  <circle cx="400" cy="150" r="6" fill="#10B981"/>
                  <text x="400" y="135" font-size="10" font-weight="bold" fill="#0C2B4E" text-anchor="middle">Bamboo (2,300m)</text>

                  <circle cx="480" cy="110" r="7" fill="#2563eb"/>
                  <text x="480" y="95" font-size="11" font-weight="bold" fill="#0C2B4E" text-anchor="middle">Deurali (3,200m)</text>

                  <circle cx="560" cy="70" r="7" fill="#2563eb"/>
                  <text x="560" y="55" font-size="11" font-weight="bold" fill="#0C2B4E" text-anchor="middle">MBC (3,700m)</text>

                  <circle cx="640" cy="40" r="9" fill="#dc2626"/>
                  <text x="640" y="25" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">ABC (4,130m)</text>

                  <circle cx="220" cy="260" r="7" fill="#d97706"/>
                  <text x="220" y="282" font-size="11" font-weight="bold" fill="#d97706" text-anchor="middle">Jhinu Hot Springs</text>
                </svg>

                <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 16px;">
                  <span style="font-size: 0.85rem; color: #166534; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
                    <span style="width: 12px; height: 4px; background: #10b981; display: inline-block;"></span> Ascent Corridor
                  </span>
                  <span style="font-size: 0.85rem; color: #b45309; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
                    <span style="width: 12px; height: 4px; background: #f59e0b; display: inline-block;"></span> Jhinu Exit Corridor
                  </span>
                  <span style="font-size: 0.85rem; color: #dc2626; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: #dc2626; display: inline-block;"></span> Highest Point: ABC 4,130m
                  </span>
                </div>
              </div>
            </div>
          </section>

          <!-- Section 10: Booking Calculator Redirect Link -->
          <section id="section-booking" class="trek-detail-section">
            <h2 class="trek-section-title">Book This Trek</h2>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 16px;">
              We offer standard group departures as well as custom private itineraries. Use the <strong>Booking Sidebar</strong> widget located on the right side of this page to view group discounts and submit your reservation request.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin-bottom: 24px;">
              Once you have selected your dates and group size, click the <strong>Book Now</strong> or <strong>Make an Enquiry</strong> button. Our lead Himalayan coordinators will get back to you within 4 hours with availability and tailored trip documents!
            </p>
            <div style="display: flex; gap: 14px; flex-wrap: wrap;">
              <button type="button" class="btn open-inquiry-btn" data-trek-title="Annapurna Base Camp Luxury Trek (15 Days)" style="background: #008060; color: #FFFFFF; padding: 12px 28px; border-radius: 50px; font-weight: 700; border: none; cursor: pointer;">
                Open Booking Form
              </button>
              <a href="https://wa.me/9779800000000?text=Hello%20Namaste%20Hiking%20Trek,%20I%20am%20inquiring%20about%20the%20Annapurna%20Base%20Camp%20Luxury%20Trek" target="_blank" rel="noopener" class="btn" style="background: #25D366; color: #FFFFFF; padding: 12px 28px; border-radius: 50px; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.29C8.95 7.29 8.68 7.35 8.46 7.59C8.24 7.83 7.62 8.41 7.62 9.58C7.62 10.74 8.47 11.87 8.59 12.03C8.71 12.19 10.25 14.56 12.61 15.58C13.18 15.82 13.61 15.97 13.96 16.08C14.53 16.26 15.05 16.24 15.46 16.18C15.92 16.11 16.87 15.6 17.07 15.04C17.27 14.47 17.27 13.99 17.21 13.89C17.15 13.79 17 13.73 16.74 13.6C16.48 13.47 15.22 12.85 14.99 12.76C14.76 12.68 14.59 12.64 14.42 12.9C14.25 13.15 13.77 13.73 13.62 13.9C13.48 14.07 13.33 14.09 13.07 13.96C12.81 13.84 11.98 13.56 11 12.68C10.24 12.01 9.72 11.17 9.57 10.92C9.43 10.66 9.56 10.53 9.69 10.4C9.8 10.28 9.94 10.1 10.07 9.95C10.2 9.8 10.24 9.69 10.33 9.52C10.41 9.36 10.37 9.21 10.31 9.09C10.25 8.96 9.76 7.76 9.56 7.27C9.36 6.79 9.16 6.85 9.01 6.85L9.11 7.29Z"/></svg>
                WhatsApp Advisor
              </a>
            </div>
          </section>

          <!-- Section 11: Reviews (Flagship 3-Pill Switcher Layout) -->
          <section id="section-reviews" class="trek-detail-section">
            <h2 class="trek-section-title" style="font-size: 2.2rem; margin-bottom: 8px; text-align: left;">Best Himalayan Trekking Reviews</h2>
            <p style="color: var(--color-neutral-600); font-size: 1.05rem; margin-bottom: 28px; text-align: left; max-width: 100%; margin-left: 0; margin-right: 0;">
              Over 15,000 adventure seekers have explored Annapurna, Everest, and Manaslu with Namaste Hiking Trek.
            </p>

            <!-- 3-Pill Tab Switcher Navigation -->
            <div class="review-tabs-container">
              <button type="button" class="review-tab-btn active" data-target="reviews-video-pane">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M23 7l-7 5 7 5V7z"></path>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
                Video Reviews
              </button>
              <button type="button" class="review-tab-btn" data-target="reviews-customer-pane">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Customer Reviews
              </button>
              <button type="button" class="review-tab-btn" data-target="reviews-platform-pane">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#EAB308" stroke="#EAB308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Platform Reviews
              </button>
            </div>

            <!-- Tab 1: Video Reviews Grid -->
            <div id="reviews-video-pane" class="review-pane-content active">
              <div class="video-reviews-grid">
                <!-- Card 1: David -->
                <div class="video-review-card" data-video-url="https://www.w3schools.com/html/mov_bbb.mp4" data-trekker="David" data-trek="Annapurna Luxury Trek">
                  <img src="../../images/video-thumb-david.png" alt="David Video Review" class="video-card-bg">
                  <div class="video-card-badge-top">
                    <span class="video-rating-pill"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2"/></svg> 4.9</span>
                    <span class="video-date-pill">14 Oct</span>
                  </div>
                  <button type="button" class="video-play-btn" aria-label="Play video review">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#0C2B4E" stroke="none" aria-hidden="true">
                      <polygon points="8 5 19 12 8 19 8 5"></polygon>
                    </svg>
                  </button>
                  <div class="video-card-user-info">
                    <div class="video-user-avatar">
                      <img src="../../images/video-thumb-david.png" alt="David Avatar">
                      <span class="verified-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></span>
                    </div>
                    <div class="video-user-meta">
                      <div class="video-user-name">David <span class="blue-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></span></div>
                      <div class="video-user-trek">Annapurna Base Camp Luxury</div>
                    </div>
                  </div>
                </div>

                <!-- Card 2: Emma -->
                <div class="video-review-card" data-video-url="https://www.w3schools.com/html/mov_bbb.mp4" data-trekker="Emma" data-trek="Annapurna Luxury Experience">
                  <img src="../../images/video-thumb-emma.png" alt="Emma Video Review" class="video-card-bg">
                  <div class="video-card-badge-top">
                    <span class="video-rating-pill"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2"/></svg> 5.0</span>
                    <span class="video-date-pill">22 Nov</span>
                  </div>
                  <button type="button" class="video-play-btn" aria-label="Play video review">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#0C2B4E" stroke="none" aria-hidden="true">
                      <polygon points="8 5 19 12 8 19 8 5"></polygon>
                    </svg>
                  </button>
                  <div class="video-card-user-info">
                    <div class="video-user-avatar">
                      <img src="../../images/video-thumb-emma.png" alt="Emma Avatar">
                      <span class="verified-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></span>
                    </div>
                    <div class="video-user-meta">
                      <div class="video-user-name">Emma <span class="blue-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></span></div>
                      <div class="video-user-trek">Annapurna Sanctuary VIP</div>
                    </div>
                  </div>
                </div>

                <!-- Card 3: Liam -->
                <div class="video-review-card" data-video-url="https://www.w3schools.com/html/mov_bbb.mp4" data-trekker="Liam" data-trek="Sanctuary Guided Expedition">
                  <img src="../../images/video-thumb-liam.png" alt="Liam Video Review" class="video-card-bg">
                  <div class="video-card-badge-top">
                    <span class="video-rating-pill"><svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981" stroke="none" style="display:inline-block; vertical-align:middle;" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2"/></svg> 4.9</span>
                    <span class="video-date-pill">04 Apr</span>
                  </div>
                  <button type="button" class="video-play-btn" aria-label="Play video review">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#0C2B4E" stroke="none" aria-hidden="true">
                      <polygon points="8 5 19 12 8 19 8 5"></polygon>
                    </svg>
                  </button>
                  <div class="video-card-user-info">
                    <div class="video-user-avatar">
                      <img src="../../images/video-thumb-liam.png" alt="Liam Avatar">
                      <span class="verified-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></span>
                    </div>
                    <div class="video-user-meta">
                      <div class="video-user-name">Liam <span class="blue-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg></span></div>
                      <div class="video-user-trek">Himalayan Sanctuary Trek</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab 2: Customer Reviews Grid -->
            <div id="reviews-customer-pane" class="review-pane-content" style="display: none;">
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;" class="reviews-grid">
                
                <!-- Review 1 -->
                <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <div style="display: flex; gap: 3px; color: #10b981; margin-bottom: 12px;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#10b981" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2"/></svg>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#10b981" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2"/></svg>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#10b981" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2"/></svg>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#10b981" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2"/></svg>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#10b981" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2"/></svg>
                    </div>
                    <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); font-weight: 700; margin: 0 0 8px 0;">"Flawless Luxury & Stunning Sanctuary Views"</h4>
                    <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0 0 16px 0;">
                      "We wanted to see Annapurna Base Camp without roughing it in crowded dorms. Namaste Hiking Trek arranged exquisite boutique stays in Kathmandu and Pokhara, plus the best lodge rooms in Ghandruk. Staging the climb across Deurali and MBC made sleeping at 4,130m feel effortless. Our guide Pasang was pure gold!"
                    </p>
                  </div>
                  <div style="border-top: 1px solid var(--color-neutral-100); padding-top: 12px; display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-weight: 700; font-size: 0.9rem; color: var(--color-primary-navy);">Eleanor & David Vance</span>
                    <span style="font-size: 0.8rem; color: var(--color-neutral-500);">United Kingdom • Oct 2025</span>
                  </div>
                </div>

                <!-- Review 2 -->
                <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <div style="display: flex; gap: 3px; color: #10b981; margin-bottom: 12px;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#10b981" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2"/></svg>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#10b981" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2"/></svg>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#10b981" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2"/></svg>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#10b981" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2"/></svg>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#10b981" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2"/></svg>
                    </div>
                    <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); font-weight: 700; margin: 0 0 8px 0;">"The Best Decision We Made for Our Honeymoon"</h4>
                    <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0 0 16px 0;">
                      "Taking the private departure gave us total freedom over our pace. Flying between Kathmandu and Pokhara saved days of travel stress. The morning light hitting Fishtail Mountain from our Ghandruk balcony was unforgettable. Cannot recommend this company enough!"
                    </p>
                  </div>
                  <div style="border-top: 1px solid var(--color-neutral-100); padding-top: 12px; display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-weight: 700; font-size: 0.9rem; color: var(--color-primary-navy);">Marcus & Sarah Klein</span>
                    <span style="font-size: 0.8rem; color: var(--color-neutral-500);">Germany • Nov 2025</span>
                  </div>
                </div>

                <!-- Review 3 -->
                <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <div style="display: flex; gap: 3px; color: #10b981; margin-bottom: 12px;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#10b981" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2"/></svg>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#10b981" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2"/></svg>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#10b981" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2"/></svg>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#10b981" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2"/></svg>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#10b981" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2"/></svg>
                    </div>
                    <h4 style="font-size: 1.1rem; color: var(--color-primary-navy); font-weight: 700; margin: 0 0 8px 0;">"Safe, Professional & Deeply Authentic"</h4>
                    <p style="font-size: 0.92rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0 0 16px 0;">
                      "As a solo traveler over 55, safety was my highest priority. Daily oximeter readings and unhurried pacing gave me absolute confidence. Standing in the Annapurna amphitheater at sunrise brought tears to my eyes. The team treated me like family."
                    </p>
                  </div>
                  <div style="border-top: 1px solid var(--color-neutral-100); padding-top: 12px; display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-weight: 700; font-size: 0.9rem; color: var(--color-primary-navy);">Jennifer Thorpe</span>
                    <span style="font-size: 0.8rem; color: var(--color-neutral-500);">Australia • Apr 2025</span>
                  </div>
                </div>

              </div>
            </div>

            <!-- Tab 3: Platform Reviews Pane -->
            <div id="reviews-platform-pane" class="review-pane-content" style="display: none;">
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;" class="reviews-grid">
                
                <!-- TripAdvisor -->
                <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-sm); text-align: center;">
                  <div style="width: 50px; height: 50px; margin: 0 auto 12px auto; border-radius: 50%; background: #00aa6c; color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.2rem;">TA</div>
                  <h4 style="margin: 0 0 4px 0; font-size: 1.2rem; color: var(--color-primary-navy);">TripAdvisor</h4>
                  <div style="color: #00aa6c; font-weight: 800; font-size: 1.4rem; margin-bottom: 6px;">5.0 / 5.0</div>
                  <p style="font-size: 0.88rem; color: var(--color-neutral-600); margin: 0;">Ranked #1 for Luxury Treks in Pokhara & Annapurna Region with 350+ five-star verified reviews.</p>
                </div>

                <!-- Google Reviews -->
                <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-sm); text-align: center;">
                  <div style="width: 50px; height: 50px; margin: 0 auto 12px auto; border-radius: 50%; background: #4285F4; color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.2rem;">G</div>
                  <h4 style="margin: 0 0 4px 0; font-size: 1.2rem; color: var(--color-primary-navy);">Google Reviews</h4>
                  <div style="color: #4285F4; font-weight: 800; font-size: 1.4rem; margin-bottom: 6px;">4.9 / 5.0</div>
                  <p style="font-size: 0.88rem; color: var(--color-neutral-600); margin: 0;">Verified traveler ratings praising our knowledgeable Sherpa team, smooth flight logistics, and boutique accommodations.</p>
                </div>

                <!-- Trustpilot -->
                <div style="background: #ffffff; border: 1px solid var(--color-neutral-200); border-radius: var(--radius-md); padding: 24px; box-shadow: var(--shadow-sm); text-align: center;">
                  <div style="width: 50px; height: 50px; margin: 0 auto 12px auto; border-radius: 50%; background: #00b67a; color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.2rem;">★</div>
                  <h4 style="margin: 0 0 4px 0; font-size: 1.2rem; color: var(--color-primary-navy);">Trustpilot</h4>
                  <div style="color: #00b67a; font-weight: 800; font-size: 1.4rem; margin-bottom: 6px;">4.9 / 5.0</div>
                  <p style="font-size: 0.88rem; color: var(--color-neutral-600); margin: 0;">Rated "Excellent" for transparent pricing, prompt customer support, and exceptional Himalayan safety standards.</p>
                </div>

              </div>
            </div>

          </section>

          <!-- Section 12: FAQs (Flagship 2-Column Category Sidebar Layout) -->
          <section id="section-faqs" class="trek-detail-section">
            <h2 class="faq-section-accent-title">
              <span class="faq-accent-bar"></span>
              Frequently Asked Questions for Annapurna Base Camp Luxury Trek
            </h2>

            <div class="faq-layout-container">
              <!-- Left Sidebar Category Navigation -->
              <div class="faq-sidebar-card">
                <div class="faq-category-nav">
                  <button type="button" class="faq-category-btn active" data-category="general">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </span>
                    General Information
                  </button>
                  <button type="button" class="faq-category-btn" data-category="permits">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                      </svg>
                    </span>
                    Permits & Logistics
                  </button>
                  <button type="button" class="faq-category-btn" data-category="accommodation">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </span>
                    Accommodation & Food
                  </button>
                  <button type="button" class="faq-category-btn" data-category="health">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                    </span>
                    Health & Safety
                  </button>
                  <button type="button" class="faq-category-btn" data-category="payments">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                        <line x1="1" y1="10" x2="23" y2="10"></line>
                      </svg>
                    </span>
                    Payments & Extra Costs
                  </button>
                  <button type="button" class="faq-category-btn" data-category="cultural">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                      </svg>
                    </span>
                    Cultural Insights
                  </button>
                </div>
              </div>

              <!-- Right FAQ Content Panel -->
              <div class="faq-main-panel">
                <!-- Header Bar -->
                <div class="faq-panel-header">
                  <div class="faq-active-category-title" id="faq-current-category-title">General Information</div>
                  <button type="button" class="faq-expand-all-btn" id="faq-expand-all-btn">Expand All</button>
                </div>

                <!-- Category 1: General Information -->
                <div class="faq-category-content active" id="faq-cat-general">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">How many days is the Annapurna Base Camp Luxury Trek?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Our proposed luxury itinerary is 15 calendar days from Kathmandu arrival to final departure. Days 3–12 involve 10 days of guided mountain walking, with built-in recovery in Pokhara and luxury city hotels. Extra contingency days are outside the advertised schedule.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What makes this a luxury trek compared to standard packages?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Luxury is delivered through holistic quality: 5-star city hotels in Kathmandu and Pokhara, scheduled domestic flights saving 14+ hours of bumpy highway driving, private 4WD trailhead transfers, boutique lodge stays in Ghandruk, full-board meals, dedicated porter support (1 porter per 2 trekkers), and short, measured upper-valley stages that avoid altitude exhaustion.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What is the highest point reached on this trek?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      The maximum elevation reached is Annapurna Base Camp at 4,130 meters (13,549 feet). This is noticeably lower than Everest Base Camp (5,364m) or Thorong La Pass (5,416m), making it significantly gentler on the body while still delivering a true 8,000m glacial amphitheater experience.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">Can this itinerary be tailored for private groups or couples?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Yes. We offer fully custom private departures on any date from March to May and September to December. You can adjust the walking pace, add extra relaxation nights at Pokhara lakeside resorts, or customize room upgrades.
                    </div>
                  </div>
                </div>

                <!-- Category 2: Permits & Logistics -->
                <div class="faq-category-content" id="faq-cat-permits" style="display: none;">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What permits are required and are they included?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      You need the Annapurna Conservation Area Project (ACAP) permit and the Trekkers' Information Management System (TIMS) registration card. All government fees, national park fees, and registration paperwork are fully included and processed by our Kathmandu office before your arrival.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">How do domestic flights to Pokhara work?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      We book scheduled domestic flights with leading carriers (Buddha Air / Yeti Airlines) between Kathmandu and Pokhara. The flight duration is approximately 25 minutes each way, providing breathtaking views of the Ganesh, Manaslu, and Annapurna ranges while saving over 14 hours of overland bus travel.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What is the luggage weight limit on domestic flights and porters?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Domestic flights allow 15 kg (33 lbs) of checked baggage plus 5 kg (11 lbs) of carry-on per passenger. Our porters carry up to 12.5 kg per trekker in the provided waterproof duffel bag. You carry only your light daypack with water, warm layers, camera, and personal essentials.
                    </div>
                  </div>
                </div>

                <!-- Category 3: Accommodation & Food -->
                <div class="faq-category-content" id="faq-cat-accommodation" style="display: none;">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What standards of accommodation are provided on the mountain?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      In Kathmandu and Pokhara, you stay in certified 5-star hotels and luxury lakeside resorts. In Ghandruk, you enjoy a boutique heritage lodge with private en-suite bathrooms and stunning terrace views. From Chhomrong up to ABC, we reserve the best available private twin-bed rooms in top-tier teahouses, equipped with our complimentary 4-season down sleeping bags.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">Are hot showers and charging facilities available?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Yes. Hot gas or solar showers are accessible at nearly all lodges up to Deurali for a modest fee (typically $2–$4 USD). Electronic device charging is available in lodge dining halls. At Annapurna Base Camp, facilities are solar-powered and hot water may be bucket-served due to sub-zero temperatures.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What food is served during the trek and are dietary needs handled?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      All meals (breakfast, lunch, dinner) on the trek are prepared fresh. Menus include traditional Dal Bhat (lentil soup with rice and organic greens), momos, pasta, noodles, porridge, and eggs. We easily cater to vegetarian, vegan, gluten-free, and nut-allergy diets. Beyond Bamboo, local sanctuary regulations prohibit meat, ensuring the highest standards of food hygiene.
                    </div>
                  </div>
                </div>

                <!-- Category 4: Health & Safety -->
                <div class="faq-category-content" id="faq-cat-health" style="display: none;">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What is the risk of Acute Mountain Sickness (AMS) on this route?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Because the trail spends multiple nights between 2,000m and 3,200m (Ghandruk, Chhomrong, Bamboo, Deurali) before touching ABC at 4,130m, your body acclimatizes gradually. Sleeping at MBC (3,700m) the night before base camp dramatically reduces AMS risks. Our guides monitor blood oxygen levels twice daily with pulse oximeters.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What emergency protocols and helicopter evacuation are available?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Your lead guide is wilderness first-aid certified and carries a comprehensive emergency kit. In the event of acute altitude sickness or medical emergency, our Kathmandu operations control room coordinates instant helicopter evacuation to Pokhara or Kathmandu hospitals. Trekkers must hold travel insurance covering medical evacuation up to 4,500m.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">How physically fit do I need to be?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      This trek is rated moderate. You should be comfortable walking 4 to 6 hours daily over undulating terrain, including stone stairs (particularly around Chhomrong). Prior hiking experience and cardiovascular training (stair-climbing, jogging, hill walking) 6–8 weeks before departure will maximize your comfort.
                    </div>
                  </div>
                </div>

                <!-- Category 5: Payments & Extra Costs -->
                <div class="faq-category-content" id="faq-cat-payments" style="display: none;">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What deposit is required to secure a departure?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      A 20% deposit per person confirms your booking, hotel suites, and domestic flight seats. The remaining 80% balance can be settled upon arrival in Kathmandu via credit card or cash (USD/EUR/GBP/NPR). All deposits enjoy lifetime flexibility and free date rescheduling up to 30 days before departure.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">How much personal cash should I bring on the trek?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      We recommend carrying approximately $25–$35 USD per day in Nepalese Rupees (NPR) for trail extras such as hot showers, device charging, Wi-Fi cards, specialty coffees, and gratuities. ATMs are readily available in Kathmandu and Pokhara, but there are no ATMs on the mountain beyond Pokhara.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What is the customary tipping amount for the guide and porter team?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Tipping is a customary Himalayan tradition that rewards exceptional care. We recommend budgeting roughly $150–$200 USD per trekker total for the 10 trekking days, distributed between your guide and porters during the final evening at Jhinu Danda or Pokhara.
                    </div>
                  </div>
                </div>

                <!-- Category 6: Cultural Insights -->
                <div class="faq-category-content" id="faq-cat-cultural" style="display: none;">
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What ethnic cultures will we encounter on this route?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      The Annapurna foothills are the ancestral heartland of the Gurung and Magar peoples, famed for their centuries-old martial heritage as British and Indian Army Gurkha soldiers. In Ghandruk and Chhomrong, you will experience slate-roofed stone stone houses, traditional weaving, and warm mountain hospitality.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">Why is Machhapuchhre (Fishtail Mountain) sacred?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Machhapuchhre (6,993m) is revered by local Hindu and Buddhist communities as the sacred home of Lord Shiva. Because of its divine status, the summit has never been climbed and mountaineering on the peak is strictly forbidden by the Nepal government. Trekkers admire its twin summit peaks respectfully from MBC and the Modi Khola valley.
                    </div>
                  </div>

                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">What cultural etiquette should be observed in the Annapurna Sanctuary?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      The Annapurna Sanctuary is considered a natural temple by local inhabitants. Always walk clockwise around Buddhist chortens and mani stone walls. Remove shoes before entering sacred rooms or private homes. Dress respectfully with covered shoulders and knees in villages, and ask permission before photographing local elders.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

        </div>

        <!-- Sticky Booking Sidebar Column (Flagship EBC Architecture) -->
        <div>
          <div class="sidebar-booking-card">
              
              <!-- Top Right Ribbon Badge -->
              <div style="position: absolute; top: 18px; right: 0; background: #008060; color: #FFFFFF; font-size: 0.72rem; font-weight: 800; padding: 5px 14px; border-radius: 4px 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 2px 6px rgba(0, 128, 96, 0.3);">
                LUXURY EXPEDITION
              </div>

              <!-- Pricing Header -->
              <span style="font-size: 0.75rem; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">FROM</span>
              <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 16px; flex-wrap: wrap;">
                <span style="font-size: 2.5rem; font-weight: 800; color: #0F172A; line-height: 1;">$1,650</span>
                <span style="font-size: 0.92rem; color: #64748B; font-weight: 500;">/ person</span>
                <a href="#section-itinerary" style="font-size: 0.92rem; color: #475569; font-weight: 600; text-decoration: underline; margin-left: 4px;">15 days trip</a>
              </div>

              <!-- Group Discount Accordion Toggle -->
              <div class="group-discount-toggle" onclick="const table = this.nextElementSibling; const arrow = this.querySelector('.gd-arrow'); if (table.style.display === 'none') { table.style.display = 'block'; arrow.style.transform = 'rotate(180deg)'; } else { table.style.display = 'none'; arrow.style.transform = 'rotate(0deg)'; }" style="border-top: 1px dashed #CBD5E1; border-bottom: 1px dashed #CBD5E1; padding: 10px 0; margin-bottom: 18px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none;">
                <span style="font-size: 0.78rem; font-weight: 800; color: #0F172A; text-transform: uppercase; letter-spacing: 0.04em;">WE OFFER GROUP DISCOUNT</span>
                <span class="gd-arrow" style="font-size: 0.85rem; color: #0F172A; transition: transform 0.2s ease;">▼</span>
              </div>

              <!-- Group Discount Table (Hidden by default, expandable) -->
              <div class="group-discount-content" style="display: none; margin-bottom: 18px; background: #F8FAFC; border-radius: 10px; padding: 12px; font-size: 0.85rem; border: 1px solid #E2E8F0;">
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">2 - 4 Persons</span>
                  <strong style="color: #0F172A;">$1,570 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">5 - 8 Persons</span>
                  <strong style="color: #0F172A;">$1,490 / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0;">
                  <span style="color: #64748B;">9+ Persons</span>
                  <strong style="color: #047857;">$1,399 / person (Best Deal)</strong>
                </div>
              </div>

              <!-- Action Buttons -->
              <button class="btn open-inquiry-btn" data-trek-title="Annapurna Base Camp Luxury Trek (15 Days)" style="width: 100%; padding: 14px; background: #008060; color: #FFFFFF; border: none; border-radius: 50px; font-size: 1.05rem; font-weight: 800; cursor: pointer; margin-bottom: 12px; box-shadow: 0 4px 14px rgba(0, 128, 96, 0.25); transition: background 0.2s;">
                Book Now
              </button>
              <button class="btn open-inquiry-btn" data-trek-title="Annapurna Base Camp Luxury Trek (15 Days)" style="width: 100%; padding: 12px; background: #FFFFFF; color: #0F172A; border: 1px solid #CBD5E1; border-radius: 50px; font-size: 0.98rem; font-weight: 700; cursor: pointer; margin-bottom: 22px;">
                Make an Enquiry
              </button>

              <!-- 5 Bullet Features with Emerald Sparkles -->
              <ul style="list-style: none; padding: 0; margin: 0 0 20px 0; display: flex; flex-direction: column; gap: 11px;">
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;" aria-hidden="true"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Trek Leading by well trained Team</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;" aria-hidden="true"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Hassle-Free & Instant Booking</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;" aria-hidden="true"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>100% Customers Satisfaction</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;" aria-hidden="true"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Reasonable Price & Best Service</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;" aria-hidden="true"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>No Hidden Cost & Secure Payment</span>
                </li>
              </ul>

              <!-- Bottom Instant Help Footer Section -->
              <div style="border-top: 1px dashed #CBD5E1; padding-top: 18px; display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <span style="font-size: 0.72rem; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">INSTANT HELP</span>
                  <strong style="font-size: 1.05rem; font-weight: 800; color: #0F172A;">Call or WhatsApp</strong>
                </div>

                <!-- Phone & WhatsApp Round Buttons -->
                <div style="display: flex; align-items: center; gap: 10px;">
                  <!-- Phone Call Button -->
                  <a href="tel:+9779800000000" aria-label="Call Us" style="width: 44px; height: 44px; border-radius: 50%; border: 1px solid #CBD5E1; background: #FFFFFF; display: flex; align-items: center; justify-content: center; color: #0F172A; text-decoration: none; transition: all 0.2s;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </a>

                  <!-- WhatsApp Button -->
                  <a href="https://wa.me/9779800000000" target="_blank" rel="noopener" aria-label="WhatsApp Us" style="width: 44px; height: 44px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center; color: #FFFFFF; text-decoration: none; box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3); transition: all 0.2s;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.333 4.988l-1.417 5.176 5.297-1.389c1.458.796 3.103 1.215 4.773 1.216h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.669-1.039-5.176-2.926-7.063a9.923 9.923 0 0 0-7.063-2.927zm0 1.666c4.587 0 8.324 3.737 8.324 8.324 0 2.224-.866 4.314-2.441 5.889a8.272 8.272 0 0 1-5.888 2.438h-.003c-1.493 0-2.955-.399-4.232-1.156l-.304-.18-3.14.823.837-3.058-.198-.315a8.283 8.283 0 0 1-1.272-4.444c.001-4.587 3.739-8.324 8.326-8.324zm-3.626 4.321c-.227 0-.594.085-.905.424-.311.339-1.187 1.159-1.187 2.825 0 1.666 1.216 3.277 1.385 3.503.17.226 2.392 3.652 5.795 5.122.81.35 1.442.559 1.936.716.814.258 1.554.222 2.139.135.652-.097 2.007-.82 2.29-1.611.283-.791.283-1.469.198-1.611-.085-.141-.311-.226-.65-.396s-2.007-.99-2.318-1.103c-.311-.113-.538-.17-.764.17s-.877 1.103-1.075 1.329c-.198.226-.396.254-.735.085-.339-.17-1.433-.528-2.73-1.685-1.01-.901-1.691-2.013-1.89-2.352-.198-.339-.021-.522.148-.691.153-.153.339-.396.509-.594.17-.198.226-.339.339-.565.113-.226.057-.424-.028-.594-.085-.17-.764-1.838-1.047-2.516-.275-.661-.555-.572-.764-.582-.198-.01-.424-.012-.651-.012z"/>
                    </svg>
                  </a>
                </div>
              </div>

          </div>
        </div>

      </div>
    </section>

    </article>
  </main>

  <!-- Flagship Luxury 4-Column Site Footer (1:1 Consistent with Everest Base Camp Trek) -->
  <footer class="site-footer">
    <div class="container">

      <!-- Top 4-Column Luxury Layout -->
      <div class="footer-luxury-layout">

        <!-- Column 1: Main Pages -->
        <div class="footer-nav-col">
          <h4>Main Pages</h4>
          <ul class="footer-nav-links">
            <li><a href="../../index.html">Home</a></li>
            <li><a href="../../nepal-trekking-packages/">All Trek Packages</a></li>
            <li><a href="../../trek/annapurna-base-camp-luxury-trek/">Annapurna Luxury Trek</a></li>
            <li><a href="../../trek/everest-base-camp-trek/">Everest Base Camp</a></li>
            <li><a href="../../trekking-regions-nepal/">Trekking Regions</a></li>
            <li><a href="../../custom-plan.html">Tailor-Made Trip</a></li>
          </ul>
        </div>

        <!-- Column 2: Essential Info -->
        <div class="footer-nav-col">
          <h4>Essential Info</h4>
          <ul class="footer-nav-links">
            <li><a href="../../nepal-travel-guide/">Nepal Travel Guide</a></li>
            <li><a href="../../about.html">About Us</a></li>
            <li><a href="../../team.html">Meet Our Team</a></li>
            <li><a href="../../careers.html">Careers & Jobs</a></li>
            <li><a href="../../reviews.html">Reviews & Testimonials</a></li>
            <li><a href="../../blogs.html">Blog & Articles</a></li>
            <li><a href="../../contact.html">Contact Us</a></li>
          </ul>
        </div>

        <!-- Column 3: Center Expedition Title & Pill CTA -->
        <div class="footer-cta-center">
          <div class="footer-cta-title">Expedition Expertise<br>at Your Service</div>
          <button class="btn-journey-pill open-inquiry-btn" data-trek-title="Annapurna Base Camp Luxury Trek (15 Days)">
            <span>Begin Your Journey</span>
            <span class="arrow-circle-green">↗</span>
          </button>
        </div>

        <!-- Column 4: Social Media -->
        <div class="footer-social-col" style="text-align: right;">
          <h4>Social Media</h4>
          <ul class="footer-nav-links">
            <li><a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a></li>
            <li><a href="https://wa.me/9779800000000" target="_blank" rel="noopener">WhatsApp</a></li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar Strip -->
      <div class="footer-bottom-strip">
        <div>&copy; 2026 Namaste Hiking Trek. All Rights Reserved.</div>
        <div class="footer-legal-links">
          <a href="../../privacy-policy.html">Privacy Policy</a>
          <a href="../../terms-and-conditions.html">Terms & Conditions</a>
        </div>
      </div>

    </div>

    <!-- Giant Watermark Brand Typography at Bottom -->
    <div class="watermark-brand-container">
      <div class="watermark-brand-text">NAMASTE.</div>
    </div>
  </footer>

  <!-- Inquiry Modal (EBC Flagship Standard) -->
  <div id="inquiry-modal" class="modal-overlay">
    <div class="modal-card">
      <button class="modal-close" id="modal-close-btn">&times;</button>
      <h3 style="font-size: 1.5rem; margin-bottom: 6px;">Inquire About Annapurna Base Camp Luxury Trek</h3>
      <p style="font-size: 0.9rem; color: var(--color-neutral-600); margin-bottom: 20px;">
        Fill out this quick form and our lead Himalayan guide will respond within 4 hours.
      </p>
      <form id="inquiry-form">
        <div class="filter-grid" style="grid-template-columns: repeat(2, 1fr); margin-bottom: 14px;">
          <div class="form-group">
            <label class="form-label" for="inq-name">Full Name *</label>
            <input type="text" id="inq-name" class="form-input" required placeholder="e.g. Sarah Jenkins">
          </div>
          <div class="form-group">
            <label class="form-label" for="inq-email">Email Address *</label>
            <input type="email" id="inq-email" class="form-input" required placeholder="e.g. sarah@example.com">
          </div>
        </div>
        <div class="form-group" style="margin-bottom: 20px;">
          <label class="form-label" for="inq-notes">Preferred Start Date & Questions</label>
          <textarea id="inq-notes" class="form-textarea" rows="3" placeholder="Tell us your target travel month, group size, or room upgrade request..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%; padding: 12px;">Submit Booking Inquiry</button>
      </form>
    </div>
  </div>

  <script type="module" src="../../js/altitude-visualizer.js"></script>
  <script type="module" src="../../js/weather-visualizer.js"></script>
  <script type="module" src="../../js/inquiry-modal.js"></script>
  <script src="../../js/trek-details.js?v=11"></script>
  <script src="../../js/header-scroll.js"></script>
  
  <!-- Mobile Floating Book CTA — hidden on desktop via CSS -->
  <a href="#section-booking" class="mobile-book-cta" aria-label="Book Annapurna Base Camp Luxury Trek">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
    Book This Trek — From $1,650
  </a>

  <script src="../../js/mega-menu.js"></script>
</body>
</html>
\`;
  }
};
`;

fs.writeFileSync('scratch/content_abc_luxury_altitude_weather_faqs.js', code, 'utf8');
console.log('Successfully written scratch/content_abc_luxury_altitude_weather_faqs.js');
