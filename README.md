# SentinelGrid

SentinelGrid is a polished cybersecurity operations interface built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and local mock data. It presents a premium command-center experience with a sticky desktop sidebar, independently scrollable content pane, animated security alerts, asset coverage cards, response tabs, and a responsive layout for mobile, tablet, and desktop.

![Next.js](https://img.shields.io/badge/Next.js-App_Router-black?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178c6?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-ff69b4?style=for-the-badge)

## Highlights

- Premium dark security-operations interface
- Sticky desktop sidebar with independently scrollable dashboard pane
- Responsive layout tuned for phones, tablets, laptops, and wide monitors
- Animated alert queue, hover states, signal cards, and response tabs
- Local mock data only, with no backend or database required
- Clean component structure suitable for GitHub and Vercel

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

