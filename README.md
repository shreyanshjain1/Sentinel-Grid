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

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Typecheck / Quality Commands

```bash
npm run clean
npm run typecheck
npm run lint
npm run build
```

Or run everything together:

```bash
npm run check
```

## Git Commands

```bash
git checkout -b fix/responsive-dashboard-layout
git add .
git commit -m "fix: improve SentinelGrid responsive dashboard layout"
git push -u origin fix/responsive-dashboard-layout
```

## PR Title

```txt
fix: improve SentinelGrid responsive dashboard layout
```

## PR Description

```md
## Summary
- Fixed dashboard overflow issues on laptop and tablet widths
- Updated the response area layout so the queue card no longer collides with the main incident copy
- Improved responsive behavior for alert cards, stat cards, exposure map, tabs, and hero visuals
- Moved large split layouts to wider breakpoints so mid-size screens stack cleanly
- Added safer text wrapping for long labels and incident descriptions

## Validation
- npm run clean
- npm run typecheck
- npm run lint
- npm run build
```

## Vercel Deployment

1. Push the project to GitHub.
2. Open Vercel and import the repository.
3. Keep the framework preset as Next.js.
4. Use the default build command:

```bash
npm run build
```

5. Deploy.

No environment variables are required.

## GitHub Repository Description

```txt
Premium responsive cybersecurity operations dashboard built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and static mock security data.
```
