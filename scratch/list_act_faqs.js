const fs = require('fs');

const act = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

const startTag = '<section id="section-faqs"';
const start = act.indexOf(startTag);
const end = act.indexOf('</section>', start) + '</section>'.length;
const chunk = act.substring(start, end);

const catMatches = chunk.match(/data-category="([^"]+)"/g) || [];
console.log('Categories:', [...new Set(catMatches)]);

const qMatches = chunk.match(/<button class="faq-question-btn[^>]*>([\s\S]*?)<\/button>/gi) || [];
console.log('FAQ count:', qMatches.length);
qMatches.slice(0, 10).forEach((q, i) => console.log(i+1, q.replace(/<[^>]+>/g, '').trim()));
