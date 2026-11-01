const fs = require('fs');
const js = fs.readFileSync('js/trek-details.js', 'utf8');

const lines = js.split('\n');
lines.forEach((l, i) => {
  if (l.includes('accordion') || l.includes('itinerary-header') || l.includes('faq-item-question') || l.includes('expand-all')) {
    console.log('Line ' + (i+1) + ': ' + l.trim());
  }
});
