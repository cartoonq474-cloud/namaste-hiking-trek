const fs = require('fs');
const html = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

console.log('--- FROM 300600 to 308000 ---');
console.log(html.slice(300600, 308000));
console.log('--- END OF FILE (last 2000 chars) ---');
console.log(html.slice(-2000));
