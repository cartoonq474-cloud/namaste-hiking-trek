const fs = require('fs');

const about = fs.readFileSync('about.html', 'utf8');
const navIdx = about.indexOf('<nav');
console.log('about.html nav snippet:\n', about.substring(navIdx, navIdx + 1200));
