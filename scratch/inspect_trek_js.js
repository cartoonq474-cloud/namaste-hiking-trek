const fs = require('fs');

const trekJs = fs.readFileSync('js/trek-details.js', 'utf8');

console.log('File size:', trekJs.length);
// Extract function names
const funcMatches = [...trekJs.matchAll(/function\s+([a-zA-Z0-9_]+)\s*\(/g)];
console.log('Functions:', funcMatches.map(m => m[1]));

// Extract querySelector / getElementById calls
const qsMatches = [...trekJs.matchAll(/document\.(querySelector(?:All)?|getElementById)\(['"]([^'"]+)['"]\)/g)];
console.log('\nDOM queries in trek-details.js:');
const uniqueSelectors = [...new Set(qsMatches.map(m => m[2]))];
uniqueSelectors.forEach(s => console.log(s));
