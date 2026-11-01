const fs = require('fs');

const dates = fs.readFileSync('scratch/ebc_dates.html', 'utf8');
const idMatches = [...dates.matchAll(/id=["']([^"']+)["']/g)].map(m => m[1]);
console.log('IDs in dates:', idMatches);

const classMatches = [...dates.matchAll(/class=["']([^"']+)["']/g)];
const classes = [...new Set(classMatches.flatMap(m => m[1].split(/\s+/)))].filter(c => c).sort();
console.log('Classes in dates:', classes);
