const fs = require('fs');

const actHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const gridStart = actHtml.indexOf('grid-template-columns: 2.2fr 1fr');
const sbColStart = actHtml.indexOf('<!-- Sticky Booking Sidebar Column -->');

const col1Slice = actHtml.slice(gridStart, sbColStart);

const openDivs = (col1Slice.match(/<div(\s|>)/gi) || []).length;
const closeDivs = (col1Slice.match(/<\/div>/gi) || []).length;

console.log('Inside grid up to Sticky Booking Sidebar Column:');
console.log('Open divs:', openDivs, 'Close divs:', closeDivs, 'Diff:', openDivs - closeDivs);

// In EBC:
const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const ebcGridStart = ebcHtml.indexOf('grid-template-columns: 2.2fr 1fr');
const ebcSbColStart = ebcHtml.indexOf('<!-- Sticky Booking Sidebar Column -->');

const ebcCol1Slice = ebcHtml.slice(ebcGridStart, ebcSbColStart);
const ebcOpen = (ebcCol1Slice.match(/<div(\s|>)/gi) || []).length;
const ebcClose = (ebcCol1Slice.match(/<\/div>/gi) || []).length;

console.log('\nIn EBC:');
console.log('Open divs:', ebcOpen, 'Close divs:', ebcClose, 'Diff:', ebcOpen - ebcClose);
