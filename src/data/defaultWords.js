export const DEFAULT_WORD_CATEGORIES = [
  {
    id: 'locations',
    name: 'Locations',
    words: [
      'Beach', 'School', 'Hospital', 'Airport', 'Restaurant',
      'Library', 'Museum', 'Gym', 'Park', 'Cinema',
      'Supermarket', 'Bank', 'Zoo', 'Circus', 'Space Station',
      'Casino', 'Theater', 'University', 'Farm', 'Hotel'
    ]
  },
  {
    id: 'food',
    name: 'Food',
    words: [
      'Pizza', 'Sushi', 'Burger', 'Ice Cream', 'Taco',
      'Spaghetti', 'Pancake', 'Salad', 'Steak', 'Donut',
      'Chocolate', 'Coffee', 'Sandwich', 'Soup', 'Popcorn',
      'Curry', 'Croissant', 'Falafel', 'Paella', 'Dumpling'
    ]
  },
  {
    id: 'animals',
    name: 'Animals',
    words: [
      'Lion', 'Elephant', 'Penguin', 'Giraffe', 'Monkey',
      'Shark', 'Eagle', 'Dolphin', 'Tiger', 'Kangaroo',
      'Panda', 'Bear', 'Wolf', 'Zebra', 'Crocodile',
      'Octopus', 'Camel', 'Rhinoceros', 'Peacock', 'Koala'
    ]
  },
  {
    id: 'objects',
    name: 'Household Objects',
    words: [
      'Chair', 'Table', 'Lamp', 'Refrigerator', 'Television',
      'Bed', 'Mirror', 'Toaster', 'Microwave', 'Clock',
      'Sofa', 'Computer', 'Phone', 'Book', 'Pillow',
      'Vase', 'Rug', 'Blender', 'Fan', 'Piano'
    ]
  },
  {
    id: 'egyptian',
    name: 'ENTA SPY?',
    words: [
      'Pyramid', 'Sphinx', 'Nile', 'Pharaoh', 'Mummy',
      'Camel', 'Desert', 'Hieroglyphics', 'Papyrus', 'Cleopatra',
      'Tutankhamun', 'Cairo', 'Luxor', 'Red Sea', 'Felucca'
    ]
  }
];

export const getRandomDefaultWord = (categoryId = 'random') => {
  let pool = DEFAULT_WORD_CATEGORIES;

  if (categoryId !== 'random') {
    const selected = DEFAULT_WORD_CATEGORIES.find(c => c.id === categoryId);
    if (selected) {
      pool = [selected];
    }
  }

  const category = pool[Math.floor(Math.random() * pool.length)];
  const word = category.words[Math.floor(Math.random() * category.words.length)];
  return word;
};
