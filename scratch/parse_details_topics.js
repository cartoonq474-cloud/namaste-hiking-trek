const fs = require('fs');
const content = fs.readFileSync('scratch/three_passes_content.txt', 'utf8');

const sIdx = content.indexOf('Accommodation, food and drinking water');
const eIdx = content.indexOf('Altitude profile of the 21-day itinerary');

console.log('Details section length:', eIdx - sIdx);

// Let's print out the subsections found in this block
const detailsText = content.slice(sIdx, eIdx);
const lines = detailsText.split(/\r?\n/);
lines.forEach((l, idx) => {
  const trimmed = l.trim();
  if (trimmed.length > 0 && trimmed.length < 65 && !trimmed.endsWith('.') && !trimmed.endsWith(':') && !trimmed.endsWith(',') && !trimmed.startsWith('-')) {
    // Check if it looks like a major topic header
    if (/^[A-Z0-9]/.test(trimmed)) {
      console.log(`Topic: ${trimmed}`);
    }
  }
});

