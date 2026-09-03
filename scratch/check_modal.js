const fs = require('fs');

const files = [
  'tours.html',
  'tours-nepal/index.html',
  'tour/kathmandu-cultural-heritage-tour/index.html',
  'tour/pokhara-valley-nature-tour/index.html',
  'tour/kathmandu-pokhara-chitwan-tour/index.html',
  'tour/chitwan-national-park-safari/index.html',
  'tour/nagarkot-sunrise-bhaktapur-tour/index.html',
  'tour/nepal-luxury-helicopter-tour/index.html'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const hasModal = content.includes('id="inquiry-modal"');
  const hasMegaMenu = content.includes('mega-menu.js');
  const hasInquiryJS = content.includes('inquiry-modal.js');
  const hasHeaderScroll = content.includes('header-scroll.js');
  console.log(`${f} => Modal: ${hasModal}, MegaMenuJS: ${hasMegaMenu}, InquiryJS: ${hasInquiryJS}, HeaderScrollJS: ${hasHeaderScroll}`);
});
