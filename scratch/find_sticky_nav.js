const fs = require('fs');
const tContent = fs.readFileSync('trek/annapurna-circuit-trek-with-tilicho-lake/index.html', 'utf8');

const matches = [...tContent.matchAll(/class="([^"]*nav[^"]*)"/gi)].map(m => m[1]);
console.log('Tilicho nav classes:', Array.from(new Set(matches)));

const idx = tContent.indexOf('section-overview');
console.log('500 chars before section-overview in Tilicho:');
console.log(tContent.slice(Math.max(0, idx - 800), idx));
