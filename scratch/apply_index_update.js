const fs = require('fs');

// 1. Create a backup of index.html
fs.copyFileSync('index.html', 'scratch/index.html.bak');
console.log('Backed up index.html to scratch/index.html.bak');

// 2. Overwrite index.html with validated newContent from scratch/test_index.html
const updatedContent = fs.readFileSync('scratch/test_index.html', 'utf8');
fs.writeFileSync('index.html', updatedContent, 'utf8');
console.log('Successfully updated index.html with consolidated reviews section!');
