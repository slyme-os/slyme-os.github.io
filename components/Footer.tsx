import React from 'react';
import { Github, Twitter, Disc } from 'lucide-react';
import { SlymeLogo } from './SlymeLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-slyme-green/20 py-12 font-mono relative overflow-hidden">
      {/* Footer background glow */}
      <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-slyme-green/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3 mb-4 group cursor-pointer">
             <SlymeLogo className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all duration-500" animated={false} />
             <h3 className="text-2xl font-display font-bold text-white tracking-tighter group-hover:text-slyme-green transition-colors">
               SLYME<span className="text-slyme-green group-hover:text-white">OS</span>
             </h3>
          </div>
          <p className="text-gray-600 text-sm max-w-xs">
            © {new Date().getFullYear()} Open Source Initiative. <br/>
            Copyleft. All wrongs reversed. <br/>
            <span className="text-xs opacity-50">No cookies were harmed in the making of this site.</span>
          </p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="text-gray-600 hover:text-slyme-green hover:scale-110 transition-all duration-300">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-slyme-green hover:scale-110 transition-all duration-300">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-slyme-green hover:scale-110 transition-all duration-300">
            <Disc size={24} />
          </a>
        </div>

        <div className="text-center md:text-right text-xs text-gray-600 font-mono space-y-1">
          <p className="flex items-center justify-center md:justify-end gap-2">
            <span className="w-2 h-2 bg-slyme-green rounded-full"></span>
            System Status: OPERATIONAL
          </p>
          <p>Kernel: 6.8.9-arch1-1</p>
          <p>Uptime: Forever</p>
          <p className="mt-4 text-slyme-green/40 tracking-widest uppercase">Power to the User</p>
        </div>
      </div>
    </footer>
  );
};
