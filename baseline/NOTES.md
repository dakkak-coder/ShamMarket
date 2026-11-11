# REA baseline — reference app

Captured before any clone work, from a shadow copy of `ShamMarket\web` because the live
working tree returns HTTP 500 on every route.

Shadow copy: `reference-run/` (git-ignored; 417 MB `node_modules` copy, not committed).
Two reference-only repairs were applied there, never to `ShamMarket\`:

1. `@utility card-hover:hover { ... }` → `@utility card-hover { &:hover { ... } }`
   (invalid utility name under Tailwind 4.3.3).
2. `app/list/[id]/page.tsx`: `../../components/Header` → `../../../components/Header`.

## Evidence

| Width | Route | Evidence ID |
|---|---|---|
| 1440 | `/` | `ev_0bafbea0e469753f…` (CDP probe, pre-scenario) |
| 1440 | home | see `evidence/1440-home.capture.json` |
| 1440 | new | `evidence/1440-new.capture.json` |
| 1440 | my | `evidence/1440-my.capture.json` |
| 1440 | detail | `evidence/1440-detail.capture.json` |
| 768 | home/new/my/detail | `evidence/768-*.capture.json` |
| 390 | home/new/my/detail | `evidence/390-*.capture.json` |

Each capture is a `capture_browser_scenario` result: 1200 ms settle, `ar-SY`, blocked service
workers, screenshot + DOM + accessibility + final URL.

Screenshots: `shots/<width>-<route>.png`.

## Route inventory (reference)

Real: `/`, `/new`, `/my`, `/list/[id]` (untracked, 500 by default).
Linked but missing: `/search`, `/auth`.

## Observed defects

- Invalid Tailwind utility → 500 on every route.
- Wrong Header import depth in the detail page → 500.
- `/logo.svg` requested, absent from `public/` → broken logo.
- Tajawal / Noto Kufi Arabic / Inter named in `globals.css`, never loaded.
- 390 px: header and grid overflow the viewport.
- Mobile: `App.js` is the Expo template, screens orphaned, `expo-router` missing from deps.
