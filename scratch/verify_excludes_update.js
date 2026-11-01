const fs = require('fs');

const filePath = 'trek/everest-base-camp-trek/index.html';
const content = fs.readFileSync(filePath, 'utf8');

console.log('=== VERIFYING EXCLUDES SECTION UPDATE ===');

// 1. Excludes Heading check
const excludesHeadingMatch = content.match(/<h2 class="inc-exc-section-title">([\s\S]*?)<\/h2>/g);
console.log('Found h2 section titles:', excludesHeadingMatch.map(h => h.replace(/<[^>]+>/g, '').trim()));
const hasExpectedExcludesHeading = content.includes('<h2 class="inc-exc-section-title">What Excludes in this Everest Base Camp trek?</h2>');
console.log('Excludes Heading matches expected:', hasExpectedExcludesHeading);

// 2. Check all 10 Excludes items
const expectedItems = [
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

let allItemsOk = true;
expectedItems.forEach((item, i) => {
  const has = content.includes(item);
  if (!has) {
    allItemsOk = false;
    console.error(`ERROR: Exclude Item ${i + 1} NOT found: ${item}`);
  } else {
    console.log(`Exclude Item ${i + 1} OK`);
  }
});
console.log('All 10 Exclude items present word-for-word:', allItemsOk);

// 3. Includes section intact check
const includesHeadingOk = content.includes('<h2 class="inc-exc-section-title">What includes in this Everest Base Camp trek?</h2>');
const includesLeadOk = content.includes('The supplied standard package lists the following services. Your dated booking confirmation should specify the exact hotel, meal basis, transport arrangements, porter ratio and applicable permits.');
const includesItemsOk = content.includes('Arrival and departure airport transfers in Kathmandu.') &&
                        content.includes('Pre-trek briefing and coordination of the standard itinerary.');
console.log('Includes section fully intact:', includesHeadingOk && includesLeadOk && includesItemsOk);

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
