const fs = require('fs');
const orig = fs.readFileSync('scratch/original_git_everest_view.html', 'utf8');

const heroHeader = orig.indexOf('<header class="trek-hero-header"');
const sec1 = orig.indexOf('<section id="section-overview"');

console.log('Hero header to section 1:');
console.log(orig.slice(heroHeader, sec1));
