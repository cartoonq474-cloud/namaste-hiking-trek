const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const artStart = ebc.indexOf('<article');
const galStart = ebc.indexOf('trek-gallery-collage');
console.log(ebc.substring(artStart, galStart + 200));
