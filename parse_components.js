import fs from 'fs';
const bundle = fs.readFileSync('temp_bundle.js', 'utf8');

// Find function declarations starting with capital letters
const componentRegex = /function ([A-Z][a-zA-Z0-9_]+)\([^)]*\)\{/g;
let match;
const components = [];
while ((match = componentRegex.exec(bundle)) !== null) {
  components.push(match[1]);
}
console.log("Components found:", [...new Set(components)]);

