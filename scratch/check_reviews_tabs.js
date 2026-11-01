const fs = require('fs');

const content = fs.readFileSync('reviews.html', 'utf8');
const p = content.indexOf('Confused? Let\'s Talk');
console.log(content.substring(p, p + 1500));
