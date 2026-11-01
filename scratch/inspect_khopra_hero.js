const fs = require('fs');
const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const factsStart = html.indexOf('<!-- Key Facts Grid (14 Items) -->');
const factsEnd = html.indexOf('<!-- Trust Badges Section -->');
console.log(html.substring(factsStart, factsEnd));
