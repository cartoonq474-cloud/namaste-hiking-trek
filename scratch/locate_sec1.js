const fs = require('fs');

function findSectionOverview(filePath, label) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  let start = -1;
  let end = -1;
  
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l.includes('id="section-overview"')) {
      let s = i;
      while (s > 0 && lines[s - 1].includes('<!--')) s--;
      start = s + 1;
    }
    if (start !== -1 && end === -1 && i > start) {
      if (l.includes('id="section-itinerary"') || l.includes('<!-- SECTION 2')) {
        let e = i;
        while (e > 0 && lines[e - 1].includes('<!--')) e--;
        end = e + 1;
        break;
      }
    }
  }
  
  console.log(`=== ${label} (${filePath}) ===`);
  console.log(`Start line: ${start}, End line: ${end}`);
  if (start !== -1 && end !== -1) {
    console.log(`First 3 lines:`);
    console.log(lines.slice(start - 1, start + 3).join('\n'));
    console.log(`Last 3 lines:`);
    console.log(lines.slice(end - 4, end - 1).join('\n'));
  }
}

findSectionOverview('trek/everest-view-trek/index.html', 'EVT');
findSectionOverview('trek/everest-base-camp-trek/index.html', 'EBC');
