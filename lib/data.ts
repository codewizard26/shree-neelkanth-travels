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

// SEO / site config. Change `url` to your real domain once live.
export const site = {
  name: "Shree Neelkanth Tour & Travel",
  shortName: "Shree Neelkanth",
  url: "https://www.shrineelkanthtravels.com",
  ogImage: "/og.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  locality: "Prayagraj",
  region: "Uttar Pradesh",
  country: "IN",
  geo: { lat: 25.4482958, lng: 81.8713832 },
  maps:
    "https://www.google.com/maps/place/Shri+Neelkanth+Tour+And+Travels/@25.4482958,81.8713832,17z",
  socials: [
    "https://www.instagram.com/shrineelkanthtourandtravels",
    "https://www.facebook.com/share/14htkQ38cDM/",
  ],
};

// Intrinsic pixel dimensions of every remote image we render. Kept here so the
// `<img>` tags and the og:image tags can declare real width/height instead of
// guessing — missing dimensions cause layout shift, wrong ones break previews.
const imageDims: Record<string, { width: number; height: number }> = {
  "Shri_Ram_Janambhoomi_Mandir": { width: 1280, height: 967 },
  "Dasaswamedh_ghat-varanasi": { width: 1920, height: 1435 },
  "Ramghat_at_chitrakoot": { width: 1280, height: 720 },
  "Painting_of_Vindhyavaasini_Devi": { width: 1260, height: 1574 },
  "Prayagraj_Sangam_2": { width: 1280, height: 848 },
  "Boats_at_sunrise_Ganges_River": { width: 1920, height: 1080 },
  "Maruti_Suzuki_Swift": { width: 1280, height: 859 },
  "Maruti_Suzuki_Dzire": { width: 1280, height: 747 },
  "Toyota_Innova_Crysta": { width: 1280, height: 720 },
  "Force_Motors_-_Traveller": { width: 1280, height: 851 },
  "Scania_Metrolink": { width: 1280, height: 840 },
  "WBSTC_Volvo_Bus": { width: 1280, height: 851 },
};

/** Intrinsic size of a remote image, falling back to 16:9 if unknown. */
export function imageSize(url: string): { width: number; height: number } {
  const hit = Object.keys(imageDims).find((key) => url.includes(key));
  return hit ? imageDims[hit] : { width: 1280, height: 720 };
}

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
      { day: "Day 2", title: "Kamadgiri, caves & Gadhwa ka Kila", detail: "Morning Kamadgiri Parikrama, then Hanuman Dhara, Gupt Godavari and the Sati Anusuya ashram. Visit Gadhwa ka Kila before departure." },
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
  {
    slug: "rural-prayagraj-city-tour",
    title: "Rural Prayagraj City Tour",
    subtitle: "Someshwar Mahadev, Shringverpur & Mankameshwar",
    duration: "Day Trip",
    price: "₹2,000",
    badge: "Day Trip",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Prayagraj_Sangam_2.jpg/1280px-Prayagraj_Sangam_2.jpg",
    highlights: [
      "Someshwar Mahadev temple darshan",
      "Shringverpur Dham — Nishadraj & Ram Chaura",
      "Mankameshwar Mahadev on the Yamuna bank",
      "Local Prayagraj city sightseeing",
    ],
    overview:
      "A relaxed day around Prayagraj's rural and riverside heritage. Seek blessings at the ancient Someshwar Mahadev, walk the sacred ground of Shringverpur where Lord Ram crossed the Ganga with Nishadraj, and visit the revered Mankameshwar Mahadev by the Yamuna — rounded off with local city sightseeing.",
    itinerary: [
      { day: "Morning", title: "Someshwar Mahadev & Shringverpur", detail: "Pickup and drive to Someshwar Mahadev for darshan, then on to Shringverpur Dham — the Nishadraj temple and Ram Chaura ghat on the Ganga." },
      { day: "Afternoon", title: "Mankameshwar & city sightseeing", detail: "Return via Mankameshwar Mahadev on the bank of the Yamuna, followed by local Prayagraj city sightseeing before drop-off." },
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
    slug: "ayodhya-varanasi",
    title: "Prayagraj – Ayodhya – Varanasi",
    subtitle: "Triveni Sangam, Ram Nagari & the ghats of Kashi",
    duration: "3 Days · 2 Nights",
    price: "₹9,500",
    badge: "Most Loved",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Dasaswamedh_ghat-varanasi_india-andres_larin.jpg/1920px-Dasaswamedh_ghat-varanasi_india-andres_larin.jpg",
    highlights: [
      "Triveni Sangam darshan at Prayagraj",
      "Ayodhya Ram Mandir darshan",
      "Kashi Vishwanath & Ganga aarti at Dashashwamedh",
      "Sunrise boat ride on the Ganga",
      "Sarnath excursion",
    ],
    overview:
      "Three of the region's holiest cities in one seamless journey. Begin at Prayagraj's Triveni Sangam, continue to Ayodhya's Ram Mandir, then immerse in the timeless ghats of Varanasi — the Ganga aarti, a sunrise boat ride and the calm of Sarnath.",
    itinerary: [
      { day: "Day 1", title: "Prayagraj & Ayodhya", detail: "Arrival at Prayagraj — Triveni Sangam darshan. Drive to Ayodhya for Ram Janmabhoomi and Hanuman Garhi darshan, evening Saryu aarti." },
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
    slug: "varanasi-darshan",
    title: "Varanasi Darshan",
    subtitle: "Kashi Vishwanath, Ganga aarti & Sarnath",
    duration: "2 Days · 1 Night",
    price: "₹4,500",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Dasaswamedh_ghat-varanasi_india-andres_larin.jpg/1920px-Dasaswamedh_ghat-varanasi_india-andres_larin.jpg",
    highlights: [
      "Kashi Vishwanath temple darshan",
      "Evening Ganga aarti at Dashashwamedh Ghat",
      "Sunrise boat ride on the Ganga",
      "Sarnath excursion",
    ],
    overview:
      "Kashi — the eternal city on the banks of the Ganga. A soulful two-day darshan covering the Kashi Vishwanath temple, the grand evening Ganga aarti, a sunrise boat ride along the ghats and the serene Buddhist site of Sarnath.",
    itinerary: [
      { day: "Day 1", title: "Arrival & Ganga aarti", detail: "Arrival in Varanasi and hotel check-in. Evening Ganga aarti at Dashashwamedh Ghat." },
      { day: "Day 2", title: "Kashi & Sarnath", detail: "Sunrise boat ride on the Ganga, Kashi Vishwanath darshan, afternoon Sarnath excursion, then departure." },
    ],
    inclusions: [
      "1 night hotel accommodation",
      "Daily breakfast",
      "AC vehicle for sightseeing",
      "Sunrise boat ride in Varanasi",
      "Local guide for the temple circuit",
    ],
    exclusions: [
      "Lunch & personal expenses",
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
