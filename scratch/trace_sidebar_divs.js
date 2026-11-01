const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const sIdx = html.indexOf('<!-- Sticky Booking Sidebar Column -->');
const eIdx = html.indexOf('</section>\n  </main>');

const slice = html.slice(sIdx, eIdx);
console.log('Sidebar full text:');
console.log(slice);

