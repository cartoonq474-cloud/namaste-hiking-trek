const fs = require('fs');
const orig = fs.readFileSync('scratch/original_git_everest_view_cleaned.html', 'utf8');
const catGen = orig.indexOf('id="faq-cat-general"');
console.log(orig.slice(catGen, catGen + 1500));
