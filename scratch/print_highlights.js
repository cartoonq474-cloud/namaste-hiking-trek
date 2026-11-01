const content = require('./data_abc_content.js');
content.highlights.forEach((h, i) => {
  console.log(`${i+1}. ${h.title}`);
});
