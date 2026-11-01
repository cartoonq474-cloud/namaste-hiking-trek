const fs = require('fs');

function checkFile(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const match = html.match(/<div class="mega-tab-content"[^>]*id="tab-everest"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i);
  if (match) {
    console.log(`=== ${filePath} ===`);
    const links = [...match[0].matchAll(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)];
    links.slice(0, 3).forEach(l => console.log(' ', l[1]));
  }
}

checkFile('index.html');
checkFile('everest-region-treks/index.html');
checkFile('trek/everest-base-camp-luxury-trek/index.html');
checkFile('tour/kathmandu-pokhara-chitwan-tour/index.html');
