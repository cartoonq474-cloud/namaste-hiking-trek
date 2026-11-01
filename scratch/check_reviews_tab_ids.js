const fs = require('fs');

const content = fs.readFileSync('reviews.html', 'utf8');
const matches = [...content.matchAll(/id="tab-[^"]*"/g)];
console.log('Tabs in reviews.html:', matches.map(m => m[0]));
