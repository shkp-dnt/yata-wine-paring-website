import React from 'react';
import { Wine } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#A5CD39] text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Wine size={24} className="text-white" />
            <span className="text-xl font-serif">YATA's Choice</span>
          </div>
          
          <div className="text-sm text-white/90">
            <p>© {new Date().getFullYear()} YATA's Choice. All rights reserved.</p>
            <p className="mt-1">Enjoy responsibly. Must be 21+ to consume alcohol.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};