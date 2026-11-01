const fs = require('fs');

const origHtml = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const item2HeaderIdx = origHtml.indexOf('<!-- Item 2: Available Food -->');
const item2ContentInnerStart = origHtml.indexOf('<div class="detail-accordion-content-inner">', item2HeaderIdx) + '<div class="detail-accordion-content-inner">'.length;
const item2ContentInnerEnd = origHtml.indexOf('</div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- Item 3:', item2ContentInnerStart);

console.log('item2HeaderIdx:', item2HeaderIdx);
console.log('item2ContentInnerStart:', item2ContentInnerStart);
console.log('item2ContentInnerEnd:', item2ContentInnerEnd);

const oldInner = origHtml.substring(item2ContentInnerStart, item2ContentInnerEnd);
console.log('Old inner length:', oldInner.length);
console.log('Old inner snippet:', oldInner.substring(0, 200));
