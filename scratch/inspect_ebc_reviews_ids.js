const fs = require('fs');

const rev = fs.readFileSync('scratch/ebc_reviews.html', 'utf8');
const idMatches = [...rev.matchAll(/id=["']([^"']+)["']/g)].map(m => m[1]);
console.log('IDs in reviews:', idMatches);

const classMatches = [...rev.matchAll(/class=["']([^"']+)["']/g)];
const classes = [...new Set(classMatches.flatMap(m => m[1].split(/\s+/)))].filter(c => c).sort();
console.log('Classes in reviews:', classes);
