const fs = require('fs');

const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

console.log('--- Checking all sections ---');

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
  const gokyoHas = gokyo.includes(`id="${id}"`);
  const ebcHas = ebc.includes(`id="${id}"`);
  console.log(`Section [${id}]: Gokyo=${gokyoHas}, EBC=${ebcHas}`);
});
