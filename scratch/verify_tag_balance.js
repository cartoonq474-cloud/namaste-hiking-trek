const fs = require('fs');

const files = [
  'trek/annapurna-circuit-trek-with-tilicho-lake/index.html',
  'trek/tilicho-lake-trek/index.html'
];

files.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  console.log(`\nVerifying ${file}...`);
  
  const tags = ['div', 'section', 'main', 'article', 'ul', 'ol', 'li', 'table', 'tr', 'td', 'th', 'header', 'footer', 'svg'];
  let allBalanced = true;

  tags.forEach(tag => {
    const openRegex = new RegExp(`<${tag}(\\s+[^>]*)?>`, 'gi');
    const closeRegex = new RegExp(`</${tag}>`, 'gi');
    
    const openCount = (html.match(openRegex) || []).length;
    const closeCount = (html.match(closeRegex) || []).length;
    
    if (openCount !== closeCount) {
      console.error(`  MISMATCH: <${tag}> open: ${openCount}, close: ${closeCount} (diff: ${openCount - closeCount})`);
      allBalanced = false;
    } else {
      console.log(`  <${tag}>: ${openCount} open / ${closeCount} close (BALANCED)`);
    }
  });

  if (allBalanced) {
    console.log(`  => ALL TAGS PERFECTLY BALANCED in ${file}`);
  }
});
