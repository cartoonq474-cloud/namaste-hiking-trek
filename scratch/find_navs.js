const fs = require('fs');

const mContent = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');
const tContent = fs.readFileSync('trek/annapurna-circuit-trek-with-tilicho-lake/index.html', 'utf8');

console.log('Mardi navs:', [...mContent.matchAll(/<nav[^>]*class="([^"]*)"/g)].map(m => m[1]));
console.log('Tilicho navs:', [...tContent.matchAll(/<nav[^>]*class="([^"]*)"/g)].map(m => m[1]));

const tSubnav = tContent.match(/<nav class="trek-subnav"[\s\S]*?<\/nav>/);
if (tSubnav) {
  console.log('Tilicho subnav length:', tSubnav[0].length);
  console.log(tSubnav[0]);
}
