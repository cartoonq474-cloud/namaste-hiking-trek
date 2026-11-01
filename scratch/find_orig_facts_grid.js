const fs = require('fs');
const orig = fs.readFileSync('scratch/original_git_everest_view.html', 'utf8');

const matches = orig.match(/<div[^>]*class="[^"]*fact[^"]*"[^>]*>/gi);
console.log('Fact matches in orig:', matches);

// Search for "Highest Point" or "Duration"
const durIndex = orig.indexOf('7 Days');
console.log('7 Days index:', durIndex);
if (durIndex !== -1) {
  console.log(orig.slice(durIndex - 200, durIndex + 300));
}
