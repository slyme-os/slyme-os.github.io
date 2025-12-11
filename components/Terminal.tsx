import React, { useState, useRef, useEffect } from 'react';
import { Command } from '../types';
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react';

const Terminal: React.FC = () => {
    const [history, setHistory] = useState<Command[]>([
        { input: 'neofetch', output: <div className="text-slyme-400 whitespace-pre-wrap font-mono text-xs sm:text-sm">
{`
       .7
     .'/
    / /    SLYME OS v1.0
   / /     -------------
  / /      OS: Slyme OS (Arch Based)
 / /       Kernel: 6.8.9-arch1-1
/ /        Shell: zsh 5.9
           DE: Hyprland
           AI: Ollama (Llama 3 Local)
           Privacy: 100%
`}
        </div> }
    ]);
    const [input, setInput] = useState('');
    const bottomRef = useRef<HTMLDivElement>(null);

    const handleCommand = (cmd: string) => {
        const trimmed = cmd.trim().toLowerCase();
        let response: React.ReactNode = '';

        switch (trimmed) {
            case 'help':
                response = 'Available commands: about, features, download, clear, neofetch, whoami';
                break;
            case 'about':
                response = 'Slyme OS is a minimalist, privacy-focused Arch Linux distribution with integrated local AI capabilities.';
                break;
            case 'whoami':
                response = 'root@slyme-os (Privacy Protected User)';
                break;
            case 'features':
                response = '1. Pre-configured Hyprland\n2. Ollama Local AI Server\n3. Hardened Kernel\n4. Zero Telemetry';
                break;
            case 'download':
                response = <a href="#" className="text-slyme-300 underline hover:text-white">Click here to access ISO mirrors (coming soon)</a>;
                break;
            case 'clear':
                setHistory([]);
                return;
            default:
                response = `Command not found: ${trimmed}. Type 'help' for available commands.`;
        }

        setHistory(prev => [...prev, { input: cmd, output: response }]);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    return (
        <div className="w-full max-w-4xl mx-auto bg-black/80 backdrop-blur-sm border border-slyme-900 rounded-lg overflow-hidden shadow-2xl shadow-slyme-900/20">
            {/* Terminal Header */}
            <div className="bg-slyme-950/80 p-2 flex items-center justify-between border-b border-slyme-900">
                <div className="flex items-center space-x-2 ml-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-slyme-600 text-xs font-mono flex items-center gap-2">
                    <TerminalIcon size={12} /> user@slyme-os:~
                </div>
                <div className="w-10"></div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 font-mono text-sm h-64 sm:h-80 overflow-y-auto custom-scrollbar">
                {history.map((entry, idx) => (
                    <div key={idx} className="mb-2">
                        <div className="flex items-center text-slyme-500">
                            <span className="mr-2">➜</span>
                            <span className="text-white">~</span>
                            <span className="ml-2 text-slyme-200">{entry.input}</span>
                        </div>
                        <div className="ml-5 mt-1 text-gray-400 whitespace-pre-wrap">
                            {entry.output}
                        </div>
                    </div>
                ))}
                
                <div className="flex items-center text-slyme-500 mt-2">
                    <span className="mr-2">➜</span>
                    <span className="text-white">~</span>
                    <ChevronRight size={14} className="ml-1 text-slyme-500" />
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-transparent border-none outline-none text-slyme-100 flex-1 ml-2 font-mono caret-slyme-500"
                        autoFocus
                        placeholder="Type 'help'..."
                    />
                </div>
                <div ref={bottomRef} />
            </div>
        </div>
    );
};

export default Terminal;