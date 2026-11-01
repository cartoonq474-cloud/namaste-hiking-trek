const fs = require('fs');

const css = fs.readFileSync('css/index.css', 'utf8');

const matches = [...css.matchAll(/(\.[a-zA-Z0-9_-]*(?:gallery|trekking)[a-zA-Z0-9_-]*\s*\{[\s\S]*?\})/gi)];
console.log('Total gallery-related CSS rules:', matches.length);
matches.slice(0, 20).forEach(m => console.log(m[1] + '\n'));
