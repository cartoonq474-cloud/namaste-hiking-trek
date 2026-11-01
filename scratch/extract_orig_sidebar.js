const fs = require('fs');
const orig = fs.readFileSync('scratch/original_git_everest_view.html', 'utf8');

const faqsEnd = orig.indexOf('</section>\n\n        </div>\n\n        <!-- Sticky Booking Sidebar Column -->');
if (faqsEnd !== -1) {
  console.log('Found sidebar start! Length from here to end:', orig.length - faqsEnd);
  fs.writeFileSync('scratch/orig_sidebar_and_bottom.html', orig.slice(faqsEnd + 10), 'utf8');
} else {
  console.log('Not exact match, searching for sidebar-booking-card...');
  const cardIndex = orig.indexOf('<div class="sidebar-booking-card"');
  console.log('cardIndex:', cardIndex);
  const divBefore = orig.lastIndexOf('</div>', cardIndex);
  console.log('divBefore:', divBefore);
  fs.writeFileSync('scratch/orig_sidebar_and_bottom.html', orig.slice(divBefore), 'utf8');
}
