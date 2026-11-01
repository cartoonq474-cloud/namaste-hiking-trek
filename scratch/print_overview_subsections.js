const fs = require('fs');
const content = fs.readFileSync('scratch/three_passes_content.txt', 'utf8');

const sIdx = content.indexOf('Trek overview');
const eIdx = content.indexOf('Everest Three High Passes Trek highlights');

console.log(content.slice(sIdx, eIdx));

