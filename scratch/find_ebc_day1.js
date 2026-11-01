const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Find Day 01 in EBC
const day1Idx = ebc.indexOf('Day 01:');
if (day1Idx !== -1) {
  const start = ebc.lastIndexOf('<div', day1Idx - 50);
  console.log('--- EBC Day 1 full block (first 2500 chars) ---');
  console.log(ebc.slice(start, start + 2500));
} else {
  const day1Any = ebc.indexOf('Day 1');
  console.log('Day 1 index:', day1Any);
  console.log(ebc.slice(day1Any - 200, day1Any + 1500));
}
