export const EVENTS_DATA = [
  {
    id: "ibiza-sunset-blr",
    title: "IBIZA SUNSET SESSIONS 🌴",
    subtitle: "Bangalore, Ibiza is calling. The sunset is about to hit different.",
    category: "Sunset Sessions",
    tag: "SIGNATURE EVENT",
    date: "Saturday, Oct 3, 2026",
    time: "4:00 PM - 11:00 PM",
    venue: "Skyline Open Air Deck, UB City, Bangalore",
    priceText: "Free Guestlist / Passes from ₹499",
    spotsLeft: 42,
    status: "Selling Fast",
    lineup: ["DJ S1rcar", "Txrun Reddy", "Aadit Live", "Special Guest Headliner"],
    genres: ["Afro House", "Melodic Techno", "Sunset Grooves"],
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
    description: "Immerse into golden hour magic with tropical cocktails, state-of-the-art acoustics, and Ibiza-inspired soundscapes overlooking Bangalore's skyline.",
    passes: [
      { id: "gl-female", name: "Free Ladies Guestlist", price: 0, perk: "Complimentary entry before 6:30 PM + 1 welcome drink" },
      { id: "gl-couple", name: "Couples Free Guestlist", price: 0, perk: "Free entry for couples arriving before 6:30 PM" },
      { id: "eb-stag", name: "Phase 1 Stag Pass", price: 699, perk: "Full cover access + ₹300 beverage voucher" },
      { id: "vip-stage", name: "VIP Backstage Pass", price: 1499, perk: "Dedicated VIP entrance, elevated artist lounge, ₹1000 beverage cover" }
    ]
  },
  {
    id: "mega-pool-party",
    title: "MEGA POOL CARNIVAL 2.0 🌊",
    subtitle: "Bangalore's wildest aquatic rave. Sun, splash, and relentless bass.",
    category: "Pool Parties",
    tag: "HIGH ENERGY",
    date: "Sunday, Oct 11, 2026",
    time: "1:00 PM - 9:00 PM",
    venue: "The Palms Resort & Lagoon Pool, Electronic City, Bangalore",
    priceText: "Passes from ₹799",
    spotsLeft: 18,
    status: "Limited Passes",
    lineup: ["Shaurya 26", "WDYM Yashu", "Bassline Syndicate"],
    genres: ["Tech House", "Bass House", "Commercial Bangers"],
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
    description: "Following our record-breaking first pool party, Xyro brings the 2.0 edition with waterproof sound systems, foam cannons, pool floaties, and cabana lounges.",
    passes: [
      { id: "pool-female", name: "Ladies Pool Pass", price: 499, perk: "Entry + 1 poolside cocktail + locker access" },
      { id: "pool-couple", name: "Couples Splash Pass", price: 999, perk: "Entry for couple + 2 drinks + VIP pool access" },
      { id: "pool-stag", name: "Stag Pool Pass", price: 1199, perk: "Pool entry + ₹500 beverage cover" },
      { id: "pool-cabana", name: "Private Pool Cabana (6 Pax)", price: 9999, perk: "Exclusive Cabana, 1 premium bottle, dedicated server" }
    ]
  },
  {
    id: "neon-warehouse-rave",
    title: "NEON WAREHOUSE PROJECT ⚡",
    subtitle: "Raw acoustics, hypnotic lasers, and Bangalore's afterhours underground.",
    category: "Afterhours",
    tag: "UNDERGROUND",
    date: "Friday, Oct 16, 2026",
    time: "10:00 PM - 4:00 AM",
    venue: "Secret Industrial Warehouse, Whitefield / Koramangala",
    priceText: "Passes from ₹899",
    spotsLeft: 35,
    status: "Filling Fast",
    lineup: ["Resident DJ Collective", "Special Berlin Techno Guest"],
    genres: ["Peak-Time Techno", "Industrial", "Dark Minimal"],
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
    description: "No phones on the dancefloor. Ultra-high definition Void acoustics, visual mapping, and 6 hours of pure unadulterated underground energy.",
    passes: [
      { id: "rave-early", name: "Early Bird Rave Pass", price: 899, perk: "Entry valid all night + welcome shot" },
      { id: "rave-couple", name: "Couples Underground Pass", price: 1499, perk: "Entry for two + priority express lane" },
      { id: "rave-vip", name: "VIP Boiler Room Access", price: 2199, perk: "Behind-the-decks access + premium bar queue jump" }
    ]
  },
  {
    id: "saturday-madness-free-entry",
    title: "SATURDAY MADNESS: FREE ENTRY RSVP 🔥",
    subtitle: "Bangalore's ultimate weekend kickstarter. High energy guaranteed.",
    category: "Club Nights",
    tag: "FREE GUESTLIST",
    date: "Every Saturday",
    time: "8:00 PM - 1:00 AM",
    venue: "Xyro Partner Club, Indiranagar 100ft Road",
    priceText: "FREE Entry via Online RSVP",
    spotsLeft: 50,
    status: "RSVP Open",
    lineup: ["Xyro Resident Crew"],
    genres: ["Hip Hop", "Tech House", "Dance Anthems"],
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
    description: "Skip the DM hassle. Register your name on the official Xyro guestlist here to receive your confirmed QR entry pass for free club entry before 9:30 PM.",
    passes: [
      { id: "free-ladies", name: "Ladies Free RSVP", price: 0, perk: "Complimentary entry all night + Free shooters till 10 PM" },
      { id: "free-couples", name: "Couples Free RSVP", price: 0, perk: "Free entry before 9:30 PM sharp" }
    ]
  }
];

export const VIP_PACKAGES = [
  {
    id: "vip-silver",
    name: "VIP Silver Lounge",
    idealFor: "Groups of 4 - 6",
    price: "₹14,999",
    features: [
      "Elevated sofa seating near dancefloor",
      "₹10,000 full beverage & food credit",
      "Express entry for 6 guests with zero queue",
      "Dedicated cocktail server & ice service",
      "Xyro glow wristbands & merchandise"
    ]
  },
  {
    id: "vip-gold",
    name: "Stage Master Cabana",
    idealFor: "Groups of 8 - 10",
    popular: true,
    price: "₹24,999",
    features: [
      "Prime backstage view right next to the DJ console",
      "₹18,000 premium bottle credits",
      "Personal security concierge & private bar team",
      "Meet & greet with resident DJs and headliners",
      "Complimentary champagne welcome toast",
      "Custom sparkler celebration on table entry"
    ]
  },
  {
    id: "vip-custom",
    name: "Celebrity / Private Event",
    idealFor: "Large Groups / Corporate / Birthdays",
    price: "Custom Quote",
    features: [
      "Full venue takeover or private VIP deck section",
      "Custom DJ playlist requests & event branding",
      "Bespoke catering & premium mixology bar",
      "Dedicated videographer & photographer recap"
    ]
  }
];

export const RESIDENT_CREW = [
  {
    name: "S1rcar",
    handle: "@s1rcar",
    role: "Resident DJ & Music Curator",
    genre: "Tech House / Melodic",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Txrun Reddy",
    handle: "@txrunreddy._",
    role: "Experience Director & Co-Founder",
    genre: "Bangalore Nightlife Wave",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Aadit",
    handle: "@adxu.u",
    role: "Guestlist & Community Lead",
    genre: "Event Host",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Shaurya",
    handle: "@shaurya__26310",
    role: "Visuals & Live Production",
    genre: "Stage Lighting & Audio",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop"
  }
];

export const GALLERY_ITEMS = [
  {
    type: "image",
    title: "Bangalore's Biggest Pool Party",
    subtitle: "May Edition Splashdown",
    tag: "Pool Party",
    url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: "image",
    title: "Ibiza Sunset Horizons",
    subtitle: "Golden Hour Melodic Vibes",
    tag: "Sunset Session",
    url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: "image",
    title: "Saturday Night Madness",
    subtitle: "Full House Crowd at Indiranagar",
    tag: "Club Night",
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: "image",
    title: "Laser Matrix & Sound Waves",
    subtitle: "Heavy Bass & Pure Energy",
    tag: "Afterhours",
    url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: "image",
    title: "Champagne Showers & VIP Lounge",
    subtitle: "Table Celebrations",
    tag: "VIP Vibes",
    url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: "image",
    title: "The Xyro Tribe",
    subtitle: "Bangalore's Next Generation Partygoers",
    tag: "Community",
    url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop"
  }
];

export const FAQS = [
  {
    q: "How does the Free Guestlist RSVP work?",
    a: "Select the event and register with your name and WhatsApp number. Our system instantly generates a verifiable Digital QR Pass. Show this pass at the gate before the designated cutoff time (usually 9:30 PM for clubs, 6:30 PM for sunset sessions) for complimentary entry."
  },
  {
    q: "What is the dress code for Xyro events?",
    a: "Club Nights & Sunset Sessions: Smart Casuals, Glam, or High-Fashion Clubwear (strictly no slippers/flip-flops for stags). Pool Parties: Resortwear, swimwear, trendy summer fits."
  },
  {
    q: "Is stag entry allowed?",
    a: "Yes! Stag passes are available for pre-booking through our website. Certain events offer early-bird discounts with beverage credit included. Stag entry at the venue gate is strictly subject to profile screening and club capacity."
  },
  {
    q: "How do I book a VIP Table or Birthday Cabana?",
    a: "Click on 'Book VIP Table' on the website or message our direct WhatsApp VIP concierge link with your group size. We'll reserve your private table with custom bottle service and dedicated host perks."
  },
  {
    q: "What age restrictions apply?",
    a: "All Xyro nightlife and evening club events are strictly 21+ (or 18+ for select daytime pool festivals as specified on the event pass). Government-issued physical or digital photo ID (Aadhaar/Driver's License/Passport) is mandatory."
  }
];
