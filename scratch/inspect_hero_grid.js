const fs = require('fs');
const lines = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8').split('\n');

console.log(lines.slice(510, 680).join('\n'));
