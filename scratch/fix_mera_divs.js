const fs = require('fs');

let html = fs.readFileSync('trek/mera-peak-climbing-trek/index.html', 'utf8');

const regex = /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/;
if (regex.test(html)) {
  html = html.replace(regex, '</div>\n          </div>\n        </div>\n    </section>');
  fs.writeFileSync('trek/mera-peak-climbing-trek/index.html', html, 'utf8');
  console.log('Successfully fixed tag balance in trek/mera-peak-climbing-trek/index.html!');
} else {
  console.log('Regex did not match!');
}

