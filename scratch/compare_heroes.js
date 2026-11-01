const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const gokyo = fs.readFileSync('trek/gokyo-lakes-trek/index.html', 'utf8');

const ebcHero = ebc.slice(ebc.indexOf('<header class="trek-hero">'), ebc.indexOf('</header>') + 9);
const gokyoHero = gokyo.slice(gokyo.indexOf('<header class="trek-hero">'), gokyo.indexOf('</header>') + 9);

console.log('=== EBC Hero Length ===', ebcHero.length);
console.log('=== Gokyo Hero Length ===', gokyoHero.length);

console.log('\nEBC Hero first 1500 chars:');
console.log(ebcHero.slice(0, 1500));

console.log('\nGokyo Hero first 1500 chars:');
console.log(gokyoHero.slice(0, 1500));
