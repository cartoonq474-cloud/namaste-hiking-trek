const fs = require('fs');

const chola = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');
const luxury = fs.readFileSync('trek/everest-base-camp-luxury-trek/index.html', 'utf8');

console.log('--- Cho La Pass Packing Section ---');
const cholaPackStart = chola.indexOf('id="section-packing"');
console.log('Cho La Packing excerpt:', chola.substring(cholaPackStart, cholaPackStart + 500));

console.log('--- Luxury Packing Section ---');
const luxPackStart = luxury.indexOf('id="section-packing"');
console.log('Luxury Packing excerpt:', luxury.substring(luxPackStart, luxPackStart + 500));
