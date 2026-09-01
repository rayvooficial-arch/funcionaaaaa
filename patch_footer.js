import fs from 'fs';
const newFooter = `import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-900 text-slate-400 text-center text-sm">
      <div className="container mx-auto px-4">
        <p className="mb-4">
          © 2026 Livro de Grafismo Fonético. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
        </div>
        <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Este site não faz parte do site do Facebook ou da Meta Platforms, Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da META PLATFORMS, INC.
        </p>
      </div>
    </footer>
  );
};
`;
fs.writeFileSync('src/components/Footer.tsx', newFooter);
