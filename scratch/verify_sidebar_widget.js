const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

const testFiles = [
  'tour/kathmandu-cultural-heritage-tour/index.html',
  'tour/pokhara-valley-nature-tour/index.html',
  'tour/kathmandu-pokhara-chitwan-tour/index.html',
  'tour/chitwan-national-park-safari/index.html',
  'tour/nagarkot-sunrise-bhaktapur-tour/index.html',
  'tour/nepal-luxury-helicopter-tour/index.html',
  'trek/everest-base-camp-trek/index.html',
  'trek/annapurna-circuit-trek/index.html',
  'trek/manaslu-circuit-trek/index.html'
];

let allPassed = true;

testFiles.forEach(relPath => {
  const filePath = path.join(projectRoot, relPath);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing file: ${relPath}`);
    allPassed = false;
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  
  const hasBestSeller = content.includes('BEST SELLER');
  const hasFromLabel = content.includes('>FROM</span>');
  const hasGroupDiscount = content.includes('WE OFFER GROUP DISCOUNT');
  const hasMakeEnquiry = content.includes('Make an Enquiry');
  const hasInstantHelp = content.includes('INSTANT HELP') && content.includes('Call or WhatsApp');
  const hasWhatsAppBtn = content.includes('wa.me/9779800000000');
  const hasPhoneBtn = content.includes('tel:+9779800000000');

  const filePassed = hasBestSeller && hasFromLabel && hasGroupDiscount && hasMakeEnquiry && hasInstantHelp && hasWhatsAppBtn && hasPhoneBtn;
  
  if (!filePassed) {
    allPassed = false;
    console.error(`FAIL: ${relPath} -> BestSeller: ${hasBestSeller}, FromLabel: ${hasFromLabel}, GroupDiscount: ${hasGroupDiscount}, EnquiryBtn: ${hasMakeEnquiry}, InstantHelp: ${hasInstantHelp}`);
  } else {
    console.log(`PASS: ${relPath}`);
  }
});

if (allPassed) {
  console.log('\nSUCCESS: All sample tour & trek detail pages verified with the exact new sticky sidebar CTA widget!');
}
