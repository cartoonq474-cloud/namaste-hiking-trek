const fs = require('fs');

if (fs.existsSync('scratch/add_reviews_to_homepage.js')) {
  console.log('--- Content of scratch/add_reviews_to_homepage.js ---');
  console.log(fs.readFileSync('scratch/add_reviews_to_homepage.js', 'utf8').substring(0, 1500));
} else {
  console.log('scratch/add_reviews_to_homepage.js does not exist');
}
