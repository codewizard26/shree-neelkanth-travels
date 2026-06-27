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

export type Vehicle = {
  name: string;
  type: string;
  capacity: string;
  image: string;
  description: string;
  features: string[];
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
  phoneDisplay: "+91 99197 56791",
  phone: "+919919756791",
  whatsapp: "919919756791",
  email: "neelkanthtourtravels96@gmail.com",
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
    name: "Chitrakoot",
    tagline: "Ramghat, Kamadgiri & the Mandakini river",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ramghat_at_chitrakoot.jpg/1280px-Ramghat_at_chitrakoot.jpg",
    days: "2 Days",
  },
  {
    name: "Vindhyachal",
    tagline: "Maa Vindhyavasini Shakti Peeth & Trikon Parikrama",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Painting_of_Vindhyavaasini_Devi.jpg",
    days: "Day Trip",
  },
];

export const packages: Package[] = [
  {
    slug: "ayodhya-darshan",
    title: "Ayodhya Darshan",
    subtitle: "Ram Mandir & Saryu Aarti",
    duration: "2 Days · 1 Night",
    price: "₹3,500",
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
    slug: "chitrakoot-darshan",
    title: "Chitrakoot Darshan",
    subtitle: "Ramghat, Kamadgiri & Mandakini",
    duration: "2 Days · 1 Night",
    price: "₹3,500",
    badge: "New",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ramghat_at_chitrakoot.jpg/1280px-Ramghat_at_chitrakoot.jpg",
    highlights: [
      "Boat ride & evening aarti at Ramghat on the Mandakini",
      "Kamadgiri Parikrama darshan",
      "Hanuman Dhara & Gupt Godavari caves",
      "Sati Anusuya ashram & Bharat Milap temple",
    ],
    overview:
      "Chitrakoot — where Lord Ram, Sita and Lakshman spent the early years of their forest exile. A serene two-day pilgrimage along the Mandakini, covering Ramghat, the sacred Kamadgiri hill, and the caves and ashrams that dot this timeless landscape.",
    itinerary: [
      { day: "Day 1", title: "Arrival & Ramghat", detail: "Arrival and hotel check-in. Boat ride on the Mandakini at Ramghat and evening aarti. Visit the Bharat Milap temple." },
      { day: "Day 2", title: "Kamadgiri & caves", detail: "Morning Kamadgiri Parikrama, then Hanuman Dhara, Gupt Godavari and the Sati Anusuya ashram, followed by departure." },
    ],
    inclusions: [
      "1 night hotel accommodation",
      "Daily breakfast",
      "AC vehicle for sightseeing",
      "Local guide for the temple circuit",
      "All toll, parking & driver charges",
    ],
    exclusions: [
      "Lunch & personal expenses",
      "Boat ride & special aarti charges",
      "Anything not mentioned in inclusions",
    ],
  },
  {
    slug: "vindhyachal-darshan",
    title: "Vindhyachal Darshan",
    subtitle: "Maa Vindhyavasini & Trikon Parikrama",
    duration: "Day Trip",
    price: "₹2,500",
    badge: "Day Trip",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Painting_of_Vindhyavaasini_Devi.jpg",
    highlights: [
      "Maa Vindhyavasini Shakti Peeth darshan",
      "Trikon Parikrama — Kali Khoh & Ashtabhuja",
      "Ganga snan at the Vindhyachal ghat",
      "Perfect add-on to a Kashi trip",
    ],
    overview:
      "Vindhyachal, on the banks of the Ganga in Mirzapur, is one of the most revered Shakti Peeths in India. Seek the blessings of Maa Vindhyavasini and complete the sacred Trikon Parikrama covering the Kali Khoh and Ashtabhuja temples — an easy day trip, ideal alongside a Kashi visit.",
    itinerary: [
      { day: "Morning", title: "Darshan & Ganga snan", detail: "Pickup and drive to Vindhyachal. Maa Vindhyavasini darshan and a holy dip at the Ganga ghat." },
      { day: "Afternoon", title: "Trikon Parikrama", detail: "Complete the Trikon Parikrama via the Kali Khoh and Ashtabhuja temples, then return." },
    ],
    inclusions: [
      "AC vehicle for the day",
      "Local guide assistance",
      "Darshan coordination",
      "All toll, parking & driver charges",
    ],
    exclusions: [
      "Meals & personal expenses",
      "VIP darshan / special pooja charges",
      "Anything not mentioned in inclusions",
    ],
  },
];

export const vehicles: Vehicle[] = [
  {
    name: "Hatchback",
    type: "Maruti Swift / WagonR",
    capacity: "4 seater",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Maruti_Suzuki_Swift_2092.JPG/1280px-Maruti_Suzuki_Swift_2092.JPG",
    description:
      "Budget-friendly small cars for couples and solo travellers. ",
    features: [
      "Starting at 10Rs/km",
      "AC · comfortable city ride",
      "Perfect for 1–4 travellers",
      "Toll, Parking, Night Charges excluded",
    ],
  },
  {
    name: "Sedan",
    type: "Dzire / Hundai Aura ",
    capacity: "5 seater",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Maruti_Suzuki_Dzire_VXi_VVT.JPG/1280px-Maruti_Suzuki_Dzire_VXi_VVT.JPG",
    description:
      "Extra comfort and boot space for outstation trips. ",
    features: [
      "Starting at 12Rs/km",
      "AC · spacious legroom",
      "Large boot for luggage",
      "Toll, Parking, Night Charges excluded",
    ],
  },
  {
    name: "SUV",
    type: "Innova / Ertiga / Kia Currans/ Crysta",
    capacity: "6–7 seater",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Toyota_Innova_Crysta_2.4_Z_side.jpg/1280px-Toyota_Innova_Crysta_2.4_Z_side.jpg",
    description:
      "Spacious, comfortable SUVs for families and small groups — ideal for long temple circuits and hilly routes with luggage space to spare.",
    features: [
      "Starting at 14Rs/km",
      "AC · push-back seats",
      "Great for hilly & long routes",
      "Toll, Parking, Night Charges excluded"
    ],
  },
  {
    name: "Tempo Traveller",
    type: "12–26 seater van",
    capacity: "12–26 seater",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Force_Motors_-_Traveller_26_-_Agra_2014-05-14_4222.JPG/1280px-Force_Motors_-_Traveller_26_-_Agra_2014-05-14_4222.JPG",
    description:
      "Roomy group vehicles for large families and pilgrim groups. Travel together in comfort with ample luggage room.",
    features: [
      "Starting at 22Rs/km",
      "Push-back / reclining seats",
      "Ideal for group yatras",
      "Toll, Parking, Night Charges excluded"
    ],
  },

  {
    name: "40 Seater AC/ Non-AC Bus",
    type: "Luxury/Standard coach",
    capacity: "40 seater",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Scania_Metrolink_HD_14.5_M_Ashwamedh.jpg/1280px-Scania_Metrolink_HD_14.5_M_Ashwamedh.jpg",
    description:
      "Economical non-AC coach for budget group travel. Reliable and roomy for school trips and large yatra groups.",
    features: [
      "AC · push-back seats",
      "Comfortable seating",
      "Big luggage capacity",
    ],
  },

  {
    name: "50 Seater AC/Non-AC Bus",
    type: "Large standard coach",
    capacity: "50 seater",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/WBSTC_Volvo_Bus_Sauhardya-2_-_WB_23_B_9224_-_Petrapole_-_North_24_Parganas_2015-05-29_1324.JPG/1280px-WBSTC_Volvo_Bus_Sauhardya-2_-_WB_23_B_9224_-_Petrapole_-_North_24_Parganas_2015-05-29_1324.JPG",
    description:
      "High-capacity Ac/non-AC coach at the most economical rate. Ideal for large yatra groups travelling on a budget.",
    features: [
      "Lowest per-seat cost",
      "50-seat capacity",
      "Big luggage hold",
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
    trip: "Chitrakoot Darshan",
    text: "The Chitrakoot trip was so peaceful. The Ramghat boat ride and evening aarti on the Mandakini were beautiful, and the Kamadgiri parikrama was well arranged. Beautifully organised.",
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
    trip: "Chitrakoot Darshan",
    text: "Booked for a group of eight and everything was seamless — comfortable stays, clean transport and a coordinator on call throughout. Five stars well earned.",
  },
];

export const ratingSummary = {
  average: 4.9,
  count: 480,
};
