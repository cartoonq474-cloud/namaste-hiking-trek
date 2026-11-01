const fs = require('fs');
const css = fs.readFileSync('index.css', 'utf8');

const matches = [...css.matchAll(/[^{}]*detail-accordion[^{]*\{[^}]*\}/g)];
matches.forEach(m => console.log(m[0]));
