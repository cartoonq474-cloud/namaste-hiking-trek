const fs = require('fs');

const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const lastScripts = [...actHtml.matchAll(/<script[\s\S]*?<\/script>/gi)];
console.log('=== Script 2 ===');
console.log(lastScripts[1][0]);
console.log('=== Script 3 ===');
console.log(lastScripts[2][0]);
