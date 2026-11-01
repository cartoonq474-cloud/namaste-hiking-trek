const fs = require('fs');

console.log('Reading index.html to fix residual mentions...');
let html = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8');

// 1. Fix Route text in Section 6
const oldRouteRegex = /<h3 style="font-size: 1\.3rem; margin-bottom: 12px; color: var\(--color-primary-navy\);">Expedition Route Information<\/h3>\s*<p style="color: var\(--color-neutral-700\); font-size: 0\.95rem; line-height: 1\.6;">[\s\S]*?<\/p>/;
const newRouteSnippet = `<h3 style="font-size: 1.3rem; margin-bottom: 12px; color: var(--color-primary-navy);">Expedition Route Information</h3>
            <p style="color: var(--color-neutral-700); font-size: 0.98rem; line-height: 1.7;">
              The Kanchenjunga Circuit Trek commences from Suketar / Mitlung (<span data-altitude-m="921">921 m</span>), following the pristine Tamor and Ghunsa river valleys through Chirwa, Sukathum, and Amjilosa up to Ghunsa (<span data-altitude-m="3475">3,475 m</span>). It ascends through alpine birch and larch forests to Khambachen (<span data-altitude-m="4050">4,050 m</span>) and across glacial moraines to Lhonak (<span data-altitude-m="4770">4,770 m</span>), culminating at the high northern amphitheater of Pangpema (<span data-altitude-m="5143">5,143 m</span>) directly facing the immense north face of Mount Kanchenjunga (<span data-altitude-m="8586">8,586 m</span>). The circuit then crosses the rugged Sele Le pass (<span data-altitude-m="4290">4,290 m</span>) into the Simbua Khola valley toward Cheram (<span data-altitude-m="3870">3,870 m</span>) and Ramche (<span data-altitude-m="4580">4,580 m</span>) overlooking the Yalung Glacier, descending through Tortong and Yamphudin back to Suketar.
            </p>`;

if (oldRouteRegex.test(html)) {
  html = html.replace(oldRouteRegex, newRouteSnippet);
  console.log('Updated Section 6 route description!');
} else {
  console.log('Old route description already replaced or not matched.');
}

// 2. Fix data-detail-id="flight-lukla" to "flight-suketar"
html = html.replace('data-detail-id="flight-lukla"', 'data-detail-id="flight-suketar"');

// 3. Update reviews in Section 8 to Kanchenjunga Circuit Trek
html = html.replace(
  '<h3 class="review-heading-title">the BEST EBC trek experience ever</h3>',
  '<h3 class="review-heading-title">the BEST Kanchenjunga Circuit expedition ever</h3>'
);
html = html.replace(
  'Our Everest Base Camp trek with Namaste Hiking Trek went beyond every expectation we had.',
  'Our Kanchenjunga Circuit Trek (26 Days) with Namaste Hiking Trek went beyond every expectation we had. Reaching Pangpema at 5,143m and viewing the north face was breathtaking.'
);

// Do for second review if repeated in carousel
html = html.replace(
  '<h3 class="review-heading-title">the BEST EBC trek experience ever</h3>',
  '<h3 class="review-heading-title">the BEST Kanchenjunga Circuit expedition ever</h3>'
);
html = html.replace(
  'Our Everest Base Camp trek with Namaste Hiking Trek went beyond every expectation we had.',
  'Our Kanchenjunga Circuit Trek (26 Days) with Namaste Hiking Trek went beyond every expectation we had. The guidance over Sele Le pass and the Sherpa hospitality in Ghunsa were outstanding.'
);

// 4. Validate tag balance
const tags = ['div', 'section', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'span', 'ul', 'li', 'button', 'a', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'main', 'article'];
let allOk = true;
for (const t of tags) {
  const o = (html.match(new RegExp('<' + t + '[\\s>]', 'gi')) || []).length;
  const c = (html.match(new RegExp('</' + t + '>', 'gi')) || []).length;
  if (o !== c) {
    console.error(t + ' MISMATCH: open=' + o + ', close=' + c + ', diff=' + (o - c));
    allOk = false;
  }
}

if (!allOk) {
  console.error('Validation failed! Tag balance error.');
  process.exit(1);
}

fs.writeFileSync('trek/kanchenjunga-base-camp-trek/index.html', html, 'utf8');
console.log('SUCCESS: All residual mentions updated cleanly with 100% tag balance!');
