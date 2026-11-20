# Inclusive by Design Consulting website

Next.js 16 (React 19), TypeScript and Tailwind CSS 4.

## Run it

```
npm install
npm run dev            # http://localhost:3000 while editing
npm run build          # production build
npx next start -p 3100 # run the production build
```

## Putting it on a server

Needs Node.js 20.9 or newer.

```
npm ci
npm run build
npm start              # serves on port 3000; set PORT to change it
```

Any Node host works (Vercel, Netlify, a VPS behind Nginx, or Hostinger's Node.js hosting). On Vercel or Netlify, import the repository and keep the default Next.js settings.

## Where things are

| Path | What |
| --- | --- |
| `src/content/site.ts` | All homepage copy, typed. Every line is from Laura's own documents. |
| `src/app/globals.css` | Brand tokens (colours, fonts, breakpoints) and the signature animations |
| `src/components/` | One component per section |
| `src/lib/use-reveal.ts` | Scroll reveal that replays each time a section comes back into view |
| `tests/responsive.mjs` | Checks 11 phones, tablets and desktops: no sideways scroll, no text overflow, tap targets, menu, sticky header, console errors, reduced motion, no JavaScript |
| `tests/screens.mjs` | Full-page screenshots for review |

Run the tests against a running build: `node tests/responsive.mjs http://localhost:3100`.

## Still to confirm with Laura

- Booking tool for "Choose a time" (Cal.com, Calendly or Microsoft Bookings)
- Company number and registered office for the footer
- LinkedIn, privacy and accessibility statement links
- Permission to publish the four testimonials
- Discovery call wording
