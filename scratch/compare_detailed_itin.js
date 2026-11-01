const fs = require('fs');

const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
const itinIdx = act.indexOf('id="section-itinerary"');
const nextSecIdx = act.indexOf('id="section-includes"');
const chunk = act.slice(itinIdx, nextSecIdx);

const cards = [...chunk.matchAll(/<!--\s*Day\s*(\d+)[\s\S]*?<span class="day-label">([^<]+)<\/span>\s*([^<\n]+)[\s\S]*?<p class="itinerary-day-subtitle-new">\s*([^<\n]+)/gi)];

console.log('=== OUR CURRENT 14 DAYS ===');
for (const c of cards) {
  console.log(`${c[2].trim()} ${c[3].trim()} | ${c[4].trim()}`);
}

const comp = JSON.parse(fs.readFileSync('scratch/competitor_itinerary.json', 'utf8'));
console.log('\n=== COMPETITOR 16 DAYS ===');
comp.forEach((d, i) => {
  const props = (d.additionalProperty || []).map(p => `${p.name}: ${p.value}`).join(' | ');
  console.log(`Day ${i+1}: ${d.name} (${props})`);
});
