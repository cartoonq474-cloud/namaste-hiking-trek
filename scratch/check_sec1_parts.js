const fs = require('fs');

const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const s1Start = evt.indexOf('<section id="section-overview"');
const s1End = evt.indexOf('</section>', s1Start) + 10;
const sec1 = evt.slice(s1Start, s1End);

const hlIdx = sec1.indexOf('Everest View Trek Highlights');
const wbIdx = sec1.indexOf('Why Book the Everest View Trek');

console.log('Overview narrative length:', hlIdx);
console.log('Highlights length:', wbIdx - hlIdx);
console.log('Why book length:', sec1.length - wbIdx);

console.log('\n--- Narrative End / Highlights Start ---');
console.log(sec1.slice(hlIdx - 200, hlIdx + 200));

console.log('\n--- Highlights End / Why Book Start ---');
console.log(sec1.slice(wbIdx - 200, wbIdx + 200));
