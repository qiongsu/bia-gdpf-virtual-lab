# BIA–GDPF Virtual Learning Laboratory

Phase 1 prototype for a responsive virtual-learning application about xylem-inspired hydroponic filtration.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Phase 1 routes

- `/` — home, design system preview, learning path, and learner dashboard
- `/modules/module-4` — functional prototype of the virtual NFT experiment
- `/notebook` — notebook entry placeholder
- `/educator` — educator resources placeholder

## Content and branding notes

The interface uses Clemson-inspired purple (`#522D80`) and orange (`#F56600`) with water and plant support colors. No official Clemson logo asset is included in this repository because an approved logo file was not provided; the current lockup is a replaceable text-based lab mark for prototype use.

All Module 4 values and charts are explicitly illustrative. The 28-day duration, two temporal runs, 90 L reservoir, and four treatment definitions are centralized in `lib/experiment-config.ts`.

## Next phase

Add the remaining module content, local notebook persistence with JSON import/export, editable content files, datasets, references, QR links, and automated accessibility/responsive browser tests.
