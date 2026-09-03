const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const trekDir = path.join(projectRoot, 'trek');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Detect base price and days if present
  let priceMatch = content.match(/data-base-price="(\d+)"/) || content.match(/data-price-usd="(\d+)"/) || content.match(/\$(\d{3,4})/);
  let basePrice = priceMatch ? parseInt(priceMatch[1], 10) : 1299;

  let daysMatch = content.match(/(\d+)\s*days?\s*trip/i) || content.match(/(\d+)\s*Days/i);
  let tripDays = daysMatch ? parseInt(daysMatch[1], 10) : 14;

  let titleMatch = content.match(/data-trek-title="([^"]+)"/) || content.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  let trekTitle = titleMatch ? titleMatch[1].replace(/—.*/, '').trim() : 'Everest Base Camp Trek';

  const newSidebarHtml = `<div class="sidebar-booking-card">
              
              <!-- Top Right Best Seller Ribbon Badge -->
              <div style="position: absolute; top: 18px; right: 0; background: #F59E0B; color: #FFFFFF; font-size: 0.72rem; font-weight: 800; padding: 5px 14px; border-radius: 4px 0 0 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 2px 6px rgba(245, 158, 11, 0.3);">
                BEST SELLER
              </div>

              <!-- Pricing Header -->
              <span style="font-size: 0.75rem; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">FROM</span>
              <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 16px; flex-wrap: wrap;">
                <span style="font-size: 2.5rem; font-weight: 800; color: #0F172A; line-height: 1;">$${basePrice.toLocaleString()}</span>
                <span style="font-size: 0.92rem; color: #64748B; font-weight: 500;">/ person</span>
                <a href="#section-itinerary" style="font-size: 0.92rem; color: #475569; font-weight: 600; text-decoration: underline; margin-left: 4px;">${tripDays} days trip</a>
              </div>

              <!-- Group Discount Accordion Toggle -->
              <div class="group-discount-toggle" onclick="const table = this.nextElementSibling; const arrow = this.querySelector('.gd-arrow'); if (table.style.display === 'none') { table.style.display = 'block'; arrow.style.transform = 'rotate(180deg)'; } else { table.style.display = 'none'; arrow.style.transform = 'rotate(0deg)'; }" style="border-top: 1px dashed #CBD5E1; border-bottom: 1px dashed #CBD5E1; padding: 10px 0; margin-bottom: 18px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none;">
                <span style="font-size: 0.78rem; font-weight: 800; color: #0F172A; text-transform: uppercase; letter-spacing: 0.04em;">WE OFFER GROUP DISCOUNT</span>
                <span class="gd-arrow" style="font-size: 0.85rem; color: #0F172A; transition: transform 0.2s ease;">▼</span>
              </div>

              <!-- Group Discount Table (Hidden by default, expandable) -->
              <div class="group-discount-content" style="display: none; margin-bottom: 18px; background: #F8FAFC; border-radius: 10px; padding: 12px; font-size: 0.85rem; border: 1px solid #E2E8F0;">
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">2 - 4 Persons</span>
                  <strong style="color: #0F172A;">$${Math.round(basePrice * 0.95).toLocaleString()} / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid #E2E8F0;">
                  <span style="color: #64748B;">5 - 8 Persons</span>
                  <strong style="color: #0F172A;">$${Math.round(basePrice * 0.90).toLocaleString()} / person</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 4px 0;">
                  <span style="color: #64748B;">9+ Persons</span>
                  <strong style="color: #047857;">$${Math.round(basePrice * 0.85).toLocaleString()} / person (Best Deal)</strong>
                </div>
              </div>

              <!-- Action Buttons -->
              <button class="btn open-inquiry-btn" data-trek-title="${trekTitle}" style="width: 100%; padding: 14px; background: #008060; color: #FFFFFF; border: none; border-radius: 50px; font-size: 1.05rem; font-weight: 800; cursor: pointer; margin-bottom: 12px; box-shadow: 0 4px 14px rgba(0, 128, 96, 0.25); transition: background 0.2s;">
                Book Now
              </button>
              <button class="btn open-inquiry-btn" data-trek-title="${trekTitle}" style="width: 100%; padding: 12px; background: #FFFFFF; color: #0F172A; border: 1px solid #CBD5E1; border-radius: 50px; font-size: 0.98rem; font-weight: 700; cursor: pointer; margin-bottom: 22px;">
                Make an Enquiry
              </button>

              <!-- 5 Bullet Features with Emerald Sparkles -->
              <ul style="list-style: none; padding: 0; margin: 0 0 20px 0; display: flex; flex-direction: column; gap: 11px;">
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Trek Leading by well trained Team</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Hassle-Free & Instant Booking</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>100% Customers Satisfaction</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>Reasonable Price & Best Service</span>
                </li>
                <li style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem; font-weight: 600; color: #334155;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#008060" style="flex-shrink: 0;"><path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z"/></svg>
                  <span>No Hidden Cost & Secure Payment</span>
                </li>
              </ul>

              <!-- Bottom Instant Help Footer Section -->
              <div style="border-top: 1px dashed #CBD5E1; padding-top: 18px; display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <span style="font-size: 0.72rem; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 2px;">INSTANT HELP</span>
                  <strong style="font-size: 1.05rem; font-weight: 800; color: #0F172A;">Call or WhatsApp</strong>
                </div>

                <!-- Phone & WhatsApp Round Buttons -->
                <div style="display: flex; align-items: center; gap: 10px;">
                  <!-- Phone Call Button -->
                  <a href="tel:+9779800000000" aria-label="Call Us" style="width: 44px; height: 44px; border-radius: 50%; border: 1px solid #CBD5E1; background: #FFFFFF; display: flex; align-items: center; justify-content: center; color: #0F172A; text-decoration: none; transition: all 0.2s;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </a>

                  <!-- WhatsApp Button -->
                  <a href="https://wa.me/9779800000000" target="_blank" rel="noopener" aria-label="WhatsApp Us" style="width: 44px; height: 44px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center; color: #FFFFFF; text-decoration: none; box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3); transition: all 0.2s;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.333 4.988l-1.417 5.176 5.297-1.389c1.458.796 3.103 1.215 4.773 1.216h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.669-1.039-5.176-2.926-7.063a9.923 9.923 0 0 0-7.063-2.927zm0 1.666c4.587 0 8.324 3.737 8.324 8.324 0 2.224-.866 4.314-2.441 5.889a8.272 8.272 0 0 1-5.888 2.438h-.003c-1.493 0-2.955-.399-4.232-1.156l-.304-.18-3.14.823.837-3.058-.198-.315a8.283 8.283 0 0 1-1.272-4.444c.001-4.587 3.739-8.324 8.326-8.324zm-3.626 4.321c-.227 0-.594.085-.905.424-.311.339-1.187 1.159-1.187 2.825 0 1.666 1.216 3.277 1.385 3.503.17.226 2.392 3.652 5.795 5.122.81.35 1.442.559 1.936.716.814.258 1.554.222 2.139.135.652-.097 2.007-.82 2.29-1.611.283-.791.283-1.469.198-1.611-.085-.141-.311-.226-.65-.396s-2.007-.99-2.318-1.103c-.311-.113-.538-.17-.764.17s-.877 1.103-1.075 1.329c-.198.226-.396.254-.735.085-.339-.17-1.433-.528-2.73-1.685-1.01-.901-1.691-2.013-1.89-2.352-.198-.339-.021-.522.148-.691.153-.153.339-.396.509-.594.17-.198.226-.339.339-.565.113-.226.057-.424-.028-.594-.085-.17-.764-1.838-1.047-2.516-.275-.661-.555-.572-.764-.582-.198-.01-.424-.012-.651-.012z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>`;

  // Pattern to replace old sidebar column content inside <div style="position: sticky; top: ..."> or similar
  const regex = /<div style="position: sticky; top:[^>]+>[\s\S]*?<!-- Bottom help contact section -->[\s\S]*?<\/div>\s*<\/div>/i;
  
  if (regex.test(content)) {
    content = content.replace(regex, newSidebarHtml);
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

if (fs.existsSync(trekDir)) {
  const folders = fs.readdirSync(trekDir);
  let updatedCount = 0;
  folders.forEach(folder => {
    const indexPath = path.join(trekDir, folder, 'index.html');
    if (fs.existsSync(indexPath)) {
      if (processFile(indexPath)) {
        console.log(`Updated sidebar CTA widget in: trek/${folder}/index.html`);
        updatedCount++;
      }
    }
  });
  console.log(`Total Trek Pages updated with new sidebar CTA widget: ${updatedCount}`);
}
