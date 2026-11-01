const fs = require('fs');

const html = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

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
  const start = html.indexOf(`id="${id}"`);
  if (start === -1) {
    console.log(`[MISSING] ${id}`);
    return;
  }
  const preview = html.substring(start, start + 400).replace(/\s+/g, ' ');
  console.log(`\n=== [FOUND] ${id} ===`);
  console.log(preview);
});
