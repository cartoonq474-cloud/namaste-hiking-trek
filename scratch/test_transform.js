const fs = require('fs');
const path = require('path');

function transformContent(content) {
  return content.replace(
    /(<a\s+[^>]*?class=["'][^"']*logo-brand[^"']*["'][^>]*)>([\s\S]*?)<\/a>/i,
    (match, aOpen, inner) => {
      let newAOpen = aOpen;
      if (!newAOpen.includes('aria-label')) {
        newAOpen = newAOpen + ' aria-label="Namaste Hiking Trek"';
      }
      // Remove logo-text-group div and any whitespace around it
      let newInner = inner.replace(/\s*<div\s+class=["']logo-text-group["']>[\s\S]*?<\/div>\s*/i, '\n      ');
      return `${newAOpen}>${newInner}</a>`;
    }
  );
}

const samples = [
  'about.html',
  'annapurna-region-treks/index.html',
  'trek/everest-base-camp-trek/index.html'
];

for (const s of samples) {
  const orig = fs.readFileSync(s, 'utf8');
  const transformed = transformContent(orig);
  const matchBefore = orig.match(/<a[^>]*logo-brand[\s\S]*?<\/a>/i);
  const matchAfter = transformed.match(/<a[^>]*logo-brand[\s\S]*?<\/a>/i);
  console.log('=== FILE:', s, '===');
  console.log('BEFORE:\n', matchBefore ? matchBefore[0] : 'NONE');
  console.log('AFTER:\n', matchAfter ? matchAfter[0] : 'NONE');
}
