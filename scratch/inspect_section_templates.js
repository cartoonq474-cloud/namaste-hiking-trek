const fs = require('fs');

console.log('--- PACKING STRUCTURE ---');
const packing = fs.readFileSync('scratch/ebc_packing.html', 'utf8');
console.log(packing.slice(0, 1200));
const gearSecMatch = packing.match(/<div class="gear-section"[\s\S]*?<\/div>\s*<\/div>/);
console.log('\n--- SAMPLE GEAR SECTION ---');
console.log(gearSecMatch ? gearSecMatch[0].slice(0, 800) : 'none');

console.log('\n--- REVIEWS STRUCTURE ---');
const reviews = fs.readFileSync('scratch/ebc_reviews.html', 'utf8');
console.log(reviews.slice(0, 1200));

console.log('\n--- DETAILS PROGRESS STRUCTURE ---');
const details = fs.readFileSync('scratch/ebc_details.html', 'utf8');
console.log(details.slice(0, 1400));

console.log('\n--- DATES STRUCTURE ---');
const dates = fs.readFileSync('scratch/ebc_dates.html', 'utf8');
console.log(dates.slice(0, 1400));
