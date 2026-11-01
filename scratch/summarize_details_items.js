const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

function summarizeItems(content, label) {
  const lines = content.split('\n');
  let currentTitle = '';
  let lineCount = 0;
  let h4Count = 0;
  let ulCount = 0;
  let tableCount = 0;
  const results = [];
  
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l.includes('class="detail-accordion-title"')) {
      if (currentTitle) {
        results.push({ title: currentTitle, lines: lineCount, h4: h4Count, ul: ulCount, tables: tableCount });
      }
      currentTitle = l.replace(/<[^>]+>/g, '').trim();
      lineCount = 0;
      h4Count = 0;
      ulCount = 0;
      tableCount = 0;
    }
    if (currentTitle) {
      lineCount++;
      if (l.includes('<h4')) h4Count++;
      if (l.includes('<ul')) ulCount++;
      if (l.includes('<table')) tableCount++;
      if (l.includes('</section>') && currentTitle) {
        results.push({ title: currentTitle, lines: lineCount, h4: h4Count, ul: ulCount, tables: tableCount });
        currentTitle = '';
      }
    }
  }
  console.log(`=== ${label} Summary ===`);
  results.forEach((r, idx) => {
    console.log(`${idx+1}. ${r.title.slice(0, 45).padEnd(45)} | Lines: ${String(r.lines).padStart(4)} | H4: ${r.h4} | UL: ${r.ul} | Tables: ${r.tables}`);
  });
}

summarizeItems(evt, 'EVT');
summarizeItems(ebc, 'EBC');
