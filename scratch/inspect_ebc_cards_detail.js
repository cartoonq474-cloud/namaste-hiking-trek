const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const pos = ebc.indexOf('data-detail-id="accommodation"');
const end = ebc.indexOf('data-detail-id="food"');
console.log('--- EBC CARD 1 CONTENT ---');
console.log(ebc.substring(pos, end));

const pos2 = ebc.indexOf('data-detail-id="best-time"');
const end2 = ebc.indexOf('data-detail-id="typical-day"');
console.log('--- EBC CARD 3 (BEST TIME) CONTENT ---');
console.log(ebc.substring(pos2, end2));
