const fs = require('fs');

const rawDays = JSON.parse(fs.readFileSync('scratch/parsed_itinerary_days.json', 'utf8'));
const images = fs.readdirSync('images/treks/everest-cho-la-pass');

function formatAltitude(text) {
  return text.replace(/(\d{1,2},\d{3})\s*(?:metres|meters|m\b)/gi, (match, p1) => {
    const num = parseInt(p1.replace(',', ''), 10);
    return `<span data-altitude-m="${num}">${num.toLocaleString()} m</span>`;
  });
}

function formatSubtitle(text) {
  return text.replace(/(\d{1,2},\d{3})\s*(?:metres|meters|m\b)/gi, (match, p1) => {
    const num = parseInt(p1.replace(',', ''), 10);
    const ft = Math.round(num * 3.28084);
    return `<span data-altitude-m="${num}">${num.toLocaleString()} m / ${ft.toLocaleString()} ft</span>`;
  });
}

let cardsHtml = '';

rawDays.forEach((d, index) => {
  const lines = d.text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  
  let distance = '';
  let walking = '';
  let accommodation = '';
  let activity = '';
  let transfer = '';
  let flight = '';
  let altitudeInfo = [];
  let descLines = [];
  
  for (let line of lines) {
    if (line.toLowerCase().startsWith('distance:')) {
      distance = line.replace(/distance:\s*/i, '');
    } else if (line.toLowerCase().startsWith('walking:')) {
      walking = line.replace(/walking:\s*/i, '');
    } else if (line.toLowerCase().startsWith('accommodation:')) {
      accommodation = line.replace(/accommodation:\s*/i, '');
    } else if (line.toLowerCase().startsWith('activity:')) {
      activity = line.replace(/activity:\s*/i, '');
    } else if (line.toLowerCase().startsWith('transfer:')) {
      transfer = line.replace(/transfer:\s*/i, '');
    } else if (line.toLowerCase().startsWith('flight:')) {
      flight = line.replace(/flight:\s*/i, '');
    } else if (line.includes('Approximately') && (line.includes(' m') || line.includes('metres')) && !line.includes('The ') && !line.includes('Kongma La is')) {
      altitudeInfo.push(line);
    } else {
      descLines.push(line);
    }
  }

  let subtitle = altitudeInfo.join(' · ');
  if (!subtitle) {
    if (d.dayNum === 1 || d.dayNum === 2 || d.dayNum === 19 || d.dayNum === 20 || d.dayNum === 21) {
      subtitle = 'Kathmandu – 1,355 m';
    }
  }
  subtitle = formatSubtitle(subtitle);

  let displayTitle = d.title.replace(/^Day \d+:\s*/i, '');
  displayTitle = displayTitle.charAt(0).toUpperCase() + displayTitle.slice(1);

  if (!distance) {
    if (d.dayNum === 1 || d.dayNum === 2 || d.dayNum === 20 || d.dayNum === 21) distance = 'City exploration / Rest';
    else if (d.dayNum === 9) distance = '4.1 km';
    else if (d.dayNum === 15) distance = '4.6 km';
    else distance = 'Trek stage';
  }
  if (!walking) {
    if (transfer) walking = transfer;
    else if (d.dayNum === 1) walking = 'Airport transfer (20–30 min)';
    else if (d.dayNum === 2) walking = 'Sightseeing (4–5 hours)';
    else if (d.dayNum === 9) walking = 'About 2.5 hours';
    else if (d.dayNum === 15) walking = '3 to 4 hours';
    else if (d.dayNum === 20) walking = 'Flexible rest day';
    else if (d.dayNum === 21) walking = 'Airport transfer';
    else walking = '5 to 7 hours';
  }
  if (!accommodation) {
    accommodation = (d.dayNum <= 2 || d.dayNum >= 19) ? '3-Star Hotel in Kathmandu' : 'Mountain Teahouse';
  }

  let meals = 'Breakfast (B), Lunch (L), Dinner (D)';
  if (d.dayNum === 1) meals = 'Welcome Dinner (D)';
  else if (d.dayNum === 2) meals = 'Breakfast (B)';
  else if (d.dayNum === 19) meals = 'Breakfast (B) & Farewell Dinner (D)';
  else if (d.dayNum === 20) meals = 'Breakfast (B)';
  else if (d.dayNum === 21) meals = 'Breakfast (B)';

  let overnight = 'Kathmandu';
  if (d.dayNum === 3) overnight = 'Phakding';
  else if (d.dayNum === 4 || d.dayNum === 5) overnight = 'Namche Bazaar';
  else if (d.dayNum === 6) overnight = 'Tengboche';
  else if (d.dayNum === 7 || d.dayNum === 8) overnight = 'Dingboche';
  else if (d.dayNum === 9) overnight = 'Chhukung';
  else if (d.dayNum === 10) overnight = 'Lobuche';
  else if (d.dayNum === 11) overnight = 'Gorak Shep';
  else if (d.dayNum === 12) overnight = 'Dzongla';
  else if (d.dayNum === 13) overnight = 'Thangnak (Dragnak)';
  else if (d.dayNum === 14 || d.dayNum === 15) overnight = 'Gokyo';
  else if (d.dayNum === 16) overnight = 'Lungden';
  else if (d.dayNum === 17) overnight = 'Namche Bazaar';
  else if (d.dayNum === 18) overnight = 'Lukla';

  let descHtml = '';
  let inList = false;

  for (let i = 0; i < descLines.length; i++) {
    const l = descLines[i];
    const isListItem = l.startsWith('•') || l.startsWith('-') || 
      (l.length < 40 && !l.endsWith('.') && !l.includes('The ') && !l.includes('This ') && !l.includes('Because '));

    if (isListItem) {
      if (!inList) {
        descHtml += '<ul style="margin: 10px 0 16px 20px; line-height: 1.6; color: var(--color-neutral-700); font-size: 0.98rem;">';
        inList = true;
      }
      const itemText = l.replace(/^[•\-]\s*/, '');
      descHtml += `<li>${itemText}</li>`;
    } else {
      if (inList) {
        descHtml += '</ul>';
        inList = false;
      }
      let pText = formatAltitude(l);
      descHtml += `<p style="margin-bottom: 12px; line-height: 1.65; color: var(--color-neutral-700); font-size: 0.98rem;">${pText}</p>`;
    }
  }
  if (inList) {
    descHtml += '</ul>';
  }

  const imgStartIndex = (index * 2) % images.length;
  const p1 = images[imgStartIndex];
  const p2 = images[(imgStartIndex + 1) % images.length];
  const p3 = images[(imgStartIndex + 2) % images.length];
  const p4 = images[(imgStartIndex + 3) % images.length];

  const activeClass = d.dayNum === 1 ? ' active' : '';

  cardsHtml += `
              <!-- Day ${String(d.dayNum).padStart(2, '0')} -->
              <div class="itinerary-card${activeClass}">
                <div class="itinerary-header">
                  <div class="itinerary-header-left">
                    <h4 class="itinerary-day-title-new">
                      <span class="day-label">Day ${d.dayNum}:</span> ${displayTitle}
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
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>Hiking / Time: ${walking}</span>
                      </div>
                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M13 4v16M17 4v16M7 4v16M3 4h18M3 20h18"></path>
                        </svg>
                        <span>Distance: ${distance}</span>
                      </div>
                      <div class="itinerary-metric-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        <span>Accommodation: ${accommodation}</span>
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
                      ${descHtml}
                    </div>

                    <div class="itinerary-photos-grid">
                      <div class="itinerary-photo-wrapper">
                        <img loading="lazy" src="../../images/treks/everest-cho-la-pass/${p1}" alt="Everest Three Passes Trek Day ${d.dayNum}">
                      </div>
                      <div class="itinerary-photo-wrapper">
                        <img loading="lazy" src="../../images/treks/everest-cho-la-pass/${p2}" alt="Everest Three Passes Trek Day ${d.dayNum}">
                      </div>
                      <div class="itinerary-photo-wrapper">
                        <img loading="lazy" src="../../images/treks/everest-cho-la-pass/${p3}" alt="Everest Three Passes Trek Day ${d.dayNum}">
                      </div>
                      <div class="itinerary-photo-wrapper">
                        <img loading="lazy" src="../../images/treks/everest-cho-la-pass/${p4}" alt="Everest Three Passes Trek Day ${d.dayNum}">
                      </div>
                    </div>
                  </div>
                </div>
              </div>\n`;
});

const fullItinSectionHtml = `<section id="section-itinerary" class="trek-detail-section">
            <h2 class="trek-section-title">Everest Three High Passes Trek Itinerary: 21-Day Circuit Details</h2>
            <p style="font-size: 1.05rem; color: var(--color-neutral-600); line-height: 1.6; margin-bottom: 24px; max-width: 800px;">
              Our comprehensive 21-day expedition itinerary is meticulously structured to maximize safety, proper acclimatization, and high pass success. Crossing Kongma La first, reaching Everest Base Camp and Kala Patthar, crossing Cho La to Gokyo, and concluding over Renjo La to Lungden, this circuit provides a complete journey through four Khumbu valleys.
            </p>
            
            <div class="itinerary-timeline">
${cardsHtml}
            </div>

            <!-- Custom Trip CTA Banner Card -->
            <div class="custom-trip-cta-card" style="margin-top: 36px;">
              <div class="custom-trip-cta-left">
                <h3 class="custom-trip-cta-title">Want a Tailor-Made Three Passes Itinerary?</h3>
                <p class="custom-trip-cta-subtitle">Need extra acclimatization days, a reverse Renjo La-first route, or a private departure? Talk with our Khumbu trekking experts.</p>
              </div>
              <div class="custom-trip-cta-right">
                <div class="cta-dotted-arc"></div>
                <a href="#" class="btn-plan-trip-cyan open-inquiry-modal-btn" data-inquiry-type="Tailor-Made Custom Trip">Plan Your Custom Trip</a>
              </div>
            </div>
          </section>`;

let html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const s2Start = html.indexOf('<section id="section-itinerary"');
const s3Start = html.indexOf('<section id="section-includes"');

if (s2Start === -1 || s3Start === -1) {
  console.error('Itinerary boundaries not found!');
  process.exit(1);
}

const before = html.slice(0, s2Start);
const after = html.slice(s3Start);

html = before + fullItinSectionHtml + '\n\n          ' + after;

fs.writeFileSync('trek/everest-three-passes-trek/index.html', html, 'utf8');
console.log('Successfully applied Step 3: 21-Day Itinerary Section!');

