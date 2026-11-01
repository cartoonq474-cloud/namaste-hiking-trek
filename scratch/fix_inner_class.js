const fs = require('fs');

const path = 'trek/khopra-ridge-trek/index.html';
let html = fs.readFileSync(path, 'utf8');

// Replace detail-content-inner with detail-accordion-content-inner
const beforeCount = (html.match(/class="detail-content-inner"/g) || []).length;
html = html.replace(/class="detail-content-inner"/g, 'class="detail-accordion-content-inner"');
const afterCount = (html.match(/class="detail-accordion-content-inner"/g) || []).length;

console.log(`Replaced ${beforeCount} occurrences with detail-accordion-content-inner (total now: ${afterCount})`);

fs.writeFileSync(path, html, 'utf8');
console.log('File updated successfully.');
