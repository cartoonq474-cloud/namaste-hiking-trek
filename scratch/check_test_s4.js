const fs = require('fs');

const testHtml = fs.readFileSync('scratch/test_parity_applied.html', 'utf8');

const s4Start = testHtml.indexOf('<section id="section-dates"');
const s4End = testHtml.indexOf('</section>', s4Start) + 10;
console.log('--- Section 4 in test_parity_applied.html ---');
console.log(testHtml.slice(s4Start, s4Start + 1500));
