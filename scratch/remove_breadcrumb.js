const fs = require('fs');

const targetPath = 'trek/upper-mustang-trek/index.html';
let html = fs.readFileSync(targetPath, 'utf8');

const targetStr = `      <!-- Breadcrumb -->
      <nav class="breadcrumb" aria-label="Breadcrumb" style="margin-bottom: 20px;">
        <a href="../../">Home</a>
        <span class="breadcrumb-separator">/</span>
        <a href="../../nepal-trekking-packages/">All Treks</a>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-current">Upper Mustang Trek</span>
      </nav>

`;

if (!html.includes(targetStr)) {
  console.log('Target string not found with exact spacing, trying regex...');
  const regex = /\s*<!-- Breadcrumb -->\s*<nav class="breadcrumb"[\s\S]*?<\/nav>\s*/;
  if (regex.test(html)) {
    html = html.replace(regex, '\n      ');
    console.log('Replaced with regex successfully.');
  } else {
    console.error('Could not find breadcrumb markup!');
    process.exit(1);
  }
} else {
  html = html.replace(targetStr, '');
  console.log('Replaced exact target string successfully.');
}

fs.writeFileSync(targetPath, html, 'utf8');
console.log('Saved changes to index.html.');
