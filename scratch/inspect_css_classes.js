const fs = require('fs');

const css = fs.readFileSync('index.css', 'utf8');

const classesToCheck = [
  // Dates
  'dates-card-container',
  'dates-section-header',
  'dates-mode-toggle',
  'dates-mode-btn',
  'dates-months-slider',
  'dates-month-tab',
  'dates-departure-list',
  'departure-item-row',
  'btn-book-now',
  'btn-load-more-dates',
  // Packing
  'gear-checked-count',
  'gear-total-count',
  'gear-item-checkbox',
  'gear-item-row',
  'gear-item-label',
  'gear-item-desc',
  'gear-custom-check',
  'rental-info-banner',
  'gear-section',
  'gear-section-title',
  'gear-grid',
  // Details / Guides
  'details-section-container',
  'details-title-wrapper',
  'details-main-title',
  'details-progress-card',
  'details-progress-ring-container',
  'details-progress-ring',
  'details-progress-ring-bg',
  'details-progress-ring-bar',
  'details-progress-count',
  'details-progress-status',
  'detail-accordion-card',
  'detail-accordion-header',
  'detail-check-bubble',
  'detail-icon-container',
  'detail-accordion-title',
  'detail-reading-time',
  'detail-accordion-content',
  'detail-accordion-content-inner',
  // Reviews
  'review-tabs-container',
  'review-tab-btn',
  'video-review-card',
  'video-play-btn',
  'video-thumb-container',
  'customer-review-card',
  'customer-reviews-stack',
  'platform-review-item',
  'platform-sub-tabs',
  'platform-sub-tab',
  'helpful-vote-btn',
  // FAQs
  'faq-layout-container',
  'faq-sidebar-card',
  'faq-category-nav',
  'faq-category-btn',
  'faq-main-panel',
  'faq-panel-header',
  'faq-active-category-title',
  'faq-expand-all-btn',
  'faq-item',
  'faq-item-question',
  'faq-item-answer'
];

console.log('=== CSS CLASS CHECK in index.css ===');
classesToCheck.forEach(cls => {
  const exists = css.includes('.' + cls);
  console.log(`.${cls.padEnd(32)}: ${exists ? 'FOUND' : 'MISSING'}`);
});
