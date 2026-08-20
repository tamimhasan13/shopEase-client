// src/data/productData.js

export const popularProducts = [
  {
    id: "p001",
    name: "Premium Running Shoes",
    brand: "ShopEase",
    category: "Footwear",

    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",

    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop",
    ],

    price: 2499,
    oldPrice: 3299,
    discount: 24,

    rating: 4.9,
    reviews: 215,

    stock: 5432,

    description:
      "Premium quality running shoes designed for comfort, durability and everyday performance.",
  },

  {
    id: "p002",
    name: "Classic Leather Hand Bag",
    brand: "ShopEase",
    category: "Bags",

    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",

    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    ],

    price: 1899,
    oldPrice: 2499,
    discount: 24,

    rating: 4.7,
    reviews: 98,

    stock: 1240,

    description:
      "Elegant and stylish leather handbag with premium finishing and spacious interior.",
  },

  {
    id: "p003",
    name: "Premium Casual Shirt",
    brand: "ShopEase",
    category: "Fashion",

    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?q=80&w=800&auto=format&fit=crop",

    images: [
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?q=80&w=800&auto=format&fit=crop",
    ],

    price: 1299,
    oldPrice: 1699,
    discount: 24,

    rating: 4.8,
    reviews: 124,

    stock: 2350,

    description:
      "Comfortable premium casual shirt made with high-quality fabric for everyday wear.",
  },

  {
    id: "p004",
    name: "Wireless Headphones",
    brand: "ShopEase",
    category: "Electronics",

    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",

    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    ],

    price: 2999,
    oldPrice: 3999,
    discount: 25,

    rating: 4.6,
    reviews: 176,

    stock: 845,

    description:
      "Enjoy immersive sound, comfortable design and long-lasting battery performance.",
  },

  {
    id: "p005",
    name: "Elegant Women's Dress",
    brand: "ShopEase",
    category: "Fashion",

    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",

    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
    ],

    price: 1599,
    oldPrice: 2199,
    discount: 27,

    rating: 4.8,
    reviews: 87,

    stock: 1520,

    description:
      "Beautiful modern dress designed with premium fabric and elegant finishing.",
  },

  {
    id: "p006",
    name: "Smart Watch Series 8",
    brand: "ShopEase",
    category: "Electronics",

    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",

    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    ],

    price: 3499,
    oldPrice: 4499,
    discount: 22,

    rating: 4.7,
    reviews: 143,

    stock: 740,

    description:
      "Smart and stylish smartwatch with modern features and a comfortable design.",
  },
];
export const latestProducts = [
  {
    id: 101,
    name: "Premium Casual Cotton Shirt",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=800",
    price: 1850,
    oldPrice: 2400,
    discount: 23,
    rating: 4.7,
    reviews: 128,
  },

  {
    id: 102,
    name: "Classic Leather Shoulder Bag",
    category: "Bags",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
    price: 2950,
    oldPrice: 3800,
    discount: 22,
    rating: 4.8,
    reviews: 96,
  },

  {
    id: 103,
    name: "Premium Running Sneakers",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    price: 4200,
    oldPrice: 5200,
    discount: 19,
    rating: 4.9,
    reviews: 214,
  },

  {
    id: 104,
    name: "Wireless Noise Cancelling Headphones",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    price: 5750,
    oldPrice: 7200,
    discount: 20,
    rating: 4.6,
    reviews: 87,
  },

  {
    id: 105,
    name: "Luxury Matte Lipstick Collection",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800",
    price: 1250,
    oldPrice: 1600,
    discount: 22,
    rating: 4.7,
    reviews: 143,
  },

  {
    id: 106,
    name: "Elegant Gold Plated Necklace",
    category: "Jewellery",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
    price: 2650,
    oldPrice: 3400,
    discount: 22,
    rating: 4.8,
    reviews: 74,
  },

  {
    id: 107,
    name: "Smart Fitness Band Pro",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=800",
    price: 3150,
    oldPrice: 4200,
    discount: 25,
    rating: 4.5,
    reviews: 119,
  },

  {
    id: 108,
    name: "Minimalist Women's Handbag",
    category: "Bags",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800",
    price: 2350,
    oldPrice: 3100,
    discount: 24,
    rating: 4.6,
    reviews: 91,
  },

  {
    id: 109,
    name: "Men's Premium Casual Sneakers",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
    price: 3650,
    oldPrice: 4500,
    discount: 19,
    rating: 4.8,
    reviews: 167,
  },

  {
    id: 110,
    name: "Hydrating Facial Skincare Set",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800",
    price: 1980,
    oldPrice: 2600,
    discount: 24,
    rating: 4.7,
    reviews: 156,
  },
];
export const featuredProducts = [
  {
    id: 201,
    name: "Premium Slim Fit Denim Jacket",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
    price: 2850,
    oldPrice: 3600,
    discount: 21,
    rating: 4.8,
    reviews: 142,
  },

  {
    id: 202,
    name: "Classic Premium Leather Handbag",
    category: "Bags",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800",
    price: 3250,
    oldPrice: 4200,
    discount: 23,
    rating: 4.9,
    reviews: 118,
  },

  {
    id: 203,
    name: "Air Cushion Sports Running Shoes",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800",
    price: 3950,
    oldPrice: 5000,
    discount: 21,
    rating: 4.7,
    reviews: 189,
  },

  {
    id: 204,
    name: "Smart Watch AMOLED Display",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    price: 4850,
    oldPrice: 6200,
    discount: 22,
    rating: 4.8,
    reviews: 231,
  },

  {
    id: 205,
    name: "Professional Makeup Brush Set",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
    price: 1450,
    oldPrice: 1900,
    discount: 24,
    rating: 4.6,
    reviews: 105,
  },

  {
    id: 206,
    name: "Elegant Pearl Drop Earrings",
    category: "Jewellery",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
    price: 1750,
    oldPrice: 2300,
    discount: 24,
    rating: 4.8,
    reviews: 83,
  },

  {
    id: 207,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800",
    price: 2250,
    oldPrice: 2900,
    discount: 22,
    rating: 4.7,
    reviews: 154,
  },

  {
    id: 208,
    name: "Women's Premium Crossbody Bag",
    category: "Bags",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800",
    price: 2750,
    oldPrice: 3500,
    discount: 21,
    rating: 4.7,
    reviews: 97,
  },

  {
    id: 209,
    name: "Premium Leather Casual Loafers",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800",
    price: 3450,
    oldPrice: 4300,
    discount: 20,
    rating: 4.8,
    reviews: 126,
  },

  {
    id: 210,
    name: "Vitamin C Brightening Skincare Kit",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800",
    price: 2150,
    oldPrice: 2800,
    discount: 23,
    rating: 4.9,
    reviews: 178,
  },
];