const fs = require('fs');

const path = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\steps\\448\\content.md';
const content = fs.readFileSync(path, 'utf8');

const itinStart = content.indexOf('id="itinerary"');
// Find next major section e.g. id="cost-includes" or id="faq"
const nextSection = content.indexOf('id="cost-includes"', itinStart);
console.log('Itinerary bounds:', itinStart, nextSection);

const itinHtml = content.slice(itinStart, nextSection !== -1 ? nextSection : itinStart + 60000);

fs.writeFileSync('scratch/competitor_itinerary_full.html', itinHtml, 'utf8');
console.log('Saved competitor_itinerary_full.html, size:', itinHtml.length);
