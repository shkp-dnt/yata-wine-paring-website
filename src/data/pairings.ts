import { Pairing } from '../types';

export const pairings: Pairing[] = [
  // Beef pairings
  {
    foodId: 'beef-steak',
    wineIds: ['cab-sauv-1', 'malbec-1', 'syrah-1'],
    reason: 'Full-bodied red wines with robust tannins complement the rich flavors of steak.',
    reasonZh: '酒體飽滿、單寧豐富的紅酒能完美襯托牛排的濃郁風味。'
  },
  {
    foodId: 'beef-burgers',
    wineIds: ['malbec-1', 'syrah-1', 'rioja-1'],
    reason: 'Medium to full-bodied reds with good fruit stand up to the savory flavors of burgers.',
    reasonZh: '中等至飽滿酒體的紅酒，具有豐富的水果味，能配合漢堡的鮮美口感。'
  },
  {
    foodId: 'beef-stew',
    wineIds: ['syrah-1', 'rioja-1', 'cab-sauv-1'],
    reason: 'Rich, complex reds with good structure pair well with slow-cooked beef stews.',
    reasonZh: '結構良好、層次豐富的紅酒與慢燉牛肉的味道相得益彰。'
  },
  
  // Pork pairings
  {
    foodId: 'pork-chops',
    wineIds: ['pinot-noir-1', 'rioja-1', 'chard-1'],
    reason: 'Medium-bodied reds or fuller whites work with pork\'s relatively milder flavor.',
    reasonZh: '中等酒體的紅酒或較飽滿的白酒適合搭配豬肉相對溫和的味道。'
  },
  {
    foodId: 'pork-tenderloin',
    wineIds: ['pinot-noir-1', 'chard-1', 'riesling-1'],
    reason: 'The mild, lean nature of tenderloin pairs with elegant reds and medium-bodied whites.',
    reasonZh: '里脊肉的清淡口感適合搭配優雅的紅酒和中等酒體的白酒。'
  },
  
  // Poultry pairings
  {
    foodId: 'poultry-chicken',
    wineIds: ['chard-1', 'pinot-noir-1', 'riesling-1'],
    reason: 'Versatile chicken works with both medium whites and lighter reds.',
    reasonZh: '百搭的雞肉可以配搭中等白酒和清淡紅酒。'
  },
  {
    foodId: 'poultry-turkey',
    wineIds: ['pinot-noir-1', 'riesling-1', 'chard-1'],
    reason: 'Turkey\'s slightly gamey flavor pairs with both fruity reds and aromatic whites.',
    reasonZh: '火雞略帶野味的風味適合搭配果香紅酒和芳香白酒。'
  },
  
  // Lamb pairings
  {
    foodId: 'lamb-chops',
    wineIds: ['syrah-1', 'rioja-1', 'malbec-1'],
    reason: 'Lamb\'s distinctive flavor pairs beautifully with spicy, herbaceous reds.',
    reasonZh: '羊肉的特殊風味與辛香、草本風格的紅酒是絕配。'
  },
  
  // Seafood pairings
  {
    foodId: 'seafood-salmon',
    wineIds: ['pinot-noir-1', 'chard-1', 'rose-1'],
    reason: 'Salmon\'s rich, fatty nature works with lighter reds or medium-bodied whites.',
    reasonZh: '三文魚的油潤口感適合搭配清淡紅酒或中等酒體的白酒。'
  },
  {
    foodId: 'seafood-shrimp',
    wineIds: ['sauv-blanc-1', 'prosecco-1', 'chard-1'],
    reason: 'Crisp, refreshing whites enhance shrimp\'s delicate sweetness.',
    reasonZh: '清爽怡人的白酒能襯托蝦的細膩甜味。'
  },
  {
    foodId: 'seafood-lobster',
    wineIds: ['chard-1', 'prosecco-1', 'sauv-blanc-1'],
    reason: 'The luxury of lobster pairs with rich whites or celebratory sparklings.',
    reasonZh: '奢華的龍蝦適合搭配濃郁的白酒或慶祝場合的氣泡酒。'
  },
  
  // Vegetarian pairings
  {
    foodId: 'vegetarian-pasta',
    wineIds: ['sauv-blanc-1', 'pinot-noir-1', 'chard-1'],
    reason: 'Fresh vegetable pastas pair with crisp whites or light, fruity reds.',
    reasonZh: '新鮮蔬菜意大利麵配以清脆的白酒或清淡果香的紅酒。'
  },
  {
    foodId: 'vegetarian-mushroom',
    wineIds: ['pinot-noir-1', 'chard-1', 'rioja-1'],
    reason: 'Earthy mushrooms pair wonderfully with similarly earthy wines.',
    reasonZh: '蘑菇的土香與帶有相似土味的葡萄酒相得益彰。'
  },
  
  // Cheese pairings
  {
    foodId: 'cheese-board',
    wineIds: ['pinot-noir-1', 'chard-1', 'port-1', 'riesling-1'],
    reason: 'Versatile wine options for the varied flavors of a cheese board.',
    reasonZh: '多樣化的葡萄酒選擇可配合芝士拼盤的各種風味。'
  },
  
  // Dessert pairings
  {
    foodId: 'dessert-chocolate',
    wineIds: ['port-1', 'syrah-1', 'malbec-1'],
    reason: 'Sweet dessert wines or fruit-forward reds complement chocolate\'s richness.',
    reasonZh: '甜美的甜酒或果香濃郁的紅酒能襯托巧克力的醇厚。'
  },
  
  // Celebration occasion pairings
  {
    occasionId: 'celebration-wedding',
    wineIds: ['prosecco-1', 'chard-1', 'pinot-noir-1'],
    reason: 'Special celebrations call for elegant, crowd-pleasing wines.',
    reasonZh: '特別的慶典需要優雅、廣受歡迎的葡萄酒。'
  },
  {
    occasionId: 'celebration-anniversary',
    wineIds: ['prosecco-1', 'cab-sauv-1', 'chard-1'],
    reason: 'Commemorate special moments with memorable, high-quality wines.',
    reasonZh: '用難忘的優質葡萄酒紀念特殊時刻。'
  },
  {
    occasionId: 'celebration-birthday',
    wineIds: ['prosecco-1', 'rose-1', 'malbec-1'],
    reason: 'Festive, approachable wines to enhance birthday celebrations.',
    reasonZh: '歡快、易飲的葡萄酒為生日慶典增添氣氛。'
  },
  
  // Casual occasion pairings
  {
    occasionId: 'casual-dinner',
    wineIds: ['malbec-1', 'chard-1', 'sauv-blanc-1'],
    reason: 'Approachable, versatile wines for relaxed gatherings.',
    reasonZh: '輕鬆聚會選擇平易近人、百搭的葡萄酒。'
  },
  {
    occasionId: 'casual-picnic',
    wineIds: ['rose-1', 'sauv-blanc-1', 'prosecco-1'],
    reason: 'Light, refreshing wines that are perfect for outdoor enjoyment.',
    reasonZh: '清爽怡人的葡萄酒最適合戶外享用。'
  },
  
  // Romantic occasion pairings
  {
    occasionId: 'romantic-date',
    wineIds: ['pinot-noir-1', 'prosecco-1', 'chard-1'],
    reason: 'Elegant, sensuous wines to enhance romantic settings.',
    reasonZh: '優雅、感性的葡萄酒營造浪漫氛圍。'
  },
  
  // Formal occasion pairings
  {
    occasionId: 'formal-business',
    wineIds: ['cab-sauv-1', 'chard-1', 'rioja-1'],
    reason: 'Classic, respected wines that make a sophisticated impression.',
    reasonZh: '經典、受人尊敬的葡萄酒給人精緻的印象。'
  },
  
  // Outdoor occasion pairings
  {
    occasionId: 'outdoor-beach',
    wineIds: ['rose-1', 'sauv-blanc-1', 'prosecco-1'],
    reason: 'Refreshing, easy-drinking options for warm weather enjoyment.',
    reasonZh: '清爽易飲的葡萄酒最適合溫暖天氣享用。'
  },
  {
    occasionId: 'outdoor-barbecue',
    wineIds: ['malbec-1', 'syrah-1', 'rioja-1'],
    reason: 'Bold reds that can stand up to smoky, grilled flavors.',
    reasonZh: '濃郁的紅酒能配合煙燻和烤製的風味。'
  }
];