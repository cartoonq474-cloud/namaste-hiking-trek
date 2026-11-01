const fs = require('fs');
let code = fs.readFileSync('scratch/content_abc_luxury_altitude_weather_faqs.js', 'utf8');

// Replace star symbol with svg
code = code.replace(
  '>★</div>',
  '><svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>'
);

// Add 20th FAQ to permits
const extraFaq = `
                  <div class="faq-item">
                    <div class="faq-item-question">
                      <h3 class="faq-question-title">Can I store extra luggage in Kathmandu or Pokhara while trekking?</h3>
                      <span class="faq-toggle-circle">∨</span>
                    </div>
                    <div class="faq-item-answer">
                      Yes, absolutely. Complimentary, secure locked luggage storage is provided at our 5-star partner hotels in both Kathmandu and Pokhara. You can leave non-trekking clothes, electronics, and travel baggage safely until you return from the mountains.
                    </div>
                  </div>
`;

code = code.replace('id="faq-cat-permits" style="display: none;">', 'id="faq-cat-permits" style="display: none;">' + extraFaq);

fs.writeFileSync('scratch/content_abc_luxury_altitude_weather_faqs.js', code, 'utf8');
console.log('Fixed star icon and added 20th FAQ');
