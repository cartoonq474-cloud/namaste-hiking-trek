const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const day1Idx = ebc.indexOf('<!-- Day 01');
if (day1Idx !== -1) {
  console.log(ebc.substring(day1Idx, day1Idx + 1800));
}
