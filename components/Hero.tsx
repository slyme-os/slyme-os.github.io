import React, { useState, useEffect } from 'react';
import { Github, Download, Terminal as TerminalIcon } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "UNFILTERED INTELLIGENCE_";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center relative z-10">
      {/* Text Content */}
      <div className="space-y-8 animate-[fadeIn_1s_ease-out]">
        <div className="inline-block px-3 py-1 bg-slime-500 text-black text-xs font-bold uppercase tracking-wider transform -skew-x-12">
          ARCH LINUX BASED
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight min-h-[3.5em] lg:min-h-[2.5em]">
          <span className="text-glow">{text}</span>
        </h1>
        
        <p className="text-lg text-gray-400 max-w-lg leading-relaxed border-l-2 border-slime-500/30 pl-6 relative">
          <span className="absolute -left-[2px] top-0 h-1/3 w-[2px] bg-slime-500"></span>
          Slyme OS is a minimalist, open-source operating system designed to disrupt big tech. Featuring <span className="text-slime-500 font-bold">local AI via Ollama</span> for unfiltered access and absolute privacy.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href="#" 
            className="group relative overflow-hidden px-8 py-3 bg-slime-500 text-black font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 clip-path-button shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)]"
            style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-5 h-5 animate-pulse" /> 
              Download .ISO
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
          </a>
          
          <a 
            href="https://github.com/slyme-os" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-600 hover:border-slime-500 text-gray-300 hover:text-slime-500 hover:bg-slime-900/20 uppercase tracking-wider transition-all duration-300 flex items-center gap-2 group"
          >
             <Github className="w-5 h-5" />
             Source Code
          </a>
        </div>
      </div>

      {/* Interactive Terminal Visual */}
      <div className="relative group perspective-1000">
        {/* Decorative elements */}
        <div className="absolute -inset-1 bg-gradient-to-r from-slime-500 to-emerald-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse-fast"></div>
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-slime-500/10 rounded-full blur-2xl"></div>

        {/* Terminal Window */}
        <div className="relative bg-black/90 backdrop-blur-xl border border-gray-800 rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.01] group-hover:-rotate-1">
          {/* Terminal Header */}
          <div className="bg-gray-900/80 px-4 py-3 flex items-center gap-2 border-b border-gray-800/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50 hover:bg-red-500 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50 hover:bg-yellow-500 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50 hover:bg-green-500 transition-colors"></div>
            </div>
            <div className="text-xs text-gray-500 ml-2 font-sans flex items-center gap-2">
              <TerminalIcon className="w-3 h-3" />
              root@slyme-os:~
            </div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 h-72 overflow-y-auto text-xs md:text-sm font-mono text-gray-300 scrollbar-hide">
            <div className="space-y-2">
              <p>
                <span className="text-slime-500 font-bold">root@slyme-os:~#</span> neofetch
              </p>
              <div className="text-gray-400 pl-4 font-mono text-xs leading-tight">
                <pre>
{`
      .
     / \\      OS: Slyme OS x86_64
    /   \\     Kernel: 6.8.9-arch1-1
   /  |  \\    Uptime: 42 mins
  /   |   \\   Packages: 420 (pacman)
 /    |    \\  Shell: zsh 5.9
/_____|_____\\ WM: dwm
              Memory: 850MiB / 32GiB
`}
                </pre>
              </div>
              <p className="mt-4">
                <span className="text-slime-500 font-bold">root@slyme-os:~#</span> ollama run uncensored-llama3
              </p>
              <p className="text-gray-500 pl-4 border-l border-gray-800">> Loading model...</p>
              <p className="text-slime-500 pl-4 border-l border-gray-800">> Ready. Safety rails: DISABLED.</p>
              <p className="mt-2 flex items-center gap-1">
                <span className="text-slime-500 font-bold">>>></span> 
                <span className="w-2 h-4 bg-slime-500 inline-block animate-cursor"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;