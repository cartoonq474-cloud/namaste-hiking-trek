const fs = require('fs');
const orig = fs.readFileSync('scratch/original_git_everest_view.html', 'utf8');

const factsStart = orig.indexOf('<div class="quick-facts-grid"');
const factsEnd = orig.indexOf('<!-- Trust Badges Section -->');
console.log(orig.slice(factsStart, factsEnd));
