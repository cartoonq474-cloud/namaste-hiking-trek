const fs = require('fs');
const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const lines = content.split('\n');
console.log('Total lines in EBC:', lines.length);

lines.forEach((line, idx) => {
  if (line.includes('id="section-itinerary"') || line.includes('<!-- SECTION 2: ITINERARY') || (line.includes('class="itinerary-card') && idx < 2500)) {
    console.log(`Line ${idx + 1}: ${line.slice(0, 100)}`);
  }
});
