import { Food } from '../types';

export const foods: Food[] = [
  {
    id: 'beef-steak',
    category: 'beef',
    name: 'Steak',
    imageUrl: 'https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg'
  },
  {
    id: 'beef-burgers',
    category: 'beef',
    name: 'Burgers',
    imageUrl: 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg'
  },
  {
    id: 'beef-stew',
    category: 'beef',
    name: 'Beef Stew',
    imageUrl: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg'
  },
  {
    id: 'pork-chops',
    category: 'pork',
    name: 'Pork Chops',
    imageUrl: 'https://images.pexels.com/photos/5718071/pexels-photo-5718071.jpeg'
  },
  {
    id: 'pork-tenderloin',
    category: 'pork',
    name: 'Pork Tenderloin',
    imageUrl: 'https://images.pexels.com/photos/5909785/pexels-photo-5909785.jpeg'
  },
  {
    id: 'poultry-chicken',
    category: 'poultry',
    name: 'Roast Chicken',
    imageUrl: 'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg'
  },
  {
    id: 'poultry-turkey',
    category: 'poultry',
    name: 'Turkey',
    imageUrl: 'https://images.pexels.com/photos/6183562/pexels-photo-6183562.jpeg'
  },
  {
    id: 'lamb-chops',
    category: 'lamb',
    name: 'Lamb Chops',
    imageUrl: 'https://images.pexels.com/photos/6941018/pexels-photo-6941018.jpeg'
  },
  {
    id: 'seafood-salmon',
    category: 'seafood',
    name: 'Salmon',
    imageUrl: 'https://images.pexels.com/photos/3763426/pexels-photo-3763426.jpeg'
  },
  {
    id: 'seafood-shrimp',
    category: 'seafood',
    name: 'Shrimp',
    imageUrl: 'https://images.pexels.com/photos/6420715/pexels-photo-6420715.jpeg'
  },
  {
    id: 'seafood-lobster',
    category: 'seafood',
    name: 'Lobster',
    imageUrl: 'https://images.pexels.com/photos/1716589/pexels-photo-1716589.jpeg'
  },
  {
    id: 'vegetarian-pasta',
    category: 'vegetarian',
    name: 'Pasta Primavera',
    imageUrl: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg'
  },
  {
    id: 'vegetarian-mushroom',
    category: 'vegetarian',
    name: 'Mushroom Risotto',
    imageUrl: 'https://images.pexels.com/photos/5638766/pexels-photo-5638766.jpeg'
  },
  {
    id: 'cheese-board',
    category: 'cheese',
    name: 'Cheese Board',
    imageUrl: 'https://images.pexels.com/photos/1927314/pexels-photo-1927314.jpeg'
  },
  {
    id: 'dessert-chocolate',
    category: 'dessert',
    name: 'Chocolate Desserts',
    imageUrl: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg'
  }
];

export const getFoodCategories = (): string[] => {
  return [...new Set(foods.map(food => food.category))];
};

export const getFoodsByCategory = (category: string): Food[] => {
  return foods.filter(food => food.category === category);
};