const { execSync } = require('child_process');
const fs = require('fs');

const headHtml = execSync('git show HEAD:trek/annapurna-circuit-trek/index.html', { maxBuffer: 10 * 1024 * 1024 }).toString('utf8');

const ymlIdx = headHtml.indexOf('<section class="you-might-like-section">');
console.log('ymlIdx in HEAD:', ymlIdx);

const footerAndScripts = headHtml.slice(ymlIdx);
console.log('footerAndScripts length:', footerAndScripts.length);

let currentHtml = fs.readFileSync('trek/annapurna-circuit-trek/index.html', 'utf8');

// Find where sidebar ends in currentHtml:
// In currentHtml, the sidebar ends with:
//           </div>
//         </div>
//       </div>
//     </section>
const sidebarCardEnd = currentHtml.lastIndexOf('<!-- Trust & Guarantee Highlights -->');
console.log('sidebarCardEnd found at:', sidebarCardEnd);

// Let's find the closing </div> of sidebar-booking-card after that
const nextClosing = currentHtml.indexOf('</div>\n        </div>', sidebarCardEnd);
console.log('nextClosing at:', nextClosing);

const cleanBase = currentHtml.slice(0, nextClosing + '</div>\n        </div>'.length);

const finalHtml = cleanBase + '\n      </div>\n    </section>\n\n  ' + footerAndScripts;

fs.writeFileSync('trek/annapurna-circuit-trek/index.html', finalHtml, 'utf8');
console.log('Successfully completed index.html! Final length:', finalHtml.length);
