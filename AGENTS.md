# Project Architecture

- Keep `@tanstack/react-start`, `@tanstack/react-router`, and `@tanstack/router-plugin` on mutually compatible releases because mismatched versions can generate invalid SSR environment definitions.
- Dynamically import the Vite configuration helper only after sanitizing unresolved Lovable environment placeholders because static imports capture them before module code runs.