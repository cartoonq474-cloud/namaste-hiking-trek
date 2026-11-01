const fs = require('fs');

const html = fs.readFileSync('scratch/ebc_review_section.html', 'utf8');

console.log('--- Top level divs and classes ---');
const topDivs = [...html.matchAll(/<div\s+([^>]*id="[^"]*"[^>]*)>/gi)].map(m => m[1]);
console.log('Divs with IDs:');
topDivs.forEach(d => console.log('  ', d));

console.log('\n--- Review Panes ---');
const panes = [...html.matchAll(/<div[^>]*class="[^"]*review-pane-content[^"]*"[^>]*>/gi)].map(m => m[0]);
panes.forEach(p => console.log('  ', p));

console.log('\n--- Script tags or inline JS ---');
const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1].trim());
console.log('Script count:', scripts.length);
scripts.forEach((s, i) => console.log(`Script ${i+1} preview:`, s.substring(0, 150)));

console.log('\n--- Section Title and Subtitle ---');
const h2 = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
if (h2) console.log('H2:', h2[1].trim());
const subtitle = html.match(/<p[^>]*class="[^"]*section-subtitle[^"]*"[^>]*>([\s\S]*?)<\/p>/i) || html.match(/<\/h2>\s*<p[^>]*>([\s\S]*?)<\/p>/i);
if (subtitle) console.log('Subtitle:', subtitle[1].trim());
