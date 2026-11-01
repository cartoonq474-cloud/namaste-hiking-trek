const fs = require('fs');
const path = require('path');

const targetFile = 'trek/annapurna-circuit-trek/index.html';
const content = fs.readFileSync(targetFile, 'utf8');

// Load photos from images/treks/annapurna-circuit
const imgDir = 'images/treks/annapurna-circuit';
const files = fs.readdirSync(imgDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

console.log(`Found ${files.length} authentic photos in ${imgDir}`);

// Format nice alt text from file name
function formatAlt(filename) {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/-\d+$/, '')
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// Find all 56 itinerary-photo-wrapper matches
let slotIndex = 0;
const updatedContent = content.replace(/<div class="itinerary-photo-wrapper">\s*<img[^>]+>\s*<\/div>/g, (match) => {
  const photo = files[slotIndex % files.length];
  const relPath = `../../images/treks/annapurna-circuit/${photo}`;
  const alt = formatAlt(photo);
  slotIndex++;
  return `<div class="itinerary-photo-wrapper">\n                        <img loading="lazy" src="${relPath}" alt="${alt}">\n                      </div>`;
});

console.log(`Replaced ${slotIndex} photo slots.`);
const remainingUnsplash = (updatedContent.match(/images\.unsplash\.com/g) || []).length;
console.log(`Remaining unsplash images on page: ${remainingUnsplash}`);
