const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'index.html');
const content = fs.readFileSync(indexPath, 'utf8');

// Check reviews-section
const revSectionMatch = content.match(/<section id="reviews-section"[\s\S]*?<\/section>/);
console.log('reviews-section length:', revSectionMatch ? revSectionMatch[0].length : 'Not found');

// Check homepage-reviews
const homeRevMatch = content.match(/<section id="homepage-reviews"[\s\S]*?<\/section>/);
console.log('homepage-reviews length:', homeRevMatch ? homeRevMatch[0].length : 'Not found');

// Inspect js/reviews-tabs.js
const jsPath = path.join(__dirname, '..', 'js', 'reviews-tabs.js');
if (fs.existsSync(jsPath)) {
  console.log('\n--- js/reviews-tabs.js ---');
  console.log(fs.readFileSync(jsPath, 'utf8'));
}
