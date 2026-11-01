const fs = require('fs');

const html = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

for (let i = 10; i <= 15; i++) {
  const comment = `<!-- Item ${i}:`;
  const nextComment = `<!-- Item ${i + 1}:`;
  const itemIdx = html.indexOf(comment);
  const nextItemIdx = html.indexOf(nextComment);
  console.log(`Item ${i}: idx=${itemIdx}, nextIdx=${nextItemIdx}`);

  if (itemIdx !== -1) {
    const innerStart = html.indexOf('<div class="detail-accordion-content-inner">', itemIdx) + '<div class="detail-accordion-content-inner">'.length;
    const innerEnd = html.indexOf('</div>\r\n                  </div>\r\n                </div>', innerStart);
    console.log(`  innerStart=${innerStart}, innerEnd=${innerEnd}, len=${innerEnd - innerStart}`);
  }
}
