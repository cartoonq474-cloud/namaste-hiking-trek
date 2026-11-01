const fs = require('fs');

const html = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

// Find day headers in itinerary
const dayBlocks = [...html.matchAll(/<details class="itinerary-item"[\s\S]*?<summary[^>]*>([\s\S]*?)<\/summary>/gi)];
console.log(`Found ${dayBlocks.length} itinerary days in Mardi Himal:`);
dayBlocks.forEach((d, i) => {
  const title = d[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(`Day ${i + 1}: ${title}`);
});
