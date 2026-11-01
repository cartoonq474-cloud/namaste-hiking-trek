const fs = require('fs');

const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const startTag = '<section id="section-details"';
const start = act.indexOf(startTag);
const end = act.indexOf('</section>', start) + '</section>'.length;
const chunk = act.substring(start, end);

const hMatches = chunk.match(/<h[34][^>]*>([\s\S]*?)<\/h[34]>/gi) || [];
hMatches.forEach((h, i) => {
  console.log(i+1, h.replace(/<[^>]+>/g, '').trim());
});
