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
      className="flex flex-col rounded-xl shadow-md group transition-transform duration-300 hover:scale-105 bg-white"
    >
      <div 
        className="h-56 w-full bg-cover bg-center rounded-t-xl"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      <div className="p-4">
        <h3 className="text-gray-900 text-xl font-bold group-hover:text-[#D4AF37] transition-colors duration-300">
          {name}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;