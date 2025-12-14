import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const Header: React.FC = () => {
  const [time, setTime] = useState<string>('00:00:00');

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    };
    const interval = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="flex justify-between items-center mb-16 border-b border-slime-900/50 pb-6 backdrop-blur-sm sticky top-0 pt-6 z-40 bg-slime-950/80">
      <div className="flex items-center gap-3 group cursor-pointer select-none">
        <div className="relative w-10 h-10 flex items-center justify-center bg-slime-900/80 border border-slime-500/50 rounded overflow-hidden group-hover:border-slime-500 transition-colors duration-300">
          <Terminal className="w-5 h-5 text-slime-500" />
          <div className="absolute inset-0 bg-slime-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded" />
        </div>
        <span className="text-2xl font-bold tracking-widest text-white group-hover:text-glow transition-all duration-300">
          SLYME<span className="text-slime-500 animate-pulse">_</span>OS
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-bold">
        <div className="flex items-center gap-2 px-3 py-1 bg-slime-900/30 border border-slime-500/20 rounded text-slime-500 shadow-[0_0_10px_rgba(57,255,20,0.1)]">
          <span className="w-2 h-2 bg-slime-500 rounded-full animate-pulse shadow-[0_0_5px_#39ff14]"></span>
          System Online
        </div>
        <span className="text-gray-400 font-mono bg-black/20 px-2 py-1 rounded">{time}</span>
      </div>
    </nav>
  );
};

export default Header;