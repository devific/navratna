import { MenuCategory, Testimonial } from "./types";

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "Our Story", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const MENU_DATA: MenuCategory[] = [
  {
    id: "tiffin",
    title: "South Indian Tiffins",
    items: [
      {
        id: "t1",
        name: "Ghee Roast Masala Dosa",
        description:
          "Crispy golden crepe roasted in pure ghee, stuffed with spiced potato masala. Served with chutneys and sambar.",
        price: "₹140",
        isVegetarian: true,
      },
      {
        id: "t2",
        name: "Thatte Idli (Set of 2)",
        description:
          "Large, soft, and fluffy steamed rice cakes served with a dollop of butter and podi.",
        price: "₹90",
        isVegetarian: true,
      },
      {
        id: "t3",
        name: "Medu Vada",
        description:
          "Crispy lentil savoury doughnuts, fluffy on the inside, served with coconut chutney.",
        price: "₹80",
        isVegetarian: true,
      },
      {
        id: "t4",
        name: "Rava Onion Dosa",
        description:
          "Semolina based crepe with chopped onions, green chillies and peppercorns.",
        price: "₹130",
        isVegetarian: true,
        isSpicy: true,
      },
    ],
  },
  {
    id: "chaat",
    title: "Chaats & Snacks",
    items: [
      {
        id: "c1",
        name: "Punjabi Samosa (2 pcs)",
        description:
          "Golden fried pastry shells filled with spiced potatoes and green peas.",
        price: "₹60",
        isVegetarian: true,
      },
      {
        id: "c2",
        name: "Poori Bhaji",
        description:
          "Fluffy fried whole wheat bread served with a traditional spicy potato curry.",
        price: "₹120",
        isVegetarian: true,
      },
      {
        id: "c3",
        name: "Pav Bhaji",
        description:
          "Spicy mashed vegetable curry topped with butter, served with soft toasted bread rolls.",
        price: "₹160",
        isSpicy: true,
        isVegetarian: true,
      },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    items: [
      {
        id: "b1",
        name: "Filter Kaapi",
        description:
          "Classic South Indian coffee brewed in a traditional metal filter and frothy milk.",
        price: "₹50",
        isVegetarian: true,
      },
      {
        id: "b2",
        name: "Masala Chai",
        description:
          "Strong tea brewed with aromatic spices like cardamom, ginger, and cloves.",
        price: "₹40",
        isVegetarian: true,
      },
      {
        id: "b3",
        name: "Sweet Lassi",
        description: "Churned yogurt drink topped with malai and dry fruits.",
        price: "₹80",
        isVegetarian: true,
      },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Kumar",
    role: "Regular Customer",
    text: "The best Masala Dosa in Bangalore. The chutney tastes exactly like home. A must-visit for breakfast.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Priya S.",
    role: "Food Blogger",
    text: "Navratna maintains the authentic taste of Udupi cuisine. Their Filter Coffee is simply divine.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Amit & Neha",
    role: "Local Residents",
    text: "We come here every Sunday for the Poori Bhaji. Fast service, hygiene is top-notch, and the food is delicious.",
    rating: 5,
  },
];

export const IMAGES = {
  // Masala Dosa / South Indian Spread
  hero: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2070&auto=format&fit=crop",
  // Idli Vada
  story:
    "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop",
  // Coffee / Chai ambience
  ambiance:
    "https://images.unsplash.com/photo-1725483990070-509319bc6ecc?q=80&w=2070&auto=format&fit=crop",
  // Featured Dishes
  dish1:
    "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=2070&auto=format&fit=crop", // Dosa
  dish2:
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop", // Samosa
  dish3:
    "https://images.unsplash.com/photo-1605719161691-5d9771fc144f?q=80&w=2070&auto=format&fit=crop", // Poori or Curry
  aboutHero:
    "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=2070&auto=format&fit=crop", // Spices/Veg
};
