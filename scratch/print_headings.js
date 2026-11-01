const fs = require('fs');
const headings = JSON.parse(fs.readFileSync('scratch/user_content_headings.json', 'utf8'));

console.log('Total headings:', headings.length);
console.log('\n--- HEADINGS 0 - 60 ---');
headings.slice(0, 60).forEach(h => console.log(`L${h.line}: ${h.text}`));

console.log('\n--- HEADINGS 60 - 120 ---');
headings.slice(60, 120).forEach(h => console.log(`L${h.line}: ${h.text}`));

console.log('\n--- HEADINGS 120 - 180 ---');
headings.slice(120, 180).forEach(h => console.log(`L${h.line}: ${h.text}`));

console.log('\n--- HEADINGS 180 - END ---');
headings.slice(180).forEach(h => console.log(`L${h.line}: ${h.text}`));
