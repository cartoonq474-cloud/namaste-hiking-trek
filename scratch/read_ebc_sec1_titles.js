const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const lines = ebc.split('\n');

console.log('EBC Highlights and Why Book details:');
let inHighlights = false;
let inWhyBook = false;

for (let i = 1180; i < 1790; i++) {
  const l = lines[i];
  if (l.includes('class="ebc-highlights-section"')) inHighlights = true;
  if (l.includes('class="why-book-container"')) { inHighlights = false; inWhyBook = true; }
  if (l.includes('<!-- Section 2: Itinerary -->')) { inWhyBook = false; break; }
  
  if (l.includes('class="ebc-highlight-card-title"') || l.includes('class="why-book-card-title"')) {
    console.log(`L${i+1}: ${l.replace(/<[^>]+>/g, '').trim()}`);
  }
}
