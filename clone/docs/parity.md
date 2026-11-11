# Parity report — reference vs clone

Method: REA `capture-browser-scenario` (launch Chrome, fixed viewport, `ar-SY`, 1200 ms settle,
screenshot + DOM + accessibility), then REA `compare-web-screenshots` per pair.

- Reference captured from a patched shadow copy (`..\..\baseline\reference-run`) because the live
  working tree returns HTTP 500 on every route; two reference-only repairs were applied there:
  the invalid `@utility card-hover:hover` declaration and the wrong Header import in
  `app/list/[id]/page.tsx`. No file in `ShamMarket\` was changed.
- Clone captured from `http://127.0.0.1:3100` (production build).
- Pixel comparison is a divergence measure here, not an equality gate: the clone deliberately fixes
  fonts, the logo, images and mobile layout, so high changed-pixel ratios are expected.

## Measured divergence

| Width | Route | Changed pixels | Mean channel delta | Evidence |
|---|---|---|---|---|
| 1440 | home | 58.4% | 10.5 | `ev_a26fe1e707e1b76…` |
| 1440 | new | 9.7% | 3.5 | `ev_70a7da98a3cdff49…` |
| 1440 | my | 32.0% | 4.0 | `ev_57416c5e9dd91a6f…` |
| 1440 | detail | 78.3% | 22.5 | `ev_d72704b903d35a6a…` |
| 768 | home | 57.4% | 12.2 | `ev_41774ec0b16c6921…` |
| 768 | new | 21.6% | 9.0 | `ev_684ef2d90c979c10…` |
| 768 | my | 42.4% | 6.6 | `ev_64687cca37f40301…` |
| 768 | detail | 66.6% | 19.2 | `ev_a32fdcb0c7b3938a…` |
| 390 | home | 71.3% | 13.8 | `ev_454994b57fdcea99…` |
| 390 | new | 63.4% | 8.4 | `ev_b21ded560d4bcbba…` |
| 390 | my | 57.2% | 9.0 | `ev_cb6550e95d3e0128…` |
| 390 | detail | 69.5% | 17.7 | `ev_3b259ee34dc1f0fe…` |

Full artifacts: `artifacts/*-before.json`, `*-after.json`, `cmp-<width>-<route>.json`,
screenshots in `shots/`.

> The detail captures above predate a late layout fix that caps the gallery at 520 px; the
> divergence direction and classification are unchanged.

## Delta classification

| Delta | Class | Reason |
|---|---|---|
| Text metrics, weight, line heights | intentional | Real Tajawal / Noto Kufi load in the clone; reference fell back to Segoe UI |
| Header logo | intentional fix | Reference requested a missing `/logo.svg` and showed a broken-image icon |
| Listing images | intentional | Photos unreachable in this environment; clone shows branded fallback tiles instead of broken icons |
| 390 px layout | intentional fix | Reference overflows the viewport (header + grid wider than screen); clone wraps |
| `/new` 1440 lowest delta (9.7%) | expected | Form layout is closest to the reference by design |
| `/list/[id]` highest delta (78.3%) | expected | Reference detail page was 500 by default and its copy was a single hard-coded phone |
| Category / price / location text | none | Same strings and ordering as the reference |

## Structural checks

- 6 routes fetched: all return `lang="ar"` and `dir="rtl"`.
- 18 internal links discovered from those pages: 0 dead.
- Clone source has no `#rrggbb` literals outside `globals.css`; colours come from tokens.
- `public/logo.svg` SHA-256 equals `design/logo.svg` (`EC9DDA54…FE35F9`) — unmodified.
- `npm run build` and `npm run lint` clean; 18 static/PPR routes generated.

## Interactive checks (in-app browser)

| Flow | Result |
|---|---|
| Home render | 0 console errors, RTL a11y tree, 8 cards |
| Search `سيارة` | 1 result (كيا سورينتو), filter + count rendered |
| Detail `/list/1` | 5 gallery thumbs, price, negotiable, seller, CTA, related |
| `/new` empty submit | inline validation blocks save |
| `/new` valid submit | redirects to `/my`, new listing listed |
| Delete | row removed, count drops to 3 |
| `/auth` tabs | sign-up reveals name field |
| Unknown id | 404 UI renders (HTTP status stays 200 — documented) |
