const fs = require('fs');

let css = fs.readFileSync('index.css', 'utf8');

const regex = /\.detail-accordion-content-inner\s*\{[\s\S]*?padding:\s*0\s*20px\s*20px\s*20px;[^\}]*\}\s*\}/;
const m = css.match(regex);
console.log('Found full block:', !!m);
if (m) {
  console.log('Block is:\n' + m[0]);
  const replacement = `.detail-accordion-content-inner,
.detail-content-inner {
  padding: 0 24px 24px 84px; /* offset to align content under title instead of icon */
  font-size: 0.98rem;
  line-height: 1.65;
  color: var(--color-neutral-700);
}

.detail-accordion-content-inner p,
.detail-content-inner p {
  margin-bottom: 12px;
}

.detail-accordion-content-inner p:last-child,
.detail-content-inner p:last-child {
  margin-bottom: 0;
}

@media (max-width: 640px) {
  .detail-accordion-content-inner,
  .detail-content-inner {
    padding: 0 20px 20px 20px; /* remove left indent on small screens to fit text */
  }
}`;
  css = css.replace(m[0], replacement);
  fs.writeFileSync('index.css', css, 'utf8');
  console.log('Successfully written to index.css!');
}

