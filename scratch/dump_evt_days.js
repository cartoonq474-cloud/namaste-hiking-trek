const fs = require('fs');
const content = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const lines = content.split('\n');

let currentDay = '';
let inSection2 = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('id="section-itinerary"')) {
    inSection2 = true;
  }
  if (line.includes('id="section-includes"')) {
    inSection2 = false;
    break;
  }
  if (inSection2) {
    if (line.includes('Day ') && (line.includes('<h3') || line.includes('itinerary-header') || line.includes('<td><strong>Day'))) {
      console.log(`L${i + 1}: ${line.trim()}`);
    }
  }
}
