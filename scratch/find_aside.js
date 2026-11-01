const fs = require('fs');
const orig = fs.readFileSync('scratch/original_git_everest_view.html', 'utf8');

const asideIndex = orig.indexOf('<aside');
console.log('asideIndex:', asideIndex);
if (asideIndex !== -1) {
  console.log(orig.slice(asideIndex, asideIndex + 1500));
}
