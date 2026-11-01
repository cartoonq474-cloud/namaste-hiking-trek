const fs = require('fs');

const hub = fs.readFileSync('everest-region-treks/index.html', 'utf8');
console.log('Hub length:', hub.length);

const trekLinks = [...hub.matchAll(/href="([^"]*trek[^"]*)"/gi)].map(m => m[1]);
console.log('Trek links found in hub:');
[...new Set(trekLinks)].forEach(l => console.log(' -', l));
