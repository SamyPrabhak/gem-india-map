## Jewels of India — Interactive Political Map

A single-page experience where visitors explore India's jewelry heritage by clicking states, union territories, or islands on an interactive map. Each region opens an elegant popup describing its signature jewelry.

### Page layout (`/`)

1. **Header** — "Jewels of India" wordmark in serif, short tagline ("Explore the regional jewelry traditions of India").
2. **Tabs** — States · Union Territories · Islands. Switching a tab highlights only that group on the map and dims the rest; clicks on dimmed regions are disabled.
3. **Interactive map** — Leaflet map centered on India, custom GeoJSON of all 28 states, 8 UTs, and island groups (Andaman & Nicobar, Lakshadweep). Regions render as gold-outlined polygons on an ivory canvas; hover raises opacity + shows region name tooltip; click opens popup.
4. **Popup card** — Region name (serif heading), jewelry type (e.g., "Temple Jewelry", "Kundan", "Meenakari"), 2–3 sentence description. Close button; clicking elsewhere on the map closes it.
5. **Legend / footer** — small note on sources and a "Reset view" button.

### Visual theme — Elegant gold & ivory

- Background ivory `#FBF7EE`, deep charcoal text `#2A2622`.
- Accent gold `#C9A24B` for borders, hover, active tab underline.
- Serif headings (Cormorant Garamond), sans-serif body (Inter).
- Subtle paper-texture background; soft drop shadow on popup card.

### Content scope

Curated jewelry blurb for every state/UT/island group, e.g.:
- Tamil Nadu — Temple Jewelry
- Rajasthan — Kundan & Meenakari
- West Bengal — Filigree & Shola pith ornaments
- Kerala — Palakka Mala
- Maharashtra — Thushi & Kolhapuri Saaj
- Jammu & Kashmir — Dejhoor
- Delhi — Polki
- Andaman & Nicobar — Shell & coral jewelry
- Lakshadweep — Coral and shell ornaments
- …and so on for every region (~38 entries total).

### Interactions

- Tab switch → map filter + auto-fit bounds to that group.
- Region hover → gold fill at 60% opacity + name tooltip.
- Region click → Leaflet popup with styled card; map gently pans so popup is centered.
- Mobile: map fills viewport width; popup becomes a bottom sheet.

### Technical notes

- Stack: TanStack Start route `src/routes/index.tsx`, `react-leaflet` + `leaflet` for the map.
- GeoJSON: bundled static file `src/data/india.geojson` (states + UTs + islands with `type` property: `state` | `ut` | `island`).
- Data: `src/data/jewelry.ts` keyed by region name, holding `{ name, jewelryType, description, group }`.
- Components: `IndiaMap.tsx`, `RegionPopup.tsx`, `GroupTabs.tsx`.
- Leaflet CSS imported in the route (client-only); map rendered behind a `typeof window` guard to avoid SSR issues.
- No backend, no auth — fully static.

### Out of scope (can add later)

Images per region, search, language toggle, audio pronunciations, deeper history pages.
