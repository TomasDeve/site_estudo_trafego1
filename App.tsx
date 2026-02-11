import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Results } from './components/Results';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloater } from './components/WhatsAppFloater';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-primary-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Results />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloater />
    </div>
  );
}

export default App;