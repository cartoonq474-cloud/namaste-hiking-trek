const fs = require('fs');
const orig = fs.readFileSync('scratch/original_git_everest_view.html', 'utf8');

const firstFact = orig.indexOf('<div class="trip-fact-item">');
console.log(orig.slice(firstFact - 200, firstFact + 3000));
