const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const evtHtml = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

function extractSections(html) {
  const matches = [...html.matchAll(/<section[^>]*id="([^"]+)"[^>]*>/gi)];
  return matches.map(m => {
    const id = m[1];
    const fullTag = m[0];
    const idx = m.index;
    // find section end or next section
    const closeIdx = html.indexOf('</section>', idx);
    const inner = html.substring(idx, closeIdx > -1 ? closeIdx : idx + 2000);
    // Find first h1/h2/h3
    const headingMatch = inner.match(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/i);
    const heading = headingMatch ? headingMatch[0].replace(/<[^>]+>/g, '').trim() : 'No heading';
    return { id, tag: fullTag, heading };
  });
}

console.log('=== EBC Sections ===');
const ebcSections = extractSections(ebcHtml);
ebcSections.forEach((s, i) => console.log(`${i + 1}. [${s.id}] -> ${s.heading} (${s.tag})`));

console.log('\n=== EVT Sections ===');
const evtSections = extractSections(evtHtml);
evtSections.forEach((s, i) => console.log(`${i + 1}. [${s.id}] -> ${s.heading} (${s.tag})`));
