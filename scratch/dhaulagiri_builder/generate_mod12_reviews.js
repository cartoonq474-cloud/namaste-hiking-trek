const fs = require('fs');

// Read pikey reviews and adapt testimonials to Dhaulagiri Circuit Trek
let pikeyReviews = fs.readFileSync('scratch/pikey_builder/mod12_reviews.js', 'utf8');

// Replace Solukhumbu / Pikey Peak references with Dhaulagiri
let dhReviews = pikeyReviews
  .replace(/Solukhumbu with Namaste/g, 'Dhaulagiri and the Himalayas with Namaste')
  .replace(/Pikey Peak/g, 'Dhaulagiri Circuit')
  .replace(/pikey peak/gi, 'Dhaulagiri Circuit')
  .replace(/Dhap Bazaar/g, 'Italian Base Camp')
  .replace(/Junbesi/g, 'Hidden Valley')
  .replace(/4,065 m/g, '5,360 m')
  .replace(/13,336 ft/g, '17,585 ft');

fs.writeFileSync('scratch/dhaulagiri_builder/mod12_reviews.js', dhReviews, 'utf8');
console.log('Successfully wrote scratch/dhaulagiri_builder/mod12_reviews.js');

