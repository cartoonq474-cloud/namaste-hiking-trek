const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const matches = [...html.matchAll(/href="([^"]*inc[^"]*)"/gi)];
matches.forEach(m => console.log('Href:', m[1]));
