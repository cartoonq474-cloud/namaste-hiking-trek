const fs = require('fs');

const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const gokyoItinMatch = gokyo.match(/<section[^>]*id="section-itinerary"[\s\S]*?<\/section>/);
const ebcItinMatch = ebc.match(/<section[^>]*id="section-itinerary"[\s\S]*?<\/section>/);

console.log('=== GOKYO ITINERARY FIRST 2000 CHARS ===');
console.log(gokyoItinMatch ? gokyoItinMatch[0].slice(0, 2000) : 'none');

console.log('\n=== EBC ITINERARY FIRST 2000 CHARS ===');
console.log(ebcItinMatch ? ebcItinMatch[0].slice(0, 2000) : 'none');
