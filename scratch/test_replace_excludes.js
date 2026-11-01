const fs = require('fs');

const origHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

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

console.log('startIdx:', startIdx, 'endIdx:', endIdx);
const oldExcludesChunk = origHtml.substring(startIdx, endIdx);
console.log('Old chunk length:', oldExcludesChunk.length);

const testUpdatedHtml = origHtml.substring(0, startIdx) + newExcludesChunk + origHtml.substring(endIdx);

// Check section balance
const secStart = testUpdatedHtml.indexOf('id="section-includes"');
const secEnd = testUpdatedHtml.indexOf('</section>', secStart) + '</section>'.length;
const secChunk = testUpdatedHtml.substring(testUpdatedHtml.lastIndexOf('<section', secStart), secEnd);

const tags = ['div', 'section', 'h2', 'h4', 'p', 'svg', 'circle', 'polyline', 'line'];
console.log('--- Section-includes Tag Balance in Test Updated HTML ---');
tags.forEach(t => {
  const op = (secChunk.match(new RegExp('<' + t + '(\\s+[^>]*)?>', 'gi')) || []).length;
  const cl = (secChunk.match(new RegExp('</' + t + '>', 'gi')) || []).length;
  console.log(`${t}: opens=${op}, closes=${cl}, balanced=${op === cl}`);
});

// Check global balance
const origDivDiff = (origHtml.match(/<div/g) || []).length - (origHtml.match(/<\/div>/g) || []).length;
const newDivDiff = (testUpdatedHtml.match(/<div/g) || []).length - (testUpdatedHtml.match(/<\/div>/g) || []).length;
console.log(`Global Div Diff: Original = ${origDivDiff}, New = ${newDivDiff}, Match = ${origDivDiff === newDivDiff}`);

// Check main column balance
const mainColStart = testUpdatedHtml.indexOf('<!-- Main Details Column (Sequential Sections) -->');
const sidebarStart = testUpdatedHtml.indexOf('<!-- Sticky Booking Sidebar Column -->');
const mainChunk = testUpdatedHtml.substring(mainColStart, sidebarStart);
const mcDivOpens = (mainChunk.match(/<div/g) || []).length;
const mcDivCloses = (mainChunk.match(/<\/div>/g) || []).length;
console.log(`Main Details Column: divOpens=${mcDivOpens}, divCloses=${mcDivCloses}, balanced=${mcDivOpens === mcDivCloses}`);
