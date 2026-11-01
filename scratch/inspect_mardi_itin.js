const fs = require('fs');

const html = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

// Find itinerary items or day titles
const dayMatches = [...html.matchAll(/(Day\s*\d+[^<]*)/gi)].slice(0, 15);
console.log('Days found in Mardi Himal:');
dayMatches.forEach(m => console.log(' - ' + m[0]));

// Find images inside itinerary
const itinSection = html.match(/<section[^>]*id=["']itinerary["'][^>]*>([\s\S]*?)<\/section>/i) ||
                    html.match(/class=["'][^"']*itinerary[^"']*["'][^>]*>([\s\S]*?)<\/section>/i);

if (itinSection) {
  const imgs = [...itinSection[0].matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
  console.log(`Itinerary section found with ${imgs.length} images:`);
  imgs.slice(0, 10).forEach(m => console.log('  ' + m[0]));
} else {
  console.log('No specific itinerary section tag match, searching accordion...');
  const accordions = [...html.matchAll(/<details[\s\S]*?<\/details>/gi)];
  console.log(`Found ${accordions.length} details elements`);
}
