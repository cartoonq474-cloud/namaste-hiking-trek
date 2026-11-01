const fs = require('fs');

const ebcHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const styleIdx = ebcHtml.indexOf('.faq-layout-container');
console.log('Found .faq-layout-container in EBC at:', styleIdx);
if (styleIdx !== -1) {
  // Find the containing <style> tag
  const styleStart = ebcHtml.lastIndexOf('<style', styleIdx);
  const styleEnd = ebcHtml.indexOf('</style>', styleIdx);
  console.log('--- FAQ STYLE IN EBC ---');
  console.log(ebcHtml.slice(styleStart, styleEnd + 8));
}
