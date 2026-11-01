const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const jsMatches = [...html.matchAll(/(trekking-gallery[^\n]*)/gi)];
console.log('Occurrences of trekking-gallery in index.html:', jsMatches.length);
jsMatches.forEach(m => console.log(m[1]));
