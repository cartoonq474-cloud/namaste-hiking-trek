const fs = require('fs');

const faqs = fs.readFileSync('scratch/ebc_faqs.html', 'utf8');
const idMatches = [...faqs.matchAll(/id=["']([^"']+)["']/g)].map(m => m[1]);
console.log('IDs in faqs:', idMatches);

const classMatches = [...faqs.matchAll(/class=["']([^"']+)["']/g)];
const classes = [...new Set(classMatches.flatMap(m => m[1].split(/\s+/)))].filter(c => c).sort();
console.log('Classes in faqs:', classes);
