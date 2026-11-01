const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const idx = ebc.indexOf('dates-mode-btn');
console.log('dates-mode-btn occurrences in EBC:');
let count = 0;
let pos = 0;
while ((pos = ebc.indexOf('dates-mode-btn', pos)) !== null && pos !== -1) {
  count++;
  console.log(`Found at ${pos}: ${ebc.slice(pos - 20, pos + 80).replace(/\n/g, ' ')}`);
  pos += 14;
}

// Check if there is inline script for dates-mode-toggle or if it's in a JS file
const scriptIdx = ebc.indexOf('data-mode="private"');
console.log('\nSearch JS references to data-mode or dates-group-view:');
const jsFiles = ['js/trek-details.js', 'js/main.js', 'js/itinerary.js'];
jsFiles.forEach(f => {
  if (fs.existsSync(f)) {
    const c = fs.readFileSync(f, 'utf8');
    if (c.includes('dates-mode-btn') || c.includes('dates-group-view')) {
      console.log(`Found in ${f}`);
    }
  }
});
