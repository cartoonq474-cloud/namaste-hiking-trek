const fs = require('fs');

const html = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

// Check Hero and Facts
const heroStart = html.indexOf('<article');
const itinStart = html.indexOf('id="section-itinerary"');
console.log('--- Hero & Facts preview (first 1000 chars after <article) ---');
console.log(html.substring(heroStart, heroStart + 1000));

// Check Days in Itinerary
console.log('\n--- Itinerary Days Titles ---');
const dayTitles = [...html.matchAll(/<span[^>]*class="[^"]*itinerary-step-number[^"]*"[^>]*>([\s\S]*?)<\/span>[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>/gi)];
if (dayTitles.length > 0) {
  dayTitles.forEach(m => console.log(`${m[1].trim()}: ${m[2].trim()}`));
} else {
  const altDays = [...html.matchAll(/Day\s+(\d+)[:\s–-]+([^<\n]+)/gi)];
  altDays.slice(0, 15).forEach(m => console.log(`Day ${m[1]}: ${m[2].trim()}`));
}

// Check Duration in Facts
const factDuration = html.match(/Duration[\s\S]{1,200}?<\/div>/i);
if (factDuration) console.log('\nFact duration:', factDuration[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
