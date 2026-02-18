export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface NavLink {
  label: string;
  path: string;
}