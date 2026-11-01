const fs = require('fs');

const filePath = 'trek/everest-base-camp-trek/index.html';
const content = fs.readFileSync(filePath, 'utf8');

console.log('=== VERIFYING INCLUDES SECTION UPDATE ===');

// 1. Heading check
const headingMatch = content.match(/<h2 class="inc-exc-section-title">([\s\S]*?)<\/h2>/);
const headingText = headingMatch ? headingMatch[1].trim() : '';
const expectedHeading = 'What includes in this Everest Base Camp trek?';
console.log('Heading:', headingText);
console.log('Heading matches expected:', headingText === expectedHeading);

// 2. Lead paragraph check
const expectedLead = 'The supplied standard package lists the following services. Your dated booking confirmation should specify the exact hotel, meal basis, transport arrangements, porter ratio and applicable permits.';
const leadPresent = content.includes(expectedLead);
console.log('Lead paragraph present:', leadPresent);

// 3. Check all 10 items
const expectedItems = [
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

let allItemsOk = true;
expectedItems.forEach((item, i) => {
  const has = content.includes(item);
  if (!has) {
    allItemsOk = false;
    console.error(`ERROR: Item ${i + 1} NOT found: ${item}`);
  } else {
    console.log(`Item ${i + 1} OK`);
  }
});
console.log('All 10 items present word-for-word:', allItemsOk);

// 4. Tag balance in section-includes
const secStart = content.indexOf('id="section-includes"');
const secEnd = content.indexOf('</section>', secStart) + '</section>'.length;
const secChunk = content.substring(content.lastIndexOf('<section', secStart), secEnd);

const tags = ['div', 'section', 'h2', 'h4', 'p', 'svg', 'circle', 'polyline', 'line'];
let sectionBalanced = true;
tags.forEach(t => {
  const op = (secChunk.match(new RegExp('<' + t + '(\\s+[^>]*)?>', 'gi')) || []).length;
  const cl = (secChunk.match(new RegExp('</' + t + '>', 'gi')) || []).length;
  if (op !== cl) sectionBalanced = false;
  console.log(`Tag <${t}>: opens=${op}, closes=${cl}, balanced=${op === cl}`);
});
console.log('Section #section-includes 100% balanced:', sectionBalanced);

// 5. Main Details Column balance
const mainColStart = content.indexOf('<!-- Main Details Column (Sequential Sections) -->');
const sidebarStart = content.indexOf('<!-- Sticky Booking Sidebar Column -->');
const mainChunk = content.substring(mainColStart, sidebarStart);
const mcDivOpens = (mainChunk.match(/<div/g) || []).length;
const mcDivCloses = (mainChunk.match(/<\/div>/g) || []).length;
console.log(`Main Details Column: divOpens=${mcDivOpens}, divCloses=${mcDivCloses}, balanced=${mcDivOpens === mcDivCloses}`);

// 6. Excludes section intact check
const excludesPresent = content.includes('<!-- Excludes Heading -->') && 
                        content.includes('<h2 class="inc-exc-section-title">Excludes</h2>') &&
                        content.includes('Lunch and dinner in Kathmandu') &&
                        content.includes('Tips to the Guide and Porter (Expected)');
console.log('Excludes section fully preserved and intact:', excludesPresent);
