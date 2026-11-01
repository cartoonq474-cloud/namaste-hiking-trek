const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const incIdx = html.indexOf('id="section-includes"');
console.log('500 chars before section-includes:');
console.log(html.substring(incIdx - 500, incIdx));

const incEnd = html.indexOf('</section>', incIdx) + 10;
console.log('500 chars after section-includes:');
console.log(html.substring(incEnd, incEnd + 500));
