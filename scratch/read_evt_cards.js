const fs = require('fs');
const content = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const lines = content.split('\n');

for (let i = 1570; i < 1835; i++) {
  const line = lines[i];
  if (line.includes('Day ') || line.includes('itinerary-card') || line.includes('Max:') || line.includes('Walk:') || line.includes('Overnight:')) {
    console.log(`L${i + 1}: ${line.trim()}`);
  }
}
