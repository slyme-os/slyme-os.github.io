import React from 'react';
import { TerminalHero } from './components/TerminalHero';
import { Features } from './components/Features';
import { AIChatTerminal } from './components/AIChatTerminal';
import { Footer } from './components/Footer';
import { SlymeLogo } from './components/SlymeLogo';

function App() {
  return (
    <div className="min-h-screen bg-black text-white scanlines font-mono selection:bg-slyme-green selection:text-black">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur border-b border-slyme-green/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-slyme-green blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
              <SlymeLogo className="w-8 h-8 md:w-10 md:h-10 relative z-10" animated={false} />
            </div>
            <span className="font-display font-bold tracking-widest text-lg md:text-xl group-hover:text-slyme-green transition-colors">
              SLYME<span className="text-slyme-green">_OS</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400 font-mono">
            <a href="#" className="hover:text-slyme-green transition-colors hover:shadow-[0_2px_0_0_#00ff41]">/home</a>
            <a href="#" className="hover:text-slyme-green transition-colors hover:shadow-[0_2px_0_0_#00ff41]">/features</a>
            <a href="#" className="hover:text-slyme-green transition-colors hover:shadow-[0_2px_0_0_#00ff41]">/docs</a>
            <a href="#" className="text-black bg-slyme-green px-4 py-1 hover:bg-white transition-colors font-bold">/download</a>
          </div>
          {/* Mobile Menu Icon Placeholder */}
          <div className="md:hidden text-slyme-green cursor-pointer">
             <span className="text-xl font-bold">Menu_</span>
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
