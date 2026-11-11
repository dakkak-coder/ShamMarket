# Decisions

1. **Web only.** The mobile app cannot run: `App.js` is the Expo template, `src/*.tsx` screens are
   orphaned, and `expo-router` is imported and listed in `app.json` but absent from `package.json`.
   REA cannot verify mobile without a device build, so shipping it would be unverified.
2. **Build the intended product, not the broken state.** `/search`, `/list/[id]` and `/auth` were
   linked from the reference UI but 404ed. The clone implements them.
3. **Keep brand and name.** Same tokens, logo, categories, locations and Arabic copy.
4. **Reference stays read-only.** Its working tree has uncommitted changes and returns 500 on every
   route. Baseline capture used a shadow copy under `baseline/reference-run` with two reference-only
   repairs (invalid Tailwind utility, wrong Header import), documented in `docs/parity.md`.
5. **REA's role.** REA captured the running reference (screenshots/DOM/a11y at 390/768/1440) and
   measured divergence; it does not read source repositories. Clone code was written fresh here.
6. **No backend, per the app's own constraint.** Created listings persist in `localStorage`;
   photos are previewed only, because there is no upload endpoint.
7. **Unknown listing id** renders the 404 UI but keeps HTTP 200 under Next 16 partial
   prerendering. Accepted and documented rather than disabling PPR.
8. **Node versions.** Next runs on the system Node 26.13. REA's MCP server stays pinned to the
   portable Node 24.22.1 at `D:\Project\.tools\node-v24.22.1-win-x64`, because REA's source loader
   requires the version pinned in its `.nvmrc`.
