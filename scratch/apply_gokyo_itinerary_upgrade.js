const fs = require('fs');

const days = JSON.parse(fs.readFileSync('scratch/gokyo_days_data.json', 'utf8'));

// Helper to extract metric by label
function getMetric(day, label) {
  const m = day.metrics.find(x => x.label.toLowerCase().includes(label.toLowerCase()));
  return m ? m.val : '';
}

// Subtitles map for each day
const subtitles = {
  1: 'Kathmandu – approximately <span data-altitude-m="1400">1,400 m / 4,593 ft</span>',
  2: 'Kathmandu – approximately <span data-altitude-m="1400">1,400 m / 4,593 ft</span>',
  3: 'Lukla to Phakding – approximately <span data-altitude-m="2610">2,610 m / 8,563 ft</span>',
  4: 'Phakding to Namche Bazaar – approximately <span data-altitude-m="3440">3,440 m / 11,286 ft</span>',
  5: 'Namche Bazaar Acclimatization – approximately <span data-altitude-m="3440">3,440 m (Hike to ~3,900 m)</span>',
  6: 'Namche Bazaar to Dole – approximately <span data-altitude-m="4200">4,000–4,200 m / 13,123 ft</span>',
  7: 'Dole to Machhermo – approximately <span data-altitude-m="4470">4,470 m / 14,665 ft</span>',
  8: 'Machhermo Acclimatization – approximately <span data-altitude-m="4470">4,470 m (Ridge to ~4,700 m)</span>',
  9: 'Machhermo to Gokyo – approximately <span data-altitude-m="4790">4,790 m / 15,715 ft</span>',
  10: 'Gokyo Ri Summit & Lakes – approximately <span data-altitude-m="5357">5,357 m / 17,575 ft</span>',
  11: 'Gokyo to Dole – approximately <span data-altitude-m="4200">4,000–4,200 m / 13,123 ft</span>',
  12: 'Dole to Namche Bazaar – approximately <span data-altitude-m="3440">3,440 m / 11,286 ft</span>',
  13: 'Namche Bazaar to Lukla – approximately <span data-altitude-m="2850">2,850 m / 9,350 ft</span>',
  14: 'Lukla to Kathmandu – approximately <span data-altitude-m="1400">1,400 m / 4,593 ft</span>',
  15: 'Kathmandu – approximately <span data-altitude-m="1400">1,400 m / 4,593 ft</span>'
};

function generateItineraryHtml() {
  let cardsHtml = '';

  days.forEach((day, index) => {
    const isFirst = index === 0;
    const activeClass = isFirst ? ' active' : '';
    const subtitle = subtitles[day.dayNum] || `Day ${day.dayNum}`;
    const duration = getMetric(day, 'Duration') || 'Walking stage';
    const maxElev = getMetric(day, 'Elevation') || getMetric(day, 'Max Elevation') || 'High elevation';
    const gainLoss = getMetric(day, 'Gain/Loss') || 'Variable';
    const meals = getMetric(day, 'Meal') || 'Meals as scheduled';
    const overnight = getMetric(day, 'Overnight') || 'Mountain Lodge';

    let photosHtml = '';
    day.images.forEach(img => {
      photosHtml += `
            <div class="itinerary-photo-wrapper">
              <img loading="lazy" src="${img.src}" alt="${img.alt}">
            </div>`;
    });

    cardsHtml += `
        <!-- Day ${day.dayNum < 10 ? '0' + day.dayNum : day.dayNum} -->
        <div class="itinerary-card${activeClass}" data-day="${day.dayNum}">
          <div class="itinerary-header">
            <div class="itinerary-header-left">
              <h4 class="itinerary-day-title-new">
                <span class="day-label">Day ${day.dayNum}:</span> ${day.title}
              </h4>
              <p class="itinerary-day-subtitle-new">
                ${subtitle}
              </p>
            </div>
            <div class="itinerary-header-right">
              <div class="itinerary-toggle-btn-new">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>

          <div class="itinerary-content"${isFirst ? ' style="max-height: 1800px;"' : ''}>
            <div class="itinerary-content-inner">
              <div class="itinerary-metrics-list">
                <div class="itinerary-metric-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Duration: ${duration}</span>
                </div>
                <div class="itinerary-metric-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 2 22 22 22"></polygon>
                  </svg>
                  <span>Max Elevation: ${maxElev}</span>
                </div>
                <div class="itinerary-metric-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                  </svg>
                  <span>Elevation Gain/Loss: ${gainLoss}</span>
                </div>
              </div>

              <div class="itinerary-meta-box">
                <div class="itinerary-meta-box-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  </svg>
                  <span>Meals: ${meals}</span>
                </div>
                <div class="itinerary-meta-box-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                    <circle cx="12" cy="9" r="2.5"></circle>
                  </svg>
                  <span>Overnight: ${overnight}</span>
                </div>
              </div>

              <div class="itinerary-description">
                <p style="color: var(--color-neutral-700); font-size: 1.05rem; line-height: 1.7; margin: 0 0 16px 0;">
                  ${day.text}
                </p>
              </div>

              <div class="itinerary-photos-grid">
                ${photosHtml}
              </div>
            </div>
          </div>
        </div>
`;
  });

  return `<!-- Section 2: Itinerary -->
          <section id="section-itinerary" class="trek-detail-section">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 20px;">
              <h2 class="trek-section-title" style="margin-bottom: 0;">Gokyo Lakes Trek Itinerary: 15-Day Detailed Route</h2>
              <div class="itinerary-controls">
                <button type="button" class="btn btn-outline" id="itin-expand-all-btn" style="font-size: 0.85rem; padding: 6px 14px; border-radius: 20px; cursor: pointer; border: 1px solid var(--color-neutral-300); background: var(--color-white); font-weight: 600; color: var(--color-primary-navy);">
                  Expand All
                </button>
              </div>
            </div>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-top: 16px; margin-bottom: 16px; line-height: 1.7;">
              Our 15-day Gokyo Lake Trek itinerary is carefully engineered for optimal acclimatization and deep immersion into the pristine Gokyo Valley. Departing the crowded classic Everest Base Camp highway at Sanasa / Mong La, the trail climbs through tranquil birch forests to Dole, Machhermo, and the five turquoise glacial lakes of Gokyo, culminating with the legendary panorama from the summit of Gokyo Ri (<span data-altitude-m="5357">5,357 m / 17,575 ft</span>).
            </p>

            <!-- Pre-Trek Logistics Notice -->
            <div style="background: #e6f7f0; border-left: 4px solid var(--color-copper-orange); padding: 18px 22px; border-radius: 0 10px 10px 0; margin-bottom: 24px;">
              <h4 style="margin: 0 0 6px 0; color: var(--color-primary-navy); font-size: 1.05rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                Before your trek starts
              </h4>
              <p style="margin: 0; font-size: 0.95rem; color: var(--color-neutral-700); line-height: 1.6;">
                Treat your selected start date as your Kathmandu arrival day. We recommend arriving with 1–2 days of personal buffer for international travel, briefing, equipment inspection in Thamel, and potential weather-related domestic flight adjustments to and from Lukla.
              </p>
            </div>

            <div class="itinerary-timeline">
              ${cardsHtml}
            </div>
          </section>`;
}

// Read original Gokyo page
let gokyoHtml = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

// Replace section-itinerary
const itinStart = gokyoHtml.indexOf('<section id="section-itinerary"');
const itinEnd = gokyoHtml.indexOf('</section>', itinStart) + '</section>'.length;

if (itinStart === -1 || itinEnd === -1) {
  console.error('Could not locate section-itinerary');
  process.exit(1);
}

const newItinSection = generateItineraryHtml();
gokyoHtml = gokyoHtml.slice(0, itinStart) + newItinSection + gokyoHtml.slice(itinEnd);

// Fix section-dates
gokyoHtml = gokyoHtml.replace(
  'Booking Dates & Availability for EBC trek',
  'Booking Dates & Availability for Gokyo Lake Trek'
);
gokyoHtml = gokyoHtml.replace(
  'data-trek-title="Everest Base Camp Private Trek"',
  'data-trek-title="Gokyo Lake Private Trek"'
);

fs.writeFileSync('trek/gokyo-lakes-trek/index.html', gokyoHtml, 'utf8');
console.log('Successfully updated trek/gokyo-lakes-trek/index.html!');
