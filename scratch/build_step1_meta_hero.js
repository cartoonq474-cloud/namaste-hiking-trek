const fs = require('fs');

let html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');

// 1. Update Title and Canonical and OpenGraph
html = html.replace(/<title>[\s\S]*?<\/title>/i, '<title>Mera Peak Climbing 18 Days (6,476m) | Hinku Valley & Summit Expedition | Namaste Hiking Trek</title>');

html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"/i, '<link rel="canonical" href="https://namastehikingtrek.com/trek/mera-peak-climbing/"');
html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"/i, '<meta property="og:url" content="https://namastehikingtrek.com/trek/mera-peak-climbing/"');

const newDesc = 'Embark on an 18-day Mera Peak Climbing expedition (6,476m) through the remote Hinku Valley, crossing Zatrwa La (4,600m), with comprehensive training at Khare and high-altitude support.';
html = html.replace(/<meta\s+name="description"\s+content="[^"]*"/i, `<meta name="description" content="${newDesc}"`);
html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"/i, `<meta property="og:description" content="${newDesc}"`);

// 2. Update Hero Title & Subtitle
html = html.replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, '<h1 style="font-size: 2.8rem; margin-top: 6px; margin-bottom: 8px; color: var(--color-primary-navy);">Mera Peak Climbing</h1>');

// Update Hero text
const heroTextStart = html.indexOf('<p style="font-size: 1.15rem; color: var(--color-neutral-600); line-height: 1.7; margin-top: 12px; margin-bottom: 0;">');
const heroTextEnd = html.indexOf('</p>', heroTextStart);

if (heroTextStart !== -1 && heroTextEnd !== -1) {
  const newHeroText = `<p style="font-size: 1.15rem; color: var(--color-neutral-600); line-height: 1.7; margin-top: 12px; margin-bottom: 0;">
          Mera Peak Climbing is an 18-day Himalayan mountaineering expedition taking you from Kathmandu into the remote Hinku Valley, following a dramatic approach route via Chutanga, Zatrwa La (<span data-altitude-m="4600">4,600 m</span>), Kothe, Thangnak, and Khare before ascending toward Mera High Camp (<span data-altitude-m="5780">5,780 m</span>) and pushing for the summit at approximately <span data-altitude-m="6476">6,476 m / 21,247 ft</span>.
          <span id="ebc-more-text" style="display: none;">
            Combining gradual high-altitude trekking with supervised glacier training at Khare, dedicated UIAGM/NMA climbing Sherpa guides, full camping logistics at High Camp, and a built-in movable contingency day, this package offers an unforgettable transition from trekking to high-altitude Himalayan mountaineering surrounded by five 8,000m giants: Everest, Lhotse, Makalu, Cho Oyu, and Kanchenjunga.
          </span>
          <button id="ebc-toggle-btn" style="background: none; border: none; color: #10b981; font-weight: 700; font-size: 1.05rem; cursor: pointer; padding: 0; margin-left: 6px; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; vertical-align: middle; transition: opacity 0.2s ease;">
            Learn more <span style="font-size: 1.1rem; margin-left: 2px;">→</span>
          </button>`;
  html = html.slice(0, heroTextStart) + newHeroText + html.slice(heroTextEnd);
  console.log('Updated Hero Intro Text');
}

// 3. Update Facts Grid
const factsStartMarker = '<!-- Key Trip Facts Grid -->';
const trustBadgeMarker = '<!-- Trust Badges Section -->';

const factsStart = html.indexOf(factsStartMarker);
const factsEnd = html.indexOf(trustBadgeMarker);

if (factsStart !== -1 && factsEnd !== -1) {
  const newFactsHtml = `<!-- Key Trip Facts Grid -->
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
          Key Trip Facts & Expedition Overview
        </h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 24px 20px;">
          <!-- 1. Duration -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Total Duration</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">18 Calendar Days</span>
            </div>
          </div>

          <!-- 2. Peak Altitude -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22L12 2l8 20H4z"/><path d="M9 22l3-7 3 7H9z" fill="#008060"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Summit Elevation</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;"><span data-altitude-m="6476">6,476 m / 21,247 ft</span></span>
            </div>
          </div>

          <!-- 3. Climbing Grade -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Climbing Grade</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Alpine PD (Strenuous Glaciated)</span>
            </div>
          </div>

          <!-- 4. Region -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Trekking Region</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Remote Hinku Valley & Khumbu</span>
            </div>
          </div>

          <!-- 5. Approach Route -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Approach Route</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Lukla – Chutanga – Zatrwa La</span>
            </div>
          </div>

          <!-- 6. Glacier School Base -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Glacier School Base</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Khare (<span data-altitude-m="5045">5,045 m</span>)</span>
            </div>
          </div>

          <!-- 7. Overnight High Point -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 7l9-4 9 4v14H3V7z"/><polygon points="9 21 9 12 15 12 15 21"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Overnight High Point</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Mera High Camp (<span data-altitude-m="5780">5,780 m</span>)</span>
            </div>
          </div>

          <!-- 8. Accommodation -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Accommodation</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Teahouse Lodges + High Camp Tents</span>
            </div>
          </div>

          <!-- 9. Acclimatization Stays -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Acclimatization Stays</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Thangnak (Day 7) & Khare (Day 9)</span>
            </div>
          </div>

          <!-- 10. Contingency Buffers -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Contingency Days</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">2 Buffer Days (Day 12 & Day 17)</span>
            </div>
          </div>

          <!-- 11. Guiding Team -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">Climbing Team</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">UIAGM/NMA Sherpas (1:2 Ratio)</span>
            </div>
          </div>

          <!-- 12. DoT Permit Royalty -->
          <div class="trip-fact-item">
            <div style="width: 42px; height: 42px; background: #e6f7f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15h0M2 9.5h20"/></svg>
            </div>
            <div style="display: flex; flex-direction: column;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-neutral-500); font-weight: 700;">DoT Royalty (Sep 2025)</span>
              <span style="font-size: 1.05rem; color: var(--color-neutral-800); font-weight: 600;">Spring: $350 | Autumn: $175</span>
            </div>
          </div>
        </div>
      </div>
    </div>\n\n    `;

  html = html.slice(0, factsStart) + newFactsHtml + html.slice(factsEnd);
  console.log('Successfully replaced Key Trip Facts Grid');
} else {
  console.error('Could not find markers for factsStart or factsEnd');
}

fs.writeFileSync('trek/mera-peak-climbing/index.html', html, 'utf8');
console.log('Saved step 1 changes to trek/mera-peak-climbing/index.html');
