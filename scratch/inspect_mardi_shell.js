const fs = require('fs');
const content = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

const headMatch = content.match(/<head[\s\S]*?<\/head>/i);
if (headMatch) {
  console.log('Head length:', headMatch[0].length);
  console.log(headMatch[0].slice(0, 500));
}

const headerMatch = content.match(/<header class="site-header"[\s\S]*?<\/header>/i);
if (headerMatch) {
  console.log('Header length:', headerMatch[0].length);
}

const footerMatch = content.match(/<footer class="site-footer"[\s\S]*?<\/footer>/i);
if (footerMatch) {
  console.log('Footer length:', footerMatch[0].length);
}

const endScripts = content.slice(content.indexOf('</footer') + 9);
console.log('End scripts length:', endScripts.length);
console.log(endScripts);
