const fs = require('fs');
const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const s1 = html.indexOf('<!-- Section 1: Overview -->');
const s2 = html.indexOf('<!-- Section 2: Itinerary -->');

console.log('Section 1 start:', s1);
console.log('Section 2 start:', s2);
console.log('Section 1 length in chars:', s2 - s1);
console.log('First 600 chars of Section 1:');
console.log(html.substring(s1, s1 + 600));
console.log('Last 600 chars of Section 1:');
console.log(html.substring(s2 - 600, s2));
