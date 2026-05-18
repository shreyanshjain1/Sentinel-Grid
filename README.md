# SentinelGrid

SentinelGrid is a polished frontend-only security operations interface built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

The project presents a modern command center experience with a sticky desktop sidebar, animated security visuals, responsive dashboard sections, interactive response panels, and static mock data that makes the interface feel like a complete product without requiring a backend.

## Highlights

- Premium dark security operations interface
- Sticky desktop command sidebar with independent main-pane scrolling
- Interactive incident response workspace with working tabs and action states
- Redesigned live signal stream with acknowledgement and escalation actions
- Animated custom cursor on desktop pointer devices
- Responsive layouts for mobile, tablet, laptop, and desktop screens
- Reusable component structure with local mock security data
- Built with modern frontend tooling and clean TypeScript components

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Product Sections

feat/redesign-alert-stream-custom-cursor
### Command Overview
A high-impact dashboard header with status indicators, operational metrics, and animated security visuals.

### Signal Intake
A focused event stream that lets users switch between security signals, pause rotation, acknowledge alerts, and escalate items.

### Defense Cards
Compact security metric cards for blocked threats, active cases, endpoint coverage, and event volume.

### Incident Response Workspace
A responsive response module with selectable scenarios, checklist interactions, action buttons, and queue summaries.

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

