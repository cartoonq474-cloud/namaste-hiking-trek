const fs = require('fs');

if (fs.existsSync('scratch/generate_tilicho_16_day_master.js')) {
  const stat = fs.statSync('scratch/generate_tilicho_16_day_master.js');
  console.log('mtime:', stat.mtime);
  console.log(fs.readFileSync('scratch/generate_tilicho_16_day_master.js', 'utf8').slice(0, 1000));
} else {
  console.log('generate_tilicho_16_day_master.js does not exist');
}

