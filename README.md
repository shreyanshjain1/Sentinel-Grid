# SentinelGrid

SentinelGrid is a polished frontend-only security operations interface built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

The project is designed as a portfolio-ready product UI: dark premium interface, sticky command sidebar, animated alert cards, responsive security sections, and static mock data that makes the app feel complete without needing a backend.

## Highlights

- Premium security operations dashboard interface
- Sticky desktop sidebar with independent main-pane scrolling
- Responsive mobile, tablet, laptop, and desktop layouts
- Animated alert cards and threat queue transitions
- Static security data from local mock files
- Reusable component structure
- TypeScript and ESLint-ready setup
- Vercel-ready Next.js project

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Folder Structure

```txt
sentinel-grid/
fix/responsive-dashboard-layout
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AlertStream.tsx
│   ├── AnimatedCard.tsx
│   ├── CommandHero.tsx
│   ├── DefenseCards.tsx
│   ├── HoverLab.tsx
│   ├── MainNav.tsx
│   ├── ScenarioTabs.tsx
│   └── StickySidebar.tsx
├── data/
│   └── security-data.ts
├── lib/
│   └── utils.ts
├── public/
├── eslint.config.mjs
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```