const fs = require('fs');

const origHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const testHtml = fs.readFileSync('scratch/test_semantic_hierarchy.html', 'utf8');

function checkTags(html) {
  const tags = ['html', 'head', 'body', 'section', 'div', 'main', 'header', 'footer', 'nav', 'script', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p'];
  const res = {};
  tags.forEach(t => {
    const o = (html.match(new RegExp('<' + t + '\\b[^>]*>', 'gi')) || []).length;
    const c = (html.match(new RegExp('</' + t + '>', 'gi')) || []).length;
    res[t] = { o, c, diff: o - c };
  });
  return res;
}

const rOrig = checkTags(origHtml);
const rTest = checkTags(testHtml);

console.log('Tag balance comparison:');
Object.keys(rTest).forEach(t => {
  console.log(`${t}: Orig [o:${rOrig[t].o}, c:${rOrig[t].c}, diff:${rOrig[t].diff}] -> Test [o:${rTest[t].o}, c:${rTest[t].c}, diff:${rTest[t].diff}]`);
  if (rTest[t].diff !== rOrig[t].diff) {
    console.error(`Diff changed for tag <${t}>!`);
  }
});
