const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const s2Start = html.indexOf('<section id="section-itinerary"');
const s3Start = html.indexOf('<section id="section-includes"');

console.log('s2Start:', s2Start, 's3Start:', s3Start);
console.log('Length of itinerary section:', s3Start - s2Start);
console.log('Start of itinerary section:');
console.log(html.slice(s2Start, s2Start + 400));
console.log('End of itinerary section:');
console.log(html.slice(s3Start - 400, s3Start));

