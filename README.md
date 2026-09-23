# WayRide — Frontend Intern Assessment

A responsive React + Vite homepage inspired by the structure and experience of Garibook, rebranded as **WayRide** with a mint-green and teal-blue visual system.

Live Demo:https://wayride-five.vercel.app/

## Requirements covered

- React.js + JavaScript
- Responsive desktop, tablet and mobile layouts
- Component-based architecture
- Booking interaction (city/airport mode, ride type, form feedback)
- Mobile navigation
- Hover, active and keyboard focus states
- GSAP hero entrance animation
- GSAP ScrollTrigger section/card reveal animations
- Clean footer with developer information
- Vite production build
- Vercel-ready configuration

## Run locally

Requirements: Node.js 18+ recommended.

```bash
npm install
npm run dev
```

Open the URL shown by Vite, normally:

`http://localhost:5173`

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deploy to Vercel

### GitHub method (recommended)

1. Create a GitHub repository.
2. Upload this project, excluding `node_modules` and `dist`.
3. Open Vercel and import the GitHub repository.
4. Keep the project root as the repository root.
5. Vercel will use the included Vite configuration.
6. Deploy.

The included `vercel.json` uses:

- Build command: `npm run build`
- Output directory: `dist`
- Framework: `vite`

### Vercel CLI

```bash
npm install -g vercel
vercel
```

For a production deployment:

```bash
vercel --prod
```

## Project structure

```text
src/
├── components/
│   ├── AppPromo.jsx
│   ├── BookingCard.jsx
│   ├── Footer.jsx
│   ├── Freedom.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Moments.jsx
│   ├── Services.jsx
│   ├── SplitFeature.jsx
│   ├── Stats.jsx
│   ├── Testimonials.jsx
│   └── useReveal.js
├── data.js
├── main.jsx
└── styles.css
```

## Notes

This is a frontend-only assessment. Booking submission is intentionally a demo interaction and does not require an API or secret key.

Developer: Muhammad Talha Islam
Address: Bashundhara R/A, Dhaka, Bangladesh
Phone: +880 1765-574555
