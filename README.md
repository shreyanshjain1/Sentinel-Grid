# SentinelGrid

SentinelGrid is a polished frontend-only security operations interface built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

The project presents a modern command center experience with a sticky desktop sidebar, animated security visuals, responsive dashboard sections, interactive response panels, and static mock data that makes the interface feel like a complete product without requiring a backend.

## Highlights

- Premium dark security operations interface
- Sticky desktop command sidebar with independent main-pane scrolling
- Mobile-friendly top navigation for switching product areas
- Interactive Pulse, Threats, Assets, and Playbooks sections
- Live signal intake with acknowledgement and escalation actions
- Incident response board with working tabs and action states
- Asset coverage and integration health panels
- Playbook workspace with selectable runbooks and task progress
- Animated custom cursor on desktop pointer devices
- Responsive layouts for mobile, tablet, laptop, and desktop screens
- Reusable component structure with local mock security data

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

### Threats
A focused threat desk for filtering detections, reviewing active incidents, and inspecting selected case details.

### Assets
A service and endpoint coverage workspace with control scores, integration cards, and selected asset health details.

### Playbooks
A guided response area for selecting runbooks, tracking steps, and presenting static response workflows as a polished product screen.

## Purpose

This project is designed as a frontend portfolio piece that demonstrates UI composition, responsive layouts, stateful interactions, animation polish, and component-driven product design.
=======
### Asset Graph
A decorative security graph panel with hoverable nodes and integration cards.
=======
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