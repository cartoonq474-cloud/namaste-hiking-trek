const fs = require('fs');
const path = require('path');

let html = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');
const sec5Full = fs.readFileSync(path.join(__dirname, 'sec5_full.html'), 'utf8');

// 1. Locate Section 5
const s5Start = html.indexOf('<!-- SECTION 5: PACKING LIST -->');
const s5SectionStart = html.indexOf('<section id="section-packing"', s5Start);
const s5End = html.indexOf('</section>', s5SectionStart) + 10;

if (s5Start === -1 || s5SectionStart === -1 || s5End === -1) {
  console.error('Failed to locate Section 5 boundaries!');
  process.exit(1);
}

console.log('Replacing Section 5 from index', s5Start, 'to', s5End);
html = html.slice(0, s5Start) + sec5Full + html.slice(s5End);

// 2. Ensure data-trek-details-wrapper and data-trek-key="everest-view" on <article>
if (!html.includes('data-trek-details-wrapper')) {
  html = html.replace('<article class="trek-article-container"', '<article class="trek-article-container" data-trek-details-wrapper data-trek-key="everest-view"');
  console.log('Added data-trek-details-wrapper and data-trek-key="everest-view" to <article>');
}

// 3. Clean up obsolete inline gear persistence code that looks for data-gear-id
const oldGearScriptIdx = html.indexOf('// 5. Gear & Packing List Persistence');
if (oldGearScriptIdx !== -1) {
  const scriptEndIdx = html.indexOf('updateGearCount();\n    });', oldGearScriptIdx);
  if (scriptEndIdx !== -1) {
    const endOfBlock = scriptEndIdx + 'updateGearCount();\n    });'.length;
    // Replace with a clean call to ensure setupGearChecklist is synchronized
    const cleanSync = `// 5. Gear Checklist is managed automatically by setupGearChecklist('everest-view') in trek-details.js\n    });`;
    html = html.slice(0, oldGearScriptIdx) + cleanSync + html.slice(endOfBlock);
    console.log('Cleaned up legacy inline gear script in favor of canonical trek-details.js controller!');
  }
}

// 4. Save updated file
fs.writeFileSync('trek/everest-view-trek/index.html', html, 'utf8');
console.log('Updated trek/everest-view-trek/index.html successfully! Length:', html.length);
