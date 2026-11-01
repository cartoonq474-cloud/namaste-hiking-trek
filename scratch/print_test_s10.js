const fs = require('fs');

const testHtml = fs.readFileSync('scratch/test_parity_applied.html', 'utf8');

const s10Start = testHtml.indexOf('<section id="section-booking"');
const s10End = testHtml.indexOf('</section>', s10Start) + 10;
console.log('--- Section 10 in test_parity_applied.html ---');
console.log(testHtml.slice(s10Start, s10End));
