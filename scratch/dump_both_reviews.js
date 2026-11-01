const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

const s9Start = content.indexOf('<section id="reviews-section"');
const s9End = content.indexOf('<!-- Section 3: Himalayan Trekking Experience Gallery -->');
const s9 = content.substring(s9Start, s9End);

const s14Start = content.indexOf('<section id="homepage-reviews"');
const s14End = content.indexOf('<!-- Section 4.5: Resources Related to Himalayan Trekking');
const s14 = content.substring(s14Start, s14End);

fs.writeFileSync('scratch/s9_dump.html', s9);
fs.writeFileSync('scratch/s14_dump.html', s14);

console.log('Saved s9_dump.html (length:', s9.length, ')');
console.log('Saved s14_dump.html (length:', s14.length, ')');
