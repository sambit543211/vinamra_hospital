# Vinamra Swaraj Hospital — website

Marketing website for a NABH-accredited multi-speciality hospital in Vashi,
Navi Mumbai. Built with Next.js (App Router) + Tailwind v4 + Framer Motion.

## Stack
- **Next.js 16** (App Router, static export friendly)
- **Tailwind CSS v4** — config lives in `app/globals.css` via `@theme` (no tailwind.config file)
- **Framer Motion** — scroll reveals, hero stagger, count-up, carousel
- **lucide-react** — icons (note: this version has NO brand icons like Facebook/Instagram)
- **TypeScript**, strict

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages prerender static)
```

## Where things live
- `lib/data.ts` — **single source of truth** for ALL content: hospital info,
  phones, doctors, specialities, insurance partners, testimonials, nav links.
  Edit here to change content anywhere on the site.
- `app/` — routes: `/` (home), `/about`, `/services`, `/doctors`, `/gallery`, `/contact`
- `components/` — all UI. Section components (Hero, Specialities, etc.) compose the homepage.
- `app/globals.css` — design tokens (the forest-green palette) + keyframes

## Design system
- Primary palette: **forest green** family `forest-50` → `forest-900` (NOT the old flat #39B34A)
- `slatedeep` / `slatemid` / `slatesoft` instead of pure black
- `gold` / `goldlight` / `golddark` — reserved ONLY for the NABH accreditation badge
- Display font: Poppins. Body font: Inter.
- Use Tailwind classes like `bg-forest-500`, `text-slatemid`, `border-bordersoft`

## Conventions / gotchas
- Framer Motion cubic-bezier `ease` arrays must end with `as const` (TS strictness)
- This lucide-react version lacks `Facebook`/`Instagram`/`Stomach` — check with
  `node -e "console.log('IconName' in require('lucide-react'))"` before using a new icon
- All new icons used in data must be registered in `components/Icon.tsx`
- Appointment form (`components/AppointmentForm.tsx`) has NO backend — it composes a
  WhatsApp message. Replace `handleSubmit` with an API/email POST when a backend exists.
- Gallery uses placeholders. Add real images to `public/gallery/` and wire them in
  `components/GalleryGrid.tsx` (set `src` on each item).

## TODO before launch
1. Replace gallery placeholders with real hospital photos
2. Confirm full doctor list + OPD timings (current list from the live schedule page)
3. Verify all insurance partner names
4. Add real logo SVG (currently a placeholder heart mark in Navbar)
5. Update Google Maps embed coordinates if needed
6. Wire the appointment form to a real backend/email if desired
