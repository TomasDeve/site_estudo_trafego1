import React from 'react';
import { ArrowRight, TrendingUp, Target, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] -z-10 opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-slate-900/50 border border-slate-800 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          <span className="text-sm text-slate-300 font-medium">Vagas abertas para novos projetos</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Transforme <span className="gradient-text">Cliques</span> em <br className="hidden md:block" />
          <span className="gradient-text">Faturamento Real</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Deixe de gastar dinheiro em campanhas que não convertem. Utilizamos estratégias de dados avançadas para escalar o ROI do seu negócio.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Quero Escalar Meu Negócio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="secondary" size="lg" onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver Resultados
          </Button>
        </div>

        {/* Trust Signals */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl border-t border-slate-800 pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center">
            <div className="bg-slate-900/50 p-3 rounded-lg mb-3">
              <TrendingUp className="h-6 w-6 text-primary-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">+R$ 5 Milhões</h3>
            <p className="text-sm text-slate-500">Gerenciados em Ads</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-slate-900/50 p-3 rounded-lg mb-3">
              <Target className="h-6 w-6 text-primary-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">5x a 10x</h3>
            <p className="text-sm text-slate-500">ROAS Médio (Retorno)</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-slate-900/50 p-3 rounded-lg mb-3">
              <ShieldCheck className="h-6 w-6 text-primary-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">100% Seguro</h3>
            <p className="text-sm text-slate-500">Contratos com Garantia</p>
          </div>
        </div>

      </div>
    </div>
  );
};