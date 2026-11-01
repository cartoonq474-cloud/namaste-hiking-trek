const fs = require('fs');

const content = fs.readFileSync('trek/upper-mustang-trek/index.html', 'utf8');

const imgMatches = [...content.matchAll(/<img[^>]+src=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Total img tags:', imgMatches.length);
const uniqueImgs = [...new Set(imgMatches)];
console.log('Unique images referenced:');
uniqueImgs.forEach(img => console.log('  ' + img));
