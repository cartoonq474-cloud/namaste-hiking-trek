const fs = require('fs');

const content = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const dayCards = [...content.matchAll(/class="itinerary-card[^"]*"/g)];
console.log('Total itinerary cards found:', dayCards.length);

const metricLists = [...content.matchAll(/class="itinerary-metrics-list"/g)];
console.log('Total metrics lists found:', metricLists.length);

const metaBoxes = [...content.matchAll(/class="itinerary-meta-box"/g)];
console.log('Total meta boxes found:', metaBoxes.length);

const photoGrids = [...content.matchAll(/class="itinerary-photos-grid"/g)];
console.log('Total photo grids found:', photoGrids.length);

const photoWrappers = [...content.matchAll(/class="itinerary-photo-wrapper"/g)];
console.log('Total photo wrappers found:', photoWrappers.length);

// Check Day 1 & 2 snippet
const d1 = content.indexOf('Day 1:');
console.log('Day 1 snippet:');
console.log(content.slice(d1 - 100, d1 + 900));
