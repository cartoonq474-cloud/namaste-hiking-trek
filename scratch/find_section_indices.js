const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sections = [
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

sections.forEach(id => {
  const start = ebc.indexOf(`id="${id}"`);
  console.log(`Section ${id}: index ${start}`);
});
