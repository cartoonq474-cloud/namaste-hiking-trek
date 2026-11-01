const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const luxury = fs.readFileSync('trek/everest-base-camp-luxury-trek/index.html', 'utf8');

console.log('=== Comparing EBC Trek vs EBC Luxury Trek ===');
console.log('EBC length:', ebc.length, 'Luxury length:', luxury.length);

// Compare CSS files linked
const ebcCss = ebc.match(/<link[^>]*rel="stylesheet"[^>]*>/gi);
const luxCss = luxury.match(/<link[^>]*rel="stylesheet"[^>]*>/gi);
console.log('\nEBC CSS:', ebcCss);
console.log('\nLux CSS:', luxCss);

// Compare JS files linked
const ebcJs = ebc.match(/<script[^>]*src="[^"]*"[^>]*>/gi);
const luxJs = luxury.match(/<script[^>]*src="[^"]*"[^>]*>/gi);
console.log('\nEBC JS:', ebcJs);
console.log('\nLux JS:', luxJs);

// Compare Section tags
const ebcSections = [...ebc.matchAll(/<section\s+id="([^"]+)"/g)].map(m => m[1]);
const luxSections = [...luxury.matchAll(/<section\s+id="([^"]+)"/g)].map(m => m[1]);
console.log('\nEBC Sections:', ebcSections);
console.log('\nLux Sections:', luxSections);
