const fs = require('fs');

const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

console.log('=== MASTER VERIFICATION: ALL 21 ACCORDIONS ===');

function countOccurrences(str, pattern) {
  return (str.match(pattern) || []).length;
}

let allBalanced = true;
for (let i = 1; i <= 21; i++) {
  const itemMarker = `<!-- Item ${i}:`;
  const nextMarker = i < 21 ? `<!-- Item ${i + 1}:` : `              </div>\r\n            </div>\r\n          </section>`;
  const start = html.indexOf(itemMarker);
  const end = html.indexOf(nextMarker, start);
  if (start === -1 || end === -1) {
    console.error(`Marker missing for Item ${i}`);
    process.exit(1);
  }
  const block = html.substring(start, end);
  const divOpen = countOccurrences(block, /<div\b/g);
  const divClose = countOccurrences(block, /<\/div>/g);
  const pOpen = countOccurrences(block, /<p\b/g);
  const pClose = countOccurrences(block, /<\/p>/g);
  const h5Open = countOccurrences(block, /<h5\b/g);
  const h5Close = countOccurrences(block, /<\/h5>/g);
  const ulOpen = countOccurrences(block, /<ul\b/g);
  const ulClose = countOccurrences(block, /<\/ul>/g);
  const liOpen = countOccurrences(block, /<li\b/g);
  const liClose = countOccurrences(block, /<\/li>/g);
  const tableOpen = countOccurrences(block, /<table\b/g);
  const tableClose = countOccurrences(block, /<\/table>/g);

  const isItemBalanced = (divOpen === divClose && pOpen === pClose && h5Open === h5Close && ulOpen === ulClose && liOpen === liClose && tableOpen === tableClose);
  console.log(`Item ${i.toString().padStart(2, ' ')}: divs(${divOpen}/${divClose}) p(${pOpen}/${pClose}) h5(${h5Open}/${h5Close}) ul(${ulOpen}/${ulClose}) li(${liOpen}/${liClose}) table(${tableOpen}/${tableClose}) -> ${isItemBalanced ? 'OK' : 'MISMATCH'}`);

  if (!isItemBalanced) {
    allBalanced = false;
  }
}

if (!allBalanced) {
  console.error('FAIL: Tag imbalance detected in one or more items!');
  process.exit(1);
} else {
  console.log('PASS: All 21 accordion items individually 100% balanced!');
}

// Global Details Column Balance
const detailsColStart = html.indexOf('<div class="col-lg-8 details-main-col">');
const detailsColEnd = html.indexOf('<!-- /col-lg-8 details-main-col -->');

if (detailsColStart !== -1 && detailsColEnd !== -1) {
  const detailsColBlock = html.substring(detailsColStart, detailsColEnd);
  const colDivOpen = countOccurrences(detailsColBlock, /<div\b/g);
  const colDivClose = countOccurrences(detailsColBlock, /<\/div>/g);
  console.log(`Details Main Column div balance: ${colDivOpen} open, ${colDivClose} close (Diff: ${colDivOpen - colDivClose})`);
  if (colDivOpen !== colDivClose) {
    console.error('FAIL: Details main column div imbalance!');
    process.exit(1);
  } else {
    console.log('PASS: Details main column is perfectly balanced with 0 diff.');
  }
}

console.log('=== ALL 21 ACCORDIONS FULLY VERIFIED AND BALANCED! ===');
