const fs = require('fs');
const content = fs.readFileSync('scratch/three_passes_content.txt', 'utf8');

const packIdx = content.indexOf("Sleeping (5 items)");
const accIdx = content.indexOf("Accommodation, food and drinking water");

console.log(content.slice(packIdx, accIdx));

