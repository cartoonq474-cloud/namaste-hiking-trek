const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const mardi = fs.readFileSync('trek/mardi-himal-trek/index.html', 'utf8');

// Function to find sections with IDs
function parseSections(html) {
  const sections = [];
  const regex = /<section\b([^>]*)>([\s\S]*?)<\/section>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const attrs = match[1];
    const content = match[2];
    const idMatch = attrs.match(/id=["']([^"']+)["']/i);
    const classMatch = attrs.match(/class=["']([^"']+)["']/i);
    sections.push({
      id: idMatch ? idMatch[1] : null,
      className: classMatch ? classMatch[1] : null,
      length: content.length,
      snippet: content.trim().slice(0, 150)
    });
  }
  return sections;
}

const ebcSections = parseSections(ebc);
const mardiSections = parseSections(mardi);

console.log('=== EBC SECTIONS ===');
ebcSections.forEach((s, i) => console.log(`${i + 1}. ID: ${s.id || 'none'} | Class: ${s.className || 'none'} | Len: ${s.length}`));

console.log('\n=== MARDI SECTIONS ===');
mardiSections.forEach((s, i) => console.log(`${i + 1}. ID: ${s.id || 'none'} | Class: ${s.className || 'none'} | Len: ${s.length}`));
