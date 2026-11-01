const fs = require('fs');
const html = fs.readFileSync('trek/manaslu-circuit-trek/index.html', 'utf8');

const mainIdx = html.indexOf('<main');
console.log(html.substring(mainIdx + 16500, mainIdx + 20500));
