const fs = require('fs');
const orig = fs.readFileSync('scratch/original_git_everest_view_cleaned.html', 'utf8');

const regex = /<section[^>]+id="([^"]+)"/g;
let m;
while ((m = regex.exec(orig)) !== null) {
  console.log('Section id:', m[1], 'at index:', m.index);
}
