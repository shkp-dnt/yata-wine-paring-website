import React from 'react';
import WineCard from './WineCard';
import { Wine } from '../types';
import { useTranslation } from 'react-i18next';

interface RecommendationSectionProps {
  wines: Wine[];
  reason: string;
  reasonZh: string;
  title: string;
  titleZh: string;
}

const RecommendationSection: React.FC<RecommendationSectionProps> = ({ 
  wines, 
  reason,
  reasonZh,
  title,
  titleZh
}) => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  if (wines.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-medium text-gray-600">{t('common.noRecommendations')}</h2>
        <p className="mt-2 text-gray-500">{t('common.tryDifferent')}</p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-[#7D0633] mb-2">
          {isZh ? titleZh : title}
        </h2>
        
        <div className="bg-[#F5F5F5] p-4 rounded-lg mb-8 border-l-4 border-[#D4AF37]">
          <p className="text-lg font-medium text-gray-700">
            <span className="font-bold">{t('common.sommelierNote')}: </span>
            {isZh ? reasonZh : reason}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wines.map(wine => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationSection;