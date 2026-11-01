const fs = require('fs');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const sIdx = evt.indexOf('highlights-container');
console.log('Before highlights-container:\n');
console.log(evt.slice(sIdx - 300, sIdx + 100));
