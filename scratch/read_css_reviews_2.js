const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');
const lines = css.split('\n');

console.log('--- Lines 10600 to 10720 in index.css ---');
console.log(lines.slice(10600, 10720).join('\n'));
