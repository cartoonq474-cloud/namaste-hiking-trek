const fs = require('fs');
const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const startIdx = content.indexOf('<!-- Day 01 -->');
const endIdx = content.indexOf('<!-- Custom Itinerary Plan Your Trip CTA Banner Card -->');

console.log('Itinerary cards span from', startIdx, 'to', endIdx);

// Let's extract the photos grid for each day
for (let d = 1; d <= 14; d++) {
  const dayStr = d < 10 ? '0' + d : '' + d;
  const dayComment = `<!-- Day ${dayStr} -->`;
  const nextDayStr = (d + 1) < 10 ? '0' + (d + 1) : '' + (d + 1);
  const nextComment = d < 14 ? `<!-- Day ${nextDayStr} -->` : '<!-- Custom Itinerary';
  
  const dStart = content.indexOf(dayComment, startIdx);
  const dEnd = content.indexOf(nextComment, dStart);
  
  if (dStart !== -1 && dEnd !== -1) {
    const dayChunk = content.substring(dStart, dEnd);
    const photoIdx = dayChunk.indexOf('<div class="itinerary-photos-grid">');
    const photoEnd = photoIdx !== -1 ? dayChunk.indexOf('</div>\n                  </div>\n                </div>\n              </div>', photoIdx) : -1;
    console.log(`Day ${d}: found photo grid: ${photoIdx !== -1}`);
  } else {
    console.log(`Day ${d}: NOT found!`);
  }
}
