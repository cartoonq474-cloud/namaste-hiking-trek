const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

function extractTagById(html, id) {
  const startTagRegex = new RegExp(`<(?:section|div)[^>]*id=["']${id}["'][^>]*>`, 'i');
  const startMatch = html.match(startTagRegex);
  if (!startMatch) return null;

  const startIndex = startMatch.index;
  const tagName = startMatch[0].match(/<([a-z0-9]+)/i)[1];
  let depth = 0;

  const tagRegex = new RegExp(`<\\/?${tagName}\\b[^>]*>`, 'gi');
  tagRegex.lastIndex = startIndex;
  let m;
  while ((m = tagRegex.exec(html)) !== null) {
    if (m[0].startsWith('</')) {
      depth--;
      if (depth === 0) {
        return html.slice(startIndex, m.index + m[0].length);
      }
    } else {
      depth++;
    }
  }
  return null;
}

const sections = [
  'section-overview',
  'section-dates',
  'section-packing',
  'section-details',
  'section-reviews',
  'section-faqs'
];

sections.forEach(id => {
  const sec = extractTagById(ebc, id);
  if (sec) {
    fs.writeFileSync(`scratch/ebc_${id.replace('section-', '')}.html`, sec);
    console.log(`Saved scratch/ebc_${id.replace('section-', '')}.html (${sec.length} bytes)`);
  }
});
