# Interactive brand scrolls

## What will change
- Start every brand scroll closed as a compact rolled parchment.
- Place the brand logo prominently above the closed roll, with the brand name and a clear open control.
- Let each scroll open and close independently.
- Reveal the location, description, tags, and website link inside the unrolled parchment.
- Animate the parchment height and content gently while respecting reduced-motion settings.
- Preserve the current search, filters, spacing, brand data, and individual-scroll styling.

## Technical details
- Add an accessible per-card expanded state using `aria-expanded` and `aria-controls`.
- Reuse the existing design-system button component for the open and close control.
- Add dedicated closed and open scroll styles to the shared stylesheet.
- Verify the interaction and layout on the Directory page, then confirm the preview build is clean.
