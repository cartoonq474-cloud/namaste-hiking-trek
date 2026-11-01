const fs = require('fs');
const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const factsStart = html.indexOf('<!-- Key Trip Facts Grid -->');
const factsEnd = html.indexOf('<!-- Trust Badges Section -->');

console.log('Facts start:', factsStart);
console.log('Facts end:', factsEnd);
console.log(html.substring(factsStart, factsStart + 500));
