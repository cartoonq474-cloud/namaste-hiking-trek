const fs = require('fs');

const icons = JSON.parse(fs.readFileSync('scratch/ebc_icons.json', 'utf8'));

const chevronSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;

const checkBubbleSvg = `<div class="detail-check-bubble"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>`;

function getIconContainer(id) {
  const raw = icons[id] || '';
  const svgMatch = raw.match(/<svg[\s\S]*?<\/svg>/);
  const mainSvg = svgMatch ? svgMatch[0] : '';
  return `<div class="detail-icon-container">\n                        ${mainSvg}\n                        ${checkBubbleSvg}\n                      </div>`;
}

// We re-use the exact same itemsData
const scriptContent = fs.readFileSync('scratch/generate_evt_details_full.js', 'utf8');

// Replace getIconContainer in scriptContent
const updatedScript = scriptContent.replace(
  /function getIconContainer\(id\) \{[\s\S]*?return `<div class="detail-icon-container">\$\{iconRaw\}<\/div>`;\s*\}/,
  `function getIconContainer(id) {
  const raw = icons[id] || '';
  const svgMatch = raw.match(/<svg[\\s\\S]*?<\\/svg>/);
  const mainSvg = svgMatch ? svgMatch[0] : '';
  return \`<div class="detail-icon-container">\\n                        \${mainSvg}\\n                        \${checkBubbleSvg}\\n                      </div>\`;
}`
);

fs.writeFileSync('scratch/generate_evt_details_full.js', updatedScript, 'utf8');
console.log('Updated getIconContainer in scratch/generate_evt_details_full.js');
