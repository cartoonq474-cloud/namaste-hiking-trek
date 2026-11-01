const fs = require('fs');

const filePath = 'trek/everest-base-camp-trek/index.html';
const content = fs.readFileSync(filePath, 'utf8');

console.log('=== VERIFYING ACCOMMODATION SECTION UPDATE ===');

// 1. Key headings check
const headingsToCheck = [
  'What to expect in Kathmandu for Accommodation?',
  'What to expect in a teahouse in the EBC Trek',
  'What Is a Teahouse on the Everest Base Camp Trek?',
  'What Are the Teahouses Like at Different Elevations?',
  'What Kind of Room Will You Get?',
  'Are the Rooms Private?',
  'Can You Get a Private Room on the EBC Trek?',
  'Can Couples Get the Same Room?',
  'What Is Sleeping in a Teahouse Actually Like?',
  'Are Teahouse Rooms Heated?',
  'Why the Dining Room Becomes the Centre of the Teahouse',
  'How Warm Are the Dining Rooms?',
  'What Are the Beds Like?',
  'Should You Bring Your Own Sleeping Bag?',
  'What Sleeping Bag Temperature Rating Should You Choose?',
  'Do You Need a Sleeping Bag Liner?',
  'Are Blankets Provided?',
  'Are Bathrooms Private?',
  'What Are Toilets Like at Higher Elevations?',
  'Do Teahouses Have Toilet Paper?',
  'Are There Attached Bathrooms?',
  'What Is Accommodation Like in Tengboche?',
  'What Is Accommodation Like in Dingboche?',
  'What Is Accommodation Like in Lobuche?',
  'What Is Accommodation Like in Gorak Shep?',
  'What Is the Highest You Sleep on the EBC Trek?',
  'Can You Wash Clothes During the EBC Trek?',
  'Luxury lodges on the Everest Base Camp trail',
  'What Is a Luxury Lodge Trek?',
  'Can You Get a Single Room Throughout a Luxury EBC Trek?',
  'Are There Hot Showers and Electricity on EBC Trek?',
  'How Much Do Hot Showers Cost?',
  'Is There Electricity on the Everest Base Camp Trek?',
  'Can You Charge Your Phone and Camera?'
];

let allHeadingsOk = true;
headingsToCheck.forEach((h, i) => {
  const has = content.includes(h);
  if (!has) {
    allHeadingsOk = false;
    console.error(`ERROR: Heading not found: ${h}`);
  }
});
console.log(`All ${headingsToCheck.length} headings present:`, allHeadingsOk);

// 2. First & last sentences check
const firstSentence = 'The accommodation moves from a Kathmandu hotel to locally operated mountain teahouses.';
const lastSentence = 'Internet and mobile connectivity are explained under Important Notes.';
console.log('First sentence present:', content.includes(firstSentence));
console.log('Last sentence present:', content.includes(lastSentence));

// 3. Check tag balance in Item 1 card
const item1HeaderIdx = content.indexOf('<!-- Item 1: Accommodation -->');
const item2HeaderIdx = content.indexOf('<!-- Item 2: Available Food -->');
const item1Chunk = content.substring(item1HeaderIdx, item2HeaderIdx);

const tags = ['div', 'h4', 'h5', 'p', 'ul', 'li'];
let item1Balanced = true;
tags.forEach(t => {
  const op = (item1Chunk.match(new RegExp('<' + t + '(\\s+[^>]*)?>', 'gi')) || []).length;
  const cl = (item1Chunk.match(new RegExp('</' + t + '>', 'gi')) || []).length;
  if (op !== cl) item1Balanced = false;
  console.log(`Item 1 Tag <${t}>: opens=${op}, closes=${cl}, balanced=${op === cl}`);
});
console.log('Item 1 card 100% balanced:', item1Balanced);

// 4. Main Details Column balance
const mainColStart = content.indexOf('<!-- Main Details Column (Sequential Sections) -->');
const sidebarStart = content.indexOf('<!-- Sticky Booking Sidebar Column -->');
const mainChunk = content.substring(mainColStart, sidebarStart);
const mcDivOpens = (mainChunk.match(/<div/g) || []).length;
const mcDivCloses = (mainChunk.match(/<\/div>/g) || []).length;
console.log(`Main Details Column: divOpens=${mcDivOpens}, divCloses=${mcDivCloses}, balanced=${mcDivOpens === mcDivCloses}`);

// 5. Check other sections still intact
console.log('Includes section intact:', content.includes('What includes in this Everest Base Camp trek?'));
console.log('Excludes section intact:', content.includes('What Excludes in this Everest Base Camp trek?'));
console.log('Itinerary Day 1 intact:', content.includes('Day 1: Arrival at Tribhuvan International Airport'));
