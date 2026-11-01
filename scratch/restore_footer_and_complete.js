const { execSync } = require('child_process');
const fs = require('fs');

// Get the original HEAD version of the footer and following elements
const headHtml = execSync('git show HEAD:trek/annapurna-circuit-trek/index.html', { maxBuffer: 10 * 1024 * 1024 }).toString('utf8');

// Find the You might also like and footer in headHtml
const youMightLikeStart = headHtml.indexOf('<!-- You Might Also Like Section -->');
console.log('You might like start in HEAD:', youMightLikeStart);

if (youMightLikeStart !== -1) {
  const footerAndEnd = headHtml.slice(youMightLikeStart);
  console.log('footerAndEnd length:', footerAndEnd.length);

  // Now read current index.html
  let currentHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');
  console.log('currentHtml length before fix:', currentHtml.length);

  // Ensure the container for main content and sidebar is properly closed
  // Currently the file ends after the sidebar card
  // Let's check how currentHtml ends:
  const lastSidebarDiv = currentHtml.lastIndexOf('</div>');
  console.log('lastSidebarDiv at:', lastSidebarDiv);

  // Let's close the grid container and section wrapper, then append footerAndEnd:
  // The structure was:
  // <section class="section-padding" style="padding-top: 10px;" data-trek-details-wrapper data-trek-key="annapurna_circuit">
  //   <div class="container" style="display: grid; grid-template-columns: 2.2fr 1fr; gap: 40px;">
  //     <div style="min-width: 0;"> ... main sections ... </div>
  //     <div> ... sidebar booking card ... </div>
  //   </div>
  // </section>
  
  // Let's check where the sidebar ends in currentHtml
  const sidebarClosing = currentHtml.indexOf('</div>\n          </div>\n        </div>');
  console.log('sidebarClosing at:', sidebarClosing);

  // Trim anything broken after sidebar and cleanly close section and append footerAndEnd
  const cleanEndIndex = currentHtml.lastIndexOf('</div>\n        </div>');
  const cleanBase = currentHtml.slice(0, cleanEndIndex + '</div>\n        </div>'.length);

  const finalHtml = cleanBase + '\n      </div>\n    </section>\n\n  ' + footerAndEnd;
  fs.writeFileSync('trek/annapurna-circuit-trek/index.html', finalHtml, 'utf8');
  console.log('Fixed index.html successfully! New length:', finalHtml.length);
} else {
  console.log('Could not find You Might Like in HEAD!');
}
