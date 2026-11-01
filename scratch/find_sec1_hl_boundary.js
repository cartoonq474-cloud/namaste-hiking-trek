const fs = require('fs');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const s1Start = evt.indexOf('<section id="section-overview"');
const s1End = evt.indexOf('</section>', s1Start) + 10;
const sec1 = evt.slice(s1Start, s1End);

// Find where the old highlights block begins
const oldHlStart = sec1.indexOf('<div class="mt-12 pt-8 border-t border-gray-200">');
if (oldHlStart !== -1) {
  console.log('Found oldHlStart at offset:', oldHlStart);
  console.log(sec1.slice(oldHlStart - 100, oldHlStart + 300));
} else {
  console.log('Searching for alternative boundary:');
  const hIdx = sec1.indexOf('Everest View Trek Highlights');
  console.log(sec1.slice(hIdx - 300, hIdx + 100));
}
