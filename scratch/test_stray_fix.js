const fs = require('fs');

let html = fs.readFileSync('trek/khopra-ridge-trek/index.html', 'utf8');

const sIdx = html.indexOf('<!-- Phone & WhatsApp Round Buttons -->');
const modalIdx = html.indexOf('<!-- Inquiry Modal -->');

// Find the snippet between svg closing and Inquiry modal
const marker = '.012-.651-.012z"/>\n                    </svg>\n                  </a>\n                </div>\n              </div>';
const markerPos = html.indexOf(marker);

if (markerPos !== -1) {
  console.log('Marker found!');
  const before = html.substring(0, markerPos + marker.length);
  const after = html.substring(modalIdx);
  
  // Replace the closing structure
  const replacement = `\n\n            </div>\n          </div>\n      </div>\n    </section>\n\n  `;
  const testHtml = before + replacement + after;

  const tags = ['div', 'section', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'span', 'ul', 'li', 'button', 'a', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'main', 'article'];
  let allOk = true;
  for (const t of tags) {
    const o = (testHtml.match(new RegExp('<' + t + '[\\s>]', 'gi')) || []).length;
    const c = (testHtml.match(new RegExp('</' + t + '>', 'gi')) || []).length;
    if (o !== c) {
      console.log(t + ' MISMATCH: open=' + o + ', close=' + c + ', diff=' + (o - c));
      allOk = false;
    }
  }
  console.log('Resulting tag balance allOk:', allOk);
} else {
  console.log('Marker NOT found!');
}
