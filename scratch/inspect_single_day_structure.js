const fs = require('fs');
const days = JSON.parse(fs.readFileSync('scratch/parsed_itinerary_days.json', 'utf8'));

console.log('=== DAY 1 SAMPLE ===');
console.log(days[0].text);

console.log('\n=== DAY 3 SAMPLE ===');
console.log(days[2].text);

console.log('\n=== DAY 10 SAMPLE ===');
console.log(days[9].text);

