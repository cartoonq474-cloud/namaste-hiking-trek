const fs = require('fs');

let css = fs.readFileSync('index.css', 'utf8');

const target = `.detail-accordion-content-inner {\r
  padding: 0 24px 24px 84px; /* offset to align content under title instead of icon */\r
  font-size: 0.98rem;\r
  line-height: 1.65;\r
  color: var(--color-neutral-700);\r
}\r
\r
.detail-accordion-content-inner p {\r
  margin-bottom: 12px;\r
}\r
\r
.detail-accordion-content-inner p:last-child {\r
  margin-bottom: 0;\r
}\r
\r
@media (max-width: 640px) {\r
  .detail-accordion-content-inner {\r
    padding: 0 20px 20px 20px; /* remove left indent on small screens to fit text */\r
  }`;

const replacement = `.detail-accordion-content-inner,\r
.detail-content-inner {\r
  padding: 0 24px 24px 84px; /* offset to align content under title instead of icon */\r
  font-size: 0.98rem;\r
  line-height: 1.65;\r
  color: var(--color-neutral-700);\r
}\r
\r
.detail-accordion-content-inner p,\r
.detail-content-inner p {\r
  margin-bottom: 12px;\r
}\r
\r
.detail-accordion-content-inner p:last-child,\r
.detail-content-inner p:last-child {\r
  margin-bottom: 0;\r
}\r
\r
@media (max-width: 640px) {\r
  .detail-accordion-content-inner,\r
  .detail-content-inner {\r
    padding: 0 20px 20px 20px; /* remove left indent on small screens to fit text */\r
  }`;

if (css.includes(target)) {
  css = css.replace(target, replacement);
  fs.writeFileSync('index.css', css, 'utf8');
  console.log('SUCCESS! index.css updated with alias.');
} else {
  console.log('Target still not matched.');
}

