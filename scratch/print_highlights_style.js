const fs = require('fs');
const chola = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

const sIdx = chola.indexOf('.ebc-highlights-section');
const eIdx = chola.indexOf('</style>', sIdx);
console.log('=== Highlights Scoped Styles ===');
console.log(chola.slice(sIdx - 10, eIdx + 8));
