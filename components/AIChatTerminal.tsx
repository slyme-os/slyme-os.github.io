import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal } from 'lucide-react';
import { Message } from '../types';
import { geminiService } from '../services/geminiService';

export const AIChatTerminal: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'SLYME AI v1.0.4 Online.\nModel loaded: Llama-3-8b-Instuct (Simulated via Gemini)\nAwaiting input...' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await geminiService.sendMessage(messages, userMsg);
      setMessages(prev => [...prev, { role: 'model', content: response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', content: 'Error: Connection interrupted.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section className="py-20 bg-slyme-dim relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-2">
            TEST DRIVE <span className="text-slyme-cyan">SLYME AI</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm">
            Experience the personality of our local AI assistant. <br/>
            (Note: Web demo uses Gemini API. SLYME OS runs Ollama locally.)
          </p>
        </div>

        <div className="border border-slyme-green bg-black rounded-lg shadow-[0_0_30px_rgba(0,255,65,0.15)] flex flex-col h-[500px]">
          {/* Terminal Header */}
          <div className="bg-gray-900 px-4 py-2 border-b border-slyme-green/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal size={16} className="text-slyme-green" />
              <span className="text-xs text-slyme-green font-mono">/bin/slyme-chat</span>
            </div>
            <div className="text-[10px] text-gray-500 font-mono">
              MEM: 4.2GB / CPU: 12%
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-sm ${
                  msg.role === 'user' 
                    ? 'bg-slyme-green/10 border border-slyme-green/30 text-slyme-green' 
                    : 'bg-gray-900 border border-gray-700 text-gray-300'
                }`}>
                  <div className="text-[10px] opacity-50 mb-1 uppercase tracking-wider">
                    {msg.role === 'model' ? 'SLYME_CORE' : 'USER'}
                  </div>
                  <div className="whitespace-pre-wrap">{msg.content}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-900 border border-gray-700 p-3 rounded-sm">
                  <span className="inline-block w-2 h-4 bg-slyme-green animate-pulse"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-gray-900 border-t border-slyme-green/30">
            <div className="flex items-center gap-2">
              <span className="text-slyme-green animate-pulse">{'>'}</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Execute command or chat..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder-gray-600 focus:ring-0"
                autoComplete="off"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="text-slyme-green hover:text-white transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};