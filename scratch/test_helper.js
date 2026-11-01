const fs = require('fs');

const icons = JSON.parse(fs.readFileSync('scratch/ebc_icons.json', 'utf8'));

const chevronSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;

const checkBubbleSvg = `<div class="detail-check-bubble"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>`;

function getIconContainer(id) {
  const iconRaw = icons[id] || '';
  // If the raw icon doesn't include the check-bubble, inject it
  if (!iconRaw.includes('detail-check-bubble')) {
    return `<div class="detail-icon-container">${iconRaw}${checkBubbleSvg}</div>`;
  }
  return `<div class="detail-icon-container">${iconRaw}</div>`;
}

// We will load the comprehensive items data and construct the full section
console.log('Building script loaded successfully.');
