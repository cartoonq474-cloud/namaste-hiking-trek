const fs = require('fs');
const content = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const sections = [
  'section-overview',
  'section-itinerary',
  'section-includes',
  'section-dates',
  'section-packing',
  'section-details',
  'section-altitude',
  'section-altitude-profile',
  'section-weather'
];

sections.forEach(id => {
  const needle = `id="${id}"`;
  const idx = content.indexOf(needle);
  if (idx !== -1) {
    const line = content.slice(0, idx).split('\n').length;
    console.log(`${id} found at line ${line}:`);
    console.log(content.slice(idx, idx + 350));
    console.log('---');
  } else {
    console.log(`${id} NOT found`);
  }
});
