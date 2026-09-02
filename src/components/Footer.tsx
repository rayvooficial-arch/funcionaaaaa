import React from "react";
import logoFooter from "../assets/images/logo_footer.png";
export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-900 text-slate-400 text-center text-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <img src={logoFooter} alt="Logo" className="max-w-[200px] w-full h-auto opacity-70 hover:opacity-100 transition-opacity" />
        </div>
        <p className="mb-4">© 2026 Ler e Brincar. Todos os direitos reservados.</p>
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
