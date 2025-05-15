import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  name: string;
  nameZh: string;  // Add this property
  imageUrl: string;
  type: 'food' | 'occasion';
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, nameZh, imageUrl, type }) => {
  const { i18n } = useTranslation();
  const isZh = i18n.language === 'zh';
  
  return (
    <Link 
      to={`/${type}/${id}`}
      className="group relative overflow-hidden rounded-xl shadow-lg"
    >
      <div 
        className="h-48 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute bottom-0 p-4">
        <h3 className="text-xl font-bold text-white">
          {isZh ? nameZh : name}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;