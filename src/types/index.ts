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

export interface Food {
  id: string;
  category: FoodCategory;
  name: string;
  nameZh: string;
  imageUrl: string;
}

export type OccasionCategory = 
  | 'celebration' 
  | 'casual' 
  | 'romantic' 
  | 'formal' 
  | 'outdoor';

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