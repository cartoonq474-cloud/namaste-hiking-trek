const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const s1Start = html.indexOf('<section id="section-overview"');
const s2Start = html.indexOf('<section id="section-itinerary"');

const s1 = html.slice(s1Start, s2Start);

const whyBookIdx = s1.indexOf('Why Book');
if (whyBookIdx !== -1) {
  console.log('Why book snippet:');
  console.log(s1.slice(whyBookIdx - 100, whyBookIdx + 2000));
} else {
  console.log('Why book not found directly, checking for "why"');
  const m = s1.match(/<div class=\"[^\"]*why[^\"]*\"/g);
  console.log(m);
}

