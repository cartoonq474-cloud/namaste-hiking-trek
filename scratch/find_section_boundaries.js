const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

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

sections.forEach(sec => {
  const idx = html.indexOf(`id="${sec}"`);
  console.log(`${sec}: index ${idx}`);
});

console.log('Total file length:', html.length);

