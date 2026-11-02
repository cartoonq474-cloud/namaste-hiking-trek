const fs = require('fs');

const mod1Original = fs.readFileSync('scratch/dhaulagiri_builder/mod1_head_header.js', 'utf8');
const canonicalHeader = fs.readFileSync('scratch/canonical_header.html', 'utf8');

// Find where header starts in mod1Original
const headerStart = mod1Original.indexOf('<header class="site-header">');
const headerEnd = mod1Original.indexOf('</header>') + '</header>'.length;

const headPart = mod1Original.slice(0, headerStart);
const footPart = mod1Original.slice(headerEnd);

const updatedMod1 = headPart + canonicalHeader + footPart;

fs.writeFileSync('scratch/dhaulagiri_builder/mod1_head_header.js', updatedMod1, 'utf8');
console.log('Successfully updated scratch/dhaulagiri_builder/mod1_head_header.js with canonical main-header!');
