const fs = require('fs');
const content = fs.readFileSync('scratch/three_passes_content.txt', 'utf8');

const incIdx = content.indexOf("What's included in the trek price?");
const excIdx = content.indexOf("What's excluded from the trek price?");
const packIdx = content.indexOf("Packing list for Everest Three High Passes Trek");
const accIdx = content.indexOf("Accommodation, food and drinking water");

console.log('=== INCLUDES TEXT ===');
console.log(content.slice(incIdx, excIdx));

console.log('=== EXCLUDES TEXT ===');
console.log(content.slice(excIdx, packIdx));

console.log('=== PACKING TEXT (first 1500 chars) ===');
console.log(content.slice(packIdx, packIdx + 1500));

