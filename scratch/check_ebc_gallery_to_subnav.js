const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const galStart = ebc.indexOf('<!-- Multi-Image Collage Gallery -->');
const subnavStart = ebc.indexOf('class="trek-sub-nav"');
console.log(ebc.substring(galStart, subnavStart));
