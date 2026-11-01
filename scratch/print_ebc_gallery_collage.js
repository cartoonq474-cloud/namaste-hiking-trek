const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = ebc.indexOf('trek-gallery-collage');
console.log('trek-gallery-collage in EBC:');
console.log(ebc.slice(sIdx, sIdx + 2000));
