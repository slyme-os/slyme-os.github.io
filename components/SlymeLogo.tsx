import React from 'react';

interface SlymeLogoProps {
  className?: string;
  withText?: boolean;
  animated?: boolean;
  style?: React.CSSProperties;
}

export const SlymeLogo: React.FC<SlymeLogoProps> = ({ 
  className = "w-12 h-12", 
  withText = false,
  animated = false,
  style
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className} select-none`} style={style}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full drop-shadow-[0_0_8px_rgba(0,255,65,0.6)] ${animated ? 'animate-pulse' : ''}`}
        style={{ animationDuration: '3s' }}
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Main Snake S Shape - Using path for fluid digital look */}
        <path
          d="M75 25C70 15 55 10 45 15C35 20 30 30 35 40C40 50 65 50 65 65C65 75 55 80 40 80C30 80 20 70 20 60V55M20 60C20 60 20 75 25 82M40 80C40 80 38 90 42 92M55 80C55 80 58 88 56 94M75 25C80 25 85 30 85 35M85 35L80 40M85 35L90 40"
          stroke="#00ff41"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Interactive Elements */}
        <g className={animated ? "animate-pulse" : ""}>
            <path d="M60 55L60 62" stroke="#00ff41" strokeWidth="4" strokeLinecap="round" />
            <path d="M30 45L30 52" stroke="#00ff41" strokeWidth="3" strokeLinecap="round" />
            <circle cx="60" cy="65" r="2" fill="#00ff41" />
            <circle cx="30" cy="55" r="1.5" fill="#00ff41" />
        </g>
        
        {/* Snake Eye */}
        <circle cx="72" cy="22" r="2.5" fill="#000" />
        
        {/* Glitch Rectangles - Visible mostly on larger or animated versions */}
        <rect x="10" y="30" width="4" height="4" fill="#00ff41" opacity="0.6" className={animated ? "animate-bounce" : ""} />
        <rect x="85" y="60" width="6" height="2" fill="#00ff41" opacity="0.8" />
        <rect x="80" y="20" width="3" height="3" fill="#00ff41" opacity="0.4" />
      </svg>
      
      {withText && (
        <div className="mt-3 text-center">
          <h1 className="font-display font-bold text-[#00ff41] tracking-[0.25em] text-lg drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]">
            SLYME<span className="text-white">_OS</span>
          </h1>
        </div>
      )}
    </div>
  );
};