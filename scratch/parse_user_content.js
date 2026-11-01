const fs = require('fs');
const content = fs.readFileSync('scratch/three_passes_content.txt', 'utf8');

// Function to get slice between two headings
function getSlice(startStr, endStr) {
  const sIdx = content.indexOf(startStr);
  if (sIdx === -1) {
    console.error('Start not found:', startStr);
    return '';
  }
  if (!endStr) {
    return content.slice(sIdx + startStr.length).trim();
  }
  const eIdx = content.indexOf(endStr, sIdx + startStr.length);
  if (eIdx === -1) {
    console.error('End not found:', endStr);
    return '';
  }
  return content.slice(sIdx + startStr.length, eIdx).trim();
}

console.log('Testing extraction:');
console.log('Key trip facts slice length:', getSlice('Key trip facts', 'Trek overview').length);
console.log('Trek overview slice length:', getSlice('Trek overview', 'Everest Three High Passes Trek highlights').length);
console.log('Highlights slice length:', getSlice('Everest Three High Passes Trek highlights', 'Highlights at a glance').length);
console.log('Day 1 slice length:', getSlice('Day 1: arrival in Kathmandu', 'Day 2: Kathmandu sightseeing and trek preparation').length);
console.log('Day 21 slice length:', getSlice('Day 21: final departure from Nepal', "What's included in the trek price?").length);
console.log('Includes slice length:', getSlice("What's included in the trek price?", "What's excluded from the trek price?").length);
console.log('Excludes slice length:', getSlice("What's excluded from the trek price?", "Packing list for Everest Three High Passes Trek").length);
console.log('Packing slice length:', getSlice("Packing list for Everest Three High Passes Trek", "Accommodation, food and drinking water").length);
console.log('Altitude profile slice length:', getSlice("Altitude profile of the 21-day itinerary", "Everest Three High Passes Trek map").length);
console.log('FAQs slice length:', getSlice("Everest Three High Passes Trek FAQs", "</USER_REQUEST>").length);

