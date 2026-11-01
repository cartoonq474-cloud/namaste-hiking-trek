const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const matches = [...html.matchAll(/(gallery-container|gallery-track|drag|scrollLeft[^\n]*)/gi)];
console.log('Matches:', matches.length);
matches.slice(0, 15).forEach(m => console.log(m[0]));
