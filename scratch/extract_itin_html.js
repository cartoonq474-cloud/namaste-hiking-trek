const fs = require('fs');

const path = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\steps\\448\\content.md';
const content = fs.readFileSync(path, 'utf8');

// Find id="itinerary" or class containing itinerary
const itinIndex = content.indexOf('id="itinerary"');
console.log('id="itinerary" index:', itinIndex);
if (itinIndex !== -1) {
  const slice = content.slice(itinIndex, itinIndex + 15000);
  // find all headings
  const matches = slice.match(/<h[345][^>]*>([\s\S]*?)<\/h[345]>/gi);
  console.log('Headings in itinerary:');
  if (matches) {
    matches.forEach(m => console.log(' ', m.replace(/<[^>]+>/g, '').trim()));
  } else {
    console.log('No headings found, let us inspect plain text in slice:');
    console.log(slice.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 1000));
  }
}
