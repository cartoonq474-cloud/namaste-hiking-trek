const fs = require('fs');

function inspectTags(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  console.log(`=== ${filePath} ===`);
  lines.forEach((l, idx) => {
    if (l.includes('</main>') || l.includes('</article>') || l.includes('id="inquiry-modal"')) {
      console.log(`Line ${idx+1}: ${l.trim()}`);
    }
  });
}

inspectTags('trek/annapurna-circuit-trek/index.html');
inspectTags('trek/everest-base-camp-trek/index.html');
