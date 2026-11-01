const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Backup current logo.png
fs.copyFileSync('images/logo.png', 'scratch/current_logo_backup.png');

// Copy tight crop logo
fs.copyFileSync('scratch/test_tight_logo.png', 'images/logo.png');

// Test with 70px height
let html = fs.readFileSync('index.html', 'utf8');
const origHtml = html;

// Replace height: 54px with height: 70px in index.html
html = html.replace('style="height: 54px; width: auto; object-fit: contain;"', 'style="height: 70px; width: auto; object-fit: contain;"');
fs.writeFileSync('index.html', html, 'utf8');

// Update index.css
let css = fs.readFileSync('index.css', 'utf8');
const origCss = css;
css = css.replace('.logo-brand img {\r\n  height: 54px;', '.logo-brand img {\r\n  height: 70px;');
if (!css.includes('height: 70px;')) {
  css = css.replace('.logo-brand img {\n  height: 54px;', '.logo-brand img {\n  height: 70px;');
}
fs.writeFileSync('index.css', css, 'utf8');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDesktop = path.resolve(__dirname, 'preview_logo_70px_desktop.png');
const outMobile = path.resolve(__dirname, 'preview_logo_70px_mobile.png');

try {
  execSync(`"${chromePath}" --headless --disable-gpu --screenshot="${outDesktop}" --window-size=1280,800 http://127.0.0.1:8080/`);
  execSync(`"${chromePath}" --headless --disable-gpu --screenshot="${outMobile}" --window-size=375,667 http://127.0.0.1:8080/`);
  console.log('Screenshots generated successfully!');
} catch (e) {
  console.error('Error generating screenshots:', e.message);
} finally {
  // Restore files so we don't dirty working tree before user approves plan
  fs.writeFileSync('index.html', origHtml, 'utf8');
  fs.writeFileSync('index.css', origCss, 'utf8');
  fs.copyFileSync('scratch/current_logo_backup.png', 'images/logo.png');
  console.log('Restored index.html, index.css, and images/logo.png');
}
