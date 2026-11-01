const fs = require('fs');

let css = fs.readFileSync('index.css', 'utf8');
const oldBlock = `.detail-accordion-content-inner {
  padding: 0 24px 24px 84px; /* offset to align content under title instead of icon */
  font-size: 0.98rem;
  line-height: 1.65;
  color: var(--color-neutral-700);
}

.detail-accordion-content-inner p {
  margin-bottom: 12px;
}

.detail-accordion-content-inner p:last-child {
  margin-bottom: 0;
}

@media (max-width: 640px) {
  .detail-accordion-content-inner {
    padding: 0 20px 20px 20px; /* remove left indent on small screens to fit text */
  }
}`.replace(/\n/g, '\r\n');

const newBlock = `.detail-accordion-content-inner,
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
}`.replace(/\n/g, '\r\n');

if (css.includes(oldBlock)) {
  css = css.replace(oldBlock, newBlock);
  fs.writeFileSync('index.css', css, 'utf8');
  console.log('Successfully updated index.css with CRLF matching!');
} else {
  console.log('Still not found, searching with regex');
  const regex = /\.detail-accordion-content-inner\s*\{[\s\S]*?padding:\s*0\s*20px\s*20px\s*20px;[\s\S]*?\}/;
  console.log('Regex matches:', regex.test(css));
}

