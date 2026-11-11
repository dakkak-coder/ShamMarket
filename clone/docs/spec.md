# Sham Market clone — spec

Source of truth: `D:\Project\sham-market\ShamMarket` (reference, untouched) plus REA baseline evidence
in `..\..\baseline\`.

## Product

A Syrian classifieds marketplace (Kleinanzeigen-style) — Arabic-first, RTL, Damascus-inspired identity.
Web only in this build; mobile is out of scope (see "Not built").

## Routes

| Route | Purpose | Data |
|---|---|---|
| `/` | Hero, category pills, newest 8 listings | seed |
| `/search` | Query + category + location filters, results count, empty state | seed |
| `/list/[id]` | Gallery (up to 8 photos), price, negotiable chip, seller, description, views/contacts, CTAs, related | seed, static params |
| `/new` | Create listing: title, category, price, negotiable, description, 8-photo picker, location; inline validation | localStorage |
| `/my` | Stats (listings / views / contacts), rows with status, view + delete, empty state | seeds + localStorage |
| `/auth` | Sign-in / sign-up tabs (mock, no network) | none |
| `/_not-found` | Branded 404 | — |

## Constraints carried over (verified)

| Constraint | Value | Verification |
|---|---|---|
| Stack | Next 16.4.6, React 19.3.0, Tailwind 4.3.3, TS 5, ESLint 9 | `package.json`; `npm run build` |
| Direction | `<html lang="ar" dir="rtl">` | fetched all 6 routes: `lang=ar dir=rtl` |
| Primary | `#2c4a72` / hover `#1f3654` / active `#15253b` | `app/globals.css` `@theme` |
| Accent | `#e05a3a` / `#c4462c` | idem |
| Highlight | `#f5a82c` (`#e09219` strong) | idem |
| Trust | `#3f8a3f`, bg `#f4f8f4` | idem |
| Type | Noto Kufi Arabic body, Tajawal display, Inter Latin | `layout.tsx` stylesheet + `@theme --font-*` |
| Radius | 6 / 10 / 16 / full | `--radius-sm/md/lg` |
| Brand rules | no Kleinanzeigen blue/orange, no copied card layout, logo unmodified | no hex literals in components; logo SHA-256 identical to `design/logo.svg` |
| Categories | 10 (all + 9) | `lib/data.ts` |
| Locations | 8 Syrian areas | `lib/data.ts` |
| Listing fields | id, title, price, image, location, time + negotiable, status, views, contacts | `lib/types.ts` |
| Photos | max 8 | `components/PhotoDropzone.tsx` |
| Data | no backend, mock data only | `lib/data.ts`, `lib/store.ts` |

## Data model

```ts
Listing { id, title, category, price, negotiable, location, city,
          time, description, image, images[], status: "active"|"expired",
          views, contacts, seller { name, verified, memberSince } }
```

Seed: 8 public listings (same titles/prices/locations as the reference) + 3 "my" listings
(2 active, 1 expired) matching the reference stats page.

## Differences from the reference (intentional)

1. `/search`, `/list/[id]`, `/auth` exist instead of 404.
2. `public/logo.svg` present (reference linked `/logo.svg` with no file).
3. Tajawal / Noto Kufi / Inter are actually loaded (reference named them but loaded none).
4. `@utility card-hover:hover` replaced with the valid nested form — the reference's current
   `globals.css` fails to compile under Tailwind 4.3.3 and returns 500 on every route.
5. Responsive fixes: header wraps, grid stays inside the viewport at 390 px, images have a
   branded fallback tile when the photo host is unreachable.
6. New listings persist in `localStorage` so `/new` → `/my` is a working flow.

## Not built

- Expo mobile app (reference mobile is a scaffold: `App.js` is the template, screens are orphaned,
  `expo-router` missing from `package.json`). No device/APK, so REA cannot verify it.
- Real auth, messaging, uploads, moderation, payments.

## Known limitations

- Unknown `/list/<id>` renders the 404 UI but the streamed response keeps HTTP 200 (PPR).
- Photos are previewed locally only; the listing stores no image bytes.
- `tel:` CTA uses a placeholder number.
