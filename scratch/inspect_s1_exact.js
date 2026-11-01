const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const s1Start = html.indexOf('<section id="section-overview"');
const s2Start = html.indexOf('<section id="section-itinerary"');

console.log('s1Start:', s1Start, 's2Start:', s2Start);
console.log('Total length of section 1:', s2Start - s1Start);
console.log('Beginning of section 1:');
console.log(html.slice(s1Start, s1Start + 500));
console.log('End of section 1:');
console.log(html.slice(s2Start - 500, s2Start));

