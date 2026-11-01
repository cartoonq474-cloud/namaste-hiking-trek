const fs = require('fs');

const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

console.log('--- Slice from 290950 to 291500 ---');
console.log(actHtml.slice(290950, 291500));
