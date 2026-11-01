const fs = require('fs');
const content = fs.readFileSync('scratch/orig_sidebar_and_bottom.html', 'utf8');

const matches = content.match(/<\/(article|main|section|div|body|html)>/gi);
console.log('Closing tags in sidebarAndBottom:', matches.slice(0, 20));
console.log('Last 10 closing tags:', matches.slice(-10));
