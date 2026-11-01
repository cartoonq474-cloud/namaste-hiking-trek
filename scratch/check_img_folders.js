const fs = require('fs');
const path = require('path');

function listDir(dir) {
  try {
    return fs.readdirSync(dir);
  } catch(e) {
    return [];
  }
}

console.log('images/treks subdirs:', listDir('images/treks'));
console.log('images/treks/everest-view-trek exists?', fs.existsSync('images/treks/everest-view-trek'));
