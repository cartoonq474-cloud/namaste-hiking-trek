const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = ebc.indexOf('id="section-overview"');
const eIdx = ebc.indexOf('id="section-itinerary"');
const overview = ebc.slice(sIdx, eIdx);

// Look for classes used in overview
const classMatches = overview.match(/class="([^"]+)"/g) || [];
const uniqueClasses = [...new Set(classMatches)];
console.log('EBC Overview Unique Classes:');
console.log(uniqueClasses.join('\n'));
