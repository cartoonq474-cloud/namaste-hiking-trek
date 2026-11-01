const fs = require('fs');
const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const s2 = html.indexOf('<!-- Section 2: Itinerary -->');
const s3 = html.indexOf('<!-- Section 3: Includes');

console.log('Section 2 start:', s2);
console.log('Section 3 start:', s3);
console.log('Section 2 length:', s3 - s2);
console.log('First 600 chars of Section 2:');
console.log(html.substring(s2, s2 + 600));
console.log('Last 600 chars of Section 2:');
console.log(html.substring(s3 - 600, s3));
