export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  oldSchoolFact: string;
}

export interface Apartment {
  id: string;
  name: string;
  location: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  features: string[];
  image: string;
  available: boolean;
}

export interface Location {
  name: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  apartment: string;
  text: string;
  rating: number;
}

export interface Company {
  name: string;
  tagline: string;
  email: string;
  social: {
    instagram: string;
    twitter: string;
    facebook: string;
  };
}
