import React from "react";
import { Check, ShieldCheck } from "lucide-react";
import { handleCheckoutClick } from "../config";
import imagemPacoteCompleto from "../assets/images/1a2407bd-2c68-409c-ab80-18ec26e94ce4.webp";

export const OfferSection: React.FC = () => {
  const recapItems = [
    { prefix: "Kit Atividades Grafismo Fonético", text: " ", price: "De R$ 97,00" },
    { prefix: "Bônus 01:", text: " Caderno Extra de Alfabetização ", price: "De R$ 47,00" },
    { prefix: "Bônus 02:", text: " Caderno Progressivo de Leitura ", price: "De R$ 27,00" },
    { prefix: "Bônus 03:", text: " Caderno de Memória das Sílabas ", price: "De R$ 27,00" },
    { prefix: "Bônus 04:", text: " Guia Online de Aplicação ", price: "De R$ 19,90" },
    { prefix: "Suporte Profissional", text: "" },
    { prefix: "Garantia Incondicional", text: "" },
  ];

  return (
    <section id="oferta" className="py-16 bg-[#FDF9EA] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight mb-3">
          Recapitulando tudo o que você vai receber junto com o
        </h2>
        
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-8 bg-[#D4A045] rounded-full"></div>
            <span className="text-2xl md:text-3xl font-bold text-[#4B9C49]">
              Kit Atividades Grafismo Fonético
            </span>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] relative w-full mx-auto px-6 py-10 md:p-12">
          <img src={imagemPacoteCompleto} alt="Kit Completo" loading="lazy" decoding="async" className="w-full max-w-lg mx-auto h-auto block mb-10 object-contain drop-shadow-xl mix-blend-darken" />
          
          <div className="w-full max-w-xl mx-auto space-y-4 mb-10 text-left">
            {recapItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4B9C49] flex items-center justify-center shadow-sm">
                  <Check className="w-4 h-4 text-white stroke-[3]" />
                </div>
                <div className="text-[15px] md:text-[17px] text-slate-700 leading-snug">
                  <span className="font-bold text-slate-800">{item.prefix}</span>
                  <span className="text-slate-600">{item.text}</span>
                  {item.price && (
                    <span className="text-[#D4A045] line-through ml-1">{item.price}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-8 mt-4 flex flex-col items-center">
            <div className="space-y-1 mb-6 text-center">
              <p className="text-[#D4A045] font-bold text-xl line-through opacity-80">De R$ 39,90</p>
              <p className="text-slate-700 text-lg font-bold">Por Apenas:</p>
              <p className="text-[#4B9C49] font-black text-6xl md:text-7xl mb-2 tracking-tighter">R$ 18,90</p>
            </div>
            
            <button onClick={(e) => handleCheckoutClick("premium", e)} id="offer-buy-button" className="w-full md:max-w-md bg-[var(--color-cta)] hover:opacity-90 text-[var(--color-on-action)] py-5 rounded-2xl text-xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-[var(--color-cta)]/30 animate-cta-pulse cursor-pointer">
              👉 Comprar Agora
            </button>
            
            <div className="mt-4 text-center">
              <p className="text-slate-600 font-bold text-sm mb-2 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--color-success)]" /> Compra 100% Segura e Protegida
              </p>
              <p className="text-slate-500 text-xs font-medium">Após a compra, você recebe acesso ao Material em PDF diretamente no seu E-mail</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
