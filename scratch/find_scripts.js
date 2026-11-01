const fs = require('fs');
const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

const endSnippet = html.substring(html.length - 2000);
console.log(endSnippet);
