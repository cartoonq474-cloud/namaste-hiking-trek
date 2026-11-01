const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const heroStart = ebc.indexOf('<section class="trek-hero-section');
const mainStart = ebc.indexOf('<main');
console.log(ebc.substring(heroStart, mainStart));
