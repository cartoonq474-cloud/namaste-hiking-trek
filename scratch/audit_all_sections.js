const fs = require('fs');

const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

console.log('=== SECTION CHECKLIST & AUDIT ===');

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
  const gMatch = gokyo.match(new RegExp(`<section[^>]*id="${id}"[\\s\\S]*?<\\/section>`));
  const eMatch = ebc.match(new RegExp(`<section[^>]*id="${id}"[\\s\\S]*?<\\/section>`));
  console.log(`\n--- [${id}] ---`);
  console.log(`Gokyo length: ${gMatch ? gMatch[0].length : 'MISSING'}`);
  console.log(`EBC length: ${eMatch ? eMatch[0].length : 'MISSING'}`);
  
  if (gMatch) {
    const heading = gMatch[0].match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
    console.log(`Gokyo H2: ${heading ? heading[1].replace(/<[^>]+>/g, '').trim() : 'none'}`);
  }
});
