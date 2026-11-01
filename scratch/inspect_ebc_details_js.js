const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Find JS in EBC that handles detail-accordion or details-progress
const scripts = [...ebcHtml.matchAll(/<script[\s\S]*?<\/script>/gi)].map(m => m[0]);
console.log('Scripts total:', scripts.length);

scripts.forEach((s, i) => {
  if (s.includes('detail-accordion') || s.includes('details-progress') || s.includes('detail_acc')) {
    console.log(`\n=== Script ${i} matches detail accordion / progress ===`);
    console.log(s.substring(0, 1500));
  }
});

// Also check index.css or search for .detail-accordion-card
const css = fs.readFileSync('index.css', 'utf8');
const detailCssMatches = [...css.matchAll(/\.detail-[a-zA-Z0-9\-_]+[^{]*\{[^}]*\}/g)].map(m => m[0]);
console.log('\n=== Detail CSS rules in index.css ===');
console.log(detailCssMatches.slice(0, 10));
