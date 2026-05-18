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
```

## Install and run

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal.

## Typecheck / quality commands

```bash
npm run typecheck
npm run lint
npm run build
```

Combined check:

```bash
npm run check
```

## Git commands

```bash
git checkout -b fix/product-copy-responsive-ui
git add .
git commit -m "fix: refine SentinelGrid product UI and responsive layout"
git push -u origin fix/product-copy-responsive-ui
```

## Vercel deployment

1. Push the branch to GitHub.
2. Open Vercel and choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the framework preset as **Next.js**.
5. No environment variables are required.
6. Click **Deploy**.

## Suggested GitHub repo description

```txt
Premium cybersecurity operations dashboard built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and responsive mock security data.
```

## PR title

```txt
fix: refine SentinelGrid product UI and responsive layout
```

## PR description

```md
## Summary
- Removed copy that made the interface feel like a generated design demo
- Reworked the dashboard language so SentinelGrid feels like an actual security product
- Fixed the response tab layout where large text could collide with the side card
- Improved mobile and tablet responsiveness across the hero, nav, alerts, and content grid
- Kept the sticky desktop sidebar while allowing the main pane to scroll independently

## Validation
- npm run typecheck
- npm run lint
- npm run build
```

## Quality / Typecheck Commands

```bash
npm run typecheck
npm run lint
npm run build
```

Or run the full check in one command:

```bash
npm run check
```

If lint ever reports files inside `.next`, clear the generated build output and run lint again:

```bash
npm run clean
npm run lint
```

## Git Commands

```bash
git checkout -b fix/eslint-generated-files
git rm -r --cached .next out build dist 2>/dev/null || true
git add .
git commit -m "fix: exclude generated Next files from lint"
git push -u origin fix/eslint-generated-files
```

## PR Title

```txt
fix: exclude generated Next files from lint
```

## PR Description

```md
## Summary
- Updated ESLint flat config to ignore generated Next.js output and build artifacts
- Narrowed the lint script to source folders only
- Added a clean script for removing generated build folders before validation
- Prevented `.next` files from creating false lint errors locally or during CI

## Validation
- npm run typecheck
- npm run lint
- npm run build
```
