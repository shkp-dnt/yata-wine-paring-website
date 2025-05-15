import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  name: string;
  imageUrl: string;
  type: 'food' | 'occasion';
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, imageUrl, type }) => {
  return (
    <Link 
      to={`/${type}/${id}`}
      className="relative overflow-hidden rounded-xl shadow-md group transition-transform duration-300 hover:scale-105"
    >
      <div 
        className="h-56 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white text-xl font-bold group-hover:text-[#D4AF37] transition-colors duration-300">
          {name}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;