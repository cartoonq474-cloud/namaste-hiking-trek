const path = require('path');
const ebcItems = require(path.join(__dirname, 'ebc_21_items.json'));

ebcItems.forEach((item, idx) => {
  console.log(`${idx + 1}. [${item.id}] ${item.title}`);
  // Extract just the first svg
  const svgMatch = item.iconSnippet.match(/<svg[\s\S]*?<\/svg>/);
  if (svgMatch) {
    console.log('   SVG:', svgMatch[0].replace(/\r?\n\s*/g, ' '));
  }
});
