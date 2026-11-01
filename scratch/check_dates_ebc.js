const fs = require('fs');

const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const sIdx = gokyo.indexOf('id="section-dates"');
const eIdx = gokyo.indexOf('</section>', sIdx);
const datesSec = gokyo.slice(sIdx, eIdx + 10);

console.log('section-dates length:', datesSec.length);
const lines = datesSec.split('\n');
lines.forEach((line, idx) => {
  if (/ebc|everest base camp/i.test(line)) {
    console.log(`Line ${idx+1}: ${line.trim()}`);
  }
});
