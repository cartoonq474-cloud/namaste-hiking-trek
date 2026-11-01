const fs = require('fs');

const trekJs = fs.readFileSync('js/trek-details.js', 'utf8');
const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

// Search for setupFaqSection or FAQ logic in trek-details.js
console.log('--- trek-details.js FAQ references ---');
const lines = trekJs.split('\n');
lines.forEach((line, idx) => {
  if (line.toLowerCase().includes('faq') || line.toLowerCase().includes('accordion')) {
    console.log(`L${idx + 1}: ${line}`);
  }
});

// Let's also inspect where setupFaqSection is defined in trek-details.js
const setupFaqIdx = trekJs.indexOf('setupFaq');
if (setupFaqIdx !== -1) {
  console.log('\n--- setupFaq function in trek-details.js ---');
  console.log(trekJs.slice(setupFaqIdx, setupFaqIdx + 1500));
}
