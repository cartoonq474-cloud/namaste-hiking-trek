const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const startIdx = html.indexOf('<!-- Include 4 -->');
const endIdx = html.indexOf('<!-- Excludes Heading -->');
console.log(html.substring(startIdx, endIdx));
