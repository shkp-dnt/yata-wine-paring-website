import { wines } from '../data/wines';
import { foods } from '../data/foods';
import { occasions } from '../data/occasions';
import { pairings } from '../data/pairings';
import { Wine, Food, Occasion } from '../types';

export const getWinesByFoodId = (foodId: string): {wines: Wine[], reason: string} => {
  const pairing = pairings.find(p => p.foodId === foodId);
  
  if (!pairing) {
    return {
      wines: [],
      reason: 'No specific pairings found for this food.'
    };
  }
  
  const recommendedWines = pairing.wineIds.map(id => 
    wines.find(wine => wine.id === id)
  ).filter((wine): wine is Wine => wine !== undefined);
  
  return {
    wines: recommendedWines,
    reason: pairing.reason
  };
};

export const getWinesByOccasionId = (occasionId: string): {wines: Wine[], reason: string} => {
  const pairing = pairings.find(p => p.occasionId === occasionId);
  
  if (!pairing) {
    return {
      wines: [],
      reason: 'No specific pairings found for this occasion.'
    };
  }
  
  const recommendedWines = pairing.wineIds.map(id => 
    wines.find(wine => wine.id === id)
  ).filter((wine): wine is Wine => wine !== undefined);
  
  return {
    wines: recommendedWines,
    reason: pairing.reason
  };
};

export const getFoodById = (foodId: string): Food | undefined => {
  return foods.find(food => food.id === foodId);
};

export const getOccasionById = (occasionId: string): Occasion | undefined => {
  return occasions.find(occasion => occasion.id === occasionId);
};

export const getFoodsByCategory = (category: string): Food[] => {
  return foods.filter(food => food.category === category);
};

export const getOccasionsByCategory = (category: string): Occasion[] => {
  return occasions.filter(occasion => occasion.category === category);
};

export const getFoodCategories = (): string[] => {
  return [...new Set(foods.map(food => food.category))];
};

export const getOccasionCategories = (): string[] => {
  return [...new Set(occasions.map(occasion => occasion.category))];
};

export const formatPriceRange = (priceRange: string): string => {
  return priceRange;
};