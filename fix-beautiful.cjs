const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src', 'components');
if (!fs.existsSync(srcDir)) process.exit(0);

const replace = (filename, rules) => {
  const filePath = path.join(srcDir, filename);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  rules.forEach(([regex, replacement]) => {
    content = content.replace(regex, replacement);
  });
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✨ Beautified: ${filename}`);
  }
};

// 1. GLOBAL LAYOUT: Enforce max-width and massive breathing room
fs.readdirSync(srcDir).forEach(file => {
  if (file.endsWith('.jsx')) {
    let content = fs.readFileSync(path.join(srcDir, file), 'utf8');
    // Upgrade containers for a premium, spacious look
    content = content.replace(/max-w-6xl mx-auto px-6( w-full)?/g, 'max-w-7xl mx-auto px-8 md:px-16 w-full');
    fs.writeFileSync(path.join(srcDir, file), content, 'utf8');
  }
});

// 2. PRODUCTS: Fix cramped cards and buttons
replace('Products.jsx', [
  // Ensure the card text wrapper has huge padding
  [/className="p-6"/g, 'className="p-8 md:p-10 flex flex-col flex-1 w-full"'],
  [/className="p-7"/g, 'className="p-8 md:p-10 flex flex-col flex-1 w-full"'],
  // Upgrade the buttons to be full-width block buttons
  [/className="inline-flex items-center gap-1\.5 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"/g, 'className="flex items-center justify-center w-full gap-2 px-8 py-4 mt-8 rounded-xl text-base font-bold text-white transition-all hover:bg-[#d4561a] hover:scale-[1.02]"'],
  // Fix bullet point alignment
  [/className="flex items-center gap-2"/g, 'className="flex items-start gap-3 mb-3"'],
  [/style={{ fontSize: '13px', color: '#B8B5C8' }}/g, 'style={{ fontSize: '15px', color: '#B8B5C8', lineHeight: '1.6' }}']
]);

// 3. WHY IPAK: Fix bleeding cards and alignment
replace('WhyIPak.jsx', [
  // Center headings
  [/className="font-extrabold"/g, 'className="font-extrabold text-center w-full"'],
  [/className="font-semibold uppercase tracking-widest mb-3"/g, 'className="font-semibold uppercase tracking-widest mb-3 text-center w-full block"'],
  // Add massive internal padding to cards
  [/className="rounded-2xl p-6"/g, 'className="rounded-2xl p-8 md:p-10"']
]);

// 4. REVENUE: Fix bar chart and card cramp
replace('Revenue.jsx', [
  // Center subtitle
  [/className="mx-auto text-center leading-relaxed"/g, 'className="mx-auto text-center leading-relaxed mt-4"'],
  // Add padding to cards
  [/className="rounded-2xl p-6"/g, 'className="rounded-2xl p-8 md:p-10 flex flex-col"'],
  // Add padding to the basket builder
  [/className="rounded-2xl p-8 md:p-10"/g, 'className="rounded-2xl p-10 md:p-14"']
]);

// 5. CONSULTATION FORM: Center form and make it pop
replace('ConsultationForm.jsx', [
  // Center the text headings
  [/className="font-extrabold mb-4"/g, 'className="font-extrabold mb-4 text-center w-full block"'],
  [/className="text-center mb-12"/g, 'className="text-center mb-16 max-w-3xl mx-auto w-full"'],
  // Wrap the form in a beautiful, padded card
  [/<form /g, '<form className="max-w-2xl mx-auto w-full bg-[#161626] p-8 md:p-12 rounded-3xl border border-[#252540] shadow-2xl" '],
  // Ensure the submit button is massive
  [/className="w-full py-3 px-6 rounded-lg font-bold text-white transition-opacity"/g, 'className="w-full py-5 px-6 rounded-xl font-bold text-white text-lg transition-all hover:bg-[#d4561a] hover:scale-[1.02]"']
]);

// 6. ABOUT: Space out the columns
replace('About.jsx', [
  [/className="grid md:grid-cols-2 gap-16 items-center"/g, 'className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"']
]);

