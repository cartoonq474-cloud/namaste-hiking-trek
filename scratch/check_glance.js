const fs = require('fs');
const content = fs.readFileSync('scratch/three_passes_content.txt', 'utf8');

const idx = content.indexOf('Highlights at a glance');
console.log('Glance snippet:');
console.log(content.slice(idx, idx + 1500));

