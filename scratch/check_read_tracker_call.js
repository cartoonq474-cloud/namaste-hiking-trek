const fs = require('fs');

const js = fs.readFileSync('js/trek-details.js', 'utf8');
const pos = js.indexOf('setupReadTracker');
console.log(js.substring(pos, pos + 1000));

const initPos = js.indexOf('initTrekDetails') !== -1 ? js.indexOf('initTrekDetails') : js.indexOf('DOMContentLoaded');
console.log('--- INIT FUNCTION ---');
console.log(js.substring(initPos, initPos + 1000));
