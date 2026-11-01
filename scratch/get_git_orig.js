const { execSync } = require('child_process');
const fs = require('fs');

const orig = execSync('git show HEAD~1:trek/everest-view-trek/index.html', { maxBuffer: 10 * 1024 * 1024 }).toString();
console.log('Original file size from git:', orig.length);
fs.writeFileSync('scratch/original_git_everest_view.html', orig, 'utf8');

console.log('Original from start to section-overview:');
const sec1 = orig.indexOf('<section id="section-overview"');
console.log(orig.slice(0, Math.min(2500, sec1)));
