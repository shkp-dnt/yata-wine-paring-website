import React from 'react';
import { Wine as WineType } from '../types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface WineCardProps {
  wine: WineType;
}

const WineCard: React.FC<WineCardProps> = ({ wine }) => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  return (
    <Link 
      to={`/wine/${wine.id}`}
      className="flex flex-col rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl bg-white overflow-hidden"
    >
      <div 
        className="h-48 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(/images/wines/${wine.id}.jpg)` }}
      />
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="px-3 py-1 bg-[#A5CD39] text-white rounded-full text-xs font-medium">
            {isZh ? wine.typeZh : wine.type}
          </span>
          <span className="text-[#D4AF37] font-bold">
            {wine.priceRange}
          </span>
        </div>
        
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-1 group-hover:text-[#7D0633] transition-colors duration-300">
          {isZh ? wine.nameZh : wine.name}
        </h3>
        
        <p className="text-sm font-medium text-gray-600 mb-2">
          {isZh ? wine.varietyZh : wine.variety} · {isZh ? wine.regionZh : wine.region}, {isZh ? wine.countryZh : wine.country}
        </p>
        
        <p className="text-sm text-gray-700 mb-3">{isZh ? wine.descriptionZh : wine.description}</p>
        
        <div>
          <p className="text-xs font-medium text-gray-600 mb-1">{t('common.tastingNotes')}:</p>
          <div className="flex flex-wrap gap-1">
            {(isZh ? wine.tastingNotesZh : wine.tastingNotes).map((note, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700"
              >
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WineCard;