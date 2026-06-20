# Vinamra Swaraj Hospital — Website

Modern, mobile-friendly website for Vinamra Swaraj Hospital, Vashi, Navi Mumbai.

## Quick start
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy (Vercel — recommended)
1. Push this folder to a GitHub repo
2. Import the repo on https://vercel.com
3. Vercel auto-detects Next.js — click Deploy
4. Point the `vinamraswarajhospital.com` domain at Vercel in the project's Domains tab

No environment variables needed.

## Editing content
All text, phone numbers, doctors, specialities and testimonials live in
**`lib/data.ts`**. Change them there and the whole site updates.

See `CLAUDE.md` for full developer notes.

## Pages
- `/` — Home (hero, stats, specialities, doctors, insurance, testimonials)
- `/about` — About, vision/mission/values
- `/services` — All specialities + facilities
- `/doctors` — Doctors and schedules
- `/gallery` — Photo gallery (placeholders — add real photos)
- `/contact` — Contact details, appointment form, map

## Tech
Next.js 16 · Tailwind CSS v4 · Framer Motion · TypeScript
