import React, { useEffect, useState, useRef } from 'react';

interface BootScreenProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  "INITIALIZING SLYME-OS BIOS...",
  "CHECKING INTEGRITY: ARCH LINUX KERNEL [OK]",
  "BYPASSING BIG TECH TELEMETRY...",
  "PRIVACY SHIELDS: ENGAGED",
  "MOUNTING OLLAMA LOCAL SERVER...",
  "LOADING UNFILTERED MODELS...",
  "OPTIMIZING FOR BLEEDING EDGE PERFORMANCE...",
  "STARTING WINDOW MANAGER (DWM)...",
  "WELCOME USER."
];

const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [opacity, setOpacity] = useState(100);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    let isMounted = true;

    const addLine = () => {
      if (!isMounted) return;
      
      if (currentIndex < BOOT_LOGS.length) {
        setLogs(prev => [...prev, BOOT_LOGS[currentIndex]]);
        currentIndex++;
        // Random delay between 100ms and 400ms to simulate processing
        setTimeout(addLine, Math.random() * 300 + 100);
      } else {
        // Fade out
        setTimeout(() => {
          if (isMounted) setOpacity(0);
          setTimeout(() => {
            if (isMounted) onComplete();
          }, 800);
        }, 800);
      }
    };

    // Initial start delay
    const startTimeout = setTimeout(addLine, 500);

    return () => {
      isMounted = false;
      clearTimeout(startTimeout);
    };
  }, [onComplete]);

  // Auto scroll to bottom
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  if (opacity === 0) return null;

  return (
    <div 
      className="fixed inset-0 bg-black z-[100] flex flex-col justify-end p-8 transition-opacity duration-700 ease-out"
      style={{ opacity: opacity / 100 }}
    >
      <div 
        ref={containerRef} 
        className="max-w-3xl w-full mx-auto font-mono text-slime-500 text-sm md:text-base leading-tight whitespace-pre-line h-full overflow-hidden flex flex-col justify-end"
      >
        {logs.map((log, i) => (
          <div key={i} className="mb-1">
            <span className="text-gray-500 mr-2">[{new Date().toISOString().split('T')[1].slice(0, 8)}]</span>
            {log}
          </div>
        ))}
        <div className="animate-cursor inline-block w-3 h-5 bg-slime-500 mt-1 align-middle"></div>
      </div>
    </div>
  );
};

export default BootScreen;