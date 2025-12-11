import React from 'react';
import { Shield, Cpu, Terminal, Zap, EyeOff, Layers } from 'lucide-react';
import { FeatureProps } from '../types';

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon }) => (
  <div className="group relative p-6 bg-slyme-950/30 border border-slyme-900/50 hover:border-slyme-500/50 transition-all duration-300 rounded-sm overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slyme-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    
    <div className="relative z-10">
      <div className="mb-4 text-slyme-500 group-hover:text-slyme-400 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-mono font-bold text-gray-100 mb-2 group-hover:text-slyme-300 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
    
    {/* Decorative corner accents */}
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slyme-500/30 group-hover:border-slyme-500 transition-colors" />
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slyme-500/30 group-hover:border-slyme-500 transition-colors" />
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      title: "Arch Base",
      description: "Built on the legendary Arch Linux foundation. Lightweight, flexible, and bleeding-edge updates for the power user.",
      icon: <Layers size={32} />
    },
    {
      title: "Local AI Core",
      description: "Pre-installed Ollama integration. Run LLMs locally on your GPU/CPU without sending data to big tech servers.",
      icon: <Cpu size={32} />
    },
    {
      title: "Absolute Privacy",
      description: "No telemetry. No tracking. Hardened kernel settings and privacy-first browser pre-configured out of the box.",
      icon: <EyeOff size={32} />
    },
    {
      title: "Hacker Aesthetic",
      description: "Minimalist window manager (Hyprland) with a custom, high-contrast neon theme designed for focus and coding.",
      icon: <Terminal size={32} />
    },
    {
      title: "Bleeding Edge",
      description: "Access the latest software and drivers immediately. Rolling release model ensures you're never left behind.",
      icon: <Zap size={32} />
    },
    {
      title: "Open Source",
      description: "100% free and open source. Audit the code, modify the kernel, distribute freely. Power to the user.",
      icon: <Shield size={32} />
    }
  ];

  return (
    <section className="py-20 relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4">
          <span className="text-slyme-500">{'>'}</span> SYSTEM_MODULES
        </h2>
        <div className="h-1 w-24 bg-slyme-500 mx-auto" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
};

export default Features;