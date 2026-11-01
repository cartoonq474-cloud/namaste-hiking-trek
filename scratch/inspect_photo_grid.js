const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const day1Idx = ebc.indexOf('<!-- Day 01');
const photoGridIdx = ebc.indexOf('itinerary-photos-wrapper', day1Idx);
if (photoGridIdx !== -1) {
  console.log(ebc.substring(photoGridIdx - 100, photoGridIdx + 1200));
}
