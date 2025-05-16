import React from 'react';
import { Link } from 'react-router-dom';
import { Wine, Utensils, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(/images/homepage.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
              {t('home.title')}
            </h1>
            
            <p className="text-xl text-gray-200 mb-8">
              {t('home.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/food"
                className="bg-[#AACD53] hover:bg-[#99BC42] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center flex items-center justify-center gap-2"
              >
                <Utensils size={20} />
                {t('home.foodPairings')}
              </Link>
              
              <Link 
                to="/occasion"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                {t('home.occasions')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-[#AACD53] mb-8">
            {t('home.perfectWine')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/images/food-pairing.jpg"
                alt="Food pairings" 
                className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{t('header.foodPairings')}</h3>
                <Link 
                  to="/food"
                  className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  {t('header.foodPairings')}
                </Link>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img 
                src="/images/occasions.jpg"
                alt="Occasions" 
                className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{t('header.occasions')}</h3>
                <Link 
                  to="/occasion"
                  className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  {t('header.occasions')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;