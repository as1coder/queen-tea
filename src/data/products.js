// Tea Products Data with IDs and Images
export const products = [
  {
    id: '1',
    badge: 'Loose Leaf',
    title: 'Emerald Jasmine Pearls',
    origin: 'Fujian Province',
    description: 'Hand-rolled pearls infused with fresh night-blooming jasmine flowers. Floral, smooth, and clean.',
    fullDescription: 'Our signature Emerald Jasmine Pearls are meticulously hand-rolled in Fujian Province, China. Each pearl unfurls gracefully when steeped, releasing the delicate aroma of night-blooming jasmine blossoms. This premium loose leaf tea offers a smooth, floral profile with clean notes that linger on the palate.',
    price: 24,
    image: '/Jasmine-Pearls.webp',
    sizes: [
      { size: '50g', price: 24 },
      { size: '100g', price: 42 },
      { size: '250g', price: 95 }
    ],
    rating: 4.8,
    reviews: 156,
    inStock: true
  },
  {
    id: '2',
    badge: 'Golden Tippy',
    title: 'Velvet Oolong',
    origin: 'Nantou, Taiwan',
    description: 'Artisanally roasted semi-oxidized leaves with beautiful complex notes of roasted pecan and rich wild honey.',
    fullDescription: 'Hailing from the misty mountains of Nantou, Taiwan, our Velvet Oolong is a masterpiece of craftsmanship. Each leaf is carefully selected and roasted to perfection, developing complex notes of roasted pecan, wild honey, and a subtle mineral undertone. The semi-oxidized leaves create a rich, velvety mouthfeel.',
    price: 28,
    image: '/velvet-oolong.webp',
    sizes: [
      { size: '50g', price: 28 },
      { size: '100g', price: 48 },
      { size: '250g', price: 108 }
    ],
    rating: 4.9,
    reviews: 203,
    inStock: true
  },
  {
    id: '3',
    badge: 'Wellness',
    title: 'Crimson Rose Tisane',
    origin: 'Organic Infusion',
    description: 'A vibrant caffeine-free blend combining tangy Egyptian hibiscus with delicate whole Damask rose petals.',
    fullDescription: 'Our Crimson Rose Tisane is a caffeine-free celebration of natural flavors and wellness benefits. Blending Egyptian hibiscus known for its antioxidant properties with delicate Damask rose petals, this infusion offers a beautiful color and refreshing tart-sweet flavor profile. Perfect for any time of day.',
    price: 19,
    image: '/crimson-rose.webp',
    sizes: [
      { size: '50g', price: 19 },
      { size: '100g', price: 32 },
      { size: '250g', price: 72 }
    ],
    rating: 4.7,
    reviews: 89,
    inStock: true
  }
];

// Helper function to get product by ID
export const getProductById = (id) => {
  return products.find(p => p.id === id);
};

// Helper function to get all products
export const getAllProducts = () => {
  return products;
};
