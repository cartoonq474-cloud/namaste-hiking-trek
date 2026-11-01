const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Replace the logo-text-group in index.html
const target = `<a href="index.html" class="logo-brand">
        <img src="images/logo.png" alt="Namaste Hiking Trek Logo" style="height: 54px; width: auto; object-fit: contain;">
        <div class="logo-text-group">
          <span class="brand-title">NAMASTE</span>
          <span class="brand-subtitle">HIKING TREK</span>
        </div>
      </a>`;

const replacement = `<a href="index.html" class="logo-brand" aria-label="Namaste Hiking Trek">
        <img src="images/logo.png" alt="Namaste Hiking Trek Logo" style="height: 54px; width: auto; object-fit: contain;">
      </a>`;

if (content.includes(target.replace(/\r?\n/g, '\r\n'))) {
  content = content.replace(target.replace(/\r?\n/g, '\r\n'), replacement.replace(/\r?\n/g, '\r\n'));
  fs.writeFileSync('index.html', content, 'utf8');
  console.log('Successfully updated index.html');
} else {
  console.log('Target not found with CRLF, trying LF');
  if (content.includes(target.replace(/\r?\n/g, '\n'))) {
    content = content.replace(target.replace(/\r?\n/g, '\n'), replacement.replace(/\r?\n/g, '\n'));
    fs.writeFileSync('index.html', content, 'utf8');
    console.log('Successfully updated index.html with LF');
  } else {
    console.log('Could not find target');
  }
}
