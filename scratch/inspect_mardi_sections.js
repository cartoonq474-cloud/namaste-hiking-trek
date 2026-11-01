const fs = require('fs');
const content = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

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
  const start = content.indexOf(`id="${id}"`);
  if (start !== -1) {
    const end = content.indexOf('</section>', start);
    console.log(`=== ${id} (len: ${end - start}) ===`);
    console.log(content.slice(start, start + 300));
  } else {
    console.log(`=== ${id} NOT FOUND ===`);
  }
});
