const fs = require('fs');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const hIdx = evt.indexOf('Everest View Trek Highlights');
console.log('=== HIGHLIGHTS MARKUP IN EVT ===');
console.log(evt.slice(hIdx - 150, hIdx + 500));

const wIdx = evt.indexOf('Why Book the Everest View Trek');
console.log('\n=== WHY BOOK MARKUP IN EVT ===');
console.log(evt.slice(wIdx - 150, wIdx + 500));
