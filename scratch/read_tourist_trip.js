const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scratch/competitor_jsonld_2.json', 'utf8'));
console.log('Trip name:', data.name);
console.log('Offers:', data.offers);
if (data.itinerary) {
  console.log('Itinerary count:', data.itinerary.length);
  data.itinerary.forEach((item, i) => {
    console.log(`Day ${i+1}: ${item.name}`);
    console.log(`   Description: ${item.description}`);
    if (item.additionalProperty) {
      console.log('   Properties:', JSON.stringify(item.additionalProperty));
    }
  });
}
