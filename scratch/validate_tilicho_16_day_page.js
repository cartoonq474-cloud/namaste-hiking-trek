const fs = require('fs');

const path = 'trek/annapurna-circuit-trek-with-tilicho-lake/index.html';
const html = fs.readFileSync(path, 'utf8');

console.log('Validating:', path);
console.log('Total file size:', html.length);

// Count tags
function countTag(tag) {
  const openRegex = new RegExp(`<${tag}(\\s+[^>]*)?>`, 'gi');
  const closeRegex = new RegExp(`</${tag}>`, 'gi');
  const open = (html.match(openRegex) || []).length;
  const close = (html.match(closeRegex) || []).length;
  return { open, close, balanced: open === close };
}

['div', 'section', 'main', 'header', 'footer', 'article', 'aside', 'table', 'tbody', 'thead', 'tr', 'td', 'th', 'ul', 'li', 'h1', 'h2', 'h3', 'h4'].forEach(tag => {
  const res = countTag(tag);
  console.log(`${tag}: open=${res.open}, close=${res.close}, balanced=${res.balanced}`);
});

// Check 16 days
for (let d = 1; d <= 16; d++) {
  const hasDay = html.includes(`data-day="${d}"`);
  console.log(`Day ${d} present:`, hasDay);
}

// Check sticky sidebar
console.log('Has sticky sidebar:', html.includes('position: sticky'));

// Check images exist
const imgMatches = html.match(/src="([^"]+\.jpg)"/gi) || [];
console.log('Image references count:', imgMatches.length);
let missingImages = 0;
imgMatches.forEach(m => {
  let src = m.replace(/src="/, '').replace(/"/, '');
  // normalize path from trek/annapurna-circuit-trek-with-tilicho-lake/
  let localPath = src.replace(/^\.\.\/\.\.\//, '');
  if (!fs.existsSync(localPath)) {
    console.log('Missing image:', localPath);
    missingImages++;
  }
});
console.log('Missing images:', missingImages);
