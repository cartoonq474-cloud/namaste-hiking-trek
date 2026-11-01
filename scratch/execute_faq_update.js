const fs = require('fs');

const updatedHtml = fs.readFileSync('scratch/test_updated_page.html', 'utf8');

// Write to trek/everest-base-camp-trek/index.html
fs.writeFileSync('trek/everest-base-camp-trek/index.html', updatedHtml, 'utf8');

console.log('Successfully written updated content to trek/everest-base-camp-trek/index.html');
console.log('File size:', fs.statSync('trek/everest-base-camp-trek/index.html').size, 'bytes');
