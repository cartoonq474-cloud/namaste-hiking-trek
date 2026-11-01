const fs = require('fs');
const tp = fs.readFileSync('trek/everest-three-passes-trek/index.html', 'utf8');

const faqMatch = tp.match(/<div class=\"faq-item[^\"]*\"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
if (faqMatch) {
  console.log('=== THREE PASSES FAQ ITEM SAMPLE ===');
  console.log(faqMatch[0]);
} else {
  const m = tp.match(/class=\"[^\"]*faq[^\"]*\"/g);
  console.log('FAQ classes in TP:', [...new Set(m)]);
}

