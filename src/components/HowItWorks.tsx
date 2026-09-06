import React from "react";
import { ShoppingCart, Download, Printer, GraduationCap, Heart } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "1. COMPRAR",
      desc: "Pagamento 100% seguro via PIX ou cartão.",
      icon: ShoppingCart,
      bgClass: "bg-pink-50/70",
      iconBgClass: "bg-pink-100",
      textClass: "text-pink-500",
    },
    {
      id: 2,
      title: "2. RECEBER",
      desc: "Acesso liberado em minutos no seu e-mail.",
      icon: Download,
      bgClass: "bg-indigo-50/70",
      iconBgClass: "bg-indigo-100",
      textClass: "text-indigo-500",
    },
    {
      id: 3,
      title: "3. IMPRIMIR",
      desc: "Use impresso ou direto no tablet/celular.",
      icon: Printer,
      bgClass: "bg-emerald-50/70",
      iconBgClass: "bg-emerald-100",
      textClass: "text-emerald-500",
    },
    {
      id: 4,
      title: "4. APLICAR",
      desc: "10 minutinhos por dia já mostram resultado.",
      icon: GraduationCap,
      bgClass: "bg-blue-50/70",
      iconBgClass: "bg-blue-100",
      textClass: "text-blue-500",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="inline-block bg-sky-100 text-sky-600 font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">
          Como Funciona
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-3 tracking-tight">
          4 passos <span className="text-pink-500">simples</span>
        </h2>
        
        <p className="text-slate-500 font-medium mb-10 text-lg">
          Você compra e recebe seu acesso rapidinho!
        </p>

        <div className="space-y-4 max-w-2xl mx-auto flex flex-col items-center">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`w-full flex items-center p-4 md:p-6 rounded-3xl ${step.bgClass} transition-transform hover:scale-[1.02] shadow-sm`}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full flex items-center justify-center ${step.iconBgClass} mr-5 md:mr-6 shadow-sm`}>
                <step.icon className={`w-8 h-8 md:w-10 md:h-10 ${step.textClass}`} strokeWidth={2.5} />
              </div>
              <div className="text-left">
                <h3 className={`font-black text-xl md:text-2xl tracking-tight mb-1 ${step.textClass}`}>
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base font-medium leading-snug">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center text-slate-500 font-medium text-sm">
          <Heart className="w-4 h-4 text-pink-400 mr-2 fill-current" />
          Simples, rápido e feito para você!
        </div>
      </div>
    </section>
  );
};
