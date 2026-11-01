const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('index.html', 'utf8');

const s9 = content.substring(content.indexOf('<section id="reviews-section"'), content.indexOf('<!-- Section 3: Himalayan Trekking Experience Gallery -->'));
const s14 = content.substring(content.indexOf('<section id="homepage-reviews"'), content.indexOf('<!-- Section 4.5: Resources Related to Himalayan Trekking'));

console.log('--- SECTION 9 (#reviews-section) ---');
console.log('Length:', s9.length);
console.log('Has header?', s9.includes('Best Himalayan Trekking Reviews'));
console.log('Has video reviews?', s9.includes('data-tab="video-reviews"'));
console.log('Has customer reviews?', s9.includes('data-tab="customer-reviews"'));
console.log('Has platform reviews?', s9.includes('data-tab="platform-reviews"'));
console.log('Subtabs in s9:');
const s9Sub = s9.match(/data-platform="[^"]+"/g);
console.log(s9Sub);

console.log('\n--- SECTION 14 (#homepage-reviews) ---');
console.log('Length:', s14.length);
console.log('Has header?', s14.includes('Best Himalayan Trekking Reviews'));
console.log('Has video reviews?', s14.includes('data-tab="tab-video-reviews"'));
console.log('Has customer reviews?', s14.includes('data-tab="tab-customer-reviews"'));
console.log('Has platform reviews?', s14.includes('data-tab="tab-platform-reviews"'));
console.log('Subtabs in s14:');
const s14Sub = s14.match(/data-platform="[^"]+"/g);
console.log(s14Sub);
