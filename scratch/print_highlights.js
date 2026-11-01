const fs = require('fs');
const content = fs.readFileSync('scratch/three_passes_content.txt', 'utf8');

const sIdx = content.indexOf('Everest Three High Passes Trek highlights');
const eIdx = content.indexOf('Highlights at a glance');

console.log(content.slice(sIdx, eIdx));

