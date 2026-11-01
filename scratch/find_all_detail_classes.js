const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

const regex = /\.detail-[a-zA-Z0-9_-]+/g;
const matches = new Set(css.match(regex));
console.log('Classes matching .detail-*:');
console.log(Array.from(matches));
