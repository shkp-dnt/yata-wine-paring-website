import React from 'react';
import { Wine } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1B512D] text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Wine size={24} className="text-[#D4AF37]" />
            <span className="text-xl font-serif">Sommelier's Choice</span>
          </div>
          
          <div className="text-sm text-gray-200">
            <p>© {new Date().getFullYear()} Sommelier's Choice. All rights reserved.</p>
            <p className="mt-1">Enjoy responsibly. Must be 21+ to consume alcohol.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;