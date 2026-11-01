// Test script to run in browser or verify via node
const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-luxury-trek/index.html', 'utf8');

console.log('Checkboxes in file:', [...html.matchAll(/class="gear-item-checkbox"/g)].length);
console.log('Packed counter in file:', html.includes('Packed: <strong><span class="gear-checked-count">0</span> / <span class="gear-total-count">70</span></strong>'));
console.log('Detail accordion cards in file:', [...html.matchAll(/class="detail-accordion-card"/g)].length);
console.log('Itinerary content in file:', [...html.matchAll(/class="itinerary-content"/g)].length);
console.log('FAQ items in file:', [...html.matchAll(/class="faq-item"/g)].length);
