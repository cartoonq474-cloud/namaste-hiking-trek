const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const itinStart = content.indexOf('<section id="section-itinerary"');
const itinEnd = content.indexOf('</section>', itinStart) + '</section>'.length;
const itinContent = content.substring(itinStart, itinEnd);

console.log('Itinerary section character length:', itinContent.length);

const tagsToCheck = ['div', 'section', 'p', 'h4', 'h5', 'span', 'svg', 'path', 'circle', 'polyline', 'polygon'];

tagsToCheck.forEach(tag => {
  const openRe = new RegExp('<' + tag + '(\\s+[^>]*)?>', 'gi');
  const closeRe = new RegExp('</' + tag + '>', 'gi');
  const openCount = (itinContent.match(openRe) || []).length;
  const closeCount = (itinContent.match(closeRe) || []).length;
  console.log(`<${tag}>: Open = ${openCount}, Close = ${closeCount}, Balanced = ${openCount === closeCount}`);
});
