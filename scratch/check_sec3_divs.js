const fs = require('fs');
const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const s3Start = html.indexOf('<!-- Section 3: Includes and Excludes -->');
const datesSecStart = html.indexOf('<!-- Section: Booking Dates & Availability -->');

console.log('s3Start:', s3Start);
console.log('datesSecStart:', datesSecStart);

const origBlock = html.substring(s3Start, datesSecStart);
const o = (origBlock.match(/<div[\s>]/gi) || []).length;
const c = (origBlock.match(/<\/div>/gi) || []).length;
console.log('Divs in clean Section 3: open=' + o + ', close=' + c + ', diff=' + (o - c));
