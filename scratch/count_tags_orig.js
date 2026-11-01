const fs = require('fs');
const orig = fs.readFileSync('scratch/original_git_everest_view.html', 'utf8');

console.log('Open article tags in orig:', (orig.match(/<article[^>]*>/gi) || []).length);
console.log('Close article tags in orig:', (orig.match(/<\/article>/gi) || []).length);

console.log('Open main tags in orig:', (orig.match(/<main[^>]*>/gi) || []).length);
console.log('Close main tags in orig:', (orig.match(/<\/main>/gi) || []).length);

console.log('Open section tags in orig:', (orig.match(/<section[^>]*>/gi) || []).length);
console.log('Close section tags in orig:', (orig.match(/<\/section>/gi) || []).length);
