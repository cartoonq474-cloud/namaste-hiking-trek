const fs = require('fs');

const html = fs.readFileSync('scratch/ebc_review_section.html', 'utf8');

const matches = [...html.matchAll(/<div class="customer-review-card platform-review-item"[^>]*data-platform="tripadvisor"[\s\S]*?(?=<div class="customer-review-card platform-review-item"|$)/gi)];
if (matches.length > 0) {
  console.log('TripAdvisor review card:\n', matches[0][0]);
}
