const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === '.git' || file === 'node_modules' || file === 'scratch') return;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  });
  return results;
}

const allHtmlFiles = getHtmlFiles('.');

console.log(`Checking ${allHtmlFiles.length} HTML files for orphan gallery blocks...`);

allHtmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (!content.includes('trek-gallery-collage')) return;
  
  // Count how many times trek-gallery-sub appears in the file
  const subCount = (content.match(/trek-gallery-sub/g) || []).length;
  // A standard collage has 4 sub divs
  if (subCount !== 4) {
    console.log(`${f}: has ${subCount} instances of trek-gallery-sub (expected 4)`);
  }
});
