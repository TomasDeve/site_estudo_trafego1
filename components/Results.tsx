import React from 'react';
import { Section } from './ui/Section';
import { CheckCircle } from 'lucide-react';

export const Results: React.FC = () => {
  return (
    <Section id="results" className="bg-slate-900 border-y border-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Resultados que falam por si
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Não vendemos cliques, vendemos crescimento. Nossa gestão é baseada 100% em dados e busca incessante por ROI (Retorno sobre Investimento). Veja o que acontece quando aplicamos o método Nexus:
          </p>

          <div className="space-y-4">
            {[
              "E-commerce de Moda: Aumento de 320% no faturamento em 3 meses.",
              "Clínica de Estética: Agenda lotada com Custo por Lead de R$ 8,00.",
              "Infoproduto: Lançamento de 6 dígitos com ROAS 7.",
              "Serviços Locais: Domínio total da primeira página do Google na região."
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary-500 shrink-0 mt-0.5" />
                <span className="text-slate-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Visual Graph/Card representation */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur-lg opacity-30"></div>
          <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl">
            {/* Fake Dashboard UI */}
            <div className="flex justify-between items-center mb-6">
              <div className="space-y-1">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Faturamento Total</p>
                <h4 className="text-3xl font-bold text-white">R$ 142.305,00</h4>
              </div>
              <span className="bg-green-500/10 text-green-500 text-sm font-bold px-3 py-1 rounded-full border border-green-500/20">
                +42% este mês
              </span>
            </div>

            {/* Bars */}
            <div className="flex items-end space-x-2 h-48 mb-6">
              {[40, 65, 55, 80, 70, 95, 85].map((h, i) => (
                <div key={i} className="flex-1 bg-slate-800 rounded-t-sm relative group overflow-hidden">
                  <div 
                    className="absolute bottom-0 left-0 w-full bg-primary-600 transition-all duration-1000 group-hover:bg-primary-500"
                    style={{ height: `${h}%` }}
                  ></div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-slate-800 pt-6">
               <div>
                 <p className="text-xs text-slate-500 mb-1">Custo</p>
                 <p className="text-lg font-bold text-white">R$ 12k</p>
               </div>
               <div>
                 <p className="text-xs text-slate-500 mb-1">Vendas</p>
                 <p className="text-lg font-bold text-white">482</p>
               </div>
               <div>
                 <p className="text-xs text-slate-500 mb-1">ROAS</p>
                 <p className="text-lg font-bold text-primary-500">11.8x</p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};