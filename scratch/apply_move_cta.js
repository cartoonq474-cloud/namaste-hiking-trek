const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Target block in header to remove
const oldCtaInHeader = `          <!-- CSR CTA Button -->
          <div style="margin-top: 10px;">
            <button type="button" class="open-inquiry-btn btn btn-primary" data-trek-title="Our CSR &amp; Community Outreach" style="display: inline-flex; align-items: center; gap: 8px; font-weight: 700; border-radius: 9999px; padding: 12px 28px; box-shadow: 0 4px 16px rgba(16, 185, 129, 0.25);">
              <span>See our CSR work</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
            </button>
          </div>`;

if (!html.includes(oldCtaInHeader)) {
  console.error('ERROR: oldCtaInHeader not found!');
  process.exit(1);
}

// 2. Target insertion point below gallery
const galleryCloseTarget = `        </div>
      </div>
    </section>`;

if (!html.includes(galleryCloseTarget)) {
  console.error('ERROR: galleryCloseTarget not found!');
  process.exit(1);
}

const newCtaBelowGallery = `        </div>
      </div>

      <!-- Centered CSR CTA Button Below Gallery Images -->
      <div class="container text-center" style="margin-top: 20px; margin-bottom: 8px;">
        <button type="button" class="open-inquiry-btn btn btn-primary" data-trek-title="Our CSR &amp; Community Outreach" style="display: inline-flex; align-items: center; gap: 8px; font-weight: 700; border-radius: 9999px; padding: 13px 32px; box-shadow: 0 4px 16px rgba(16, 185, 129, 0.25); font-size: 0.98rem; transition: transform 0.2s ease, box-shadow 0.2s ease;">
          <span>See our CSR work</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
        </button>
      </div>
    </section>`;

// Replace
html = html.replace(oldCtaInHeader + '\n', '');
html = html.replace(galleryCloseTarget, newCtaBelowGallery);

// Validate tag balance
const tags = ['div', 'section', 'p', 'h2', 'h3', 'h4', 'span', 'ul', 'li', 'button'];
let allOk = true;
for (const t of tags) {
  const o = (html.match(new RegExp('<' + t + '[\\s>]', 'gi')) || []).length;
  const c = (html.match(new RegExp('</' + t + '>', 'gi')) || []).length;
  if (o !== c) {
    console.error(t + ' MISMATCH: open=' + o + ', close=' + c);
    allOk = false;
  }
}

if (!allOk) {
  console.error('Validation failed! Aborting write.');
  process.exit(1);
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('SUCCESS: CTA button moved below images and index.html updated with 100% tag balance!');
