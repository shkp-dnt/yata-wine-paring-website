import { Food } from '../types';

export const foods: Food[] = [
  {
    id: 'beef-steak',
    category: 'beef',
    name: 'Steak',
    imageUrl: '/images/foods/beef-steak.jpg'
  },
  {
    id: 'beef-burgers',
    category: 'beef',
    name: 'Burgers',
    imageUrl: '/images/foods/beef-burgers.jpg'
  },
  {
    id: 'beef-stew',
    category: 'beef',
    name: 'Beef Stew',
    imageUrl: '/images/foods/beef-stew.jpg'
  },
  {
    id: 'pork-chops',
    category: 'pork',
    name: 'Pork Chops',
    imageUrl: '/images/foods/pork-chops.jpg'
  },
  {
    id: 'pork-tenderloin',
    category: 'pork',
    name: 'Pork Tenderloin',
    imageUrl: '/images/foods/pork-tenderloin.jpg'
  },
  {
    id: 'poultry-chicken',
    category: 'poultry',
    name: 'Roast Chicken',
    imageUrl: '/images/foods/poultry-chicken.jpg'
  },
  {
    id: 'poultry-turkey',
    category: 'poultry',
    name: 'Turkey',
    imageUrl: '/images/foods/poultry-turkey.jpg'
  },
  {
    id: 'lamb-chops',
    category: 'lamb',
    name: 'Lamb Chops',
    imageUrl: '/images/foods/lamb-chops.jpg'
  },
  {
    id: 'seafood-salmon',
    category: 'seafood',
    name: 'Salmon',
    imageUrl: '/images/foods/seafood-salmon.jpg'
  },
  {
    id: 'seafood-shrimp',
    category: 'seafood',
    name: 'Shrimp',
    imageUrl: '/images/foods/seafood-shrimp.jpg'
  },
  {
    id: 'seafood-lobster',
    category: 'seafood',
    name: 'Lobster',
    imageUrl: '/images/foods/seafood-lobster.jpg'
  },
  {
    id: 'vegetarian-pasta',
    category: 'vegetarian',
    name: 'Pasta Primavera',
    imageUrl: '/images/foods/vegetarian-pasta.jpg'
  },
  {
    id: 'vegetarian-mushroom',
    category: 'vegetarian',
    name: 'Mushroom Risotto',
    imageUrl: '/images/foods/vegetarian-mushroom.jpg'
  },
  {
    id: 'cheese-board',
    category: 'cheese',
    name: 'Cheese Board',
    imageUrl: '/images/foods/cheese-board.jpg'
  },
  {
    id: 'dessert-chocolate',
    category: 'dessert',
    name: 'Chocolate Desserts',
    imageUrl: '/images/foods/dessert-chocolate.jpg'
  }
];

export const getFoodCategories = (): string[] => {
  return [...new Set(foods.map(food => food.category))];
};

export const getFoodsByCategory = (category: string): Food[] => {
  return foods.filter(food => food.category === category);
};