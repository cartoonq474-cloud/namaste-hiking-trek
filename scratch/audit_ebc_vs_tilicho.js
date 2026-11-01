const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const tilicho = fs.readFileSync('trek/annapurna-circuit-trek-with-tilicho-lake/index.html', 'utf8');

console.log('=== PAGE STATS ===');
console.log('EBC length:', ebc.length, 'lines:', ebc.split('\n').length);
console.log('Tilicho length:', tilicho.length, 'lines:', tilicho.split('\n').length);

function getSections(html) {
  const sections = [];
  const regex = /<section[^>]*id=["']([^"']+)["'][^>]*>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    sections.push(match[1]);
  }
  return sections;
}

console.log('\n=== EBC SECTIONS ===');
console.log(getSections(ebc));

console.log('\n=== TILICHO SECTIONS ===');
console.log(getSections(tilicho));

// Check major components in EBC
function checkComponents(name, html) {
  console.log(`\n=== COMPONENTS IN ${name} ===`);
  const comps = [
    'trek-gallery-collage',
    'trip-facts-grid',
    'trek-sub-nav',
    'trek-detail-layout',
    'pricing-sidebar',
    'timeline-day',
    'itinerary-day-card',
    'accordion-day',
    'detail-accordion',
    'route-map',
    'altitude-chart-wrapper',
    'weather-chart-wrapper',
    'gear-tabs',
    'packing-checklist',
    'reviews-platform-container',
    'reviews-grid',
    'photo-reviews',
    'faq-accordion',
    'related-treks',
    'inquiry-modal',
    'booking-card'
  ];
  comps.forEach(c => {
    console.log(`${c}: ${html.includes(c)}`);
  });
}

checkComponents('EBC', ebc);
checkComponents('Tilicho', tilicho);
