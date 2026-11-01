const fs = require('fs');

const fullScript = fs.readFileSync('scratch/generate_evt_sec1_full.js', 'utf8');
const deepHighlights = fs.readFileSync('scratch/evt_highlights_upgraded.html', 'utf8');

// Extract just the inner grid of cards from deepHighlights
const gridMatch = deepHighlights.match(/<div class="ebc-highlights-grid">([\s\S]*?)<\/div>\s*<\/div>/i);
if (!gridMatch) {
  console.error('Could not extract grid from deepHighlights!');
  process.exit(1);
}
const newGridContent = gridMatch[1].trim();

// In fullScript, find <div class="ebc-highlights-grid"> and the closing </div> just before <!-- At a Glance: Feature Box -->
const startMarker = '<div class="ebc-highlights-grid">';
const endMarker = '<!-- At a Glance: Feature Box -->';

const startIndex = fullScript.indexOf(startMarker);
const endIndex = fullScript.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find markers in fullScript!');
  process.exit(1);
}

// Find the last </div> before endIndex
const beforeEnd = fullScript.lastIndexOf('</div>', endIndex);

const updatedFullScript = fullScript.slice(0, startIndex + startMarker.length) + '\n' +
  newGridContent + '\n            </div>\n\n            ' +
  fullScript.slice(endMarker);

fs.writeFileSync('scratch/generate_evt_sec1_full.js', updatedFullScript, 'utf8');
console.log('Successfully updated scratch/generate_evt_sec1_full.js with deep 16 highlight cards!');
