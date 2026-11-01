const fs = require('fs');

const s14 = fs.readFileSync('scratch/s14_dump.html', 'utf8');
const custMatch = s14.match(/<div id="tab-customer-reviews"[\s\S]*?(?=<div id="tab-video-reviews")/);
if (custMatch) {
  console.log(custMatch[0]);
}
