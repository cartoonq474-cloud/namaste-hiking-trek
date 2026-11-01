const fs = require('fs');
const { execSync } = require('child_process');

const filePath = 'trek/everest-base-camp-trek/index.html';
const content = fs.readFileSync(filePath, 'utf8');

// Extract photos from HEAD~1 to ensure 100% clean photo grid markup with its closing </div>
const orig = execSync('git show HEAD~1:trek/everest-base-camp-trek/index.html', { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });

const cleanPhotos = {};
for (let d = 1; d <= 14; d++) {
  const dayStr = d < 10 ? '0' + d : '' + d;
  const startComment = `<!-- Day ${dayStr} -->`;
  const nextDayStr = (d + 1) < 10 ? '0' + (d + 1) : '' + (d + 1);
  const endComment = d < 14 ? `<!-- Day ${nextDayStr} -->` : '<!-- Custom Itinerary';
  
  const dStart = orig.indexOf(startComment);
  const dEnd = orig.indexOf(endComment, dStart);
  
  const chunk = orig.substring(dStart, dEnd);
  const pStart = chunk.indexOf('<div class="itinerary-photos-grid">');
  // It has 4 photos, each with <div class="itinerary-photo-wrapper">...</div>
  // followed by </div> that closes itinerary-photos-grid
  // followed by </div> (itinerary-content-inner), </div> (itinerary-content), </div> (itinerary-card)
  const pEndPattern = '</div>\n                  </div>\n                </div>\n              </div>';
  const pEndPatternCRLF = '</div>\r\n                  </div>\r\n                </div>\r\n              </div>';
  
  let pEnd = chunk.indexOf(pEndPattern);
  if (pEnd === -1) pEnd = chunk.indexOf(pEndPatternCRLF);
  
  if (pStart !== -1 && pEnd !== -1) {
    cleanPhotos[d] = chunk.substring(pStart, pEnd).trim();
  } else {
    console.error(`Could not extract clean photos for Day ${d}`);
  }
}

console.log('Clean photos extracted for days:', Object.keys(cleanPhotos));

// Verify that each extracted photo grid has matching div count
for (let d = 1; d <= 14; d++) {
  const grid = cleanPhotos[d];
  const opens = (grid.match(/<div/g) || []).length;
  const closes = (grid.match(/<\/div>/g) || []).length;
  console.log(`Day ${d} photo grid opens: ${opens}, closes: ${closes}, diff: ${opens - closes}`);
}
