const fs = require('fs');

const s9 = fs.readFileSync('scratch/s9_dump.html', 'utf8');

const custMatch = s9.match(/<div id="customer-reviews"[\s\S]*?(?=<div id="platform-reviews")/);
if (custMatch) {
  console.log('Customer reviews in S9 (first 1000 chars):');
  console.log(custMatch[0].substring(0, 1000));
}

const s14CustMatch = fs.readFileSync('scratch/s14_dump.html', 'utf8').match(/<div id="tab-customer-reviews"[\s\S]*?(?=<div id="tab-video-reviews")/);
if (s14CustMatch) {
  console.log('\nCustomer reviews in S14 (first 1000 chars):');
  console.log(s14CustMatch[0].substring(0, 1000));
}
