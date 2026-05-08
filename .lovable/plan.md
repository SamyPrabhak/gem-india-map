## Goal

Add a search bar **inside the map area** (overlaid on the map) so users can type a state or island name, pick from suggestions, and have the map fly to it and open the popup.

## UX

- Position: floating overlay in the **top-left corner of the map**, with a small margin (~12px) and a soft shadow so it sits above the tiles.
- Width: ~280px on desktop, shrinks responsively on mobile (max 70% of map width).
- Input: text field with search icon, placeholder "Search a state or island…".
- Suggestions dropdown: appears directly below the input, ivory background, gold border, up to 6 matches. Each row shows the region name + small "State" / "Islands" tag.
- Selecting a suggestion (click or Enter):
  1. Switches the active tab to that region's group.
  2. Map flies/zooms to that region with a smooth animation.
  3. The detail popup opens for that region.
- Keyboard: Up/Down navigates suggestions, Enter selects, Escape closes.
- Empty state: "No regions match".

## Technical approach

1. **New component** `src/components/RegionSearch.tsx`
   - Controlled input + suggestion list (built from existing shadcn `Input`, no new deps).
   - Builds options from `Object.values(jewelryData)` (name + group).
   - Props: `onPick(regionKey: string, group: RegionGroup)`.
   - Styled to look good as a map overlay (ivory bg, gold border, shadow).

2. **Map integration** in `src/components/IndiaMap.tsx`
   - Render `<RegionSearch />` as an absolutely-positioned child inside the map container div (top-left, `z-[1000]` to sit above Leaflet panes).
   - Add internal `FlyToRegion` component that uses `useMap()` and reacts to a `focusRegion` state:
     - For polygon regions: get bounds from the GeoJSON feature → `map.flyToBounds(bounds, { padding: [40, 40], maxZoom: 6 })`.
     - For Lakshadweep / Andaman: fly to the existing CircleMarker coords at zoom ~6.
   - When the user picks a region: update `focusRegion`, call `onSelect(name)` (existing prop) so the popup opens, and call a new `onGroupChange(group)` prop so the page can switch tabs.

3. **Page wiring** in `src/routes/index.tsx`
   - Pass `onGroupChange={setGroup}` to `IndiaMap`.
   - Existing `onSelect={setSelected}` already opens the popup.

## Out of scope

- Fuzzy matching libraries (simple `includes` is enough for ~30 regions).
- Search across jewelry styles or fun facts.
- URL state / shareable links.

## Files touched

- new: `src/components/RegionSearch.tsx`
- edit: `src/components/IndiaMap.tsx` (overlay search, internal fly-to, new `onGroupChange` prop)
- edit: `src/routes/index.tsx` (pass `onGroupChange`)
