const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Normalize CRLF to LF for matching or match by index
const needle = '& Hydrated</h3>\r\n            </div>\r\n          </div>\r\n\r\n        </div>';
const needleLF = '& Hydrated</h3>\n            </div>\n          </div>\n\n        </div>';

let isCRLF = html.includes('\r\n');
let targetNeedle = html.includes(needle) ? needle : needleLF;

if (!html.includes(targetNeedle)) {
  console.error('ERROR: targetNeedle not found!');
  process.exit(1);
}

const eol = isCRLF ? '\r\n' : '\n';

const blogsShowcaseMarkup = `        <!-- Blogs Editorial Showcase Panel (Matching Reference Design) -->
        <div id="res-blogs-showcase" class="res-blogs-showcase" style="display: none;">
          <!-- Header Bar -->
          <div class="res-blogs-header">
            <div class="res-blogs-header-text">
              <h3 class="res-blogs-main-title">Explore our Travel Blog</h3>
              <p class="res-blogs-subtitle">
                Explore our blog for trusted trekking insights across Nepal: from beginner-friendly tips and route breakdowns to expert guidance for seasoned high-altitude adventurers.
              </p>
            </div>
            <div class="res-blogs-header-cta">
              <a href="blogs.html" class="res-blogs-more-btn">
                <span>Explore more blogs</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </a>
            </div>
          </div>

          <!-- Bento 2-Column Grid -->
          <div class="res-blogs-bento">
            <!-- Featured Hero Card (Left) -->
            <a href="blogs.html" class="res-blog-hero-card">
              <div class="res-blog-hero-img-wrap">
                <img loading="lazy" src="images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-high-mountain-valley-trail-17.jpg" alt="Best Autumn Treks in Nepal">
                <div class="res-blog-hero-overlay"></div>
              </div>
              <div class="res-blog-hero-content">
                <div class="res-blog-meta">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>Trekking/Hiking | Sep 14, 2026</span>
                </div>
                <h4 class="res-blog-hero-title">Best Autumn Treks in Nepal</h4>
              </div>
            </a>

            <!-- 3 Stacked Cards (Right) -->
            <div class="res-blog-stack">
              <!-- Card 1 -->
              <a href="blogs.html" class="res-blog-stack-card">
                <div class="res-blog-stack-thumb">
                  <img loading="lazy" src="images/treks/everest-base-camp/everest-base-camp-mountain-trail-view-12.jpg" alt="Autumn Trekking in Nepal">
                </div>
                <div class="res-blog-stack-info">
                  <div class="res-blog-meta">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>Trekking/Hiking | Sep 3, 2026</span>
                  </div>
                  <h5 class="res-blog-stack-title">Why is autumn the best trekking season in Nepal?</h5>
                </div>
              </a>

              <!-- Card 2 -->
              <a href="blogs.html" class="res-blog-stack-card">
                <div class="res-blog-stack-thumb">
                  <img loading="lazy" src="images/treks/everest-base-camp/everest-base-camp-mountain-cairn-view-18.jpg" alt="Top 5 Base Camp Trekking in Nepal">
                </div>
                <div class="res-blog-stack-info">
                  <div class="res-blog-meta">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>Trekking/Hiking | Oct 28, 2026</span>
                  </div>
                  <h5 class="res-blog-stack-title">Top 5 Base Camp Trekking in Nepal</h5>
                </div>
              </a>

              <!-- Card 3 -->
              <a href="blogs.html" class="res-blog-stack-card">
                <div class="res-blog-stack-thumb">
                  <img loading="lazy" src="images/treks/annapurna-base-camp/annapurna-base-camp-trekking-group-snow-07.jpg" alt="Trekking in Nepal">
                </div>
                <div class="res-blog-stack-info">
                  <div class="res-blog-meta">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>Trekking/Hiking | Jun 18, 2026</span>
                  </div>
                  <h5 class="res-blog-stack-title">Trekking in Nepal</h5>
                </div>
              </a>
            </div>
          </div>
        </div>`;

const formattedReplacement = targetNeedle + eol + eol + blogsShowcaseMarkup.split('\n').join(eol);

html = html.replace(targetNeedle, formattedReplacement);

// Validate tag balance
const tags = ['div', 'section', 'p', 'h2', 'h3', 'h4', 'h5', 'span', 'ul', 'li', 'button', 'a'];
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
console.log('SUCCESS: #res-blogs-showcase added to index.html with 100% tag balance!');
