# Project Architecture

- Keep `@tanstack/react-start`, `@tanstack/react-router`, and `@tanstack/router-plugin` on mutually compatible releases because mismatched versions can generate invalid SSR environment definitions.
- Sanitize unresolved Lovable environment placeholders before creating Vite configuration because esbuild rejects placeholder expressions as define values.