const fs = require('fs');
const content = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

console.log('--- AROUND SIDEBAR (381000 - 383000) ---');
console.log(content.slice(381500, 383500));

console.log('--- AROUND FOOTER (399500 - 402000) ---');
console.log(content.slice(399500, 401500));

console.log('--- END OF FILE (last 1500 chars) ---');
console.log(content.slice(-1500));
