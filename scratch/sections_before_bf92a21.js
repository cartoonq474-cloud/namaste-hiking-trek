const { execSync } = require('child_process');

try {
  const fileBefore = execSync('git show bf92a21~1:index.html', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
  const lines = fileBefore.split('\n');
  
  // Find all sections
  console.log(`Total lines before bf92a21: ${lines.length}`);
  const matches = [];
  let pos = 0;
  while (true) {
    const match = fileBefore.indexOf('<section', pos);
    if (match === -1) break;
    const tagEnd = fileBefore.indexOf('>', match);
    const tag = fileBefore.substring(match, tagEnd + 1);
    const lineNumber = fileBefore.substring(0, match).split('\n').length;
    const nextHeadingMatch = fileBefore.substring(match, match + 1500).match(/<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/i);
    let heading = 'None';
    if (nextHeadingMatch) {
      heading = `<${nextHeadingMatch[1]}> ${nextHeadingMatch[2].replace(/\s+/g, ' ').trim().substring(0, 80)}`;
    }
    matches.push({ line: lineNumber, tag: tag.replace(/\s+/g, ' ').trim(), heading });
    pos = tagEnd + 1;
  }

  console.log('--- SECTIONS BEFORE bf92a21 ---');
  matches.forEach((m, idx) => {
    console.log(`${idx + 1}. Line ${m.line}: ${m.tag}\n   Heading: ${m.heading}\n`);
  });
} catch (e) {
  console.error(e.message);
}
