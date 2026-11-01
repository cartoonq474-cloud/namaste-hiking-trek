const fs = require('fs');

const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const s2 = html.indexOf('<!-- Section 2: Itinerary -->');
const s3 = html.indexOf('<!-- Section 3: Includes', s2);

const itinBlock = html.substring(s2, s3);
const scriptPos = itinBlock.indexOf('<script>');
if (scriptPos !== -1) {
  console.log(itinBlock.substring(scriptPos, scriptPos + 1500));
} else {
  console.log('No inline script in EBC Section 2. Let us check the end of the section.');
}
