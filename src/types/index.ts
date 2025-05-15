export type WineType = 'red' | 'white' | 'rosé' | 'sparkling' | 'dessert';

export type PriceRange = '$' | '$$' | '$$$' | '$$$$';

export interface Wine {
  id: string;
  name: string;
  nameZh: string;
  type: WineType;
  variety: string;
  varietyZh: string;
  region: string;
  regionZh: string;
  country: string;
  countryZh: string;
  priceRange: PriceRange;
  description: string;
  descriptionZh: string;
  tastingNotes: string[];
  tastingNotesZh: string[];
  imageUrl: string;
}

export type FoodCategory = 
  | 'beef' 
  | 'pork' 
  | 'poultry' 
  | 'lamb' 
  | 'seafood' 
  | 'vegetarian' 
  | 'cheese' 
  | 'dessert';

export const FoodCategoryZh: Record<FoodCategory, string> = {
  beef: '牛肉',
  pork: '豬肉',
  poultry: '家禽',
  lamb: '羊肉',
  seafood: '海鮮',
  vegetarian: '素食',
  cheese: '奶酪',
  dessert: '甜點'
};

export type OccasionCategory = 
  | 'celebration' 
  | 'casual' 
  | 'romantic' 
  | 'formal' 
  | 'outdoor';

export const OccasionCategoryZh: Record<OccasionCategory, string> = {
  celebration: '慶祝',
  casual: '休閒',
  romantic: '浪漫',
  formal: '正式',
  outdoor: '戶外'
};

export type WineType = 'red' | 'white' | 'rosé' | 'sparkling' | 'dessert';

export const WineTypeZh: Record<WineType, string> = {
  red: '紅葡萄酒',
  white: '白葡萄酒',
  rosé: '桃紅葡萄酒',
  sparkling: '氣泡酒',
  dessert: '甜酒'
};

export interface Food {
  id: string;
  category: FoodCategory;
  name: string;
  nameZh: string;
  imageUrl: string;
}

export interface Occasion {
  id: string;
  category: OccasionCategory;
  name: string;
  nameZh: string;
  imageUrl: string;
}

export interface Pairing {
  foodId?: string;
  occasionId?: string;
  wineIds: string[];
  reason: string;
  reasonZh: string;
}