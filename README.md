# Phalla Suong — Portfolio Website

A premium, single-page portfolio built with **Vue 3 (Composition API)**, **Vite**, **Vue Router**, **Pinia**, and **Bootstrap 5**, generated from Phalla Suong's CV. Styled with a glassmorphism design system inspired by Apple, Linear, Stripe, and Vercel.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

The project follows a feature-based structure:

- `src/components/<feature>/` — one folder per section (hero, about, skills, experience, projects, contact, etc.)
- `src/data/` — all real content (profile info, skills, experience, projects, references) lives here as plain JS objects — **edit these files to update the site's content**.
- `src/composables/` — reusable logic: theming, scroll-reveal animation, typing effect, custom cursor.
- `src/store/` — Pinia stores for theme (dark/light) and UI state (project filter, mobile nav).
- `src/views/` — `HomeView` (the full single-page portfolio), `ResumeView` (a printable resume layout with a "Print / Save as PDF" button), and `ContactView`.
- `src/assets/css/` — `theme.css` (design tokens/colors/fonts), `glassmorphism.css`, `animations.css`, and `main.css` (component styles).

## Customizing content

Everything visible on the page is sourced from `src/data/*.js`. For example, to add a new project, add an entry to `src/data/projects.js`; to update a skill percentage, edit `src/data/skills.js`.

Replace the placeholder project thumbnails in `public/assets/images/projects/` with real screenshots (same filenames, or update the `image` path in `src/data/projects.js`).

## Features implemented

- Animated gradient mesh background, floating blobs, glass cards
- Typing effect headline, scroll-reveal animations, animated skill bars
- Dark / light mode toggle (persisted in localStorage)
- Scroll progress indicator, back-to-top button, loading screen
- Custom cursor on desktop (disabled on touch/mobile)
- Project filtering by category
- Fully responsive from mobile to desktop
- Printable resume view at `/resume`
- Contact form (front-end only — wire `ContactForm.vue`'s `handleSubmit` to a real backend or a service like Formspree to receive submissions)

## Notes

- The contact form currently simulates a submission. Connect it to an email service (Formspree, EmailJS, or your own API) before going live.
- The resume PDF at `public/assets/resume.pdf` is a copy of the uploaded CV — swap it out any time by replacing that file.
