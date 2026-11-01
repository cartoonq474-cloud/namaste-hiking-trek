const { execSync } = require('child_process');
const orig = execSync('git show HEAD~1:trek/everest-base-camp-trek/index.html', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });

const d1Start = orig.indexOf('<!-- Day 01 -->');
const d2Start = orig.indexOf('<!-- Day 02 -->');
console.log('Original Day 1:');
console.log(orig.substring(d2Start - 300, d2Start));

const d14Start = orig.indexOf('<!-- Day 14 -->');
const customCta = orig.indexOf('<!-- Custom Itinerary Plan Your Trip CTA Banner Card -->');
console.log('Original Day 14 & End:');
console.log(orig.substring(customCta - 300, customCta + 50));
