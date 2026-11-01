const fs = require('fs');

const js = fs.readFileSync('js/trek-details.js', 'utf8');
const startPos = js.indexOf('function setupReadTracker');
const endPos = js.indexOf('function setupDiscountAccordion', startPos);
const fnBody = js.substring(startPos, endPos !== -1 ? endPos : startPos + 4000);

console.log('Does setupReadTracker call updateProgress() on init?');
console.log(fnBody.includes('updateProgress()'));
console.log('Last 400 chars of setupReadTracker:');
console.log(fnBody.substring(fnBody.length - 400));
