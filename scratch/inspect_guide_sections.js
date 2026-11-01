const fs = require('fs');

const h = fs.readFileSync('trek/upper-mustang-trek/index.html', 'utf8');
const m = h.match(/<section id="section-details"[\s\S]*?<\/section>/);
if (m) {
  console.log('Upper Mustang details section structure:');
  const headers = [...m[0].matchAll(/<h[2-4][^>]*>([\s\S]*?)<\/h[2-4]>/gi)].map(x => x[0].replace(/<[^>]+>/g, '').trim());
  console.log('Headings:', headers);
  const classes = [...new Set([...m[0].matchAll(/class="([^"]+)"/g)].map(x => x[1]))];
  console.log('Classes used:', classes.slice(0, 20));
  // Print first 2000 chars of m[0]
  console.log('\nSnippet:\n', m[0].substring(0, 2500));
}

