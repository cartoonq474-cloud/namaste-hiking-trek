const fs = require('fs');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const sIdx = evt.indexOf('trek-sub-nav');
const eIdx = evt.indexOf('</nav>', sIdx) + 6;
console.log('EVT Sticky Sub-Nav:');
console.log(evt.slice(sIdx - 30, eIdx + 50));
