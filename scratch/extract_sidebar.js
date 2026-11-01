const fs = require('fs');
const ebc = fs.readFileSync('trek/everest-base-camp-trek/index.html', 'utf8');

const startIdx = ebc.indexOf('<!-- Sticky Booking Sidebar Column -->');
if (startIdx !== -1) {
  // Find where it ends
  const endIdx = ebc.indexOf('<!-- /Sticky Booking Sidebar Column -->', startIdx);
  if (endIdx !== -1) {
    fs.writeFileSync('scratch/ebc_sidebar.html', ebc.slice(startIdx, endIdx + 39));
    console.log('Saved ebc_sidebar.html via comment');
  } else {
    // Look for closing tags
    const snippet = ebc.slice(startIdx, startIdx + 8000);
    const endDiv = snippet.indexOf('</aside>');
    if (endDiv !== -1) {
      fs.writeFileSync('scratch/ebc_sidebar.html', snippet.slice(0, endDiv + 8));
      console.log('Saved ebc_sidebar.html via </aside>');
    } else {
      fs.writeFileSync('scratch/ebc_sidebar.html', snippet);
      console.log('Saved ebc_sidebar.html snippet');
    }
  }
}
