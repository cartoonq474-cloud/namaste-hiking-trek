const fs = require('fs');

const s9 = fs.readFileSync('scratch/s9_dump.html', 'utf8');

console.log('--- S9 Structure Analysis ---');
const lines = s9.split('\n');
console.log('Total lines in S9:', lines.length);

// Check customer reviews in S9 vs S14
const s9CustomerStories = s9.match(/<div class="review-card[^"]*"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g) || [];
console.log('Customer review elements count in S9:', s9CustomerStories.length);

// Check video cards in S9
const s9VideoCards = s9.match(/<div class="video-card[^"]*"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g) || [];
console.log('Video review elements count in S9:', s9VideoCards.length);
