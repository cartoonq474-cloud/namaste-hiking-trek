const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const factsMatches = [...ebc.matchAll(/(class="[^"]*fact[^"]*")/gi)];
console.log('Fact classes:', [...new Set(factsMatches.map(m => m[0]))]);

const quickMatches = [...ebc.matchAll(/(class="[^"]*quick[^"]*")/gi)];
console.log('Quick classes:', [...new Set(quickMatches.map(m => m[0]))]);

// Let's find "Key Facts" or similar headings
const headings = [...ebc.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('\nHeadings in EBC:');
headings.slice(0, 25).forEach(h => console.log(' -', h));
