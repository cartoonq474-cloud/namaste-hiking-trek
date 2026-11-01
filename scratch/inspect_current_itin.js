const fs = require('fs');

const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
const itinIdx = act.indexOf('id="section-itinerary"');
const nextSecIdx = act.indexOf('id="section-includes"');
const chunk = act.slice(itinIdx, nextSecIdx !== -1 ? nextSecIdx : itinIdx + 40000);

console.log('Itinerary chunk length:', chunk.length);

// Print the first day card structure to see HTML classes and styling
const dayMatches = [...chunk.matchAll(/<div[^>]*class="[^"]*itinerary-[^"]*"[^>]*>([\s\S]*?)<\/div>/gi)];
console.log('Found itinerary divs:', dayMatches.length);

// Let's print the first 2500 characters of section-itinerary
console.log('\n--- First 2500 chars of section-itinerary ---');
console.log(chunk.slice(0, 2500));
