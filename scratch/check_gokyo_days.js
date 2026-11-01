const fs = require('fs');
const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const sIdx = gokyo.indexOf('id="section-itinerary"');
const eIdx = gokyo.indexOf('id="section-includes"');
const itin = gokyo.slice(sIdx, eIdx);

// Find all days
const dayMatches = itin.match(/Day\s*\d+[^<\n]*/gi) || [];
console.log('Days found in Gokyo itinerary:', dayMatches.slice(0, 20));

// Count cards
const cards = itin.match(/class="[^"]*itinerary-[^"]*"/g) || [];
console.log('Itinerary classes found:', [...new Set(cards)]);
