const fs = require('fs');

const files = [
  'scratch/gen_everest_section1_overview.js',
  'scratch/gen_everest_section2_itinerary.js',
  'scratch/gen_everest_section3_5.js',
  'scratch/gen_everest_section6_accordions.js',
  'scratch/gen_everest_section7_12.js'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');

  // Replace w-5 h-5 text-emerald-700
  content = content.replace(
    /<svg class="w-5 h-5 text-emerald-700"/g,
    '<svg width="20" height="20" class="icon-svg" style="color: #008060; stroke: #008060; vertical-align: middle; flex-shrink: 0;"'
  );

  // Replace w-3.5 h-3.5 text-emerald-700
  content = content.replace(
    /<svg class="w-3.5 h-3.5 text-emerald-700"/g,
    '<svg width="14" height="14" class="icon-svg" style="color: #008060; stroke: #008060; vertical-align: middle; flex-shrink: 0;"'
  );

  // Replace w-5 h-5 text-amber-500
  content = content.replace(
    /<svg class="w-5 h-5 text-amber-500"/g,
    '<svg width="20" height="20" class="icon-svg" style="color: #F59E0B; stroke: #F59E0B; vertical-align: middle; flex-shrink: 0;"'
  );

  // Replace w-5 h-5 plain
  content = content.replace(
    /<svg class="w-5 h-5"/g,
    '<svg width="20" height="20" class="icon-svg" style="vertical-align: middle; flex-shrink: 0;"'
  );

  // Replace w-4 h-4 text-emerald-700
  content = content.replace(
    /<svg class="w-4 h-4 text-emerald-700"/g,
    '<svg width="16" height="16" class="icon-svg" style="color: #008060; stroke: #008060; vertical-align: middle; flex-shrink: 0;"'
  );

  // Replace w-4 h-4 plain
  content = content.replace(
    /<svg class="w-4 h-4"/g,
    '<svg width="16" height="16" class="icon-svg" style="vertical-align: middle; flex-shrink: 0;"'
  );

  // Replace w-4 h-4 fill-current
  content = content.replace(
    /<svg class="w-4 h-4 fill-current"/g,
    '<svg width="16" height="16" style="vertical-align: middle; flex-shrink: 0; fill: #F59E0B;"'
  );

  // Accordions chevron icons
  content = content.replace(
    /<svg class="w-5 h-5 text-gray-400 transform transition-transform duration-200 group-hover:text-emerald-700 flex-shrink-0"/g,
    '<svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;"'
  );

  content = content.replace(
    /<svg class="w-5 h-5 text-gray-400 transform transition-transform duration-200 flex-shrink-0"/g,
    '<svg width="20" height="20" class="icon-svg accordion-chevron" style="color: #64748B; stroke: #64748B; vertical-align: middle; flex-shrink: 0; transition: transform 0.2s;"'
  );

  fs.writeFileSync(f, content, 'utf8');
  console.log('Updated SVGs in', f);
});
