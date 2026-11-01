const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');
const s9 = content.substring(content.indexOf('<section id="reviews-section"'), content.indexOf('<!-- Section 3: Himalayan Trekking Experience Gallery -->'));
const s9Platform = s9.substring(s9.indexOf('id="platform-reviews"'));

console.log('S9 platform-reviews snippet (first 1500 chars):');
console.log(s9Platform.substring(0, 1500));
