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
  'section-reviews',
  'section-faqs'
];

sections.forEach(id => {
  const start = ebc.indexOf(`id="${id}"`);
  if (start !== -1) {
    const snippet = ebc.slice(start, start + 600);
    console.log(`\n=================== ${id} ===================`);
    console.log(snippet.replace(/\n\s*\n/g, '\n').slice(0, 400));
  } else {
    console.log(`\n=================== ${id} NOT FOUND ===================`);
  }
});
