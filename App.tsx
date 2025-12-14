import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';
import BootScreen from './components/BootScreen';

const App: React.FC = () => {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <>
      {/* CRT Overlay Effects */}
      <div className="scanlines"></div>
      <div className="vignette"></div>

      {/* Boot Screen Layer */}
      {!isBooted && <BootScreen onComplete={() => setIsBooted(true)} />}

      {/* Background Animation Layer */}
      <div className="fixed inset-0 -z-10 bg-slime-950">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slime-600/10 rounded-full blur-[100px] animate-pulse-fast"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-slime-900/20 rounded-full blur-[120px]"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
      </div>

      {/* Main Content */}
      <main 
        className={`max-w-7xl mx-auto px-6 py-12 relative z-10 transition-opacity duration-1000 ${isBooted ? 'opacity-100' : 'opacity-0'}`}
      >
        <Header />
        <Hero />
        <BentoGrid />
        <Footer />
      </main>
    </>
  );
};

export default App;