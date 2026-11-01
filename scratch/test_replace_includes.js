const fs = require('fs');

const origHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const items = [
  'Arrival and departure airport transfers in Kathmandu.',
  'Two Kathmandu hotel nights, normally twin-sharing, as specified in the booking.',
  'Scheduled domestic flights to and from Lukla; departure airport and any Ramechhap transfer arrangements to be confirmed.',
  'A licensed English-speaking trekking guide.',
  'Porter support according to the agreed ratio and luggage allowance.',
  'Mountain teahouse accommodation during the trekking portion, normally twin-sharing.',
  'Breakfast, lunch and dinner during the trekking portion.',
  'Applicable trekking permits and local registrations specified in the booking.',
  'Trekking staff insurance and operational support costs described in the package.',
  'Pre-trek briefing and coordination of the standard itinerary.'
];

const checkSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-copper-orange)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="16 10 11 15 8 12"></polyline>
                    </svg>`;

let cardsHtml = items.map((item, index) => {
  return `                <!-- Include ${index + 1} -->\r\n` +
         `                <div class="inc-exc-card">\r\n` +
         `                  <div class="inc-exc-icon-box">\r\n` +
         `                    ${checkSvg}\r\n` +
         `                  </div>\r\n` +
         `                  <div class="inc-exc-card-content">\r\n` +
         `                    <h4 class="inc-exc-card-title">${item}</h4>\r\n` +
         `                  </div>\r\n` +
         `                </div>`;
}).join('\r\n\r\n');

const newIncludesChunk = 
`<!-- Includes Heading -->\r\n` +
`              <div class="inc-exc-section-title-wrapper">\r\n` +
`                <h2 class="inc-exc-section-title">What includes in this Everest Base Camp trek?</h2>\r\n` +
`                <div style="width: 48px; height: 4px; background: var(--color-copper-orange); border-radius: 2px; margin-top: 8px;"></div>\r\n` +
`              </div>\r\n` +
`\r\n` +
`              <p class="inc-exc-lead-text" style="font-size: 1rem; color: var(--color-neutral-600); line-height: 1.6; margin: 0 0 24px 0;">The supplied standard package lists the following services. Your dated booking confirmation should specify the exact hotel, meal basis, transport arrangements, porter ratio and applicable permits.</p>\r\n` +
`\r\n` +
`              <!-- Includes Grid -->\r\n` +
`              <div class="inc-exc-grid">\r\n` +
cardsHtml + `\r\n` +
`              </div>\r\n\r\n              `;

const startIdx = origHtml.indexOf('<!-- Includes Heading -->');
const endIdx = origHtml.indexOf('<!-- Excludes Heading -->');

const testUpdatedHtml = origHtml.substring(0, startIdx) + newIncludesChunk + origHtml.substring(endIdx);

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
