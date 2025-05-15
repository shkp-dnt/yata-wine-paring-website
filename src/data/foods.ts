import { Food } from '../types';

export const foods: Food[] = [
  {
    id: 'beef-steak',
    category: 'beef',
    name: 'Steak',
    nameZh: '牛排',
    imageUrl: '/images/foods/beef-steak.jpg'
  },
  {
    id: 'beef-burgers',
    category: 'beef',
    name: 'Burgers',
    nameZh: '漢堡',
    imageUrl: '/images/foods/beef-burgers.jpg'
  },
  {
    id: 'beef-stew',
    category: 'beef',
    name: 'Beef Stew',
    nameZh: '燉牛肉',
    imageUrl: '/images/foods/beef-stew.jpg'
  },
  {
    id: 'pork-chops',
    category: 'pork',
    name: 'Pork Chops',
    nameZh: '豬排',
    imageUrl: '/images/foods/pork-chops.jpg'
  },
  {
    id: 'pork-tenderloin',
    category: 'pork',
    name: 'Pork Tenderloin',
    nameZh: '豬里脊',
    imageUrl: '/images/foods/pork-tenderloin.jpg'
  },
  {
    id: 'poultry-chicken',
    category: 'poultry',
    name: 'Roast Chicken',
    nameZh: '烤雞',
    imageUrl: '/images/foods/poultry-chicken.jpg'
  },
  {
    id: 'poultry-turkey',
    category: 'poultry',
    name: 'Turkey',
    nameZh: '火雞',
    imageUrl: '/images/foods/poultry-turkey.jpg'
  },
  {
    id: 'lamb-chops',
    category: 'lamb',
    name: 'Lamb Chops',
    nameZh: '羊排',
    imageUrl: '/images/foods/lamb-chops.jpg'
  },
  {
    id: 'seafood-salmon',
    category: 'seafood',
    name: 'Salmon',
    nameZh: '三文魚',
    imageUrl: '/images/foods/seafood-salmon.jpg'
  },
  {
    id: 'seafood-shrimp',
    category: 'seafood',
    name: 'Shrimp',
    nameZh: '蝦',
    imageUrl: '/images/foods/seafood-shrimp.jpg'
  },
  {
    id: 'seafood-lobster',
    category: 'seafood',
    name: 'Lobster',
    nameZh: '龍蝦',
    imageUrl: '/images/foods/seafood-lobster.jpg'
  },
  {
    id: 'vegetarian-pasta',
    category: 'vegetarian',
    name: 'Pasta Primavera',
    nameZh: '春季蔬菜意大利麵',
    imageUrl: '/images/foods/vegetarian-pasta.jpg'
  },
  {
    id: 'vegetarian-mushroom',
    category: 'vegetarian',
    name: 'Mushroom Risotto',
    nameZh: '蘑菇燉飯',
    imageUrl: '/images/foods/vegetarian-mushroom.jpg'
  },
  {
    id: 'cheese-board',
    category: 'cheese',
    name: 'Cheese Board',
    nameZh: '芝士拼盤',
    imageUrl: '/images/foods/cheese-board.jpg'
  },
  {
    id: 'dessert-chocolate',
    category: 'dessert',
    name: 'Chocolate Desserts',
    nameZh: '巧克力甜點',
    imageUrl: '/images/foods/dessert-chocolate.jpg'
  }
];

export const getFoodCategories = (): string[] => {
  return [...new Set(foods.map(food => food.category))];
};

export const getFoodsByCategory = (category: string): Food[] => {
  return foods.filter(food => food.category === category);
};