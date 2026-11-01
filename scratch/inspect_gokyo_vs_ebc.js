const fs = require('fs');

const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

console.log('=== GOKYO LAKES TREK ===');
console.log('File size:', gokyo.length);
const gokyoSections = [...gokyo.matchAll(/<section[^>]*id="([^"]+)"[^>]*>/g)].map(m => m[1]);
console.log('Sections:', gokyoSections);

console.log('\n=== EVEREST BASE CAMP TREK ===');
console.log('File size:', ebc.length);
const ebcSections = [...ebc.matchAll(/<section[^>]*id="([^"]+)"[^>]*>/g)].map(m => m[1]);
console.log('Sections:', ebcSections);

// Check Itinerary in Gokyo
console.log('\n=== ITINERARY COMPARISON ===');
const gokyoItinMatch = gokyo.match(/<section[^>]*id="section-itinerary"[\s\S]*?<\/section>/);
console.log('Gokyo Itinerary exists?', !!gokyoItinMatch);
if (gokyoItinMatch) {
  const gokyoItin = gokyoItinMatch[0];
  console.log('Gokyo Itinerary length:', gokyoItin.length);
  const cards = [...gokyoItin.matchAll(/class="[^"]*itinerary-card[^"]*"/g)];
  console.log('Gokyo itinerary-card count:', cards.length);
  const items = [...gokyoItin.matchAll(/class="[^"]*itinerary-item[^"]*"/g)];
  console.log('Gokyo itinerary-item count:', items.length);
  const buttons = [...gokyoItin.matchAll(/<button[^>]*>/g)].map(m => m[0]);
  console.log('Gokyo buttons in itinerary:', buttons);
}

const ebcItinMatch = ebc.match(/<section[^>]*id="section-itinerary"[\s\S]*?<\/section>/);
console.log('\nEBC Itinerary exists?', !!ebcItinMatch);
if (ebcItinMatch) {
  const ebcItin = ebcItinMatch[0];
  console.log('EBC Itinerary length:', ebcItin.length);
  const cards = [...ebcItin.matchAll(/class="[^"]*itinerary-card[^"]*"/g)];
  console.log('EBC itinerary-card count:', cards.length);
  const items = [...ebcItin.matchAll(/class="[^"]*itinerary-item[^"]*"/g)];
  console.log('EBC itinerary-item count:', items.length);
  const buttons = [...ebcItin.matchAll(/<button[^>]*>/g)].map(m => m[0]);
  console.log('EBC buttons in itinerary:', buttons.slice(0, 5));
}
