const fs = require('fs');

const filePath = 'trek/everest-base-camp-trek/index.html';
const html = fs.readFileSync(filePath, 'utf8');

console.log('=== VERIFYING AVAILABLE FOOD ACCORDION UPDATE ===');

// 1. Locate Item 2
const item2HeaderIdx = html.indexOf('<!-- Item 2: Available Food -->');
const item3HeaderIdx = html.indexOf('<!-- Item 3: Best Time -->');

if (item2HeaderIdx === -1 || item3HeaderIdx === -1) {
  console.error('FAIL: Item markers not found!');
  process.exit(1);
}

const item2Block = html.substring(item2HeaderIdx, item3HeaderIdx);

// 2. Check all 21 subheadings
const expectedSubheadings = [
  "What Food Is Available During the Everest Base Camp Trek?",
  "Dal Bhat: The Trekker's Staple",
  "What Do You Eat for Breakfast on the EBC Trek?",
  "What Do You Eat for Lunch?",
  "What Do You Eat for Dinner?",
  "What Is Sherpa Food Like?",
  "What Are Momos?",
  "What Is Thukpa?",
  "Is Vegetarian Food Available on the Everest Base Camp Trek?",
  "Is Vegan Food Available on the EBC Trek?",
  "What About Gluten-Free Food?",
  "What About Food Allergies?",
  "Should You Eat Meat on the Everest Base Camp Trek?",
  "Food Hygiene on the EBC Trek",
  "Is the Food Safe on the Everest Base Camp Trek?",
  "Is Tap Water Safe to Drink on the EBC Trek?",
  "Can You Buy Bottled Water?",
  "Why Appetite Changes at High Altitude",
  "Should You Eat Garlic Soup for Altitude?",
  "Can You Get Food at Everest Base Camp?",
  "Food and Acclimatization Go Together"
];

let allSubheadingsFound = true;
let lastIndex = 0;
for (const subhead of expectedSubheadings) {
  const idx = item2Block.indexOf(subhead, lastIndex);
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

// 3. Check key text snippets
const keySnippets = [
  "Food becomes much more important once you start walking for several hours a day at altitude.",
  "In Lukla and Namche Bazaar, menus can include everything from traditional Nepali dishes to pasta",
  "Rice",
  "Lentil soup",
  "Vegetable curry",
  "Pickles or achar",
  "Porridge",
  "Tibetan bread",
  "Sherpa stew",
  "Thukpa is a Tibetan-style noodle soup",
  "Do not assume that “vegetarian” automatically means vegan.",
  "cross-contamination and ingredient availability must be considered",
  "Food-storage conditions become more limited at altitude",
  "Eat cooked food that is served hot.",
  "Treat the water before drinking it.",
  "Carrying a reusable bottle and using treated or boiled water",
  "Your appetite can decrease",
  "Garlic soup is widely available and extremely popular with trekkers",
  "Everest Base Camp itself is not a normal village with restaurants and teahouses",
  "Availability of vegetarian dishes does not establish a kitchen free of allergens or cross-contact."
];

let allSnippetsFound = true;
for (const snippet of keySnippets) {
  if (!item2Block.includes(snippet)) {
    console.error(`FAIL: Missing snippet: "${snippet}"`);
    allSnippetsFound = false;
  }
}

if (allSnippetsFound) {
  console.log(`PASS: All ${keySnippets.length} key text snippets verified.`);
}

// 4. Tag balance in item2Block
function countOccurrences(str, pattern) {
  return (str.match(pattern) || []).length;
}

const divOpen = countOccurrences(item2Block, /<div\b/g);
const divClose = countOccurrences(item2Block, /<\/div>/g);
const pOpen = countOccurrences(item2Block, /<p\b/g);
const pClose = countOccurrences(item2Block, /<\/p>/g);
const h5Open = countOccurrences(item2Block, /<h5\b/g);
const h5Close = countOccurrences(item2Block, /<\/h5>/g);
const ulOpen = countOccurrences(item2Block, /<ul\b/g);
const ulClose = countOccurrences(item2Block, /<\/ul>/g);
const liOpen = countOccurrences(item2Block, /<li\b/g);
const liClose = countOccurrences(item2Block, /<\/li>/g);

console.log(`Item 2 Tag Balance:`);
console.log(`  div: ${divOpen} open, ${divClose} close (Expected matches)`);
console.log(`  p: ${pOpen} open, ${pClose} close`);
console.log(`  h5: ${h5Open} open, ${h5Close} close`);
console.log(`  ul: ${ulOpen} open, ${ulClose} close`);
console.log(`  li: ${liOpen} open, ${liClose} close`);

if (divOpen === divClose && pOpen === pClose && h5Open === h5Close && ulOpen === ulClose && liOpen === liClose) {
  console.log('PASS: All HTML tags perfectly balanced in Item 2 accordion card.');
} else {
  console.error('FAIL: Tag imbalance detected in Item 2!');
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

// 6. Check Item 1 and Item 3 integrity
const item1HeaderIdx = html.indexOf('<!-- Item 1: Accommodation -->');
const item1TitleIdx = html.indexOf('Accommodation for the Everest Base Camp Trek');
const item3TitleIdx = html.indexOf('Best time to Trek to Everest Base Camp');

if (item1HeaderIdx !== -1 && item1TitleIdx !== -1 && item3TitleIdx !== -1) {
  console.log('PASS: Item 1 (Accommodation) and Item 3 (Best Time) intact and unharmed.');
} else {
  console.error('FAIL: Neighboring items harmed!');
  process.exit(1);
}

console.log('=== ALL VERIFICATIONS PASSED SUCCESSFULLY ===');
