const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const ctaIdx = ebc.indexOf('custom-trip-cta-card');
console.log('custom-trip-cta-card in EBC:', ctaIdx);
if (ctaIdx !== -1) {
  console.log(ebc.slice(ctaIdx - 300, ctaIdx + 700));
}
