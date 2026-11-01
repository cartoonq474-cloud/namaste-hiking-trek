const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');
const lines = css.split('\n');

console.log('--- Lines 10495 to 10600 in index.css ---');
console.log(lines.slice(10495, 10600).join('\n'));
