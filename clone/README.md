# Sham Market — clone

A working rebuild of the Sham Market classifieds product (شام ماركت), web only.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

Requires Node.js 20.9+ (Next 16). Tested with Node 26.13 and the pinned Next 16.4.6.

## What works

- Home with hero, 10 category pills and the newest 8 listings
- Search with query, category and location filters, result count and empty state
- Listing detail: gallery (up to 8 photos), price, negotiable chip, seller card, description,
  views/contacts, related listings
- Create listing with inline validation and a local photo picker
- My listings: stats, rows, status, view and delete, empty state
- Mock sign-in / sign-up tabs
- Branded 404

Data is mock-only (no backend), matching the reference: 8 seed listings plus 3 "my" listings,
and anything you create is stored in `localStorage`.

## Brand constraints

Damascus blue `#2c4a72`/`#1f3654`/`#15253b`, terracotta `#e05a3a`/`#c4462c`, saffron `#f5a82c`,
olive `#3f8a3f`/`#f4f8f4`, radii 6/10/16, Arabic-first RTL, Noto Kufi Arabic / Tajawal / Inter.
The logo is used unmodified from `design/logo.svg`. No colours are hard-coded in components; they
come from the Tailwind `@theme` tokens in `app/globals.css`.

## Layout

```
app/           routes: / · search · list/[id] · new · my · auth · not-found
components/    Header, Footer, CategoryPills, ProductCard, PriceTag, ListingImage,
               Gallery, SearchFilters, ListingRow, StatsCard, PhotoDropzone, EmptyState
lib/           types, seed data, repository/query helpers, localStorage store, formatting
public/        logo.svg (identical to design/logo.svg)
docs/          spec.md (contract + constraints), parity.md (REA measurements)
```

## Fidelity notes

`docs/parity.md` records what changed against the reference and why, with REA evidence IDs.
The main intentional changes: the three missing routes now exist, real Arabic webfonts load,
the logo file exists, and the mobile layout no longer overflows.
