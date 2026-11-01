const fs = require('fs');
const refHtml = fs.readFileSync('trek/everest-base-camp-with-cho-la-pass-trek/index.html', 'utf8');

function findSnippet(query) {
  const idx = refHtml.indexOf(query);
  console.log(`Query "${query}": index ${idx}`);
  if (idx !== -1) {
    console.log('Surrounding:', JSON.stringify(refHtml.slice(idx, idx + 100)));
  }
}

findSnippet('class="trek-hero"');
findSnippet('class="trek-nav-sticky"');
findSnippet('class="trek-main-content"');
findSnippet('<section id="section-overview"');
findSnippet('<section id="section-reviews"');
findSnippet('<footer');
findSnippet('id="section-faqs"');
