import React, { useState } from 'react';
import CategoryCard from '../components/CategoryCard';
import { foods, getFoodCategories } from '../data/foods';
import { useTranslation } from 'react-i18next';
import { FoodCategoryZh } from '../types';

const FoodListPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const foodCategories = getFoodCategories();
  
  const displayedFoods = activeCategory 
    ? foods.filter(food => food.category === activeCategory)
    : foods;
  
  const formatCategoryName = (category: string): string => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Inside your component where you display the category
  const { i18n } = useTranslation();
  const isZh = i18n.language === 'zh';
  
  const displayCategory = (category: FoodCategory) => {
    if (isZh) {
      return FoodCategoryZh[category];
    }
    return formatCategoryName(category);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(/images/foods/hero-food.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-serif font-bold text-white text-center">
            {t('common.foodPairingsTitle')}
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
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
              {t('common.allFoods')}
            </button>
            
            {foodCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[#7D0633] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {displayCategory(category)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedFoods.map(food => (
            <CategoryCard
              key={food.id}
              id={food.id}
              name={food.name}
              nameZh={food.nameZh}  // Add this line
              imageUrl={food.imageUrl}
              type="food"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodListPage;