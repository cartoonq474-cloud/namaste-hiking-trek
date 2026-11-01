const fs = require('fs');
const path = require('path');

const trekDir = 'trek';
const folders = fs.readdirSync(trekDir);

console.log('Auditing all trek index.html files...');

for (const folder of folders) {
  const file = path.join(trekDir, folder, 'index.html');
  if (!fs.existsSync(file)) continue;
  
  const content = fs.readFileSync(file, 'utf8');
  const openDivs = (content.match(/<div(\s|>)/gi) || []).length;
  const closeDivs = (content.match(/<\/div>/gi) || []).length;
  const diff = openDivs - closeDivs;
  
  const hasSidebar = content.includes('sidebar-booking-card');
  const hasTrekDetailLayout = content.includes('trek-detail-layout');
  
  // Check if </div> precedes <!-- Sticky Booking Sidebar Column -->
  const sbColIdx = content.indexOf('<!-- Sticky Booking Sidebar Column -->');
  let hasClosingDivBeforeSb = false;
  if (sbColIdx !== -1) {
    const chunkBefore = content.slice(Math.max(0, sbColIdx - 50), sbColIdx);
    hasClosingDivBeforeSb = chunkBefore.includes('</div>');
  }
  
  if (diff !== 0 || !hasClosingDivBeforeSb || !hasTrekDetailLayout) {
    console.log(`\n[${folder}]`);
    console.log(`  Div diff: ${diff} (open: ${openDivs}, close: ${closeDivs})`);
    console.log(`  Has sidebar: ${hasSidebar}`);
    console.log(`  Closing div before sidebar col: ${hasClosingDivBeforeSb}`);
    console.log(`  Has trek-detail-layout class: ${hasTrekDetailLayout}`);
  }
}
