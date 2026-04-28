const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    if (fs.statSync(file).isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.css')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(process.cwd(), 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Catch any remaining Colors
  content = content.replace(/#E8C547/gi, '#f36a22');
  content = content.replace(/rgba\(232,\s*197,\s*71/g, 'rgba(243,106,34');

  // 2. Button text visibility (dark text on yellow -> white text on orange)
  content = content.replace(/color:\s*'#0D0D1A'/g, "color: '#ffffff'");

  // 3. Fonts
  content = content.replace(/family=Inter[^']+/g, 'family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
  content = content.replace(/'Inter'/g, "'Plus Jakarta Sans'");

  // 4. Section Padding (6rem to 5rem)
  content = content.replace(/padding:\s*'6rem 0'/g, "padding: '5rem 0'");

  // 5. Hero & Revenue Gradients
  content = content.replace(/#2A1060/g, '#3A1800');
  content = content.replace(/#F5A623/g, '#f59644');

  // 6. Checkmark alignment in Products
  content = content.replace(/fontWeight:\s*700\s*}}\s*>\s*✓/g, "fontWeight: 700, flexShrink: 0 }}>✓");

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`✅ Fixed: ${path.basename(file)}`);
  }
});
