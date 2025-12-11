import React from 'react';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => (
    <svg 
        viewBox="0 0 100 100" 
        fill="currentColor" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Main Body - Stylized S */}
        <path d="M78 25C75 16 68 12 58 12C42 12 30 22 30 38C30 58 65 54 65 72C65 82 56 88 45 88C36 88 28 84 22 78L15 85C22 92 34 98 46 98C64 98 78 88 78 70C78 50 42 54 42 38C42 26 50 22 58 22C64 22 70 25 74 29L78 25Z" />
        
        {/* Snake Head Details (Top Right) */}
        <path d="M78 25C82 25 85 27 88 30L82 36C80 34 78 33 76 33L74 29L78 25Z" />
        {/* Eye */}
        <circle cx="65" cy="20" r="2.5" fill="#052e16" /> 
        
        {/* Drips (Bottom) */}
        <path d="M35 88V95C35 97 37 97 37 95V90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M55 88V100C55 102 57 102 57 100V92" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M45 98V105C45 107 47 107 47 105V98" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        
        {/* Slime Texture overlay for depth */}
        <circle cx="35" cy="40" r="2" fill="currentColor" fillOpacity="0.3" />
        <circle cx="60" cy="65" r="3" fill="currentColor" fillOpacity="0.3" />
    </svg>
);

export default Logo;