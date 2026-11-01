const fs = require('fs');

const userContent = fs.readFileSync('scratch/three_passes_content.txt', 'utf8');

function getBetween(content, startMarker, endMarker) {
  const s = content.indexOf(startMarker);
  if (s === -1) return '';
  const e = endMarker ? content.indexOf(endMarker, s + startMarker.length) : content.length;
  if (e === -1) return '';
  return content.slice(s, e).trim();
}

function formatAltitude(text) {
  return text.replace(/(\d{1,2},\d{3})\s*(?:metres|meters|m\b)/gi, (match, p1) => {
    const num = parseInt(p1.replace(',', ''), 10);
    return `<span data-altitude-m="${num}">${num.toLocaleString()} m</span>`;
  });
}

function convertToHtml(rawText) {
  const lines = rawText.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  let html = '';
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];

    // Check if line is a heading/subheading
    const isHeading = (l.length < 55 && !l.endsWith('.') && !l.endsWith(',') && !l.endsWith(';') && 
      !l.startsWith('-') && !l.startsWith('•') && (l.endsWith('?') || /^[A-Z][a-zA-Z0-9\s–—,/()]+$/.test(l)) &&
      !l.includes('The ') && !l.includes('This ') && !l.includes('These ') && !l.includes('Because '));

    const isListItem = l.startsWith('•') || l.startsWith('-') || 
      (l.length < 45 && !l.endsWith('.') && !l.endsWith('?') && !isHeading);

    if (isHeading) {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      html += `<h4 style="font-size: 1.1rem; color: var(--color-primary-navy); font-weight: 700; margin: 20px 0 10px 0;">${formatAltitude(l)}</h4>`;
    } else if (isListItem) {
      if (!inList) {
        html += '<ul style="margin: 8px 0 16px 20px; line-height: 1.6; color: var(--color-neutral-700); font-size: 0.96rem;">';
        inList = true;
      }
      const itemText = l.replace(/^[•\-]\s*/, '');
      html += `<li>${formatAltitude(itemText)}</li>`;
    } else {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      html += `<p style="margin-bottom: 12px; line-height: 1.65; color: var(--color-neutral-700); font-size: 0.96rem;">${formatAltitude(l)}</p>`;
    }
  }
  if (inList) {
    html += '</ul>';
  }
  return html;
}

const icons = {
  'accommodation': '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
  'bathrooms-showers': '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M12 2v10"/><path d="M8 6l4-4 4 4"/>',
  'electricity-wifi': '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
  'food': '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
  'high-pass-nutrition': '<path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"></path>',
  'safe-water': '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
  'difficulty': '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>',
  'training': '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
  'acclimatization': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
  'three-passes-breakdown': '<polygon points="12 2 2 22 22 22"></polygon>',
  'go-no-go': '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
  'best-time': '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
  'route-alternatives': '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
  'beginners-families': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
  'flight-lukla': '<path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>',
  'permits': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
  'guide-support': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line>',
  'culture-heritage': '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>',
  'emergency-evacuation': '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>',
  'insurance': '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
  'cost-booking': '<rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>'
};

const topicDefs = [
  { id: 'accommodation', title: 'Hotel & Teahouse Expectations in the Khumbu', start: 'Hotel and teahouse expectations', end: 'Bathrooms and washing facilities' },
  { id: 'bathrooms-showers', title: 'Bathrooms, Washing Facilities & Hot Showers', start: 'Bathrooms and washing facilities', end: 'Electricity, charging and Wi-Fi' },
  { id: 'electricity-wifi', title: 'Electricity, Device Charging & Wi-Fi Connectivity', start: 'Electricity, charging and Wi-Fi', end: 'Meals, menus and package coverage' },
  { id: 'food', title: 'Meals, Menus & High-Altitude Mountain Food', start: 'Meals, menus and package coverage', end: 'Eating before and during a high-pass day' },
  { id: 'high-pass-nutrition', title: 'High-Pass Nutrition, Low Appetite & Energy Recovery', start: 'Eating before and during a high-pass day', end: 'Safe drinking water and hydration' },
  { id: 'safe-water', title: 'Safe Drinking Water, Hydration & Altitude Health', start: 'Safe drinking water and hydration', end: 'Difficulty, fitness and acclimatization' },
  { id: 'difficulty', title: 'Walking Demands, Terrain & Cumulative Fatigue', start: 'Walking demands and previous experience', end: 'Prepare before departure' },
  { id: 'training', title: '12-Week Physical Training Plan & Boot Testing', start: 'Prepare before departure', end: 'Namche and Dingboche acclimatization' },
  { id: 'acclimatization', title: 'Acclimatization Strategy & Sleeping Elevation Science', start: 'Namche and Dingboche acclimatization', end: 'The Three Passes, terrain and route decisions' },
  { id: 'three-passes-breakdown', title: 'The Three Passes: Kongma La, Cho La & Renjo La Breakdown', start: 'The Three Passes, terrain and route decisions', end: 'Deciding whether a crossing can proceed' },
  { id: 'go-no-go', title: 'Go / No-Go Decision Framework & Turnaround Management', start: 'Deciding whether a crossing can proceed', end: 'Best time and mountain weather' },
  { id: 'best-time', title: 'Best Seasons & High-Altitude Mountain Weather', start: 'Best time and mountain weather', end: 'Route alternatives and traveler suitability' },
  { id: 'route-alternatives', title: 'Route Alternatives, Reverse Circuit & Shorter Variations', start: 'Route alternatives and traveler suitability', end: 'Beginners, families and older trekkers' },
  { id: 'beginners-families', title: 'Beginners, Families & Older Trekkers Readiness', start: 'Beginners, families and older trekkers', end: 'Flights, permits and transport logistics' },
  { id: 'flight-lukla', title: 'Lukla Flights, Ramechhap Transfer & Baggage Allowances', start: 'Flights, permits and transport logistics', end: 'Permits, registrations and guide arrangements' },
  { id: 'permits', title: 'Permits, Registrations & National Park Regulations', start: 'Permits, registrations and guide arrangements', end: 'Guide support, porter baggage and responsible trekking' },
  { id: 'guide-support', title: 'Sherpa Guide Credentials, Support Team & Porter Welfare', start: 'Guide support, porter baggage and responsible trekking', end: 'Sherpa culture and religious sites' },
  { id: 'culture-heritage', title: 'Sherpa Culture, Sacred Sites & Responsible Trekking', start: 'Sherpa culture and religious sites', end: 'Safety, emergency response and insurance' },
  { id: 'emergency-evacuation', title: 'Emergency Response, AMS Assessment & Evacuation', start: 'Safety, emergency response and insurance', end: 'Insurance for the actual altitude and activity' },
  { id: 'insurance', title: 'Travel Insurance Requirements & High-Altitude Coverage', start: 'Insurance for the actual altitude and activity', end: 'Cost, money and booking preparation' },
  { id: 'cost-booking', title: 'Package Cost Factors, Cash Planning & Booking Confirmation', start: 'Cost, money and booking preparation', end: 'Altitude profile of the 21-day itinerary' }
];

let cardsHtml = '';

topicDefs.forEach(t => {
  const raw = getBetween(userContent, t.start, t.end);
  const bodyHtml = convertToHtml(raw);
  const svgIcon = icons[t.id] || '<circle cx="12" cy="12" r="10"></circle>';

  cardsHtml += `
                <!-- Item: ${t.id} -->
                <div class="detail-accordion-card" data-detail-id="${t.id}">
                  <div class="detail-accordion-header">
                    <div class="detail-accordion-header-left">
                      <div class="detail-icon-container">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          ${svgIcon}
                        </svg>
                      </div>
                      <h3 class="detail-header-title">${t.title}</h3>
                    </div>
                    <div class="detail-accordion-header-right">
                      <div class="detail-check-bubble">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div class="detail-arrow-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="detail-accordion-content">
                    <div class="detail-accordion-content-inner">
                      ${bodyHtml}
                    </div>
                  </div>
                </div>\n`;
});

const detailsSectionHtml = `<section id="section-details" class="trek-detail-section">
            <div class="details-section-container">
              <!-- Heading -->
              <div class="details-title-wrapper">
                <h2 class="details-main-title">Read before you book, Everest Three High Passes Trek</h2>
                <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>
              </div>

              <!-- Subtitle Paragraphs -->
              <p class="details-subtitle-text">To help you prepare thoroughly for the demanding Everest Three Passes circuit, we have compiled detailed operational guidance on high-altitude accommodation, meals, pass terrain, training plans, flight logistics, and emergency protocols.</p>
              <p class="details-subtitle-text" style="margin-bottom: 24px;">If you have any specific questions about gear, route options, or acclimatization, message our Kathmandu guiding team directly on <a href="https://wa.me/9779851000000" target="_blank" style="color: #008060; font-weight: 700; text-decoration: underline;">WhatsApp</a>.</p>

              <!-- Interactive Progress Tracker Badge -->
              <div class="details-progress-wrapper">
                <div class="details-progress-badge">
                  <div class="details-progress-ring-box">
                    <svg width="44" height="44">
                      <circle class="details-progress-ring-bg" r="18" cx="22" cy="22"></circle>
                      <circle class="details-progress-ring-bar" r="18" cx="22" cy="22"></circle>
                    </svg>
                  </div>
                  <div class="details-progress-text-box">
                    <span class="details-progress-count">0/21 read</span>
                    <span class="details-progress-status">Nice start — keep going</span>
                  </div>
                </div>
              </div>

              <!-- Accordion List (21 Items) -->
              <div class="detail-accordion-list">
${cardsHtml}
              </div>
            </div>
          </section>`;

let html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const sDetailsStart = html.indexOf('<section id="section-details"');
const sAltStart = html.indexOf('<section id="section-altitude-profile"');

if (sDetailsStart === -1 || sAltStart === -1) {
  console.error('Details boundaries not found!');
  process.exit(1);
}

const before = html.slice(0, sDetailsStart);
const after = html.slice(sAltStart);

html = before + detailsSectionHtml + '\n\n          ' + after;

fs.writeFileSync('trek/everest-three-passes-trek/index.html', html, 'utf8');
console.log('Successfully applied Step 5: Read Before You Book (21 Details Cards)!');

