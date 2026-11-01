const fs = require('fs');

const filePath = 'trek/langtang-valley-trek/index.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update data-trek-key='ebc' to 'langtang' at line 759
content = content.replace(
  'data-trek-details-wrapper data-trek-key="ebc"',
  'data-trek-details-wrapper data-trek-key="langtang"'
);

// 2. Fix the closing tags before <!-- Inquiry Modal -->
// Currently in file:
// </div> </div> (closes card and its wrapper)
// </div> </div> (orphaned extra divs)
// </div> </section> </main> (container, section, duplicate main)
const closingRegex = /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/main>\s*<!-- Inquiry Modal -->/;

if (closingRegex.test(content)) {
  console.log('Found closing tag sequence, replacing...');
  const cleanClosing = `            </div>
          </div>

        </div>
      </div>
    </section>

  <!-- Inquiry Modal -->`;
  content = content.replace(closingRegex, cleanClosing);
} else {
  console.warn('Closing regex did not match directly, checking manual slice...');
}

// 3. Update Recommendation Section (.you-might-like-section)
const ymlRegex = /<section class="you-might-like-section">[\s\S]*?<\/section>/;

const newYmlSection = `<section class="you-might-like-section">
    <div class="container">
      <div class="yml-header">
        <span class="yml-pill-tag">MORE ADVENTURES</span>
        <div class="yml-title-row">
          <span class="yml-accent-bar"></span>
          <h2 class="yml-title">You might also like</h2>
        </div>
        <p class="yml-subtitle">Handpicked trips in the Langtang and surrounding Himalayan valleys — natural next steps from this route.</p>
      </div>

      <div class="yml-cards-grid">
        <!-- Card 1: Gosaikunda Lake Trek -->
        <a href="/trek/gosaikunda-lake-trek/" class="yml-card">
          <div class="yml-card-image">
            <img src="../../images/treks/gosaikunda-lake/gosaikunda-lake-trek-mountain-panorama-prayer-flags-09.jpg" alt="Gosaikunda Lake Trek" loading="lazy">
            <div class="yml-card-overlay"></div>
            <span class="yml-card-badge">Langtang Region</span>
          </div>
          <div class="yml-card-body">
            <h3 class="yml-card-title">Gosaikunda Lake Trek (7 Days)</h3>
            <div class="yml-card-rating">
              <span class="yml-stars">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </span>
              <span class="yml-rating-text">5 · 18 reviews</span>
            </div>
            <div class="yml-card-footer">
              <div class="yml-card-price">
                <span class="yml-price-label">Starting from</span>
                <span class="yml-price-value">USD <strong>695</strong></span>
              </div>
              <span class="yml-view-trip-btn">View Trip &rarr;</span>
            </div>
          </div>
        </a>

        <!-- Card 2: Langtang & Gosaikunda Combined Trek -->
        <a href="/trek/langtang-gosaikunda-trek/" class="yml-card">
          <div class="yml-card-image">
            <img src="../../images/treks/langtang-valley/langtang-trek-snowy-mountain-landscape-05.jpg" alt="Langtang & Gosaikunda Combined Trek" loading="lazy">
            <div class="yml-card-overlay"></div>
            <span class="yml-card-badge">Langtang Region</span>
          </div>
          <div class="yml-card-body">
            <h3 class="yml-card-title">Langtang &amp; Gosaikunda Trek (16 Days)</h3>
            <div class="yml-card-rating">
              <span class="yml-stars">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </span>
              <span class="yml-rating-text">5 · 24 reviews</span>
            </div>
            <div class="yml-card-footer">
              <div class="yml-card-price">
                <span class="yml-price-label">Starting from</span>
                <span class="yml-price-value">USD <strong>1,380</strong></span>
              </div>
              <span class="yml-view-trip-btn">View Trip &rarr;</span>
            </div>
          </div>
        </a>

        <!-- Card 3: Tamang Heritage Trail Trek -->
        <a href="/trek/tamang-heritage-trail-trek/" class="yml-card">
          <div class="yml-card-image">
            <img src="../../images/treks/langtang-valley/langtang-trek-trekking-community-group-photo-07.jpg" alt="Tamang Heritage Trail Trek" loading="lazy">
            <div class="yml-card-overlay"></div>
            <span class="yml-card-badge yml-badge-duration">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              9 Days
            </span>
          </div>
          <div class="yml-card-body">
            <h3 class="yml-card-title">Tamang Heritage Trail (9 Days)</h3>
            <div class="yml-card-rating">
              <span class="yml-stars">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10b981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </span>
              <span class="yml-rating-text">5 · 12 reviews</span>
            </div>
            <div class="yml-card-footer">
              <div class="yml-card-price">
                <span class="yml-price-label">Starting from</span>
                <span class="yml-price-value">USD <strong>790</strong></span>
              </div>
              <span class="yml-view-trip-btn">View Trip &rarr;</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>`;

if (ymlRegex.test(content)) {
  console.log('Replacing you-might-like-section...');
  content = content.replace(ymlRegex, newYmlSection);
} else {
  console.warn('Could not find you-might-like-section via regex!');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Finished updating Langtang page!');
