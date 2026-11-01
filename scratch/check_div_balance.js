const fs = require('fs');

const html = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

// Check opening and closing div tags
const openDivs = (html.match(/<div(\s|>)/gi) || []).length;
const closeDivs = (html.match(/<\/div>/gi) || []).length;
console.log('Open divs:', openDivs, 'Close divs:', closeDivs, 'Diff:', openDivs - closeDivs);

// Check section tags
const openSections = (html.match(/<section(\s|>)/gi) || []).length;
const closeSections = (html.match(/<\/section>/gi) || []).length;
console.log('Open sections:', openSections, 'Close sections:', closeSections, 'Diff:', openSections - closeSections);
