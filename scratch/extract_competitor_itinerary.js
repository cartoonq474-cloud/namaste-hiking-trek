const fs = require('fs');

const path = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\fe1691d6-1667-4e08-b79c-889757b177b1\\.system_generated\\steps\\448\\content.md';
const content = fs.readFileSync(path, 'utf8');

// Find JSON-LD TouristTrip
const jsonMatch = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
if (jsonMatch) {
  jsonMatch.forEach((jm, i) => {
    try {
      const clean = jm.replace('<script type="application/ld+json">', '').replace('</script>', '');
      const parsed = JSON.parse(clean);
      if (parsed['@type'] === 'TouristTrip') {
        console.log('=== TRIP DETAILS ===');
        console.log('Name:', parsed.name);
        console.log('Description:', parsed.description);
        console.log('Duration:', parsed.duration);
        console.log('\n=== ITINERARY ===');
        parsed.itinerary.forEach((d, idx) => {
          console.log(`\n--- DAY ${idx+1}: ${d.name} ---`);
          console.log('Description:', d.description);
          if (d.additionalProperty) {
            d.additionalProperty.forEach(p => console.log(`  ${p.name}: ${p.value}`));
          }
        });
      }
    } catch(e) {}
  });
}
