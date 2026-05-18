# SentinelGrid

SentinelGrid is a premium frontend-only security operations interface built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

The project presents a polished command-center experience with responsive product sections, stateful interactions, animated security visuals, and static mock data that makes the interface feel like a complete cybersecurity product without requiring a backend.

## Highlights

- Premium dark security operations interface
- Sticky desktop command sidebar with independent main-pane scrolling
- Mobile-friendly product navigation
- Interactive Pulse, Threats, Assets, and Playbooks sections
- Live signal intake with acknowledgement and escalation states
- Incident response board with working tabs and action controls
- Asset coverage cards and integration health details
- Playbook workspace with selectable runbooks and task progress
- Animated custom cursor on desktop pointer devices
- Responsive layouts tuned for portfolio presentation
- Clean component structure powered by local mock security data

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

### Threats
A focused threat desk for filtering detections, reviewing active incidents, searching cases, and inspecting selected case details.

### Assets
A service and endpoint coverage workspace with control scores, integration cards, asset health details, and clear coverage states.

### Playbooks
A guided response area for selecting runbooks, tracking steps, and presenting repeatable security workflows as a polished product screen.

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