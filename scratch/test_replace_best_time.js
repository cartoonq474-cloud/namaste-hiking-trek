const fs = require('fs');

const origHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const item3HeaderIdx = origHtml.indexOf('<!-- Item 3: Best Time -->');
const item3ContentInnerStart = origHtml.indexOf('<div class="detail-accordion-content-inner">', item3HeaderIdx) + '<div class="detail-accordion-content-inner">'.length;
const item3ContentInnerEnd = origHtml.indexOf('</div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- Item 4:', item3ContentInnerStart);

console.log('item3HeaderIdx:', item3HeaderIdx);
console.log('item3ContentInnerStart:', item3ContentInnerStart);
console.log('item3ContentInnerEnd:', item3ContentInnerEnd);

const oldInner = origHtml.substring(item3ContentInnerStart, item3ContentInnerEnd);
console.log('Old inner length:', oldInner.length);
console.log('Old inner content:\n', oldInner);
