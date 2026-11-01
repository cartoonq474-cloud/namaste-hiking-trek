const fs = require('fs');
const path = require('path');

// Read the original file
let html = fs.readFileSync('trek/everest-view-trek/index.html', 'utf8');

// Load partials
const sec1Additions = fs.readFileSync(path.join(__dirname, 'sec1_additions.html'), 'utf8');
const customTripCta = fs.readFileSync(path.join(__dirname, 'custom_trip_cta.html'), 'utf8');
const sec3Full = fs.readFileSync(path.join(__dirname, 'sec3_full.html'), 'utf8');
const sec4Full = fs.readFileSync(path.join(__dirname, 'sec4_full.html'), 'utf8');
const sec10Full = fs.readFileSync(path.join(__dirname, 'sec10_full.html'), 'utf8');

// 1. UPDATE SECTION 1 (Overview + Highlights + Why Book)
const s1Start = html.indexOf('<section id="section-overview"');
const s1End = html.indexOf('</section>', s1Start);
const oldHlComment = html.indexOf('<!-- 16 RICH THEMED HIGHLIGHTS CARDS -->', s1Start);

if (oldHlComment !== -1 && oldHlComment < s1End) {
  html = html.slice(0, oldHlComment) + sec1Additions + '\n        ' + html.slice(s1End);
  console.log('[1/6] Section 1 separated into Overview, Highlights & Why Book!');
} else {
  console.error('ERROR: Could not locate old highlights in Section 1');
}

// 2. INSERT CUSTOM TRIP CTA AFTER SECTION 2
const s2Marker = html.indexOf('</section>', html.indexOf('<section id="section-itinerary"')) + 10;
html = html.slice(0, s2Marker) + '\n' + customTripCta + html.slice(s2Marker);
console.log('[2/6] Custom Trip CTA card inserted after Section 2!');

// 3. UPDATE SECTION 3 (Separated Includes and Excludes)
const s3Start = html.indexOf('<section id="section-includes"');
const s3End = html.indexOf('</section>', s3Start) + 10;
html = html.slice(0, s3Start) + sec3Full + html.slice(s3End);
console.log('[3/6] Section 3 separated into distinct Includes & Excludes blocks!');

// 4. UPDATE SECTION 4 (Dates Mode Toggle & Standard Parity)
const s4Start = html.indexOf('<section id="section-dates"');
const s4End = html.indexOf('</section>', s4Start) + 10;
html = html.slice(0, s4Start) + sec4Full + html.slice(s4End);
console.log('[4/6] Section 4 updated with Group/Private toggle and departure rows!');

// 5. UPDATE SECTION 10 (4-Step Booking Workflow)
const s10Start = html.indexOf('<section id="section-booking"');
const s10End = html.indexOf('</section>', s10Start) + 10;
html = html.slice(0, s10Start) + sec10Full + html.slice(s10End);
console.log('[5/6] Section 10 upgraded to 4-step booking workflow cards!');

// 6. ADD EXPEDITION CONSULTATION BANNER BEFORE </article>
const consultationBanner = `
  <!-- Expedition Consultation Banner (EBC Flagship Standard) -->
  <section class="consultation-banner-section" style="background: linear-gradient(135deg, #0C2B4E 0%, #173B63 100%); padding: 50px 0; color: white; margin-top: 50px; border-radius: 16px;">
    <div style="padding: 0 24px; max-width: 1100px; margin: 0 auto;">
      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px;">
        <div style="max-width: 620px;">
          <span style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #48CAE4; display: block; margin-bottom: 6px;">24/7 Sherpa Himalayan Desk</span>
          <h2 style="font-size: 1.85rem; font-weight: 800; color: #FFFFFF; line-height: 1.25; margin-bottom: 10px;">Himalayan Expedition Expertise at Your Service</h2>
          <p style="font-size: 0.98rem; color: #E2E8F0; line-height: 1.6; margin-bottom: 0;">
            Have questions about altitude pacing, Lukla flights, or custom itineraries? Speak directly with our Kathmandu expedition operations coordinators.
          </p>
        </div>
        <div style="display: flex; align-items: center; gap: 14px; flex-wrap: wrap;">
          <a href="https://wa.me/9779800000000" target="_blank" rel="noopener" class="btn-whatsapp" style="display: inline-flex; align-items: center; gap: 8px; background: #25D366; color: #FFFFFF; font-weight: 700; font-size: 0.92rem; padding: 12px 22px; border-radius: 8px; text-decoration: none; box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4); transition: transform 0.2s;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.333 4.988l-1.417 5.176 5.297-1.389c1.458.796 3.103 1.215 4.773 1.216h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.669-1.039-5.176-2.926-7.063a9.923 9.923 0 0 0-7.063-2.927zm0 1.666c4.587 0 8.324 3.737 8.324 8.324 0 2.224-.866 4.314-2.441 5.889a8.272 8.272 0 0 1-5.888 2.438h-.003c-1.493 0-2.955-.399-4.232-1.156l-.304-.18-3.14.823.837-3.058-.198-.315a8.283 8.283 0 0 1-1.272-4.444c.001-4.587 3.739-8.324 8.326-8.324zm-3.626 4.321c-.227 0-.594.085-.905.424-.311.339-1.187 1.159-1.187 2.825 0 1.666 1.216 3.277 1.385 3.503.17.226 2.392 3.652 5.795 5.122.81.35 1.442.559 1.936.716.814.258 1.554.222 2.139.135.652-.097 2.007-.82 2.29-1.611.283-.791.283-1.469.198-1.611-.085-.141-.311-.226-.65-.396s-2.007-.99-2.318-1.103c-.311-.113-.538-.17-.764.17s-.877 1.103-1.075 1.329c-.198.226-.396.254-.735.085-.339-.17-1.433-.528-2.73-1.685-1.01-.901-1.691-2.013-1.89-2.352-.198-.339-.021-.522.148-.691.153-.153.339-.396.509-.594.17-.198.226-.339.339-.565.113-.226.057-.424-.028-.594-.085-.17-.764-1.838-1.047-2.516-.275-.661-.555-.572-.764-.582-.198-.01-.424-.012-.651-.012z"/>
            </svg>
            Chat on WhatsApp
          </a>
          <a href="tel:+9779800000000" class="btn-phone" style="display: inline-flex; align-items: center; gap: 8px; background: rgba(255, 255, 255, 0.12); color: #FFFFFF; font-weight: 700; font-size: 0.92rem; padding: 12px 22px; border-radius: 8px; text-decoration: none; border: 1px solid rgba(255, 255, 255, 0.25); transition: background 0.2s;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            +977 980-0000000
          </a>
        </div>
      </div>
    </div>
  </section>\n`;

const articleEnd = html.indexOf('</article>');
if (articleEnd !== -1) {
  html = html.slice(0, articleEnd) + consultationBanner + '    ' + html.slice(articleEnd);
  console.log('[6/6] Expedition Consultation banner added before </article>!');
} else {
  console.error('ERROR: Could not locate </article>');
}

// 7. CLEAN UP ANY LINGERING UNICODE EMOJIS
const starSvg = `<svg width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B" stroke="none" style="display:inline-block; vertical-align:middle;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
html = html.replace(/⭐/g, starSvg);
console.log('[7/7] Replaced any unicode stars with SVG stars.');

// Save to scratch/full_parity_ready.html
fs.writeFileSync(path.join(__dirname, 'full_parity_ready.html'), html, 'utf8');
console.log('Saved scratch/full_parity_ready.html, length:', html.length);
