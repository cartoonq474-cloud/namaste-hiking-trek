const fs = require('fs');
const html = fs.readFileSync('scratch/test_assembled_page.html', 'utf8');

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
  const needle = `id="${id}"`;
  const idx = html.indexOf(needle);
  if (idx !== -1) {
    console.log(`=== ${id} ===`);
    console.log(html.slice(idx - 15, idx + 250));
  } else {
    console.error(`FAILED: ${id} NOT FOUND!`);
  }
});
