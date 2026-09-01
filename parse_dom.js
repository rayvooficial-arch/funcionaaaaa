import fs from 'fs';
const bundle = fs.readFileSync('temp_bundle.js', 'utf8');

const idRegex = /id:"([^"]+)"/g;
let match;
const ids = [];
while ((match = idRegex.exec(bundle)) !== null) {
  ids.push(match[1]);
}
console.log("IDs found:", [...new Set(ids)]);

