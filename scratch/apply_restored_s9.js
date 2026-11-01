const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

const sStartMarker = '<section id="reviews-section"';
const sEndMarker = '<!-- Section 3: Himalayan Trekking Experience Gallery -->';

const idxStart = content.indexOf(sStartMarker);
const idxEnd = content.indexOf(sEndMarker);

if (idxStart === -1 || idxEnd === -1) {
  console.error('Could not find markers:', { idxStart, idxEnd });
  process.exit(1);
}

const restoredSection = fs.readFileSync('scratch/restored_s9_section.html', 'utf8');

const updatedIndex = content.substring(0, idxStart) + restoredSection + '\n\n    ' + content.substring(idxEnd);

fs.writeFileSync('index.html', updatedIndex, 'utf8');
console.log('Successfully updated index.html with restored review section!');
