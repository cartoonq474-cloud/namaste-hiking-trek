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
  'section-weather'
];

sections.forEach(id => {
  const needle = `id="${id}"`;
  const idx = ebc.indexOf(needle);
  if (idx !== -1) {
    const line = ebc.slice(0, idx).split('\n').length;
    console.log(`[EBC] ${id} at line ${line}:`);
    console.log(ebc.slice(idx, idx + 450));
    console.log('===');
  }
});
