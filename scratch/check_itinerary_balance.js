const fs = require('fs');

const content = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

// Check overall tag balance of main tags
const tagsToCheck = ['div', 'section', 'article', 'main', 'header', 'footer', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'ul', 'li', 'button', 'a'];

tagsToCheck.forEach(tag => {
  const openRe = new RegExp('<' + tag + '(\\s+[^>]*)?>', 'gi');
  const closeRe = new RegExp('</' + tag + '>', 'gi');
  const openCount = (content.match(openRe) || []).length;
  const closeCount = (content.match(closeRe) || []).length;
  console.log(`<${tag}>: Open = ${openCount}, Close = ${closeCount}, Balanced = ${openCount === closeCount}`);
});
