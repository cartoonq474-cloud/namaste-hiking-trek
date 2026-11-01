const fs = require('fs');

function checkFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf8');
  const openDiv = (content.match(/<div(\s|>)/gi) || []).length;
  const closeDiv = (content.match(/<\/div>/gi) || []).length;
  const openSec = (content.match(/<section(\s|>)/gi) || []).length;
  const closeSec = (content.match(/<\/section>/gi) || []).length;
  console.log(`${filepath}:`);
  console.log(`  Divs: open=${openDiv}, close=${closeDiv}, diff=${openDiv - closeDiv}`);
  console.log(`  Sections: open=${openSec}, close=${closeSec}, diff=${openSec - closeSec}`);
}

checkFile('trek/everest-view-trek/index.html');
