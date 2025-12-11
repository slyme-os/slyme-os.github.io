import React, { useState, useCallback } from 'react';
import MatrixBackground from './components/MatrixBackground';
import Terminal from './components/Terminal';
import Features from './components/Features';
import BootScreen from './components/BootScreen';
import Logo from './components/Logo';
import { Github, Download, Terminal as TerminalIcon } from 'lucide-react';

const App: React.FC = () => {
  const [booted, setBooted] = useState(false);

  // Memoize the callback to ensure BootScreen doesn't re-initialize on parent renders
  const handleBootComplete = useCallback(() => {
    setBooted(true);
  }, []);
  
  if (!booted) {
    return <BootScreen onComplete={handleBootComplete} />;
  }

  return (
    <div className="min-h-screen bg-black text-gray-200 font-mono relative crt">
      <MatrixBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/90 backdrop-blur border-b border-slyme-900/50 h-16 flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-3 group cursor-pointer">
           <div className="relative">
             <Logo className="w-10 h-10 text-slyme-500 group-hover:animate-pulse" />
             <div className="absolute inset-0 bg-slyme-400 blur-lg opacity-20 animate-pulse"></div>
           </div>
           <span className="font-bold text-xl tracking-tighter text-white group-hover:text-slyme-100 transition-colors">SLYME_OS</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm">
           <a href="#" className="hover:text-slyme-500 transition-colors">/DOCS</a>
           <a href="#" className="hover:text-slyme-500 transition-colors">/COMMUNITY</a>
           <a href="#" className="hover:text-slyme-500 transition-colors">/SOURCE</a>
        </div>
        <a 
          href="https://github.com/slyme-os" 
          target="_blank"
          rel="noreferrer"
          className="bg-slyme-950 border border-slyme-500 text-slyme-500 px-4 py-1.5 text-xs hover:bg-slyme-500 hover:text-black transition-all flex items-center gap-2"
        >
          <Github size={14} /> GITHUB
        </a>
      </nav>

      {/* Main Content */}
      <main className="relative pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Hero Section */}
        <div className="text-center mb-24 max-w-4xl animate-[fadeIn_1s_ease-out]">
            <div className="inline-block mb-4 px-3 py-1 border border-slyme-800 bg-slyme-950/50 rounded-full text-xs text-slyme-400">
                v1.0.0 STABLE RELEASE
            </div>
            
            <div className="flex justify-center mb-8 md:hidden">
                <Logo className="w-24 h-24 text-slyme-500 animate-pulse-slow" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
                UNFILTERED <br />
                <span className="text-slyme-500 relative inline-block">
                   INTELLIGENCE
                   {/* Glitch Effect Overlay */}
                   <span className="absolute top-0 left-0 -ml-1 text-slyme-500/30 animate-pulse" aria-hidden="true">INTELLIGENCE</span>
                </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
                An Arch-based operating system designed for the post-privacy era.
                Deploy local AI models with zero censorship. Total control. Total freedom.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative px-8 py-4 bg-slyme-600 text-black font-bold text-lg hover:bg-slyme-500 transition-all w-full sm:w-auto overflow-hidden">
                    <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] skew-x-12 group-hover:animate-[shimmer_1s_infinite]"></div>
                    <span className="flex items-center justify-center gap-2">
                        <Download size={20} />
                        DOWNLOAD .ISO
                    </span>
                </button>
                <button className="px-8 py-4 border border-gray-700 text-gray-300 font-bold text-lg hover:border-slyme-500 hover:text-slyme-500 transition-all w-full sm:w-auto">
                    VIEW SOURCE
                </button>
            </div>
        </div>

        {/* Terminal Section */}
        <div className="w-full mb-32">
             <div className="text-center mb-8">
                <p className="text-slyme-500 text-sm mb-2">TRY THE SHELL</p>
                <h3 className="text-2xl font-bold">Interactive System Preview</h3>
            </div>
            <Terminal />
        </div>

        {/* Features Grid */}
        <Features />

        {/* Philosophy / About Section */}
        <section className="w-full py-24 border-t border-gray-900 mt-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="text-slyme-500">///</span> DATA SOVEREIGNTY
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        In an age of surveillance capitalism, Slyme OS draws a line in the sand. 
                        We integrate <span className="text-white font-bold">Ollama</span> deeply into the system, 
                        allowing you to run Llama 3, Mistral, and Gemma locally.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Your prompts never leave your machine. Your data is yours. The AI works for you, 
                        not a corporation.
                    </p>
                    <ul className="space-y-2 mt-4 text-slyme-300 font-mono text-sm">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-slyme-500 rounded-full"></span>
                            OFFLINE-FIRST ARCHITECTURE
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-slyme-500 rounded-full"></span>
                            HARDENED KERNEL SECURITY
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-slyme-500 rounded-full"></span>
                            COMMUNITY DRIVEN DEVELOPMENT
                        </li>
                    </ul>
                </div>
                <div className="relative h-64 md:h-96 w-full bg-slyme-950/20 border border-slyme-900/50 rounded flex items-center justify-center overflow-hidden">
                     {/* Abstract representation of a chip or neural network */}
                     <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slyme-900 via-black to-black"></div>
                     <div className="text-center z-10 flex flex-col items-center">
                        <Logo className="w-32 h-32 text-slyme-500 opacity-80 mb-4 animate-pulse" />
                        <div className="text-sm text-slyme-700 mt-2">LOCAL_INSTANCE_ACTIVE</div>
                     </div>
                     {/* Decorative lines */}
                     <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slyme-900/50"></div>
                     <div className="absolute left-1/2 top-0 w-[1px] h-full bg-slyme-900/50"></div>
                </div>
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-900 bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
                <Logo className="w-6 h-6 text-gray-600" />
                <div className="text-gray-500 text-sm font-mono">
                    © {new Date().getFullYear()} SLYME_OS SYSTEMS. <br/>
                    LICENSED UNDER MIT.
                </div>
            </div>
            <div className="flex gap-6">
                <a href="#" className="text-gray-500 hover:text-slyme-500 transition-colors">DISCORD</a>
                <a href="#" className="text-gray-500 hover:text-slyme-500 transition-colors">TWITTER</a>
                <a href="#" className="text-gray-500 hover:text-slyme-500 transition-colors">GITHUB</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;