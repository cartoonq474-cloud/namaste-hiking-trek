try {
  require('puppeteer');
  console.log('puppeteer is installed');
} catch (e) {
  console.log('puppeteer not installed');
}
try {
  require('playwright');
  console.log('playwright is installed');
} catch (e) {
  console.log('playwright not installed');
}
