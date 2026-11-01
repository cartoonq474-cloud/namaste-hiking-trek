const fs = require('fs');

function testUpdateNav(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Match tab-everest High Expedition section
  const tabEverestIdx = content.indexOf('id="tab-everest"');
  if (tabEverestIdx === -1) {
    console.log(`Skipping ${filePath}: no tab-everest`);
    return;
  }

  // Find the EBC link inside tab-everest
  const tabEverestEnd = content.indexOf('</div>', content.indexOf('class="mega-content-grid"', tabEverestIdx) + 500);
  const tabEverestBlock = content.substring(tabEverestIdx, tabEverestIdx + 1200);

  // Regex to match EBC link inside tab-everest
  const ebcRegex = /(<div\s+class="mega-col-title">\s*High Expedition\s*<\/div>\s*<a\s+href="([^"]*trek\/everest-base-camp-trek\/)"\s+class="mega-trek-link">\s*<span>Everest Base Camp Trek<\/span>\s*<span class="days-badge">14 DAYS<\/span>\s*<\/a>)/i;

  const match = tabEverestBlock.match(ebcRegex);
  if (!match) {
    console.log(`NO MATCH in ${filePath}`);
    return;
  }

  const prefix = match[2].replace('trek/everest-base-camp-trek/', '');
  console.log(`${filePath} -> matched prefix: "${prefix}"`);
  const replacement = `${match[1]}
                        <a href="${prefix}trek/everest-base-camp-luxury-trek/" class="mega-trek-link"><span>Everest Base Camp Luxury Trek</span> <span class="days-badge">12 DAYS</span></a>`;

  console.log('Sample replacement result:');
  console.log(replacement);
}

testUpdateNav('index.html');
testUpdateNav('about.html');
testUpdateNav('everest-region-treks/index.html');
testUpdateNav('trek/everest-base-camp-luxury-trek/index.html');
