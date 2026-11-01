const fs = require('fs');

const ebcContent = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Find Day 1
const day1Idx = ebcContent.indexOf('Day 1:');
console.log('Day 1 in EBC:');
console.log(ebcContent.slice(day1Idx - 300, day1Idx + 2500));
