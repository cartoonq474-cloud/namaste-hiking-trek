const fs = require('fs');

const html = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const matches = [...html.matchAll(/<h4 class="itinerary-day-title-new">([\s\S]*?)<\/h4>/gi)];
console.log(`Found ${matches.length} days:`);
matches.forEach((m, i) => {
  console.log(`Day ${i + 1}: ${m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()}`);
});
