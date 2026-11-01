const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');
const factsStart = html.indexOf('<!-- Key Trip Facts Grid -->');
const subNavMarker = '<!-- Sticky Scroll-Spy Sub-Navigation Bar -->';
const subNavIdx = html.indexOf(subNavMarker);

const snippet = html.slice(factsStart, subNavIdx);
const comments = [...snippet.matchAll(/<!--[\s\S]*?-->/g)];
console.log('Comments between factsStart and subNav:');
comments.forEach(c => console.log(c[0].slice(0, 60)));
