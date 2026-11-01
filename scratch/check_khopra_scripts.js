const fs = require('fs');
const html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const lastChunk = html.slice(html.lastIndexOf('<footer'));
console.log(lastChunk);

