const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const s = html.indexOf('Expedition Expertise');
console.log(html.substring(s - 200, s + 400));
