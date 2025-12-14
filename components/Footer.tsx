import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-32 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 pb-12">
        <p>&copy; 2025 Slyme-OS DREAM <span className="text-slime-900 ml-2">End of Line.</span></p>
        <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://www.instagram.com/slyme-os?igsh=ejR6bDRpMXNhNzVq" target="_blank" rel="noopener noreferrer" className="hover:text-slime-500 transition-colors hover:text-glow">INSTAGRAM</a>
            <a href="#" className="hover:text-slime-500 transition-colors hover:text-glow">YOUTUBE</a>
            <a href="mailto:slyme@tutamail.com" className="hover:text-slime-500 transition-colors hover:text-glow">EMAIL</a>
        </div>
    </footer>
  );
};

export default Footer;