const fs = require('fs');

const path = 'js/trek-details.js';
let js = fs.readFileSync(path, 'utf8');

// Check setupReadTracker
const startPos = js.indexOf('function setupReadTracker');
console.log('setupReadTracker found at pos:', startPos);
console.log(js.substring(startPos, startPos + 1200));
