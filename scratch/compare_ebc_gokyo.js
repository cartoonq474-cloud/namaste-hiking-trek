const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

console.log('=== EBC ITINERARY FIRST 2000 CHARS ===');
const ebcItin = ebc.match(/<section id="section-itinerary"[\s\S]*?(?=<section id=|$)/);
if (ebcItin) {
  console.log(ebcItin[0].slice(0, 2000));
}

console.log('\n=== GOKYO ITINERARY FIRST 2000 CHARS ===');
const gokyoItin = gokyo.match(/<section id="section-itinerary"[\s\S]*?(?=<section id=|$)/);
if (gokyoItin) {
  console.log(gokyoItin[0].slice(0, 2000));
}
