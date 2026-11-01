const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = html.indexOf('Best time to Trek to Everest Base Camp');
console.log(html.substring(sIdx - 200, sIdx + 200));
