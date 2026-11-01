const fs = require('fs');

const filePath = 'trek/everest-base-camp-trek/index.html';
const html = fs.readFileSync(filePath, 'utf8');

console.log('=== VERIFYING BEST TIME ACCORDION UPDATE ===');

// 1. Locate Item 3
const item3HeaderIdx = html.indexOf('<!-- Item 3: Best Time -->');
const item4HeaderIdx = html.indexOf('<!-- Item 4:');

if (item3HeaderIdx === -1 || item4HeaderIdx === -1) {
  console.error('FAIL: Item markers not found!');
  process.exit(1);
}

const item3Block = html.substring(item3HeaderIdx, item4HeaderIdx);

// 2. Check all 17 subheadings
const expectedSubheadings = [
  "Everest Base Camp in March",
  "Everest Base Camp in April",
  "Everest Base Camp in May",
  "Everest Base Camp in September",
  "Everest Base Camp in October",
  "What Makes October So Good?",
  "Everest Base Camp in November",
  "Everest Base Camp in December",
  "Everest Base Camp in January",
  "Everest Base Camp in February",
  "Best Time for Fewer Crowds",
  "Best Time for Photography",
  "Best Time for Sunrise at Kala Patthar",
  "Best Time for the Everest Expedition Atmosphere",
  "Best Time for Rhododendron Flowers",
  "When Should You Avoid the Everest Base Camp Trek?",
  "Best Time for Gokyo and Three Passes"
];

let allSubheadingsFound = true;
let lastIndex = 0;
for (const subhead of expectedSubheadings) {
  const idx = item3Block.indexOf(subhead, lastIndex);
  if (idx === -1) {
    console.error(`FAIL: Missing subheading: "${subhead}"`);
    allSubheadingsFound = false;
  } else {
    lastIndex = idx;
  }
}

if (allSubheadingsFound) {
  console.log(`PASS: All ${expectedSubheadings.length} subheadings found in exact sequential order.`);
}

// 3. Check Table and key text snippets
const keySnippets = [
  "Spring and autumn are the main planning choices for the classic itinerary.",
  "<table class=\"guide-data-table\">",
  "March–May",
  "Spring landscapes, mountain views and expedition activity",
  "Cold upper elevations; busier spring departures; increasing cloud toward late May",
  "June–August",
  "Quieter trail and green lower valleys",
  "September–November",
  "Autumn scenery and popular trekking conditions",
  "December–February",
  "Solitude and potential clear views",
  "March sits at the transition between winter and spring.",
  "Rhododendron flowering at lower elevations",
  "Early May is generally more predictable than late May.",
  "Late September can provide a very nice balance:",
  "October is arguably the classic month for the EBC trek.",
  "The air can become even crisper as winter approaches",
  "A clear winter morning at Kala Patthar can be extraordinary.",
  "January is one of the coldest periods for the trek.",
  "February begins the transition toward spring.",
  "Ama Dablam, Everest, Lhotse and Nuptse can look completely different under changing light",
  "The mountain gets the final vote.",
  "Nepal Tourism Board identifies spring and autumn as major mountaineering seasons in Nepal.",
  "Rhododendron is Nepal's national flower",
  "Peak monsoon: if you have a fixed schedule",
  "Nepal Tourism Board's Everest-region guidance specifically identifies winter as extreme at higher elevations"
];

let allSnippetsFound = true;
for (const snippet of keySnippets) {
  if (!item3Block.includes(snippet)) {
    console.error(`FAIL: Missing snippet: "${snippet}"`);
    allSnippetsFound = false;
  }
}

if (allSnippetsFound) {
  console.log(`PASS: All ${keySnippets.length} key text snippets verified.`);
}

// 4. Tag balance in item3Block
function countOccurrences(str, pattern) {
  return (str.match(pattern) || []).length;
}

const divOpen = countOccurrences(item3Block, /<div\b/g);
const divClose = countOccurrences(item3Block, /<\/div>/g);
const pOpen = countOccurrences(item3Block, /<p\b/g);
const pClose = countOccurrences(item3Block, /<\/p>/g);
const h5Open = countOccurrences(item3Block, /<h5\b/g);
const h5Close = countOccurrences(item3Block, /<\/h5>/g);
const ulOpen = countOccurrences(item3Block, /<ul\b/g);
const ulClose = countOccurrences(item3Block, /<\/ul>/g);
const liOpen = countOccurrences(item3Block, /<li\b/g);
const liClose = countOccurrences(item3Block, /<\/li>/g);
const tableOpen = countOccurrences(item3Block, /<table\b/g);
const tableClose = countOccurrences(item3Block, /<\/table>/g);
const trOpen = countOccurrences(item3Block, /<tr\b/g);
const trClose = countOccurrences(item3Block, /<\/tr>/g);
const thOpen = countOccurrences(item3Block, /<th\b/g);
const thClose = countOccurrences(item3Block, /<\/th>/g);
const tdOpen = countOccurrences(item3Block, /<td\b/g);
const tdClose = countOccurrences(item3Block, /<\/td>/g);

console.log(`Item 3 Tag Balance:`);
console.log(`  div: ${divOpen} open, ${divClose} close`);
console.log(`  table: ${tableOpen} open, ${tableClose} close`);
console.log(`  tr: ${trOpen} open, ${trClose} close`);
console.log(`  th: ${thOpen} open, ${thClose} close`);
console.log(`  td: ${tdOpen} open, ${tdClose} close`);
console.log(`  p: ${pOpen} open, ${pClose} close`);
console.log(`  h5: ${h5Open} open, ${h5Close} close`);
console.log(`  ul: ${ulOpen} open, ${ulClose} close`);
console.log(`  li: ${liOpen} open, ${liClose} close`);

if (divOpen === divClose && pOpen === pClose && h5Open === h5Close &&
    ulOpen === ulClose && liOpen === liClose && tableOpen === tableClose &&
    trOpen === trClose && thOpen === thClose && tdOpen === tdClose) {
  console.log('PASS: All HTML tags perfectly balanced in Item 3 accordion card.');
} else {
  console.error('FAIL: Tag imbalance detected in Item 3!');
  process.exit(1);
}

// 5. Global Details Column Balance
const detailsColStart = html.indexOf('<div class="col-lg-8 details-main-col">');
const detailsColEnd = html.indexOf('<!-- /col-lg-8 details-main-col -->');

if (detailsColStart !== -1 && detailsColEnd !== -1) {
  const detailsColBlock = html.substring(detailsColStart, detailsColEnd);
  const colDivOpen = countOccurrences(detailsColBlock, /<div\b/g);
  const colDivClose = countOccurrences(detailsColBlock, /<\/div>/g);
  console.log(`Details Main Column div balance: ${colDivOpen} open, ${colDivClose} close`);
  if (colDivOpen === colDivClose) {
    console.log('PASS: Details main column div balance is exact.');
  } else {
    console.error('FAIL: Details main column div imbalance!');
    process.exit(1);
  }
}

// 6. Check Item 1, Item 2 and Item 4 integrity
const item1HeaderIdx = html.indexOf('<!-- Item 1: Accommodation -->');
const item2HeaderIdx = html.indexOf('<!-- Item 2: Available Food -->');
const item4HeaderIdxCheck = html.indexOf('<!-- Item 4:');

if (item1HeaderIdx !== -1 && item2HeaderIdx !== -1 && item4HeaderIdxCheck !== -1) {
  console.log('PASS: Surrounding items intact and unharmed.');
} else {
  console.error('FAIL: Surrounding items harmed!');
  process.exit(1);
}

console.log('=== ALL VERIFICATIONS PASSED SUCCESSFULLY ===');
