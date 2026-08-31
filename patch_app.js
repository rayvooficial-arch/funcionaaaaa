import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf-8');
code = code.replace(
  'import React from "react";',
  'import React, { useEffect } from "react";\nimport { trackEvent } from "./config";'
);
code = code.replace(
  'export default function App() {',
  `export default function App() {
  useEffect(() => {
    trackEvent("ViewContent", {
      content_name: "Kit Alfabetizacao Home",
      content_category: "Landing Page",
    });
  }, []);`
);
fs.writeFileSync('src/App.tsx', code);
