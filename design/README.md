# 🏛️ Sham Market — Syrian Visual Identity

> **جديد، سوري، موثوق.**

This is a **new** brand identity — not a copy of Kleinanzeigen.
It draws inspiration from Damascus: the blue sky over the Umayyad Mosque,
the warm terracotta of old walls, the saffron spice markets, and the
geometric Arabesque patterns.

## Usage

Import tokens directly in your web or mobile project:

```ts
import { tokens, palette } from '@/design/colors';
import { fonts, typeScale } from '@/design/typography';
```

## Brand Rules

| Element | Rule |
|---------|------|
| **Primary color** | Damascus Blue `#2c4a72` |
| **Accent** | Terracotta `#e05a3a` |
| **Highlight** | Saffron Gold `#f5a82c` |
| **Trust** | Olive Green `#3f8a3f` (used for verified, success) |
| **Logo** | SVG in `/design/logo.svg` — do not stretch or recolor |
| **Font** | Arabic: Noto Kufi Arabic / Tajawal · English: Inter |
| **Radius** | `6px` small, `10px` medium, `16px` large |
| **RTL** | All layouts are Right-to-Left native (Arabic default) |

## Logo

- Dark background: use full-color version
- Light background: use white-on-dark variant
- Never apply drop-shadows, gradients, or rotations

## Do Not

- ✖ Do not use Kleinanzeigen's blue/orange
- ✖ Do not copy Kleinanzeigen's exact card layout
- ✖ Do not use generic sans-serif (Arial/Helvetica) for Arabic

## License

MIT — free to use, modify, distribute. No attribution required for the brand itself.
