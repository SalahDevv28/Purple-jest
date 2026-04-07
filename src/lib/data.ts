import { TeamMember, Apartment, Location, Product, FAQ, Testimonial, Company } from './types';

export const company: Company = {
  name: "Purple Jest",
  tagline: "Brave Living. Old-Fashioned Value.",
  email: "hello@purplejest.com",
  social: {
    instagram: "https://instagram.com/purplejest",
    twitter: "https://twitter.com/purplejest",
    facebook: "https://facebook.com/purplejest"
  }
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Augustus "Gus" Ironwood',
    role: "Founder & Chief of Steadfastness",
    bio: "Former firefighter and third-generation landlord. Gus believes a handshake is still a contract. He personally inspects every apartment before listing.",
    oldSchoolFact: "Writes all lease agreements with a fountain pen. Refuses to own a smartphone."
  },
  {
    id: 2,
    name: 'Beatrice "Bea" Strongwell',
    role: "Director of Locations",
    bio: "Bea has walked every neighborhood in the city to find hidden gems. She won't rent a place she wouldn't live in herself.",
    oldSchoolFact: "Reads the morning paper - the physical one - with a cup of black coffee."
  },
  {
    id: 3,
    name: 'Cormac "Mac" Oakenhart',
    role: "Resident Liaison & Brave Support",
    bio: "Mac handles maintenance and tenant happiness. He answers calls 24/7 and once fixed a boiler using only a wrench and sheer will.",
    oldSchoolFact: "Keeps a toolbox from 1952. Still works perfectly."
  },
  {
    id: 4,
    name: 'Sloane "The Keys" Hartmann',
    role: "Leasing & Old-School Logistics",
    bio: "Sloane manages tours, paperwork, and keys. She never loses a key - and never loses her temper.",
    oldSchoolFact: "Collects vintage keyrings and has a rotary phone on her desk."
  }
];

export const apartments: Apartment[] = [
  {
    id: "apt-101",
    name: "The Ironwood Loft",
    location: "Old Mill District",
    address: "42 Foundry Street, Floor 3",
    price: 1250,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 680,
    features: ["Exposed brick", "Cast-iron fireplace", "Original hardwood floors", "Shared rooftop"],
    image: "/images/apt-ironwood.jpg",
    available: true
  },
  {
    id: "apt-102",
    name: "The Watchman's Flat",
    location: "Highgate Circle",
    address: "7 Belltower Lane, #2B",
    price: 1450,
    bedrooms: 2,
    bathrooms: 1,
    sqft: 890,
    features: ["Corner unit with 3 exposures", "Stained glass window", "Walk-in closet", "Vintage tile bathroom"],
    image: "/images/apt-watchman.jpg",
    available: true
  },
  {
    id: "apt-103",
    name: "The Steadfast Studio",
    location: "Merchant's Row",
    address: "121 Market Street, #4",
    price: 975,
    bedrooms: 0,
    bathrooms: 1,
    sqft: 520,
    features: ["Murphy bed", "Original tin ceiling", "Modern kitchen (hidden vintage style)", "Secure bike storage"],
    image: "/images/apt-steadfast.jpg",
    available: false
  },
  {
    id: "apt-104",
    name: "The Braveheart Duplex",
    location: "Fortitude Flats",
    address: "9 Courage Avenue, Upper/Lower",
    price: 2100,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1350,
    features: ["Private entrance", "Backyard patio", "Original clawfoot tub", "Wood-burning stove"],
    image: "/images/apt-braveheart.jpg",
    available: true
  },
  {
    id: "apt-105",
    name: "The Jestmaker's Nook",
    location: "Theatre District",
    address: "44 Stage Door Alley, #5C",
    price: 1100,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 610,
    features: ["10-foot ceilings", "Original stage-door access", "Rooftop garden rights", "Built-in bookshelves"],
    image: "/images/apt-jestmaker.jpg",
    available: true
  },
  {
    id: "apt-106",
    name: "The Sentinel Suite",
    location: "Lighthouse Point",
    address: "1 Beacon Street, Penthouse",
    price: 1895,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1050,
    features: ["Panoramic city view", "Gas fireplace", "In-unit laundry", "Keyed elevator"],
    image: "/images/apt-sentinel.jpg",
    available: false
  }
];

export const locations: Location[] = [
  {
    name: "Old Mill District",
    description: "Converted warehouses and factories with 20ft ceilings. Home to artists, blacksmiths, and people who like their coffee strong."
  },
  {
    name: "Highgate Circle",
    description: "Historic brick row houses and quiet tree-lined streets. Old-fashioned charm, modern convenience."
  },
  {
    name: "Merchant's Row",
    description: "Once a trading hub, now filled with indie bookstores, barbershops, and affordable lofts above storefronts."
  },
  {
    name: "Fortitude Flats",
    description: "Family-friendly but no-nonsense. Large apartments, real backyards, and a sense of community that's hard to find."
  },
  {
    name: "Theatre District",
    description: "Bright lights, old marquees, and hidden apartments behind the scenes. For night owls and dreamers."
  },
  {
    name: "Lighthouse Point",
    description: "Higher ground, better views. Slightly more expensive, but worth every penny for the sunrise alone."
  }
];

export const products: Product[] = [
  {
    id: "prod-001",
    name: "Purple Jest Brave T-Shirt",
    description: "Heavy cotton, classic fit. Embroidered logo: a jester's cap intertwined with a lion. Old-school, tough, comfortable.",
    price: 28,
    category: "Apparel",
    image: "/images/shirt-brave.jpg",
    inStock: true
  },
  {
    id: "prod-002",
    name: '"Key to the City" Enamel Pin',
    description: "Gold-toned metal pin shaped like a vintage skeleton key. Adds bravery to any jacket or bag.",
    price: 12,
    category: "Accessories",
    image: "/images/pin-key.jpg",
    inStock: true
  },
  {
    id: "prod-003",
    name: "Neighbourhood Poster - Old Mill District",
    description: 'Screen-printed, 18x24", paper stock with a slight texture. Map of the district from 1923.',
    price: 35,
    category: "Home & Wall Art",
    image: "/images/poster-oldmill.jpg",
    inStock: true
  },
  {
    id: "prod-004",
    name: "First Month Ready Box",
    description: 'Everything you need for move-in: metal tape measure, heavy-duty flashlight, notepad with "Brave Listings" cover, and a lucky brass keychain.',
    price: 45,
    category: "Kit",
    image: "/images/kit-readybox.jpg",
    inStock: true
  },
  {
    id: "prod-005",
    name: "Purple Jest Cap - Old School Wool",
    description: "Six-panel, unstructured, 100% wool. Embroidered crest. Made to last through seasons and adventures.",
    price: 32,
    category: "Apparel",
    image: "/images/cap-wool.jpg",
    inStock: false
  },
  {
    id: "prod-006",
    name: "Handshake Mug",
    description: 'Heavy ceramic mug, 14oz. Inside bottom reads: "A deal is a deal." Outside has a vintage handshake illustration.',
    price: 16,
    category: "Kitchen",
    image: "/images/mug-handshake.jpg",
    inStock: true
  }
];

export const faqs: FAQ[] = [
  {
    question: "How do I apply for an apartment?",
    answer: "Fill out the contact form on our Information page. Gus or Sloane will call you within 24 hours - no online portals, just real conversation."
  },
  {
    question: "Do you allow pets?",
    answer: "Yes, most apartments allow one dog or two cats. We don't charge pet rent, but we do require a handshake agreement that you'll be a responsible owner."
  },
  {
    question: "Are utilities included?",
    answer: "Water and trash are included. Electricity and gas are separate. We provide you with the previous year's average bills upfront - no surprises."
  },
  {
    question: "Do you offer short-term leases?",
    answer: "Our standard lease is 12 months. For longer stays (2+ years), we offer a rent discount. Short-term (3-6 months) may be available in select units - ask Bea."
  },
  {
    question: "What's your deposit?",
    answer: 'One month\'s rent. We don\'t raise it for "administrative fees". Deposit returned within 14 days of move-out, minus only documented damages.'
  },
  {
    question: "Can I tour an apartment without applying first?",
    answer: "Absolutely. We don't believe in blind applications. Mac or Sloane will show you the place in person. Bring your questions."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "James W.",
    apartment: "The Ironwood Loft",
    text: "Purple Jest is a breath of fresh air. No hidden fees, no nonsense. Gus showed me the apartment himself. That's old-fashioned service.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Marcus T.",
    apartment: "The Braveheart Duplex",
    text: "The location is incredible and the team actually cares. When my heater broke, Mac fixed it at 9pm on a Saturday.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Leo C.",
    apartment: "The Steadfast Studio",
    text: "Affordable, quiet, and full of character. I feel like I live in a piece of history. Highly recommend.",
    rating: 4
  }
];

// Featured apartment (first available one)
export const featuredApartment = apartments.find(apt => apt.available) || apartments[0];
