const fs = require('fs');
const html = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const sIdx = html.indexOf('id="section-faqs"');
const rest = html.slice(sIdx);

const secMatches = rest.match(/<section[^>]*>/gi) || [];
console.log('Sections after faqs:', secMatches);

const h2Matches = rest.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || [];
console.log('H2s after faqs:', h2Matches.map(h => h.replace(/<[^>]+>/g, '').trim()));
