const fs = require('fs');

let html = fs.readFileSync('trek/kanchenjunga-base-camp-trek/index.html', 'utf8');

// Fix stray tags near line 5250
html = html.replace(
  /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/main>\s*<!-- Inquiry Modal -->/,
  `</div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n  <!-- Inquiry Modal -->`
);

const tags = ['div', 'section', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'span', 'ul', 'li', 'button', 'a', 'main', 'article'];
for (const t of tags) {
  const o = (html.match(new RegExp('<' + t + '[\\s>]', 'gi')) || []).length;
  const c = (html.match(new RegExp('</' + t + '>', 'gi')) || []).length;
  console.log(`${t}: open=${o}, close=${c}, diff=${o - c}`);
}
