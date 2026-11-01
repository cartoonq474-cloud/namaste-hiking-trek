const fs = require('fs');

const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

for (let i = 16; i <= 21; i++) {
  const comment = `<!-- Item ${i}:`;
  const nextComment = i < 21 ? `<!-- Item ${i + 1}:` : `</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </section>`;
  const itemIdx = html.indexOf(comment);
  const nextItemIdx = html.indexOf(nextComment, itemIdx);
  console.log(`Item ${i}: idx=${itemIdx}, nextIdx=${nextItemIdx}`);

  if (itemIdx !== -1) {
    const innerStart = html.indexOf('<div class="detail-accordion-content-inner">', itemIdx) + '<div class="detail-accordion-content-inner">'.length;
    const innerEnd = html.indexOf('</div>\r\n                  </div>\r\n                </div>', innerStart);
    console.log(`  innerStart=${innerStart}, innerEnd=${innerEnd}, len=${innerEnd - innerStart}`);
  }
}
