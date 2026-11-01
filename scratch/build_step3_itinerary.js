const fs = require('fs');

const parsed = JSON.parse(fs.readFileSync('scratch/parsed_user_content.json', 'utf8'));
const lines = parsed.itineraryText.split('\n');

const dayIndices = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim().match(/^Day\s+\d+:/i)) {
    dayIndices.push(i);
  }
}

const dayObjects = [];
for (let i = 0; i < dayIndices.length; i++) {
  const start = dayIndices[i];
  const end = (i + 1 < dayIndices.length) ? dayIndices[i + 1] : lines.length;
  const chunk = lines.slice(start, end).map(l => l.trim()).filter(l => l.length > 0);
  
  const headerLine = chunk[0];
  const dayNumMatch = headerLine.match(/^Day\s+(\d+):\s*(.*)/i);
  const dayNum = parseInt(dayNumMatch[1], 10);
  const rawTitle = dayNumMatch[2];
  
  let maxElevation = '';
  let overnightElevation = '';
  let walkingDuration = '';
  let accommodation = '';
  const narrative = [];
  
  for (let j = 1; j < chunk.length; j++) {
    const l = chunk[j];
    if (l.toLowerCase().startsWith('maximum elevation:') || l.toLowerCase().startsWith('summit elevation:')) {
      maxElevation = l.split(':')[1].trim();
    } else if (l.toLowerCase().startsWith('overnight elevation:') || l.toLowerCase().startsWith('high camp elevation:') || l.toLowerCase().startsWith('elevation:')) {
      overnightElevation = l.split(':')[1].trim();
    } else if (l.toLowerCase().startsWith('walking duration:') || l.toLowerCase().startsWith('estimated climbing and descent time:') || l.toLowerCase().startsWith('activity:')) {
      walkingDuration = l.split(':')[1].trim();
    } else if (l.toLowerCase().startsWith('accommodation:')) {
      accommodation = l.split(':')[1].trim();
    } else {
      narrative.push(l);
    }
  }
  
  dayObjects.push({
    dayNum,
    rawTitle,
    maxElevation,
    overnightElevation,
    walkingDuration,
    accommodation,
    narrative
  });
}

// Image assignment helper
const imgPool = [
  { file: 'mera-peak-trekking-group-mountain-village-02.jpg', alt: 'Mera Peak Trekking Group in Mountain Village' },
  { file: 'mera-peak-hiker-glacial-lake-03.jpg', alt: 'Hiker by Pristine Glacial Lake on Mera Peak Trail' },
  { file: 'mera-peak-climbers-snowy-trail-01.jpg', alt: 'Climbers Trekking along Snowy Alpine Trail to Mera Peak' },
  { file: 'mera-peak-peak-sunrise-snowfield-04.jpg', alt: 'Sunrise across High Altitude Snowfield below Mera Peak' },
  { file: 'mera-peak-trekkers-glacial-lake-08.jpg', alt: 'Trekkers Navigating Glacial Basin in Hinku Valley' },
  { file: 'mera-peak-glacial-lake-mountain-09.jpg', alt: 'Turquoise Glacial Lake Surrounded by Himalayan Peaks' },
  { file: 'mera-peak-climbers-sunrise-snowfield-10.jpg', alt: 'Climbers Navigating Snowfields at Sunrise on Mera Peak' },
  { file: 'mera-peak-summit-route-snow-07.jpg', alt: 'Snow Summit Ridge Route towards Mera Peak' },
  { file: 'mera-peak-climbers-summit-banner-05.jpg', alt: 'Summit Celebration on Mera Peak (6,476m)' },
  { file: 'mera-peak-climber-summit-banner-06.jpg', alt: 'Climber on Summit with Himalayan Panorama' },
  { file: 'mera-peak-climbers-summit-11.jpg', alt: 'Climbers Standing Proud on Mera Peak Summit Ridge' },
  { file: 'mera-peak-himalayan-summit-panorama-12.jpg', alt: 'Unrivaled 360-Degree Himalayan Mountain Panorama' }
];

function formatAltitudes(text) {
  return text.replace(/(\d{1,2}(?:,\d{3})*)\s*m(?:etres|eters|eter|s)?/gi, (match, p1) => {
    const num = parseInt(p1.replace(/,/g, ''), 10);
    if (num >= 1000 && num <= 8848) {
      return `<span data-altitude-m="${num}">${num.toLocaleString()} m</span>`;
    }
    return match;
  });
}

// Build 18 Day Cards
const cardsHtml = dayObjects.map((d, index) => {
  const isFirst = d.dayNum === 1;
  const activeClass = isFirst ? 'itinerary-card active' : 'itinerary-card';
  
  // Clean Title
  const cleanTitle = d.rawTitle.charAt(0).toUpperCase() + d.rawTitle.slice(1);
  
  // Subtitle
  let subtitle = '';
  if (d.maxElevation && d.overnightElevation) {
    subtitle = `Max: ${d.maxElevation} • Overnight: ${d.overnightElevation}`;
  } else if (d.maxElevation) {
    subtitle = `Elevation: ${d.maxElevation}`;
  } else if (d.overnightElevation) {
    subtitle = `Elevation: ${d.overnightElevation}`;
  } else {
    subtitle = `Elevation: 1,350 m to 6,476 m`;
  }
  subtitle = formatAltitudes(subtitle);

  // Metrics
  const durationText = d.walkingDuration || (d.dayNum <= 2 || d.dayNum >= 17 ? 'Full day schedule / transfers' : '4 to 6 hours');
  const accomText = d.accommodation || (d.dayNum <= 2 || d.dayNum >= 16 ? '3-Star Hotel in Kathmandu' : (d.dayNum === 10 ? 'High-Altitude Expedition Tents (Mera High Camp)' : 'Local Mountain Teahouse / Lodge'));
  
  // Meals
  let mealsText = 'Breakfast, Lunch & Dinner';
  if (d.dayNum === 1) mealsText = 'Welcome Dinner (Traditional Nepali Feast)';
  else if (d.dayNum === 2) mealsText = 'Breakfast (Sightseeing & Gear Audit Day)';
  else if (d.dayNum === 16) mealsText = 'Breakfast (Kathmandu Return)';
  else if (d.dayNum === 17) mealsText = 'Breakfast & Celebration Farewell Dinner';
  else if (d.dayNum === 18) mealsText = 'Breakfast (Departure Day)';

  // Overnight location
  let overnightLoc = '';
  if (d.dayNum <= 2 || d.dayNum >= 16) overnightLoc = 'Kathmandu (<span data-altitude-m="1350">1,350 m</span>)';
  else if (d.dayNum === 3) overnightLoc = 'Chutanga (<span data-altitude-m="3450">3,450 m</span>)';
  else if (d.dayNum === 4) overnightLoc = 'Thuli Kharka / Zatrabok (<span data-altitude-m="4300">4,300 m</span>)';
  else if (d.dayNum === 5) overnightLoc = 'Kothe (<span data-altitude-m="3600">3,600 m</span>)';
  else if (d.dayNum === 6 || d.dayNum === 7) overnightLoc = 'Thangnak (<span data-altitude-m="4350">4,350 m</span>)';
  else if (d.dayNum === 8 || d.dayNum === 9 || d.dayNum === 11 || d.dayNum === 12) overnightLoc = 'Khare (<span data-altitude-m="5045">5,045 m</span>)';
  else if (d.dayNum === 10) overnightLoc = 'Mera High Camp (<span data-altitude-m="5780">5,780 m</span>)';
  else if (d.dayNum === 13) overnightLoc = 'Kothe (<span data-altitude-m="3600">3,600 m</span>)';
  else if (d.dayNum === 14) overnightLoc = 'Thuli Kharka (<span data-altitude-m="4250">4,250 m</span>)';
  else if (d.dayNum === 15) overnightLoc = 'Lukla (<span data-altitude-m="2850">2,850 m</span>)';

  // Paragraphs
  const parasHtml = d.narrative.map(p => `<p>${formatAltitudes(p)}</p>`).join('\n                      ');

  // Images
  const img1 = imgPool[(index * 2) % imgPool.length];
  const img2 = imgPool[(index * 2 + 1) % imgPool.length];

  return `              <!-- Day ${String(d.dayNum).padStart(2, '0')} -->
              <div class="${activeClass}">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day ${d.dayNum}:</span> ${cleanTitle}
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
                <div class="itinerary-content">
                  <div class="itinerary-content-inner">
                    <div class="itinerary-metrics-list">
                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>Duration: ${durationText}</span>
                      </div>
                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        <span>Accommodation: ${accomText}</span>
                      </div>
                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polygon points="12 2 2 22 22 22"></polygon>
                        </svg>
                        <span>Stage: ${d.dayNum <= 2 ? 'Kathmandu Staging' : (d.dayNum <= 8 ? 'Hinku Valley Approach' : (d.dayNum <= 12 ? 'High Camp & Summit Push' : 'Descent & Return'))}</span>
                      </div>
                    </div>

                    <div class="itinerary-meta-box">
                      <div class="itinerary-meta-box-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                        </svg>
                        <span>Meals: ${mealsText}</span>
                      </div>
                      <div class="itinerary-meta-box-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle>
                        </svg>
                        <span>Overnight: ${overnightLoc}</span>
                      </div>
                    </div>

                    <div class="itinerary-description">
                      ${parasHtml}
                    </div>

                    <div class="itinerary-photos-grid">
                      <div class="itinerary-photo-wrapper">
                        <img loading="lazy" src="../../images/treks/mera-peak/${img1.file}" alt="${img1.alt}">
                      </div>
                      <div class="itinerary-photo-wrapper">
                        <img loading="lazy" src="../../images/treks/mera-peak/${img2.file}" alt="${img2.alt}">
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
}).join('\n\n');

const fullSection2Html = `<section id="section-itinerary" class="trek-detail-section">
            <h2 class="trek-section-title">Mera Peak Climbing Itinerary: Day by Day Details</h2>

            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-top: 16px; margin-bottom: 16px; line-height: 1.7;">
              Our 18-day Mera Peak expedition itinerary is engineered with precision around gradual physiological acclimatization, technical preparation, and mountain safety. Following a classic trekking approach through Chutanga and over the high mountain pass of Zatrwa La (<span data-altitude-m="4600">4,600 m</span>), the trail descends into the untouched, pristine wilderness of the Hinku Valley, progressing through Kothe (<span data-altitude-m="3600">3,600 m</span>), Thangnak (<span data-altitude-m="4350">4,350 m</span>), and Khare Base Camp at <span data-altitude-m="5045">5,045 m (16,551 ft)</span>.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The itinerary includes dedicated acclimatization stays at Thangnak, supervised glacier skills training at Khare, an overnight at Mera High Camp (<span data-altitude-m="5780">5,780 m</span>), our 2:00 AM summit push to Mera Peak (<span data-altitude-m="6476">6,476 m</span>), a built-in Day 12 field contingency day for weather flexibility, and a scenic return traverse back over Zatrwa La to Lukla and Kathmandu.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.7;">
              Daily walking times and stage distances are approximate reference values. Pacing is carefully managed by our certified UIAGM/NMA Climbing Sherpas based on group fitness, altitude response, and prevailing snow conditions to maximize comfort, safety, and summit success.
            </p>

            <h3 style="font-size: 1.35rem; color: var(--color-primary-navy); font-weight: 700; margin-top: 32px; margin-bottom: 14px; line-height: 1.35;">
              Before Your Mera Peak Expedition Starts
            </h3>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              The departure date you select is your arrival date in Kathmandu (Day 1). Day 2 is fully dedicated to official expedition permits, personal gear audits, and technical climbing briefings before flying to Lukla on Day 3.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 16px; line-height: 1.7;">
              During your pre-trip briefing in Kathmandu, your lead Climbing Sherpa will review the daily profile, cold weather gear protocols, rope techniques, emergency evacuation procedures, and answer any final questions. Missing items can be rented or purchased in Thamel with professional guidance.
            </p>
            <p style="color: var(--color-neutral-700); font-size: 1.05rem; margin-bottom: 30px; line-height: 1.7;">
              During peak trekking windows (October–November and April–May), Nepal's Civil Aviation Authority may route Lukla flights via Manthali/Ramechhap Airport (a scenic 4-hour pre-dawn drive from Kathmandu). We handle all ground logistics, private vehicle transfers, and flight boarding arrangements seamlessly.
            </p>
            
            <div class="itinerary-timeline">
${cardsHtml}
            </div>

            <!-- Custom Trip CTA Callout -->
            <div class="custom-trip-cta">
              <div class="custom-trip-cta-left">
                <div class="cta-sparkle-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3>Looking for a Tailor-Made Mera Peak Expedition?</h3>
                <p>Want a private climb, an extended traverse over Amphu Lapcha Pass into Everest, or custom departure dates? Tell us your group size and preferences — our alpine specialists will design the perfect custom expedition plan within 24 hours.</p>
              </div>
              <div class="custom-trip-cta-right">
                <div class="cta-dotted-arc"></div>
                <a href="#" class="btn-plan-trip-cyan open-inquiry-modal-btn" data-inquiry-type="Tailor-Made Custom Trip">Plan Your Custom Climb</a>
              </div>
            </div>
          </section>\n\n          <!-- Section 3: Includes and Excludes -->\n          `;

// Replace section-itinerary in html
let html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');
const itinStart = html.indexOf('<section id="section-itinerary"');
const incMarker = '<!-- Section 3: Includes and Excludes -->';
const incStart = html.indexOf(incMarker);

if (itinStart !== -1 && incStart !== -1) {
  html = html.slice(0, itinStart) + fullSection2Html + html.slice(incStart + incMarker.length);
  fs.writeFileSync('trek/mera-peak-climbing/index.html', html, 'utf8');
  console.log('Successfully replaced Section 2 (18-Day Itinerary)!');
} else {
  console.error('Could not find markers for Section 2');
}
