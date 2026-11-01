const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const match = ebc.match(/<!-- Day 1[\s\S]*?<!-- Day 2/);
if (match) {
  console.log('=== EBC DAY 1 MARKUP ===');
  console.log(match[0].slice(0, 3000));
} else {
  console.log('Day 1 not found by regex');
  const itin = ebc.match(/<section id="section-itinerary"[\s\S]*?<\/section>/)[0];
  console.log(itin.slice(0, 3000));
}
