import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getOccasionById, getWinesByOccasionId } from '../utils/pairingUtils';
import RecommendationSection from '../components/RecommendationSection';
import { Occasion, Wine } from '../types';

const OccasionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [occasion, setOccasion] = useState<Occasion | null>(null);
  const [wines, setWines] = useState<Wine[]>([]);
  const [reason, setReason] = useState<string>('');

  useEffect(() => {
    if (id) {
      const occasionItem = getOccasionById(id);
      if (occasionItem) {
        setOccasion(occasionItem);
        const { wines: recommendedWines, reason: pairingReason } = getWinesByOccasionId(id);
        setWines(recommendedWines);
        setReason(pairingReason);
      }
    }
  }, [id]);

  if (!occasion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Occasion not found</h2>
          <button
            onClick={() => navigate('/occasion')}
            className="text-[#7D0633] hover:text-[#9A1750] flex items-center gap-1 mx-auto"
          >
            <ArrowLeft size={16} />
            <span>Back to all occasions</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-72 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${occasion.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          <button
            onClick={() => navigate('/occasion')}
            className="text-white hover:text-[#D4AF37] flex items-center gap-1 mb-4 self-start transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            <span>Back to all occasions</span>
          </button>
          
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">
            {occasion.name}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200">
            Perfect wine selections for your {occasion.name.toLowerCase()}
          </p>
        </div>
      </div>
      
      <RecommendationSection 
        wines={wines} 
        reason={reason} 
        title={`Wine Recommendations for ${occasion.name}`} 
      />
    </div>
  );
};

export default OccasionDetailPage;