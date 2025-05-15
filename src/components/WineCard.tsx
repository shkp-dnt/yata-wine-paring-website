import React from 'react';
import { Wine as WineType } from '../types';
import { Link } from 'react-router-dom';

interface WineCardProps {
  wine: WineType;
}

const WineCard: React.FC<WineCardProps> = ({ wine }) => {
  return (
    <Link 
      to={`/wine/${wine.id}`}
      className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl bg-white"
    >
      <div 
        className="h-48 w-full bg-cover bg-center" 
        style={{ backgroundImage: `url(/images/wines/${wine.id}.jpg)` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      
      <div className="absolute bottom-0 w-full p-4 text-white">
        <div className="flex items-center justify-between mb-2">
          <span className="px-3 py-1 bg-[#A5CD39] rounded-full text-xs font-medium">
            {wine.type}
          </span>
          <span className="text-white font-bold">
            {wine.priceRange}
          </span>
        </div>
        
        <h3 className="text-xl font-serif font-bold mb-1 group-hover:text-white/80 transition-colors duration-300">
          {wine.name}
        </h3>
        
        <p className="text-sm font-medium opacity-90 mb-1">
          {wine.variety} · {wine.region}, {wine.country}
        </p>
        
        <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
          <p className="text-sm mt-2 opacity-90">{wine.description}</p>
          <div className="mt-2">
            <p className="text-xs font-medium">Tasting Notes:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {wine.tastingNotes.map((note, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-black/30 rounded text-xs"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};