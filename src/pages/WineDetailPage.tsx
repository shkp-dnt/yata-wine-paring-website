import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, GrapeIcon, MapPin, Tag } from 'lucide-react';
import { wines } from '../data/wines';
import { useTranslation } from 'react-i18next';
import { WineTypeZh } from '../types';

const WineDetailPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const wine = wines.find(w => w.id === id);

  if (!wine) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">{t('common.notFound')}</h2>
          <button
            onClick={() => navigate(-1)}
            className="text-[#7D0633] hover:text-[#9A1750] flex items-center gap-1 mx-auto"
          >
            <ArrowLeft size={16} />
            <span>{t('common.goBack')}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="text-[#7D0633] hover:text-[#9A1750] flex items-center gap-1 mb-6 transition-colors duration-300"
        >
          <ArrowLeft size={16} />
          <span>{t('common.back')}</span>
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div 
                className="h-72 md:h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${wine.imageUrl})` }}
              />
            </div>

            <div className="md:w-1/2 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-[#7D0633] text-white rounded-full text-sm">
                  {isZh ? WineTypeZh[wine.type] : wine.type}
                </span>
                <span className="text-[#D4AF37] font-bold">
                  {wine.priceRange}
                </span>
              </div>

              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                {isZh ? wine.nameZh : wine.name}
              </h1>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-1 text-gray-600">
                  <GrapeIcon size={18} />
                  <span>{isZh ? wine.varietyZh : wine.variety}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin size={18} />
                  <span>
                    {isZh ? wine.regionZh : wine.region}, {isZh ? wine.countryZh : wine.country}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                {isZh ? wine.descriptionZh : wine.description}
              </p>

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-3">{t('common.tastingNotes')}</h2>
                <div className="flex flex-wrap gap-2">
                  {(isZh ? wine.tastingNotesZh : wine.tastingNotes).map((note, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineDetailPage;