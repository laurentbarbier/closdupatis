# Copilot Instructions — Hotel House Alpes Mancelles

## Commands

```bash
npm run dev           # local dev server
npm run build         # production build — run after any code change
npm run fix:figma-assets  # fix broken Figma asset import paths
```

No dedicated test or lint scripts exist. Use `npm run build` as the verification step.

## Architecture

Single-page vitrine site (React 19 + TypeScript + Vite).

**Routing** (`src/main.tsx`): `HashRouter` with two routes:
- `/` → `App.tsx` — main page
- `/guide-arrivee` → `ArrivalGuide.tsx`

**Main page** (`src/app/App.tsx`): sections stacked vertically in order:
`Hero → ReviewHighlight → Features → Gallery → Amenities → Activities → Location → Contact → Footer`

Each section is an isolated component in `src/app/components/`.

**UI components**: shadcn/ui primitives live in `src/app/components/ui/` — prefer reusing these before adding new dependencies.

**Styling**: Tailwind CSS v4 via `@tailwindcss/vite`. Design tokens are CSS variables defined in `src/styles/theme.css` and bridged to Tailwind via `@theme inline`. Always use those tokens (e.g. `bg-background`, `text-primary`) instead of hardcoded colours.

**Path alias**: `@` resolves to `src/`.

## Key Conventions

- **TypeScript**: explicit types for props and shared data; functional components only.
- **Styling**: Tailwind utilities first. Avoid inline styles. Respect existing theme variables before adding new CSS.
- **Icons**: `lucide-react` is preferred; `@mui/icons-material` is available as fallback.
- **Images**: always provide an `alt` attribute. Use `src/app/components/figma/ImageWithFallback.tsx` for images that may have broken paths. Do not delete files from `src/assets/` without verifying they are unused.
- **Mobile-first**: all public sections must be responsive; no overlapping elements on mobile.
- **Content language**: French. Keep a professional, welcoming tone. Do **not** invent factual information (address, rates, distances, availability, amenities) — flag missing data for the user to supply.

## Agent Profiles

For specialised tasks, read the matching file before acting:

| Task type | File |
|---|---|
| Code, refactor, UI, bug | `.agents/devexpert.md` |
| Content, booking flow, local activities | `.agents/locationexpert.md` |
| Product framing / PR-FAQ | `.agents/working-backwards-coach.md` |
