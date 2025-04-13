export interface TravelPackage {
  id: number;
  name: string;
  destination: string;
  image: string;
  duration: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  featured?: boolean;
}

const travelPackages: TravelPackage[] = [
  {
    id: 1,
    name: "Santorini Escape",
    destination: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    duration: "5 Days | 4 Nights",
    description: "Explore the stunning white-washed buildings and blue domes with breathtaking ocean views.",
    price: 1899,
    rating: 4.9,
    reviews: 120,
    featured: true
  },
  {
    id: 2,
    name: "Bali Paradise",
    destination: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    duration: "7 Days | 6 Nights",
    description: "Experience the perfect blend of beaches, culture, and tropical adventure paradise.",
    price: 1299,
    rating: 4.8,
    reviews: 156,
    featured: true
  },
  {
    id: 3,
    name: "Swiss Alps Adventure",
    destination: "Swiss Alps, Switzerland",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    duration: "6 Days | 5 Nights",
    description: "Discover pristine mountain landscapes, charming villages, and outdoor adventures.",
    price: 2499,
    rating: 4.9,
    reviews: 98,
    featured: true
  },
  {
    id: 4,
    name: "Dubai Luxury",
    destination: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    duration: "5 Days | 4 Nights",
    description: "Experience luxury shopping, futuristic architecture, and desert adventures.",
    price: 1799,
    rating: 4.7,
    reviews: 142,
    featured: true
  },
  {
    id: 5,
    name: "Maldives Paradise",
    destination: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    duration: "6 Days | 5 Nights",
    description: "Relax in overwater bungalows with crystal clear waters and pristine beaches.",
    price: 2999,
    rating: 4.9,
    reviews: 175
  },
  {
    id: 6,
    name: "Tokyo Explorer",
    destination: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    duration: "7 Days | 6 Nights",
    description: "Discover the perfect blend of ancient traditions and futuristic technology.",
    price: 2199,
    rating: 4.7,
    reviews: 134
  },
  {
    id: 7,
    name: "Paris Romance",
    destination: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    duration: "5 Days | 4 Nights",
    description: "Experience the city of love with iconic landmarks and charming streets.",
    price: 1799,
    rating: 4.8,
    reviews: 189
  },
  {
    id: 8,
    name: "Caribbean Cruise",
    destination: "Caribbean Islands",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    duration: "8 Days | 7 Nights",
    description: "Sail through the stunning blue waters visiting multiple exotic islands.",
    price: 2499,
    rating: 4.6,
    reviews: 112
  }
];

export default travelPackages;
