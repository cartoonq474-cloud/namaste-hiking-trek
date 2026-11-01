const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

const s9 = content.substring(content.indexOf('<section id="reviews-section"'), content.indexOf('<!-- Section 3: Himalayan Trekking Experience Gallery -->'));
const s14 = content.substring(content.indexOf('<section id="homepage-reviews"'), content.indexOf('<!-- Section 4.5: Resources Related to Himalayan Trekking'));

console.log('=== S9 TABS ===');
const s9Tabs = s9.match(/id="[^"]*"/g) || [];
console.log('S9 IDs:', s9Tabs.filter(id => id.includes('review') || id.includes('tab')));

console.log('=== S14 TABS ===');
const s14Tabs = s14.match(/id="[^"]*"/g) || [];
console.log('S14 IDs:', s14Tabs.filter(id => id.includes('review') || id.includes('tab')));

console.log('\n=== S9 VIDEO CARDS COUNT ===');
console.log((s9.match(/class="[^"]*video-card[^"]*"/g) || []).length);

console.log('=== S14 VIDEO CARDS COUNT ===');
console.log((s14.match(/class="[^"]*video-story-card[^"]*"/g) || []).length);

console.log('\n=== S9 CUSTOMER REVIEWS COUNT ===');
console.log((s9.match(/class="[^"]*review-card[^"]*"/g) || []).length);

console.log('=== S14 CUSTOMER REVIEWS COUNT ===');
console.log((s14.match(/class="[^"]*customer-story-card[^"]*"/g) || []).length);

console.log('\n=== S9 PLATFORM REVIEWS COUNT ===');
console.log((s9.match(/class="[^"]*platform-card[^"]*"/g) || []).length);

console.log('=== S14 PLATFORM REVIEWS COUNT ===');
console.log((s14.match(/class="[^"]*platform-review-card[^"]*"/g) || []).length);
