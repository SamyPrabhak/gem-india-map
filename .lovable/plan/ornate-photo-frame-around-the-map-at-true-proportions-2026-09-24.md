# Ornate photo frame around the map, at true proportions

## Goal
The map already sits inside the user's ornate gold frame JPEG, but the current
CSS border-image technique stretches the carving (top/bottom edges stretched
wide, sides stretched tall), which is why it looks off. Rebuild the frame as a
pixel-accurate overlay so the ornate carving always renders at its natural
proportions, on every screen size.

## How it works
The frame PNG (736x965) has a transparent opening in the middle. Measured
opening: 449x676 px, with border bands of 141/150/145/138 px.

- Wrap the existing Leaflet map in a container with the frame's exact aspect
  ratio (736/965), same max width as today.
- Render the frame PNG as a full-size absolutely positioned image layer on top
  (pointer-events none, soft drop shadow for depth). Because it fills the
  container at native aspect, the carving never stretches.
- Position the map area absolutely inside the container using the opening's
  percentage insets (left 19.2%, top 15.5%, right 19.7%, bottom 14.3%), so the
  live map fills exactly the frame's opening at any width.
- RegionSearch, zoom controls and island diamonds stay untouched; they live
  inside the map area, so nothing is blocked.

## Files
- src/components/IndiaMap.tsx: replace the border-image wrapper with the
  overlay approach described above. No changes to map logic.

## Verification
- Playwright at desktop (1280px) and mobile (375px): frame and map edges align
  with no stretching, zoom controls and a state click still work, search opens.
- No console errors; build passes.
