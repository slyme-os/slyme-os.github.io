import React, { useState } from 'react';
import { TerminalHero } from './components/TerminalHero';
import { Features } from './components/Features';
import { AIChatTerminal } from './components/AIChatTerminal';
import { Footer } from './components/Footer';
import { SlymeLogo } from './components/SlymeLogo';
import { ChevronRight } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white scanlines font-mono selection:bg-slyme-green selection:text-black">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur border-b border-slyme-green/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">
          <div className="flex items-center gap-3 group cursor-pointer z-20">
            <div className="relative">
              <div className="absolute inset-0 bg-slyme-green blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
              <SlymeLogo className="w-8 h-8 md:w-10 md:h-10 relative z-10" animated={false} />
            </div>
            <span className="font-display font-bold tracking-widest text-lg md:text-xl group-hover:text-slyme-green transition-colors">
              SLYME<span className="text-slyme-green">_OS</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm text-gray-400 font-mono">
            <a href="#" className="hover:text-slyme-green transition-colors hover:shadow-[0_2px_0_0_#00ff41]">/home</a>
            <a href="#" className="hover:text-slyme-green transition-colors hover:shadow-[0_2px_0_0_#00ff41]">/features</a>
            <a href="#" className="hover:text-slyme-green transition-colors hover:shadow-[0_2px_0_0_#00ff41]">/docs</a>
            <a href="#" className="text-black bg-slyme-green px-4 py-1 hover:bg-white transition-colors font-bold">/download</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-20">
             <button 
               onClick={toggleMenu}
               className="text-slyme-green hover:text-white transition-colors focus:outline-none flex items-center gap-2 select-none"
             >
               <span className="text-xl font-bold font-display tracking-widest">
                 {isMobileMenuOpen ? 'Close_[x]' : 'Menu_'}
               </span>
             </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`md:hidden absolute top-16 left-0 w-full bg-black/98 border-b border-slyme-green/30 backdrop-blur-xl transition-all duration-300 ease-in-out overflow-hidden shadow-[0_10px_30px_rgba(0,255,65,0.1)] ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
             <div className="flex flex-col p-6 space-y-3 font-mono">
                {['home', 'features', 'docs'].map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-4 border border-slyme-green/10 bg-slyme-dim/30 hover:border-slyme-green hover:bg-slyme-green/10 text-gray-300 hover:text-slyme-green transition-all group rounded-sm"
                  >
                     <span className="text-lg">/{item}</span>
                     <ChevronRight size={18} className="text-slyme-green opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
                
                <a 
                  href="#" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 bg-slyme-green text-black font-bold p-4 uppercase tracking-widest hover:bg-white transition-colors shadow-[0_0_15px_rgba(0,255,65,0.4)] rounded-sm"
                >
                   <span>Download_ISO</span>
                   <span className="animate-pulse">_</span>
                </a>
                
                <div className="pt-4 flex justify-between text-xs text-gray-600 font-mono border-t border-gray-900 mt-2">
                   <span>v1.0.4</span>
                   <span>System: <span className="text-slyme-green">ONLINE</span></span>
                </div>
             </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <TerminalHero />
        <Features />
        
        {/* Manifesto / Divider */}
        <section className="py-32 bg-slyme-green text-black text-center relative overflow-hidden">
           {/* Watermark Logo */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none mix-blend-multiply">
              <SlymeLogo className="w-[600px] h-[600px] animate-pulse-fast" style={{animationDuration: '5s'}} />
           </div>
           
           <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent opacity-50"></div>
           <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent opacity-50"></div>

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter mb-8 relative drop-shadow-sm">
              Data is the new oil. <br/> Don't let them drill you.
            </h2>
            <div className="inline-block relative">
               <div className="absolute inset-0 bg-black translate-x-2 translate-y-2"></div>
               <p className="relative text-xl md:text-2xl font-bold max-w-3xl mx-auto border-4 border-black p-8 bg-white text-black transform hover:-translate-y-1 hover:-translate-x-1 transition-transform cursor-crosshair">
                  SLYME OS is the antidote to the surveillance capitalism of modern operating systems.
               </p>
            </div>
          </div>
        </section>

        <AIChatTerminal />
        
        {/* Newsletter / Terminal Input */}
        <section className="py-24 bg-black border-b border-gray-900 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:20px_20px]">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-display font-bold text-white mb-6 tracking-widest">JOIN THE NODE NETWORK</h3>
            <div className="max-w-md mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-slyme-green to-slyme-cyan opacity-20 group-hover:opacity-40 blur transition duration-200"></div>
              <div className="relative flex">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slyme-green font-mono z-10">{'>'}</span>
                <input 
                  type="email" 
                  placeholder="enter_email_address..." 
                  className="w-full bg-black border border-gray-800 text-slyme-green p-4 pl-10 font-mono focus:border-slyme-green focus:outline-none focus:ring-1 focus:ring-slyme-green transition-all"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-slyme-green text-black px-6 font-bold hover:bg-white transition-colors uppercase text-sm tracking-wider">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;