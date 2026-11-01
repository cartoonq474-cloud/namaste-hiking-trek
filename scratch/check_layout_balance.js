const fs = require('fs');
const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const secStart = content.indexOf('<section id="section-itinerary"');
const secEnd = content.indexOf('</section>', secStart);

const secChunk = content.substring(secStart, secEnd + 10);
const opens = (secChunk.match(/<div/g) || []).length;
const closes = (secChunk.match(/<\/div>/g) || []).length;

console.log(`Entire section-itinerary: <div opens: ${opens}, closes: ${closes}, diff: ${opens - closes}`);
console.log(`Section tags in section-itinerary: opens=${(secChunk.match(/<section/g) || []).length}, closes=${(secChunk.match(/<\/section>/g) || []).length}`);

// Let's also check .trek-content-layout, .trek-main-content, and .trek-sidebar
const mainLayoutStart = content.indexOf('class="trek-content-layout"');
const mainLayoutEnd = content.indexOf('<!-- End of trek-content-layout -->'); // or check where aside is
const asideIdx = content.indexOf('<aside class="trek-sidebar">');
console.log('trek-content-layout at:', mainLayoutStart);
console.log('aside.trek-sidebar at:', asideIdx);

// Check if aside is outside .trek-main-content
const mainContentStart = content.indexOf('class="trek-main-content"');
const mainContentEnd = content.lastIndexOf('</div>', asideIdx);
console.log('mainContentStart at:', mainContentStart, 'closed before aside at:', mainContentEnd);

const mainContentChunk = content.substring(mainContentStart, asideIdx);
const mcOpens = (mainContentChunk.match(/<div/g) || []).length;
const mcCloses = (mainContentChunk.match(/<\/div>/g) || []).length;
console.log(`trek-main-content up to aside: <div opens: ${mcOpens}, closes: ${mcCloses}, diff: ${mcOpens - mcCloses}`);
