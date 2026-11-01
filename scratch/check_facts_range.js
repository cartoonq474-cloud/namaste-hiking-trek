const fs = require('fs');

const template = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const factsStart = template.indexOf('<!-- Key Trip Facts Grid -->');
const subNavStart = template.indexOf('<!-- Sticky Scroll-Spy Sub-Navigation Bar -->');
console.log('Facts start index:', factsStart);
console.log('SubNav start index:', subNavStart);

const snippet = template.substring(factsStart, subNavStart);
console.log('Length between facts and subNav:', snippet.length);
// Find all top divs in this range
const divs = [...snippet.matchAll(/<div\s+class="([^"]+)"/g)].map(m => m[1]);
console.log('Div classes in range:', divs);
