const fs = require('fs');

const path = 'nepal-trekking-packages/index.html';
let html = fs.readFileSync(path, 'utf8');

const startIdx = html.indexOf('<!-- Trek Card 17 -->');
const endIdx = html.indexOf('<!-- Trek Card 18 -->');

if (startIdx !== -1 && endIdx !== -1) {
  const newCard = `<!-- Trek Card 17 -->
          <div class="card trek-item" data-region="annapurna" data-duration="long" data-difficulty="challenging">
            <div style="position: relative; height: 220px; overflow: hidden;">
              <img src="../images/treks/annapurna-circuit/annapurna-circuit-tilicho-lake-trekking-group-tilicho-lake-18.jpg" alt="Annapurna Circuit Trek with Tilicho Lake" style="width:100%; height:100%; object-fit:cover;">
              <span class="badge badge-alpine" style="position: absolute; top: 12px; left: 12px;">Annapurna Region</span>
            </div>
            <div style="padding: 24px;">
              <h3 style="font-size: 1.3rem; margin-bottom: 8px;">Annapurna Circuit with Tilicho Lake</h3>
              <p style="font-size: 0.9rem; color: var(--color-neutral-600); margin-bottom: 16px;">Visit high glacial Tilicho Lake (4,919m) and cross Thorong La Pass (5,416m) with domestic flights.</p>
              <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 20px; font-size: 0.85rem; color: var(--color-neutral-700);">
                <span>⏱️ 16 Days</span>
                <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg> 5,416 m</span>
                <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><path d="M13 4v16M17 4v16M7 4v16M3 4h18M3 20h18"/></svg><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><path d="M13 4v16M17 4v16M7 4v16M3 4h18M3 20h18"/></svg> Challenging</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--color-neutral-100); padding-top: 16px;">
                <div>
                  <span style="font-size: 0.75rem; color: var(--color-neutral-500); display: block;">Starting from</span>
                  <span style="font-size: 1.25rem; font-weight: 700; color: var(--color-primary-navy);">$1,249</span>
                </div>
                <a href="../trek/annapurna-circuit-trek-with-tilicho-lake/" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.9rem;">View Itinerary</a>
              </div>
            </div>
          </div>\n\n          `;
  
  html = html.slice(0, startIdx) + newCard + html.slice(endIdx);
  fs.writeFileSync(path, html, 'utf8');
  console.log('Successfully updated Trek Card 17 in nepal-trekking-packages/index.html');
} else {
  console.log('Could not find startIdx or endIdx');
}
