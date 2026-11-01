const fs = require('fs');
const js = fs.readFileSync('js/trek-details.js', 'utf8');
console.log("trek-details.js length:", js.length);
if (js.includes('detail-accordion') || js.includes('read-progress') || js.includes('detail-card')) {
  console.log("Found detail accordion code in js/trek-details.js!");
} else {
  console.log("Not in trek-details.js. Let us check where detail-accordion is defined across files.");
}
