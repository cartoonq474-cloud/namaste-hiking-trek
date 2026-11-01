const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Function to find section boundaries and summary
function inspectSections(html) {
  const regex = /<section[^>]*id=["']([^"']+)["'][^>]*>/gi;
  let match;
  const sections = [];
  while ((match = regex.exec(html)) !== null) {
    sections.push({ id: match[1], index: match.index });
  }

  for (let i = 0; i < sections.length; i++) {
    const s = sections[i];
    const nextIdx = (i + 1 < sections.length) ? sections[i+1].index : html.indexOf('</main>');
    const content = html.substring(s.index, nextIdx);
    const h2Match = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    const h2 = h2Match ? h2Match[1].replace(/<[^>]+>/g, '').trim() : 'No H2';
    console.log(`\n--- Section: #${s.id} (${content.length} chars) ---`);
    console.log(`H2: ${h2}`);
    // Sub-classes
    const classMatches = content.match(/class=["']([^"']+)["']/g) || [];
    const uniqueClasses = [...new Set(classMatches.map(c => c.replace(/class=["']/, '').replace(/["']/, '')))];
    console.log('Top classes:', uniqueClasses.slice(0, 8).join(', '));
  }
}

inspectSections(ebc);
