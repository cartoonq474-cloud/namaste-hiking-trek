const fs = require('fs');
const html = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

['trek/everest-base-camp-trek/index.html', 'trek/gokyo-ri-trek/index.html', 'trek/upper-mustang-trek/index.html'].forEach(f => {

  if (fs.existsSync(f)) {
    const h = fs.readFileSync(f, 'utf8');
    const m = h.match(/data-tab="alt[^"]*"/);
    const s = h.match(/id="section-alt[^"]*"/);
    console.log(f, '-> tab:', m ? m[0] : 'none', '| sec:', s ? s[0] : 'none');
  }
});


// Check href anchors
const hrefMatches = [...html.matchAll(/href="#([^"]+)"/g)].map(m => m[1]);
const declaredIds = new Set([...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]));

console.log('Total anchor hrefs found:', hrefMatches.length);
const uniqueHrefs = [...new Set(hrefMatches)];
console.log('Unique anchor targets:', uniqueHrefs);

const missing = uniqueHrefs.filter(h => !declaredIds.has(h));
console.log('Missing targets:', missing);

// Check all section IDs
const lines = html.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('id="section-')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});



// Check scripts for errors or undefined refs
console.log('Script tags count:', [...html.matchAll(/<script/gi)].length);
