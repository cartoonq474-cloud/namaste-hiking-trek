const fs = require('fs');

const userContent = fs.readFileSync('scratch/three_passes_content.txt', 'utf8');

// Function to extract text between boundaries
function extractBetween(str, start, end) {
  const s = str.indexOf(start);
  if (s === -1) return '';
  const e = end ? str.indexOf(end, s + start.length) : str.length;
  if (e === -1) return '';
  return str.slice(s + start.length, e).trim();
}

const overviewText = extractBetween(userContent, 'Trek overview', 'Everest Three High Passes Trek highlights');
const highlightsText = extractBetween(userContent, 'Everest Three High Passes Trek highlights', 'Highlights at a glance');
const glanceTableText = extractBetween(userContent, 'Highlights at a glance', 'Everest Three High Passes Trek 21-day itinerary');

console.log('Overview text length:', overviewText.length);
console.log('Highlights text length:', highlightsText.length);
console.log('Glance table text length:', glanceTableText.length);

