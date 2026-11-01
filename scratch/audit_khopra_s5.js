const fs = require('fs');
const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const s5start = html.indexOf('id="section-details"');
const s5end = html.indexOf('</section>', s5start);
console.log('S5 found:', s5start, s5end);
const s5 = html.slice(s5start, s5end);

// Check classes used in s5
const classes = [...new Set(s5.match(/class="[^"]+"/g))];
console.log('Classes in S5:', classes);

// Check if any old detail-content-inner remains
console.log('Has detail-content-inner:', s5.includes('detail-content-inner'));
console.log('Has detail-accordion-content-inner:', s5.includes('detail-accordion-content-inner'));

// Check card structure of Card 1
const card1Start = s5.indexOf('class="detail-accordion-card"');
const card2Start = s5.indexOf('class="detail-accordion-card"', card1Start + 30);
console.log('=== CARD 1 HTML ===\n', s5.substring(card1Start, card2Start));
