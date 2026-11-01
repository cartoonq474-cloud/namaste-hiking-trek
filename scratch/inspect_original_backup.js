const fs = require('fs');
const content = fs.readFileSync('scratch/everest_view_index_backup.html', 'utf8');

console.log('Original Everest View Trek file length:', content.length);
console.log(content.slice(0, 2500));
