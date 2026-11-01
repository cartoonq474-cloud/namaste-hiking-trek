const fs = require('fs');

const content = fs.readFileSync('reviews.html', 'utf8');
const navStart = content.indexOf('<nav');
const navEnd = content.indexOf('</nav>', navStart);
console.log(content.substring(navStart, navStart + 1500));
