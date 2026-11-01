const fs = require('fs');

const s14 = fs.readFileSync('scratch/s14_dump.html', 'utf8');

console.log('--- S14 Structure Analysis ---');
const lines = s14.split('\n');
console.log('Total lines in S14:', lines.length);

// Check tabs in S14
const tabButtons = s14.match(/<button class="review-tab-btn[^"]*"[^>]*>[\s\S]*?<\/button>/g);
console.log('Main Tab Buttons in S14:');
tabButtons.forEach(b => console.log(' ', b.replace(/\s+/g, ' ').trim()));

// Check subtabs
const subtabBtns = s14.match(/<button class="platform-subtab-btn[^"]*"[^>]*>[\s\S]*?<\/button>/g);
console.log('\nSubtab Buttons in S14:');
subtabBtns.forEach(b => console.log(' ', b.replace(/\s+/g, ' ').trim().substring(0, 100)));

// Check panels
const panels = s14.match(/<div id="tab-[^"]*" class="review-tab-panel[^"]*">/g);
console.log('\nMain Panels in S14:');
panels.forEach(p => console.log(' ', p));

// Check platform content divs
const platDivs = s14.match(/<div class="platform-reviews-content[^"]*" data-platform="[^"]*">/g);
console.log('\nPlatform content divs in S14:');
platDivs.forEach(d => console.log(' ', d));
