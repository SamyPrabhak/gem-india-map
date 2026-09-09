# "View More" state jewellery pages

Add a gold "View More" button at the end of the Famous Jewellery Styles section in every region popup. It opens a dedicated page for that state, showing its jewellery styles in a larger, richer layout.

## What the visitor sees

- In the popup, below the list of styles: a "View More" button.
- Clicking it opens a full page, e.g. `/state/tamil-nadu`, with:
  - The state name as the page heading, capital underneath, in the same serif/gold styling as the site.
  - A short "About" paragraph (same text used in the popup).
  - All famous jewellery styles as large cards: bigger 4:5 image with the thin gold border, "Tap to enlarge" label, lightbox on click, name, description, and source link.
  - The state's Fun Facts below.
  - A "Back to Map" link returning to the home page.
- The popup keeps showing all styles as it does today.

## Technical notes

- New route file `src/routes/state.$slug.tsx` with `createFileRoute("/state/$slug")`.
- Slug helpers in a small module (e.g. `src/lib/regionSlug.ts`): name → slug and slug → region, matching against `jewelryData` keys; unknown slug renders a not-found message via `notFound()`.
- Page data comes from `getCsvRegion(name)` first, falling back to `jewelryData[name]` styles, mirroring `RegionPopup` logic; reuse `ImageLightbox`.
- Per-route `head()` with state-specific title, description, og:title, og:description.
- In `RegionPopup.tsx`, the button is a TanStack `<Link to="/state/$slug" params={{ slug }}>` that also closes the popup.
