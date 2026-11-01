const fs = require('fs');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const sIdx = evt.indexOf('<div class="rich-highlights-grid">');
const eIdx = evt.indexOf('<div class="mt-16', sIdx);
console.log('Highlights section snippet:');
console.log(evt.slice(sIdx, sIdx + 1500));
