const fs = require('fs');

const html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');
const detStart = html.indexOf('<section id="section-details"');
const altProfStart = html.indexOf('<section id="section-altitude-profile"');

const snippet = html.slice(detStart, altProfStart);
const cardMatches = [...snippet.matchAll(/data-detail-id="([^"]+)"/g)].map(m => m[1]);
console.log(`Found ${cardMatches.length} card IDs:`);
cardMatches.forEach((id, i) => console.log(`${i + 1}: ${id}`));
