import fs from 'fs';

// 6. BonusesSection
fs.writeFileSync('src/components/BonusesSection.tsx', `import React from "react";
import { Gift } from "lucide-react";

export const BonusesSection: React.FC = () => {
  const bonuses = [
    { title: "+200 Atividades Extras de Alfabetização", desc: "Material complementar para reforçar ainda mais o aprendizado da criança com novas atividades práticas, simples e muito eficazes!", price: "R$ 47,00" },
    { title: "Treino Progressivo de Leitura por Sílabas", desc: "Atividades progressivas por sílabas que ajudam a criança a evoluir na leitura de forma leve e natural!", price: "R$ 27,00" },
    { title: "Jogo da Memória das Sílabas", desc: "Material pronto que transforma o aprendizado das sílabas em uma brincadeira educativa, ajudando a fixar sons e palavras!", price: "R$ 27,00" },
    { title: "Guia Online de Aplicação Passo a Passo", desc: "Aprenda como aplicar corretamente todas as atividades, mesmo sem experiência, e evite qualquer dúvida durante o processo!", price: "R$ 19,90" }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-10 font-bold text-slate-800 tracking-tight">
          E ainda você recebe <span className="text-[var(--color-primary)]">4 Bônus Grátis:</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-[var(--color-primary)]/20 relative shadow-sm">
              <div className="absolute -top-3 -right-3 bg-[var(--color-success)] text-white px-3 py-1 rounded-full text-xs font-black uppercase shadow-sm">Grátis</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[var(--color-primary)]/10 p-2 rounded-lg"><Gift className="w-5 h-5 text-[var(--color-primary)]" /></div>
                <h3 className="text-lg font-bold text-slate-800 leading-snug">{bonus.title}</h3>
              </div>
              <p className="text-slate-600 mb-6 text-sm font-medium">{bonus.desc}</p>
              <div className="flex justify-between items-center border-t border-slate-100 pt-3">
                <span className="text-slate-400 line-through text-sm font-bold">Valor Total: {bonus.price}</span>
                <span className="text-[var(--color-success)] font-black">Hoje: R$ 0,00</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
`);

// 7. OfferSection
fs.writeFileSync('src/components/OfferSection.tsx', `import React from "react";
import { Check, ShieldCheck, Lock } from "lucide-react";
import { handleCheckoutClick } from "../config";
import imagemPacoteCompleto from "../assets/images/9b00a708-b82d-4654-ac51-40dcbb85adcb.jpg";

export const OfferSection: React.FC = () => {
  return (
    <section id="oferta" className="py-12 bg-slate-50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl mb-10 font-bold text-slate-800 tracking-tight">
          +400 Atividades de Grafismo Fonético <span className="text-[var(--color-primary)]">+ 4 Bônus Exclusivos</span>
        </h2>
        <div className="bg-white rounded-[32px] border-2 border-[var(--color-primary)] overflow-hidden shadow-lg relative max-w-2xl mx-auto">
          <img src={imagemPacoteCompleto} alt="Kit Completo" className="w-full h-auto block max-h-[350px] object-cover" />
          <div className="p-6 md:p-8 pt-4 md:pt-4 flex flex-col items-center">
            <div className="space-y-1 mb-6 text-center">
              <p className="text-[var(--color-cta)] font-bold text-lg line-through opacity-80">De R$ 67,00</p>
              <p className="text-slate-700 text-lg font-bold">Por Apenas:</p>
              <p className="text-[var(--color-primary)] font-display font-black text-6xl mb-2">R$ 9,90</p>
            </div>
            <div className="w-full max-w-sm mx-auto space-y-3 mb-8 text-left">
              {[
                "+400 Atividades de Grafismo Fonético",
                "+200 Atividades Extras de Alfabetização",
                "App para apoio",
                "Leitura progressiva por sílabas",
                "Jogo da Memória das Sílabas",
                "Garantia de 7 dias",
                "Acesso Imediato e Vitalício"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-start gap-[10px]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[var(--color-primary)] flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-[var(--color-primary)] stroke-[3]" />
                  </div>
                  <span className="font-bold text-slate-800 text-sm md:text-base tracking-tight leading-snug">{feat}</span>
                </div>
              ))}
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
`);

// 8. Testimonials
fs.writeFileSync('src/components/Testimonials.tsx', `import React from "react";
import { Star } from "lucide-react";

export const Testimonials: React.FC = () => {
  const depoimentos = [
    { nome: "Ana Paula", texto: "Material incrível! Meu filho de 5 anos amou e faz as atividades todo dia sem reclamar." },
    { nome: "Marcos T.", texto: "Estava com muita dificuldade de prender a atenção da minha filha, esse método salvou nossa rotina." },
    { nome: "Carla R.", texto: "A didática é ótima, do básico ao avançado, recomendo muito para quem tem crianças na alfabetização." },
    { nome: "Juliana", texto: "Imprimi ontem e já estamos usando. A qualidade é excelente, bem divertido!" },
    { nome: "Fernanda S.", texto: "Comprei pelo preço, mas me surpreendi com a quantidade de conteúdo que recebi." },
    { nome: "Beatriz M.", texto: "Os bônus são um diferencial gigante. O jogo da memória ajudou demais a fixar as sílabas." }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-10 font-bold text-slate-800 tracking-tight">
          Veja o que <span className="text-[var(--color-primary)]">estão dizendo</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((d, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-[var(--color-yellow)] text-[var(--color-yellow)]" />)}
              </div>
              <p className="text-slate-600 font-medium italic mb-4 flex-grow">"{d.texto}"</p>
              <p className="font-bold text-slate-800 text-sm">— {d.nome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
`);

