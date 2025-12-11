import React from 'react';
import { Shield, Cpu, Code, Lock, Terminal, Globe, UserX, Database } from 'lucide-react';
import { Feature, FeatureType } from '../types';

const features: Feature[] = [
  {
    id: '1',
    title: 'Local Intelligence',
    description: 'Pre-configured with Ollama. Run Llama 3, Mistral, and Gemma directly on your GPU. No data leaves your machine.',
    icon: Cpu,
    type: FeatureType.AI
  },
  {
    id: '2',
    title: 'Arch Backbone',
    description: 'Built on the legendary Arch Linux. Rolling release updates, PACMAN package manager, and infinite customization.',
    icon: Terminal,
    type: FeatureType.CUSTOM
  },
  {
    id: '3',
    title: 'Zero Telemetry',
    description: 'We stripped out everything. No "Customer Experience Programs". No pings home. Just pure, silent operation.',
    icon: UserX,
    type: FeatureType.PRIVACY
  },
  {
    id: '4',
    title: 'FOSS Forever',
    description: '100% Open Source. Audit our code on GitHub. Fork it. Break it. Fix it. It belongs to you.',
    icon: Code,
    type: FeatureType.OPEN_SOURCE
  },
  {
    id: '5',
    title: 'Encrypted by Default',
    description: 'LUKS2 Full Disk Encryption enabled out of the box. Your data is noise to anyone without the key.',
    icon: Lock,
    type: FeatureType.PRIVACY
  },
  {
    id: '6',
    title: 'Decentralized Updates',
    description: 'Package mirrors over IPFS and Tor options available for maximum anonymity during system updates.',
    icon: Globe,
    type: FeatureType.CUSTOM
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-black relative border-b border-slyme-accent/20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            SYSTEM <span className="text-slyme-green">CAPABILITIES</span>
          </h2>
          <div className="h-1 w-24 bg-slyme-green mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="group p-6 border border-gray-800 bg-slyme-dim/50 hover:border-slyme-green/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,65,0.1)] rounded-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <feature.icon className="w-10 h-10 text-slyme-green group-hover:animate-pulse" />
                <span className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">
                  {feature.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-display tracking-wide group-hover:text-slyme-cyan transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 font-mono text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slyme-green/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slyme-green/50 to-transparent"></div>
    </section>
  );
};
