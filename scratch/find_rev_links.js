const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

const revLinks = content.match(/href="[^"]*review[^"]*"/gi) || [];
console.log('Review links in index.html:', [...new Set(revLinks)]);
