export interface TeamMember {
  name: string;
  role: string;
  quirkyFact: string;
  image: string;
}

export interface Apartment {
  id: string;
  location: string;
  monthlyRent: number;
  features: string[];
  image: string;
  description: string;
}

export interface Location {
  name: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FAQ {
  question: string;
  answer: string;
}
