const fs = require('fs');

const competitorItin = JSON.parse(fs.readFileSync('scratch/competitor_itinerary.json', 'utf8'));

console.log('=== COMPETITOR 16-DAY ITINERARY ===');
competitorItin.forEach((d, i) => {
  console.log(`Day ${i + 1}: ${d.name}`);
});

// Now parse current itinerary in our trek/annapurna-circuit-trek/index.html
const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

// Look for days in our itinerary
const days = [...act.matchAll(/Day\s+(\d+)\s*[:–-]\s*([^\n<]+)/gi)];
console.log('\n=== OUR CURRENT ITINERARY DAYS IN ACT ===');
const uniqueDays = new Map();
for (const m of days) {
  const num = parseInt(m[1]);
  if (!uniqueDays.has(num)) {
    uniqueDays.set(num, m[2].trim());
  }
}
for (let [num, title] of [...uniqueDays.entries()].sort((a,b)=>a[0]-b[0])) {
  console.log(`Day ${num}: ${title}`);
}
