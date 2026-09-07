import React from "react";
import { XCircle, CheckCircle2 } from "lucide-react";

export const TransformationSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#FCE354] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Antes */}
          <div className="flex-1 bg-white/80 p-8 rounded-3xl text-left border border-white/40 shadow-sm relative overflow-hidden">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-500" />
              </span>
              O que acontece hoje:
            </h3>
            <ul className="space-y-4">
              <li className="text-slate-600 font-medium text-lg">"Não quero fazer."</li>
              <li className="text-slate-600 font-medium text-lg">"Não consigo."</li>
              <li className="text-slate-600 font-medium text-lg">"Não entendi."</li>
              <li className="text-slate-600 font-medium text-lg">"É difícil."</li>
            </ul>
          </div>

          {/* Depois */}
          <div className="flex-1 bg-white p-8 rounded-3xl text-left shadow-xl relative overflow-hidden ring-4 ring-white/50">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              </span>
              Como deve ser:
            </h3>
            <ul className="space-y-4">
              <li className="text-emerald-700 font-bold text-lg">"Eu reconheço!"</li>
              <li className="text-emerald-700 font-bold text-lg">"Eu consegui!"</li>
              <li className="text-emerald-700 font-bold text-lg">"Olha o que eu fiz!"</li>
              <li className="text-emerald-700 font-bold text-lg">"Posso tentar de novo?"</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[32px] p-8 md:p-10 shadow-2xl">
          <p className="text-white text-xl md:text-2xl font-black leading-snug mb-4">
            Porque no final, você não está comprando atividades.
          </p>
          <p className="text-yellow-400 text-2xl md:text-3xl font-black leading-tight">
            Você está criando mais oportunidades para seu filho aprender com confiança.
          </p>
        </div>

      </div>
    </section>
  );
};
