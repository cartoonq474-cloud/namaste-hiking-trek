const fs = require('fs');
const content = fs.readFileSync('scratch/orig_sidebar_and_bottom.html', 'utf8');

console.log('Sidebar length:', content.length);
console.log(content.slice(0, 4000));
