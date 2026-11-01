const fs = require('fs');

const ebcContent = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Find itinerary section in EBC
const itinIdx = ebcContent.indexOf('id="section-itinerary"');
console.log('EBC Itinerary Start:');
console.log(ebcContent.slice(itinIdx, itinIdx + 3000));
