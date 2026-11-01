const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

const anchorMatches = content.match(/href="#[^"]+"/g) || [];
console.log('Unique anchor links in index.html:');
const uniqueAnchors = [...new Set(anchorMatches)];
uniqueAnchors.forEach(a => console.log(' ', a));
