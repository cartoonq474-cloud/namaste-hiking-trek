const fs = require('fs');

const origPath = 'index.html';
const origContent = fs.readFileSync(origPath, 'utf8');

function checkTags(html, label) {
  const tags = ['div', 'section', 'p', 'h2', 'h3', 'h4', 'span', 'ul', 'li', 'button'];
  console.log(`--- Tag Balance for ${label} ---`);
  let balanced = true;
  for (const t of tags) {
    const o = (html.match(new RegExp('<' + t + '[\\s>]', 'gi')) || []).length;
    const c = (html.match(new RegExp('</' + t + '>', 'gi')) || []).length;
    const ok = o === c;
    if (!ok) balanced = false;
    console.log(`${t.padEnd(8)}: open = ${o}, close = ${c} ${ok ? '[BALANCED]' : '[MISMATCH!]'}`);
  }
  return balanced;
}

console.log('Original index.html check:');
checkTags(origContent, 'Original');

const newSectionHtml = `    <!-- Section 3: Our Commitment & Social Responsibility Gallery -->
    <section id="social-responsibility" class="trekking-gallery-section">
      <div class="container">
        <div class="section-header text-center" style="max-width: 840px; margin: 0 auto 36px auto;">
          <span class="pill pill-alpine" style="letter-spacing: 0.12em; font-weight: 800;">OUR COMMITMENT TO NEPAL</span>
          <h2 class="section-title" style="margin-top: 12px; margin-bottom: 16px;">A Global Happy Family</h2>
          <p class="section-desc" style="font-size: 1.05rem; line-height: 1.7; color: var(--color-neutral-700); margin-bottom: 24px;">
            At Namaste Hiking Trek, we believe the world is a global family, and we treat each other accordingly. We believe in giving back more to society than taking—after all, we rise by lifting others. Through the <strong>Namaste Hiking Trek Outreach Fund</strong>, we allocate a dedicated percentage of business profit to rural development, school education, and crisis relief programs across remote Himalayan communities.
          </p>

          <!-- 3 Impact Pillars & CSR CTA Row -->
          <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; margin-bottom: 28px;">
            <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 14px 20px; display: flex; align-items: center; gap: 14px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04); text-align: left; min-width: 210px;">
              <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(16, 185, 129, 0.12); color: #10B981; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
              </div>
              <div>
                <span style="font-size: 0.72rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #10B981; display: block;">EMERGENCY RELIEF</span>
                <strong style="font-size: 0.92rem; color: #0F172A; display: block; line-height: 1.3;">Rasuwa &amp; Nuwakot Floods</strong>
              </div>
            </div>

            <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 14px 20px; display: flex; align-items: center; gap: 14px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04); text-align: left; min-width: 210px;">
              <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(59, 130, 246, 0.12); color: #3B82F6; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div>
                <span style="font-size: 0.72rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #3B82F6; display: block;">EDUCATION</span>
                <strong style="font-size: 0.92rem; color: #0F172A; display: block; line-height: 1.3;">Students in Chalish, Dhading</strong>
              </div>
            </div>

            <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 14px 20px; display: flex; align-items: center; gap: 14px; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04); text-align: left; min-width: 210px;">
              <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(245, 158, 11, 0.12); color: #F59E0B; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div>
                <span style="font-size: 0.72rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #F59E0B; display: block;">COMMUNITY RELIEF</span>
                <strong style="font-size: 0.92rem; color: #0F172A; display: block; line-height: 1.3;">Earthquake &amp; Ruby Valley</strong>
              </div>
            </div>
          </div>

          <!-- CSR CTA Button -->
          <div style="margin-top: 10px;">
            <button type="button" class="open-inquiry-btn btn btn-primary" data-trek-title="Our CSR &amp; Community Outreach" style="display: inline-flex; align-items: center; gap: 8px; font-weight: 700; border-radius: 9999px; padding: 12px 28px; box-shadow: 0 4px 16px rgba(16, 185, 129, 0.25);">
              <span>See our CSR work</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Horizontal Scrollable Collage Container -->
      <div class="trekking-gallery-container">
        <div class="trekking-gallery-track">

          <!-- Card 1: Tall Portrait (Family Relief Package Distribution) -->
          <div class="gallery-card card-tall" style="background-image: url('images/csr-relief-distribution.jpg');">
            <div class="gallery-card-overlay">
              <span class="gallery-card-badge">EMERGENCY RELIEF</span>
              <h3 class="gallery-card-title">Direct Family Aid</h3>
              <p class="gallery-card-desc">Delivering essential food cartons, cooking utensils, and warm bedding directly to remote mountain families during times of crisis.</p>
            </div>
          </div>

          <!-- Card 2: Wide Landscape (Disaster Response Mission) -->
          <div class="gallery-card card-wide" style="background-image: url('images/csr-flood-relief-mission.jpg');">
            <div class="gallery-card-overlay">
              <span class="gallery-card-badge">DISASTER RESPONSE</span>
              <h3 class="gallery-card-title">Standing with Flood-Affected Communities</h3>
              <p class="gallery-card-desc">Rapid mobilization of mountain logistics and supply trucks to transport vital emergency aid to cut-off valleys following severe monsoon floods.</p>
            </div>
          </div>

          <!-- Card 3: Stacked Column (Digital Education & School Supplies) -->
          <div class="gallery-stacked-col">
            <!-- Top stacked: Digital Classroom -->
            <div class="gallery-card card-stacked-item" style="background-image: url('images/csr-digital-education.jpg');">
              <div class="gallery-card-overlay">
                <span class="gallery-card-badge">EDUCATION</span>
                <h3 class="gallery-card-title">Digital Literacy for Rural Students</h3>
                <p class="gallery-card-desc">Donating laptops, solar chargers, and educational software to empower children in remote Himalayan schools.</p>
              </div>
            </div>
            <!-- Bottom stacked: School Supplies -->
            <div class="gallery-card card-stacked-item" style="background-image: url('images/csr-school-supplies.jpg');">
              <div class="gallery-card-overlay">
                <span class="gallery-card-badge">YOUTH EMPOWERMENT</span>
                <h3 class="gallery-card-title">Books, Uniforms &amp; Grants</h3>
                <p class="gallery-card-desc">Equipping young Himalayan students with textbooks, winter school tracksuits, and scholarships for uninterrupted learning.</p>
              </div>
            </div>
          </div>

          <!-- Card 4: Tall Portrait (Village Community Solidarity) -->
          <div class="gallery-card card-tall" style="background-image: url('images/csr-community-gathering.jpg');">
            <div class="gallery-card-overlay">
              <span class="gallery-card-badge">RURAL DEVELOPMENT</span>
              <h3 class="gallery-card-title">A Global Happy Family</h3>
              <p class="gallery-card-desc">Fostering lasting community partnerships where sustainable trekking revenue directly revitalizes mountain schools, clinics, and villages.</p>
            </div>
          </div>

        </div>
      </div>
    </section>`;

// Replace section in index.html
const startMarker = '<!-- Section 3: Himalayan Trekking Experience Gallery -->';
const endMarker = '<!-- Section 4: Why Namaste Hiking Trek Redesign Section -->';

const startIndex = origContent.indexOf(startMarker);
const endIndex = origContent.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find markers in index.html!');
  process.exit(1);
}

const updatedContent = origContent.slice(0, startIndex) + newSectionHtml + '\n\n    ' + origContent.slice(endIndex);

console.log('Updated index.html check:');
const isBalanced = checkTags(updatedContent, 'Updated');

// Check emojis on newSectionHtml
const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;
const newSectionEmojis = newSectionHtml.match(emojiRegex);
console.log('New section emojis found:', newSectionEmojis ? newSectionEmojis.length : 0);

if (!isBalanced || (newSectionEmojis && newSectionEmojis.length > 0)) {
  console.error('ERROR: Balance or emoji validation failed!');
  process.exit(1);
}

fs.writeFileSync(origPath, updatedContent, 'utf8');
console.log('SUCCESS! index.html updated successfully with Social Responsibility section!');
