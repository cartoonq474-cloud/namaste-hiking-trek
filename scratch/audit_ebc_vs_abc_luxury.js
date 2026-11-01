const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const luxury = fs.readFileSync('trek/annapurna-base-camp-luxury-trek/index.html', 'utf8');

console.log('EBC Trek size:', ebc.length);
console.log('ABC Luxury Trek size:', luxury.length);

const ebcSections = [...ebc.matchAll(/<section[^>]*id="([^"]+)"/g)].map(m => m[1]);
const luxurySections = [...luxury.matchAll(/<section[^>]*id="([^"]+)"/g)].map(m => m[1]);

console.log('\n--- EBC TREK SECTIONS ---');
console.log(ebcSections);

console.log('\n--- ABC LUXURY SECTIONS ---');
console.log(luxurySections);

// Check footers
const ebcFooter = ebc.match(/<footer[\s\S]*?<\/footer>/i);
const luxuryFooter = luxury.match(/<footer[\s\S]*?<\/footer>/i);

console.log('\n--- EBC FOOTER START (500 chars) ---');
console.log(ebcFooter ? ebcFooter[0].substring(0, 500) : 'none');

console.log('\n--- LUXURY FOOTER START (500 chars) ---');
console.log(luxuryFooter ? luxuryFooter[0].substring(0, 500) : 'none');

console.log('\n--- EBC FOOTER FULL LENGTH ---', ebcFooter ? ebcFooter[0].length : 0);
console.log('--- LUXURY FOOTER FULL LENGTH ---', luxuryFooter ? luxuryFooter[0].length : 0);
