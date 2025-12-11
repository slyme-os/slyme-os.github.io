import React, { useState, useEffect } from 'react';
import { Download, Terminal } from 'lucide-react';
import { SlymeLogo } from './SlymeLogo';

export const TerminalHero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Initializing SLYME OS... \n> Arch Linux Core... DETECTED \n> Ollama Local AI... ONLINE \n> Privacy Shield... ACTIVE \n> Big Tech Telemetry... BLOCKED \n> Welcome to the Future.";
  
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 35);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center p-4 border-b border-slyme-accent/30 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm z-0"></div>
      
      <div className="z-10 w-full max-w-6xl space-y-8 flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Terminal Window */}
        <div className="w-full md:w-2/3 border border-slyme-green/50 bg-black/80 rounded-lg shadow-[0_0_20px_rgba(0,255,65,0.2)] overflow-hidden flex flex-col">
          <div className="bg-slyme-dim px-4 py-2 flex items-center gap-2 border-b border-slyme-green/30">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-xs text-slyme-green/70 font-mono flex items-center gap-1">
              <Terminal size={10} />
              root@slyme-os:~
            </span>
          </div>
          
          <div className="p-8 font-mono text-sm md:text-base min-h-[400px] flex flex-col relative">
            {/* Background Logo Watermark in Terminal */}
            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none p-8">
               <SlymeLogo className="w-64 h-64" animated={false} />
            </div>

            <div className="flex flex-col items-center mb-8 border-b border-slyme-green/20 pb-8">
              <SlymeLogo className="w-32 h-32 md:w-40 md:h-40" withText={true} animated={true} />
            </div>
            
            <div className="whitespace-pre-line text-slyme-green leading-relaxed z-10">
              {text}
              <span className="animate-pulse-fast inline-block w-2 h-4 bg-slyme-green ml-1 align-middle"></span>
            </div>
            
            <div className="mt-auto pt-8">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tighter drop-shadow-lg">
                RECLAIM YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-slyme-green to-slyme-cyan">INTELLIGENCE</span>
              </h1>
              <p className="text-gray-400 max-w-2xl mb-8 font-mono text-sm">
                The Arch-based operating system that puts YOU in control. <br/>
                Private. Local. Unfiltered AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-6 py-3 bg-slyme-green text-black font-bold font-mono uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_10px_rgba(0,255,65,0.4)]">
                  <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                  <Download size={20} />
                  Download ISO
                </button>
                <button className="px-6 py-3 border border-slyme-green text-slyme-green font-mono uppercase tracking-widest hover:bg-slyme-green/10 transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_10px_rgba(0,255,65,0.2)]">
                  <Terminal size={20} />
                  Documentation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Side Stats / Decor */}
        <div className="hidden md:flex flex-col gap-6 w-1/3 pt-4">
           <div className="p-6 border border-slyme-green/30 bg-black/40 backdrop-blur hover:border-slyme-green transition-colors group">
              <h4 className="text-slyme-green text-xs font-bold mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-slyme-green rounded-full animate-pulse"></div>
                LATEST BUILD
              </h4>
              <p className="text-white font-mono text-3xl mb-1 group-hover:text-slyme-cyan transition-colors">v1.0.4</p>
              <p className="text-gray-500 text-xs font-mono">Kernel 6.8.9-arch1</p>
           </div>
           
           <div className="p-6 border border-slyme-green/30 bg-black/40 backdrop-blur hover:border-slyme-green transition-colors">
              <h4 className="text-slyme-green text-xs font-bold mb-3">LOCAL LLMS</h4>
              <div className="flex flex-wrap gap-2">
                 {['Llama 3', 'Mistral', 'Gemma', 'Phi-3'].map(model => (
                   <span key={model} className="px-2 py-1 bg-slyme-green/5 text-slyme-green text-xs font-mono border border-slyme-green/20 hover:bg-slyme-green hover:text-black cursor-default transition-colors">
                     {model}
                   </span>
                 ))}
              </div>
           </div>

           <div className="p-6 border border-slyme-green/30 bg-black/40 backdrop-blur">
              <h4 className="text-slyme-green text-xs font-bold mb-3">STATUS</h4>
              <div className="space-y-2 font-mono text-xs text-gray-400">
                <div className="flex justify-between">
                  <span>Mirrors</span>
                  <span className="text-slyme-green">ONLINE</span>
                </div>
                <div className="flex justify-between">
                  <span>AUR</span>
                  <span className="text-slyme-green">SYNCED</span>
                </div>
                <div className="flex justify-between">
                  <span>Ollama</span>
                  <span className="text-slyme-green">READY</span>
                </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};
