const fs = require('fs');
const content = fs.readFileSync('scratch/orig_sidebar_and_bottom.html', 'utf8');

console.log(content.slice(3500, 7500));
