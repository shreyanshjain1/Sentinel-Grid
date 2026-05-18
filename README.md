# SentinelGrid — Cybersecurity Command Center

A premium frontend-only cybersecurity monitoring dashboard built for portfolio presentation. SentinelGrid is designed to look like a real 2026 SaaS product interface, with polished dark UI, responsive layouts, reusable components, mock security telemetry, animations, filters, cards, tables, progress sections, and clean TypeScript structure.

![Next.js](https://img.shields.io/badge/Next.js-App%20Router-black?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-cc66ff?style=for-the-badge&logo=framer)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)

## Why this project stands out

SentinelGrid is not a basic landing page. It demonstrates frontend product thinking through a complete dashboard experience: navigation, telemetry cards, responsive data views, polished filtering, empty states, animated panels, glass effects, and realistic mock security data.

## Features

- Modern dark SaaS interface
- Responsive sidebar and top navigation
- Premium hero/dashboard overview section
- Animated statistic cards
- Mock global threat pressure panel
- Timeline-style security events
- Searchable and filterable incident queue
- Empty state when filters return no incidents
- Control health progress cards
- Response playbook progress cards
- Integration status grid
- Framer Motion micro-animations
- Local mock data only, no backend required
- Clean folder structure ready for GitHub and Vercel

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Local mock data files

## Folder Structure

```txt
sentinel-grid/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AnimatedCard.tsx
│   ├── ControlScore.tsx
│   ├── Header.tsx
│   ├── HeroPanel.tsx
│   ├── IncidentTable.tsx
│   ├── Integrations.tsx
│   ├── Sidebar.tsx
│   ├── StatsGrid.tsx
│   └── ThreatMap.tsx
├── data/
│   └── security-data.ts
├── lib/
│   └── utils.ts
├── public/
├── .gitignore
├── eslint.config.mjs
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

6. Use the default output settings.
7. Click **Deploy**.

No environment variables are needed because this is a frontend-only project.
