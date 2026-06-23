export type Destination = {
  name: string;
  tagline: string;
  image: string;
  days: string;
};

export type ItineraryDay = {
  day: string;
  title: string;
  detail: string;
};

export type Package = {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
  badge?: string;
  overview: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
};

export type Review = {
  name: string;
  initials: string;
  rating: number;
  date: string;
  text: string;
  trip: string;
};

export const contact = {
  phoneDisplay: "+91 98765 43210",
  phone: "+919876543210",
  whatsapp: "919876543210",
  email: "yatra@shreeneelkanth.com",
};

export const destinations: Destination[] = [
  {
    name: "Ayodhya",
    tagline: "Ram Janmabhoomi & the sacred Saryu ghats",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Shri_Ram_Janambhoomi_Mandir%2C_Ayodhya_Dham.jpg/1280px-Shri_Ram_Janambhoomi_Mandir%2C_Ayodhya_Dham.jpg",
    days: "1–2 Days",
  },
  {
    name: "Varanasi",
    tagline: "Ganga aarti, ancient ghats and Kashi Vishwanath",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Dasaswamedh_ghat-varanasi_india-andres_larin.jpg/1920px-Dasaswamedh_ghat-varanasi_india-andres_larin.jpg",
    days: "2–3 Days",
  },
  {
    name: "Nawabganj Bird Sanctuary",
    tagline: "Migratory birds beside a tranquil lake",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bf/Nawabganj_Bird_Sanctuary%2C_Unnao_03.JPG",
    days: "Day Trip",
  },
  {
    name: "Katarniyaghat",
    tagline: "Tiger, gharial and the wild Terai forests",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Katarniaghat.jpg/1920px-Katarniaghat.jpg",
    days: "2–4 Days",
  },
];

export const packages: Package[] = [
  {
    slug: "ayodhya-darshan",
    title: "Ayodhya Darshan",
    subtitle: "Ram Mandir & Saryu Aarti",
    duration: "2 Days · 1 Night",
    price: "₹4,500",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Shri_Ram_Janambhoomi_Mandir%2C_Ayodhya_Dham.jpg/1280px-Shri_Ram_Janambhoomi_Mandir%2C_Ayodhya_Dham.jpg",
    highlights: [
      "Ram Janmabhoomi & Hanuman Garhi darshan",
      "Evening Saryu aarti at Ram ki Paidi",
      "Comfortable AC transport & hotel stay",
      "Local guide for the temple circuit",
    ],
    overview:
      "A compact yet complete pilgrimage to Ayodhya — the birthplace of Lord Ram. Visit the Ram Mandir, Hanuman Garhi and the sacred Saryu ghats with comfortable stays and a local guide to handle every detail.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Ayodhya darshan",
        detail:
          "Arrival and hotel check-in. Afternoon darshan at Ram Janmabhoomi and Hanuman Garhi. Evening Saryu aarti at Ram ki Paidi.",
      },
      {
        day: "Day 2",
        title: "Kanak Bhawan & departure",
        detail:
          "Morning visit to Kanak Bhawan and Nageshwarnath Temple, then departure with blessings.",
      },
    ],
    inclusions: [
      "1 night hotel accommodation",
      "Daily breakfast",
      "AC vehicle for sightseeing",
      "Local guide for temple circuit",
      "All toll, parking & driver charges",
    ],
    exclusions: [
      "Lunch & personal expenses",
      "VIP darshan / special pooja charges",
      "Anything not mentioned in inclusions",
    ],
  },
  {
    slug: "lucknow-ayodhya-lucknow",
    title: "Lucknow – Ayodhya – Lucknow",
    subtitle: "Nawabi city & Ram Nagari",
    duration: "3 Days · 2 Nights",
    price: "₹7,900",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Bara_Imambara%2C_Lucknow_2.jpg/1920px-Bara_Imambara%2C_Lucknow_2.jpg",
    highlights: [
      "Lucknow heritage — Bara Imambara & Hazratganj",
      "Full-day Ayodhya temple darshan",
      "Awadhi cuisine experience",
      "Comfortable AC transport throughout",
    ],
    overview:
      "Pair the Nawabi charm of Lucknow with a soulful Ayodhya darshan. Explore the Bara Imambara and bustling Hazratganj, then journey to Ram Nagari for a peaceful temple circuit.",
    itinerary: [
      { day: "Day 1", title: "Lucknow sightseeing", detail: "Arrival in Lucknow, visit Bara Imambara, Rumi Darwaza and Hazratganj. Evening Awadhi dinner." },
      { day: "Day 2", title: "Lucknow → Ayodhya", detail: "Drive to Ayodhya. Ram Janmabhoomi and Hanuman Garhi darshan, evening Saryu aarti." },
      { day: "Day 3", title: "Ayodhya → Lucknow", detail: "Morning Kanak Bhawan visit, drive back to Lucknow for departure." },
    ],
    inclusions: [
      "2 nights hotel accommodation",
      "Daily breakfast",
      "AC vehicle for the full circuit",
      "Local guide in Lucknow & Ayodhya",
      "All toll, parking & driver charges",
    ],
    exclusions: [
      "Lunch & dinner (except where noted)",
      "Monument entry fees",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],
  },
  {
    slug: "ayodhya-varanasi",
    title: "Ayodhya – Varanasi",
    subtitle: "Ram Nagari to the ghats of Kashi",
    duration: "3 Days · 2 Nights",
    price: "₹9,500",
    badge: "Most Loved",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Dasaswamedh_ghat-varanasi_india-andres_larin.jpg/1920px-Dasaswamedh_ghat-varanasi_india-andres_larin.jpg",
    highlights: [
      "Ayodhya Ram Mandir darshan",
      "Kashi Vishwanath & Ganga aarti at Dashashwamedh",
      "Sunrise boat ride on the Ganga",
      "Sarnath excursion",
    ],
    overview:
      "Two of India's holiest cities in one seamless journey. Begin with Ayodhya's Ram Mandir, then immerse in the timeless ghats of Varanasi — the Ganga aarti, a sunrise boat ride and the calm of Sarnath.",
    itinerary: [
      { day: "Day 1", title: "Ayodhya darshan", detail: "Arrival in Ayodhya. Ram Janmabhoomi and Hanuman Garhi darshan, evening Saryu aarti." },
      { day: "Day 2", title: "Ayodhya → Varanasi", detail: "Drive to Varanasi. Evening Ganga aarti at Dashashwamedh Ghat." },
      { day: "Day 3", title: "Kashi & Sarnath", detail: "Sunrise boat ride, Kashi Vishwanath darshan, afternoon Sarnath excursion, then departure." },
    ],
    inclusions: [
      "2 nights hotel accommodation",
      "Daily breakfast",
      "AC vehicle for the full circuit",
      "Sunrise boat ride in Varanasi",
      "Local guide at each city",
    ],
    exclusions: [
      "Lunch & dinner",
      "VIP darshan / special pooja charges",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],
  },
  {
    slug: "ayodhya-varanasi-chandauli",
    title: "Ayodhya – Varanasi – Chandauli",
    subtitle: "Temples, ghats & the Devdari falls",
    duration: "5 Days · 4 Nights",
    price: "₹16,800",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Devdari_Water_fall_in_Chandra_prabha.jpg/1920px-Devdari_Water_fall_in_Chandra_prabha.jpg",
    highlights: [
      "Ayodhya & Varanasi full circuit",
      "Chandauli — Devdari & Rajdari waterfalls",
      "Chandraprabha Wildlife Sanctuary",
      "Ganga aarti & sunrise boat ride",
    ],
    overview:
      "An extended spiritual-and-nature circuit. Cover the temples of Ayodhya, the ghats of Varanasi, and venture into Chandauli for its dramatic Devdari and Rajdari waterfalls and the Chandraprabha sanctuary.",
    itinerary: [
      { day: "Day 1", title: "Ayodhya darshan", detail: "Arrival in Ayodhya. Ram Mandir darshan and evening Saryu aarti." },
      { day: "Day 2", title: "Ayodhya → Varanasi", detail: "Drive to Varanasi. Evening Ganga aarti at Dashashwamedh Ghat." },
      { day: "Day 3", title: "Kashi & Sarnath", detail: "Sunrise boat ride, Kashi Vishwanath darshan and Sarnath excursion." },
      { day: "Day 4", title: "Varanasi → Chandauli", detail: "Drive to Chandauli. Visit Devdari & Rajdari waterfalls and Chandraprabha Wildlife Sanctuary." },
      { day: "Day 5", title: "Departure", detail: "Morning at leisure, then return journey and departure." },
    ],
    inclusions: [
      "4 nights hotel accommodation",
      "Daily breakfast & dinner",
      "AC vehicle for the full circuit",
      "Sunrise boat ride in Varanasi",
      "Local guides & all driver charges",
    ],
    exclusions: [
      "Lunch & personal expenses",
      "Sanctuary entry / safari fees",
      "VIP darshan charges",
      "Anything not mentioned in inclusions",
    ],
  },
  {
    slug: "nawabganj-bird-sanctuary",
    title: "Nawabganj Bird Sanctuary",
    subtitle: "Lakeside birding day trip",
    duration: "Day Trip",
    price: "₹1,800",
    badge: "Day Trip",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bf/Nawabganj_Bird_Sanctuary%2C_Unnao_03.JPG",
    highlights: [
      "Migratory & resident bird watching",
      "Guided lakeside nature walk",
      "Boating where available",
      "Ideal for families & student groups",
    ],
    overview:
      "An easy day escape from Lucknow to the Nawabganj (Chandrshekhar Azad) Bird Sanctuary. Spot migratory and resident species around the lake with a naturalist guide — perfect for families and student groups.",
    itinerary: [
      { day: "Morning", title: "Departure & birding", detail: "Pickup from Lucknow, drive to the sanctuary. Guided nature walk and bird watching around the lake." },
      { day: "Afternoon", title: "Boating & return", detail: "Optional boating, packed lunch by the lake, then return to Lucknow by evening." },
    ],
    inclusions: [
      "AC vehicle from Lucknow & back",
      "Naturalist guide",
      "Sanctuary entry assistance",
      "Driver & parking charges",
    ],
    exclusions: [
      "Meals & personal expenses",
      "Boating / camera fees",
      "Anything not mentioned in inclusions",
    ],
  },
  {
    slug: "katarniyaghat-safari",
    title: "Explore Katarniyaghat",
    subtitle: "3 jungle safaris in the Terai",
    duration: "3 Days · 2 Nights · 3 Safaris",
    price: "₹14,500",
    badge: "Wildlife",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Katarniaghat.jpg/1920px-Katarniaghat.jpg",
    highlights: [
      "Three guided jeep safaris",
      "Tiger, gharial & Gangetic dolphin habitat",
      "Forest rest-house / eco-lodge stay",
      "Girwa river boat ride",
    ],
    overview:
      "Venture into Katarniyaghat, part of the Dudhwa Tiger Reserve — a rich Terai wilderness of tigers, gharials, swamp deer and the rare Gangetic dolphin. Three safaris and a Girwa river boat ride across two relaxed nights.",
    itinerary: [
      { day: "Day 1", title: "Arrival & evening safari", detail: "Arrival and eco-lodge check-in. Afternoon jeep safari into the core zone." },
      { day: "Day 2", title: "Two safaris & river", detail: "Early morning safari, Girwa river boat ride for gharials & dolphins, evening safari." },
      { day: "Day 3", title: "Departure", detail: "Morning at leisure, then departure." },
    ],
    inclusions: [
      "2 nights eco-lodge / rest-house stay",
      "All meals (breakfast, lunch, dinner)",
      "3 shared jeep safaris with guide",
      "Girwa river boat ride",
      "AC transport to & from the reserve",
    ],
    exclusions: [
      "Safari & camera permit fees",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],
  },
  {
    slug: "track-tiger-katarniyaghat",
    title: "Track Tiger at Katarniyaghat",
    subtitle: "6 safaris for the serious wildlife lover",
    duration: "4 Days · 3 Nights · 6 Safaris",
    price: "₹22,000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Bengal_tiger_in_Sanjay_Dubri_Tiger_Reserve_December_2024_by_Tisha_Mukherjee_11.jpg/1920px-Bengal_tiger_in_Sanjay_Dubri_Tiger_Reserve_December_2024_by_Tisha_Mukherjee_11.jpg",
    highlights: [
      "Six guided jeep safaris",
      "Best odds for a tiger sighting",
      "Naturalist-led birding sessions",
      "Girwa river dolphin & gharial boat ride",
    ],
    overview:
      "Our most immersive wilderness package — six safaris across three nights for the best chance of tracking a tiger at Katarniyaghat. Built for keen wildlife and photography enthusiasts, with a dedicated naturalist throughout.",
    itinerary: [
      { day: "Day 1", title: "Arrival & evening safari", detail: "Eco-lodge check-in and an afternoon safari to settle into the forest." },
      { day: "Day 2", title: "Two safaris", detail: "Morning and evening safaris with a naturalist; midday birding session." },
      { day: "Day 3", title: "Safaris & river", detail: "Morning safari, Girwa river boat ride, evening safari." },
      { day: "Day 4", title: "Final safari & departure", detail: "One last morning safari, then departure." },
    ],
    inclusions: [
      "3 nights eco-lodge / rest-house stay",
      "All meals (breakfast, lunch, dinner)",
      "6 shared jeep safaris with guide",
      "Girwa river boat ride",
      "AC transport to & from the reserve",
    ],
    exclusions: [
      "Safari & camera permit fees",
      "Personal expenses",
      "Anything not mentioned in inclusions",
    ],
  },
];

export const reviews: Review[] = [
  {
    name: "Anjali Sharma",
    initials: "AS",
    rating: 5,
    date: "2 weeks ago",
    trip: "Ayodhya – Varanasi",
    text: "Our Ayodhya–Varanasi trip was handled flawlessly by the Shree Neelkanth team. Every hotel, every meal and the darshan arrangements were perfect. The sunrise boat ride in Kashi was unforgettable.",
  },
  {
    name: "Rajesh Verma",
    initials: "RV",
    rating: 5,
    date: "1 month ago",
    trip: "Lucknow – Ayodhya – Lucknow",
    text: "Smooth and well-paced. The Lucknow heritage tour plus Ayodhya darshan was perfect for my elderly parents — the coordinator was available 24x7. Highly recommend.",
  },
  {
    name: "Meera Iyer",
    initials: "MI",
    rating: 5,
    date: "1 month ago",
    trip: "Explore Katarniyaghat",
    text: "We saw a tiger on our very first safari! The eco-lodge was comfortable and the Girwa river boat ride for gharials was the highlight. Beautifully organised.",
  },
  {
    name: "Sandeep Kulkarni",
    initials: "SK",
    rating: 5,
    date: "2 months ago",
    trip: "Ayodhya Darshan",
    text: "Transparent pricing, no hidden costs, and the team genuinely cares. The Ayodhya darshan was peaceful and beautifully planned. Thank you Shree Neelkanth!",
  },
  {
    name: "Pooja Nair",
    initials: "PN",
    rating: 4,
    date: "3 months ago",
    trip: "Ayodhya – Varanasi – Chandauli",
    text: "Excellent service and very responsive on calls. The Chandauli waterfalls were a lovely surprise addition. Kept us safe and informed at every step.",
  },
  {
    name: "Vikram Singh",
    initials: "VS",
    rating: 5,
    date: "3 months ago",
    trip: "Track Tiger at Katarniyaghat",
    text: "Booked for a group of eight and everything was seamless. Six safaris, knowledgeable naturalist and clean stays. Five stars well earned.",
  },
];

export const ratingSummary = {
  average: 4.9,
  count: 480,
};
