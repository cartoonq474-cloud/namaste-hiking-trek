const fs = require('fs');
const html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const matches = html.match(/class="ebc-highlight-card-title">([\s\S]*?)<\/h3>/g);
console.log('Total Three Passes highlights:', matches ? matches.length : 0);
if (matches) {
  matches.forEach((m, idx) => console.log(`${idx + 1}. ${m.replace(/<[^>]+>/g, '').trim()}`));
}

