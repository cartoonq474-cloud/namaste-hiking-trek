const fs = require('fs');

function inspectTags(filePath, startLine, endLine) {
  console.log(`\n=== ${filePath} L${startLine}-L${endLine} ===`);
  const lines = fs.readFileSync(filePath, 'utf8').split('\n');
  for (let i = startLine; i <= Math.min(lines.length, endLine); i++) {
    console.log(`L${i}: ${lines[i - 1]}`);
  }
}

// Check around L4080-L4125 and L4760-L4775 in Three Passes
inspectTags('trek/everest-three-high-passes-trek/index.html', 4080, 4125);
inspectTags('trek/everest-three-high-passes-trek/index.html', 4760, 4775);

// Check around L420-L440 and L760-L775 in Three Passes
inspectTags('trek/everest-three-high-passes-trek/index.html', 415, 435);
inspectTags('trek/everest-three-high-passes-trek/index.html', 760, 775);

// Check around L6085-L6100 in Three Passes
inspectTags('trek/everest-three-high-passes-trek/index.html', 6085, 6100);
