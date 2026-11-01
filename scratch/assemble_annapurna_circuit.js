const fs = require('fs');
const { generateOverviewHtml } = require('./build_act_overview');
const { generateItineraryHtml } = require('./build_act_itinerary');
const { generateGuidesHtml } = require('./build_act_guides');
const { generateIncludesHtml, generatePackingHtml } = require('./build_act_includes_packing');
const {
  generateAltitudeProfileHtml,
  generateDatesHtml,
  generateFaqsHtml,
  generateSidebarHtml
} = require('./build_act_altitude_faqs');

let html = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
console.log('Original size:', html.length);

// 1. Title and Meta updates
html = html.replace(
  /<title>.*?<\/title>/,
  '<title>Annapurna Circuit Trek (14 Days) — Namaste Hiking Trek</title>'
);

html = html.replace(
  /<meta name="description" content=".*?"\s*\/?>/,
  '<meta name="description" content="Embark on the classic 14-day Annapurna Circuit Trek across Thorong La Pass (5,416m). Linking Marsyangdi and Kali Gandaki valleys, Manang, Muktinath, Tatopani hot springs & Poon Hill. $1,199.">'
);

// 2. Region pill
html = html.replace(
  '<span class="pill pill-copper" style="margin-bottom: 0;">Everest Region • Classic Himalayan Expedition</span>',
  '<span class="pill pill-copper" style="margin-bottom: 0;">Annapurna Region • Classic Himalayan Circuit</span>'
);

// 3. Hero subtitle
const oldSubtitleRegex = /<p style="font-size: 1\.15rem; color: var\(--color-neutral-600\); line-height: 1\.7; margin-top: 12px; margin-bottom: 0;">[\s\S]*?<\/p>/;
const newSubtitle = `<p style="font-size: 1.15rem; color: var(--color-neutral-600); line-height: 1.7; margin-top: 12px; margin-bottom: 0;">
          The Annapurna Circuit Trek is one of Nepal's most geographically diverse long-distance trekking journeys. Circumnavigating the Annapurna massif, linking the Marsyangdi Valley with the Kali Gandaki Valley, crossing Thorong La Pass at 5,416 m (17,769 ft), and journeying through Manang, Muktinath, Kagbeni, Marpha, Tatopani, and Poon Hill.
          <span id="ebc-more-text" style="display: none;">
            Our 14-day itinerary combines progressive acclimatization, authentic Tibetan-Buddhist and Thakali cultural immersion, scenic road-supported staging to Chame, and complete safety monitoring with certified guides.
          </span>
          <button id="ebc-toggle-btn" style="background: none; border: none; color: #10b981; font-weight: 700; font-size: 1.05rem; cursor: pointer; padding: 0; margin-left: 6px; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; vertical-align: middle; transition: opacity 0.2s ease;">
            Learn more <span style="font-size: 1.1rem; margin-left: 2px;">→</span>
          </button>
        </p>`;
html = html.replace(oldSubtitleRegex, newSubtitle);

// 4. Hero Key Trip Facts Grid
const oldFactsGridRegex = /<!-- Key Trip Facts Grid -->[\s\S]*?<!-- Sticky Scroll-Spy Sub-Navigation Bar -->/;
const newFactsGrid = `<!-- Key Trip Facts Grid -->
    <div class="container" style="margin-bottom: 30px;">
      <style>
        .trip-fact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          transition: transform 0.2s ease-in-out;
        }
        .trip-fact-item:hover {
          transform: translateY(-2px);
        }
      </style>
      <div style="background: #ffffff; border: 1px solid var(--color-neutral-100); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); padding: 24px 30px;">
        <h3 style="font-size: 1.3rem; margin-bottom: 24px; color: var(--color-primary-navy); display: flex; align-items: center; gap: 8px; font-weight: 700;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="icon-navy" style="color: var(--color-primary-navy);"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
          Key Trip Facts
        </h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 24px 20px;">
          <!-- 1. Duration -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Duration</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">14 days</span>
            </div>
          </div>

          <!-- 2. Difficulty -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Difficulty</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Challenging</span>
            </div>
          </div>

          <!-- 3. Max Altitude -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22L12 2l8 20H4z"/><path d="M9 22l3-7 3 7H9z" fill="#008060"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Max Altitude</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;" data-altitude-m="5416">5,416 m (Thorong La)</span>
            </div>
          </div>

          <!-- 4. Destination -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Destination</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Annapurna & Mustang</span>
            </div>
          </div>

          <!-- 5. Group Size -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Group Size</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">2-12 Persons</span>
            </div>
          </div>

          <!-- 6. Accommodation -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Accommodation</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Teahouses & City Hotels</span>
            </div>
          </div>

          <!-- 7. Transport -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Transport</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Private 4WD & Coach / Flight</span>
            </div>
          </div>

          <!-- 8. Meals -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Meals</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Full Board on Trek (B.L.D.)</span>
            </div>
          </div>

          <!-- 9. Season -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Season</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Sep-Nov & Mar-May</span>
            </div>
          </div>

          <!-- 10. Trek Starts -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><polygon points="12 7 17 12 12 17 12 7"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek Starts</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Chame (~2,710 m)</span>
            </div>
          </div>

          <!-- 11. Trek End At -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek End At</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Nayapul / Pokhara (~900 m)</span>
            </div>
          </div>

          <!-- 12. Trek Region -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trek Region</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Annapurna Conservation Area</span>
            </div>
          </div>

          <!-- 13. Package Start Point -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Package Start Point</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Kathmandu</span>
            </div>
          </div>

          <!-- 14. Package End Point -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Package End Point</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Kathmandu</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sticky Scroll-Spy Sub-Navigation Bar -->`;
html = html.replace(oldFactsGridRegex, newFactsGrid);

// 5. Update data-trek-key to annapurna_circuit
html = html.replace('data-trek-key="ebc"', 'data-trek-key="annapurna_circuit"');

// 6. Replace main sections
// Section 1: Overview
const overviewStart = html.indexOf('<section id="section-overview"');
const itineraryStart = html.indexOf('<section id="section-itinerary"');
console.log('Replacing Overview between', overviewStart, 'and', itineraryStart);
html = html.slice(0, overviewStart) + generateOverviewHtml() + html.slice(itineraryStart);

// Section 2: Itinerary
const newItineraryStart = html.indexOf('<section id="section-itinerary"');
const includesStart = html.indexOf('<section id="section-includes"');
console.log('Replacing Itinerary between', newItineraryStart, 'and', includesStart);
html = html.slice(0, newItineraryStart) + generateItineraryHtml() + html.slice(includesStart);

// Section 3: Includes & Excludes
const newIncludesStart = html.indexOf('<section id="section-includes"');
const datesStart = html.indexOf('<section id="section-dates"');
console.log('Replacing Includes between', newIncludesStart, 'and', datesStart);
html = html.slice(0, newIncludesStart) + generateIncludesHtml() + html.slice(datesStart);

// Section 4: Dates & Availability
const newDatesStart = html.indexOf('<section id="section-dates"');
const packingStart = html.indexOf('<section id="section-packing"');
console.log('Replacing Dates between', newDatesStart, 'and', packingStart);
html = html.slice(0, newDatesStart) + generateDatesHtml() + html.slice(packingStart);

// Section 5: Packing List
const newPackingStart = html.indexOf('<section id="section-packing"');
const detailsStart = html.indexOf('<section id="section-details"');
console.log('Replacing Packing between', newPackingStart, 'and', detailsStart);
html = html.slice(0, newPackingStart) + generatePackingHtml() + html.slice(detailsStart);

// Section 6: Details / Guides
const newDetailsStart = html.indexOf('<section id="section-details"');
const altitudeStart = html.indexOf('<section id="section-altitude-profile"');
console.log('Replacing Details between', newDetailsStart, 'and', altitudeStart);
html = html.slice(0, newDetailsStart) + generateGuidesHtml() + html.slice(altitudeStart);

// Section 7: Altitude Profile
const newAltitudeStart = html.indexOf('<section id="section-altitude-profile"');
const weatherStart = html.indexOf('<section id="section-weather"');
console.log('Replacing Altitude between', newAltitudeStart, 'and', weatherStart);
html = html.slice(0, newAltitudeStart) + generateAltitudeProfileHtml() + html.slice(weatherStart);

// Section 12: FAQs
const faqsStart = html.indexOf('<section id="section-faqs"');
const mainColEnd = html.indexOf('</div>\n\n        <!-- Sticky Booking Sidebar Column -->', faqsStart);
console.log('Replacing FAQs between', faqsStart, 'and', mainColEnd);
html = html.slice(0, faqsStart) + generateFaqsHtml() + html.slice(mainColEnd);

// Sidebar Booking Card
const sidebarStart = html.indexOf('<!-- Sticky Booking Sidebar Column -->');
const sidebarEnd = html.indexOf('</section>\n\n  <!-- You Might Also Like Section -->', sidebarStart);
console.log('Replacing Sidebar between', sidebarStart, 'and', sidebarEnd);
html = html.slice(0, sidebarStart) + generateSidebarHtml() + html.slice(sidebarEnd);

// Save output
fs.writeFileSync('trek/annapurna-circuit-trek/index.html', html, 'utf8');
console.log('Updated trek/annapurna-circuit-trek/index.html successfully! New size:', html.length);
