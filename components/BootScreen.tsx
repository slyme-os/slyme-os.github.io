import React, { useEffect, useState } from 'react';
import { BOOT_SEQUENCE } from '../constants';

interface BootScreenProps {
    onComplete: () => void;
}

const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
    const [lines, setLines] = useState<string[]>([]);

    useEffect(() => {
        let currentIndex = 0;
        let timeoutId: NodeJS.Timeout;

        const processNextLine = () => {
            if (currentIndex >= BOOT_SEQUENCE.length) {
                // Sequence finished
                timeoutId = setTimeout(onComplete, 800);
                return;
            }

            const nextLine = BOOT_SEQUENCE[currentIndex];
            
            // Safety check: only update state if nextLine is defined
            if (nextLine) {
                setLines(prev => [...prev, nextLine]);
            }
            
            currentIndex++;
            
            // Randomize typing speed for "hacker" feel
            const delay = 50 + Math.random() * 150;
            timeoutId = setTimeout(processNextLine, delay);
        };

        // Start the sequence
        timeoutId = setTimeout(processNextLine, 100);

        return () => clearTimeout(timeoutId);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 bg-black z-50 flex flex-col justify-start p-6 sm:p-10 font-mono text-xs sm:text-sm md:text-base cursor-none overflow-hidden select-none">
            {lines.map((line, i) => {
                if (!line) return null; // Prevent rendering undefined lines
                return (
                    <div key={i} className="flex gap-3 animate-[fadeIn_0.1s_ease-out]">
                        <span className="text-gray-500 shrink-0">[{ (i * 0.1428).toFixed(4) }]</span>
                        <span className={`${line.includes('Ready') ? 'text-slyme-500 font-bold' : 'text-gray-300'} break-words`}>
                            {line}
                        </span>
                    </div>
                );
            })}
            <div className="mt-2 animate-pulse text-slyme-500 font-bold">_</div>
        </div>
    );
};

export default BootScreen;