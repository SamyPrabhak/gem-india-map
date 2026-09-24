# Decorative Frame Around the Map

Add an ornamental frame around the interactive map on the homepage, inspired by the uploaded manuscript border: a deep blue band with a gold floral vine, finished with a thin gold inner line. The uploaded image is used as visual reference only; the frame is recreated as original artwork.

## What changes

1. **New frame artwork** (`public/map-frame-vine.svg`)
   - A seamless, repeating SVG tile: gold floral vine (flowers, buds, leaves on a curling stem) drawn in the site's gold tones (`#C8A050`, `#C8A96E`, deep gold `#5C3D1A` accents) on a deep manuscript blue band.
   - Hand-drawn in code to echo the reference's style; no part of the uploaded image is embedded.

2. **New `MapFrame` component** (`src/components/MapFrame.tsx`)
   - Wraps the map (and its loading fallback) on the homepage.
   - Structure, outside in: thin gold hairline, deep blue vine band (repeating tile, ~28-36px wide), thin gold inner keyline, small ivory gutter, then the existing map.
   - Corners get a slightly larger floral medallion so the vine turns cleanly.
   - Rounded corners kept subtle so the Leaflet map still clips neatly inside.
   - Responsive: band width scales down slightly on mobile; frame does not affect map interactions, popups, or the gold map cursor.

3. **Homepage wiring** (`src/routes/index.tsx`)
   - Wrap the `IndiaMap` / `MapFallback` block in `MapFrame`.

## Design tokens

- Blue band: a new token `--frame-blue` (deep lapis blue, e.g. `#1E3F8F`-range) added to `src/styles.css`; all golds reuse existing tokens.
- No other pages, nav, or popup styling changes.

## Verification

- `bun run build` passes.
- Playwright check on `/` at desktop and mobile widths: frame renders evenly on all four sides, corners look clean, map still pans/zooms and region clicks still open the popup.
