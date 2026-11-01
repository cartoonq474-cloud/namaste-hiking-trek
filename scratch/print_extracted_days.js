const fs = require('fs');

const days = JSON.parse(fs.readFileSync('scratch/gokyo_days_data.json', 'utf8'));

days.forEach(d => {
  console.log(`Day ${d.dayNum}: ${d.title}`);
  console.log('  Metrics:', d.metrics.map(m => `${m.label}: ${m.val}`).join(' | '));
  console.log('  Text length:', d.text.length, 'Images count:', d.images.length);
});
