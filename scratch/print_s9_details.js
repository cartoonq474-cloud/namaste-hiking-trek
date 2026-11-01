const fs = require('fs');

const s9 = fs.readFileSync('scratch/s9_dump.html', 'utf8');

console.log('--- Entire S9 structure summary ---');
console.log('Total characters:', s9.length);

// Let's print the video reviews tab
const vid = s9.match(/<div id="video-reviews"[\s\S]*?(?=<div id="customer-reviews")/);
if (vid) {
  console.log('\n--- Video Reviews Tab Length:', vid[0].length);
  // print first 50 lines
  console.log(vid[0].split('\n').slice(0, 50).join('\n'));
}

// Let's print the customer reviews tab
const cust = s9.match(/<div id="customer-reviews"[\s\S]*?(?=<div id="platform-reviews")/);
if (cust) {
  console.log('\n--- Customer Reviews Tab Length:', cust[0].length);
  console.log(cust[0].split('\n').slice(0, 50).join('\n'));
}

// Let's print the platform reviews tab
const plat = s9.match(/<div id="platform-reviews"[\s\S]*?(?=<\/section>)/);
if (plat) {
  console.log('\n--- Platform Reviews Tab Length:', plat[0].length);
  console.log(plat[0].split('\n').slice(0, 60).join('\n'));
}
