const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

const platStart = content.indexOf('<div id="platform-reviews"');
const platEnd = content.indexOf('</section>', platStart);
const platHtml = content.substring(platStart, platEnd);

console.log('--- Current #platform-reviews HTML ---');
console.log('Length:', platHtml.length);
console.log(platHtml.substring(0, 2500));
