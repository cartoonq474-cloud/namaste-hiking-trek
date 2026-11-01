const fs = require('fs');

const mardi = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const sIdx = mardi.indexOf('id="section-details"');
const eIdx = mardi.indexOf('id="section-altitude-profile"');

const currentDetails = mardi.slice(sIdx, eIdx);
console.log('Current section-details length:', currentDetails.length);

// Extract the 12 guide titles
const h3s = [...currentDetails.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('Current 12 Guide Titles:');
h3s.forEach((h, i) => console.log(`${i + 1}. ${h}`));
