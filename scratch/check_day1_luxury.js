const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-luxury-trek/index.html', 'utf8');

const day1Idx = html.indexOf('Day 01');
if (day1Idx !== -1) {
  console.log('Day 01 snippet:\n', html.slice(day1Idx - 150, day1Idx + 800));
} else {
  console.log('Day 01 not found');
}
