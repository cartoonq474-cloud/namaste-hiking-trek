const fs = require('fs');

const filePath = 'trek/everest-base-camp-trek/index.html';
const origHtml = fs.readFileSync(filePath, 'utf8');

const items = [
  'International flights to and from Nepal.',
  'Nepal visa fees, where applicable.',
  'The trekker’s travel insurance, medical treatment and evacuation costs unless paid under their own policy or another confirmed arrangement.',
  'Tips for guides, porters and other staff.',
  'Personal trekking clothing and equipment, unless expressly supplied.',
  'Hot showers, charging, Wi-Fi and other paid teahouse services.',
  'Additional drinks, snacks and personal expenses.',
  'Optional helicopter transfers, helicopter return and other upgrades.',
  'Additional Kathmandu nights, extra mountain nights, transport changes and delay-related expenses outside the confirmed package.',
  'Services, sightseeing and meals not expressly stated as included.'
];

const crossSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>`;

let cardsHtml = items.map((item, index) => {
  return `                <!-- Exclude ${index + 1} -->\r\n` +
         `                <div class="inc-exc-card exclude-card">\r\n` +
         `                  <div class="inc-exc-icon-box">\r\n` +
         `                    ${crossSvg}\r\n` +
         `                  </div>\r\n` +
         `                  <div class="inc-exc-card-content">\r\n` +
         `                    <h4 class="inc-exc-card-title">${item}</h4>\r\n` +
         `                  </div>\r\n` +
         `                </div>`;
}).join('\r\n\r\n');

const newExcludesChunk = 
`<!-- Excludes Heading -->\r\n` +
`              <div class="inc-exc-section-title-wrapper" style="margin-top: 10px;">\r\n` +
`                <h2 class="inc-exc-section-title">What Excludes in this Everest Base Camp trek?</h2>\r\n` +
`                <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>\r\n` +
`              </div>\r\n` +
`\r\n` +
`              <!-- Excludes Grid -->\r\n` +
`              <div class="inc-exc-grid">\r\n` +
cardsHtml + `\r\n` +
`              </div>`;

const startIdx = origHtml.indexOf('<!-- Excludes Heading -->');
const endIdx = origHtml.indexOf('</div>\r\n          </section>', startIdx);

if (startIdx === -1 || endIdx === -1) {
  console.error('ERROR: Markers not found!');
  process.exit(1);
}

const updatedHtml = origHtml.substring(0, startIdx) + newExcludesChunk + origHtml.substring(endIdx);

fs.writeFileSync(filePath, updatedHtml, 'utf8');
console.log('Successfully wrote updated Excludes HTML to', filePath);
