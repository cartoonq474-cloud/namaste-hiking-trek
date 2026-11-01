const fs = require('fs');

const s9 = fs.readFileSync('scratch/s9_dump.html', 'utf8');

console.log('s9_dump.html starts with:');
console.log(s9.substring(0, 200));

console.log('\ns9_dump.html ends with:');
console.log(s9.substring(s9.length - 200));

// Count opening and closing divs in s9
const openDivs = (s9.match(/<div\b/g) || []).length;
const closeDivs = (s9.match(/<\/div>/g) || []).length;
console.log(`\nOpen divs: ${openDivs}, Close divs: ${closeDivs}`);

const openSection = (s9.match(/<section\b/g) || []).length;
const closeSection = (s9.match(/<\/section>/g) || []).length;
console.log(`Open sections: ${openSection}, Close sections: ${closeSection}`);
