# Pendo Amani — Portfolio

A single-page portfolio built with React, Vite, and Tailwind CSS. Designed to work for
software development roles, executive assistant applications, school clients, and networking.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

## Before you publish

- **Resume**: drop your actual CV as `resume.pdf` inside the `public/` folder — the
  "Download My CV" button already links to `/resume.pdf`.
- **Contact info**: open `src/components/Contact.jsx` and swap in your real email,
  LinkedIn, GitHub, and phone number.
- **Projects**: edit `src/components/Projects.jsx` as your projects progress
  (update status from "in development" to "live", add real links, etc).

## Deploy

**Vercel**
1. Push this project to a GitHub repo.
2. Go to vercel.com → New Project → import the repo. Vercel auto-detects Vite — just deploy.

**GitHub Pages**
1. `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "npm run build && npx gh-pages -d dist"`
3. Run `npm run deploy`.
4. In your repo settings → Pages, set the source to the `gh-pages` branch.

## Tech

- React 19 + Vite
- Tailwind CSS v4
- lucide-react icons
- Dark mode toggle (persists per session)
- Scroll-reveal animations (respects reduced-motion preference)
