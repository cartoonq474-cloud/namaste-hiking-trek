const fs = require('fs');
const content = fs.readFileSync('trek/upper-mustang-trek/index.html', 'utf8');

// Check head links
const headMatch = content.match(/<head>[\s\S]*?<\/head>/i);
if (headMatch) {
  console.log('Head links sample:');
  const links = headMatch[0].match(/<link[^>]+>/gi) || [];
  links.forEach(l => console.log('  ' + l));
}

// Check scripts at bottom
const scripts = content.match(/<script[^>]*src=[\s\S]*?<\/script>/gi) || [];
console.log('Bottom scripts:');
scripts.forEach(s => console.log('  ' + s));
