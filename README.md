# SentinelGrid

A premium frontend-only cybersecurity command center built for portfolio screenshots, GitHub, and Vercel. This iteration is intentionally visual-first: sticky sidebar, animated hero, 3D CSS objects, random threat popups, hover tooltips, scene tabs, glass panels, and responsive dashboard sections.

![SentinelGrid preview](https://img.shields.io/badge/Frontend-Showcase-f2b84b?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-App_Router-black?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178c6?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-ff69b4?style=for-the-badge)

## What makes it portfolio-ready

- Cybersecurity monitoring concept with a stronger technical feel than a generic landing page
- Sticky desktop sidebar while the main dashboard pane scrolls independently
- 3D CSS cube, floating virus models, animated scan line, ticker strip, and visual threat popups
- Four-tab scenario switcher for a clean, recruiter-friendly interaction model
- Hover labels, pop-up text, micro animations, polished card states, and responsive layouts
- Frontend-only architecture using local mock data with no backend or database required

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Local mock data

## Folder structure

```txt
sentinel-grid/
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ AlertStream.tsx
│  ├─ AnimatedCard.tsx
│  ├─ CommandHero.tsx
│  ├─ DefenseCards.tsx
│  ├─ HoverLab.tsx
│  ├─ MainNav.tsx
│  ├─ ScenarioTabs.tsx
│  └─ StickySidebar.tsx
├─ data/
│  └─ security-data.ts
├─ lib/
│  └─ utils.ts
├─ public/
├─ eslint.config.mjs
├─ next.config.mjs
├─ package.json
├─ postcss.config.mjs
├─ tailwind.config.ts
└─ tsconfig.json
```