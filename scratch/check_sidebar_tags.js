const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const sIdx = html.indexOf('<!-- Sticky Booking Sidebar Column -->');
const eIdx = html.indexOf('</main>');

const slice = html.slice(sIdx, eIdx);
const openDivs = (slice.match(/<div(\s+[^>]*)?>/gi) || []).length;
const closeDivs = (slice.match(/<\/div>/gi) || []).length;

console.log('Sidebar slice open divs:', openDivs, 'close divs:', closeDivs);

