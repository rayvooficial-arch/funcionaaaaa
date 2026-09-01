import fs from 'fs';
const bundle = fs.readFileSync('temp_bundle.js', 'utf8');

// Use a regex to find typical react component rendering elements, classNames, or text content
const reactStrings = bundle.match(/(?:children|text):"([^"]+)"/g) || [];
console.log("Found texts:", [...new Set(reactStrings)].slice(0, 150));

const classNames = bundle.match(/className:"([^"]+)"/g) || [];
console.log("\nFound classes:", [...new Set(classNames)].slice(0, 100));

