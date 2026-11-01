const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Find mega menu in index.html
const megaStart = indexHtml.indexOf('class="mega-menu"');
if (megaStart !== -1) {
  console.log('--- Mega Menu Snippet ---');
  console.log(indexHtml.substring(megaStart - 50, megaStart + 2500));
}

// Check EBC page
const ebcPath = 'trek/everest-base-camp-trek/index.html';
if (fs.existsSync(ebcPath)) {
  const ebcContent = fs.readFileSync(ebcPath, 'utf8');
  console.log('\nEBC page exists, lines:', ebcContent.split('\n').length);
}
