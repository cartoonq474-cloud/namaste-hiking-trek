const fs = require('fs');

function inspectSection1Structure(filePath, label) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  let inSec1 = false;
  console.log(`=== ${label} Section 1 Structure (${filePath}) ===`);
  
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l.includes('id="section-overview"')) inSec1 = true;
    if (inSec1 && (l.includes('id="section-itinerary"') || (l.includes('<!-- SECTION 2') && i > 850))) {
      inSec1 = false;
      break;
    }
    if (inSec1) {
      if (l.includes('<h2') || l.includes('<h3') || l.includes('class="ebc-highlights') || l.includes('class="why-book') || l.includes('class="trek-overview') || l.includes('class="overview-') || l.includes('<!--') && !l.includes('DOCTYPE')) {
        console.log(`  [L${i + 1}] ${l.trim().slice(0, 90)}`);
      }
    }
  }
}

inspectSection1Structure('trek/everest-view-trek/index.html', 'EVT');
inspectSection1Structure('trek/everest-base-camp-trek/index.html', 'EBC');
