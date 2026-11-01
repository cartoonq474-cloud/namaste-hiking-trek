const fs = require('fs');

const path = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\steps\\448\\content.md';
const content = fs.readFileSync(path, 'utf8');

// Find JSON-LD or main sections
const jsonMatch = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
if (jsonMatch) {
  jsonMatch.forEach((jm, i) => {
    try {
      const clean = jm.replace('<script type="application/ld+json">', '').replace('</script>', '');
      const parsed = JSON.parse(clean);
      console.log(`JSON-LD ${i}: type=${parsed['@type'] || (parsed['@graph'] ? 'Graph' : 'Unknown')}`);
      if (parsed['@type'] === 'TouristTrip') {
        console.log('Trip name:', parsed.name);
        console.log('Duration:', parsed.duration);
        console.log('Days count:', parsed.itinerary ? parsed.itinerary.length : 0);
        if (parsed.itinerary) {
          parsed.itinerary.forEach((day, idx) => {
            console.log(` Day ${idx+1}: ${day.name} (${day.additionalProperty ? day.additionalProperty.map(p => p.name+': '+p.value).join(', ') : ''})`);
          });
        }
      }
    } catch(e) {}
  });
}

// Search for Overview, Highlights, Includes, Excludes in HTML
console.log('\n--- Text search ---');
const overviewMatch = content.match(/Overview[\s\S]{0,1000}/i);
if (overviewMatch) console.log('Overview snippet:', overviewMatch[0].slice(0, 300));
