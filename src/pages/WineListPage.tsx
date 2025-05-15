import React, { useState } from 'react';
import { wines } from '../data/wines';
import WineCard from '../components/WineCard';

const WineListPage: React.FC = () => {
  const [activeType, setActiveType] = useState<string | null>(null);
  const wineTypes = [...new Set(wines.map(wine => wine.type))];
  
  const displayedWines = activeType 
    ? wines.filter(wine => wine.type === activeType)
    : wines;
  
  const formatTypeName = (type: string): string => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(/images/wines/hero-wine.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-serif font-bold text-white text-center">
            Our Wine Collection
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Type Filter */}
        <div className="mb-8 overflow-x-auto py-2">
          <div className="flex gap-2 min-w-max">
            <button
              onClick={() => setActiveType(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeType === null
                  ? 'bg-[#A5CD39] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Wines
            </button>
            
            {wineTypes.map(type => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeType === type
                    ? 'bg-[#A5CD39] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {formatTypeName(type)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Wine Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedWines.map(wine => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WineListPage