import React from 'react';
import { Wine } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-[#7D0633] to-[#9A1750] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-serif tracking-wide transition-transform hover:scale-105"
        >
          <Wine size={32} className="text-[#D4AF37]" />
          <span className="hidden sm:inline">Sommelier's Choice</span>
          <span className="sm:hidden">SC</span>
        </Link>
        
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link 
                to="/food" 
                className="font-medium hover:text-[#D4AF37] transition-colors duration-300"
              >
                Food Pairings
              </Link>
            </li>
            <li>
              <Link 
                to="/occasion" 
                className="font-medium hover:text-[#D4AF37] transition-colors duration-300"
              >
                Occasions
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;