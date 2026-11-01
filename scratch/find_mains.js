const fs = require('fs');
const orig = fs.readFileSync('scratch/original_git_everest_view.html', 'utf8');

let pos = -1;
while ((pos = orig.indexOf('</main>', pos + 1)) !== -1) {
  console.log(`Found </main> at char ${pos}:`);
  console.log(orig.slice(Math.max(0, pos - 100), pos + 50));
}
