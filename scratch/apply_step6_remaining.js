const fs = require('fs');

const faqs = JSON.parse(fs.readFileSync('scratch/parsed_faqs.json', 'utf8'));
let html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

// 1. UPDATE DATES SECTION TITLE & DATES
html = html.replace(
  'Booking Dates & Availability for EBC trek',
  'Booking Dates & Availability for Everest Three High Passes Trek (21 Days)'
);

const dateReplacements = [
  { oldStr: 'Aug 5 – Aug 18, 2026', newStr: 'Aug 5 – Aug 25, 2026' },
  { oldStr: 'Aug 9 – Aug 22, 2026', newStr: 'Aug 9 – Aug 29, 2026' },
  { oldStr: 'Aug 13 – Aug 26, 2026', newStr: 'Aug 13 – Sep 2, 2026' },
  { oldStr: 'Aug 17 – Aug 30, 2026', newStr: 'Aug 17 – Sep 6, 2026' },
  { oldStr: 'Aug 21 – Sep 3, 2026', newStr: 'Aug 21 – Sep 10, 2026' },
  { oldStr: 'Aug 24 – Sep 6, 2026', newStr: 'Aug 24 – Sep 13, 2026' },
  { oldStr: 'Sep 2 – Sep 15, 2026', newStr: 'Sep 2 – Sep 22, 2026' },
  { oldStr: 'Sep 10 – Sep 23, 2026', newStr: 'Sep 10 – Sep 30, 2026' },
  { oldStr: 'Oct 4 – Oct 17, 2026', newStr: 'Oct 4 – Oct 24, 2026' },
  { oldStr: 'Oct 15 – Oct 28, 2026', newStr: 'Oct 15 – Nov 4, 2026' },
  { oldStr: 'Nov 2 – Nov 15, 2026', newStr: 'Nov 2 – Nov 22, 2026' },
  { oldStr: 'Dec 1 – Dec 14, 2026', newStr: 'Dec 1 – Dec 21, 2026' }
];

dateReplacements.forEach(r => {
  html = html.replaceAll(r.oldStr, r.newStr);
});

// 2. UPDATE ALTITUDE PROFILE SECTION
const altProfileTable = `
            <div style="margin-top: 30px;">
              <h3 style="font-size: 1.25rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 14px;">21-Day Itinerary Elevation & Overnight Profile</h3>
              <div style="overflow-x: auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; text-align: left;">
                  <thead>
                    <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                      <th style="padding: 10px 14px; font-weight: 700; color: #0f172a;">Day</th>
                      <th style="padding: 10px 14px; font-weight: 700; color: #0f172a;">Overnight Stop</th>
                      <th style="padding: 10px 14px; font-weight: 700; color: #0f172a;">Sleeping Elevation</th>
                      <th style="padding: 10px 14px; font-weight: 700; color: #0f172a;">Daytime Objective / Pass</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 9px 14px; font-weight: 600;">Day 1</td><td style="padding: 9px 14px;">Kathmandu</td><td style="padding: 9px 14px;"><span data-altitude-m="1355">1,355 m</span></td><td style="padding: 9px 14px;">Arrival & hotel transfer</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #fafbfc;"><td style="padding: 9px 14px; font-weight: 600;">Day 2</td><td style="padding: 9px 14px;">Kathmandu</td><td style="padding: 9px 14px;"><span data-altitude-m="1355">1,355 m</span></td><td style="padding: 9px 14px;">Sightseeing & trek briefing</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 9px 14px; font-weight: 600;">Day 3</td><td style="padding: 9px 14px;">Phakding</td><td style="padding: 9px 14px;"><span data-altitude-m="2650">2,650 m</span></td><td style="padding: 9px 14px;">Fly to Lukla (<span data-altitude-m="2850">2,850 m</span>), trek to Phakding</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #fafbfc;"><td style="padding: 9px 14px; font-weight: 600;">Day 4</td><td style="padding: 9px 14px;">Namche Bazaar</td><td style="padding: 9px 14px;"><span data-altitude-m="3443">3,443 m</span></td><td style="padding: 9px 14px;">Enter Sagarmatha National Park, climb to Namche</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 9px 14px; font-weight: 600;">Day 5</td><td style="padding: 9px 14px;">Namche Bazaar</td><td style="padding: 9px 14px;"><span data-altitude-m="3443">3,443 m</span></td><td style="padding: 9px 14px;">Acclimatization hike to Everest View Hotel (<span data-altitude-m="3880">3,880 m</span>)</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #fafbfc;"><td style="padding: 9px 14px; font-weight: 600;">Day 6</td><td style="padding: 9px 14px;">Tengboche</td><td style="padding: 9px 14px;"><span data-altitude-m="3860">3,860 m</span></td><td style="padding: 9px 14px;">Tengboche Monastery</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 9px 14px; font-weight: 600;">Day 7</td><td style="padding: 9px 14px;">Dingboche</td><td style="padding: 9px 14px;"><span data-altitude-m="4450">4,450 m</span></td><td style="padding: 9px 14px;">Pangboche and Imja Valley</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #fafbfc;"><td style="padding: 9px 14px; font-weight: 600;">Day 8</td><td style="padding: 9px 14px;">Dingboche</td><td style="padding: 9px 14px;"><span data-altitude-m="4450">4,450 m</span></td><td style="padding: 9px 14px;">Acclimatization hike to Nangkartshang Hill (<span data-altitude-m="5100">5,100 m</span>)</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 9px 14px; font-weight: 600;">Day 9</td><td style="padding: 9px 14px;">Chhukung</td><td style="padding: 9px 14px;"><span data-altitude-m="4700">4,700 m</span></td><td style="padding: 9px 14px;">Short staging walk to conserve energy</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #e6f7f0;"><td style="padding: 9px 14px; font-weight: 700; color: #008060;">Day 10</td><td style="padding: 9px 14px; font-weight: 600;">Lobuche</td><td style="padding: 9px 14px;"><span data-altitude-m="4910">4,910 m</span></td><td style="padding: 9px 14px; font-weight: 700; color: #008060;">Pass 1: Kongma La Pass (<span data-altitude-m="5535">5,535 m</span>)</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 9px 14px; font-weight: 600;">Day 11</td><td style="padding: 9px 14px;">Gorak Shep</td><td style="padding: 9px 14px; font-weight: 700; color: #b45309;"><span data-altitude-m="5180">5,180 m</span></td><td style="padding: 9px 14px;">Everest Base Camp (<span data-altitude-m="5364">5,364 m</span>)</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #fafbfc;"><td style="padding: 9px 14px; font-weight: 600;">Day 12</td><td style="padding: 9px 14px;">Dzongla</td><td style="padding: 9px 14px;"><span data-altitude-m="4830">4,830 m</span></td><td style="padding: 9px 14px;">Kala Patthar summit (<span data-altitude-m="5545">5,545 m</span>), trek to Dzongla</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #e6f7f0;"><td style="padding: 9px 14px; font-weight: 700; color: #008060;">Day 13</td><td style="padding: 9px 14px; font-weight: 600;">Thangnak / Dragnak</td><td style="padding: 9px 14px;"><span data-altitude-m="4700">4,700 m</span></td><td style="padding: 9px 14px; font-weight: 700; color: #008060;">Pass 2: Cho La Pass (<span data-altitude-m="5420">5,420 m</span>) & glacier</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 9px 14px; font-weight: 600;">Day 14</td><td style="padding: 9px 14px;">Gokyo</td><td style="padding: 9px 14px;"><span data-altitude-m="4750">4,750 m</span></td><td style="padding: 9px 14px;">Ngozumpa Glacier moraine & Gokyo Lakes</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #fafbfc;"><td style="padding: 9px 14px; font-weight: 600;">Day 15</td><td style="padding: 9px 14px;">Gokyo</td><td style="padding: 9px 14px;"><span data-altitude-m="4750">4,750 m</span></td><td style="padding: 9px 14px;">Gokyo Ri summit (<span data-altitude-m="5357">5,357 m</span>) & 4th Lake</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #e6f7f0;"><td style="padding: 9px 14px; font-weight: 700; color: #008060;">Day 16</td><td style="padding: 9px 14px; font-weight: 600;">Lungden</td><td style="padding: 9px 14px;"><span data-altitude-m="4368">4,368 m</span></td><td style="padding: 9px 14px; font-weight: 700; color: #008060;">Pass 3: Renjo La Pass (<span data-altitude-m="5360">5,360 m</span>) to Lungden</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 9px 14px; font-weight: 600;">Day 17</td><td style="padding: 9px 14px;">Namche Bazaar</td><td style="padding: 9px 14px;"><span data-altitude-m="3443">3,443 m</span></td><td style="padding: 9px 14px;">Descend through Thame Valley and Marlung</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #fafbfc;"><td style="padding: 9px 14px; font-weight: 600;">Day 18</td><td style="padding: 9px 14px;">Lukla</td><td style="padding: 9px 14px;"><span data-altitude-m="2850">2,850 m</span></td><td style="padding: 9px 14px;">Final trekking stage, farewell dinner with crew</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 9px 14px; font-weight: 600;">Day 19</td><td style="padding: 9px 14px;">Kathmandu</td><td style="padding: 9px 14px;"><span data-altitude-m="1355">1,355 m</span></td><td style="padding: 9px 14px;">Lukla scenic flight, transfer to hotel</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #fafbfc;"><td style="padding: 9px 14px; font-weight: 600;">Day 20</td><td style="padding: 9px 14px;">Kathmandu</td><td style="padding: 9px 14px;"><span data-altitude-m="1355">1,355 m</span></td><td style="padding: 9px 14px;">Flexible contingency buffer day & shopping</td></tr>
                    <tr><td style="padding: 9px 14px; font-weight: 600;">Day 21</td><td style="padding: 9px 14px;">Kathmandu / Departure</td><td style="padding: 9px 14px;"><span data-altitude-m="1355">1,355 m</span></td><td style="padding: 9px 14px;">Airport transfer for international departure</td></tr>
                  </tbody>
                </table>
              </div>
            </div>`;

const newAltProfileHtml = `<section id="section-altitude-profile" class="trek-detail-section">
            <div class="details-title-wrapper" style="margin-bottom: 24px;">
              <h2 class="details-main-title">Altitude Profile: Everest Three High Passes Trek (21 Days)</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
            </div>
            <div style="background: white; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--color-neutral-100); box-shadow: var(--shadow-sm); margin-bottom: 30px;">
              <p style="font-size: 0.9rem; color: var(--color-neutral-600); margin-bottom: 20px;">
                Interactive elevation map showing all 21 days with three 5,300m+ pass crossings, two acclimatization rests, and major viewpoint summits. Switch units below to convert between meters (m) and feet (ft).
              </p>
              <div id="altitude-chart-wrapper" data-trek-key="three-passes"></div>
            </div>
            ${altProfileTable}
          </section>`;

// Replace altitude section
const sAltStart = html.indexOf('<section id="section-altitude-profile"');
const sWeaStart = html.indexOf('<section id="section-weather"');
html = html.slice(0, sAltStart) + newAltProfileHtml + '\n\n          ' + html.slice(sWeaStart);

// 3. UPDATE WEATHER SECTION
const weatherMatrix = `
            <div style="margin-top: 30px;">
              <h3 style="font-size: 1.25rem; color: var(--color-primary-navy); font-weight: 700; margin-bottom: 14px;">Spring vs. Autumn Seasonal Comparison for Three Passes</h3>
              <div style="overflow-x: auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; text-align: left;">
                  <thead>
                    <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                      <th style="padding: 10px 14px; font-weight: 700; color: #0f172a;">Factor</th>
                      <th style="padding: 10px 14px; font-weight: 700; color: #008060;">Spring (March–May)</th>
                      <th style="padding: 10px 14px; font-weight: 700; color: #008060;">Autumn (October–November)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 9px 14px; font-weight: 600;">Mountain Visibility</td><td style="padding: 9px 14px;">Generally clear mornings, clouds gather late afternoon</td><td style="padding: 9px 14px;">Crystal clear, sharpest post-monsoon visibility</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #fafbfc;"><td style="padding: 9px 14px; font-weight: 600;">Temperatures</td><td style="padding: 9px 14px;">Cold in March, progressively warming through May</td><td style="padding: 9px 14px;">Crisp & pleasant in Oct, progressively colder in Nov</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 9px 14px; font-weight: 600;">Pass Snow Conditions</td><td style="padding: 9px 14px;">Residual winter snowpack on Kongma La & Cho La</td><td style="padding: 9px 14px;">Trails generally drier; occasional fresh snowfall</td></tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #fafbfc;"><td style="padding: 9px 14px; font-weight: 600;">Flora & Landscape</td><td style="padding: 9px 14px;">Blooming rhododendrons and vibrant green valleys</td><td style="padding: 9px 14px;">Golden autumn hues, dry alpine tundra</td></tr>
                    <tr><td style="padding: 9px 14px; font-weight: 600;">Contingency Need</td><td style="padding: 9px 14px;">Day 20 buffer vital for spring afternoon winds</td><td style="padding: 9px 14px;">Day 20 buffer vital for peak-season Lukla air traffic</td></tr>
                  </tbody>
                </table>
              </div>
            </div>`;

const newWeatherHtml = `<section id="section-weather" class="trek-detail-section">
            <div class="details-title-wrapper" style="margin-bottom: 24px;">
              <h2 class="details-main-title">Weather & Seasons: Everest Three High Passes Trek</h2>
              <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
            </div>
            <p style="font-size: 0.95rem; color: var(--color-neutral-700); line-height: 1.6; margin-bottom: 24px;">
              Trekking across three 5,300m+ passes requires an understanding of high-altitude temperature swings. While daytime walking in lower valleys can be comfortable (12°C to 18°C), night temperatures at Gorak Shep and high pass crossings routinely plunge to -10°C to -20°C.
            </p>
            <div style="background: white; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--color-neutral-100); box-shadow: var(--shadow-sm); margin-bottom: 30px;">
              <div id="weather-chart-wrapper" data-trek-key="three-passes"></div>
            </div>
            ${weatherMatrix}
          </section>`;

// Replace weather section
const curWeaStart = html.indexOf('<section id="section-weather"');
const curMapStart = html.indexOf('<section id="section-map"');
html = html.slice(0, curWeaStart) + newWeatherHtml + '\n\n          ' + html.slice(curMapStart);

// 4. UPDATE SIDEBAR BOOKING DURATION
html = html.replace('14 days trip', '21 days trip');
html = html.replaceAll('data-trek-title="Everest Three Passes Trek (Aug 5 - Aug 18, 2026)"', 'data-trek-title="Everest Three High Passes Trek (21 Days)"');

// 5. UPDATE FAQS SECTION
// Map parsed FAQs into 6 categories
const catMap = {
  general: [],
  permits: [],
  accommodation: [],
  health: [],
  payments: [],
  cultural: []
};

faqs.forEach((f, idx) => {
  const q = f.q.toLowerCase();
  if (q.includes('permit') || q.includes('document') || q.includes('restricted') || q.includes('flight') || q.includes('baggage') || q.includes('reverse') || q.includes('skipped')) {
    catMap.permits.push(f);
  } else if (q.includes('accommodat') || q.includes('food') || q.includes('allerg') || q.includes('wi-fi') || q.includes('hours do you walk')) {
    catMap.accommodation.push(f);
  } else if (q.includes('acclimatiz') || q.includes('symptom') || q.includes('evacuat') || q.includes('insurance') || q.includes('crampon') || q.includes('health') || q.includes('technical')) {
    catMap.health.push(f);
  } else if (q.includes('cash') || q.includes('cost') || q.includes('paying') || q.includes('price')) {
    catMap.payments.push(f);
  } else if (q.includes('guide') || q.includes('culture') || q.includes('buddhist') || q.includes('sherpa')) {
    catMap.cultural.push(f);
  } else {
    catMap.general.push(f);
  }
});

// Ensure every category has items
if (catMap.cultural.length === 0) {
  catMap.cultural.push({
    q: "What cultural etiquette should I observe in the Everest region?",
    a: "Always walk to the left of Buddhist mani walls, chortens, and prayer wheels. Remove your shoes and hat when entering monasteries, and ask permission before photographing monk ceremonies or local Sherpa elders. A respectful 'Namaste' with hands together is warmly welcomed everywhere in the Khumbu."
  });
}

function renderCategoryFaqs(faqList) {
  return faqList.map(item => `
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <span>${item.q}</span>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      ${item.a}
                    </div>
                  </div>`).join('\n');
}

const newFaqSectionHtml = `<section id="section-faqs" class="trek-detail-section">
            <h2 class="faq-section-accent-title">
              <span class="faq-accent-bar"></span>
              Frequently Asked Questions for Everest Three High Passes Trek (21 Days)
            </h2>

            <div class="faq-layout-container">
              <!-- Left Sidebar Category Navigation -->
              <div class="faq-sidebar-card">
                <div class="faq-category-nav">
                  <button type="button" class="faq-category-btn active" data-category="general">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </span>
                    Accommodation & Food
                  </button>
                  <button type="button" class="faq-category-btn" data-category="health">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                    </span>
                    Health & Safety
                  </button>
                  <button type="button" class="faq-category-btn" data-category="payments">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                        <line x1="1" y1="10" x2="23" y2="10"></line>
                      </svg>
                    </span>
                    Payments & Pricing
                  </button>
                  <button type="button" class="faq-category-btn" data-category="cultural">
                    <span class="faq-cat-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                      </svg>
                    </span>
                    Guide & Culture
                  </button>
                </div>
              </div>

              <!-- Right FAQ Content Panel -->
              <div class="faq-main-panel">
                <!-- Header Bar -->
                <div class="faq-panel-header">
                  <h3 class="faq-active-category-title" id="faq-current-category-title">General Information</h3>
                  <button type="button" class="faq-expand-all-btn" id="faq-expand-all-btn">Expand All</button>
                </div>

                <!-- Category 1: General Information -->
                <div class="faq-category-content active" id="faq-cat-general">
${renderCategoryFaqs(catMap.general)}
                </div>

                <!-- Category 2: Permits and Logistics -->
                <div class="faq-category-content" id="faq-cat-permits">
${renderCategoryFaqs(catMap.permits)}
                </div>

                <!-- Category 3: Accommodation and Food -->
                <div class="faq-category-content" id="faq-cat-accommodation">
${renderCategoryFaqs(catMap.accommodation)}
                </div>

                <!-- Category 4: Health and Safety -->
                <div class="faq-category-content" id="faq-cat-health">
${renderCategoryFaqs(catMap.health)}
                </div>

                <!-- Category 5: Payments & Pricing -->
                <div class="faq-category-content" id="faq-cat-payments">
${renderCategoryFaqs(catMap.payments)}
                </div>

                <!-- Category 6: Guide & Culture -->
                <div class="faq-category-content" id="faq-cat-cultural">
${renderCategoryFaqs(catMap.cultural)}
                </div>

              </div>
            </div>
          </section>`;

// Replace FAQ section
const curFaqStart = html.indexOf('<section id="section-faqs"');
const sbCardStart = html.indexOf('<!-- Sticky Booking Sidebar Column -->');

if (curFaqStart === -1 || sbCardStart === -1) {
  console.error('FAQ boundaries not found!');
  process.exit(1);
}

html = html.slice(0, curFaqStart) + newFaqSectionHtml + '\n\n        </div>\n\n        ' + html.slice(sbCardStart);

fs.writeFileSync('trek/everest-three-passes-trek/index.html', html, 'utf8');
console.log('Successfully applied Step 6: Dates, Altitude, Weather, Booking & FAQs!');

