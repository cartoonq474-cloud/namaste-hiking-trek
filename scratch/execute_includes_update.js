const fs = require('fs');

const filePath = 'trek/everest-base-camp-trek/index.html';
const origHtml = fs.readFileSync(filePath, 'utf8');

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

if (startIdx === -1 || endIdx === -1) {
  console.error('ERROR: Markers not found!');
  process.exit(1);
}

// Also update CSS to add justify-content: center and refined font-weight for .inc-exc-card-title
let updatedHtml = origHtml.substring(0, startIdx) + newIncludesChunk + origHtml.substring(endIdx);

// Enhance CSS for .inc-exc-card-content and .inc-exc-card-title within section-includes
const oldContentCss = `.inc-exc-card-content {\r\n                display: flex;\r\n                flex-direction: column;\r\n                gap: 6px;\r\n              }`;
const newContentCss = `.inc-exc-card-content {\r\n                display: flex;\r\n                flex-direction: column;\r\n                gap: 6px;\r\n                justify-content: center;\r\n              }`;

const oldTitleCss = `.inc-exc-card-title {\r\n                font-size: 1rem;\r\n                font-weight: 700;\r\n                color: var(--color-primary-navy);\r\n                line-height: 1.4;\r\n              }`;
const newTitleCss = `.inc-exc-card-title {\r\n                font-size: 0.98rem;\r\n                font-weight: 600;\r\n                color: var(--color-primary-navy);\r\n                line-height: 1.45;\r\n              }`;

if (updatedHtml.includes(oldContentCss)) {
  updatedHtml = updatedHtml.replace(oldContentCss, newContentCss);
  console.log('CSS .inc-exc-card-content updated.');
} else {
  console.log('CSS .inc-exc-card-content exact match not found (leaving as is or check CRLF)');
}

if (updatedHtml.includes(oldTitleCss)) {
  updatedHtml = updatedHtml.replace(oldTitleCss, newTitleCss);
  console.log('CSS .inc-exc-card-title updated.');
} else {
  console.log('CSS .inc-exc-card-title exact match not found (leaving as is or check CRLF)');
}

fs.writeFileSync(filePath, updatedHtml, 'utf8');
console.log('Successfully wrote updated HTML to', filePath);
