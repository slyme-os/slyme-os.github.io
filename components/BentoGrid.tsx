import React from 'react';
import { Grid3x3, HardDrive, BookOpen, ChevronRight, Cpu } from 'lucide-react';

const BentoGrid: React.FC = () => {
  return (
    <section id="projects" className="space-y-8 animate-[fadeIn_1s_ease-out_0.5s_both]">
      <div className="flex items-end justify-between border-b border-gray-800 pb-4">
        <div>
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <Cpu className="text-slime-500 animate-pulse-fast" />
            SYSTEM MODULES
          </h2>
        </div>
        <div className="text-xs text-gray-500 font-mono hidden sm:block">DIR: /opt/slyme/modules</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
        
        {/* Slyme OS Core (Large) */}
        <div className="group md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl bg-gray-900/40 border border-gray-800 hover:border-slime-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.1)]">
          {/* Hover Effect */}
          <div className="absolute inset-0 bg-slime-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="absolute top-4 right-4 text-gray-700 group-hover:text-slime-900/50 transition-colors duration-500">
            <Grid3x3 className="w-24 h-24 opacity-20 transform group-hover:rotate-90 transition-transform duration-700" />
          </div>

          <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black via-black/95 to-transparent h-full flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 rounded bg-slime-900/80 text-slime-400 text-[10px] border border-slime-500/30 uppercase tracking-widest backdrop-blur-sm">
                v1.0.0-RC1
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-slime-400 transition-colors text-glow-hover">Slyme OS Core</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md group-hover:text-gray-300 transition-colors">
              The privacy-first operating system. Built on Arch Linux for bleeding-edge updates, integrating local LLMs directly into the workflow. No tracking. No filters.
            </p>
            <div className="flex gap-4">
                <a href="#" className="inline-flex items-center gap-2 text-white bg-slime-600/20 hover:bg-slime-500 hover:text-black px-4 py-2 rounded border border-slime-500/50 transition-colors text-sm font-bold uppercase tracking-wider">
                  Download ISO
                </a>
                <a href="https://github.com/slyme-os" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-bold uppercase tracking-wider transition-colors pt-2">
                  Source <ChevronRight className="w-4 h-4" />
                </a>
            </div>
          </div>
        </div>

        {/* Window Manager (Expanded to fill gap from removed Time widget) */}
        <div className="md:col-span-2 relative rounded-xl bg-gray-900/40 border border-gray-800 hover:border-slime-500 transition-all p-6 flex flex-col justify-between group h-[200px] md:h-auto">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-gray-800/50 rounded-lg group-hover:bg-slime-500/20 transition-colors">
                <HardDrive className="text-gray-400 group-hover:text-slime-500 transition-colors w-6 h-6" />
            </div>
            <span className="text-[10px] text-gray-500 border border-gray-800 px-2 py-1 rounded bg-black uppercase tracking-wider">Workflow</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-slime-400 transition-colors">DWM (Suckless)</h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed max-w-sm">
              Heavily patched dynamic window manager. Optimized for keyboard-driven workflows and minimal resource usage (~850MB RAM idle).
            </p>
          </div>
        </div>

        {/* Documentation */}
        <a href="#" className="md:col-span-2 relative rounded-xl bg-gray-900/40 border border-gray-800 hover:border-slime-500 hover:bg-slime-900/10 transition-all p-8 flex items-center justify-between group h-[150px]">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-gray-800 rounded-lg group-hover:bg-slime-500 group-hover:text-black transition-colors duration-300">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Wiki / Docs</h3>
              <p className="text-sm text-gray-400">Installation guide, Ollama setup, and keybindings.</p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-slime-500 group-hover:bg-slime-500/10 transition-all">
             <ChevronRight className="text-gray-600 group-hover:text-slime-500 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </a>

        {/* Tech Stack Chips */}
        <div className="md:col-span-2 relative rounded-xl bg-gray-900/40 border border-gray-800 p-8 flex flex-col justify-center h-[150px]">
          <h3 className="text-xs text-slime-500 mb-4 uppercase tracking-widest font-bold flex items-center gap-2">
            <span className="w-1 h-1 bg-slime-500 rounded-full"></span> Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Arch Linux', 'Ollama', 'Llama 3', 'DWM', 'ZSH', 'Alacritty', 'Privacy-First'].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-black hover:bg-slime-500 hover:text-black text-xs text-gray-300 rounded border border-gray-800 hover:border-slime-500 transition-all cursor-default font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;