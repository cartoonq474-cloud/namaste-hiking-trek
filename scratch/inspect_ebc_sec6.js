const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');
const start = ebc.indexOf('<section id="section-details"');
const end = ebc.indexOf('</section>', start) + 10;
const sec6 = ebc.slice(start, end);

console.log('Total length of EBC Section 6:', sec6.length);
console.log('First 1200 chars:\n', sec6.slice(0, 1200));

// Find first card structure
const cardStart = sec6.indexOf('<div class="detail-accordion-card"');
const cardEnd = sec6.indexOf('</div>\n          </div>\n        </div>', cardStart);
console.log('\n--- Card 1 Snippet ---\n', sec6.slice(cardStart, cardStart + 800));
