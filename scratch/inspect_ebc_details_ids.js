const fs = require('fs');

const details = fs.readFileSync('scratch/ebc_details.html', 'utf8');
const idMatches = [...details.matchAll(/id=["']([^"']+)["']/g)].map(m => m[1]);
console.log('IDs in details:', idMatches.slice(0, 20));

const classMatches = [...details.matchAll(/class=["']([^"']+)["']/g)];
const classes = [...new Set(classMatches.flatMap(m => m[1].split(/\s+/)))].filter(c => c).sort();
console.log('Classes in details:', classes);
