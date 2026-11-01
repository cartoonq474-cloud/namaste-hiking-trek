const fs = require('fs');
const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const sIdx = gokyo.indexOf('id="section-overview"');
const eIdx = gokyo.indexOf('id="section-itinerary"');
const overview = gokyo.slice(sIdx, eIdx);

const classMatches = overview.match(/class="([^"]+)"/g) || [];
const uniqueClasses = [...new Set(classMatches)];
console.log('Gokyo Overview Unique Classes:');
console.log(uniqueClasses.join('\n'));
