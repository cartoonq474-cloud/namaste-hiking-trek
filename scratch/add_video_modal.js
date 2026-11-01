const fs = require('fs');
let code = fs.readFileSync('scratch/content_abc_luxury_altitude_weather_faqs.js', 'utf8');

const videoModalHtml = `
            <!-- Video Player Lightbox Modal -->
            <div id="video-review-modal" class="video-modal-overlay">
              <div class="video-modal-card">
                <button type="button" id="video-modal-close" class="video-modal-close-btn">&times;</button>
                <div class="video-modal-header">
                  <h3 id="video-modal-title" style="color: var(--color-primary-navy); margin-bottom: 4px;">Video Review</h3>
                  <span id="video-modal-sub" style="color: var(--color-copper-orange); font-weight: 600; font-size: 0.9rem;">Namaste Hiking Trek Experience</span>
                </div>
                <div class="video-modal-player-wrapper">
                  <video id="video-modal-player" controls poster="../../images/video-thumb-david.png" style="width: 100%; height: 100%; border-radius: 12px; object-fit: cover;">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                    Your browser does not support HTML5 video.
                  </video>
                </div>
              </div>
            </div>
`;

if (!code.includes('id="video-review-modal"')) {
  code = code.replace(
    '<!-- Section 12: FAQs (Flagship 2-Column Category Sidebar Layout) -->',
    videoModalHtml + '\n          <!-- Section 12: FAQs (Flagship 2-Column Category Sidebar Layout) -->'
  );
  fs.writeFileSync('scratch/content_abc_luxury_altitude_weather_faqs.js', code, 'utf8');
  console.log('Successfully inserted video review modal before FAQs');
} else {
  console.log('Video review modal already present');
}
