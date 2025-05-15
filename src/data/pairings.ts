import { Pairing } from '../types';

export const pairings: Pairing[] = [
  // Beef pairings
  {
    foodId: 'beef-steak',
    wineIds: ['cab-sauv-1', 'malbec-1', 'syrah-1'],
    reason: 'Full-bodied red wines with robust tannins complement the rich flavors of steak.'
  },
  {
    foodId: 'beef-burgers',
    wineIds: ['malbec-1', 'syrah-1', 'rioja-1'],
    reason: 'Medium to full-bodied reds with good fruit stand up to the savory flavors of burgers.'
  },
  {
    foodId: 'beef-stew',
    wineIds: ['syrah-1', 'rioja-1', 'cab-sauv-1'],
    reason: 'Rich, complex reds with good structure pair well with slow-cooked beef stews.'
  },
  
  // Pork pairings
  {
    foodId: 'pork-chops',
    wineIds: ['pinot-noir-1', 'rioja-1', 'chard-1'],
    reason: 'Medium-bodied reds or fuller whites work with pork\'s relatively milder flavor.'
  },
  {
    foodId: 'pork-tenderloin',
    wineIds: ['pinot-noir-1', 'chard-1', 'riesling-1'],
    reason: 'The mild, lean nature of tenderloin pairs with elegant reds and medium-bodied whites.'
  },
  
  // Poultry pairings
  {
    foodId: 'poultry-chicken',
    wineIds: ['chard-1', 'pinot-noir-1', 'riesling-1'],
    reason: 'Versatile chicken works with both medium whites and lighter reds.'
  },
  {
    foodId: 'poultry-turkey',
    wineIds: ['pinot-noir-1', 'riesling-1', 'chard-1'],
    reason: 'Turkey\'s slightly gamey flavor pairs with both fruity reds and aromatic whites.'
  },
  
  // Lamb pairings
  {
    foodId: 'lamb-chops',
    wineIds: ['syrah-1', 'rioja-1', 'malbec-1'],
    reason: 'Lamb\'s distinctive flavor pairs beautifully with spicy, herbaceous reds.'
  },
  
  // Seafood pairings
  {
    foodId: 'seafood-salmon',
    wineIds: ['pinot-noir-1', 'chard-1', 'rose-1'],
    reason: 'Salmon\'s rich, fatty nature works with lighter reds or medium-bodied whites.'
  },
  {
    foodId: 'seafood-shrimp',
    wineIds: ['sauv-blanc-1', 'prosecco-1', 'chard-1'],
    reason: 'Crisp, refreshing whites enhance shrimp\'s delicate sweetness.'
  },
  {
    foodId: 'seafood-lobster',
    wineIds: ['chard-1', 'prosecco-1', 'sauv-blanc-1'],
    reason: 'The luxury of lobster pairs with rich whites or celebratory sparklings.'
  },
  
  // Vegetarian pairings
  {
    foodId: 'vegetarian-pasta',
    wineIds: ['sauv-blanc-1', 'pinot-noir-1', 'chard-1'],
    reason: 'Fresh vegetable pastas pair with crisp whites or light, fruity reds.'
  },
  {
    foodId: 'vegetarian-mushroom',
    wineIds: ['pinot-noir-1', 'chard-1', 'rioja-1'],
    reason: 'Earthy mushrooms pair wonderfully with similarly earthy wines.'
  },
  
  // Cheese pairings
  {
    foodId: 'cheese-board',
    wineIds: ['pinot-noir-1', 'chard-1', 'port-1', 'riesling-1'],
    reason: 'Versatile wine options for the varied flavors of a cheese board.'
  },
  
  // Dessert pairings
  {
    foodId: 'dessert-chocolate',
    wineIds: ['port-1', 'syrah-1', 'malbec-1'],
    reason: 'Sweet dessert wines or fruit-forward reds complement chocolate\'s richness.'
  },
  
  // Celebration occasion pairings
  {
    occasionId: 'celebration-wedding',
    wineIds: ['prosecco-1', 'chard-1', 'pinot-noir-1'],
    reason: 'Special celebrations call for elegant, crowd-pleasing wines.'
  },
  {
    occasionId: 'celebration-anniversary',
    wineIds: ['prosecco-1', 'cab-sauv-1', 'chard-1'],
    reason: 'Commemorate special moments with memorable, high-quality wines.'
  },
  {
    occasionId: 'celebration-birthday',
    wineIds: ['prosecco-1', 'rose-1', 'malbec-1'],
    reason: 'Festive, approachable wines to enhance birthday celebrations.'
  },
  
  // Casual occasion pairings
  {
    occasionId: 'casual-dinner',
    wineIds: ['malbec-1', 'chard-1', 'sauv-blanc-1'],
    reason: 'Approachable, versatile wines for relaxed gatherings.'
  },
  {
    occasionId: 'casual-picnic',
    wineIds: ['rose-1', 'sauv-blanc-1', 'prosecco-1'],
    reason: 'Light, refreshing wines that are perfect for outdoor enjoyment.'
  },
  
  // Romantic occasion pairings
  {
    occasionId: 'romantic-date',
    wineIds: ['pinot-noir-1', 'prosecco-1', 'chard-1'],
    reason: 'Elegant, sensuous wines to enhance romantic settings.'
  },
  
  // Formal occasion pairings
  {
    occasionId: 'formal-business',
    wineIds: ['cab-sauv-1', 'chard-1', 'rioja-1'],
    reason: 'Classic, respected wines that make a sophisticated impression.'
  },
  
  // Outdoor occasion pairings
  {
    occasionId: 'outdoor-beach',
    wineIds: ['rose-1', 'sauv-blanc-1', 'prosecco-1'],
    reason: 'Refreshing, easy-drinking options for warm weather enjoyment.'
  },
  {
    occasionId: 'outdoor-barbecue',
    wineIds: ['malbec-1', 'syrah-1', 'rioja-1'],
    reason: 'Bold reds that can stand up to smoky, grilled flavors.'
  }
];