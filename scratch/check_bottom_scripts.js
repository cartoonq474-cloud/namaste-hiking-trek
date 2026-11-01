const fs = require('fs');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const sIdx = evt.lastIndexOf('<script');
console.log('Last script tag starts around:', sIdx);
console.log(evt.slice(sIdx - 500));
