import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  if (formState === 'success') {
    return (
      <Section id="contact" className="bg-slate-950 relative overflow-hidden">
        <div className="max-w-xl mx-auto text-center py-20">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Solicitação Recebida!</h2>
          <p className="text-slate-400 text-lg mb-8">
            Obrigado pelo interesse. Nossa equipe de especialistas analisará seu perfil e entrará em contato via WhatsApp em até 2 horas úteis.
          </p>
          <Button onClick={() => setFormState('idle')} variant="outline">
            Enviar outra mensagem
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <Section id="contact" className="bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vamos Escalar o Seu Negócio?
          </h2>
          <p className="text-slate-400 text-lg">
            Preencha o formulário abaixo para agendar uma consultoria de análise gratuita.
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Seu Nome</label>
                <input 
                  required
                  id="name"
                  type="text" 
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-slate-600"
                  placeholder="João Silva"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-slate-300">Nome da Empresa</label>
                <input 
                  required
                  id="company"
                  type="text" 
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-slate-600"
                  placeholder="Sua Empresa Ltda"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Corporativo</label>
                <input 
                  required
                  id="email"
                  type="email" 
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-slate-600"
                  placeholder="joao@empresa.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-300">WhatsApp</label>
                <input 
                  required
                  id="phone"
                  type="tel" 
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder-slate-600"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className="text-sm font-medium text-slate-300">Investimento Mensal em Ads</label>
              <select 
                id="budget"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              >
                <option value="new">Ainda não anuncio</option>
                <option value="1k-5k">R$ 1.000 a R$ 5.000</option>
                <option value="5k-15k">R$ 5.000 a R$ 15.000</option>
                <option value="15k-50k">R$ 15.000 a R$ 50.000</option>
                <option value="50k+">Acima de R$ 50.000</option>
              </select>
            </div>

            <Button 
              type="submit" 
              fullWidth 
              size="lg" 
              disabled={formState === 'submitting'}
              className="mt-4"
            >
              {formState === 'submitting' ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processando...
                </span>
              ) : (
                <span className="flex items-center">
                  Solicitar Consultoria Gratuita
                  <Send className="ml-2 h-5 w-5" />
                </span>
              )}
            </Button>
            
            <p className="text-xs text-center text-slate-500 mt-4">
              Seus dados estão seguros. Não enviamos spam.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
};