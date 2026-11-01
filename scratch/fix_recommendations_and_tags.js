const fs = require('fs');

const targetPath = 'trek/upper-mustang-trek/index.html';
let html = fs.readFileSync(targetPath, 'utf8');

// Replace the first rogue </main> after the sidebar
const rogueMainStr = `              </div>

          </div>
        </div>

      </div>
    </section>
  </main>`;

const fixedMainStr = `              </div>

          </div>
        </div>

      </div>
    </section>`;

if (html.includes(rogueMainStr)) {
  html = html.replace(rogueMainStr, fixedMainStr);
  console.log('Removed rogue </main> after sidebar!');
} else {
  console.log('Could not find exact rogueMainStr pattern, searching flexibly...');
  const idx = html.indexOf('5.795 5.122');
  if (idx !== -1) {
    const afterWa = html.indexOf('</main>', idx);
    const modalIdx = html.indexOf('<!-- Inquiry Modal -->', idx);
    if (afterWa !== -1 && afterWa < modalIdx) {
      html = html.substring(0, afterWa) + html.substring(afterWa + 7);
      console.log('Removed rogue </main> using index slice!');
    }
  }
}

// Now replace the you-might-like-section
const ymlStart = html.indexOf('<!-- You Might Also Like');
const ymlEnd = html.indexOf('<!-- Luxury Cinematic Footer');

if (ymlStart !== -1 && ymlEnd !== -1) {
  const newYml = `<!-- You Might Also Like — Full-Width Recommendation Section -->
  <section class="you-might-like-section">
    <div class="container">
      <div class="yml-header">
        <span class="yml-pill-tag">MORE ADVENTURES</span>
        <div class="yml-title-row">
          <span class="yml-accent-bar"></span>
          <h2 class="yml-title">You might also like</h2>
        </div>
        <p class="yml-subtitle">Handpicked Himalayan adventures in the same region and style — a natural companion to Upper Mustang.</p>
      </div>

      <div class="yml-cards-grid">
        <!-- Card 1: Annapurna Circuit Trek -->
        <a href="/trek/annapurna-circuit-trek/" class="yml-card">
          <div class="yml-card-image">
            <img src="/images/treks/upper-mustang/upper-mustang-kagbeni-gateway-04.jpg" alt="Annapurna Circuit Trek" loading="lazy">
            <div class="yml-card-overlay"></div>
            <span class="yml-card-badge">Annapurna Region</span>
          </div>
          <div class="yml-card-body">
            <h3 class="yml-card-title">Annapurna Circuit Trek (16 Days)</h3>
            <div class="yml-card-rating">
              <span class="yml-stars">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10B981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10B981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10B981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10B981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10B981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </span>
              <span class="yml-rating-text">5.0 · 38 reviews</span>
            </div>
            <div class="yml-card-footer">
              <div class="yml-card-price">
                <span class="yml-price-label">Starting from</span>
                <span class="yml-price-value">USD <strong>1,299</strong></span>
              </div>
              <span class="yml-view-trip-btn">View Trip &rarr;</span>
            </div>
          </div>
        </a>

        <!-- Card 2: Nar Phu Valley Trek -->
        <a href="/trek/nar-phu-valley-trek/" class="yml-card">
          <div class="yml-card-image">
            <img src="/images/treks/upper-mustang/upper-mustang-drakmar-red-cliffs-02.jpg" alt="Nar Phu Valley Trek" loading="lazy">
            <div class="yml-card-overlay"></div>
            <span class="yml-card-badge" style="background: #008060; color: #FFFFFF;">Restricted Region</span>
          </div>
          <div class="yml-card-body">
            <h3 class="yml-card-title">Nar Phu Valley Trek (12 Days)</h3>
            <div class="yml-card-rating">
              <span class="yml-stars">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10B981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10B981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10B981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10B981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10B981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </span>
              <span class="yml-rating-text">5.0 · 19 reviews</span>
            </div>
            <div class="yml-card-footer">
              <div class="yml-card-price">
                <span class="yml-price-label">Starting from</span>
                <span class="yml-price-value">USD <strong>1,450</strong></span>
              </div>
              <span class="yml-view-trip-btn">View Trip &rarr;</span>
            </div>
          </div>
        </a>

        <!-- Card 3: Manaslu Circuit Trek -->
        <a href="/trek/manaslu-circuit-trek/" class="yml-card">
          <div class="yml-card-image">
            <img src="/images/treks/upper-mustang/upper-mustang-lo-manthang-walled-city-01.jpg" alt="Manaslu Circuit Trek" loading="lazy">
            <div class="yml-card-overlay"></div>
            <span class="yml-card-badge" style="background: #008060; color: #FFFFFF;">Restricted Region</span>
          </div>
          <div class="yml-card-body">
            <h3 class="yml-card-title">Manaslu Circuit Trek (14 Days)</h3>
            <div class="yml-card-rating">
              <span class="yml-stars">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10B981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10B981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10B981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10B981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10B981"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </span>
              <span class="yml-rating-text">5.0 · 42 reviews</span>
            </div>
            <div class="yml-card-footer">
              <div class="yml-card-price">
                <span class="yml-price-label">Starting from</span>
                <span class="yml-price-value">USD <strong>1,350</strong></span>
              </div>
              <span class="yml-view-trip-btn">View Trip &rarr;</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>

    </article>
  </main>

  `;

  html = html.substring(0, ymlStart) + newYml + html.substring(ymlEnd);
  console.log('Updated you-might-like-section and closing article/main tags!');
}

fs.writeFileSync(targetPath, html, 'utf8');
console.log('Saved final tag and recommendations updates.');
