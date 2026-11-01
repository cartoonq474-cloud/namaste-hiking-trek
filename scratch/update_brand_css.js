const fs = require('fs');

let css = fs.readFileSync('index.css', 'utf8');

const startMarker = '/* ==================== Resources Blogs Showcase (Dark Editorial Bento) ==================== */';
const endMarker = '/* ==================== Newsletter CTA Subscription Banner ==================== */';

const startIdx = css.indexOf(startMarker);
const endIdx = css.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
  console.error('ERROR: Markers not found in index.css');
  process.exit(1);
}

const newCssBlock = `/* ==================== Resources Blogs Showcase (Namaste Branded Palette) ==================== */
.res-blogs-showcase {
  background: linear-gradient(145deg, #071D36 0%, #0C2B4E 60%, #09223D 100%);
  border-radius: 20px;
  padding: 40px 48px 44px 48px;
  margin-top: 10px;
  box-shadow: 0 24px 50px rgba(7, 29, 54, 0.45);
  border: 1px solid rgba(44, 130, 201, 0.28);
  color: #FFFFFF;
}

.res-blogs-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-bottom: 28px;
  padding-bottom: 4px;
}

.res-blogs-header-text {
  flex-grow: 1;
}

.res-blogs-subtitle {
  font-size: 1.05rem;
  line-height: 1.65;
  color: #CBD5E1;
  max-width: 740px;
  margin: 0;
}

.res-blogs-header-cta {
  flex-shrink: 0;
}

.res-blogs-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.45);
  border-radius: 9999px;
  padding: 11px 26px;
  color: #10B981;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
}

.res-blogs-more-btn:hover {
  background: linear-gradient(135deg, #10B981, #059669);
  border-color: #10B981;
  color: #FFFFFF;
  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.45);
  transform: translateY(-2px);
}

.res-blogs-bento {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 36px;
  align-items: stretch;
}

.res-blog-hero-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-decoration: none;
  min-height: 380px;
  box-shadow: 0 12px 32px rgba(7, 29, 54, 0.5);
  border: 1px solid rgba(44, 130, 201, 0.22);
}

.res-blog-hero-img-wrap {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.res-blog-hero-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.res-blog-hero-card:hover .res-blog-hero-img-wrap img {
  transform: scale(1.05);
}

.res-blog-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(7, 29, 54, 0.96) 0%, rgba(7, 29, 54, 0.55) 50%, rgba(7, 29, 54, 0.12) 85%, transparent 100%);
  z-index: 2;
}

.res-blog-hero-content {
  position: relative;
  z-index: 3;
  padding: 26px 28px;
}

.res-blog-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.86rem;
  font-weight: 600;
  color: #CBD5E1;
  margin-bottom: 8px;
}

.res-blog-meta svg {
  flex-shrink: 0;
  stroke: #10B981;
}

.res-blog-hero-title {
  font-size: 1.65rem;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.3;
  margin: 0;
  transition: color 0.25s ease;
}

.res-blog-hero-card:hover .res-blog-hero-title {
  color: #10B981;
}

.res-blog-stack {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
}

.res-blog-stack-card {
  display: flex;
  align-items: center;
  gap: 20px;
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 14px;
  transition: background-color 0.25s ease, transform 0.25s ease;
}

.res-blog-stack-card:hover {
  background-color: rgba(44, 130, 201, 0.1);
  transform: translateX(4px);
}

.res-blog-stack-thumb {
  width: 155px;
  height: 100px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 4px 14px rgba(7, 29, 54, 0.35);
  border: 1px solid rgba(44, 130, 201, 0.28);
}

.res-blog-stack-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.res-blog-stack-card:hover .res-blog-stack-thumb img {
  transform: scale(1.08);
}

.res-blog-stack-info {
  flex-grow: 1;
}

.res-blog-stack-title {
  font-size: 1.12rem;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.35;
  margin: 4px 0 0 0;
  transition: color 0.25s ease;
}

.res-blog-stack-card:hover .res-blog-stack-title {
  color: #10B981;
}

@media (max-width: 992px) {
  .res-blogs-bento {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .res-blog-hero-card {
    min-height: 320px;
  }

  .res-blogs-header {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .res-blogs-showcase {
    padding: 24px 18px;
    border-radius: 16px;
  }

  .res-blog-stack-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding: 10px 0;
  }

  .res-blog-stack-thumb {
    width: 100%;
    height: 160px;
  }
}

`;

css = css.substring(0, startIdx) + newCssBlock + css.substring(endIdx);

const o = (css.match(/\{/g) || []).length;
const c = (css.match(/\}/g) || []).length;
if (o !== c) {
  console.error('Brace balance error! open=' + o + ', close=' + c);
  process.exit(1);
}

fs.writeFileSync('index.css', css, 'utf8');
console.log('SUCCESS: index.css updated with Namaste Branded Colors and 100% brace balance!');
