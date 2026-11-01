const fs = require('fs');

let html = fs.readFileSync('trek/mera-peak-climbing/index.html', 'utf8');

const regex = /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<!-- Inquiry Modal -->/;
if (regex.test(html)) {
  html = html.replace(regex, '</div>\n        </div>\n      </div>\n    </section>\n\n  <!-- Inquiry Modal -->');
  fs.writeFileSync('trek/mera-peak-climbing/index.html', html, 'utf8');
  console.log('Successfully adjusted closing divs!');
} else {
  console.error('Regex target not found!');
}

