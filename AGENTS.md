# Project Architecture

- Keep `@tanstack/react-start`, `@tanstack/react-router`, and `@tanstack/router-plugin` on mutually compatible releases because mismatched versions can generate invalid SSR environment definitions.
- Dynamically import the Vite configuration helper only after sanitizing unresolved Lovable environment placeholders because static imports capture them before module code runs.
- Fit the Leaflet map when feature data arrives and when its container resizes so regions remain framed across screen sizes.
- Keep shared not-found UI outside route files so route splitting does not remove a component referenced by another component.
- Use StylePhoto for spreadsheet jewellery images on both map popups and state pages so failed photos share the same fallback and lightbox behavior.
