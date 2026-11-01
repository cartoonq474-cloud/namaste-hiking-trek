const fs = require('fs');
const content = fs.readFileSync('trek/upper-mustang-trek/index.html', 'utf8');

const heroStart = content.indexOf('<header class="trek-hero-header"');
console.log(content.slice(heroStart, heroStart + 2500));
