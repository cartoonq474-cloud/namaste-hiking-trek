// scratch/assemble_everest_view_page.js
const fs = require('fs');
const path = require('path');

const getMetadataAndHero = require('./gen_everest_metadata_hero');
const getSection1Overview = require('./gen_everest_section1_overview');
const getSection2Itinerary = require('./gen_everest_section2_itinerary');
const getSection3to5 = require('./gen_everest_section3_5');
const getSection6Accordions = require('./gen_everest_section6_accordions');
const getSection7to12 = require('./gen_everest_section7_12');

console.log('Assembling Everest View Trek page...');

const fullHTML = 
  getMetadataAndHero() +
  getSection1Overview() +
  getSection2Itinerary() +
  getSection3to5() +
  getSection6Accordions() +
  getSection7to12();

const targetPath = path.join(__dirname, '..', 'trek', 'everest-view-trek', 'index.html');

// Create backup just in case
if (fs.existsSync(targetPath)) {
  fs.copyFileSync(targetPath, path.join(__dirname, 'everest_view_index_backup.html'));
  console.log('Created backup at scratch/everest_view_index_backup.html');
}

fs.writeFileSync(targetPath, fullHTML, 'utf8');
console.log('Successfully wrote', fullHTML.length, 'bytes to', targetPath);
