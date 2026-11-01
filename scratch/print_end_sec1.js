const fs = require('fs');
const evt = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

const s1Start = evt.indexOf('<section id="section-overview"');
const s1End = evt.indexOf('</section>', s1Start);
console.log('End of Section 1 before </section>:\n');
console.log(evt.slice(s1End - 400, s1End + 15));
