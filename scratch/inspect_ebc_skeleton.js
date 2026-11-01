const fs = require('fs');

const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Find all main direct children
const mainStart = ebc.indexOf('<main>');
const mainEnd = ebc.indexOf('</main>');
const mainContent = ebc.substring(mainStart, mainEnd + 7);

console.log('Main length:', mainContent.length);

// Find top containers inside article
const articleStart = ebc.indexOf('<article');
const articleEnd = ebc.indexOf('</article>');
const articleContent = ebc.substring(articleStart, articleEnd + 10);

const containers = [...articleContent.matchAll(/<(section|div)\s+(?:id="([^"]+)"|class="([^"]+)")/g)];
console.log('Direct sections/divs inside article:');
containers.slice(0, 30).forEach(c => {
  console.log(` <${c[1]}> id="${c[2] || ''}" class="${c[3] || ''}"`);
});
