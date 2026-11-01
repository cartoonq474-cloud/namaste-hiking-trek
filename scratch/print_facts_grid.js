const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');
const factsIdx = content.indexOf('trek-facts-grid');
console.log(content.substring(factsIdx, factsIdx + 3000));
