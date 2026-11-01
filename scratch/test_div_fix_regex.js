const fs = require('fs');
let html = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const regex = /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/;
console.log('Regex matches:', regex.test(html));

if (regex.test(html)) {
  const testHtml = html.replace(regex, '</div>\n          </div>\n        </div>\n    </section>');
  const openDivs = (testHtml.match(/<div(\s+[^>]*)?>/gi) || []).length;
  const closeDivs = (testHtml.match(/<\/div>/gi) || []).length;
  console.log('With replacement: open divs =', openDivs, 'close divs =', closeDivs, 'diff =', openDivs - closeDivs);
}

