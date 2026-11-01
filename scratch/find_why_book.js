const fs = require('fs');
const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const s = html.indexOf('class="why-book-container"');
const e = html.indexOf('</section>', s);
const block = html.substring(s, e);

const titles = [...block.matchAll(/<h4 class="why-book-card-title">([\s\S]*?)<\/h4>/g)];
console.log('Found', titles.length, 'why-book-card-title elements:');
titles.forEach((t, i) => console.log(`${i + 1}. ${t[1].trim()}`));
