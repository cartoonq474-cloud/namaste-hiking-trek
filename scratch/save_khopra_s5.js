const fs = require('fs');

const khopra = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');
const s5 = khopra.indexOf('id="section-details"');
const s6 = khopra.indexOf('<!-- Section 6:', s5);
const block = khopra.substring(s5, s6);

fs.writeFileSync('scratch/current_khopra_section5.html', block, 'utf8');
console.log('Saved current Section 5 to scratch/current_khopra_section5.html, length:', block.length);
