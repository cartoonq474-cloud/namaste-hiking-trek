const fs = require('fs');
const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

function getSection(id) {
  const start = html.indexOf(`id="${id}"`);
  if (start === -1) return null;
  // find next section or main end
  const nextSec = html.indexOf('class="trek-detail-section"', start + 30);
  const end = nextSec !== -1 ? nextSec : html.indexOf('</main>', start);
  return html.substring(start - 20, start + 600);
}

const sectionIds = [
  'section-overview',
  'section-itinerary',
  'section-includes',
  'section-dates',
  'section-packing',
  'section-details',
  'section-altitude-profile',
  'section-weather',
  'section-map',
  'section-booking',
  'section-reviews',
  'section-faqs'
];

sectionIds.forEach(id => {
  console.log(`=== HEADER OF ${id} ===`);
  console.log(getSection(id));
});
