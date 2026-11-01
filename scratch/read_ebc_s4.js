const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const s4Start = ebc.indexOf('<section id="section-dates"');
const s4End = ebc.indexOf('</section>', s4Start) + 10;
fs.writeFileSync('scratch/ebc_s4_extracted.html', ebc.slice(s4Start, s4End), 'utf8');
console.log('Saved scratch/ebc_s4_extracted.html, length:', s4End - s4Start);
