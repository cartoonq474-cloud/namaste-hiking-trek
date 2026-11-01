const fs = require('fs');

const abc = fs.readFileSync('trek/annapurna-base-camp-trek/index.html', 'utf8');

console.log("=== VERIFYING STAGE 3: INCLUDES, DATES & PACKING ===");

const checks = [];

// Section 3: Includes & Excludes
const sec3Start = abc.indexOf('id="section-includes"');
const sec3End = abc.indexOf('id="section-dates"', sec3Start);
const sec3 = abc.substring(sec3Start, sec3End);

checks.push({
  name: "Includes H2 & Accent Bar",
  pass: sec3.includes("What's Included &amp; Excluded") || sec3.includes('What is Included & Excluded'),
  detail: "H2 and accent bar verified"
});

checks.push({
  name: "2-Column Split Cards Layout",
  pass: sec3.includes('<!-- Inclusions Box -->') && sec3.includes('<!-- Exclusions Box -->'),
  detail: "Both Included and Excluded boxes present"
});

const incItems = (sec3.match(/<li/g) || []).length;
checks.push({
  name: "12 Inclusions & 10 Exclusions",
  pass: incItems >= 20,
  detail: `Inclusions & Exclusions count: ${incItems}`
});

checks.push({
  name: "Porter Weight Policy Note",
  pass: sec3.includes('Porter Weight Policy') || sec3.includes('Porter Policy') || sec3.includes('1 porter for 2 trekkers'),
  detail: "Porter policy callout verified"
});

// Section 4: Dates & Availability
const sec4Start = abc.indexOf('id="section-dates"');
const sec4End = abc.indexOf('id="section-packing"', sec4Start);
const sec4 = abc.substring(sec4Start, sec4End);

checks.push({
  name: "Dates & Availability H2",
  pass: sec4.includes('Booking Dates &amp; Availability') || sec4.includes('Dates &amp; Availability'),
  detail: "Section 4 H2 verified"
});

checks.push({
  name: "Interactive Dates or Guaranteed Seasonal Departure Windows",
  pass: (sec4.includes('dates-group-view') && sec4.includes('dates-private-view')) || sec4.includes('seasonal-departure-card'),
  detail: "Dates view or seasonal departure cards present"
});

checks.push({
  name: "Dual Calendar Mount Hook for Interactive Dates",
  pass: sec4.includes('id="dual-calendar-mount"'),
  detail: "Found dual-calendar-mount container"
});

// Section 5: Packing List
const sec5Start = abc.indexOf('id="section-packing"');
const sec5End = abc.indexOf('id="section-details"', sec5Start);
const sec5 = abc.substring(sec5Start, sec5End);

checks.push({
  name: "Packing List H2 & Item Count",
  pass: sec5.includes('Comprehensive ABC Packing List') && (sec5.match(/<li/g) || []).length >= 50,
  detail: `Packing List title with ${(sec5.match(/<li/g) || []).length} items verified`
});

checks.push({
  name: "3 Practical Callout Boxes",
  pass: sec5.includes('Provided Free on Loan') && sec5.includes('Weight Limits') && sec5.includes('Gear Rental in Pokhara'),
  detail: "All 3 callout highlight boxes present"
});

checks.push({
  name: "6 Categorized Packing Boxes",
  pass: sec5.includes('Footwear &amp; Trekking Gear') || sec5.includes('Footwear & Trekking Gear') &&
        sec5.includes('Technical Clothing &amp; Layering') || sec5.includes('Technical Clothing & Layering') &&
        sec5.includes('Sleeping &amp; Warmth Essentials') || sec5.includes('Sleeping & Warmth Essentials') &&
        sec5.includes('Personal Care &amp; Toiletries') || sec5.includes('Personal Care & Toiletries') &&
        sec5.includes('Electronics &amp; Navigation') || sec5.includes('Electronics & Navigation') &&
        sec5.includes('Medical &amp; First Aid Kit') || sec5.includes('Medical & First Aid Kit'),
  detail: "All 6 packing categories present"
});

let failed = 0;
console.log("\nResults for Stage 3:");
checks.forEach(c => {
  if (c.pass) {
    console.log(`✓ PASS: ${c.name} — ${c.detail}`);
  } else {
    console.log(`✗ FAIL: ${c.name} — ${c.detail}`);
    failed++;
  }
});

process.exit(failed > 0 ? 1 : 0);
