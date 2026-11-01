const fs = require('fs');
const path = require('path');

// 1. Find all trek pages and html files
const files = fs.readdirSync('.');
const htmlFiles = files.filter(f => f.endsWith('.html'));
const subdirs = files.filter(f => fs.statSync(f).isDirectory() && !f.startsWith('.') && f !== 'node_modules');

console.log('Root HTML files count:', htmlFiles.length);
console.log('Subdirectories:', subdirs);

// Check if trek pages are root html or subdirectories
console.log('\nTrek-related root HTML files:');
htmlFiles.filter(f => f.includes('everest') || f.includes('annapurna') || f.includes('trek') || f.includes('chola')).forEach(f => console.log(' ', f));

// Check subdirectories for index.html
console.log('\nTrek-related subdirectories:');
subdirs.forEach(d => {
  const indexPath = path.join(d, 'index.html');
  if (fs.existsSync(indexPath)) {
    console.log(`  Directory with index.html: ${d}`);
  }
});
