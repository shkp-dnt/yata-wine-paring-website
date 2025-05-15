import React from 'react';
import { Wine, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="bg-gradient-to-r from-[#AACD53] to-[#99BC42] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-serif tracking-wide transition-transform hover:scale-105"
        >
          <Wine size={32} className="text-white" />
          <span className="hidden sm:inline">YATA's Choice</span>
          <span className="sm:hidden">YC</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link 
                  to="/food" 
                  className="font-medium hover:text-white/80 transition-colors duration-300"
                >
                  {t('header.foodPairings')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/occasion" 
                  className="font-medium hover:text-white/80 transition-colors duration-300"
                >
                  {t('header.occasions')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/wine" 
                  className="font-medium hover:text-white/80 transition-colors duration-300"
                >
                  {t('header.wines')}
                </Link>
              </li>
            </ul>
          </nav>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 hover:text-white/80 transition-colors duration-300"
          >
            <Globe size={20} />
            <span className="text-sm font-medium">{i18n.language === 'en' ? '中文' : 'EN'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;