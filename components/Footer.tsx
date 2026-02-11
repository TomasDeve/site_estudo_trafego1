import React from 'react';
import { BarChart2, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart2 className="h-6 w-6 text-primary-500" />
              <span className="text-xl font-bold text-white">Nexus<span className="text-primary-500">Growth</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Especialistas em gestão de tráfego pago e inteligência de dados para negócios que buscam escala.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary-400">Google Ads</a></li>
              <li><a href="#" className="hover:text-primary-400">Facebook Ads</a></li>
              <li><a href="#" className="hover:text-primary-400">Consultoria</a></li>
              <li><a href="#" className="hover:text-primary-400">Web Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary-400">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary-400">Cases</a></li>
              <li><a href="#" className="hover:text-primary-400">Contato</a></li>
              <li><a href="#" className="hover:text-primary-400">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
             <div className="flex space-x-4">
               <a href="#" className="text-slate-400 hover:text-white transition-colors">
                 <Instagram className="h-5 w-5" />
               </a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors">
                 <Linkedin className="h-5 w-5" />
               </a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors">
                 <Twitter className="h-5 w-5" />
               </a>
             </div>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Nexus Growth. Todos os direitos reservados.
          </p>
          <p className="text-slate-700 text-xs mt-2 md:mt-0">
            Desenvolvido com foco em conversão.
          </p>
        </div>
      </div>
    </footer>
  );
};