import React from 'react';
import { Section } from './ui/Section';
import { Search, Facebook, BarChart, PenTool, Globe, Smartphone } from 'lucide-react';

const ServiceCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="glass-card p-8 rounded-2xl hover:border-primary-500/50 transition-all duration-300 group hover:-translate-y-1">
    <div className="bg-slate-800 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
      <div className="text-primary-400 group-hover:text-white">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

export const Services: React.FC = () => {
  const services = [
    {
      title: "Google Ads (PPC)",
      desc: "Coloque sua empresa no topo das pesquisas no exato momento em que seu cliente procura por você. Foco total em fundo de funil.",
      icon: <Search className="h-7 w-7" />
    },
    {
      title: "Meta Ads (Social)",
      desc: "Anúncios persuasivos no Facebook e Instagram para gerar desejo, reconhecimento de marca e vendas diretas com criativos de alta conversão.",
      icon: <Facebook className="h-7 w-7" />
    },
    {
      title: "Tracking Avançado",
      desc: "Configuração profissional de Pixel, API de Conversão e Google Analytics 4 (GA4) para você saber exatamente de onde vem cada venda.",
      icon: <BarChart className="h-7 w-7" />
    },
    {
      title: "Landing Pages",
      desc: "Criação de páginas de alta conversão. Não adianta ter tráfego qualificado se a sua página não vende.",
      icon: <Globe className="h-7 w-7" />
    },
    {
      title: "Criativos que Convertem",
      desc: "Roteiros e direcionamento para criação de anúncios em vídeo e imagem que chamam a atenção e geram cliques.",
      icon: <PenTool className="h-7 w-7" />
    },
    {
      title: "Remarketing Estratégico",
      desc: "Recupere os usuários que visitaram seu site mas não compraram. O lucro real mora no remarketing bem feito.",
      icon: <Smartphone className="h-7 w-7" />
    }
  ];

  return (
    <Section id="services" className="bg-slate-950">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Como Podemos <span className="text-primary-500">Ajudar</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Nossa metodologia cobre todo o funil de vendas, desde a atração até a conversão e fidelização do cliente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </Section>
  );
};