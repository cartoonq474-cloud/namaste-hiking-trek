const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const sIdx = ebc.lastIndexOf('<script');
console.log('EBC last scripts:');
console.log(ebc.slice(sIdx - 300));
