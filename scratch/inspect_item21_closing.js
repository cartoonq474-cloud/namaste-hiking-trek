const fs = require('fs');

const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const item21Idx = html.indexOf('<!-- Item 21: Important Notes -->');
console.log('Item 21 idx:', item21Idx);

if (item21Idx !== -1) {
  const item21ContentInnerStart = html.indexOf('<div class="detail-accordion-content-inner">', item21Idx);
  const closingIdx = html.indexOf('</div>\r\n                  </div>\r\n                </div>', item21ContentInnerStart);
  console.log('item21ContentInnerStart:', item21ContentInnerStart);
  console.log('closingIdx:', closingIdx);
  console.log('After item 21 snippet:\n', html.substring(closingIdx, closingIdx + 300));
}
