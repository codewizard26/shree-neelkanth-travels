# Shree Neelkanth Tour & Travel — Website

An elegant, animated marketing site for a pilgrimage & Himalayan travel agency.
Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

## Features
- Refined editorial design (Cormorant Garamond + Jost), forest-green & saffron palette
- Staggered hero reveal, scroll-triggered animations, hover micro-interactions
- Sections: Hero, About/Promise, Destinations, Packages, Google Reviews, Contact, Footer
- Google Reviews block styled like Google, ready to plug into the Places API
- Fully responsive with a mobile nav

## Getting started
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build
```bash
npm run build && npm start
```

## Customise
- **Content** (tours, packages, reviews): `lib/data.ts`
- **Brand colours / fonts**: `tailwind.config.ts` and `app/layout.tsx`
- **Contact details / WhatsApp number**: `components/Contact.tsx` and `components/Navbar.tsx`

## Live Google Reviews
The reviews currently render from `lib/data.ts`. To show live reviews:
1. Get your **Place ID**: https://developers.google.com/maps/documentation/places/web-service/place-id
2. Create a **Google Places API key** and add it to `.env.local`:
   ```
   GOOGLE_PLACES_API_KEY=your_key_here
   ```
3. Fetch `place/details` with the `reviews,rating,user_ratings_total` fields and map the
   response into the `Review[]` shape. See the comment block at the top of
   `components/Reviews.tsx` for a ready-to-use snippet.

## Connecting the contact form
The form in `components/Contact.tsx` is a demo. Wire it to your email service
(Resend, Nodemailer), a form provider (Formspree), or a CRM webhook.
