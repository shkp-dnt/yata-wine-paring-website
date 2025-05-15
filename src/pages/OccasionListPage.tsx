import React, { useState } from 'react';
import CategoryCard from '../components/CategoryCard';
import { occasions } from '../data/occasions';

const OccasionListPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const occasionCategories = [...new Set(occasions.map(occasion => occasion.category))];
  
  const displayedOccasions = activeCategory 
    ? occasions.filter(occasion => occasion.category === activeCategory)
    : occasions;
  
  const formatCategoryName = (category: string): string => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(/images/occasions/hero-occasion.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-serif font-bold text-white text-center">
            Wine Pairings by Occasion
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="mb-8 overflow-x-auto py-2">
          <div className="flex gap-2 min-w-max">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === null
                  ? 'bg-[#7D0633] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Occasions
            </button>
            
            {occasionCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[#7D0633] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {formatCategoryName(category)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Occasion Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedOccasions.map(occasion => (
            <CategoryCard
              key={occasion.id}
              id={occasion.id}
              name={occasion.name}
              imageUrl={occasion.imageUrl}
              type="occasion"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OccasionListPage;