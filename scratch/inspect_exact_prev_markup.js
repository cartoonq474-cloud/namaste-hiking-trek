const fs = require('fs');

const s9 = fs.readFileSync('scratch/s9_dump.html', 'utf8');

// Extract video reviews
const vidStart = s9.indexOf('<div id="video-reviews"');
const vidEnd = s9.indexOf('<div id="customer-reviews"');
const vidHtml = s9.substring(vidStart, vidEnd);

// Extract customer reviews
const custStart = s9.indexOf('<div id="customer-reviews"');
const custEnd = s9.indexOf('<div id="platform-reviews"');
const custHtml = s9.substring(custStart, custEnd);

// Extract segmented tab bar
const tabStart = s9.indexOf('<div class="segmented-tab-bar">');
const tabEnd = s9.indexOf('<!-- TAB 1: VIDEO REVIEWS');
const tabHtml = s9.substring(tabStart, tabEnd);

console.log('--- Segmented tab bar in S9 ---');
console.log(tabHtml);

console.log('\n--- Video Reviews Card count and structure ---');
const vidCards = vidHtml.match(/<div class="video-card[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g) || [];
console.log('Video cards count:', vidCards.length);
if (vidCards[0]) {
  console.log('Sample Video Card:\n', vidCards[0]);
}

console.log('\n--- Customer Reviews Card count and structure ---');
const custCards = custHtml.match(/<div class="customer-card[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g) || [];
console.log('Customer cards count:', custCards.length);
if (custCards[0]) {
  console.log('Sample Customer Card:\n', custCards[0]);
}
