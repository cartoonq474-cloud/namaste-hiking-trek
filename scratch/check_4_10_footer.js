const fs = require('fs');
const html = fs.readFileSync('scratch/test_parity_applied.html', 'utf8');

// Section 4
const s4Start = html.indexOf('<section id="section-dates"');
const s4End = html.indexOf('</section>', s4Start) + 10;
console.log('=== SECTION 4 HEADER & TOGGLES ===');
console.log(html.slice(s4Start, s4Start + 600));

// Section 10
const s10Start = html.indexOf('<section id="section-booking"');
const s10End = html.indexOf('</section>', s10Start) + 10;
console.log('\n=== SECTION 10 ===');
console.log(html.slice(s10Start, s10End));

// Before Footer
const fIdx = html.indexOf('<footer');
console.log('\n=== BEFORE FOOTER ===');
console.log(html.slice(fIdx - 400, fIdx));
