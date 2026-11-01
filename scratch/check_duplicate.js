const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

const smCount = (content.match(/<!-- Section 3: Himalayan Trekking Experience Gallery -->/g) || []).length;
const emCount = (content.match(/<!-- Section 4: Why Namaste Hiking Trek Redesign Section -->/g) || []).length;

console.log('startMarker count:', smCount);
console.log('endMarker count:', emCount);
console.log('Total length of index.html:', content.length);
