import { TeamMember, Apartment, Location, Product, FAQ } from './types';

export const teamMembers: TeamMember[] = [
  {
    name: "Marcus Hale",
    role: "Founder & Lead Developer",
    quirkyFact: "Reads the newspaper in print.",
    image: "/team/marcus.jpg"
  },
  {
    name: "Victor Stone",
    role: "Property Manager",
    quirkyFact: "Still uses a fountain pen for signatures.",
    image: "/team/victor.jpg"
  },
  {
    name: "Arthur Cross",
    role: "Renovation Specialist",
    quirkyFact: "Collects vintage tools from the 1920s.",
    image: "/team/arthur.jpg"
  },
  {
    name: "Elias Grant",
    role: "Tenant Relations",
    quirkyFact: "Believes a handshake is worth more than a contract.",
    image: "/team/elias.jpg"
  }
];

export const featuredApartment: Apartment = {
  id: "apt-001",
  location: "The Old Quarter, Downtown",
  monthlyRent: 850,
  features: ["Exposed brick walls", "Original hardwood floors", "Wrought iron balcony", "High ceilings"],
  image: "/apartments/old-quarter.jpg",
  description: "A classic apartment in the heart of the city. Original character meets modern comfort."
};

export const locations: Location[] = [
  {
    name: "The Old Quarter",
    description: "Historic downtown living with classic architecture and modern amenities. Walk to everything that matters.",
    image: "/locations/old-quarter.jpg"
  },
  {
    name: "Riverside District",
    description: "Waterfront apartments with stunning views. Quiet streets, strong community, real value.",
    image: "/locations/riverside.jpg"
  },
  {
    name: "Merchant's Row",
    description: "Converted warehouse lofts in the old trading district. Raw character, prime location.",
    image: "/locations/merchants.jpg"
  },
  {
    name: "The Heights",
    description: "Elevated living with panoramic city views. Classic buildings, unbeatable prices.",
    image: "/locations/heights.jpg"
  },
  {
    name: "Forge Lane",
    description: "Industrial-chic apartments in the former artisan quarter. Bold spaces for bold people.",
    image: "/locations/forge.jpg"
  },
  {
    name: "Harbor Point",
    description: "Where the city meets the water. Fresh air, solid buildings, honest pricing.",
    image: "/locations/harbor.jpg"
  }
];

export const products: Product[] = [
  {
    id: "prod-001",
    name: "Purple Jest Classic T-Shirt",
    price: 35,
    image: "/products/tshirt.jpg",
    description: "Classic fit, old-school logo. Built to last."
  },
  {
    id: "prod-002",
    name: "Key to the City Enamel Pin",
    price: 15,
    image: "/products/pin.jpg",
    description: "Wear your independence. Solid enamel, butterfly clasp."
  },
  {
    id: "prod-003",
    name: "Vintage Neighbourhood Poster",
    price: 25,
    image: "/products/poster.jpg",
    description: "Printed on heavy stock. Classic map style, muted tones."
  },
  {
    id: "prod-004",
    name: "First Month Ready Box",
    price: 49,
    image: "/products/box.jpg",
    description: "Tape measure, flashlight, notepad. Everything you need to start."
  }
];

export const faqs: FAQ[] = [
  {
    question: "What's the deposit amount?",
    answer: "We keep it simple: one month's rent as a security deposit. No hidden fees, no surprises. What you see is what you get."
  },
  {
    question: "Are pets allowed?",
    answer: "Yes. We believe a man and his dog belong together. A small pet deposit may apply, but we're not here to separate you from your companion."
  },
  {
    question: "What are the lease terms?",
    answer: "Standard 12-month leases. We also offer month-to-month after the initial term. We believe in earning your stay, not trapping you."
  },
  {
    question: "How do I schedule a tour?",
    answer: "Email us at hello@purplejest.com or use the contact form on our Information page. We'll arrange a time that works for you. No pressure, no sales pitch."
  },
  {
    question: "What's included in the rent?",
    answer: "Water and trash collection are included. Electricity and internet are your responsibility. We believe in transparent pricing – you only pay for what you use."
  }
];
