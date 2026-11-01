const fs = require('fs');

const s9 = fs.readFileSync('scratch/s9_dump.html', 'utf8');
const platStart = s9.indexOf('<div id="platform-reviews"');
const platEnd = s9.indexOf('</section>');
const platHtml = s9.substring(platStart, platEnd);

console.log('--- Platform Reviews in S9 ---');
console.log('Total characters:', platHtml.length);
console.log('Snippet:');
console.log(platHtml.substring(0, 2000));
