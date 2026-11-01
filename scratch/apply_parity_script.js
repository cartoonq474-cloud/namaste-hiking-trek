const fs = require('fs');
const path = require('path');

const origHtml = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const sec1Additions = fs.readFileSync(path.join(__dirname, 'sec1_additions.html'), 'utf8');
const customTripCta = fs.readFileSync(path.join(__dirname, 'custom_trip_cta.html'), 'utf8');
const sec3Full = fs.readFileSync(path.join(__dirname, 'sec3_full.html'), 'utf8');

let html = origHtml;

// 1. Update Section 1
const s1Start = html.indexOf('<section id="section-overview"');
const s1End = html.indexOf('</section>', s1Start);
const oldHlComment = html.indexOf('<!-- 16 RICH THEMED HIGHLIGHTS CARDS -->', s1Start);

if (oldHlComment !== -1 && oldHlComment < s1End) {
  html = html.slice(0, oldHlComment) + sec1Additions + '\n        ' + html.slice(s1End);
  console.log('Successfully updated Section 1 with separated Highlights and Why Book blocks!');
} else {
  console.error('Could not locate old highlights comment in Section 1');
}

// 2. Insert Custom Trip CTA after Section 2
const s2End = html.indexOf('</section>', html.indexOf('<section id="section-itinerary"')) + 10;
html = html.slice(0, s2End) + '\n' + customTripCta + html.slice(s2End);
console.log('Successfully inserted Custom Trip CTA card after Section 2!');

// 3. Update Section 3 with separated Includes and Excludes
const s3Start = html.indexOf('<section id="section-includes"');
const s3End = html.indexOf('</section>', s3Start) + 10;
html = html.slice(0, s3Start) + sec3Full + html.slice(s3End);
console.log('Successfully updated Section 3 with separated Includes & Excludes blocks!');

fs.writeFileSync(path.join(__dirname, 'test_parity_applied.html'), html, 'utf8');
console.log('Saved scratch/test_parity_applied.html successfully. Length:', html.length);
