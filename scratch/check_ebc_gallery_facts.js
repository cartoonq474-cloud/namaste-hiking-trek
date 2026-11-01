const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const galStart = ebc.indexOf('trek-gallery-collage');
const subnavStart = ebc.indexOf('trek-sub-nav');
console.log(ebc.substring(galStart - 50, subnavStart));
