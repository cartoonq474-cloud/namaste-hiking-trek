const fs = require('fs');

let html = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8');

html = html.replace(
  /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/main>\s*<!-- Inquiry Modal -->/,
  `</div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n  <!-- Inquiry Modal -->`
);

const lines = html.split('\n');
let balance = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const o = (line.match(/<div[\s>]/gi) || []).length;
  const c = (line.match(/<\/div>/gi) || []).length;
  balance += (o - c);
  if (balance < 0) {
    console.log(`Negative balance at line ${i + 1}: balance=${balance}, content: ${line.trim()}`);
    break;
  }
}
